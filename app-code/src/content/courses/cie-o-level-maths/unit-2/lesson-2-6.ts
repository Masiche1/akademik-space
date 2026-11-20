import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "olm-u2-lesson-2-6",
  code: "2-6",
  title: "Proportion and Variation",
  goal: "I CAN solve direct and inverse proportion problems.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Direct proportion", definition: "$y=kx$ — y varies directly with x." },
    { term: "Inverse proportion", definition: "$y=\\frac{k}{x}$ — y varies inversely with x." },
    { term: "Constant of proportion", definition: "The fixed $k$ relating the variables." },
    { term: "Joint proportion", definition: "Variation with multiple variables." },
  ],
  concepts: [
    {
      id: "olm-u2-s6-direct",
      title: "Direct proportion",
      skill: "Solve direct proportion problems at O Level.",
      lesson: {
        sections: [
          { heading: "Direct proportion", body: "$y$ is directly proportional to $x$ means $y=kx$ where $k$ is constant. Double $x$ → double $y$; halve $x$ → halve $y$. To find $k$: substitute known values. To solve: set up $\\frac{y_1}{x_1}=\\frac{y_2}{x_2}$ (ratio method) or find $k$ then apply." },
          { heading: "Recognising proportion", body: "Problems say 'varies directly as', 'proportional to', or imply constant ratio. Convert words to equation: 'cost is proportional to weight' → $C=kw$. Check by testing two values — if $y/x$ is constant, it's direct proportion. For multiple variables: 'area proportional to length × width' → $A=klw$." },
        ],
        keyFormulas: [
          { name: "Direct", statement: "$y=kx$ or $\\frac{y_1}{x_1}=\\frac{y_2}{x_2}$" },
        ],
        workedExample: { problem: "Cost of 5 kg apples is $8. Cost of 8 kg?", solution: "$\\frac{8}{5}=\\frac{C}{8}$ → $C=\\frac{64}{5}=12.8$ → $\\$12.80$." },
      },
      questions: [
        {
          id: "olm-u2-s6-di-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If $y$ is directly proportional to $x$, then…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=kx$" }, { id: "b", text: "$y=k/x$" }, { id: "c", text: "$y=k+x$" }, { id: "d", text: "$y=kx^2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Direct", statement: "$y=kx$." }], steps: [{ reasoning: "Standard form.", marks: 1, markCode: "A" }], finalAnswer: "$y=kx$" },
        },
        {
          id: "olm-u2-s6-di-q2", difficulty: "foundation", totalMarks: 2,
          stem: "y=12 when x=4 and y varies directly with x. Find y when x=7.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "Find k first." }], steps: [
            { reasoning: "$k=12/4=3$; $y=3\\times7=21$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 21.", marks: 1, markCode: "A" },
          ], finalAnswer: "21" },
        },
        {
          id: "olm-u2-s6-di-q3", difficulty: "core", totalMarks: 3,
          stem: "A car travels 240 km on 20 litres of fuel. How far on 35 litres (same efficiency)?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Direct proportion", statement: "Distance ∝ fuel." }], steps: [
            { reasoning: "$\\frac{240}{20}=\\frac{d}{35}$ → $d=240\\times\\frac{35}{20}=420$ km.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 420 km.", marks: 1, markCode: "M" },
            { reasoning: "Check: 12 km/litre × 35 = 420 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "420 km" },
        },
        {
          id: "olm-u2-s6-di-q4", difficulty: "core", totalMarks: 4,
          stem: "The cost C of painting is proportional to area A. 20 m² costs $150. Find cost of 35 m².",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "Ratio method." }], steps: [
            { reasoning: "$k=150/20=7.5$ per m².", marks: 1, markCode: "M" },
            { reasoning: "$C=7.5\\times35=262.5$ → $\\$262.50$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Or $150\\times\\frac{35}{20}=262.5$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$262.50" },
        },
      ],
    },
    {
      id: "olm-u2-s6-inverse",
      title: "Inverse proportion",
      skill: "Solve inverse proportion problems at O Level.",
      lesson: {
        sections: [
          { heading: "Inverse proportion", body: "$y$ is inversely proportional to $x$ means $y=\\frac{k}{x}$ or $xy=k$ — the product is constant. Double $x$ → halve $y$. To solve: $x_1y_1=x_2y_2$. 'Inversely proportional' means as one increases the other decreases proportionally." },
          { heading: "Distinguishing", body: "Check whether $xy$ or $y/x$ is constant. If $xy=k$ → inverse; if $y/x=k$ → direct. Problems: 'time varies inversely with workers' ($t=\\frac{k}{n}$), 'pressure varies inversely with volume' (Boyle's law). For combined problems, identify which pairs are proportional." },
        ],
        keyFormulas: [
          { name: "Inverse", statement: "$xy=k$ or $x_1y_1=x_2y_2$" },
        ],
        workedExample: { problem: "6 workers take 8 hours. How long for 4 workers (same job)?", solution: "$6\\times8=4\\times t$ → $t=12$ hours." },
      },
      questions: [
        {
          id: "olm-u2-s6-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If $y$ is inversely proportional to $x$, then…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$xy=k$" }, { id: "b", text: "$y=kx$" }, { id: "c", text: "$y=k+x$" }, { id: "d", text: "$y=kx^2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Inverse", statement: "$xy=k$." }], steps: [{ reasoning: "Product constant.", marks: 1, markCode: "A" }], finalAnswer: "$xy=k$" },
        },
        {
          id: "olm-u2-s6-in-q2", difficulty: "foundation", totalMarks: 2,
          stem: "y=20 when x=3, inverse proportion. Find y when x=5.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "$xy$ constant." }], steps: [
            { reasoning: "$k=60$; $y=60/5=12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olm-u2-s6-in-q3", difficulty: "core", totalMarks: 3,
          stem: "A job takes 12 hours with 5 workers. How long with 8 workers?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Workers × time constant." }], steps: [
            { reasoning: "$5\\times12=8\\times t$ → $t=7.5$ hours.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.5 hours.", marks: 1, markCode: "M" },
            { reasoning: "Check: more workers → less time ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "7.5 hours" },
        },
        {
          id: "olm-u2-s6-in-q4", difficulty: "core", totalMarks: 4,
          stem: "The pressure P of a gas varies inversely with volume V. At 200 kPa, V=5 litres. Find V at 250 kPa.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Boyle's law", statement: "$PV$ constant." }], steps: [
            { reasoning: "$200\\times5=250\\times V$ → $V=4$ litres.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 litres.", marks: 1, markCode: "M" },
            { reasoning: "Check: higher pressure → smaller volume ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 litres" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s6-prop-notes", title: "Proportion — notes", summary: "Direct and inverse variation.",
      sections: [
        { heading: "Direct", body: "$y=kx$; ratio $y/x$ constant; double x → double y." },
        { heading: "Inverse", body: "$xy=k$; product constant; double x → half y." },
      ] },
  ],
};
