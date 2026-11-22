import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "geo-u5-5-1",
  code: "5-1",
  title: "Coordinate Geometry and Proof",
  goal: "I CAN use slopes, ratios, and coordinates to justify geometric relationships and calculate polygon measurements.",
  standards: ["HSG-GPE.B.4", "HSG-GPE.B.5", "HSG-GPE.B.6", "HSG-GPE.B.7"],
  vocabulary: [
    { term: "Slope", definition: "The ratio of vertical change to horizontal change between two points on a line, when the horizontal change is nonzero." },
    { term: "Parallel lines", definition: "Coplanar lines that never intersect; nonvertical parallel lines have equal slopes, and vertical lines are parallel to one another." },
    { term: "Perpendicular lines", definition: "Lines that intersect at a right angle; when both slopes are defined and nonzero, their slopes are negative reciprocals." },
    { term: "Partition", definition: "To divide a segment into parts of a specified length ratio." },
    { term: "Distance formula", definition: "The distance between $(x_1,y_1)$ and $(x_2,y_2)$ is $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
    { term: "Coordinate proof", definition: "A proof that assigns coordinates to geometric objects and uses algebra or coordinate formulas to establish a claim." },
  ],
  concepts: [
    {
      id: "geo-u5-lines-and-partition",
      title: "Slopes and segment partition",
      skill: "Use slope criteria to analyze parallel and perpendicular lines, and locate an interior point that divides a segment in a given ratio.",
      lesson: {
        sections: [
          {
            heading: "Slope as a geometric test",
            body: "For points $(x_1,y_1)$ and $(x_2,y_2)$, slope is $m=\\dfrac{y_2-y_1}{x_2-x_1}$. Parallel nonvertical lines have equal slopes. A vertical line has undefined slope, so it is parallel only to another vertical line. Perpendicular nonvertical lines with defined slopes have slope product $-1$; a horizontal line is perpendicular to a vertical line.",
          },
          {
            heading: "Finding a point in a ratio",
            body: "If point $P$ divides directed segment $\\overline{AB}$ internally so that $AP:PB=m:n$, then $P$ is the weighted average $\\left(\\dfrac{n x_A+m x_B}{m+n},\\dfrac{n y_A+m y_B}{m+n}\\right)$. The weights are opposite the endpoints: the coefficient of $A$ is $n$ and the coefficient of $B$ is $m$. Check that the result lies between the endpoints and is closer to the endpoint associated with the smaller segment length.",
          },
        ],
        keyFormulas: [
          { name: "Slope", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$" },
          { name: "Internal ratio point", statement: "$P=\\left(\\dfrac{n x_A+m x_B}{m+n},\\dfrac{n y_A+m y_B}{m+n}\\right)$ when $AP:PB=m:n$" },
        ],
        workedExample: {
          problem: "Find the point $P$ that divides the segment from $A=(-3,2)$ to $B=(9,8)$ in the ratio $AP:PB=1:2$.",
          solution: "Use the opposite-endpoint weights: $P=\\left(\\dfrac{2(-3)+1(9)}{3},\\dfrac{2(2)+1(8)}{3}\\right)=(1,4)$. The displacement from $A$ to $P$ is one-third of the displacement from $A$ to $B$, so the ratio is $1:2$ as required.",
        },
      },
      questions: [
        {
          id: "geo-u5-lines-and-partition-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A line passes through $(1,2)$ and $(5,10)$. Which slope must a nonvertical line parallel to it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$-2$" },
              { id: "c", text: "$-\\frac{1}{2}$" },
              { id: "d", text: "$8$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope formula", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$" },
              { kind: "property", name: "Parallel slopes", statement: "Nonvertical parallel lines have equal slopes." },
            ],
            steps: [
              { reasoning: "Calculate the given line's slope from the change in $y$ divided by the change in $x$.", working: "m=\\frac{10-2}{5-1}=\\frac{8}{4}=2", marks: 1, markCode: "M" },
              { reasoning: "A parallel line has that same slope.", working: "m_{\\parallel}=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $2$",
            commonErrors: ["Using the reciprocal or negative reciprocal, which is associated with perpendicular lines rather than parallel lines."],
          },
        },
        {
          id: "geo-u5-lines-and-partition-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line passes through $(-1,4)$ and $(3,2)$. Find the $y$-intercept of the line perpendicular to it that passes through $(2,-3)$.",
          response: { type: "numeric", parts: [{ label: "$y$-intercept", answer: -7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope formula", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$" },
              { kind: "property", name: "Perpendicular slopes", statement: "For nonzero defined slopes of perpendicular lines, $m_1m_2=-1$." },
              { kind: "law", name: "Point-slope form", statement: "$y-y_1=m(x-x_1)$ for a line with slope $m$ through $(x_1,y_1)$." },
            ],
            steps: [
              { reasoning: "Find the slope of the original line.", working: "m=\\frac{2-4}{3-(-1)}=-\\frac{2}{4}=-\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "The perpendicular slope is the negative reciprocal, $2$.", working: "m_{\\perp}=2", marks: 1, markCode: "A" },
              { reasoning: "Substitute the point and slope into point-slope form and write in slope-intercept form to identify the intercept.", working: "y+3=2(x-2)\\implies y=2x-7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y$-intercept $=-7$.",
            commonErrors: ["Using slope $-2$ instead of the negative reciprocal $2$.", "Reporting the point's $y$-coordinate rather than the line's intercept."],
          },
        },
        {
          id: "geo-u5-lines-and-partition-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $P$ divides the segment from $A=(0,0)$ to $B=(12,8)$ internally so that $AP:PB=1:2$. Find the coordinates of $P$.",
          response: { type: "numeric", parts: [{ label: "$x$-coordinate", answer: 4 }, { label: "$y$-coordinate", answer: 8 / 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Internal ratio partition", statement: "If $AP:PB=m:n$, then $P=\\left(\\dfrac{n x_A+m x_B}{m+n},\\dfrac{n y_A+m y_B}{m+n}\\right)$." },
              { kind: "property", name: "Weighted coordinates", statement: "The ratio point is a weighted average of the endpoint coordinates and lies on the segment." },
            ],
            steps: [
              { reasoning: "For ratio $1:2$, weight $A$ by 2 and $B$ by 1, then divide by the total weight 3 for the $x$-coordinate.", working: "x_P=\\frac{2(0)+1(12)}{3}=4", marks: 2, markCode: "M" },
              { reasoning: "Apply the same weighted average to the $y$-coordinates.", working: "y_P=\\frac{2(0)+1(8)}{3}=\\frac{8}{3}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$P=\\left(4,\\dfrac{8}{3}\\right)$.",
            commonErrors: ["Reversing the weights and getting a point two-thirds of the way from $A$ to $B$.", "Using only the $x$-coordinates and omitting the $y$-coordinate."],
          },
        },
        {
          id: "geo-u5-lines-and-partition-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Let $A=(-2,1)$ and $B=(10,7)$. Point $C$ divides $\\overline{AB}$ internally with $AC:CB=2:1$. A second line passes through $D=(0,4)$.",
          parts: [
            { label: "a", prompt: "Find the slope of $\\overline{AB}$.", marks: 2 },
            { label: "b", prompt: "Find the coordinates of $C$. Show the ratio weighting you use.", marks: 2 },
            { label: "c", prompt: "Find the slope of a line through $D$ perpendicular to $\\overline{AB}$.", marks: 2 },
            { label: "d", prompt: "Write the equation of that perpendicular line in slope-intercept form.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope formula", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$." },
              { kind: "definition", name: "Internal ratio partition", statement: "For $AC:CB=m:n$, $C=\\left(\\dfrac{n x_A+m x_B}{m+n},\\dfrac{n y_A+m y_B}{m+n}\\right)$." },
              { kind: "property", name: "Perpendicular slopes", statement: "For nonzero defined slopes, perpendicular slopes are negative reciprocals." },
              { kind: "law", name: "Point-slope form", statement: "$y-y_1=m(x-x_1)$." },
            ],
            steps: [
              { part: "a", reasoning: "Use the changes in the endpoint coordinates to calculate the segment slope.", working: "m_{AB}=\\frac{7-1}{10-(-2)}=\\frac{6}{12}=\\frac{1}{2}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The ratio $2:1$ weights $A$ by 1 and $B$ by 2; divide each weighted coordinate sum by 3.", working: "C=\\left(\\frac{(-2)+2(10)}{3},\\frac{1+2(7)}{3}\\right)=(6,5)", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The perpendicular slope is the negative reciprocal of $\\frac12$.", working: "m_{\\perp}=-2", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Use the perpendicular slope and point $D=(0,4)$; simplify to slope-intercept form.", working: "y-4=-2(x-0)\\implies y=-2x+4", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $m_{AB}=\\frac12$. (b) $C=(6,5)$. (c) $m_{\\perp}=-2$. (d) $y=-2x+4$.",
            commonErrors: ["Using the ratio weights in the wrong order when finding $C$.", "Taking the reciprocal without changing the sign for a perpendicular slope."],
          },
        },
      ],
    },
    {
      id: "geo-u5-coordinate-classification-measure",
      title: "Coordinate proofs and polygon measures",
      skill: "Use slopes, distances, and coordinates to classify quadrilaterals and calculate polygon perimeter and area.",
      lesson: {
        sections: [
          {
            heading: "Proving a quadrilateral's class",
            body: "Place vertices in order and examine their sides. Equal slopes establish parallel sides; negative-reciprocal slopes establish perpendicular sides. The distance formula tests whether side lengths are equal. A parallelogram has both pairs of opposite sides parallel; a rectangle is a parallelogram with a right angle; a rhombus has four equal sides; a square is both a rectangle and a rhombus. A coordinate proof should state which calculation establishes each needed property.",
          },
          {
            heading: "Perimeter and area from coordinates",
            body: "Perimeter is the sum of side lengths, so use the distance formula for any slanted side. For axis-aligned rectangles, multiply horizontal and vertical side lengths for area. For a triangle, use $A=\\frac12 bh$ when a base and its perpendicular height are easy to identify. For other polygons, divide the figure into triangles or rectangles, or use the shoelace formula. A diagonal is not a side unless the polygon's boundary includes it.",
          },
        ],
        keyFormulas: [
          { name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
          { name: "Triangle area", statement: "$A=\\dfrac12 bh$" },
          { name: "Shoelace formula", statement: "$A=\\dfrac12\\left|\\sum x_i y_{i+1}-\\sum y_i x_{i+1}\\right|$ for vertices listed in order." },
        ],
        workedExample: {
          problem: "Classify the quadrilateral with vertices $A=(0,0)$, $B=(4,0)$, $C=(4,3)$, and $D=(0,3)$, then find its perimeter and area.",
          solution: "The side vectors are horizontal or vertical, so adjacent sides are perpendicular. Their lengths are $4,3,4,3$, so opposite sides are equal and the quadrilateral is a rectangle. The perimeter is $4+3+4+3=14$ units, and the area is $4\\cdot3=12$ square units.",
        },
      },
      questions: [
        {
          id: "geo-u5-coordinate-classification-measure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two adjacent sides of a quadrilateral have slopes $0$ and undefined. Which fact do these slopes establish?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All four sides have equal length." },
              { id: "b", text: "The adjacent sides are parallel." },
              { id: "c", text: "The adjacent sides are perpendicular." },
              { id: "d", text: "The quadrilateral has two pairs of equal sides." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Horizontal and vertical lines", statement: "A horizontal line has slope 0, a vertical line has undefined slope, and they are perpendicular." },
              { kind: "definition", name: "Perpendicular", statement: "Perpendicular lines meet at a right angle." },
            ],
            steps: [
              { reasoning: "A slope of 0 identifies a horizontal side, while an undefined slope identifies a vertical side.", marks: 1, markCode: "B" },
              { reasoning: "Horizontal and vertical directions meet at a right angle, establishing perpendicular adjacent sides.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The adjacent sides are perpendicular.",
            commonErrors: ["Treating undefined slope as zero; the slopes describe vertical and horizontal lines, respectively."],
          },
        },
        {
          id: "geo-u5-coordinate-classification-measure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle has consecutive vertices $(0,0)$, $(6,0)$, $(6,4)$, and $(0,4)$. Find its perimeter.",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 20, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perimeter", statement: "The perimeter is the sum of the lengths of all boundary sides." },
              { kind: "property", name: "Axis-aligned side lengths", statement: "For horizontal and vertical segments, length is the absolute difference in the changing coordinate." },
            ],
            steps: [
              { reasoning: "The horizontal side length is the difference between the $x$-coordinates, and the vertical side length is the difference between the $y$-coordinates.", working: "\\ell=6-0=6,\\quad w=4-0=4", marks: 1, markCode: "M" },
              { reasoning: "A rectangle has two sides of each of these lengths.", working: "P=2\\ell+2w", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate the sum of the four boundary lengths.", working: "P=2(6)+2(4)=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ units.",
            commonErrors: ["Giving the area $24$ instead of the perimeter.", "Adding only one length and one width."],
          },
        },
        {
          id: "geo-u5-coordinate-classification-measure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has vertices $(0,0)$, $(8,0)$, and $(0,6)$. Find its area and perimeter.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 24, unit: "square units" }, { label: "Perimeter", answer: 24, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\dfrac12 bh$ for a base and its perpendicular height." },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
              { kind: "definition", name: "Perimeter", statement: "The perimeter is the sum of the lengths of the three sides." },
            ],
            steps: [
              { reasoning: "The horizontal and vertical legs are perpendicular, so they form a base-height pair of lengths 8 and 6.", working: "A=\\frac12(8)(6)=24", marks: 1, markCode: "M" },
              { reasoning: "The third side is the hypotenuse; use the distance formula (or Pythagorean theorem).", working: "\\sqrt{(8-0)^2+(0-6)^2}=\\sqrt{64+36}=10", marks: 2, markCode: "M" },
              { reasoning: "Add all three side lengths for the perimeter.", working: "P=8+6+10=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Area $=24$ square units; perimeter $=24$ units.",
            commonErrors: ["Using the hypotenuse as the triangle's height even though it is not perpendicular to the chosen base.", "Omitting the slanted side from the perimeter."],
          },
        },
        {
          id: "geo-u5-coordinate-classification-measure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A quadrilateral has vertices in order $A=(0,0)$, $B=(6,0)$, $C=(8,4)$, and $D=(2,4)$. Round any decimal perimeter to the nearest tenth.",
          parts: [
            { label: "a", prompt: "Find the slopes of $AB$ and $CD$.", marks: 2 },
            { label: "b", prompt: "Find the slopes of $BC$ and $DA$, and use all four slopes to justify why $ABCD$ is a parallelogram.", marks: 2 },
            { label: "c", prompt: "Find the perimeter of $ABCD$.", marks: 2 },
            { label: "d", prompt: "Find the area of $ABCD$.", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "Perimeter to nearest tenth", answer: 20.9, tolerance: 0.05, unit: "units" }, { label: "Area", answer: 24, unit: "square units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope formula", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$." },
              { kind: "theorem", name: "Parallelogram criterion", statement: "A quadrilateral with both pairs of opposite sides parallel is a parallelogram." },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
              { kind: "formula", name: "Area of a parallelogram", statement: "$A=bh$ when $h$ is the perpendicular distance between the parallel bases." },
            ],
            steps: [
              { part: "a", reasoning: "Both segments are horizontal, so compute their zero vertical change over their nonzero horizontal change.", working: "m_{AB}=0,\\quad m_{CD}=0", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Compute the slopes of the other pair; matching opposite slopes prove both pairs are parallel.", working: "m_{BC}=\\frac{4-0}{8-6}=2,\\quad m_{DA}=\\frac{0-4}{0-2}=2", marks: 2, markCode: "R" },
              { part: "c", reasoning: "The horizontal sides each have length 6; each slanted side has length $\\sqrt{2^2+4^2}=2\\sqrt5$. Add the four boundary lengths and round to the nearest tenth.", working: "P=6+2\\sqrt5+6+2\\sqrt5=12+4\\sqrt5\\approx20.944\\implies20.9", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Use horizontal base 6 and perpendicular height 4, the vertical distance between the parallel horizontal sides.", working: "A=6(4)=24", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $m_{AB}=m_{CD}=0$. (b) $m_{BC}=m_{DA}=2$, so both pairs of opposite sides are parallel and $ABCD$ is a parallelogram. (c) $P=12+4\\sqrt5\\approx20.9$ units. (d) $A=24$ square units.",
            commonErrors: ["Using a diagonal as a side when finding perimeter.", "Using slanted side length as the height for area instead of the perpendicular distance 4."],
            examinerNote: "The slope evidence in parts (a) and (b) establishes parallel opposite sides; the classification is justified by the parallelogram criterion.",
          },
        },
      ],
    },
  ],
};
