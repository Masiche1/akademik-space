import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "phys11-u2-lesson-2-3",
  code: "2-3",
  title: "Electric and Magnetic Fields",
  goal: "I CAN use Coulomb's law and electric fields to analyze charges, and explain magnetic fields, electromagnets, induction, motors and generators.",
  standards: ["HS-PS2-4", "HS-PS3-5", "HS-PS2-5", "SEP: Developing and Using Models", "CCC: Cause and Effect"],
  vocabulary: [
    { term: "Coulomb's law", definition: "The electric force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them: $F = kq_1q_2/r^2$." },
    { term: "Electric field", definition: "The region around a charge where other charges experience a force; its strength is the force per unit positive charge, $E = F/q$, in N/C." },
    { term: "Conservation of charge", definition: "Charge is neither created nor destroyed; in an isolated system the total charge stays the same." },
    { term: "Magnetic field", definition: "The region around a magnet or moving charge in which magnetic forces act; field lines run from north to south outside a magnet." },
    { term: "Electromagnetic induction", definition: "The production of an emf (voltage) in a conductor when the magnetic field through it changes." },
    { term: "Generator", definition: "A device that transfers kinetic energy to electrical energy by rotating a coil in a magnetic field." },
  ],
  concepts: [
    {
      id: "phys11-u2-coulomb-electric-fields",
      title: "Coulomb's law and electric fields",
      skill: "Calculate electric forces and fields, and explain charging using conservation of charge.",
      lesson: {
        sections: [
          {
            heading: "Charge and Coulomb's law",
            body: "Objects become charged when electrons move from one object to another (by friction, **conduction** or **induction**). Like charges repel and unlike charges attract. The total charge is conserved. The charge on one electron is $e = 1.60 \\times 10^{-19}\\ \\text{C}$.\n\nThe size of the force between two point charges is\n\n$$F = \\frac{kq_1q_2}{r^2}, \\qquad k = 8.99 \\times 10^{9}\\ \\text{N·m}^2/\\text{C}^2$$\n\nIt is an inverse-square law, just like gravity, but it can attract or repel, and it is far stronger than gravity between charged particles. Use the magnitudes of the charges in the formula and decide the direction from the signs.",
          },
          {
            heading: "Electric fields",
            body: "An **electric field** describes the force a positive test charge would feel. Its strength is $E = \\dfrac{F}{q}$, in N/C. The field points away from positive charges and toward negative charges. For a point charge $Q$, $E = \\dfrac{kQ}{r^2}$.\n\nA charge $q$ placed in a field $E$ feels a force $F = qE$ (in the direction of $E$ if $q$ is positive, opposite if negative). Field-line diagrams show this: lines are closer together where the field is stronger.",
          },
        ],
        keyFormulas: [
          { name: "Coulomb's law", statement: "$F = \\dfrac{kq_1q_2}{r^2}$, $k = 8.99 \\times 10^9\\ \\text{N·m}^2/\\text{C}^2$" },
          { name: "Electric field", statement: "$E = \\dfrac{F}{q}$, and $E = \\dfrac{kQ}{r^2}$ for a point charge" },
          { name: "Force in a field", statement: "$F = qE$" },
        ],
        workedExample: {
          problem: "Two small spheres carry $+3.0\\ \\mu\\text{C}$ and $-5.0\\ \\mu\\text{C}$ and are $0.50\\ \\text{m}$ apart. Find the size and nature of the force.",
          solution: "Convert: $3.0\\ \\mu\\text{C} = 3.0 \\times 10^{-6}\\ \\text{C}$, $5.0\\ \\mu\\text{C} = 5.0 \\times 10^{-6}\\ \\text{C}$. $F = \\dfrac{(8.99 \\times 10^9)(3.0 \\times 10^{-6})(5.0 \\times 10^{-6})}{0.50^2} = \\dfrac{0.1349}{0.25} = 0.54\\ \\text{N}$. The charges are opposite, so the force is attractive.",
        },
      },
      questions: [
        {
          id: "phys11-u2-coulomb-electric-fields-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The distance between two point charges is tripled while the charges stay the same. How does the electric force between them change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It becomes nine times as large." },
              { id: "b", text: "It becomes three times as large." },
              { id: "c", text: "It becomes one ninth as large." },
              { id: "d", text: "It becomes one third as large." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Coulomb's law", statement: "$F \\propto 1/r^2$, so tripling $r$ divides $F$ by $3^2 = 9$." },
            ],
            steps: [
              { reasoning: "The force is inversely proportional to the square of the distance, so it becomes $1/9$ as large.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It becomes one ninth as large.",
            commonErrors: ["Using an inverse (not inverse-square) relationship, giving one third.", "Squaring in the wrong direction and choosing nine times as large."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u2-coulomb-electric-fields-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two small charged spheres carry $2.0 \\times 10^{-6}\\ \\text{C}$ and $3.0 \\times 10^{-6}\\ \\text{C}$ and are $0.30\\ \\text{m}$ apart. Use $k = 8.99 \\times 10^{9}\\ \\text{N·m}^2/\\text{C}^2$.\n\nCalculate the electric force between them. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Electric force", answer: 0.60, unit: "N", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Coulomb's law", statement: "$F = kq_1q_2/r^2$" },
            ],
            steps: [
              { reasoning: "Substitute the charges and distance into Coulomb's law.", working: "F = \\frac{(8.99 \\times 10^9)(2.0 \\times 10^{-6})(3.0 \\times 10^{-6})}{0.30^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the numerator and square the distance.", working: "F = \\frac{0.05394}{0.090}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F = 0.60\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.60\\ \\text{N}$ (repulsive, since both charges are positive)",
            commonErrors: ["Forgetting to square the distance, which gives $0.18\\ \\text{N}$.", "Using microcoulomb values without converting to coulombs."],
            examinerNote: "M1 for substitution. M1 for numerator and denominator. A1 for 0.60 N (allow 0.599).",
          },
        },
        {
          id: "phys11-u2-coulomb-electric-fields-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A proton (charge $+1.60 \\times 10^{-19}\\ \\text{C}$, mass $1.67 \\times 10^{-27}\\ \\text{kg}$) is placed in a uniform electric field of strength $2000\\ \\text{N/C}$. Ignore gravity.\n\nCalculate the acceleration of the proton. Give your answer in $\\text{m/s}^2$ to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Acceleration", answer: 1.9e11, unit: "m/s²", tolerance: 1e10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Force in an electric field", statement: "$F = qE$" },
              { kind: "law", name: "Newton's second law", statement: "$a = F_{net}/m$" },
            ],
            steps: [
              { reasoning: "Find the electric force on the proton.", working: "F = qE = (1.60 \\times 10^{-19})(2000)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F = 3.2 \\times 10^{-16}\\text{ N}", marks: 1, markCode: "A" },
              { reasoning: "Apply Newton's second law with the proton's mass.", working: "a = \\frac{F}{m} = \\frac{3.2 \\times 10^{-16}}{1.67 \\times 10^{-27}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "a = 1.9 \\times 10^{11}\\text{ m/s}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.9 \\times 10^{11}\\ \\text{m/s}^2$ in the direction of the field",
            commonErrors: ["Dividing by the field strength rather than the mass.", "Using the electron mass."],
            examinerNote: "M1 for $qE$. A1 for $3.2 \\times 10^{-16}$ N. M1 for $F/m$. A1 for $1.9 \\times 10^{11}$ (allow 1.92).",
          },
        },
        {
          id: "phys11-u2-coulomb-electric-fields-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two identical small metal spheres, A and B, are on insulating stands $0.040\\ \\text{m}$ apart. Sphere A has charge $+6.0\\ \\text{nC}$ and sphere B has charge $-2.0\\ \\text{nC}$, where $1\\ \\text{nC} = 1 \\times 10^{-9}\\ \\text{C}$. Use $k = 8.99 \\times 10^{9}\\ \\text{N·m}^2/\\text{C}^2$.",
          parts: [
            { label: "a", prompt: "Calculate the size of the electric force between the spheres. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "State whether the force is attractive or repulsive, and state how the force on A compares with the force on B.", marks: 2 },
            { label: "c", prompt: "The spheres are touched together and then returned to their original positions. State the charge on each sphere and name the principle you used.", marks: 2 },
            { label: "d", prompt: "Calculate the size of the new force between the spheres and describe its nature. Give your answer to 2 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Coulomb's law", statement: "$F = kq_1q_2/r^2$; like charges repel, unlike charges attract." },
              { kind: "law", name: "Conservation of charge", statement: "The total charge of an isolated system is constant; identical conductors share charge equally on contact." },
            ],
            steps: [
              { part: "a", reasoning: "Convert to coulombs and substitute.", working: "F = \\frac{(8.99 \\times 10^9)(6.0 \\times 10^{-9})(2.0 \\times 10^{-9})}{0.040^2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "F = \\frac{1.0788 \\times 10^{-7}}{1.6 \\times 10^{-3}} = 6.74 \\times 10^{-5}\\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The charges have opposite signs, so the force is attractive.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "By Newton's third law the forces on A and B are equal in size and opposite in direction.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Conservation of charge: the total charge is $+6.0 + (-2.0) = +4.0\\ \\text{nC}$, shared equally between identical spheres.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Each sphere has a charge of $+2.0\\ \\text{nC}$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute the new charges.", working: "F = \\frac{(8.99 \\times 10^9)(2.0 \\times 10^{-9})(2.0 \\times 10^{-9})}{0.040^2} = \\frac{3.596 \\times 10^{-8}}{1.6 \\times 10^{-3}}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate. Both charges are positive, so the force is repulsive.", working: "F = 2.2 \\times 10^{-5}\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6.74 \\times 10^{-5}\\ \\text{N}$ (b) attractive; equal and opposite (c) $+2.0\\ \\text{nC}$ each, conservation of charge (d) $2.2 \\times 10^{-5}\\ \\text{N}$, repulsive",
            commonErrors: ["In (a) forgetting to convert nanocoulombs to coulombs.", "In (c) saying both spheres become neutral, or that the total charge is lost.", "In (d) using the sign of the product to obtain a negative force instead of describing it as repulsive."],
            examinerNote: "(a) Allow 6.7 $\\times 10^{-5}$ N. (b) Allow 'equal magnitude' for the second B1. (d) Allow ecf from (c) and allow 2.2 to 2.25 $\\times 10^{-5}$ N.",
          },
        },
      ],
    },
    {
      id: "phys11-u2-magnetism-induction",
      title: "Magnetic fields, induction, motors and generators",
      skill: "Describe magnetic fields and electromagnets, explain electromagnetic induction, and compare motors and generators.",
      lesson: {
        sections: [
          {
            heading: "Magnetic fields and electromagnets",
            body: "Magnets have north and south poles; like poles repel and opposite poles attract. Outside a magnet, field lines run from **north to south**, and they are closer together where the field is stronger. Moving charges create magnetic fields, so a current-carrying wire has a circular field around it, and a coil (solenoid) has a field like a bar magnet.\n\nAn **electromagnet** is a coil of wire around an iron core. Its field gets stronger with more turns, a larger current, or an iron core, and it can be switched off.\n\nA current-carrying wire of length $L$ at right angles to a field $B$ (in teslas) feels a force $F = BIL$, perpendicular to both the field and the current.",
          },
          {
            heading: "Induction, motors and generators",
            body: "**Electromagnetic induction**: when the magnetic field through a coil **changes** (a magnet moves in or out, or the coil moves or rotates in the field), an emf is induced and a current flows if the circuit is complete. A steady magnet that is not moving relative to the coil induces nothing. A faster change, more turns, or a stronger magnet gives a larger emf.\n\n- A **motor** uses the force on a current in a magnetic field to turn a coil: electrical energy is transferred to kinetic energy.\n- A **generator** turns a coil in a magnetic field, inducing an emf: kinetic energy is transferred to electrical energy.\n\nBoth contain a coil and magnets; they are energy transfers in opposite directions.",
          },
        ],
        keyFormulas: [
          { name: "Force on a wire", statement: "$F = BIL$ (wire perpendicular to the field)" },
          { name: "Induction", statement: "emf is induced when the magnetic field through a coil changes" },
          { name: "Motor / generator", statement: "motor: electrical to kinetic; generator: kinetic to electrical" },
        ],
        workedExample: {
          problem: "A $0.20\\ \\text{m}$ wire carrying $5.0\\ \\text{A}$ is perpendicular to a uniform field of $0.40\\ \\text{T}$. Find the force on the wire.",
          solution: "$F = BIL = 0.40 \\times 5.0 \\times 0.20 = 0.40\\ \\text{N}$.",
        },
      },
      questions: [
        {
          id: "phys11-u2-magnetism-induction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bar magnet is held completely still inside a coil of wire connected to a sensitive meter. What does the meter show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A current that grows with time, because the magnet is strong." },
              { id: "b", text: "No current, because the magnetic field through the coil is not changing." },
              { id: "c", text: "No current, because magnets cannot produce electricity." },
              { id: "d", text: "A steady current, because the coil is in a magnetic field." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Electromagnetic induction", statement: "An emf is induced only when the magnetic field through a coil changes." },
            ],
            steps: [
              { reasoning: "The field through the coil is constant, so no emf is induced and the meter reads zero.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No current, because the magnetic field through the coil is not changing.",
            commonErrors: ["Thinking that being in a magnetic field is enough to induce a current, rather than a change in the field.", "Rejecting induction altogether (option d)."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u2-magnetism-induction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A straight wire of length $0.25\\ \\text{m}$ carries a current of $6.0\\ \\text{A}$ at right angles to a uniform magnetic field of strength $0.50\\ \\text{T}$.\n\nCalculate the magnetic force on the wire.",
          response: { type: "numeric", parts: [{ label: "Magnetic force", answer: 0.75, unit: "N", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Force on a current-carrying wire", statement: "$F = BIL$ for a wire perpendicular to the field." },
            ],
            steps: [
              { reasoning: "Substitute into $F = BIL$.", working: "F = 0.50 \\times 6.0 \\times 0.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F = 0.75\\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.75\\ \\text{N}$",
            commonErrors: ["Dividing by the length rather than multiplying.", "Omitting one of the three quantities."],
            examinerNote: "M1 for $BIL$ substitution. A1 for 0.75 N.",
          },
        },
        {
          id: "phys11-u2-magnetism-induction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student pushes a bar magnet into a coil connected to a sensitive meter and sees a brief reading. The student wants a larger reading.\n\nSuggest and explain **two** changes that would increase the induced emf.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Electromagnetic induction", statement: "The induced emf increases with the rate of change of the magnetic field through the coil and with the number of turns." },
            ],
            steps: [
              { reasoning: "Move the magnet faster (oe, moving the coil faster).", marks: 1, markCode: "B" },
              { reasoning: "The magnetic field through the coil then changes more quickly, so a larger emf is induced.", marks: 1, markCode: "R" },
              { reasoning: "Use a coil with more turns (or a stronger magnet).", marks: 1, markCode: "B" },
              { reasoning: "Each turn has an emf induced in it and they add up (a stronger magnet gives a larger field change), so the total emf is greater.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Move the magnet faster (field changes more quickly); use more turns or a stronger magnet (greater total emf or larger field change).",
            commonErrors: ["Suggesting a larger current in the coil, which does not apply to a coil connected only to a meter.", "Holding the magnet still for longer."],
            examinerNote: "Award each change with its explanation: B1 R1 twice. Allow any two of: faster movement, more turns, stronger magnet, larger coil area. Reject 'move the magnet for longer' for the reason mark.",
          },
        },
        {
          id: "phys11-u2-magnetism-induction-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small device contains a rectangular coil between the poles of a permanent magnet. When a battery is connected, the coil turns and the device acts as a motor. The same device can also be turned by hand so that a meter connected in place of the battery shows a reading, and then it acts as a generator.",
          parts: [
            { label: "a", prompt: "State the energy transfer in the motor and in the generator.", marks: 2 },
            { label: "b", prompt: "Explain why the coil turns when the battery is connected.", marks: 2 },
            { label: "c", prompt: "A $0.040\\ \\text{m}$ side of the coil carries $2.5\\ \\text{A}$ perpendicular to a field of $0.30\\ \\text{T}$. Calculate the force on that side.", marks: 2 },
            { label: "d", prompt: "Explain why the meter reading is larger when the coil is turned faster by hand.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Force on a current-carrying wire", statement: "$F = BIL$; the force is perpendicular to both the field and the current." },
              { kind: "law", name: "Electromagnetic induction", statement: "A changing magnetic field through a coil induces an emf; a faster change gives a larger emf." },
            ],
            steps: [
              { part: "a", reasoning: "Motor: electrical energy to kinetic energy.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Generator: kinetic energy to electrical energy.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A current in the coil sits in the magnetic field of the magnet, so each side feels a magnetic force.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The currents in the two opposite sides run in opposite directions, so the forces are opposite and produce a turning effect on the coil.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitute into $F = BIL$.", working: "F = 0.30 \\times 2.5 \\times 0.040", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "F = 0.030\\text{ N}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Turning the coil faster makes the magnetic field through the coil change more quickly.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A greater rate of change of field induces a larger emf, so the reading increases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) motor: electrical to kinetic; generator: kinetic to electrical (b) forces on opposite sides are opposite, giving a turning effect (c) $0.030\\ \\text{N}$ (d) faster change of field gives a larger induced emf",
            commonErrors: ["Reversing the energy transfers for the motor and generator.", "In (d) saying the magnet becomes stronger when the coil turns faster."],
            examinerNote: "(a) Allow 'electrical to movement' oe. (b) Allow 'current-carrying wire in a magnetic field experiences a force' for B1. (c) Allow 0.03 N. (d) Allow 'cuts field lines faster' oe.",
          },
        },
      ],
    },
  ],
};
