import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "pc-u2-lesson-2-2",
  code: "2-2",
  title: "Radian Measure and the Unit Circle",
  goal: "I CAN convert between degrees and radians, use radians to measure arcs and sectors, and determine exact trigonometric values from the unit circle.",
  standards: ["HSF-TF.A.1", "HSF-TF.A.2", "HSF-TF.A.3"],
  vocabulary: [
    { term: "Radian", definition: "The angle measure subtended at a circle's center by an arc whose length equals the radius; one radian is $180/\\pi$ degrees." },
    { term: "Unit circle", definition: "The circle centered at the origin with radius $1$, whose points satisfy $x^2+y^2=1$." },
    { term: "Arc length", definition: "The distance along a circle between two radii; for radius $r$ and central angle $\\theta$ in radians, $s=r\\theta$." },
    { term: "Sector", definition: "The region of a circle enclosed by two radii and the intercepted arc." },
    { term: "Reference angle", definition: "The acute positive angle between an angle's terminal side and the $x$-axis." },
    { term: "Quadrantal angle", definition: "An angle whose terminal side lies on an axis, such as $0$, $\\pi/2$, $\\pi$, or $3\\pi/2$." },
    { term: "ASTC", definition: "A mnemonic for signs by quadrant: all trig functions are positive in I, sine in II, tangent in III, and cosine in IV." },
  ],
  concepts: [
    {
      id: "pc-u2-radian-measures",
      title: "Radians, arc length, and sector area",
      skill: "Convert angle measures and calculate circular arc lengths and sector areas using radians.",
      lesson: {
        sections: [
          {
            heading: "Degree and radian measure",
            body: "A full turn is $360^\\circ=2\\pi$ radians, so $180^\\circ=\\pi$ radians. Convert degrees to radians by multiplying by $\\pi/180$; convert radians to degrees by multiplying by $180/\\pi$. Leave answers in exact form with $\\pi$ unless a decimal is requested. Always check that an angle is in radians before using the arc-length or sector-area formulas.",
          },
          {
            heading: "Arc length and sector area",
            body: "For a central angle $\\theta$ measured in radians and radius $r$, the arc length is $s=r\\theta$. A sector is the same fraction of the whole circle as its central angle is of a full turn: $A=\\frac{1}{2}r^2\\theta$. These formulas use the actual radius, not the diameter. If an angle is given in degrees, convert it before substitution; using a degree measure directly in these formulas produces an incorrect result.",
          },
        ],
        keyFormulas: [
          { name: "Degree-radian equivalence", statement: "$180^\\circ=\\pi$ radians" },
          { name: "Convert degrees to radians", statement: "$\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\cdot\\frac{\\pi}{180}$" },
          { name: "Convert radians to degrees", statement: "$\\theta_{\\text{deg}}=\\theta_{\\text{rad}}\\cdot\\frac{180}{\\pi}$" },
          { name: "Arc length and sector area", statement: "$s=r\\theta$ and $A=\\frac{1}{2}r^2\\theta$, with $\\theta$ in radians" },
        ],
        workedExample: {
          problem: "A circle has radius $6$ cm and a central angle of $150^\\circ$. Find its intercepted arc length and sector area exactly.",
          solution: "Convert the angle: $150^\\circ\\cdot\\frac{\\pi}{180}=\\frac{5\\pi}{6}$ radians. Then $s=r\\theta=6\\left(\\frac{5\\pi}{6}\\right)=5\\pi$ cm. The sector area is $A=\\frac{1}{2}r^2\\theta=\\frac{1}{2}(36)\\left(\\frac{5\\pi}{6}\\right)=15\\pi$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "pc-u2-rad-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $150^\\circ$ in radians?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5\\pi}{6}$" },
              { id: "b", text: "$\\frac{3\\pi}{5}$" },
              { id: "c", text: "$\\frac{6\\pi}{5}$" },
              { id: "d", text: "$\\frac{5\\pi}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Degree-radian equivalence", statement: "$180^\\circ=\\pi$ radians." },
              { kind: "formula", name: "Degree-to-radian conversion", statement: "$\\theta_{\\mathrm{rad}}=\\theta_{\\mathrm{deg}}\\cdot\\frac{\\pi}{180}$." },
            ],
            steps: [
              { reasoning: "Multiply the degree measure by the conversion factor $\\pi/180$.", working: "150\\cdot\\frac{\\pi}{180}=\\frac{150\\pi}{180}", marks: 1, markCode: "M" },
              { reasoning: "Reduce the fraction to its lowest terms.", working: "\\frac{150\\pi}{180}=\\frac{5\\pi}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{5\\pi}{6}$ radians",
            commonErrors: ["Multiplying by $180/\\pi$, which converts radians to degrees.", "Leaving the fraction unreduced or omitting $\\pi$."],
          },
        },
        {
          id: "pc-u2-rad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A circle has radius $7$ cm and a central angle of $2.4$ radians. Find the intercepted arc length in centimeters.",
          response: { type: "numeric", parts: [{ label: "Arc length", answer: 16.8, tolerance: 0.001, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$s=r\\theta$ when $\\theta$ is measured in radians." },
              { kind: "definition", name: "Radian measure", statement: "The angle must be in radians to use $s=r\\theta$ directly." },
            ],
            steps: [
              { reasoning: "Identify the radius and the angle in radians.", working: "r=7,\\qquad\\theta=2.4", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the arc-length formula.", working: "s=7(2.4)", marks: 1, markCode: "M" },
              { reasoning: "Multiply and include the requested unit.", working: "s=16.8\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16.8$ cm",
            commonErrors: ["Using the diameter in place of the radius.", "Converting $2.4$ radians to degrees unnecessarily or treating it as degrees."],
          },
        },
        {
          id: "pc-u2-rad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circular sector has radius $6$ cm and central angle $150^\\circ$. Find the sector's area to the nearest hundredth of a square centimeter.",
          response: { type: "numeric", parts: [{ label: "Sector area", answer: 47.12, tolerance: 0.01, unit: "cm^2" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$A=\\frac{1}{2}r^2\\theta$ for $\\theta$ in radians." },
              { kind: "formula", name: "Degree-to-radian conversion", statement: "$\\theta_{\\mathrm{rad}}=\\theta_{\\mathrm{deg}}\\cdot\\frac{\\pi}{180}$." },
              { kind: "principle", name: "Rounding", statement: "Round the evaluated area to the nearest hundredth only at the end." },
            ],
            steps: [
              { reasoning: "Convert the central angle from degrees to radians.", working: "150^\\circ\\cdot\\frac{\\pi}{180}=\\frac{5\\pi}{6}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the radius and radian angle into the sector-area formula.", working: "A=\\frac{1}{2}(6)^2\\left(\\frac{5\\pi}{6}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Simplify the exact area before evaluating.", working: "A=15\\pi\\text{ cm}^2", marks: 1, markCode: "A" },
              { reasoning: "Evaluate and round to the nearest hundredth.", working: "A\\approx47.12\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$47.12$ cm$^2$",
            commonErrors: ["Using $150$ directly in the radian formula.", "Using $s=r\\theta$ instead of the sector-area formula."],
          },
        },
        {
          id: "pc-u2-rad-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A windshield wiper has a blade attached to an arm pivoting at a point O. The blade covers the part of the arm from $15$ cm to $60$ cm from O. In one sweep the arm turns through $120^\\circ$, taking $0.8$ seconds. Give decimals to two decimal places.",
          parts: [
            { label: "a", prompt: "Express the sweep angle in radians, exactly. (1 mark)", marks: 1 },
            { label: "b", prompt: "Find the length of the arc traced by the outer tip of the blade, exactly and as a decimal. (2 marks)", marks: 2 },
            { label: "c", prompt: "Find the area of the windshield region cleaned by the blade, exactly and as a decimal. (3 marks)", marks: 3 },
            { label: "d", prompt: "Find the angular speed of the arm in rad/s, the speed of the outer tip, and the speed of the inner end of the blade, and explain why they differ. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Degree-to-radian conversion", statement: "$\\theta_{\\mathrm{rad}}=\\theta_{\\mathrm{deg}}\\cdot\\frac{\\pi}{180}$." },
              { kind: "formula", name: "Arc length", statement: "$s=r\\theta$ for $\\theta$ in radians." },
              { kind: "formula", name: "Sector area", statement: "$A=\\frac12r^2\\theta$; an annular sector has area $\\frac12\\theta(R^2-r^2)$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply by $\\pi/180$.", working: "120\\cdot\\frac{\\pi}{180}=\\frac{2\\pi}{3}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $s=r\\theta$ with $r=60$.", working: "s=60\\cdot\\frac{2\\pi}{3}=40\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "40\\pi\\approx125.66\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The cleaned region is the big sector minus the small sector.", working: "A=\\frac12\\cdot\\frac{2\\pi}{3}(60^2-15^2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify: $3600-225=3375$.", working: "A=\\frac{\\pi}{3}(3375)=1125\\pi", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate.", working: "1125\\pi\\approx3534.29\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Angular speed is angle divided by time.", working: "\\omega=\\frac{2\\pi/3}{0.8}=\\frac{5\\pi}{6}\\approx2.62\\text{ rad/s}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Linear speed is $r\\omega$ at each radius.", working: "v_{60}=60\\cdot\\frac{5\\pi}{6}=50\\pi\\approx157.08\\text{ cm/s},\\quad v_{15}=12.5\\pi\\approx39.27\\text{ cm/s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Every point turns through the same angle in the same time, but points farther from O trace longer arcs ($s=r\\theta$), so they must move faster.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2\\pi/3$. (b) $40\\pi\\approx125.66$ cm. (c) $1125\\pi\\approx3534.29$ cm$^2$. (d) $\\omega=5\\pi/6\\approx2.62$ rad/s; tip $\\approx157.08$ cm/s; inner end $\\approx39.27$ cm/s; speed grows with radius for the same angular speed.",
            commonErrors: ["Using $120$ directly as the angle in $s=r\\theta$.", "Using $\\frac12\\theta(R-r)^2$ instead of $\\frac12\\theta(R^2-r^2)$.", "Thinking all points of the blade have the same linear speed."],
          },
        },
      ],
    },
    {
      id: "pc-u2-unit-circle-values",
      title: "Unit-circle values and reference angles",
      skill: "Find exact trigonometric values by locating a terminal point, using its reference angle, and applying quadrant signs.",
      lesson: {
        sections: [
          {
            heading: "Coordinates and exact values",
            body: "On the unit circle, the terminal point for angle $\\theta$ is $(\\cos\\theta,\\sin\\theta)$. Thus cosine is the $x$-coordinate and sine is the $y$-coordinate; tangent is $\\sin\\theta/\\cos\\theta$ when cosine is nonzero. Memorize the special-angle coordinates in Quadrant I for $0$, $\\pi/6$, $\\pi/4$, and $\\pi/3$, then use symmetry to obtain exact values elsewhere. Exact forms such as $\\sqrt{3}/2$ are preferred over decimals when requested.",
          },
          {
            heading: "Reference angles and signs",
            body: "A reference angle is the acute angle to the nearest horizontal axis. For an angle between $0$ and $2\\pi$, it is $\\theta$ in Quadrant I, $\\pi-\\theta$ in II, $\\theta-\\pi$ in III, and $2\\pi-\\theta$ in IV. ASTC gives which functions are positive: all in I, sine in II, tangent in III, and cosine in IV. The reference angle determines the absolute value; the quadrant determines its sign. At an axis, some values are zero, so identify the coordinate rather than assigning a quadrant sign.",
          },
        ],
        keyFormulas: [
          { name: "Unit-circle coordinates", statement: "The point at angle $\\theta$ is $(\\cos\\theta,\\sin\\theta)$ on $x^2+y^2=1$." },
          { name: "Tangent", statement: "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$ when $\\cos\\theta\\ne0$." },
          { name: "Reference angle in Quadrants II, III, IV", statement: "$\\pi-\\theta$, $\\theta-\\pi$, and $2\\pi-\\theta$, respectively." },
        ],
        workedExample: {
          problem: "Find the exact values of $\\sin(5\\pi/6)$, $\\cos(5\\pi/6)$, and $\\tan(5\\pi/6)$.",
          solution: "$5\\pi/6$ lies in Quadrant II, and its reference angle is $\\pi-5\\pi/6=\\pi/6$. The $\\pi/6$ unit-circle coordinates have absolute values $|\\cos|=\\sqrt{3}/2$ and $|\\sin|=1/2$. In Quadrant II, sine is positive and cosine is negative, so $\\sin(5\\pi/6)=1/2$ and $\\cos(5\\pi/6)=-\\sqrt{3}/2$. Therefore $\\tan(5\\pi/6)=\\frac{1/2}{-\\sqrt{3}/2}=-1/\\sqrt{3}=-\\sqrt{3}/3$.",
        },
      },
      questions: [
        {
          id: "pc-u2-circle-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the exact value of $\\sin(5\\pi/6)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{\\sqrt{3}}{2}$" },
              { id: "d", text: "$-\\frac{\\sqrt{3}}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit-circle coordinates", statement: "$\\sin\\theta$ is the $y$-coordinate of the unit-circle point at angle $\\theta$." },
              { kind: "principle", name: "Quadrant II signs", statement: "Sine is positive in Quadrant II." },
              { kind: "property", name: "Reference angle", statement: "The reference angle for $5\\pi/6$ is $\\pi-5\\pi/6=\\pi/6$, whose sine is $1/2$." },
            ],
            steps: [
              { reasoning: "Locate the angle and determine its reference angle.", working: "\\frac{\\pi}{2}<\\frac{5\\pi}{6}<\\pi,\\qquad\\alpha=\\pi-\\frac{5\\pi}{6}=\\frac{\\pi}{6}", marks: 1, markCode: "M" },
              { reasoning: "Use the special-angle sine and the positive sign in Quadrant II.", working: "\\sin\\left(\\frac{5\\pi}{6}\\right)=\\sin\\left(\\frac{\\pi}{6}\\right)=\\frac{1}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Using the cosine coordinate for sine.", "Giving sine a negative sign in Quadrant II."],
          },
        },
        {
          id: "pc-u2-circle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\cos(7\\pi/4)$ as a decimal rounded to the nearest thousandth.",
          response: { type: "numeric", parts: [{ label: "Cosine", answer: 0.707, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cosine coordinate", statement: "$\\cos\\theta$ is the $x$-coordinate of the unit-circle point at angle $\\theta$." },
              { kind: "property", name: "Reference angle in Quadrant IV", statement: "The reference angle is $2\\pi-\\theta$, and cosine is positive in Quadrant IV." },
              { kind: "principle", name: "Special-angle value", statement: "$\\cos(\\pi/4)=\\sqrt{2}/2$." },
            ],
            steps: [
              { reasoning: "Identify the quadrant and the reference angle.", working: "\\frac{3\\pi}{2}<\\frac{7\\pi}{4}<2\\pi,\\qquad\\alpha=2\\pi-\\frac{7\\pi}{4}=\\frac{\\pi}{4}", marks: 1, markCode: "M" },
              { reasoning: "Cosine is positive in Quadrant IV and has the absolute value of the reference-angle cosine.", working: "\\cos\\left(\\frac{7\\pi}{4}\\right)=\\frac{\\sqrt{2}}{2}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate and round to the nearest thousandth.", working: "\\frac{\\sqrt{2}}{2}\\approx0.707", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.707$",
            commonErrors: ["Giving cosine a negative sign in Quadrant IV.", "Using the reference angle $\\pi/4$ but selecting the sine value."],
          },
        },
        {
          id: "pc-u2-circle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $\\theta=11\\pi/6$, state its reference angle and quadrant, then find the exact values of $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reference angle", statement: "In Quadrant IV, the reference angle is $2\\pi-\\theta$." },
              { kind: "definition", name: "Unit-circle coordinates", statement: "$\\cos\\theta$ is the $x$-coordinate and $\\sin\\theta$ the $y$-coordinate." },
              { kind: "law", name: "Quotient identity", statement: "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$ when cosine is nonzero." },
              { kind: "principle", name: "ASTC signs", statement: "In Quadrant IV, cosine is positive while sine and tangent are negative." },
            ],
            steps: [
              { reasoning: "Locate the angle in Quadrant IV and calculate its acute reference angle.", working: "\\frac{3\\pi}{2}<\\frac{11\\pi}{6}<2\\pi,\\qquad\\alpha=2\\pi-\\frac{11\\pi}{6}=\\frac{\\pi}{6}", marks: 1, markCode: "M" },
              { reasoning: "Use the $\\pi/6$ special-angle coordinate magnitudes and apply the Quadrant IV signs.", working: "\\sin\\theta=-\\frac{1}{2},\\qquad\\cos\\theta=\\frac{\\sqrt{3}}{2}", marks: 1, markCode: "A" },
              { reasoning: "Compute tangent as sine divided by cosine and simplify.", working: "\\tan\\theta=\\frac{-1/2}{\\sqrt{3}/2}=-\\frac{1}{\\sqrt{3}}=-\\frac{\\sqrt{3}}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the reference angle and quadrant together with all three exact values.", working: "\\alpha=\\frac{\\pi}{6},\\quad\\text{Quadrant IV}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Reference angle $\\pi/6$, Quadrant IV; $\\sin\\theta=-1/2$, $\\cos\\theta=\\sqrt{3}/2$, and $\\tan\\theta=-\\sqrt{3}/3$.",
            commonErrors: ["Reporting the reference angle as $11\\pi/6$ rather than the acute angle $\\pi/6$.", "Giving all three trigonometric values the same sign."],
          },
        },
        {
          id: "pc-u2-circle-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A Ferris wheel has radius $20$ m and its center is $25$ m above the ground. A rider's height above the ground is $h(\\theta)=25+20\\sin\\theta$ meters, where $\\theta$ is the angle of the rider's position measured counterclockwise from the horizontal ray through the center, to the right.",
          parts: [
            { label: "a", prompt: "For $\\theta=7\\pi/6$, state the quadrant and reference angle, and find $h$ exactly. (2 marks)", marks: 2 },
            { label: "b", prompt: "Find the exact height at $\\theta=5\\pi/3$ and give it to two decimal places. (2 marks)", marks: 2 },
            { label: "c", prompt: "Find all $\\theta$ in $[0,2\\pi)$ for which the rider is $35$ m high. (3 marks)", marks: 3 },
            { label: "d", prompt: "Find the minimum height of the rider and the value of $\\theta$ at which it occurs, and explain how you know no lower height is possible. (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit-circle coordinates", statement: "$\\sin\\theta$ is the $y$-coordinate of the terminal point on the unit circle." },
              { kind: "principle", name: "Reference angles and signs", statement: "Use the acute reference angle for the magnitude and the quadrant for the sign (sine is negative in Quadrants III and IV)." },
              { kind: "property", name: "Range of sine", statement: "$-1\\le\\sin\\theta\\le1$ for all $\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\pi<7\\pi/6<3\\pi/2$, so Quadrant III, reference angle $7\\pi/6-\\pi=\\pi/6$.", working: "\\text{Quadrant III},\\;\\alpha=\\frac{\\pi}{6}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sine is negative in Quadrant III, so $\\sin(7\\pi/6)=-1/2$.", working: "h=25+20\\left(-\\tfrac12\\right)=15\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$5\\pi/3$ is in Quadrant IV with reference angle $\\pi/3$, so $\\sin=-\\sqrt3/2$.", working: "h=25-10\\sqrt3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with $\\sqrt3\\approx1.7321$.", working: "25-17.32\\approx7.68\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $h=35$ and isolate sine.", working: "25+20\\sin\\theta=35\\implies\\sin\\theta=\\tfrac12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sine is positive in Quadrants I and II with reference angle $\\pi/6$.", working: "\\theta=\\frac{\\pi}{6},\\;\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both lie in $[0,2\\pi)$ and there are no others since sine takes the value $1/2$ exactly twice per turn.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The lowest value of sine is $-1$ at $\\theta=3\\pi/2$, giving the lowest height.", working: "h_{\\min}=25-20=5\\text{ m at }\\theta=\\frac{3\\pi}{2}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Since $\\sin\\theta\\ge-1$ always, $h\\ge5$ for every angle.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Quadrant III, reference angle $\\pi/6$; $h=15$ m. (b) $h=25-10\\sqrt3\\approx7.68$ m. (c) $\\theta=\\pi/6$ and $5\\pi/6$. (d) Minimum $5$ m at $\\theta=3\\pi/2$, because $\\sin\\theta\\ge-1$.",
            commonErrors: ["Using a positive sine value in Quadrants III or IV.", "Giving the reference angle as $7\\pi/6$.", "Listing only $\\pi/6$ for part (c)."],
          },
        },
      ],
    },
  ],
};
