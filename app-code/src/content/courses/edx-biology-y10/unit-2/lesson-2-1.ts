import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ebi10-u2-lesson-2-1",
  code: "2-1",
  title: "Photosynthesis and Leaves",
  goal: "I CAN explain how photosynthesis is limited by light, carbon dioxide and temperature, and relate leaf structure and mineral ions to the needs of a plant.",
  standards: ["4BI1 2.18", "4BI1 2.19", "4BI1 2.20", "4BI1 2.21", "4BI1 2.22", "4BI1 2.23"],
  vocabulary: [
    { term: "Photosynthesis", definition: "The process in which plants use light energy absorbed by chlorophyll to make glucose from carbon dioxide and water, releasing oxygen." },
    { term: "Chlorophyll", definition: "The green pigment in chloroplasts that absorbs light energy for photosynthesis." },
    { term: "Limiting factor", definition: "A factor that is in short supply and so restricts the rate of a process, even if other factors are plentiful." },
    { term: "Palisade mesophyll", definition: "The layer of tightly packed, column-shaped cells beneath the upper epidermis of a leaf that contains most of the chloroplasts." },
    { term: "Stomata", definition: "Pores, mostly on the lower surface of a leaf, surrounded by guard cells, through which gases diffuse in and out." },
    { term: "Guard cells", definition: "A pair of cells that change shape to open and close a stoma." },
    { term: "Mineral ions", definition: "Inorganic ions such as nitrate and magnesium, absorbed from the soil by roots and needed for healthy growth." },
  ],
  concepts: [
    {
      id: "ebi10-u2-photosynthesis-limiting-factors",
      title: "Photosynthesis and limiting factors",
      skill: "Write the equation for photosynthesis, state the uses of glucose and explain how light, carbon dioxide and temperature limit the rate.",
      lesson: {
        sections: [
          {
            heading: "The process of photosynthesis",
            body: "Photosynthesis takes place in chloroplasts. **Chlorophyll** absorbs light energy, which is used to make glucose from carbon dioxide and water. Oxygen is released as a by-product.\n\n$$\\text{carbon dioxide} + \\text{water} \\xrightarrow{\\text{light, chlorophyll}} \\text{glucose} + \\text{oxygen}$$\n\n$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$\n\nPhotosynthesis is an **endothermic** reaction: it takes in energy from the surroundings. The glucose is used for **respiration**, converted to **starch** for storage, to **cellulose** for cell walls, to **sucrose** for transport, to **lipids** (fats and oils) for storage, and, with nitrate ions, to make **amino acids** and then proteins.\n\nStarch is detected with **iodine solution**, which turns from orange-brown to blue-black. To test a leaf, it is first dipped in boiling water to kill it, then heated in ethanol to remove the chlorophyll, rinsed, and finally covered with iodine.",
          },
          {
            heading: "Limiting factors",
            body: "The rate of photosynthesis depends on the **light intensity**, the **carbon dioxide concentration** and the **temperature**. Whichever of these is in shortest supply is the **limiting factor**.\n\n- **Light intensity**: at low intensity the rate rises in proportion to the light. At high intensity the graph levels off (a plateau) because another factor has become limiting.\n- **Carbon dioxide concentration**: more carbon dioxide raises the rate until another factor limits.\n- **Temperature**: the reaction is controlled by enzymes. The rate increases as temperature rises towards the optimum (around $25$ to $35^\\circ\\text{C}$ for many plants), then falls sharply as the enzymes are denatured.\n\nGrowers use this idea in greenhouses, adding artificial light, extra carbon dioxide and heating to raise the rate of photosynthesis and so increase crop yield.",
          },
          {
            heading: "Investigating the rate with pondweed",
            body: "A piece of water plant such as *Elodea* is placed in water containing sodium hydrogencarbonate (a source of carbon dioxide) in front of a lamp. The rate is found by counting the bubbles of oxygen released per minute, or by collecting the gas in a capillary tube. The independent variable is the distance of the lamp, the dependent variable is the number of bubbles per minute, and the control variables include temperature (use a water bath or a heat shield), the carbon dioxide concentration and the same piece of pondweed.\n\nLight intensity is **inversely proportional to the square of the distance** from the lamp, so doubling the distance reduces the intensity to one quarter. Repeat each reading, calculate a mean, and ignore any anomalous result when calculating it.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$ (light, chlorophyll)" },
          { name: "Inverse square law for light", statement: "$I \\propto \\frac{1}{d^2}$" },
          { name: "Limiting factor", statement: "The factor in shortest supply sets the rate; the graph plateaus when another factor takes over" },
          { name: "Test for starch", statement: "Iodine solution turns blue-black" },
        ],
        workedExample: {
          problem: "A lamp at $10\\text{ cm}$ from pondweed gives a relative light intensity of $100$ units. Calculate the relative intensity when the lamp is moved to $25\\text{ cm}$.",
          solution: "Intensity is inversely proportional to $d^2$, so $I_2 = I_1 \\times \\left(\\frac{d_1}{d_2}\\right)^2 = 100 \\times \\left(\\frac{10}{25}\\right)^2 = 100 \\times 0.16 = 16$ units.",
        },
      },
      questions: [
        {
          id: "ebi10-u2-photosynthesis-limiting-factors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which row shows the reactants and the products of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reactants: carbon dioxide and water. Products: glucose and oxygen." },
              { id: "b", text: "Reactants: glucose and oxygen. Products: carbon dioxide and water." },
              { id: "c", text: "Reactants: carbon dioxide and oxygen. Products: glucose and water." },
              { id: "d", text: "Reactants: water and oxygen. Products: glucose and carbon dioxide." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photosynthesis", statement: "$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$" },
            ],
            steps: [
              { reasoning: "Plants take in carbon dioxide and water and, using light energy, make glucose and release oxygen.", working: "\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{glucose} + \\text{O}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (b), which is the reverse reaction: aerobic respiration.", "Thinking oxygen is a reactant because plants 'need' it."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ebi10-u2-photosynthesis-limiting-factors-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a pondweed investigation the relative light intensity is $80$ units when the lamp is $15\\text{ cm}$ from the plant. Light intensity is inversely proportional to the square of the distance. Calculate the relative light intensity when the lamp is moved to $30\\text{ cm}$.",
          response: { type: "numeric", parts: [{ label: "Relative light intensity", answer: 20, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse square law", statement: "Light intensity is inversely proportional to the square of the distance from the source: $I \\propto \\frac{1}{d^2}$." },
            ],
            steps: [
              { reasoning: "The distance doubles, so the intensity is divided by $2^2 = 4$.", working: "I = 80 \\times \\left(\\frac{15}{30}\\right)^2 = 80 \\times \\frac{1}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "I = 20\\text{ units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ units",
            commonErrors: ["Halving the intensity to 40 because the distance has doubled (treating it as inversely proportional to $d$ rather than $d^2$).", "Multiplying 80 by 4."],
            examinerNote: "M1 for dividing by 4 or using $(15/30)^2$. A1 cao.",
          },
        },
        {
          id: "ebi10-u2-photosynthesis-limiting-factors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student measures the rate of photosynthesis of a plant at $25^\\circ\\text{C}$ at different light intensities, using two carbon dioxide concentrations: $0.04\\%$ and $0.4\\%$. At both concentrations the rate rises in a straight line at low light intensity. At $0.04\\%$ carbon dioxide the rate then levels off at a low value. At $0.4\\%$ carbon dioxide the rate continues to rise before levelling off at a much higher value.\n\nExplain the shapes of the two graphs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factors", statement: "The rate of a process is limited by the factor in shortest supply. When the graph plateaus, a different factor is now limiting." },
            ],
            steps: [
              { reasoning: "At low light intensity light is the limiting factor, so the rate increases in proportion to light intensity and is the same for both carbon dioxide concentrations.", marks: 1, markCode: "B" },
              { reasoning: "At $0.04\\%$ carbon dioxide the plateau shows that light is no longer limiting.", marks: 1, markCode: "B" },
              { reasoning: "The plateau is reached because carbon dioxide concentration (or temperature) is now the limiting factor.", marks: 1, markCode: "B" },
              { reasoning: "The higher plateau at $0.4\\%$ shows carbon dioxide was limiting at $0.04\\%$; with more carbon dioxide, light can be used at a higher intensity before another factor (e.g. temperature) limits.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Light limits the rising part; at the plateau carbon dioxide (or temperature) limits; the higher plateau shows carbon dioxide was limiting at $0.04\\%$.",
            commonErrors: ["Saying that the plateau means photosynthesis has stopped.", "Stating that the plateau is caused by light being 'used up'.", "Not linking the higher plateau to carbon dioxide."],
            examinerNote: "Allow 'enzymes' or 'temperature' as the factor limiting at the higher plateau. Reject 'the plant is full'.",
          },
        },
        {
          id: "ebi10-u2-photosynthesis-limiting-factors-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates the effect of light intensity on the rate of photosynthesis of pondweed. She places a lamp at different distances from the pondweed in a beaker of water containing sodium hydrogencarbonate, and counts the oxygen bubbles released in one minute. She repeats each distance three times.\n\n| Distance of lamp (cm) | Repeat 1 | Repeat 2 | Repeat 3 |\n| --- | --- | --- | --- |\n| 10 | 48 | 52 | 50 |\n| 20 | 26 | 24 | 25 |\n| 30 | 14 | 30 | 16 |\n| 40 | 8 | 7 | 9 |",
          parts: [
            { label: "a", prompt: "State two variables that the student should control.", marks: 2 },
            { label: "b", prompt: "Calculate the mean number of bubbles per minute with the lamp at $10\\text{ cm}$.", marks: 2 },
            { label: "c", prompt: "Identify the anomalous result at $30\\text{ cm}$ and calculate the mean number of bubbles per minute at this distance without it.", marks: 2 },
            { label: "d", prompt: "Explain why the number of bubbles falls as the lamp is moved further away.", marks: 2 },
            { label: "e", prompt: "Suggest why counting bubbles may not give an accurate measure of the rate of photosynthesis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Control variable", statement: "A variable kept the same so that only the independent variable affects the dependent variable." },
              { kind: "formula", name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
              { kind: "principle", name: "Limiting factor", statement: "At low light intensity, light is the limiting factor, so rate falls as intensity falls." },
            ],
            steps: [
              { part: "a", reasoning: "Temperature (e.g. use a water bath or a heat shield between lamp and beaker).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Any one of: carbon dioxide concentration (same mass of sodium hydrogencarbonate), same piece or mass of pondweed, same volume of water, same time for counting.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the three repeats and divide by three.", working: "\\frac{48 + 52 + 50}{3} = \\frac{150}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "50\\text{ bubbles per minute}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The result of $30$ bubbles does not fit the pattern of the other two readings, so it is anomalous.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Mean of the other two results.", working: "\\frac{14 + 16}{2} = 15\\text{ bubbles per minute}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Light intensity at the plant decreases as the distance increases, so less light energy is absorbed by chlorophyll.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Light is the limiting factor, so the rate of photosynthesis falls and less oxygen is produced.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Bubbles vary in size, so the number of bubbles is not proportional to the volume of oxygen.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Some oxygen dissolves in the water or is used in respiration by the plant, so not all of the oxygen made forms bubbles.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) temperature and carbon dioxide concentration (b) $50$ (c) $30$ is anomalous; mean $15$ (d) less light, light limiting (e) bubble size varies; some oxygen dissolves or is used in respiration.",
            commonErrors: ["Giving 'light intensity' as a control variable when it is the independent variable.", "Including the anomalous result in the mean to get 20.", "Saying bubbles decrease because the plant 'gets tired'."],
            examinerNote: "In (a) reject 'distance of the lamp'. In (c) the mean including 30 is 20, which scores B1 only if the anomaly is identified. Allow 'collect the gas in a gas syringe or capillary' as a suggestion in (e) only if a limitation is also given.",
          },
        },
      ],
    },
    {
      id: "ebi10-u2-leaf-structure-minerals",
      title: "Leaf structure and mineral ions",
      skill: "Relate the tissues of a leaf to photosynthesis and gas exchange, and explain the roles of nitrate and magnesium ions.",
      lesson: {
        sections: [
          {
            heading: "The structure of a leaf",
            body: "A leaf is a thin, flat organ adapted to absorb light and exchange gases. From top to bottom:\n\n- **Waxy cuticle**: waterproof, reduces water loss by evaporation.\n- **Upper epidermis**: a thin, transparent layer that lets light through to the cells below.\n- **Palisade mesophyll**: tightly packed, column-shaped cells containing many **chloroplasts**, placed near the top where the light intensity is highest.\n- **Spongy mesophyll**: loosely arranged cells with large **air spaces**, allowing carbon dioxide to diffuse to the palisade cells.\n- **Lower epidermis**: contains the **stomata**, each controlled by a pair of **guard cells**.\n\nThe **xylem** brings water and mineral ions to the leaf, and the **phloem** carries away the sucrose made in photosynthesis. Both are found in the vascular bundle (the veins).",
          },
          {
            heading: "Gas exchange and stomata",
            body: "Carbon dioxide diffuses into the leaf through open stomata, through the air spaces and into the cells, down a concentration gradient. Oxygen and water vapour diffuse out. Guard cells swell and become turgid when they take in water, which opens the stoma; when they lose water the stoma closes. Stomata are open in the light, to allow carbon dioxide in for photosynthesis, and often close at night or in very dry conditions to reduce water loss.\n\nThe **stomatal density** is the number of stomata per unit area. If the number counted in a circular field of view is $n$ and the field has radius $r$, then the density is $\\frac{n}{\\pi r^2}$.",
          },
          {
            heading: "Mineral ions",
            body: "Plants absorb mineral ions from the soil, usually by **active transport** in root hair cells.\n\n- **Nitrate ions** are used to make **amino acids**, and so proteins, needed for growth. A plant short of nitrate has **stunted growth** and older leaves that turn yellow.\n- **Magnesium ions** are needed to make **chlorophyll**. A plant short of magnesium has **yellow leaves** (chlorosis) and less photosynthesis.\n\nA plant is grown in complete culture solution as a **control**, and compared with plants grown in solutions missing one ion.",
          },
        ],
        keyFormulas: [
          { name: "Stomatal density", statement: "$\\text{density} = \\frac{\\text{number of stomata}}{\\text{area of field of view}}$, with area $= \\pi r^2$" },
          { name: "Nitrate ions", statement: "Needed for amino acids and proteins; lack causes stunted growth" },
          { name: "Magnesium ions", statement: "Needed for chlorophyll; lack causes yellow leaves" },
          { name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A student counts $9$ stomata in a circular field of view of diameter $0.40\\text{ mm}$. Calculate the number of stomata per $\\text{mm}^2$ to the nearest whole number.",
          solution: "Radius $= 0.20\\text{ mm}$. Area $= \\pi \\times 0.20^2 = 0.1257\\text{ mm}^2$. Density $= \\frac{9}{0.1257} = 71.6 \\approx 72\\text{ stomata per mm}^2$.",
        },
      },
      questions: [
        {
          id: "ebi10-u2-leaf-structure-minerals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a leaf contains the most chloroplasts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spongy mesophyll" },
              { id: "b", text: "Upper epidermis" },
              { id: "c", text: "Palisade mesophyll" },
              { id: "d", text: "Xylem" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Palisade mesophyll", statement: "The layer of closely packed cells near the upper surface that contains most of the chloroplasts, where most photosynthesis takes place." },
            ],
            steps: [
              { reasoning: "The palisade cells are packed with chloroplasts and sit near the top of the leaf to absorb the most light.", working: "\\text{palisade mesophyll}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Palisade mesophyll",
            commonErrors: ["Choosing the spongy mesophyll, which has some chloroplasts but mainly has air spaces for gas diffusion.", "Choosing the upper epidermis because it is nearest the light, but it is transparent and has few or no chloroplasts."],
            examinerNote: "B1 for palisade mesophyll.",
          },
        },
        {
          id: "ebi10-u2-leaf-structure-minerals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student views the lower surface of a leaf under a microscope. The circular field of view has a diameter of $0.50\\text{ mm}$ and she counts $12$ stomata. Calculate the number of stomata per $\\text{mm}^2$. Give your answer to the nearest whole number.",
          response: { type: "numeric", parts: [{ label: "Stomatal density", answer: 61, tolerance: 0.5, unit: "stomata per mm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A = \\pi r^2$, where $r$ is the radius (half the diameter)." },
              { kind: "formula", name: "Density", statement: "$\\text{density} = \\frac{\\text{number}}{\\text{area}}$" },
            ],
            steps: [
              { reasoning: "Halve the diameter to get the radius, then find the area of the field of view.", working: "r = 0.25\\text{ mm},\\quad A = \\pi \\times 0.25^2 = 0.196\\text{ mm}^2", marks: 1, markCode: "M" },
              { reasoning: "Divide the number of stomata by the area.", working: "\\frac{12}{0.196}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest whole number.", working: "61.1\\ldots \\approx 61\\text{ stomata per mm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$61$ stomata per $\\text{mm}^2$",
            commonErrors: ["Using the diameter instead of the radius in $\\pi r^2$, giving 15 stomata per $\\text{mm}^2$.", "Dividing by the area of a square $0.5 \\times 0.5$ to get 48."],
            examinerNote: "M1 for radius $0.25$ and $\\pi r^2$. M1 for dividing 12 by the area. A1 for 61 (allow 60 to 62 from rounding of the area).",
          },
        },
        {
          id: "ebi10-u2-leaf-structure-minerals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant is grown in a culture solution that contains all the mineral ions except magnesium. Its leaves turn yellow and it grows slowly. Explain these observations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Role of magnesium", statement: "Magnesium ions are needed to make chlorophyll, which absorbs the light energy for photosynthesis." },
            ],
            steps: [
              { reasoning: "Magnesium ions are needed to make chlorophyll, so without magnesium the plant cannot make enough chlorophyll.", marks: 1, markCode: "B" },
              { reasoning: "Chlorophyll is green, so with less chlorophyll the leaves look yellow (pale).", marks: 1, markCode: "B" },
              { reasoning: "Less light energy is absorbed, so the rate of photosynthesis is lower and less glucose is made.", marks: 1, markCode: "B" },
              { reasoning: "Less glucose is available for respiration (energy) and to make cellulose and proteins for growth, so growth is slow.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No magnesium, so less chlorophyll, so yellow leaves; less light absorbed so less photosynthesis and glucose, so slow growth.",
            commonErrors: ["Confusing magnesium with nitrate and saying it is needed for protein.", "Saying the plant cannot photosynthesise at all.", "Stating that the leaves are yellow because the plant has no light."],
            examinerNote: "Allow 'chlorosis'. Allow 'less food' for glucose. Reject 'magnesium is needed for photosynthesis' without reference to chlorophyll.",
          },
        },
        {
          id: "ebi10-u2-leaf-structure-minerals-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student grows three identical seedlings for four weeks in different culture solutions and records the results.\n\n| Solution | Mean height after 4 weeks (cm) | Appearance of leaves |\n| --- | --- | --- |\n| Complete (all mineral ions) | 24 | Dark green |\n| No nitrate ions | 9 | Older leaves yellow |\n| No magnesium ions | 14 | All leaves yellow |",
          parts: [
            { label: "a", prompt: "Explain why the student includes the seedling grown in the complete solution.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage reduction in height of the plant without nitrate ions compared with the plant in the complete solution.", marks: 2 },
            { label: "c", prompt: "Explain why a lack of nitrate ions causes poor growth.", marks: 2 },
            { label: "d", prompt: "Describe two ways in which the palisade mesophyll cells are adapted for photosynthesis.", marks: 2 },
            { label: "e", prompt: "Mineral ions are at a lower concentration in the soil than in root hair cells. Name the process by which they are absorbed and explain why this process is needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original value}} \\times 100\\%$" },
              { kind: "principle", name: "Role of nitrate", statement: "Nitrate ions provide nitrogen for making amino acids, which are joined to make proteins for growth." },
              { kind: "principle", name: "Active transport", statement: "Active transport moves substances against a concentration gradient, using energy from respiration." },
            ],
            steps: [
              { part: "a", reasoning: "It is the control: it shows normal growth with all the ions present, so the effect of missing ions can be compared.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the decrease in height and divide by the original (complete solution) height.", working: "\\frac{24 - 9}{24} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{15}{24} \\times 100 = 62.5\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Nitrate ions are needed to make amino acids.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Amino acids are joined to make proteins needed for growth (new cells and enzymes), so growth is stunted.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "They contain many chloroplasts, which contain chlorophyll to absorb light.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "They are tightly packed in a layer near the top of the leaf, so they absorb the most light (allow: column shape reduces the number of cell walls light must cross).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Active transport.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It is needed because the ions move from a low concentration to a high concentration (against the gradient), using energy from respiration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) control for comparison (b) $62.5\\%$ (c) no nitrate, so fewer amino acids and proteins (d) many chloroplasts; close to the upper surface (e) active transport, because ions move against the concentration gradient.",
            commonErrors: ["Dividing by 9 (the reduced height) to get 167%.", "Saying nitrate is needed to make chlorophyll (that is magnesium).", "Naming diffusion in (e)."],
            examinerNote: "In (b) allow 62 or 63 if working is shown. In (e) reject osmosis. Allow 'energy from respiration' for the second mark.",
          },
        },
      ],
    },
  ],
};
