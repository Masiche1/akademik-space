import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "olm-u4-lesson-4-5",
  code: "4-5",
  title: "Loci and Geometrical Constructions",
  goal: "I CAN describe loci and perform basic geometrical constructions.",
  standards: ["4024: geometry"],
  vocabulary: [
    { term: "Locus", definition: "Set of points satisfying a condition." },
    { term: "Perpendicular bisector", definition: "Locus of points equidistant from two points." },
    { term: "Angle bisector", definition: "Locus of points equidistant from two lines." },
    { term: "Construction", definition: "Accurate drawing using only ruler and compasses." },
  ],
  concepts: [
    {
      id: "olm-u4-s5-loci",
      title: "Loci",
      skill: "Identify and sketch loci at O Level.",
      lesson: {
        sections: [
          { heading: "Common loci", body: "Points equidistant from two points A and B → perpendicular bisector of AB. Points equidistant from two intersecting lines → angle bisectors (both). Points at fixed distance r from point O → circle radius r. Points at fixed distance d from line L → two parallel lines. Points inside angle ABC equidistant from both arms → angle bisector ray." },
          { heading: "Combining loci", body: "Intersection of two loci gives the solution set — e.g. points equidistant from A, B AND at distance 5 from C = intersection of perpendicular bisector and circle. Sketch each locus, find intersections, label them. In exams, describe the locus in words then sketch it accurately." },
        ],
        keyFormulas: [
          { name: "Loci", statement: "Equidistant → bisector; fixed distance → circle/parallel lines" },
        ],
        workedExample: { problem: "Describe the locus of points equidistant from A(0,0) and B(4,0).", solution: "Perpendicular bisector of AB: vertical line $x=2$." },
      },
      questions: [
        {
          id: "olm-u4-s5-lo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The locus of points equidistant from two points is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An angle bisector" },
            { id: "b", text: "A circle" },
            { id: "c", text: "A parallel line" },
            { id: "d", text: "The perpendicular bisector" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Perp bisector." }], steps: [{ reasoning: "Standard result.", marks: 1, markCode: "A" }], finalAnswer: "Perpendicular bisector" },
        },
        {
          id: "olm-u4-s5-lo-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Describe the locus of points 3 cm from a fixed point O.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Circle." }], steps: [
            { reasoning: "Circle centre O radius 3 cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Circle radius 3" },
        },
        {
          id: "olm-u4-s5-lo-q3", difficulty: "core", totalMarks: 3,
          stem: "Describe the locus of points equidistant from two intersecting lines.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Angle bisector", statement: "Both bisectors." }], steps: [
            { reasoning: "Both angle bisectors of the angles formed.", marks: 1, markCode: "M" },
            { reasoning: "Answer: angle bisector(s).", marks: 1, markCode: "M" },
            { reasoning: "Two bisectors since two pairs of vertical angles.", marks: 1, markCode: "A" },
          ], finalAnswer: "Angle bisectors" },
        },
        {
          id: "olm-u4-s5-lo-q4", difficulty: "core", totalMarks: 4,
          stem: "A and B are 6 cm apart. Describe the locus of points P such that PA=PB and P is 4 cm from A.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection of loci", statement: "Bisector ∩ circle." }], steps: [
            { reasoning: "Locus 1: perpendicular bisector of AB.", marks: 1, markCode: "M" },
            { reasoning: "Locus 2: circle centre A radius 4.", marks: 1, markCode: "M" },
            { reasoning: "Intersection: two points where circle meets bisector.", marks: 1, markCode: "M" },
            { reasoning: "Answer: two points on the perpendicular bisector.", marks: 1, markCode: "A" },
          ], finalAnswer: "Two points on perpendicular bisector" },
        },
        {
          id: "olm-u4-s5-lo-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The locus of points 5 cm from a fixed line L is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An angle bisector" },
            { id: "b", text: "A circle of radius 5 cm" },
            { id: "c", text: "Two lines parallel to L, 5 cm away" },
            { id: "d", text: "The perpendicular bisector of L" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Fixed distance from line → parallel lines." }], steps: [{ reasoning: "Two parallel lines, one on each side.", marks: 1, markCode: "A" }], finalAnswer: "Two parallel lines" },
        },
        {
          id: "olm-u4-s5-lo-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The locus of points equidistant from two parallel lines is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An angle bisector" },
            { id: "b", text: "The line parallel to them and halfway between" },
            { id: "c", text: "A circle" },
            { id: "d", text: "The perpendicular bisector of a segment" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Midline." }], steps: [{ reasoning: "Equidistant from parallels → midline.", marks: 1, markCode: "A" }], finalAnswer: "The midline" },
        },
        {
          id: "olm-u4-s5-lo-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A is at $(0,0)$ and B is at $(8,0)$. Find the $x$-coordinate of the perpendicular bisector of AB.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Perp bisector", statement: "Through midpoint." }], steps: [
            { reasoning: "Midpoint $x=\\frac{0+8}{2}=4$; bisector is $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u4-s5-lo-q8", difficulty: "core", totalMarks: 1,
          stem: "Points inside an angle that are equidistant from both arms lie on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The perpendicular bisector of a segment" },
            { id: "b", text: "The angle bisector" },
            { id: "c", text: "A circle" },
            { id: "d", text: "A line parallel to one arm" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Angle bisector." }], steps: [{ reasoning: "Standard result.", marks: 1, markCode: "A" }], finalAnswer: "Angle bisector" },
        },
        {
          id: "olm-u4-s5-lo-q9", difficulty: "core", totalMarks: 3,
          stem: "A and B are 8 cm apart. Describe the locus of points P such that PA = PB and PA = 5 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection of loci", statement: "Bisector ∩ circle." }], steps: [
            { reasoning: "Locus 1: perpendicular bisector of AB.", marks: 1, markCode: "M" },
            { reasoning: "Locus 2: circle centre A radius 5 cm.", marks: 1, markCode: "M" },
            { reasoning: "Since 5 > 4 (half of AB), the circle meets the bisector at two points.", marks: 1, markCode: "A" },
          ], finalAnswer: "Two points on the perpendicular bisector" },
        },
        {
          id: "olm-u4-s5-lo-q10", difficulty: "core", totalMarks: 2,
          stem: "Find the $x$-coordinate of the perpendicular bisector of the segment joining $(0,0)$ and $(10,0)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "definition", name: "Perp bisector", statement: "Through midpoint." }], steps: [
            { reasoning: "Midpoint $x=\\frac{0+10}{2}=5$ → $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u4-s5-lo-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The locus of points equidistant from two intersecting lines consists of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Two parallel lines" },
            { id: "b", text: "A circle" },
            { id: "c", text: "The two angle bisectors" },
            { id: "d", text: "One angle bisector" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Both angle bisectors." }], steps: [{ reasoning: "Two pairs of vertical angles → two bisectors.", marks: 1, markCode: "A" }], finalAnswer: "The two angle bisectors" },
        },
        {
          id: "olm-u4-s5-lo-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A and B are 10 cm apart. Describe the locus of points P such that PA = PB and P is 7 cm from A.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection of loci", statement: "Bisector ∩ circle." }], steps: [
            { reasoning: "Locus 1: perpendicular bisector of AB.", marks: 1, markCode: "M" },
            { reasoning: "Locus 2: circle centre A radius 7 cm.", marks: 1, markCode: "M" },
            { reasoning: "7 > 5 (half of AB), so the circle cuts the bisector at two points.", marks: 1, markCode: "M" },
            { reasoning: "Answer: two points on the perpendicular bisector.", marks: 1, markCode: "A" },
          ], finalAnswer: "Two points on the perpendicular bisector" },
        },
        {
          id: "olm-u4-s5-lo-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A locus is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A circle" },
            { id: "b", text: "A single point" },
            { id: "c", text: "A straight line" },
            { id: "d", text: "The set of points satisfying a given condition" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Set of points satisfying condition." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "Set of points satisfying a condition" },
        },
        {
          id: "olm-u4-s5-lo-q14", difficulty: "core", totalMarks: 3,
          stem: "Describe the locus of points that are 3 cm from a line segment AB of length 4 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Locus", statement: "Offset of a segment." }], steps: [
            { reasoning: "Two parallel lines, 3 cm from the segment on each side, alongside the middle portion.", marks: 1, markCode: "M" },
            { reasoning: "Semicircles of radius 3 cm centred at A and B cap the ends.", marks: 1, markCode: "M" },
            { reasoning: "Answer: a 'stadium' shape (rectangle with semicircular ends).", marks: 1, markCode: "A" },
          ], finalAnswer: "Stadium shape" },
        },
        {
          id: "olm-u4-s5-lo-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A is at $(0,0)$ and B is at $(0,8)$. Point P satisfies PA = PB and PA = 5 cm. Find the coordinates of all possible positions of P.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Locus intersection", statement: "Bisector ∩ circle, coordinate form." }], steps: [
            { reasoning: "PA = PB → perpendicular bisector of AB: midpoint $(0,4)$, AB vertical → bisector $y=4$.", marks: 1, markCode: "M" },
            { reasoning: "PA = 5 → $x^2+y^2=25$; on $y=4$: $x^2+16=25$ → $x^2=9$ → $x=\\pm3$.", marks: 1, markCode: "M" },
            { reasoning: "Positions: $(3,4)$ and $(-3,4)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(3,4)$ and $(-3,4)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,4)$ and $(-3,4)$" },
        },
        {
          id: "olm-u4-s5-lo-q16", difficulty: "core", totalMarks: 2,
          stem: "How many points are equidistant from $(0,0)$ and $(6,0)$ and also 5 cm from $(0,0)$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Locus intersection", statement: "Line meets circle twice." }], steps: [
            { reasoning: "Bisector $x=3$ cuts the circle of radius 5 centred at origin at two points $(3,\\pm4)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2 points.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
      ],
    },
    {
      id: "olm-u4-s5-construct",
      title: "Geometrical constructions",
      skill: "Perform ruler-and-compass constructions at O Level.",
      lesson: {
        sections: [
          { heading: "Basic constructions", body: "Perpendicular bisector: arcs from both endpoints with radius > half the distance, intersect above and below, join intersections. Angle bisector: arc from vertex cutting both arms, then arcs from those points, join to vertex. Perpendicular from point to line: arcs from point cutting line, then larger arcs, join. All use only compasses and straight edge — no protractor." },
          { heading: "Accuracy", body: "Keep compass width unchanged for each pair of arcs. Draw construction lines lightly, final lines dark. For exam purposes, describe each step and ensure arcs actually intersect — radius must be large enough. Constructions are marked on accuracy and method, not measurement." },
        ],
        keyFormulas: [
          { name: "Method", statement: "Arcs intersect → join points" },
        ],
        workedExample: { problem: "Construct the perpendicular bisector of a 6 cm segment AB.", solution: "Arcs radius 4 cm from A and B above/below; join the two intersection points." },
      },
      questions: [
        {
          id: "olm-u4-s5-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "To construct a perpendicular bisector you need…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Protractor" },
            { id: "b", text: "Compasses and ruler only" },
            { id: "c", text: "Set square only" },
            { id: "d", text: "Calculator" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Construction", statement: "Ruler + compasses." }], steps: [{ reasoning: "Standard tools.", marks: 1, markCode: "A" }], finalAnswer: "Compasses and ruler" },
        },
        {
          id: "olm-u4-s5-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "What radius should compass arcs have for bisecting a 10 cm segment?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Arc radius", statement: "> half segment." }], steps: [
            { reasoning: "Greater than 5 cm (half of 10) so arcs intersect.", marks: 1, markCode: "M" },
            { reasoning: "Answer: e.g. 6 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: ">5 cm" },
        },
        {
          id: "olm-u4-s5-co-q3", difficulty: "core", totalMarks: 3,
          stem: "Describe the first step in constructing an angle bisector.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Angle bisector", statement: "Arc from vertex." }], steps: [
            { reasoning: "Draw an arc from the vertex cutting both arms of the angle.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Then arcs from intersection points, join to vertex.", marks: 1, markCode: "A" },
          ], finalAnswer: "Arc from vertex cutting both arms" },
        },
        {
          id: "olm-u4-s5-co-q4", difficulty: "core", totalMarks: 4,
          stem: "Construct an equilateral triangle on a 5 cm base using only compasses and ruler. Describe the method.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Equilateral", statement: "Arcs radius = side." }], steps: [
            { reasoning: "Draw base AB = 5 cm.", marks: 1, markCode: "M" },
            { reasoning: "Arcs radius 5 cm from A and B above base; they intersect at C.", marks: 1, markCode: "M" },
            { reasoning: "Join AC and BC — all sides 5 cm, all angles 60°.", marks: 1, markCode: "M" },
            { reasoning: "Method complete.", marks: 1, markCode: "A" },
          ], finalAnswer: "Arcs radius 5 cm from endpoints" },
        },
        {
          id: "olm-u4-s5-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "When constructing a perpendicular bisector, the compass arcs must have radius…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Equal to the length of the segment" },
            { id: "b", text: "Greater than half the length of the segment" },
            { id: "c", text: "Less than half the length of the segment" },
            { id: "d", text: "Any radius at all" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Arc radius", statement: "Must exceed half." }], steps: [{ reasoning: "Arcs must intersect above and below.", marks: 1, markCode: "A" }], finalAnswer: "Greater than half" },
        },
        {
          id: "olm-u4-s5-co-q6", difficulty: "foundation", totalMarks: 2,
          stem: "For a segment of length 16 cm, what is the smallest whole-number compass radius that guarantees the arcs intersect when constructing its perpendicular bisector?",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: { principles: [{ kind: "technique", name: "Arc radius", statement: "> half of 16 = 8." }], steps: [
            { reasoning: "Half of 16 is 8; radius must exceed 8, so smallest whole number is 9.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "9 cm" },
        },
        {
          id: "olm-u4-s5-co-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is NOT allowed in a geometrical construction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ruler" },
            { id: "b", text: "Pencil" },
            { id: "c", text: "Pair of compasses" },
            { id: "d", text: "Protractor" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "Construction", statement: "Ruler + compasses only." }], steps: [{ reasoning: "No measuring instruments.", marks: 1, markCode: "A" }], finalAnswer: "Protractor" },
        },
        {
          id: "olm-u4-s5-co-q8", difficulty: "core", totalMarks: 3,
          stem: "Describe how to construct a perpendicular to a given line from a point P that lies on the line.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular from point", statement: "Arcs on both sides then join." }], steps: [
            { reasoning: "With centre P, draw arcs of equal radius cutting the line at two points A and B on opposite sides of P.", marks: 1, markCode: "M" },
            { reasoning: "From A and B draw arcs of equal radius (greater than half of AB) on the same side; they intersect at C.", marks: 1, markCode: "M" },
            { reasoning: "Join P to C — PC is perpendicular to the line.", marks: 1, markCode: "A" },
          ], finalAnswer: "Join P to arc intersection point" },
        },
        {
          id: "olm-u4-s5-co-q9", difficulty: "core", totalMarks: 1,
          stem: "In constructing an angle bisector, after drawing an arc from the vertex, the next step is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Join the vertex to the midpoint of the arc" },
            { id: "b", text: "Draw arcs from the two points where it cuts the arms" },
            { id: "c", text: "Draw a perpendicular to one arm" },
            { id: "d", text: "Measure the angle with a protractor" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Angle bisector", statement: "Arcs from intersection points." }], steps: [{ reasoning: "Standard construction sequence.", marks: 1, markCode: "A" }], finalAnswer: "Arcs from the two intersection points" },
        },
        {
          id: "olm-u4-s5-co-q10", difficulty: "core", totalMarks: 1,
          stem: "The first step in constructing the perpendicular bisector of segment AB is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Draw arcs of equal radius from A and B that intersect" }, { id: "b", text: "Measure AB with a ruler" }, { id: "c", text: "Draw a line through the midpoint" }, { id: "d", text: "Construct an angle bisector" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Perp bisector", statement: "Arcs from endpoints." }], steps: [{ reasoning: "Arcs centred at A and B.", marks: 1, markCode: "A" }], finalAnswer: "Arcs from A and B" },
        },
        {
          id: "olm-u4-s5-co-q11", difficulty: "challenge", totalMarks: 1,
          stem: "To bisect an angle of 70°, the first arc should be drawn with centre at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The midpoint of one arm" },
            { id: "b", text: "The vertex of the angle" },
            { id: "c", text: "The opposite vertex of a triangle" },
            { id: "d", text: "Any point on the angle bisector" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Angle bisector", statement: "Arc from vertex." }], steps: [{ reasoning: "Centre is the vertex.", marks: 1, markCode: "A" }], finalAnswer: "The vertex" },
        },
        {
          id: "olm-u4-s5-co-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Describe how to construct a perpendicular to a line l from a point P that is not on l.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular from external point", statement: "Arcs from P then bisect." }], steps: [
            { reasoning: "From P draw an arc that cuts line l at two points A and B.", marks: 1, markCode: "M" },
            { reasoning: "From A and B draw equal-radius arcs (greater than half of AB) on the opposite side of l; they intersect at C.", marks: 1, markCode: "M" },
            { reasoning: "The line through C and the midpoint of AB is perpendicular to l; P lies on it because PA = PB.", marks: 1, markCode: "M" },
            { reasoning: "Method complete.", marks: 1, markCode: "A" },
          ], finalAnswer: "Arc from P, then bisect chord AB" },
        },
        {
          id: "olm-u4-s5-co-q13", difficulty: "core", totalMarks: 2,
          stem: "How many pairs of intersection points are needed to draw a perpendicular bisector?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Perp bisector", statement: "Two arc intersections." }], steps: [
            { reasoning: "Two pairs of arcs give two intersection points (one above, one below AB); joining them gives the bisector.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2 pairs.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u4-s5-co-q14", difficulty: "core", totalMarks: 3,
          stem: "Explain why the compass must not be adjusted between drawing the two arcs used to construct a perpendicular bisector.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Equal radii", statement: "Keeps points equidistant." }], steps: [
            { reasoning: "Equal radii make every point on both arcs the same distance from A and from B.", marks: 1, markCode: "M" },
            { reasoning: "The intersection points are therefore equidistant from A and B, so they lie on the perpendicular bisector.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Equal radii keep intersections equidistant" },
        },
        {
          id: "olm-u4-s5-co-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Describe how to construct a square on a given 4 cm line segment AB using only compasses and a ruler.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Square construction", statement: "Perpendiculars + equal lengths." }], steps: [
            { reasoning: "Construct the perpendicular to AB at A and at B.", marks: 1, markCode: "M" },
            { reasoning: "On each perpendicular, mark point C above A and D above B with AC = BD = 4 cm (arcs radius 4 cm from A and B).", marks: 1, markCode: "M" },
            { reasoning: "Join CD; check CD = 4 cm by arcs — all sides equal and angles 90°.", marks: 1, markCode: "M" },
            { reasoning: "Method complete: ABCD is a square.", marks: 1, markCode: "A" },
          ], finalAnswer: "Perpendiculars at A and B, mark 4 cm, join" },
        },
        {
          id: "olm-u4-s5-co-q16", difficulty: "core", totalMarks: 2,
          stem: "A segment is 9 cm long. State the smallest whole-number compass radius that guarantees the arcs intersect when constructing its perpendicular bisector.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Arc radius", statement: "> half of 9 = 4.5." }], steps: [
            { reasoning: "Radius must exceed 4.5, so smallest whole number is 5.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 cm" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u4-s5-loci-notes", title: "Loci & constructions — notes", summary: "Locus types and compass methods.",
      sections: [
        { heading: "Loci", body: "Equidistant points→bisector; fixed distance→circle/parallel lines; intersect for solutions." },
        { heading: "Construct", body: "Arcs intersect→join; radius > half for bisectors; ruler+compasses only." },
      ] },
  ],
};
