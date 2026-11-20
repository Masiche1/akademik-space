import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edxifm-u5-lesson-5-3",
  code: "5-3",
  title: "Impulse, Momentum and Collisions",
  goal: "I CAN apply conservation of momentum, the impulse-momentum principle, and analyse elastic and inelastic collisions in one and two dimensions.",
  standards: ["WME02 M2", "Momentum"],
  vocabulary: [
    { term: "Momentum", definition: "$p=mv$; vector quantity." },
    { term: "Impulse", definition: "Force-time integral $J=\\int F\\,dt=\\Delta p$; for constant force $J=Ft$." },
    { term: "Conservation of momentum", definition: "Total momentum constant when no external force acts." },
    { term: "Coefficient of restitution", definition: "$e=\\frac{\\text{relative speed of separation}}{\\text{relative speed of approach}}$; $e=1$ elastic, $e=0$ inelastic (perfectly)." },
  ],
  concepts: [
    {
      id: "edxifm-u5-impulse",
      title: "Impulse and momentum",
      skill: "Apply impulse-momentum theorem and conservation of momentum to collisions and explosions.",
      lesson: {
        sections: [
          {
            heading: "Impulse-momentum theorem",
            body: "$J=\\int F\\,dt=mv-u m=\\Delta p$. For a force–time graph, impulse is the area under the curve. A particle struck by force $F(t)$ gains momentum equal to the impulse.",
          },
          {
            heading: "Conservation of momentum",
            body: "In collisions/explosions with no external horizontal force: $m_1u_1+m_2u_2=m_1v_1+m_2v_2$. For an explosion, total momentum before = after (often zero).",
          },
          {
            heading: "Newton's third law pairs",
            body: "Colliding particles exert equal and opposite impulses: $J_1=-J_2$, so momentum changes are equal and opposite — this underlies momentum conservation.",
          },
        ],
        keyFormulas: [
          { name: "Impulse", statement: "$J=\\Delta p=mv-mu$" },
          { name: "Conservation", statement: "$m_1u_1+m_2u_2=m_1v_1+m_2v_2$" },
        ],
        workedExample: {
          problem: "A $0.5$ kg ball moving at $6$ m/s is struck by a bat for $0.02$ s, leaving at $10$ m/s opposite direction. Find average force.",
          solution: "$\\Delta p=0.5(-10)-0.5(6)=-8$ kg m/s; $F=\\frac{-8}{0.02}=-400$ N, magnitude $400$ N opposing original motion.",
        },
      },
      questions: [
        {
          id: "edxifm-im-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Impulse equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change in momentum" },
              { id: "b", text: "Change in KE" },
              { id: "c", text: "Force × distance" },
              { id: "d", text: "Mass × velocity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Impulse", statement: "$J=\\Delta p$." }],
            steps: [{ reasoning: "Impulse-momentum theorem.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** change in momentum",
          },
        },
        {
          id: "edxifm-im-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $2$ kg object moving at $5$ m/s collides with a stationary $3$ kg object; they move together after. Find common velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conservation", statement: "$m_1u_1=(m_1+m_2)v$." }],
            steps: [
              { reasoning: "$2\\times5=(2+3)v\\Rightarrow v=2$ m/s.", working: "v=2", marks: 1, markCode: "M" },
              { reasoning: "State velocity.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ m/s",
            commonErrors: ["Forgetting masses sum."],
          },
        },
        {
          id: "edxifm-im-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A force $F=6t$ N acts on a $3$ kg particle initially at rest for $2$ s. Find its final velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Impulse integral", statement: "$J=\\int F\\,dt=\\Delta p$." }],
            steps: [
              { reasoning: "$J=\\int_0^2 6t\\,dt=3t^2\\big|_0^2=12$ N s.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta p=12=3v-0\\Rightarrow v=4$ m/s.", working: "v=4", marks: 1, markCode: "M" },
              { reasoning: "State velocity.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ m/s",
            commonErrors: ["Using $Ft$ with variable $F$."],
          },
        },
        {
          id: "edxifm-im-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two smooth spheres of masses $m_1=2$ kg and $m_2=3$ kg approach head-on with speeds $u_1=5$ m/s and $u_2=4$ m/s. After collision $m_1$ moves at $v_1=1$ m/s in its original direction.",
          parts: [
            { label: "a", prompt: "Use conservation of momentum to find $v_2$ and its direction.", marks: 4 },
            { label: "b", prompt: "Find the coefficient of restitution.", marks: 3 },
            { label: "c", prompt: "State whether the collision is elastic.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Momentum", statement: "Take positive direction as $m_1$'s initial motion." },
              { kind: "formula", name: "Restitution", statement: "$e=\\frac{v_2-v_1}{u_1+u_2}$ for head-on." },
            ],
            steps: [
              { part: "a", reasoning: "Take $m_1$ direction positive: $m_1$ initial $+10$, $m_2$ initial $-12$. After: $m_1$ at $+1\\Rightarrow p_1=+2$; let $m_2$ final $=3v_2$.", working: "momenta", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$10-12=2+3v_2\\Rightarrow3v_2=-4\\Rightarrow v_2=-\\frac43$ m/s (negative = opposite to $m_1$'s original direction).", working: "v2=-4/3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $v_2=\\frac43$ m/s opposite direction.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check total momentum $-2=-2$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Approach speed $=5+4=9$; separation speed $=|v_2-v_1|=|-\\frac43-1|=\\frac73$.", working: "sep 7/3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$e=\\frac{7/3}{9}=\\frac{7}{27}\\approx0.259$.", working: "e=7/27", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State $e$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$e<1$ so KE is lost — inelastic.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State inelastic.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $v_2=\\frac43$ m/s opposite (b) $e=\\frac{7}{27}$ (c) inelastic",
            commonErrors: ["Sign conventions; restitution formula."],
          },
        },
      ],
    },
    {
      id: "edxifm-u5-collisions",
      title: "Elastic collisions and restitution",
      skill: "Solve elastic and partially elastic collision problems in 1D and 2D.",
      lesson: {
        sections: [
          {
            heading: "1D collisions",
            body: "Two equations: momentum conservation and $v_2-v_1=-e(u_2-u_1)$ (restitution). For elastic ($e=1$) in 1D, relative velocity reverses. Solve simultaneously for $v_1,v_2$.",
          },
          {
            heading: "2D collisions",
            body: "Momentum conserved componentwise. If collision is smooth (frictionless contact), velocity components along the line of centres obey restitution; tangential components unchanged. Angle of incidence = angle of reflection for smooth elastic collision.",
          },
          {
            heading: "Loss of KE",
            body: "KE lost $=\\frac12m_1u_1^2+\\frac12m_2u_2^2-\\frac12m_1v_1^2-\\frac12m_2v_2^2$; always $\\ge0$, zero only when $e=1$ (and only in 1D elastic cases).",
          },
        ],
        keyFormulas: [
          { name: "Restitution", statement: "$v_2-v_1=-e(u_2-u_1)$" },
          { name: "KE loss", statement: "$\\Delta KE=\\frac12\\sum m(u^2-v^2)$" },
        ],
        workedExample: {
          problem: "Two equal masses collide elastically in 1D; $m_1$ at $3$ m/s hits stationary $m_2$. Find velocities after.",
          solution: "$e=1$: $v_2-v_1=-(0-3)=3$; momentum: $3=v_1+v_2$. Solve: $v_1=0$, $v_2=3$ — velocities exchanged.",
        },
      },
      questions: [
        {
          id: "edxifm-col-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a perfectly elastic collision, $e=$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$0.5$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Restitution", statement: "$e=1$ elastic." }],
            steps: [{ reasoning: "Standard.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $1$",
          },
        },
        {
          id: "edxifm-col-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two equal masses collide elastically in 1D; one is stationary. Describe the outcome.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Elastic equal masses", statement: "Velocities exchanged." }],
            steps: [
              { reasoning: "Momentum: $u=v_1+v_2$; restitution: $v_2-v_1=u$.", working: "eqns", marks: 1, markCode: "M" },
              { reasoning: "Solve: $v_1=0$, $v_2=u$ — exchange.", working: "exchange", marks: 1, markCode: "M" },
              { reasoning: "State result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Velocities exchanged",
            commonErrors: ["Not using both equations."],
          },
        },
        {
          id: "edxifm-col-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $1$ kg mass at $4$ m/s collides with a stationary $2$ kg mass with $e=\\frac12$. Find both final velocities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Collision equations", statement: "Momentum + restitution." },
            ],
            steps: [
              { reasoning: "Momentum: $4=v_1+2v_2$.", working: "mom", marks: 1, markCode: "M" },
              { reasoning: "Restitution: $v_2-v_1=-\\frac12(0-4)=2$.", working: "v2-v1=2", marks: 1, markCode: "M" },
              { reasoning: "Solve: $v_1=4-2v_2$; $v_2-(4-2v_2)=2\\Rightarrow3v_2=6\\Rightarrow v_2=2$, $v_1=0$.", working: "v1=0,v2=2", marks: 1, markCode: "M" },
              { reasoning: "State velocities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v_1=0$, $v_2=2$ m/s",
            commonErrors: ["Restitution sign errors."],
          },
        },
        {
          id: "edxifm-col-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A smooth ball $A$ moving at $u$ strikes a stationary smooth ball $B$ of equal mass. The collision is elastic and the line of centres makes angle $\\theta$ with $A$'s original direction.",
          parts: [
            { label: "a", prompt: "Resolve momentum along and perpendicular to the line of centres.", marks: 4 },
            { label: "b", prompt: "Apply restitution along the line of centres.", marks: 3 },
            { label: "c", prompt: "Show the balls move off at right angles after collision.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "2D collision", statement: "Components along/perpendicular to line of centres." },
              { kind: "formula", name: "Smooth collision", statement: "Tangential components unchanged." },
            ],
            steps: [
              { part: "a", reasoning: "Along line of centres: $A$ has component $u\\cos\\theta$; $B$ stationary. Perpendicular: $A$ has $u\\sin\\theta$.", working: "components", marks: 1, markCode: "M" },
              { part: "a", reasoning: "After: $A$ keeps tangential component $u\\sin\\theta$; $B$ moves along line of centres only.", working: "tangential", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State resolutions.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Note $B$'s velocity is along line of centres.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Restitution $e=1$: relative velocity along centres reverses; equal masses exchange normal components: $A$'s normal component becomes $0$, $B$ gets $u\\cos\\theta$.", working: "exchange", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So $A$ moves with $u\\sin\\theta$ perpendicular to centres; $B$ with $u\\cos\\theta$ along centres.", working: "velocities", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State results.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$A$'s direction is perpendicular to line of centres; $B$'s is along it — hence $90°$ apart.", working: "90 deg", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State right angle.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Balls move off at $90°$",
            commonErrors: ["Ignoring component resolution."],
            examinerNote: "Classic result: equal-mass elastic collision gives 90° separation.",
          },
        },
      ],
    },
  ],
};
