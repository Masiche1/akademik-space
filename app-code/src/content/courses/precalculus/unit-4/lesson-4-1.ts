import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "pc-u4-lesson-4-1",
  code: "4-1",
  title: "Vectors",
  goal: "I CAN represent vectors in component form, perform vector operations, and use the dot product to find angles and solve force and velocity problems.",
  standards: ["HSN-VM.A.1", "HSN-VM.A.2", "HSN-VM.A.3", "HSN-VM.B.4", "HSN-VM.B.5"],
  vocabulary: [
    { term: "Vector", definition: "A quantity with both magnitude and direction, represented by a directed line segment." },
    { term: "Component form", definition: "A vector written as $\\langle a, b\\rangle$, where $a$ and $b$ are the horizontal and vertical changes from initial to terminal point." },
    { term: "Magnitude", definition: "The length of a vector: $|\\langle a,b\\rangle|=\\sqrt{a^2+b^2}$." },
    { term: "Unit vector", definition: "A vector of magnitude 1. The unit vector in the direction of $\\mathbf{v}$ is $\\mathbf{v}/|\\mathbf{v}|$." },
    { term: "Resultant", definition: "The single vector equal to the sum of two or more vectors, such as the net force on an object." },
    { term: "Dot product", definition: "For $\\langle a,b\\rangle$ and $\\langle c,d\\rangle$, the scalar $ac+bd$, which also equals $|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$." },
    { term: "Orthogonal vectors", definition: "Two nonzero vectors whose dot product is $0$, meaning they are perpendicular." },
  ],
  concepts: [
    {
      id: "pc-u4-vector-components",
      title: "Component form, magnitude, direction, and vector operations",
      skill: "Write vectors in component form, find magnitude, direction and unit vectors, and add and scale vectors.",
      lesson: {
        sections: [
          {
            heading: "Component form and magnitude",
            body: "A vector from initial point $(x_1,y_1)$ to terminal point $(x_2,y_2)$ has component form $\\langle x_2-x_1,\\;y_2-y_1\\rangle$. Its magnitude is found with the Pythagorean theorem: $|\\langle a,b\\rangle|=\\sqrt{a^2+b^2}$. Always subtract initial from terminal, in that order.",
          },
          {
            heading: "Direction and unit vectors",
            body: "The direction angle $\\theta$ is measured counterclockwise from the positive $x$-axis, with $\\tan\\theta=b/a$. Use the quadrant of $\\langle a,b\\rangle$ to choose the correct angle, since a calculator returns only values between $-90^\\circ$ and $90^\\circ$. A vector with magnitude $m$ and direction $\\theta$ has components $\\langle m\\cos\\theta,\\;m\\sin\\theta\\rangle$. Dividing a vector by its magnitude gives the unit vector in the same direction.",
          },
          {
            heading: "Adding and scaling",
            body: "Vectors add component by component: $\\langle a,b\\rangle+\\langle c,d\\rangle=\\langle a+c,\\;b+d\\rangle$. A scalar multiple scales each component: $k\\langle a,b\\rangle=\\langle ka,kb\\rangle$, and $|k\\mathbf{v}|=|k||\\mathbf{v}|$. A negative scalar reverses direction.",
          },
        ],
        keyFormulas: [
          { name: "Component form", statement: "$\\langle x_2-x_1,\\;y_2-y_1\\rangle$" },
          { name: "Magnitude", statement: "$|\\langle a,b\\rangle|=\\sqrt{a^2+b^2}$" },
          { name: "Components from magnitude and angle", statement: "$\\langle m\\cos\\theta,\\;m\\sin\\theta\\rangle$" },
          { name: "Unit vector", statement: "$\\hat{\\mathbf{v}}=\\dfrac{\\mathbf{v}}{|\\mathbf{v}|}$" },
        ],
        workedExample: {
          problem: "Let $\\mathbf{u}=\\langle 5,12\\rangle$. Find $|\\mathbf{u}|$ and the unit vector in the direction of $\\mathbf{u}$.",
          solution: "$|\\mathbf{u}|=\\sqrt{25+144}=\\sqrt{169}=13$. The unit vector is $\\dfrac{1}{13}\\langle 5,12\\rangle=\\left\\langle\\dfrac{5}{13},\\dfrac{12}{13}\\right\\rangle$. Check: $\\dfrac{25}{169}+\\dfrac{144}{169}=1$.",
        },
      },
      questions: [
        {
          id: "pc-u4-vector-components-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A vector starts at $A(1,2)$ and ends at $B(5,5)$. What is its component form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\langle 6,7\\rangle$" },
              { id: "b", text: "$\\langle 4,3\\rangle$" },
              { id: "c", text: "$\\langle -4,-3\\rangle$" },
              { id: "d", text: "$\\langle 3,4\\rangle$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Component form", statement: "The vector from $(x_1,y_1)$ to $(x_2,y_2)$ is $\\langle x_2-x_1,\\;y_2-y_1\\rangle$." },
            ],
            steps: [
              { reasoning: "Subtract the initial point from the terminal point in each coordinate.", working: "\\langle 5-1,\\;5-2\\rangle", marks: 1, markCode: "M" },
              { reasoning: "Simplify each component.", working: "\\langle 4,3\\rangle", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\langle 4,3\\rangle$",
            commonErrors: ["Adding the coordinates instead of subtracting.", "Subtracting in the wrong order, which gives the opposite vector.", "Swapping the horizontal and vertical components."],
          },
        },
        {
          id: "pc-u4-vector-components-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Let $\\mathbf{u}=\\langle 3,-4\\rangle$ and $\\mathbf{v}=\\langle -1,2\\rangle$. Find $2\\mathbf{u}+3\\mathbf{v}$. Enter the $x$-component and the $y$-component.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-component", answer: 3 },
              { label: "$y$-component", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Scalar multiplication", statement: "$k\\langle a,b\\rangle=\\langle ka,kb\\rangle$." },
              { kind: "property", name: "Vector addition", statement: "$\\langle a,b\\rangle+\\langle c,d\\rangle=\\langle a+c,\\;b+d\\rangle$." },
            ],
            steps: [
              { reasoning: "Multiply each vector by its scalar, component by component.", working: "2\\mathbf{u}=\\langle 6,-8\\rangle,\\quad 3\\mathbf{v}=\\langle -3,6\\rangle", marks: 1, markCode: "M" },
              { reasoning: "Add the corresponding components.", working: "\\langle 6+(-3),\\;-8+6\\rangle", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\langle 3,-2\\rangle", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\mathbf{u}+3\\mathbf{v}=\\langle 3,-2\\rangle$",
            commonErrors: ["Scaling only the first component.", "Sign error in $3(-1)$ or $2(-4)$."],
          },
        },
        {
          id: "pc-u4-vector-components-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Vector $\\mathbf{w}$ has magnitude $26$ and points in the same direction as $\\langle 5,12\\rangle$. Find the components of $\\mathbf{w}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-component", answer: 10 },
              { label: "$y$-component", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit vector", statement: "The unit vector in the direction of $\\mathbf{v}$ is $\\mathbf{v}/|\\mathbf{v}|$." },
              { kind: "property", name: "Magnitude of a scalar multiple", statement: "$|k\\mathbf{v}|=|k||\\mathbf{v}|$." },
            ],
            steps: [
              { reasoning: "Find the magnitude of the direction vector.", working: "|\\langle 5,12\\rangle|=\\sqrt{25+144}=13", marks: 1, markCode: "M" },
              { reasoning: "Divide by the magnitude to obtain the unit vector.", working: "\\left\\langle \\tfrac{5}{13},\\tfrac{12}{13}\\right\\rangle", marks: 1, markCode: "A" },
              { reasoning: "Multiply the unit vector by the required magnitude 26.", working: "26\\left\\langle \\tfrac{5}{13},\\tfrac{12}{13}\\right\\rangle", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\langle 10,24\\rangle", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{w}=\\langle 10,24\\rangle$; check: $\\sqrt{100+576}=26$.",
            commonErrors: ["Multiplying $\\langle 5,12\\rangle$ by 26 without first making it a unit vector.", "Forgetting to divide by the magnitude."],
          },
        },
        {
          id: "pc-u4-vector-components-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A vector is given by $\\mathbf{v}=\\langle -6,8\\rangle$. Give angles in degrees to two decimal places, measured counterclockwise from the positive $x$-axis.",
          parts: [
            { label: "a", prompt: "Find $|\\mathbf{v}|$.", marks: 1 },
            { label: "b", prompt: "Find the unit vector in the direction of $\\mathbf{v}$.", marks: 2 },
            { label: "c", prompt: "Find the direction angle of $\\mathbf{v}$, with $0^\\circ\\le\\theta<360^\\circ$.", marks: 3 },
            { label: "d", prompt: "Find the components of the vector of magnitude $25$ that points in the opposite direction to $\\mathbf{v}$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $|\\mathbf{v}|$", answer: 10 },
              { label: "(b) unit vector $x$-component", answer: -0.6 },
              { label: "(b) unit vector $y$-component", answer: 0.8 },
              { label: "(c) direction angle in degrees", answer: 126.87, tolerance: 0.02 },
              { label: "(d) $x$-component", answer: 15 },
              { label: "(d) $y$-component", answer: -20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnitude", statement: "$|\\langle a,b\\rangle|=\\sqrt{a^2+b^2}$." },
              { kind: "definition", name: "Unit vector", statement: "$\\hat{\\mathbf{v}}=\\mathbf{v}/|\\mathbf{v}|$." },
              { kind: "principle", name: "Direction angle", statement: "$\\tan\\theta=b/a$, with $\\theta$ placed in the quadrant of $\\langle a,b\\rangle$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the magnitude formula.", working: "|\\mathbf{v}|=\\sqrt{(-6)^2+8^2}=\\sqrt{100}=10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide each component by the magnitude.", working: "\\frac{1}{10}\\langle -6,8\\rangle", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "\\langle -0.6,\\;0.8\\rangle", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the reference angle from the absolute values of the components.", working: "\\tan^{-1}\\!\\left(\\frac{8}{6}\\right)\\approx 53.13^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The vector has negative $x$ and positive $y$, so it lies in Quadrant II; subtract the reference angle from $180^\\circ$.", working: "\\theta=180^\\circ-53.13^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the direction angle.", working: "\\theta\\approx 126.87^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The opposite direction is the negative of the unit vector; scale it by 25.", working: "-25\\langle -0.6,\\;0.8\\rangle", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify.", working: "\\langle 15,\\;-20\\rangle", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10$. (b) $\\langle -0.6,0.8\\rangle$. (c) $\\approx 126.87^\\circ$. (d) $\\langle 15,-20\\rangle$.",
            commonErrors: ["Reporting $-53.13^\\circ$ or $53.13^\\circ$ for the direction without checking the quadrant.", "Using the unit vector itself rather than its negative in part (d)."],
            examinerNote: "A quick sketch of the vector in Quadrant II prevents the most common error in part (c).",
          },
        },
      ],
    },
    {
      id: "pc-u4-dot-product-applications",
      title: "Dot product, angles, and applications",
      skill: "Use the dot product to find angles and test orthogonality, and combine vectors to find resultant velocity and force.",
      lesson: {
        sections: [
          {
            heading: "The dot product",
            body: "For $\\mathbf{u}=\\langle a,b\\rangle$ and $\\mathbf{v}=\\langle c,d\\rangle$, the dot product is the scalar $\\mathbf{u}\\cdot\\mathbf{v}=ac+bd$. The result is a number, not a vector. Geometrically, $\\mathbf{u}\\cdot\\mathbf{v}=|\\mathbf{u}||\\mathbf{v}|\\cos\\theta$, where $\\theta$ is the angle between the vectors when placed tail to tail.",
          },
          {
            heading: "Angle and orthogonality",
            body: "Equating the two forms gives $\\cos\\theta=\\dfrac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{u}||\\mathbf{v}|}$. If the dot product is $0$, then $\\cos\\theta=0$ and the vectors are perpendicular. A positive dot product means an acute angle; a negative one means an obtuse angle.",
          },
          {
            heading: "Resultants in context",
            body: "Forces and velocities combine by vector addition. For an airplane with air velocity $\\mathbf{a}$ in wind $\\mathbf{w}$, the ground velocity is $\\mathbf{a}+\\mathbf{w}$. Choose axes (for example $x$ east, $y$ north), write each quantity in components, add, then find the magnitude and direction of the resultant. Work done by a constant force $\\mathbf{F}$ over displacement $\\mathbf{d}$ is $W=\\mathbf{F}\\cdot\\mathbf{d}$.",
          },
        ],
        keyFormulas: [
          { name: "Dot product", statement: "$\\langle a,b\\rangle\\cdot\\langle c,d\\rangle=ac+bd$" },
          { name: "Angle between vectors", statement: "$\\cos\\theta=\\dfrac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{u}||\\mathbf{v}|}$" },
          { name: "Orthogonality", statement: "$\\mathbf{u}\\perp\\mathbf{v}\\iff\\mathbf{u}\\cdot\\mathbf{v}=0$" },
        ],
        workedExample: {
          problem: "Find the angle between $\\mathbf{u}=\\langle 1,2\\rangle$ and $\\mathbf{v}=\\langle 3,-1\\rangle$.",
          solution: "$\\mathbf{u}\\cdot\\mathbf{v}=3-2=1$. $|\\mathbf{u}|=\\sqrt5$, $|\\mathbf{v}|=\\sqrt{10}$. So $\\cos\\theta=\\dfrac{1}{\\sqrt{50}}\\approx0.1414$ and $\\theta\\approx81.87^\\circ$.",
        },
      },
      questions: [
        {
          id: "pc-u4-dot-product-applications-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $\\langle 2,3\\rangle\\cdot\\langle 4,-1\\rangle$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$\\langle 8,-3\\rangle$" },
              { id: "d", text: "$11$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dot product", statement: "$\\langle a,b\\rangle\\cdot\\langle c,d\\rangle=ac+bd$." },
            ],
            steps: [
              { reasoning: "Multiply corresponding components and add.", working: "2(4)+3(-1)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8-3=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $5$",
            commonErrors: ["Leaving the products as a vector $\\langle 8,-3\\rangle$; the dot product is a scalar.", "Ignoring the negative sign on $-1$."],
          },
        },
        {
          id: "pc-u4-dot-product-applications-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the angle between $\\mathbf{u}=\\langle 3,4\\rangle$ and $\\mathbf{v}=\\langle 4,3\\rangle$, in degrees to two decimal places.",
          response: { type: "numeric", parts: [{ label: "Angle", answer: 16.26, tolerance: 0.02, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle between vectors", statement: "$\\cos\\theta=\\dfrac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{u}||\\mathbf{v}|}$." },
            ],
            steps: [
              { reasoning: "Compute the dot product and both magnitudes.", working: "\\mathbf{u}\\cdot\\mathbf{v}=12+12=24,\\quad |\\mathbf{u}|=|\\mathbf{v}|=5", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the angle formula.", working: "\\cos\\theta=\\frac{24}{25}=0.96", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse cosine.", working: "\\theta=\\cos^{-1}(0.96)\\approx16.26^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta\\approx16.26^\\circ$",
            commonErrors: ["Forgetting to divide by the product of the magnitudes.", "Calculator in radian mode, giving $0.28$."],
          },
        },
        {
          id: "pc-u4-dot-product-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plane flies with an air velocity of $200$ mph due north. A wind blows at $50$ mph due east. Find the plane's ground speed and its direction as an angle east of north. Give answers to two decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "Ground speed (mph)", answer: 206.16, tolerance: 0.02 },
              { label: "Angle east of north (degrees)", answer: 14.04, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant velocity", statement: "Ground velocity equals air velocity plus wind velocity." },
              { kind: "formula", name: "Magnitude", statement: "$|\\langle a,b\\rangle|=\\sqrt{a^2+b^2}$." },
            ],
            steps: [
              { reasoning: "Take $x$ east and $y$ north, and write each velocity in components.", working: "\\mathbf{a}=\\langle 0,200\\rangle,\\quad \\mathbf{w}=\\langle 50,0\\rangle", marks: 1, markCode: "B" },
              { reasoning: "Add to find the ground velocity.", working: "\\mathbf{a}+\\mathbf{w}=\\langle 50,200\\rangle", marks: 1, markCode: "M" },
              { reasoning: "Find the magnitude, which is the ground speed.", working: "\\sqrt{50^2+200^2}=\\sqrt{42500}\\approx206.16", marks: 1, markCode: "A" },
              { reasoning: "The angle east of north has opposite side 50 (east) and adjacent side 200 (north).", working: "\\tan^{-1}\\!\\left(\\frac{50}{200}\\right)\\approx14.04^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ground speed $\\approx206.16$ mph at $\\approx14.04^\\circ$ east of north.",
            commonErrors: ["Using $\\tan^{-1}(200/50)$, which gives the angle north of east ($75.96^\\circ$).", "Adding the speeds, $200+50=250$."],
          },
        },
        {
          id: "pc-u4-dot-product-applications-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two tugboats pull a barge. Tugboat 1 exerts force $\\mathbf{F}_1=\\langle 30,40\\rangle$ newtons and tugboat 2 exerts force $\\mathbf{F}_2=\\langle 24,-7\\rangle$ newtons, where $x$ is east and $y$ is north. Round to two decimal places where needed.",
          parts: [
            { label: "a", prompt: "Find the resultant force $\\mathbf{R}=\\mathbf{F}_1+\\mathbf{F}_2$.", marks: 2 },
            { label: "b", prompt: "Find the magnitude of $\\mathbf{R}$.", marks: 2 },
            { label: "c", prompt: "Find the angle in degrees between $\\mathbf{F}_1$ and $\\mathbf{F}_2$.", marks: 3 },
            { label: "d", prompt: "The barge moves along the displacement $\\mathbf{d}=\\langle 10,2\\rangle$ meters. Find the work done by $\\mathbf{F}_1$ alone, in joules.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $R_x$", answer: 54 },
              { label: "(a) $R_y$", answer: 33 },
              { label: "(b) $|\\mathbf{R}|$", answer: 63.29, tolerance: 0.02 },
              { label: "(c) angle in degrees", answer: 69.39, tolerance: 0.1 },
              { label: "(d) work in joules", answer: 380 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resultant force", statement: "The net force is the vector sum of the individual forces." },
              { kind: "formula", name: "Angle between vectors", statement: "$\\cos\\theta=\\dfrac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{u}||\\mathbf{v}|}$." },
              { kind: "formula", name: "Work", statement: "$W=\\mathbf{F}\\cdot\\mathbf{d}$ for a constant force and displacement." },
            ],
            steps: [
              { part: "a", reasoning: "Add the vectors component by component.", working: "\\langle 30+24,\\;40+(-7)\\rangle", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "\\mathbf{R}=\\langle 54,33\\rangle", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the magnitude formula to the resultant.", working: "|\\mathbf{R}|=\\sqrt{54^2+33^2}=\\sqrt{2916+1089}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\sqrt{4005}\\approx63.29\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compute the dot product and the magnitudes $|\\mathbf{F}_1|=50$, $|\\mathbf{F}_2|=25$.", working: "\\mathbf{F}_1\\cdot\\mathbf{F}_2=720-280=440", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute into the angle formula.", working: "\\cos\\theta=\\frac{440}{50\\cdot25}=0.352", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take the inverse cosine.", working: "\\theta\\approx69.39^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Work is the dot product of force and displacement.", working: "W=\\langle 30,40\\rangle\\cdot\\langle 10,2\\rangle=300+80", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with units.", working: "W=380\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\langle 54,33\\rangle$. (b) $\\approx63.29$ N. (c) $\\approx69.39^\\circ$. (d) $380$ J.",
            commonErrors: ["Adding magnitudes ($50+25$) instead of adding vectors.", "Omitting the denominator $|\\mathbf{F}_1||\\mathbf{F}_2|$ in part (c)."],
          },
        },
      ],
    },
  ],
};
