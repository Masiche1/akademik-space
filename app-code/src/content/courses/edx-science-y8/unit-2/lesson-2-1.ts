import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "esc8-u2-lesson-2-1",
  code: "2-1",
  title: "Particle Model",
  goal: "I CAN use the particle model to describe solids, liquids and gases, and explain melting, boiling and other changes of state.",
  standards: ["KS3 Chemistry", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Particle model", definition: "The idea that all matter is made of tiny particles whose arrangement, movement and the forces between them explain the properties of solids, liquids and gases." },
    { term: "Gas pressure", definition: "The force per unit area caused by gas particles colliding with the walls of their container." },
    { term: "Diffusion", definition: "The spreading out of particles from a region of higher concentration to a region of lower concentration because of their random movement." },
    { term: "Melting point", definition: "The temperature at which a pure solid changes to a liquid." },
    { term: "Boiling point", definition: "The temperature at which a pure liquid changes to a gas throughout the liquid." },
    { term: "Condensation", definition: "The change of state from gas to liquid as a gas is cooled." },
    { term: "Evaporation", definition: "The change from liquid to gas at the surface of a liquid, which can happen below the boiling point." },
  ],
  concepts: [
    {
      id: "esc8-u2-states-of-matter",
      title: "Solids, liquids and gases",
      skill: "Describe the arrangement, movement and spacing of particles in solids, liquids and gases and use this to explain their properties.",
      lesson: {
        sections: [
          {
            heading: "Arrangement and movement of particles",
            body: "In a **solid** the particles are close together in a fixed, regular pattern. They cannot move from place to place; they only vibrate about fixed positions. In a **liquid** the particles are close together but arranged randomly, and they can slide past each other. In a **gas** the particles are far apart, arranged randomly, and move quickly in all directions.",
          },
          {
            heading: "Explaining properties",
            body: "Solids keep their shape because strong forces hold the particles in position. Liquids flow because the particles can slide past one another, but they cannot be compressed easily because there is almost no space between the particles. Gases can be compressed because there are large gaps between the particles, and they fill any container because the particles move freely.",
          },
          {
            heading: "Gas pressure and diffusion",
            body: "Gas particles collide with the walls of their container. Each collision exerts a tiny force, and the many collisions together produce **gas pressure**. Heating a gas in a fixed volume makes the particles move faster, so they hit the walls more often and harder, and the pressure rises. Random movement also makes particles spread out from where there are many of them to where there are few. This is **diffusion**.",
          },
        ],
        keyFormulas: [
          { name: "Solid", statement: "Close together, regular pattern, vibrate in fixed positions" },
          { name: "Liquid", statement: "Close together, random arrangement, particles slide past each other" },
          { name: "Gas", statement: "Far apart, random arrangement, fast movement in all directions" },
        ],
        workedExample: {
          problem: "A sealed syringe holds 40 cm$^3$ of air. Explain why the plunger can be pushed in to 10 cm$^3$ but would not move if the syringe held 40 cm$^3$ of water.",
          solution: "Air is a gas, so its particles are far apart with large gaps between them. Pushing the plunger moves the particles closer together, so the volume falls. Water is a liquid: its particles are already touching, with almost no gaps, so they cannot be pushed any closer together and the volume stays the same.",
        },
      },
      questions: [
        {
          id: "esc8-u2-states-of-matter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes the particles in a gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Close together in a regular pattern and vibrating in fixed positions" },
              { id: "b", text: "Far apart and held in fixed positions" },
              { id: "c", text: "Close together, arranged randomly and sliding past each other" },
              { id: "d", text: "Far apart, arranged randomly and moving quickly in all directions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Particle model of a gas", statement: "Gas particles are far apart, arranged randomly and move quickly in all directions." },
            ],
            steps: [
              { reasoning: "Gas particles have large gaps between them and are free to move, so they are far apart and moving randomly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Far apart, arranged randomly and moving quickly in all directions",
            commonErrors: ["Choosing (a), which describes a solid.", "Choosing (b), which describes a liquid.", "Thinking that particles in a gas are held in position because the gas is invisible."],
            examinerNote: "B1 for (c) only.",
          },
        },
        {
          id: "esc8-u2-states-of-matter-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas can be compressed easily, but a liquid cannot. Explain this difference using the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spacing of particles", statement: "Compression reduces the gaps between particles. It is only possible if there are large gaps to remove." },
            ],
            steps: [
              { reasoning: "In a gas the particles are far apart, so there is a lot of empty space and the particles can be pushed closer together.", marks: 1, markCode: "B" },
              { reasoning: "In a liquid the particles are already close together (touching), so they cannot be pushed any closer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Gas particles are far apart so can be pushed closer together; liquid particles are already touching so cannot be pushed closer.",
            commonErrors: ["Saying that the particles in a liquid are bigger or harder.", "Stating only that gases are less dense without referring to spacing."],
            examinerNote: "Allow 'large gaps/spaces between gas particles' (oe). Ignore references to the particles 'being compressed'. Reject 'gas particles are smaller'.",
          },
        },
        {
          id: "esc8-u2-states-of-matter-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sealed metal container of fixed volume holds a gas. The container is heated and the pressure of the gas increases. Explain, using the particle model, why the pressure of the gas increases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas pressure", statement: "Gas pressure is caused by the particles colliding with the walls of the container." },
              { kind: "principle", name: "Temperature and particle energy", statement: "Heating gives particles more kinetic energy, so they move faster." },
            ],
            steps: [
              { reasoning: "Gas pressure is caused by particles colliding with the container walls and exerting a force on them.", marks: 1, markCode: "B" },
              { reasoning: "Heating transfers energy to the particles, so they gain kinetic energy and move faster.", marks: 1, markCode: "B" },
              { reasoning: "Faster particles collide with the walls more often (more collisions per second).", marks: 1, markCode: "B" },
              { reasoning: "Each collision has a greater force, so the total force per unit area, the pressure, increases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Particles move faster when heated, so they hit the walls more often and with more force; pressure increases.",
            commonErrors: ["Saying the particles expand or get bigger when heated.", "Saying there are more particles in the container.", "Not linking the pressure to collisions with the walls."],
            examinerNote: "Reject 'particles expand'. Allow 'hit the walls harder' for greater force (oe). Volume is fixed so do not credit 'more space'.",
          },
        },
        {
          id: "esc8-u2-states-of-matter-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates gases and liquids using a sealed 60 cm$^3$ syringe. First the syringe contains air. The student pushes the plunger in until the volume of air is 15 cm$^3$. The student then repeats the experiment with a syringe containing 60 cm$^3$ of water. In a second investigation, the student times how long it takes for the smell of perfume, released from a bottle at the front of a room, to reach the back of the room. The student repeats the investigation at different room temperatures.",
          parts: [
            { label: "a", prompt: "State the state of matter in which particles are in a fixed, regular pattern.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage decrease in the volume of the air when the plunger is pushed in from 60 cm$^3$ to 15 cm$^3$.", marks: 2 },
            { label: "c", prompt: "The water in the second syringe cannot be compressed in the same way. Explain why, using the particle model.", marks: 2 },
            { label: "d", prompt: "State the independent variable and the dependent variable in the perfume investigation.", marks: 2 },
            { label: "e", prompt: "The smell reaches the back of the room faster when the room is warmer. Explain why, using the particle model.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solid", statement: "Particles in a solid are close together in a fixed, regular pattern and vibrate about fixed positions." },
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage decrease} = \\frac{\\text{decrease}}{\\text{original}} \\times 100$" },
              { kind: "principle", name: "Diffusion", statement: "Particles spread out from a region of higher concentration to lower concentration through random movement." },
            ],
            steps: [
              { part: "a", reasoning: "Only in a solid are the particles held in a regular pattern.", working: "\\text{solid}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the decrease in volume and divide by the original volume.", working: "\\frac{60-15}{60} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{45}{60} \\times 100 = 75\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Particles in a liquid are already close together/touching, with almost no gaps between them.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So they cannot be pushed any closer, and the volume stays the same.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The independent variable is the one the student changes: the room temperature.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The dependent variable is the one measured: the time for the smell to reach the back of the room.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Perfume particles spread out by diffusion, moving randomly among the air particles.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "At a higher temperature the particles have more kinetic energy and move faster.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So the perfume particles travel to the back of the room in a shorter time.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) solid (b) $75\\%$ (c) liquid particles are already touching so cannot be pushed closer (d) independent: room temperature; dependent: time for smell to reach the back (e) warmer air gives faster particles, so faster diffusion",
            commonErrors: ["Dividing by the final volume (15) and giving 300%.", "Giving the volume decrease (45 cm$^3$) as the percentage.", "Giving the independent variable as 'the smell' or 'the perfume'."],
            examinerNote: "(b) allow ecf for an arithmetic slip in the subtraction. (d) the dependent variable must refer to time. (e) reject 'particles expand' or 'particles get lighter'.",
          },
        },
      ],
    },
    {
      id: "esc8-u2-changes-of-state",
      title: "Changes of state, melting and boiling points",
      skill: "Name changes of state, interpret melting and boiling points and explain heating curves using the particle model.",
      lesson: {
        sections: [
          {
            heading: "Names of the changes of state",
            body: "**Melting** is solid to liquid and **freezing** is liquid to solid. **Boiling** or **evaporation** is liquid to gas, and **condensation** is gas to liquid. **Sublimation** is the change from solid directly to gas. Evaporation happens at the surface of a liquid at any temperature, whereas boiling happens throughout the liquid at the boiling point.",
          },
          {
            heading: "Melting points, boiling points and states",
            body: "A pure substance has a fixed melting point and boiling point. At a temperature below the melting point it is a solid. Between the melting point and the boiling point it is a liquid. Above the boiling point it is a gas. For water the melting point is $0^\\circ\\text{C}$ and the boiling point is $100^\\circ\\text{C}$.",
          },
          {
            heading: "Heating curves",
            body: "When a solid is heated, its temperature rises until the melting point. The temperature then stays constant while the solid melts. The energy supplied is used to overcome the forces between the particles, not to make them move faster. After all the solid has melted the temperature rises again. A flat section also appears at the boiling point.",
          },
        ],
        keyFormulas: [
          { name: "Solid to liquid", statement: "Melting (at the melting point)" },
          { name: "Liquid to gas", statement: "Boiling or evaporation" },
          { name: "Gas to liquid", statement: "Condensation" },
          { name: "Range of liquid", statement: "$\\text{boiling point} - \\text{melting point}$" },
        ],
        workedExample: {
          problem: "Ethanol melts at $-114^\\circ\\text{C}$ and boils at $78^\\circ\\text{C}$. State its state at $20^\\circ\\text{C}$ and calculate the range of temperatures over which it is a liquid.",
          solution: "$20^\\circ\\text{C}$ is above the melting point and below the boiling point, so ethanol is a liquid. Range $= 78 - (-114) = 78 + 114 = 192^\\circ\\text{C}$.",
        },
      },
      questions: [
        {
          id: "esc8-u2-changes-of-state-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the name of the change of state from a gas to a liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Sublimation" },
              { id: "c", text: "Freezing" },
              { id: "d", text: "Condensation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Condensation", statement: "The change of state from gas to liquid on cooling." },
            ],
            steps: [
              { reasoning: "A gas turning into a liquid as it cools is condensation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Condensation",
            commonErrors: ["Choosing evaporation, which is the reverse change (liquid to gas).", "Choosing freezing, which is liquid to solid."],
            examinerNote: "B1 for (b) only.",
          },
        },
        {
          id: "esc8-u2-changes-of-state-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Substance X has a melting point of $-7^\\circ\\text{C}$ and a boiling point of $59^\\circ\\text{C}$. Calculate the range of temperatures, in $^\\circ\\text{C}$, over which substance X is a liquid.",
          response: { type: "numeric", parts: [{ label: "Range", answer: 66, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Liquid range", statement: "A substance is liquid between its melting point and its boiling point." },
            ],
            steps: [
              { reasoning: "Subtract the melting point from the boiling point, taking care with the negative number.", working: "59 - (-7)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "59 + 7 = 66\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$66^\\circ\\text{C}$",
            commonErrors: ["Calculating $59 - 7 = 52$ by ignoring the negative sign.", "Adding the two temperatures to get 52."],
            examinerNote: "M1 for 59 - (-7) or 59 + 7 (oe). A1 for 66 with the unit allowed to be omitted if the stem unit is clear.",
          },
        },
        {
          id: "esc8-u2-changes-of-state-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A beaker of water is heated on a Bunsen burner. When the water reaches $100^\\circ\\text{C}$ it begins to boil. The student keeps heating, but the thermometer reading stays at $100^\\circ\\text{C}$ while the water boils. Explain, using the particle model, why the temperature does not rise while the water boils.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy and changes of state", statement: "During a change of state the energy supplied is used to overcome the forces between particles, not to raise the temperature." },
            ],
            steps: [
              { reasoning: "The burner is still supplying energy to the water.", marks: 1, markCode: "B" },
              { reasoning: "This energy is used to overcome (break) the forces of attraction between the water particles.", marks: 1, markCode: "B" },
              { reasoning: "The particles move apart from each other to become a gas (steam).", marks: 1, markCode: "B" },
              { reasoning: "The energy does not increase the average speed (kinetic energy) of the particles, so the temperature stays constant.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The energy supplied is used to overcome the forces between particles so they separate into a gas, not to make them move faster, so the temperature stays at $100^\\circ\\text{C}$.",
            commonErrors: ["Saying the energy is 'lost' or that the burner stops heating.", "Saying the thermometer is broken or the water cannot get hotter because 100 is the maximum possible temperature.", "Saying the particles stop moving."],
            examinerNote: "Allow 'bonds between particles' for 'forces between particles'. Reject 'energy is used up' without reference to overcoming forces.",
          },
        },
        {
          id: "esc8-u2-changes-of-state-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student heats a solid sample of naphthalene in a boiling tube placed in a beaker of hot water. The student records the temperature of the naphthalene every 2 minutes.\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |\n|---|---|---|---|---|---|---|---|---|\n| Temperature ($^\\circ\\text{C}$) | 40 | 55 | 70 | 80 | 80 | 80 | 87 | 94 |",
          parts: [
            { label: "a", prompt: "Use the table to determine the melting point of naphthalene.", marks: 1 },
            { label: "b", prompt: "State for how many minutes the temperature stayed constant.", marks: 1 },
            { label: "c", prompt: "Calculate the mean rate of temperature rise, in $^\\circ\\text{C}$ per minute, between 0 and 4 minutes.", marks: 2 },
            { label: "d", prompt: "Explain, using the particle model, why the temperature stayed constant between 6 and 10 minutes.", marks: 3 },
            { label: "e", prompt: "Suggest why the student heated the naphthalene in a beaker of hot water instead of heating it directly with a Bunsen burner.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Melting point", statement: "The temperature at which a pure solid melts. It appears as a flat section on a heating curve." },
              { kind: "formula", name: "Mean rate of change", statement: "$\\text{rate} = \\frac{\\text{change in temperature}}{\\text{time taken}}$" },
              { kind: "principle", name: "Energy and changes of state", statement: "During melting the energy supplied overcomes forces between particles instead of raising the temperature." },
            ],
            steps: [
              { part: "a", reasoning: "The temperature stays constant while the solid melts, so the flat section gives the melting point.", working: "80\\ ^\\circ\\text{C}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The temperature is 80 from 6 minutes until 10 minutes.", working: "10 - 6 = 4\\text{ minutes}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Find the change in temperature between 0 and 4 minutes, then divide by the time.", working: "\\frac{70 - 40}{4}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\frac{30}{4} = 7.5\\ ^\\circ\\text{C/min}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The naphthalene is melting, changing from solid to liquid.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Energy supplied is used to overcome the forces between the particles.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It is not used to increase the speed (kinetic energy) of the particles, so the temperature does not rise.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Naphthalene is flammable, so heating with a flame is a fire risk.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A water bath heats the sample gently and evenly, and keeps its temperature below $100^\\circ\\text{C}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $80^\\circ\\text{C}$ (b) 4 minutes (c) $7.5^\\circ\\text{C/min}$ (d) energy used to overcome forces between particles as it melts (e) naphthalene is flammable; water bath heats it gently and safely",
            commonErrors: ["Giving the melting point as 70 or 87 by reading values either side of the flat section.", "Calculating the rate as $70 \\div 4$ or $30 \\times 4$.", "Saying the temperature is constant because the heating has stopped."],
            examinerNote: "(b) allow 4 or 'between 6 and 10'. (c) allow 7.5 only; ecf for a wrongly read value. (e) allow 'to avoid the naphthalene catching fire' (oe).",
          },
        },
      ],
    },
  ],
};
