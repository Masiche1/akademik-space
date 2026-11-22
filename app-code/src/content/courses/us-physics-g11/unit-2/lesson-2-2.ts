import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "phys11-u2-lesson-2-2",
  code: "2-2",
  title: "Gravitation and Circular Motion",
  goal: "I CAN analyze uniform circular motion using centripetal acceleration and force, and use Newton's law of universal gravitation to explain weight and orbits.",
  standards: ["HS-PS2-4", "HS-PS2-1", "SEP: Using Mathematics and Computational Thinking", "CCC: Patterns"],
  vocabulary: [
    { term: "Uniform circular motion", definition: "Motion in a circle at constant speed; the velocity changes direction, so the object is accelerating." },
    { term: "Centripetal acceleration", definition: "The acceleration of an object in circular motion, directed toward the center of the circle; $a_c = v^2/r$." },
    { term: "Centripetal force", definition: "The net force toward the center of the circle that keeps an object in circular motion; $F_c = mv^2/r$." },
    { term: "Period", definition: "The time for one complete revolution; for uniform circular motion $T = 2\\pi r/v$." },
    { term: "Universal gravitation", definition: "Every two masses attract each other with a force proportional to the product of the masses and inversely proportional to the square of the distance between their centers." },
    { term: "Inverse-square law", definition: "A relationship in which a quantity is proportional to $1/r^2$, so doubling the distance divides it by four." },
  ],
  concepts: [
    {
      id: "phys11-u2-circular-motion",
      title: "Uniform circular motion",
      skill: "Calculate centripetal acceleration, centripetal force and period for an object moving in a circle at constant speed.",
      lesson: {
        sections: [
          {
            heading: "Constant speed, changing velocity",
            body: "An object moving around a circle at constant speed still **accelerates**, because its velocity direction keeps changing. This acceleration points toward the center of the circle and has magnitude\n\n$$a_c = \\frac{v^2}{r}$$\n\nThe period (time for one lap) is $T = \\dfrac{2\\pi r}{v}$.",
          },
          {
            heading: "Centripetal force",
            body: "By Newton's second law, a net force toward the center is needed: $F_c = ma_c = \\dfrac{mv^2}{r}$. **Centripetal force** is not a new kind of force. It is the name for the net inward force, supplied by tension, friction, gravity, a normal force or a combination.\n\nIf the inward force disappears (for example, a string is cut), the object moves off in a straight line along the **tangent** to the circle, as Newton's first law predicts. It does not fly outward along a radius.",
          },
        ],
        keyFormulas: [
          { name: "Centripetal acceleration", statement: "$a_c = \\dfrac{v^2}{r}$" },
          { name: "Centripetal force", statement: "$F_c = \\dfrac{mv^2}{r}$" },
          { name: "Period", statement: "$T = \\dfrac{2\\pi r}{v}$" },
        ],
        workedExample: {
          problem: "A $0.20\\ \\text{kg}$ stopper on a string moves in a horizontal circle of radius $0.50\\ \\text{m}$ at $3.0\\ \\text{m/s}$. Find the tension in the string.",
          solution: "Tension provides the centripetal force: $F_c = \\dfrac{mv^2}{r} = \\dfrac{0.20 \\times 3.0^2}{0.50} = \\dfrac{1.8}{0.50} = 3.6\\ \\text{N}$.",
        },
      },
      questions: [
        {
          id: "phys11-u2-circular-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels around a circular track at a constant speed. Which statement about the car's acceleration is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is directed in the direction of motion." },
              { id: "b", text: "It is zero, because the speed is constant." },
              { id: "c", text: "It is directed away from the center of the circle." },
              { id: "d", text: "It is directed toward the center of the circle." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Centripetal acceleration", statement: "In uniform circular motion the acceleration is directed toward the center because the velocity direction changes toward the center." },
            ],
            steps: [
              { reasoning: "Velocity is a vector; its direction keeps changing, so there is an acceleration, and it points toward the center.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** It is directed toward the center of the circle.",
            commonErrors: ["Thinking constant speed means zero acceleration.", "Believing an outward force acts on the car (confusing it with the sensation of being pushed outward)."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u2-circular-motion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels at a constant speed of $15\\ \\text{m/s}$ around a curve of radius $50\\ \\text{m}$.\n\nCalculate the centripetal acceleration of the car.",
          response: { type: "numeric", parts: [{ label: "Centripetal acceleration", answer: 4.5, unit: "m/s²", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centripetal acceleration", statement: "$a_c = v^2/r$" },
            ],
            steps: [
              { reasoning: "Substitute into the centripetal acceleration formula.", working: "a_c = \\frac{15^2}{50}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "a_c = \\frac{225}{50} = 4.5\\text{ m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.5\\ \\text{m/s}^2$",
            commonErrors: ["Forgetting to square the speed: $15/50 = 0.30$.", "Using $v^2 r$ instead of $v^2/r$."],
            examinerNote: "M1 for $v^2/r$ with correct substitution. A1 for 4.5 m/s$^2$.",
          },
        },
        {
          id: "phys11-u2-circular-motion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car travels around a flat, circular curve of radius $40\\ \\text{m}$. The coefficient of static friction between the tires and the road is $\\mu = 0.60$. Friction alone provides the centripetal force. Use $g = 9.8\\ \\text{m/s}^2$.\n\nCalculate the maximum speed at which the car can take the curve without sliding. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Maximum speed", answer: 15, unit: "m/s", tolerance: 0.3 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Newton's second law", statement: "The net force toward the center equals $mv^2/r$." },
              { kind: "formula", name: "Maximum friction", statement: "$f_{max} = \\mu F_N$, and on level ground $F_N = mg$." },
            ],
            steps: [
              { reasoning: "On level ground the normal force equals the weight, so maximum friction is $\\mu mg$.", working: "f_{max} = \\mu mg", marks: 1, markCode: "B" },
              { reasoning: "Set the maximum friction equal to the centripetal force.", working: "\\mu mg = \\frac{mv^2}{r}", marks: 1, markCode: "M" },
              { reasoning: "The mass cancels. Solve for $v$.", working: "v = \\sqrt{\\mu g r} = \\sqrt{0.60 \\times 9.8 \\times 40}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "v = \\sqrt{235.2} = 15\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\ \\text{m/s}$",
            commonErrors: ["Leaving out the square root.", "Trying to include a mass value; the mass cancels."],
            examinerNote: "B1 for $f = \\mu mg$. M1 for equating to $mv^2/r$. M1 for rearranging and substituting. A1 for 15 m/s (allow 15.3).",
          },
        },
        {
          id: "phys11-u2-circular-motion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A $0.25\\ \\text{kg}$ ball on a string moves in a horizontal circle of radius $0.80\\ \\text{m}$ on a smooth table at a constant speed of $4.0\\ \\text{m/s}$.",
          parts: [
            { label: "a", prompt: "Calculate the centripetal acceleration of the ball.", marks: 2 },
            { label: "b", prompt: "Calculate the tension in the string.", marks: 2 },
            { label: "c", prompt: "Calculate the time for one complete revolution. Give your answer to 2 significant figures.", marks: 2 },
            { label: "d", prompt: "The string suddenly breaks. Describe the motion of the ball afterward and explain it using Newton's first law.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Centripetal motion", statement: "$a_c = v^2/r$, $F_c = ma_c$, $T = 2\\pi r/v$" },
              { kind: "law", name: "Newton's first law", statement: "An object keeps moving in a straight line at constant speed unless a net force acts on it." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into $a_c = v^2/r$.", working: "a_c = \\frac{4.0^2}{0.80}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "a_c = 20\\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tension is the only horizontal force, so it supplies the centripetal force: $F = ma_c$.", working: "F = 0.25 \\times 20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "F = 5.0\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One revolution covers a distance $2\\pi r$ at speed $v$.", working: "T = \\frac{2\\pi (0.80)}{4.0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "T = 1.3\\text{ s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The ball moves off in a straight line along the tangent to the circle, at constant speed $4.0\\ \\text{m/s}$.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "With the string broken there is no net horizontal force, so by Newton's first law the velocity stays constant (the ball does not move outward along a radius).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $20\\ \\text{m/s}^2$ (b) $5.0\\ \\text{N}$ (c) $1.3\\ \\text{s}$ (d) Straight line along the tangent at constant speed, because no net force acts.",
            commonErrors: ["In (d) saying the ball flies radially outward.", "In (c) using $2\\pi r v$ or forgetting the $2\\pi$."],
            examinerNote: "(b) Allow ecf from (a). (c) Allow 1.26 s. (d) Reject 'outward force' and 'centrifugal force'.",
          },
        },
      ],
    },
    {
      id: "phys11-u2-universal-gravitation",
      title: "Universal gravitation and orbits",
      skill: "Use $F = Gm_1m_2/r^2$ and inverse-square reasoning to find gravitational forces, field strength and orbital motion.",
      lesson: {
        sections: [
          {
            heading: "Newton's law of universal gravitation",
            body: "Any two masses attract each other with equal and opposite forces of magnitude\n\n$$F = \\frac{Gm_1m_2}{r^2}$$\n\nwhere $G = 6.67 \\times 10^{-11}\\ \\text{N·m}^2/\\text{kg}^2$ and $r$ is the distance between the **centers** of the masses. This is an **inverse-square law**: doubling $r$ divides $F$ by 4, and tripling $r$ divides $F$ by 9.\n\nNear a planet of mass $M$, the gravitational field strength is $g = \\dfrac{GM}{r^2}$. At Earth's surface this gives $9.8\\ \\text{N/kg}$ (the same as $9.8\\ \\text{m/s}^2$).",
          },
          {
            heading: "Orbits",
            body: "A satellite in a circular orbit is in free fall around the planet. Gravity supplies the centripetal force:\n\n$$\\frac{GMm}{r^2} = \\frac{mv^2}{r} \\quad \\Rightarrow \\quad v = \\sqrt{\\frac{GM}{r}}$$\n\nThe satellite's mass cancels. Orbits at larger $r$ have a **lower** speed and a longer period. Astronauts in orbit feel weightless because they and the spacecraft fall together, not because gravity is absent.",
          },
        ],
        keyFormulas: [
          { name: "Universal gravitation", statement: "$F = \\dfrac{Gm_1m_2}{r^2}$, $G = 6.67 \\times 10^{-11}\\ \\text{N·m}^2/\\text{kg}^2$" },
          { name: "Field strength", statement: "$g = \\dfrac{GM}{r^2}$" },
          { name: "Circular orbit speed", statement: "$v = \\sqrt{\\dfrac{GM}{r}}$" },
        ],
        workedExample: {
          problem: "The Moon has mass $7.35 \\times 10^{22}\\ \\text{kg}$ and radius $1.74 \\times 10^{6}\\ \\text{m}$. Find the gravitational field strength at its surface.",
          solution: "$g = \\dfrac{GM}{r^2} = \\dfrac{(6.67 \\times 10^{-11})(7.35 \\times 10^{22})}{(1.74 \\times 10^{6})^2} = \\dfrac{4.90 \\times 10^{12}}{3.03 \\times 10^{12}} = 1.6\\ \\text{N/kg}$.",
        },
      },
      questions: [
        {
          id: "phys11-u2-universal-gravitation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The gravitational force between two masses is $F$. The distance between their centers is doubled and the masses are unchanged. What is the new force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4F$" },
              { id: "b", text: "$\\dfrac{F}{4}$" },
              { id: "c", text: "$\\dfrac{F}{2}$" },
              { id: "d", text: "$2F$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Inverse-square law", statement: "$F \\propto 1/r^2$, so doubling $r$ divides $F$ by $2^2 = 4$." },
            ],
            steps: [
              { reasoning: "Doubling $r$ multiplies $r^2$ by 4, so the force is divided by 4.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $F/4$",
            commonErrors: ["Treating the force as inversely proportional to $r$ rather than $r^2$, giving $F/2$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u2-universal-gravitation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two objects of mass $1000\\ \\text{kg}$ and $2000\\ \\text{kg}$ have their centers $10\\ \\text{m}$ apart. Use $G = 6.67 \\times 10^{-11}\\ \\text{N·m}^2/\\text{kg}^2$.\n\nCalculate the gravitational force between them, in newtons. Give your answer to 3 significant figures (enter it as a decimal, for example 0.00000133).",
          response: { type: "numeric", parts: [{ label: "Gravitational force", answer: 0.00000133, unit: "N", tolerance: 0.00000001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Universal gravitation", statement: "$F = Gm_1m_2/r^2$" },
            ],
            steps: [
              { reasoning: "Substitute the masses and the distance between centers.", working: "F = \\frac{(6.67 \\times 10^{-11})(1000)(2000)}{10^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F = \\frac{1.334 \\times 10^{-4}}{100} = 1.33 \\times 10^{-6}\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.33 \\times 10^{-6}\\ \\text{N}$",
            commonErrors: ["Forgetting to square the distance, which gives $1.33 \\times 10^{-5}\\ \\text{N}$.", "Adding the masses instead of multiplying them."],
            examinerNote: "M1 for correct substitution. A1 for $1.33 \\times 10^{-6}$ N.",
          },
        },
        {
          id: "phys11-u2-universal-gravitation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Earth has mass $5.97 \\times 10^{24}\\ \\text{kg}$ and radius $6.37 \\times 10^{6}\\ \\text{m}$. Use $G = 6.67 \\times 10^{-11}\\ \\text{N·m}^2/\\text{kg}^2$.\n\nA satellite is at a height of $6.37 \\times 10^{6}\\ \\text{m}$ above Earth's surface. Calculate the gravitational field strength there. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Field strength", answer: 2.45, unit: "N/kg", tolerance: 0.02 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gravitational field strength", statement: "$g = GM/r^2$, where $r$ is the distance from Earth's center." },
            ],
            steps: [
              { reasoning: "The distance must be measured from Earth's center: height plus radius.", working: "r = 6.37 \\times 10^6 + 6.37 \\times 10^6 = 1.274 \\times 10^7\\text{ m}", marks: 1, markCode: "B" },
              { reasoning: "Substitute into $g = GM/r^2$.", working: "g = \\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{(1.274 \\times 10^7)^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the numerator and denominator.", working: "g = \\frac{3.98 \\times 10^{14}}{1.62 \\times 10^{14}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "g = 2.45\\text{ N/kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.45\\ \\text{N/kg}$ (one quarter of the surface value)",
            commonErrors: ["Using the height alone as $r$.", "Using $r = 6.37 \\times 10^6$ and getting $9.8\\ \\text{N/kg}$ again."],
            examinerNote: "B1 for $r = 1.274 \\times 10^7$ m. M1 substitution. M1 evaluation of numerator and denominator. A1 for 2.45 (allow 2.4 to 2.5). Check: $r = 2R$, so $g = 9.8/4 = 2.45$.",
          },
        },
        {
          id: "phys11-u2-universal-gravitation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A satellite orbits Earth in a circular orbit $400\\ \\text{km}$ above the surface, so its orbital radius is $r = 6.77 \\times 10^{6}\\ \\text{m}$. Earth's mass is $5.97 \\times 10^{24}\\ \\text{kg}$ and $G = 6.67 \\times 10^{-11}\\ \\text{N·m}^2/\\text{kg}^2$.",
          parts: [
            { label: "a", prompt: "Calculate the gravitational field strength at the satellite's orbit. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Calculate the orbital speed of the satellite using $a_c = g$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Calculate the orbital period in seconds. Give your answer to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Astronauts on the satellite appear weightless. Explain why, even though the field strength at the orbit is not zero.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gravitational field strength", statement: "$g = GM/r^2$" },
              { kind: "law", name: "Orbital motion", statement: "Gravity provides the centripetal force: $g = v^2/r$, so $v = \\sqrt{GM/r}$, and $T = 2\\pi r/v$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into $g = GM/r^2$.", working: "g = \\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{(6.77 \\times 10^6)^2} = \\frac{3.982 \\times 10^{14}}{4.583 \\times 10^{13}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "g = 8.69\\text{ N/kg}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gravity provides the centripetal acceleration, so $v^2/r = g$.", working: "v = \\sqrt{gr} = \\sqrt{8.69 \\times 6.77 \\times 10^6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "v = 7.67 \\times 10^3\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Period is the circumference divided by the speed.", working: "T = \\frac{2\\pi r}{v} = \\frac{2\\pi (6.77 \\times 10^6)}{7.67 \\times 10^3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "T = 5.55 \\times 10^3\\text{ s}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The satellite and the astronauts are both in free fall with the same acceleration $g$ toward Earth.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Because they fall together, there is no contact (normal) force between the astronaut and the floor, so they feel weightless. Gravity has not disappeared.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $8.69\\ \\text{N/kg}$ (b) $7.67 \\times 10^3\\ \\text{m/s}$ (c) $5.55 \\times 10^3\\ \\text{s}$ (about 92 minutes) (d) Satellite and astronauts are in free fall together, so there is no normal force.",
            commonErrors: ["In (a) using the height of $400\\ \\text{km}$ as $r$.", "In (d) saying there is no gravity in space."],
            examinerNote: "(b) Allow 7.66 to 7.67 $\\times 10^3$ and ecf from (a). (c) Allow 5.54 to 5.55 $\\times 10^3$ s and ecf from (b). (d) Reject 'no gravity' or 'too far from Earth'.",
          },
        },
      ],
    },
  ],
};
