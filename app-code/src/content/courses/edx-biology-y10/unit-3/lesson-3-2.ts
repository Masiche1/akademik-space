import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ebi10-u3-lesson-3-2",
  code: "3-2",
  title: "Gas Exchange",
  goal: "I CAN explain how gas exchange occurs in humans and plants and how breathing changes during exercise.",
  standards: ["4BI1 2.40", "4BI1 2.41", "4BI1 2.42", "4BI1 2.43", "4BI1 2.44", "4BI1 2.45", "4BI1 2.46", "4BI1 2.47", "4BI1 2.48", "4BI1 2.49", "4BI1 2.50"],
  vocabulary: [
    { term: "Gas exchange", definition: "The diffusion of oxygen into, and carbon dioxide out of, an organism (or the reverse) across a specialised exchange surface." },
    { term: "Ventilation", definition: "The movement of air into and out of the lungs by breathing, which maintains steep concentration gradients at the alveoli." },
    { term: "Intercostal muscles", definition: "Muscles between the ribs that move the rib cage up and out (external) or down and in (internal)." },
    { term: "Alveolus", definition: "A tiny air sac in the lungs with a wall one cell thick, surrounded by capillaries, where gases are exchanged." },
    { term: "Stoma", definition: "A pore in the surface of a leaf, usually on the underside, surrounded by two guard cells, through which gases diffuse." },
    { term: "Guard cell", definition: "One of a pair of cells that opens and closes a stoma by changing shape as it gains or loses water." },
    { term: "Hydrogencarbonate indicator", definition: "An indicator that is red at atmospheric carbon dioxide concentration, yellow if carbon dioxide increases and purple if carbon dioxide decreases." },
  ],
  concepts: [
    {
      id: "ebi10-u3-human-gas-exchange",
      title: "Gas exchange in humans and the effect of exercise",
      skill: "Describe ventilation, explain alveolar adaptations and the effects of smoking and exercise, and calculate ventilation rates.",
      lesson: {
        sections: [
          {
            heading: "Ventilation of the lungs",
            body: "The lungs are in the **thorax**, protected by the rib cage and separated from the abdomen by the **diaphragm**. Air passes down the trachea, bronchi and bronchioles to the alveoli.\n\n**Inhalation:** the external intercostal muscles contract, raising the ribs up and out; the diaphragm contracts and flattens. The thorax volume increases, the pressure inside falls below atmospheric pressure and air flows in.\n\n**Exhalation:** the external intercostal muscles relax, the ribs move down and in; the diaphragm relaxes and domes upwards. The thorax volume decreases, the pressure rises and air is forced out. During forced exhalation (for example exercise) the internal intercostal muscles also contract, pulling the ribs down and in.",
          },
          {
            heading: "The alveolus and the effect of smoking",
            body: "Oxygen diffuses from the air in the alveoli into the blood, and carbon dioxide diffuses the other way. The alveoli are adapted by:\n\n- a **very large surface area** (millions of alveoli)\n- walls that are **one cell thick**, and capillary walls that are also one cell thick, giving a short diffusion distance\n- a rich **blood supply** that removes oxygen and brings carbon dioxide, maintaining steep concentration gradients\n- **ventilation**, which keeps the oxygen concentration high in the alveoli\n\nInhaled air is about $21\\%$ oxygen and $0.04\\%$ carbon dioxide; exhaled air is about $16\\%$ oxygen and $4\\%$ carbon dioxide.\n\nSmoking harms the gas exchange system. **Tar** is a carcinogen and paralyses and destroys the cilia, so mucus and bacteria are not removed, causing bronchitis and infections. Damage to alveolar walls reduces surface area (emphysema). **Carbon monoxide** combines with haemoglobin and reduces the oxygen carried by the blood. **Nicotine** is addictive and raises heart rate and blood pressure.",
          },
          {
            heading: "Exercise and breathing",
            body: "During exercise muscles respire faster, so they need more oxygen and produce more carbon dioxide. Chemoreceptors detect the rise in carbon dioxide in the blood and the brain increases both the **breathing rate** and the **depth of each breath** (tidal volume).\n\n$$\\text{ventilation rate} = \\text{breathing rate} \\times \\text{tidal volume}$$\n\nA practical to investigate this counts breaths per minute, or measures tidal volume with a spirometer, at rest and after different amounts of exercise, repeating the readings. Recovery time (the time for the breathing rate to return to the resting value) is longer after more vigorous exercise, because lactic acid must be broken down. To compare inhaled and exhaled air, air is bubbled through limewater: exhaled air turns it cloudy faster because it contains more carbon dioxide.",
          },
        ],
        keyFormulas: [
          { name: "Ventilation rate", statement: "$\\text{ventilation rate (dm}^3\\text{/min)} = \\text{breathing rate (breaths/min)} \\times \\text{tidal volume (dm}^3\\text{)}$" },
          { name: "Inhalation", statement: "Ribs up and out, diaphragm contracts and flattens, thorax volume increases, pressure decreases" },
          { name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original value}} \\times 100\\%$" },
          { name: "Smoking", statement: "Tar damages cilia and alveoli; carbon monoxide reduces oxygen carried by haemoglobin" },
        ],
        workedExample: {
          problem: "A student breathes $14$ times per minute with a tidal volume of $0.55\\text{ dm}^3$. After exercise she breathes $26$ times per minute with a tidal volume of $1.8\\text{ dm}^3$. Calculate the percentage increase in ventilation rate, to the nearest whole number.",
          solution: "At rest: $14 \\times 0.55 = 7.7\\text{ dm}^3/\\text{min}$. After exercise: $26 \\times 1.8 = 46.8\\text{ dm}^3/\\text{min}$. Increase $= 46.8 - 7.7 = 39.1$. Percentage increase $= \\frac{39.1}{7.7} \\times 100 = 507.8\\ldots \\approx 508\\%$.",
        },
      },
      questions: [
        {
          id: "ebi10-u3-human-gas-exchange-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which row describes what happens to the diaphragm and the pressure in the thorax during inhalation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diaphragm relaxes and domes upwards; pressure in the thorax increases" },
              { id: "b", text: "Diaphragm contracts and flattens; pressure in the thorax decreases" },
              { id: "c", text: "Diaphragm relaxes and domes upwards; pressure in the thorax decreases" },
              { id: "d", text: "Diaphragm contracts and flattens; pressure in the thorax increases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inhalation", statement: "Muscle contraction increases thorax volume and lowers the pressure below atmospheric, so air flows in." },
            ],
            steps: [
              { reasoning: "The diaphragm contracts and flattens, increasing the volume, so the pressure falls and air moves in.", working: "\\text{contracts, flattens; pressure decreases}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (d), which describes exhalation.", "Thinking an increase in volume increases pressure."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ebi10-u3-human-gas-exchange-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "At rest, a student breathes 12 times per minute with a tidal volume of $0.50\\text{ dm}^3$. During exercise she breathes 30 times per minute with a tidal volume of $2.0\\text{ dm}^3$.\n\nCalculate her ventilation rate (a) at rest and (b) during exercise, in $\\text{dm}^3/\\text{min}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Ventilation rate at rest", answer: 6, unit: "dm³/min" },
              { label: "(b) Ventilation rate during exercise", answer: 60, unit: "dm³/min" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ventilation rate", statement: "$\\text{ventilation rate} = \\text{breathing rate} \\times \\text{tidal volume}$" },
            ],
            steps: [
              { reasoning: "Multiply breathing rate by tidal volume at rest.", working: "12 \\times 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "6.0\\text{ dm}^3/\\text{min}", marks: 1, markCode: "A" },
              { reasoning: "Multiply breathing rate by tidal volume during exercise.", working: "30 \\times 2.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "60\\text{ dm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6\\text{ dm}^3/\\text{min}$ (b) $60\\text{ dm}^3/\\text{min}$",
            commonErrors: ["Adding breathing rate and tidal volume.", "Forgetting that the tidal volume is in dm$^3$ and quoting cm$^3$ without converting."],
            examinerNote: "Allow 6000 and 60000 cm$^3$/min. Allow ecf in (b).",
          },
        },
        {
          id: "ebi10-u3-human-gas-exchange-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why breathing rate and depth of breathing increase during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Response to exercise", statement: "Raised respiration rate raises blood carbon dioxide, which is detected by the brain and triggers faster, deeper breathing." },
            ],
            steps: [
              { reasoning: "Muscles contract more so they respire faster, releasing more energy.", marks: 1, markCode: "B" },
              { reasoning: "More carbon dioxide is produced and the concentration in the blood rises.", marks: 1, markCode: "B" },
              { reasoning: "This is detected (by receptors / the brain), which sends impulses to the intercostal muscles and diaphragm to contract faster and more strongly.", marks: 1, markCode: "B" },
              { reasoning: "More oxygen is supplied to the muscles and carbon dioxide is removed faster, maintaining steep concentration gradients in the alveoli.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "More respiration, more CO$_2$ in blood, detected by brain, faster and deeper breathing supplies oxygen and removes CO$_2$.",
            commonErrors: ["Saying breathing increases because the muscles 'need more air' without mention of carbon dioxide.", "Saying the brain detects a lack of oxygen as the main stimulus (it is mainly the rise in carbon dioxide)."],
            examinerNote: "Allow 'pH of blood falls' for the carbon dioxide detection point. Reject 'lungs respire faster'.",
          },
        },
        {
          id: "ebi10-u3-human-gas-exchange-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student measures her breathing rate and tidal volume at rest and during two intensities of exercise.\n\n| Activity | Breathing rate (breaths/min) | Tidal volume ($\\text{dm}^3$) |\n| --- | --- | --- |\n| Rest | 15 | 0.5 |\n| Moderate exercise | 20 | 1.5 |\n| Intense exercise | 30 | 2.5 |",
          parts: [
            { label: "a", prompt: "Calculate the ventilation rate during intense exercise, in $\\text{dm}^3/\\text{min}$.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage increase in ventilation rate from rest to intense exercise. Give your answer to the nearest whole number.", marks: 2 },
            { label: "c", prompt: "Explain why the muscles need a greater ventilation rate during intense exercise.", marks: 2 },
            { label: "d", prompt: "Smoking damages the gas exchange system. Describe three ways in which smoking reduces the efficiency of gas exchange or oxygen transport.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ventilation rate", statement: "$\\text{ventilation rate} = \\text{breathing rate} \\times \\text{tidal volume}$" },
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply breathing rate by tidal volume.", working: "30 \\times 2.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with units.", working: "75\\text{ dm}^3/\\text{min}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Resting ventilation rate is $15 \\times 0.5 = 7.5$. Use change divided by the original value.", working: "\\frac{75 - 7.5}{7.5} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{67.5}{7.5} \\times 100 = 900\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "During intense exercise the muscles respire aerobically faster to release more energy for contraction, so they need more oxygen.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "They also produce more carbon dioxide, which must be removed by gas exchange to maintain steep concentration gradients.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Tar destroys or paralyses cilia, so mucus and bacteria build up, leading to infection and bronchitis (any one).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Damage to the alveolar walls (emphysema) reduces surface area for gas exchange (or tar causes cancer / thickens lining).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Carbon monoxide combines with haemoglobin, so less oxygen is carried by the blood.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $75\\text{ dm}^3/\\text{min}$ (b) $900\\%$ (c) more oxygen needed for faster aerobic respiration and more CO$_2$ to remove (d) cilia damaged, alveoli damaged, carbon monoxide reduces oxygen carried",
            commonErrors: ["Dividing by 75 rather than the resting value, giving 90%.", "Giving 67.5 as the answer to (b), which is the increase, not the percentage increase.", "Saying carbon monoxide 'blocks the alveoli'."],
            examinerNote: "(b) 900 scores A1; allow ecf for an incorrect (a). (d) Allow nicotine only if linked to a reduced oxygen supply (for example narrowed vessels). Reject 'tar clogs the lungs' unqualified.",
          },
        },
      ],
    },
    {
      id: "ebi10-u3-plant-gas-exchange",
      title: "Gas exchange in plants",
      skill: "Explain how leaves are adapted for gas exchange and interpret hydrogencarbonate indicator investigations.",
      lesson: {
        sections: [
          {
            heading: "Leaf structure and gas exchange",
            body: "Plants exchange gases by diffusion. A leaf is adapted for this:\n\n- it is **thin and flat**, giving a large surface area and short diffusion distance\n- the **spongy mesophyll** has many interconnected **air spaces**, so gases reach all cells and the internal surface area is large\n- the lower epidermis has many **stomata** (singular: stoma), pores through which carbon dioxide diffuses in and oxygen and water vapour diffuse out\n- each stoma is opened and closed by two **guard cells**: when they gain water by osmosis they become turgid and curve apart, opening the stoma; when they lose water they become flaccid and the stoma closes\n\nThe waxy cuticle on the upper surface reduces water loss but is also impermeable to gases, so gas exchange occurs through the stomata.",
          },
          {
            heading: "Net gas exchange depends on the light",
            body: "Plant cells respire all the time, taking in oxygen and releasing carbon dioxide. In the light they also photosynthesise, taking in carbon dioxide and releasing oxygen.\n\n- In **bright light**, photosynthesis is faster than respiration: there is a net **uptake of carbon dioxide** and net **release of oxygen**.\n- In the **dark**, only respiration occurs: net **uptake of oxygen** and net **release of carbon dioxide**.\n- At the **compensation point** (dim light), the rate of photosynthesis equals the rate of respiration, so there is no net gas exchange.\n\nStomata are generally open in the light and closed in the dark, although they close in very hot dry conditions to reduce water loss.",
          },
          {
            heading: "Hydrogencarbonate indicator investigation",
            body: "Hydrogencarbonate indicator is red at atmospheric carbon dioxide concentration. It turns **yellow** when carbon dioxide concentration increases and **purple** when it decreases.\n\nLeaves are placed in sealed tubes of indicator, one in bright light, one in the dark and one covered by gauze (partial shade), with a control tube containing no leaf. After a set time the colours are compared. A leaf in the light gives purple (net uptake of carbon dioxide); a leaf in the dark gives yellow (net release of carbon dioxide). Stomatal density is found by counting stomata in a known area under the microscope: $\\text{density} = \\frac{\\text{number of stomata}}{\\text{area}}$.",
          },
        ],
        keyFormulas: [
          { name: "Light, net gas exchange", statement: "Photosynthesis rate > respiration rate: net $\\text{CO}_2$ uptake. Dark: net $\\text{O}_2$ uptake" },
          { name: "Hydrogencarbonate indicator", statement: "Red: atmospheric $\\text{CO}_2$; yellow: more $\\text{CO}_2$; purple: less $\\text{CO}_2$" },
          { name: "Area of a circular field of view", statement: "$A = \\pi r^2$" },
          { name: "Stomatal density", statement: "$\\text{density} = \\frac{\\text{number of stomata}}{\\text{area}}$" },
        ],
        workedExample: {
          problem: "A student counts $31$ stomata in a circular field of view of diameter $0.60\\text{ mm}$. Calculate the stomatal density in stomata per $\\text{mm}^2$, to the nearest whole number.",
          solution: "Radius $= 0.30\\text{ mm}$, so area $= \\pi \\times 0.30^2 = 0.2827\\text{ mm}^2$. Density $= \\frac{31}{0.2827} = 109.6\\ldots \\approx 110$ stomata per $\\text{mm}^2$.",
        },
      },
      questions: [
        {
          id: "ebi10-u3-plant-gas-exchange-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cells control the opening and closing of a stoma?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Root hair cells" },
              { id: "b", text: "Xylem vessels" },
              { id: "c", text: "Guard cells" },
              { id: "d", text: "Palisade mesophyll cells" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Guard cells", statement: "A pair of guard cells surrounds each stoma and changes shape as it gains or loses water, opening or closing the pore." },
            ],
            steps: [
              { reasoning: "Guard cells become turgid to open the stoma and flaccid to close it.", working: "\\text{guard cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Guard cells",
            commonErrors: ["Choosing palisade cells because they are the main site of photosynthesis."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi10-u3-plant-gas-exchange-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student counts $25$ stomata in a circular field of view of radius $0.25\\text{ mm}$ on the lower surface of a leaf. Calculate the number of stomata per $\\text{mm}^2$. Give your answer to the nearest whole number.",
          response: { type: "numeric", parts: [{ label: "Stomatal density", answer: 127, tolerance: 1, unit: "stomata per mm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A = \\pi r^2$" },
              { kind: "formula", name: "Density", statement: "$\\text{density} = \\frac{\\text{number}}{\\text{area}}$" },
            ],
            steps: [
              { reasoning: "Calculate the area of the field of view.", working: "A = \\pi \\times 0.25^2 = 0.1963\\text{ mm}^2", marks: 1, markCode: "M" },
              { reasoning: "Divide the number of stomata by the area.", working: "\\frac{25}{0.1963}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round.", working: "127.3\\ldots \\approx 127\\text{ per mm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$127$ stomata per $\\text{mm}^2$",
            commonErrors: ["Using $\\pi r$ or $2\\pi r$ instead of $\\pi r^2$.", "Using the radius as the diameter."],
            examinerNote: "Allow 127.3 or 127.4. A1 for 127 only with correct method.",
          },
        },
        {
          id: "ebi10-u3-plant-gas-exchange-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant is kept in the dark for a day and then in bright light. Explain how the net gas exchange between the leaves and the air differs in the dark and in bright light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Respiration and photosynthesis", statement: "Respiration occurs continuously; photosynthesis occurs only in the light. Net exchange depends on which is faster." },
            ],
            steps: [
              { reasoning: "In the dark only respiration occurs, so oxygen is taken in.", marks: 1, markCode: "B" },
              { reasoning: "and carbon dioxide is released (net), because there is no photosynthesis.", marks: 1, markCode: "B" },
              { reasoning: "In bright light the rate of photosynthesis is greater than the rate of respiration, so there is a net uptake of carbon dioxide.", marks: 1, markCode: "B" },
              { reasoning: "and a net release of oxygen, as the oxygen made in photosynthesis is more than that used in respiration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Dark: net O$_2$ in, CO$_2$ out (respiration only). Bright light: net CO$_2$ in, O$_2$ out (photosynthesis faster than respiration).",
            commonErrors: ["Saying plants only respire at night and only photosynthesise in the day.", "Saying plants take in oxygen in the dark but give none out in the light."],
            examinerNote: "Reject 'plants do not respire in the light'. Credit the link to the relative rates of photosynthesis and respiration.",
          },
        },
        {
          id: "ebi10-u3-plant-gas-exchange-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student places a leaf in each of four tubes containing the same volume of hydrogencarbonate indicator. All tubes are sealed. Tube D contains no leaf. The tubes are left for two hours.\n\n| Tube | Leaf | Conditions | Final colour |\n| --- | --- | --- | --- |\n| A | Yes | Bright light | Purple |\n| B | Yes | Wrapped in foil (dark) | Yellow |\n| C | Yes | Covered by thick gauze (dim light) | Red |\n| D | No | Bright light | Red |",
          parts: [
            { label: "a", prompt: "State what the purple colour in tube A shows about the carbon dioxide concentration.", marks: 1 },
            { label: "b", prompt: "Explain the yellow colour in tube B.", marks: 2 },
            { label: "c", prompt: "Explain what the red colour in tube C suggests about the rates of photosynthesis and respiration.", marks: 2 },
            { label: "d", prompt: "Explain the purpose of tube D.", marks: 1 },
            { label: "e", prompt: "Suggest two variables that should be controlled to make the investigation a fair test.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hydrogencarbonate indicator", statement: "Red: atmospheric CO2; yellow: higher CO2; purple: lower CO2." },
              { kind: "principle", name: "Compensation point", statement: "When the rate of photosynthesis equals the rate of respiration, there is no net gas exchange." },
            ],
            steps: [
              { part: "a", reasoning: "Purple indicates the carbon dioxide concentration has decreased.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In the dark there is no photosynthesis, but the leaf still respires and releases carbon dioxide.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "So the carbon dioxide concentration in the tube increases, turning the indicator yellow.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The carbon dioxide concentration stayed the same as the air, so there was no net gas exchange.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The rate of photosynthesis equalled the rate of respiration (the compensation point).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A control, to show that the colour changes in tubes A to C were caused by the leaf and not by the light or the indicator itself.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Any one control variable: size / mass / type of leaf, volume of indicator, time, temperature, light intensity in A.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A second different control variable from the list.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) CO$_2$ concentration decreased (b) respiration only, CO$_2$ released (c) photosynthesis rate = respiration rate (d) control (e) e.g. leaf size and volume of indicator",
            commonErrors: ["Saying the plant 'stopped respiring' in tube C.", "Saying the yellow colour in B is caused by oxygen."],
            examinerNote: "(c) Allow 'compensation point' for the second mark. (e) Reject 'amount of light' unless applied to tubes compared in the same conditions; allow temperature and time.",
          },
        },
      ],
    },
  ],
};
