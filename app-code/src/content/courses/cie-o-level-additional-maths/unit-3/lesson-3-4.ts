import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "olam-u3-lesson-3-4",
  code: "3-4",
  title: "Trigonometric Graphs",
  goal: "I CAN sketch and interpret trigonometric graphs.",
  standards: ["4037: trigonometric graphs"],
  vocabulary: [
    { term: "Amplitude", definition: "Height of wave from centre line." },
    { term: "Period", definition: "Horizontal length of one complete cycle." },
    { term: "Phase shift", definition: "Horizontal displacement of graph." },
    { term: "Translations", definition: "Shifts: $y=a\\sin(bx)+c$ etc." },
  ],
  concepts: [
    {
      id: "olam-u3-s4-basics",
      title: "Basic trig graphs",
      skill: "Sketch $y=\\sin x$, $y=\\cos x$, $y=\\tan x$ at O Level.",
      lesson: {
        sections: [
          { heading: "The three basic curves", body: "$y=\\sin x$ starts at the origin, rises to a maximum of 1 at $x=90°$, returns through 0 at $180°$, reaches minimum $-1$ at $270°$, and completes the cycle at $360°$. $y=\\cos x$ has the same shape but starts at its maximum — it is $\\sin x$ shifted $90°$ left. $y=\\tan x$ is different: it has period $180°$, vertical asymptotes at $x=90°,270°$, and its range is all real numbers. All three oscillate forever, which is why real-world models (waves, tides, seasons) use them." },
          { heading: "Reading the graph", body: "For $y=\\sin x$ and $y=\\cos x$: period is $360°$ (or $2\\pi$ rad), amplitude is 1 (half the peak-to-peak distance), and range is $[-1,1]$. Key points to memorise for sine: $(0,0),(90,1),(180,0),(270,-1),(360,0)$. These anchor points let you sketch the curve accurately and read off solutions to equations like $\\sin x=k$ directly from the graph." },
        ],
        keyFormulas: [
          { name: "Periods", statement: "sin/cos: $360°$; tan: $180°$" },
          { name: "Key points", statement: "$\\sin$: $(0,0),(90,1),(180,0),(270,-1),(360,0)$" },
        ],
        workedExample: { problem: "State period and amplitude of $y=3\\sin(2x)$.", solution: "Write in standard form $y=a\\sin(bx)$: $a=3$ gives amplitude 3; $b=2$ gives period $\\frac{360°}{2}=180°$. The graph oscillates between $-3$ and $3$ with one full cycle every $180°$." },
      },
      questions: [
        {
          id: "olam-u3-s4-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The period of $y=\\sin x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$180°$" },
            { id: "b", text: "$360°$" },
            { id: "c", text: "$720°$" },
            { id: "d", text: "$90°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Trig period", statement: "sin/cos period." }], steps: [{ reasoning: "$360°$.", marks: 1, markCode: "A" }], finalAnswer: "$360°$" },
        },
        {
          id: "olam-u3-s4-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "The amplitude of $y=4\\cos x$ is…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Coefficient of trig." }], steps: [
            { reasoning: "Amplitude = 4.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u3-s4-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the period of $y=\\tan(3x)$ in degrees.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Period scaling", statement: "Divide by $b$." }], steps: [
            { reasoning: "tan period $180°$; $b=3$ → period $\\frac{180}{3}=60°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\tan(3(x+20°))=\\tan(3x+60°)=\\tan(3x)$ since tan period $180°$ and $3\\times20=60$... verify: period of $y=\\tan(bx)$ is $\\frac{180}{b}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°$" },
        },
        {
          id: "olam-u3-s4-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Sketch $y=2\\sin x+1$ for $0°\\leq x\\leq360°$, stating max and min values.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertical transform", statement: "Scale + shift." }], steps: [
            { reasoning: "Amplitude 2, vertical shift +1 → range $[-1,3]$.", marks: 1, markCode: "M" },
            { reasoning: "Max 3 at $x=90°$; min $-1$ at $x=270°$.", marks: 1, markCode: "M" },
            { reasoning: "Passes through $(0,1),(180,1),(360,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Correct sketch shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Max 3, min $-1$" },
        },
        {
          id: "olam-u3-s4-ba-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The period of $y=\\tan x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$180°$" },
            { id: "b", text: "$90°$" },
            { id: "c", text: "$360°$" },
            { id: "d", text: "$720°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Trig period", statement: "tan period." }], steps: [{ reasoning: "$180°$ (or $\\pi$ rad).", marks: 1, markCode: "A" }], finalAnswer: "$180°$" },
        },
        {
          id: "olam-u3-s4-ba-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The range of $y=\\sin x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$[-2,2]$" },
            { id: "b", text: "$[-1,1]$" },
            { id: "c", text: "$[0,1]$" },
            { id: "d", text: "$\\mathbb{R}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Bounds $\\pm1$." }], steps: [{ reasoning: "Sine oscillates between $-1$ and $1$.", marks: 1, markCode: "A" }], finalAnswer: "$[-1,1]$" },
        },
        {
          id: "olam-u3-s4-ba-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The value of $y=\\cos x$ at $x=0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "undefined" },
            { id: "b", text: "0" },
            { id: "c", text: "$-1$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Cos graph", statement: "Starts at max." }], steps: [{ reasoning: "$\\cos0=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olam-u3-s4-ba-q8", difficulty: "core", totalMarks: 1,
          stem: "The period of $y=\\cos(2x)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$360°$" },
            { id: "b", text: "$90°$" },
            { id: "c", text: "$180°$" },
            { id: "d", text: "$720°$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Period scaling", statement: "$\\frac{360}{b}$." }], steps: [{ reasoning: "$\\frac{360}{2}=180°$.", marks: 1, markCode: "A" }], finalAnswer: "$180°$" },
        },
        {
          id: "olam-u3-s4-ba-q9", difficulty: "core", totalMarks: 1,
          stem: "The amplitude of $y=\\sin x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$360°$" },
            { id: "b", text: "2" },
            { id: "c", text: "0" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Coefficient of sin." }], steps: [{ reasoning: "Implicit coefficient is 1.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olam-u3-s4-ba-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the period of $y=\\sin(3x)$ in degrees.",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: { principles: [{ kind: "technique", name: "Period", statement: "$\\frac{360}{b}$." }], steps: [
            { reasoning: "$\\frac{360}{3}=120°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 120°.", marks: 1, markCode: "A" },
          ], finalAnswer: "$120°$" },
        },
        {
          id: "olam-u3-s4-ba-q11", difficulty: "core", totalMarks: 2,
          stem: "Find the period of $y=\\tan(4x)$ in degrees.",
          response: { type: "numeric", parts: [{ label: "a", answer: 45 }] },
          markscheme: { principles: [{ kind: "technique", name: "Period", statement: "$\\frac{180}{b}$ for tan." }], steps: [
            { reasoning: "$\\frac{180}{4}=45°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 45°.", marks: 1, markCode: "A" },
          ], finalAnswer: "$45°$" },
        },
        {
          id: "olam-u3-s4-ba-q12", difficulty: "foundation", totalMarks: 2,
          stem: "Find the amplitude of $y=5\\cos x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Coefficient." }], steps: [
            { reasoning: "Amplitude $=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olam-u3-s4-ba-q13", difficulty: "core", totalMarks: 3,
          stem: "Find the maximum value of $y=2\\sin x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Max value", statement: "Amplitude + midline." }], steps: [
            { reasoning: "$\\sin x\\leq1$ → $2\\sin x\\leq2$.", marks: 1, markCode: "M" },
            { reasoning: "Max occurs at $x=90°$: $y=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u3-s4-ba-q14", difficulty: "core", totalMarks: 3,
          stem: "State the period, amplitude and range of $y=3\\cos(2x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Graph features", statement: "Read parameters." }], steps: [
            { reasoning: "Period $=\\frac{360}{2}=180°$; amplitude $=3$.", marks: 1, markCode: "M" },
            { reasoning: "Range: $[-3,3]$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Period 180°, amplitude 3, range $[-3,3]$" },
        },
        {
          id: "olam-u3-s4-ba-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the $x$-coordinates of the maxima of $y=\\sin x$ in the interval $0°\\leq x\\leq360°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Key points", statement: "Peak at 90°." }], steps: [
            { reasoning: "Maximum value 1 at $x=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Only one maximum in interval: $x=90°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=90°$" },
        },
        {
          id: "olam-u3-s4-ba-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Describe three features of the graph of $y=\\tan x$: its period, its asymptotes and its range.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Tan graph", statement: "Distinct curve." }], steps: [
            { reasoning: "Period $=180°$ (or $\\pi$ rad).", marks: 1, markCode: "M" },
            { reasoning: "Vertical asymptotes at $x=90°+180°n$ (i.e. $\\frac{\\pi}{2}+n\\pi$).", marks: 1, markCode: "M" },
            { reasoning: "Range is all real numbers; curve repeats each period.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Period 180°, asymptotes $x=90°+180°n$, range $\\mathbb{R}$" },
        },
      ],
    },
    {
      id: "olam-u3-s4-transforms",
      title: "Transformations of trig graphs",
      skill: "Interpret $y=a\\sin(b(x-c))+d$ transformations.",
      lesson: {
        sections: [
          { heading: "The four parameters", body: "In $y=a\\sin(b(x-c))+d$ (and similarly for cos/tan): $a$ controls amplitude and vertical stretch (with sign flip if negative); $b$ controls the period, which becomes $\\frac{360°}{b}$ for sin/cos and $\\frac{180°}{b}$ for tan; $c$ shifts the graph horizontally; $d$ shifts it vertically. A positive $c$ moves the graph right. When $b$ multiplies $(x-c)$ rather than just $x$, the shift is still $c$ — be careful not to divide by $b$ again." },
          { heading: "Building equations", body: "To construct a trig equation from a description: amplitude gives $|a|$, period gives $b=\\frac{360}{\\text{period}}$, a point on the curve fixes $c$ and $d$. For example, amplitude 3, period $120°$, through the origin: $a=3$, $b=\\frac{360}{120}=3$, and since it passes through $(0,0)$ there is no shift → $y=3\\sin(3x)$. Sketching these curves accurately requires plotting the five key points scaled by amplitude and compressed by period." },
        ],
        keyFormulas: [
          { name: "General form", statement: "$y=a\\sin(b(x-c))+d$" },
          { name: "Period", statement: "$\\frac{360°}{b}$ (sin/cos), $\\frac{180°}{b}$ (tan)" },
        ],
        workedExample: { problem: "State amplitude, period, shift of $y=4\\cos(3x)-2$.", solution: "Amplitude $|a|=4$; period $\\frac{360}{3}=120°$; vertical shift $d=-2$ moves the midline to $y=-2$, so range is $[-6,2]$; no horizontal shift ($c=0$). Max value 2 at $x=0$, min $-6$ at $x=60°$." },
      },
      questions: [
        {
          id: "olam-u3-s4-tr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In $y=5\\sin(2x)+3$, the amplitude is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" },
            { id: "b", text: "2" },
            { id: "c", text: "5" },
            { id: "d", text: "3" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Coefficient of sin." }], steps: [{ reasoning: "$a=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olam-u3-s4-tr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "The period of $y=\\cos(4x)$ is…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Period", statement: "$\\frac{360}{b}$." }], steps: [
            { reasoning: "$\\frac{360}{4}=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "olam-u3-s4-tr-q3", difficulty: "core", totalMarks: 3,
          stem: "Describe the transformation from $y=\\sin x$ to $y=\\sin(x-45°)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Phase shift", statement: "Horizontal translation." }], steps: [
            { reasoning: "Shift right by $45°$.", marks: 1, markCode: "M" },
            { reasoning: "Amplitude, period unchanged.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Translation right 45°" },
        },
        {
          id: "olam-u3-s4-tr-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of a sine curve with amplitude 3, period $120°$, passing through origin.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Construct equation", statement: "Match parameters." }], steps: [
            { reasoning: "Amplitude 3 → $a=3$; period $120°$ → $b=\\frac{360}{120}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Through origin, no shift → $c=0$, $d=0$.", marks: 1, markCode: "M" },
            { reasoning: "$y=3\\sin(3x)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=0$, $y=0$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=3\\sin(3x)$" },
        },
        {
          id: "olam-u3-s4-tr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$y=\\sin(x+30°)$ is a translation of $y=\\sin x$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Left by 60°" },
            { id: "b", text: "Up by 30" },
            { id: "c", text: "Left by 30°" },
            { id: "d", text: "Right by 30°" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Phase shift", statement: "$x+c$ → left." }], steps: [{ reasoning: "Plus inside → shift left by 30°.", marks: 1, markCode: "A" }], finalAnswer: "Left by 30°" },
        },
        {
          id: "olam-u3-s4-tr-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The amplitude of $y=2\\sin x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$360°$" },
            { id: "b", text: "0.5" },
            { id: "c", text: "1" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Coefficient." }], steps: [{ reasoning: "$a=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olam-u3-s4-tr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "$y=\\sin x+5$ is a translation of $y=\\sin x$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Down by 5 units" },
            { id: "b", text: "Up by 5 units" },
            { id: "c", text: "Right by 5 units" },
            { id: "d", text: "Left by 5 units" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Vertical shift", statement: "$+d$ moves up." }], steps: [{ reasoning: "$d=5$ → up 5 units.", marks: 1, markCode: "A" }], finalAnswer: "Up by 5 units" },
        },
        {
          id: "olam-u3-s4-tr-q8", difficulty: "core", totalMarks: 1,
          stem: "The period of $y=\\sin(2x)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$90°$" },
            { id: "b", text: "$720°$" },
            { id: "c", text: "$180°$" },
            { id: "d", text: "$360°$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Period", statement: "$\\frac{360}{b}$." }], steps: [{ reasoning: "$\\frac{360}{2}=180°$.", marks: 1, markCode: "A" }], finalAnswer: "$180°$" },
        },
        {
          id: "olam-u3-s4-tr-q9", difficulty: "core", totalMarks: 1,
          stem: "$y=\\sin(x-90°)$ is a translation of $y=\\sin x$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Left by 90°" },
            { id: "b", text: "Up by 90 units" },
            { id: "c", text: "Right by 90°" },
            { id: "d", text: "No translation" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Phase shift", statement: "$x-c$ → right." }], steps: [{ reasoning: "Minus inside → shift right by 90°.", marks: 1, markCode: "A" }], finalAnswer: "Right by 90°" },
        },
        {
          id: "olam-u3-s4-tr-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the period of $y=\\cos(6x)$ in degrees.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: { principles: [{ kind: "technique", name: "Period", statement: "$\\frac{360}{b}$." }], steps: [
            { reasoning: "$\\frac{360}{6}=60°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 60°.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°$" },
        },
        {
          id: "olam-u3-s4-tr-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Find the amplitude of $y=4\\sin(3x)-2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "$|a|$." }], steps: [
            { reasoning: "Amplitude $=|4|=4$ (vertical shift does not affect it).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u3-s4-tr-q12", difficulty: "core", totalMarks: 3,
          stem: "Find the value of $y=\\sin(x+60°)$ when $x=30°$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$y=\\sin(30°+60°)=\\sin90°$.", marks: 1, markCode: "M" },
            { reasoning: "$=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u3-s4-tr-q13", difficulty: "core", totalMarks: 2,
          stem: "Find the period of $y=\\tan(5x)$ in degrees.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36 }] },
          markscheme: { principles: [{ kind: "technique", name: "Period", statement: "$\\frac{180}{b}$ for tan." }], steps: [
            { reasoning: "$\\frac{180}{5}=36°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 36°.", marks: 1, markCode: "A" },
          ], finalAnswer: "$36°$" },
        },
        {
          id: "olam-u3-s4-tr-q14", difficulty: "core", totalMarks: 3,
          stem: "Describe the transformation from $y=\\cos x$ to $y=\\cos(x-60°)+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Transformations", statement: "Two translations." }], steps: [
            { reasoning: "Horizontal: shift right by 60° (since $x-60°$).", marks: 1, markCode: "M" },
            { reasoning: "Vertical: shift up by 2 units.", marks: 1, markCode: "M" },
            { reasoning: "Amplitude and period unchanged.", marks: 1, markCode: "A" },
          ], finalAnswer: "Right 60°, up 2 units" },
        },
        {
          id: "olam-u3-s4-tr-q15", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of a sine curve with amplitude 2 and period $90°$ that passes through the origin.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Construct equation", statement: "Match parameters." }], steps: [
            { reasoning: "Amplitude 2 → $a=2$; period $90°$ → $b=\\frac{360}{90}=4$.", marks: 1, markCode: "M" },
            { reasoning: "Through origin, no shifts → $y=2\\sin(4x)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $x=0$ → $y=0$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=2\\sin(4x)$" },
        },
        {
          id: "olam-u3-s4-tr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A sine curve has amplitude 4, period $180°$ and passes through the origin. Find its equation and state its maximum value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Construct equation", statement: "Match parameters." }], steps: [
            { reasoning: "Amplitude 4 → $a=4$; period $180°$ → $b=\\frac{360}{180}=2$.", marks: 1, markCode: "M" },
            { reasoning: "Through origin → $y=4\\sin(2x)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $x=0$ → $y=0$ ✓; max value $=4$ at $x=45°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $y=4\\sin(2x)$, maximum 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4\\sin(2x)$; max 4" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u3-s4-graph-notes", title: "Trig graphs — notes", summary: "Periods, amplitudes, transformations.",
      sections: [
        { heading: "Basic", body: "sin/cos period $360°$, tan $180°$. Amplitude = coefficient." },
        { heading: "Transforms", body: "$y=a\\sin(b(x-c))+d$: amplitude $|a|$, period $\\frac{360}{b}$, shift right $c$, up $d$." },
      ] },
  ],
};
