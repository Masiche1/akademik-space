import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "bio9-u2-lesson-2-2",
  code: "2-2",
  title: "Cellular Respiration",
  goal: "I CAN describe the three stages of aerobic respiration and its ATP yield, and compare aerobic respiration with anaerobic respiration and fermentation.",
  standards: ["HS-LS1-7", "HS-LS2-3", "SEP: Using Mathematics and Computational Thinking"],
  vocabulary: [
    { term: "ATP", definition: "Adenosine triphosphate, the molecule that carries usable chemical energy for cell processes." },
    { term: "Glycolysis", definition: "The breakdown of glucose into two molecules of pyruvate in the cytoplasm, producing a small net yield of ATP." },
    { term: "Krebs cycle", definition: "A cycle of reactions in the mitochondrial matrix that completes the breakdown of pyruvate, releasing carbon dioxide and loading electron carriers." },
    { term: "Electron transport chain", definition: "A series of proteins in the inner mitochondrial membrane that uses electrons from NADH and FADH$_2$ to make most of the cell's ATP, with oxygen as the final electron acceptor." },
    { term: "Fermentation", definition: "Anaerobic pathways that regenerate NAD$^+$ so glycolysis can continue without oxygen, producing lactic acid or ethanol." },
    { term: "Aerobic", definition: "Requiring oxygen." },
    { term: "Anaerobic", definition: "Not requiring oxygen." },
  ],
  concepts: [
    {
      id: "bio9-u2-aerobic-respiration",
      title: "Aerobic respiration and ATP yield",
      skill: "Describe glycolysis, the Krebs cycle and the electron transport chain, and calculate ATP yield and energy efficiency.",
      lesson: {
        sections: [
          {
            heading: "Three stages of aerobic respiration",
            body: "Cells release the energy stored in glucose in three stages.\n\n1. **Glycolysis** (cytoplasm): one glucose (6 carbons) is split into two pyruvate molecules. There is a net gain of **2 ATP** and 2 NADH. No oxygen is needed.\n2. **Krebs cycle** (mitochondrial matrix): pyruvate is broken down and $\\text{CO}_2$ is released. This gives a net gain of **2 ATP** per glucose, plus many NADH and FADH$_2$.\n3. **Electron transport chain** (inner mitochondrial membrane): NADH and FADH$_2$ pass electrons along the chain. The energy released builds a hydrogen ion gradient that drives ATP synthesis. **Oxygen** is the final electron acceptor and combines with hydrogen to form water.",
          },
          {
            heading: "Overall equation and ATP yield",
            body: "$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energy (about 30 ATP)}$$\n\nThe electron transport chain makes the largest share of ATP. The total is roughly **30 to 32 ATP** per glucose; this lesson uses **30 ATP**. Photosynthesis and respiration are close to reverse processes: the products of one are the reactants of the other.",
          },
          {
            heading: "How efficient is respiration?",
            body: "Complete oxidation of one mole of glucose releases about $2870\\text{ kJ}$. Each mole of ATP made stores about $30.5\\text{ kJ}$.\n\n$$\\text{efficiency}=\\frac{\\text{energy stored in ATP}}{\\text{energy released from glucose}}\\times100\\%$$\n\nThe rest of the energy is transferred to the surroundings as thermal energy, which helps maintain body temperature.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic respiration", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$ + about 30 ATP" },
          { name: "Locations", statement: "Glycolysis: cytoplasm. Krebs cycle: matrix. Electron transport: inner membrane" },
          { name: "Efficiency", statement: "$\\dfrac{\\text{energy stored in ATP}}{\\text{energy released from glucose}}\\times100\\%$" },
        ],
        workedExample: {
          problem: "A muscle cell respires 4 mol of glucose aerobically and makes 30 mol of ATP per mol of glucose. Calculate the total moles of ATP made.",
          solution: "Total ATP $= 4\\times30 = 120\\text{ mol}$.",
        },
      },
      questions: [
        {
          id: "bio9-u2-aerobic-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage of aerobic respiration produces the largest amount of ATP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycolysis" },
              { id: "b", text: "The electron transport chain" },
              { id: "c", text: "The Calvin cycle" },
              { id: "d", text: "The Krebs cycle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "ATP yield by stage", statement: "Glycolysis and the Krebs cycle each give a net of about 2 ATP per glucose; the electron transport chain gives most of the rest (about 26 or more)." },
            ],
            steps: [
              { reasoning: "The electron transport chain uses the hydrogen ion gradient to make about 26 to 28 ATP per glucose, far more than the other stages.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The electron transport chain",
            commonErrors: ["Choosing glycolysis because it is the first stage.", "Choosing the Calvin cycle, which is part of photosynthesis."],
            examinerNote: "B1 for electron transport chain.",
          },
        },
        {
          id: "bio9-u2-aerobic-respiration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A muscle cell makes 30 ATP from each glucose molecule by aerobic respiration, and 2 ATP from each glucose molecule by fermentation.\n\nCalculate how many more ATP molecules are made from 12 glucose molecules by aerobic respiration than by fermentation.",
          response: { type: "numeric", parts: [{ label: "Extra ATP molecules", answer: 336 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "ATP yield", statement: "Total ATP = ATP per glucose $\\times$ number of glucose molecules." },
            ],
            steps: [
              { reasoning: "Find the ATP from 12 glucose molecules for each pathway.", working: "12\\times30=360\\quad 12\\times2=24", marks: 2, markCode: "M" },
              { reasoning: "Subtract.", working: "360-24=336", marks: 1, markCode: "A" },
            ],
            finalAnswer: "336 ATP molecules",
            commonErrors: ["Subtracting per-glucose yields only (28) and forgetting to multiply by 12.", "Giving 360 instead of the difference."],
            examinerNote: "M1 for 360, M1 for 24 (or $12\\times28$ for both marks). A1 for 336.",
          },
        },
        {
          id: "bio9-u2-aerobic-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Complete oxidation of 1 mol of glucose releases $2870\\text{ kJ}$. Each mole of ATP made stores $30.5\\text{ kJ}$. Aerobic respiration makes 30 mol of ATP from 1 mol of glucose.\n\nCalculate the percentage efficiency of aerobic respiration. Give your answer to the nearest whole number.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 32, unit: "%", tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency}=\\dfrac{\\text{useful energy stored}}{\\text{total energy released}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Find the energy stored in ATP.", working: "30\\times30.5=915\\text{ kJ}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the energy released from glucose.", working: "\\frac{915}{2870}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate as a percentage.", working: "\\frac{915}{2870}\\times100=31.9\\%", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest whole number.", working: "32\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32\\%$",
            commonErrors: ["Dividing 2870 by 915 and getting 313.7%.", "Forgetting to multiply 30.5 by 30."],
            examinerNote: "M1 915 kJ. M1 915/2870. A1 31.9 (allow 31.88 to 32). A1 32. Allow full marks for 32 alone. Allow ecf.",
          },
        },
        {
          id: "bio9-u2-aerobic-respiration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student studies aerobic respiration in a muscle cell. Complete oxidation of 1 mol of glucose releases $2870\\text{ kJ}$ and each mole of ATP stores $30.5\\text{ kJ}$. Assume 30 mol of ATP are made per mol of glucose.",
          parts: [
            { label: "a", prompt: "State where in the cell **each** of glycolysis, the Krebs cycle and the electron transport chain takes place.", marks: 3 },
            { label: "b", prompt: "Write the balanced symbol equation for aerobic respiration.", marks: 1 },
            { label: "c", prompt: "Calculate the total energy, in kJ, stored in ATP when 2 mol of glucose are respired aerobically.", marks: 3 },
            { label: "d", prompt: "Explain why oxygen is essential for the electron transport chain to keep working.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stages of respiration", statement: "Glycolysis: cytoplasm. Krebs cycle: mitochondrial matrix. Electron transport chain: inner mitochondrial membrane." },
              { kind: "law", name: "Conservation of mass", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$ balances: 6 C, 12 H, 18 O on each side." },
              { kind: "principle", name: "Final electron acceptor", statement: "Oxygen accepts electrons at the end of the chain and forms water, allowing electrons to keep flowing." },
            ],
            steps: [
              { part: "a", reasoning: "Glycolysis takes place in the cytoplasm.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The Krebs cycle takes place in the mitochondrial matrix.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The electron transport chain is in the inner mitochondrial membrane (cristae).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Glucose and oxygen react to form carbon dioxide and water; 6 carbon, 12 hydrogen and 18 oxygen atoms on each side.", working: "\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Find the ATP made from 2 mol of glucose.", working: "2\\times30=60\\text{ mol ATP}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by the energy stored per mole of ATP.", working: "60\\times30.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with a unit.", working: "1830\\text{ kJ}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Oxygen is the final electron acceptor at the end of the chain.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Without oxygen, electrons cannot leave the chain, so it backs up and stops, and the hydrogen ion gradient and ATP synthesis cannot continue.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Cytoplasm; mitochondrial matrix; inner mitochondrial membrane (b) $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$ (c) $1830\\text{ kJ}$ (d) Oxygen accepts the electrons, allowing the chain to keep running.",
            commonErrors: ["In (a) placing glycolysis in the mitochondria.", "In (c) using only 30 mol ATP and giving 915 kJ.", "In (d) saying oxygen is 'used to make ATP' directly."],
            examinerNote: "(a) Allow 'mitochondrial membranes / cristae' for electron transport. Allow 'mitochondria' for the Krebs cycle if matrix not given. (b) Allow equation with 'energy' on the right. (c) Allow ecf from the ATP moles.",
          },
        },
      ],
    },
    {
      id: "bio9-u2-anaerobic-fermentation",
      title: "Anaerobic respiration and fermentation",
      skill: "Describe lactic acid and alcoholic fermentation and compare them with aerobic respiration.",
      lesson: {
        sections: [
          {
            heading: "Respiration without oxygen",
            body: "When oxygen is not available, the electron transport chain stops and NADH cannot be recycled to NAD$^+$. Glycolysis needs NAD$^+$, so cells use **fermentation** to regenerate it. Glycolysis can then continue to make a small amount of ATP, a net **2 ATP** per glucose.\n\nGlucose is only partly broken down, so much of its energy stays in the products.",
          },
          {
            heading: "Two types of fermentation",
            body: "- **Lactic acid fermentation** (muscle cells, some bacteria): $\\text{glucose} \\rightarrow 2\\text{ lactic acid (lactate)} + 2\\text{ ATP}$. No carbon dioxide is released.\n- **Alcoholic fermentation** (yeast, some plant cells): $\\text{glucose} \\rightarrow 2\\text{ ethanol} + 2\\text{CO}_2 + 2\\text{ ATP}$. Bread rises because of the $\\text{CO}_2$; beer and wine contain the ethanol.\n\nMuscle cells use lactic acid fermentation during intense exercise when oxygen supply cannot keep up. Lactate builds up and is later converted back (needing oxygen), which is part of the oxygen debt.",
          },
          {
            heading: "Comparing the pathways",
            body: "| Feature | Aerobic | Fermentation |\n| --- | --- | --- |\n| Oxygen needed | Yes | No |\n| Location | Cytoplasm and mitochondria | Cytoplasm only |\n| ATP per glucose | about 30 | 2 |\n| Products | $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ | Lactic acid, or ethanol and $\\text{CO}_2$ |\n\nFermentation is fast but inefficient. It allows short bursts of activity and lets organisms survive in low-oxygen environments.",
          },
        ],
        keyFormulas: [
          { name: "Lactic acid fermentation", statement: "glucose $\\rightarrow$ 2 lactic acid + 2 ATP" },
          { name: "Alcoholic fermentation", statement: "glucose $\\rightarrow$ 2 ethanol + $2\\text{CO}_2$ + 2 ATP" },
          { name: "ATP comparison", statement: "Aerobic: about 30 ATP per glucose. Fermentation: 2 ATP per glucose" },
        ],
        workedExample: {
          problem: "How many glucose molecules must yeast ferment to make 40 ATP, and how many carbon dioxide molecules are released?",
          solution: "Fermentation gives 2 ATP per glucose, so $40\\div2=20$ glucose molecules. Each glucose releases 2 $\\text{CO}_2$, so $20\\times2=40$ molecules of carbon dioxide.",
        },
      },
      questions: [
        {
          id: "bio9-u2-anaerobic-fermentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which are the products of lactic acid fermentation in muscle cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactic acid and ATP" },
              { id: "b", text: "Ethanol, carbon dioxide and ATP" },
              { id: "c", text: "Glucose and oxygen" },
              { id: "d", text: "Carbon dioxide, water and ATP" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lactic acid fermentation", statement: "glucose $\\rightarrow$ 2 lactic acid + 2 ATP" },
            ],
            steps: [
              { reasoning: "Animal muscle cells make lactic acid and a small amount of ATP when oxygen is limited.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lactic acid and ATP",
            commonErrors: ["Choosing (b), which is alcoholic fermentation in yeast.", "Choosing (c), which are the products of aerobic respiration."],
            examinerNote: "B1 for lactic acid and ATP.",
          },
        },
        {
          id: "bio9-u2-anaerobic-fermentation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Yeast cells ferment glucose in a sealed flask. Alcoholic fermentation produces 2 ethanol molecules, 2 carbon dioxide molecules and 2 ATP molecules per glucose molecule.\n\nCalculate the number of carbon dioxide molecules released when yeast make 150 ATP molecules by fermentation.",
          response: { type: "numeric", parts: [{ label: "CO2 molecules", answer: 150 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Alcoholic fermentation", statement: "1 glucose $\\rightarrow$ 2 ethanol + $2\\text{CO}_2$ + 2 ATP, so $\\text{CO}_2$ and ATP are produced in a $1:1$ ratio." },
            ],
            steps: [
              { reasoning: "Find the glucose fermented from the ATP made.", working: "150\\div2=75\\text{ glucose}", marks: 1, markCode: "M" },
              { reasoning: "Each glucose gives 2 carbon dioxide molecules.", working: "75\\times2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 molecules of carbon dioxide",
            commonErrors: ["Giving 75 by forgetting that each glucose releases 2 carbon dioxide molecules.", "Giving 300 by multiplying ATP by 2."],
            examinerNote: "M1 for 75. M1 for 75 x 2. A1 for 150. Allow 150 from recognizing the 1:1 ratio.",
          },
        },
        {
          id: "bio9-u2-anaerobic-fermentation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "During a 100 m sprint, an athlete's muscle cells switch from aerobic respiration to lactic acid fermentation.\n\nExplain why this happens and why it can only be used for a short time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply and demand of oxygen", statement: "When oxygen supply cannot meet demand, the electron transport chain slows and fermentation supplies ATP from glycolysis." },
              { kind: "definition", name: "Fermentation yield", statement: "Fermentation gives 2 ATP per glucose, compared with about 30 for aerobic respiration." },
            ],
            steps: [
              { reasoning: "Sprinting needs ATP quickly, but the blood cannot deliver oxygen fast enough, so the electron transport chain is limited.", marks: 1, markCode: "B" },
              { reasoning: "Fermentation regenerates NAD$^+$ so glycolysis can keep making ATP without oxygen.", marks: 1, markCode: "B" },
              { reasoning: "Fermentation yields only 2 ATP per glucose, so glucose is used up very quickly.", marks: 1, markCode: "B" },
              { reasoning: "Lactic acid builds up, which lowers pH in the muscle and contributes to fatigue, so it cannot be sustained.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Oxygen supply cannot meet demand, so glycolysis plus fermentation provides ATP quickly; but yield is low (2 ATP per glucose) and lactic acid builds up, so only short bursts are possible.",
            commonErrors: ["Saying muscle cells run out of oxygen completely.", "Saying fermentation produces more ATP than aerobic respiration because it is faster."],
            examinerNote: "B1 oxygen supply cannot meet demand oe. B1 ATP still made without oxygen / NAD+ regenerated. B1 low yield. R1 lactic acid build-up / fatigue. Allow 'lactate'.",
          },
        },
        {
          id: "bio9-u2-anaerobic-fermentation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A baker adds yeast to dough in a warm bowl. The yeast first use the small amount of oxygen present and then ferment glucose. A student compares the energy yield of aerobic respiration (30 ATP per glucose) with alcoholic fermentation (2 ATP per glucose).",
          parts: [
            { label: "a", prompt: "Name the **two** products of alcoholic fermentation other than ATP.", marks: 2 },
            { label: "b", prompt: "Calculate how many glucose molecules yeast must ferment to make 60 ATP, and how many glucose molecules would be needed to make the same ATP aerobically.", marks: 2 },
            { label: "c", prompt: "Explain why fermentation gives a much lower ATP yield than aerobic respiration.", marks: 2 },
            { label: "d", prompt: "Explain why the dough rises.", marks: 1 },
            { label: "e", prompt: "State **two** differences between fermentation in yeast and lactic acid fermentation in muscle cells.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alcoholic fermentation", statement: "glucose $\\rightarrow$ 2 ethanol + $2\\text{CO}_2$ + 2 ATP" },
              { kind: "principle", name: "Incomplete oxidation", statement: "Fermentation only partially breaks down glucose, so most energy remains in the products." },
              { kind: "formula", name: "Number of glucose", statement: "$\\text{glucose needed}=\\dfrac{\\text{ATP needed}}{\\text{ATP per glucose}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Ethanol.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Carbon dioxide.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Fermentation: 2 ATP per glucose.", working: "60\\div2=30\\text{ glucose}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Aerobic: 30 ATP per glucose.", working: "60\\div30=2\\text{ glucose}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Glucose is only partly broken down, so most of the energy remains in ethanol or lactic acid.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "There is no Krebs cycle or electron transport chain, which make most of the ATP in aerobic respiration, because oxygen is not available.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Carbon dioxide gas produced by fermentation forms bubbles that expand the dough.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Yeast fermentation produces ethanol and carbon dioxide; muscle fermentation produces lactic acid only.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Yeast fermentation releases carbon dioxide; lactic acid fermentation does not (or yeast is a fungus and muscle is animal tissue).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Ethanol and carbon dioxide (b) 30 glucose (fermentation) and 2 glucose (aerobic) (c) Incomplete breakdown; no Krebs cycle or electron transport chain (d) $\\text{CO}_2$ bubbles expand the dough (e) Different products; $\\text{CO}_2$ released only in yeast.",
            commonErrors: ["In (a) naming lactic acid for yeast.", "In (b) swapping the two numbers.", "In (d) saying oxygen makes the dough rise."],
            examinerNote: "(a) Either order. (e) Accept any two valid differences, e.g. ethanol vs lactic acid, CO2 released vs not, different organisms.",
          },
        },
      ],
    },
  ],
};
