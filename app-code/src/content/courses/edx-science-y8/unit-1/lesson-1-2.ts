import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "esc8-u1-lesson-1-2",
  code: "1-2",
  title: "Organisation and Diffusion",
  goal: "I CAN explain how cells, tissues, organs and organ systems are organised, how specialised cells are adapted to their jobs, and how diffusion moves particles.",
  standards: ["KS3 Biology", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Specialised cell", definition: "A cell with a structure that is adapted to carry out a particular function." },
    { term: "Tissue", definition: "A group of similar cells that work together to carry out a particular function." },
    { term: "Organ", definition: "A structure made of different tissues that work together to carry out a particular function." },
    { term: "Organ system", definition: "A group of organs that work together to carry out a particular function in the body." },
    { term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient." },
    { term: "Concentration gradient", definition: "The difference in concentration between two regions." },
    { term: "Kinetic energy", definition: "The energy of movement. Particles with more kinetic energy move faster." },
  ],
  concepts: [
    {
      id: "esc8-u1-specialised-cells-organisation",
      title: "Specialised cells, tissues, organs and systems",
      skill: "Describe the levels of organisation in a multicellular organism and explain how specialised cells are adapted to their functions.",
      lesson: {
        sections: [
          {
            heading: "Levels of organisation",
            body: "In a multicellular organism, cells are organised in levels, from smallest to largest:\n\n**cell** $\\rightarrow$ **tissue** $\\rightarrow$ **organ** $\\rightarrow$ **organ system** $\\rightarrow$ **organism**.\n\nA tissue is a group of similar cells doing the same job, such as muscular tissue. An organ is made of several tissues working together. The stomach contains muscular tissue (to churn food), glandular tissue (to make digestive juices) and epithelial tissue (to cover surfaces). The stomach, small intestine, liver and pancreas are all organs in the digestive system.",
          },
          {
            heading: "Specialised cells",
            body: "Specialised cells have a structure that suits their function. Examples:\n\n- **Red blood cell**: no nucleus and a biconcave shape, which leaves more room for haemoglobin to carry oxygen.\n- **Root hair cell**: a long, thin extension gives a large surface area to absorb water and mineral ions; many mitochondria release energy for taking in mineral ions.\n- **Sperm cell**: a tail to swim, many mitochondria to release energy, and enzymes in the head to break into the egg.\n- **Palisade cell**: many chloroplasts to absorb light for photosynthesis.\n- **Nerve cell**: long, with branched ends, to carry electrical impulses over distance.\n- **Muscle cell**: can contract (shorten) to cause movement.",
          },
        ],
        keyFormulas: [
          { name: "Levels of organisation", statement: "cell $\\rightarrow$ tissue $\\rightarrow$ organ $\\rightarrow$ organ system $\\rightarrow$ organism" },
          { name: "Tissue", statement: "A group of similar cells working together to do a particular job" },
          { name: "Organ", statement: "Made of different tissues working together" },
        ],
        workedExample: {
          problem: "Explain how the structure of a nerve cell is adapted to its function.",
          solution: "A nerve cell carries electrical impulses from one part of the body to another. Its long shape allows it to carry impulses over long distances. Its branched ends allow it to connect to many other nerve cells, so one cell can pass information to several others.",
        },
      },
      questions: [
        {
          id: "esc8-u1-specialised-cells-organisation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which list shows the levels of organisation in order, from smallest to largest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organ system, organ, tissue, cell" },
              { id: "b", text: "Cell, tissue, organ, organ system" },
              { id: "c", text: "Cell, organ, tissue, organ system" },
              { id: "d", text: "Tissue, cell, organ, organ system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Levels of organisation", statement: "Cells form tissues, tissues form organs, and organs form organ systems." },
            ],
            steps: [
              { reasoning: "Similar cells make a tissue, different tissues make an organ, and organs working together make an organ system.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Cell, tissue, organ, organ system",
            commonErrors: ["Swapping tissue and organ.", "Choosing option (d), which is in order from largest to smallest."],
            examinerNote: "B1 for the correct order.",
          },
        },
        {
          id: "esc8-u1-specialised-cells-organisation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe **two** ways in which a sperm cell is adapted to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and function", statement: "Specialised cells have features that help them carry out their function." },
            ],
            steps: [
              { reasoning: "One mark for each correct adaptation linked to its function (swimming to the egg or fertilising it).", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Any two from: tail to swim to the egg; many mitochondria to release energy for swimming; streamlined head; enzymes in the head to digest the egg's outer layer.",
            commonErrors: ["Stating a feature without linking it to function.", "Describing features of an egg cell, such as a large food store."],
            examinerNote: "B1 for each adaptation. Allow 'tail' only if linked to swimming or movement. Allow 'contains genetic material' as a feature of the head but it must not be the only point repeated.",
          },
        },
        {
          id: "esc8-u1-specialised-cells-organisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Root hair cells absorb water and mineral ions from the soil.\n\nExplain how a root hair cell is adapted to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and function", statement: "A large surface area increases the rate at which substances can be absorbed." },
              { kind: "definition", name: "Respiration", statement: "Mitochondria release energy by aerobic respiration." },
            ],
            steps: [
              { reasoning: "The cell has a long, thin extension (the root hair), which gives a large surface area.", marks: 1, markCode: "B" },
              { reasoning: "A large surface area means more water and mineral ions can be absorbed in a given time.", marks: 1, markCode: "B" },
              { reasoning: "The cell has many mitochondria.", marks: 1, markCode: "B" },
              { reasoning: "Mitochondria release energy by respiration, which is needed to take in mineral ions from the soil.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Long thin extension gives a large surface area for faster absorption; many mitochondria release energy for taking in mineral ions.",
            commonErrors: ["Saying the root hair makes food for the plant.", "Stating the adaptation without explaining its effect."],
            examinerNote: "B1 for each adaptation (large surface area; many mitochondria) and B1 for each linked explanation. Allow 'thin cell wall so water passes quickly' as an alternative creditworthy point. Ignore 'no chloroplasts'.",
          },
        },
        {
          id: "esc8-u1-specialised-cells-organisation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The stomach is an organ in the digestive system. It contains muscular tissue, glandular tissue and epithelial tissue.",
          parts: [
            { label: "a", prompt: "State the level of organisation of the stomach.", marks: 1 },
            { label: "b", prompt: "State what is meant by a **tissue**.", marks: 1 },
            { label: "c", prompt: "Describe the function of the muscular tissue and of the glandular tissue in the stomach.", marks: 2 },
            { label: "d", prompt: "Name the organ system that contains the stomach and name **two** other organs in this system.", marks: 2 },
            { label: "e", prompt: "Explain why a large multicellular organism needs organ systems.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tissue", statement: "A group of similar cells that work together to do a particular job." },
              { kind: "definition", name: "Organ", statement: "An organ is made of different tissues working together." },
              { kind: "principle", name: "Division of labour", statement: "Specialised organs and organ systems do separate jobs efficiently, and work together to keep the organism alive." },
            ],
            steps: [
              { part: "a", reasoning: "The stomach is made of several different tissues, so it is an organ.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A tissue is a group of similar cells working together to carry out a particular function.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Muscular tissue contracts to churn (mix) the food.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Glandular tissue makes and releases digestive juices (enzymes and acid).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The stomach is part of the digestive system.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Two other organs in the digestive system, for example small intestine, large intestine, liver, pancreas, oesophagus.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Each organ system carries out a particular job (for example digestion or gas exchange), which is done more efficiently by specialised organs.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The organ systems work together so that substances such as oxygen and nutrients reach all of the cells in the organism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Organ (b) A group of similar cells working together to do a job (c) Muscle churns food; glandular tissue releases digestive juices (d) Digestive system; e.g. small intestine and liver (e) Systems carry out specialised jobs efficiently and work together to supply all the cells.",
            commonErrors: ["Describing the stomach as a tissue or an organ system.", "Naming the heart or lungs as part of the digestive system.", "Saying glandular tissue 'digests food' without mentioning releasing enzymes or juices."],
            examinerNote: "(d) Both marks require the correct system; the second mark needs two correct organs. Allow 'gullet' for oesophagus and 'gall bladder' for a digestive organ. Reject 'intestines' only if neither small nor large is specified and the answer is the only organ given.",
          },
        },
      ],
    },
    {
      id: "esc8-u1-diffusion",
      title: "Diffusion",
      skill: "Describe and explain diffusion using the particle model, and plan and analyse an investigation into factors affecting its rate.",
      lesson: {
        sections: [
          {
            heading: "What is diffusion?",
            body: "**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient. It happens because particles in liquids and gases move randomly. More particles move from the crowded region to the less crowded region than the other way round, until the particles are evenly spread. Diffusion needs no energy from the cell.\n\nExamples: the smell of perfume spreading across a room; oxygen moving from the air in the alveoli of the lungs into the blood; dye spreading through water.",
          },
          {
            heading: "Factors affecting the rate of diffusion",
            body: "Diffusion is faster when:\n\n- the **concentration gradient** is steeper (a bigger difference in concentration);\n- the **temperature** is higher, because particles have more kinetic energy and move faster;\n- the **surface area** is larger;\n- the **distance** the particles must travel is shorter, for example a thin membrane.\n\nTo investigate one factor, change only that independent variable, measure the dependent variable (for example the time for a colour to spread) and keep all other variables controlled. Repeat the experiment and calculate a mean to improve reliability, ignoring any anomalous results.",
          },
        ],
        keyFormulas: [
          { name: "Diffusion", statement: "Net movement of particles from high to low concentration (down a concentration gradient)" },
          { name: "Mean rate", statement: "$\\text{rate}=\\dfrac{\\text{distance}}{\\text{time}}$" },
          { name: "Faster diffusion", statement: "Steeper gradient, higher temperature, larger surface area, shorter distance" },
        ],
        workedExample: {
          problem: "A purple crystal is placed at the bottom of a beaker of water. After 10 minutes the purple colour has spread 15 mm upwards. Calculate the mean rate of diffusion in mm per minute and explain why the colour spreads.",
          solution: "Rate $=\\dfrac{15}{10}=1.5\\text{ mm/min}$. The particles of the crystal dissolve and move randomly. There are more particles near the crystal than elsewhere, so there is a net movement from the high concentration near the crystal to the low concentration in the rest of the water: diffusion.",
        },
      },
      questions: [
        {
          id: "esc8-u1-diffusion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes diffusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The net movement of particles from a high concentration to a low concentration" },
              { id: "b", text: "The movement of particles that always needs energy from respiration" },
              { id: "c", text: "The movement of particles from a low concentration to a high concentration" },
              { id: "d", text: "The movement of water through a membrane only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diffusion", statement: "Net movement of particles from a region of higher concentration to a region of lower concentration." },
            ],
            steps: [
              { reasoning: "Diffusion is passive and moves particles down a concentration gradient, from high to low concentration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The net movement of particles from a high concentration to a low concentration",
            commonErrors: ["Reversing the direction of movement.", "Confusing diffusion with osmosis or with active transport, which needs energy."],
            examinerNote: "B1 for the correct definition.",
          },
        },
        {
          id: "esc8-u1-diffusion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student places a crystal of potassium manganate(VII) in a beaker of water. After 16 minutes the purple colour has spread 24 mm from the crystal.\n\nCalculate the mean rate of diffusion in mm per minute.",
          response: { type: "numeric", parts: [{ label: "Mean rate", answer: 1.5, unit: "mm/min" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean rate", statement: "$\\text{rate}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the time taken.", working: "\\text{rate}=\\frac{24}{16}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "1.5\\text{ mm/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5\\text{ mm/min}$",
            commonErrors: ["Dividing time by distance, giving 0.67.", "Leaving out the unit."],
            examinerNote: "M1 for 24 / 16 (oe). A1 for 1.5 with unit mm/min or mm per minute.",
          },
        },
        {
          id: "esc8-u1-diffusion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Oxygen moves from the air in the alveoli (air sacs) of the lungs into the blood by diffusion.\n\nExplain why oxygen diffuses in this direction and describe **three** features of the alveoli that make diffusion fast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion", statement: "Particles diffuse down a concentration gradient, from higher to lower concentration." },
              { kind: "principle", name: "Factors affecting rate", statement: "A short diffusion distance, a large surface area and a steep concentration gradient increase the rate of diffusion." },
            ],
            steps: [
              { reasoning: "The concentration of oxygen is higher in the alveoli than in the blood, so oxygen moves down the concentration gradient from the alveoli into the blood.", marks: 1, markCode: "B" },
              { reasoning: "Alveoli walls are very thin (one cell thick), giving a short diffusion distance.", marks: 1, markCode: "B" },
              { reasoning: "There are very many alveoli, giving a large surface area.", marks: 1, markCode: "B" },
              { reasoning: "A good blood supply (and breathing) keeps removing oxygen and bringing fresh air, which maintains a steep concentration gradient.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Oxygen concentration is higher in the alveoli than in the blood, so it diffuses down the gradient into the blood; thin walls (short distance), large surface area, good blood supply (steep gradient).",
            commonErrors: ["Saying oxygen is 'pulled' or 'sucked' into the blood.", "Listing features without saying how they speed up diffusion."],
            examinerNote: "B1 for higher concentration in alveoli than blood (oe). B1 for each of up to three features (thin walls; large surface area; good blood supply or ventilation), each linked to faster diffusion. Allow 'moist lining' as dissolving oxygen.",
          },
        },
        {
          id: "esc8-u1-diffusion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates how temperature affects the rate of diffusion. She places one drop of food colouring into each of three beakers of water at different temperatures. She measures the time taken for the colour to spread evenly through the water.\n\n- Water at $10^\\circ\\text{C}$: 240 seconds\n- Water at $30^\\circ\\text{C}$: 120 seconds\n- Water at $50^\\circ\\text{C}$: 60 seconds",
          parts: [
            { label: "a", prompt: "Name the independent variable and the dependent variable, and state **one** variable the student should control.", marks: 3 },
            { label: "b", prompt: "Calculate how many times faster the colour spreads at $50^\\circ\\text{C}$ than at $10^\\circ\\text{C}$.", marks: 2 },
            { label: "c", prompt: "Describe the pattern in the results and explain it using ideas about particles.", marks: 3 },
            { label: "d", prompt: "Suggest how the student could make her results more reliable.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Change only the independent variable, measure the dependent variable and control all other variables." },
              { kind: "principle", name: "Particle model", statement: "Particles at a higher temperature have more kinetic energy and move faster, so they spread out more quickly." },
            ],
            steps: [
              { part: "a", reasoning: "The independent variable is the one the student changes: temperature of the water.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The dependent variable is the one she measures: time for the colour to spread evenly.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A control variable, for example volume of water, size of drop, type of colouring or size of beaker.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Compare the times: the time at $10^\\circ\\text{C}$ divided by the time at $50^\\circ\\text{C}$.", working: "\\frac{240}{60}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. The colour spreads four times faster.", working: "4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "As the temperature increases, the time taken decreases, so the rate of diffusion increases.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "At a higher temperature the particles have more kinetic energy and move faster.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Faster-moving particles mix and spread through the water more quickly, so diffusion is faster.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Repeat the experiment at each temperature and calculate a mean (ignoring any anomalous results).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Independent: temperature; dependent: time for colour to spread; control: e.g. volume of water (b) 4 times faster (c) Higher temperature gives a shorter time; particles have more kinetic energy and move faster (d) Repeat and calculate a mean.",
            commonErrors: ["Writing 'time' as the independent variable.", "Giving 0.25 in (b), the inverse of the correct ratio.", "Saying the particles 'get bigger' or 'expand' when heated."],
            examinerNote: "(a) Reject 'amount of colouring' unless it refers to the drop size being constant. (b) Reject 4 times 'longer'. Allow 'rate is 4 times greater'. (c) Allow 'the rate increases with temperature' for the first mark. (d) Allow 'repeat and compare results' oe.",
          },
        },
      ],
    },
  ],
};
