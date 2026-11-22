import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edxifm-u5-lesson-5-1",
  code: "5-1",
  title: "Kinematics with Variable Acceleration",
  goal: "I CAN use calculus to analyse motion with non-constant acceleration, including displacements as integrals of velocity.",
  standards: ["WME02 M2", "Kinematics"],
  vocabulary: [
    { term: "Variable acceleration", definition: "Acceleration $a(t)$ varying with time, requiring calculus rather than SUVAT equations." },
    { term: "Displacement from velocity", definition: "$s=\\int v\\,dt$; distance $=\\int|v|\\,dt$." },
    { term: "Velocity from acceleration", definition: "$v=\\int a\\,dt + C$, constant fixed by initial conditions." },
    { term: "Rest instant", definition: "Time when $v=0$; sign changes of $v$ indicate changes of direction." },
  ],
  concepts: [
    {
      id: "edxifm-u5-var-kin",
      title: "Integration in kinematics",
      skill: "Integrate acceleration to velocity and velocity to displacement, applying initial conditions.",
      lesson: {
        sections: [
          {
            heading: "The calculus approach",
            body: "Given $a(t)$, integrate to get $v(t)=\\int a\\,dt+C_1$ with $C_1$ from initial velocity. Then $s(t)=\\int v\\,dt+C_2$ with $C_2$ from initial displacement. Definite integrals give displacement over an interval: $\\Delta s=\\int_{t_1}^{t_2}v\\,dt$.",
          },
          {
            heading: "Sign and direction",
            body: "When $v>0$ the particle moves forward; $v<0$ backward. Distance travelled is $\\int|v|\\,dt$, not the absolute value of displacement — split the integral at times where $v=0$.",
          },
          {
            heading: "Acceleration as derivative",
            body: "$a=\\frac{dv}{dt}=\\frac{d^2s}{dt^2}$. Given $v$ as a function of $t$, acceleration is its derivative; given $v$ as a function of $s$, use $a=v\\frac{dv}{ds}$.",
          },
        ],
        keyFormulas: [
          { name: "Velocity", statement: "$v=\\int a\\,dt+C$" },
          { name: "Displacement", statement: "$\\Delta s=\\int_{t_1}^{t_2}v\\,dt$" },
          { name: "Chain rule form", statement: "$a=v\\frac{dv}{ds}$" },
        ],
        workedExample: {
          problem: "A particle has $a=6t-4$, $v(0)=2$, $s(0)=0$. Find $v$ and $s$.",
          solution: "$v=\\int(6t-4)dt=3t^2-4t+C$; $v(0)=2\\Rightarrow C=2$, so $v=3t^2-4t+2$. Then $s=\\int(3t^2-4t+2)dt=t^3-2t^2+2t$.",
        },
      },
      questions: [
        {
          id: "edxifm-m2k-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Given acceleration $a(t)$, velocity is found by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiplying $a$ by $t$" },
              { id: "b", text: "Integrating $a$ with respect to $t$" },
              { id: "c", text: "Differentiating $a$" },
              { id: "d", text: "Using SUVAT" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Kinematics", statement: "$v=\\int a\\,dt+C$." }],
            steps: [{ reasoning: "Acceleration is derivative of velocity.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** integrating",
          },
        },
        {
          id: "edxifm-m2k-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle has $a=4t$, $v(0)=1$, $s(0)=0$. Find $v(t)$ and the displacement at $t=2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Integration", statement: "Integrate twice with constants." }],
            steps: [
              { reasoning: "$v=\\int4t\\,dt=2t^2+C$; $v(0)=1\\Rightarrow C=1$, $v=2t^2+1$.", working: "v=2t^2+1", marks: 1, markCode: "M" },
              { reasoning: "$s=\\int(2t^2+1)dt=\\frac{2t^3}{3}+t$.", working: "s=2t^3/3+t", marks: 1, markCode: "M" },
              { reasoning: "$s(2)=\\frac{16}{3}+2=\\frac{22}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v=2t^2+1$, $s(2)=\\frac{22}{3}$",
            commonErrors: ["Losing the constant of integration."],
          },
        },
        {
          id: "edxifm-m2k-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle moves with $v=3t^2-12t+9$. Find the times when it is instantaneously at rest and the displacement between $t=0$ and $t=3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rest and displacement", statement: "Set $v=0$; integrate $v$ for $\\Delta s$." }],
            steps: [
              { reasoning: "$v=3(t^2-4t+3)=3(t-1)(t-3)$; rest at $t=1$ and $t=3$.", working: "t=1,3", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta s=\\int_0^3(3t^2-12t+9)dt=[t^3-6t^2+9t]_0^3=27-54+27=0$.", working: "0", marks: 1, markCode: "M" },
              { reasoning: "Displacement is zero — particle returns to start.", marks: 1, markCode: "A" },
              { reasoning: "Note distance travelled is nonzero (reverses at $t=1$).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Rest at $t=1,3$; displacement $0$",
            commonErrors: ["Confusing displacement with distance."],
          },
        },
        {
          id: "edxifm-m2k-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle has acceleration $a=\\frac{6}{t^2}$ for $t\\ge1$, with $v(1)=3$ and $s(1)=0$.",
          parts: [
            { label: "a", prompt: "Find $v(t)$.", marks: 3 },
            { label: "b", prompt: "Find $s(t)$.", marks: 3 },
            { label: "c", prompt: "Find the displacement between $t=1$ and $t=3$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Integration with conditions", statement: "Apply initial conditions to fix constants." }],
            steps: [
              { part: "a", reasoning: "$v=\\int6t^{-2}dt=-\\frac{6}{t}+C$; $v(1)=3\\Rightarrow-6+C=3\\Rightarrow C=9$.", working: "v=9-6/t", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$v=9-\\frac{6}{t}$.", working: "v(t)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $v$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$s=\\int(9-6t^{-1})dt=9t-6\\ln t+C_2$; $s(1)=0\\Rightarrow9-0+C_2=0\\Rightarrow C_2=-9$.", working: "C2=-9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$s=9t-6\\ln t-9$.", working: "s(t)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State $s$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\Delta s=s(3)-s(1)=9(3)-6\\ln3-9-0=18-6\\ln3$.", working: "18-6ln3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\approx18-6(1.0986)=18-6.59=11.41$.", working: "11.41", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State exact and approximate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $v=9-\\frac6t$ (b) $s=9t-6\\ln t-9$ (c) $18-6\\ln3\\approx11.41$",
            commonErrors: ["Log integration; constant of integration."],
          },
        },
      ],
    },
    {
      id: "edxifm-u5-var-adv",
      title: "Velocity as a function of displacement",
      skill: "Use $a=v\\frac{dv}{ds}$ and related techniques for motion where $v$ is given in terms of $s$.",
      lesson: {
        sections: [
          {
            heading: "The chain rule relation",
            body: "$a=\\frac{dv}{dt}=\\frac{dv}{ds}\\cdot\\frac{ds}{dt}=v\\frac{dv}{ds}$. When $v=v(s)$, multiply both sides by $v$? Standard trick: $v\\frac{dv}{ds}=\\frac12\\frac{d}{ds}(v^2)$, so $\\int a\\,ds=\\frac12v^2$ gives a 'work-energy'-like relation.",
          },
          {
            heading: "Solving for motion",
            body: "If $v^2=f(s)$, find where $v=0$ (turning points), determine direction changes, and integrate $\\frac{ds}{dt}=v(s)$ (often separable) for $t$ as a function of $s$.",
          },
          {
            heading: "Projectile-like problems",
            body: "For motion under gravity with air resistance or position-dependent forces, set up $v\\frac{dv}{ds}$ equations componentwise.",
          },
        ],
        keyFormulas: [
          { name: "Chain rule", statement: "$a=v\\frac{dv}{ds}=\\frac{d}{ds}\\left(\\frac{v^2}{2}\\right)$" },
          { name: "Time from position", statement: "$t=\\int\\frac{ds}{v(s)}$" },
        ],
        workedExample: {
          problem: "A particle has $v^2=4s+9$. Find acceleration in terms of $s$.",
          solution: "$\\frac{d}{ds}(\\frac{v^2}{2})=\\frac{d}{ds}(2s+\\frac92)=2$, so $a=2$ m/s² constant.",
        },
      },
      questions: [
        {
          id: "edxifm-m2v-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The relation $a=v\\frac{dv}{ds}$ follows from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The chain rule applied to $\\frac{dv}{dt}$" },
              { id: "b", text: "The product rule" },
              { id: "c", text: "Integration by parts" },
              { id: "d", text: "Newton's second law" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Chain rule", statement: "$\\frac{dv}{dt}=\\frac{dv}{ds}\\cdot\\frac{ds}{dt}=v\\frac{dv}{ds}$." }],
            steps: [{ reasoning: "Direct application.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** chain rule",
          },
        },
        {
          id: "edxifm-m2v-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle has $v^2=6s+4$. Find its acceleration as a function of $s$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chain rule", statement: "$a=\\frac{d}{ds}(\\frac{v^2}{2})$." }],
            steps: [
              { reasoning: "$\\frac{v^2}{2}=3s+2$; $\\frac{d}{ds}(3s+2)=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "$a=3$ (constant).", working: "a=3", marks: 1, markCode: "M" },
              { reasoning: "State $a=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=3$",
            commonErrors: ["Differentiating $v^2$ instead of $\\frac{v^2}{2}$."],
          },
        },
        {
          id: "edxifm-m2v-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle moves with $v^2=9-4s$ for $0\\le s\\le\\frac94$. Find the maximum displacement and the value of $v$ at $s=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Turning point", statement: "$v=0$ when $v^2=0$." }],
            steps: [
              { reasoning: "$v=0\\Rightarrow9-4s=0\\Rightarrow s=\\frac94$ — maximum displacement.", working: "9/4", marks: 1, markCode: "M" },
              { reasoning: "At $s=0$: $v^2=9\\Rightarrow v=\\pm3$; take $v=3$ if moving positive direction.", working: "v=3", marks: 1, markCode: "M" },
              { reasoning: "State results.", marks: 1, markCode: "A" },
              { reasoning: "Note particle decelerates to rest at $s=\\frac94$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Max $s=\\frac94$; $v(0)=3$",
            commonErrors: ["Sign of $v$; wrong turning point."],
          },
        },
        {
          id: "edxifm-m2v-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle of mass $m$ moves under a resisting force so that $v\\frac{dv}{ds}=-kv^2$ with $k>0$ constant, starting with $v=u$ at $s=0$.",
          parts: [
            { label: "a", prompt: "Show that $\\frac{dv}{ds}=-kv$.", marks: 3 },
            { label: "b", prompt: "Solve for $v$ in terms of $s$.", marks: 4 },
            { label: "c", prompt: "Find the distance travelled when $v=\\frac{u}{2}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Separation", statement: "Divide by $v$ and integrate." }],
            steps: [
              { part: "a", reasoning: "$v\\frac{dv}{ds}=-kv^2$; divide by $v$ (valid while $v\\ne0$): $\\frac{dv}{ds}=-kv$.", working: "dv/ds=-kv", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State result.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Note assumption $v>0$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Separate: $\\frac{dv}{v}=-k\\,ds$; integrate: $\\ln v=-ks+C$.", working: "ln v", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$ln v=\\ln u-ks$ (using $v(0)=u$), so $v=ue^{-ks}$.", working: "v=ue^{-ks}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State solution.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify at $s=0$: $v=u$ ✓.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{u}{2}=ue^{-ks}\\Rightarrow e^{-ks}=\\frac12\\Rightarrow ks=\\ln2$.", working: "ks=ln2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$s=\\frac{\\ln2}{k}$.", working: "ln2/k", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State distance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{dv}{ds}=-kv$ (b) $v=ue^{-ks}$ (c) $s=\\frac{\\ln2}{k}$",
            commonErrors: ["Dividing by $v$ carelessly; sign errors."],
          },
        },
      ],
    },
  ],
};
