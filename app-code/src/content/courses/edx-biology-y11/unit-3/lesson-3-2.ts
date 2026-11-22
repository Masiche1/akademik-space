import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ebi11-u3-lesson-3-2",
  code: "3-2",
  title: "Nutrient Cycles and Human Impact",
  goal: "I CAN describe the carbon and nitrogen cycles and explain how pollution, deforestation and eutrophication damage ecosystems.",
  standards: ["4BI1 4.8", "4BI1 4.9", "4BI1 4.10", "4BI1 4.11", "4BI1 4.12", "4BI1 4.13", "4BI1 4.14"],
  vocabulary: [
    { term: "Decomposer", definition: "A microorganism, such as a bacterium or fungus, that breaks down dead organisms and waste and returns nutrients to the soil." },
    { term: "Nitrogen fixation", definition: "The conversion of nitrogen gas from the air into nitrogen compounds, by nitrogen-fixing bacteria or lightning." },
    { term: "Nitrification", definition: "The conversion of ammonium ions into nitrites and then nitrates by nitrifying bacteria." },
    { term: "Denitrification", definition: "The conversion of nitrates back into nitrogen gas by denitrifying bacteria, usually in waterlogged soil." },
    { term: "Greenhouse gas", definition: "A gas such as carbon dioxide or methane that absorbs infrared radiation and traps heat in the atmosphere." },
    { term: "Eutrophication", definition: "Enrichment of water with nutrients, which causes an algal bloom and then the death of aquatic animals through lack of oxygen." },
    { term: "Deforestation", definition: "The large-scale removal of forests, for example for farming, timber or building." },
  ],
  concepts: [
    {
      id: "ebi11-u3-carbon-nitrogen-cycles",
      title: "Carbon and nitrogen cycles",
      skill: "Describe the processes in the carbon and nitrogen cycles and explain the roles of microorganisms.",
      lesson: {
        sections: [
          {
            heading: "The carbon cycle",
            body: "Carbon is removed from the atmosphere by **photosynthesis**, which converts carbon dioxide into glucose and other carbon compounds in plants and algae. The carbon passes to animals when they **feed**. Carbon dioxide is returned to the air by **respiration** in plants, animals and microorganisms, and by **combustion** of fossil fuels and wood. When organisms die, **decomposers** break down their bodies, releasing carbon dioxide by respiration. Over millions of years, dead organisms that are not decomposed can form **fossil fuels**.\n\nIn a balanced ecosystem the carbon dioxide removed by photosynthesis is matched by the carbon dioxide released by respiration and combustion, so the concentration in the air stays roughly constant.",
          },
          {
            heading: "The nitrogen cycle",
            body: "Plants need nitrogen to make **proteins**, but they can only absorb it as **nitrates** through their roots. Air is about $78\\%$ nitrogen gas, which plants cannot use. The cycle includes:\n\n- **Nitrogen fixation**: nitrogen-fixing bacteria (in root nodules of legumes such as peas and clover, and free in the soil) and lightning convert nitrogen gas into nitrogen compounds\n- **Feeding**: nitrates are absorbed by plants and made into protein; animals obtain protein by eating plants or other animals\n- **Decomposition and excretion**: decomposers break down proteins, urea and dead material into **ammonium ions**\n- **Nitrification**: nitrifying bacteria convert ammonium ions to nitrites, then nitrates (this needs oxygen)\n- **Denitrification**: denitrifying bacteria in waterlogged soils convert nitrates to nitrogen gas, reducing soil fertility",
          },
          {
            heading: "Applying the cycles",
            body: "Farmers add **fertilisers** or grow legumes in crop rotation to replace nitrates lost when crops are harvested. Ploughing and draining improve soil aeration, which reduces denitrification and speeds up nitrification. The same ideas explain why a compost heap needs air and moisture: decomposers need oxygen and water to work quickly.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$" },
          { name: "Carbon dioxide returned to the air", statement: "Respiration, combustion and decomposition" },
          { name: "Nitrogen cycle order", statement: "Protein/urea $\\rightarrow$ ammonium $\\rightarrow$ nitrite $\\rightarrow$ nitrate (plants absorb nitrate)" },
        ],
        workedExample: {
          problem: "Explain why a farmer who grows clover for one year does not need to add as much nitrogen fertiliser to the soil in the following year.",
          solution: "Clover is a legume with nitrogen-fixing bacteria in its root nodules. These convert nitrogen gas from the air into nitrogen compounds, which are used to make protein. When the clover dies and decomposes, or is ploughed in, decomposers release ammonium ions and nitrifying bacteria convert them to nitrates. This increases the nitrate available to the next crop.",
        },
      },
      questions: [
        {
          id: "ebi11-u3-carbon-nitrogen-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In what form do plants absorb nitrogen from the soil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrates" },
              { id: "b", text: "Nitrogen gas" },
              { id: "c", text: "Ammonium ions only" },
              { id: "d", text: "Urea" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrogen uptake", statement: "Plants absorb nitrogen from the soil as nitrate ions, which they use to make amino acids and proteins." },
            ],
            steps: [
              { reasoning: "Nitrogen gas cannot be used by plants; they absorb nitrate ions through their roots.", working: "\\text{nitrate ions}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nitrates",
            commonErrors: ["Choosing nitrogen gas because air is 78% nitrogen.", "Choosing ammonium ions, which must first be converted to nitrates by nitrifying bacteria."],
            examinerNote: "B1 for nitrates.",
          },
        },
        {
          id: "ebi11-u3-carbon-nitrogen-cycles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State three processes that return carbon dioxide to the atmosphere.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carbon cycle", statement: "Carbon dioxide is returned to the air by respiration, combustion and the decomposition of dead organisms." },
            ],
            steps: [
              { reasoning: "Respiration by plants, animals and microorganisms releases carbon dioxide.", marks: 1, markCode: "B" },
              { reasoning: "Combustion of fossil fuels or wood releases carbon dioxide.", marks: 1, markCode: "B" },
              { reasoning: "Decomposition (decay) of dead organisms and waste by microorganisms, which respire, releases carbon dioxide.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Respiration; combustion; decomposition (decay).",
            commonErrors: ["Including photosynthesis, which removes carbon dioxide.", "Listing 'breathing' instead of respiration."],
            examinerNote: "Allow 'burning' for combustion. Allow 'breathing out' for respiration. Ignore 'volcanoes'.",
          },
        },
        {
          id: "ebi11-u3-carbon-nitrogen-cycles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A farmer notices that a waterlogged part of a field has poor crop growth, even though plenty of nitrogen fertiliser was added. Explain why the crop grows poorly in this area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denitrification", statement: "Denitrifying bacteria convert nitrates in waterlogged, low-oxygen soil into nitrogen gas." },
            ],
            steps: [
              { reasoning: "Waterlogged soil contains little oxygen.", marks: 1, markCode: "B" },
              { reasoning: "This favours denitrifying bacteria, which convert nitrates into nitrogen gas.", marks: 1, markCode: "B" },
              { reasoning: "Nitrifying bacteria need oxygen, so less ammonium is converted into nitrates.", marks: 1, markCode: "B" },
              { reasoning: "Plants have too little nitrate to make protein, so growth is poor.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Little oxygen: denitrification increases and nitrification decreases, so less nitrate is available for plants to make protein.",
            commonErrors: ["Saying the fertiliser is washed away without referring to bacteria.", "Saying denitrifying bacteria convert nitrogen gas to nitrates (the reverse)."],
            examinerNote: "Reject 'denitrifying bacteria make nitrates'. Allow 'nitrates are lost as nitrogen gas'.",
          },
        },
        {
          id: "ebi11-u3-carbon-nitrogen-cycles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The diagram of the nitrogen cycle in a field shows: nitrogen gas in the air; nitrogen-fixing bacteria in the root nodules of pea plants; nitrates in the soil; protein in plants and animals; decomposers; and ammonium ions in the soil.",
          parts: [
            { label: "a", prompt: "Name the process that converts nitrogen gas into nitrogen compounds in the root nodules.", marks: 1 },
            { label: "b", prompt: "Name the type of bacteria that convert ammonium ions into nitrates.", marks: 1 },
            { label: "c", prompt: "Explain why nitrates are important for plants.", marks: 2 },
            { label: "d", prompt: "Describe how the nitrogen in the body of a dead animal becomes available to a growing plant.", marks: 3 },
            { label: "e", prompt: "Suggest why a farmer might plough a field before planting a crop, in terms of the nitrogen cycle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrogen fixation", statement: "Conversion of nitrogen gas into nitrogen compounds by nitrogen-fixing bacteria or lightning." },
              { kind: "principle", name: "Nitrification", statement: "Nitrifying bacteria convert ammonium ions into nitrites and then nitrates, using oxygen." },
            ],
            steps: [
              { part: "a", reasoning: "Nitrogen-fixing bacteria carry out nitrogen fixation.", working: "\\text{nitrogen fixation}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Nitrifying bacteria carry out nitrification.", working: "\\text{nitrifying bacteria}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Plants use nitrates (a source of nitrogen) to make amino acids.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Amino acids are joined to make proteins, which are needed for growth (new cells, enzymes).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Decomposers (bacteria and fungi) break down the protein and urea in the dead animal into ammonium ions.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Nitrifying bacteria convert the ammonium ions into nitrites and then nitrates.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The plant absorbs the nitrates through its roots.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Ploughing lets air into the soil, increasing the oxygen supply.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "This increases nitrification and decreases denitrification, so more nitrates are available.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Nitrogen fixation (b) Nitrifying bacteria (c) used to make amino acids/proteins for growth (d) decomposers produce ammonium, nitrifying bacteria produce nitrates, roots absorb them (e) aerates soil, increasing nitrification.",
            commonErrors: ["Confusing nitrifying bacteria with denitrifying bacteria.", "Saying decomposers produce nitrates directly.", "Saying plants absorb nitrogen gas from the air."],
            examinerNote: "In (b) reject 'denitrifying bacteria'. In (d) allow 'saprotrophs' for decomposers. In (c) allow 'to make DNA' as an alternative to the second mark if reference to growth is also given.",
          },
        },
      ],
    },
    {
      id: "ebi11-u3-human-impacts",
      title: "Human impacts: pollution, deforestation and eutrophication",
      skill: "Explain the causes and effects of the greenhouse effect, deforestation and eutrophication, and evaluate possible solutions.",
      lesson: {
        sections: [
          {
            heading: "Greenhouse gases and climate change",
            body: "Carbon dioxide and methane are **greenhouse gases**. They absorb infrared radiation emitted from the Earth's surface and re-radiate some of it back, keeping the planet warm. The concentration of carbon dioxide has risen because of the burning of fossil fuels and deforestation. Methane comes from cattle and rice paddy fields. The enhanced greenhouse effect leads to **global warming**, with consequences including melting ice caps, rising sea levels, flooding of low-lying land and changes in the distribution of species.",
          },
          {
            heading: "Deforestation and pollution",
            body: "Forests are cleared for timber, farmland (cattle, crops such as palm oil and soya) and building. Effects of deforestation:\n\n- less photosynthesis, so less carbon dioxide is removed from the air\n- burning the trees and decomposition of the wood release carbon dioxide\n- loss of habitats, so **biodiversity** falls and species may become extinct\n- soil erosion and flooding, because roots no longer hold the soil\n\nOther pollutants include **sulfur dioxide** from burning fossil fuels, which causes acid rain, and **CFCs**, which damage the ozone layer. Non-biodegradable plastics persist in the environment and harm wildlife.",
          },
          {
            heading: "Eutrophication",
            body: "Excess nitrate and phosphate from fertilisers or sewage run off into rivers and lakes. The sequence is:\n\n1. Nutrients enter the water and cause rapid growth of algae (an **algal bloom**).\n2. The algae cover the surface and block light, so plants below cannot photosynthesise and die.\n3. Bacteria decompose the dead plants and algae, respiring aerobically and using up dissolved oxygen.\n4. Fish and other aquatic animals die from lack of oxygen.\n\nEutrophication can be reduced by using less fertiliser, applying it only when crops need it, leaving a strip of land beside the water uncultivated, and treating sewage before release.",
          },
        ],
        keyFormulas: [
          { name: "Greenhouse gases", statement: "Carbon dioxide and methane absorb infrared radiation, causing global warming" },
          { name: "Eutrophication sequence", statement: "Nutrients $\\rightarrow$ algal bloom $\\rightarrow$ light blocked, plants die $\\rightarrow$ bacteria use oxygen $\\rightarrow$ animals die" },
          { name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A rainforest area of $4800\\text{ km}^2$ is reduced to $3600\\text{ km}^2$ in 10 years. Calculate the percentage of the forest lost.",
          solution: "Area lost $= 4800 - 3600 = 1200\\text{ km}^2$. Percentage lost $= \\frac{1200}{4800} \\times 100 = 25\\%$.",
        },
      },
      questions: [
        {
          id: "ebi11-u3-human-impacts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of gases are both greenhouse gases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sulfur dioxide and oxygen" },
              { id: "b", text: "Carbon dioxide and methane" },
              { id: "c", text: "Carbon dioxide and nitrogen" },
              { id: "d", text: "Oxygen and nitrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greenhouse gases", statement: "Carbon dioxide and methane absorb infrared radiation and contribute to global warming." },
            ],
            steps: [
              { reasoning: "Oxygen and nitrogen make up most of the air but do not absorb infrared radiation. Carbon dioxide and methane do.", working: "\\text{CO}_2 \\text{ and CH}_4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbon dioxide and methane",
            commonErrors: ["Choosing a pair that includes sulfur dioxide, which causes acid rain rather than the greenhouse effect."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ebi11-u3-human-impacts-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The area of a forest fell from $5200\\text{ km}^2$ to $3900\\text{ km}^2$ over 20 years. Calculate the mean area of forest lost per year, in $\\text{km}^2$ per year, and the percentage of the original forest that was lost. Give the percentage to the nearest whole number.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mean area lost per year", answer: 65, unit: "km² per year" },
              { label: "Percentage lost", answer: 25, tolerance: 0.5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage lost} = \\frac{\\text{area lost}}{\\text{original area}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the area lost.", working: "5200 - 3900 = 1300\\text{ km}^2", marks: 1, markCode: "M" },
              { reasoning: "Divide by the number of years.", working: "\\frac{1300}{20} = 65\\text{ km}^2\\text{ per year}", marks: 1, markCode: "A" },
              { reasoning: "Divide the area lost by the original area and multiply by 100.", working: "\\frac{1300}{5200} \\times 100 = 25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65\\text{ km}^2$ per year; $25\\%$",
            commonErrors: ["Dividing by the final area (3900) to get 33%.", "Forgetting to divide by 20 years."],
            examinerNote: "M1 for 1300. A1 for 65. A1 for 25. Allow ecf from an incorrect area lost.",
          },
        },
        {
          id: "ebi11-u3-human-impacts-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how the use of nitrate fertiliser on farmland next to a lake can cause the death of fish in the lake.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eutrophication", statement: "Excess nutrients cause an algal bloom; the later decomposition of dead algae and plants removes oxygen from the water." },
            ],
            steps: [
              { reasoning: "Nitrate is washed (leached/runs off) from the fields into the lake.", marks: 1, markCode: "B" },
              { reasoning: "The nutrients cause rapid growth of algae (an algal bloom) on the surface.", marks: 1, markCode: "B" },
              { reasoning: "The algae block light, so submerged plants cannot photosynthesise and die.", marks: 1, markCode: "B" },
              { reasoning: "Bacteria decompose the dead material and use up oxygen in aerobic respiration.", marks: 1, markCode: "B" },
              { reasoning: "Fish die because there is not enough dissolved oxygen for respiration.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Nitrate runs off into the lake, causing an algal bloom; light blocked, plants die; bacteria use up oxygen; fish suffocate.",
            commonErrors: ["Saying the fish are poisoned by the fertiliser.", "Saying that the algae use up the oxygen (it is mainly the decomposing bacteria).", "Omitting the death of the plants before the bacteria increase."],
            examinerNote: "Allow 'eutrophication' only as a label, not as a mark point. Reject 'fish are poisoned' unless oxygen is also explained. Allow 'algae die and are decomposed' for the fourth mark.",
          },
        },
        {
          id: "ebi11-u3-human-impacts-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student measures the dissolved oxygen concentration in a river at four sites. Site A is upstream of a farm. Sites B, C and D are at increasing distances downstream of a field that drains into the river.\n\n| Site | Nitrate concentration (mg per dm$^3$) | Dissolved oxygen (mg per dm$^3$) |\n| --- | --- | --- |\n| A | 2 | 9.0 |\n| B | 18 | 3.0 |\n| C | 10 | 5.4 |\n| D | 4 | 8.1 |",
          parts: [
            { label: "a", prompt: "Calculate the percentage decrease in dissolved oxygen between site A and site B. Give your answer to the nearest whole number.", marks: 2 },
            { label: "b", prompt: "Describe the relationship between nitrate concentration and dissolved oxygen shown by the data.", marks: 2 },
            { label: "c", prompt: "Explain the relationship you described in (b).", marks: 3 },
            { label: "d", prompt: "Suggest why site D has a lower nitrate concentration than site B.", marks: 1 },
            { label: "e", prompt: "Suggest two ways the farmer could reduce the effect on the river.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
              { kind: "principle", name: "Eutrophication", statement: "Nutrient enrichment causes algal growth and, later, oxygen depletion by decomposing bacteria." },
            ],
            steps: [
              { part: "a", reasoning: "Find the decrease and divide by the original value (site A).", working: "\\frac{9.0 - 3.0}{9.0} \\times 100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\frac{6}{9} \\times 100 = 66.7\\ldots \\approx 67\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "As nitrate concentration increases, dissolved oxygen decreases (negative correlation).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Quote data: for example, at 18 mg per dm$^3$ nitrate the oxygen is 3.0, but at 2 mg per dm$^3$ it is 9.0.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Nitrate stimulates the growth of algae, which later die along with shaded plants.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Bacteria decompose the dead material, using oxygen in aerobic respiration.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So the dissolved oxygen concentration decreases where nitrate is highest.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Nitrate is diluted, taken up by plants and algae, or carried further away as the river flows downstream.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Use less fertiliser, or apply it only when the crop needs it and not before heavy rain.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Leave an unfertilised strip beside the river, or use organic or slow-release fertiliser.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $67\\%$ (b) as nitrate increases, oxygen decreases (c) algal bloom, death, decomposition by aerobic bacteria uses oxygen (d) dilution/uptake downstream (e) less fertiliser; buffer strip.",
            commonErrors: ["Dividing by 3.0 in (a), giving 200%.", "Saying nitrate 'uses up' oxygen directly.", "Describing the trend without quoting any data."],
            examinerNote: "In (a) allow 66.7 or 67 (M1 A1); 6 on its own scores M0 A0. In (c) the bacteria mark is essential for full marks. In (e) accept any two sensible methods.",
          },
        },
      ],
    },
  ],
};
