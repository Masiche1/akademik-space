import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "pc-u4-lesson-4-3",
  code: "4-3",
  title: "Complex Numbers in the Plane",
  goal: "I CAN write complex numbers in polar form, multiply and divide them geometrically, and use De Moivre's Theorem for powers and roots.",
  standards: ["HSN-CN.B.4", "HSN-CN.B.5", "HSN-CN.B.6"],
  vocabulary: [
    { term: "Complex plane", definition: "A plane in which $a+bi$ is plotted at the point $(a,b)$, with the real axis horizontal and the imaginary axis vertical." },
    { term: "Modulus", definition: "The distance from the origin to $a+bi$: $|z|=r=\\sqrt{a^2+b^2}$." },
    { term: "Argument", definition: "The angle $\\theta$ from the positive real axis to the segment from the origin to $z$, measured counterclockwise." },
    { term: "Polar form", definition: "$z=r(\\cos\\theta+i\\sin\\theta)$, abbreviated $r\\,\\text{cis}\\,\\theta$." },
    { term: "De Moivre's Theorem", definition: "$[r(\\cos\\theta+i\\sin\\theta)]^n=r^n(\\cos n\\theta+i\\sin n\\theta)$." },
    { term: "nth root of a complex number", definition: "A number $w$ with $w^n=z$; a nonzero $z$ has exactly $n$ distinct $n$th roots, equally spaced on a circle." },
  ],
  concepts: [
    {
      id: "pc-u4-polar-form",
      title: "Polar form, modulus, argument, and products and quotients",
      skill: "Convert between rectangular and polar form and multiply and divide complex numbers in polar form.",
      lesson: {
        sections: [
          {
            heading: "Modulus and argument",
            body: "Plot $z=a+bi$ at $(a,b)$. The modulus is $r=\\sqrt{a^2+b^2}$ and the argument $\\theta$ satisfies $\\cos\\theta=a/r$, $\\sin\\theta=b/r$. Use the quadrant of the point to choose $\\theta$, because $\\tan^{-1}(b/a)$ alone only gives angles in Quadrants I and IV. Then $z=r(\\cos\\theta+i\\sin\\theta)$.",
          },
          {
            heading: "Multiplying and dividing in polar form",
            body: "For $z_1=r_1\\,\\text{cis}\\,\\theta_1$ and $z_2=r_2\\,\\text{cis}\\,\\theta_2$: $z_1z_2=r_1r_2\\,\\text{cis}(\\theta_1+\\theta_2)$ and $\\dfrac{z_1}{z_2}=\\dfrac{r_1}{r_2}\\,\\text{cis}(\\theta_1-\\theta_2)$. Moduli multiply or divide, and arguments add or subtract. Geometrically, multiplying by $z_2$ scales by $|z_2|$ and rotates by $\\arg z_2$.",
          },
          {
            heading: "Why it works",
            body: "The product rule follows from the angle-sum identities: $(\\cos\\alpha+i\\sin\\alpha)(\\cos\\beta+i\\sin\\beta)=(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta)+i(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta)=\\cos(\\alpha+\\beta)+i\\sin(\\alpha+\\beta)$. Arguments are only defined up to adding $360^\\circ$, so reduce results to a standard interval when asked.",
          },
        ],
        keyFormulas: [
          { name: "Modulus", statement: "$|a+bi|=\\sqrt{a^2+b^2}$" },
          { name: "Polar form", statement: "$z=r(\\cos\\theta+i\\sin\\theta)$" },
          { name: "Product", statement: "$z_1z_2=r_1r_2\\,\\text{cis}(\\theta_1+\\theta_2)$" },
          { name: "Quotient", statement: "$\\dfrac{z_1}{z_2}=\\dfrac{r_1}{r_2}\\,\\text{cis}(\\theta_1-\\theta_2)$" },
        ],
        workedExample: {
          problem: "Write $-1+i$ in polar form.",
          solution: "$r=\\sqrt{1+1}=\\sqrt2$. The point $(-1,1)$ is in Quadrant II with reference angle $45^\\circ$, so $\\theta=135^\\circ$ ($3\\pi/4$). Thus $-1+i=\\sqrt2(\\cos135^\\circ+i\\sin135^\\circ)$.",
        },
      },
      questions: [
        {
          id: "pc-u4-polar-form-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the polar form of $z=1+i$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt2\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$" },
              { id: "b", text: "$\\sqrt2\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)$" },
              { id: "c", text: "$2\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$" },
              { id: "d", text: "$\\sqrt2\\left(\\cos\\frac{3\\pi}{4}+i\\sin\\frac{3\\pi}{4}\\right)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Modulus and argument", statement: "$r=\\sqrt{a^2+b^2}$ and $\\tan\\theta=b/a$ with $\\theta$ in the quadrant of $(a,b)$." },
            ],
            steps: [
              { reasoning: "Find the modulus.", working: "r=\\sqrt{1^2+1^2}=\\sqrt2", marks: 1, markCode: "M" },
              { reasoning: "The point $(1,1)$ is in Quadrant I with $\\tan\\theta=1$.", working: "\\theta=\\frac{\\pi}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\sqrt2\\left(\\cos\\frac{\\pi}{4}+i\\sin\\frac{\\pi}{4}\\right)$",
            commonErrors: ["Using $r=1+1=2$ instead of $\\sqrt2$.", "Using the wrong quadrant for the argument."],
          },
        },
        {
          id: "pc-u4-polar-form-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Let $z_1=3(\\cos20^\\circ+i\\sin20^\\circ)$ and $z_2=2(\\cos40^\\circ+i\\sin40^\\circ)$. Find $z_1z_2$ in rectangular form $a+bi$, to two decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: 3, tolerance: 0.01 },
              { label: "Imaginary part $b$", answer: 5.2, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Product in polar form", statement: "$z_1z_2=r_1r_2\\,\\text{cis}(\\theta_1+\\theta_2)$." },
            ],
            steps: [
              { reasoning: "Multiply the moduli and add the arguments.", working: "z_1z_2=6(\\cos60^\\circ+i\\sin60^\\circ)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the exact trigonometric values.", working: "6\\left(\\tfrac12+i\\tfrac{\\sqrt3}{2}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "3+3\\sqrt3\\,i\\approx3+5.20i", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z_1z_2=3+3\\sqrt3\\,i\\approx3+5.20i$",
            commonErrors: ["Adding the moduli ($3+2$).", "Multiplying the arguments."],
          },
        },
        {
          id: "pc-u4-polar-form-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $z_1=-3+3i$ and $z_2=1+\\sqrt3\\,i$. Write $\\dfrac{z_1}{z_2}$ in polar form $r(\\cos\\theta+i\\sin\\theta)$ with $0^\\circ\\le\\theta<360^\\circ$. Enter $r$ to three decimal places and $\\theta$ in degrees.",
          response: {
            type: "numeric",
            parts: [
              { label: "Modulus $r$", answer: 2.121, tolerance: 0.002 },
              { label: "Argument $\\theta$ (degrees)", answer: 75, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Quotient in polar form", statement: "$\\dfrac{z_1}{z_2}=\\dfrac{r_1}{r_2}\\,\\text{cis}(\\theta_1-\\theta_2)$." },
              { kind: "formula", name: "Modulus and argument", statement: "$r=\\sqrt{a^2+b^2}$, with $\\theta$ in the correct quadrant." },
            ],
            steps: [
              { reasoning: "Convert $z_1$; $(-3,3)$ is in Quadrant II.", working: "r_1=\\sqrt{18}=3\\sqrt2,\\quad \\theta_1=135^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Convert $z_2$; $(1,\\sqrt3)$ is in Quadrant I.", working: "r_2=2,\\quad \\theta_2=60^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Divide the moduli and subtract the arguments.", working: "\\frac{3\\sqrt2}{2}\\,\\text{cis}(135^\\circ-60^\\circ)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "r=\\frac{3\\sqrt2}{2}\\approx2.121,\\quad \\theta=75^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\dfrac{z_1}{z_2}\\approx2.121(\\cos75^\\circ+i\\sin75^\\circ)$",
            commonErrors: ["Taking $\\theta_1=-45^\\circ$ by ignoring the quadrant.", "Adding arguments instead of subtracting."],
          },
        },
        {
          id: "pc-u4-polar-form-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Let $z=\\sqrt3-i$ and $w=-2+2i$. Give arguments in degrees with $0^\\circ\\le\\theta<360^\\circ$ and moduli to three decimal places where not whole.",
          parts: [
            { label: "a", prompt: "Find the modulus and argument of $z$.", marks: 2 },
            { label: "b", prompt: "Find the modulus and argument of $w$.", marks: 2 },
            { label: "c", prompt: "Find the modulus and argument of $zw$.", marks: 2 },
            { label: "d", prompt: "Find the modulus and argument of $z/w$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $|z|$", answer: 2 },
              { label: "(a) $\\arg z$ (degrees)", answer: 330, tolerance: 0.1 },
              { label: "(b) $|w|$", answer: 2.828, tolerance: 0.002 },
              { label: "(b) $\\arg w$ (degrees)", answer: 135, tolerance: 0.1 },
              { label: "(c) $|zw|$", answer: 5.657, tolerance: 0.002 },
              { label: "(c) $\\arg zw$ (degrees)", answer: 105, tolerance: 0.1 },
              { label: "(d) $|z/w|$", answer: 0.707, tolerance: 0.002 },
              { label: "(d) $\\arg(z/w)$ (degrees)", answer: 195, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Modulus and argument", statement: "$r=\\sqrt{a^2+b^2}$; $\\theta$ lies in the quadrant of $(a,b)$." },
              { kind: "theorem", name: "Product and quotient", statement: "Moduli multiply (divide) and arguments add (subtract)." },
            ],
            steps: [
              { part: "a", reasoning: "$(\\sqrt3,-1)$ is in Quadrant IV with reference angle $30^\\circ$.", working: "|z|=\\sqrt{3+1}=2,\\quad \\arg z=360^\\circ-30^\\circ=330^\\circ", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$(-2,2)$ is in Quadrant II with reference angle $45^\\circ$.", working: "|w|=\\sqrt{8}=2\\sqrt2\\approx2.828,\\quad \\arg w=135^\\circ", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Multiply moduli and add arguments, then subtract $360^\\circ$ to reduce.", working: "|zw|=2\\cdot2\\sqrt2=4\\sqrt2\\approx5.657,\\quad 330^\\circ+135^\\circ=465^\\circ\\to105^\\circ", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Divide moduli and subtract arguments, adding $360^\\circ$ to make the argument non-negative.", working: "|z/w|=\\frac{2}{2\\sqrt2}=\\frac{\\sqrt2}{2}\\approx0.707,\\quad 330^\\circ-135^\\circ=195^\\circ", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) $2$, $330^\\circ$. (b) $2\\sqrt2$, $135^\\circ$. (c) $4\\sqrt2$, $105^\\circ$. (d) $\\frac{\\sqrt2}{2}$, $195^\\circ$.",
            commonErrors: ["Giving $\\arg z=30^\\circ$ or $-30^\\circ$ without the required interval.", "Leaving $465^\\circ$ unreduced."],
            examinerNote: "Check part (c) by direct multiplication: $zw=(2-2\\sqrt3)+(2\\sqrt3+2)i\\approx-1.464+5.464i$, which has modulus $\\approx5.657$ in Quadrant II.",
          },
        },
      ],
    },
    {
      id: "pc-u4-de-moivre",
      title: "De Moivre's Theorem: powers and roots",
      skill: "Raise complex numbers to integer powers and find all nth roots using De Moivre's Theorem.",
      lesson: {
        sections: [
          {
            heading: "Powers",
            body: "Repeated use of the polar product rule gives De Moivre's Theorem: $[r(\\cos\\theta+i\\sin\\theta)]^n=r^n(\\cos n\\theta+i\\sin n\\theta)$. To compute $(a+bi)^n$, convert to polar form, raise the modulus to the power, multiply the argument by $n$, then convert back if needed. This is far quicker than expanding.",
          },
          {
            heading: "Roots",
            body: "The $n$th roots of $z=r(\\cos\\theta+i\\sin\\theta)$ are $w_k=r^{1/n}\\left[\\cos\\dfrac{\\theta+360^\\circ k}{n}+i\\sin\\dfrac{\\theta+360^\\circ k}{n}\\right]$ for $k=0,1,\\dots,n-1$. Every root has the same modulus $r^{1/n}$, and consecutive roots differ in argument by $360^\\circ/n$.",
          },
          {
            heading: "Geometry of roots",
            body: "The $n$ roots lie on a circle of radius $r^{1/n}$ centered at the origin and form the vertices of a regular $n$-gon. Their sum is $0$ when $n\\ge2$. Use $k=0,\\dots,n-1$ only: further values repeat the same roots.",
          },
        ],
        keyFormulas: [
          { name: "De Moivre's Theorem", statement: "$[r\\,\\text{cis}\\,\\theta]^n=r^n\\,\\text{cis}\\,n\\theta$" },
          { name: "nth roots", statement: "$w_k=r^{1/n}\\,\\text{cis}\\dfrac{\\theta+360^\\circ k}{n},\\;k=0,\\dots,n-1$" },
        ],
        workedExample: {
          problem: "Find $(1+i)^4$.",
          solution: "$1+i=\\sqrt2\\,\\text{cis}\\,45^\\circ$. Then $(1+i)^4=(\\sqrt2)^4\\,\\text{cis}\\,180^\\circ=4(\\cos180^\\circ+i\\sin180^\\circ)=-4$. Check: $(1+i)^2=2i$, and $(2i)^2=-4$.",
        },
      },
      questions: [
        {
          id: "pc-u4-de-moivre-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Using De Moivre's Theorem, $\\left(\\cos20^\\circ+i\\sin20^\\circ\\right)^3$ equals which expression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\cos60^\\circ+i\\sin60^\\circ$" },
              { id: "b", text: "$\\cos8000^\\circ+i\\sin8000^\\circ$" },
              { id: "c", text: "$3\\cos20^\\circ+3i\\sin20^\\circ$" },
              { id: "d", text: "$\\cos23^\\circ+i\\sin23^\\circ$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre's Theorem", statement: "$(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$." },
            ],
            steps: [
              { reasoning: "The modulus is 1, so only the argument changes: multiply it by the exponent.", working: "3\\times20^\\circ=60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Write the result.", working: "\\cos60^\\circ+i\\sin60^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\cos60^\\circ+i\\sin60^\\circ$",
            commonErrors: ["Adding the exponent to the angle.", "Cubing the angle."],
          },
        },
        {
          id: "pc-u4-de-moivre-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use De Moivre's Theorem to evaluate $(1+i)^8$. Enter the real and imaginary parts.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part", answer: 16 },
              { label: "Imaginary part", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre's Theorem", statement: "$[r(\\cos\\theta+i\\sin\\theta)]^n=r^n(\\cos n\\theta+i\\sin n\\theta)$." },
            ],
            steps: [
              { reasoning: "Convert to polar form.", working: "1+i=\\sqrt2(\\cos45^\\circ+i\\sin45^\\circ)", marks: 1, markCode: "M" },
              { reasoning: "Raise the modulus to the 8th power and multiply the argument by 8.", working: "(\\sqrt2)^8(\\cos360^\\circ+i\\sin360^\\circ)=16(\\cos360^\\circ+i\\sin360^\\circ)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "16(1+0i)=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1+i)^8=16$ (real part $16$, imaginary part $0$)",
            commonErrors: ["Writing $(\\sqrt2)^8=8$ or $32$.", "Forgetting to multiply the argument by 8."],
          },
        },
        {
          id: "pc-u4-de-moivre-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $(1-\\sqrt3\\,i)^5$ and write it as $a+bi$. Enter $a$ and $b$ to two decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: 16, tolerance: 0.01 },
              { label: "Imaginary part $b$", answer: 27.71, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre's Theorem", statement: "$[r(\\cos\\theta+i\\sin\\theta)]^n=r^n(\\cos n\\theta+i\\sin n\\theta)$." },
            ],
            steps: [
              { reasoning: "$(1,-\\sqrt3)$ is in Quadrant IV.", working: "r=\\sqrt{1+3}=2,\\quad \\theta=-60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Apply De Moivre's Theorem with $n=5$.", working: "2^5\\left(\\cos(-300^\\circ)+i\\sin(-300^\\circ)\\right)", marks: 1, markCode: "M" },
              { reasoning: "Since $-300^\\circ$ is coterminal with $60^\\circ$, the values are $\\cos=\\tfrac12$ and $\\sin=\\tfrac{\\sqrt3}{2}$.", working: "32\\left(\\tfrac12+i\\tfrac{\\sqrt3}{2}\\right)", marks: 1, markCode: "A" },
              { reasoning: "Simplify.", working: "16+16\\sqrt3\\,i\\approx16+27.71i", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1-\\sqrt3\\,i)^5=16+16\\sqrt3\\,i\\approx16+27.71i$",
            commonErrors: ["Using $\\theta=+60^\\circ$, which gives the conjugate.", "Sign error evaluating $\\sin(-300^\\circ)$."],
          },
        },
        {
          id: "pc-u4-de-moivre-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider the equation $z^3=8i$ over the complex numbers. Give arguments in degrees with $0^\\circ\\le\\theta<360^\\circ$.",
          parts: [
            { label: "a", prompt: "Write $8i$ in polar form. State its modulus and argument.", marks: 2 },
            { label: "b", prompt: "Use De Moivre's Theorem for roots to find the modulus of every solution and the three arguments, in increasing order.", marks: 3 },
            { label: "c", prompt: "Write the solution with the smallest argument in the form $a+bi$, to three decimal places.", marks: 2 },
            { label: "d", prompt: "Find the sum of the three solutions and explain geometrically why this result occurs.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) modulus of $8i$", answer: 8 },
              { label: "(a) argument of $8i$ (degrees)", answer: 90 },
              { label: "(b) modulus of each root", answer: 2 },
              { label: "(b) smallest argument (degrees)", answer: 30 },
              { label: "(b) middle argument (degrees)", answer: 150 },
              { label: "(b) largest argument (degrees)", answer: 270 },
              { label: "(c) real part", answer: 1.732, tolerance: 0.002 },
              { label: "(c) imaginary part", answer: 1 },
              { label: "(d) sum of the roots", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "nth roots", statement: "The $n$th roots of $r\\,\\text{cis}\\,\\theta$ are $r^{1/n}\\,\\text{cis}\\dfrac{\\theta+360^\\circ k}{n}$ for $k=0,\\dots,n-1$." },
              { kind: "property", name: "Symmetry of roots", statement: "The $n$th roots are equally spaced on a circle and are the vertices of a regular $n$-gon centered at the origin." },
            ],
            steps: [
              { part: "a", reasoning: "$8i$ lies on the positive imaginary axis.", working: "8i=8(\\cos90^\\circ+i\\sin90^\\circ)", marks: 1, markCode: "B" },
              { part: "a", reasoning: "State modulus and argument.", working: "r=8,\\;\\theta=90^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Every cube root has modulus $8^{1/3}$.", working: "r=8^{1/3}=2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply $\\dfrac{90^\\circ+360^\\circ k}{3}$ for $k=0,1,2$.", working: "30^\\circ,\\;\\frac{450^\\circ}{3}=150^\\circ,\\;\\frac{810^\\circ}{3}=270^\\circ", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Convert the root with argument $30^\\circ$ to rectangular form.", working: "2(\\cos30^\\circ+i\\sin30^\\circ)=2\\left(\\tfrac{\\sqrt3}{2}+\\tfrac12i\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "\\sqrt3+i\\approx1.732+1i", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The other roots are $-\\sqrt3+i$ and $-2i$; add all three.", working: "(\\sqrt3+i)+(-\\sqrt3+i)+(-2i)=0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The roots form an equilateral triangle inscribed in a circle centered at the origin, so their vectors cancel and the centroid is the origin.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $8\\,\\text{cis}\\,90^\\circ$. (b) modulus $2$; arguments $30^\\circ,150^\\circ,270^\\circ$. (c) $\\sqrt3+i\\approx1.732+i$. (d) Sum $=0$ by symmetry.",
            commonErrors: ["Dividing only $90^\\circ$ by 3 and stopping at one root.", "Cube rooting the argument instead of dividing it by 3.", "Using $8/3$ as the modulus."],
          },
        },
      ],
    },
  ],
};
