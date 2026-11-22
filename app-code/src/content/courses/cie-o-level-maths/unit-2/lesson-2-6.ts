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
            { id: "a", text: "$y=kx^2$" },
            { id: "b", text: "$y=k/x$" },
            { id: "c", text: "$y=k+x$" },
            { id: "d", text: "$y=kx$" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u2-s6-di-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If $y$ is directly proportional to $x$ and $x$ is doubled, then $y$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Doubled" },
            { id: "b", text: "Unchanged" },
            { id: "c", text: "Squared" },
            { id: "d", text: "Halved" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Direct", statement: "$y=kx$; constant ratio." }], steps: [{ reasoning: "Double $x$ → double $y$.", marks: 1, markCode: "A" }], finalAnswer: "Doubled" },
        },
        {
          id: "olm-u2-s6-di-q6", difficulty: "foundation", totalMarks: 2,
          stem: "y=30 when x=5 and y varies directly with x. Find y when x=8.",
          response: { type: "numeric", parts: [{ label: "a", answer: 48 }] },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "Find $k$ first." }], steps: [
            { reasoning: "$k=30/5=6$; $y=6\\times8=48$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 48.", marks: 1, markCode: "A" },
          ], finalAnswer: "48" },
        },
        {
          id: "olm-u2-s6-di-q7", difficulty: "foundation", totalMarks: 2,
          stem: "The cost of 12 notebooks is $18. What is the cost of 20 notebooks?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "technique", name: "Direct proportion", statement: "Cost $\\propto$ number." }], steps: [
            { reasoning: "$\\frac{18}{12}=\\frac{C}{20}$ → $C=30$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $30.", marks: 1, markCode: "A" },
          ], finalAnswer: "$30" },
        },
        {
          id: "olm-u2-s6-di-q8", difficulty: "foundation", totalMarks: 1,
          stem: "y is directly proportional to x. When x=6, y=21. The value of the constant k is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "126" },
            { id: "b", text: "3.5" },
            { id: "c", text: "15" },
            { id: "d", text: "4.2" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "$k=y/x$." }], steps: [{ reasoning: "$k=21/6=3.5$.", marks: 1, markCode: "A" }], finalAnswer: "3.5" },
        },
        {
          id: "olm-u2-s6-di-q9", difficulty: "core", totalMarks: 1,
          stem: "Which graph shows $y$ directly proportional to $x$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A straight line not through the origin" },
            { id: "b", text: "A horizontal line" },
            { id: "c", text: "A curve" },
            { id: "d", text: "A straight line through the origin" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Direct", statement: "$y=kx$ is linear through $(0,0)$." }], steps: [{ reasoning: "$y=kx$ has no constant term → through origin.", marks: 1, markCode: "A" }], finalAnswer: "Line through origin" },
        },
        {
          id: "olm-u2-s6-di-q10", difficulty: "core", totalMarks: 3,
          stem: "The mass M of a metal rod is proportional to its length L. A 2.5 m rod has mass 15 kg. Find the mass of a 4 m rod.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Direct proportion", statement: "Ratio method." }], steps: [
            { reasoning: "$k=15/2.5=6$ kg/m.", marks: 1, markCode: "M" },
            { reasoning: "$M=6\\times4=24$ kg.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 24 kg.", marks: 1, markCode: "A" },
          ], finalAnswer: "24 kg" },
        },
        {
          id: "olm-u2-s6-di-q11", difficulty: "core", totalMarks: 2,
          stem: "d is directly proportional to $t^2$. d=45 when t=3. Find d when t=5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 125 }] },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "$d=kt^2$." }], steps: [
            { reasoning: "$k=45/9=5$; $d=5\\times25=125$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 125.", marks: 1, markCode: "A" },
          ], finalAnswer: "125" },
        },
        {
          id: "olm-u2-s6-di-q12", difficulty: "core", totalMarks: 1,
          stem: "If y is directly proportional to x and y=8 when x=2, then y when x=5 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "20" },
            { id: "b", text: "16" },
            { id: "c", text: "10" },
            { id: "d", text: "40" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "$k=4$." }], steps: [{ reasoning: "$k=4$; $y=4\\times5=20$.", marks: 1, markCode: "A" }], finalAnswer: "20" },
        },
        {
          id: "olm-u2-s6-di-q13", difficulty: "challenge", totalMarks: 4,
          stem: "P varies directly as the square of Q. P=72 when Q=6. Find P when Q=10.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "$P=kQ^2$." }], steps: [
            { reasoning: "$k=72/36=2$.", marks: 1, markCode: "M" },
            { reasoning: "$P=2\\times100=200$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(10/6)^2\\times72=200$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 200.", marks: 1, markCode: "A" },
          ], finalAnswer: "200" },
        },
        {
          id: "olm-u2-s6-di-q14", difficulty: "challenge", totalMarks: 2,
          stem: "The force F needed to stretch a spring is proportional to the extension e. A force of 10 N produces an extension of 4 cm. What extension is produced by a force of 35 N?",
          response: { type: "numeric", parts: [{ label: "a", answer: 14 }] },
          markscheme: { principles: [{ kind: "technique", name: "Direct proportion", statement: "Force $\\propto$ extension." }], steps: [
            { reasoning: "$\\frac{10}{4}=\\frac{35}{e}$ → $e=14$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 14 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "14 cm" },
        },
        {
          id: "olm-u2-s6-di-q15", difficulty: "challenge", totalMarks: 1,
          stem: "y varies directly with $x^3$. If x is doubled, y is multiplied by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "2" },
            { id: "c", text: "8" },
            { id: "d", text: "6" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Direct", statement: "$y=kx^3$." }], steps: [{ reasoning: "$2^3=8$.", marks: 1, markCode: "A" }], finalAnswer: "8" },
        },
        {
          id: "olm-u2-s6-di-q16", difficulty: "challenge", totalMarks: 4,
          stem: "y is directly proportional to x. When x increases from 5 to 11, y increases by 24. Find the value of y when x=8.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Direct", statement: "Use the increase to find $k$." }], steps: [
            { reasoning: "Increase: $k(11-5)=6k=24$ → $k=4$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $y$ increases by $6\\times4=24$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "$y=4\\times8=32$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 32.", marks: 1, markCode: "A" },
          ], finalAnswer: "32" },
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
            { id: "a", text: "$y=k+x$" },
            { id: "b", text: "$y=kx$" },
            { id: "c", text: "$xy=k$" },
            { id: "d", text: "$y=kx^2$" },
          ], correctChoiceId: "c" },
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
        {
          id: "olm-u2-s6-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If $xy=k$ where $k$ is constant, then $y$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Independent of $x$" },
            { id: "b", text: "Proportional to $x^2$" },
            { id: "c", text: "Inversely proportional to $x$" },
            { id: "d", text: "Directly proportional to $x$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Inverse", statement: "$y=k/x$." }], steps: [{ reasoning: "$xy=k$ → $y=k/x$.", marks: 1, markCode: "A" }], finalAnswer: "Inversely proportional" },
        },
        {
          id: "olm-u2-s6-in-q6", difficulty: "foundation", totalMarks: 2,
          stem: "y=24 when x=6 and y varies inversely with x. Find y when x=8.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "$xy$ constant." }], steps: [
            { reasoning: "$k=6\\times24=144$; $y=144/8=18$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 18.", marks: 1, markCode: "A" },
          ], finalAnswer: "18" },
        },
        {
          id: "olm-u2-s6-in-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A pipe can fill a tank in 12 hours. How long will it take 3 identical pipes working together?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Pipes $\\times$ time constant." }], steps: [
            { reasoning: "$1\\times12=3\\times t$ → $t=4$ hours.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 hours.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 hours" },
        },
        {
          id: "olm-u2-s6-in-q8", difficulty: "foundation", totalMarks: 2,
          stem: "P varies inversely with V. P=30 when V=4. Find P when V=6.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "$PV$ constant." }], steps: [
            { reasoning: "$k=120$; $P=120/6=20$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
          ], finalAnswer: "20" },
        },
        {
          id: "olm-u2-s6-in-q9", difficulty: "core", totalMarks: 1,
          stem: "Which statement describes inverse proportion between $x$ and $y$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=kx^2$" },
            { id: "b", text: "$y=x+k$" },
            { id: "c", text: "The product $xy$ is constant" },
            { id: "d", text: "The ratio $y/x$ is constant" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Inverse", statement: "$xy=k$." }], steps: [{ reasoning: "Product constant.", marks: 1, markCode: "A" }], finalAnswer: "$xy$ constant" },
        },
        {
          id: "olm-u2-s6-in-q10", difficulty: "core", totalMarks: 3,
          stem: "The time T to complete a job is inversely proportional to the number of workers n. 6 workers take 10 hours. How long do 15 workers take?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Workers $\\times$ time constant." }], steps: [
            { reasoning: "$6\\times10=15\\times T$ → $T=4$ hours.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 hours.", marks: 1, markCode: "M" },
            { reasoning: "Check: more workers → less time ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 hours" },
        },
        {
          id: "olm-u2-s6-in-q11", difficulty: "core", totalMarks: 1,
          stem: "y is inversely proportional to $x^2$. y=8 when x=2. Find y when x=4.",
          response: { type: "mcq", choices: [
            { id: "a", text: "16" },
            { id: "b", text: "4" },
            { id: "c", text: "2" },
            { id: "d", text: "32" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "$yx^2$ constant." }], steps: [{ reasoning: "$k=8\\times4=32$; $y=32/16=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olm-u2-s6-in-q12", difficulty: "core", totalMarks: 1,
          stem: "If y is inversely proportional to x and y=12 when x=5, then y when x=3 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "15" },
            { id: "b", text: "20" },
            { id: "c", text: "60" },
            { id: "d", text: "7.2" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "$k=60$." }], steps: [{ reasoning: "$y=60/3=20$.", marks: 1, markCode: "A" }], finalAnswer: "20" },
        },
        {
          id: "olm-u2-s6-in-q13", difficulty: "challenge", totalMarks: 4,
          stem: "The brightness B of a lamp varies inversely as the square of the distance d. At 2 m the brightness is 50 units. Find the brightness at 5 m.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse square", statement: "$Bd^2$ constant." }], steps: [
            { reasoning: "$k=50\\times4=200$.", marks: 1, markCode: "M" },
            { reasoning: "$B=200/25=8$ units.", marks: 1, markCode: "M" },
            { reasoning: "Check: brightness scales by $(2/5)^2$, so $50\\times\\frac{4}{25}=8$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 units" },
        },
        {
          id: "olm-u2-s6-in-q14", difficulty: "challenge", totalMarks: 2,
          stem: "The pressure P of a gas varies inversely with its volume V. P=150 kPa when V=8 litres. Find V when P=200 kPa.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "$PV$ constant." }], steps: [
            { reasoning: "$150\\times8=200\\times V$ → $V=6$ litres.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6 litres.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 litres" },
        },
        {
          id: "olm-u2-s6-in-q15", difficulty: "challenge", totalMarks: 1,
          stem: "If y varies inversely as x, then when x is multiplied by 3, y is multiplied by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "$\\frac19$" },
            { id: "c", text: "Unchanged" },
            { id: "d", text: "$\\frac13$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Inverse", statement: "$y=k/x$." }], steps: [{ reasoning: "$y$ becomes $k/(3x)=y/3$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u2-s6-in-q16", difficulty: "challenge", totalMarks: 4,
          stem: "y is inversely proportional to x. When x increases from 4 to 10, y decreases by 9. Find the value of y when x=6.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Use the decrease to find $k$." }], steps: [
            { reasoning: "Decrease: $\\frac{k}{4}-\\frac{k}{10}=\\frac{3k}{20}=9$ → $k=60$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{60}{4}-\\frac{60}{10}=15-6=9$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "$y=60/6=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
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
