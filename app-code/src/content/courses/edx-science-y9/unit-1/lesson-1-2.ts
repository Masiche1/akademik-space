import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "esc9-u1-lesson-1-2",
  code: "1-2",
  title: "Breathing and Respiration",
  goal: "I CAN explain how gases are exchanged in the lungs and compare aerobic and anaerobic respiration.",
  standards: ["KS3 Biology", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Alveolus", definition: "A tiny air sac at the end of a bronchiole in the lungs where oxygen and carbon dioxide are exchanged with the blood." },
    { term: "Gas exchange", definition: "The movement of oxygen into the blood and carbon dioxide out of the blood, by diffusion across a surface." },
    { term: "Ventilation", definition: "Moving air into and out of the lungs by breathing." },
    { term: "Respiration", definition: "The chemical reaction in all living cells that releases energy from glucose." },
    { term: "Aerobic respiration", definition: "Respiration that uses oxygen to release energy from glucose, producing carbon dioxide and water." },
    { term: "Anaerobic respiration", definition: "Respiration without oxygen, which releases less energy from glucose. In humans it produces lactic acid." },
    { term: "Fermentation", definition: "Anaerobic respiration in yeast, which produces ethanol and carbon dioxide." },
  ],
  concepts: [
    {
      id: "esc9-u1-gas-exchange-lungs",
      title: "Gas exchange in the lungs",
      skill: "Describe ventilation, explain how alveoli are adapted for gas exchange and calculate breathing volumes.",
      lesson: {
        sections: [
          {
            heading: "The breathing system",
            body: "Air enters through the nose or mouth and passes down the **trachea**, into two **bronchi**, then through smaller **bronchioles** to the **alveoli**. The lungs are protected by the rib cage and the **diaphragm** (a sheet of muscle) lies underneath them.\n\nDuring **inhalation** the intercostal muscles contract, moving the ribs **up and out**, and the diaphragm contracts and **flattens**. The volume of the chest increases, the pressure inside falls below atmospheric pressure and air is drawn in. During **exhalation** the muscles relax, the chest volume decreases, the pressure rises and air is forced out.",
          },
          {
            heading: "How alveoli are adapted for gas exchange",
            body: "Oxygen diffuses from the air in the alveoli into the blood, and carbon dioxide diffuses from the blood into the alveoli, because each gas moves down its concentration gradient. The alveoli are adapted for fast diffusion:\n\n- there are millions of them, giving a very **large surface area**\n- the walls are **one cell thick**, so the diffusion distance is short\n- they are surrounded by a network of **capillaries**, giving a good blood supply that keeps the concentration gradient steep\n- they are moist, so gases dissolve and diffuse easily\n\nInhaled air contains about $21\\%$ oxygen and $0.04\\%$ carbon dioxide. Exhaled air contains about $16\\%$ oxygen and $4\\%$ carbon dioxide.",
          },
          {
            heading: "Breathing volume",
            body: "The volume of air breathed in or out in one breath is the **tidal volume**. The volume of air breathed per minute is found by multiplying the breathing rate by the volume of each breath. During exercise both the rate and the depth of breathing increase to supply more oxygen to the muscles.",
          },
        ],
        keyFormulas: [
          { name: "Volume of air per minute", statement: "$\\text{volume per minute} = \\text{breathing rate (breaths/min)} \\times \\text{volume per breath}$" },
          { name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original value}} \\times 100\\%$" },
          { name: "Inhalation", statement: "Ribs up and out, diaphragm flattens, chest volume increases, pressure decreases" },
        ],
        workedExample: {
          problem: "A person breathes 14 times per minute. Each breath has a volume of $500\\text{ cm}^3$. Calculate the volume of air breathed in one minute.",
          solution: "Volume per minute $= 14 \\times 500 = 7000\\text{ cm}^3$.",
        },
      },
      questions: [
        {
          id: "esc9-u1-gas-exchange-lungs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structures in the lungs are the site of gas exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bronchi" },
              { id: "b", text: "Trachea" },
              { id: "c", text: "Alveoli" },
              { id: "d", text: "Bronchioles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alveoli", statement: "Alveoli are the tiny air sacs where oxygen diffuses into the blood and carbon dioxide diffuses out." },
            ],
            steps: [
              { reasoning: "The trachea, bronchi and bronchioles only carry air. Gas exchange happens across the thin walls of the alveoli.", working: "\\text{alveoli}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Alveoli",
            commonErrors: ["Choosing the bronchioles because they are the smallest tubes, but they carry air to the alveoli rather than exchange gases."],
            examinerNote: "B1 for alveoli.",
          },
        },
        {
          id: "esc9-u1-gas-exchange-lungs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens to the ribs, the diaphragm and the air pressure in the chest when a person breathes in.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inhalation", statement: "Muscle contraction increases the volume of the chest, which lowers the pressure so air flows in from outside." },
            ],
            steps: [
              { reasoning: "The intercostal muscles contract and the ribs move up and out.", marks: 1, markCode: "B" },
              { reasoning: "The diaphragm contracts and flattens (moves down).", marks: 1, markCode: "B" },
              { reasoning: "The volume of the chest increases, so the pressure in the chest decreases and air is drawn in.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ribs move up and out; diaphragm contracts and flattens; chest volume increases and pressure decreases so air moves in.",
            commonErrors: ["Saying the diaphragm relaxes and moves up when breathing in (this happens when breathing out).", "Saying the lungs pull air in because they are muscular. The lungs have no muscle."],
            examinerNote: "Allow 'moves down' for the diaphragm. Ignore 'lungs inflate' unless they say the lungs push air in.",
          },
        },
        {
          id: "esc9-u1-gas-exchange-lungs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "At rest, a student breathes 12 times per minute and each breath has a volume of $500\\text{ cm}^3$. During exercise she breathes 25 times per minute and each breath has a volume of $1200\\text{ cm}^3$. Calculate the increase in the volume of air she breathes per minute during exercise.",
          response: { type: "numeric", parts: [{ label: "Increase in volume per minute", answer: 24000, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of air per minute", statement: "$\\text{volume per minute} = \\text{breathing rate} \\times \\text{volume per breath}$" },
            ],
            steps: [
              { reasoning: "Find the volume per minute at rest and during exercise.", working: "12 \\times 500 = 6000\\text{ cm}^3,\\quad 25 \\times 1200 = 30000\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Subtract the resting volume from the exercise volume.", working: "30000 - 6000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "24000\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24000\\text{ cm}^3$ (24 litres)",
            commonErrors: ["Giving the exercise volume (30000) instead of the increase.", "Adding the breathing rates and the volumes separately."],
            examinerNote: "M1 for either correct volume per minute. M1 for subtracting, allow ecf. A1 cao with a correct unit. Allow 24 dm$^3$.",
          },
        },
        {
          id: "esc9-u1-gas-exchange-lungs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The table shows the percentage of oxygen and carbon dioxide in inhaled and exhaled air.\n\n| Gas | Inhaled air (%) | Exhaled air (%) |\n| --- | --- | --- |\n| Oxygen | 21 | 16 |\n| Carbon dioxide | 0.04 | 4 |",
          parts: [
            { label: "a", prompt: "Calculate the percentage decrease in the percentage of oxygen between inhaled and exhaled air. Give your answer to the nearest whole number, in $\\%$.", marks: 2 },
            { label: "b", prompt: "Explain why exhaled air contains a higher percentage of carbon dioxide than inhaled air.", marks: 2 },
            { label: "c", prompt: "Describe how the structure of the alveoli makes gas exchange efficient.", marks: 3 },
            { label: "d", prompt: "Name the process by which oxygen moves from the alveoli into the blood.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
              { kind: "principle", name: "Diffusion", statement: "Particles move from a region of higher concentration to a region of lower concentration." },
            ],
            steps: [
              { part: "a", reasoning: "Find the decrease and divide by the original value (inhaled air).", working: "\\frac{21 - 16}{21} \\times 100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate and round to the nearest whole number.", working: "\\frac{5}{21} \\times 100 = 23.8\\ldots \\approx 24\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Carbon dioxide is produced by respiration in body cells and carried to the lungs in the blood.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It diffuses from the blood into the alveoli and is breathed out.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "There are very many alveoli, giving a large surface area.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The walls are one cell thick (thin), giving a short diffusion distance.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A dense network of capillaries gives a good blood supply, keeping a steep concentration gradient.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Oxygen moves from a high concentration in the alveoli to a low concentration in the blood.", working: "\\text{diffusion}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $24\\%$ (b) CO$_2$ is made in respiration and diffuses from blood into alveoli (c) large surface area, thin walls, good blood supply (d) Diffusion",
            commonErrors: ["Dividing by 16 (the exhaled value) to get 31%.", "Giving 5% as the answer, which is the change in percentage points."],
            examinerNote: "In (a) allow 24 or 23.8. Allow ecf for dividing by the wrong value for A0 only if the method mark is not earned. In (c) allow 'moist' or 'large number of alveoli' for the first mark. Reject 'thin lungs'.",
          },
        },
      ],
    },
    {
      id: "esc9-u1-aerobic-anaerobic-respiration",
      title: "Aerobic and anaerobic respiration",
      skill: "Write equations for aerobic and anaerobic respiration, compare the two types and interpret a fermentation investigation.",
      lesson: {
        sections: [
          {
            heading: "Aerobic respiration",
            body: "Respiration happens in every living cell and releases energy from glucose. **Aerobic respiration** uses oxygen:\n\n$$\\text{glucose} + \\text{oxygen} \\rightarrow \\text{carbon dioxide} + \\text{water}$$\n\n$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$$\n\nThe reactions take place mainly in the mitochondria. The energy released is used for movement, growth, keeping warm and making new molecules. Respiration is **not** the same as breathing: breathing is ventilation of the lungs.",
          },
          {
            heading: "Anaerobic respiration",
            body: "When there is not enough oxygen, for example during hard exercise, muscle cells can respire **anaerobically**:\n\n$$\\text{glucose} \\rightarrow \\text{lactic acid}$$\n\nThis releases much less energy than aerobic respiration because the glucose is only partly broken down. After exercise, extra oxygen is needed to break down the lactic acid, so we keep breathing deeply and quickly.\n\nIn yeast, anaerobic respiration is called **fermentation**:\n\n$$\\text{glucose} \\rightarrow \\text{ethanol} + \\text{carbon dioxide}$$\n\n$$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$$\n\nFermentation is used to make bread (the carbon dioxide makes the dough rise) and alcoholic drinks.",
          },
          {
            heading: "Testing for carbon dioxide",
            body: "Carbon dioxide turns **limewater** from colourless to **cloudy (milky)**. This test can be used to show that yeast or living organisms produce carbon dioxide. The rate of fermentation can be compared by counting bubbles per minute, and repeating the measurements allows a mean to be calculated and anomalous results to be spotted.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic respiration", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$" },
          { name: "Anaerobic respiration in muscles", statement: "glucose $\\rightarrow$ lactic acid" },
          { name: "Fermentation in yeast", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$" },
          { name: "Test for carbon dioxide", statement: "Limewater turns cloudy" },
        ],
        workedExample: {
          problem: "Check that the equation for fermentation, $\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$, is balanced.",
          solution: "Left: 6 C, 12 H, 6 O. Right: carbon $2\\times2 + 2\\times1 = 6$; hydrogen $2\\times5 + 2\\times1 = 12$; oxygen $2\\times1 + 2\\times2 = 6$. Both sides match, so the equation is balanced.",
        },
      },
      questions: [
        {
          id: "esc9-u1-aerobic-anaerobic-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word equation shows aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "glucose + oxygen $\\rightarrow$ carbon dioxide + water" },
              { id: "b", text: "carbon dioxide + water $\\rightarrow$ glucose + oxygen" },
              { id: "c", text: "glucose $\\rightarrow$ lactic acid" },
              { id: "d", text: "glucose + carbon dioxide $\\rightarrow$ oxygen + water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aerobic respiration", statement: "Glucose reacts with oxygen to release energy, producing carbon dioxide and water." },
            ],
            steps: [
              { reasoning: "Aerobic respiration uses oxygen and glucose as reactants and produces carbon dioxide and water.", working: "\\text{glucose} + \\text{oxygen} \\rightarrow \\text{carbon dioxide} + \\text{water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (c), which is the equation for photosynthesis.", "Choosing (d), which is anaerobic respiration in muscle cells."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "esc9-u1-aerobic-anaerobic-respiration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sprinter runs a 100 m race. Her muscles respire anaerobically for part of the race. State the product of anaerobic respiration in her muscles, and give one difference between aerobic and anaerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anaerobic respiration", statement: "Without oxygen, glucose is partly broken down to lactic acid in muscles, releasing less energy." },
            ],
            steps: [
              { reasoning: "In muscles, glucose is converted to lactic acid.", working: "\\text{lactic acid}", marks: 1, markCode: "B" },
              { reasoning: "A valid difference: aerobic respiration uses oxygen but anaerobic does not; aerobic releases more energy per glucose; aerobic produces carbon dioxide and water, anaerobic produces lactic acid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Lactic acid; e.g. aerobic respiration releases more energy and needs oxygen.",
            commonErrors: ["Stating that anaerobic respiration in muscles produces ethanol and carbon dioxide (this is yeast).", "Saying anaerobic respiration releases no energy."],
            examinerNote: "Reject 'lactate' only if lactic acid is not also given (allow lactate). Allow 'in the absence of oxygen' oe for the second mark.",
          },
        },
        {
          id: "esc9-u1-aerobic-anaerobic-respiration-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The balanced equation for aerobic respiration is $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$. Calculate the number of molecules of oxygen needed to react with 3 molecules of glucose.",
          response: { type: "numeric", parts: [{ label: "Molecules of oxygen", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are not created or destroyed, so the balanced equation gives the ratio in which molecules react." },
            ],
            steps: [
              { reasoning: "Read the ratio from the equation: 1 molecule of glucose reacts with 6 molecules of oxygen.", working: "1 : 6", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 3 for 3 molecules of glucose.", working: "3 \\times 6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$ molecules of oxygen",
            commonErrors: ["Giving 6, forgetting to scale up for 3 glucose molecules.", "Giving 9 by adding 6 and 3."],
            examinerNote: "M1 for ratio 1:6 identified. M1 for $\\times3$ (oe). A1 cao.",
          },
        },
        {
          id: "esc9-u1-aerobic-anaerobic-respiration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates fermentation in yeast. She mixes yeast and glucose solution in a flask and connects it by a delivery tube to a test tube of limewater. She counts the bubbles released per minute at three temperatures and repeats each measurement three times.\n\n| Temperature ($^\\circ\\text{C}$) | Repeat 1 | Repeat 2 | Repeat 3 |\n| --- | --- | --- | --- |\n| 20 | 10 | 12 | 11 |\n| 35 | 28 | 31 | 31 |\n| 70 | 0 | 0 | 0 |",
          parts: [
            { label: "a", prompt: "Name the gas that turns the limewater cloudy.", marks: 1 },
            { label: "b", prompt: "Calculate the mean number of bubbles per minute at $35^\\circ\\text{C}$.", marks: 2 },
            { label: "c", prompt: "Explain why no bubbles were produced at $70^\\circ\\text{C}$.", marks: 2 },
            { label: "d", prompt: "Write the word equation for anaerobic respiration in yeast.", marks: 1 },
            { label: "e", prompt: "Explain why a runner continues to breathe deeply for several minutes after a sprint has finished.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
              { kind: "definition", name: "Fermentation", statement: "Anaerobic respiration in yeast: glucose $\\rightarrow$ ethanol + carbon dioxide." },
              { kind: "principle", name: "Oxygen debt", statement: "Extra oxygen is needed after anaerobic respiration to break down the lactic acid that has built up." },
            ],
            steps: [
              { part: "a", reasoning: "Carbon dioxide turns limewater cloudy.", working: "\\text{carbon dioxide}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the three repeats and divide by three.", working: "\\frac{28 + 31 + 31}{3} = \\frac{90}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "30\\text{ bubbles per minute}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "At $70^\\circ\\text{C}$ the enzymes in the yeast are denatured (the yeast cells are killed).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So respiration (fermentation) cannot happen and no carbon dioxide is released.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Yeast produces ethanol and carbon dioxide from glucose.", working: "\\text{glucose} \\rightarrow \\text{ethanol} + \\text{carbon dioxide}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "During the sprint the muscles respired anaerobically, producing lactic acid.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Extra oxygen is needed to break down the lactic acid.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Deep breathing takes in more oxygen, which is carried to the muscles by the blood.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Carbon dioxide (b) 30 bubbles per minute (c) enzymes denatured, no fermentation (d) glucose $\\rightarrow$ ethanol + carbon dioxide (e) lactic acid built up and must be broken down using oxygen.",
            commonErrors: ["Writing oxygen as the gas that turns limewater cloudy.", "Writing the equation for aerobic respiration in (d).", "Stating that the enzyme is 'dead' rather than denatured."],
            examinerNote: "In (b) allow 30.0. In (c) allow 'too hot for the enzymes'. Reject 'respiration stops because yeast needs oxygen'. In (e) allow 'to repay the oxygen debt' for the second mark.",
          },
        },
      ],
    },
  ],
};
