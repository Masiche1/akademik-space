import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eph11-u1-lesson-1-2",
  code: "1-2",
  title: "Thermal Energy Transfer, Density and Pressure",
  goal: "I CAN explain conduction, convection and radiation, and calculate density and the pressure in a liquid.",
  standards: ["4PH1 2.7", "4PH1 2.8", "4PH1 2.9", "4PH1 2.10", "4PH1 2.11", "4PH1 2.12"],
  vocabulary: [
    { term: "Conduction", definition: "The transfer of thermal energy through a material by vibrating particles and, in metals, by free electrons, with no overall movement of the material." },
    { term: "Convection", definition: "The transfer of thermal energy in a liquid or gas by the movement of warmer, less dense fluid upwards and cooler, denser fluid downwards." },
    { term: "Thermal radiation", definition: "Infrared waves emitted by all objects. It needs no medium, so it can travel through a vacuum." },
    { term: "Density", definition: "The mass of a substance per unit volume: $\\rho = \\frac{m}{V}$, measured in $\\text{kg/m}^3$." },
    { term: "Pressure", definition: "The force acting per unit area: $p = \\frac{F}{A}$, measured in pascals ($\\text{Pa}$), where $1\\text{ Pa} = 1\\text{ N/m}^2$." },
    { term: "Free electrons", definition: "Electrons in a metal that are not bound to a single atom and can move through the metal, carrying energy and charge." },
  ],
  concepts: [
    {
      id: "eph11-u1-conduction-convection-radiation",
      title: "Conduction, convection and radiation",
      skill: "Explain how thermal energy is transferred by conduction, convection and radiation, and how surfaces affect radiation.",
      lesson: {
        sections: [
          {
            heading: "Conduction",
            body: "In a solid, particles vibrate about fixed positions. When one end is heated its particles vibrate more and pass energy to their neighbours through collisions, so thermal energy travels along the material.\n\n**Metals** are much better conductors because they contain **free (delocalised) electrons**. These gain kinetic energy when heated, move through the metal and collide with ions and other electrons, passing energy on quickly. Non-metals such as wood and plastic have no free electrons, so they are poor conductors (insulators). Gases are poor conductors because their particles are far apart.",
          },
          {
            heading: "Convection",
            body: "Convection happens only in **fluids** (liquids and gases).\n\n- The fluid near a heat source gains energy and its particles move further apart.\n- The fluid expands, so its **density decreases** and it rises.\n- Cooler, denser fluid sinks to take its place.\n\nThis circulation is a **convection current**. It explains why a heater is best placed low in a room and why the freezer compartment of a fridge is at the top.",
          },
          {
            heading: "Thermal radiation",
            body: "All objects emit **infrared radiation**; hotter objects emit more. Radiation is an electromagnetic wave, so it needs no particles and can cross a vacuum. This is how the Sun warms the Earth.\n\nSurface matters:\n\n- **Dull black** surfaces are the best absorbers and the best emitters of radiation.\n- **Shiny white or silver** surfaces are the poorest absorbers and emitters, and the best reflectors.\n\nA Leslie cube (a metal cube filled with hot water with four different faces) is used to compare emission, with a radiation detector placed at the same distance from each face.",
          },
        ],
        keyFormulas: [
          { name: "Conduction", statement: "Vibrating particles pass energy on; in metals, free electrons do so much faster." },
          { name: "Convection", statement: "Warmer fluid is less dense and rises; cooler denser fluid sinks." },
          { name: "Radiation", statement: "Infrared waves need no medium. Dull black surfaces absorb and emit best." },
        ],
        workedExample: {
          problem: "Explain why a polar bear's fur, which traps air, reduces the energy it loses by conduction and convection.",
          solution: "Air is a poor conductor because its particles are far apart. The fur traps the air in small pockets, so it cannot circulate. This stops convection currents forming, so little thermal energy is transferred away from the bear's body.",
        },
      },
      questions: [
        {
          id: "eph11-u1-conduction-convection-radiation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Thermal energy from the Sun reaches the Earth across space. Which process transfers this energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conduction" },
              { id: "b", text: "Evaporation" },
              { id: "c", text: "Convection" },
              { id: "d", text: "Radiation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermal radiation", statement: "Infrared radiation is an electromagnetic wave and can travel through a vacuum." },
            ],
            steps: [
              { reasoning: "Space is a vacuum with no particles, so conduction and convection cannot happen. Only radiation can cross it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Radiation",
            commonErrors: ["Choosing convection because the Sun heats air; there is no air between the Sun and the Earth."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "eph11-u1-conduction-convection-radiation-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "A beaker of water is heated from below. Describe how convection currents transfer thermal energy through the water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Convection", statement: "Warmer fluid expands, becomes less dense and rises; cooler, denser fluid sinks." },
            ],
            steps: [
              { reasoning: "Water at the bottom gains thermal energy and its particles move further apart (it expands).", marks: 1, markCode: "B" },
              { reasoning: "The warm water is less dense than the water around it.", marks: 1, markCode: "B" },
              { reasoning: "The warm, less dense water rises.", marks: 1, markCode: "B" },
              { reasoning: "Cooler, denser water sinks to replace it, so a circulating current is set up.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Water at the bottom is heated and expands, becoming less dense. It rises, and cooler denser water sinks to take its place, setting up a convection current.",
            commonErrors: ["Saying that 'heat rises' or that hot particles are lighter.", "Saying the particles themselves expand."],
            examinerNote: "Reject 'hot water is lighter' without reference to density. Allow 'warm water floats'.",
          },
        },
        {
          id: "eph11-u1-conduction-convection-radiation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A metal spoon and a plastic spoon are placed in hot water. Explain why the handle of the metal spoon becomes hot much faster than the handle of the plastic spoon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conduction in metals", statement: "Metals contain free electrons which carry energy through the metal quickly, as well as particle vibrations." },
            ],
            steps: [
              { reasoning: "Metals contain free (delocalised) electrons.", marks: 1, markCode: "B" },
              { reasoning: "The electrons at the hot end gain kinetic energy and move through the metal.", marks: 1, markCode: "B" },
              { reasoning: "They collide with ions and other electrons, passing energy along rapidly.", marks: 1, markCode: "B" },
              { reasoning: "Plastic has no free electrons, so energy passes only by particle vibrations, which is much slower.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Free electrons in the metal carry energy quickly by collisions; plastic has none and relies on slow vibrations.",
            commonErrors: ["Saying that metal 'attracts heat'.", "Saying that the electrons vibrate rather than move through the metal."],
            examinerNote: "Allow 'delocalised' for free. Ignore comments about convection.",
          },
        },
        {
          id: "eph11-u1-conduction-convection-radiation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student uses a Leslie cube, a metal cube whose four vertical faces are matt black, shiny black, matt white and shiny silver. The cube is filled with hot water. A radiation detector is held at the same distance from each face and the reading is recorded. Mean results: matt black 58, shiny black 41, matt white 30, shiny silver 12 (arbitrary units).",
          parts: [
            { label: "a", prompt: "Name the type of radiation measured by the detector.", marks: 1 },
            { label: "b", prompt: "State two control variables in the investigation.", marks: 2 },
            { label: "c", prompt: "State which surface is the best emitter of radiation.", marks: 1 },
            { label: "d", prompt: "For the matt black face, the three readings were 56, 60 and 58. Calculate the mean reading and state why repeating the readings improves reliability.", marks: 2 },
            { label: "e", prompt: "Explain why a shiny silver surface is used on the inside of a vacuum flask that holds a hot drink.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Emission of radiation", statement: "Dull black surfaces are the best emitters and absorbers of infrared radiation; shiny silver surfaces are the poorest emitters and the best reflectors." },
              { kind: "skill", name: "Fair test", statement: "Control variables are kept the same so that only the independent variable affects the result." },
            ],
            steps: [
              { part: "a", reasoning: "Hot objects emit infrared radiation.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any two of: distance of the detector from the face, temperature of the water, same detector, same time of the reading, same thickness of the faces.", marks: 2, markCode: "B" },
              { part: "c", reasoning: "The highest reading shows the most radiation emitted: matt black.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Add the readings and divide by three.", working: "\\frac{56 + 60 + 58}{3} = 58", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Repeating allows anomalous results to be spotted and averaged out, reducing the effect of random error.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Shiny silver is a poor emitter of infrared radiation, so little energy radiates from the hot drink.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It also reflects radiation back towards the drink, keeping it hot.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) infrared (b) distance from the detector; temperature of the water (c) matt black (d) 58; spots anomalies and reduces random error (e) shiny silver is a poor emitter and reflects radiation back",
            commonErrors: ["Giving 'the colour of the face' as a control variable; it is the independent variable.", "Saying the readings are 'more accurate' instead of more reliable."],
            examinerNote: "In (a) allow 'heat radiation' only if 'infrared' is not given; reject 'heat'. In (e) allow 'poor absorber and emitter'.",
          },
        },
      ],
    },
    {
      id: "eph11-u1-density-pressure",
      title: "Density and pressure in fluids",
      skill: "Calculate density and the pressure at a depth in a liquid using $p = h\\rho g$.",
      lesson: {
        sections: [
          {
            heading: "Density",
            body: "**Density** is the mass per unit volume:\n\n$$\\rho = \\frac{m}{V}$$\n\nwith $\\rho$ in $\\text{kg/m}^3$, $m$ in $\\text{kg}$ and $V$ in $\\text{m}^3$. (You may also use $\\text{g/cm}^3$ with grams and $\\text{cm}^3$: $1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$.) Water has a density of $1000\\text{ kg/m}^3$.\n\nTo find the density of a regular solid, measure its mass on a balance and calculate the volume from its dimensions. For an irregular solid, find the volume by **displacement**: the rise in water level in a measuring cylinder equals the volume of the object.",
          },
          {
            heading: "Pressure",
            body: "**Pressure** is the force per unit area:\n\n$$p = \\frac{F}{A}$$\n\nwith $p$ in pascals ($\\text{Pa} = \\text{N/m}^2$), $F$ in $\\text{N}$ and $A$ in $\\text{m}^2$. The same force on a smaller area gives a larger pressure, which is why knives are sharp and tractors have wide tyres.",
          },
          {
            heading: "Pressure in a liquid",
            body: "The pressure due to a liquid column depends on the depth, the density of the liquid and the gravitational field strength:\n\n$$p = h\\rho g$$\n\nwhere $h$ is the depth in $\\text{m}$, $\\rho$ is the liquid density in $\\text{kg/m}^3$ and $g = 10\\text{ N/kg}$.\n\nPressure **increases with depth**, because there is more liquid above, and its weight presses down. At the same depth, pressure acts equally in all directions, and a denser liquid gives a larger pressure.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho = \\frac{m}{V}$" },
          { name: "Pressure", statement: "$p = \\frac{F}{A}$" },
          { name: "Pressure in a liquid", statement: "$p = h\\rho g$" },
        ],
        workedExample: {
          problem: "Calculate the pressure due to the water at the bottom of a swimming pool of depth $2.5\\text{ m}$. (Density of water $= 1000\\text{ kg/m}^3$, $g = 10\\text{ N/kg}$)",
          solution: "$p = h\\rho g = 2.5 \\times 1000 \\times 10 = 25\\,000\\text{ Pa}$.",
        },
      },
      questions: [
        {
          id: "eph11-u1-density-pressure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct SI unit of density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{N/m}^2$" },
              { id: "b", text: "$\\text{kg/m}^3$" },
              { id: "c", text: "$\\text{kg m}^3$" },
              { id: "d", text: "$\\text{m}^3\\text{/kg}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho = \\frac{m}{V}$, so the unit is $\\text{kg}$ divided by $\\text{m}^3$." },
            ],
            steps: [
              { reasoning: "Density is mass divided by volume, so its unit is $\\text{kg/m}^3$. (c) is the inverse; (d) is the unit of pressure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\text{kg/m}^3$",
            commonErrors: ["Multiplying the units (a).", "Confusing density with pressure (d)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "eph11-u1-density-pressure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A diver is $30\\text{ m}$ below the surface of the sea. The density of sea water is $1000\\text{ kg/m}^3$ and $g = 10\\text{ N/kg}$. Calculate the pressure due to the water at this depth.",
          response: { type: "numeric", parts: [{ label: "Pressure", answer: 300000, unit: "Pa", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure in a liquid", statement: "$p = h\\rho g$" },
            ],
            steps: [
              { reasoning: "Write the equation.", working: "p = h\\rho g", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "30 \\times 1000 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "300\\,000\\text{ Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300\\,000\\text{ Pa}$",
            commonErrors: ["Leaving out $g$ and giving $30\\,000\\text{ Pa}$.", "Leaving out the density."],
            examinerNote: "A1 cao 300000 (accept $3.0 \\times 10^5$).",
          },
        },
        {
          id: "eph11-u1-density-pressure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student finds the density of an irregular stone. Its mass is $270\\text{ g}$. It is lowered into a measuring cylinder, and the water level rises from $150\\text{ cm}^3$ to $250\\text{ cm}^3$. Calculate (i) the volume of the stone in $\\text{cm}^3$, (ii) its density in $\\text{g/cm}^3$ and (iii) its density in $\\text{kg/m}^3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Volume (cm³)", answer: 100, unit: "cm³" },
              { label: "(ii) Density (g/cm³)", answer: 2.7, unit: "g/cm³", tolerance: 0.01 },
              { label: "(iii) Density (kg/m³)", answer: 2700, unit: "kg/m³", tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "The volume of an irregular solid equals the volume of water it displaces." },
              { kind: "formula", name: "Density", statement: "$\\rho = \\frac{m}{V}$ and $1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$" },
            ],
            steps: [
              { reasoning: "The volume is the rise in water level.", working: "250 - 150 = 100\\text{ cm}^3", marks: 1, markCode: "A" },
              { reasoning: "Substitute into density.", working: "\\rho = \\frac{270}{100}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.7\\text{ g/cm}^3", marks: 1, markCode: "A" },
              { reasoning: "Multiply by 1000 to convert to $\\text{kg/m}^3$.", working: "2.7 \\times 1000 = 2700\\text{ kg/m}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $100\\text{ cm}^3$ (ii) $2.7\\text{ g/cm}^3$ (iii) $2700\\text{ kg/m}^3$",
            commonErrors: ["Using $250\\text{ cm}^3$ as the volume.", "Converting by 100 or 1 000 000 rather than 1000."],
            examinerNote: "Allow ecf for (ii) and (iii).",
          },
        },
        {
          id: "eph11-u1-density-pressure-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A submarine window has an area of $0.020\\text{ m}^2$. The submarine is $12\\text{ m}$ below the surface of a lake. Take the density of the water as $1000\\text{ kg/m}^3$ and $g = 10\\text{ N/kg}$. Ignore atmospheric pressure.",
          parts: [
            { label: "a", prompt: "Calculate the pressure due to the water at this depth.", marks: 2 },
            { label: "b", prompt: "Calculate the force of the water on the window.", marks: 2 },
            { label: "c", prompt: "State the pressure at a depth of $24\\text{ m}$ in the same lake.", marks: 1 },
            { label: "d", prompt: "Explain why the pressure in a liquid increases with depth.", marks: 2 },
            { label: "e", prompt: "The submarine moves to a liquid of density $1200\\text{ kg/m}^3$ at a depth of $12\\text{ m}$. Calculate the new pressure.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure in a liquid", statement: "$p = h\\rho g$" },
              { kind: "formula", name: "Pressure and force", statement: "$p = \\frac{F}{A}$, so $F = pA$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into $p = h\\rho g$.", working: "12 \\times 1000 \\times 10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "120\\,000\\text{ Pa}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rearrange $p = \\frac{F}{A}$ and substitute.", working: "F = pA = 120\\,000 \\times 0.020", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "2400\\text{ N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pressure is proportional to depth, so doubling the depth doubles the pressure.", working: "2 \\times 120\\,000 = 240\\,000\\text{ Pa}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "At greater depth there is a greater height (column) of liquid above.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The weight of this liquid pressing down is larger, so the pressure is larger.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Substitute the new density.", working: "12 \\times 1200 \\times 10", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "144\\,000\\text{ Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $120\\,000\\text{ Pa}$ (b) $2400\\text{ N}$ (c) $240\\,000\\text{ Pa}$ (d) more liquid above, so greater weight on each square metre (e) $144\\,000\\text{ Pa}$",
            commonErrors: ["Using $F = p/A$ and getting $6\\,000\\,000\\text{ N}$.", "Saying that pressure increases with depth because the liquid is denser at depth."],
            examinerNote: "Allow ecf for (b) and (c) from (a). In (c) accept $240\\,000$ only if 'doubling' is clearly used or the calculation shown.",
          },
        },
      ],
    },
  ],
};
