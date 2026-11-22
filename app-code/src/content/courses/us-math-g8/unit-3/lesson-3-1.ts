import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m8-u3-lesson-3-1",
  code: "3-1",
  title: "Transformations",
  goal: "I CAN describe and perform translations, reflections, rotations and dilations on the coordinate plane, and use sequences of transformations to show that figures are congruent or similar.",
  standards: ["8.G.A.1", "8.G.A.2", "8.G.A.3", "8.G.A.4"],
  vocabulary: [
    { term: "Transformation", definition: "A rule that moves or resizes a figure in the plane. The original is the pre-image and the result is the image." },
    { term: "Translation", definition: "A slide that moves every point of a figure the same distance in the same direction." },
    { term: "Reflection", definition: "A flip of a figure across a line of reflection so that each point and its image are the same distance from the line." },
    { term: "Rotation", definition: "A turn of a figure through a given angle and direction about a fixed point called the center of rotation." },
    { term: "Dilation", definition: "A transformation from a center that multiplies every distance from the center by a scale factor $k$, producing a figure of the same shape but a different size." },
    { term: "Congruent", definition: "Figures that can be mapped onto each other by a sequence of translations, reflections and rotations." },
    { term: "Similar", definition: "Figures that can be mapped onto each other by a sequence of rotations, reflections, translations and dilations." },
  ],
  concepts: [
    {
      id: "m8-u3-rigid-motions",
      title: "Translations, reflections and rotations",
      skill: "Find coordinates of images under translations, reflections and rotations, and use the fact that they preserve lengths and angles.",
      lesson: {
        sections: [
          {
            heading: "Three rigid motions on the coordinate plane",
            body: "A **translation** by $(a, b)$ sends $(x, y)$ to $(x + a, y + b)$. A **reflection** across the $x$-axis sends $(x, y)$ to $(x, -y)$, and across the $y$-axis sends $(x, y)$ to $(-x, y)$. A **rotation** of $90^\\circ$ counterclockwise about the origin sends $(x, y)$ to $(-y, x)$, and a rotation of $180^\\circ$ sends $(x, y)$ to $(-x, -y)$.",
          },
          {
            heading: "What stays the same",
            body: "Translations, reflections and rotations are called **rigid motions** because they preserve side lengths and angle measures. The image is always congruent to the pre-image. Only its position, or its orientation (the order of the vertices) may change. To perform a sequence, apply the rules one at a time, using the output of one step as the input of the next.",
          },
        ],
        keyFormulas: [
          { name: "Translation", statement: "$(x, y) \\to (x + a, y + b)$" },
          { name: "Reflections", statement: "$x$-axis: $(x, y) \\to (x, -y)$; $y$-axis: $(x, y) \\to (-x, y)$" },
          { name: "Rotations about the origin", statement: "$90^\\circ$ counterclockwise: $(x, y) \\to (-y, x)$; $180^\\circ$: $(x, y) \\to (-x, -y)$" },
        ],
        workedExample: {
          problem: "Point $M(-3, 4)$ is reflected across the $x$-axis and then translated $5$ units right. Find the final image.",
          solution: "Reflection across the $x$-axis changes the sign of $y$: $(-3, 4) \\to (-3, -4)$. Translating $5$ units right adds $5$ to $x$: $(-3 + 5, -4) = (2, -4)$.",
        },
      },
      questions: [
        {
          id: "m8-u3-rigid-motions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(3, -2)$ is reflected across the $x$-axis. What are the coordinates of the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3, 2)$" },
              { id: "b", text: "$(-2, 3)$" },
              { id: "c", text: "$(3, 2)$" },
              { id: "d", text: "$(-3, -2)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection across the x-axis", statement: "$(x, y) \\to (x, -y)$. The $x$-coordinate stays the same and the $y$-coordinate changes sign." },
            ],
            steps: [
              { reasoning: "Keep $x$ and change the sign of $y$.", working: "(3, -2) \\to (3, 2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(3, 2)$",
            commonErrors: ["Choosing $(-3, -2)$, which is a reflection across the $y$-axis.", "Choosing $(-3, 2)$, which is a $180^\\circ$ rotation."],
          },
        },
        {
          id: "m8-u3-rigid-motions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $P(-4, 5)$ is translated $6$ units to the right and $3$ units down. Find the coordinates of the image $P'$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of $P'$", answer: 2 },
              { label: "$y$-coordinate of $P'$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Translation", statement: "Moving right adds to $x$; moving down subtracts from $y$." },
            ],
            steps: [
              { reasoning: "Right $6$ adds $6$ to $x$ and down $3$ subtracts $3$ from $y$.", working: "(-4 + 6,\\; 5 - 3)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "P' = (2, 2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P' = (2, 2)$",
            commonErrors: ["Adding $3$ to $y$ for a move down.", "Applying the horizontal move to $y$ and the vertical move to $x$."],
          },
        },
        {
          id: "m8-u3-rigid-motions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Point $A(2, 3)$ is rotated $90^\\circ$ counterclockwise about the origin. The image is then reflected across the $y$-axis. Find the coordinates of the final image.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of final image", answer: 3 },
              { label: "$y$-coordinate of final image", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rotation by 90 degrees counterclockwise", statement: "$(x, y) \\to (-y, x)$ about the origin." },
              { kind: "property", name: "Reflection across the y-axis", statement: "$(x, y) \\to (-x, y)$." },
            ],
            steps: [
              { reasoning: "Apply the rotation rule first.", working: "(2, 3) \\to (-3, 2)", marks: 1, markCode: "M" },
              { reasoning: "Apply the reflection to the rotated point: change the sign of $x$.", working: "(-3, 2) \\to (3, 2)", marks: 1, markCode: "M" },
              { reasoning: "State the final image.", working: "(3, 2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, 2)$",
            commonErrors: ["Using $(x, y) \\to (y, -x)$, which is a clockwise rotation.", "Reflecting across the $x$-axis instead of the $y$-axis."],
          },
        },
        {
          id: "m8-u3-rigid-motions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Triangle $ABC$ has vertices $A(1, 2)$, $B(4, 2)$ and $C(4, 5)$. Side $AB$ is horizontal and side $BC$ is vertical.",
          parts: [
            { label: "a", prompt: "Triangle $ABC$ is translated $3$ units left and $1$ unit up. Find the coordinates of $C'$.", marks: 2 },
            { label: "b", prompt: "Triangle $ABC$ is reflected across the $x$-axis. Find the coordinates of the image of $C$.", marks: 2 },
            { label: "c", prompt: "Triangle $ABC$ is rotated $180^\\circ$ about the origin. Find the coordinates of the image of $B$.", marks: 2 },
            { label: "d", prompt: "For the reflected triangle in part (b), find the length of the image of side $AB$ and the measure of the angle at the image of $B$ (in degrees). Explain why these values do not change.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $x$-coordinate of $C'$", answer: 1 },
              { label: "(a) $y$-coordinate of $C'$", answer: 6 },
              { label: "(b) $x$-coordinate of image of $C$", answer: 4 },
              { label: "(b) $y$-coordinate of image of $C$", answer: -5 },
              { label: "(c) $x$-coordinate of image of $B$", answer: -4 },
              { label: "(c) $y$-coordinate of image of $B$", answer: -2 },
              { label: "(d) Length of image of $AB$", answer: 3 },
              { label: "(d) Angle at image of $B$", answer: 90, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Translation", statement: "$(x, y) \\to (x + a, y + b)$." },
              { kind: "property", name: "Reflection and rotation rules", statement: "$x$-axis: $(x, y) \\to (x, -y)$. $180^\\circ$ rotation: $(x, y) \\to (-x, -y)$." },
              { kind: "property", name: "Rigid motions", statement: "Translations, reflections and rotations preserve side lengths and angle measures." },
            ],
            steps: [
              { part: "a", reasoning: "Left $3$ subtracts $3$ from $x$; up $1$ adds $1$ to $y$.", working: "(4 - 3,\\; 5 + 1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "C' = (1, 6)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reflection across the $x$-axis changes the sign of $y$.", working: "(4, 5) \\to (4, -5)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the image.", working: "(4, -5)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A $180^\\circ$ rotation about the origin changes the sign of both coordinates.", working: "(4, 2) \\to (-4, -2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the image.", working: "(-4, -2)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In the original, $AB$ runs from $x = 1$ to $x = 4$ along $y = 2$, so $AB = 3$, and $AB \\perp BC$ gives a $90^\\circ$ angle at $B$. The image has the same length and angle.", working: "AB = 4 - 1 = 3,\\quad \\angle B = 90^\\circ", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A reflection is a rigid motion, so it preserves lengths and angle measures. The image is congruent to the original.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $C' = (1, 6)$ (b) $(4, -5)$ (c) $(-4, -2)$ (d) length $3$ and angle $90^\\circ$; reflections preserve lengths and angles.",
            commonErrors: ["In (c), rotating only one coordinate.", "Thinking that a reflection changes the lengths of the sides because the figure looks different."],
          },
        },
      ],
    },
    {
      id: "m8-u3-dilations-similarity",
      title: "Dilations, congruence and similarity",
      skill: "Dilate figures from the origin, and use sequences of transformations to decide whether two figures are congruent or similar.",
      lesson: {
        sections: [
          {
            heading: "Dilations",
            body: "A dilation with center at the origin and scale factor $k$ sends $(x, y)$ to $(kx, ky)$. If $k > 1$ the figure is enlarged; if $0 < k < 1$ it is reduced. Angles stay the same and every length is multiplied by $k$, so the image is the same shape but not usually the same size. Areas are multiplied by $k^2$.",
          },
          {
            heading: "Congruence and similarity through transformations",
            body: "Two figures are **congruent** if a sequence of translations, reflections and rotations maps one onto the other. They are **similar** if a sequence that may also include dilations does so. Corresponding angles of similar figures are equal and corresponding sides are proportional, with ratio equal to the product of the scale factors used.",
          },
        ],
        keyFormulas: [
          { name: "Dilation from the origin", statement: "$(x, y) \\to (kx, ky)$" },
          { name: "Scale factor", statement: "$k = \\dfrac{\\text{image length}}{\\text{pre-image length}}$" },
          { name: "Area under dilation", statement: "$\\text{image area} = k^2 \\times \\text{pre-image area}$" },
        ],
        workedExample: {
          problem: "Triangle $ABC$ with $AB = 4$ is similar to triangle $DEF$ with $DE = 10$. If $BC = 6$, find $EF$.",
          solution: "The scale factor is $k = \\frac{10}{4} = 2.5$. Corresponding sides are multiplied by $2.5$, so $EF = 2.5 \\times 6 = 15$.",
        },
      },
      questions: [
        {
          id: "m8-u3-dilations-similarity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(2, -1)$ is dilated with center at the origin and scale factor $3$. What are the coordinates of the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\left(\\frac{2}{3}, -\\frac{1}{3}\\right)$" },
              { id: "b", text: "$(6, -3)$" },
              { id: "c", text: "$(6, -1)$" },
              { id: "d", text: "$(5, 2)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dilation from the origin", statement: "$(x, y) \\to (kx, ky)$." },
            ],
            steps: [
              { reasoning: "Multiply both coordinates by $3$.", working: "(3 \\times 2,\\; 3 \\times (-1)) = (6, -3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(6, -3)$",
            commonErrors: ["Adding $3$ to the coordinates (choice b is a translation by $(3, 3)$).", "Multiplying only one coordinate.", "Dividing by the scale factor (choice d)."],
          },
        },
        {
          id: "m8-u3-dilations-similarity-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(-8, 12)$ is dilated with center at the origin and scale factor $\\frac{1}{4}$. Find the coordinates of the image.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of image", answer: -2 },
              { label: "$y$-coordinate of image", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dilation from the origin", statement: "$(x, y) \\to (kx, ky)$. A scale factor between $0$ and $1$ shrinks the figure." },
            ],
            steps: [
              { reasoning: "Multiply each coordinate by $\\frac{1}{4}$.", working: "\\left(\\tfrac{1}{4}(-8),\\; \\tfrac{1}{4}(12)\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "(-2, 3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-2, 3)$",
            commonErrors: ["Multiplying by $4$ instead of $\\frac{1}{4}$.", "Dropping the negative sign on the $x$-coordinate."],
          },
        },
        {
          id: "m8-u3-dilations-similarity-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Triangle $DEF$ is the image of triangle $ABC$ after a dilation followed by a rotation. $AB = 6$ cm, $BC = 8$ cm and $DE = 15$ cm. Find the length of $EF$ in centimeters.",
          response: { type: "numeric", parts: [{ label: "$EF$", answer: 20, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Similar figures", statement: "A rotation does not change lengths, so the scale factor comes only from the dilation. Corresponding sides are proportional." },
            ],
            steps: [
              { reasoning: "$DE$ corresponds to $AB$. Find the scale factor.", working: "k = \\frac{DE}{AB} = \\frac{15}{6} = 2.5", marks: 1, markCode: "M" },
              { reasoning: "$EF$ corresponds to $BC$, so multiply by the scale factor.", working: "EF = 2.5 \\times 8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "EF = 20 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ cm",
            commonErrors: ["Adding the difference $15 - 6 = 9$ to $8$ to get $17$.", "Dividing $8$ by $2.5$ instead of multiplying."],
          },
        },
        {
          id: "m8-u3-dilations-similarity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Triangle $PQR$ has vertices $P(2, 2)$, $Q(6, 2)$ and $R(6, 5)$. It is dilated with center at the origin and scale factor $2$ to give triangle $P'Q'R'$. Triangle $XYZ$ is then formed by reflecting $P'Q'R'$ across the $x$-axis and translating the result $5$ units left.",
          parts: [
            { label: "a", prompt: "Find the coordinates of $R'$.", marks: 2 },
            { label: "b", prompt: "Find the area of triangle $PQR$ and the area of triangle $P'Q'R'$, in square units.", marks: 2 },
            { label: "c", prompt: "What is the ratio of the side lengths of triangle $XYZ$ to triangle $PQR$? Explain whether $XYZ$ is congruent or similar to $PQR$.", marks: 2 },
            { label: "d", prompt: "Find the ratio of the area of triangle $XYZ$ to the area of triangle $PQR$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $x$-coordinate of $R'$", answer: 12 },
              { label: "(a) $y$-coordinate of $R'$", answer: 10 },
              { label: "(b) Area of $PQR$", answer: 6, unit: "square units" },
              { label: "(b) Area of $P'Q'R'$", answer: 24, unit: "square units" },
              { label: "(c) Ratio of side lengths", answer: 2 },
              { label: "(d) Ratio of areas", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dilation from the origin", statement: "$(x, y) \\to (kx, ky)$; lengths are multiplied by $k$ and areas by $k^2$." },
              { kind: "definition", name: "Similarity", statement: "Figures are similar if a sequence of rotations, reflections, translations and dilations maps one onto the other." },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\tfrac{1}{2} \\times \\text{base} \\times \\text{height}$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply each coordinate of $R(6, 5)$ by $2$.", working: "(2 \\times 6,\\; 2 \\times 5)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "R' = (12, 10)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$PQR$ is a right triangle with legs $PQ = 4$ and $QR = 3$. The image has legs $8$ and $6$.", working: "\\tfrac{1}{2}(4)(3) = 6,\\quad \\tfrac{1}{2}(8)(6) = 24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both areas.", working: "6 \\text{ and } 24", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The reflection and translation are rigid motions and do not change lengths, so only the dilation changes the sides.", working: "k = 2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The sequence includes a dilation with $k \\neq 1$, so $XYZ$ is similar to $PQR$ but not congruent: angles are equal but sides are twice as long.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Areas scale by the square of the scale factor (check: $24 \\div 6$).", working: "k^2 = 2^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the ratio.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $R' = (12, 10)$ (b) $6$ and $24$ square units (c) ratio $2$; similar but not congruent (d) $4$",
            commonErrors: ["Saying the area ratio is $2$, the same as the side ratio.", "Thinking that the reflection or translation changes the size of the triangle."],
          },
        },
      ],
    },
  ],
};
