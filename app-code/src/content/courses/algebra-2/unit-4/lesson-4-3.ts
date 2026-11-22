import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "alg2-u4-lesson-4-3",
  code: "4-3",
  title: "Complex Numbers and Quadratic Modeling",
  goal: "I CAN perform arithmetic with complex numbers, interpret nonreal quadratic roots, and use a quadratic model to solve projectile-motion problems.",
  standards: ["HSN-CN.A.1", "HSN-CN.A.2", "HSN-CN.C.7", "HSA-CED.A.1"],
  vocabulary: [
    { term: "Imaginary unit", definition: "The number $i$ defined by $i^2=-1$; it is used to express square roots of negative real numbers." },
    { term: "Complex number", definition: "A number of the form $a+bi$, where $a$ and $b$ are real numbers and $i^2=-1$." },
    { term: "Real part", definition: "The real-number component $a$ of a complex number $a+bi$." },
    { term: "Imaginary part", definition: "The coefficient $b$ of $i$ in a complex number $a+bi$; the imaginary part is $b$, not $bi$." },
    { term: "Complex conjugates", definition: "The pair $a+bi$ and $a-bi$; their product is the real number $a^2+b^2$." },
    { term: "Projectile motion model", definition: "A quadratic height function $h(t)=-16t^2+v_0t+h_0$ (height in feet, time in seconds) for an object moving vertically under gravity near Earth's surface, neglecting air resistance." },
    { term: "Initial velocity", definition: "The vertical velocity $v_0$ at time $t=0$; in the stated model its numerical value is in feet per second." },
  ],
  concepts: [
    {
      id: "alg2-u4-complex-arithmetic",
      title: "Complex numbers and arithmetic",
      skill: "Simplify powers of $i$, perform arithmetic in $a+bi$ form, and interpret conjugate roots of quadratic equations.",
      lesson: {
        sections: [
          {
            heading: "The imaginary unit and powers of $i$",
            body: "Define $i=\\sqrt{-1}$, so $i^2=-1$. Higher powers cycle every four: $i^3=-i$ and $i^4=1$, after which the pattern repeats. For example, $i^{11}=i^3=-i$ because $11$ leaves remainder $3$ when divided by $4$. For a negative radicand, factor out $-1$: $\\sqrt{-25}=5i$ when using the principal square root.",
          },
          {
            heading: "Add, subtract, and multiply",
            body: "Write a complex number in standard form $a+bi$. Add or subtract real parts with real parts and imaginary terms with imaginary terms. To multiply, distribute as with binomials and replace each $i^2$ with $-1$; combine the resulting real and imaginary terms. A complex number's real part is $a$ and its imaginary part is the real coefficient $b$.",
          },
          {
            heading: "Conjugates and quadratic roots",
            body: "The conjugate of $a+bi$ is $a-bi$. Their product is $(a+bi)(a-bi)=a^2+b^2$, a real number. When a quadratic has real coefficients and one nonreal root $a+bi$, the other root is its conjugate $a-bi$. Thus a negative discriminant produces a pair of complex conjugate solutions rather than real $x$-intercepts.",
          },
        ],
        keyFormulas: [
          { name: "Imaginary unit", statement: "$i^2=-1,\\quad i^3=-i,\\quad i^4=1$; powers repeat every four exponents." },
          { name: "Complex multiplication", statement: "$(a+bi)(c+di)=(ac-bd)+(ad+bc)i$." },
          { name: "Conjugate product", statement: "$(a+bi)(a-bi)=a^2+b^2$." },
        ],
        workedExample: {
          problem: "Simplify $(3+2i)(1-4i)$ and state its real and imaginary parts.",
          solution: "Distribute and use $i^2=-1$: $(3+2i)(1-4i)=3-12i+2i-8i^2=3-10i+8=11-10i$. The real part is $11$ and the imaginary part is $-10$.",
        },
      },
      questions: [
        {
          id: "alg2-u4-complex-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Simplify $\\sqrt{-36}$ using the principal square root.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6$" },
            { id: "b", text: "$6i$" },
            { id: "c", text: "$-6i$" },
            { id: "d", text: "$36i$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Imaginary unit", statement: "$i=\\sqrt{-1}$ and $i^2=-1$." },
              { kind: "property", name: "Principal square root", statement: "$\\sqrt{-a}=i\\sqrt a$ for real $a>0$ when expressing the principal complex square root." },
            ],
            steps: [
              { reasoning: "Factor the radicand as a product of $-1$ and a positive square.", working: "\\sqrt{-36}=\\sqrt{-1}\\sqrt{36}", marks: 1, markCode: "M" },
              { reasoning: "Replace $\\sqrt{-1}$ with $i$ and take the nonnegative square root of $36$.", working: "i\\cdot6=6i", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6i$.",
            commonErrors: ["Answering $\\pm6i$: the principal square root is one value, $6i$.", "Treating $\\sqrt{-36}$ as $-6$."],
          },
        },
        {
          id: "alg2-u4-complex-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $(4-3i)+(2+5i)$ into standard form. Enter the real part, then the imaginary part.",
          response: { type: "numeric", parts: [{ label: "Real part", answer: 6 }, { label: "Imaginary part", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Complex addition", statement: "Add the real components and add the coefficients of $i$ separately." },
              { kind: "definition", name: "Imaginary part", statement: "For $a+bi$, the imaginary part is the real coefficient $b$." },
            ],
            steps: [
              { reasoning: "Group like components before adding.", working: "(4+2)+(-3i+5i)", marks: 1, markCode: "M" },
              { reasoning: "Add the real parts and the imaginary coefficients.", working: "6+2i", marks: 1, markCode: "A" },
              { reasoning: "Read off the real part and coefficient of $i$.", working: "a=6,\\quad b=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Standard form $6+2i$; real part $6$, imaginary part $2$.",
            commonErrors: ["Reporting $2i$ as the imaginary part instead of its coefficient $2$."],
          },
        },
        {
          id: "alg2-u4-complex-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $x^2+4x+13=0$ over the complex numbers. Explain why the two solutions are conjugates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$." },
              { kind: "property", name: "Negative radicand", statement: "$\\sqrt{-m}=i\\sqrt m$ for $m>0$ using the principal square root." },
              { kind: "theorem", name: "Complex conjugate roots", statement: "A quadratic with real coefficients and nonreal roots has those roots in conjugate pairs." },
            ],
            steps: [
              { reasoning: "Identify coefficients and compute the discriminant.", working: "a=1,\\;b=4,\\;c=13;\\qquad D=4^2-4(1)(13)=-36", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the quadratic formula, expressing the negative square root with $i$.", working: "x=\\frac{-4\\pm\\sqrt{-36}}{2}=\\frac{-4\\pm6i}{2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify both values.", working: "x=-2+3i \\quad\\text{or}\\quad x=-2-3i", marks: 1, markCode: "A" },
              { reasoning: "Explain that the roots have equal real parts and opposite imaginary parts, as expected for a real-coefficient quadratic.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=-2+3i$ and $x=-2-3i$; they are conjugates because their real parts match and their imaginary parts are opposites.",
            commonErrors: ["Dropping the $\\pm$ and reporting only one complex root.", "Dividing only the real term by $2$ but not the imaginary term."],
            examinerNote: "Full credit requires both roots and a valid conjugate-pair explanation.",
          },
        },
        {
          id: "alg2-u4-complex-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In an alternating-current circuit, the impedance of a component is a complex number measured in ohms. Two components have impedances $Z_1=3+4i$ and $Z_2=1-2i$.",
          parts: [
            { label: "a", prompt: "Components in series have impedances that add. Find $Z_1+Z_2$ in the form $a+bi$.", marks: 2 },
            { label: "b", prompt: "Find the product $Z_1Z_2$ in the form $a+bi$.", marks: 2 },
            { label: "c", prompt: "Find $Z_1\\overline{Z_1}$, where $\\overline{Z_1}$ is the conjugate of $Z_1$, and explain why the result is real.", marks: 2 },
            { label: "d", prompt: "Write a quadratic equation $x^2+bx+c=0$ with real coefficients whose roots are $Z_1$ and $\\overline{Z_1}$. Verify with the quadratic formula.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Real part of $Z_1+Z_2$", answer: 4 },
              { label: "(a) Imaginary part of $Z_1+Z_2$", answer: 2 },
              { label: "(b) Real part of $Z_1Z_2$", answer: 11 },
              { label: "(b) Imaginary part of $Z_1Z_2$", answer: -2 },
              { label: "(c) $Z_1\\overline{Z_1}$", answer: 25 },
              { label: "(d) Coefficient $b$", answer: -6 },
              { label: "(d) Coefficient $c$", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complex arithmetic", statement: "$(a+bi)+(c+di)=(a+c)+(b+d)i$ and $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$, using $i^2=-1$." },
              { kind: "property", name: "Conjugate product", statement: "$(a+bi)(a-bi)=a^2+b^2$, a nonnegative real number." },
              { kind: "theorem", name: "Sum and product of roots", statement: "A monic quadratic with roots $r_1,r_2$ is $x^2-(r_1+r_2)x+r_1r_2=0$." },
            ],
            steps: [
              { part: "a", reasoning: "Add the real parts and the imaginary parts separately.", working: "(3+1)+(4-2)i", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "Z_1+Z_2=4+2i", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Distribute and replace $i^2$ by $-1$.", working: "(3+4i)(1-2i)=3-6i+4i-8i^2=3-2i+8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Combine real parts.", working: "Z_1Z_2=11-2i", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The conjugate is $3-4i$; use the conjugate product.", working: "(3+4i)(3-4i)=3^2+4^2=25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The imaginary cross terms $-12i$ and $+12i$ cancel and $-16i^2=+16$, leaving a real number.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Compute the sum and product of the roots.", working: "Z_1+\\overline{Z_1}=6,\\quad Z_1\\overline{Z_1}=25", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Substitute into $x^2-(\\text{sum})x+\\text{product}$.", working: "x^2-6x+25=0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Verify with the quadratic formula: $D=36-100=-64$.", working: "x=\\frac{6\\pm\\sqrt{-64}}{2}=\\frac{6\\pm8i}{2}=3\\pm4i", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $4+2i$. (b) $11-2i$. (c) $25$; imaginary parts cancel. (d) $x^2-6x+25=0$, roots $3\\pm4i$.",
            commonErrors: [
              "Using $i^2=1$ instead of $-1$, giving $-5-2i$ for the product.",
              "Multiplying only the real parts and the imaginary parts separately.",
              "Using the conjugate $-3+4i$ or $-3-4i$.",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-u4-projectile-models",
      title: "Projectile-motion models",
      skill: "Build and interpret a projectile height function from its initial conditions, including its maximum height and landing time.",
      lesson: {
        sections: [
          {
            heading: "Build the height model",
            body: "For vertical motion near Earth's surface measured in feet and seconds, use $h(t)=-16t^2+v_0t+h_0$. The coefficient $-16$ represents half the acceleration due to gravity in this unit system. The initial velocity $v_0$ is the coefficient of $t$, and the initial height $h_0$ is the constant term: $h(0)=h_0$. Use consistent units and keep physical time nonnegative.",
          },
          {
            heading: "Find peak height and its time",
            body: "The negative leading coefficient means the height graph opens downward, so its vertex gives the maximum height. With $a=-16$ and $b=v_0$, the time to the peak is $t=-\\frac{b}{2a}=\\frac{v_0}{32}$. Substitute this time into $h(t)$ to find the peak height. If the object is launched upward, the peak occurs after $t=0$.",
          },
          {
            heading: "Find when it lands",
            body: "To find a landing time at ground level, set $h(t)=0$ and solve the resulting quadratic. When the object starts above the ground, one root may be negative; reject it because it describes a time before launch. State the positive root and the height condition used. If the object lands on a platform or at another height, set $h(t)$ equal to that height instead of zero.",
          },
        ],
        keyFormulas: [
          { name: "Projectile height in feet", statement: "$h(t)=-16t^2+v_0t+h_0$." },
          { name: "Time to maximum height", statement: "$t_{\\text{max}}=-\\frac{b}{2a}=\\frac{v_0}{32}$ for this model." },
        ],
        workedExample: {
          problem: "A ball is thrown upward from a height of $5$ ft at $48$ ft/s. Find its height model and time to maximum height.",
          solution: "Substitute $v_0=48$ and $h_0=5$: $h(t)=-16t^2+48t+5$. The time to the peak is $t=\\frac{48}{32}=\\frac32$ seconds. The maximum height is $h(\\frac32)=-16(\\frac94)+48(\\frac32)+5=-36+72+5=41$ ft.",
        },
      },
      questions: [
        {
          id: "alg2-u4-proj-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A ball is launched from a platform $6$ ft above the ground with initial upward velocity $32$ ft/s. Which model gives its height $h(t)$ in feet after $t$ seconds?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$h(t)=16t^2+32t+6$" },
            { id: "b", text: "$h(t)=-16t^2+6t+32$" },
            { id: "c", text: "$h(t)=-32t^2+16t+6$" },
            { id: "d", text: "$h(t)=-16t^2+32t+6$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Projectile height model", statement: "$h(t)=-16t^2+v_0t+h_0$ for height in feet and time in seconds." },
              { kind: "definition", name: "Initial conditions", statement: "$v_0$ is the initial vertical velocity and $h_0=h(0)$ is the initial height." },
            ],
            steps: [
              { reasoning: "Identify the initial velocity and starting height from the context.", working: "v_0=32,\\quad h_0=6", marks: 1, markCode: "B" },
              { reasoning: "Substitute those values into the standard projectile model; the quadratic coefficient remains $-16$.", working: "h(t)=-16t^2+32t+6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $h(t)=-16t^2+32t+6$.",
            commonErrors: ["Making the quadratic coefficient positive, which would model upward acceleration throughout." , "Swapping initial height and initial velocity."],
          },
        },
        {
          id: "alg2-u4-proj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A toy rocket's height is $h(t)=-16t^2+64t+3$. At what time does it reach its maximum height? Enter the time in seconds.",
          response: { type: "numeric", parts: [{ label: "Time to maximum", answer: 2, unit: "s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "For a quadratic $at^2+bt+c$, the vertex occurs at $t=-\\frac{b}{2a}$." },
              { kind: "property", name: "Downward-opening model", statement: "With $a<0$, the vertex is the maximum height." },
            ],
            steps: [
              { reasoning: "Identify the quadratic and linear coefficients.", working: "a=-16,\\quad b=64", marks: 1, markCode: "B" },
              { reasoning: "Apply the vertex-time formula.", working: "t=-\\frac{64}{2(-16)}", marks: 1, markCode: "M" },
              { reasoning: "Simplify and include the time unit.", working: "t=2\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ seconds.",
            commonErrors: ["Using the constant term as $b$.", "Forgetting the negative sign in $a=-16$."],
          },
        },
        {
          id: "alg2-u4-proj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is thrown upward from a height of $4$ ft with initial velocity $48$ ft/s. Its height is $h(t)=-16t^2+48t+4$. Find the time when it reaches the ground after launch. Show why the other algebraic root is rejected.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ground-level condition", statement: "The ball reaches the ground when $h(t)=0$." },
              { kind: "theorem", name: "Quadratic formula", statement: "For $at^2+bt+c=0$, $t=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$." },
              { kind: "principle", name: "Physical domain", statement: "Time after launch must satisfy $t\\ge0$; a negative root describes a time before launch and is not physically relevant." },
            ],
            steps: [
              { reasoning: "Set height equal to zero to represent ground level.", working: "-16t^2+48t+4=0", marks: 1, markCode: "M" },
              { reasoning: "Use the quadratic formula with the coefficients, or an equivalent exact solution.", working: "t=\\frac{-48\\pm\\sqrt{48^2-4(-16)(4)}}{2(-16)}=\\frac{-48\\pm\\sqrt{2560}}{-32}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the roots; $\\sqrt{2560}=16\\sqrt{10}$.", working: "t=\\frac{3\\pm\\sqrt{10}}{2}", marks: 1, markCode: "A" },
              { reasoning: "Reject the negative root because time after launch cannot be negative, and retain the positive root.", working: "\\frac{3-\\sqrt{10}}{2}<0;\\qquad t=\\frac{3+\\sqrt{10}}{2}>0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The ball reaches the ground at $t=\\frac{3+\\sqrt{10}}{2}$ seconds (approximately $3.08$ s). The root $\\frac{3-\\sqrt{10}}{2}$ is negative and lies before launch.",
            commonErrors: ["Keeping the negative root as a physical landing time.", "Approximating too early and losing accuracy in the radical simplification."],
            examinerNote: "The exact positive root is required; accept a decimal only if it is clearly identified as an approximation and the rejection of the negative root is explained.",
          },
        },
        {
          id: "alg2-u4-proj-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A model rocket is launched upward from a platform $20$ ft above the ground with an initial velocity of $64$ ft/s. Its height in feet after $t$ seconds is\n\n$$h(t)=-16t^2+64t+20$$",
          parts: [
            { label: "a", prompt: "Find the time at which the rocket reaches its maximum height and the maximum height.", marks: 2 },
            { label: "b", prompt: "A camera records the rocket when its height is $68$ ft. Find both times at which this occurs.", marks: 2 },
            { label: "c", prompt: "Find the exact time the rocket hits the ground, and give it to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "Show using the discriminant that the rocket never reaches $90$ ft, and relate this to your answer in part (a).", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Time of maximum height", answer: 2, unit: "s" },
              { label: "(a) Maximum height", answer: 84, unit: "ft" },
              { label: "(b) Earlier time", answer: 1, unit: "s" },
              { label: "(b) Later time", answer: 3, unit: "s" },
              { label: "(c) Time of landing", answer: 4.29, tolerance: 0.01, unit: "s" },
              { label: "(d) Discriminant", answer: -96 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex of a parabola", statement: "For $at^2+bt+c$ with $a<0$, the maximum occurs at $t=-\\dfrac{b}{2a}$." },
              { kind: "formula", name: "Quadratic formula", statement: "$t=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$; $D=b^2-4ac<0$ means no real solution." },
              { kind: "principle", name: "Physical domain", statement: "Time after launch satisfies $t\\ge0$, so negative roots are rejected." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the vertex-time formula.", working: "t=-\\frac{64}{2(-16)}=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the height at the vertex.", working: "h(2)=-64+128+20=84", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the height to $68$ and simplify by dividing by $-16$.", working: "-16t^2+64t-48=0 \\implies t^2-4t+3=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factor to find the times, one on the way up and one on the way down (symmetric about $t=2$).", working: "(t-1)(t-3)=0 \\implies t=1 \\text{ or } t=3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $h(t)=0$, divide by $-4$ and apply the quadratic formula to $4t^2-16t-5=0$.", working: "t=\\frac{16\\pm\\sqrt{256+80}}{8}=\\frac{16\\pm4\\sqrt{21}}{8}=\\frac{4\\pm\\sqrt{21}}{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reject the negative root $\\frac{4-\\sqrt{21}}{2}<0$ (before launch).", working: "t=\\frac{4+\\sqrt{21}}{2}\\approx4.29", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the height to $90$ and write in the form $at^2+bt+c=0$ with integer coefficients.", working: "-16t^2+64t-70=0 \\implies 8t^2-32t+35=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate the discriminant.", working: "D=(-32)^2-4(8)(35)=1024-1120=-96", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Since $D<0$ there is no real time with $h=90$. This agrees with part (a): the greatest height is $84<90$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $t=2$ s, $84$ ft. (b) $t=1$ s and $t=3$ s. (c) $t=\\frac{4+\\sqrt{21}}{2}\\approx4.29$ s. (d) $D=-96<0$, so $90$ ft is never reached; the maximum is $84$ ft.",
            commonErrors: [
              "Using $20$ as the maximum height because it is the constant term.",
              "Keeping the negative root in part (c).",
              "Dividing the equation by $-16$ for the $90$ ft case without dividing the constant: $70/16$ is not an integer.",
            ],
          },
        },
      ],
    },
  ],
};
