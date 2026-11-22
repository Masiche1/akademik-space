import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eph11-u1-lesson-1-1",
  code: "1-1",
  title: "Energy, Work and Power",
  goal: "I CAN describe energy stores and transfers, calculate efficiency, and use work, power, gravitational potential energy and kinetic energy.",
  standards: ["4PH1 2.1", "4PH1 2.2", "4PH1 2.3", "4PH1 2.4", "4PH1 2.5", "4PH1 2.6"],
  vocabulary: [
    { term: "Conservation of energy", definition: "Energy cannot be created or destroyed. It can only be transferred from one store to another or dissipated." },
    { term: "Dissipated energy", definition: "Wasted energy that spreads out into the surroundings, usually as thermal energy, and cannot easily be recovered." },
    { term: "Efficiency", definition: "The fraction (or percentage) of the total energy input that is transferred usefully: $\\text{efficiency} = \\frac{\\text{useful energy output}}{\\text{total energy input}}$." },
    { term: "Work done", definition: "The energy transferred when a force moves an object through a distance: $W = Fd$, measured in joules." },
    { term: "Power", definition: "The rate of transferring energy, or the work done per second: $P = \\frac{E}{t}$, measured in watts ($\\text{W}$)." },
    { term: "Gravitational potential energy", definition: "The energy stored in an object because of its height in a gravitational field: $\\Delta E_p = mg\\Delta h$." },
    { term: "Kinetic energy", definition: "The energy stored in a moving object: $E_k = \\frac{1}{2}mv^2$." },
  ],
  concepts: [
    {
      id: "eph11-u1-energy-transfers-efficiency",
      title: "Energy stores, transfers and efficiency",
      skill: "Describe energy transfers, apply conservation of energy and calculate efficiency.",
      lesson: {
        sections: [
          {
            heading: "Energy stores and transfers",
            body: "Energy is held in **stores**: kinetic, gravitational potential, elastic potential, chemical, thermal (internal), nuclear, electrostatic and magnetic. Energy moves between stores by **transfers**: mechanically (a force doing work), electrically (a current), by heating (conduction, convection, radiation) or by waves (light and sound).\n\nExample: a battery-powered toy car transfers energy from the **chemical** store of the battery, electrically, to the **kinetic** store of the car. Some energy is also transferred to the **thermal** store of the surroundings and by sound.",
          },
          {
            heading: "Conservation of energy",
            body: "The **principle of conservation of energy** says that energy cannot be created or destroyed. The total energy after a transfer is the same as the total energy before it.\n\nUseful energy is the energy transferred to the store we want. The rest is **wasted**. Wasted energy is **dissipated**: it spreads into the thermal store of the surroundings and cannot easily be used again. It is not destroyed.",
          },
          {
            heading: "Efficiency",
            body: "**Efficiency** compares the useful output with the total input:\n\n$$\\text{efficiency} = \\frac{\\text{useful energy output}}{\\text{total energy input}} \\times 100\\%$$\n\nThe same equation works with power in place of energy. Efficiency has no unit. It can never be more than $100\\%$, because the useful output cannot be greater than the total input. Efficiency is increased by reducing waste, for example by lubricating moving parts or insulating a hot object.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful energy output}}{\\text{total energy input}} \\times 100\\%$" },
          { name: "Wasted energy", statement: "$\\text{wasted energy} = \\text{total input} - \\text{useful output}$" },
          { name: "Conservation of energy", statement: "Energy is transferred or dissipated, never created or destroyed." },
        ],
        workedExample: {
          problem: "A lamp transfers $200\\text{ J}$ of electrical energy and gives out $30\\text{ J}$ as light. Calculate its efficiency and the energy wasted.",
          solution: "Efficiency $= \\frac{30}{200} \\times 100 = 15\\%$. Wasted energy $= 200 - 30 = 170\\text{ J}$, which is dissipated as thermal energy to the surroundings.",
        },
      },
      questions: [
        {
          id: "eph11-u1-energy-transfers-efficiency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes the principle of conservation of energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy cannot be created or destroyed, only transferred or dissipated." },
              { id: "b", text: "Energy is used up when a machine does work." },
              { id: "c", text: "The useful energy output is always equal to the total energy input." },
              { id: "d", text: "Wasted energy is destroyed when it spreads to the surroundings." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy cannot be created or destroyed. It is transferred from one store to another or dissipated." },
            ],
            steps: [
              { reasoning: "Only (b) states that energy is neither created nor destroyed. Wasted energy is dissipated, not destroyed, and useful output is less than input in real machines.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Thinking that energy is 'used up' (a).", "Confusing conservation of total energy with 100% efficiency (c)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u1-energy-transfers-efficiency-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An electric motor transfers $250\\text{ J}$ of electrical energy. It does $175\\text{ J}$ of useful work. Calculate the efficiency of the motor as a percentage.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 70, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful energy output}}{\\text{total energy input}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Write the efficiency equation.", working: "\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "\\frac{175}{250} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "70\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70\\%$",
            commonErrors: ["Dividing the input by the output, giving $143\\%$.", "Using the wasted energy ($75\\text{ J}$) as the output, giving $30\\%$."],
            examinerNote: "A1 cao 70. Allow 0.70 or 0.7 if no percentage is asked for, but the stem asks for a percentage.",
          },
        },
        {
          id: "eph11-u1-energy-transfers-efficiency-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A filament lamp is $15\\%$ efficient. It gives out $6.0\\text{ J}$ of light energy every second. Calculate (i) the total energy supplied to the lamp every second and (ii) the energy wasted every second.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Energy supplied per second", answer: 40, unit: "J" },
              { label: "(ii) Energy wasted per second", answer: 34, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}}$, so $\\text{total input} = \\frac{\\text{useful output}}{\\text{efficiency}}$" },
              { kind: "law", name: "Conservation of energy", statement: "total input = useful output + wasted energy" },
            ],
            steps: [
              { reasoning: "Rearrange the efficiency equation for the total input, using $15\\% = 0.15$.", working: "\\text{total input} = \\frac{6.0}{0.15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "40\\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Wasted energy is the total input minus the useful output.", working: "40 - 6.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "34\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $40\\text{ J}$ (ii) $34\\text{ J}$",
            commonErrors: ["Multiplying $6.0 \\times 0.15$ to get $0.9\\text{ J}$.", "Giving the wasted energy as $85\\%$ of $6.0\\text{ J}$."],
            examinerNote: "Allow ecf for (ii) from a wrong answer to (i).",
          },
        },
        {
          id: "eph11-u1-energy-transfers-efficiency-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An electric motor lifts a load. For each lift, the motor is supplied with $800\\text{ J}$ of electrical energy and the load gains $600\\text{ J}$ of gravitational potential energy.",
          parts: [
            { label: "a", prompt: "Name the energy store that increases as the load is lifted.", marks: 1 },
            { label: "b", prompt: "Calculate the efficiency of the motor as a percentage.", marks: 2 },
            { label: "c", prompt: "Calculate the energy wasted in each lift.", marks: 1 },
            { label: "d", prompt: "Suggest two ways of reducing the energy wasted by the motor.", marks: 2 },
            { label: "e", prompt: "Explain, using the principle of conservation of energy, what happens to the wasted energy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
              { kind: "law", name: "Conservation of energy", statement: "Energy cannot be created or destroyed, only transferred or dissipated." },
            ],
            steps: [
              { part: "a", reasoning: "A lifted load gains height, so its gravitational potential energy store increases.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute the useful output and total input.", working: "\\frac{600}{800} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "75\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Wasted energy is the input minus the useful output.", working: "800 - 600 = 200\\text{ J}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "First way: lubricate the moving parts to reduce friction (and so thermal and sound energy).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Second way: use thicker wires or a motor with lower resistance, or reduce the load on bearings.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The wasted energy is not destroyed: it is transferred to the thermal store of the surroundings (and by sound).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The total energy is conserved: $600\\text{ J}$ useful plus $200\\text{ J}$ wasted equals the $800\\text{ J}$ supplied. The wasted energy is dissipated and cannot easily be recovered.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) gravitational potential (b) $75\\%$ (c) $200\\text{ J}$ (d) lubricate moving parts; use thicker wires (e) transferred to the surroundings as thermal energy; total energy is conserved",
            commonErrors: ["Saying the wasted energy is 'lost' or 'used up'.", "Dividing the wasted energy by the input in (b), giving $25\\%$."],
            examinerNote: "In (d) allow 'insulate' only if linked to heat loss. Ignore 'buy a better motor' on its own.",
          },
        },
      ],
    },
    {
      id: "eph11-u1-work-power-gpe-ke",
      title: "Work, power, gravitational potential and kinetic energy",
      skill: "Calculate work done, power, gravitational potential energy and kinetic energy, and use them together.",
      lesson: {
        sections: [
          {
            heading: "Work done and power",
            body: "When a force moves an object, energy is transferred. The **work done** equals the energy transferred:\n\n$$W = Fd$$\n\nwhere $F$ is the force in newtons ($\\text{N}$) and $d$ is the distance moved **in the direction of the force**, in metres ($\\text{m}$). Work is measured in joules ($\\text{J}$).\n\n**Power** is the rate of transferring energy:\n\n$$P = \\frac{E}{t} = \\frac{W}{t}$$\n\nPower is measured in watts ($\\text{W}$). $1\\text{ W} = 1\\text{ J/s}$.",
          },
          {
            heading: "Gravitational potential energy",
            body: "Lifting an object increases its gravitational potential energy store. The change is\n\n$$\\Delta E_p = mg\\Delta h$$\n\nwhere $m$ is the mass in $\\text{kg}$, $g$ is the gravitational field strength ($10\\text{ N/kg}$ near the Earth's surface in this course) and $\\Delta h$ is the change in height in $\\text{m}$. Note that $mg$ is the weight of the object, so $mg\\Delta h$ is just $Fd$ for a lift.",
          },
          {
            heading: "Kinetic energy and energy exchange",
            body: "Any moving object has kinetic energy:\n\n$$E_k = \\frac{1}{2}mv^2$$\n\nwhere $v$ is the speed in $\\text{m/s}$. Doubling the speed **quadruples** the kinetic energy, because $v$ is squared.\n\nWhen an object falls freely with negligible air resistance, gravitational potential energy is transferred to kinetic energy, so $mg\\Delta h = \\frac{1}{2}mv^2$. The mass cancels, giving $v^2 = 2g\\Delta h$.",
          },
        ],
        keyFormulas: [
          { name: "Work done", statement: "$W = Fd$" },
          { name: "Power", statement: "$P = \\frac{E}{t}$" },
          { name: "Gravitational potential energy", statement: "$\\Delta E_p = mg\\Delta h$" },
          { name: "Kinetic energy", statement: "$E_k = \\frac{1}{2}mv^2$" },
        ],
        workedExample: {
          problem: "A $60\\text{ kg}$ climber ascends $15\\text{ m}$ in $30\\text{ s}$. Calculate the gravitational potential energy gained and the useful power. ($g = 10\\text{ N/kg}$)",
          solution: "$\\Delta E_p = mg\\Delta h = 60 \\times 10 \\times 15 = 9000\\text{ J}$. Power $= \\frac{E}{t} = \\frac{9000}{30} = 300\\text{ W}$.",
        },
      },
      questions: [
        {
          id: "eph11-u1-work-power-gpe-ke-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $2.0\\text{ kg}$ book is lifted through a height of $3.0\\text{ m}$. ($g = 10\\text{ N/kg}$) What is the increase in its gravitational potential energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60\\text{ J}$" },
              { id: "b", text: "$20\\text{ J}$" },
              { id: "c", text: "$6\\text{ J}$" },
              { id: "d", text: "$30\\text{ J}$" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gravitational potential energy", statement: "$\\Delta E_p = mg\\Delta h$" },
            ],
            steps: [
              { reasoning: "Substitute $m = 2.0$, $g = 10$ and $\\Delta h = 3.0$.", working: "2.0 \\times 10 \\times 3.0 = 60\\text{ J}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $60\\text{ J}$",
            commonErrors: ["Forgetting $g$ and calculating $2.0 \\times 3.0 = 6\\text{ J}$ (a).", "Leaving out the height: $2.0 \\times 10 = 20\\text{ J}$ (b).", "Leaving out the mass: $10 \\times 3.0 = 30\\text{ J}$ (c)."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "eph11-u1-work-power-gpe-ke-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car of mass $1200\\text{ kg}$ travels at $15\\text{ m/s}$. Calculate its kinetic energy.",
          response: { type: "numeric", parts: [{ label: "Kinetic energy", answer: 135000, unit: "J", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kinetic energy", statement: "$E_k = \\frac{1}{2}mv^2$" },
            ],
            steps: [
              { reasoning: "Write the equation.", working: "E_k = \\frac{1}{2}mv^2", marks: 1, markCode: "M" },
              { reasoning: "Substitute, squaring the speed first: $15^2 = 225$.", working: "\\frac{1}{2} \\times 1200 \\times 225", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "135\\,000\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$135\\,000\\text{ J}$",
            commonErrors: ["Not squaring the speed: $\\frac{1}{2} \\times 1200 \\times 15 = 9000\\text{ J}$.", "Squaring $\\frac{1}{2}mv$ rather than only $v$."],
            examinerNote: "A1 cao 135000 (accept $1.35 \\times 10^5$).",
          },
        },
        {
          id: "eph11-u1-work-power-gpe-ke-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball of mass $0.50\\text{ kg}$ is dropped from rest from a height of $20\\text{ m}$. Assume air resistance is negligible and $g = 10\\text{ N/kg}$. Calculate (i) the gravitational potential energy lost and (ii) the speed of the ball just before it hits the ground.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Energy lost", answer: 100, unit: "J" },
              { label: "(ii) Speed", answer: 20, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "With no air resistance, all gravitational potential energy lost becomes kinetic energy." },
              { kind: "formula", name: "Energy equations", statement: "$\\Delta E_p = mg\\Delta h$ and $E_k = \\frac{1}{2}mv^2$" },
            ],
            steps: [
              { reasoning: "Calculate the gravitational potential energy lost.", working: "0.50 \\times 10 \\times 20 = 100\\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "All of it becomes kinetic energy, so equate the two.", working: "\\frac{1}{2} \\times 0.50 \\times v^2 = 100", marks: 1, markCode: "M" },
              { reasoning: "Rearrange for $v^2$.", working: "v^2 = \\frac{100}{0.25} = 400", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "v = 20\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $100\\text{ J}$ (ii) $20\\text{ m/s}$",
            commonErrors: ["Forgetting to take the square root and giving $400\\text{ m/s}$.", "Using $E_k = mv^2$ and getting $14.1\\text{ m/s}$."],
            examinerNote: "Allow ecf in (ii) from a wrong answer to (i). A1 cao 20.",
          },
        },
        {
          id: "eph11-u1-work-power-gpe-ke-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A crane lifts a load of mass $500\\text{ kg}$ through a height of $12\\text{ m}$ in $30\\text{ s}$ at a steady speed. The crane motor is supplied with electrical energy at a rate of $2500\\text{ W}$. ($g = 10\\text{ N/kg}$)",
          parts: [
            { label: "a", prompt: "Calculate the weight of the load, in newtons.", marks: 1 },
            { label: "b", prompt: "Calculate the work done by the crane in lifting the load, in joules.", marks: 2 },
            { label: "c", prompt: "State the gravitational potential energy gained by the load, in joules.", marks: 1 },
            { label: "d", prompt: "Calculate the useful power output of the crane, in watts.", marks: 2 },
            { label: "e", prompt: "Calculate the efficiency of the crane as a percentage.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Weight", answer: 5000, unit: "N" },
              { label: "(b) Work done", answer: 60000, unit: "J", tolerance: 1 },
              { label: "(c) Gravitational potential energy gained", answer: 60000, unit: "J", tolerance: 1 },
              { label: "(d) Useful power", answer: 2000, unit: "W" },
              { label: "(e) Efficiency", answer: 80, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight and work", statement: "$W = mg$ and work done $= Fd$" },
              { kind: "formula", name: "Power", statement: "$P = \\frac{E}{t}$" },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{useful power output}}{\\text{total power input}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Weight $= mg$.", working: "500 \\times 10 = 5000\\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The lifting force equals the weight (steady speed), so work $= Fd$.", working: "5000 \\times 12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "60\\,000\\text{ J}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The work done is transferred to the gravitational potential energy store.", working: "60\\,000\\text{ J}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Power is energy per second.", working: "\\frac{60\\,000}{30}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "2000\\text{ W}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Compare useful power with the input power.", working: "\\frac{2000}{2500} \\times 100", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5000\\text{ N}$ (b) $60\\,000\\text{ J}$ (c) $60\\,000\\text{ J}$ (d) $2000\\text{ W}$ (e) $80\\%$",
            commonErrors: ["Using the mass ($500$) as the force in (b).", "Dividing the energy by the height instead of by the time in (d)."],
            examinerNote: "Allow ecf throughout.",
          },
        },
      ],
    },
  ],
};
