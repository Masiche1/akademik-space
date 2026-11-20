import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "edpm5-u3-lesson-3-2",
  code: "3-2",
  title: "Angles and Lines",
  goal: "I CAN measure angles with a protractor and identify properties of shapes.",
  standards: ["Year 5 Geometry"],
  vocabulary: [
    {
      term: "Protractor",
      definition: "A tool for measuring angles in degrees.",
    },
    { term: "Acute angle", definition: "An angle less than 90°." },
    { term: "Obtuse angle", definition: "An angle between 90° and 180°." },
    {
      term: "Reflex angle",
      definition: "An angle greater than 180° but less than 360°.",
    },
    {
      term: "Vertically opposite",
      definition:
        "Angles opposite each other when two lines cross — always equal.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u3-angles",
      title: "Measuring angles",
      skill: "Measure and classify angles using a protractor.",
      lesson: {
        sections: [
          {
            heading: "Using a protractor",
            body: "Place the centre on the vertex, align the baseline with one arm. Read the scale — use the inner or outer scale depending on direction. Angles can be acute (<90°), right (90°), obtuse (90–180°), or reflex (>180°).",
          },
          {
            heading: "Angles on a line",
            body: "Angles on a straight line add to 180°. If one angle is 60°, the other is 120°. Angles around a point add to 360°. Vertically opposite angles are equal.",
          },
        ],
        keyFormulas: [
          {
            name: "Angle types",
            statement: "acute < 90 < obtuse < 180 < reflex < 360",
          },
          {
            name: "Line angles",
            statement: "Angles on a line = 180°; around a point = 360°",
          },
        ],
        workedExample: {
          problem:
            "Two angles on a straight line: one is 75°. What is the other?",
          solution: "180 − 75 = 105° (obtuse).",
        },
      },
      questions: [
        {
          id: "edpm5-u3-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle of 150° is what type?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acute" },
              { id: "b", text: "Right" },
              { id: "c", text: "Obtuse" },
              { id: "d", text: "Reflex" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obtuse",
                statement: "90° < 150° < 180° → obtuse.",
              },
            ],
            steps: [
              { reasoning: "Between 90 and 180.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Obtuse",
            commonErrors: ["Calling it reflex — reflex is >180°."],
          },
        },
        {
          id: "edpm5-u3-an-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two angles on a straight line: one is 110°. What is the other?",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 70, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angles on a line",
                statement: "180 − 110 = 70°.",
              },
            ],
            steps: [
              {
                reasoning: "Angles on a straight line sum to 180°.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "180 − 110 = 70.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 70°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70°",
            commonErrors: ["Answering 110 — thinking they're equal."],
          },
        },
        {
          id: "edpm5-u3-an-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three angles around a point: 100°, 120°, and x. What is x?",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 140, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angles around a point",
                statement: "360 − 100 − 120 = 140°.",
              },
            ],
            steps: [
              {
                reasoning: "Angles around a point = 360°.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "100 + 120 = 220.", marks: 1, markCode: "M" },
              { reasoning: "360 − 220 = 140°.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 140°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "140°",
            commonErrors: [
              "Using 180 instead of 360 for angles around a point.",
            ],
          },
        },
        {
          id: "edpm5-u3-an-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two lines cross, forming four angles. One angle is 65°.",
          parts: [
            {
              label: "a",
              prompt: "What is the vertically opposite angle?",
              marks: 3,
            },
            { label: "b", prompt: "What are the other two angles?", marks: 4 },
            {
              label: "c",
              prompt: "Explain why vertically opposite angles are equal.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vertically opposite angles",
                statement:
                  "Opposite angles equal; adjacent on line = 180 − 65 = 115°.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vertically opposite = 65° (equal).",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Answer: 65°.", marks: 1, markCode: "A" },
              {
                part: "a",
                reasoning: "Rule applied.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Adjacent angles on straight line: 180 − 65 = 115°.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Other two = 115° each.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Both identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "When lines cross, opposite angles are formed by the same two lines — they're mirror images.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Both pairs of vertical angles are equal.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "65°; 115° each; vertically opposite angles are equal",
            commonErrors: [
              "Saying all four angles are 65° — adjacent ones are 115°.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm5-u3-shapes",
      title: "Properties of shapes",
      skill: "Identify properties of quadrilaterals and compare shapes.",
      lesson: {
        sections: [
          {
            heading: "Quadrilateral properties",
            body: "**Square**: 4 equal sides, 4 right angles, 2 pairs parallel. **Rectangle**: opposite sides equal, 4 right angles. **Rhombus**: 4 equal sides, opposite angles equal. **Parallelogram**: opposite sides parallel and equal. **Trapezium**: one pair of parallel sides.",
          },
          {
            heading: "Comparing shapes",
            body: "Sort by properties: number of parallel sides, right angles, equal sides. A square is a special rectangle (all sides equal). A rhombus is a special parallelogram. Think about which properties are 'always' true.",
          },
        ],
        keyFormulas: [
          { name: "Square", statement: "4 equal sides, 4 right angles" },
          { name: "Rectangle", statement: "Opposite equal, 4 right angles" },
          {
            name: "Parallelogram",
            statement: "Opposite sides parallel and equal",
          },
        ],
        workedExample: {
          problem: "Does a rectangle have any parallel sides?",
          solution: "Yes — opposite sides are parallel.",
        },
      },
      questions: [
        {
          id: "edpm5-u3-sh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shape has 4 equal sides AND 4 right angles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rectangle" },
              { id: "b", text: "Square" },
              { id: "c", text: "Rhombus" },
              { id: "d", text: "Parallelogram" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square",
                statement: "Only square has both equal sides and right angles.",
              },
            ],
            steps: [
              {
                reasoning: "Square = equal sides + right angles.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Square",
            commonErrors: ["Choosing rectangle — sides aren't all equal."],
          },
        },
        {
          id: "edpm5-u3-sh-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many pairs of parallel sides does a parallelogram have?",
          response: {
            type: "numeric",
            parts: [{ label: "Pairs", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallelogram",
                statement: "Two pairs of opposite parallel sides.",
              },
            ],
            steps: [
              {
                reasoning: "Parallelogram has 2 pairs.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Top/bottom and left/right pairs.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 4 — counting sides not pairs."],
          },
        },
        {
          id: "edpm5-u3-sh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape has 4 equal sides but its angles are not all 90°. What could it be?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shape properties",
                statement: "Rhombus — equal sides, non-right angles possible.",
              },
            ],
            steps: [
              {
                reasoning: "Equal sides but angles vary → rhombus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Square would have right angles.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Answer: rhombus (or square if angles happen to be 90°).",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Rhombus",
            commonErrors: ["Saying square — squares always have right angles."],
          },
        },
        {
          id: "edpm5-u3-sh-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sort these shapes: square, rectangle, rhombus, parallelogram, trapezium.",
          parts: [
            {
              label: "a",
              prompt: "Which have exactly 2 pairs of parallel sides?",
              marks: 3,
            },
            { label: "b", prompt: "Which have 4 right angles?", marks: 3 },
            { label: "c", prompt: "Which have 4 equal sides?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quadrilateral properties",
                statement:
                  "2 pairs parallel: square, rectangle, rhombus, parallelogram; 4 right angles: square, rectangle; 4 equal sides: square, rhombus.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Square, rectangle, rhombus, parallelogram all have 2 pairs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Trapezium has only 1 pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct identification.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Square and rectangle have 4 right angles.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Rhombus and parallelogram don't (generally).",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Square and rhombus have 4 equal sides.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Rectangle and parallelogram have only opposite sides equal.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "All properties correct.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "2 pairs: square, rectangle, rhombus, parallelogram; 4 right angles: square, rectangle; 4 equal sides: square, rhombus",
            commonErrors: ["Including trapezium in '2 pairs' — it only has 1."],
          },
        },
      ],
    },
  ],
};
