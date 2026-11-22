import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ebi10-u3-lesson-3-1",
  code: "3-1",
  title: "Respiration",
  goal: "I CAN compare aerobic and anaerobic respiration and use a respirometer to measure the rate of respiration.",
  standards: ["4BI1 2.36", "4BI1 2.37", "4BI1 2.38", "4BI1 2.39"],
  vocabulary: [
    { term: "Respiration", definition: "The chemical reactions in all living cells that release energy from nutrient molecules such as glucose." },
    { term: "Aerobic respiration", definition: "Respiration that uses oxygen to break glucose down completely, releasing a large amount of energy and producing carbon dioxide and water." },
    { term: "Anaerobic respiration", definition: "Respiration without oxygen, in which glucose is only partly broken down, releasing much less energy per glucose molecule." },
    { term: "Lactic acid", definition: "The product of anaerobic respiration in animal cells, for example in muscles during vigorous exercise." },
    { term: "Oxygen debt", definition: "The extra oxygen needed after vigorous exercise to break down the lactic acid that has built up." },
    { term: "Respirometer", definition: "Apparatus used to measure the rate of respiration, usually by the oxygen taken up by living organisms in a sealed container." },
    { term: "Soda lime", definition: "A solid that absorbs carbon dioxide, used in a respirometer so that any gas volume change is due to oxygen uptake alone." },
  ],
  concepts: [
    {
      id: "ebi10-u3-aerobic-anaerobic",
      title: "Aerobic and anaerobic respiration",
      skill: "Write the equations for aerobic and anaerobic respiration, compare them and interpret data about exercise.",
      lesson: {
        sections: [
          {
            heading: "Aerobic respiration",
            body: "Respiration is not breathing. It is a set of chemical reactions in every living cell that releases energy from glucose. **Aerobic respiration** uses oxygen and takes place largely in the mitochondria:\n\n$$\\text{glucose} + \\text{oxygen} \\rightarrow \\text{carbon dioxide} + \\text{water}$$\n\n$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$$\n\nThe energy released is used for muscle contraction, active transport, building large molecules (such as proteins) from small ones, cell division and, in mammals and birds, maintaining a constant body temperature. Some energy is released as heat.",
          },
          {
            heading: "Anaerobic respiration",
            body: "**Anaerobic respiration** happens without oxygen. The glucose is only partly broken down, so much less energy is released per glucose molecule than in aerobic respiration.\n\n- In **animals** (for example muscle cells in a sprint): $\\text{glucose} \\rightarrow \\text{lactic acid}$\n- In **plants and yeast**: $\\text{glucose} \\rightarrow \\text{ethanol} + \\text{carbon dioxide}$ (called fermentation in yeast)\n\nLactic acid builds up in the muscles and blood during vigorous exercise. After exercise, extra oxygen is needed to break the lactic acid down (the **oxygen debt**), which is why breathing and heart rate stay raised for a while. The liver can convert some lactic acid back to glucose.",
          },
          {
            heading: "Comparing the two types",
            body: "Aerobic respiration needs oxygen, releases much more energy per glucose and produces carbon dioxide and water. Anaerobic respiration needs no oxygen, releases much less energy per glucose and in animals produces lactic acid. Cells use anaerobic respiration when oxygen cannot be delivered as fast as the cells need it.\n\nIn a simplified model, one mole of glucose releases about $2800\\text{ kJ}$ aerobically but only about $140\\text{ kJ}$ when converted to lactic acid.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic respiration", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$" },
          { name: "Anaerobic respiration in animals", statement: "glucose $\\rightarrow$ lactic acid" },
          { name: "Anaerobic respiration in plants and yeast", statement: "glucose $\\rightarrow$ ethanol + carbon dioxide" },
          { name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original value}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "Blood lactate concentration is $12.0\\text{ mmol/dm}^3$ at the end of a race and $9.0\\text{ mmol/dm}^3$ five minutes later. Calculate the percentage decrease.",
          solution: "Change $= 12.0 - 9.0 = 3.0$. Percentage decrease $= \\frac{3.0}{12.0} \\times 100 = 25\\%$. Divide by the original value (12.0), not the later value.",
        },
      },
      questions: [
        {
          id: "ebi10-u3-aerobic-anaerobic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance is produced by anaerobic respiration in human muscle cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Lactic acid" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anaerobic respiration in animals", statement: "In animal cells, glucose is converted to lactic acid when oxygen is limited." },
            ],
            steps: [
              { reasoning: "Muscle cells are animal cells, so partly broken-down glucose becomes lactic acid.", working: "\\text{glucose} \\rightarrow \\text{lactic acid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Lactic acid",
            commonErrors: ["Choosing ethanol, which is the product in yeast and plants.", "Choosing carbon dioxide and water, the products of aerobic respiration."],
            examinerNote: "B1 for lactic acid. Allow lactate.",
          },
        },
        {
          id: "ebi10-u3-aerobic-anaerobic-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare aerobic respiration with anaerobic respiration in human muscle cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy yield", statement: "Complete breakdown of glucose using oxygen releases much more energy than partial breakdown without oxygen." },
            ],
            steps: [
              { reasoning: "Aerobic respiration requires oxygen; anaerobic respiration does not.", marks: 1, markCode: "B" },
              { reasoning: "Aerobic respiration releases much more energy per glucose molecule (glucose is completely broken down); anaerobic releases less.", marks: 1, markCode: "B" },
              { reasoning: "Aerobic respiration produces carbon dioxide and water.", marks: 1, markCode: "B" },
              { reasoning: "Anaerobic respiration in muscle produces lactic acid (and no carbon dioxide).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Aerobic: oxygen needed, much more energy, CO$_2$ + water. Anaerobic: no oxygen needed, less energy, lactic acid.",
            commonErrors: ["Saying anaerobic respiration releases no energy.", "Saying anaerobic respiration in muscle makes ethanol and carbon dioxide."],
            examinerNote: "Each point must be a comparison or both sides stated. Ignore 'faster' unless qualified. Allow oe for any point.",
          },
        },
        {
          id: "ebi10-u3-aerobic-anaerobic-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a simplified model, aerobic respiration releases approximately $2800\\text{ kJ}$ of energy per mole of glucose, whereas anaerobic respiration to lactic acid releases approximately $140\\text{ kJ}$ per mole of glucose.\n\nCalculate how many times more energy is released per mole of glucose by aerobic respiration than by anaerobic respiration.",
          response: { type: "numeric", parts: [{ label: "Number of times more energy", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ratio", statement: "$\\text{ratio} = \\frac{\\text{aerobic energy}}{\\text{anaerobic energy}}$" },
            ],
            steps: [
              { reasoning: "Divide the aerobic energy by the anaerobic energy to find how many times larger it is.", working: "\\frac{2800}{140}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the division.", working: "\\frac{2800}{140} = 20", marks: 1, markCode: "A" },
              { reasoning: "Interpret: aerobic respiration releases 20 times as much energy per mole of glucose.", working: "20\\text{ times}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$20$ times more energy",
            commonErrors: ["Subtracting to get 2660 kJ, which is the difference, not 'how many times'.", "Dividing the other way to get 0.05."],
            examinerNote: "M1 for 2800 / 140. A1 for 20. B1 for a statement that aerobic releases 20 times more (oe). Reject 19 (the difference divided by 140).",
          },
        },
        {
          id: "ebi10-u3-aerobic-anaerobic-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student runs a 400 m race. Blood samples are taken before the race, immediately after it, and during recovery. The concentration of lactate (the ion of lactic acid) in the blood is shown.\n\n| Time | Blood lactate ($\\text{mmol/dm}^3$) |\n| --- | --- |\n| Before the race | 1.0 |\n| Immediately after the race | 14.0 |\n| 10 minutes after the race | 6.0 |\n| 30 minutes after the race | 1.5 |",
          parts: [
            { label: "a", prompt: "Write the word equation for anaerobic respiration in human muscle.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage decrease in blood lactate concentration between immediately after the race and 10 minutes after the race. Give your answer to the nearest whole number.", marks: 2 },
            { label: "c", prompt: "Explain why the muscles respired anaerobically during the race.", marks: 2 },
            { label: "d", prompt: "Explain why the lactate concentration falls during recovery.", marks: 2 },
            { label: "e", prompt: "Explain why anaerobic respiration can only be used for short periods during exercise.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage change} = \\frac{\\text{change}}{\\text{original value}} \\times 100\\%$" },
              { kind: "principle", name: "Oxygen debt", statement: "Extra oxygen is needed after vigorous exercise to break down the lactic acid that has accumulated." },
            ],
            steps: [
              { part: "a", reasoning: "In animals glucose is partly broken down to lactic acid.", working: "\\text{glucose} \\rightarrow \\text{lactic acid}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Decrease divided by the original (post-race) value, multiplied by 100.", working: "\\frac{14.0 - 6.0}{14.0} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round to the nearest whole number.", working: "\\frac{8.0}{14.0} \\times 100 = 57.14\\ldots \\approx 57\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "During the race the muscles needed energy faster than the blood could deliver oxygen.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So aerobic respiration could not supply enough energy and the muscle cells also respired anaerobically.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "After the race, extra oxygen is taken in (breathing stays deep and fast).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The lactic acid is broken down (oxidised) using oxygen, or converted back to glucose in the liver, so its concentration falls.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Anaerobic respiration releases much less energy per glucose, so glucose is used up quickly.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Lactic acid builds up and causes muscle fatigue (cramp), so the muscles cannot keep contracting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) glucose $\\rightarrow$ lactic acid (b) $57\\%$ (c) oxygen not supplied fast enough for the energy demand (d) lactate broken down using oxygen (e) low energy yield and lactic acid causes fatigue",
            commonErrors: ["Dividing by 6.0 (the later value) to get 133%.", "Giving 8 as the answer, which is the change in concentration, not a percentage."],
            examinerNote: "(b) Allow 57.1. (c) Allow 'oxygen debt' only with an explanation of oxygen being insufficient. Reject 'no oxygen in the muscles' for the first mark. (d) Allow 'repaying the oxygen debt'.",
          },
        },
      ],
    },
    {
      id: "ebi10-u3-respirometer",
      title: "Respiration practical: respirometers",
      skill: "Describe how a respirometer measures the rate of respiration, calculate gas volumes and evaluate the method.",
      lesson: {
        sections: [
          {
            heading: "Measuring respiration",
            body: "Respiration can be investigated by measuring the oxygen taken in, the carbon dioxide released or the heat released.\n\nTo show heat release, living seeds (such as germinating peas) are placed in a vacuum flask with a thermometer. A second flask contains boiled (dead) peas as a control. Both are treated with disinfectant first to kill microorganisms, because microorganisms also respire. The temperature in the flask with living peas rises.\n\nTo show carbon dioxide release, air drawn over living organisms is bubbled through **limewater**, which turns cloudy, or **hydrogencarbonate indicator**, which changes from red to yellow.",
          },
          {
            heading: "The respirometer",
            body: "A simple respirometer has a tube containing living organisms (germinating seeds or small invertebrates) and a tube of **soda lime**, or a small tube of potassium hydroxide solution, which absorbs carbon dioxide. The tube is joined to a capillary tube containing a drop of coloured liquid.\n\nThe organisms take in oxygen and release carbon dioxide. Because the carbon dioxide is absorbed, the total volume of gas falls and the pressure drops. The coloured drop moves **towards** the organisms. The distance it moves in a fixed time measures the oxygen uptake.\n\nThe volume of oxygen taken in is the volume of a cylinder of capillary tube:\n\n$$V = \\pi r^2 h$$\n\nwhere $r$ is the radius of the capillary bore and $h$ is the distance moved by the drop. The rate is $\\frac{V}{t}$.",
          },
          {
            heading: "Controls, variables and reliability",
            body: "A **control** tube containing glass beads or dead (boiled) seeds of the same mass shows that the movement is caused by respiration in living organisms, and corrects for changes in temperature or atmospheric pressure. A **water bath** keeps the temperature constant, because gas volumes change with temperature.\n\nTo compare rates at different temperatures, the independent variable is temperature and the dependent variable is the distance moved by the drop. Control variables include the mass and type of seeds, the time and the apparatus. Repeat readings, ignore anomalous results and calculate a mean to improve reliability. Allow the apparatus to equilibrate before starting, and ensure the connections are airtight.",
          },
        ],
        keyFormulas: [
          { name: "Volume of gas moved in the capillary", statement: "$V = \\pi r^2 h$" },
          { name: "Rate of oxygen uptake", statement: "$\\text{rate} = \\frac{\\text{volume of oxygen taken in}}{\\text{time}}$" },
          { name: "Role of soda lime", statement: "Absorbs $\\text{CO}_2$, so the volume change is due to $\\text{O}_2$ uptake only" },
          { name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
        ],
        workedExample: {
          problem: "In a respirometer the coloured drop moves $24\\text{ mm}$ in $10$ minutes along a capillary tube of radius $0.5\\text{ mm}$. Calculate the rate of oxygen uptake in $\\text{mm}^3/\\text{min}$ to 2 significant figures.",
          solution: "$V = \\pi r^2 h = \\pi \\times 0.5^2 \\times 24 = \\pi \\times 6 = 18.85\\text{ mm}^3$. Rate $= \\frac{18.85}{10} = 1.885 \\approx 1.9\\text{ mm}^3/\\text{min}$.",
        },
      },
      questions: [
        {
          id: "ebi10-u3-respirometer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A respirometer contains soda lime. What is the function of the soda lime?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It absorbs carbon dioxide so that the volume change is due to oxygen uptake only" },
              { id: "b", text: "It absorbs oxygen so that the organisms cannot respire" },
              { id: "c", text: "It releases oxygen for the organisms to use" },
              { id: "d", text: "It keeps the seeds moist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Respirometer", statement: "Carbon dioxide released is absorbed, so the net gas volume change equals the oxygen taken in." },
            ],
            steps: [
              { reasoning: "If carbon dioxide were not absorbed, it would replace the oxygen used and the volume would hardly change. Absorbing it means the fall in volume equals the oxygen used.", working: "\\text{absorbs CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (a) or (c), confusing which gas is absorbed.", "Thinking the soda lime provides water for the seeds."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi10-u3-respirometer-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "In a respirometer, the coloured drop moves $45\\text{ mm}$ in $15$ minutes along a capillary tube with a bore of radius $0.50\\text{ mm}$.\n\nCalculate (a) the volume of oxygen taken in, and (b) the rate of oxygen uptake. Give both answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume of oxygen taken in", answer: 35.3, tolerance: 0.1, unit: "mm³" },
              { label: "(b) Rate of oxygen uptake", answer: 2.36, tolerance: 0.01, unit: "mm³/min" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V = \\pi r^2 h$, with the drop moving through a cylinder of radius $r$ and length $h$." },
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\frac{V}{t}$" },
            ],
            steps: [
              { reasoning: "Use the volume of a cylinder with the capillary radius and the distance moved.", working: "V = \\pi r^2 h = \\pi \\times 0.50^2 \\times 45", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "V = 35.34\\ldots \\approx 35.3\\text{ mm}^3", marks: 1, markCode: "A" },
              { reasoning: "Divide the volume by the time taken.", working: "\\text{rate} = \\frac{35.34}{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "2.356\\ldots \\approx 2.36\\text{ mm}^3/\\text{min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $35.3\\text{ mm}^3$ (b) $2.36\\text{ mm}^3/\\text{min}$",
            commonErrors: ["Using the diameter instead of the radius (gives four times the volume).", "Forgetting to square the radius.", "Using the distance moved per minute (3 mm/min) as the rate of volume."],
            examinerNote: "Allow ecf in (b) from an incorrect (a). Allow 35.34 and 2.356 unrounded. Reject missing units on the A marks only if the unit is wrong.",
          },
        },
        {
          id: "ebi10-u3-respirometer-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A respirometer contains $5.0\\text{ g}$ of germinating peas. The peas take in oxygen at a rate of $2.4\\text{ mm}^3$ per minute.\n\nCalculate the volume of oxygen taken in per gram of peas per hour, in $\\text{mm}^3$ per gram per hour.",
          response: { type: "numeric", parts: [{ label: "Oxygen uptake per gram per hour", answer: 28.8, tolerance: 0.1, unit: "mm³/g/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate per unit mass", statement: "$\\text{rate per gram} = \\frac{\\text{rate}}{\\text{mass}}$, and 1 hour = 60 minutes." },
            ],
            steps: [
              { reasoning: "Convert the rate per minute to a rate per hour.", working: "2.4 \\times 60 = 144\\text{ mm}^3/\\text{h}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the mass of peas to find the rate per gram.", working: "\\frac{144}{5.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "28.8\\text{ mm}^3/\\text{g/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28.8\\text{ mm}^3$ per gram per hour",
            commonErrors: ["Dividing by 60 instead of multiplying (0.008).", "Forgetting to divide by the mass (144)."],
            examinerNote: "Either order of the two methods is acceptable. A1 cao 28.8 with units.",
          },
        },
        {
          id: "ebi10-u3-respirometer-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student uses a respirometer to investigate the effect of temperature on the respiration of germinating peas. Each tube contains $5.0\\text{ g}$ of peas and soda lime. Each tube is placed in a water bath and the distance moved by the coloured drop in 10 minutes is measured. The experiment is repeated four times at each temperature.\n\n| Temperature ($^\\circ\\text{C}$) | Repeat 1 (mm) | Repeat 2 (mm) | Repeat 3 (mm) | Repeat 4 (mm) |\n| --- | --- | --- | --- | --- |\n| 10 | 6 | 8 | 7 | 7 |\n| 20 | 14 | 15 | 13 | 14 |\n| 30 | 27 | 29 | 41 | 28 |",
          parts: [
            { label: "a", prompt: "State the independent variable and the dependent variable in this investigation.", marks: 2 },
            { label: "b", prompt: "Identify the anomalous result at $30^\\circ\\text{C}$ and calculate the mean distance moved at $30^\\circ\\text{C}$, excluding the anomalous result.", marks: 2 },
            { label: "c", prompt: "A control tube contains $5.0\\text{ g}$ of glass beads in place of the peas. Explain the purpose of this control.", marks: 2 },
            { label: "d", prompt: "Explain why the drop moves towards the peas rather than away from them.", marks: 1 },
            { label: "e", prompt: "Describe and explain the trend in the results as the temperature increases from $10^\\circ\\text{C}$ to $30^\\circ\\text{C}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Valid investigation", statement: "Change one independent variable, measure one dependent variable and control all others." },
              { kind: "principle", name: "Effect of temperature on enzymes", statement: "Up to the optimum, higher temperature increases kinetic energy and collision rate, so enzyme-controlled reactions such as respiration speed up." },
            ],
            steps: [
              { part: "a", reasoning: "The variable the student changes is temperature.", working: "\\text{independent: temperature}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The variable measured is the distance moved by the drop (oxygen uptake) in 10 minutes.", working: "\\text{dependent: distance moved by the drop}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "41 mm is much higher than the other three results, so it is anomalous.", working: "41\\text{ mm}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mean of the remaining three results.", working: "\\frac{27 + 29 + 28}{3} = \\frac{84}{3} = 28\\text{ mm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The glass beads do not respire, so the control shows the drop moves because the peas are respiring.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It also shows any movement caused by changes in temperature or atmospheric pressure, which can be allowed for.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Oxygen is used up and the carbon dioxide is absorbed by the soda lime, so the pressure in the peas tube falls and the drop is pushed towards the peas.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The distance moved (rate of oxygen uptake) increases as temperature increases (about 7 mm, 14 mm, 28 mm, roughly doubling for each 10 degrees).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Higher temperature gives particles more kinetic energy, so there are more frequent collisions between enzymes and substrates and respiration enzymes work faster.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) temperature; distance moved by drop (b) 41 mm; 28 mm (c) shows movement is due to living peas respiring and allows for temperature or pressure change (d) oxygen used and CO$_2$ absorbed so pressure falls (e) rate increases because more enzyme-substrate collisions",
            commonErrors: ["Including 41 in the mean (giving 31.25).", "Saying the beads are the 'control variable'.", "Saying the drop moves because the peas 'breathe in' rather than because gas pressure falls."],
            examinerNote: "(a) Allow 'volume of oxygen used'. (b) Allow ecf from a wrong anomaly if the mean excludes it. (e) Allow 'enzymes are not yet denatured' but reject 'enzymes are alive'. Allow a quantitative statement for the first mark.",
          },
        },
      ],
    },
  ],
};
