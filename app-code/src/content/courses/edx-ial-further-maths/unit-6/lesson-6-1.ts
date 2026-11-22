import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edialfm-u6-lesson-6-1",
  code: "6-1",
  title: "Circular Motion",
  goal: "I CAN analyse motion in a horizontal and vertical circle, including tension, normal reaction and conditions for completing the circle.",
  standards: ["WME03 M3", "Circular motion"],
  vocabulary: [
    { term: "Angular velocity", definition: "$\\omega=\\frac{d\\theta}{dt}$ rad/s; $v=r\\omega$." },
    { term: "Centripetal acceleration", definition: "$a=\\frac{v^2}{r}=r\\omega^2$ directed toward the centre." },
    { term: "Centripetal force", definition: "The net force required: $F=\\frac{mv^2}{r}=mr\\omega^2$ toward the centre." },
    { term: "Vertical circle", definition: "Circle in a vertical plane; tension varies with position; minimum speed at top for completing circle is $\\sqrt{gr}$." },
  ],
  concepts: [
    {
      id: "edialfm-u6-circ-basics",
      title: "Horizontal and vertical circles",
      skill: "Apply $F=\\frac{mv^2}{r}$ to conical pendulums, banked tracks and vertical circles.",
      lesson: {
        sections: [
          {
            heading: "The centripetal requirement",
            body: "Any circular motion needs a net force $\\frac{mv^2}{r}$ toward the centre. Identify which forces provide it: tension (string), normal reaction (banked track), friction, or gravity component. At the top of a vertical circle, both tension and weight act downward.",
          },
          {
            heading: "Vertical circle condition",
            body: "For a particle on a string of length $r$ to just complete the circle, tension at top $=0$ and gravity alone provides centripetal force: $mg=\\frac{mv^2}{r}\\Rightarrow v_{\\min}=\\sqrt{gr}$. For a rod, the condition is $v>0$ at top (rod can push).",
          },
          {
            heading: "Energy in vertical circle",
            body: "Speed varies: fastest at bottom, slowest at top. Use energy conservation $\\frac12mv^2+mgh=$ const between positions, combined with force equations at each point.",
          },
        ],
        keyFormulas: [
          { name: "Centripetal force", statement: "$F=\\frac{mv^2}{r}=mr\\omega^2$" },
          { name: "Min speed top", statement: "$v_{\\min}=\\sqrt{gr}$ (string)" },
        ],
        workedExample: {
          problem: "A conical pendulum bob of mass $m$ moves in a horizontal circle of radius $r$ with angular speed $\\omega$. Find tension.",
          solution: "Vertical: $T\\cos\\theta=mg$; horizontal: $T\\sin\\theta=mr\\omega^2$. Divide: $\\tan\\theta=\\frac{r\\omega^2}{g}$; $T=\\frac{mg}{\\cos\\theta}=m\\sqrt{g^2+r^2\\omega^4}$? State $T=\\frac{mg}{\\cos\\theta}$ with $\\cos\\theta=\\frac{g}{\\sqrt{g^2+r^2\\omega^4}}$.",
        },
      },
      questions: [
        {
          id: "edialfm-cm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Centripetal acceleration is directed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tangentially" },
              { id: "b", text: "Away from centre" },
              { id: "c", text: "Vertically" },
              { id: "d", text: "Toward the centre" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Centripetal", statement: "Acceleration toward centre." }],
            steps: [{ reasoning: "Definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** toward centre",
          },
        },
        {
          id: "edialfm-cm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $0.5$ kg mass on a $1$ m string moves in a horizontal circle with angular speed $2$ rad/s. Find tension if the string is horizontal? (Interpret as conical pendulum: find tension given $\\tan\\theta=\\frac{r\\omega^2}{g}$.)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conical pendulum", statement: "$T\\sin\\theta=mr\\omega^2$, $T\\cos\\theta=mg$." }],
            steps: [
              { reasoning: "$\\tan\\theta=\\frac{r\\omega^2}{g}=\\frac{1\\times4}{9.8}=\\frac{4}{9.8}$.", working: "tan", marks: 1, markCode: "M" },
              { reasoning: "$T=\\frac{mg}{\\cos\\theta}=\\frac{0.5\\times9.8}{\\cos\\theta}=\\frac{4.9}{\\cos\\theta}$; $\\cos\\theta=\\frac{1}{\\sqrt{1+\\tan^2\\theta}}=\\frac{9.8}{\\sqrt{9.8^2+16}}\\approx0.925$.", working: "cos", marks: 1, markCode: "M" },
              { reasoning: "$T\\approx5.3$ N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T\\approx5.3$ N",
            commonErrors: ["Wrong trig ratio."],
          },
        },
        {
          id: "edialfm-cm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle on a string of length $r$ just completes a vertical circle. Show that its speed at the top is $\\sqrt{gr}$ and its speed at the bottom is $\\sqrt{5gr}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Vertical circle", statement: "At top: $T=0$, $mg=\\frac{mv^2}{r}$." },
              { kind: "technique", name: "Energy", statement: "KE top + $2mgr$ = KE bottom." },
            ],
            steps: [
              { reasoning: "At top, minimum condition $T=0$: $mg=\\frac{mv_{\\text{top}}^2}{r}\\Rightarrow v_{\\text{top}}=\\sqrt{gr}$.", working: "sqrt(gr)", marks: 1, markCode: "M" },
              { reasoning: "Energy: $\\frac12mv_{\\text{bot}}^2=\\frac12mv_{\\text{top}}^2+2mgr=\\frac12mgr+2mgr=\\frac52mgr$.", working: "energy", marks: 1, markCode: "M" },
              { reasoning: "$v_{\\text{bot}}=\\sqrt{5gr}$.", working: "sqrt(5gr)", marks: 1, markCode: "M" },
              { reasoning: "State both speeds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v_{\\text{top}}=\\sqrt{gr}$, $v_{\\text{bot}}=\\sqrt{5gr}$",
            commonErrors: ["Height difference is $2r$ not $r$."],
          },
        },
        {
          id: "edialfm-cm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle of mass $m$ on a light inextensible string of length $r$ moves in a vertical circle. At the lowest point its speed is $u$.",
          parts: [
            { label: "a", prompt: "Find its speed at angle $\\theta$ above the downward vertical.", marks: 3 },
            { label: "b", prompt: "Find the tension at angle $\\theta$.", marks: 4 },
            { label: "c", prompt: "Find the minimum $u$ for the particle to reach the highest point.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Energy", statement: "$\\frac12mv^2=mgh+\\frac12mv_{\\text{top}}^2$." },
              { kind: "technique", name: "Radial equation", statement: "$T-mg\\cos\\theta=\\frac{mv^2}{r}$ (θ from downward vertical)." },
            ],
            steps: [
              { part: "a", reasoning: "Height risen: $h=r(1-\\cos\\theta)$? If $\\theta$ measured from downward vertical, height $=r(1-\\cos\\theta)$.", working: "h", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\frac12mv^2=\\frac12mu^2-mgr(1-\\cos\\theta)$, so $v^2=u^2-2gr(1-\\cos\\theta)$.", working: "v^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State speed squared.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Radial forces toward centre: $T-mg\\cos\\theta=\\frac{mv^2}{r}$ (weight component along string is $mg\\cos\\theta$ outward when $\\theta$ from downward).", working: "equation", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$T=\\frac{mv^2}{r}+mg\\cos\\theta=\\frac{m}{r}[u^2-2gr(1-\\cos\\theta)]+mg\\cos\\theta=\\frac{mu^2}{r}-2mg+3mg\\cos\\theta$.", working: "T=", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State tension expression.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check at $\\theta=0$: $T=\\frac{mu^2}{r}+mg$ ✓.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "To just reach top need $v_{\\text{top}}\\ge\\sqrt{gr}$: $u^2-2gr(1-\\cos\\pi)=u^2-4gr\\ge gr\\Rightarrow u^2\\ge5gr$.", working: "u>=sqrt(5gr)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$u_{\\min}=\\sqrt{5gr}$.", working: "u_min", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State minimum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $v^2=u^2-2gr(1-\\cos\\theta)$ (b) $T=\\frac{mu^2}{r}-2mg+3mg\\cos\\theta$ (c) $u_{\\min}=\\sqrt{5gr}$",
            commonErrors: ["Angle convention errors; height $r(1-\\cos\\theta)$."],
          },
        },
      ],
    },
    {
      id: "edialfm-u6-circ-adv",
      title: "Conical pendulum and banked curves",
      skill: "Analyse conical pendulums, banked tracks and vehicles on curves.",
      lesson: {
        sections: [
          {
            heading: "Conical pendulum",
            body: "Bob on string sweeps horizontal circle at fixed angle $\\theta$. Vertical: $T\\cos\\theta=mg$; horizontal: $T\\sin\\theta=mr\\omega^2$ with $r=L\\sin\\theta$ ($L$ string length). Eliminate $T$ to relate $\\omega$ and $\\theta$.",
          },
          {
            heading: "Banked track",
            body: "On a banked curve angle $\\theta$, normal reaction provides centripetal force: $N\\sin\\theta=\\frac{mv^2}{r}$, $N\\cos\\theta=mg$. Ideal speed $v=\\sqrt{gr\\tan\\theta}$ — no friction needed.",
          },
          {
            heading: "Friction on level curves",
            body: "On unbanked level curve, friction provides centripetal force up to $\\mu mg$; max speed $v_{\\max}=\\sqrt{\\mu gr}$.",
          },
        ],
        keyFormulas: [
          { name: "Banked ideal", statement: "$v=\\sqrt{gr\\tan\\theta}$" },
          { name: "Max unbanked", statement: "$v_{\\max}=\\sqrt{\\mu gr}$" },
        ],
        workedExample: {
          problem: "Find the angle of banking for a curve of radius $100$ m designed for $20$ m/s.",
          solution: "$\\tan\\theta=\\frac{v^2}{gr}=\\frac{400}{980}=0.408$, $\\theta=\\tan^{-1}(0.408)\\approx22.2°$.",
        },
      },
      questions: [
        {
          id: "edialfm-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On an ideally banked curve, the centripetal force is provided by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Engine force" },
              { id: "b", text: "Friction" },
              { id: "c", text: "The horizontal component of normal reaction" },
              { id: "d", text: "Gravity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Banked curve", statement: "$N\\sin\\theta$ provides centripetal force." }],
            steps: [{ reasoning: "Normal reaction component.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** normal reaction",
          },
        },
        {
          id: "edialfm-ca-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car rounds an unbanked curve of radius $50$ m with coefficient of friction $0.4$. Find maximum safe speed ($g=9.8$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Max speed", statement: "$v_{\\max}=\\sqrt{\\mu gr}$." }],
            steps: [
              { reasoning: "$v_{\\max}=\\sqrt{0.4\\times9.8\\times50}=\\sqrt{196}=14$ m/s.", working: "14", marks: 1, markCode: "M" },
              { reasoning: "State 14 m/s.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$ m/s",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edialfm-ca-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A conical pendulum has string length $L$ and bob moves in circle radius $r$. Given $\\omega$, find the angle the string makes with the vertical.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conical pendulum", statement: "$\\tan\\theta=\\frac{r\\omega^2}{g}$." }],
            steps: [
              { reasoning: "From $T\\cos\\theta=mg$, $T\\sin\\theta=mr\\omega^2$: divide to get $\\tan\\theta=\\frac{r\\omega^2}{g}$.", working: "tan", marks: 1, markCode: "M" },
              { reasoning: "$\\theta=\\tan^{-1}\\left(\\frac{r\\omega^2}{g}\\right)$.", working: "theta", marks: 1, markCode: "M" },
              { reasoning: "State angle.", marks: 1, markCode: "A" },
              { reasoning: "Note $r=L\\sin\\theta$ if needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=\\tan^{-1}\\left(\\frac{r\\omega^2}{g}\\right)$",
            commonErrors: ["Wrong ratio."],
          },
        },
        {
          id: "edialfm-ca-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A car of mass $m$ travels at speed $v$ around a curve of radius $r$ banked at angle $\\theta$ with coefficient of friction $\\mu$.",
          parts: [
            { label: "a", prompt: "Resolve forces vertically and horizontally.", marks: 3 },
            { label: "b", prompt: "Find the range of speeds for which the car does not slip.", marks: 4 },
            { label: "c", prompt: "Find the ideal (frictionless) speed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Banked with friction", statement: "Friction acts up or down slope depending on speed." },
            ],
            steps: [
              { part: "a", reasoning: "Vertical: $N\\cos\\theta+F_f\\sin\\theta=mg$ (friction direction depends); horizontal: $N\\sin\\theta\\pm F_f\\cos\\theta=\\frac{mv^2}{r}$.", working: "equations", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both equations with friction sign convention.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Note friction $\\le\\mu N$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Too fast: friction acts down slope; limiting: $N(\\sin\\theta+\\mu\\cos\\theta)=\\frac{mv_{\\max}^2}{r}$, $N(\\cos\\theta-\\mu\\sin\\theta)=mg$.", working: "max eq", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide: $v_{\\max}^2=\\frac{gr(\\tan\\theta+\\mu)}{1-\\mu\\tan\\theta}$.", working: "vmax^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Too slow: friction up slope: $v_{\\min}^2=\\frac{gr(\\tan\\theta-\\mu)}{1+\\mu\\tan\\theta}$.", working: "vmin^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State range $v_{\\min}\\le v\\le v_{\\max}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $\\mu=0$: $v^2=gr\\tan\\theta$, $v=\\sqrt{gr\\tan\\theta}$.", working: "ideal v", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State ideal speed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) resolved equations (b) $\\sqrt{\\frac{gr(\\tan\\theta-\\mu)}{1+\\mu\\tan\\theta}}\\le v\\le\\sqrt{\\frac{gr(\\tan\\theta+\\mu)}{1-\\mu\\tan\\theta}}$ (c) $\\sqrt{gr\\tan\\theta}$",
            commonErrors: ["Friction direction errors; algebra slips."],
          },
        },
      ],
    },
  ],
};
