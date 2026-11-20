import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edial-maths-u5-lesson-5-2",
  code: "5-2",
  title: "Dynamics: Forces, Friction and Momentum",
  goal: "I CAN apply Newton's laws to particles on planes and connected particles, use friction F=μR, and apply conservation of momentum.",
  standards: ["WME01 M1", "Dynamics", "Momentum"],
  vocabulary: [
    {
      term: "Newton's first law",
      definition:
        "A particle remains at rest or in uniform motion unless acted on by a resultant force.",
    },
    {
      term: "Newton's second law",
      definition:
        "$\\mathbf{F}=m\\mathbf{a}$ — the resultant force equals mass times acceleration.",
    },
    {
      term: "Newton's third law",
      definition: "For every action there is an equal and opposite reaction.",
    },
    {
      term: "Friction",
      definition:
        "A force opposing motion; for a moving particle the limiting friction is $F=\\mu R$ where $R$ is the normal reaction.",
    },
    {
      term: "Momentum",
      definition:
        "$\\mathbf{p}=m\\mathbf{v}$; impulse is the change in momentum, equal to the resultant force times time.",
    },
    {
      term: "Conservation of momentum",
      definition:
        "In the absence of external forces, total momentum before and after a collision or separation is equal.",
    },
  ],
  concepts: [
    {
      id: "edial-maths-u5-newton-friction",
      title: "Newton's laws, connected particles and friction",
      skill:
        "Resolve forces, apply $F=ma$ to particles on horizontal surfaces, inclined planes and connected systems, and use $F=\\mu R$ for friction.",
      lesson: {
        sections: [
          {
            heading: "Newton's second law",
            body: "Draw a clear diagram with all forces labelled. Resolve horizontally and vertically; apply $F=ma$ in the direction of motion. For a particle on a **smooth** plane there is no friction; on a **rough** plane friction $F=\\mu R$ acts opposite to motion or tendency to move, where $R$ is the normal reaction.",
          },
          {
            heading: "Inclined planes",
            body: "Resolve the weight $mg$ into components parallel and perpendicular to the plane: $mg\\sin\\theta$ down the plane and $mg\\cos\\theta$ into the plane. The normal reaction on a smooth plane is $R=mg\\cos\\theta$.",
          },
          {
            heading: "Connected particles and pulleys",
            body: "For two particles joined by a light inextensible string over a smooth pulley, they have the same acceleration magnitude. Write $F=ma$ for each particle in the direction of its motion and solve simultaneously — the tension is internal and cancels when equations are added.",
          },
        ],
        keyFormulas: [
          {
            name: "Newton's second law",
            statement:
              "$F=ma$ (resultant force $=$ mass $\\times$ acceleration)",
          },
          { name: "Friction", statement: "$F=\\mu R$" },
          {
            name: "Incline resolution",
            statement:
              "Parallel: $mg\\sin\\theta$; perpendicular: $R=mg\\cos\\theta$",
          },
        ],
        workedExample: {
          problem:
            "A particle of mass $5$ kg on a rough horizontal plane ($\\mu=0.3$) is pulled by a $20$ N horizontal force. Find its acceleration ($g=9.8$).",
          solution:
            "Vertically: $R=mg=49$ N. Friction $F=\\mu R=0.3\\times49=14.7$ N opposing motion. Resultant $=20-14.7=5.3$ N. So $a=\\frac{5.3}{5}=1.06$ m/s$^2$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u5-newt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A resultant force of $30$ N acts on a mass of $6$ kg. What is the acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ m/s$^2$" },
              { id: "b", text: "$180$ m/s$^2$" },
              { id: "c", text: "$0.2$ m/s$^2$" },
              { id: "d", text: "$36$ m/s$^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement: "$F=ma$.",
              },
            ],
            steps: [
              {
                reasoning: "$a=\\frac{F}{m}=\\frac{30}{6}=5$ m/s$^2$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $5$ m/s$^2$",
            commonErrors: ["Multiplying $F$ by $m$ instead of dividing."],
          },
        },
        {
          id: "edial-maths-u5-newt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle of mass $4$ kg rests on a smooth horizontal plane and is pulled by a $20$ N force at $30^\\circ$ to the horizontal. Find its acceleration ($g=9.8$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement:
                  "$F=ma$ applied to the horizontal component of the force.",
              },
            ],
            steps: [
              {
                reasoning: "Resolve the force horizontally.",
                working:
                  "F_x=20\\cos30^\\circ=10\\sqrt3\\approx17.32\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The plane is smooth, so no friction; vertical forces balance (normal reaction adjusts).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Apply $F=ma$ horizontally.",
                working:
                  "a=\\frac{10\\sqrt3}{4}=2.5\\sqrt3\\approx4.33\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$a=2.5\\sqrt3\\approx4.33$ m/s$^2$",
            commonErrors: [
              "Using the full $20$ N instead of the horizontal component.",
              "Including friction on a smooth plane.",
            ],
          },
        },
        {
          id: "edial-maths-u5-newt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two particles of masses $3$ kg and $5$ kg are connected by a light inextensible string passing over a smooth pulley. The $5$ kg particle hangs vertically and the $3$ kg particle rests on a smooth horizontal table.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement:
                  "$F=ma$ for each particle; same acceleration for a taut inextensible string.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For the $5$ kg particle (down positive): $5g-T=5a$.",
                working: "5g-T=5a",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For the $3$ kg particle on the smooth table: $T=3a$.",
                working: "T=3a",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve simultaneously.",
                working: "5g-3a=5a\\Rightarrow a=\\frac{5g}{8}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "With $g=9.8$: $a=6.125$ m/s$^2$.",
                working: "a=\\frac{49}{8}=6.125\\text{ m/s}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$a=6.125$ m/s$^2$",
            commonErrors: [
              "Including friction on the smooth table.",
              "Writing $5g+T$ instead of $5g-T$.",
            ],
          },
        },
        {
          id: "edial-maths-u5-newt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle of mass $2$ kg is on a rough horizontal plane with coefficient of friction $0.4$. It is pulled by a $15$ N force at $25^\\circ$ above the horizontal. Take $g=9.8$.",
          parts: [
            {
              label: "a",
              prompt:
                "Resolve the pulling force into horizontal and vertical components.",
              marks: 2,
            },
            { label: "b", prompt: "Find the normal reaction $R$.", marks: 3 },
            {
              label: "c",
              prompt:
                "Find the friction force and hence the acceleration of the particle.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Newton's second law",
                statement:
                  "$F=ma$ horizontally and vertically (no vertical acceleration).",
              },
              {
                kind: "formula",
                name: "Friction",
                statement: "$F=\\mu R$ opposing motion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Horizontal component.",
                working: "15\\cos25^\\circ\\approx13.59\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Vertical component (upward, reducing the normal reaction).",
                working: "15\\sin25^\\circ\\approx6.34\\text{ N}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Vertically there is no acceleration: $R+15\\sin25^\\circ=mg$.",
                working: "R+6.34=2\\times9.8=19.6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve for $R$.",
                working: "R=19.6-6.34=13.26\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "State $R$.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning:
                  "Friction $=\\mu R=0.4\\times13.26=5.30$ N opposing motion.",
                working: "F=0.4\\times13.26=5.30\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Resultant horizontal force $=13.59-5.30=8.29$ N.",
                working: "F_{\\text{res}}=13.59-5.30=8.29\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Apply $F=ma$.",
                working: "a=\\frac{8.29}{2}=4.15\\text{ m/s}^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the acceleration.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Check the particle does move forward (resultant positive).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $13.6$ N horizontal, $6.34$ N vertical (b) $R\\approx13.3$ N (c) friction $\\approx5.30$ N, $a\\approx4.15$ m/s$^2$",
            commonErrors: [
              "Using $R=mg$ without subtracting the upward component.",
              "Adding friction instead of subtracting it.",
              "Rounding too early.",
            ],
            examinerNote:
              "Answers depend on $g=9.8$; accept $a\\approx4.1$–$4.2$ m/s$^2$.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u5-momentum",
      title: "Momentum, impulse and collisions",
      skill:
        "Apply conservation of momentum to direct collisions and use impulse to analyse forces during impact.",
      lesson: {
        sections: [
          {
            heading: "Momentum and impulse",
            body: "Momentum $\\mathbf{p}=m\\mathbf{v}$. **Impulse** is the change in momentum: $\\text{impulse}=F\\Delta t=\\Delta(mv)$. For a collision or explosion in one dimension, work in a consistent positive direction.",
          },
          {
            heading: "Conservation of momentum",
            body: "With no external horizontal forces, total momentum is conserved: $m_1u_1+m_2u_2=m_1v_1+m_2v_2$. For a particle hitting a fixed wall and rebounding, $v=-u$ and the impulse is $m(v-u)=-2mu$.",
          },
          {
            heading: "Coefficient of restitution",
            body: "For direct collisions, $e=\\frac{\\text{relative speed of separation}}{\\text{relative speed of approach}}$. $e=1$ perfectly elastic, $e=0$ perfectly inelastic (particles move together). M1 requires $e$ only implicitly through velocity relations.",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$p=mv$" },
          { name: "Impulse", statement: "$F\\Delta t=\\Delta(mv)$" },
          {
            name: "Conservation",
            statement: "$m_1u_1+m_2u_2=m_1v_1+m_2v_2$ (no external force)",
          },
        ],
        workedExample: {
          problem:
            "A $2$ kg ball moving at $6$ m/s hits a wall and rebounds at $4$ m/s. Find the impulse on the ball.",
          solution:
            "Take the initial direction as positive: $u=6$, $v=-4$. Impulse $=m(v-u)=2(-4-6)=2(-10)=-20$ N s, i.e. magnitude $20$ N s directed away from the wall.",
        },
      },
      questions: [
        {
          id: "edial-maths-u5-mom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A particle of mass $3$ kg moves at $5$ m/s. What is its momentum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$ kg m/s" },
              { id: "b", text: "$1.67$ kg m/s" },
              { id: "c", text: "$8$ kg m/s" },
              { id: "d", text: "$-15$ kg m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Momentum", statement: "$p=mv$." },
            ],
            steps: [
              {
                reasoning: "$p=3\\times5=15$ kg m/s.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $15$ kg m/s",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "edial-maths-u5-mom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two particles of masses $2$ kg and $3$ kg move towards each other at $4$ m/s and $1$ m/s respectively and collide. After the collision they move together. Find their common velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of momentum",
                statement:
                  "Total momentum before equals total momentum after (perfectly inelastic collision).",
              },
            ],
            steps: [
              {
                reasoning: "Take the $2$ kg particle's direction as positive.",
                working: "p_{\\text{before}}=2(4)+3(-1)=8-3=5\\text{ kg m/s}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After collision they move together with velocity $v$.",
                working: "p_{\\text{after}}=(2+3)v=5v",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working:
                  "5v=5\\Rightarrow v=1\\text{ m/s in the original positive direction}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$v=1$ m/s in the direction of the $2$ kg particle",
            commonErrors: [
              "Ignoring the direction of the $3$ kg particle.",
              "Using $v_1+v_2$ instead of conserving momentum.",
            ],
          },
        },
        {
          id: "edial-maths-u5-mom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball of mass $0.5$ kg moving at $12$ m/s strikes a wall perpendicularly and rebounds at $8$ m/s. The contact lasts $0.02$ seconds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Impulse",
                statement: "$F\\Delta t=\\Delta(mv)=m(v-u)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Take the incoming direction as positive: $u=12$, $v=-8$.",
                working: "\\Delta v=-8-12=-20\\text{ m/s}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Impulse $=m\\Delta v=0.5\\times(-20)=-10$ N s.",
                working: "J=-10\\text{ N s}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Average force $=\\frac{J}{\\Delta t}=\\frac{-10}{0.02}=-500$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State magnitude and direction.",
                working:
                  "|F|=500\\ \\mathrm{N}\\ \\text{directed away from the wall}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Impulse $=10$ N s (away from wall); average force $=500$ N",
            commonErrors: [
              "Using $v-u=8-12=-4$ (forgetting the rebound reverses direction).",
              "Reporting the force as negative without interpretation.",
            ],
          },
        },
        {
          id: "edial-maths-u5-mom-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A projectile of mass $0.2$ kg is fired horizontally at $30$ m/s from a cliff $45$ m above the sea. It hits the water and its horizontal velocity is unchanged; ignore air resistance and take $g=9.8$.",
          parts: [
            { label: "a", prompt: "Find the time of flight.", marks: 2 },
            {
              label: "b",
              prompt:
                "Find the velocity of the projectile just before hitting the water.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Find the impulse on the projectile during the impact, given it stops in $0.15$ s.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Find the average force exerted by the water on the projectile.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kinematics",
                statement:
                  "Vertical motion: $s=\\frac12gt^2$ from rest vertically; horizontal velocity constant.",
              },
              {
                kind: "formula",
                name: "Impulse",
                statement: "$J=m(v-u)$, $F=\\frac{J}{\\Delta t}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vertical fall $45=\\frac12(9.8)t^2$.",
                working:
                  "t^2=\\frac{90}{9.8}=9.184\\Rightarrow t\\approx3.03\\text{ s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the time.",
                working: "t\\approx3.03\\text{ s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Vertical velocity on impact: $v_y=gt=9.8\\times3.03\\approx29.7$ m/s downward.",
                working: "v_y=gt\\approx29.7\\text{ m/s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Horizontal velocity is unchanged: $v_x=30$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Combine: $v=\\sqrt{30^2+29.7^2}\\approx42.2$ m/s at angle $\\arctan(\\frac{29.7}{30})\\approx44.7^\\circ$ below horizontal.",
                working: "v\\approx42.2\\text{ m/s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Take the impact velocity direction as positive; final velocity $0$.",
                working: "J=m(v-u)=0.2(0-42.2)=-8.44\\text{ N s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Magnitude of impulse.",
                working: "|J|\\approx8.44\\text{ N s}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Direction: opposite to the velocity (upward and backwards).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Average force $=\\frac{|J|}{\\Delta t}=\\frac{8.44}{0.15}$.",
                working: "F\\approx56.3\\text{ N}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State the force.",
                working: "F\\approx56\\text{ N}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $t\\approx3.03$ s (b) $v\\approx42.2$ m/s at $\\approx45^\\circ$ below horizontal (c) impulse $\\approx8.44$ N s opposing motion (d) $F\\approx56$ N",
            commonErrors: [
              "Ignoring the horizontal component in (b)–(d).",
              "Using mass $0.2$ kg inconsistently.",
              "Sign errors in impulse.",
            ],
            examinerNote:
              "The projectile motion here is 2D but M1 kinematics is 1D — treat vertical and horizontal separately; the momentum calculation uses the speed at impact.",
          },
        },
      ],
    },
  ],
};
