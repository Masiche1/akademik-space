import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "aasl-u6-lesson-6-3",
  code: "6-3",
  title: "Applications of Integration",
  goal: "I CAN find distance travelled and displacement using integration, and combine differentiation and integration to solve multi-step problems.",
  standards: ["SL 5.1", "SL 5.5", "SL 5.9", "SL 5.11"],
  vocabulary: [
    { term: "Displacement", definition: "The change in position, $\\int_a^bv\\,dt$, which can be positive, negative or zero." },
    { term: "Distance travelled", definition: "The total length of path, $\\int_a^b|v|\\,dt$, which is never negative." },
    { term: "Velocity from acceleration", definition: "$v(t)=\\int a(t)\\,dt$, with the constant found from an initial or given velocity." },
    { term: "Initial condition", definition: "The value of a quantity at $t=0$ (or another stated time), used to find a constant of integration." },
    { term: "Net change", definition: "The definite integral of a rate of change: $f(b)-f(a)=\\int_a^bf'(x)\\,dx$." },
  ],
  concepts: [
    {
      id: "aasl-u6-distance-travelled",
      title: "Distance travelled and kinematics",
      skill: "Use integration to find displacement, distance and velocity from acceleration.",
      lesson: {
        sections: [
          {
            heading: "Displacement versus distance",
            body: "If $v(t)$ is the velocity, the **displacement** over $[a,b]$ is $\\int_a^bv\\,dt$ and the **distance travelled** is $\\int_a^b|v|\\,dt$. They differ whenever the particle turns round. To find the distance by hand, solve $v=0$ to find the turning times in the interval, integrate over each sub-interval and add the absolute values. With a GDC you can integrate $|v|$ directly.",
          },
          {
            heading: "Going from acceleration to position",
            body: "Integrate acceleration to get velocity, and velocity to get displacement: $v=\\int a\\,dt$ and $s=\\int v\\,dt$. Each integration introduces a constant that you find from an initial condition such as $v(0)=3$ or $s(0)=0$. Remember that velocity and displacement are signed quantities.",
          },
        ],
        keyFormulas: [
          { name: "Displacement", statement: "$\\int_a^bv\\,dt$" },
          { name: "Distance travelled", statement: "$\\int_a^b|v|\\,dt$" },
          { name: "Velocity from acceleration", statement: "$v=\\int a\\,dt$" },
        ],
        workedExample: {
          problem: "A particle has $v=t-2$ for $0\\le t\\le4$. Find the displacement and the distance travelled.",
          solution: "Displacement $=\\left[\\frac{t^2}{2}-2t\\right]_0^4=0$. The velocity is zero at $t=2$: $\\int_0^2=-2$, $\\int_2^4=2$. Distance $=2+2=4$.",
        },
      },
      questions: [
        {
          id: "aasl-u6-distance-travelled-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves in a straight line with velocity $v=2t$ m s$^{-1}$ for $t\\ge0$. What is its displacement between $t=0$ and $t=3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$ m" },
              { id: "b", text: "$6$ m" },
              { id: "c", text: "$18$ m" },
              { id: "d", text: "$4.5$ m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "$\\text{displacement}=\\int_a^bv\\,dt$" },
            ],
            steps: [
              { reasoning: "Integrate the velocity.", working: "\\int_0^32t\\,dt=\\left[t^2\\right]_0^3", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits.", working: "9-0=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $9$ m",
            commonErrors: ["Evaluating the velocity at $t=3$ ($6$).", "Forgetting to divide by the new power."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A particle moves in a straight line with velocity $v=t^2-4t+3$ m s$^{-1}$ for $0\\le t\\le3$.\n\nFind the displacement of the particle and the exact total distance it travels in the first $3$ seconds. Give the distance to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Displacement (m)", answer: 0 },
              { label: "Distance travelled (m, 3 s.f.)", answer: 2.67, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement and distance", statement: "Displacement $=\\int v\\,dt$; distance $=\\int|v|\\,dt$." },
            ],
            steps: [
              { reasoning: "Antiderivative of $v$.", working: "s=\\frac{t^3}{3}-2t^2+3t", marks: 1, markCode: "A" },
              { reasoning: "Displacement over $[0,3]$: $9-18+9=0$.", working: "\\int_0^3v\\,dt=0", marks: 1, markCode: "A" },
              { reasoning: "$v=(t-1)(t-3)$ so the particle turns at $t=1$. Integrals: $\\int_0^1=\\frac43$ and $\\int_1^3=-\\frac43$.", working: "\\int_0^1v\\,dt=\\frac43,\\quad \\int_1^3v\\,dt=-\\frac43", marks: 1, markCode: "M" },
              { reasoning: "Add the absolute values.", working: "\\frac43+\\frac43=\\frac83\\approx2.67", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Displacement $0$ m; distance $\\dfrac83\\approx2.67$ m",
            commonErrors: ["Giving the distance as the displacement ($0$).", "Not splitting the integral at the turning point."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A particle moves in a straight line with velocity $v=5-t^2$ m s$^{-1}$ for $0\\le t\\le3$.\n\nFind the total distance travelled by the particle in the first $3$ seconds. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance travelled (m)", answer: 8.91, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance travelled", statement: "$\\text{distance}=\\int_a^b|v|\\,dt$" },
            ],
            steps: [
              { reasoning: "The velocity is zero when $t^2=5$, which lies inside $[0,3]$.", working: "t=\\sqrt5\\approx2.236", marks: 1, markCode: "A" },
              { reasoning: "Split at the turning time (or integrate $|v|$ on the GDC).", working: "\\int_0^{\\sqrt5}(5-t^2)dt+\\left|\\int_{\\sqrt5}^3(5-t^2)dt\\right|", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the pieces.", working: "7.454\\ \\text{and}\\ |-1.454|", marks: 1, markCode: "A" },
              { reasoning: "Add.", working: "8.91", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Distance $\\approx8.91$ m",
            commonErrors: ["Using the displacement $6$ m.", "Rounding $\\sqrt5$ too early."],
            examinerNote: "Displacement over the interval is $\\int_0^3v\\,dt=6$ m, which is less than the distance.",
          },
        },
        {
          id: "aasl-u6-distance-travelled-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 8,
          stem: "A particle moves along a straight line. Its velocity at time $t$ seconds is $v=6t-3t^2$ m s$^{-1}$ for $0\\le t\\le3$.",
          parts: [
            { label: "a", prompt: "Find the acceleration of the particle at $t=2$.", marks: 2 },
            { label: "b", prompt: "Show that the particle changes direction at $t=2$.", marks: 2 },
            { label: "c", prompt: "Find the displacement of the particle between $t=0$ and $t=3$.", marks: 2 },
            { label: "d", prompt: "Find the total distance travelled by the particle between $t=0$ and $t=3$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Acceleration at $t=2$ (m s$^{-2}$)", answer: -6 },
              { label: "(c) Displacement (m)", answer: 0 },
              { label: "(d) Distance travelled (m)", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a=\\dfrac{dv}{dt}$" },
              { kind: "formula", name: "Displacement and distance", statement: "Displacement $=\\int v\\,dt$; distance $=\\int|v|\\,dt$." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate $v$.", working: "a=6-6t", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Substitute $t=2$.", working: "a(2)=-6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise: $v=3t(2-t)=0$ at $t=2$ for $t>0$.", working: "v=3t(2-t)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$v>0$ for $0<t<2$ and $v<0$ for $2<t\\le3$, so the sign changes. (AG)", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Integrate and evaluate.", working: "\\int_0^3(6t-3t^2)dt=\\left[3t^2-t^3\\right]_0^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute limits.", working: "27-27=0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Split at $t=2$: $\\int_0^2=12-8=4$ and $\\int_2^3=0-4=-4$.", working: "\\int_0^2v\\,dt=4,\\quad \\int_2^3v\\,dt=-4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the absolute values.", working: "4+4=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $-6$ m s$^{-2}$ (b) $v=3t(2-t)$ changes sign at $t=2$ (c) $0$ m (d) $8$ m",
            commonErrors: ["Stating the distance travelled is $0$ because the displacement is $0$.", "Using $v$ rather than $a$ in part (a)."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves in a straight line with velocity $v=3t^2$ m s$^{-1}$ for $0\\le t\\le2$. What is its displacement between $t=0$ and $t=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$ m" },
              { id: "b", text: "$12$ m" },
              { id: "c", text: "$8$ m" },
              { id: "d", text: "$4$ m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "$\\text{displacement}=\\int_a^bv\\,dt$" },
            ],
            steps: [
              { reasoning: "Integrate the velocity.", working: "\\int_0^23t^2\\,dt=\\left[t^3\\right]_0^2", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits.", working: "8-0=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $8$ m",
            commonErrors: ["Evaluating $v(2)=12$ instead of integrating."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves in a straight line with velocity $v=t-3$ m s$^{-1}$ for $0\\le t\\le6$. What is its displacement over this interval?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$ m" },
              { id: "b", text: "$-9$ m" },
              { id: "c", text: "$0$ m" },
              { id: "d", text: "$18$ m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "$\\text{displacement}=\\int_a^bv\\,dt$" },
            ],
            steps: [
              { reasoning: "Integrate the velocity.", working: "\\int_0^6(t-3)\\,dt=\\left[\\frac{t^2}{2}-3t\\right]_0^6", marks: 1, markCode: "M" },
              { reasoning: "Substitute the limits: $18-18$.", working: "=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $0$ m",
            commonErrors: ["Giving the distance travelled ($9$ m) instead of the displacement."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A particle has acceleration $a=4t$ m s$^{-2}$ and initial velocity $v(0)=1$ m s$^{-1}$. What is its velocity at $t=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ m s$^{-1}$" },
              { id: "b", text: "$9$ m s$^{-1}$" },
              { id: "c", text: "$5$ m s$^{-1}$" },
              { id: "d", text: "$17$ m s$^{-1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Velocity from acceleration", statement: "$v=\\int a\\,dt$ with the constant found from the initial condition." },
            ],
            steps: [
              { reasoning: "Integrate the acceleration and use $v(0)=1$.", working: "v=2t^2+1", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t=2$.", working: "v(2)=8+1=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $9$ m s$^{-1}$",
            commonErrors: ["Forgetting the constant of integration from $v(0)=1$."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves in a straight line with velocity $v=4-t$ m s$^{-1}$ for $0\\le t\\le5$. What is the total distance it travels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ m" },
              { id: "b", text: "$8.5$ m" },
              { id: "c", text: "$7.5$ m" },
              { id: "d", text: "$-0.5$ m" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance travelled", statement: "$\\text{distance}=\\int_a^b|v|\\,dt$" },
            ],
            steps: [
              { reasoning: "The velocity is zero at $t=4$; the particle moves forward then backward.", working: "\\int_0^4(4-t)\\,dt+\\left|\\int_4^5(4-t)\\,dt\\right|", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $8+0.5$.", working: "=8.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $8.5$ m",
            commonErrors: ["Giving the displacement $7.5$ m instead of the distance."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A particle moves in a straight line with velocity $v=3\\cos t$ m s$^{-1}$ for $0\\le t\\le\\frac{\\pi}{2}$. What is its displacement over this interval?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$ m" },
              { id: "b", text: "$6$ m" },
              { id: "c", text: "$-3$ m" },
              { id: "d", text: "$3$ m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "$\\text{displacement}=\\int_a^bv\\,dt$" },
            ],
            steps: [
              { reasoning: "Integrate the velocity.", working: "\\int_0^{\\pi/2}3\\cos t\\,dt=\\left[3\\sin t\\right]_0^{\\pi/2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate using $\\sin\\frac{\\pi}{2}=1$ and $\\sin0=0$.", working: "3-0=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $3$ m",
            commonErrors: ["Differentiating instead of integrating the velocity."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Over a time interval, a particle has displacement $5$ m but travels a total distance of $12$ m. What can be concluded?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The particle must have changed direction during the interval." },
              { id: "b", text: "The acceleration of the particle was constant." },
              { id: "c", text: "The velocity of the particle was always positive." },
              { id: "d", text: "The displacement must have been negative." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Displacement versus distance", statement: "Distance equals the absolute displacement only when the velocity does not change sign." },
            ],
            steps: [
              { reasoning: "Distance exceeds the magnitude of displacement only if the particle reverses direction.", working: "12>5", marks: 1, markCode: "M" },
              { reasoning: "State the conclusion.", working: "\\text{the particle changed direction}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Confusing displacement with distance travelled."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A particle moves in a straight line with velocity $v=3-t^2$ m s$^{-1}$ for $0\\le t\\le2$.\n\nFind the displacement of the particle and the total distance it travels, giving answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Displacement (m)", answer: 3.33, tolerance: 0.01 },
              { label: "Distance travelled (m)", answer: 3.59, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement and distance", statement: "Displacement $=\\int v\\,dt$; distance $=\\int|v|\\,dt$." },
            ],
            steps: [
              { reasoning: "Antiderivative of $v$.", working: "s=3t-\\frac{t^3}{3}", marks: 1, markCode: "A" },
              { reasoning: "Displacement over $[0,2]$.", working: "\\int_0^2v\\,dt=6-\\frac83=\\frac{10}{3}\\approx3.33", marks: 1, markCode: "A" },
              { reasoning: "$v=0$ at $t=\\sqrt3\\approx1.73$, inside the interval, so split there.", working: "t=\\sqrt3", marks: 1, markCode: "M" },
              { reasoning: "Distance $=\\left|\\int_0^{\\sqrt3}v\\,dt\\right|+\\left|\\int_{\\sqrt3}^2v\\,dt\\right|=2\\sqrt3+\\left(2\\sqrt3-\\frac{10}{3}\\right)$.", working: "=4\\sqrt3-\\frac{10}{3}\\approx3.59", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Displacement $\\approx3.33$ m; distance $\\approx3.59$ m",
            commonErrors: ["Giving the distance as the displacement.", "Missing that $v$ changes sign inside the interval."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A particle moves in a straight line with acceleration $a=6t-4$ m s$^{-2}$ for $t\\ge0$. Its initial velocity is $v(0)=-1$ m s$^{-1}$ and its initial displacement from the origin is $s(0)=0$ m.\n\nFind $s(2)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant of integration in $v(t)$", answer: -1 },
              { label: "$s(2)$ (m)", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Velocity from acceleration", statement: "$v=\\int a\\,dt$ with the constant from the initial condition." },
              { kind: "formula", name: "Displacement from velocity", statement: "$s=\\int v\\,dt$ with the constant from $s(0)=0$." },
            ],
            steps: [
              { reasoning: "Integrate the acceleration.", working: "v=3t^2-4t+C", marks: 1, markCode: "A" },
              { reasoning: "Use $v(0)=-1$.", working: "C=-1,\\quad v=3t^2-4t-1", marks: 1, markCode: "M" },
              { reasoning: "Integrate the velocity and use $s(0)=0$.", working: "s=t^3-2t^2-t", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $t=2$.", working: "s(2)=8-8-2=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$s(2)=-2$ m",
            commonErrors: ["Using $v(0)=-1$ in the formula for $s$ instead of $v$."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A particle moves in a straight line with velocity $v=2t-5$ m s$^{-1}$ for $0\\le t\\le4$.\n\nFind the displacement of the particle and the total distance it travels.",
          response: {
            type: "numeric",
            parts: [
              { label: "Displacement (m)", answer: -4 },
              { label: "Distance travelled (m)", answer: 8.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement and distance", statement: "Displacement $=\\int v\\,dt$; distance $=\\int|v|\\,dt$." },
            ],
            steps: [
              { reasoning: "Find the turning time: $v=0$ at $t=2.5$, inside the interval.", working: "t=2.5", marks: 1, markCode: "M" },
              { reasoning: "Displacement over $[0,4]$.", working: "\\int_0^4(2t-5)\\,dt=\\left[t^2-5t\\right]_0^4=16-20=-4", marks: 1, markCode: "A" },
              { reasoning: "Integrate over each sub-interval.", working: "\\int_0^{2.5}v\\,dt=-6.25,\\quad \\int_{2.5}^4v\\,dt=2.25", marks: 1, markCode: "M" },
              { reasoning: "Add the absolute values.", working: "6.25+2.25=8.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Displacement $-4$ m; distance $8.5$ m",
            commonErrors: ["Reporting the displacement as the distance."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A particle moves in a straight line with velocity $v=2-t^2$ m s$^{-1}$ for $0\\le t\\le2$.\n\nFind the displacement of the particle and the total distance it travels, giving answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Displacement (m)", answer: 1.33, tolerance: 0.005 },
              { label: "Distance travelled (m)", answer: 2.44, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement and distance", statement: "Displacement $=\\int v\\,dt$; distance $=\\int|v|\\,dt$." },
            ],
            steps: [
              { reasoning: "$v=0$ at $t=\\sqrt2\\approx1.41$, inside the interval.", working: "t=\\sqrt2", marks: 1, markCode: "M" },
              { reasoning: "Displacement over $[0,2]$.", working: "\\int_0^2(2-t^2)\\,dt=\\left[2t-\\frac{t^3}{3}\\right]_0^2=4-\\frac83=\\frac43\\approx1.33", marks: 1, markCode: "A" },
              { reasoning: "Distance $=\\int_0^{\\sqrt2}(2-t^2)dt+\\left|\\int_{\\sqrt2}^2(2-t^2)dt\\right|=\\frac{4\\sqrt2}{3}+\\frac{4\\sqrt2-4}{3}$.", working: "=\\frac{8\\sqrt2-4}{3}\\approx2.44", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the distance.", working: "\\approx2.44", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Displacement $\\approx1.33$ m; distance $\\approx2.44$ m",
            commonErrors: ["Forgetting that $v$ becomes negative after $t=\\sqrt2$."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 7,
          stem: "A particle moves in a straight line with acceleration $a=4t-2$ m s$^{-2}$ for $t\\ge0$. Its velocity at $t=0$ is $3$ m s$^{-1}$ and its displacement from the origin at $t=0$ is $0$ m.",
          parts: [
            { label: "a", prompt: "Find $v(t)$.", marks: 2 },
            { label: "b", prompt: "Find $s(t)$.", marks: 2 },
            { label: "c", prompt: "Find the acceleration of the particle at $t=1$.", marks: 1 },
            { label: "d", prompt: "Show that the particle never changes direction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Velocity from acceleration", statement: "$v=\\int a\\,dt$ with the constant from the initial condition." },
              { kind: "formula", name: "Displacement from velocity", statement: "$s=\\int v\\,dt$ with the constant from $s(0)=0$." },
            ],
            steps: [
              { part: "a", reasoning: "Integrate the acceleration.", working: "v=2t^2-2t+C", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Use $v(0)=3$.", working: "C=3,\\quad v=2t^2-2t+3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Integrate the velocity.", working: "s=\\frac{2}{3}t^3-t^2+3t+D", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $s(0)=0$.", working: "D=0,\\quad s=\\frac{2}{3}t^3-t^2+3t", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $t=1$ into $a=4t-2$.", working: "a(1)=2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$v'(t)=4t-2=0$ at $t=0.5$, and $v(0.5)=0.5-1+3=2.5$ is the minimum value of $v$.", working: "v_{\\min}=2.5>0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $v>0$ for all $t$, the velocity never changes sign (AG).", working: "v>0\\ \\forall t", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $v=2t^2-2t+3$ (b) $s=\\frac23t^3-t^2+3t$ (c) $2$ m s$^{-2}$ (d) $v>0$ always",
            commonErrors: ["Forgetting the constant when integrating $v$ to get $s$."],
          },
        },
        {
          id: "aasl-u6-distance-travelled-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A particle moves in a straight line with velocity $v=t^3-3t$ m s$^{-1}$ for $0\\le t\\le3$.",
          parts: [
            { label: "a", prompt: "Find the value of $t$ in $(0,3)$ at which the particle is instantaneously at rest.", marks: 1 },
            { label: "b", prompt: "Find the displacement of the particle between $t=0$ and $t=3$.", marks: 2 },
            { label: "c", prompt: "Find the total distance travelled by the particle between $t=0$ and $t=3$.", marks: 3 },
            { label: "d", prompt: "Find the average velocity of the particle over this interval.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement and distance", statement: "Displacement $=\\int v\\,dt$; distance $=\\int|v|\\,dt$." },
            ],
            steps: [
              { part: "a", reasoning: "Set $v=0$: $t(t^2-3)=0$.", working: "t=\\sqrt3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Integrate the velocity.", working: "\\int_0^3(t^3-3t)\\,dt=\\left[\\frac{t^4}{4}-\\frac{3t^2}{2}\\right]_0^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{81}{4}-\\frac{27}{2}=\\frac{27}{4}=6.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Split at $t=\\sqrt3$: $\\int_0^{\\sqrt3}v\\,dt=-\\frac94$ and $\\int_{\\sqrt3}^3v\\,dt=9$.", working: "-\\frac94\\ \\text{and}\\ 9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add the absolute values.", working: "\\frac94+9=\\frac{45}{4}=11.25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the distance.", working: "\\frac{45}{4}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Average velocity $=\\frac{\\text{displacement}}{\\text{time}}$.", working: "\\frac{27/4}{3}=\\frac94=2.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $t=\\sqrt3$ (b) $\\frac{27}{4}$ m (c) $\\frac{45}{4}$ m (d) $\\frac94$ m s$^{-1}$",
            commonErrors: ["Using the displacement as the distance.", "Evaluating $\\int_{\\sqrt3}^3v\\,dt$ with the wrong sign."],
          },
        },
      ],
    },
    {
      id: "aasl-u6-synthesis",
      title: "Connecting derivatives and integrals",
      skill: "Combine differentiation, integration, boundary conditions and area to solve multi-step problems.",
      lesson: {
        sections: [
          {
            heading: "Derivatives and integrals as inverses",
            body: "If you know the rate of change $f'(x)$ then $f(b)-f(a)=\\int_a^bf'(x)\\,dx$, and to recover $f$ itself you need one extra piece of information, such as $f(a)$. Conversely, to analyse a function you differentiate: stationary points where $f'=0$, nature from $f''$, tangents from $f'(a)$.",
          },
          {
            heading: "Planning multi-step problems",
            body: "Read the whole problem and list what is known (a function, a derivative, a point, a limit) and what is asked. Typical chains are: integrate $f'$ with a boundary condition to find $f$; find zeros or intersections to get limits; then integrate to find an area. Keep exact values until the final step and state the required accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Net change", statement: "$f(b)-f(a)=\\int_a^bf'(x)\\,dx$" },
          { name: "Area enclosed", statement: "$\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
        ],
        workedExample: {
          problem: "Given $\\int_1^4f'(x)\\,dx=6$ and $f(1)=2$, find $f(4)$.",
          solution: "$f(4)-f(1)=6$ so $f(4)=2+6=8$.",
        },
      },
      questions: [
        {
          id: "aasl-u6-synthesis-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A function $f$ satisfies $f(1)=3$ and $\\displaystyle\\int_1^4f'(x)\\,dx=5$. What is $f(4)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$15$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf'(x)dx=f(b)-f(a)$" },
            ],
            steps: [
              { reasoning: "The integral of the derivative gives the change in $f$.", working: "f(4)-f(1)=5", marks: 1, markCode: "M" },
              { reasoning: "Add $f(1)$.", working: "f(4)=3+5=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8$",
            commonErrors: ["Subtracting instead of adding ($3-5=-2$).", "Multiplying the values."],
          },
        },
        {
          id: "aasl-u6-synthesis-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A function $f$ has second derivative $f''(x)=12x-6$. It is given that $f'(1)=4$ and $f(0)=1$.\n\nFind $f'(x)$ and $f(x)$, and hence find $f(2)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term in $f'(x)$", answer: 4 },
              { label: "$f(2)$", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeated integration", statement: "Each integration introduces a constant, found from a given value." },
            ],
            steps: [
              { reasoning: "Integrate $f''$ and use $f'(1)=4$: $6-6+C=4$.", working: "f'(x)=6x^2-6x+4", marks: 2, markCode: "A" },
              { reasoning: "Integrate again and use $f(0)=1$.", working: "f(x)=2x^3-3x^2+4x+1", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=2$.", working: "f(2)=16-12+8+1=13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=6x^2-6x+4$; $f(x)=2x^3-3x^2+4x+1$; $f(2)=13$",
            commonErrors: ["Using $f'(1)=4$ in the formula for $f$.", "Forgetting a constant in the first integration."],
          },
        },
        {
          id: "aasl-u6-synthesis-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "A function $f$ has derivative $f'(x)=3x^2-3$. The graph of $f$ has a local minimum point on the $x$-axis.\n\nFind $f(x)$. Hence find the exact area of the region enclosed by the graph of $f$ and the $x$-axis between $x=-2$ and $x=1$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f(0)$", answer: 2 },
              { label: "Area", answer: 6.75 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "A stationary point with $f''>0$ is a local minimum." },
              { kind: "formula", name: "Area under a curve", statement: "$A=\\int_a^bf(x)\\,dx$ for $f\\ge0$." },
            ],
            steps: [
              { reasoning: "Stationary points: $3x^2-3=0$ gives $x=\\pm1$. With $f''=6x$, the minimum is at $x=1$.", working: "x=1,\\ f''(1)=6>0", marks: 1, markCode: "M" },
              { reasoning: "Integrate and use $f(1)=0$.", working: "f(x)=x^3-3x+C,\\quad 1-3+C=0\\Rightarrow C=2", marks: 1, markCode: "A" },
              { reasoning: "Write $f(x)=(x-1)^2(x+2)\\ge0$ on $[-2,1]$ so the area is the integral.", working: "\\int_{-2}^{1}(x^3-3x+2)dx=\\left[\\frac{x^4}{4}-\\frac{3x^2}{2}+2x\\right]_{-2}^{1}", marks: 2, markCode: "M" },
              { reasoning: "$F(1)=\\frac34$ and $F(-2)=4-6-4=-6$.", working: "\\frac34-(-6)=\\frac{27}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=x^3-3x+2$; area $=\\dfrac{27}{4}$",
            commonErrors: ["Using the wrong stationary point $x=-1$ (the local maximum).", "Sign errors in $F(-2)$."],
          },
        },
        {
          id: "aasl-u6-synthesis-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "The function $f$ is defined by $f(x)=x+\\dfrac4x$ for $x>0$.",
          parts: [
            { label: "a", prompt: "Find $f'(x)$ and hence show that the graph of $f$ has a minimum point at $(2,\\,4)$.", marks: 3 },
            { label: "b", prompt: "The line $y=5$ intersects the graph of $f$ at two points. Find their $x$-coordinates.", marks: 2 },
            { label: "c", prompt: "Find the exact value of $\\displaystyle\\int_1^4f(x)\\,dx$.", marks: 2 },
            { label: "d", prompt: "Hence find the area of the region enclosed by the graph of $f$ and the line $y=5$. Give your answer to 3 significant figures.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Smaller $x$", answer: 1 },
              { label: "(b) Larger $x$", answer: 4 },
              { label: "(c) $\\int_1^4f(x)\\,dx$ (3 s.f.)", answer: 13, tolerance: 0.05 },
              { label: "(d) Area (3 s.f.)", answer: 1.95, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard integrals", statement: "$\\int x\\,dx=\\tfrac{x^2}{2}+C$ and $\\int\\tfrac1x\\,dx=\\ln|x|+C$." },
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
            ],
            steps: [
              { part: "a", reasoning: "Write $f(x)=x+4x^{-1}$ and differentiate.", working: "f'(x)=1-\\frac{4}{x^2}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Set $f'(x)=0$: $x^2=4$, so $x=2$ for $x>0$, and $f(2)=2+2=4$.", working: "x=2,\\ f(2)=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$f''(x)=\\frac{8}{x^3}$ and $f''(2)=1>0$, so a minimum.", working: "f''(2)=1>0", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Equate and multiply by $x$.", working: "x+\\frac4x=5\\Rightarrow x^2-5x+4=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorise.", working: "(x-1)(x-4)=0\\Rightarrow x=1,\\ 4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integrate term by term.", working: "\\left[\\frac{x^2}{2}+4\\ln x\\right]_1^4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute: $(8+4\\ln4)-\\frac12$.", working: "\\frac{15}{2}+8\\ln2\\approx13.0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "On $(1,4)$ the curve is below the line (for example $f(2)=4<5$), so the line is the upper curve.", working: "A=\\int_1^4(5-f(x))dx", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The rectangle under the line has area $5\\times3=15$; subtract the result of part (c).", working: "A=15-\\left(\\frac{15}{2}+8\\ln2\\right)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "A=\\frac{15}{2}-8\\ln2\\approx1.95", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) minimum at $(2,4)$ (b) $x=1,4$ (c) $\\frac{15}{2}+8\\ln2\\approx13.0$ (d) $\\frac{15}{2}-8\\ln2\\approx1.95$",
            commonErrors: ["Treating $\\int\\frac4x\\,dx$ as $\\frac{4}{x^2}$ or $4x^{-1}$ differentiated again.", "Subtracting in the wrong order, giving a negative area."],
            examinerNote: "In part (d) accept the GDC evaluation of $\\int_1^4(5-x-\\frac4x)dx$ directly. Award FT from an incorrect answer to (c).",
          },
        },
        {
          id: "aasl-u6-synthesis-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A function $f$ satisfies $f(2)=2$ and $\\displaystyle\\int_2^5f'(x)\\,dx=7$. What is $f(5)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$-5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf'(x)dx=f(b)-f(a)$" },
            ],
            steps: [
              { reasoning: "The integral of the derivative gives the change in $f$.", working: "f(5)-f(2)=7", marks: 1, markCode: "M" },
              { reasoning: "Add $f(2)$.", working: "f(5)=2+7=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $9$",
            commonErrors: ["Subtracting instead of adding ($2-7=-5$)."],
          },
        },
        {
          id: "aasl-u6-synthesis-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A function $f$ has $f''(x)=6x$, $f'(0)=1$ and $f(0)=2$. What is $f(1)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeated integration", statement: "Each integration introduces a constant, found from a given value." },
            ],
            steps: [
              { reasoning: "Integrate twice: $f'=3x^2+1$ and $f=x^3+x+2$.", working: "f(1)=1+1+2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at $x=1$.", working: "f(1)=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: ["Forgetting the constant when integrating $f''$ or $f'$."],
          },
        },
        {
          id: "aasl-u6-synthesis-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f(x)=x^3-3x$ has a stationary point at $x=-1$. What is its nature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Local minimum" },
              { id: "b", text: "Local maximum" },
              { id: "c", text: "Point of inflection" },
              { id: "d", text: "Not a stationary point" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Second derivative test", statement: "$f''>0$ gives a local minimum and $f''<0$ a local maximum." },
            ],
            steps: [
              { reasoning: "Differentiate twice: $f'(x)=3x^2-3$ and $f''(x)=6x$.", working: "f''(-1)=-6<0", marks: 1, markCode: "M" },
              { reasoning: "A negative second derivative indicates a local maximum.", working: "\\text{local maximum}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Local maximum",
            commonErrors: ["Using $f$ instead of $f''$ to classify the point."],
          },
        },
        {
          id: "aasl-u6-synthesis-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A population $P$ has growth rate $P'(t)=3t^2$ and $P(0)=10$. What is $P(2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$22$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$18$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$P(2)-P(0)=\\int_0^2P'(t)\\,dt$" },
            ],
            steps: [
              { reasoning: "Integrate the growth rate: $\\int_0^23t^2\\,dt=8$.", working: "P(2)-10=8", marks: 1, markCode: "M" },
              { reasoning: "Add the initial value.", working: "P(2)=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $18$",
            commonErrors: ["Evaluating $P'(2)=12$ instead of integrating."],
          },
        },
        {
          id: "aasl-u6-synthesis-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The derivative of a function $f$ is $f'(x)=3x^2-12x+12$. For which value of $x$ is $f'(x)=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stationary points", statement: "Stationary points occur where $f'(x)=0$." },
            ],
            steps: [
              { reasoning: "Set the derivative equal to zero and factorise.", working: "3x^2-12x+12=0\\Rightarrow 3(x-2)^2=0", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $2$",
            commonErrors: ["Using the quadratic formula and making an arithmetic slip."],
          },
        },
        {
          id: "aasl-u6-synthesis-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Given only the derivative $f'(x)$ of a function $f$, what additional information is needed to determine $f(x)$ completely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The value of $f$ at one point." },
              { id: "b", text: "The second derivative $f''(x)$." },
              { id: "c", text: "The values of $f'$ at two points." },
              { id: "d", text: "Nothing further; $f'(x)$ alone determines $f(x)$." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constant of integration", statement: "Integration introduces an arbitrary constant that must be fixed by one known value of $f$." },
            ],
            steps: [
              { reasoning: "Integrating $f'$ gives $f$ up to an additive constant.", working: "f(x)=\\int f'(x)\\,dx+C", marks: 1, markCode: "M" },
              { reasoning: "One known value of $f$ determines $C$.", working: "\\text{one value of }f", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Forgetting that the constant of integration is undetermined without extra information."],
          },
        },
        {
          id: "aasl-u6-synthesis-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A function $f$ has second derivative $f''(x)=4x-2$, $f'(0)=3$ and $f(0)=1$.\n\nFind $f'(3)$ and $f(3)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'(3)$", answer: 15 },
              { label: "$f(3)$", answer: 19 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeated integration", statement: "Each integration introduces a constant, found from a given value." },
            ],
            steps: [
              { reasoning: "Integrate $f''$ and use $f'(0)=3$.", working: "f'(x)=2x^2-2x+3", marks: 2, markCode: "A" },
              { reasoning: "Integrate $f'$ and use $f(0)=1$.", working: "f(x)=\\frac{2}{3}x^3-x^2+3x+1", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $x=3$.", working: "f'(3)=18-6+3=15,\\quad f(3)=18-9+9+1=19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(3)=15$; $f(3)=19$",
            commonErrors: ["Using $f'(0)=3$ in the formula for $f$ instead of $f$."],
          },
        },
        {
          id: "aasl-u6-synthesis-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Let $f(x)=x^3-6x^2+9x+1$.\n\nFind the coordinates of the local minimum point of the graph of $f$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of minimum", answer: 3 },
              { label: "$y$-coordinate of minimum", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Second derivative test", statement: "$f''>0$ gives a local minimum." },
            ],
            steps: [
              { reasoning: "Differentiate and find stationary points.", working: "f'(x)=3x^2-12x+9=3(x-1)(x-3)", marks: 1, markCode: "A" },
              { reasoning: "Solve $f'(x)=0$ and test with $f''(x)=6x-12$: $f''(3)=6>0$ so $x=3$ is the minimum.", working: "x=3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $f(3)$.", working: "f(3)=27-54+27+1=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Minimum at $(3,1)$",
            commonErrors: ["Choosing $x=1$, which is the local maximum."],
          },
        },
        {
          id: "aasl-u6-synthesis-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-4x+3$ for $1\\le x\\le3$.\n\nFind $\\displaystyle\\int_1^3f(x)\\,dx$ and the area of the region enclosed between the graph of $f$ and the $x$-axis for $1\\le x\\le3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\int_1^3f(x)\\,dx$", answer: -1.333, tolerance: 0.005 },
              { label: "Area", answer: 1.333, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$" },
              { kind: "property", name: "Signed area", statement: "A region below the $x$-axis gives a negative integral; its area is the absolute value." },
            ],
            steps: [
              { reasoning: "$f(x)=(x-1)(x-3)<0$ on $(1,3)$, so the region is below the axis.", working: "f<0\\ \\text{on }(1,3)", marks: 1, markCode: "M" },
              { reasoning: "Antiderivative and substitution.", working: "F(x)=\\frac{x^3}{3}-2x^2+3x,\\quad F(3)-F(1)=0-\\frac43=-\\frac43\\approx-1.333", marks: 1, markCode: "A" },
              { reasoning: "Take the absolute value for the area.", working: "\\text{Area}=\\frac43\\approx1.333", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\dfrac43$; area $=\\dfrac43\\approx1.333$",
            commonErrors: ["Giving a negative area."],
          },
        },
        {
          id: "aasl-u6-synthesis-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A function $f$ has derivative $f'(x)=3x^2-12x+12$ and satisfies $f(1)=4$.\n\nFind $\\displaystyle\\int_0^2f(x)\\,dx$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Constant term in $f(x)$", answer: -3 },
              { label: "$\\displaystyle\\int_0^2f(x)\\,dx$", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeated integration", statement: "Integrate $f'$ and use the given value to find $C$." },
              { kind: "theorem", name: "Fundamental theorem of calculus", statement: "$\\int_a^bf(x)dx=F(b)-F(a)$." },
            ],
            steps: [
              { reasoning: "Integrate the derivative.", working: "f(x)=x^3-6x^2+12x+C", marks: 1, markCode: "A" },
              { reasoning: "Use $f(1)=4$: $1-6+12+C=4$.", working: "C=-3", marks: 1, markCode: "M" },
              { reasoning: "Integrate $f$.", working: "\\int f\\,dx=\\frac{x^4}{4}-2x^3+6x^2-3x", marks: 1, markCode: "A" },
              { reasoning: "Evaluate between $0$ and $2$.", working: "\\left(4-16+24-6\\right)-0=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\displaystyle\\int_0^2f(x)\\,dx=6$",
            commonErrors: ["Using $f(1)=4$ before integrating, or arithmetic slips in $F(2)$."],
          },
        },
        {
          id: "aasl-u6-synthesis-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The graph of $y=f(x)$ has a local minimum at the point $(3,0)$, and $f''(x)=6x-12$.",
          parts: [
            { label: "a", prompt: "Show that $f'(x)=3(x-1)(x-3)$.", marks: 3 },
            { label: "b", prompt: "Find an expression for $f(x)$.", marks: 3 },
            { label: "c", prompt: "Find the exact area of the region enclosed between the graph of $f$ and the $x$-axis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeated integration", statement: "Integrate twice; each constant is found from the given conditions." },
              { kind: "formula", name: "Area under a curve", statement: "$A=\\int_a^bf(x)\\,dx$ for $f\\ge0$." },
            ],
            steps: [
              { part: "a", reasoning: "Integrate $f''$.", working: "f'(x)=3x^2-12x+C", marks: 1, markCode: "A" },
              { part: "a", reasoning: "A local minimum at $x=3$ requires $f'(3)=0$: $27-36+C=0$.", working: "C=9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise (AG).", working: "f'(x)=3x^2-12x+9=3(x-1)(x-3)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Integrate $f'$.", working: "f(x)=x^3-6x^2+9x+D", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $f(3)=0$: $27-54+27+D=0$.", working: "D=0,\\quad f(x)=x^3-6x^2+9x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorise.", working: "f(x)=x(x-3)^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The zeros are $x=0$ and $x=3$, and $f\\ge0$ on $[0,3]$.", working: "A=\\int_0^3(x^3-6x^2+9x)\\,dx", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\left[\\frac{x^4}{4}-2x^3+\\frac{9x^2}{2}\\right]_0^3=\\frac{81}{4}-54+\\frac{81}{2}=\\frac{27}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $f(x)=x(x-3)^2$ (c) $\\frac{27}{4}$",
            commonErrors: ["Using $f(3)=0$ in the formula for $f'$ instead of $f$.", "Sign errors evaluating $F(3)$."],
          },
        },
        {
          id: "aasl-u6-synthesis-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A curve has equation $y=6x-x^2$.",
          parts: [
            { label: "a", prompt: "Find $\\dfrac{dy}{dx}$ and hence find the coordinates of the maximum point on the curve.", marks: 2 },
            { label: "b", prompt: "Find the area of the region bounded by the curve and the $x$-axis between $x=0$ and $x=3$.", marks: 2 },
            { label: "c", prompt: "Show that the curve and the line $y=3x$ intersect only at $x=0$ and $x=3$.", marks: 2 },
            { label: "d", prompt: "Find the area of the region enclosed between the curve and the line $y=3x$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "$A=\\int_a^b(\\text{upper}-\\text{lower})\\,dx$" },
              { kind: "formula", name: "Stationary points", statement: "A maximum occurs where $\\frac{dy}{dx}=0$ and $\\frac{d^2y}{dx^2}<0$." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate.", working: "\\frac{dy}{dx}=6-2x", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Set $\\frac{dy}{dx}=0$ and evaluate $y$: $x=3$, $y=18-9=9$.", working: "(3,9)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Set up and evaluate the integral.", working: "\\int_0^3(6x-x^2)\\,dx=\\left[3x^2-\\frac{x^3}{3}\\right]_0^3=27-9=18", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Equate the curve and the line.", working: "6x-x^2=3x\\Rightarrow x^2-3x=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve (AG).", working: "x(x-3)=0\\Rightarrow x=0,\\ 3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "On $(0,3)$ the curve is above the line (e.g. at $x=1$: $5>3$).", working: "A=\\int_0^3(6x-x^2-3x)\\,dx=\\int_0^3(3x-x^2)\\,dx", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Integrate.", working: "\\left[\\frac{3x^2}{2}-\\frac{x^3}{3}\\right]_0^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate.", working: "\\frac{27}{2}-9=\\frac92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) maximum $(3,9)$ (b) $18$ (c) shown (d) $\\frac92$",
            commonErrors: ["Subtracting the curves in the wrong order in part (d).", "Forgetting that the curve is above the line, not below."],
          },
        },
      ],
    },
  ],
};
