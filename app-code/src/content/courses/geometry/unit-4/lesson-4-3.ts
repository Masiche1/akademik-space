import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "geo-u4-lesson-4-3",
  code: "4-3",
  title: "Arc Length, Sectors and Equations of Circles",
  goal: "I CAN calculate arc lengths and sector areas using degree or radian measures, and analyze circle equations in the coordinate plane.",
  standards: ["HSG-C.B.5", "HSG-GPE.A.1", "HSG-GPE.B.4"],
  vocabulary: [
    { term: "Radian", definition: "The measure of a central angle equal to the ratio of its intercepted arc length to the circle's radius." },
    { term: "Arc length", definition: "The distance measured along an arc of a circle." },
    { term: "Sector", definition: "The region of a circle bounded by two radii and the intercepted arc." },
    { term: "Standard form of a circle", definition: "An equation $(x-h)^2+(y-k)^2=r^2$ describing a circle with center $(h,k)$ and radius $r$." },
    { term: "Completing the square", definition: "Rewriting a quadratic expression as a perfect-square binomial by adding the needed constant." },
    { term: "Locus", definition: "The set of all points satisfying a geometric condition; a circle is the set of points a fixed distance from its center." },
  ],
  concepts: [
    {
      id: "geo-u4-arc-length-sectors-radians",
      title: "Arc length, sector area and radians",
      skill: "Use angle measure in degrees or radians to calculate arc lengths and sector areas, and interpret radians as a length ratio.",
      lesson: {
        sections: [
          {
            heading: "Radian measure is a ratio",
            body: "For a circle of radius $r$, a central angle measuring $\\theta$ radians intercepts an arc of length $s$ such that $\\theta = s/r$. Thus a radian measure compares arc length with radius; it is not a length by itself. One full turn is $2\\pi$ radians because the circumference is $2\\pi r$. To convert degrees to radians, multiply by $\\pi/180$.",
          },
          {
            heading: "Arc length",
            body: "With angle measure in radians, multiply the radius by the angle: $s=r\\theta$. With degrees, take the same fraction of the circumference as the angle is of $360^\\circ$: $s = (\\theta/360^\\circ)(2\\pi r)$. Keep exact answers in terms of $\\pi$ when appropriate, and include the length unit.",
          },
          {
            heading: "Sector area",
            body: "A sector is the same fraction of the full circle's area as its central angle is of a full turn. In radians, $A=\\frac12 r^2\\theta$; in degrees, $A=(\\theta/360^\\circ)\\pi r^2$. Arc length has units of length, while sector area has square units.",
          },
        ],
        keyFormulas: [
          { name: "Radians as a ratio", statement: "$\\theta = \\frac{s}{r}$ (with $\\theta$ in radians)." },
          { name: "Degree-radian conversion", statement: "$\\theta_{\\text{rad}} = \\theta_{\\text{deg}}\\frac{\\pi}{180^\\circ}$." },
          { name: "Arc length", statement: "$s = r\\theta$ (radians), or $s = \\frac{\\theta}{360^\\circ}(2\\pi r)$ (degrees)." },
          { name: "Sector area", statement: "$A = \\frac12 r^2\\theta$ (radians), or $A = \\frac{\\theta}{360^\\circ}\\pi r^2$ (degrees)." },
        ],
        workedExample: {
          problem: "A sector has radius $8$ cm and central angle $\\frac{3\\pi}{4}$ radians. Find its arc length and area.",
          solution: "Use $s=r\\theta$: $s=8\\left(\\frac{3\\pi}{4}\\right)=6\\pi$ cm. Use $A=\\frac12r^2\\theta$: $A=\\frac12(64)\\left(\\frac{3\\pi}{4}\\right)=24\\pi$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "geo-u4-radian-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A circle has radius $8$ units, and a central angle measures $90^\\circ$. The diagram shows two radii enclosing a quarter-circle sector. Find the length of the intercepted minor arc in terms of $\\pi$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\pi$ units" },
              { id: "b", text: "$16\\pi$ units" },
              { id: "c", text: "$4\\pi$ units" },
              { id: "d", text: "$8\\pi$ units" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Degree arc length", statement: "Arc length equals the angle's fraction of $360^\\circ$ multiplied by the circumference." },
            ],
            steps: [
              { reasoning: "The central angle is one quarter of a full turn.", working: "\\frac{90^\\circ}{360^\\circ} = \\frac14", marks: 1, markCode: "M" },
              { reasoning: "Take one quarter of the circle's circumference.", working: "s = \\frac14(2\\pi \\cdot 8) = 4\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $4\\pi$ units",
            commonErrors: ["Using the area formula when the question asks for arc length.", "Using $90/180$ rather than $90/360$ as the fraction of a full turn."],
          },
        },
        {
          id: "geo-u4-radian-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sector has radius $6$ units and central angle $2.5$ radians. Find (i) its arc length and (ii) its area. Give exact values.",
          response: {
            type: "numeric",
            parts: [
              { label: "Arc length", answer: 15, unit: "units" },
              { label: "Sector area", answer: 45, unit: "square units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Radian arc length", statement: "$s=r\\theta$." },
              { kind: "formula", name: "Radian sector area", statement: "$A=\\frac12r^2\\theta$." },
            ],
            steps: [
              { reasoning: "For an angle measured in radians, multiply radius by angle to find arc length.", working: "s = 6(2.5) = 15", marks: 1, markCode: "A" },
              { reasoning: "Use half the square of the radius times the radian measure for sector area.", working: "A = \\frac12(6^2)(2.5)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, retaining square units for an area.", working: "A = 45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arc length $15$ units; sector area $45$ square units.",
            commonErrors: ["Using degrees in the radian formulas.", "Giving the sector area in linear units."],
          },
        },
        {
          id: "geo-u4-radian-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circle has radius $9$ cm and a sector angle of $140^\\circ$. Find the arc length and sector area, rounding each to the nearest tenth. Use $\\pi$ in your calculations.",
          response: {
            type: "numeric",
            parts: [
              { label: "Arc length", answer: 22, tolerance: 0.1, unit: "cm" },
              { label: "Sector area", answer: 99.0, tolerance: 0.1, unit: "square cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Degree arc length", statement: "$s=\\frac{\\theta}{360^\\circ}(2\\pi r)$." },
              { kind: "formula", name: "Degree sector area", statement: "$A=\\frac{\\theta}{360^\\circ}\\pi r^2$." },
            ],
            steps: [
              { reasoning: "The central angle's fraction of a full turn is $140/360=7/18$.", working: "\\frac{140^\\circ}{360^\\circ} = \\frac{7}{18}", marks: 1, markCode: "M" },
              { reasoning: "Use the circumference fraction to calculate arc length.", working: "s = \\frac{7}{18}(2\\pi \\cdot 9) = 7\\pi \\approx 22.0", marks: 1, markCode: "A" },
              { reasoning: "Use the same angle fraction of the full circle area.", working: "A = \\frac{7}{18}(\\pi \\cdot 9^2) = 31.5\\pi", marks: 1, markCode: "M" },
              { reasoning: "Round the area to the requested nearest tenth and retain square units.", working: "31.5\\pi \\approx 99.0\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arc length $22.0$ cm; sector area $99.0$ cm$^2$.",
            commonErrors: ["Using $31.5\\pi$ but approximating it as $89.5$; the correct value is about $99.0$.", "Rounding before applying the angle fraction."],
          },
        },
        {
          id: "geo-u4-radian-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circular garden has radius $12$ m. A sector is subtended by a central angle of $1.5$ radians. Use the radian relationship between angle and arc length.",
          parts: [
            { label: "a", prompt: "State the ratio that defines the radian measure and find the arc length $s$.", marks: 3 },
            { label: "b", prompt: "Find the area of the sector.", marks: 2 },
            { label: "c", prompt: "Find the fraction of the full circumference represented by the arc.", marks: 2 },
            { label: "d", prompt: "Explain why the radian measure is dimensionless, although $s$ and $r$ are lengths.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) arc length $s$", answer: 18, unit: "m" },
              { label: "(b) sector area", answer: 108, unit: "square m" },
              { label: "(c) circumference fraction", answer: 0.2387, tolerance: 0.001 },
              { label: "(d) dimensionless ratio", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Radian measure", statement: "The radian measure of a central angle is the ratio of intercepted arc length to radius: $\\theta=s/r$." },
              { kind: "formula", name: "Sector area in radians", statement: "$A=\\frac12r^2\\theta$." },
              { kind: "property", name: "Circumference fraction", statement: "An arc's fraction of the circumference is $s/(2\\pi r)=\\theta/(2\\pi)$." },
            ],
            steps: [
              { part: "a", reasoning: "Use the defining ratio and rearrange to make the arc length the subject.", working: "\\theta = \\frac{s}{r} \\implies s = r\\theta = 12(1.5) = 18\\text{ m}", marks: 3, markCode: "M" },
              { part: "b", reasoning: "Use the radian sector-area formula with the radius and angle.", working: "A = \\frac12(12^2)(1.5) = 108\\text{ m}^2", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Compare the arc length with the full circumference, or divide the radian angle by $2\\pi$.", working: "\\frac{s}{2\\pi r} = \\frac{18}{24\\pi} = \\frac{3}{4\\pi} \\approx 0.2387", marks: 2, markCode: "A" },
              { part: "d", reasoning: "The units cancel because the radian measure is a ratio of two lengths measured in the same unit.", working: "\\frac{\\text{length}}{\\text{length}} = 1", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $s=18$ m (b) $108$ m$^2$ (c) $\\frac{3}{4\\pi}\\approx0.2387$ of the circumference (d) radians are dimensionless because length units cancel in $s/r$.",
            commonErrors: ["Multiplying by $2\\pi$ when finding arc length from a radian angle.", "Confusing the sector area with the area fraction or with arc length."],
          },
        },
      ],
    },
    {
      id: "geo-u4-circle-equations",
      title: "Equations of circles",
      skill: "Convert circle equations to standard form by completing the square, identify center and radius, and test points.",
      lesson: {
        sections: [
          {
            heading: "Read center and radius from standard form",
            body: "A circle with center $(h,k)$ and radius $r$ consists of all points $(x,y)$ exactly $r$ units from $(h,k)$. The distance formula gives its standard equation: $(x-h)^2+(y-k)^2=r^2$. Read the signs carefully: $(x+3)^2+(y-2)^2=16$ has center $(-3,2)$ and radius $4$.",
          },
          {
            heading: "Complete the square",
            body: "For an equation $x^2+y^2+Dx+Ey+F=0$, group the $x$-terms and $y$-terms. To complete a square for $x^2+Dx$, add $(D/2)^2$; for $y^2+Ey$, add $(E/2)^2$. Add each quantity to both sides, then write the left side as squared binomials. The resulting right side must be positive for a real circle, and its square root is the radius.",
          },
          {
            heading: "Test whether a point is inside, on, or outside",
            body: "Substitute a point's coordinates into the left side of standard form. If the sum equals $r^2$, the point is on the circle; if the sum is less than $r^2$, it is inside; if it is greater, it is outside. Equivalently, compare the point's squared distance from the center with $r^2$; this avoids unnecessary square roots.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$(x-h)^2+(y-k)^2=r^2$, with center $(h,k)$ and radius $r$." },
          { name: "Completing the square", statement: "$x^2+Dx = (x+\\frac{D}{2})^2- (\\frac{D}{2})^2$." },
          { name: "Point classification", statement: "$d^2<r^2$ inside; $d^2=r^2$ on; $d^2>r^2$ outside." },
        ],
        workedExample: {
          problem: "Write $x^2+y^2-6x+4y-12=0$ in standard form and state its center and radius.",
          solution: "Group variables and move the constant: $(x^2-6x)+(y^2+4y)=12$. Complete both squares by adding $9$ and $4$ to both sides: $(x^2-6x+9)+(y^2+4y+4)=12+9+4=25$. Thus $(x-3)^2+(y+2)^2=25$. The center is $(3,-2)$ and the radius is $5$.",
        },
      },
      questions: [
        {
          id: "geo-u4-circle-equation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A circle is given by $(x-3)^2+(y+2)^2=25$. What are its center and radius?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Center $(3, 2)$, radius $25$" },
              { id: "b", text: "Center $(3, -2)$, radius $5$" },
              { id: "c", text: "Center $(-3, 2)$, radius $25$" },
              { id: "d", text: "Center $(-3, -2)$, radius $5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form of a circle", statement: "In $(x-h)^2+(y-k)^2=r^2$, the center is $(h,k)$ and the radius is the positive square root of the right side." },
            ],
            steps: [
              { reasoning: "Match $(x-3)^2$ and $(y+2)^2$ to $(x-h)^2+(y-k)^2$; signs inside the factors are opposite the center coordinates.", working: "h=3,\\quad k=-2", marks: 1, markCode: "M" },
              { reasoning: "The radius is the positive square root of $25$.", working: "r=\\sqrt{25}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Center $(3,-2)$, radius $5$",
            commonErrors: ["Copying the signs inside the parentheses directly into the center coordinates.", "Reporting $r^2=25$ as the radius."],
          },
        },
        {
          id: "geo-u4-circle-equation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Complete the square and write $x^2+y^2-6x+8y-11=0$ in standard form. Then state the center and radius.",
          response: {
            type: "numeric",
            parts: [
              { label: "Center $x$-coordinate", answer: 3 },
              { label: "Center $y$-coordinate", answer: -4 },
              { label: "Radius", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Completing the square", statement: "For $u^2+bu$, adding $(b/2)^2$ makes the perfect square $(u+b/2)^2$." },
              { kind: "definition", name: "Standard circle form", statement: "$(x-h)^2+(y-k)^2=r^2$ has center $(h,k)$ and radius $r$." },
            ],
            steps: [
              { reasoning: "Move the constant and complete each variable's square by adding $9$ and $16$ to both sides.", working: "(x^2-6x+9)+(y^2+8y+16)=11+9+16", marks: 1, markCode: "M" },
              { reasoning: "Factor each perfect-square trinomial and simplify the right side.", working: "(x-3)^2+(y+4)^2=36", marks: 1, markCode: "A" },
              { reasoning: "Read the center from the binomial signs and take the positive square root for the radius.", working: "(h,k)=(3,-4),\\quad r=\\sqrt{36}=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-3)^2+(y+4)^2=36$; center $(3,-4)$, radius $6$.",
            commonErrors: ["Adding $9$ and $16$ only to the left side, which changes the equation.", "Using center $(3,4)$ instead of $(3,-4)$."],
          },
        },
        {
          id: "geo-u4-circle-equation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The circle $(x-2)^2+(y+1)^2=25$ has center $(2,-1)$ and radius $5$. Classify each point as inside, on, or outside the circle, showing a squared-distance comparison: $P=(5,3)$, $Q=(8,-1)$, and $R=(0,0)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle as a locus", statement: "Points on a circle are exactly the radius distance from the center." },
              { kind: "property", name: "Squared-distance comparison", statement: "Compare squared distance to $r^2$: less is inside, equal is on, and greater is outside." },
            ],
            steps: [
              { reasoning: "For $P$, compare its squared distance from $(2,-1)$ with $25$.", working: "(5-2)^2+(3+1)^2=9+16=25 \\implies P\\text{ is on the circle}", marks: 1, markCode: "A" },
              { reasoning: "For $Q$, its squared distance exceeds the squared radius.", working: "(8-2)^2+(-1+1)^2=36>25 \\implies Q\\text{ is outside}", marks: 1, markCode: "A" },
              { reasoning: "For $R$, its squared distance is less than the squared radius.", working: "(0-2)^2+(0+1)^2=5<25 \\implies R\\text{ is inside}", marks: 1, markCode: "A" },
              { reasoning: "Classifications follow directly from the comparisons with $r^2=25$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$P$ is on the circle; $Q$ is outside; $R$ is inside.",
            commonErrors: ["Comparing distances with $r$ but accidentally comparing squared distances with $r$ rather than $r^2$.", "Mistaking the sign of the $y$-coordinate of the center."],
          },
        },
        {
          id: "geo-u4-circle-equation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A circle is given by $x^2+y^2+8x-6y-39=0$. Let $A=(4,3)$, $B=(0,0)$, and $C=(5,9)$.",
          parts: [
            { label: "a", prompt: "Complete the square in $x$ and $y$ to write the circle in standard form.", marks: 3 },
            { label: "b", prompt: "State the center and radius.", marks: 2 },
            { label: "c", prompt: "Classify each of $A$, $B$, and $C$ as inside, on, or outside the circle, using squared distances.", marks: 3 },
            { label: "d", prompt: "Explain why comparing squared distances is sufficient; you do not need to calculate the distances themselves.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Completing the square", statement: "Add the square of half each linear coefficient to complete each variable's perfect square, maintaining equality." },
              { kind: "definition", name: "Standard form of a circle", statement: "$(x-h)^2+(y-k)^2=r^2$ has center $(h,k)$ and radius $r$." },
              { kind: "property", name: "Squared-distance test", statement: "Compare the squared distance from a point to the center with $r^2$ to classify it as inside, on, or outside." },
            ],
            steps: [
              { part: "a", reasoning: "Move the constant and complete the $x$ and $y$ squares by adding $16$ and $9$ to each side.", working: "(x^2+8x+16)+(y^2-6y+9)=39+16+9", marks: 2, markCode: "M" },
              { part: "a", reasoning: "Factor the perfect squares and simplify the right side.", working: "(x+4)^2+(y-3)^2=64", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Read the signs of the center coordinates from standard form and take the positive square root of $64$.", working: "(h,k)=(-4,3),\\quad r=8", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Compare the squared distances of each point from $(-4,3)$ with $64$.", working: "A: (4+4)^2+(3-3)^2=64\\; (\\text{on})\\quad B: (0+4)^2+(0-3)^2=25<64\\; (\\text{inside})\\quad C: (5+4)^2+(9-3)^2=117>64\\; (\\text{outside})", marks: 3, markCode: "A" },
              { part: "d", reasoning: "Both the squared distance and $r^2$ are nonnegative, and squaring preserves order for nonnegative values; comparing them gives the same less/equal/greater classification as comparing distance with radius.", working: "d^2 \\lessgtr r^2 \\iff d \\lessgtr r \\quad (d,r \\ge 0)", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $(x+4)^2+(y-3)^2=64$ (b) center $(-4,3)$, radius $8$ (c) $A$ on, $B$ inside, $C$ outside (d) squared distances and squared radius preserve the same comparison because distances are nonnegative.",
            commonErrors: ["Completing the square without adding the same values to the right side.", "Reading center $(4,-3)$ directly from the signs inside the binomials.", "Using $8$ rather than $64$ in the squared-distance comparisons."],
          },
        },
      ],
    },
  ],
};
