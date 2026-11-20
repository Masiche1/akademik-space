import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ebi11-u3-lesson-3-1",
  code: "3-1",
  title: "Ecosystems and Energy Flow",
  goal: "I CAN estimate population sizes using quadrats and transects, and analyse food chains, pyramids and the efficiency of energy transfer.",
  standards: ["4BI1 4.1", "4BI1 4.2", "4BI1 4.3", "4BI1 4.4", "4BI1 4.5", "4BI1 4.6", "4BI1 4.7"],
  vocabulary: [
    { term: "Population", definition: "All the organisms of one species living in the same area at the same time." },
    { term: "Community", definition: "All the populations of different species living and interacting in the same area." },
    { term: "Ecosystem", definition: "A community of living organisms together with the non-living (abiotic) parts of their environment." },
    { term: "Quadrat", definition: "A square frame of known area placed on the ground to sample the number or percentage cover of organisms." },
    { term: "Transect", definition: "A line along which samples are taken at regular intervals to show how the distribution of organisms changes across a habitat." },
    { term: "Trophic level", definition: "The position of an organism in a food chain, counted from the producer as level 1." },
    { term: "Biomass", definition: "The dry mass of living material in an organism or at a trophic level." },
  ],
  concepts: [
    {
      id: "ebi11-u3-ecosystems-quadrats",
      title: "Ecosystems, quadrats and sampling",
      skill: "Use ecological terms correctly, plan a random quadrat or transect investigation and calculate a population estimate.",
      lesson: {
        sections: [
          {
            heading: "Ecological terms",
            body: "A **habitat** is the place where an organism lives. A **population** is all the organisms of one species in an area. A **community** is all the populations of different species in that area. An **ecosystem** is the community together with the **abiotic** (non-living) factors such as light, temperature, soil pH and water. **Biotic** factors are living influences such as competition, predation and disease.",
          },
          {
            heading: "Estimating population size with quadrats",
            body: "It is usually impossible to count every organism, so we sample. A quadrat (for example $0.5\\text{ m} \\times 0.5\\text{ m} = 0.25\\text{ m}^2$) is placed at **random** positions, using random numbers as coordinates on a grid laid over the area, to avoid bias. The organisms inside each quadrat are counted. Then:\n\n$$\\text{estimated population} = \\frac{\\text{total number counted}}{\\text{number of quadrats}} \\times \\frac{\\text{total area}}{\\text{area of one quadrat}}$$\n\nA larger number of quadrats makes the mean more reliable and reduces the effect of anomalous results. For plants that are hard to count, such as grass, estimate **percentage cover** instead.",
          },
          {
            heading: "Transects and distribution",
            body: "To investigate how a factor such as light affects distribution, lay a tape measure (a **transect**) across the changing habitat, for example from a hedge into an open field. Place a quadrat at regular intervals (every 5 m) and measure the abiotic factor at each point, for example with a light meter. A correlation between a factor and the number of organisms does not prove the factor is the cause, because other factors usually change along the transect too.",
          },
        ],
        keyFormulas: [
          { name: "Population estimate", statement: "$\\text{mean per quadrat} \\times \\frac{\\text{total area}}{\\text{quadrat area}}$" },
          { name: "Random sampling", statement: "Use random numbers as coordinates to place quadrats, to avoid bias" },
          { name: "Transect", statement: "Quadrats at regular intervals along a line to show change in distribution" },
        ],
        workedExample: {
          problem: "A student places 20 quadrats, each of area $0.25\\text{ m}^2$, at random in a field of area $1500\\text{ m}^2$. She counts 80 buttercups in total. Estimate the number of buttercups in the field.",
          solution: "Mean per quadrat $= 80 \\div 20 = 4$. The field is $1500 \\div 0.25 = 6000$ quadrat areas. Estimate $= 4 \\times 6000 = 24000$ buttercups.",
        },
      },
      questions: [
        {
          id: "ebi11-u3-ecosystems-quadrats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is the definition of a **community**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All the organisms of one species living in an area" },
              { id: "b", text: "All the populations of different species living in an area" },
              { id: "c", text: "The place where an organism lives" },
              { id: "d", text: "All the living organisms and the non-living factors in an area" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Community", statement: "A community is all the populations of different species living and interacting in the same area." },
            ],
            steps: [
              { reasoning: "A community contains several species, so it is larger than a population but does not include abiotic factors.", working: "\\text{community} = \\text{all populations in an area}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (a), which defines a population.", "Choosing (c), which defines a habitat.", "Choosing (d), which defines an ecosystem because it includes non-living factors."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi11-u3-ecosystems-quadrats-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student estimates the number of dandelions in a field of area $2000\\text{ m}^2$. She places 10 quadrats at random. Each quadrat has an area of $0.25\\text{ m}^2$. The total number of dandelions in the 10 quadrats is 36.\n\nCalculate the estimated number of dandelions in the field. Give your answer to the nearest whole number.",
          response: { type: "numeric", parts: [{ label: "Estimated number of dandelions", answer: 28800, tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population estimate", statement: "$\\text{estimate} = \\text{mean per quadrat} \\times \\frac{\\text{total area}}{\\text{quadrat area}}$" },
            ],
            steps: [
              { reasoning: "Find the mean number per quadrat.", working: "\\frac{36}{10} = 3.6", marks: 1, markCode: "M" },
              { reasoning: "Find how many quadrat areas fit into the field.", working: "\\frac{2000}{0.25} = 8000", marks: 1, markCode: "M" },
              { reasoning: "Multiply the mean by the number of quadrat areas.", working: "3.6 \\times 8000 = 28800", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28800$ dandelions",
            commonErrors: ["Multiplying the total count (36) by 2000 instead of using the mean and the quadrat area.", "Dividing 2000 by 10 (the number of quadrats) instead of by the quadrat area."],
            examinerNote: "M1 for 3.6. M1 for 8000 (or 14.4 per m$^2$ then $\\times$ 2000). A1 cao. Allow 28 800.",
          },
        },
        {
          id: "ebi11-u3-ecosystems-quadrats-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a student could use quadrats to obtain a reliable estimate of the population of daisies on a school playing field.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Random sampling", statement: "Placing quadrats at random positions avoids bias, and a larger sample gives a more reliable mean." },
              { kind: "formula", name: "Population estimate", statement: "$\\text{estimate} = \\text{mean per quadrat} \\times \\frac{\\text{total area}}{\\text{quadrat area}}$" },
            ],
            steps: [
              { reasoning: "Lay out a grid (two tape measures at right angles) and use random numbers as coordinates, so that positions are chosen at random and there is no bias.", marks: 1, markCode: "B" },
              { reasoning: "Place a quadrat of known area at each coordinate and count the daisies inside it.", marks: 1, markCode: "B" },
              { reasoning: "Use a large number of quadrats (for example 20 or more) and calculate the mean per quadrat, to improve reliability and reduce the effect of anomalies.", marks: 1, markCode: "B" },
              { reasoning: "Multiply the mean per quadrat by the total area of the field divided by the area of one quadrat.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Random coordinates; count in each quadrat; many quadrats and a mean; scale up by area of field / area of quadrat.",
            commonErrors: ["Placing quadrats where daisies look most common, which introduces bias.", "Using only a few quadrats and treating the count as the whole population.", "Forgetting to scale up to the area of the whole field."],
            examinerNote: "Allow 'throw a quadrat over the shoulder' only if random numbers or an equivalent random method is stated for the first mark. Ignore 'repeat the experiment' alone.",
          },
        },
        {
          id: "ebi11-u3-ecosystems-quadrats-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the distribution of bluebells along a line from the edge of a hedge into an open field. She places a quadrat of area $0.25\\text{ m}^2$ at 5 m intervals and measures the light intensity at each position.\n\n| Distance from hedge (m) | Light intensity (lux) | Mean number of bluebells per quadrat |\n| --- | --- | --- |\n| 0 | 1500 | 9 |\n| 5 | 4200 | 6 |\n| 10 | 7800 | 3 |\n| 15 | 9500 | 1 |",
          parts: [
            { label: "a", prompt: "Name the type of sampling used, in which quadrats are placed at regular intervals along a line.", marks: 1 },
            { label: "b", prompt: "Calculate the mean number of bluebells per square metre at 5 m from the hedge.", marks: 2 },
            { label: "c", prompt: "Describe the relationship between light intensity and the number of bluebells.", marks: 2 },
            { label: "d", prompt: "Suggest one other abiotic factor that could affect the distribution of bluebells along the line.", marks: 1 },
            { label: "e", prompt: "Evaluate whether the results prove that light intensity is the cause of the change in the number of bluebells.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density from a quadrat", statement: "$\\text{number per m}^2 = \\frac{\\text{number per quadrat}}{\\text{quadrat area in m}^2}$" },
              { kind: "principle", name: "Correlation and causation", statement: "A correlation shows a relationship but does not prove that one variable causes the other when other factors also change." },
            ],
            steps: [
              { part: "a", reasoning: "Sampling along a line at regular intervals is a transect (belt transect).", working: "\\text{transect}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A quadrat of $0.25\\text{ m}^2$ is one quarter of a square metre, so divide by 0.25.", working: "\\frac{6}{0.25}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "24\\text{ bluebells per m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "As light intensity increases, the number of bluebells decreases (negative correlation).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Support with data: the number falls from 9 at 1500 lux to 1 at 9500 lux.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any valid abiotic factor: soil moisture, soil pH, temperature, mineral content of the soil.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Other factors, such as soil moisture or competition from grass, may also change with distance from the hedge, so light may not be the cause.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Only one transect was used and no repeats are shown, so the pattern may not be reliable. A larger number of transects would reduce this doubt.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Conclusion: the data show a strong negative correlation, which is consistent with light being a factor, but it does not prove cause.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Transect (b) 24 per m$^2$ (c) as light increases, bluebell number decreases (d) soil moisture (e) correlation does not prove causation; other factors vary; only one transect.",
            commonErrors: ["Dividing by 4 instead of by 0.25 (giving 1.5).", "Stating that light 'affects' the plants without describing the direction of the trend.", "Quoting the data without stating the pattern."],
            examinerNote: "In (b) allow ecf from a misread value for M1 only. In (c) both the direction and a data quote are needed. In (e) allow any two relevant evaluative points and a conclusion for full marks.",
          },
        },
      ],
    },
    {
      id: "ebi11-u3-food-webs-energy",
      title: "Food webs, pyramids and energy transfer",
      skill: "Interpret food chains and pyramids and calculate the efficiency of energy transfer between trophic levels.",
      lesson: {
        sections: [
          {
            heading: "Food chains and webs",
            body: "A food chain starts with a **producer** (a plant or alga that photosynthesises) and shows what eats what. The arrows show the **direction of energy transfer**. **Primary consumers** eat producers, **secondary consumers** eat primary consumers, and so on. Each stage is a **trophic level**. Decomposers break down dead material and waste, returning nutrients to the soil. A **food web** shows several linked food chains. If one population changes, others in the web change too, for example removing a predator allows its prey to increase.",
          },
          {
            heading: "Pyramids of number, biomass and energy",
            body: "A **pyramid of number** shows how many organisms are at each level, but it can be an odd shape (one oak tree supports thousands of insects). A **pyramid of biomass** shows the dry mass of living material at each level and is almost always pyramid shaped, because biomass is lost at each level. Biomass is measured by drying a sample to constant mass. A **pyramid of energy** shows the energy available at each level.",
          },
          {
            heading: "Efficiency of energy transfer",
            body: "Only about **10%** of the energy at one trophic level is passed on to the next. Energy is lost because:\n\n- much is released as heat by **respiration**, for example to maintain body temperature and for movement\n- some parts are not eaten (bones, roots, fur) or not digested and are **egested** as faeces\n- some is lost in **excretion**, for example urea in urine\n\nThe energy is not destroyed, it is transferred to the surroundings. Because so little energy is left, food chains rarely have more than four or five trophic levels. Eating plants directly is more energy-efficient for humans than eating animals fed on plants, because there is one fewer energy transfer.\n\n$$\\text{efficiency} = \\frac{\\text{energy transferred to the next level}}{\\text{energy available at the previous level}} \\times 100\\%$$",
          },
        ],
        keyFormulas: [
          { name: "Efficiency of energy transfer", statement: "$\\frac{\\text{energy transferred to next level}}{\\text{energy available at previous level}} \\times 100\\%$" },
          { name: "Typical transfer", statement: "About $10\\%$ of energy is passed to the next trophic level" },
          { name: "Energy losses", statement: "Respiration (heat), egestion, excretion and uneaten parts" },
        ],
        workedExample: {
          problem: "A field of grass receives 12 000 kJ of energy that is stored in its biomass. The cattle that eat it gain 960 kJ. Calculate the efficiency of the energy transfer from the grass to the cattle.",
          solution: "Efficiency $= \\frac{960}{12000} \\times 100 = 8\\%$. The remaining $92\\%$ is lost as heat from respiration, in faeces and urine, and in parts of the grass the cattle do not eat.",
        },
      },
      questions: [
        {
          id: "ebi11-u3-food-webs-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A food chain is: grass $\\rightarrow$ rabbit $\\rightarrow$ fox. Which organism is the secondary consumer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grass" },
              { id: "b", text: "Rabbit" },
              { id: "c", text: "Decomposer" },
              { id: "d", text: "Fox" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic levels", statement: "Producers are level 1; primary consumers eat producers; secondary consumers eat primary consumers." },
            ],
            steps: [
              { reasoning: "The rabbit eats the producer, so it is the primary consumer. The fox eats the rabbit, so it is the secondary consumer.", working: "\\text{fox} = \\text{secondary consumer}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Fox",
            commonErrors: ["Choosing the rabbit because it is the second organism in the chain (it is a primary consumer).", "Choosing grass, the producer."],
            examinerNote: "B1 for fox.",
          },
        },
        {
          id: "ebi11-u3-food-webs-energy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A field of grass contains $8400\\text{ kJ}$ of energy in its biomass. The cows that feed on the grass gain $756\\text{ kJ}$. Calculate the percentage efficiency of energy transfer from the grass to the cows.",
          response: { type: "numeric", parts: [{ label: "Efficiency", answer: 9, tolerance: 0.1, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency of energy transfer", statement: "$\\text{efficiency} = \\frac{\\text{energy transferred}}{\\text{energy available}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Divide the energy gained by the cows by the energy available in the grass, then multiply by 100.", working: "\\frac{756}{8400} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "9\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9\\%$",
            commonErrors: ["Dividing 8400 by 756 (giving 11.1).", "Giving 0.09 and omitting the percentage conversion."],
            examinerNote: "M1 for correct fraction $\\times$ 100. A1 for 9 (allow 9.0). Allow 0.09 only if the unit is stated as a fraction, otherwise A0.",
          },
        },
        {
          id: "ebi11-u3-food-webs-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why food chains rarely have more than five trophic levels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy transfer", statement: "Only about 10% of energy passes to the next trophic level, because most is lost to the surroundings." },
            ],
            steps: [
              { reasoning: "Energy is lost at each stage of the food chain, so each level has less energy than the one before.", marks: 1, markCode: "B" },
              { reasoning: "Energy is lost as heat from respiration (movement, keeping warm).", marks: 1, markCode: "B" },
              { reasoning: "Energy is also lost in faeces (egestion), urine (excretion) or because parts of organisms are not eaten.", marks: 1, markCode: "B" },
              { reasoning: "By the fifth level too little energy remains to support a viable population, so another level cannot be sustained.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Energy is lost at each transfer (respiration, egestion, excretion), only about 10% passes on, so too little energy remains for further levels.",
            commonErrors: ["Saying energy is 'used up' or destroyed rather than transferred to the surroundings.", "Saying predators get too large or that there is not enough space."],
            examinerNote: "Reject 'energy is destroyed'. Allow 'less biomass at each level'. Allow 'about 90% is lost' for the first mark.",
          },
        },
        {
          id: "ebi11-u3-food-webs-energy-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The table shows the energy stored in the organisms at each trophic level of a lake ecosystem in one year, per square metre.\n\n| Trophic level | Organism | Energy stored (kJ per m$^2$ per year) |\n| --- | --- | --- |\n| 1 | Phytoplankton | 20000 |\n| 2 | Zooplankton | 2600 |\n| 3 | Small fish | 260 |\n| 4 | Pike | 13 |",
          parts: [
            { label: "a", prompt: "Name the trophic level of the zooplankton.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage efficiency of energy transfer from the phytoplankton to the zooplankton.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage of the energy in the small fish that is **not** transferred to the pike.", marks: 2 },
            { label: "d", prompt: "A pyramid of numbers for an oak tree and the caterpillars that feed on it is not pyramid shaped. Explain why a pyramid of biomass for the same organisms would be pyramid shaped.", marks: 2 },
            { label: "e", prompt: "Explain why a larger human population can be supported if people eat the crop plants directly rather than eating animals fed on the crop.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency of energy transfer", statement: "$\\text{efficiency} = \\frac{\\text{energy transferred}}{\\text{energy available}} \\times 100\\%$" },
              { kind: "principle", name: "Pyramid of biomass", statement: "Biomass is the dry mass of living material and decreases at each trophic level as energy and mass are lost." },
            ],
            steps: [
              { part: "a", reasoning: "Zooplankton eat the producer, so they are primary consumers at trophic level 2.", working: "\\text{primary consumer (level 2)}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the energy in the zooplankton by the energy in the phytoplankton and multiply by 100.", working: "\\frac{2600}{20000} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "13\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the percentage transferred to the pike, then subtract from 100.", working: "\\frac{13}{260} \\times 100 = 5\\%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The percentage not transferred is the remainder.", working: "100 - 5 = 95\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Biomass measures the total dry mass at each level, and the single oak tree has a very large mass.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The total mass of the caterpillars is much smaller than the mass of the tree, so the producer level is the widest.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Eating plants directly removes one trophic level (one energy transfer).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Energy is lost at each transfer, mainly as heat from respiration and in waste, so feeding animals wastes much of the energy in the crop.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So a greater proportion of the energy in the crop reaches humans, and the same area of land can feed more people.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Primary consumer (b) $13\\%$ (c) $95\\%$ (d) tree has much greater dry mass than the caterpillars (e) fewer energy transfers, so less energy lost and more reaches humans.",
            commonErrors: ["In (c) giving 5%, the percentage that is transferred.", "In (d) saying that there are fewer caterpillars rather than comparing their mass.", "In (e) saying that animals 'use up' the energy without naming the losses."],
            examinerNote: "In (c) allow ecf for M1 only. In (d) the comparison of mass is needed. In (e) allow 'shorter food chain' for the first mark.",
          },
        },
      ],
    },
  ],
};
