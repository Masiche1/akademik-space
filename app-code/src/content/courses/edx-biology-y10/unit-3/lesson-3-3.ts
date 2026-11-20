import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ebi10-u3-lesson-3-3",
  code: "3-3",
  title: "The Kidney and Osmoregulation",
  goal: "I CAN describe how the nephron forms urine and explain how ADH regulates the water content of the blood.",
  standards: ["4BI1 2.70", "4BI1 2.71", "4BI1 2.72", "4BI1 2.73", "4BI1 2.74", "4BI1 2.75", "4BI1 2.76", "4BI1 2.77", "4BI1 2.78", "4BI1 2.79"],
  vocabulary: [
    { term: "Excretion", definition: "The removal from the body of the waste products of metabolism, such as carbon dioxide and urea." },
    { term: "Urea", definition: "A nitrogen-containing waste substance made in the liver from excess amino acids and excreted by the kidneys in urine." },
    { term: "Ultrafiltration", definition: "The forcing of water, glucose, urea and ions out of the blood in the glomerulus into the Bowman's capsule under high pressure." },
    { term: "Selective reabsorption", definition: "The return of useful substances, such as all glucose, most water and some ions, from the filtrate back into the blood." },
    { term: "Osmoregulation", definition: "The control of the water content and solute concentration of the blood." },
    { term: "ADH", definition: "Antidiuretic hormone, made in the pituitary gland, which makes the collecting duct more permeable to water so that more water is reabsorbed." },
    { term: "Negative feedback", definition: "A control system in which a change in a condition triggers a response that reverses the change and restores the normal level." },
  ],
  concepts: [
    {
      id: "ebi10-u3-kidney-nephron",
      title: "The kidney and nephron",
      skill: "Describe the structure of the nephron, explain ultrafiltration and selective reabsorption and interpret data about urine formation.",
      lesson: {
        sections: [
          {
            heading: "Excretion and the role of the kidneys",
            body: "Excretion removes the waste products of metabolism. Carbon dioxide is excreted by the lungs. **Urea** is made in the **liver** when excess amino acids are broken down (deamination), carried in the blood and excreted by the **kidneys** in urine, together with excess water and ions.\n\nThe kidneys also carry out **osmoregulation**, controlling the water content of the blood. Blood enters each kidney through the **renal artery** and leaves through the **renal vein**. Urine leaves through the **ureter** to the **bladder** and is released through the **urethra**. Each kidney contains about a million microscopic tubules called **nephrons**.",
          },
          {
            heading: "Structure of the nephron and urine formation",
            body: "Each nephron has a **glomerulus** (a knot of capillaries) inside the **Bowman's capsule**, followed by the **proximal convoluted tubule (PCT)**, the **loop of Henle**, the distal tubule and the **collecting duct**.\n\n**1. Ultrafiltration.** The blood in the glomerulus is at high pressure because the afferent (incoming) vessel is wider than the efferent (outgoing) one. Small molecules (water, glucose, urea, ions) are forced through the capillary wall into the Bowman's capsule, forming the glomerular filtrate. Large molecules such as proteins and blood cells stay in the blood.\n\n**2. Selective reabsorption.** In the PCT **all the glucose** is reabsorbed into the blood, by **active transport** (which needs energy from respiration). Many ions and much of the water are also reabsorbed.\n\n**3. Water reabsorption.** More water is reabsorbed by osmosis in the loop of Henle and collecting duct. The amount depends on the hormone ADH (next concept).\n\nThe fluid left is **urine**: water, urea and ions. It contains no glucose or protein in a healthy person.",
          },
          {
            heading: "Interpreting kidney data",
            body: "Compare concentrations in blood plasma, filtrate and urine. A substance in plasma but not filtrate (protein) is too large to be filtered. A substance in plasma and filtrate but not in urine (glucose) is completely reabsorbed. A substance whose concentration is much higher in urine than in filtrate (urea) has become concentrated because water was reabsorbed while the urea was not.\n\nThe proportion of filtrate reabsorbed is found from: $\\text{percentage reabsorbed} = \\frac{\\text{volume filtered} - \\text{volume of urine}}{\\text{volume filtered}} \\times 100\\%$. About $180\\text{ dm}^3$ of filtrate form per day but only about $1.5\\text{ dm}^3$ of urine. Glucose or protein in urine can indicate diabetes or kidney damage.",
          },
        ],
        keyFormulas: [
          { name: "Ultrafiltration", statement: "High pressure forces small molecules (water, glucose, urea, ions) out of the glomerulus; proteins and cells remain" },
          { name: "Selective reabsorption", statement: "All glucose reabsorbed by active transport in the proximal convoluted tubule" },
          { name: "Percentage reabsorbed", statement: "$\\frac{\\text{volume filtered} - \\text{volume of urine}}{\\text{volume filtered}} \\times 100\\%$" },
          { name: "Urine composition", statement: "Water, urea and ions" },
        ],
        workedExample: {
          problem: "A kidney forms $125\\text{ cm}^3$ of filtrate per minute and $1.0\\text{ cm}^3$ of urine per minute. Calculate the percentage of the filtrate that is reabsorbed, to 1 decimal place.",
          solution: "Volume reabsorbed $= 125 - 1.0 = 124\\text{ cm}^3$ per minute. Percentage $= \\frac{124}{125} \\times 100 = 99.2\\%$.",
        },
      },
      questions: [
        {
          id: "ebi10-u3-kidney-nephron-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where in the nephron is all of the glucose reabsorbed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glomerulus" },
              { id: "b", text: "Proximal convoluted tubule" },
              { id: "c", text: "Collecting duct" },
              { id: "d", text: "Bowman's capsule" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selective reabsorption", statement: "All glucose is reabsorbed by active transport in the proximal convoluted tubule." },
            ],
            steps: [
              { reasoning: "The glomerulus and Bowman's capsule are where filtration occurs. Glucose is reabsorbed back into the blood in the first tubule, the PCT.", working: "\\text{proximal convoluted tubule}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Proximal convoluted tubule",
            commonErrors: ["Choosing the collecting duct, which is where water reabsorption is controlled by ADH.", "Choosing the glomerulus, where glucose is filtered out of the blood."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi10-u3-kidney-nephron-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A kidney forms $180\\text{ dm}^3$ of filtrate per day and produces $1.8\\text{ dm}^3$ of urine per day. Calculate the percentage of the filtrate that is reabsorbed into the blood.",
          response: { type: "numeric", parts: [{ label: "Percentage reabsorbed", answer: 99, tolerance: 0.01, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage reabsorbed", statement: "$\\frac{\\text{filtered} - \\text{urine}}{\\text{filtered}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Subtract the volume of urine from the volume filtered to find the volume reabsorbed.", working: "180 - 1.8 = 178.2\\text{ dm}^3", marks: 1, markCode: "M" },
              { reasoning: "Divide by the volume filtered and multiply by 100.", working: "\\frac{178.2}{180} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "99\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$99\\%$",
            commonErrors: ["Calculating the percentage of urine (1%) rather than the percentage reabsorbed.", "Dividing by the urine volume."],
            examinerNote: "Allow 99.0. M1 may be awarded for 1.8/180 = 1% followed by 100 - 1.",
          },
        },
        {
          id: "ebi10-u3-kidney-nephron-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how the structure of the glomerulus and Bowman's capsule allows ultrafiltration, and why blood proteins are not found in the glomerular filtrate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ultrafiltration", statement: "High blood pressure forces small molecules through the capillary wall and capsule lining; large molecules cannot pass." },
            ],
            steps: [
              { reasoning: "The afferent arteriole (entering the glomerulus) is wider than the efferent arteriole (leaving it).", marks: 1, markCode: "B" },
              { reasoning: "This creates a high hydrostatic pressure in the glomerular capillaries.", marks: 1, markCode: "B" },
              { reasoning: "The pressure forces small molecules (water, glucose, urea, ions) through the capillary wall and the capsule lining into the Bowman's capsule.", marks: 1, markCode: "B" },
              { reasoning: "The pores in the capillary wall and the basement membrane are too small for large molecules such as proteins.", marks: 1, markCode: "B" },
              { reasoning: "Blood cells and proteins are too large to pass through, so they remain in the blood.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Wide afferent, narrow efferent vessel gives high pressure; small molecules forced through; proteins too large so stay in blood.",
            commonErrors: ["Saying the kidney filter is selective about what the body needs (that is reabsorption, not filtration).", "Saying protein is reabsorbed in the PCT."],
            examinerNote: "Allow 'filter' for the basement membrane. Reject 'diffusion' as the mechanism of filtration.",
          },
        },
        {
          id: "ebi10-u3-kidney-nephron-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The table shows the concentration of four substances in the blood plasma entering a kidney, in the glomerular filtrate and in the urine of a healthy person.\n\n| Substance | Plasma (g/dm$^3$) | Filtrate (g/dm$^3$) | Urine (g/dm$^3$) |\n| --- | --- | --- | --- |\n| Protein | 70 | 0 | 0 |\n| Glucose | 1.0 | 1.0 | 0 |\n| Urea | 0.3 | 0.3 | 20 |\n| Chloride ions | 3.6 | 3.6 | 6.0 |",
          parts: [
            { label: "a", prompt: "Explain why there is no protein in the filtrate.", marks: 2 },
            { label: "b", prompt: "Describe how the glucose is removed from the filtrate and explain why it needs energy.", marks: 3 },
            { label: "c", prompt: "Calculate how many times greater the concentration of urea is in the urine than in the filtrate. Give your answer to the nearest whole number.", marks: 2 },
            { label: "d", prompt: "Explain why the concentration of urea in the urine is greater than in the filtrate.", marks: 2 },
            { label: "e", prompt: "Name the organ in which urea is made.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ultrafiltration", statement: "Only small molecules pass from the glomerulus into the Bowman's capsule." },
              { kind: "principle", name: "Active transport", statement: "Movement of molecules against a concentration gradient using energy from respiration." },
              { kind: "formula", name: "Concentration factor", statement: "$\\text{factor} = \\frac{\\text{concentration in urine}}{\\text{concentration in filtrate}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Protein molecules are too large to pass through the filter (capillary wall / basement membrane).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "They stay in the blood, because only small molecules are forced out under high pressure.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "All the glucose is reabsorbed from the proximal convoluted tubule back into the blood.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "By active transport, against its concentration gradient (as the filtrate concentration falls below that of the blood).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "This needs energy from respiration (provided by mitochondria in the tubule cells).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the urine concentration by the filtrate concentration.", working: "\\frac{20}{0.3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round.", working: "66.67\\ldots \\approx 67", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Much of the water is reabsorbed from the filtrate into the blood by osmosis.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Urea is not reabsorbed (or only a little), so it stays in the smaller volume of fluid and becomes more concentrated.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Urea is made in the liver from excess amino acids.", working: "\\text{liver}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) too large to be filtered (b) active transport in the PCT, energy needed for movement against a concentration gradient (c) 67 times (d) water reabsorbed but urea not (e) liver",
            commonErrors: ["Saying glucose is absent from urine because it is 'used up'.", "Dividing 0.3 by 20 in (c).", "Saying urea is made in the kidney."],
            examinerNote: "(c) Allow 66.7 or 67. (b) Reject 'diffusion' or 'osmosis' for glucose. Allow 'against a concentration gradient' for the second mark.",
          },
        },
      ],
    },
    {
      id: "ebi10-u3-osmoregulation-adh",
      title: "Osmoregulation and ADH",
      skill: "Explain how ADH and negative feedback regulate blood water content and interpret water balance data.",
      lesson: {
        sections: [
          {
            heading: "Water balance",
            body: "The water content of the blood must stay within narrow limits. If blood is too dilute, water enters cells by osmosis and they may swell and burst. If blood is too concentrated, cells lose water and shrink.\n\nWater is gained from drinks, food and respiration. It is lost in urine, sweat, breath and faeces. In hot weather or during exercise more water is lost in sweat, so the kidneys produce less urine to conserve water. If a lot of water is drunk, a large volume of dilute urine is produced.",
          },
          {
            heading: "ADH and negative feedback",
            body: "Osmoregulation is controlled by **negative feedback**. The hypothalamus in the brain monitors the water content of the blood (osmoreceptors detect the solute concentration). The **pituitary gland** releases **ADH** (antidiuretic hormone) into the blood.\n\n**Blood too concentrated (low water content):**\n- more ADH is released\n- the walls of the collecting duct become **more permeable** to water\n- **more water is reabsorbed** by osmosis into the blood\n- a **small volume of concentrated urine** is produced\n\n**Blood too dilute (high water content):**\n- **less ADH** is released\n- the collecting duct is **less permeable** to water\n- **less water is reabsorbed**\n- a **large volume of dilute urine** is produced\n\nIn each case the blood water content returns towards normal, which is negative feedback. ADH acts on the collecting duct (and distal tubule); it does not change filtration.",
          },
          {
            heading: "Interpreting data on water balance",
            body: "To test the effect of drinking, urine volume and concentration are measured at intervals after drinking. A graph of urine volume rises soon after drinking a large volume of water, as ADH falls, and later returns to normal. When analysing data, state values with units, use data to show a trend and compare rates (change divided by time). Remember that on a hot day the urine volume falls but the sweat volume rises, so the total water output may still equal the total intake over a day when balance is maintained.\n\nWater balance: $\\text{intake} = \\text{output}$ over a day.",
          },
        ],
        keyFormulas: [
          { name: "High blood concentration", statement: "More ADH, collecting duct more permeable, more water reabsorbed, small volume of concentrated urine" },
          { name: "Low blood concentration", statement: "Less ADH, collecting duct less permeable, less water reabsorbed, large volume of dilute urine" },
          { name: "Daily water balance", statement: "$\\text{water intake} = \\text{water output}$" },
          { name: "Rate of change", statement: "$\\text{rate} = \\frac{\\text{change in volume}}{\\text{time}}$" },
        ],
        workedExample: {
          problem: "In a day a person gains $1500\\text{ cm}^3$ from drinks, $700\\text{ cm}^3$ from food and $300\\text{ cm}^3$ from respiration. They lose $500\\text{ cm}^3$ in sweat, $400\\text{ cm}^3$ in breath and $100\\text{ cm}^3$ in faeces. Calculate the volume of urine produced if water balance is maintained.",
          solution: "Total intake $= 1500 + 700 + 300 = 2500\\text{ cm}^3$. Losses other than urine $= 500 + 400 + 100 = 1000\\text{ cm}^3$. Urine $= 2500 - 1000 = 1500\\text{ cm}^3$.",
        },
      },
      questions: [
        {
          id: "ebi10-u3-osmoregulation-adh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is ADH released from?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kidney" },
              { id: "b", text: "Liver" },
              { id: "c", text: "Pituitary gland" },
              { id: "d", text: "Pancreas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ADH", statement: "ADH is a hormone released into the blood by the pituitary gland, under control of the hypothalamus." },
            ],
            steps: [
              { reasoning: "ADH is released by the pituitary gland, and acts on the kidney.", working: "\\text{pituitary gland}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Pituitary gland",
            commonErrors: ["Choosing the kidney, which is the organ ADH acts on, not where it is made."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ebi10-u3-osmoregulation-adh-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In one day a person gains $1800\\text{ cm}^3$ of water from drinks, $600\\text{ cm}^3$ from food and $300\\text{ cm}^3$ from respiration. They lose $600\\text{ cm}^3$ in sweat, $350\\text{ cm}^3$ in breath and $150\\text{ cm}^3$ in faeces. Their water balance is maintained. Calculate the volume of urine they produce, in $\\text{cm}^3$.",
          response: { type: "numeric", parts: [{ label: "Volume of urine", answer: 1600, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water balance", statement: "When water balance is maintained, total water gained equals total water lost." },
            ],
            steps: [
              { reasoning: "Add up all the water gained.", working: "1800 + 600 + 300 = 2700\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Subtract the losses other than urine ($600 + 350 + 150 = 1100$).", working: "2700 - 1100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "1600\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1600\\text{ cm}^3$",
            commonErrors: ["Forgetting to include water from respiration or food.", "Subtracting only some of the losses."],
            examinerNote: "Allow ecf for an incorrect addition. A1 cao with unit.",
          },
        },
        {
          id: "ebi10-u3-osmoregulation-adh-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A person exercises vigorously on a hot day and sweats heavily. Explain how the body responds to prevent the water content of the blood from falling too low.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A change in a condition triggers a response that reverses the change." },
            ],
            steps: [
              { reasoning: "Water lost in sweat makes the blood more concentrated (lower water content), which is detected by the hypothalamus.", marks: 1, markCode: "B" },
              { reasoning: "The pituitary gland releases more ADH into the blood.", marks: 1, markCode: "B" },
              { reasoning: "ADH makes the collecting duct walls more permeable to water.", marks: 1, markCode: "B" },
              { reasoning: "More water is reabsorbed into the blood by osmosis.", marks: 1, markCode: "B" },
              { reasoning: "A small volume of concentrated urine is produced, so water is conserved and the blood water content rises back to normal (negative feedback).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Detected by hypothalamus; more ADH from pituitary; collecting duct more permeable; more water reabsorbed; small volume of concentrated urine.",
            commonErrors: ["Saying that ADH is produced by the kidney.", "Saying that the kidney stops producing urine completely.", "Saying that ADH makes the collecting duct less permeable."],
            examinerNote: "Allow 'brain' for hypothalamus. Reject 'ADH increases filtration' and 'water is reabsorbed by active transport'.",
          },
        },
        {
          id: "ebi10-u3-osmoregulation-adh-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student drinks $1.0\\text{ dm}^3$ of water at time zero. Her urine volume is measured every 30 minutes.\n\n| Time after drinking (min) | Volume of urine in the previous 30 minutes ($\\text{cm}^3$) |\n| --- | --- |\n| 0 | 20 |\n| 30 | 80 |\n| 60 | 250 |\n| 90 | 330 |\n| 120 | 180 |\n| 150 | 60 |",
          parts: [
            { label: "a", prompt: "Calculate the total volume of urine produced in the 150 minutes after drinking (the 0 minute reading was taken before she drank).", marks: 2 },
            { label: "b", prompt: "Calculate the percentage of the $1.0\\text{ dm}^3$ of water drunk that was excreted as urine in the 150 minutes after drinking. Give your answer to the nearest whole number.", marks: 2 },
            { label: "c", prompt: "Explain why the volume of urine increased after drinking the water.", marks: 3 },
            { label: "d", prompt: "Describe how the colour or concentration of the urine would change between 30 and 90 minutes, and explain why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{part}}{\\text{whole}} \\times 100\\%$; $1.0\\text{ dm}^3 = 1000\\text{ cm}^3$" },
              { kind: "principle", name: "Negative feedback", statement: "A rise in blood water content reduces ADH release, so more water is lost in urine and the blood water content returns to normal." },
            ],
            steps: [
              { part: "a", reasoning: "Add the readings at 30, 60, 90, 120 and 150 minutes, which cover the 150 minutes after drinking.", working: "80 + 250 + 330 + 180 + 60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with units.", working: "900\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert $1.0\\text{ dm}^3$ to $1000\\text{ cm}^3$ and divide.", working: "\\frac{900}{1000} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "90\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Drinking water makes the blood more dilute (higher water content), detected by the hypothalamus.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Less ADH is released from the pituitary gland, so the collecting duct is less permeable to water.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Less water is reabsorbed, so a larger volume of urine is produced, removing the excess water.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The urine becomes more dilute (paler).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Because less water is reabsorbed, the same urea and ions are dissolved in a larger volume of water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $900\\text{ cm}^3$ (b) $90\\%$ (c) blood more dilute, less ADH, less reabsorption (d) more dilute, paler",
            commonErrors: ["Including the reading at 0 minutes (giving 920).", "Failing to convert dm$^3$ to cm$^3$ (giving 90000%).", "Saying more ADH is released after drinking water."],
            examinerNote: "(a) The 0 minute reading (20) is before drinking and is excluded; allow ecf if included (920 and 92%) only if stated. (c) Reject 'kidneys make more urine because more water is filtered' alone.",
          },
        },
      ],
    },
  ],
};
