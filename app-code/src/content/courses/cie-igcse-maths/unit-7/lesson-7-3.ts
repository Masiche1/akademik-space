import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ciem-u7-lesson-7-3",
  code: "7-3",
  title: "Symmetry and Combined Transformations",
  goal: "I CAN identify lines and centres of symmetry, describe combined transformations as single transformations, and solve transformation problems.",
  standards: ["0580 7.4", "0580 7.5"],
  vocabulary: [
    { term: "Line symmetry", definition: "A line where reflecting the shape in it gives an identical image." },
    { term: "Rotational symmetry", definition: "The shape looks identical after rotation about a centre through a given angle." },
    { term: "Order of rotational symmetry", definition: "The number of positions in a full turn where the shape looks identical." },
    { term: "Combined transformation", definition: "Two or more transformations applied in sequence." },
    { term: "Equivalent single transformation", definition: "One transformation producing the same result as a combination." },
  ],
  concepts: [
    {
      id: "ciem-u7-symmetry",
      title: "Symmetry",
      skill: "Identify lines of symmetry and centres/order of rotational symmetry in shapes.",
      lesson: {
        sections: [
          {
            heading: "Line symmetry",
            body: "A shape has line symmetry if a mirror line divides it into two matching halves. Count all such lines: a square has 4, a rectangle has 2, an equilateral triangle has 3, a circle has infinitely many.",
          },
          {
            heading: "Rotational symmetry",
            body: "A shape has rotational symmetry of **order $n$** if it maps onto itself $n$ times in a full $360^\\circ$ turn about a centre. Order 1 means no rotational symmetry (only identity). A square has order 4; a rectangle has order 2; a scalene triangle has order 1.",
          },
          {
            heading: "Combining with transformations",
            body: "Symmetry helps check transformation answers: if a shape has a line of symmetry, reflecting in that line leaves it unchanged. Rotational symmetry means certain rotations map the shape to itself.",
          },
        ],
        keyFormulas: [
          { name: "Rotational symmetry order", statement: "$n=\\frac{360^\\circ}{\\text{smallest rotation angle}}$" },
        ],
        workedExample: {
          problem: "A regular hexagon — how many lines of symmetry and what order of rotational symmetry?",
          solution: "6 lines of symmetry (through opposite vertices and midpoints of opposite sides); order 6 rotational symmetry ($360^\\circ/6=60^\\circ$ rotations).",
        },
      },
      questions: [
        {
          id: "ciem-u7-symmetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines of symmetry does a square have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Square symmetry", statement: "A square has 4 lines of symmetry." },
            ],
            steps: [
              { reasoning: "Count the mirror lines.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $4$",
            commonErrors: ["Counting only the horizontal and vertical lines (missing the diagonals)."],
          },
        },
        {
          id: "ciem-u7-symmetry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shape maps onto itself after rotations of $90^\\circ$, $180^\\circ$ and $270^\\circ$ about a centre. What is its order of rotational symmetry?",
          response: { type: "numeric", parts: [{ label: "Order", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotational symmetry order", statement: "$n=\\frac{360^\\circ}{\\text{smallest angle}}$" },
            ],
            steps: [
              { reasoning: "Smallest rotation is $90^\\circ$.", working: "n=\\frac{360}{90}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Order $4$",
            commonErrors: ["Counting the listed rotations (3) instead of including identity."],
          },
        },
        {
          id: "ciem-u7-symmetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An isosceles trapezium (not a rectangle) has one line of symmetry. Describe that line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Isosceles trapezium symmetry", statement: "The perpendicular bisector of the parallel sides through the midpoints is the line of symmetry." },
            ],
            steps: [
              { reasoning: "Identify the symmetry axis.", working: "\\text{perpendicular bisector of the parallel sides}", marks: 1, markCode: "M" },
              { reasoning: "State it passes through the midpoints of both parallel sides.", marks: 1, markCode: "M" },
              { reasoning: "Describe the line fully.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "The perpendicular bisector of the two parallel sides (through their midpoints)",
            commonErrors: ["Saying 'the diagonal' — diagonals are not symmetry lines."],
          },
        },
        {
          id: "ciem-u7-symmetry-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shape is transformed by a reflection in the $x$-axis followed by a reflection in the $y$-axis.",
          parts: [
            { label: "a", prompt: "Find the single transformation equivalent to this combination.", marks: 4 },
            { label: "b", prompt: "What is the inverse of the combined transformation?", marks: 2 },
            { label: "c", prompt: "A point $(3,4)$ undergoes the combined transformation. Find its final position.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composition of reflections", statement: "Reflect $x$-axis then $y$-axis = rotation $180^\\circ$ about origin." },
            ],
            steps: [
              { part: "a", reasoning: "First reflection in the $x$-axis: $(x,y)\\to(x,-y)$.", working: "(x,-y)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Then reflect the result in the $y$-axis: $(x,-y)\\to(-x,-y)$.", working: "(-x,-y)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The combined map $(x,y)\\to(-x,-y)$ is rotation $180^\\circ$ about the origin.", working: "(-x,-y)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the single transformation.", working: "\\text{rotation }180^\\circ\\text{ about }(0,0)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rotation $180^\\circ$ is self-inverse.", working: "\\text{itself}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inverse.", working: "180^\\circ\\text{ rotation about }(0,0)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply $180^\\circ$ rotation: negate both coordinates.", working: "(-3,-4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Or sequentially: reflect $x$-axis → $(3,-4)$; reflect $y$-axis → $(-3,-4)$.", working: "(3,-4)\\to(-3,-4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the final position.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rotation $180^\\circ$ about origin (b) itself (c) $(-3,-4)$",
            commonErrors: ["Applying reflections in the wrong order — order matters for the intermediate steps though not the final result here.", "In (a) writing two reflections instead of a single transformation."],
          },
        },
        {
          id: "ciem-u7-symmetry-q5", difficulty: "foundation", totalMarks: 1,
          stem: "How many lines of symmetry does a rectangle that is not a square have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1$" },
            { id: "b", text: "$2$" },
            { id: "c", text: "$0$" },
            { id: "d", text: "$4$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Rectangle symmetry", statement: "A non-square rectangle has two lines: through midpoints of opposite sides." } ],
            steps: [ { reasoning: "Count the mirror lines.", working: "2", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** $2$", commonErrors: ["Counting the diagonals."] },
        },
        {
          id: "ciem-u7-symmetry-q6", difficulty: "core", totalMarks: 1,
          stem: "What is the order of rotational symmetry of an equilateral triangle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6$" },
            { id: "b", text: "$2$" },
            { id: "c", text: "$1$" },
            { id: "d", text: "$3$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Rotational symmetry", statement: "An equilateral triangle maps onto itself every $120^\\circ$." } ],
            steps: [ { reasoning: "Order $=360^\\circ/120^\\circ=3$.", working: "3", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** $3$", commonErrors: ["Counting only one rotation."] },
        },
        {
          id: "ciem-u7-symmetry-q7", difficulty: "core", totalMarks: 2,
          stem: "A regular polygon maps onto itself after rotations of $72^\\circ$. What is its order of rotational symmetry?",
          response: { type: "numeric", parts: [ { label: "Order", answer: 5 }] },
          markscheme: { principles: [ { kind: "formula", name: "Rotational symmetry order", statement: "$n=\\frac{360^\\circ}{\\text{smallest angle}}$" } ],
            steps: [
              { reasoning: "Use the smallest rotation angle.", working: "n=\\frac{360}{72}", marks: 1, markCode: "M" },
              { reasoning: "Compute the order.", marks: 1, markCode: "A" } ],
            finalAnswer: "Order $5$", commonErrors: ["Answering $72$."] },
        },
        {
          id: "ciem-u7-symmetry-q8", difficulty: "challenge", totalMarks: 1,
          stem: "How many lines of symmetry does a circle have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2$" },
            { id: "b", text: "Infinitely many" },
            { id: "c", text: "$4$" },
            { id: "d", text: "$1$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Circle symmetry", statement: "Every diameter is a line of symmetry." } ],
            steps: [ { reasoning: "Any diameter reflects the circle onto itself.", working: "\\infty", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** Infinitely many", commonErrors: ["Counting only horizontal and vertical diameters."] },
        },
        {
          id: "ciem-u7-symmetry-q9", difficulty: "core", totalMarks: 2,
          stem: "An isosceles triangle that is not equilateral has one line of symmetry. What is its order of rotational symmetry?",
          response: { type: "numeric", parts: [ { label: "Lines", answer: 1 }, { label: "Order", answer: 1 } ] },
          markscheme: { principles: [ { kind: "property", name: "Symmetry", statement: "Only the identity rotation leaves it unchanged." } ],
            steps: [
              { reasoning: "Lines of symmetry $=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Rotational order $=1$ because no non-identity rotation maps it onto itself.", working: "1", marks: 1, markCode: "A" } ],
            finalAnswer: "Lines $=1$, order $=1$", commonErrors: ["Thinking order equals number of lines."] },
        },
        {
          id: "ciem-u7-symmetry-q10", difficulty: "foundation", totalMarks: 2,
          stem: "A square maps onto itself after rotations of $90^\\circ$, $180^\\circ$ and $270^\\circ$. What is its order of rotational symmetry?",
          response: { type: "numeric", parts: [ { label: "Order", answer: 4 }] },
          markscheme: { principles: [ { kind: "formula", name: "Rotational symmetry order", statement: "$n=\\frac{360^\\circ}{90^\\circ}=4$." } ],
            steps: [
              { reasoning: "Smallest rotation is $90^\\circ$.", working: "n=\\frac{360}{90}", marks: 1, markCode: "M" },
              { reasoning: "State the order.", marks: 1, markCode: "A" } ],
            finalAnswer: "Order $4$", commonErrors: ["Counting three rotations and forgetting the original."] },
        },
        {
          id: "ciem-u7-symmetry-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which shape has rotational symmetry of order $4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "An equilateral triangle" },
            { id: "b", text: "A rectangle that is not a square" },
            { id: "c", text: "A scalene triangle" },
            { id: "d", text: "A square" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Rotational symmetry", statement: "A square maps onto itself every $90^\\circ$." } ],
            steps: [ { reasoning: "Order $4$ needs $90^\\circ$ rotational symmetry.", working: "\\text{square}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** A square", commonErrors: ["Choosing the rectangle."] },
        },
        {
          id: "ciem-u7-symmetry-q12", difficulty: "core", totalMarks: 3,
          stem: "Describe the symmetry of a regular hexagon.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "property", name: "Regular polygon symmetry", statement: "A regular $n$-gon has $n$ lines and order $n$." } ],
            steps: [
              { reasoning: "Count the lines of symmetry.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Find the rotational order.", working: "n=\\frac{360}{60}=6", marks: 1, markCode: "M" },
              { reasoning: "State both facts.", marks: 1, markCode: "A" } ],
            finalAnswer: "$6$ lines of symmetry; order $6$ rotational symmetry", commonErrors: ["Giving order $3$."] },
        },
        {
          id: "ciem-u7-symmetry-q13", difficulty: "challenge", totalMarks: 2,
          stem: "A shape maps onto itself after rotations of $45^\\circ$, $90^\\circ$, $135^\\circ$, $180^\\circ$, $225^\\circ$, $270^\\circ$ and $315^\\circ$. What is its order of rotational symmetry?",
          response: { type: "numeric", parts: [ { label: "Order", answer: 8 }] },
          markscheme: { principles: [ { kind: "formula", name: "Rotational symmetry order", statement: "$n=\\frac{360^\\circ}{45^\\circ}=8$." } ],
            steps: [
              { reasoning: "Smallest rotation is $45^\\circ$.", working: "n=\\frac{360}{45}", marks: 1, markCode: "M" },
              { reasoning: "State the order.", marks: 1, markCode: "A" } ],
            finalAnswer: "Order $8$", commonErrors: ["Counting seven listed rotations instead of eight including identity."] },
        },
        {
          id: "ciem-u7-symmetry-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Describe the symmetry of the capital letter H.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "property", name: "Letter symmetry", statement: "H has vertical and horizontal mirror lines and order $2$ rotational symmetry." } ],
            steps: [
              { reasoning: "Identify mirror lines.", working: "\\text{vertical and horizontal}", marks: 1, markCode: "M" },
              { reasoning: "A $180^\\circ$ rotation maps H onto itself.", working: "n=2", marks: 1, markCode: "M" },
              { reasoning: "State the symmetry.", marks: 1, markCode: "A" } ],
            finalAnswer: "$2$ lines of symmetry; order $2$ rotational symmetry", commonErrors: ["Missing the horizontal line."] },
        },
        {
          id: "ciem-u7-symmetry-q15", difficulty: "core", totalMarks: 1,
          stem: "The order of rotational symmetry counts which positions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The number of lines of symmetry" },
            { id: "b", text: "Only the rotated positions, excluding the original" },
            { id: "c", text: "Only $180^\\circ$ rotations" },
            { id: "d", text: "The original position plus each rotation that maps the shape onto itself" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Order", statement: "Order includes the identity/original position." } ],
            steps: [ { reasoning: "Recall the definition.", working: "\\text{include original}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** Original plus each mapping rotation", commonErrors: ["Excluding the original position."] },
        },
        {
          id: "ciem-u7-symmetry-q16", difficulty: "challenge", totalMarks: 6,
          stem: "A regular octagon is drawn on a coordinate grid.",
          parts: [
            { label: "a", prompt: "State the number of lines of symmetry.", marks: 2 },
            { label: "b", prompt: "State the order of rotational symmetry.", marks: 2 },
            { label: "c", prompt: "Find the smallest angle of rotation that maps it onto itself.", marks: 2 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "property", name: "Regular polygon symmetry", statement: "A regular $n$-gon has $n$ lines and order $n$." } ],
            steps: [
              { part: "a", reasoning: "A regular octagon has $8$ lines of symmetry.", working: "8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Order equals the number of sides for a regular polygon.", working: "n=8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the order.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Smallest angle $=\\frac{360^\\circ}{8}$.", working: "=45^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $8$ (b) order $8$ (c) $45^\\circ$",
            commonErrors: ["Giving order $4$ for an octagon."] },
        },
      ],
    },
    {
      id: "ciem-u7-transformation-problems",
      title: "Transformation problem solving",
      skill: "Solve multi-step problems involving transformations on coordinate grids.",
      lesson: {
        sections: [
          {
            heading: "Strategy",
            body: "For any transformation problem: (1) identify the type from the object–image relationship, (2) find the defining elements (vector, mirror line, centre+angle, centre+scale factor), (3) verify with a second point.",
          },
          {
            heading: "Describing fully",
            body: "Marks are lost for incomplete descriptions. A rotation needs centre + angle + direction; an enlargement needs centre + scale factor; a reflection needs the mirror line; a translation needs the vector.",
          },
          {
            heading: "Inverse problems",
            body: "To find what transformation maps image back to object, either apply the inverse or swap object/image roles and describe the reverse transformation.",
          },
        ],
        keyFormulas: [
          { name: "Full description checklist", statement: "Type + all defining elements" },
        ],
        workedExample: {
          problem: "Point $(1,2)\\to(3,2)$. What single transformation maps object to image?",
          solution: "Only $x$ changes by $+2$ — could be translation $\\begin{pmatrix}2\\\\0\\end{pmatrix}$ or reflection in $x=2$. With one point both fit; a second point distinguishes them.",
        },
      },
      questions: [
        {
          id: "ciem-u7-transformation-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape is unchanged by reflection in a line. What does this tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shape has no symmetry" },
              { id: "b", text: "The transformation failed" },
              { id: "c", text: "The shape is a circle" },
              { id: "d", text: "The line is a line of symmetry of the shape" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Line symmetry", statement: "Reflecting in a symmetry line gives an identical image." },
            ],
            steps: [
              { reasoning: "Connect unchanged image to symmetry.", working: "\\text{line of symmetry}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The line is a line of symmetry",
            commonErrors: ["Thinking the transformation did nothing."],
          },
        },
        {
          id: "ciem-u7-transformation-problems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Point $A(3,5)$ maps to $A'(3,-1)$ under a reflection. Find the equation of the mirror line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mirror line", statement: "Mirror line is perpendicular bisector of object–image segment." },
            ],
            steps: [
              { reasoning: "Midpoint of $AA'$: $\\left(\\frac{3+3}{2},\\frac{5+(-1)}{2}\\right)=(3,2)$.", working: "M=(3,2)", marks: 1, markCode: "M" },
              { reasoning: "$AA'$ is vertical (same $x$), so mirror line is horizontal through $(3,2)$.", working: "y=2", marks: 1, markCode: "M" },
              { reasoning: "State the mirror line.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2$",
            commonErrors: ["Giving $x=3$ (that's the segment, not the mirror)."],
          },
        },
        {
          id: "ciem-u7-transformation-problems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $P(6,2)$ is rotated $180^\\circ$ about point $C(2,4)$. Find $P'$.",
          response: { type: "numeric", parts: [{ label: "x", answer: -2 }, { label: "y", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotation 180°", statement: "Image is the point reflection of object through the centre: $C$ is midpoint of $PP'$." },
            ],
            steps: [
              { reasoning: "$C$ is the midpoint: $C=\\frac{P+P'}{2}$, so $P'=2C-P$.", working: "P'=2(2,4)-(6,2)", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=(4,8)-(6,2)=(-2,6)", marks: 2, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-2,6)$",
            commonErrors: ["Rotating about the origin instead of $C$."],
          },
        },
        {
          id: "ciem-u7-transformation-problems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Rectangle $R$ has vertices $(0,0)$, $(4,0)$, $(4,3)$, $(0,3)$. It is mapped to $R'$ with vertices $(6,-2)$, $(2,-2)$, $(2,-5)$, $(6,-5)$, where $(0,0)\\to(6,-2)$, $(4,0)\\to(2,-2)$, $(4,3)\\to(2,-5)$ and $(0,3)\\to(6,-5)$.",
          parts: [
            { label: "a", prompt: "Describe the single transformation mapping $R$ to $R'$.", marks: 5 },
            { label: "b", prompt: "Write the inverse transformation.", marks: 2 },
            { label: "c", prompt: "Find the image of the centre of $R$ under the transformation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotation 180°", statement: "About centre $C$: $P'=2C-P$, i.e. $(x,y)\\to(2c_1-x,\\,2c_2-y)$." },
            ],
            steps: [
              { part: "a", reasoning: "Check for translation: vectors differ per vertex, so not a translation. Check reflection: corresponding segments are not mirror images. The map $(x,y)\\to(6-x,-2-y)$ fits all four pairs.", working: "(0,0)\\to(6,-2),\\ (4,3)\\to(2,-5)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Identify the transformation: $(x,y)\\to(6-x,-2-y)$ is rotation $180^\\circ$ about $(3,-1)$.", working: "2C=(6,-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify with a second pair: $(4,0)\\to(2,-2)$ ✓ and $(0,3)\\to(6,-5)$ ✓.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State type and centre.", working: "\\text{rotation }180^\\circ\\text{ about }(3,-1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Include direction/angle completeness.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A $180^\\circ$ rotation is self-inverse.", working: "\\text{same rotation}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inverse.", working: "180^\\circ\\text{ about }(3,-1)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Centre of $R$ is $(2,1.5)$; apply $P'=2C-P$ with $C=(3,-1)$.", working: "(6-2,\\,-2-1.5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute and state.", working: "=(4,-3.5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rotation $180^\\circ$ about $(3,-1)$ (b) itself — rotation $180^\\circ$ about $(3,-1)$ (c) $(4,-3.5)$",
            commonErrors: ["Describing only 'rotation' without centre and angle.", "In (c) using the centre of $R'$ instead of applying the transformation to the centre of $R$."],
          },
        },
        {
          id: "ciem-u7-transformation-problems-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A rotation is described fully by which three pieces of information?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Vector only" },
            { id: "b", text: "Mirror line and angle" },
            { id: "c", text: "Scale factor and centre" },
            { id: "d", text: "Centre, angle and direction" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "convention", name: "Full description", statement: "A rotation needs centre, angle and direction." } ],
            steps: [ { reasoning: "Recall the required elements.", working: "\\text{centre, angle, direction}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** Centre, angle and direction", commonErrors: ["Omitting direction."] },
        },
        {
          id: "ciem-u7-transformation-problems-q6", difficulty: "core", totalMarks: 1,
          stem: "Point $A(1,2)$ maps to $A'(3,2)$. One point alone cannot distinguish a translation from a reflection. What additional information is needed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The area of the shape" },
            { id: "b", text: "A second object–image pair" },
            { id: "c", text: "The perimeter only" },
            { id: "d", text: "The colour of the shape" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "technique", name: "Verification", statement: "Use a second point to distinguish possible transformations." } ],
            steps: [ { reasoning: "A second pair tests whether all points move identically or reflect.", working: "\\text{second pair}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** A second object–image pair", commonErrors: ["Guessing from one point."] },
        },
        {
          id: "ciem-u7-transformation-problems-q7", difficulty: "core", totalMarks: 2,
          stem: "Point $P(4,5)$ is reflected to $P'(4,-1)$. Find the midpoint of $PP'$.",
          response: { type: "numeric", parts: [ { label: "x", answer: 4 }, { label: "y", answer: 2 } ] },
          markscheme: { principles: [ { kind: "property", name: "Mirror line", statement: "The mirror line passes through the midpoint of $PP'$." } ],
            steps: [
              { reasoning: "Average the coordinates.", working: "M=\\left(\\frac{4+4}{2},\\frac{5-1}{2}\\right)=(4,2)", marks: 1, markCode: "M" },
              { reasoning: "State the midpoint.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(4,2)$", commonErrors: ["Using $(4,-3)$ as midpoint."] },
        },
        {
          id: "ciem-u7-transformation-problems-q8", difficulty: "challenge", totalMarks: 1,
          stem: "Points $(0,0)\\to(0,0)$ and $(2,0)\\to(0,2)$ under a rotation about the origin. Describe the rotation.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rotation $90^\\circ$ clockwise" },
            { id: "b", text: "Reflection in $y=x$" },
            { id: "c", text: "Rotation $90^\\circ$ anticlockwise" },
            { id: "d", text: "Rotation $180^\\circ$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Rotate 90° acw", statement: "$(x,y)\\to(-y,x)$" } ],
            steps: [ { reasoning: "$(2,0)\\to(0,2)$ matches $(x,y)\\to(-y,x)$.", working: "90^\\circ\\text{ acw}", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** Rotation $90^\\circ$ anticlockwise about $(0,0)$", commonErrors: ["Choosing clockwise."] },
        },
        {
          id: "ciem-u7-transformation-problems-q9", difficulty: "core", totalMarks: 2,
          stem: "Point $(2,2)$ is enlarged with centre $(0,0)$ and maps to $(6,6)$. Find the scale factor.",
          response: { type: "numeric", parts: [ { label: "k", answer: 3 }] },
          markscheme: { principles: [ { kind: "formula", name: "Scale factor", statement: "$k=\\frac{\\text{image distance}}{\\text{object distance}}$" } ],
            steps: [
              { reasoning: "Coordinates triple.", working: "k=\\frac62=\\frac63=3", marks: 1, markCode: "M" },
              { reasoning: "State the scale factor.", marks: 1, markCode: "A" } ],
            finalAnswer: "$k=3$", commonErrors: ["Using $k=4$."] },
        },
        {
          id: "ciem-u7-transformation-problems-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Write the inverse of a translation by vector $\\begin{pmatrix}-2\\\\5\\end{pmatrix}$.",
          response: { type: "numeric", parts: [ { label: "x", answer: 2 }, { label: "y", answer: -5 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Inverse translation", statement: "Negate the vector." } ],
            steps: [
              { reasoning: "Reverse the signs.", working: "\\begin{pmatrix}2\\\\-5\\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "State the components.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\begin{pmatrix}2\\\\-5\\end{pmatrix}$", commonErrors: ["Negating only one component."] },
        },
        {
          id: "ciem-u7-transformation-problems-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which information is required to describe an enlargement fully?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Centre and scale factor" },
            { id: "b", text: "Vector only" },
            { id: "c", text: "Mirror line and angle" },
            { id: "d", text: "Direction only" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "convention", name: "Full description", statement: "An enlargement needs centre and scale factor." } ],
            steps: [ { reasoning: "Recall the required elements.", working: "\\text{centre and }k", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** Centre and scale factor", commonErrors: ["Omitting the centre."] },
        },
        {
          id: "ciem-u7-transformation-problems-q12", difficulty: "core", totalMarks: 4,
          stem: "Triangle vertices $(1,1)$, $(3,1)$ and $(1,2)$ are reflected in the line $y=x$ and then translated by $\\begin{pmatrix}1\\\\0\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" }, { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+1,y)$" } ],
            steps: [
              { reasoning: "Reflect the vertices.", working: "(1,1),(1,3),(2,1)", marks: 1, markCode: "M" },
              { reasoning: "Translate each image by $(1,0)$.", working: "(2,1),(2,3),(3,1)", marks: 1, markCode: "M" },
              { reasoning: "State the final vertices.", marks: 1, markCode: "M" },
              { reasoning: "Note the area is unchanged.", marks: 1, markCode: "A" } ],
            finalAnswer: "Final vertices $(2,1)$, $(2,3)$, $(3,1)$; area unchanged",
            commonErrors: ["Translating before reflecting."] },
        },
        {
          id: "ciem-u7-transformation-problems-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Point $(2,1)$ is rotated $90^\\circ$ clockwise about the centre $(1,1)$. Find the image.",
          response: { type: "numeric", parts: [ { label: "x", answer: 1 }, { label: "y", answer: 0 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Rotation about a point", statement: "Translate centre to origin, rotate, translate back." } ],
            steps: [
              { reasoning: "Relative to centre: $(1,0)$; rotate clockwise gives $(0,-1)$.", working: "(y,-x)=(0,-1)", marks: 1, markCode: "M" },
              { reasoning: "Add the centre back.", working: "(1+0,1-1)=(1,0)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(1,0)$", commonErrors: ["Rotating about the origin."] },
        },
        {
          id: "ciem-u7-transformation-problems-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Point $(4,2)$ maps to $(2,4)$ under a transformation. Write the inverse transformation.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$ is self-inverse." } ],
            steps: [
              { reasoning: "The mapping swaps coordinates, so it is reflection in $y=x$.", working: "(y,x)=(2,4)", marks: 1, markCode: "M" },
              { reasoning: "Reflections are self-inverse.", working: "\\text{same reflection}", marks: 1, markCode: "M" },
              { reasoning: "State the inverse.", marks: 1, markCode: "A" } ],
            finalAnswer: "Reflection in the line $y=x$", commonErrors: ["Writing a different line."] },
        },
        {
          id: "ciem-u7-transformation-problems-q15", difficulty: "core", totalMarks: 1,
          stem: "Two reflections in parallel lines $6$ units apart are equivalent to which translation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rotation $180^\\circ$" },
            { id: "b", text: "Reflection in a third line" },
            { id: "c", text: "Translation by $6$ units perpendicular to the lines" },
            { id: "d", text: "Translation by $12$ units perpendicular to the lines" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Two reflections", statement: "Parallel mirror lines give translation by twice the gap." } ],
            steps: [ { reasoning: "Double the separation.", working: "2\\times6=12", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** Translation by $12$ units", commonErrors: ["Using the gap once."] },
        },
        {
          id: "ciem-u7-transformation-problems-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Point $P(2,3)$ is reflected in the line $y=x$ and then translated by $\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find the coordinates after the reflection.", marks: 2 },
            { label: "b", prompt: "Find the final coordinates after the translation.", marks: 2 },
            { label: "c", prompt: "Explain why the transformation preserves the area of any shape.", marks: 2 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" }, { kind: "property", name: "Isometry", statement: "Reflections and translations preserve distances." } ],
            steps: [
              { part: "a", reasoning: "Swap coordinates.", working: "P'=(3,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the reflected point.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the translation.", working: "(3+1,2-1)=(4,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the final point.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflections and translations are isometries, so area is preserved.", working: "\\text{area unchanged}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the conclusion.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $(3,2)$ (b) $(4,1)$ (c) Reflections and translations preserve area.",
            commonErrors: ["Claiming every distance from the origin is preserved."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u7-problem-solving-notes",
      title: "Transformation problem solving — revision notes",
      summary: "Symmetry, identifying transformations, inverses and combined transformations.",
      sections: [
        {
          heading: "Symmetry",
          body: "Line symmetry: mirror lines (square=4, rectangle=2). Rotational symmetry order $=\\frac{360^\\circ}{\\text{smallest angle}}$.",
        },
        {
          heading: "Identifying",
          body: "Translation: same vector. Reflection: perpendicular bisector of pairs. Rotation: centre from bisectors. Enlargement: collinear centre.",
        },
        {
          heading: "Combined and inverse",
          body: "Two reflections in parallel lines → translation by $2\\times$ gap. Inverses undo in reverse order. Rotation $180^\\circ$ about $C$: $P'=2C-P$.",
        },
      ],
    },
  ],
};
