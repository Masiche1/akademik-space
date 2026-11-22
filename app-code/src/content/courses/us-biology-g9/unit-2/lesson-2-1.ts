import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "bio9-u2-lesson-2-1",
  code: "2-1",
  title: "Photosynthesis",
  goal: "I CAN describe the light-dependent reactions and the Calvin cycle, write the equation for photosynthesis, and explain how limiting factors affect the rate of photosynthesis and how to investigate them.",
  standards: ["HS-LS1-5", "SEP: Planning and Carrying Out Investigations", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Photosynthesis", definition: "The process in which light energy is converted into chemical energy stored in glucose, using carbon dioxide and water." },
    { term: "Thylakoid", definition: "A flattened membrane sac inside a chloroplast where the light-dependent reactions take place." },
    { term: "Stroma", definition: "The fluid-filled space inside a chloroplast surrounding the thylakoids, where the Calvin cycle takes place." },
    { term: "NADPH", definition: "An electron carrier made in the light-dependent reactions that supplies energy and electrons to the Calvin cycle." },
    { term: "Calvin cycle", definition: "A series of reactions in the stroma that uses ATP and NADPH to build sugar from carbon dioxide." },
    { term: "Limiting factor", definition: "The variable in shortest supply, or furthest from its best value, that restricts the rate of a process." },
    { term: "Photolysis", definition: "The splitting of water by light energy, releasing electrons, hydrogen ions and oxygen." },
  ],
  concepts: [
    {
      id: "bio9-u2-photosynthesis-stages",
      title: "Light-dependent reactions and the Calvin cycle",
      skill: "Describe the two stages of photosynthesis, their locations, inputs and outputs, and write the overall equation.",
      lesson: {
        sections: [
          {
            heading: "Stage 1: the light-dependent reactions",
            body: "These reactions occur in the **thylakoid membranes** of the chloroplast. Chlorophyll and other pigments absorb light energy, which excites electrons.\n\n- Light energy splits water (**photolysis**), releasing electrons, hydrogen ions and **oxygen gas**.\n- The energized electrons pass along an electron transport chain, which powers the formation of **ATP**.\n- The electrons finally reduce the carrier NADP$^+$ to **NADPH**.\n\nThe outputs are ATP, NADPH and $\\text{O}_2$. The oxygen released by plants comes from **water**, not from carbon dioxide.",
          },
          {
            heading: "Stage 2: the Calvin cycle",
            body: "The Calvin cycle takes place in the **stroma**. It does not use light directly, but it depends on the ATP and NADPH made in stage 1.\n\n- $\\text{CO}_2$ is attached to a five-carbon sugar by the enzyme rubisco (carbon fixation).\n- ATP and NADPH supply the energy and electrons to convert the fixed carbon into three-carbon sugars (G3P).\n- Some G3P leaves the cycle to build glucose and other organic molecules. The rest is used to regenerate the five-carbon sugar so the cycle can continue.\n\nThe cycle must turn six times to fix the six carbon atoms needed for one glucose molecule.",
          },
          {
            heading: "The overall equation",
            body: "Overall, light energy is stored as chemical energy in glucose.\n\n$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$\n\nIn words: carbon dioxide + water $\\rightarrow$ glucose + oxygen. Each side has 6 carbon, 12 hydrogen and 18 oxygen atoms, so the equation is balanced.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis equation", statement: "$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$ (light, chlorophyll)" },
          { name: "Light-dependent reactions", statement: "Thylakoid membranes: water + light $\\rightarrow$ ATP + NADPH + $\\text{O}_2$" },
          { name: "Calvin cycle", statement: "Stroma: $\\text{CO}_2$ + ATP + NADPH $\\rightarrow$ sugar (G3P)" },
        ],
        workedExample: {
          problem: "A leaf cell is kept in the dark after a period in bright light. Predict what happens to the Calvin cycle and explain.",
          solution: "In the dark the light-dependent reactions stop, so no new ATP or NADPH is made. The Calvin cycle needs both to convert fixed carbon into sugar, so after the small supply of ATP and NADPH is used up the Calvin cycle also stops, even though it does not use light directly.",
        },
      },
      questions: [
        {
          id: "bio9-u2-photosynthesis-stages-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which part of a chloroplast do the light-dependent reactions take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The stroma" },
              { id: "b", text: "The inner membrane of the mitochondrion" },
              { id: "c", text: "The thylakoid membranes" },
              { id: "d", text: "The cell wall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Light-dependent reactions", statement: "The light-dependent reactions occur in the thylakoid membranes, where pigments absorb light." },
            ],
            steps: [
              { reasoning: "Chlorophyll and the electron transport chain are embedded in the thylakoid membranes, so light is captured there.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The thylakoid membranes",
            commonErrors: ["Choosing the stroma, which is where the Calvin cycle takes place.", "Choosing the mitochondrion, which is the site of cellular respiration."],
            examinerNote: "B1 for thylakoid (membranes). Allow grana.",
          },
        },
        {
          id: "bio9-u2-photosynthesis-stages-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The balanced equation for photosynthesis is $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$.\n\nCalculate the number of molecules of carbon dioxide needed to make 3 molecules of glucose.",
          response: { type: "numeric", parts: [{ label: "Molecules of CO2", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are conserved, so the ratio of molecules in a balanced equation is fixed: 6 $\\text{CO}_2$ per 1 glucose." },
            ],
            steps: [
              { reasoning: "The equation shows 6 molecules of carbon dioxide for every 1 molecule of glucose.", working: "\\text{ratio } \\text{CO}_2:\\text{glucose}=6:1", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 3 glucose molecules.", working: "6\\times3=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 molecules",
            commonErrors: ["Giving 6, forgetting to scale up for 3 glucose molecules.", "Giving 9 by using the ratio of glucose to oxygen incorrectly."],
            examinerNote: "M1 for 6 per glucose (oe). A1 for 18.",
          },
        },
        {
          id: "bio9-u2-photosynthesis-stages-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The Calvin cycle does not use light directly, yet it stops shortly after a plant is placed in darkness.\n\nExplain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linked stages", statement: "The Calvin cycle uses the ATP and NADPH made in the light-dependent reactions." },
              { kind: "definition", name: "Calvin cycle", statement: "The Calvin cycle uses ATP and NADPH to convert fixed $\\text{CO}_2$ into sugar." },
            ],
            steps: [
              { reasoning: "In darkness, the light-dependent reactions stop because there is no light energy to excite electrons in chlorophyll.", marks: 1, markCode: "B" },
              { reasoning: "So no new ATP and no new NADPH are produced.", marks: 1, markCode: "B" },
              { reasoning: "The Calvin cycle needs ATP as an energy source and NADPH as a source of electrons to convert fixed carbon into sugar (G3P).", marks: 1, markCode: "B" },
              { reasoning: "Once the existing ATP and NADPH are used up, the cycle cannot continue and sugar production stops.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "No light means no ATP or NADPH from the light-dependent reactions; the Calvin cycle depends on both, so it stops once its supply runs out.",
            commonErrors: ["Saying the Calvin cycle needs light directly.", "Saying the Calvin cycle stops because oxygen runs out."],
            examinerNote: "B1 no light so light-dependent reactions stop. B1 no ATP / NADPH made. B1 Calvin cycle uses ATP and NADPH. R1 cycle stops when they run out. Allow 'light-independent' for the Calvin cycle.",
          },
        },
        {
          id: "bio9-u2-photosynthesis-stages-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A plant in a sealed, well-lit chamber absorbs 88 g of carbon dioxide during an experiment. The molar mass of $\\text{CO}_2$ is $44\\text{ g/mol}$ and of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) is $180\\text{ g/mol}$. Assume all of the carbon dioxide is used to make glucose by photosynthesis.",
          parts: [
            { label: "a", prompt: "State the **two** products of the light-dependent reactions that are used in the Calvin cycle.", marks: 2 },
            { label: "b", prompt: "Name the source of the oxygen gas released during photosynthesis.", marks: 1 },
            { label: "c", prompt: "Calculate the mass of glucose produced from 88 g of carbon dioxide.", marks: 3 },
            { label: "d", prompt: "Describe the role of the Calvin cycle in photosynthesis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n=\\dfrac{m}{M}$" },
              { kind: "law", name: "Conservation of mass", statement: "In $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$, 6 mol $\\text{CO}_2$ make 1 mol glucose." },
              { kind: "definition", name: "Calvin cycle", statement: "The Calvin cycle fixes $\\text{CO}_2$ and uses ATP and NADPH to build sugars." },
            ],
            steps: [
              { part: "a", reasoning: "ATP supplies energy to the Calvin cycle.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "NADPH supplies electrons (reducing power).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Light splits water (photolysis), so the oxygen comes from water.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Convert the mass of carbon dioxide to moles.", working: "n(\\text{CO}_2)=\\frac{88}{44}=2\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use the 6:1 ratio from the equation.", working: "n(\\text{glucose})=\\frac{2}{6}=0.333\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by the molar mass of glucose.", working: "m=\\frac{2}{6}\\times180=60\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It fixes carbon dioxide into organic molecules (carbon fixation).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It uses ATP and NADPH to convert the fixed carbon into three-carbon sugars, which are used to make glucose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) ATP and NADPH (b) Water (c) $60\\text{ g}$ (d) Fixes $\\text{CO}_2$ and uses ATP and NADPH to build sugar (G3P), which forms glucose.",
            commonErrors: ["In (b) saying the oxygen comes from carbon dioxide.", "In (c) using a 1:1 ratio and giving 360 g or 88 g.", "In (c) dividing 88 by 180 without using the equation ratio."],
            examinerNote: "(a) Reject oxygen and glucose. (c) Allow 60 g for full marks; allow ecf for the ratio step. (d) Allow 'makes sugar / glucose using energy from ATP'.",
          },
        },
      ],
    },
    {
      id: "bio9-u2-limiting-factors",
      title: "Limiting factors and investigating photosynthesis",
      skill: "Interpret rate graphs for light, carbon dioxide and temperature, and plan an investigation into the rate of photosynthesis.",
      lesson: {
        sections: [
          {
            heading: "Limiting factors",
            body: "The rate of photosynthesis depends on **light intensity**, **carbon dioxide concentration** and **temperature**. At any moment, the factor in shortest supply is the **limiting factor**.\n\n- On the rising part of a rate graph, the factor on the $x$-axis is limiting: increasing it increases the rate.\n- On the plateau, the rate no longer increases. Some **other** factor is now limiting (for example carbon dioxide or temperature).\n- Temperature is different: rate rises as enzymes work faster, then falls steeply above the optimum, because enzymes such as rubisco **denature**.",
          },
          {
            heading: "Measuring the rate",
            body: "A common method uses a water plant such as Elodea. Oxygen bubbles released from the cut stem are counted, or the gas is collected and its volume measured.\n\n- **Independent variable:** the factor you change, for example the distance of a lamp.\n- **Dependent variable:** the rate, for example bubbles per minute.\n- **Control variables:** the other factors, for example temperature (use a water bath), $\\text{CO}_2$ concentration (add the same amount of sodium hydrogen carbonate) and the same plant.\n\nRepeat at each setting and calculate a mean. Ignore any anomalous result when calculating the mean.",
          },
          {
            heading: "Light intensity and distance",
            body: "Light from a lamp spreads out as it travels, so intensity follows an **inverse square law**:\n\n$$I \\propto \\frac{1}{d^2}$$\n\nDoubling the distance from the lamp reduces the light intensity to one quarter.",
          },
        ],
        keyFormulas: [
          { name: "Limiting factor", statement: "The factor in shortest supply that restricts the rate; on a plateau, another factor is limiting" },
          { name: "Inverse square law", statement: "$I_2 = I_1\\left(\\dfrac{d_1}{d_2}\\right)^2$" },
          { name: "Rate", statement: "$\\text{rate}=\\dfrac{\\text{volume of oxygen}}{\\text{time}}$" },
        ],
        workedExample: {
          problem: "A lamp 10 cm from a pondweed plant gives a light intensity of 400 arbitrary units. Calculate the intensity when the lamp is moved to 40 cm.",
          solution: "Use $I_2 = I_1\\left(\\dfrac{d_1}{d_2}\\right)^2 = 400\\times\\left(\\dfrac{10}{40}\\right)^2 = 400\\times\\dfrac{1}{16} = 25$ arbitrary units.",
        },
      },
      questions: [
        {
          id: "bio9-u2-limiting-factors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A graph shows the rate of photosynthesis against light intensity. The rate rises, then levels off at a plateau although light intensity keeps increasing.\n\nWhat does the plateau show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light intensity is still the limiting factor" },
              { id: "b", text: "Another factor, such as carbon dioxide or temperature, is now limiting" },
              { id: "c", text: "Photosynthesis has stopped" },
              { id: "d", text: "The chlorophyll has been destroyed by the light" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factors", statement: "When increasing one factor no longer increases the rate, a different factor is limiting." },
            ],
            steps: [
              { reasoning: "The rate is constant but not zero, and more light has no effect, so light is no longer limiting; something else is.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Another factor, such as carbon dioxide or temperature, is now limiting",
            commonErrors: ["Thinking the plateau means photosynthesis has stopped.", "Thinking light is still limiting because the graph is flat."],
            examinerNote: "B1 for another factor limiting.",
          },
        },
        {
          id: "bio9-u2-limiting-factors-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A lamp is 10 cm from a water plant and gives a light intensity of 400 arbitrary units. Light intensity is inversely proportional to the square of the distance from the lamp.\n\nCalculate the light intensity when the lamp is moved to 20 cm from the plant.",
          response: { type: "numeric", parts: [{ label: "Light intensity", answer: 100, unit: "arbitrary units" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Inverse square law", statement: "$I \\propto \\dfrac{1}{d^2}$, so $I_2 = I_1\\left(\\dfrac{d_1}{d_2}\\right)^2$." },
            ],
            steps: [
              { reasoning: "Substitute into the inverse square relationship.", working: "I_2 = 400\\times\\left(\\frac{10}{20}\\right)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "I_2 = 400\\times\\frac{1}{4} = 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 arbitrary units",
            commonErrors: ["Halving the intensity to 200 (treating it as inversely proportional to distance, not distance squared).", "Squaring the wrong ratio and getting 1600."],
            examinerNote: "M1 for $(10/20)^2$ or $\\frac14$ factor. A1 for 100.",
          },
        },
        {
          id: "bio9-u2-limiting-factors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student wants to investigate how carbon dioxide concentration affects the rate of photosynthesis in a water plant. She uses different concentrations of sodium hydrogen carbonate solution as the source of carbon dioxide.\n\nDescribe how she should carry out the investigation so that it is a fair test and the results are reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Change one independent variable, measure the dependent variable and control all other variables." },
            ],
            steps: [
              { reasoning: "Independent variable: use several known concentrations of sodium hydrogen carbonate solution.", marks: 1, markCode: "B" },
              { reasoning: "Dependent variable: measure the rate, for example count oxygen bubbles per minute or measure the volume of gas collected in a set time.", marks: 1, markCode: "B" },
              { reasoning: "Control variables: keep light intensity (lamp distance), temperature (water bath), the plant and the time constant.", marks: 1, markCode: "B" },
              { reasoning: "Repeat at each concentration and calculate a mean, ignoring any anomalous result, to improve reliability.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Vary sodium hydrogen carbonate concentration; measure bubbles or gas volume per minute; control light, temperature and plant; repeat and take a mean.",
            commonErrors: ["Changing the lamp distance as well, so two variables change.", "Not naming a dependent variable that can be measured.", "Forgetting repeats."],
            examinerNote: "B1 for each of the four points. Allow a heat shield or water bath for temperature control. Reject 'same amount of light' without a method only if no control is mentioned at all.",
          },
        },
        {
          id: "bio9-u2-limiting-factors-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student measures the volume of oxygen released by a water plant at different light intensities at $25^\\circ\\text{C}$. The results are shown.\n\n| Light intensity (arbitrary units) | 0 | 20 | 40 | 60 | 80 | 100 |\n| --- | --- | --- | --- | --- | --- | --- |\n| Rate of oxygen release (mL/min) | 0 | 2 | 4 | 6 | 6 | 6 |\n\nThe student repeats the experiment at $30^\\circ\\text{C}$. The plateau rises to 9 mL/min.",
          parts: [
            { label: "a", prompt: "State the lowest light intensity at which the rate stops increasing.", marks: 1 },
            { label: "b", prompt: "Calculate the increase in rate per unit of light intensity between 0 and 40 units. Give your answer in mL/min per arbitrary unit.", marks: 2 },
            { label: "c", prompt: "Explain why the rate does not increase above 60 units at $25^\\circ\\text{C}$.", marks: 2 },
            { label: "d", prompt: "Explain what the result at $30^\\circ\\text{C}$ shows about the limiting factor at the plateau.", marks: 2 },
            { label: "e", prompt: "Suggest why the rate of photosynthesis would fall sharply if the temperature were raised to $60^\\circ\\text{C}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factors", statement: "The rate is limited by the factor in shortest supply; on a plateau a different factor is limiting." },
              { kind: "formula", name: "Rate of change", statement: "$\\text{gradient}=\\dfrac{\\Delta y}{\\Delta x}$" },
              { kind: "principle", name: "Enzyme denaturation", statement: "High temperatures change the shape of an enzyme's active site, so it stops working." },
            ],
            steps: [
              { part: "a", reasoning: "Read from the table: the rate first reaches 6 mL/min at 60 units.", working: "60\\text{ units}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Use change in rate divided by change in light intensity.", working: "\\frac{4-0}{40-0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.1\\text{ mL/min per unit}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Light is no longer the limiting factor above 60 units.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Another factor, such as carbon dioxide concentration or temperature, is now limiting the rate.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The rate increased when only temperature was raised, so temperature was limiting at $25^\\circ\\text{C}$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Higher temperature gave the enzymes of the Calvin cycle more kinetic energy, so more successful collisions with substrates.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Enzymes such as rubisco denature at high temperature as their active site changes shape.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Substrate can no longer bind, so carbon fixation and the rate of photosynthesis fall.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 60 units (b) $0.1\\text{ mL/min per unit}$ (c) Light is no longer limiting; another factor such as $\\text{CO}_2$ or temperature is limiting (d) Temperature was the limiting factor at $25^\\circ\\text{C}$ (e) Enzymes denature, so fewer reactions occur.",
            commonErrors: ["In (b) dividing 40 by 4 to get 10.", "In (c) saying photosynthesis has stopped.", "In (e) saying the enzymes are 'killed'; enzymes are not alive, they denature."],
            examinerNote: "(b) Allow 0.1 without unit for A1 if method is shown. (c) Reject 'light is the limiting factor'. (d) Allow oe. (e) Allow 'chlorophyll / membranes damaged' for the first mark.",
          },
        },
      ],
    },
  ],
};
