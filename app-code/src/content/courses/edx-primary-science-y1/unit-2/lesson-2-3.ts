import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "edps1-u2-lesson-2-3",
  code: "2-3",
  title: "Forces and Motion",
  goal: "I CAN describe pushes, pulls and how objects move.",
  standards: ["Year 1 Science: Forces and motion"],
  vocabulary: [
    { term: "Push", definition: "A force that moves something away." },
    { term: "Pull", definition: "A force that moves something towards." },
    { term: "Force", definition: "A push or pull that can change motion." },
    {
      term: "Motion",
      definition: "Movement — how things move: fast, slow, stop, start.",
    },
  ],
  concepts: [
    {
      id: "edps1-u2-forces",
      title: "Pushes and pulls",
      skill: "Identify pushes and pulls and their effects.",
      lesson: {
        sections: [
          {
            heading: "Pushes and pulls",
            body: "A **push** moves things away (pushing a swing, pushing a door open). A **pull** moves things towards (pulling a door, tugging a rope). Both are forces.",
          },
          {
            heading: "Effects of forces",
            body: "Forces can: start movement (kick a ball), stop movement (catch a ball), change direction (bounce a ball), change speed (push harder = faster).",
          },
        ],
        keyFormulas: [
          { name: "Push", statement: "Moves away" },
          { name: "Pull", statement: "Moves towards" },
          {
            name: "Force effects",
            statement: "Start, stop, change direction/speed",
          },
        ],
        workedExample: {
          problem: "Is opening a drawer a push or a pull?",
          solution: "Pull — you pull the handle towards you.",
        },
      },
      questions: [
        {
          id: "edps1-u2-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a push?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Move towards" },
              { id: "b", text: "Move away" },
              { id: "c", text: "Stay still" },
              { id: "d", text: "Fall down" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Push", statement: "Moves away." },
            ],
            steps: [{ reasoning: "Push = away.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Move away",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "edps1-u2-fo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a pull?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pushing a swing" },
              { id: "b", text: "Pulling open a drawer" },
              { id: "c", text: "Kicking a ball" },
              { id: "d", text: "Throwing a ball" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pull", statement: "Pull = towards." },
            ],
            steps: [
              { reasoning: "Identify pull.", marks: 1, markCode: "M" },
              { reasoning: "Answer: pulling drawer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pulling open a drawer",
            commonErrors: ["Wrong action."],
          },
        },
        {
          id: "edps1-u2-fo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two effects a force can have on a moving object.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Force effects",
                statement: "Stop, change direction, change speed.",
              },
            ],
            steps: [
              { reasoning: "Effect 1.", marks: 1, markCode: "A" },
              { reasoning: "Effect 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Stop it; change direction'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u2-fo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a goalkeeper stops a football using forces.",
          parts: [
            { label: "a", prompt: "Force used", marks: 1 },
            { label: "b", prompt: "Effect on ball", marks: 1 },
            { label: "c", prompt: "Direction of force", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Forces in sport",
                statement: "Goalkeeper pushes/pulls ball to stop it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Push or pull used.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Ball stops.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Direction explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Coherent explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Goalkeeper pushes the ball (or catches/pulls it) to stop its motion",
            commonErrors: ["Incomplete explanation."],
          },
        },
      ],
    },
    {
      id: "edps1-u2-motion",
      title: "Movement and patterns",
      skill: "Describe how objects move and identify movement patterns.",
      lesson: {
        sections: [
          {
            heading: "Types of movement",
            body: "Objects move in different ways: **fast/slow**, **straight/curved**, **up/down**, **spin**, **bounce**. We can describe movement: 'The ball rolled quickly in a straight line.'",
          },
          {
            heading: "Patterns",
            body: "Some movements repeat in patterns: the sun rises and sets daily, seasons change yearly, the moon phases cycle. Patterns help us predict what happens next.",
          },
        ],
        keyFormulas: [
          {
            name: "Movement",
            statement: "Fast, slow, straight, curved, bounce",
          },
          { name: "Pattern", statement: "Repeating sequence" },
          { name: "Predict", statement: "Guess what comes next" },
        ],
        workedExample: {
          problem: "Describe a bouncing ball's movement.",
          solution:
            "It bounces up and down, getting lower each time until it stops.",
        },
      },
      questions: [
        {
          id: "edps1-u2-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word describes movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour" },
              { id: "b", text: "Motion" },
              { id: "c", text: "Shape" },
              { id: "d", text: "Size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motion", statement: "Movement." },
            ],
            steps: [
              { reasoning: "Motion = movement.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Motion",
            commonErrors: ["Wrong term."],
          },
        },
        {
          id: "edps1-u2-mo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What pattern do the seasons follow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random" },
              { id: "b", text: "Spring, summer, autumn, winter repeating" },
              { id: "c", text: "Only winter" },
              { id: "d", text: "No pattern" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Patterns",
                statement: "Seasons cycle yearly.",
              },
            ],
            steps: [
              { reasoning: "Identify pattern.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: four seasons cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Spring, summer, autumn, winter repeating",
            commonErrors: ["No pattern recognised."],
          },
        },
        {
          id: "edps1-u2-mo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how a rolling ball moves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Describing movement",
                statement: "Rolls, maybe in straight line, slows down.",
              },
            ],
            steps: [
              { reasoning: "Movement described.", marks: 1, markCode: "A" },
              { reasoning: "Accurate.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'It rolls along the ground in a straight line and slows down'",
            commonErrors: ["Vague or wrong."],
          },
        },
        {
          id: "edps1-u2-mo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Predict what happens next: day, night, day, night...",
          parts: [
            { label: "a", prompt: "Pattern identified", marks: 1 },
            { label: "b", prompt: "Prediction made", marks: 1 },
            { label: "c", prompt: "Reasoning given", marks: 1 },
            { label: "d", prompt: "Another example", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pattern prediction",
                statement: "Day/night alternates; predict next = day.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Alternating pattern.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Day predicted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Another example.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Alternating; next is day; e.g. seasons also repeat yearly",
            commonErrors: ["No pattern or prediction."],
          },
        },
      ],
    },
  ],
};
