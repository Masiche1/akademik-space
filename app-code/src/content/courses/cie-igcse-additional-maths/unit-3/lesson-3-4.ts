import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ciam-u3-lesson-3-4",
  code: "3-4",
  title: "Trigonometric Graphs",
  goal: "I CAN sketch and interpret trigonometric graphs.",
  standards: ["0606: trigonometric graphs"],
  vocabulary: [
    { term: "Amplitude", definition: "Height of wave from centre line." },
    { term: "Period", definition: "Horizontal length of one complete cycle." },
    { term: "Phase shift", definition: "Horizontal displacement of graph." },
    { term: "Translations", definition: "Shifts: $y=a\\sin(bx)+c$ etc." },
  ],
  concepts: [
    {
      id: "ciam-u3-s4-basics",
      title: "Basic trig graphs",
      skill: "Sketch $y=\\sin x$, $y=\\cos x$, $y=\\tan x$ at IGCSE level.",
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
          id: "ciam-u3-s4-ba-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The period of $y=\\sin x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$360°$" }, { id: "b", text: "$180°$" }, { id: "c", text: "$90°$" }, { id: "d", text: "$720°$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Trig period", statement: "sin/cos period." }], steps: [{ reasoning: "$360°$.", marks: 1, markCode: "A" }], finalAnswer: "$360°$" },
        },
        {
          id: "ciam-u3-s4-ba-q2", difficulty: "foundation", totalMarks: 2,
          stem: "The amplitude of $y=4\\cos x$ is…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Coefficient of trig." }], steps: [
            { reasoning: "Amplitude = 4.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u3-s4-ba-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the period of $y=\\tan(3x)$ in degrees.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Period scaling", statement: "Divide by $b$." }], steps: [
            { reasoning: "tan period $180°$; $b=3$ → period $\\frac{180}{3}=60°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\tan(3(x+20°))=\\tan(3x+60°)=\\tan(3x)$ since tan period $180°$ and $3\\times20=60$... verify: period of $y=\\tan(bx)$ is $\\frac{180}{b}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°$" },
        },
        {
          id: "ciam-u3-s4-ba-q4", difficulty: "core", totalMarks: 4,
          stem: "Sketch $y=2\\sin x+1$ for $0°\\leq x\\leq360°$, stating max and min values.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertical transform", statement: "Scale + shift." }], steps: [
            { reasoning: "Amplitude 2, vertical shift +1 → range $[-1,3]$.", marks: 1, markCode: "M" },
            { reasoning: "Max 3 at $x=90°$; min $-1$ at $x=270°$.", marks: 1, markCode: "M" },
            { reasoning: "Passes through $(0,1),(180,1),(360,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Correct sketch shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Max 3, min $-1$" },
        },
      ],
    },
    {
      id: "ciam-u3-s4-transforms",
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
          id: "ciam-u3-s4-tr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In $y=5\\sin(2x)+3$, the amplitude is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "2" }, { id: "c", text: "3" }, { id: "d", text: "10" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Amplitude", statement: "Coefficient of sin." }], steps: [{ reasoning: "$a=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "ciam-u3-s4-tr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "The period of $y=\\cos(4x)$ is…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Period", statement: "$\\frac{360}{b}$." }], steps: [
            { reasoning: "$\\frac{360}{4}=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "ciam-u3-s4-tr-q3", difficulty: "core", totalMarks: 3,
          stem: "Describe the transformation from $y=\\sin x$ to $y=\\sin(x-45°)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Phase shift", statement: "Horizontal translation." }], steps: [
            { reasoning: "Shift right by $45°$.", marks: 1, markCode: "M" },
            { reasoning: "Amplitude, period unchanged.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Translation right 45°" },
        },
        {
          id: "ciam-u3-s4-tr-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of a sine curve with amplitude 3, period $120°$, passing through origin.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Construct equation", statement: "Match parameters." }], steps: [
            { reasoning: "Amplitude 3 → $a=3$; period $120°$ → $b=\\frac{360}{120}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Through origin, no shift → $c=0$, $d=0$.", marks: 1, markCode: "M" },
            { reasoning: "$y=3\\sin(3x)$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=0$, $y=0$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=3\\sin(3x)$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u3-s4-graph-notes", title: "Trig graphs — notes", summary: "Periods, amplitudes, transformations.",
      sections: [
        { heading: "Basic", body: "sin/cos period $360°$, tan $180°$. Amplitude = coefficient." },
        { heading: "Transforms", body: "$y=a\\sin(b(x-c))+d$: amplitude $|a|$, period $\\frac{360}{b}$, shift right $c$, up $d$." },
      ] },
  ],
};
