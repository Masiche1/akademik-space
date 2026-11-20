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
            { id: "a", text: "The perpendicular bisector" }, { id: "b", text: "A circle" }, { id: "c", text: "A parallel line" }, { id: "d", text: "An angle bisector" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Compasses and ruler only" }, { id: "b", text: "Protractor" }, { id: "c", text: "Calculator" }, { id: "d", text: "Set square only" },
          ], correctChoiceId: "a" },
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
