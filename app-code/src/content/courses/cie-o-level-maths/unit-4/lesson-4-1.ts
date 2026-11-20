import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olm-u4-lesson-4-1",
  code: "4-1",
  title: "Angles and Polygons",
  goal: "I CAN apply angle properties of polygons and parallel lines.",
  standards: ["4024: geometry"],
  vocabulary: [
    { term: "Interior angle", definition: "Angle inside polygon at a vertex." },
    { term: "Exterior angle", definition: "Angle outside polygon at a vertex." },
    { term: "Corresponding angles", definition: "Equal angles in same position at parallel lines." },
    { term: "Alternate angles", definition: "Equal angles between parallel lines on opposite sides." },
  ],
  concepts: [
    {
      id: "olm-u4-s1-angles",
      title: "Angles in polygons",
      skill: "Calculate angles in polygons at O Level.",
      lesson: {
        sections: [
          { heading: "Angle sums", body: "The interior angles of a polygon sum to $(n-2)\\times180°$ where $n$ is the number of sides. For a regular polygon each interior angle is $\\frac{(n-2)\\times180}{n}$. The exterior angles always sum to $360°$, so each exterior angle of a regular $n$-gon is $\\frac{360}{n}$ — and interior + exterior = $180°$ at each vertex." },
          { heading: "Triangles", body: "Triangle angles sum to $180°$; exterior angle equals sum of the two opposite interior angles. In isosceles triangles the base angles are equal; equilateral all $60°$. The largest angle is opposite the longest side — useful for checking impossibility (e.g. three angles of $80°,80°,30°$ can't form a triangle since $80+80>180$? Actually $80+80+30=190\\neq180$ — always verify the sum)." },
        ],
        keyFormulas: [
          { name: "Polygon sum", statement: "$(n-2)\\times180°$ interior; $360°$ exterior" },
          { name: "Regular polygon", statement: "Interior $=\\frac{(n-2)180}{n}$; exterior $=\\frac{360}{n}$" },
        ],
        workedExample: { problem: "Find the interior angle of a regular hexagon.", solution: "$n=6$: interior $=\\frac{(6-2)\\times180}{6}=\\frac{720}{6}=120°$. Check: exterior $=60°$, $120+60=180$ ✓." },
      },
      questions: [
        {
          id: "olm-u4-s1-an-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The interior angles of a quadrilateral sum to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$360°$" }, { id: "b", text: "$180°$" }, { id: "c", text: "$540°$" }, { id: "d", text: "$720°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Polygon sum", statement: "$(n-2)\\times180$." }], steps: [{ reasoning: "$(4-2)\\times180=360$.", marks: 1, markCode: "A" }], finalAnswer: "$360°$" },
        },
        {
          id: "olm-u4-s1-an-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the interior angle of a regular pentagon.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Regular polygon", statement: "Formula." }], steps: [
            { reasoning: "$\\frac{(5-2)\\times180}{5}=\\frac{540}{5}=108°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $108°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$108°$" },
        },
        {
          id: "olm-u4-s1-an-q3", difficulty: "core", totalMarks: 3,
          stem: "Three angles of a quadrilateral are $80°,95°,110°$. Find the fourth.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Angle sum", statement: "Subtract from 360." }], steps: [
            { reasoning: "$360-(80+95+110)=360-285=75°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $75°$.", marks: 1, markCode: "M" },
            { reasoning: "Check sum: $80+95+110+75=360$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$75°$" },
        },
        {
          id: "olm-u4-s1-an-q4", difficulty: "core", totalMarks: 4,
          stem: "Each exterior angle of a regular polygon is $24°$. Find the number of sides.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exterior angle", statement: "$360/n$." }], steps: [
            { reasoning: "$n=\\frac{360}{24}=15$.", marks: 1, markCode: "M" },
            { reasoning: "Check: interior $=\\frac{13\\times180}{15}=156°$; $156+24=180$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 sides.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "15" },
        },
      ],
    },
    {
      id: "olm-u4-s1-parallel",
      title: "Angles with parallel lines",
      skill: "Apply angle properties with parallel lines at O Level.",
      lesson: {
        sections: [
          { heading: "Angle pairs", body: "When a transversal crosses two parallel lines: corresponding angles are equal (same position), alternate angles are equal (Z-pattern), and co-interior (allied) angles sum to $180°$ (C-pattern). These three facts solve nearly every parallel-line angle problem. Vertical opposite angles are always equal regardless of parallels." },
          { heading: "Problem solving", body: "Label angles systematically: pick one known angle, chase through equal pairs and supplementary pairs to the target. Draw the diagram and mark equal angles — it prevents sign errors. For polygons with parallel sides (trapeziums, parallelograms), combine these rules with angle sums." },
        ],
        keyFormulas: [
          { name: "Angle pairs", statement: "Corresponding = alternate; co-interior sum to $180°$" },
        ],
        workedExample: { problem: "Two parallel lines are cut by a transversal. One angle is $65°$. Find the co-interior angle on the same side.", solution: "Co-interior angles sum to $180°$: $180-65=115°$." },
      },
      questions: [
        {
          id: "olm-u4-s1-pa-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Corresponding angles formed by parallel lines are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Equal" }, { id: "b", text: "Supplementary" }, { id: "c", text: "Complementary" }, { id: "d", text: "Always $90°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "Corresponding", statement: "Equal." }], steps: [{ reasoning: "Standard property.", marks: 1, markCode: "A" }], finalAnswer: "Equal" },
        },
        {
          id: "olm-u4-s1-pa-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Co-interior angles between parallel lines sum to…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Co-interior", statement: "Supplementary." }], steps: [
            { reasoning: "$180°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$180°$" },
        },
        {
          id: "olm-u4-s1-pa-q3", difficulty: "core", totalMarks: 3,
          stem: "A transversal crosses parallel lines. One angle is $110°$. Find the alternate angle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Alternate", statement: "Equal." }], steps: [
            { reasoning: "Alternate angles are equal: $110°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $110°$.", marks: 1, markCode: "M" },
            { reasoning: "Check via corresponding + vertical opposite. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$110°$" },
        },
        {
          id: "olm-u4-s1-pa-q4", difficulty: "core", totalMarks: 4,
          stem: "In a parallelogram, one angle is $65°$. Find the other three angles.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallelogram angles", statement: "Opposite equal, adjacent supplementary." }], steps: [
            { reasoning: "Opposite angle: $65°$.", marks: 1, markCode: "M" },
            { reasoning: "Adjacent angles: $180-65=115°$ each.", marks: 1, markCode: "M" },
            { reasoning: "All four: $65°,115°,65°,115°$.", marks: 1, markCode: "M" },
            { reasoning: "Check sum: $2(65)+2(115)=360$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$65°,115°,65°,115°$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u4-s1-ang-notes", title: "Angles — notes", summary: "Polygon sums and parallel-line angle pairs.",
      sections: [
        { heading: "Polygons", body: "Interior sum $(n-2)180°$; exterior $360°$; regular: divide by $n$." },
        { heading: "Parallel lines", body: "Corresponding/alternate equal; co-interior sum to $180°$." },
      ] },
  ],
};
