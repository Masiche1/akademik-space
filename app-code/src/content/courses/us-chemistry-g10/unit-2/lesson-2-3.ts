import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "chem10-u2-lesson-2-3",
  code: "2-3",
  title: "Gases",
  goal: "I CAN use the kinetic molecular theory to explain gas behavior, convert pressure units, and solve problems with the gas laws using temperatures in kelvin.",
  standards: ["HS-PS3-2", "HS-PS1-3", "SEP: Using Mathematics and Computational Thinking", "CCC: Patterns"],
  vocabulary: [
    { term: "Kinetic molecular theory", definition: "A model that explains gas behavior as the random motion of tiny particles that collide elastically and have negligible attraction for each other." },
    { term: "Pressure", definition: "Force per unit area; in a gas it is caused by particles colliding with the walls of the container." },
    { term: "Kelvin", definition: "The absolute temperature scale: $T(\\text{K}) = t(^\\circ\\text{C}) + 273$. Zero kelvin is absolute zero." },
    { term: "Standard temperature and pressure (STP)", definition: "$0\\ ^\\circ\\text{C}$ (273 K) and 1 atm; one mole of an ideal gas occupies 22.4 L." },
    { term: "Ideal gas", definition: "A hypothetical gas that obeys $PV = nRT$ exactly; real gases behave most ideally at high temperature and low pressure." },
    { term: "Universal gas constant", definition: "$R = 0.0821\\ \\text{L·atm/(mol·K)}$." },
  ],
  concepts: [
    {
      id: "chem10-u2-kmt-pressure",
      title: "Kinetic molecular theory and pressure units",
      skill: "Use the kinetic molecular theory to explain gas properties and convert between pressure units.",
      lesson: {
        sections: [
          {
            heading: "Kinetic molecular theory",
            body: "The kinetic molecular theory (KMT) models an ideal gas with these ideas:\n\n- Gas particles are very small compared with the distances between them, so a gas is mostly empty space.\n- Particles move constantly in random straight lines.\n- Collisions between particles and with the walls are elastic (no net loss of energy).\n- There are no attractive or repulsive forces between particles.\n- The **average kinetic energy** is proportional to the **kelvin temperature**. At the same temperature all gases have the same average kinetic energy, so lighter particles move faster on average.\n\nPressure comes from particles hitting the walls. More collisions per second, or harder collisions, mean higher pressure. Heating a gas in a rigid container raises its pressure because particles move faster and strike the walls more often and with more force.",
          },
          {
            heading: "Pressure units",
            body: "Several units are in use. They are all equal to atmospheric pressure at sea level:\n\n$$1\\ \\text{atm} = 760\\ \\text{mmHg} = 760\\ \\text{torr} = 101.325\\ \\text{kPa} = 14.7\\ \\text{psi}$$\n\nTo convert, multiply by a fraction that equals 1, for example $\\dfrac{760\\ \\text{mmHg}}{1\\ \\text{atm}}$, so that the unwanted unit cancels.",
          },
        ],
        keyFormulas: [
          { name: "Pressure equivalents", statement: "$1\\ \\text{atm} = 760\\ \\text{mmHg} = 101.325\\ \\text{kPa}$" },
          { name: "Kelvin", statement: "$T(\\text{K}) = t(^\\circ\\text{C}) + 273$" },
          { name: "KMT", statement: "average kinetic energy is proportional to $T$ in kelvin" },
        ],
        workedExample: {
          problem: "Convert a pressure of $0.850\\ \\text{atm}$ to kilopascals.",
          solution: "Multiply by the conversion factor: $0.850\\ \\text{atm} \\times \\dfrac{101.325\\ \\text{kPa}}{1\\ \\text{atm}} = 86.1\\ \\text{kPa}$ (to 3 significant figures).",
        },
      },
      questions: [
        {
          id: "chem10-u2-kmt-pressure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to the kinetic molecular theory, what is the pressure of a gas caused by?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weight of the gas pushing down on the container" },
              { id: "b", text: "Gas particles slowing down over time" },
              { id: "c", text: "Gas particles attracting each other" },
              { id: "d", text: "Gas particles colliding with the walls of the container" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas pressure", statement: "Pressure is the force per unit area exerted by particles colliding with the container walls." },
            ],
            steps: [
              { reasoning: "Pressure arises from the many collisions of fast-moving particles with the walls.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Gas particles colliding with the walls of the container",
            commonErrors: ["Choosing (c): gas pressure acts equally in all directions and does not depend on the weight of the gas.", "Choosing (a): ideal gas particles are assumed to have no attractions."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u2-kmt-pressure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tank contains a gas at a pressure of $1.50\\ \\text{atm}$. Convert this pressure to mmHg.",
          response: { type: "numeric", parts: [{ label: "Pressure", answer: 1140, tolerance: 1, unit: "mmHg" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure conversion", statement: "$1\\ \\text{atm} = 760\\ \\text{mmHg}$" },
            ],
            steps: [
              { reasoning: "Multiply by the conversion factor so atm cancels.", working: "1.50\\ \\text{atm} \\times \\frac{760\\ \\text{mmHg}}{1\\ \\text{atm}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 1140\\ \\text{mmHg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1140\\ \\text{mmHg}$",
            commonErrors: ["Dividing by 760 instead of multiplying (0.00197).", "Using 101.325 instead of 760."],
            examinerNote: "M1 for 1.50 x 760. A1 for 1140 (1.14 x 10^3).",
          },
        },
        {
          id: "chem10-u2-kmt-pressure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sealed, rigid steel cylinder of gas is moved from a cool room to a hot room.\n\nUsing the kinetic molecular theory, explain why the pressure inside the cylinder increases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "KMT and temperature", statement: "Average kinetic energy of gas particles is proportional to the kelvin temperature." },
            ],
            steps: [
              { reasoning: "The temperature rises, so the average kinetic energy of the particles increases.", marks: 1, markCode: "B" },
              { reasoning: "Particles move faster on average.", marks: 1, markCode: "B" },
              { reasoning: "Particles hit the walls more often (more collisions per second).", marks: 1, markCode: "B" },
              { reasoning: "Each collision is harder (greater force). The volume is fixed, so the pressure rises.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Higher temperature gives faster particles, which collide with the walls more often and with greater force; the volume is fixed, so pressure increases.",
            commonErrors: ["Saying the particles expand or get bigger.", "Saying the number of particles increases."],
            examinerNote: "Allow 'more frequent and harder collisions' for two marks. Reject 'particles expand'.",
          },
        },
        {
          id: "chem10-u2-kmt-pressure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A weather balloon technician records atmospheric pressures from different instruments.",
          parts: [
            { label: "a", prompt: "A barometer reads $98.6\\ \\text{kPa}$. Convert this to atm. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Another reading is $735\\ \\text{mmHg}$. Convert this to kPa. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Helium and nitrogen gas in the balloon are at the same temperature. Compare their average kinetic energies and their average speeds.", marks: 2 },
            { label: "d", prompt: "Explain why real gases behave less ideally at very high pressure.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure conversion", statement: "$1\\ \\text{atm} = 760\\ \\text{mmHg} = 101.325\\ \\text{kPa}$" },
              { kind: "principle", name: "KMT", statement: "At a given temperature all gases have the same average kinetic energy." },
            ],
            steps: [
              { part: "a", reasoning: "Divide by 101.325 kPa per atm.", working: "\\frac{98.6}{101.325}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 significant figures.", working: "= 0.973\\ \\text{atm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert mmHg to atm to kPa.", working: "\\frac{735}{760} \\times 101.325", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "= 98.0\\ \\text{kPa}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Same temperature means the same average kinetic energy for both gases.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Helium atoms have a much smaller mass, so they must move faster on average than nitrogen molecules.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "At high pressure the particles are squeezed close together, so their own volume is no longer negligible.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Attractive forces between particles also become significant, so the KMT assumptions fail.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 0.973 atm (b) 98.0 kPa (c) equal average kinetic energy; helium is faster (d) particle volume and attractions are no longer negligible at high pressure.",
            commonErrors: ["In (a) multiplying instead of dividing (9990).", "In (c) saying heavier gas particles have more kinetic energy at the same temperature."],
            examinerNote: "(a) and (b) allow ecf for method marks. (c) Allow 'lighter particles move faster'.",
          },
        },
      ],
    },
    {
      id: "chem10-u2-gas-laws",
      title: "Boyle's, Charles's, combined and ideal gas laws",
      skill: "Solve gas problems with the gas laws, always converting temperatures to kelvin.",
      lesson: {
        sections: [
          {
            heading: "Always use kelvin",
            body: "Gas volume and pressure are proportional to **absolute** temperature. A Celsius value can be zero or negative, which would give zero or negative volume in the equations, so **always convert**:\n\n$$T(\\text{K}) = t(^\\circ\\text{C}) + 273$$\n\nFor example, $25\\ ^\\circ\\text{C} = 298\\ \\text{K}$. Doubling the temperature from $10\\ ^\\circ\\text{C}$ to $20\\ ^\\circ\\text{C}$ does **not** double the volume, because $283\\ \\text{K}$ to $293\\ \\text{K}$ is only a 3.5% increase.",
          },
          {
            heading: "The gas laws",
            body: "- **Boyle's law** (constant $T$ and $n$): pressure and volume are inversely proportional. $P_1V_1 = P_2V_2$.\n- **Charles's law** (constant $P$ and $n$): volume is directly proportional to kelvin temperature. $\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$.\n- **Combined gas law** (constant $n$): $\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$.\n- **Ideal gas law**: $PV = nRT$ with $R = 0.0821\\ \\text{L·atm/(mol·K)}$, so use $P$ in atm, $V$ in liters, $T$ in kelvin and $n$ in moles.",
          },
        ],
        keyFormulas: [
          { name: "Boyle's law", statement: "$P_1V_1 = P_2V_2$" },
          { name: "Charles's law", statement: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$ (kelvin)" },
          { name: "Combined gas law", statement: "$\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$ (kelvin)" },
          { name: "Ideal gas law", statement: "$PV = nRT$, $R = 0.0821\\ \\text{L·atm/(mol·K)}$" },
        ],
        workedExample: {
          problem: "How many moles of gas are in a $5.00\\ \\text{L}$ container at $2.00\\ \\text{atm}$ and $27\\ ^\\circ\\text{C}$?",
          solution: "Convert the temperature: $T = 27 + 273 = 300\\ \\text{K}$. Rearrange $PV = nRT$: $n = \\dfrac{PV}{RT} = \\dfrac{2.00 \\times 5.00}{0.0821 \\times 300} = \\dfrac{10.0}{24.63} = 0.406\\ \\text{mol}$.",
        },
      },
      questions: [
        {
          id: "chem10-u2-gas-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fixed amount of gas is kept at constant temperature. Its volume is halved. What happens to its pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is halved." },
              { id: "b", text: "It stays the same." },
              { id: "c", text: "It quadruples." },
              { id: "d", text: "It doubles." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Boyle's law", statement: "$P_1V_1 = P_2V_2$ at constant temperature and amount of gas." },
            ],
            steps: [
              { reasoning: "$P$ and $V$ are inversely proportional, so halving $V$ doubles $P$.", working: "P_2 = \\frac{P_1V_1}{V_1/2} = 2P_1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** It doubles.",
            commonErrors: ["Choosing (a), treating the relationship as direct.", "Choosing (d), squaring the change."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem10-u2-gas-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A gas occupies $4.00\\ \\text{L}$ at a pressure of $1.00\\ \\text{atm}$. The temperature is constant. The gas is compressed to $2.50\\ \\text{L}$.\n\nCalculate the new pressure in atm.",
          response: { type: "numeric", parts: [{ label: "New pressure", answer: 1.6, tolerance: 0.01, unit: "atm" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Boyle's law", statement: "$P_1V_1 = P_2V_2$" },
            ],
            steps: [
              { reasoning: "Rearrange Boyle's law for $P_2$.", working: "P_2 = \\frac{P_1V_1}{V_2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "P_2 = \\frac{1.00 \\times 4.00}{2.50}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "P_2 = 1.60\\ \\text{atm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.60\\ \\text{atm}$",
            commonErrors: ["Multiplying the volumes by mistake, or inverting the ratio to give 0.625 atm."],
            examinerNote: "Award full marks for 1.6 atm. Reject 0.625.",
          },
        },
        {
          id: "chem10-u2-gas-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A flexible balloon contains $2.00\\ \\text{L}$ of air at $27\\ ^\\circ\\text{C}$. The pressure stays constant. The balloon is heated to $127\\ ^\\circ\\text{C}$.\n\nCalculate the new volume in liters, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "New volume", answer: 2.67, tolerance: 0.01, unit: "L" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Charles's law", statement: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$ with temperature in kelvin." },
            ],
            steps: [
              { reasoning: "Convert both temperatures to kelvin.", working: "T_1 = 27 + 273 = 300\\ \\text{K}, \\quad T_2 = 127 + 273 = 400\\ \\text{K}", marks: 1, markCode: "B" },
              { reasoning: "Rearrange Charles's law for $V_2$.", working: "V_2 = \\frac{V_1T_2}{T_1}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the kelvin temperatures.", working: "V_2 = \\frac{2.00 \\times 400}{300}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V_2 = 2.67\\ \\text{L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.67\\ \\text{L}$",
            commonErrors: ["Using Celsius temperatures: $2.00 \\times 127 / 27 = 9.41\\ \\text{L}$, which is wrong.", "Adding 273.15 inconsistently."],
            examinerNote: "Allow 273.15 conversion (answer 2.67). If Celsius values are used, allow only the M mark for the rearrangement.",
          },
        },
        {
          id: "chem10-u2-gas-laws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates a sample of gas using the gas laws. Use $R = 0.0821\\ \\text{L·atm/(mol·K)}$.",
          parts: [
            { label: "a", prompt: "Convert $25\\ ^\\circ\\text{C}$ to kelvin.", marks: 1 },
            { label: "b", prompt: "Calculate the volume in liters of $0.500\\ \\text{mol}$ of an ideal gas at $298\\ \\text{K}$ and $1.00\\ \\text{atm}$. Give your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "A $10.0\\ \\text{L}$ sample of gas at $1.00\\ \\text{atm}$ and $300\\ \\text{K}$ is changed to $2.00\\ \\text{atm}$ and $450\\ \\text{K}$. Calculate the new volume in liters.", marks: 3 },
            { label: "d", prompt: "A student uses Celsius temperatures in Charles's law and claims that a gas at $0\\ ^\\circ\\text{C}$ has zero volume. Explain why the student's method is wrong.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Ideal gas law", statement: "$PV = nRT$" },
              { kind: "law", name: "Combined gas law", statement: "$\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$" },
              { kind: "definition", name: "Kelvin scale", statement: "$T(\\text{K}) = t(^\\circ\\text{C}) + 273$; 0 K is absolute zero." },
            ],
            steps: [
              { part: "a", reasoning: "Add 273.", working: "25 + 273 = 298\\ \\text{K}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rearrange the ideal gas law for volume.", working: "V = \\frac{nRT}{P}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute.", working: "V = \\frac{0.500 \\times 0.0821 \\times 298}{1.00}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "V = 12.2\\ \\text{L}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rearrange the combined gas law (temperatures are already in kelvin).", working: "V_2 = \\frac{P_1V_1T_2}{T_1P_2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute.", working: "V_2 = \\frac{1.00 \\times 10.0 \\times 450}{300 \\times 2.00}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "V_2 = 7.50\\ \\text{L}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Volume is proportional to absolute (kelvin) temperature, and $0\\ ^\\circ\\text{C}$ is $273\\ \\text{K}$, not absolute zero.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A gas at $0\\ ^\\circ\\text{C}$ still has particles moving and a definite volume; only at $0\\ \\text{K}$ would the volume extrapolate to zero.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 298 K (b) 12.2 L (c) 7.50 L (d) Charles's law needs absolute temperature; 0 degrees C is 273 K, so the volume is not zero.",
            commonErrors: ["In (b) using 25 instead of 298.", "In (c) putting $T_1$ and $T_2$ the wrong way round, giving 3.33 L.", "In (d) saying Celsius is fine as long as units are consistent."],
            examinerNote: "(b) Allow 12.2 to 12.3 if 273.15 is used. (c) Allow ecf for inverted ratios on the M marks only.",
          },
        },
      ],
    },
  ],
};
