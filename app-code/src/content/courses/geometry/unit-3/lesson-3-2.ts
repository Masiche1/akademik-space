import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "geo-u3-3-2",
  code: "3-2",
  title: "Dilations and Similarity",
  goal: "I CAN describe and apply dilations, identify similarity transformations, and use scale factors to compare lengths, perimeters, and areas.",
  standards: ["HSG-SRT.A.1", "HSG-SRT.A.2"],
  vocabulary: [
    { term: "Dilation", definition: "A transformation that scales distances from a fixed center by a constant factor." },
    { term: "Center of dilation", definition: "The fixed point from which a dilation scales every point of a figure." },
    { term: "Scale factor", definition: "The number by which distances from the center of dilation are multiplied." },
    { term: "Image", definition: "The figure produced by applying a transformation to an original figure." },
    { term: "Similar figures", definition: "Figures with equal corresponding angle measures and proportional corresponding side lengths." },
    { term: "Similarity transformation", definition: "A composition of rigid motions and a dilation that maps one figure onto another." },
  ],
  concepts: [
    {
      id: "geo-u3-dilations-center-scale",
      title: "Dilations: center and scale factor",
      skill: "Find images under a dilation and explain how the scale factor changes lengths and preserves angle measures.",
      lesson: {
        sections: [
          {
            heading: "Dilations from a center",
            body: "A dilation with center $O$ and scale factor $k$ sends a point $P$ along the ray from $O$ through $P$ to $P'$, with $OP'=k\\cdot OP$ for positive $k$. The center stays fixed. If $k>1$, the image is enlarged; if $0<k<1$, it is reduced; if $k=1$, it is unchanged.\n\nFor a dilation centered at the origin, multiply both coordinates by $k$: $(x,y)\\mapsto(kx,ky)$. For center $(h,j)$, translate the center to the origin, scale, then translate back: $(x,y)\\mapsto(h+k(x-h),j+k(y-j))$.",
          },
          {
            heading: "What a dilation preserves",
            body: "A dilation preserves angle measures and maps a line not passing through the center to a parallel line. Every image length is $k$ times its original length, so corresponding side lengths have a constant ratio. Distances between points in the image are also multiplied by $k$.\n\nIf $k$ is positive, image points lie on the same rays from the center as the original points. A negative factor, when used, places them on the opposite rays; in this course, scale factors in the exercises are positive unless stated otherwise.",
          },
        ],
        keyFormulas: [
          { name: "Origin-centered dilation", statement: "$(x,y)\\mapsto(kx,ky)$" },
          { name: "Dilation about $(h,j)$", statement: "$(x,y)\\mapsto(h+k(x-h),j+k(y-j))$" },
          { name: "Length scale", statement: "$\\text{image length}=k\\cdot\\text{original length}$ for positive scale factor $k$." },
        ],
        workedExample: {
          problem: "Dilate $P(5,-1)$ by scale factor $\\frac{1}{2}$ about center $C(1,1)$. Find the image coordinates.",
          solution: "The vector from the center to the point is $\\langle5-1,-1-1\\rangle=\\langle4,-2\\rangle$. Halve that vector to get $\\langle2,-1\\rangle$, then add it to the center: $P'=(1+2,1-1)=(3,0)$.",
        },
      },
      questions: [
        {
          id: "geo-u3-dilations-center-scale-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A dilation centered at the origin has scale factor $3$. What is the image of $P(-2,4)$?",
          response: { type: "numeric", parts: [{ label: "$x$-coordinate", answer: -6 }, { label: "$y$-coordinate", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Origin-centered dilation", statement: "A dilation with center at the origin and scale factor $k$ sends $(x,y)$ to $(kx,ky)$." },
            ],
            steps: [
              { reasoning: "Multiply both coordinates by the scale factor 3.", working: "P'= (3(-2),3(4))=(-6,12)", marks: 1, markCode: "M" },
              { reasoning: "The resulting ordered pair is the image point.", working: "P'(-6,12)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P'(-6,12)$.",
            commonErrors: ["Multiplying only one coordinate by the scale factor."],
          },
        },
        {
          id: "geo-u3-dilations-center-scale-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A segment has length $14$ units. A dilation maps it to a segment of length $8.4$ units. Find the scale factor.",
          response: { type: "numeric", parts: [{ label: "Scale factor", answer: 0.6, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Dilation scale factor", statement: "$k=\\dfrac{\\text{image length}}{\\text{original length}}$." },
            ],
            steps: [
              { reasoning: "The scale factor is the ratio of image length to original length.", working: "k=\\frac{8.4}{14}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the ratio to a decimal or fraction.", working: "8.4\\div14=0.6", marks: 1, markCode: "A" },
              { reasoning: "Since the factor is between 0 and 1, this is a reduction, consistent with the shorter image segment.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$k=0.6$.",
            commonErrors: ["Using original divided by image, obtaining a factor greater than 1."],
          },
        },
        {
          id: "geo-u3-dilations-center-scale-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A dilation centered at $C(2,-1)$ maps $P(6,3)$ to $P'(11,8)$. Find the scale factor $k$ and the image of $Q(-2,1)$ under the same dilation.",
          response: { type: "numeric", parts: [{ label: "Scale factor $k$", answer: 2.25 }, { label: "$x$-coordinate of $Q'$", answer: -7 }, { label: "$y$-coordinate of $Q'$", answer: 3.5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Center dilation relation", statement: "For a positive dilation centered at $C$, $\\overrightarrow{CP'}=k\\overrightarrow{CP}$." },
            ],
            steps: [
              { reasoning: "Find the original and image vectors from the center using $P(6,3)$ and $P'(11,8)$.", working: "\\overrightarrow{CP}=(4,4),\\quad\\overrightarrow{CP'}=(9,9)", marks: 1, markCode: "M" },
              { reasoning: "Compare corresponding vector components to determine the common scale factor.", working: "k=\\frac{9}{4}=2.25", marks: 1, markCode: "A" },
              { reasoning: "Scale the vector from $C$ to $Q(-2,1)$ by 2.25.", working: "\\overrightarrow{CQ}=(-4,2),\\quad\\overrightarrow{CQ'}=(-9,4.5)", marks: 1, markCode: "M" },
              { reasoning: "Add the scaled vector to the center to get the image coordinates.", working: "Q'=(2-9,-1+4.5)=(-7,3.5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=2.25$ and $Q'(-7,3.5)$.",
            commonErrors: ["Scaling the coordinates directly about the origin rather than measuring vectors from the stated center."],
          },
        },
        {
          id: "geo-u3-dilations-center-scale-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Triangle $ABC$ has vertices $A(1,1)$, $B(5,1)$, and $C(1,4)$. Dilate it by scale factor $\\frac{1}{2}$ about center $A$. A coordinate plane diagram is described in words: the axes are shown, $A$ lies at $(1,1)$, $B$ is four units to its right, and $C$ is three units above it; the three vertices are joined by segments.",
          parts: [
            { label: "a", prompt: "Find $A'$, the image of the center under the dilation.", marks: 1 },
            { label: "b", prompt: "Find the coordinates of $B'$.", marks: 2 },
            { label: "c", prompt: "Find the coordinates of $C'$.", marks: 2 },
            { label: "d", prompt: "Find the image lengths $A'B'$ and $A'C'$, then state one property that confirms the image is a dilation of the original triangle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Center remains fixed", statement: "A dilation maps its center to itself." },
              { kind: "formula", name: "Center-vector scaling", statement: "For center $A$ and factor $k$, $\\overrightarrow{AX'}=k\\overrightarrow{AX}$." },
              { kind: "property", name: "Dilation lengths", statement: "All image distances are $k$ times their original distances, and angle measures are preserved." },
            ],
            steps: [
              { part: "a", reasoning: "The center of dilation remains fixed.", working: "A'=A=(1,1)", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The vector from $A$ to $B$ is $(4,0)$; halve this vector and add it to $A$.", working: "B'= (1,1)+\\frac12(4,0)=(3,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the image point.", working: "B'(3,1)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The vector from $A$ to $C$ is $(0,3)$; halve this vector and add it to $A$.", working: "C'=(1,1)+\\frac12(0,3)=(1,2.5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the image point.", working: "C'(1,2.5)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The original legs have lengths 4 and 3; each is multiplied by the scale factor one-half.", working: "A'B'=\\frac12(4)=2,\\quad A'C'=\\frac12(3)=1.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The image lengths are proportional to the original lengths by the same factor.", working: "\\frac{A'B'}{AB}=\\frac{A'C'}{AC}=\\frac12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Dilation also preserves corresponding angle measures, which is another defining property.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $A'(1,1)$. (b) $B'(3,1)$. (c) $C'(1,2.5)$. (d) $A'B'=2$, $A'C'=1.5$; lengths scale by $\\frac12$ and angles are preserved.",
            commonErrors: ["Moving the center instead of keeping it fixed.", "Halving the absolute coordinates rather than the vectors from the center."],
          },
        },
      ],
    },
    {
      id: "geo-u3-similarity-scale-effects",
      title: "Similarity and scale effects",
      skill: "Relate similarity transformations to corresponding side lengths, perimeter, and area.",
      lesson: {
        sections: [
          {
            heading: "Similarity transformations",
            body: `Figures are similar when a sequence of rigid motions and a dilation maps one onto the other. Corresponding angles are congruent, and corresponding side lengths are proportional. The ratio of image length to original length is the scale factor $k$.\n\nTo compare figures, match corresponding vertices in order, then divide a pair of corresponding side lengths in the same direction. If all ratios agree and the corresponding angles match, the correspondence is consistent with similarity.`,
          },
          {
            heading: "Perimeter and area scale differently",
            body: "Every length is multiplied by $k$, so perimeter is multiplied by $k$. Area is a product of two lengths, so it is multiplied by $k^2$. For instance, doubling every side doubles the perimeter but multiplies the area by four.\n\nIf the image is a reduction, use its positive scale factor less than 1. For example, a scale factor of $\\frac{2}{3}$ gives perimeter ratio $\\frac{2}{3}$ and area ratio $\\frac{4}{9}$, image to original.",
          },
        ],
        keyFormulas: [
          { name: "Corresponding length ratio", statement: "$k=\\dfrac{\\text{image side}}{\\text{original side}}$" },
          { name: "Perimeter ratio", statement: "$\\dfrac{P_{\\text{image}}}{P_{\\text{original}}}=k$" },
          { name: "Area ratio", statement: "$\\dfrac{A_{\\text{image}}}{A_{\\text{original}}}=k^2$" },
        ],
        workedExample: {
          problem: "A similar triangular sign is made at scale factor $1.5$ from the original sign. The original perimeter is 20 cm and its area is 12 cm$^2$. Find the new perimeter and area.",
          solution: "Perimeter scales by $k$: $P'=1.5(20)=30$ cm. Area scales by $k^2$: $A'=1.5^2(12)=2.25(12)=27$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "geo-u3-similarity-scale-effects-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two similar figures have image-to-original scale factor $4$. By what factor does the area change?",
          response: { type: "numeric", parts: [{ label: "Area scale factor", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area scale factor", statement: "Under a dilation with scale factor $k$, area is multiplied by $k^2$." },
            ],
            steps: [
              { reasoning: "Area scales with the square of the linear scale factor.", working: "4^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the square.", working: "4^2=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The area is multiplied by $16$.",
            commonErrors: ["Multiplying area by 4 rather than by the square of 4."],
          },
        },
        {
          id: "geo-u3-similarity-scale-effects-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A figure with area $45$ square units is dilated by scale factor $\\frac{2}{3}$. Find the image area.",
          response: { type: "numeric", parts: [{ label: "Image area", answer: 20, unit: "square units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area under dilation", statement: "$A'=k^2A$." },
            ],
            steps: [
              { reasoning: "Square the linear scale factor to obtain the area scale factor.", working: "(\\frac23)^2=\\frac49", marks: 1, markCode: "M" },
              { reasoning: "Multiply the original area by the area factor.", working: "A'=45\\cdot\\frac49", marks: 1, markCode: "M" },
              { reasoning: "Simplify to the image area.", working: "45\\cdot\\frac49=5\\cdot4=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ square units.",
            commonErrors: ["Using the linear factor $\\frac23$ directly on area, obtaining 30."],
          },
        },
        {
          id: "geo-u3-similarity-scale-effects-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two similar rectangles have perimeters 30 cm and 45 cm, respectively. The smaller rectangle has area 36 cm$^2$. Find the scale factor from the smaller rectangle to the larger one and the area of the larger rectangle.",
          response: { type: "numeric", parts: [{ label: "Scale factor", answer: 1.5 }, { label: "Larger area", answer: 81, unit: "square cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Perimeter scales linearly", statement: "For similar figures, the ratio of perimeters equals the ratio of corresponding side lengths." },
              { kind: "formula", name: "Area scale factor", statement: "$A_{large}=k^2A_{small}$." },
            ],
            steps: [
              { reasoning: "The perimeter ratio gives the linear scale factor from smaller to larger.", working: "k=\\frac{45}{30}=1.5", marks: 1, markCode: "M" },
              { reasoning: "Square the scale factor for the area ratio.", working: "k^2=1.5^2=2.25", marks: 1, markCode: "A" },
              { reasoning: "Multiply the smaller area by the area ratio.", working: "A_{large}=36(2.25)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to obtain the larger area.", working: "A_{large}=81\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=1.5$; the larger rectangle's area is $81$ cm$^2$.",
            commonErrors: ["Taking the area ratio to be 1.5 instead of $1.5^2$."],
          },
        },
        {
          id: "geo-u3-similarity-scale-effects-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two similar rectangular garden plans are shown by coordinate-style diagrams described in words: the smaller rectangle has vertices $A(0,0)$, $B(6,0)$, $C(6,4)$, and $D(0,4)$ in order; the larger rectangle has the corresponding vertices $A'(0,0)$, $B'(9,0)$, $C'(9,6)$, and $D'(0,6)$. All sides are straight segments and the vertex correspondence is $A\\leftrightarrow A'$, $B\\leftrightarrow B'$, $C\\leftrightarrow C'$, and $D\\leftrightarrow D'$.",
          parts: [
            { label: "a", prompt: "Find the scale factor from the smaller plan to the larger plan.", marks: 2 },
            { label: "b", prompt: "Find the perimeter of each plan.", marks: 2 },
            { label: "c", prompt: "Find the area of each plan and state the ratio of larger area to smaller area.", marks: 2 },
            { label: "d", prompt: "Explain why the area ratio is the square of the scale factor, using these dimensions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Similarity scale factor", statement: "$k=\\dfrac{\\text{larger corresponding length}}{\\text{smaller corresponding length}}$." },
              { kind: "formula", name: "Rectangle measures", statement: "$P=2(l+w)$ and $A=lw$." },
              { kind: "property", name: "Area scales quadratically", statement: "If each linear dimension scales by $k$, area scales by $k^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Compare corresponding horizontal side lengths (the vertical ratio agrees).", working: "k=\\frac{9}{6}=\\frac32=1.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Confirm the vertical side ratio is consistent.", working: "\\frac64=\\frac32", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use twice the sum of length and width for the smaller plan.", working: "P_s=2(6+4)=20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use the larger rectangle's dimensions.", working: "P_l=2(9+6)=30", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply side lengths to find each area.", working: "A_s=6(4)=24,\\quad A_l=9(6)=54", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Form and simplify the ratio larger area to smaller area.", working: "\\frac{54}{24}=\\frac94=2.25", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both dimensions scale by $\\frac32$, so the product of the two dimensions scales by the product of these factors.", working: "\\frac32\\cdot\\frac32=\\frac94", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The calculated area ratio matches the square of the linear factor.", working: "k^2=(\\frac32)^2=\\frac94=\\frac{54}{24}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k=\\frac32$. (b) Perimeters: 20 units and 30 units. (c) Areas: 24 square units and 54 square units; larger-to-smaller area ratio $\\frac94$. (d) The two dimensions each scale by $\\frac32$, so area scales by $(\\frac32)^2=\\frac94$.",
            commonErrors: ["Comparing non-corresponding sides when finding the factor.", "Using the linear factor rather than its square for area."],
          },
        },
      ],
    },
  ],
};
