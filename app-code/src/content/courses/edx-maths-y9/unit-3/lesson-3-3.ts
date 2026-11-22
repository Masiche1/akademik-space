import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edm9-u3-lesson-3-3",
  code: "3-3",
  title: "Congruence and Similarity",
  goal: "I CAN prove triangles are congruent and use scale factors to find missing lengths in similar shapes.",
  standards: ["Y9 Geometry and Measures"],
  vocabulary: [
    { term: "Congruent", definition: "Exactly the same shape and size. Matching sides and angles are equal; one shape may be rotated, reflected or translated onto the other." },
    { term: "Similar", definition: "The same shape but not necessarily the same size. Matching angles are equal and matching sides are in the same ratio." },
    { term: "Scale factor", definition: "The number by which every length of a shape is multiplied to give the corresponding length of a similar shape." },
    { term: "Corresponding sides", definition: "Sides in matching positions in two congruent or similar shapes." },
    { term: "RHS", definition: "A congruence condition: a right angle, the hypotenuse and one other side are equal in both triangles." },
    { term: "Included angle", definition: "The angle between two given sides." },
  ],
  concepts: [
    {
      id: "edm9-u3-congruent-triangles",
      title: "Congruent triangles",
      skill: "Use SSS, SAS, ASA and RHS to decide whether two triangles are congruent and to justify the reasoning.",
      lesson: {
        sections: [
          {
            heading: "Four conditions",
            body: "Two triangles are congruent if one of these holds:\n\n- **SSS**: all three pairs of sides are equal.\n- **SAS**: two pairs of sides and the angle **between** them are equal.\n- **ASA**: two pairs of angles and one pair of corresponding sides are equal.\n- **RHS**: both have a right angle, equal hypotenuses and one other pair of equal sides.",
          },
          {
            heading: "Conditions that do not work",
            body: "Three equal angles (AAA) only guarantee similarity, because the triangles could be different sizes. Two sides and a non-included angle (SSA) can give two different triangles, so it is not enough unless the angle is a right angle (which is the RHS case).",
          },
          {
            heading: "Writing a proof",
            body: "Name the equal pairs, giving a reason for each (for example 'common side', 'opposite sides of a parallelogram', 'given'). State the condition, then write the congruence with vertices in matching order: if A matches P, B matches Q and C matches R, write triangle ABC is congruent to triangle PQR. Corresponding parts of congruent triangles are equal.",
          },
        ],
        keyFormulas: [
          { name: "Congruence conditions", statement: "SSS, SAS, ASA, RHS" },
        ],
        workedExample: {
          problem: "In triangles ABC and DEF, AB = DE = 6 cm, AC = DF = 9 cm and angle BAC = angle EDF = 50°. Explain why the triangles are congruent.",
          solution: "AB = DE, angle A = angle D, and AC = DF. The angle is between the two sides, so the condition is SAS. Triangle ABC is congruent to triangle DEF.",
        },
      },
      questions: [
        {
          id: "edm9-u3-congruent-triangles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is **not** a condition that proves two triangles are congruent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three pairs of equal sides (SSS)" },
              { id: "b", text: "Three pairs of equal angles (AAA)" },
              { id: "c", text: "A right angle, hypotenuse and one side (RHS)" },
              { id: "d", text: "Two sides and the included angle (SAS)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Similar versus congruent", statement: "Equal angles give similar triangles, which may be different sizes." },
            ],
            steps: [
              { reasoning: "AAA fixes the shape but not the size, so triangles with the same angles can be enlargements of each other. The other three conditions all fix the size.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** AAA",
            commonErrors: ["Thinking equal angles are enough to make triangles identical.", "Believing SAS works with a non-included angle."],
          },
        },
        {
          id: "edm9-u3-congruent-triangles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Triangle ABC is congruent to triangle PQR, with A matching P, B matching Q and C matching R. In triangle ABC, AB = 7 cm, BC = 9 cm, AC = 11 cm and angle ABC = 62°.\n\nWrite down the length of PR, in cm, and the size of angle PQR, in degrees.",
          response: {
            type: "numeric",
            parts: [
              { label: "PR (cm)", answer: 11 },
              { label: "Angle PQR (°)", answer: 62 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Congruent triangles", statement: "Corresponding sides and angles in congruent triangles are equal." },
            ],
            steps: [
              { reasoning: "PR joins P and R, which match A and C, so PR corresponds to AC.", marks: 1, markCode: "B" },
              { reasoning: "Write down the length.", working: "PR=AC=11", marks: 1, markCode: "B" },
              { reasoning: "Angle PQR is at Q, which matches B, so it equals angle ABC.", working: "\\angle PQR=62^\\circ", marks: 1, markCode: "B" },
            ],
            finalAnswer: "PR = 11 cm; angle PQR = 62°",
            commonErrors: ["Matching PR with AB or BC instead of AC.", "Giving 9 cm by pairing the wrong sides."],
          },
        },
        {
          id: "edm9-u3-congruent-triangles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Triangle PQR has a right angle at Q, with PR = 13 cm and QR = 5 cm. Triangle XYZ has a right angle at Y, with XZ = 13 cm and XY = 12 cm.\n\nShow that triangle PQR is congruent to triangle XYZ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$ where $c$ is the hypotenuse." },
              { kind: "theorem", name: "RHS congruence", statement: "Triangles with a right angle, equal hypotenuses and one other equal side are congruent." },
            ],
            steps: [
              { reasoning: "PR is the hypotenuse of triangle PQR, so use Pythagoras to find PQ.", working: "PQ^2=13^2-5^2=169-25=144", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "PQ=12", marks: 1, markCode: "A" },
              { reasoning: "Both triangles have a right angle, the hypotenuses are both 13 cm (PR = XZ), and PQ = XY = 12 cm.", marks: 1, markCode: "B" },
              { reasoning: "State the condition and the congruence with vertices in matching order.", working: "\\text{RHS: triangle }PQR\\equiv\\text{triangle }XYZ", marks: 1, markCode: "R" },
            ],
            finalAnswer: "PQ = 12 cm, so by RHS, triangle PQR is congruent to triangle XYZ.",
            commonErrors: ["Assuming QR = XY without calculation.", "Naming the condition without showing the right angle and the hypotenuse."],
            examinerNote: "The conclusion must name RHS (or state right angle, hypotenuse, side).",
          },
        },
        {
          id: "edm9-u3-congruent-triangles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "ABCD is a parallelogram. The diagonal AC is drawn, splitting the parallelogram into triangle ABC and triangle CDA. Angle ABC = 74° and the area of the parallelogram is 84 cm².",
          parts: [
            { label: "a", prompt: "Write down three pairs of equal sides in triangles ABC and CDA, giving a reason for each.", marks: 2 },
            { label: "b", prompt: "Name the congruence condition and write down which triangle is congruent to triangle ABC, with the vertices in matching order.", marks: 2 },
            { label: "c", prompt: "Write down the size of angle CDA, in degrees. Give a reason.", marks: 2 },
            { label: "d", prompt: "Work out the area of triangle ABC, in cm².", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) angle CDA (°)", answer: 74 },
              { label: "(d) area of triangle ABC (cm²)", answer: 42 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallelogram", statement: "Opposite sides of a parallelogram are equal." },
              { kind: "theorem", name: "SSS congruence", statement: "Triangles with three pairs of equal sides are congruent." },
              { kind: "property", name: "Congruent triangles", statement: "Congruent triangles have equal corresponding angles and equal areas." },
            ],
            steps: [
              { part: "a", reasoning: "Opposite sides of a parallelogram are equal.", working: "AB=CD,\\quad BC=DA", marks: 1, markCode: "B" },
              { part: "a", reasoning: "AC is shared by both triangles.", working: "AC=CA\\text{ (common side)}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "All three pairs of sides are equal.", working: "\\text{SSS}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A matches C, B matches D and C matches A.", working: "\\text{triangle }ABC\\equiv\\text{triangle }CDA", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Angle CDA is at D, which matches B, so it equals angle ABC.", working: "\\angle CDA=74^\\circ", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Reason: corresponding angles in congruent triangles are equal (also, opposite angles of a parallelogram are equal).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Congruent triangles have equal areas, so each is half the parallelogram.", working: "84\\div2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "42", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) AB = CD, BC = DA, AC common. (b) SSS; triangle ABC is congruent to triangle CDA. (c) 74°. (d) 42 cm².",
            commonErrors: ["Writing the congruence as ABC and ACD, which gives the wrong matching of vertices.", "Not stating that AC is a common side."],
          },
        },
      ],
    },
    {
      id: "edm9-u3-similar-shapes",
      title: "Similar shapes and scale factors",
      skill: "Use scale factors to find missing lengths in similar shapes.",
      lesson: {
        sections: [
          {
            heading: "What similar means",
            body: "Two shapes are similar if one is an enlargement of the other. All corresponding angles are equal and all corresponding lengths are in the same ratio. This ratio is the **scale factor**. If the scale factor from shape A to shape B is $k$, every length in A is multiplied by $k$ to give the matching length in B.",
          },
          {
            heading: "Finding the scale factor",
            body: "Divide a length in the new shape by the matching length in the original: scale factor $=\\frac{\\text{new}}{\\text{old}}$. Always match corresponding sides carefully, for example shortest with shortest. Then multiply or divide other lengths by it. A scale factor less than 1 means a reduction.",
          },
          {
            heading: "Similar triangles in diagrams",
            body: "A line drawn parallel to one side of a triangle makes a smaller triangle similar to the whole: corresponding angles are equal. Use the full lengths of the sides of the large triangle (for example AB, not just DB) when finding the scale factor. To test for similarity, check that all pairs of corresponding sides are in the same ratio.",
          },
        ],
        keyFormulas: [
          { name: "Scale factor", statement: "$k=\\dfrac{\\text{new length}}{\\text{original length}}$" },
        ],
        workedExample: {
          problem: "Triangle ABC is similar to triangle PQR. AB = 4 cm, BC = 6 cm and PQ = 10 cm. Work out QR.",
          solution: "AB matches PQ, so the scale factor is $\\frac{10}{4}=2.5$. BC matches QR, so $QR=6\\times2.5=15$ cm.",
        },
      },
      questions: [
        {
          id: "edm9-u3-similar-shapes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rectangle A measures 4 cm by 6 cm. Rectangle B is similar to rectangle A. The shorter side of rectangle B is 10 cm. What is the length of the longer side of rectangle B?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16 cm" },
              { id: "b", text: "14 cm" },
              { id: "c", text: "12 cm" },
              { id: "d", text: "15 cm" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scale factor", statement: "Corresponding lengths of similar shapes are multiplied by the same scale factor." },
            ],
            steps: [
              { reasoning: "Find the scale factor from the shorter sides.", working: "10\\div4=2.5", marks: 1, markCode: "M" },
              { reasoning: "Multiply the longer side by the scale factor.", working: "6\\times2.5=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 15 cm",
            commonErrors: ["Adding 6 to both sides (additive thinking), giving 12 cm.", "Using a scale factor of 2 or 3."],
          },
        },
        {
          id: "edm9-u3-similar-shapes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Triangle ABC is similar to triangle DEF. AB = 6 cm, BC = 8 cm, AC = 10 cm and DE = 9 cm, where DE corresponds to AB.\n\nWork out the lengths of EF and DF, in cm.",
          response: {
            type: "numeric",
            parts: [
              { label: "EF (cm)", answer: 12 },
              { label: "DF (cm)", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scale factor", statement: "Corresponding lengths of similar shapes are multiplied by the same scale factor." },
            ],
            steps: [
              { reasoning: "Divide the new length DE by the matching original length AB.", working: "k=9\\div6=1.5", marks: 1, markCode: "M" },
              { reasoning: "EF corresponds to BC.", working: "EF=8\\times1.5=12", marks: 1, markCode: "A" },
              { reasoning: "DF corresponds to AC.", working: "DF=10\\times1.5=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "EF = 12 cm, DF = 15 cm",
            commonErrors: ["Using the difference 9 - 6 = 3 and adding it to each side.", "Matching EF with AC."],
          },
        },
        {
          id: "edm9-u3-similar-shapes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In triangle ABC, D is a point on AB and E is a point on AC such that DE is parallel to BC. AD = 4 cm, DB = 2 cm and DE = 5 cm.\n\nWork out the length of BC, in cm.",
          response: { type: "numeric", parts: [{ label: "BC", answer: 7.5, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallel lines", statement: "Corresponding angles are equal, so triangle ADE is similar to triangle ABC." },
              { kind: "definition", name: "Scale factor", statement: "$k=\\frac{\\text{new}}{\\text{original}}$." },
            ],
            steps: [
              { reasoning: "DE is parallel to BC, so corresponding angles at D and B (and at E and C) are equal; triangles ADE and ABC are similar.", marks: 1, markCode: "R" },
              { reasoning: "Find the full side AB.", working: "AB=4+2=6", marks: 1, markCode: "B" },
              { reasoning: "Scale factor from triangle ADE to triangle ABC.", working: "k=6\\div4=1.5", marks: 1, markCode: "M" },
              { reasoning: "BC corresponds to DE.", working: "BC=5\\times1.5=7.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7.5 cm",
            commonErrors: ["Using AD : DB = 4 : 2 instead of AD : AB.", "Using 6 ÷ 2 = 3 as the scale factor."],
          },
        },
        {
          id: "edm9-u3-similar-shapes-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Triangle ABC has sides AB = 8 cm, BC = 12 cm and AC = 14 cm. Triangle PQR is similar to triangle ABC, where PQ corresponds to AB, QR to BC and PR to AC. PQ = 10 cm.\n\nTriangle STU has sides ST = 4 cm, TU = 6 cm and SU = 8 cm.",
          parts: [
            { label: "a", prompt: "Work out the scale factor of the enlargement from triangle ABC to triangle PQR.", marks: 2 },
            { label: "b", prompt: "Work out the lengths of QR and PR, in cm.", marks: 3 },
            { label: "c", prompt: "Work out the perimeter of triangle PQR, in cm.", marks: 2 },
            { label: "d", prompt: "Is triangle STU similar to triangle ABC? You must show your working.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) scale factor", answer: 1.25 },
              { label: "(b) QR (cm)", answer: 15 },
              { label: "(b) PR (cm)", answer: 17.5 },
              { label: "(c) perimeter (cm)", answer: 42.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scale factor", statement: "$k=\\frac{\\text{new}}{\\text{original}}$." },
              { kind: "definition", name: "Similar triangles", statement: "Triangles are similar if all pairs of corresponding sides are in the same ratio." },
            ],
            steps: [
              { part: "a", reasoning: "PQ corresponds to AB.", working: "k=10\\div8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "k=1.25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply BC by the scale factor.", working: "QR=12\\times1.25=15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply AC by the scale factor.", working: "PR=14\\times1.25=17.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Show a correct method for the lengths (multiplying by the scale factor from part a).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add the three sides.", working: "10+15+17.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate. (Check: ABC has perimeter 34, and $34\\times1.25=42.5$.)", working: "42.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compare the ratios of the shortest, middle and longest sides.", working: "\\frac{4}{8}=0.5,\\quad\\frac{6}{12}=0.5", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Compare the longest sides.", working: "\\frac{8}{14}=\\frac47\\ne0.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The ratios are not all equal, so the triangles are not similar.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 1.25. (b) QR = 15 cm, PR = 17.5 cm. (c) 42.5 cm. (d) No: the ratios 0.5, 0.5 and 4/7 are not all equal.",
            commonErrors: ["In (a), dividing 8 by 10 to get 0.8 and then using it to enlarge.", "In (d), concluding similar because two ratios match."],
            examinerNote: "(c) ft from (b).",
          },
        },
      ],
    },
  ],
};
