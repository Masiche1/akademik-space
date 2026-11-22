import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "pc-u3-lesson-3-1",
  code: "3-1",
  title: "Graphs of Sinusoidal Functions",
  goal: "I CAN identify amplitude, period, phase shift, and midline of sinusoidal functions and use them to graph and to model periodic phenomena.",
  standards: ["HSF-TF.B.5", "HSF-BF.B.3", "HSF-IF.C.7"],
  vocabulary: [
    { term: "Sinusoidal function", definition: "A function whose graph has the shape of a sine curve, such as $y=A\\sin(B(x-C))+D$ or $y=A\\cos(B(x-C))+D$." },
    { term: "Amplitude", definition: "Half the distance between the maximum and minimum values; for $y=A\\sin(B(x-C))+D$ it equals $|A|$." },
    { term: "Period", definition: "The length of the shortest interval over which the graph repeats; it equals $\\dfrac{2\\pi}{|B|}$ for sine and cosine." },
    { term: "Phase shift", definition: "The horizontal translation $C$ of the graph of $y=A\\sin(B(x-C))+D$, to the right if $C>0$." },
    { term: "Midline", definition: "The horizontal line $y=D$ halfway between the maximum and minimum values of a sinusoidal graph." },
    { term: "Periodic function", definition: "A function $f$ with a positive number $p$ such that $f(x+p)=f(x)$ for all $x$ in its domain." },
  ],
  concepts: [
    {
      id: "pc-u3-sinusoid-features",
      title: "Amplitude, period, phase shift, and midline",
      skill: "Read the amplitude, period, phase shift, and midline from y = A sin(B(x - C)) + D and use them to find extreme values and graph one cycle.",
      lesson: {
        sections: [
          {
            heading: "The four parameters",
            body: "Every sinusoid can be written $y=A\\sin(B(x-C))+D$ (or with cosine). Each parameter is a transformation of $y=\\sin x$: $|A|$ stretches vertically (amplitude), $B$ compresses horizontally (period $\\frac{2\\pi}{|B|}$), $C$ shifts right, and $D$ shifts up so the midline is $y=D$. A negative $A$ reflects the graph in the midline. The maximum is $D+|A|$ and the minimum is $D-|A|$.",
          },
          {
            heading: "Factor out B before reading the shift",
            body: "The phase shift is only visible when the argument is written as $B(x-C)$. For $y=2\\sin(3x-\\pi)$, factor: $3x-\\pi=3\\left(x-\\frac{\\pi}{3}\\right)$, so the shift is $\\frac{\\pi}{3}$, not $\\pi$. Reading $\\pi$ directly is the most common error in this topic.",
          },
          {
            heading: "Graphing one cycle",
            body: "Start at the shifted starting point $x=C$ and mark five key points equally spaced across one period: each is a quarter-period apart. For a sine curve these are midline, max, midline, min, midline (reversed if $A<0$). For a cosine curve the cycle begins at a max (min if $A<0$). Draw the midline first, then the extreme values, then connect the points smoothly.",
          },
        ],
        keyFormulas: [
          { name: "Amplitude", statement: "$|A|=\\dfrac{\\text{max}-\\text{min}}{2}$" },
          { name: "Period", statement: "$T=\\dfrac{2\\pi}{|B|}$" },
          { name: "Midline", statement: "$y=D=\\dfrac{\\text{max}+\\text{min}}{2}$" },
          { name: "Phase shift", statement: "$y=A\\sin(B(x-C))+D$ is shifted $C$ units right" },
        ],
        workedExample: {
          problem: "State the amplitude, period, phase shift, midline, maximum and minimum of $y=-2\\sin\\left(4x-\\pi\\right)+3$.",
          solution: "Factor the argument: $4x-\\pi=4\\left(x-\\frac{\\pi}{4}\\right)$. Amplitude $|A|=2$. Period $\\frac{2\\pi}{4}=\\frac{\\pi}{2}$. Phase shift $\\frac{\\pi}{4}$ to the right. Midline $y=3$. Maximum $3+2=5$, minimum $3-2=1$. The negative sign means the graph starts at the midline and first goes down.",
        },
      },
      questions: [
        {
          id: "pc-u3-sinusoid-features-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the period of $y=3\\sin(2x)+1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\pi$" },
              { id: "b", text: "$4\\pi$" },
              { id: "c", text: "$\\dfrac{\\pi}{2}$" },
              { id: "d", text: "$\\pi$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Period of a sinusoid", statement: "For $y=A\\sin(Bx)+D$ the period is $\\dfrac{2\\pi}{|B|}$." },
            ],
            steps: [
              { reasoning: "Identify $B=2$ from the argument $2x$ and use the period formula.", working: "T=\\frac{2\\pi}{|B|}=\\frac{2\\pi}{2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "T=\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\pi$",
            commonErrors: ["Reporting $2\\pi$, which ignores the horizontal compression by $B$.", "Multiplying by $B$ instead of dividing: $2\\pi\\cdot2=4\\pi$."],
          },
        },
        {
          id: "pc-u3-sinusoid-features-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $y=-4\\cos\\left(\\dfrac{\\pi}{3}(x-2)\\right)+5$, find the amplitude, the period, and the $y$-value of the midline.",
          response: {
            type: "numeric",
            parts: [
              { label: "Amplitude", answer: 4 },
              { label: "Period", answer: 6 },
              { label: "Midline $y=$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Features of a sinusoid", statement: "For $y=A\\cos(B(x-C))+D$: amplitude $|A|$, period $\\frac{2\\pi}{|B|}$, midline $y=D$." },
            ],
            steps: [
              { reasoning: "The amplitude is the absolute value of the coefficient $A=-4$; the sign only reflects the graph.", working: "|A|=|-4|=4", marks: 1, markCode: "A" },
              { reasoning: "Here $B=\\frac{\\pi}{3}$, so use the period formula.", working: "T=\\frac{2\\pi}{\\pi/3}=2\\pi\\cdot\\frac{3}{\\pi}=6", marks: 1, markCode: "M" },
              { reasoning: "The vertical shift $D=5$ gives the midline.", working: "y=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amplitude $4$, period $6$, midline $y=5$.",
            commonErrors: ["Giving the amplitude as $-4$.", "Stating the period as $\\frac{\\pi}{3}$ or $2\\pi$ instead of dividing $2\\pi$ by $B$."],
          },
        },
        {
          id: "pc-u3-sinusoid-features-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $y=2\\sin(3x-\\pi)+1$. Find the phase shift (give as a decimal, rounded to 2 decimal places), the period (2 decimal places), the maximum value, and the minimum value.",
          response: {
            type: "numeric",
            parts: [
              { label: "Phase shift (right)", answer: 1.05, tolerance: 0.01 },
              { label: "Period", answer: 2.09, tolerance: 0.01 },
              { label: "Maximum", answer: 3 },
              { label: "Minimum", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factor out B", statement: "The phase shift of $y=A\\sin(Bx-\\phi)+D$ is $\\frac{\\phi}{B}$, found by writing the argument as $B(x-C)$." },
              { kind: "formula", name: "Extreme values", statement: "Maximum $=D+|A|$, minimum $=D-|A|$." },
            ],
            steps: [
              { reasoning: "Factor $B=3$ out of the argument to expose the shift.", working: "3x-\\pi=3\\left(x-\\frac{\\pi}{3}\\right)\\Rightarrow C=\\frac{\\pi}{3}\\approx1.05", marks: 1, markCode: "M" },
              { reasoning: "Apply the period formula with $B=3$.", working: "T=\\frac{2\\pi}{3}\\approx2.09", marks: 1, markCode: "A" },
              { reasoning: "The midline is $y=1$ and amplitude is 2; add it to obtain the maximum.", working: "1+2=3", marks: 1, markCode: "A" },
              { reasoning: "Subtract the amplitude from the midline for the minimum.", working: "1-2=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phase shift $\\frac{\\pi}{3}\\approx1.05$, period $\\frac{2\\pi}{3}\\approx2.09$, maximum $3$, minimum $-1$.",
            commonErrors: ["Reading the phase shift as $\\pi$ without factoring out 3.", "Using the period $\\frac{2\\pi}{3}$ but forgetting to compute $D\\pm|A|$ for the extremes."],
          },
        },
        {
          id: "pc-u3-sinusoid-features-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Let $f(x)=-3\\sin\\left(2\\left(x-\\dfrac{\\pi}{6}\\right)\\right)+1$.",
          parts: [
            { label: "a", prompt: "State the amplitude, the period (decimal, 2 d.p.), and the $y$-value of the midline.", marks: 3 },
            { label: "b", prompt: "State the maximum and minimum values of $f$.", marks: 2 },
            { label: "c", prompt: "Find the smallest positive $x$ at which $f$ attains its maximum value. Give your answer to 2 decimal places.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Amplitude", answer: 3 },
              { label: "(a) Period", answer: 3.14, tolerance: 0.01 },
              { label: "(a) Midline $y=$", answer: 1 },
              { label: "(b) Maximum", answer: 4 },
              { label: "(b) Minimum", answer: -2 },
              { label: "(c) Smallest positive $x$", answer: 2.88, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Features of a sinusoid", statement: "For $y=A\\sin(B(x-C))+D$: amplitude $|A|$, period $\\frac{2\\pi}{|B|}$, midline $y=D$, extremes $D\\pm|A|$." },
              { kind: "property", name: "Extreme values of sine", statement: "$\\sin\\theta=-1$ exactly when $\\theta=-\\frac{\\pi}{2}+2\\pi k$ for integer $k$." },
            ],
            steps: [
              { part: "a", reasoning: "Amplitude is the absolute value of $A=-3$.", working: "|A|=3", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Period from $B=2$.", working: "T=\\frac{2\\pi}{2}=\\pi\\approx3.14", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The midline is the vertical shift.", working: "y=1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Maximum is the midline plus the amplitude.", working: "1+3=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Minimum is the midline minus the amplitude.", working: "1-3=-2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Because $A=-3<0$, $f$ is largest when $\\sin$ of the argument equals $-1$.", working: "2\\left(x-\\frac{\\pi}{6}\\right)=-\\frac{\\pi}{2}+2\\pi k", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $x$.", working: "x=\\frac{\\pi}{6}-\\frac{\\pi}{4}+\\pi k=-\\frac{\\pi}{12}+\\pi k", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The smallest positive value occurs at $k=1$ (since $k=0$ gives a negative value).", working: "x=\\frac{11\\pi}{12}\\approx2.88", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Amplitude $3$, period $\\pi\\approx3.14$, midline $y=1$. (b) Maximum $4$, minimum $-2$. (c) $x=\\frac{11\\pi}{12}\\approx2.88$.",
            commonErrors: ["Assuming the maximum occurs where $\\sin=1$ even though $A$ is negative.", "Forgetting to divide the argument equation by $B$ before solving for $x$."],
            examinerNote: "Check: $f\\left(\\frac{11\\pi}{12}\\right)=-3\\sin\\left(\\frac{3\\pi}{2}\\right)+1=4$.",
          },
        },
      ],
    },
    {
      id: "pc-u3-sinusoid-modeling",
      title: "Modeling periodic phenomena",
      skill: "Write a sinusoidal equation from given features such as maximum, minimum, period, and a starting point, and use it to answer questions about a real situation.",
      lesson: {
        sections: [
          {
            heading: "From context to parameters",
            body: "Periodic situations such as tides, daylight hours, and Ferris wheels repeat at a steady rate. Convert the data to parameters: amplitude $=\\frac{\\text{max}-\\text{min}}{2}$, midline $D=\\frac{\\text{max}+\\text{min}}{2}$, and $B=\\frac{2\\pi}{\\text{period}}$. Always check the units of the input variable so $B$ is in radians per that unit.",
          },
          {
            heading: "Choosing sine or cosine",
            body: "Either function works; choose whichever makes the horizontal shift easiest. If the data begin at a maximum, use $A\\cos(Bt)+D$ with $A>0$. If they begin at a minimum, use $-A\\cos(Bt)+D$. If they begin at the midline heading up, use $A\\sin(Bt)+D$. When a maximum is known at $t=t_0$, use $y=A\\cos(B(t-t_0))+D$.",
          },
          {
            heading: "Using the model",
            body: "To find the value at a time, substitute and evaluate with the calculator in radian mode. To find when the quantity exceeds a threshold, solve the equation $y=\\text{threshold}$ on one period using the unit circle, then read the interval off the graph. Interpret the answer in the context with units.",
          },
        ],
        keyFormulas: [
          { name: "Midline and amplitude from data", statement: "$D=\\dfrac{\\text{max}+\\text{min}}{2},\\quad |A|=\\dfrac{\\text{max}-\\text{min}}{2}$" },
          { name: "Angular frequency", statement: "$B=\\dfrac{2\\pi}{T}$" },
          { name: "Cosine model with a known maximum", statement: "$y=A\\cos(B(t-t_0))+D$, where $t_0$ is the time of a maximum" },
        ],
        workedExample: {
          problem: "The depth of water in a harbor has a maximum of $9$ m at $t=3$ h and a minimum of $3$ m at $t=9$ h. Write a cosine model $d(t)$.",
          solution: "Amplitude $=\\frac{9-3}{2}=3$ and midline $D=\\frac{9+3}{2}=6$. A maximum and the next minimum are half a period apart: $9-3=6$ h, so the period is $12$ h and $B=\\frac{2\\pi}{12}=\\frac{\\pi}{6}$. Since there is a maximum at $t=3$, $d(t)=3\\cos\\left(\\frac{\\pi}{6}(t-3)\\right)+6$.",
        },
      },
      questions: [
        {
          id: "pc-u3-sinusoid-modeling-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sinusoidal function has a maximum value of $10$ and a minimum value of $2$. Which gives its midline and amplitude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Midline $y=6$, amplitude $8$" },
              { id: "b", text: "Midline $y=8$, amplitude $4$" },
              { id: "c", text: "Midline $y=4$, amplitude $6$" },
              { id: "d", text: "Midline $y=6$, amplitude $4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midline and amplitude", statement: "$D=\\frac{\\text{max}+\\text{min}}{2}$ and $|A|=\\frac{\\text{max}-\\text{min}}{2}$." },
            ],
            steps: [
              { reasoning: "The midline is the average of the extremes.", working: "D=\\frac{10+2}{2}=6", marks: 1, markCode: "A" },
              { reasoning: "The amplitude is half the vertical spread, not the full spread.", working: "|A|=\\frac{10-2}{2}=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** midline $y=6$, amplitude $4$",
            commonErrors: ["Using the full range $8$ as the amplitude.", "Using half the minimum or the half-sum incorrectly."],
          },
        },
        {
          id: "pc-u3-sinusoid-modeling-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The depth of water at a pier is modeled by $D(t)=A\\cos(B(t-2))+k$ where $t$ is hours after midnight. High tide is $9$ ft at $t=2$ and low tide is $1$ ft. The time between consecutive high tides is $12$ hours. Find $A$, $k$, and $B$ (give $B$ as a decimal, 3 d.p.).",
          response: {
            type: "numeric",
            parts: [
              { label: "$A$", answer: 4 },
              { label: "$k$", answer: 5 },
              { label: "$B$", answer: 0.524, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Model parameters", statement: "$A=\\frac{\\text{max}-\\text{min}}{2}$, $k=\\frac{\\text{max}+\\text{min}}{2}$, $B=\\frac{2\\pi}{\\text{period}}$." },
            ],
            steps: [
              { reasoning: "Amplitude is half the difference of high and low tide.", working: "A=\\frac{9-1}{2}=4", marks: 1, markCode: "A" },
              { reasoning: "The midline is the average of the extremes.", working: "k=\\frac{9+1}{2}=5", marks: 1, markCode: "A" },
              { reasoning: "The period is 12 hours, so $B=2\\pi/12$.", working: "B=\\frac{2\\pi}{12}=\\frac{\\pi}{6}\\approx0.524", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$A=4$, $k=5$, $B=\\frac{\\pi}{6}\\approx0.524$.",
            commonErrors: ["Using $B=12$ (the period) instead of $\\frac{2\\pi}{12}$.", "Taking $A=8$, the full range."],
          },
        },
        {
          id: "pc-u3-sinusoid-modeling-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A Ferris wheel has radius $20$ m and its center is $22$ m above the ground. It makes one full revolution every $8$ minutes. A rider boards at the lowest point at $t=0$. The rider's height is $h(t)=-20\\cos(Bt)+22$ meters, where $t$ is in minutes. Find $B$ (3 d.p.) and the rider's height at $t=3$ minutes (2 d.p.).",
          response: {
            type: "numeric",
            parts: [
              { label: "$B$ (rad/min)", answer: 0.785, tolerance: 0.001 },
              { label: "Height at $t=3$ (m)", answer: 36.14, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angular frequency", statement: "$B=\\frac{2\\pi}{T}$ where $T$ is the period." },
              { kind: "principle", name: "Radian mode", statement: "Trigonometric arguments are in radians for this model." },
            ],
            steps: [
              { reasoning: "One revolution takes 8 minutes, so the period is 8.", working: "B=\\frac{2\\pi}{8}", marks: 1, markCode: "M" },
              { reasoning: "Simplify to obtain the angular frequency.", working: "B=\\frac{\\pi}{4}\\approx0.785", marks: 1, markCode: "A" },
              { reasoning: "Substitute $t=3$ into the model.", working: "h(3)=-20\\cos\\left(\\frac{3\\pi}{4}\\right)+22", marks: 1, markCode: "M" },
              { reasoning: "Since $\\cos\\frac{3\\pi}{4}=-\\frac{\\sqrt2}{2}$, the height is above the center.", working: "h(3)=10\\sqrt2+22\\approx36.14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$B=\\frac{\\pi}{4}\\approx0.785$; $h(3)\\approx36.14$ m.",
            commonErrors: ["Using degrees: $\\cos(3\\cdot\\frac{\\pi}{4})$ evaluated in degree mode.", "Setting $B=8$ rather than $\\frac{2\\pi}{8}$."],
            examinerNote: "Check: at $t=4$ (half a revolution), $h=-20\\cos\\pi+22=42$ m, the top of the wheel.",
          },
        },
        {
          id: "pc-u3-sinusoid-modeling-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The average monthly temperature $T$ (in $^\\circ$F) in a city is modeled by a cosine function of the month number $m$ ($m=1$ is January). The maximum average temperature is $84^\\circ$F in July ($m=7$) and the minimum is $40^\\circ$F in January ($m=1$). The model has the form $T(m)=A\\cos(B(m-7))+D$ with $A>0$.",
          parts: [
            { label: "a", prompt: "Find $A$, $D$, and $B$ (give $B$ as a decimal to 3 d.p.).", marks: 3 },
            { label: "b", prompt: "Find the modeled temperature in April ($m=4$).", marks: 2 },
            { label: "c", prompt: "For how many months of the year does the model give an average temperature of at least $73^\\circ$F? Give the length of the interval in months.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $A$", answer: 22 },
              { label: "(a) $D$", answer: 62 },
              { label: "(a) $B$", answer: 0.524, tolerance: 0.001 },
              { label: "(b) $T(4)$ in $^\\circ$F", answer: 62, tolerance: 0.01 },
              { label: "(c) Length of interval (months)", answer: 4, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Model parameters", statement: "$A=\\frac{\\text{max}-\\text{min}}{2}$, $D=\\frac{\\text{max}+\\text{min}}{2}$, $B=\\frac{2\\pi}{\\text{period}}$." },
              { kind: "property", name: "Cosine on the unit circle", statement: "$\\cos\\theta\\ge\\frac12$ for $-\\frac{\\pi}{3}\\le\\theta\\le\\frac{\\pi}{3}$ within one period centered at $\\theta=0$." },
            ],
            steps: [
              { part: "a", reasoning: "Amplitude is half the range and midline is the mean of the extremes.", working: "A=\\frac{84-40}{2}=22,\\quad D=\\frac{84+40}{2}=62", marks: 2, markCode: "A" },
              { part: "a", reasoning: "Maximum in July and minimum in January are 6 months apart, so the period is 12 months.", working: "B=\\frac{2\\pi}{12}=\\frac{\\pi}{6}\\approx0.524", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute $m=4$.", working: "T(4)=22\\cos\\left(\\frac{\\pi}{6}(-3)\\right)+62=22\\cos\\left(-\\frac{\\pi}{2}\\right)+62", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cosine of a quarter turn is zero, so April is on the midline.", working: "T(4)=62", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set up the inequality for at least $73^\\circ$F.", working: "22\\cos\\left(\\frac{\\pi}{6}(m-7)\\right)+62\\ge73", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Isolate the cosine.", working: "\\cos\\left(\\frac{\\pi}{6}(m-7)\\right)\\ge\\frac12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Around the maximum, cosine is at least $\\frac12$ for angles within $\\frac{\\pi}{3}$ of zero.", working: "\\left|\\frac{\\pi}{6}(m-7)\\right|\\le\\frac{\\pi}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve: $|m-7|\\le2$, so $5\\le m\\le9$, an interval of length 4 months.", working: "9-5=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A=22$, $D=62$, $B=\\frac{\\pi}{6}\\approx0.524$. (b) $62^\\circ$F. (c) $4$ months (from May to September).",
            commonErrors: ["Using $B=12$ rather than $\\frac{2\\pi}{12}$.", "Forgetting that $m=4$ is 3 months before the peak, so $m-7=-3$.", "Solving $\\cos\\theta=\\frac12$ only for one boundary and not using symmetry about the maximum."],
          },
        },
      ],
    },
  ],
};
