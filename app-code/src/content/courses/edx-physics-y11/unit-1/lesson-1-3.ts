import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eph11-u1-lesson-1-3",
  code: "1-3",
  title: "Specific Heat Capacity, Changes of State and Gases",
  goal: "I CAN calculate thermal energy changes using specific heat capacity and latent heat, and use the gas laws with temperatures in kelvin.",
  standards: ["4PH1 2.13", "4PH1 2.14", "4PH1 2.15", "4PH1 2.16", "4PH1 2.17", "4PH1 2.18"],
  vocabulary: [
    { term: "Specific heat capacity", definition: "The energy needed to raise the temperature of $1\\text{ kg}$ of a substance by $1^\\circ\\text{C}$, measured in $\\text{J/kg}^\\circ\\text{C}$." },
    { term: "Specific latent heat", definition: "The energy needed to change the state of $1\\text{ kg}$ of a substance without a change in temperature, measured in $\\text{J/kg}$." },
    { term: "Kelvin scale", definition: "The absolute temperature scale. $T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273$, and $0\\text{ K}$ is absolute zero." },
    { term: "Absolute zero", definition: "The lowest possible temperature, $0\\text{ K}$ or $-273^\\circ\\text{C}$, where particles have the least possible kinetic energy." },
    { term: "Gas pressure", definition: "The force per unit area caused by gas particles colliding with the walls of their container." },
    { term: "Boyle's law", definition: "For a fixed mass of gas at constant temperature, pressure $\\times$ volume is constant: $p_1V_1 = p_2V_2$." },
  ],
  concepts: [
    {
      id: "eph11-u1-shc-latent-heat",
      title: "Specific heat capacity and changes of state",
      skill: "Use $\\Delta Q = mc\\Delta T$ and $Q = mL$ and describe a heating investigation.",
      lesson: {
        sections: [
          {
            heading: "Specific heat capacity",
            body: "Different materials need different amounts of energy to warm up. The **specific heat capacity**, $c$, is the energy needed to raise the temperature of $1\\text{ kg}$ by $1^\\circ\\text{C}$. Water is $4200\\text{ J/kg}^\\circ\\text{C}$; aluminium is $900\\text{ J/kg}^\\circ\\text{C}$.\n\n$$\\Delta Q = mc\\Delta T$$\n\nwhere $\\Delta Q$ is the thermal energy change in $\\text{J}$, $m$ the mass in $\\text{kg}$ and $\\Delta T$ the temperature change in $^\\circ\\text{C}$. Water has a high $c$, so it stores a lot of energy and warms and cools slowly.",
          },
          {
            heading: "Measuring specific heat capacity",
            body: "Place an electric heater in a block of metal of known mass, with a thermometer in a second hole (a drop of oil helps contact). Switch on and record the temperature at regular time intervals. The energy supplied is $E = Pt$, or $E = IVt$. Then $c = \\frac{E}{m\\Delta T}$.\n\nThe measured value is usually **too high**, because some energy escapes to the surroundings, so the temperature rises less than it should. Wrap the block in **insulation** to improve the result.",
          },
          {
            heading: "Changes of state and latent heat",
            body: "During melting or boiling, the energy supplied breaks the bonds between particles instead of raising the temperature, so the temperature stays **constant** while the state changes. The energy needed is\n\n$$Q = mL$$\n\nwhere $L$ is the **specific latent heat** in $\\text{J/kg}$: $L_f$ for fusion (melting) and $L_v$ for vaporisation (boiling). For water, $L_f = 340\\,000\\text{ J/kg}$ and $L_v = 2\\,260\\,000\\text{ J/kg}$. Vaporisation needs far more energy because the particles must be completely separated.",
          },
        ],
        keyFormulas: [
          { name: "Thermal energy change", statement: "$\\Delta Q = mc\\Delta T$" },
          { name: "Latent heat", statement: "$Q = mL$" },
          { name: "Electrical energy", statement: "$E = Pt$" },
        ],
        workedExample: {
          problem: "How much energy is needed to heat $0.50\\text{ kg}$ of water from $20^\\circ\\text{C}$ to $100^\\circ\\text{C}$? ($c = 4200\\text{ J/kg}^\\circ\\text{C}$)",
          solution: "$\\Delta T = 100 - 20 = 80^\\circ\\text{C}$. $\\Delta Q = mc\\Delta T = 0.50 \\times 4200 \\times 80 = 168\\,000\\text{ J}$.",
        },
      },
      questions: [
        {
          id: "eph11-u1-shc-latent-heat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct unit of specific heat capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{kg}^\\circ\\text{C/J}$" },
              { id: "b", text: "$\\text{J}^\\circ\\text{C/kg}$" },
              { id: "c", text: "$\\text{J/kg}^\\circ\\text{C}$" },
              { id: "d", text: "$\\text{J/kg}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Specific heat capacity", statement: "$c = \\frac{\\Delta Q}{m\\Delta T}$, so the unit is $\\text{J}$ divided by $\\text{kg}$ and by $^\\circ\\text{C}$." },
            ],
            steps: [
              { reasoning: "$c = \\frac{\\Delta Q}{m\\Delta T}$ gives $\\text{J/kg}^\\circ\\text{C}$. (a) is the unit of latent heat.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\text{J/kg}^\\circ\\text{C}$",
            commonErrors: ["Choosing (a), the unit of specific latent heat."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph11-u1-shc-latent-heat-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A tank contains $2.0\\text{ kg}$ of water at $20^\\circ\\text{C}$. The specific heat capacity of water is $4200\\text{ J/kg}^\\circ\\text{C}$. Calculate the energy needed to raise its temperature to $45^\\circ\\text{C}$.",
          response: { type: "numeric", parts: [{ label: "Energy", answer: 210000, unit: "J", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Thermal energy change", statement: "$\\Delta Q = mc\\Delta T$" },
            ],
            steps: [
              { reasoning: "Find the temperature change.", working: "\\Delta T = 45 - 20 = 25^\\circ\\text{C}", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "\\Delta Q = 2.0 \\times 4200 \\times 25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "210\\,000\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$210\\,000\\text{ J}$",
            commonErrors: ["Using $45^\\circ\\text{C}$ as $\\Delta T$, giving $378\\,000\\text{ J}$.", "Forgetting the mass."],
            examinerNote: "A1 cao 210000 (accept $2.1 \\times 10^5$).",
          },
        },
        {
          id: "eph11-u1-shc-latent-heat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$0.50\\text{ kg}$ of ice at $0^\\circ\\text{C}$ is melted and the water is then heated to $20^\\circ\\text{C}$. Specific latent heat of fusion of ice $= 340\\,000\\text{ J/kg}$; specific heat capacity of water $= 4200\\text{ J/kg}^\\circ\\text{C}$. Calculate (i) the energy to melt the ice and (ii) the total energy supplied.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Energy to melt the ice", answer: 170000, unit: "J", tolerance: 1 },
              { label: "(ii) Total energy", answer: 212000, unit: "J", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Latent heat", statement: "$Q = mL$" },
              { kind: "formula", name: "Thermal energy change", statement: "$\\Delta Q = mc\\Delta T$" },
            ],
            steps: [
              { reasoning: "Energy to melt the ice, with no change in temperature.", working: "0.50 \\times 340\\,000 = 170\\,000\\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Energy to warm the water from $0^\\circ\\text{C}$ to $20^\\circ\\text{C}$.", working: "0.50 \\times 4200 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "42\\,000\\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Add the two stages.", working: "170\\,000 + 42\\,000 = 212\\,000\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $170\\,000\\text{ J}$ (ii) $212\\,000\\text{ J}$",
            commonErrors: ["Using $mc\\Delta T$ for the melting stage.", "Forgetting to add the energy for the melting stage."],
            examinerNote: "Allow ecf for (ii) from a wrong answer to (i).",
          },
        },
        {
          id: "eph11-u1-shc-latent-heat-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student measures the specific heat capacity of an aluminium block of mass $0.50\\text{ kg}$. A $60\\text{ W}$ electric heater is switched on for $300\\text{ s}$ and the temperature of the block rises by $40^\\circ\\text{C}$. The block is not insulated.",
          parts: [
            { label: "a", prompt: "Calculate the electrical energy supplied by the heater.", marks: 2 },
            { label: "b", prompt: "Calculate the specific heat capacity of aluminium from these results, assuming no energy is lost.", marks: 2 },
            { label: "c", prompt: "The accepted value is $900\\text{ J/kg}^\\circ\\text{C}$. The student's real result is higher than the accepted value. Explain why, and suggest one improvement.", marks: 2 },
            { label: "d", prompt: "Calculate the energy needed to boil away $0.20\\text{ kg}$ of water already at $100^\\circ\\text{C}$. (Specific latent heat of vaporisation $= 2\\,260\\,000\\text{ J/kg}$)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Electrical energy", statement: "$E = Pt$" },
              { kind: "formula", name: "Specific heat capacity", statement: "$c = \\frac{\\Delta Q}{m\\Delta T}$" },
              { kind: "formula", name: "Latent heat", statement: "$Q = mL$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into $E = Pt$.", working: "60 \\times 300", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "18\\,000\\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rearrange $\\Delta Q = mc\\Delta T$ and substitute.", working: "c = \\frac{18\\,000}{0.50 \\times 40}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "900\\text{ J/kg}^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Some energy is transferred to the surroundings, so the block gains less energy than is supplied and its temperature rise is smaller; the calculated $c$ is therefore too high.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Improvement: insulate the block (for example with lagging).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Substitute into $Q = mL$.", working: "0.20 \\times 2\\,260\\,000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "452\\,000\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $18\\,000\\text{ J}$ (b) $900\\text{ J/kg}^\\circ\\text{C}$ (c) energy lost to the surroundings so the rise is smaller; insulate the block (d) $452\\,000\\text{ J}$",
            commonErrors: ["Using $60 \\times 300 \\times 40$ for the energy.", "Using $mc\\Delta T$ for boiling."],
            examinerNote: "In (c), the question's wording sets the context; do not credit 'human error' alone.",
          },
        },
      ],
    },
    {
      id: "eph11-u1-gas-laws",
      title: "Gas pressure, volume and temperature",
      skill: "Explain gas pressure with the particle model and use $p_1V_1 = p_2V_2$ and $\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$ with kelvin temperatures.",
      lesson: {
        sections: [
          {
            heading: "Gas pressure and the kelvin scale",
            body: "Gas particles move randomly at high speed. Pressure is caused by particles **colliding with the walls** of the container: each collision exerts a tiny force, and together they act over the wall area.\n\nThe average kinetic energy of the particles is proportional to the **absolute temperature** in kelvin ($\\text{K}$):\n\n$$T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273$$\n\n**Absolute zero**, $0\\text{ K}$ ($-273^\\circ\\text{C}$), is the lowest possible temperature. Gas law calculations must always use kelvin.",
          },
          {
            heading: "Pressure and volume (constant temperature)",
            body: "For a fixed mass of gas at constant temperature, pressure and volume are inversely proportional:\n\n$$p_1V_1 = p_2V_2$$\n\nDecreasing the volume makes the particles hit the walls **more often** (the same particles in a smaller space), so the pressure rises. Halving the volume doubles the pressure.",
          },
          {
            heading: "Pressure and temperature (constant volume)",
            body: "For a fixed mass of gas at constant volume, pressure is directly proportional to the kelvin temperature:\n\n$$\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$$\n\nHeating the gas increases the particle speed and kinetic energy. Particles hit the walls **harder and more often**, so the pressure rises. A graph of pressure against temperature in kelvin is a straight line through the origin.",
          },
        ],
        keyFormulas: [
          { name: "Kelvin scale", statement: "$T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273$" },
          { name: "Pressure and volume", statement: "$p_1V_1 = p_2V_2$ (constant temperature)" },
          { name: "Pressure and temperature", statement: "$\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$ (constant volume, $T$ in kelvin)" },
        ],
        workedExample: {
          problem: "A gas at a pressure of $100\\text{ kPa}$ has a volume of $3.0\\text{ dm}^3$. It is compressed at constant temperature to $1.5\\text{ dm}^3$. Find the new pressure.",
          solution: "$p_1V_1 = p_2V_2$, so $100 \\times 3.0 = p_2 \\times 1.5$ and $p_2 = \\frac{300}{1.5} = 200\\text{ kPa}$.",
        },
      },
      questions: [
        {
          id: "eph11-u1-gas-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A gas is at a temperature of $27^\\circ\\text{C}$. What is this temperature in kelvin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$27\\text{ K}$" },
              { id: "b", text: "$246\\text{ K}$" },
              { id: "c", text: "$-246\\text{ K}$" },
              { id: "d", text: "$300\\text{ K}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kelvin scale", statement: "$T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273$" },
            ],
            steps: [
              { reasoning: "Add 273 to the Celsius temperature.", working: "27 + 273 = 300\\text{ K}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $300\\text{ K}$",
            commonErrors: ["Subtracting 273: $27 - 273 = -246$ (a) or $246$ (c).", "Making no conversion (b)."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "eph11-u1-gas-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A fixed mass of gas has a volume of $6.0\\text{ dm}^3$ at a pressure of $100\\text{ kPa}$. The gas is compressed to $2.0\\text{ dm}^3$ at constant temperature. Calculate the new pressure.",
          response: { type: "numeric", parts: [{ label: "New pressure", answer: 300, unit: "kPa" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Boyle's law", statement: "For a fixed mass of gas at constant temperature, $p_1V_1 = p_2V_2$." },
            ],
            steps: [
              { reasoning: "Write the equation.", working: "p_1V_1 = p_2V_2", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "100 \\times 6.0 = p_2 \\times 2.0", marks: 1, markCode: "M" },
              { reasoning: "Rearrange and evaluate.", working: "p_2 = \\frac{600}{2.0} = 300\\text{ kPa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300\\text{ kPa}$",
            commonErrors: ["Using $p_2 = \\frac{100 \\times 2.0}{6.0} = 33\\text{ kPa}$ by inverting the ratio."],
            examinerNote: "A1 cao 300. Allow $300\\,000\\text{ Pa}$.",
          },
        },
        {
          id: "eph11-u1-gas-laws-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A sealed rigid container holds air at a pressure of $2.0 \\times 10^5\\text{ Pa}$ and a temperature of $27^\\circ\\text{C}$. It is heated to $127^\\circ\\text{C}$. Calculate the new pressure, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "New pressure", answer: 267000, unit: "Pa", tolerance: 500 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Pressure law", statement: "At constant volume, $\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$ with $T$ in kelvin." },
            ],
            steps: [
              { reasoning: "Convert both temperatures to kelvin.", working: "T_1 = 300\\text{ K},\\ T_2 = 400\\text{ K}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the pressure law.", working: "\\frac{2.0 \\times 10^5}{300} = \\frac{p_2}{400}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange and evaluate.", working: "p_2 = \\frac{2.0 \\times 10^5 \\times 400}{300} = 2.67 \\times 10^5\\text{ Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.67 \\times 10^5\\text{ Pa}$",
            commonErrors: ["Using Celsius temperatures, giving $9.4 \\times 10^5\\text{ Pa}$.", "Thinking the pressure doubles because the Celsius temperature rose by 100."],
            examinerNote: "M1 for conversion to kelvin. A1 for 267000 (accept $2.7 \\times 10^5$ if the working is shown).",
          },
        },
        {
          id: "eph11-u1-gas-laws-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A fixed mass of gas is trapped in a sealed syringe. At first its volume is $60\\text{ cm}^3$ at a pressure of $100\\text{ kPa}$ and a temperature of $27^\\circ\\text{C}$.",
          parts: [
            { label: "a", prompt: "Explain, in terms of particles, how the gas exerts a pressure on the walls of the syringe.", marks: 2 },
            { label: "b", prompt: "The plunger is pushed in slowly so that the temperature stays constant and the volume becomes $40\\text{ cm}^3$. Calculate the new pressure.", marks: 2 },
            { label: "c", prompt: "Explain, in terms of particles, why the pressure increases when the volume decreases at constant temperature.", marks: 2 },
            { label: "d", prompt: "The syringe, with the plunger now fixed, is heated from $27^\\circ\\text{C}$ to $87^\\circ\\text{C}$. The pressure at $27^\\circ\\text{C}$ is $150\\text{ kPa}$. Calculate the pressure at $87^\\circ\\text{C}$.", marks: 2 },
            { label: "e", prompt: "Explain, in terms of particles, why the pressure increases when the gas is heated at constant volume.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas pressure", statement: "Pressure is caused by gas particles colliding with the container walls." },
              { kind: "law", name: "Boyle's law", statement: "$p_1V_1 = p_2V_2$ at constant temperature." },
              { kind: "law", name: "Pressure law", statement: "$\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$ at constant volume, $T$ in kelvin." },
            ],
            steps: [
              { part: "a", reasoning: "Gas particles move randomly and collide with the walls.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Each collision exerts a force on the wall; the total force per unit area is the pressure.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute into $p_1V_1 = p_2V_2$.", working: "100 \\times 60 = p_2 \\times 40", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "p_2 = \\frac{6000}{40} = 150\\text{ kPa}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The same number of particles are in a smaller volume, so they hit the walls more often.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "More collisions per second on each unit area gives a greater force per unit area, so a higher pressure.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Convert to kelvin ($300\\text{ K}$ and $360\\text{ K}$) and substitute.", working: "\\frac{150}{300} = \\frac{p_2}{360}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "p_2 = \\frac{150 \\times 360}{300} = 180\\text{ kPa}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The particles gain kinetic energy and move faster.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "They hit the walls more often and with greater force, so the pressure rises.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) particles collide with the walls, exerting a force per unit area (b) $150\\text{ kPa}$ (c) more frequent collisions (d) $180\\text{ kPa}$ (e) faster particles collide more often and harder",
            commonErrors: ["Using Celsius temperatures in (d), giving about $483\\text{ kPa}$.", "Saying that particles 'expand' when heated, or that they collide with each other to cause pressure."],
            examinerNote: "In (c) reject 'particles move faster' as the reason, since the temperature is constant. Allow ecf in (e) only for the idea, not numbers.",
          },
        },
      ],
    },
  ],
};
