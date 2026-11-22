import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "phys11-u2-lesson-2-1",
  code: "2-1",
  title: "Work, Energy and Power",
  goal: "I CAN calculate work, kinetic, gravitational and elastic energy, apply conservation of energy with and without friction, and calculate power and efficiency.",
  standards: ["HS-PS3-1", "HS-PS3-2", "HS-PS3-3", "SEP: Using Mathematics and Computational Thinking", "CCC: Systems and System Models"],
  vocabulary: [
    { term: "Work", definition: "The energy transferred to or from an object when a force acts on it through a displacement; $W = Fd\\cos\\theta$, measured in joules." },
    { term: "Kinetic energy", definition: "The energy an object has because of its motion; $KE = \\tfrac{1}{2}mv^2$." },
    { term: "Gravitational potential energy", definition: "The energy stored by an object because of its height in a gravitational field; $PE_g = mgh$." },
    { term: "Elastic potential energy", definition: "The energy stored in a stretched or compressed spring; $PE_s = \\tfrac{1}{2}kx^2$." },
    { term: "Power", definition: "The rate at which work is done or energy is transferred; $P = W/t$, measured in watts." },
    { term: "Efficiency", definition: "The fraction of the total energy input that is transferred usefully: useful output divided by total input." },
  ],
  concepts: [
    {
      id: "phys11-u2-work-energy-forms",
      title: "Work and forms of mechanical energy",
      skill: "Calculate work done by a force at an angle, kinetic energy, gravitational potential energy and elastic potential energy.",
      lesson: {
        sections: [
          {
            heading: "Work transfers energy",
            body: "A force does **work** when the object it acts on moves. Only the component of the force along the displacement counts, so\n\n$$W = Fd\\cos\\theta$$\n\nwhere $\\theta$ is the angle between the force and the displacement. Work is measured in joules ($1\\ \\text{J} = 1\\ \\text{N·m}$). A force perpendicular to the motion ($\\theta = 90^\\circ$) does no work, and a force opposite to the motion ($\\theta = 180^\\circ$) does negative work.",
          },
          {
            heading: "Kinetic and potential energy",
            body: "- **Kinetic energy**: $KE = \\tfrac{1}{2}mv^2$. It depends on the **square** of speed, so doubling the speed quadruples the kinetic energy.\n- **Gravitational potential energy** near Earth: $PE_g = mgh$ with $g = 9.8\\ \\text{m/s}^2$.\n- **Elastic potential energy** in a spring: $PE_s = \\tfrac{1}{2}kx^2$, where $k$ is the spring constant in N/m and $x$ is the stretch or compression.\n\nThe **work-energy theorem** says the net work done on an object equals its change in kinetic energy: $W_{net} = \\Delta KE$.",
          },
        ],
        keyFormulas: [
          { name: "Work", statement: "$W = Fd\\cos\\theta$" },
          { name: "Kinetic energy", statement: "$KE = \\tfrac{1}{2}mv^2$" },
          { name: "Gravitational potential energy", statement: "$PE_g = mgh$" },
          { name: "Elastic potential energy", statement: "$PE_s = \\tfrac{1}{2}kx^2$" },
          { name: "Work-energy theorem", statement: "$W_{net} = \\Delta KE$" },
        ],
        workedExample: {
          problem: "A student pulls a sled $6.0\\ \\text{m}$ along level ground with a rope that makes $30^\\circ$ with the ground. The tension is $20\\ \\text{N}$. How much work does the rope do?",
          solution: "Only the horizontal component of the tension does work. $W = Fd\\cos\\theta = 20 \\times 6.0 \\times \\cos 30^\\circ = 20 \\times 6.0 \\times 0.866 = 104\\ \\text{J}$ (to 3 significant figures).",
        },
      },
      questions: [
        {
          id: "phys11-u2-work-energy-forms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A person carries a heavy bag at a constant velocity along a level hallway. Which statement about the work done by the person's upward supporting force on the bag is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is zero, because the force is perpendicular to the displacement." },
              { id: "b", text: "It equals the weight of the bag multiplied by the distance walked." },
              { id: "c", text: "It is negative, because the force opposes gravity." },
              { id: "d", text: "It is positive, because the person is exerting a force." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Work", statement: "$W = Fd\\cos\\theta$. When $\\theta = 90^\\circ$, $\\cos\\theta = 0$ so $W = 0$." },
            ],
            steps: [
              { reasoning: "The supporting force is vertical and the displacement is horizontal, so $\\theta = 90^\\circ$ and the work is zero.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is zero, because the force is perpendicular to the displacement.",
            commonErrors: ["Thinking that any force exerted by a person does work, even when it is perpendicular to the motion.", "Using $W = Fd$ without the $\\cos\\theta$ factor."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u2-work-energy-forms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $0.50\\ \\text{kg}$ ball is thrown straight up at $12\\ \\text{m/s}$. Ignoring air resistance and using $g = 9.8\\ \\text{m/s}^2$, calculate the maximum height of the ball above its release point. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Maximum height", answer: 7.3, unit: "m", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "With no air resistance, the initial kinetic energy is completely transferred to gravitational potential energy at the highest point." },
            ],
            steps: [
              { reasoning: "At the top the ball is momentarily at rest, so $KE_i = PE_g$ and the mass cancels.", working: "\\tfrac{1}{2}mv^2 = mgh \\Rightarrow h = \\frac{v^2}{2g}", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate.", working: "h = \\frac{12^2}{2 \\times 9.8} = \\frac{144}{19.6} = 7.3\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.3\\ \\text{m}$",
            commonErrors: ["Forgetting the factor $\\tfrac{1}{2}$ and getting $14.7\\ \\text{m}$.", "Forgetting to square the speed."],
            examinerNote: "M1 for equating $\\tfrac{1}{2}mv^2$ and $mgh$ (oe). A1 for 7.3 m (allow 7.35 m).",
          },
        },
        {
          id: "phys11-u2-work-energy-forms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A spring with spring constant $k = 200\\ \\text{N/m}$ is compressed $0.15\\ \\text{m}$ and used to launch a $0.050\\ \\text{kg}$ ball along a smooth horizontal track. All of the stored energy becomes kinetic energy of the ball.\n\nCalculate the speed of the ball as it leaves the spring. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Launch speed", answer: 9.5, unit: "m/s", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Elastic potential energy", statement: "$PE_s = \\tfrac{1}{2}kx^2$" },
              { kind: "law", name: "Conservation of energy", statement: "Energy stored in the spring is transferred to kinetic energy: $PE_s = KE$." },
            ],
            steps: [
              { reasoning: "Calculate the energy stored in the compressed spring.", working: "PE_s = \\tfrac{1}{2}(200)(0.15)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "PE_s = 100 \\times 0.0225 = 2.25\\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "All of the stored energy becomes kinetic energy.", working: "2.25 = \\tfrac{1}{2}(0.050)v^2", marks: 1, markCode: "M" },
              { reasoning: "Solve for the speed.", working: "v = \\sqrt{\\frac{2 \\times 2.25}{0.050}} = \\sqrt{90} = 9.5\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9.5\\ \\text{m/s}$",
            commonErrors: ["Using $kx^2$ without the factor $\\tfrac{1}{2}$, which gives $13\\ \\text{m/s}$.", "Using $F = kx$ as an energy, which gives $30\\ \\text{J}$."],
            examinerNote: "M1 for $\\tfrac{1}{2}kx^2$. A1 for 2.25 J. M1 for equating to $\\tfrac{1}{2}mv^2$. A1 for 9.5 m/s (allow 9.49).",
          },
        },
        {
          id: "phys11-u2-work-energy-forms-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A car of mass $1500\\ \\text{kg}$ is traveling at $20\\ \\text{m/s}$ on a straight, level road.",
          parts: [
            { label: "a", prompt: "Calculate the kinetic energy of the car.", marks: 2 },
            { label: "b", prompt: "The driver accelerates until the speed is $30\\ \\text{m/s}$. Calculate the net work done on the car.", marks: 2 },
            { label: "c", prompt: "The net forward force during this acceleration is $3000\\ \\text{N}$. Calculate the distance over which the car speeds up.", marks: 2 },
            { label: "d", prompt: "A car moving at twice the speed brakes to a stop with the same constant braking force. Explain why its stopping distance is four times as great.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kinetic energy", statement: "$KE = \\tfrac{1}{2}mv^2$" },
              { kind: "law", name: "Work-energy theorem", statement: "$W_{net} = \\Delta KE$, and for a constant force along the motion $W = Fd$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into the kinetic energy formula.", working: "KE = \\tfrac{1}{2}(1500)(20)^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "KE = 3.0 \\times 10^5\\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Net work equals the change in kinetic energy.", working: "W = \\tfrac{1}{2}(1500)(30^2 - 20^2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "W = 750 \\times 500 = 3.75 \\times 10^5\\text{ J}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Net work equals force times distance for a constant force along the motion.", working: "d = \\frac{W}{F} = \\frac{3.75 \\times 10^5}{3000}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "d = 125\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Kinetic energy depends on $v^2$, so doubling the speed gives four times the kinetic energy to remove.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The braking work $Fd$ must equal the kinetic energy; for the same force $F$, the distance $d$ is proportional to $v^2$, so it is four times as great.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $3.0 \\times 10^5\\ \\text{J}$ (b) $3.75 \\times 10^5\\ \\text{J}$ (c) $125\\ \\text{m}$ (d) $KE \\propto v^2$ and $Fd = KE$, so $d \\propto v^2$.",
            commonErrors: ["In (b) calculating $\\tfrac{1}{2}m(\\Delta v)^2 = \\tfrac{1}{2}(1500)(10)^2$ instead of the difference of the squares.", "In (d) saying the distance doubles because the speed doubles."],
            examinerNote: "(b) Allow ecf from a wrong KE in (a) only if the difference of squares is used. (c) Allow ecf from (b). (d) Allow 'work done by brakes equals initial kinetic energy' oe.",
          },
        },
      ],
    },
    {
      id: "phys11-u2-conservation-power",
      title: "Conservation of energy, power and efficiency",
      skill: "Apply conservation of energy with and without friction, and calculate power and efficiency.",
      lesson: {
        sections: [
          {
            heading: "Conservation of energy",
            body: "Energy cannot be created or destroyed, only transferred. If only conservative forces such as gravity and spring forces do work, the total mechanical energy stays constant:\n\n$$KE_i + PE_i = KE_f + PE_f$$\n\nWhen **friction** acts, some mechanical energy is transferred to thermal energy (and a little sound). The total energy is still conserved:\n\n$$KE_i + PE_i = KE_f + PE_f + E_{thermal}$$\n\nThe thermal energy produced equals the work done against friction, $f \\times d$.",
          },
          {
            heading: "Power and efficiency",
            body: "**Power** is the rate of energy transfer: $P = \\dfrac{W}{t} = \\dfrac{\\Delta E}{t}$, measured in watts ($1\\ \\text{W} = 1\\ \\text{J/s}$). For a constant force along the motion, $P = Fv$.\n\n**Efficiency** compares useful output to total input:\n\n$$\\text{efficiency} = \\frac{\\text{useful energy (or power) out}}{\\text{total energy (or power) in}} \\times 100\\%$$\n\nNo real machine is $100\\%$ efficient because some energy is always dissipated as thermal energy.",
          },
        ],
        keyFormulas: [
          { name: "Mechanical energy conservation", statement: "$KE_i + PE_i = KE_f + PE_f$ (no friction)" },
          { name: "With friction", statement: "$KE_i + PE_i = KE_f + PE_f + fd$" },
          { name: "Power", statement: "$P = \\dfrac{W}{t}$" },
          { name: "Efficiency", statement: "$\\dfrac{\\text{useful out}}{\\text{total in}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A roller coaster car starts from rest at a height of $25\\ \\text{m}$ and rolls down a frictionless track. Find its speed when it is at a height of $5.0\\ \\text{m}$.",
          solution: "The car loses $20\\ \\text{m}$ of height. Gravitational potential energy lost becomes kinetic energy: $mg(20) = \\tfrac{1}{2}mv^2$. The mass cancels, so $v = \\sqrt{2 \\times 9.8 \\times 20} = \\sqrt{392} = 20\\ \\text{m/s}$ (to 2 significant figures).",
        },
      },
      questions: [
        {
          id: "phys11-u2-conservation-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A motor transfers $600\\ \\text{J}$ of energy to a load in $3.0\\ \\text{s}$. What is the power of the motor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1800\\ \\text{W}$" },
              { id: "b", text: "$200\\ \\text{W}$" },
              { id: "c", text: "$200\\ \\text{J}$" },
              { id: "d", text: "$0.005\\ \\text{W}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = W/t$, with $1\\ \\text{W} = 1\\ \\text{J/s}$." },
            ],
            steps: [
              { reasoning: "Divide the energy by the time.", working: "P = \\frac{600}{3.0} = 200\\text{ W}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $200\\ \\text{W}$",
            commonErrors: ["Multiplying energy by time to get $1800$.", "Giving the correct number with the wrong unit (joules instead of watts).", "Inverting the ratio to get $0.005$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "phys11-u2-conservation-power-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $65\\ \\text{kg}$ student runs up a flight of stairs with a vertical height of $3.0\\ \\text{m}$ in $4.0\\ \\text{s}$. Use $g = 9.8\\ \\text{m/s}^2$.\n\nCalculate the average power developed by the student against gravity. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Average power", answer: 478, unit: "W", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Work against gravity", statement: "$W = mgh$" },
              { kind: "formula", name: "Power", statement: "$P = W/t$" },
            ],
            steps: [
              { reasoning: "Work done raising the student's body equals the gain in gravitational potential energy.", working: "W = mgh = 65 \\times 9.8 \\times 3.0 = 1911\\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the time taken.", working: "P = \\frac{W}{t} = \\frac{1911}{4.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "P = 478\\text{ W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$478\\ \\text{W}$",
            commonErrors: ["Using the stair length instead of the vertical height.", "Calculating work but forgetting to divide by time."],
            examinerNote: "M1 for $mgh$. M1 for dividing by $t$. A1 for 478 W (allow 480 W, ecf from a wrong work).",
          },
        },
        {
          id: "phys11-u2-conservation-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An electric motor lifts an $80\\ \\text{kg}$ load through a height of $6.0\\ \\text{m}$ in $12\\ \\text{s}$. The electrical power supplied to the motor is $1000\\ \\text{W}$. Use $g = 9.8\\ \\text{m/s}^2$.\n\nCalculate the efficiency of the motor as a percentage, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 39.2, unit: "%", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Useful work", statement: "The useful energy output is the gain in gravitational potential energy, $mgh$." },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\dfrac{P_{useful}}{P_{in}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Useful work is the gain in potential energy of the load.", working: "W = mgh = 80 \\times 9.8 \\times 6.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "W = 4704\\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Find the useful output power and divide by the input power.", working: "P_{out} = \\frac{4704}{12} = 392\\text{ W}, \\quad \\text{efficiency} = \\frac{392}{1000} \\times 100\\%", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\text{efficiency} = 39.2\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$39.2\\%$",
            commonErrors: ["Comparing the work in joules directly with the power in watts without using the same time basis.", "Giving 0.392 and forgetting to convert to a percentage."],
            examinerNote: "M1 $mgh$. A1 4704 J. M1 for output power over input power (or $4704$ over $1000 \\times 12$). A1 for 39.2% (allow 39%).",
          },
        },
        {
          id: "phys11-u2-conservation-power-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A $2.0\\ \\text{kg}$ block is released from rest at the top of a ramp. The top of the ramp is $1.5\\ \\text{m}$ above the bottom, and the ramp surface is $3.0\\ \\text{m}$ long. The block reaches the bottom with a speed of $4.0\\ \\text{m/s}$. Use $g = 9.8\\ \\text{m/s}^2$.",
          parts: [
            { label: "a", prompt: "Calculate the gravitational potential energy lost by the block.", marks: 2 },
            { label: "b", prompt: "Calculate the kinetic energy of the block at the bottom.", marks: 2 },
            { label: "c", prompt: "Calculate the energy transferred to thermal energy by friction.", marks: 2 },
            { label: "d", prompt: "Calculate the average friction force on the block. Give your answer to 2 significant figures.", marks: 2 },
            { label: "e", prompt: "A student says that the missing energy has been destroyed by friction. Evaluate this claim.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "$PE_i = KE_f + E_{thermal}$. Total energy is conserved; friction transfers mechanical energy to thermal energy." },
              { kind: "formula", name: "Energy formulas", statement: "$PE_g = mgh$, $KE = \\tfrac{1}{2}mv^2$, and work against friction $= fd$." },
            ],
            steps: [
              { part: "a", reasoning: "Use $mgh$ with the vertical height, not the ramp length.", working: "PE_g = 2.0 \\times 9.8 \\times 1.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "PE_g = 29.4\\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into the kinetic energy formula.", working: "KE = \\tfrac{1}{2}(2.0)(4.0)^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "KE = 16\\text{ J}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy not kept as kinetic energy has been transferred to thermal energy.", working: "E_{thermal} = 29.4 - 16", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "E_{thermal} = 13.4\\text{ J}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Thermal energy equals friction force times distance along the ramp.", working: "f = \\frac{E_{thermal}}{d} = \\frac{13.4}{3.0}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "f = 4.5\\text{ N}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The claim is incorrect: the $13.4\\ \\text{J}$ is transferred to thermal energy (the block and ramp warm slightly, with a little sound).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The total energy of the whole system is conserved; only the mechanical (kinetic plus potential) energy decreases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $29.4\\ \\text{J}$ (b) $16\\ \\text{J}$ (c) $13.4\\ \\text{J}$ (d) $4.5\\ \\text{N}$ (e) The energy is not destroyed; it is transferred to thermal energy, so total energy is conserved.",
            commonErrors: ["In (a) using the ramp length of $3.0\\ \\text{m}$ in place of the height.", "In (d) dividing by the height $1.5\\ \\text{m}$ rather than the distance along the ramp.", "In (e) saying energy is lost without saying where it goes."],
            examinerNote: "(a) Allow 29 J. (c) Allow ecf from (a) and (b). (d) Allow 4.47 N or 4.4 N; ecf from (c). (e) Allow 'dissipated to the surroundings' oe for B1.",
          },
        },
      ],
    },
  ],
};
