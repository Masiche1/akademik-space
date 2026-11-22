import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "esc8-u3-lesson-3-2",
  code: "3-2",
  title: "Energy",
  goal: "I CAN describe energy stores and transfers, use conservation of energy, and calculate power, energy costs and efficiency.",
  standards: ["KS3 Physics: Energy", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Energy store", definition: "A way in which energy is held, for example kinetic, gravitational potential, chemical, thermal (internal), elastic potential and nuclear." },
    { term: "Energy transfer", definition: "Energy moving from one store to another, or from one object to another, for example by a force doing work, by electric current, by heating or by waves." },
    { term: "Conservation of energy", definition: "Energy cannot be created or destroyed, only transferred from one store to another. The total energy stays the same." },
    { term: "Dissipated energy", definition: "Wasted energy that is spread out into the surroundings, usually as thermal energy, and cannot easily be used again." },
    { term: "Power", definition: "The rate of transferring energy: the energy transferred each second. It is measured in watts (W)." },
    { term: "Efficiency", definition: "The fraction or percentage of the total energy input that is transferred usefully." },
    { term: "Kilowatt-hour (kWh)", definition: "The energy transferred by a 1 kW appliance in 1 hour. It is the unit used to charge for electricity." },
  ],
  concepts: [
    {
      id: "esc8-u3-energy-stores",
      title: "Energy stores and transfers, conservation of energy",
      skill: "Name energy stores, describe energy transfers, and use conservation of energy to find wasted energy.",
      lesson: {
        sections: [
          {
            heading: "Energy stores and transfers",
            body: "Energy is held in **stores**: kinetic (moving objects), gravitational potential (objects raised above the ground), chemical (food, fuels, batteries), elastic potential (stretched or squashed objects), thermal (hot objects) and nuclear. Energy is **transferred** between stores, for example when a skier slides down a slope, gravitational potential energy is transferred to kinetic energy.\n\nEnergy is measured in joules ($\\text{J}$).",
          },
          {
            heading: "Conservation of energy and wasted energy",
            body: "Energy is never created or destroyed. The total energy before a change equals the total energy after it. In real devices some energy is transferred to stores that are not useful, usually thermal energy in the surroundings (and sometimes sound). This **wasted** energy is dissipated.\n\n$$\\text{total energy input}=\\text{useful energy output}+\\text{wasted energy}$$",
          },
        ],
        keyFormulas: [
          { name: "Conservation of energy", statement: "Energy cannot be created or destroyed, only transferred between stores" },
          { name: "Wasted energy", statement: "$\\text{wasted energy}=\\text{total input}-\\text{useful output}$" },
          { name: "Unit of energy", statement: "The joule, $\\text{J}$" },
        ],
        workedExample: {
          problem: "An electric motor takes $500\\text{ J}$ of electrical energy and transfers $350\\text{ J}$ usefully as kinetic energy. How much energy is wasted? Where does it go?",
          solution: "$\\text{wasted}=500-350=150\\text{ J}$. The wasted energy is dissipated as thermal energy (and some sound) to the surroundings.",
        },
      },
      questions: [
        {
          id: "esc8-u3-energy-stores-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ball is held above the ground and then released. Which energy transfer happens as the ball falls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical to thermal" },
              { id: "b", text: "Kinetic to gravitational potential" },
              { id: "c", text: "Gravitational potential to kinetic" },
              { id: "d", text: "Elastic potential to kinetic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy is transferred between stores, not created or destroyed." },
            ],
            steps: [
              { reasoning: "As the ball falls its height decreases, so it loses gravitational potential energy, and its speed increases, so it gains kinetic energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gravitational potential to kinetic",
            commonErrors: ["Reversing the direction of the transfer (choosing a).", "Choosing elastic potential because the ball will bounce later."],
            examinerNote: "B1 for gravitational potential to kinetic only.",
          },
        },
        {
          id: "esc8-u3-energy-stores-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A motor transfers $500\\text{ J}$ of electrical energy. It transfers $350\\text{ J}$ usefully as kinetic energy. Calculate the energy wasted by the motor, in joules.",
          response: { type: "numeric", parts: [{ label: "Wasted energy", answer: 150, unit: "J" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "$\\text{total input}=\\text{useful output}+\\text{wasted energy}$" },
            ],
            steps: [
              { reasoning: "Wasted energy is the total input minus the useful output.", working: "500-350", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "150\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150\\text{ J}$",
            commonErrors: ["Adding 500 and 350 to get 850 J.", "Giving 350 J, the useful energy."],
            examinerNote: "M1 for 500 - 350. A1 for 150 J (allow 150 without the unit if the unit is on the answer line).",
          },
        },
        {
          id: "esc8-u3-energy-stores-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A basketball is dropped from a height of $2.0\\text{ m}$. It bounces back up to a height of only $1.4\\text{ m}$.\n\nUse ideas about energy stores and the conservation of energy to explain why the ball does not bounce back to $2.0\\text{ m}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Total energy stays constant; energy is transferred, not lost." },
              { kind: "definition", name: "Dissipated energy", statement: "Wasted energy spread to the surroundings, mostly as thermal energy." },
            ],
            steps: [
              { reasoning: "At release the ball has gravitational potential energy, which is transferred to kinetic energy as it falls.", marks: 1, markCode: "B" },
              { reasoning: "When it hits the floor the ball and floor are deformed, then the ball springs back (elastic potential to kinetic).", marks: 1, markCode: "B" },
              { reasoning: "Some energy is transferred to thermal energy in the ball, the floor and the air, and some to sound.", marks: 1, markCode: "B" },
              { reasoning: "The total energy is conserved, but less is left in the ball's kinetic and gravitational stores, so it rises to a lower height (1.4 m).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Some energy is dissipated as thermal energy and sound, so less is transferred back to gravitational potential energy; total energy is still conserved.",
            commonErrors: ["Saying that energy is used up or destroyed.", "Saying that the ball has less gravitational potential energy because gravity changed."],
            examinerNote: "Reject 'energy is lost' or 'used up' without saying where it goes. Allow 'heat' for thermal energy.",
          },
        },
        {
          id: "esc8-u3-energy-stores-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A battery-powered toy fan is switched on. The battery transfers $240\\text{ J}$ of energy to the fan motor. The fan blades gain $180\\text{ J}$ of kinetic energy usefully. The rest is wasted.",
          parts: [
            { label: "a", prompt: "Name the energy store that is emptied as the battery supplies energy.", marks: 1 },
            { label: "b", prompt: "Name the useful energy store and one wasted energy store at the end of the process.", marks: 2 },
            { label: "c", prompt: "Calculate the energy wasted, in joules.", marks: 2 },
            { label: "d", prompt: "Explain why the total energy at the end is still $240\\text{ J}$.", marks: 2 },
            { label: "e", prompt: "Suggest one way to reduce the wasted energy in the fan, and explain why it works.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy cannot be created or destroyed, only transferred between stores." },
              { kind: "formula", name: "Wasted energy", statement: "$\\text{wasted}=\\text{total input}-\\text{useful output}$" },
            ],
            steps: [
              { part: "a", reasoning: "Batteries store energy in chemical stores.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Useful: kinetic energy of the fan blades.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Wasted: thermal energy of the surroundings (or sound).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Subtract the useful output from the total input.", working: "240-180", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "60\\text{ J}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Energy is conserved: it is only transferred between stores.", working: "180+60=240\\text{ J}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The wasted 60 J is dissipated to the surroundings (still counted in the total) rather than destroyed.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Reduce friction in the motor's bearings, for example by adding lubricant (oe).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "This reduces the energy transferred as thermal energy by friction, so more energy is transferred to kinetic energy.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Chemical (b) Kinetic (useful); thermal or sound (wasted) (c) $60\\text{ J}$ (d) Energy is conserved, $180+60=240\\text{ J}$ (e) Lubricate the motor so less energy is wasted as heat by friction.",
            commonErrors: ["Naming electrical as the store in (a); electrical is a transfer, not a store here.", "Saying the wasted energy disappears.", "Adding 240 and 180 to get 420 J in (c)."],
            examinerNote: "(a) Allow 'chemical energy store'. (e) Allow 'use a more efficient motor' for B1 only, with R1 for a reason linked to wasted energy (oe).",
          },
        },
      ],
    },
    {
      id: "esc8-u3-power-efficiency",
      title: "Power, energy costs and efficiency",
      skill: "Calculate power, energy in kilowatt-hours, the cost of electricity and the efficiency of a device.",
      lesson: {
        sections: [
          {
            heading: "Power",
            body: "**Power** is the rate of transferring energy. One watt ($\\text{W}$) is one joule per second.\n\n$$P=\\frac{E}{t}$$\n\nwhere $P$ is power in $\\text{W}$, $E$ is energy in $\\text{J}$ and $t$ is time in $\\text{s}$. Rearranged: $E=Pt$.",
          },
          {
            heading: "Energy costs",
            body: "Electricity is sold in **kilowatt-hours** (kWh). Convert power to kilowatts by dividing watts by 1000, and time to hours.\n\n$$\\text{energy (kWh)}=\\text{power (kW)}\\times\\text{time (h)}$$\n\n$$\\text{cost}=\\text{energy (kWh)}\\times\\text{price per kWh}$$",
          },
          {
            heading: "Efficiency",
            body: "Efficiency compares the useful output with the total input. It has no unit; multiply by $100$ to give a percentage.\n\n$$\\text{efficiency}=\\frac{\\text{useful energy output}}{\\text{total energy input}}\\times100\\%$$\n\nThe same equation works with useful and total power. No device can be more than $100\\%$ efficient.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$P=\\dfrac{E}{t}$ (watts = joules per second)" },
          { name: "Energy in kilowatt-hours", statement: "$E\\ (\\text{kWh})=P\\ (\\text{kW})\\times t\\ (\\text{h})$" },
          { name: "Cost", statement: "$\\text{cost}=\\text{kWh}\\times\\text{price per kWh}$" },
          { name: "Efficiency", statement: "$\\dfrac{\\text{useful output}}{\\text{total input}}\\times100\\%$" },
        ],
        workedExample: {
          problem: "A $2\\text{ kW}$ heater is on for $3\\text{ hours}$. Electricity costs $30\\text{p}$ per kWh. Work out the cost.",
          solution: "$\\text{energy}=2\\times3=6\\text{ kWh}$. $\\text{cost}=6\\times30=180\\text{p}=\\text{£}1.80$.",
        },
      },
      questions: [
        {
          id: "esc8-u3-power-efficiency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Power is measured in watts. One watt is equal to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "one joule per second" },
              { id: "b", text: "one second per joule" },
              { id: "c", text: "one newton" },
              { id: "d", text: "one joule" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Power", statement: "Power is the energy transferred each second, $P=\\dfrac{E}{t}$, so $1\\text{ W}=1\\text{ J/s}$." },
            ],
            steps: [
              { reasoning: "Power is energy divided by time, so its unit is joules divided by seconds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** one joule per second",
            commonErrors: ["Confusing power with energy and choosing joule.", "Inverting the unit to seconds per joule."],
            examinerNote: "B1 for J/s only.",
          },
        },
        {
          id: "esc8-u3-power-efficiency-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A kettle transfers $90\\,000\\text{ J}$ of energy in $60\\text{ s}$. Calculate the power of the kettle in watts.",
          response: { type: "numeric", parts: [{ label: "Power", answer: 1500, unit: "W" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P=\\dfrac{E}{t}$" },
            ],
            steps: [
              { reasoning: "Substitute the energy and the time.", working: "P=\\frac{E}{t}=\\frac{90000}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "P=1500\\text{ W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1500\\text{ W}$",
            commonErrors: ["Multiplying energy and time to get 5 400 000.", "Dividing time by energy."],
            examinerNote: "M1 for 90 000 / 60. A1 for 1500 W (allow 1.5 kW).",
          },
        },
        {
          id: "esc8-u3-power-efficiency-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An electric heater has a power of $2\\text{ kW}$. It is switched on for $3\\text{ hours}$. Electricity costs $30\\text{p}$ per kWh. Calculate the cost of using the heater, in pence.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 180, unit: "p" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in kWh", statement: "$E=P\\times t$ with $P$ in kW and $t$ in hours." },
              { kind: "formula", name: "Cost", statement: "$\\text{cost}=\\text{kWh}\\times\\text{price per kWh}$" },
            ],
            steps: [
              { reasoning: "Multiply power in kW by time in hours to get kWh.", working: "E=2\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the energy.", working: "E=6\\text{ kWh}", marks: 1, markCode: "A" },
              { reasoning: "Multiply by the price per kWh.", working: "\\text{cost}=6\\times30=180\\text{p}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$180\\text{p}$ (£1.80)",
            commonErrors: ["Converting 2 kW to 2000 W and not converting back, giving 180 000.", "Multiplying only power by price, giving 60p."],
            examinerNote: "M1 for 2 x 3. A1 for 6 kWh. A1 for 180p (allow £1.80). ecf for the cost from an incorrect energy.",
          },
        },
        {
          id: "esc8-u3-power-efficiency-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "A filament lamp has a power of $60\\text{ W}$ and gives out $6\\text{ W}$ of useful light. An LED lamp is $80\\%$ efficient and gives out the same $6\\text{ W}$ of useful light. Electricity costs $30\\text{p}$ per kWh.",
          parts: [
            { label: "a", prompt: "Calculate the energy transferred by the filament lamp in $5$ minutes, in joules.", marks: 2 },
            { label: "b", prompt: "Calculate the efficiency of the filament lamp, as a percentage.", marks: 2 },
            { label: "c", prompt: "Calculate the power of the LED lamp, in watts.", marks: 2 },
            { label: "d", prompt: "Calculate how much money is saved, in pence, by using the LED lamp instead of the filament lamp for $1000$ hours.", marks: 3 },
            { label: "e", prompt: "The LED lamp costs $\\text{£}8$ more to buy than the filament lamp. Evaluate whether it is worth buying.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power and energy", statement: "$E=Pt$, with $t$ in seconds for joules." },
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful output}}{\\text{total input}}\\times100\\%$" },
              { kind: "formula", name: "Cost", statement: "$\\text{cost}=\\text{kWh}\\times\\text{price per kWh}$" },
            ],
            steps: [
              { part: "a", reasoning: "Convert 5 minutes to seconds and use $E=Pt$.", working: "E=60\\times(5\\times60)=60\\times300", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "E=18000\\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the useful power by the total power and multiply by 100.", working: "\\frac{6}{60}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "10\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rearrange the efficiency equation: total power is useful power divided by efficiency.", working: "P=\\frac{6}{0.80}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "P=7.5\\text{ W}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the energy for each lamp over 1000 hours in kWh.", working: "\\text{filament}=0.060\\times1000=60\\text{ kWh},\\quad \\text{LED}=0.0075\\times1000=7.5\\text{ kWh}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Find the difference in energy and multiply by the price per kWh.", working: "(60-7.5)\\times30=52.5\\times30", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "1575\\text{p}\\ (\\text{£}15.75)", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Compare the saving with the extra purchase price: £15.75 saved is greater than £8 extra over 1000 hours.", working: "15.75>8", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Conclude that it is worth buying, since the LED repays its extra cost and continues saving money (oe).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $18\\,000\\text{ J}$ (b) $10\\%$ (c) $7.5\\text{ W}$ (d) $1575\\text{p}$ (£15.75) (e) Yes: the saving of £15.75 is more than the extra £8 cost.",
            commonErrors: ["Using 5 as the time in seconds in (a), giving 300 J.", "Calculating 6 x 0.80 = 4.8 W in (c).", "Forgetting to convert watts to kilowatts in (d)."],
            examinerNote: "(a) Allow ecf from a wrong conversion of minutes. (d) ecf from (c). (e) The conclusion must be supported by a comparison of numbers (ecf from (d)).",
          },
        },
      ],
    },
  ],
};
