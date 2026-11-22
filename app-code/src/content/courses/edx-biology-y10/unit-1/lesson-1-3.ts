import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ebi10-u1-lesson-1-3",
  code: "1-3",
  title: "Movement of Substances and Surface Area",
  goal: "I CAN explain how substances move into and out of cells by diffusion, osmosis and active transport, and use surface area to volume ratio to explain adaptations.",
  standards: ["4BI1 2.15", "4BI1 2.16", "4BI1 2.17"],
  vocabulary: [
    { term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient. It needs no energy from the cell." },
    { term: "Osmosis", definition: "The net movement of water molecules from a dilute solution to a more concentrated solution through a partially permeable membrane." },
    { term: "Active transport", definition: "The movement of particles through a cell membrane against a concentration gradient, using energy from respiration." },
    { term: "Concentration gradient", definition: "The difference in concentration between two regions." },
    { term: "Partially permeable membrane", definition: "A membrane that lets some molecules, such as water, pass through but not others, such as large solute molecules." },
    { term: "Turgid", definition: "Describes a plant cell that is firm because water has entered by osmosis and the vacuole presses the cytoplasm against the cell wall." },
    { term: "Surface area to volume ratio", definition: "The surface area of an object divided by its volume. It decreases as an object gets larger." },
  ],
  concepts: [
    {
      id: "ebi10-u1-diffusion-osmosis-active-transport",
      title: "Diffusion, osmosis and active transport",
      skill: "Describe and compare the three transport processes and analyse an osmosis investigation using percentage change in mass.",
      lesson: {
        sections: [
          {
            heading: "Diffusion",
            body: "**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient. It is a passive process: it needs no energy from the cell. Oxygen and carbon dioxide diffusing across the alveolus wall, and glucose diffusing out of the small intestine, are examples.\n\nThe rate of diffusion is increased by a **steeper concentration gradient**, a **higher temperature** (particles have more kinetic energy), a **larger surface area** and a **shorter diffusion distance**.",
          },
          {
            heading: "Osmosis",
            body: "**Osmosis** is the net movement of water molecules from a dilute solution to a more concentrated solution through a partially permeable membrane. Water moves from the solution with more free water molecules to the solution with fewer.\n\nIn plants: a cell in pure water gains water, becomes **turgid** and is supported by the cell wall, so it does not burst. In a concentrated solution it loses water, the cytoplasm shrinks away from the wall and the cell becomes **flaccid** (plasmolysed). An animal cell has no cell wall, so in pure water it can swell and burst, and in a concentrated solution it shrinks.\n\nOsmosis investigations use potato cylinders in sugar solutions. Change in mass is compared using **percentage change**, because starting masses may differ:\n\n$$\\text{percentage change} = \\frac{\\text{final mass} - \\text{initial mass}}{\\text{initial mass}} \\times 100\\%$$\n\nThe cylinders must be blotted dry before weighing. The concentration with **no change in mass** is where the solution has the same concentration as the potato cells.",
          },
          {
            heading: "Active transport",
            body: "**Active transport** moves particles **against** a concentration gradient, from low to high concentration, through carrier proteins in the membrane. It needs **energy from respiration**, so cells doing it have many mitochondria. Examples: root hair cells take up mineral ions such as nitrate from the soil; glucose is absorbed from the gut and kidney tubules when its concentration inside is already higher than outside.\n\nCompare: diffusion and osmosis are passive and move down a gradient; active transport needs energy and moves against a gradient. Poisons that stop respiration, or low oxygen, stop active transport but not diffusion.",
          },
        ],
        keyFormulas: [
          { name: "Percentage change in mass", statement: "$\\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$" },
          { name: "Diffusion", statement: "Down a concentration gradient, passive" },
          { name: "Active transport", statement: "Against a concentration gradient, needs energy from respiration" },
        ],
        workedExample: {
          problem: "A potato cylinder has a mass of 5.0 g. After 24 hours in a sugar solution its mass is 4.4 g. Calculate the percentage change in mass and state the direction of water movement.",
          solution: "Change $= 4.4 - 5.0 = -0.6\\text{ g}$. Percentage change $= \\frac{-0.6}{5.0} \\times 100 = -12\\%$. The cylinder lost mass, so water left the potato by osmosis: the sugar solution was more concentrated than the potato cells.",
        },
      },
      questions: [
        {
          id: "ebi10-u1-diffusion-osmosis-active-transport-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes active transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Movement of particles against a concentration gradient with no energy needed" },
              { id: "b", text: "Movement of water through a partially permeable membrane from dilute to concentrated solution" },
              { id: "c", text: "Movement of particles against a concentration gradient using energy from respiration" },
              { id: "d", text: "Movement of particles down a concentration gradient with no energy needed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active transport", statement: "Active transport is the movement of particles against a concentration gradient using energy from respiration." },
            ],
            steps: [
              { reasoning: "Active transport goes against the gradient and needs energy. (a) is diffusion, (b) is osmosis and (d) is impossible without energy.", working: "\\text{against gradient, uses energy}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Choosing (a), confusing active transport with diffusion.", "Choosing (b), which describes osmosis."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ebi10-u1-diffusion-osmosis-active-transport-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A potato cylinder has an initial mass of 4.0 g. After being left in a salt solution for 3 hours its mass is 3.4 g. Calculate the percentage change in mass. Give a negative value for a decrease.",
          response: { type: "numeric", parts: [{ label: "Percentage change in mass", answer: -15, tolerance: 0.1, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the change in mass and divide by the initial mass.", working: "\\frac{3.4 - 4.0}{4.0} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The mass decreased, so the value is negative.", working: "\\frac{-0.6}{4.0} \\times 100 = -15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-15\\%$",
            commonErrors: ["Dividing by the final mass (3.4) to get $-17.6\\%$.", "Giving $+15\\%$ and ignoring that the mass decreased."],
            examinerNote: "M1 for correct substitution. A1 for $-15$; allow a 15% decrease.",
          },
        },
        {
          id: "ebi10-u1-diffusion-osmosis-active-transport-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A red blood cell is placed in pure water. Explain what happens to the cell, and explain why a plant cell placed in pure water behaves differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmosis", statement: "Net movement of water from a dilute solution to a more concentrated solution through a partially permeable membrane." },
            ],
            steps: [
              { reasoning: "Water enters the red blood cell by osmosis, because the cytoplasm is more concentrated than the pure water.", marks: 1, markCode: "B" },
              { reasoning: "An animal cell has no cell wall, so the cell swells and bursts.", marks: 1, markCode: "B" },
              { reasoning: "Water also enters the plant cell by osmosis, so it becomes turgid.", marks: 1, markCode: "B" },
              { reasoning: "The cell wall is strong and stops the cell expanding too far, so the plant cell does not burst.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Red blood cell: water enters by osmosis and the cell bursts as it has no wall. Plant cell: water enters, becomes turgid, the cell wall prevents bursting.",
            commonErrors: ["Saying water moves into the cell by diffusion only, without mentioning the concentration difference or the membrane.", "Saying the cell membrane stops the plant cell bursting."],
            examinerNote: "Allow 'lyses' for bursts. Ignore 'water potential' wording if the direction is correct. The last mark needs the cell wall."
          },
        },
        {
          id: "ebi10-u1-diffusion-osmosis-active-transport-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student places potato cylinders, each with an initial mass of 3.0 g, in sugar solutions of different concentrations for 24 hours. The cylinders are blotted dry and weighed again.\n\n| Sugar concentration (mol/dm³) | Final mass (g) |\n| --- | --- |\n| 0.0 | 3.6 |\n| 0.2 | 3.3 |\n| 0.4 | 3.0 |\n| 0.6 | 2.7 |\n| 0.8 | 2.4 |",
          parts: [
            { label: "a", prompt: "Calculate the percentage change in mass of the cylinder in the 0.2 mol/dm³ solution. Give your answer as a percentage.", marks: 2 },
            { label: "b", prompt: "State the concentration of sugar solution that is the same as the concentration of the potato cell sap.", marks: 1 },
            { label: "c", prompt: "Explain the change in mass of the cylinder in the 0.8 mol/dm³ solution.", marks: 3 },
            { label: "d", prompt: "Give two variables that must be controlled in this investigation.", marks: 2 },
            { label: "e", prompt: "Explain why the cylinders were blotted dry before weighing.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{final} - \\text{initial}}{\\text{initial}} \\times 100\\%$" },
              { kind: "definition", name: "Osmosis", statement: "Net movement of water from a dilute solution to a more concentrated solution through a partially permeable membrane." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in mass by the initial mass.", working: "\\frac{3.3 - 3.0}{3.0} \\times 100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate. The mass increased.", working: "+10\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "There is no change in mass at 0.4 mol/dm³, so no net movement of water.", working: "0.4\\text{ mol/dm}^3", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The mass decreased from 3.0 g to 2.4 g because water left the potato.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The sugar solution is more concentrated than the cell sap (the potato is in a stronger solution).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Water moved out by osmosis, through the partially permeable membrane, from dilute to concentrated.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any valid control, for example temperature or time in solution.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A second control, for example volume of solution, surface area/size of cylinder or type of potato.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Surface water would add extra mass, so the measurement would not show the water inside the potato.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $+10\\%$ (b) $0.4\\text{ mol/dm}^3$ (c) water left the potato by osmosis as the solution was more concentrated (d) e.g. temperature and volume of solution (e) surface water would add to the mass",
            commonErrors: ["In (a) dividing by the final mass to get 9.1%.", "In (c) saying the sugar entered the potato and made it lighter.", "In (d) giving 'concentration' as a control; it is the independent variable."],
            examinerNote: "In (a) allow 10 or 10.0. In (c) the third mark needs the direction (dilute to concentrated) and osmosis. In (d) any two different valid variables; reject 'concentration of sugar' (the independent variable).",
          },
        },
      ],
    },
    {
      id: "ebi10-u1-surface-area-volume-ratio",
      title: "Surface area to volume ratio",
      skill: "Calculate surface area to volume ratios and explain how they affect the rate of exchange and the adaptations of organisms.",
      lesson: {
        sections: [
          {
            heading: "Calculating the ratio",
            body: "The **surface area to volume ratio** compares how much surface an object has with the amount of material inside it. For a cube with side $L$:\n\n$$\\text{surface area} = 6L^2, \\qquad \\text{volume} = L^3, \\qquad \\frac{\\text{SA}}{\\text{V}} = \\frac{6}{L}$$\n\nFor a cube of side 2 cm: surface area $= 6 \\times 2^2 = 24\\text{ cm}^2$, volume $= 2^3 = 8\\text{ cm}^3$, ratio $= 24 \\div 8 = 3$ (written 3:1). As an object gets bigger, the volume grows faster than the surface area, so the ratio **decreases**.",
          },
          {
            heading: "Why it matters for living things",
            body: "A cell or organism exchanges materials with its surroundings across its surface, but needs them for the whole volume. A **single-celled organism** such as *Amoeba* has a large surface area to volume ratio, so diffusion across its surface is fast enough to supply the whole cell.\n\nA large multicellular organism has a small ratio, and most cells are far from the surface. Diffusion alone is too slow, so it needs **specialised exchange surfaces** and **transport systems**, such as lungs and the circulatory system. Cells also stay small for the same reason.\n\nDiffusion rate also depends on temperature, the concentration gradient and the distance. Exchange surfaces such as alveoli, villi and root hairs have a **large surface area**, are **thin**, and have a **good blood supply or ventilation** to keep gradients steep.",
          },
          {
            heading: "Models and investigations",
            body: "A model: agar cubes containing indicator are placed in acid. Acid diffuses in and the indicator changes colour. Small cubes change colour all the way through faster than large cubes because of their larger ratio. Compare the time taken for the colour to disappear, using cubes of different size, with acid concentration and temperature controlled.\n\nAnimals in cold climates tend to be larger and rounder with a **smaller** ratio, to lose less heat. Animals in hot climates may have large ears for a **larger** ratio, to lose more heat.",
          },
        ],
        keyFormulas: [
          { name: "Cube surface area and volume", statement: "$\\text{SA} = 6L^2, \\quad V = L^3$" },
          { name: "Surface area to volume ratio", statement: "$\\frac{\\text{surface area}}{\\text{volume}}$; for a cube $= \\frac{6}{L}$" },
          { name: "Trend", statement: "Larger object means smaller ratio" },
        ],
        workedExample: {
          problem: "Calculate the surface area to volume ratio of a cube with side 3 cm.",
          solution: "Surface area $= 6 \\times 3^2 = 54\\text{ cm}^2$. Volume $= 3^3 = 27\\text{ cm}^3$. Ratio $= \\frac{54}{27} = 2$, so 2:1.",
        },
      },
      questions: [
        {
          id: "ebi10-u1-surface-area-volume-ratio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to the surface area to volume ratio of a cube as its side length increases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases because there is more surface" },
              { id: "b", text: "It decreases because surface area decreases" },
              { id: "c", text: "It stays the same" },
              { id: "d", text: "It decreases because volume increases faster than surface area" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ratio and size", statement: "For a cube, SA:V $= 6/L$, which falls as $L$ increases." },
            ],
            steps: [
              { reasoning: "Surface area grows with $L^2$ but volume with $L^3$, so the ratio $6/L$ falls.", working: "\\frac{6}{L}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (a): the surface area does increase but the volume increases faster.", "Choosing (d): surface area does not decrease."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi10-u1-surface-area-volume-ratio-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cube-shaped block of tissue has sides of 5 cm. Calculate its surface area to volume ratio. Give your answer as a single number (the value of surface area divided by volume).",
          response: { type: "numeric", parts: [{ label: "Surface area to volume ratio", answer: 1.2, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cube", statement: "$\\text{SA} = 6L^2$ and $V = L^3$." },
            ],
            steps: [
              { reasoning: "A cube has 6 faces, each $5 \\times 5$.", working: "\\text{SA} = 6 \\times 5^2 = 150\\text{ cm}^2", marks: 1, markCode: "M" },
              { reasoning: "Volume is side cubed.", working: "V = 5^3 = 125\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Divide surface area by volume.", working: "\\frac{150}{125} = 1.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.2$ (1.2:1)",
            commonErrors: ["Using only one face, $5^2 = 25$, for the surface area.", "Dividing volume by surface area to get 0.83."],
            examinerNote: "M1 for SA = 150, M1 for V = 125, A1 for 1.2. Allow 1.2:1 or 6/5.",
          },
        },
        {
          id: "ebi10-u1-surface-area-volume-ratio-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an Amoeba can obtain oxygen by diffusion through its surface alone, but a human cannot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exchange and size", statement: "A small organism has a large surface area to volume ratio and short diffusion distances; a large organism does not." },
            ],
            steps: [
              { reasoning: "Amoeba is a single small cell, so it has a large surface area to volume ratio.", marks: 1, markCode: "B" },
              { reasoning: "Oxygen only has a short distance to diffuse to reach every part of the cell.", marks: 1, markCode: "B" },
              { reasoning: "A human is large, so has a small surface area to volume ratio, and most cells are far from the body surface.", marks: 1, markCode: "B" },
              { reasoning: "Diffusion would be too slow to supply them, so humans need specialised exchange surfaces such as lungs and a transport system (blood).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Amoeba: large SA:V and short distance, so diffusion is enough. Human: small SA:V and long distances, so lungs and blood are needed.",
            commonErrors: ["Saying humans have no surface area, or that Amoeba does not need oxygen.", "Comparing only the size without mentioning the ratio."],
            examinerNote: "Allow 'larger' or 'smaller ratio' oe. The final mark needs a named adaptation or system."
          },
        },
        {
          id: "ebi10-u1-surface-area-volume-ratio-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student uses blocks of agar that contain an indicator. The agar is pink in alkali and colourless in acid. Three cubes are placed in dilute hydrochloric acid and the time for each to turn colourless is measured. Cube A has side 1 cm, cube B has side 2 cm and cube C has side 4 cm.",
          parts: [
            { label: "a", prompt: "Calculate the surface area to volume ratio of cube B and of cube C.", marks: 2 },
            { label: "b", prompt: "Predict which cube turns colourless first and explain your prediction.", marks: 2 },
            { label: "c", prompt: "State two variables the student should control.", marks: 2 },
            { label: "d", prompt: "Explain how this model helps to explain why large organisms need a specialised transport system.", marks: 2 },
            { label: "e", prompt: "Describe one way in which the small intestine is adapted to have a large surface area.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cube", statement: "$\\text{SA} = 6L^2$, $V = L^3$, so $\\text{SA}:\\text{V} = 6/L$." },
              { kind: "principle", name: "Diffusion and size", statement: "A larger surface area to volume ratio means faster exchange per unit volume; larger objects have a longer diffusion distance to the centre." },
            ],
            steps: [
              { part: "a", reasoning: "Cube B: SA $= 6 \\times 2^2 = 24$, V $= 8$.", working: "\\frac{24}{8} = 3", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Cube C: SA $= 6 \\times 4^2 = 96$, V $= 64$.", working: "\\frac{96}{64} = 1.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cube A (the smallest) turns colourless first.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It has the largest surface area to volume ratio (6), and the acid has the shortest distance to diffuse to the centre.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any valid control, for example concentration of acid or temperature.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A second control, for example volume of acid, same agar/indicator, or the same endpoint colour judged.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Large objects have a small surface area to volume ratio, and diffusion to the centre takes longer (greater distance).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So cells deep inside a large organism could not get enough substances by diffusion from the surface, and need a transport system.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The small intestine lining has villi (and microvilli) that increase the surface area for absorption.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) B = 3 (3:1), C = 1.5 (1.5:1) (b) A, largest ratio (c) acid concentration and temperature (d) large organisms have a small ratio and long diffusion distances, so a transport system is needed (e) villi",
            commonErrors: ["In (a) dividing the side length by volume or using 2 × 2 as surface area.", "In (b) choosing the largest cube because it contains the most acid-sensitive material."],
            examinerNote: "In (a) A1 each; allow 3:1 and 1.5:1. In (b) the second mark needs reference to the ratio or the distance. In (c) any two different valid variables; reject 'size of cube'. In (e) allow 'microvilli' or 'long and folded'.",
          },
        },
      ],
    },
  ],
};
