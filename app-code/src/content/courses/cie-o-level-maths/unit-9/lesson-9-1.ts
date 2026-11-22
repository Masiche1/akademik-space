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
            { id: "a", text: "Orientation" },
            { id: "b", text: "Size and shape" },
            { id: "c", text: "Position" },
            { id: "d", text: "Angles only" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u9-s1-iso-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Point $(3,-2)$ is reflected in the y-axis. What is the image?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-3,2)$" },
            { id: "b", text: "$(3,-2)$" },
            { id: "c", text: "$(-3,-2)$" },
            { id: "d", text: "$(3,2)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Reflection", statement: "Reflect in y-axis by negating x." }], steps: [{ reasoning: "$(3,-2)\\to(-3,-2)$.", marks: 1, markCode: "A" }], finalAnswer: "$(-3,-2)$" },
        },
        {
          id: "olm-u9-s1-iso-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Point $(4,1)$ is rotated $90°$ anticlockwise about the origin. Find the y-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rotation", statement: "$90°$ anticlockwise sends $(x,y)\\to(-y,x)$." }], steps: [
            { reasoning: "$(4,1)\\to(-1,4)$.", marks: 1, markCode: "M" },
            { reasoning: "The y-coordinate is $4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u9-s1-iso-q7", difficulty: "core", totalMarks: 3,
          stem: "Point $(5,1)$ is translated by vector $(-2,4)$ and then reflected in the x-axis. Find the final position.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined transformation", statement: "Apply each transformation in order." }], steps: [
            { reasoning: "Translation gives $(5-2,1+4)=(3,5)$.", marks: 1, markCode: "M" },
            { reasoning: "Reflection in x-axis gives $(3,-5)$.", marks: 1, markCode: "M" },
            { reasoning: "Final position: $(3,-5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,-5)$" },
        },
        {
          id: "olm-u9-s1-iso-q8", difficulty: "core", totalMarks: 1,
          stem: "Point $(2,5)$ is reflected in the line $y=x$. What is the image?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-5,-2)$" },
            { id: "b", text: "$(-2,5)$" },
            { id: "c", text: "$(5,2)$" },
            { id: "d", text: "$(2,-5)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Reflection", statement: "Reflection in $y=x$ swaps coordinates." }], steps: [{ reasoning: "$(2,5)\\to(5,2)$.", marks: 1, markCode: "A" }], finalAnswer: "$(5,2)$" },
        },
        {
          id: "olm-u9-s1-iso-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Triangle $ABC$ has vertices $A(1,2)$, $B(4,2)$ and $C(1,6)$. It is reflected in the x-axis and then translated by vector $(0,-3)$. Find the new vertices and describe the single equivalent reflection.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined transformations", statement: "Apply in order, then compare with a single reflection." }], steps: [
            { reasoning: "After reflection in x-axis: $(1,-2),(4,-2),(1,-6)$.", marks: 1, markCode: "M" },
            { reasoning: "After translation $(0,-3)$: $(1,-5),(4,-5),(1,-9)$.", marks: 1, markCode: "M" },
            { reasoning: "The combined map sends $(x,y)$ to $(x,-y-3)$, a reflection in $y=-\\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "New vertices $(1,-5),(4,-5),(1,-9)$; equivalent reflection in $y=-\\frac32$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(1,-5),(4,-5),(1,-9)$; reflection in $y=-\\frac32$" },
        },
        {
          id: "olm-u9-s1-iso-q10", difficulty: "core", totalMarks: 2,
          stem: "Point $(-3,6)$ is rotated $90°$ clockwise about the origin. Find the x-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rotation", statement: "$90°$ clockwise sends $(x,y)\\to(y,-x)$." }], steps: [
            { reasoning: "$(-3,6)\\to(6,3)$.", marks: 1, markCode: "M" },
            { reasoning: "The x-coordinate is $6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olm-u9-s1-iso-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A rotation about the origin through $180°$ maps $(x,y)$ to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x,-y)$" },
            { id: "b", text: "$(-x,y)$" },
            { id: "c", text: "$(-x,-y)$" },
            { id: "d", text: "$(y,x)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Rotation", statement: "$180°$ rotation negates both coordinates." }], steps: [{ reasoning: "Both coordinates change sign.", marks: 1, markCode: "A" }], finalAnswer: "$(-x,-y)$" },
        },
        {
          id: "olm-u9-s1-iso-q12", difficulty: "core", totalMarks: 1,
          stem: "Which transformation leaves every point the same distance from a fixed centre?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shear" },
            { id: "b", text: "Rotation" },
            { id: "c", text: "Translation" },
            { id: "d", text: "Reflection" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Rotation", statement: "Distance from centre is preserved." }], steps: [{ reasoning: "Rotation is about a fixed centre.", marks: 1, markCode: "A" }], finalAnswer: "Rotation" },
        },
        {
          id: "olm-u9-s1-iso-q13", difficulty: "core", totalMarks: 2,
          stem: "Point $(8,-2)$ is translated by vector $(-5,3)$. Find the x-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Translation", statement: "Add the vector components." }], steps: [
            { reasoning: "New x-coordinate: $8-5=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u9-s1-iso-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A shape undergoes translation by vector $(2,1)$ followed by translation by vector $(-1,4)$. The equivalent single translation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(1,-3)$" },
            { id: "b", text: "$(-1,5)$" },
            { id: "c", text: "$(3,-3)$" },
            { id: "d", text: "$(1,5)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Combined translations", statement: "Add successive vectors." }], steps: [{ reasoning: "$(2,1)+(-1,4)=(1,5)$.", marks: 1, markCode: "A" }], finalAnswer: "$(1,5)$" },
        },
        {
          id: "olm-u9-s1-iso-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Point $(4,-5)$ is reflected in the horizontal line $y=1$. Find the y-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reflection", statement: "Reflect across $y=1$ using equal perpendicular distances." }], steps: [
            { reasoning: "Distance from $y=-5$ to $y=1$ is $6$, so the image is $6$ above: $1+6=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u9-s1-iso-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Point $P(4,1)$ is translated by vector $(2,-1)$ and then by vector $(-5,3)$. Find the final position and the equivalent single translation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined transformations", statement: "Translations add component-wise." }], steps: [
            { reasoning: "Combined vector: $(2,-1)+(-5,3)=(-3,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Apply to $P$: $(4-3,1+2)=(1,3)$.", marks: 1, markCode: "M" },
            { reasoning: "The equivalent single translation is $(-3,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Final position $(1,3)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(1,3)$; translation $(-3,2)$" },
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
            { id: "a", text: "$(1.5,2)$" },
            { id: "b", text: "$(5,6)$" },
            { id: "c", text: "$(6,8)$" },
            { id: "d", text: "$(9,12)$" },
          ], correctChoiceId: "c" },
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
        {
          id: "olm-u9-s1-en-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Point $(2,-1)$ is enlarged by scale factor $3$ with centre $(0,0)$. What is the image?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2/3,-1/3)$" },
            { id: "b", text: "$(6,-3)$" },
            { id: "c", text: "$(8,-4)$" },
            { id: "d", text: "$(5,2)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Enlargement", statement: "Multiply coordinates by the scale factor." }], steps: [{ reasoning: "$3(2,-1)=(6,-3)$.", marks: 1, markCode: "A" }], finalAnswer: "$(6,-3)$" },
        },
        {
          id: "olm-u9-s1-en-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Point $(8,-6)$ is enlarged by scale factor $1/2$ with centre $(0,0)$. Find the x-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Enlargement", statement: "Halving distances from the centre." }], steps: [
            { reasoning: "New x-coordinate: $8\\times\\frac12=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u9-s1-en-q7", difficulty: "core", totalMarks: 3,
          stem: "Point $(4,1)$ is enlarged by scale factor $3$ with centre $(2,2)$. Find the image.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Enlargement", statement: "Image $=(a+k(x-a),b+k(y-b))$." }], steps: [
            { reasoning: "Offset from centre: $(4-2,1-2)=(2,-1)$.", marks: 1, markCode: "M" },
            { reasoning: "Scale offset by $3$: $(6,-3)$; add centre: $(2+6,2-3)=(8,-1)$.", marks: 1, markCode: "M" },
            { reasoning: "Image: $(8,-1)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(8,-1)$" },
        },
        {
          id: "olm-u9-s1-en-q8", difficulty: "core", totalMarks: 2,
          stem: "Point $(3,5)$ is enlarged by scale factor $-1$ with centre $(1,1)$. Find the x-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Negative enlargement", statement: "Reflect through the centre as well as scaling." }], steps: [
            { reasoning: "Offset: $(3-1,5-1)=(2,4)$; multiply by $-1$: $(-2,-4)$.", marks: 1, markCode: "M" },
            { reasoning: "Add centre: $(1-2,1-4)=(-1,-3)$, so x-coordinate is $-1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-1" },
        },
        {
          id: "olm-u9-s1-en-q9", difficulty: "challenge", totalMarks: 1,
          stem: "An enlargement with scale factor $-2$ and centre $(0,0)$ maps $(1,2)$ to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(1/2,1/4)$" },
            { id: "b", text: "$(-2,-4)$" },
            { id: "c", text: "$(2,4)$" },
            { id: "d", text: "$(-2,4)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Negative scale factor", statement: "Multiply by $-2$ reverses direction." }], steps: [{ reasoning: "$-2(1,2)=(-2,-4)$.", marks: 1, markCode: "A" }], finalAnswer: "$(-2,-4)$" },
        },
        {
          id: "olm-u9-s1-en-q10", difficulty: "foundation", totalMarks: 2,
          stem: "What is the inverse enlargement scale factor for an enlargement with scale factor $4$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "property", name: "Inverse transformation", statement: "Enlargement inverse uses $1/k$." }], steps: [
            { reasoning: "Inverse scale factor: $1/4$.", marks: 1, markCode: "M" },
            { reasoning: "As a decimal: $0.25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.25" },
        },
        {
          id: "olm-u9-s1-en-q11", difficulty: "core", totalMarks: 1,
          stem: "Which point remains fixed under every enlargement with centre $(2,3)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,3)$" },
            { id: "b", text: "$(1,1)$" },
            { id: "c", text: "$(4,6)$" },
            { id: "d", text: "$(0,0)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Enlargement centre", statement: "The centre is invariant." }], steps: [{ reasoning: "Only the centre maps to itself.", marks: 1, markCode: "A" }], finalAnswer: "$(2,3)$" },
        },
        {
          id: "olm-u9-s1-en-q12", difficulty: "core", totalMarks: 3,
          stem: "Point $(5,3)$ is enlarged by scale factor $2$ with centre $(1,1)$ and then translated by vector $(-2,1)$. Find the final position.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined transformations", statement: "Enlarge first, then translate." }], steps: [
            { reasoning: "Enlargement: $(1+2(5-1),1+2(3-1))=(9,5)$.", marks: 1, markCode: "M" },
            { reasoning: "Translation: $(9-2,5+1)=(7,6)$.", marks: 1, markCode: "M" },
            { reasoning: "Final position: $(7,6)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(7,6)$" },
        },
        {
          id: "olm-u9-s1-en-q13", difficulty: "core", totalMarks: 2,
          stem: "A shape has area $12\\text{ cm}^2$. It is enlarged by scale factor $3$. Find the image area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 108 }] },
          markscheme: { principles: [{ kind: "property", name: "Area scale factor", statement: "Area is multiplied by $k^2$." }], steps: [
            { reasoning: "Area multiplier: $3^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "Image area: $12\\times9=108\\text{ cm}^2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$108\\text{ cm}^2$" },
        },
        {
          id: "olm-u9-s1-en-q14", difficulty: "challenge", totalMarks: 1,
          stem: "An enlargement with scale factor $-1$ and centre $O$ is equivalent to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Translation by $(1,1)$" },
            { id: "b", text: "Rotation of $90°$ about $O$" },
            { id: "c", text: "Reflection in the x-axis" },
            { id: "d", text: "Rotation of $180°$ about $O$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Equivalent transformations", statement: "Scale factor $-1$ reverses both coordinates." }], steps: [{ reasoning: "$(x,y)\\to(-x,-y)$ is a $180°$ rotation.", marks: 1, markCode: "A" }], finalAnswer: "Rotation of $180°$ about $O$" },
        },
        {
          id: "olm-u9-s1-en-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Point $(6,2)$ is enlarged by scale factor $1/2$ with centre $(2,2)$. Find the x-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Enlargement", statement: "Move halfway from centre to point." }], steps: [
            { reasoning: "Offset: $(6-2,2-2)=(4,0)$; half is $(2,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Add centre: $(2+2,2+0)=(4,2)$, so x-coordinate is $4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u9-s1-en-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Point $A(3,-1)$ is enlarged by scale factor $2$ with centre $(0,0)$ and then reflected in the y-axis. Find the final position and verify an equivalent two-step sequence using scale factor $-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined transformations", statement: "Compare order and signs of the scale factor." }], steps: [
            { reasoning: "Enlargement: $(6,-2)$; reflection in y-axis: $(-6,-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Equivalent sequence: enlarge by $-2$ gives $(-6,2)$, then reflect in x-axis gives $(-6,-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Both sequences give the same image.", marks: 1, markCode: "M" },
            { reasoning: "Final position: $(-6,-2)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-6,-2)$" },
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
