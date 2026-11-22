import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "myps1-u1-lesson-1-2",
  code: "1-2",
  title: "States of Matter",
  goal: "I CAN use the particle model to explain the properties of solids, liquids and gases, and explain changes of state, heating curves, evaporation and diffusion.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Key concept: Systems",
    "Related concept: Models",
  ],
  vocabulary: [
    { term: "Particle", definition: "A tiny piece of matter, such as an atom or molecule, that is too small to see." },
    { term: "Melting point", definition: "The temperature at which a solid changes into a liquid." },
    { term: "Boiling point", definition: "The temperature at which a liquid boils and changes into a gas throughout the liquid." },
    { term: "Evaporation", definition: "The change from liquid to gas at the surface of a liquid, at any temperature below the boiling point." },
    { term: "Condensation", definition: "The change from gas to liquid when a gas is cooled." },
    { term: "Diffusion", definition: "The spreading of particles from an area of higher concentration to an area of lower concentration." },
  ],
  concepts: [
    {
      id: "myps1-u1-particle-model",
      title: "The particle model",
      skill: "Use the particle model to describe the arrangement and movement of particles in solids, liquids and gases and to explain their properties.",
      lesson: {
        sections: [
          {
            heading: "Three states of matter",
            body: "All matter is made of tiny particles. The **particle model** explains how the arrangement and movement of the particles give each state its properties.\n\n- **Solid**: particles are packed closely in a regular pattern. They vibrate on the spot but cannot move around.\n- **Liquid**: particles are close together but in a random arrangement. They can slide past each other.\n- **Gas**: particles are far apart and move quickly in random directions.",
          },
          {
            heading: "Explaining properties",
            body: "A solid keeps its **shape** because its particles are held in fixed positions by strong forces. A liquid takes the shape of its container because its particles can move past each other, but it has a fixed volume because they stay close together.\n\nA gas fills its container because its particles spread out. Gases can be **compressed** (squashed) because there is lots of empty space between the particles; solids and liquids cannot be compressed much because their particles are already touching.\n\nThe model is useful but not perfect: it shows particles as solid spheres, but real particles are not like this.",
          },
        ],
        keyFormulas: [
          { name: "Solid", statement: "Close, regular, vibrate in place; fixed shape and volume" },
          { name: "Liquid", statement: "Close, random, slide past each other; fixed volume, no fixed shape" },
          { name: "Gas", statement: "Far apart, random, fast; no fixed shape or volume, easily compressed" },
        ],
        workedExample: {
          problem: "Use the particle model to explain why a gas can be compressed but a liquid cannot.",
          solution: "In a gas the particles are far apart, so there is a lot of empty space and the particles can be pushed closer together. In a liquid the particles are already touching, so there is almost no space for them to move closer. The liquid therefore cannot be compressed.",
        },
      },
      questions: [
        {
          id: "myps1-u1-particle-model-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes the particles in a solid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are close together in a regular pattern and vibrate" },
              { id: "b", text: "They are close together and slide past each other" },
              { id: "c", text: "They are stationary and do not move at all" },
              { id: "d", text: "They are far apart and move quickly in all directions" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Solids", statement: "Particles in a solid are close together in a regular arrangement and vibrate about fixed positions." },
            ],
            steps: [
              { reasoning: "In a solid the particles are closely packed in a regular pattern and vibrate in place.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** They are close together in a regular pattern and vibrate",
            commonErrors: ["Thinking particles in a solid do not move at all; they vibrate.", "Confusing solids with liquids or gases."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps1-u1-particle-model-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain, using the particle model, why a solid has a fixed shape.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Solids", statement: "Strong forces hold the particles of a solid in fixed positions in a regular arrangement." },
            ],
            steps: [
              { reasoning: "The particles are held in fixed positions by strong forces between them.", marks: 1, markCode: "B" },
              { reasoning: "They can only vibrate and cannot move past each other, so the shape does not change.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Particles are held in fixed positions by strong forces and can only vibrate, so they cannot move past each other and the solid keeps its shape.",
            commonErrors: ["Saying the particles are 'hard'; particles themselves are not described this way.", "Saying the particles do not move at all."],
            examinerNote: "B1 for strong forces / fixed positions oe. B1 for only vibrate / cannot move past each other oe.",
          },
        },
        {
          id: "myps1-u1-particle-model-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student pushes the plunger of a sealed syringe. When the syringe contains air, the plunger moves a long way. When it contains water, the plunger hardly moves.\n\nExplain these observations using the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compression", statement: "Gases can be compressed because their particles are far apart with empty space between them." },
              { kind: "property", name: "Liquids", statement: "Particles in a liquid are touching, so a liquid cannot easily be compressed." },
            ],
            steps: [
              { reasoning: "In air (a gas) the particles are far apart, with a lot of empty space between them.", marks: 1, markCode: "B" },
              { reasoning: "The plunger pushes the particles closer together, so the gas is compressed and the plunger moves a long way.", marks: 1, markCode: "B" },
              { reasoning: "In water (a liquid) the particles are already touching, so there is no empty space for them to move into.", marks: 1, markCode: "B" },
              { reasoning: "The volume of the liquid cannot decrease much, so the plunger hardly moves.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Gas particles are far apart so can be pushed closer together; liquid particles are already touching so cannot be pushed closer.",
            commonErrors: ["Saying the particles in water are 'smaller'.", "Saying the gas particles get smaller when compressed; their size does not change, only the spaces between them."],
            examinerNote: "B1 gas particles far apart / lots of space. B1 pushed closer together / compressed. B1 liquid particles touching / close together / no space. B1 cannot be pushed closer so plunger does not move far.",
          },
        },
        {
          id: "myps1-u1-particle-model-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A teacher shows three sealed containers: one holds a block of ice, one holds water and one holds water vapour (a gas). Students use the particle model to explain the properties of each.",
          parts: [
            { label: "a", prompt: "Describe the arrangement and movement of the particles in water vapour.", marks: 2 },
            { label: "b", prompt: "Explain why water takes the shape of the container it is poured into, but has a fixed volume.", marks: 2 },
            { label: "c", prompt: "Explain why the water vapour completely fills its container.", marks: 2 },
            { label: "d", prompt: "Evaluate one limitation of the particle model, as drawn with solid spheres.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gases", statement: "Gas particles are far apart and move quickly in random directions." },
              { kind: "property", name: "Liquids", statement: "Liquid particles are close together but can slide past each other." },
              { kind: "principle", name: "Models", statement: "A model is a simplified representation of reality and has limitations." },
            ],
            steps: [
              { part: "a", reasoning: "The particles are far apart (widely spaced) in a random arrangement.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "They move quickly in random directions.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The particles can slide past each other, so the liquid flows to take the shape of the container.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The particles stay close together, with little space between them, so the volume stays the same.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The particles move quickly in random directions and have weak or no attraction to each other.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "They spread out until they fill all the space available.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State a valid limitation: the model shows particles as solid spheres with empty space, but real particles are atoms and molecules with different shapes and sizes.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Explain the consequence: a diagram cannot show the movement or forces between particles, so it can be misleading about how particles behave.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Far apart, random arrangement, moving quickly in all directions (b) Particles slide past each other but stay close together (c) Fast random movement, so particles spread to fill the space (d) Particles are not solid spheres; a static diagram cannot show movement or forces.",
            commonErrors: ["In (a) saying gas particles are 'bigger' than liquid particles.", "In (c) saying gas particles expand rather than spread out."],
            examinerNote: "(d) Allow any sensible limitation, such as the model not showing forces, the real shape of particles, or that the spaces are not really empty. Ignore 'it is not real' on its own.",
          },
        },
        {
          id: "myps1-u1-particle-model-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter has particles that are close together in a regular arrangement and vibrate about fixed positions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas" },
              { id: "b", text: "Solid" },
              { id: "c", text: "Plasma" },
              { id: "d", text: "Liquid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Solids", statement: "Particles in a solid are close together in a regular arrangement and vibrate about fixed positions." },
            ],
            steps: [
              { reasoning: "The regular arrangement and vibration about fixed positions describe a solid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Solid",
            commonErrors: ["Choosing liquid; liquid particles are close but arranged randomly and slide past each other."],
            examinerNote: "B1 for solid.",
          },
        },
        {
          id: "myps1-u1-particle-model-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes the particles in a gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Close together but sliding past each other" },
              { id: "b", text: "Close together in a regular arrangement, vibrating in place" },
              { id: "c", text: "Attached to each other by strong forces" },
              { id: "d", text: "Far apart, moving quickly in random directions" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gases", statement: "Gas particles are far apart and move quickly in random directions." },
            ],
            steps: [
              { reasoning: "Gas particles are far apart with lots of empty space and move quickly in all directions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Far apart, moving quickly in random directions",
            commonErrors: ["Choosing the solid or liquid description because the particles are still tiny."],
            examinerNote: "B1 for far apart / fast random movement.",
          },
        },
        {
          id: "myps1-u1-particle-model-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A liquid takes the shape of whatever container it is poured into, but its volume stays the same. Explain this using the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Liquids", statement: "Liquid particles are close together but can slide past each other." },
            ],
            steps: [
              { reasoning: "The particles can slide past each other, so the liquid flows and takes the shape of the container.", marks: 1, markCode: "B" },
              { reasoning: "The particles stay close together with little space between them, so the volume does not change.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Liquid particles slide past each other, so the liquid takes the container's shape; the particles stay close together, so the volume is fixed.",
            commonErrors: ["Saying the particles are 'free' like in a gas, which would explain no fixed volume.", "Saying the particles are in fixed positions, which would give a fixed shape."],
            examinerNote: "B1 for sliding past each other / takes shape. B1 for staying close together / fixed volume.",
          },
        },
        {
          id: "myps1-u1-particle-model-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block of ice is heated until it melts into water. Describe what happens to the particles during melting, using the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heating and particles", statement: "Heating gives particles more energy, so they move faster and the forces holding them weaken." },
            ],
            steps: [
              { reasoning: "The particles gain energy from the heat and move faster / vibrate more.", marks: 1, markCode: "B" },
              { reasoning: "The forces holding them in fixed positions are overcome, so they can slide past each other — the solid becomes a liquid.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The particles gain energy and move faster until they can slide past each other, so the solid becomes a liquid.",
            commonErrors: ["Saying the particles 'break apart' or are destroyed.", "Saying the particles get bigger."],
            examinerNote: "B1 for gaining energy / moving faster. R1 for overcoming forces / sliding past each other.",
          },
        },
        {
          id: "myps1-u1-particle-model-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student draws the particles in a solid as solid blue spheres touching each other in a grid. Which statement correctly identifies a **limitation** of this model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shows that particles in a solid vibrate in fixed positions" },
              { id: "b", text: "It shows that a solid has a fixed shape" },
              { id: "c", text: "It does not show the real shape, size or movement of particles, or the forces between them" },
              { id: "d", text: "It shows that particles are close together" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Models", statement: "A model is a simplified representation of reality and has limitations." },
            ],
            steps: [
              { reasoning: "A limitation is something the model fails to show; the other options describe things the model does show correctly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It does not show the real shape, size or movement of particles, or the forces between them",
            commonErrors: ["Choosing a correct feature of the model as a limitation."],
            examinerNote: "B1 for (c). Accept 'the spaces are not really empty' oe.",
          },
        },
        {
          id: "myps1-u1-particle-model-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fixed mass of gas is trapped in a sealed syringe. The plunger is pushed in, so the gas now occupies a smaller volume. Explain what happens to the gas particles, using the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compression", statement: "Gases can be compressed because their particles are far apart with empty space between them." },
            ],
            steps: [
              { reasoning: "The particles are pushed closer together because there is empty space between them.", marks: 1, markCode: "B" },
              { reasoning: "The particles themselves do not change size; only the distances between them decrease, so the volume falls.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The gas particles are pushed closer together into the smaller space; their size stays the same but the volume decreases.",
            commonErrors: ["Saying the particles get smaller.", "Saying the particles slow down."],
            examinerNote: "B1 for particles pushed closer together / spaces between them decrease. R1 for particle size unchanged oe.",
          },
        },
        {
          id: "myps1-u1-particle-model-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student pours 250 cm$^3$ of water from a beaker into an empty measuring cylinder that can hold 400 cm$^3$.\n\nState the volume of water in the measuring cylinder and explain your answer using the particle model.",
          response: { type: "numeric", parts: [{ label: "Volume of water", answer: 250, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Liquids", statement: "Liquid particles stay close together, so a liquid has a fixed volume whatever container it is in." },
            ],
            steps: [
              { reasoning: "A liquid has a fixed volume, so pouring it into a larger container does not change its volume.", marks: 1, markCode: "B" },
              { reasoning: "The volume remains 250 cm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250\\text{ cm}^3$ — the liquid keeps its fixed volume.",
            commonErrors: ["Answering 400 cm$^3$ because the cylinder is bigger.", "Saying the water 'spreads out' so its volume increases."],
            examinerNote: "B1 for fixed volume / particles stay close. A1 for 250 cm³.",
          },
        },
        {
          id: "myps1-u1-particle-model-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas in a syringe occupies 60 cm$^3$. The plunger is pushed in until the gas occupies 15 cm$^3$.\n\nCalculate the factor by which the volume has decreased.",
          response: { type: "numeric", parts: [{ label: "Factor of decrease", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compression", statement: "Gases can be compressed because their particles are far apart with empty space between them." },
            ],
            steps: [
              { reasoning: "Divide the original volume by the new volume.", working: "\\frac{60}{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The volume decreased by a factor of $4$",
            commonErrors: ["Dividing 15 by 60 and getting $0.25$ (that is the fraction remaining, not the factor of decrease).", "Subtracting 15 from 60 instead of dividing."],
            examinerNote: "M1 for 60/15. A1 for 4. Accept 0.25 only if the question asked for the fraction remaining.",
          },
        },
        {
          id: "myps1-u1-particle-model-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sealed syringe contains 90 cm$^3$ of air. The plunger is pushed in to reduce the volume.\n\nCalculate (i) the new volume if the volume is halved, (ii) the new volume as a fraction of the original if the gas occupies 30 cm$^3$, and (iii) the factor by which 30 cm$^3$ is smaller than 90 cm$^3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Volume after halving", answer: 45, unit: "cm³" },
              { label: "Volume as a fraction of the original", answer: 0.33, tolerance: 0.01 },
              { label: "Factor by which 30 cm³ is smaller than 90 cm³", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compression", statement: "Gases can be compressed because their particles are far apart; compressing reduces the volume, not the size of the particles." },
            ],
            steps: [
              { reasoning: "Half of 90 cm$^3$.", working: "\\frac{90}{2}=45\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Divide the new volume by the original volume.", working: "\\frac{30}{90}=\\frac{1}{3}\\approx0.33", marks: 1, markCode: "M" },
              { reasoning: "Divide the original volume by the new volume.", working: "\\frac{90}{30}=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45\\text{ cm}^3$, $\\frac{1}{3}$ (or $0.33$), factor $3$",
            commonErrors: ["Confusing the fraction remaining with the factor of decrease.", "Using 45 cm$^3$ instead of 30 cm$^3$ in parts (ii) and (iii)."],
            examinerNote: "M1 for each correct method. A1 for the factor. Accept $0.333$ for part (ii).",
          },
        },
        {
          id: "myps1-u1-particle-model-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The volume of a fixed mass of gas increases by 25% when it is heated. The initial volume of the gas is 80 cm$^3$.\n\nCalculate (i) the final volume, (ii) the increase in volume, and (iii) the final volume as a percentage of the initial volume.",
          response: {
            type: "numeric",
            parts: [
              { label: "Final volume", answer: 100, unit: "cm³" },
              { label: "Increase in volume", answer: 20, unit: "cm³" },
              { label: "Final volume as a percentage of the initial volume", answer: 125, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermal expansion of gases", statement: "Heating a gas makes its particles move faster and further apart, so the volume increases." },
            ],
            steps: [
              { reasoning: "Increase of 25% of 80 cm$^3$ is 20 cm$^3$, so the final volume is 100 cm$^3$.", working: "80+0.25\\times80=100\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Subtract the initial volume from the final volume.", working: "100-80=20\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "100 is 125% of 80.", working: "\\frac{100}{80}\\times100=125\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100\\text{ cm}^3$, $20\\text{ cm}^3$, $125\\%$",
            commonErrors: ["Calculating 25% of 100 instead of 80.", "Answering 25 for part (iii) instead of 125%."],
            examinerNote: "M1 for each correct method. A1 for 125%. Allow ecf on later parts.",
          },
        },
        {
          id: "myps1-u1-particle-model-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student is asked to explain why a gas completely fills its container, while a liquid poured into the same container only fills the bottom part.",
          parts: [
            { label: "a", prompt: "Describe the arrangement and movement of particles in a gas.", marks: 1 },
            { label: "b", prompt: "Describe the arrangement and movement of particles in a liquid.", marks: 1 },
            { label: "c", prompt: "Explain why the gas fills the whole container.", marks: 1 },
            { label: "d", prompt: "Explain why the liquid does not fill the whole container.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gases", statement: "Gas particles are far apart and move quickly in random directions." },
              { kind: "property", name: "Liquids", statement: "Liquid particles are close together but can slide past each other." },
            ],
            steps: [
              { part: "a", reasoning: "The particles are far apart in a random arrangement and move quickly in all directions.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The particles are close together in a random arrangement and slide past each other.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The particles move quickly and randomly and have weak attraction, so they spread out until they fill all the space.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The particles are held close together by forces, so the liquid keeps a fixed volume and only fills the bottom of a tall container.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Gas particles move quickly in random directions and spread to fill all space; liquid particles stay close together, so the liquid keeps its fixed volume.",
            commonErrors: ["In (d) saying the liquid 'cannot' fill the container rather than explaining it keeps a fixed volume.", "In (a) or (b) describing the wrong state."],
            examinerNote: "(d) Allow 'the liquid is too heavy to fill the container' only if linked to fixed volume; otherwise award R1 for particles staying close together.",
          },
        },
        {
          id: "myps1-u1-particle-model-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates how heating affects the particles in a fixed mass of gas trapped in a sealed syringe. She measures the volume of the gas at three temperatures.",
          parts: [
            { label: "a", prompt: "Describe the arrangement and movement of the gas particles at room temperature.", marks: 2 },
            { label: "b", prompt: "Explain, using the particle model, why the volume of the gas increases when it is heated.", marks: 3 },
            { label: "c", prompt: "Explain why the mass of the gas does not change during heating.", marks: 1 },
            { label: "d", prompt: "Evaluate one limitation of using the particle model to explain this investigation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gases", statement: "Gas particles are far apart and move quickly in random directions." },
              { kind: "principle", name: "Heating and particles", statement: "Heating gives particles more energy, so they move faster and spread further apart." },
              { kind: "principle", name: "Conservation of mass", statement: "Heating changes the state or volume of a substance but not the number or mass of its particles." },
            ],
            steps: [
              { part: "a", reasoning: "The particles are far apart with empty space between them.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "They move quickly in random directions.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Heating gives the particles more energy.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The particles move faster and spread further apart.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Because the syringe is sealed, the gas occupies a larger volume.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "No particles are added or removed, so the mass stays the same.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "State a valid limitation: the model shows particles as solid spheres with empty space, but real particles are atoms and molecules with different shapes.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Explain the consequence: a static diagram cannot show particle movement or forces, so it only gives a simplified picture.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Far apart, random arrangement, fast random movement (b) Heating gives particles more energy so they move faster and spread further apart, increasing the volume (c) No particles are added or removed, so mass is unchanged (d) Particles are not solid spheres; the model cannot show movement or forces.",
            commonErrors: ["In (b) saying the particles 'expand' or get bigger.", "In (c) saying the mass increases because the gas gets bigger.", "In (d) saying 'the model is wrong' without identifying what it fails to show."],
            examinerNote: "(b) Allow 'particles push further apart' oe. (d) Ignore 'it is only a model' without a specific limitation.",
          },
        },
      ],
    },
    {
      id: "myps1-u1-changes-of-state",
      title: "Changes of state and diffusion",
      skill: "Explain changes of state, interpret heating curves, distinguish evaporation from boiling, and explain diffusion.",
      lesson: {
        sections: [
          {
            heading: "Changes of state",
            body: "Heating gives particles more energy. The changes of state are:\n\n- **Melting**: solid to liquid, at the melting point.\n- **Boiling**: liquid to gas throughout the liquid, at the boiling point.\n- **Condensing**: gas to liquid.\n- **Freezing**: liquid to solid.\n\nPure water melts at $0\\ ^\\circ\\text{C}$ and boils at $100\\ ^\\circ\\text{C}$. Mass does not change in a change of state, because the same particles are present.",
          },
          {
            heading: "Heating curves",
            body: "On a heating curve (temperature against time), the temperature rises while a substance is being heated in one state. During melting or boiling the temperature stays **constant** (a flat section), even though heating continues. The energy supplied is used to break the forces between particles, not to raise the temperature.\n\nOn cooling, the curve falls and is flat during condensing and freezing.",
          },
          {
            heading: "Evaporation and diffusion",
            body: "**Boiling** happens only at the boiling point and bubbles form throughout the liquid. **Evaporation** happens at the surface at any temperature, as the fastest particles escape. It is faster when the liquid is warmer, the surface area is larger, or there is a draught.\n\n**Diffusion** is the net movement of particles from where they are in higher concentration to where they are in lower concentration, because of their random motion. It happens quickly in gases and slowly in liquids, and does not happen in solids.",
          },
        ],
        keyFormulas: [
          { name: "Flat section on a heating curve", statement: "A change of state is taking place; the temperature stays constant" },
          { name: "Boiling vs evaporation", statement: "Boiling: at the boiling point, throughout the liquid. Evaporation: at the surface, at any temperature" },
          { name: "Diffusion", statement: "Particles spread from high to low concentration" },
        ],
        workedExample: {
          problem: "A solid is heated steadily. Its temperature is $60\\ ^\\circ\\text{C}$ at 0 minutes and reaches $80\\ ^\\circ\\text{C}$ at 4 minutes, then stays at $80\\ ^\\circ\\text{C}$ until 10 minutes. State what is happening between 4 and 10 minutes and give the melting point.",
          solution: "The temperature is constant, so the substance is melting. The melting point is $80\\ ^\\circ\\text{C}$. The energy supplied is used to overcome the forces between particles, not to raise the temperature.",
        },
      },
      questions: [
        {
          id: "myps1-u1-changes-of-state-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the name of the change of state from gas to liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation" },
              { id: "b", text: "Melting" },
              { id: "c", text: "Freezing" },
              { id: "d", text: "Evaporation" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Condensation", statement: "Condensation is the change from gas to liquid on cooling." },
            ],
            steps: [
              { reasoning: "Gas changing to liquid is condensation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Condensation",
            commonErrors: ["Choosing evaporation, which is liquid to gas.", "Choosing freezing, which is liquid to solid."],
            examinerNote: "B1 for condensation.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pure substance has a melting point of $-7\\ ^\\circ\\text{C}$ and a boiling point of $58\\ ^\\circ\\text{C}$.\n\nState the physical state of the substance at $25\\ ^\\circ\\text{C}$ and give a reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "State and temperature", statement: "Between its melting point and boiling point, a substance is a liquid." },
            ],
            steps: [
              { reasoning: "$25\\ ^\\circ\\text{C}$ is above the melting point and below the boiling point, so the substance is a liquid.", marks: 1, markCode: "B" },
              { reasoning: "Give the reason in terms of both temperatures: higher than $-7\\ ^\\circ\\text{C}$ so it has melted, but lower than $58\\ ^\\circ\\text{C}$ so it has not boiled.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Liquid, because 25 degrees is above the melting point ($-7\\ ^\\circ\\text{C}$) and below the boiling point ($58\\ ^\\circ\\text{C}$).",
            commonErrors: ["Choosing solid because $25\\ ^\\circ\\text{C}$ is a positive number.", "Ignoring the negative melting point."],
            examinerNote: "B1 for liquid. R1 for the reason referring to both the melting point and boiling point oe. No mark for the reason if the state is wrong.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Wet washing dries on a washing line even though the air temperature is only $15\\ ^\\circ\\text{C}$, far below the boiling point of water.\n\nExplain how the water leaves the washing and give **two** conditions that would make the washing dry faster.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaporation", statement: "Evaporation is the escape of the fastest-moving particles from the surface of a liquid at any temperature below the boiling point." },
            ],
            steps: [
              { reasoning: "The water evaporates: the fastest-moving water particles at the surface have enough energy to escape from the liquid.", marks: 1, markCode: "B" },
              { reasoning: "This happens at any temperature, so the water does not need to boil.", marks: 1, markCode: "R" },
              { reasoning: "A condition that increases evaporation, for example a higher temperature or a draught (wind).", marks: 1, markCode: "B" },
              { reasoning: "A second different condition, for example a larger surface area (spreading the clothes out) or drier air.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The water evaporates from the surface as the fastest particles escape. It dries faster with a higher temperature, wind, a larger surface area, or drier air.",
            commonErrors: ["Saying the water 'boils' at $15\\ ^\\circ\\text{C}$.", "Saying the water disappears or breaks down."],
            examinerNote: "B1 evaporation / particles escape from the surface. R1 occurs below the boiling point / at any temperature oe. B1 each for two different valid conditions. Reject 'sunlight' only if no link to temperature is given; allow 'it is sunny' as higher temperature.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student heats a solid, substance Z, with a constant heat supply and records its temperature every 2 minutes.\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| Temperature ($^\\circ\\text{C}$) | 20 | 50 | 80 | 80 | 80 | 110 | 160 | 218 | 218 |\n\nThe substance is solid at 0 minutes and starts to melt at 4 minutes.",
          parts: [
            { label: "a", prompt: "State the melting point of substance Z.", marks: 1 },
            { label: "b", prompt: "Calculate the average rate of temperature rise, in $^\\circ\\text{C}$ per minute, during the first 4 minutes.", marks: 2 },
            { label: "c", prompt: "State the physical state of substance Z at 12 minutes.", marks: 1 },
            { label: "d", prompt: "Explain, using the particle model, why the temperature stays constant between 4 and 8 minutes although the substance is still being heated.", marks: 3 },
            { label: "e", prompt: "At 20 minutes, some of the gas from substance Z escapes through a small hole in the apparatus and the smell reaches the other side of the room. Name this process and explain why it happens.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heating curves", statement: "Temperature stays constant during a change of state." },
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate}=\\dfrac{\\text{change in temperature}}{\\text{time taken}}$" },
              { kind: "principle", name: "Diffusion", statement: "Particles move from an area of higher concentration to an area of lower concentration because of random motion." },
            ],
            steps: [
              { part: "a", reasoning: "The flat section at 4 to 8 minutes shows melting, at $80\\ ^\\circ\\text{C}$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Temperature change divided by time: $80-20=60$ over 4 minutes.", working: "\\frac{80-20}{4}=\\frac{60}{4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "15\\ ^\\circ\\text{C per minute}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "At 12 minutes the substance is above its melting point ($80\\ ^\\circ\\text{C}$) and below its boiling point ($218\\ ^\\circ\\text{C}$), so it is a liquid.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The substance is melting: the solid is changing to a liquid.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The energy supplied is used to overcome (break) the forces holding the particles in fixed positions.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It is not used to increase the speed or energy of movement of the particles, so the temperature does not rise.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The process is diffusion.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The gas particles move randomly and spread from a region of high concentration to a region of low concentration.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $80\\ ^\\circ\\text{C}$ (b) $15\\ ^\\circ\\text{C}$ per minute (c) Liquid (d) The solid is melting; energy breaks forces between particles instead of raising the temperature (e) Diffusion: particles spread from high to low concentration.",
            commonErrors: ["In (b) dividing by 2 instead of 4, or using the temperature of 80 without subtracting the start value.", "In (c) answering gas because the temperature is above $100\\ ^\\circ\\text{C}$; substance Z does not boil until $218\\ ^\\circ\\text{C}$.", "In (d) saying the heat 'stops' being supplied."],
            examinerNote: "(b) M1 for (80 - 20) / 4 oe, A1 for 15 with unit. (d) Allow 'potential energy of particles increases' oe. Ignore 'temperature stays the same because it is a pure substance'.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the name of the change of state from solid to liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation" },
              { id: "b", text: "Freezing" },
              { id: "c", text: "Boiling" },
              { id: "d", text: "Melting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Melting", statement: "Melting is the change of state from solid to liquid at the melting point." },
            ],
            steps: [
              { reasoning: "Solid changing to liquid is melting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Melting",
            commonErrors: ["Choosing freezing, which is liquid to solid.", "Choosing boiling, which is liquid to gas."],
            examinerNote: "B1 for melting.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At what temperature does pure water boil at standard atmospheric pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$100\\ ^\\circ\\text{C}$" },
              { id: "b", text: "$50\\ ^\\circ\\text{C}$" },
              { id: "c", text: "$0\\ ^\\circ\\text{C}$" },
              { id: "d", text: "$1000\\ ^\\circ\\text{C}$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Boiling point", statement: "Pure water boils at $100\\ ^\\circ\\text{C}$ at standard atmospheric pressure." },
            ],
            steps: [
              { reasoning: "Water boils at $100\\ ^\\circ\\text{C}$; it melts at $0\\ ^\\circ\\text{C}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $100\\ ^\\circ\\text{C}$",
            commonErrors: ["Choosing $0\\ ^\\circ\\text{C}$, which is the melting point.", "Choosing a temperature from a different substance."],
            examinerNote: "B1 for 100°C. Accept 373 K only if the unit is stated.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a heating curve for a pure substance, the temperature stays constant between 4 and 8 minutes even though the substance is still being heated. Explain what this shows.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Heating curves", statement: "Temperature stays constant during a change of state even though heating continues." },
            ],
            steps: [
              { reasoning: "A flat section on a heating curve shows that a change of state (melting or boiling) is taking place.", marks: 1, markCode: "B" },
              { reasoning: "The energy supplied is being used to break forces between particles rather than to raise the temperature.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The substance is changing state (melting or boiling); the energy goes into separating the particles, not into raising the temperature.",
            commonErrors: ["Saying the heating has stopped.", "Saying the substance has reached a maximum temperature it cannot pass."],
            examinerNote: "B1 for change of state / melting or boiling. R1 for energy used to break forces oe.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give **two** differences between evaporation and boiling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaporation", statement: "Evaporation is the escape of the fastest particles from the surface of a liquid at any temperature below the boiling point." },
              { kind: "definition", name: "Boiling", statement: "Boiling is the change of liquid to gas throughout the liquid, at the boiling point." },
            ],
            steps: [
              { reasoning: "Evaporation happens at the surface only, while boiling happens throughout the liquid (bubbles form everywhere).", marks: 1, markCode: "B" },
              { reasoning: "Evaporation can happen at any temperature below the boiling point, while boiling happens only at the boiling point.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Evaporation: surface only, any temperature. Boiling: throughout the liquid, only at the boiling point.",
            commonErrors: ["Saying evaporation only happens at 100°C.", "Saying boiling can happen at room temperature."],
            examinerNote: "B1 for surface vs throughout. B1 for any temperature vs boiling point only.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student opens a bottle of perfume at the front of a classroom and the smell reaches students at the back. Which process causes this, and in which direction do the particles move?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boiling; particles move in straight lines" },
              { id: "b", text: "Condensation; particles move from cold to hot regions" },
              { id: "c", text: "Evaporation; particles move from low to high concentration" },
              { id: "d", text: "Diffusion; particles move randomly from high to low concentration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion", statement: "Diffusion is the net movement of particles from high to low concentration because of their random motion." },
            ],
            steps: [
              { reasoning: "The perfume vapour spreads from where the concentration is high to where it is low by random motion — diffusion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Diffusion; particles move randomly from high to low concentration",
            commonErrors: ["Choosing evaporation; evaporation is the liquid changing to gas, not the spreading of the gas.", "Choosing the wrong direction (low to high)."],
            examinerNote: "B1 for diffusion and high to low concentration.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "On a cooling curve, the temperature of a substance stays constant for a period while it cools. Explain what is happening during this flat section, using the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cooling curves", statement: "Temperature stays constant during freezing or condensing on a cooling curve." },
            ],
            steps: [
              { reasoning: "The flat section shows a change of state — condensing (gas to liquid) or freezing (liquid to solid).", marks: 1, markCode: "B" },
              { reasoning: "Energy is being lost to the surroundings, and the particles slow down enough to form stronger attractions / fixed positions, without the temperature falling.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The substance is condensing or freezing; the energy lost lets the particles slow and join together, so the temperature stays constant during the change of state.",
            commonErrors: ["Saying the substance 'stops cooling'.", "Describing melting or boiling instead of condensing or freezing."],
            examinerNote: "B1 for condensing/freezing. R1 for particles slowing / energy lost to surroundings oe.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student heats a solid and records its temperature. Over the first 4 minutes the temperature rises steadily from $20\\ ^\\circ\\text{C}$ to $60\\ ^\\circ\\text{C}$.\n\nCalculate the average rate of temperature rise in $^\\circ\\text{C}$ per minute.",
          response: { type: "numeric", parts: [{ label: "Rate of temperature rise", answer: 10, unit: "°C/min" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate}=\\dfrac{\\text{change in temperature}}{\\text{time taken}}$" },
            ],
            steps: [
              { reasoning: "Divide the temperature change by the time taken.", working: "\\frac{60-20}{4}=\\frac{40}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "10\\ ^\\circ\\text{C per minute}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\ ^\\circ\\text{C}$ per minute",
            commonErrors: ["Dividing 60 by 4 instead of the change 40.", "Dividing by 2 instead of 4 minutes."],
            examinerNote: "M1 for (60-20)/4. A1 for 10 °C/min.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A liquid is heated and its temperature rises from $15\\ ^\\circ\\text{C}$ to $75\\ ^\\circ\\text{C}$ in 6 minutes.\n\nCalculate the average rate of temperature rise in $^\\circ\\text{C}$ per minute.",
          response: { type: "numeric", parts: [{ label: "Rate of temperature rise", answer: 10, unit: "°C/min" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate}=\\dfrac{\\text{change in temperature}}{\\text{time taken}}$" },
            ],
            steps: [
              { reasoning: "Divide the temperature change by the time taken.", working: "\\frac{75-15}{6}=\\frac{60}{6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "10\\ ^\\circ\\text{C per minute}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\ ^\\circ\\text{C}$ per minute",
            commonErrors: ["Dividing 75 by 6 instead of the change 60.", "Forgetting the unit."],
            examinerNote: "M1 for (75-15)/6. A1 for 10 °C/min.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student heats a solid with a constant heat supply and records the temperature every 2 minutes.\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 |\n| --- | --- | --- | --- | --- | --- | --- |\n| Temperature ($^\\circ\\text{C}$) | 10 | 40 | 70 | 70 | 70 | 100 |",
          response: {
            type: "numeric",
            parts: [
              { label: "Melting point", answer: 70, unit: "°C" },
              { label: "Duration of melting", answer: 4, unit: "min" },
              { label: "Rate of temperature rise during first 4 minutes", answer: 15, unit: "°C/min" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heating curves", statement: "The flat section shows the change of state; its temperature is the melting or boiling point." },
            ],
            steps: [
              { reasoning: "The flat section is at $70\\ ^\\circ\\text{C}$, so that is the melting point.", marks: 1, markCode: "B" },
              { reasoning: "The flat section runs from 4 to 8 minutes, so melting lasts 4 minutes.", marks: 1, markCode: "B" },
              { reasoning: "Rate = temperature change divided by time: $(70-10)/4$.", working: "\\frac{70-10}{4}=\\frac{60}{4}=15\\ ^\\circ\\text{C per minute}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$70\\ ^\\circ\\text{C}$, $4\\text{ min}$, $15\\ ^\\circ\\text{C}$ per minute",
            commonErrors: ["Reading the melting point as 100°C because that is water's boiling point.", "Counting the flat section as 2 minutes instead of 4.", "Dividing 70 by 4 instead of the change 60."],
            examinerNote: "B1 for 70°C. B1 for 4 min. M1 for (70-10)/4; allow 15 °C/min without unit for M1 only.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student heats a pure substance with a constant heat supply and records its temperature every 2 minutes.\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| Temperature ($^\\circ\\text{C}$) | 5 | 35 | 65 | 65 | 65 | 95 | 125 | 155 | 155 | 155 |",
          response: {
            type: "numeric",
            parts: [
              { label: "Melting point", answer: 65, unit: "°C" },
              { label: "Boiling point", answer: 155, unit: "°C" },
              { label: "Rate of temperature rise during the first 4 minutes", answer: 15, unit: "°C/min" },
              { label: "Duration of boiling", answer: 4, unit: "min" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Heating curves", statement: "Each flat section shows a change of state; the first flat section is melting, the second is boiling." },
            ],
            steps: [
              { reasoning: "The first flat section is at $65\\ ^\\circ\\text{C}$, so the melting point is $65\\ ^\\circ\\text{C}$.", marks: 1, markCode: "B" },
              { reasoning: "The second flat section is at $155\\ ^\\circ\\text{C}$, so the boiling point is $155\\ ^\\circ\\text{C}$.", marks: 1, markCode: "B" },
              { reasoning: "Rate = temperature change divided by time: $(65-5)/4$.", working: "\\frac{65-5}{4}=\\frac{60}{4}=15\\ ^\\circ\\text{C per minute}", marks: 1, markCode: "M" },
              { reasoning: "The boiling flat section runs from 14 to 18 minutes, so boiling lasts 4 minutes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$65\\ ^\\circ\\text{C}$, $155\\ ^\\circ\\text{C}$, $15\\ ^\\circ\\text{C}$ per minute, $4\\text{ min}$",
            commonErrors: ["Swapping the melting and boiling points.", "Using 100°C as the boiling point even though the data show 155°C.", "Calculating the rate over 6 minutes instead of 4."],
            examinerNote: "B1 for each correct point read from the flat sections. M1 for (65-5)/4. B1 for 4 min.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student boils water in a beaker. The temperature of the water stays at $100\\ ^\\circ\\text{C}$ while bubbles form and the water level falls.\n\nExplain, using the particle model, why the temperature stays constant during boiling even though heat is still being supplied.",
          parts: [
            { label: "a", prompt: "Describe what happens to the particles of water during boiling.", marks: 1 },
            { label: "b", prompt: "Explain where the energy supplied by the heat goes.", marks: 2 },
            { label: "c", prompt: "Explain why this means the temperature does not rise.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Changes of state", statement: "During boiling the liquid changes to gas throughout the liquid at the boiling point." },
              { kind: "principle", name: "Energy during a change of state", statement: "Energy supplied during a change of state is used to break forces between particles, not to raise the temperature." },
            ],
            steps: [
              { part: "a", reasoning: "The water particles gain enough energy to overcome the forces holding them together and escape as gas throughout the liquid.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The energy is used to overcome (break) the forces between the water particles.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It is also used to push the particles apart so they become a gas with much more space between them.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Because the energy is used for the change of state rather than to make the particles move faster, the temperature stays constant.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "During boiling the particles gain energy to break free from the liquid and become gas; the supplied energy goes into separating the particles, so the temperature stays at $100\\ ^\\circ\\text{C}$.",
            commonErrors: ["Saying the heat 'escapes' or the thermometer is broken.","Saying the water has reached its maximum temperature."],
            examinerNote: "(b) Allow 'energy becomes potential energy of separation' oe. Ignore 'the temperature cannot go above 100°C' without particle reasoning.",
          },
        },
        {
          id: "myps1-u1-changes-of-state-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student cools a gas, substance W, with a constant cooling rate and records its temperature every 2 minutes.\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| Temperature ($^\\circ\\text{C}$) | 120 | 95 | 70 | 70 | 70 | 45 | 20 | -5 | -5 |\n\nThe substance is a gas at 0 minutes.",
          parts: [
            { label: "a", prompt: "State the boiling point of substance W.", marks: 1 },
            { label: "b", prompt: "State the physical state of substance W at 8 minutes.", marks: 1 },
            { label: "c", prompt: "Calculate the average rate of temperature fall, in $^\\circ\\text{C}$ per minute, during the first 4 minutes.", marks: 2 },
            { label: "d", prompt: "Explain, using the particle model, why the temperature stays constant between 4 and 8 minutes.", marks: 3 },
            { label: "e", prompt: "At 20 minutes some of the vapour from substance W escapes and the smell reaches across the room. Name this process and explain why it happens.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cooling curves", statement: "Temperature stays constant during condensing or freezing." },
              { kind: "formula", name: "Rate of change", statement: "$\\text{rate}=\\dfrac{\\text{change in temperature}}{\\text{time taken}}$" },
              { kind: "principle", name: "Diffusion", statement: "Particles spread from high to low concentration because of random motion." },
            ],
            steps: [
              { part: "a", reasoning: "The first flat section (4 to 8 minutes) is at $70\\ ^\\circ\\text{C}$, so the boiling point is $70\\ ^\\circ\\text{C}$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "At 8 minutes the substance is at the end of the flat section; it is condensing / becoming a liquid.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Temperature change divided by time: $120-70=50$ over 4 minutes.", working: "\\frac{120-70}{4}=\\frac{50}{4}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "12.5\\ ^\\circ\\text{C per minute}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The substance is condensing: the gas is changing to a liquid.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Energy is lost to the surroundings and used to let the particles slow down and form attractions, not to lower the temperature further.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The particles are joining together into a liquid, which keeps the temperature constant during the change of state.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The process is diffusion.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The gas particles move randomly and spread from a region of high concentration to a region of low concentration.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $70\\ ^\\circ\\text{C}$ (b) Liquid (condensing) (c) $12.5\\ ^\\circ\\text{C}$ per minute (d) The gas is condensing; energy lost lets particles slow and join, keeping the temperature constant (e) Diffusion: particles spread from high to low concentration.",
            commonErrors: ["In (a) giving the melting point ($-5\\ ^\\circ\\text{C}$) instead of the first flat section.", "In (b) answering gas because the temperature is still above $0\\ ^\\circ\\text{C}$.", "In (c) dividing by 2 instead of 4, or dividing 120 by 4 without subtracting."],
            examinerNote: "(a) Allow 'condensing point' oe. (c) M1 for (120-70)/4, A1 for 12.5 with unit. (d) Allow 'particles lose energy and slow down' oe. (e) Ignore 'evaporation' unless linked to particles spreading.",
          },
        },
      ],
    },
  ],
};
