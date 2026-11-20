import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "olm-u9-lesson-9-1",
  code: "9-1",
  title: "Transformations",
  goal: "I CAN describe and perform reflections, rotations, translations and enlargements.",
  standards: ["4024: transformations"],
  vocabulary: [
    { term: "Reflection", definition: "Mirror image in a mirror line." },
    { term: "Rotation", definition: "Turn about a centre through an angle." },
    { term: "Translation", definition: "Slide by a vector $(a,b)$." },
    { term: "Enlargement", definition: "Scale change by factor $k$ from a centre." },
  ],
  concepts: [
    {
      id: "olm-u9-s1-isometries",
      title: "Reflections, rotations and translations",
      skill: "Perform and describe isometric transformations at O Level.",
      lesson: {
        sections: [
          { heading: "The three isometries", body: "Reflections flip a shape in a mirror line — every point is the same perpendicular distance on the other side. Rotations turn a shape about a fixed centre through an angle (clockwise or anticlockwise). Translations slide every point by the same vector $(a,b)$ — add $a$ to x-coordinates and $b$ to y-coordinates. All three preserve size and shape." },
          { heading: "Describing transformations", body: "To describe a transformation between two shapes: check if size changed (enlargement), if orientation flipped (reflection), or if it just moved/turned (rotation/translation). For reflections, give the mirror line equation. For rotations, give centre and angle. For translations, give the vector. Multiple transformations can be combined — apply them in order." },
        ],
        keyFormulas: [
          { name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" },
          { name: "Enlargement", statement: "Scale factor $k$ from centre $(a,b)$" },
        ],
        workedExample: { problem: "Point $(3,2)$ is translated by vector $(-1,4)$. Find the image.", solution: "$(3+(-1), 2+4) = (2,6)$." },
      },
      questions: [
        {
          id: "olm-u9-s1-iso-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A reflection preserves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Size and shape" }, { id: "b", text: "Orientation" }, { id: "c", text: "Position" }, { id: "d", text: "Angles only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Isometry", statement: "Preserves size/shape." }], steps: [{ reasoning: "Reflection is an isometry.", marks: 1, markCode: "A" }], finalAnswer: "Size and shape" },
        },
        {
          id: "olm-u9-s1-iso-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Point $(5,3)$ is reflected in the x-axis. Find the image.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reflection", statement: "Negate y for x-axis." }], steps: [
            { reasoning: "$(5,-3)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(5,-3)$" },
        },
        {
          id: "olm-u9-s1-iso-q3", difficulty: "core", totalMarks: 3,
          stem: "Point $(2,5)$ is rotated 90° clockwise about the origin. Find the image.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rotation", statement: "$(x,y)\\to(y,-x)$ for 90° CW." }], steps: [
            { reasoning: "$(x,y)\\to(y,-x)$: $(2,5)\\to(5,-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(5,-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: 90° CW about origin maps $(1,0)\\to(0,-1)$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(5,-2)$" },
        },
        {
          id: "olm-u9-s1-iso-q4", difficulty: "core", totalMarks: 4,
          stem: "Triangle with vertices $(1,1)$, $(3,1)$, $(1,4)$ is translated by vector $(2,-1)$. Find the new vertices.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Translation", statement: "Add vector to each point." }], steps: [
            { reasoning: "$(1,1)\\to(3,0)$; $(3,1)\\to(5,0)$; $(1,4)\\to(3,3)$.", marks: 1, markCode: "M" },
            { reasoning: "All points shifted by same vector — shape preserved.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Check: side lengths unchanged ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,0),(5,0),(3,3)$" },
        },
      ],
    },
    {
      id: "olm-u9-s1-enlargement",
      title: "Enlargements and combinations",
      skill: "Perform enlargements and combined transformations at O Level.",
      lesson: {
        sections: [
          { heading: "Enlargement", body: "An enlargement scales a shape by factor $k$ from a fixed centre point. Every point moves to $k$ times its distance from the centre. $k>1$ enlarges, $0<k<1$ shrinks, $k<0$ also flips (inverts through centre). The centre stays fixed. To enlarge a point $(x,y)$ from centre $(a,b)$: new point $=(a+k(x-a),\\ b+k(y-b))$." },
          { heading: "Combined transformations", body: "Transformations can be applied in sequence — the result depends on order. E.g. reflect then translate differs from translate then reflect. To find a single equivalent transformation, apply each step to the vertices and compare. Inverse transformations undo the original: reflection is self-inverse; rotation by $\\theta$ has inverse rotation by $-\\theta$; translation by $(a,b)$ has inverse $(-a,-b)$; enlargement by $k$ has inverse $\\frac1k$." },
        ],
        keyFormulas: [
          { name: "Enlargement", statement: "$(x,y)\\to(a+k(x-a),b+k(y-b))$" },
          { name: "Inverse", statement: "Undo in reverse order" },
        ],
        workedExample: { problem: "Point $(4,2)$ enlarged by factor 2 from centre $(1,1)$. Find image.", solution: "$(1+2(4-1), 1+2(2-1)) = (1+6, 1+2) = (7,3)$." },
      },
      questions: [
        {
          id: "olm-u9-s1-en-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An enlargement with scale factor 2 from centre (0,0) maps (3,4) to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(6,8)$" }, { id: "b", text: "$(1.5,2)$" }, { id: "c", text: "$(5,6)$" }, { id: "d", text: "$(9,12)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Enlargement", statement: "Multiply by k." }], steps: [{ reasoning: "$2\\times(3,4)=(6,8)$.", marks: 1, markCode: "A" }], finalAnswer: "$(6,8)$" },
        },
        {
          id: "olm-u9-s1-en-q2", difficulty: "foundation", totalMarks: 2,
          stem: "What is the inverse of a translation by vector $(3,-2)$?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Negate vector." }], steps: [
            { reasoning: "Translation by $(-3,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-3,2)$" },
        },
        {
          id: "olm-u9-s1-en-q3", difficulty: "core", totalMarks: 3,
          stem: "Point $(6,4)$ is enlarged by factor $\\frac12$ from centre $(2,0)$. Find the image.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Enlargement", statement: "Centre + k×offset." }], steps: [
            { reasoning: "$(2+\\frac12(6-2), 0+\\frac12(4-0))=(2+2,2)=(4,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(4,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Check: halfway between centre and original ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(4,2)$" },
        },
        {
          id: "olm-u9-s1-en-q4", difficulty: "core", totalMarks: 4,
          stem: "Point A(1,2) is reflected in y-axis then translated by (3,0). Find final position and describe the single transformation equivalent.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined", statement: "Apply in order." }], steps: [
            { reasoning: "Reflect in y-axis: $(1,2)\\to(-1,2)$; translate $(3,0)$: $\\to(2,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Final position $(2,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Equivalent single transformation: translation by $(1,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,2)$; translation $(1,0)$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u9-s1-trans-notes", title: "Transformations — notes", summary: "Reflection, rotation, translation, enlargement.",
      sections: [
        { heading: "Isometries", body: "Reflection (mirror), rotation (turn), translation (slide) — preserve size/shape." },
        { heading: "Enlargement", body: "Scale factor $k$ from centre; $k<0$ inverts; inverse is $1/k$." },
      ] },
  ],
};
