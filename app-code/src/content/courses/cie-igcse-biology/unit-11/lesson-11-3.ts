import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cieb-u11-lesson-11-3",
  code: "11-3",
  title: "Food Production, Bioaccumulation and Acid Rain",
  goal: "I CAN describe intensive food production methods, explain bioaccumulation, and describe how acid rain forms and its effects.",
  standards: ["0653 11.2"],
  vocabulary: [
    { term: "Fish farming", definition: "Intensive rearing of fish (e.g. salmon) in cages or ponds for food." },
    { term: "Hydroponics", definition: "Growing plants without soil — roots in nutrient solution." },
    { term: "Bioaccumulation", definition: "Build-up of a substance (e.g. pesticide) in an organism's tissues over time." },
    { term: "Biomagnification", definition: "Increasing concentration of a toxin up the food chain." },
    { term: "Acid rain", definition: "Rain with pH below ~5.6 caused by dissolved SO₂ and NOₓ." },
    { term: "Sulphur dioxide", definition: "SO₂ from burning fossil fuels; forms sulphuric acid in rain." },
    { term: "Nitrogen oxides", definition: "NOₓ from vehicle engines and power stations; forms nitric acid." },
    { term: "Eutrophication", definition: "Excess nutrients (e.g. nitrates) in water causing algal blooms and deoxygenation." },
    { term: "Selective breeding", definition: "Choosing parents with desired traits to improve offspring." },
    { term: "Sustainable agriculture", definition: "Farming that meets needs without depleting resources or harming environment." },
  ],
  concepts: [
    {
      id: "cieb-u11-food-production",
      title: "Intensive food production: fish farming and hydroponics",
      skill: "Describe fish farming and hydroponics and evaluate their advantages and disadvantages.",
      lesson: {
        sections: [
          {
            heading: "Fish farming",
            body: "Fish (e.g. salmon) reared intensively in cages or ponds.\n\n**Advantages**: high yield, controlled conditions, year-round supply, less land needed.\n\n**Disadvantages**: overcrowding → disease, waste pollutes water, escapees can harm wild stocks, need feed (which may contain fishmeal).",
          },
          {
            heading: "Hydroponics",
            body: "Plants grown without soil — roots in mineral nutrient solution, often in greenhouses.\n\n**Advantages**: no soil needed (can grow on barren land), precise nutrient control, faster growth, less water used.\n\n**Disadvantages**: expensive setup, needs energy for lighting/climate control, technical skill required.",
          },
          {
            heading: "Selective breeding and sustainable agriculture",
            body: "Selective breeding improves yield/disease resistance but reduces genetic diversity. Sustainable agriculture balances productivity with environmental protection — crop rotation, organic methods, reducing chemical inputs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Give one advantage and one disadvantage of hydroponics compared to soil farming.",
          solution: "Advantage: precise nutrient control / no soil needed / faster growth. Disadvantage: expensive equipment / high energy use / technical knowledge needed.",
        },
      },
      questions: [
        {
          id: "cieb-u11-food-production-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is hydroponics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using pesticides on crops" },
              { id: "b", text: "Rearing fish in cages" },
              { id: "c", text: "Growing plants without soil in nutrient solution" },
              { id: "d", text: "Breeding animals for traits" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydroponics", statement: "Soilless plant growth in nutrient solution." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{no soil}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Growing plants without soil in nutrient solution",
            commonErrors: ["Confusing with fish farming — that's aquaculture."],
          },
        },
        {
          id: "cieb-u11-food-production-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one advantage and one disadvantage of intensive fish farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fish farming", statement: "High yield vs pollution/disease problems." },
            ],
            steps: [
              { reasoning: "Advantage: high yield / controlled.", working: "\\text{high yield}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: waste pollution / disease.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Advantage: high yield/controlled conditions. Disadvantage: waste pollution, disease from overcrowding, or escapees harming wild stocks.",
            commonErrors: ["Only listing advantages — exam needs both sides."],
          },
        },
        {
          id: "cieb-u11-food-production-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of selective breeding in agriculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Selective breeding", statement: "Improves traits but reduces genetic diversity." },
            ],
            steps: [
              { reasoning: "Increases yield/disease resistance.", working: "\\text{improved traits}", marks: 1, markCode: "M" },
              { reasoning: "Faster/more reliable food production.", marks: 1, markCode: "M" },
              { reasoning: "Reduces genetic diversity → vulnerability.", working: "\\text{less diversity}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: trade-off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Selective breeding improves yield and disease resistance but reduces genetic diversity, making crops/livestock vulnerable to new diseases or environmental changes — a trade-off between productivity and resilience.",
            commonErrors: ["Only positives — evaluation needs balanced view."],
          },
        },
        {
          id: "cieb-u11-food-production-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare fish farming and hydroponics as intensive food production methods.",
          parts: [
            { label: "a", prompt: "Describe fish farming.", marks: 3 },
            { label: "b", prompt: "Describe hydroponics.", marks: 3 },
            { label: "c", prompt: "Compare their environmental impacts.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food production", statement: "Fish farming: aquaculture; hydroponics: soilless plants; both intensive with environmental costs." },
            ],
            steps: [
              { part: "a", reasoning: "Fish reared in cages/ponds.", working: "\\text{cages/ponds}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "High density, controlled conditions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Roots in nutrient solution, no soil.", working: "\\text{nutrient solution}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Often greenhouse, precise control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fish: waste pollution, escapes.", working: "\\text{water pollution}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hydroponics: energy use, no soil degradation.", working: "\\text{energy use}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fish in cages/ponds, intensive (b) roots in nutrient solution, no soil (c) fish: water pollution; hydroponics: energy use but less land/soil impact",
            commonErrors: ["In (c) ignoring energy costs of hydroponics."],
          },
        },
        {
          id: "cieb-u11-food-production-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fish farming is also known as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monoculture" },
              { id: "b", text: "Aquaculture" },
              { id: "c", text: "Selective breeding" },
              { id: "d", text: "Hydroponics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fish farming", statement: "Intensive rearing of fish — aquaculture." },
            ],
            steps: [
              { reasoning: "Recall the term.", working: "\\text{aquaculture}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Aquaculture",
            commonErrors: ["Choosing hydroponics — that is soilless plant growing."],
          },
        },
        {
          id: "cieb-u11-food-production-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In hydroponics, plants are grown:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Without soil, with roots in a nutrient solution" },
              { id: "b", text: "In cages like fish" },
              { id: "c", text: "In soil with added fertiliser" },
              { id: "d", text: "In water only, without nutrients" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydroponics", statement: "Soilless growth in mineral nutrient solution." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{no soil + nutrients}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Without soil, with roots in a nutrient solution",
            commonErrors: ["Choosing (c) — plants still need mineral nutrients, not just water."],
          },
        },
        {
          id: "cieb-u11-food-production-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a major disadvantage of intensive fish farming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces very low yields" },
              { id: "b", text: "It requires no feed" },
              { id: "c", text: "Waste pollutes the surrounding water" },
              { id: "d", text: "It cannot be done indoors" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fish farming impacts", statement: "Overcrowding → disease; waste pollutes water; escapes harm wild stocks." },
            ],
            steps: [
              { reasoning: "Identify the disadvantage.", working: "\\text{waste pollution}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Waste pollutes the surrounding water",
            commonErrors: ["Choosing (b) — intensive farming gives HIGH yields; that is its advantage."],
          },
        },
        {
          id: "cieb-u11-food-production-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two advantages of hydroponics compared to soil farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Hydroponics", statement: "No soil needed, precise nutrient control, faster growth, less water." },
            ],
            steps: [
              { reasoning: "Give two valid advantages.", working: "\\text{no soil, nutrient control, faster, less water}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No soil is needed (can grow on barren land) and nutrients are precisely controlled, giving faster growth and less water use.",
            commonErrors: ["Listing disadvantages such as high cost as advantages."],
          },
        },
        {
          id: "cieb-u11-food-production-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Soil farming uses 1000 litres of water per crop. Hydroponics uses 90% less water. Calculate the volume of water used by hydroponics per crop.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "L" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$1000 \\times 0.10 = 100 \\text{ L}$" },
            ],
            steps: [
              { reasoning: "90% less means 10% is used.", working: "1000 \\times 0.1 = 100", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "100 \\text{ L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 L",
            commonErrors: ["Calculating 90% of 1000 (=900) instead of the remaining 10%."],
          },
        },
        {
          id: "cieb-u11-food-production-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why overcrowding in fish farms can lead to disease outbreaks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Overcrowding", statement: "Stress + poor water quality + rapid pathogen spread." },
            ],
            steps: [
              { reasoning: "Overcrowding stresses fish, lowering immunity.", working: "\\text{stress}", marks: 1, markCode: "M" },
              { reasoning: "Large numbers produce more waste → poorer water quality.", working: "\\text{waste/water quality}", marks: 1, markCode: "M" },
              { reasoning: "Pathogens spread rapidly between crowded fish.", working: "\\text{rapid spread}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: disease outbreak.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Overcrowded fish are stressed and have weaker immunity, produce more waste making water quality poor, and pathogens can spread rapidly between them — leading to disease outbreaks.",
            commonErrors: ["Saying overcrowding 'causes' disease directly — it creates conditions for pathogens to spread."],
          },
        },
        {
          id: "cieb-u11-food-production-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which food production method generally requires the most energy input?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Orchard growing" },
              { id: "b", text: "Open-field crop farming" },
              { id: "c", text: "Rain-fed wheat farming" },
              { id: "d", text: "Hydroponics in a heated, lit greenhouse" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hydroponics cost", statement: "Needs energy for lighting and climate control." },
            ],
            steps: [
              { reasoning: "Identify the energy-intensive method.", working: "\\text{greenhouse energy}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Hydroponics in a heated, lit greenhouse",
            commonErrors: ["Choosing open-field farming — it relies on natural light and climate."],
          },
        },
        {
          id: "cieb-u11-food-production-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two advantages of intensive fish farming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fish farming advantages", statement: "High yield, controlled conditions, year-round supply, less land." },
            ],
            steps: [
              { reasoning: "Give two valid advantages.", working: "\\text{high yield, controlled, year-round}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It gives a high yield with controlled conditions and a year-round supply of fish while using less land than traditional methods.",
            commonErrors: ["Listing disadvantages — the question asks for advantages."],
          },
        },
        {
          id: "cieb-u11-food-production-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A hydroponic lettuce crop yields 2.0 kg per m² per harvest while a soil-grown crop yields 1.5 kg per m². Calculate the percentage increase in yield with hydroponics.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 33.3, tolerance: 0.1, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\frac{2.0 - 1.5}{1.5} \\times 100 = 33.3\\%$" },
            ],
            steps: [
              { reasoning: "Find difference then percentage of original.", working: "\\frac{0.5}{1.5} \\times 100 = 33.3", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "33.3\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "33.3%",
            commonErrors: ["Dividing by 2.0 instead of the original 1.5."],
          },
        },
        {
          id: "cieb-u11-food-production-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate hydroponics as a food production method for a country with poor, nutrient-deficient soil.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Hydroponics evaluation", statement: "No soil needed + controlled nutrients vs high cost/energy/skill." },
            ],
            steps: [
              { reasoning: "Advantage: can grow without fertile soil.", working: "\\text{no soil needed}", marks: 1, markCode: "M" },
              { reasoning: "Advantage: precise nutrient control → reliable yields.", working: "\\text{nutrient control}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: expensive setup and high energy use.", working: "\\text{cost/energy}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: viable but costly for poor regions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hydroponics suits poor soil because plants need no soil and nutrients are precisely controlled, giving reliable yields; however it is expensive to set up and energy-hungry, which may be a barrier in poorer regions.",
            commonErrors: ["One-sided evaluation — must weigh both advantages and costs."],
          },
        },
        {
          id: "cieb-u11-food-production-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Crop rotation helps sustainable agriculture mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing the need for any labour" },
              { id: "b", text: "Replenishing soil nutrients and reducing pests" },
              { id: "c", text: "Eliminating the need for water" },
              { id: "d", text: "Growing only one crop type" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Crop rotation", statement: "Alternating crops replenishes nutrients and breaks pest cycles." },
            ],
            steps: [
              { reasoning: "Recall the benefit.", working: "\\text{nutrients + pests}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Replenishing soil nutrients and reducing pests",
            commonErrors: ["Confusing with monoculture — rotation is the opposite of one-crop farming."],
          },
        },
        {
          id: "cieb-u11-food-production-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fish farm has 4 cages, each producing 1.8 tonnes of fish per year. Calculate the total annual production.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7.2, unit: "tonnes" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total production", statement: "$4 \\times 1.8 = 7.2 \\text{ tonnes}$" },
            ],
            steps: [
              { reasoning: "Multiply cages by yield per cage.", working: "4 \\times 1.8 = 7.2", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "7.2 \\text{ tonnes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7.2 tonnes",
            commonErrors: ["Adding instead of multiplying per-cage yield."],
          },
        },
      ],
    },
    {
      id: "cieb-u11-bioaccumulation-acid-rain",
      title: "Bioaccumulation and acid rain",
      skill: "Explain bioaccumulation and biomagnification, and describe how acid rain forms and its effects.",
      lesson: {
        sections: [
          {
            heading: "Bioaccumulation and biomagnification",
            body: "- **Bioaccumulation**: a substance (e.g. pesticide, heavy metal) builds up in an organism's tissues faster than it can be excreted — increases with age/size.\n- **Biomagnification**: concentration increases up the food chain — predators at top have highest levels.\n\nExample: DDT → accumulates in fish → birds eating fish get high doses → thin eggshells → population decline.",
          },
          {
            heading: "Acid rain formation",
            body: "Burning fossil fuels releases **SO₂** and **NOₓ** → react with water vapour in atmosphere → form **sulphuric acid (H₂SO₄)** and **nitric acid (HNO₃)** → fall as acid rain (pH < 5.6).",
          },
          {
            heading: "Effects of acid rain",
            body: "- Acidifies lakes/rivers → kills fish and aquatic life.\n- Damages leaves → reduces photosynthesis.\n- Leaches minerals from soil → poor plant growth.\n- Corrodes buildings/limestone monuments.\n- Can be carried long distances by wind.",
          },
        ],
        keyFormulas: [
          { name: "Acid rain pH", statement: "$pH < 5.6 \\Rightarrow \\text{acid rain}$" },
        ],
        workedExample: {
          problem: "Why do top predators have higher toxin concentrations than plants?",
          solution: "Biomagnification: toxins concentrate at each trophic level — predators eat many prey, accumulating all their toxin load, so concentration increases up the food chain.",
        },
      },
      questions: [
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is biomagnification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Build-up of toxin in one organism" },
              { id: "b", text: "Breakdown of pollutants" },
              { id: "c", text: "Increasing toxin concentration up the food chain" },
              { id: "d", text: "Nutrient cycling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biomagnification", statement: "Toxin concentration increases up food chain." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{up the chain}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increasing toxin concentration up the food chain",
            commonErrors: ["Confusing with bioaccumulation — that's within one organism."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the two main gases responsible for acid rain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain gases", statement: "SO₂ and NOₓ from fossil fuel combustion." },
            ],
            steps: [
              { reasoning: "Sulphur dioxide.", working: "SO_2", marks: 1, markCode: "M" },
              { reasoning: "Nitrogen oxides.", working: "NO_x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sulphur dioxide (SO₂) and nitrogen oxides (NOₓ).",
            commonErrors: ["Naming CO₂ — that's greenhouse gas, not acid rain."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the mechanism by which DDT affects bird populations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "DDT biomagnification", statement: "DDT accumulates → eggshell thinning → reproduction failure." },
            ],
            steps: [
              { reasoning: "DDT enters food chain via insects/fish.", working: "\\text{food chain}", marks: 1, markCode: "M" },
              { reasoning: "Biomagnifies in predators (birds).", working: "\\text{biomagnification}", marks: 1, markCode: "M" },
              { reasoning: "Thins eggshells → eggs break.", working: "\\text{eggshells}", marks: 1, markCode: "M" },
              { reasoning: "Population declines.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "DDT enters the food chain, biomagnifies in birds, interferes with calcium metabolism causing thin eggshells — eggs break before hatching, reducing reproduction and population size.",
            commonErrors: ["Saying 'birds die directly' — it's reproduction failure via eggshell thinning."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the formation and effects of acid rain.",
          parts: [
            { label: "a", prompt: "Explain how acid rain forms.", marks: 4 },
            { label: "b", prompt: "State two effects on aquatic ecosystems.", marks: 2 },
            { label: "c", prompt: "State two effects on land/plants.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain", statement: "SO₂/NOₓ + water → acid → pH<5.6 → damages ecosystems and buildings." },
            ],
            steps: [
              { part: "a", reasoning: "Fossil fuel burning releases SO₂/NOₓ.", working: "SO_2/NO_x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gases react with water vapour.", working: "\\text{water vapour}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Form sulphuric/nitric acid.", working: "\\text{H}_2\\text{SO}_4/HNO_3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Falls as rain pH<5.6.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Acidifies lakes → fish die.", working: "\\text{lakes}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Kills aquatic organisms.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Damages leaves → less photosynthesis.", working: "\\text{leaves}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Leaches soil minerals.", working: "\\text{soil}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Corrodes buildings/stonework.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) SO₂/NOₓ + H₂O → H₂SO₄/HNO₃ → pH<5.6 (b) acidifies lakes, kills fish (c) damages leaves, leaches soil, corrodes stonework",
            commonErrors: ["In (a) forgetting the water vapour step — gases alone don't make acid rain."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bioaccumulation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Breakdown of pollutants by microbes" },
              { id: "b", text: "Increase of toxin up the food chain" },
              { id: "c", text: "Build-up of a substance in an organism's tissues over time" },
              { id: "d", text: "Nutrient cycling in soil" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bioaccumulation", statement: "Substance builds up in tissues faster than it is excreted." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{build-up in tissues}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Build-up of a substance in an organism's tissues over time",
            commonErrors: ["Choosing (b) — that describes biomagnification."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which two gases are mainly responsible for acid rain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and nitrogen" },
              { id: "b", text: "Carbon dioxide and methane" },
              { id: "c", text: "Sulphur dioxide and nitrogen oxides" },
              { id: "d", text: "Hydrogen and helium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain gases", statement: "SO₂ and NOₓ react with water vapour to form acids." },
            ],
            steps: [
              { reasoning: "Recall the gases.", working: "SO_2, NO_x", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sulphur dioxide and nitrogen oxides",
            commonErrors: ["Choosing CO₂/methane — those are greenhouse gases."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Acid rain is defined as rain with a pH:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Below 2 only" },
              { id: "b", text: "Exactly 7" },
              { id: "c", text: "Above 7" },
              { id: "d", text: "Below 5.6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain pH", statement: "Acid rain has pH < 5.6." },
            ],
            steps: [
              { reasoning: "Recall the threshold.", working: "pH < 5.6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Below 5.6",
            commonErrors: ["Choosing below 2 — acid rain only needs pH under ~5.6."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between bioaccumulation and biomagnification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bioaccumulation vs biomagnification", statement: "Bioaccumulation = build-up within one organism; biomagnification = increase up the food chain." },
            ],
            steps: [
              { reasoning: "Define bioaccumulation.", working: "\\text{in one organism}", marks: 1, markCode: "M" },
              { reasoning: "Define biomagnification and contrast.", working: "\\text{up the food chain}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bioaccumulation is the build-up of a substance in a single organism's tissues over time; biomagnification is the increasing concentration of that substance at each higher trophic level of a food chain.",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A toxin's concentration doubles at each trophic level. Producers contain 2 mg/kg. Calculate the concentration in secondary consumers (two transfers up the food chain).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "mg/kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Doubling", statement: "$2 \\times 2^2 = 8 \\text{ mg/kg}$" },
            ],
            steps: [
              { reasoning: "Apply doubling twice: producer → primary → secondary.", working: "2 \\to 4 \\to 8", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "8 \\text{ mg/kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 mg/kg",
            commonErrors: ["Doubling only once — secondary consumers are two levels up."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why top predators are most at risk from bioaccumulation and biomagnification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Top predators", statement: "Highest toxin concentration because toxin accumulates at each trophic level." },
            ],
            steps: [
              { reasoning: "Predators eat many prey organisms.", working: "\\text{many prey}", marks: 1, markCode: "M" },
              { reasoning: "Each prey already contains accumulated toxin.", working: "\\text{prey toxin load}", marks: 1, markCode: "M" },
              { reasoning: "Toxin concentrates further in the predator (biomagnification).", working: "\\text{concentration increases}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: top predators have highest levels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Top predators eat many prey that each carry accumulated toxin; the toxin is not broken down, so it concentrates further at each trophic level — giving predators the highest toxin concentrations.",
            commonErrors: ["Saying predators are 'exposed to more' toxin directly — the mechanism is dietary accumulation."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an effect of acid rain on buildings and monuments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turning them into soil instantly" },
              { id: "b", text: "Making them grow stronger" },
              { id: "c", text: "No effect at all" },
              { id: "d", text: "Corrosion/chemical weathering of limestone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain effects", statement: "Corrodes limestone and stonework." },
            ],
            steps: [
              { reasoning: "Recall the effect on stone.", working: "\\text{corrosion}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Corrosion/chemical weathering of limestone",
            commonErrors: ["Choosing (b) — acid rain damages, not strengthens, stonework."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two effects of acid rain on plants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain & plants", statement: "Damages leaves → less photosynthesis; leaches soil minerals." },
            ],
            steps: [
              { reasoning: "Give two valid effects.", working: "\\text{leaf damage, soil leaching}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It damages leaves reducing photosynthesis, and leaches minerals from the soil so plants grow poorly.",
            commonErrors: ["Listing effects on animals/buildings — question asks about plants."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Acid rain has a pH of 4.0 while normal rain has a pH of 7.0. Given each pH unit = tenfold difference in H⁺ concentration, calculate how many times more H⁺ the acid rain contains.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, unit: "times" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Each pH unit = 10× H⁺; 3 units → 10³." },
            ],
            steps: [
              { reasoning: "Find pH difference then apply tenfold rule.", working: "7 - 4 = 3 \\to 10^3 = 1000", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "1000 \\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1000 times",
            commonErrors: ["Answering 3 — must apply the tenfold rule per unit."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why acid rain can damage ecosystems far from the pollution source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain transport", statement: "SO₂/NOₓ carried long distances by wind before falling as acid rain." },
            ],
            steps: [
              { reasoning: "Gases are emitted at the source (power stations, vehicles).", working: "\\text{emissions}", marks: 1, markCode: "M" },
              { reasoning: "Wind carries the gases over long distances.", working: "\\text{wind transport}", marks: 1, markCode: "M" },
              { reasoning: "Gases react with water vapour en route → acid forms.", working: "\\text{acid formation}", marks: 1, markCode: "M" },
              { reasoning: "Acid rain falls on distant ecosystems → damage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂ and NOₓ emitted at power stations and by vehicles are carried hundreds of kilometres by wind; they react with water vapour to form acids that fall as acid rain on ecosystems far from the source.",
            commonErrors: ["Saying acid rain only falls near factories — it is transported by wind."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "DDT caused bird populations to decline mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changed bird feather colour" },
              { id: "b", text: "Killed adult birds directly on contact" },
              { id: "c", text: "Thinned eggshells so eggs broke before hatching" },
              { id: "d", text: "Destroyed all bird food instantly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "DDT effect", statement: "Biomagnified DDT → thin eggshells → reproductive failure." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{eggshell thinning}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Thinned eggshells so eggs broke before hatching",
            commonErrors: ["Choosing (b) — DDT harms reproduction via eggshells, not direct killing."],
          },
        },
        {
          id: "cieb-u11-bioaccumulation-acid-rain-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A pesticide enters a food chain. Its concentration is 0.01 mg/kg in producers, 0.1 mg/kg in primary consumers and 1.0 mg/kg in secondary consumers. Calculate the factor by which the concentration increases at each trophic level.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Biomagnification factor", statement: "$\\frac{0.1}{0.01} = \\frac{1.0}{0.1} = 10$" },
            ],
            steps: [
              { reasoning: "Divide concentration at one level by the level below.", working: "0.1 \\div 0.01 = 10", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "10 \\times", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10×",
            commonErrors: ["Subtracting concentrations instead of finding the ratio."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u11-food-bioaccumulation-notes",
      title: "Food production, bioaccumulation, acid rain — revision notes",
      summary: "Fish farming, hydroponics, selective breeding, biomagnification, acid rain formation and effects.",
      sections: [
        {
          heading: "Food production",
          body: "Fish farming: high yield but waste/disease. Hydroponics: no soil, precise nutrients, but expensive/energy-intensive. Selective breeding: better traits, less diversity.",
        },
        {
          heading: "Bioaccumulation & acid rain",
          body: "Bioaccumulation = build-up in organism; biomagnification = increase up food chain (DDT → thin eggshells). Acid rain: SO₂/NOₓ + water → H₂SO₄/HNO₃, pH<5.6 → kills fish, damages plants/buildings.",
        },
        {
          heading: "Exam technique",
          body: "- Bioaccumulation (one organism) vs biomagnification (up the chain) — don't confuse.\n- Acid rain needs BOTH the gases AND water vapour in the explanation.",
        },
      ],
    },
  ],
};
