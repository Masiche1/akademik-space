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
            { id: "a", text: "$720°$" },
            { id: "b", text: "$180°$" },
            { id: "c", text: "$360°$" },
            { id: "d", text: "$540°$" },
          ], correctChoiceId: "c" },
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
        {
          id: "olm-u4-s1-an-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Each interior angle of a regular octagon is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$135°$" },
            { id: "b", text: "$120°$" },
            { id: "c", text: "$150°$" },
            { id: "d", text: "$144°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Regular polygon", statement: "Interior angle formula." }], steps: [{ reasoning: "$\\frac{(8-2)\\times180}{8}=135°$.", marks: 1, markCode: "A" }], finalAnswer: "$135°$" },
        },
        {
          id: "olm-u4-s1-an-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the sum of the interior angles of a heptagon.",
          response: { type: "numeric", parts: [{ label: "a", answer: 900 }] },
          markscheme: { principles: [{ kind: "formula", name: "Polygon sum", statement: "$(n-2)\\times180$." }], steps: [
            { reasoning: "$(7-2)\\times180=900°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $900°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$900°$" },
        },
        {
          id: "olm-u4-s1-an-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Two angles of a triangle are $47°$ and $63°$. Find the third angle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Triangle sum", statement: "Angles sum to $180°$." }], steps: [
            { reasoning: "$180-(47+63)=180-110=70°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $70°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $47+63+70=180$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$70°$" },
        },
        {
          id: "olm-u4-s1-an-q8", difficulty: "core", totalMarks: 1,
          stem: "A regular polygon has interior angle $156°$. How many sides does it have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "12" },
            { id: "b", text: "10" },
            { id: "c", text: "18" },
            { id: "d", text: "15" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Exterior angle", statement: "$360/n$." }], steps: [{ reasoning: "Exterior $=180-156=24°$, so $n=360/24=15$.", marks: 1, markCode: "A" }], finalAnswer: "15" },
        },
        {
          id: "olm-u4-s1-an-q9", difficulty: "core", totalMarks: 2,
          stem: "Three angles of a quadrilateral are $105°,80°,95°$. Find the fourth angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 80 }] },
          markscheme: { principles: [{ kind: "formula", name: "Polygon sum", statement: "Quadrilateral sum is $360°$." }], steps: [
            { reasoning: "$360-(105+80+95)=360-280=80°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $80°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$80°$" },
        },
        {
          id: "olm-u4-s1-an-q10", difficulty: "core", totalMarks: 3,
          stem: "Four angles of a pentagon are $100°,110°,120°,130°$. Find the fifth angle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Polygon sum", statement: "Pentagon sum is $540°$." }], steps: [
            { reasoning: "Known sum: $100+110+120+130=460°$.", marks: 1, markCode: "M" },
            { reasoning: "$540-460=80°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $80°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$80°$" },
        },
        {
          id: "olm-u4-s1-an-q11", difficulty: "challenge", totalMarks: 1,
          stem: "For a regular polygon, the interior angle is four times the exterior angle. How many sides does it have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "12" },
            { id: "c", text: "10" },
            { id: "d", text: "9" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "theorem", name: "Linear pair", statement: "Interior + exterior = $180°$." }], steps: [{ reasoning: "Exterior $=180/5=36°$, so $n=360/36=10$.", marks: 1, markCode: "A" }], finalAnswer: "10" },
        },
        {
          id: "olm-u4-s1-an-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Each exterior angle of a regular polygon is $15°$. Find the number of sides.",
          response: { type: "numeric", parts: [{ label: "a", answer: 24 }] },
          markscheme: { principles: [{ kind: "formula", name: "Exterior angle", statement: "$360/n$." }], steps: [
            { reasoning: "$n=360/15=24$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 24 sides.", marks: 1, markCode: "A" },
          ], finalAnswer: "24" },
        },
        {
          id: "olm-u4-s1-an-q13", difficulty: "challenge", totalMarks: 3,
          stem: "The interior angles of a polygon sum to $1800°$. Find the number of sides.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Polygon sum", statement: "$(n-2)\\times180=1800$." }], steps: [
            { reasoning: "$n-2=1800/180=10$.", marks: 1, markCode: "M" },
            { reasoning: "$n=12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12 sides.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olm-u4-s1-an-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which set of angles can be the three angles of a triangle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$30°,50°,90°$" },
            { id: "b", text: "$45°,55°,70°$" },
            { id: "c", text: "$50°,60°,80°$" },
            { id: "d", text: "$40°,60°,80°$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Triangle sum", statement: "Angles sum to $180°$." }], steps: [{ reasoning: "$40+60+80=180$, while the other sets do not.", marks: 1, markCode: "A" }], finalAnswer: "$40°,60°,80°$" },
        },
        {
          id: "olm-u4-s1-an-q15", difficulty: "challenge", totalMarks: 2,
          stem: "A regular polygon has interior angle $150°$. Find its exterior angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Linear pair", statement: "Interior + exterior = $180°$." }], steps: [
            { reasoning: "$180-150=30°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $30°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30°$" },
        },
        {
          id: "olm-u4-s1-an-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Find the sum of the interior angles of a nonagon.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1260°$" },
            { id: "b", text: "$1080°$" },
            { id: "c", text: "$900°$" },
            { id: "d", text: "$1440°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Polygon sum", statement: "$(n-2)\\times180$." }], steps: [{ reasoning: "$(9-2)\\times180=1260°$.", marks: 1, markCode: "A" }], finalAnswer: "$1260°$" },
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
            { id: "a", text: "Complementary" },
            { id: "b", text: "Equal" },
            { id: "c", text: "Always $90°$" },
            { id: "d", text: "Supplementary" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u4-s1-pa-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Alternate angles formed by parallel lines are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Complementary" },
            { id: "b", text: "Equal" },
            { id: "c", text: "Right angles" },
            { id: "d", text: "Supplementary" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Alternate angles", statement: "Equal." }], steps: [{ reasoning: "Standard parallel-line property.", marks: 1, markCode: "A" }], finalAnswer: "Equal" },
        },
        {
          id: "olm-u4-s1-pa-q6", difficulty: "foundation", totalMarks: 2,
          stem: "One co-interior angle between parallel lines is $72°$. Find the other co-interior angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 108 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Co-interior", statement: "Sum is $180°$." }], steps: [
            { reasoning: "$180-72=108°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $108°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$108°$" },
        },
        {
          id: "olm-u4-s1-pa-q7", difficulty: "foundation", totalMarks: 3,
          stem: "An angle between parallel lines is $65°$. Find the angle vertically opposite to its co-interior angle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Angle chase", statement: "Co-interior then vertical opposite." }], steps: [
            { reasoning: "Co-interior angle: $180-65=115°$.", marks: 1, markCode: "M" },
            { reasoning: "Vertical opposite angle is also $115°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $115°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$115°$" },
        },
        {
          id: "olm-u4-s1-pa-q8", difficulty: "core", totalMarks: 1,
          stem: "When two straight lines intersect, vertically opposite angles are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always $90°$" },
            { id: "b", text: "Supplementary" },
            { id: "c", text: "Equal" },
            { id: "d", text: "Complementary" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "theorem", name: "Vertical angles", statement: "Equal." }], steps: [{ reasoning: "Vertical opposite angles are equal.", marks: 1, markCode: "A" }], finalAnswer: "Equal" },
        },
        {
          id: "olm-u4-s1-pa-q9", difficulty: "core", totalMarks: 2,
          stem: "A transversal cuts two parallel lines. One angle is $48°$. Find the co-interior angle on the same side.",
          response: { type: "numeric", parts: [{ label: "a", answer: 132 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Co-interior", statement: "Sum is $180°$." }], steps: [
            { reasoning: "$180-48=132°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $132°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$132°$" },
        },
        {
          id: "olm-u4-s1-pa-q10", difficulty: "core", totalMarks: 3,
          stem: "An angle formed by a transversal is $40°$. A second angle is co-interior to the corresponding angle of the first. Find the second angle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Angle chase", statement: "Corresponding then co-interior." }], steps: [
            { reasoning: "Corresponding angle is also $40°$.", marks: 1, markCode: "M" },
            { reasoning: "Co-interior angle: $180-40=140°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $140°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$140°$" },
        },
        {
          id: "olm-u4-s1-pa-q11", difficulty: "challenge", totalMarks: 1,
          stem: "In a parallelogram, one angle is $55°$. What is the size of an adjacent angle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$125°$" },
            { id: "b", text: "$55°$" },
            { id: "c", text: "$65°$" },
            { id: "d", text: "$35°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "Parallelogram angles", statement: "Adjacent angles are supplementary." }], steps: [{ reasoning: "$180-55=125°$.", marks: 1, markCode: "A" }], finalAnswer: "$125°$" },
        },
        {
          id: "olm-u4-s1-pa-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Two co-interior angles are $x°$ and $(2x+30)°$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Co-interior", statement: "Sum is $180°$." }], steps: [
            { reasoning: "$x+2x+30=180$ → $3x=150$ → $x=50$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=50$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=50$" },
        },
        {
          id: "olm-u4-s1-pa-q13", difficulty: "challenge", totalMarks: 3,
          stem: "At an intersection of two lines, one angle is $3x°$ and an adjacent angle is $(2x+10)°$. Find both angles.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Linear pair", statement: "Adjacent angles sum to $180°$." }], steps: [
            { reasoning: "$3x+2x+10=180$ → $5x=170$ → $x=34$.", marks: 1, markCode: "M" },
            { reasoning: "Angles are $102°$ and $78°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $102+78=180$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$102°$ and $78°$" },
        },
        {
          id: "olm-u4-s1-pa-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A co-interior angle between parallel lines is $125°$. What is the corresponding angle to the first angle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$35°$" },
            { id: "b", text: "$55°$" },
            { id: "c", text: "$65°$" },
            { id: "d", text: "$125°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Angle chase", statement: "First angle then corresponding." }], steps: [{ reasoning: "First angle is $180-125=55°$; corresponding angle is also $55°$.", marks: 1, markCode: "A" }], finalAnswer: "$55°$" },
        },
        {
          id: "olm-u4-s1-pa-q15", difficulty: "challenge", totalMarks: 2,
          stem: "An angle and the angle vertically opposite to its alternate angle measure $x°$ and $(x+40)°$? Correct the statement by finding the actual angle when its alternate angle is $58°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 58 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Alternate and vertical angles", statement: "Both preserve equality." }], steps: [
            { reasoning: "Alternate angle is $58°$; its vertical opposite is also $58°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $58°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$58°$" },
        },
        {
          id: "olm-u4-s1-pa-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which pair of angles must be equal when a transversal crosses two parallel lines?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Interior angles on the same side" },
            { id: "b", text: "Corresponding angles" },
            { id: "c", text: "Co-interior angles" },
            { id: "d", text: "Angles on the same side of the transversal" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Corresponding", statement: "Equal for parallel lines." }], steps: [{ reasoning: "Corresponding and alternate angles are equal; co-interior angles are supplementary.", marks: 1, markCode: "A" }], finalAnswer: "Corresponding angles" },
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
