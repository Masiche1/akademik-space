import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "phys11-u1-lesson-1-3",
  code: "1-3",
  title: "Momentum",
  goal: "I CAN calculate momentum and impulse, explain how longer collision times reduce force, and use conservation of momentum in collisions and explosions.",
  standards: ["HS-PS2-2", "HS-PS2-3", "SEP: Using Mathematics and Computational Thinking", "SEP: Constructing Explanations and Designing Solutions", "CCC: Systems and System Models"],
  vocabulary: [
    { term: "Momentum", definition: "A vector equal to mass times velocity, $p = mv$, measured in $\\text{kg}\\cdot\\text{m/s}$." },
    { term: "Impulse", definition: "The product of the net force and the time it acts, $J = F\\Delta t$, equal to the change in momentum." },
    { term: "Isolated system", definition: "A system on which the net external force is zero, so its total momentum stays constant." },
    { term: "Elastic collision", definition: "A collision in which both momentum and kinetic energy are conserved." },
    { term: "Inelastic collision", definition: "A collision in which momentum is conserved but some kinetic energy is transformed to other forms such as thermal energy." },
    { term: "Explosion", definition: "An interaction in which objects initially together push apart, converting stored energy into kinetic energy." },
  ],
  concepts: [
    {
      id: "phys11-u1-impulse",
      title: "Momentum, impulse and collision safety",
      skill: "Calculate momentum and impulse, use $F\\Delta t = \\Delta p$, and explain how safety devices reduce collision forces.",
      lesson: {
        sections: [
          {
            heading: "Momentum and impulse",
            body: "Momentum is $p = mv$. It is a vector, so velocity direction matters: use a sign for direction in one dimension.\n\nNewton's second law can be written as $F_{net} = \\frac{\\Delta p}{\\Delta t}$. Rearranging gives the **impulse-momentum theorem**: $J = F\\Delta t = \\Delta p = m(v_f - v_i)$. Impulse has units $\\text{N}\\cdot\\text{s}$, which equal $\\text{kg}\\cdot\\text{m/s}$.",
          },
          {
            heading: "Making collisions safer",
            body: "For a given change in momentum, the average force is $F = \\frac{\\Delta p}{\\Delta t}$. Increasing the collision time reduces the force. Airbags, crumple zones, padded dashboards, bike helmets and bending your knees when landing all increase the stopping time and so lower the force on the body, even though the change in momentum is the same.",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$p = mv$" },
          { name: "Impulse-momentum theorem", statement: "$F\\Delta t = \\Delta p = m(v_f - v_i)$" },
          { name: "Average force", statement: "$F = \\frac{\\Delta p}{\\Delta t}$" },
        ],
        workedExample: {
          problem: "A $0.058\\ \\text{kg}$ tennis ball moving at $30\\ \\text{m/s}$ is stopped by a net in $0.020\\ \\text{s}$. Find the average force on the ball.",
          solution: "$\\Delta p = m(v_f - v_i) = 0.058(0 - 30) = -1.74\\ \\text{kg}\\cdot\\text{m/s}$. Then $F = \\frac{\\Delta p}{\\Delta t} = \\frac{-1.74}{0.020} = -87\\ \\text{N}$. The force has a magnitude of $87\\ \\text{N}$, opposite to the ball's motion.",
        },
      },
      questions: [
        {
          id: "phys11-u1-impulse-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a correct unit for impulse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{N}\\cdot\\text{s}$" },
              { id: "b", text: "$\\text{kg}\\cdot\\text{m/s}^2$" },
              { id: "c", text: "$\\text{J/s}$" },
              { id: "d", text: "$\\text{N}\\cdot\\text{m}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Impulse", statement: "$J = F\\Delta t$, so its unit is $\\text{N}\\cdot\\text{s}$ (equal to $\\text{kg}\\cdot\\text{m/s}$)." },
            ],
            steps: [
              { reasoning: "Impulse is force multiplied by time, so the unit is newton-seconds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\text{N}\\cdot\\text{s}$",
            commonErrors: ["Choosing $\\text{N}\\cdot\\text{m}$, the unit of work (joule).", "Choosing $\\text{kg}\\cdot\\text{m/s}^2$, which is a newton (force)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "phys11-u1-impulse-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $1200\\ \\text{kg}$ car travels at $15\\ \\text{m/s}$. Calculate its momentum.",
          response: { type: "numeric", parts: [{ label: "Momentum", answer: 18000, unit: "kg·m/s", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Momentum", statement: "$p = mv$" },
            ],
            steps: [
              { reasoning: "Substitute mass and velocity.", working: "p = mv = (1200)(15)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "p = 18000\\text{ kg}\\cdot\\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18\\,000\\ \\text{kg}\\cdot\\text{m/s}$",
            commonErrors: ["Dividing mass by velocity.", "Using $\\frac{1}{2}mv^2$, which is kinetic energy."],
            examinerNote: "M1 for $mv$ substituted. A1 for $1.8 \\times 10^4$ with correct units.",
          },
        },
        {
          id: "phys11-u1-impulse-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $0.15\\ \\text{kg}$ baseball approaches a bat at $20\\ \\text{m/s}$ and leaves in the opposite direction at $25\\ \\text{m/s}$. The bat and ball are in contact for $0.0050\\ \\text{s}$.\n\nCalculate (i) the magnitude of the impulse on the ball and (ii) the magnitude of the average force of the bat on the ball.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) impulse", answer: 6.75, unit: "N·s", tolerance: 0.01 },
              { label: "(ii) average force", answer: 1350, unit: "N", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Impulse-momentum theorem", statement: "$F\\Delta t = \\Delta p = m(v_f - v_i)$" },
            ],
            steps: [
              { reasoning: "Take the incoming direction as positive, so the final velocity is $-25\\ \\text{m/s}$. The velocity change is $-25 - 20 = -45\\ \\text{m/s}$.", working: "\\Delta p = 0.15(-25 - 20)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the magnitude.", working: "|J| = 6.75\\text{ N}\\cdot\\text{s}", marks: 1, markCode: "A" },
              { reasoning: "Divide the impulse by the contact time.", working: "F = \\frac{J}{\\Delta t} = \\frac{6.75}{0.0050}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F = 1350\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $6.75\\ \\text{N}\\cdot\\text{s}$ (ii) $1350\\ \\text{N}$",
            commonErrors: ["Using $25 - 20 = 5\\ \\text{m/s}$ and ignoring the reversal of direction.", "Forgetting to divide by the contact time."],
            examinerNote: "Reject $\\Delta v = 5\\ \\text{m/s}$ for the first M1. Allow ecf in (ii).",
          },
        },
        {
          id: "phys11-u1-impulse-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In a crash test, a $70\\ \\text{kg}$ dummy traveling at $15\\ \\text{m/s}$ is brought to rest. In the first test there is no airbag and the dummy stops in $0.10\\ \\text{s}$ against the dashboard. In the second test an airbag extends the stopping time to $0.40\\ \\text{s}$.",
          parts: [
            { label: "a", prompt: "Calculate the magnitude of the dummy's change in momentum.", marks: 2 },
            { label: "b", prompt: "Calculate the average force on the dummy with no airbag.", marks: 2 },
            { label: "c", prompt: "Calculate the average force on the dummy with the airbag.", marks: 2 },
            { label: "d", prompt: "Explain, using the impulse-momentum theorem, why the airbag reduces the risk of injury.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Impulse-momentum theorem", statement: "$F\\Delta t = \\Delta p$, so $F = \\frac{\\Delta p}{\\Delta t}$" },
            ],
            steps: [
              { part: "a", reasoning: "The dummy goes from $15\\ \\text{m/s}$ to rest.", working: "\\Delta p = m(v_f - v_i) = 70(0 - 15)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the magnitude.", working: "|\\Delta p| = 1050\\text{ kg}\\cdot\\text{m/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the momentum change by the stopping time.", working: "F = \\frac{1050}{0.10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "F = 10\\,500\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Same momentum change, longer time.", working: "F = \\frac{1050}{0.40}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "F = 2625\\text{ N}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The change in momentum (the impulse) is the same in both tests because the dummy always goes from $15\\ \\text{m/s}$ to rest.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Since $F = \\frac{\\Delta p}{\\Delta t}$, a longer stopping time gives a smaller average force.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A smaller force on the body reduces the chance of injury (here the force falls by a factor of 4).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $1050\\ \\text{kg}\\cdot\\text{m/s}$ (b) $10\\,500\\ \\text{N}$ (c) $2625\\ \\text{N}$ (d) Same impulse, longer time, so smaller average force.",
            commonErrors: ["Saying the airbag reduces the momentum change; it does not.", "Saying the airbag reduces the impulse."],
            examinerNote: "(b) and (c) allow ecf from (a). (d) Reject 'the airbag reduces the momentum' without reference to time.",
          },
        },
      ],
    },
    {
      id: "phys11-u1-conservation-momentum",
      title: "Conservation of momentum in collisions and explosions",
      skill: "Apply conservation of momentum to one-dimensional elastic and inelastic collisions and explosions, and compare kinetic energy before and after.",
      lesson: {
        sections: [
          {
            heading: "Conservation of momentum",
            body: "For an isolated system, forces between the objects are equal and opposite (Newton's third law) and act for the same time, so the impulses cancel. The total momentum before an interaction equals the total after:\n\n$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$\n\nChoose a positive direction and give velocities in the opposite direction a negative sign.",
          },
          {
            heading: "Types of interaction",
            body: "- **Elastic collision:** momentum **and** kinetic energy are conserved. The objects bounce apart.\n- **Inelastic collision:** momentum is conserved but kinetic energy decreases (energy goes to thermal energy, sound and deformation). In a **perfectly inelastic** collision the objects stick together: $m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$.\n- **Explosion:** objects start together (often at rest, total momentum zero) and push apart. The momenta after are equal and opposite, and kinetic energy **increases** as stored energy is released.\n\nKinetic energy is $KE = \\frac{1}{2}mv^2$.",
          },
        ],
        keyFormulas: [
          { name: "Conservation of momentum", statement: "$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$" },
          { name: "Perfectly inelastic collision", statement: "$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$" },
          { name: "Kinetic energy", statement: "$KE = \\frac{1}{2}mv^2$" },
        ],
        workedExample: {
          problem: "A $2.0\\ \\text{kg}$ cart moving at $3.0\\ \\text{m/s}$ collides with a stationary $1.0\\ \\text{kg}$ cart. They stick together. Find their common velocity.",
          solution: "Momentum before: $(2.0)(3.0) + (1.0)(0) = 6.0\\ \\text{kg}\\cdot\\text{m/s}$. After: $(2.0 + 1.0)v_f = 3.0v_f$. So $v_f = \\frac{6.0}{3.0} = 2.0\\ \\text{m/s}$ in the original direction.",
        },
      },
      questions: [
        {
          id: "phys11-u1-conservation-momentum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two objects collide and stick together on a frictionless surface. Which statement is true for the system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Momentum is conserved but kinetic energy decreases." },
              { id: "b", text: "Momentum and kinetic energy are both conserved." },
              { id: "c", text: "Neither momentum nor kinetic energy is conserved." },
              { id: "d", text: "Kinetic energy is conserved but momentum decreases." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of momentum", statement: "Total momentum of an isolated system is constant, including in inelastic collisions." },
            ],
            steps: [
              { reasoning: "No external net force acts, so momentum is conserved. Sticking together is perfectly inelastic, so kinetic energy is transformed into other forms and decreases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Momentum is conserved but kinetic energy decreases.",
            commonErrors: ["Thinking energy is not conserved at all; total energy is conserved but not as kinetic energy.", "Thinking momentum is lost in inelastic collisions."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "phys11-u1-conservation-momentum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $4.0\\ \\text{kg}$ cart moving at $2.5\\ \\text{m/s}$ collides with a stationary $1.0\\ \\text{kg}$ cart. The carts stick together. Calculate their velocity after the collision.",
          response: { type: "numeric", parts: [{ label: "Final velocity", answer: 2.0, unit: "m/s", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of momentum", statement: "$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$ for objects that stick together." },
            ],
            steps: [
              { reasoning: "Total momentum before the collision.", working: "p_i = (4.0)(2.5) + (1.0)(0) = 10\\text{ kg}\\cdot\\text{m/s}", marks: 1, markCode: "M" },
              { reasoning: "Equate to momentum after, with the combined mass.", working: "10 = (4.0 + 1.0)v_f", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "v_f = 2.0\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0\\ \\text{m/s}$ in the original direction",
            commonErrors: ["Using only the mass of the moving cart on the right-hand side.", "Averaging the velocities."],
            examinerNote: "M1 for total initial momentum. M1 for combined mass on the right. A1 for $2.0\\ \\text{m/s}$.",
          },
        },
        {
          id: "phys11-u1-conservation-momentum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two skaters stand together at rest on frictionless ice. A $60\\ \\text{kg}$ skater pushes a $40\\ \\text{kg}$ skater, who moves away at $1.5\\ \\text{m/s}$.\n\nCalculate (i) the speed of the $60\\ \\text{kg}$ skater after the push and (ii) the total kinetic energy of the two skaters after the push.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) speed of 60 kg skater", answer: 1.0, unit: "m/s", tolerance: 0.01 },
              { label: "(ii) total kinetic energy", answer: 75, unit: "J", tolerance: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of momentum", statement: "The total momentum of an isolated system is constant; it starts at zero." },
              { kind: "formula", name: "Kinetic energy", statement: "$KE = \\frac{1}{2}mv^2$" },
            ],
            steps: [
              { reasoning: "Total momentum is zero before, so it is zero after: the momenta are equal and opposite.", working: "0 = (60)v + (40)(1.5)", marks: 1, markCode: "M" },
              { reasoning: "Solve; the negative sign shows the opposite direction.", working: "v = -1.0\\text{ m/s},\\ \\text{speed } 1.0\\text{ m/s}", marks: 1, markCode: "A" },
              { reasoning: "Add the kinetic energies of both skaters.", working: "KE = \\tfrac{1}{2}(60)(1.0)^2 + \\tfrac{1}{2}(40)(1.5)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "KE = 30 + 45 = 75\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $1.0\\ \\text{m/s}$ (opposite direction) (ii) $75\\ \\text{J}$",
            commonErrors: ["Giving the same speed to both skaters.", "Using $\\frac{1}{2}mv$ or forgetting to square the speed."],
            examinerNote: "Allow ecf into (ii). The kinetic energy comes from the skaters' chemical energy.",
          },
        },
        {
          id: "phys11-u1-conservation-momentum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "On a frictionless track, cart A ($2.0\\ \\text{kg}$) moves at $5.0\\ \\text{m/s}$ and collides with a stationary cart B ($3.0\\ \\text{kg}$). The carts stick together.",
          parts: [
            { label: "a", prompt: "Calculate the total momentum before the collision.", marks: 1 },
            { label: "b", prompt: "Calculate the velocity of the carts after the collision.", marks: 2 },
            { label: "c", prompt: "Calculate the kinetic energy lost in the collision.", marks: 3 },
            { label: "d", prompt: "Classify the collision and explain where the lost kinetic energy has gone.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of momentum", statement: "$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$" },
              { kind: "formula", name: "Kinetic energy", statement: "$KE = \\frac{1}{2}mv^2$" },
              { kind: "definition", name: "Inelastic collision", statement: "Momentum is conserved but kinetic energy is not." },
            ],
            steps: [
              { part: "a", reasoning: "Only cart A is moving.", working: "p = (2.0)(5.0) + (3.0)(0) = 10\\text{ kg}\\cdot\\text{m/s}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Momentum is conserved, with the combined mass after the collision.", working: "10 = (2.0 + 3.0)v_f", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "v_f = 2.0\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Kinetic energy before: only cart A moves.", working: "KE_i = \\tfrac{1}{2}(2.0)(5.0)^2 = 25\\text{ J}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Kinetic energy after, using the combined mass.", working: "KE_f = \\tfrac{1}{2}(5.0)(2.0)^2 = 10\\text{ J}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract.", working: "\\Delta KE = 25 - 10 = 15\\text{ J lost}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Kinetic energy decreased while momentum was conserved, and the carts stuck together: a perfectly inelastic collision.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The $15\\ \\text{J}$ is transformed into thermal energy, sound and deformation of the carts; total energy is still conserved.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $10\\ \\text{kg}\\cdot\\text{m/s}$ (b) $2.0\\ \\text{m/s}$ (c) $15\\ \\text{J}$ (d) Perfectly inelastic; the lost energy becomes thermal energy, sound and deformation.",
            commonErrors: ["Saying momentum is lost in the collision.", "Calculating kinetic energy from $\\frac{1}{2}(mv)^2$ or without squaring the velocity.", "Saying the energy was destroyed."],
            examinerNote: "(c) Allow ecf from (b). (d) Allow 'inelastic' for the first mark. Reject 'energy is lost' without saying where it goes.",
          },
        },
      ],
    },
  ],
};
