import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cial-p-u1-lesson-1-3",
  code: "1-3",
  title: "Circular motion and gravitation",
  goal: "I CAN describe circular motion, centripetal force and gravitational fields.",
  standards: ["9702 3.4: circular motion, 6: gravitation"],
  vocabulary: [
    { term: "Centripetal force", definition: "Net force toward centre keeping object in circle." },
    { term: "Centripetal acceleration", definition: "$a = v^2/r$ toward centre." },
    { term: "Angular velocity", definition: "Rate of angle change — $\\omega = v/r$." },
    { term: "Gravitational field strength", definition: "Force per unit mass — $g = F/m$ (N/kg)." },
    { term: "Orbital motion", definition: "Motion under gravity alone — satellite stays in orbit." },
    { term: "Escape velocity", definition: "Speed needed to escape gravitational field." },
  ],
  concepts: [
    {
      id: "cial-p-u1-circular",
      title: "Circular motion",
      skill: "Apply $F = mv^2/r$ and relate period, frequency and angular velocity.",
      lesson: {
        sections: [
          {
            heading: "Centripetal force",
            body: "Object in uniform circular motion accelerates toward centre: $a = v^2/r = \\omega^2 r$. Required force $F = mv^2/r$ — provided by tension, friction, gravity, or normal reaction depending on situation. Without it, object moves in straight line (Newton's 1st law).",
          },
          {
            heading: "Period and frequency",
            body: "$v = 2\\pi r / T$, $\\omega = 2\\pi / T = v/r$. $T$ = period (s), $f$ = frequency = $1/T$ (Hz). Centripetal acceleration can also be written $a = 4\\pi^2 r / T^2$.",
          },
          {
            heading: "Vertical circle",
            body: "At top of vertical circle: $T + mg = mv^2/r$ (minimum $v = \\sqrt{gr}$ for loop). At bottom: $T - mg = mv^2/r$. Condition for completing circle: $v \\geq \\sqrt{gr}$ at top.",
          },
        ],
        keyFormulas: [
          { name: "Centripetal", statement: "$F = \\frac{mv^2}{r} = m\\omega^2 r$" },
          { name: "Period", statement: "$v = \\frac{2\\pi r}{T}$, $\\omega = \\frac{2\\pi}{T}$" },
        ],
        workedExample: {
          problem: "A 0.5 kg mass on a 1 m string moves in a circle at 4 m/s. Find centripetal force.",
          solution: "$F = \\frac{mv^2}{r} = \\frac{0.5 \\times 16}{1} = 8\\ N$.",
        },
      },
      questions: [
        {
          id: "cial-p-u1-cc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What provides the centripetal force for a car going around a bend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction between tyres and road" },
              { id: "b", text: "Engine thrust" },
              { id: "c", text: "Air resistance" },
              { id: "d", text: "Gravity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Centripetal force", statement: "Net inward force maintains circular motion." }],
            steps: [{ reasoning: "Friction provides inward force for car on bend.", marks: 1, markCode: "A" }],
            finalAnswer: "Friction",
          },
        },
        {
          id: "cial-p-u1-cc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 2 kg mass moves in a circle of radius 0.5 m at 3 m/s. Find centripetal force.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Centripetal", statement: "$F = mv^2/r$." }],
            steps: [
              { reasoning: "$F = \\frac{2 \\times 9}{0.5} = \\frac{18}{0.5}$.", marks: 1, markCode: "M" },
              { reasoning: "$F = 36\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "Correct substitution and answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 36\\ N$",
          },
        },
        {
          id: "cial-p-u1-cc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A satellite orbits Earth in a circle. What happens to centripetal force if orbital radius doubles (same speed)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Inverse square", statement: "$F \\propto 1/r^2$ for gravity." }],
            steps: [
              { reasoning: "Gravitational force decreases as $1/r^2$.", marks: 1, markCode: "M" },
              { reasoning: "Doubling r → force becomes $1/4$ of original.", marks: 1, markCode: "M" },
              { reasoning: "Centripetal force provided by gravity decreases 4×.", marks: 1, markCode: "M" },
              { reasoning: "For same speed, larger orbit needs less centripetal force.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Force decreases to 1/4",
          },
        },
        {
          id: "cial-p-u1-cc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Circular motion.",
          parts: [
            { label: "a", prompt: "Define centripetal force and give its direction.", marks: 2 },
            { label: "b", prompt: "A 1 kg mass on a 2 m string moves at 5 m/s. Find centripetal force.", marks: 2 },
            { label: "c", prompt: "What is the relationship between $v$, $r$ and $T$?", marks: 2 },
            { label: "d", prompt: "Why does a satellite not fall to Earth?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Circular motion", statement: "$F=mv^2/r$ toward centre; orbit = continuous free fall." }],
            steps: [
              { part: "a", reasoning: "Net force toward centre.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Direction: radially inward.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$F = \\frac{1 \\times 25}{2} = 12.5\\ N$.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "$v = 2\\pi r/T$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Or $T = 2\\pi r/v$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gravity provides centripetal force.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Satellite has tangential velocity — falls toward Earth but misses.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Continuous free fall = orbit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) inward force (b) 12.5 N (c) v=2πr/T (d) gravity=centripetal",
          },
        },
      ],
    },
    {
      id: "cial-p-u1-gravity",
      title: "Gravitational fields",
      skill: "Apply Newton's law of gravitation and gravitational field concepts.",
      lesson: {
        sections: [
          {
            heading: "Newton's law of gravitation",
            body: "$F = \\frac{GMm}{r^2}$ — force between masses $M$ and $m$ separated by $r$. $G = 6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$. Inverse square law: double distance → quarter force.",
          },
          {
            heading: "Gravitational field strength",
            body: "$g = \\frac{GM}{r^2}$ at distance $r$ from mass $M$. On Earth's surface $g \\approx 9.81\\ N\\ kg^{-1}$. Weight $W = mg$ — same as gravitational force. Field strength decreases with altitude/distance.",
          },
          {
            heading: "Orbital motion",
            body: "Satellite in orbit: gravity provides centripetal force $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$ → orbital speed $v = \\sqrt{\\frac{GM}{r}}$. Higher orbit = slower speed, longer period. Escape velocity $v_e = \\sqrt{\\frac{2GM}{r}}$.",
          },
        ],
        keyFormulas: [
          { name: "Gravitation", statement: "$F = \\frac{GMm}{r^2}$" },
          { name: "g", statement: "$g = \\frac{GM}{r^2}$" },
          { name: "Orbital speed", statement: "$v = \\sqrt{\\frac{GM}{r}}$" },
        ],
        workedExample: {
          problem: "Calculate g at Earth's surface ($M = 6 \\times 10^{24}\\ kg$, $r = 6.4 \\times 10^6\\ m$).",
          solution: "$g = \\frac{6.67\\times10^{-11} \\times 6\\times10^{24}}{(6.4\\times10^6)^2} = \\frac{4.0\\times10^{14}}{4.1\\times10^{13}} \\approx 9.8\\ N\\ kg^{-1}$.",
        },
      },
      questions: [
        {
          id: "cial-p-u1-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the gravitational constant G?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$" },
              { id: "b", text: "$9.81\\ N\\ kg^{-1}$" },
              { id: "c", text: "$3 \\times 10^8\\ m\\ s^{-1}$" },
              { id: "d", text: "$6.02 \\times 10^{23}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "G", statement: "$6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$." }],
            steps: [{ reasoning: "G is the universal gravitational constant.", marks: 1, markCode: "A" }],
            finalAnswer: "$6.67 \\times 10^{-11}\\ N\\ m^2\\ kg^{-2}$",
          },
        },
        {
          id: "cial-p-u1-gr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two masses of 1000 kg and 2000 kg are 10 m apart. Find gravitational force between them.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Gravitation", statement: "$F = GMm/r^2$." }],
            steps: [
              { reasoning: "$F = \\frac{6.67\\times10^{-11} \\times 1000 \\times 2000}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "$F = \\frac{6.67\\times10^{-11} \\times 2\\times10^6}{100} = \\frac{1.33\\times10^{-4}}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "$F = 1.33 \\times 10^{-6}\\ N$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F = 1.33 \\times 10^{-6}\\ N$",
          },
        },
        {
          id: "cial-p-u1-gr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does g decrease with altitude?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Inverse square", statement: "$g \\propto 1/r^2$ — increases with distance." }],
            steps: [
              { reasoning: "$g = GM/r^2$ — g depends on distance from centre.", marks: 1, markCode: "M" },
              { reasoning: "Higher altitude → larger r → smaller g.", marks: 1, markCode: "M" },
              { reasoning: "Inverse square relationship.", marks: 1, markCode: "M" },
              { reasoning: "At Earth's surface g ≈ 9.81; decreases above.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "g ∝ 1/r² — decreases with altitude",
          },
        },
        {
          id: "cial-p-u1-gr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Gravitation.",
          parts: [
            { label: "a", prompt: "State Newton's law of gravitation.", marks: 2 },
            { label: "b", prompt: "Define gravitational field strength g.", marks: 2 },
            { label: "c", prompt: "Why do satellites orbit Earth?", marks: 2 },
            { label: "d", prompt: "What is escape velocity?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Gravitation", statement: "$F=GMm/r^2$; $g=GM/r^2$; orbit=centripetal." }],
            steps: [
              { part: "a", reasoning: "$F = GMm/r^2$ — inverse square.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$g = F/m = GM/r^2$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Units N/kg.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gravity provides centripetal force.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Tangential velocity keeps it missing Earth.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Minimum speed to escape gravitational field.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$v_e = \\sqrt{2GM/r}$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Object must reach infinity with zero residual speed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) GMm/r² (b) g=GM/r² (c) gravity+velocity (d) escape velocity",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u1-circular-gravity-notes",
      title: "Circular motion and gravitation — revision notes",
      summary: "Centripetal force, orbital motion, Newton's law of gravitation.",
      sections: [
        {
          heading: "Circular motion",
          body: "$F = mv^2/r$ toward centre; $v = 2\\pi r/T$. Sources: tension, friction, gravity, normal reaction. Satellite orbit = gravity provides centripetal force.",
        },
        {
          heading: "Gravitation",
          body: "$F = GMm/r^2$; $g = GM/r^2$; orbital speed $v = \\sqrt{GM/r}$. Higher orbit = slower, longer period. Escape velocity $v_e = \\sqrt{2GM/r}$.",
        },
        {
          heading: "Exam checklist",
          body: "Centripetal force is not a new force — identify the real force providing it. For orbits equate gravity to centripetal force.",
        },
      ],
    },
  ],
};
