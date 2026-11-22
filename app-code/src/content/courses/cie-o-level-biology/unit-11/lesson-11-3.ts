import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "olbio-u11-lesson-11-3",
  code: "11-3",
  title: "Food Production, Bioaccumulation and Acid Rain",
  goal: "I CAN describe intensive food production methods, explain bioaccumulation, and describe how acid rain forms and its effects.",
  standards: ["5090 11.2"],
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
      id: "olbio-u11-food-production",
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
          id: "olbio-u11-food-production-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is hydroponics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing plants without soil in nutrient solution" },
              { id: "b", text: "Breeding animals for traits" },
              { id: "c", text: "Using pesticides on crops" },
              { id: "d", text: "Rearing fish in cages" },
            ],
            correctChoiceId: "a",
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
          id: "olbio-u11-food-production-q2",
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
          id: "olbio-u11-food-production-q3",
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
          id: "olbio-u11-food-production-q4",
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
          id: "olbio-u11-food-production-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a disadvantage of intensive fish farming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It requires no feed" },
              { id: "b", text: "It always gives low yield" },
              { id: "c", text: "Waste can pollute water and overcrowding can spread disease" },
              { id: "d", text: "It cannot be done in cages" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fish farming drawbacks", statement: "Waste pollution, disease and escapees are disadvantages." },
            ],
            steps: [
              { reasoning: "Recall a valid disadvantage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Waste can pollute water and overcrowding can spread disease",
            commonErrors: ["Choosing low yield — intensive farming aims for high yield."],
          },
        },
        {
          id: "olbio-u11-food-production-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a disadvantage of hydroponics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is expensive to set up and needs energy for lighting/climate control" },
              { id: "b", text: "It cannot grow plants quickly" },
              { id: "c", text: "It always needs no energy" },
              { id: "d", text: "It requires no nutrients" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hydroponics drawbacks", statement: "High setup cost and energy demand are disadvantages." },
            ],
            steps: [
              { reasoning: "Recall a valid disadvantage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is expensive to set up and needs energy for lighting/climate control",
            commonErrors: ["Thinking hydroponics uses no resources — energy and nutrients are still needed."],
          },
        },
        {
          id: "olbio-u11-food-production-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a disadvantage of selective breeding?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is the same as genetic engineering" },
              { id: "b", text: "It always increases genetic diversity" },
              { id: "c", text: "It cannot improve yield" },
              { id: "d", text: "It can reduce genetic diversity and make crops vulnerable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Selective breeding", statement: "It improves traits but reduces genetic diversity." },
            ],
            steps: [
              { reasoning: "Recall the trade-off.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** It can reduce genetic diversity and make crops vulnerable",
            commonErrors: ["Confusing selective breeding with genetic engineering."],
          },
        },
        {
          id: "olbio-u11-food-production-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a sustainable agriculture practice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing all hedgerows" },
              { id: "b", text: "Planting the same crop continuously" },
              { id: "c", text: "Using maximum pesticides every season" },
              { id: "d", text: "Crop rotation and reduced chemical inputs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sustainable agriculture", statement: "Crop rotation and reduced chemicals protect soil and biodiversity." },
            ],
            steps: [
              { reasoning: "Choose the sustainable practice.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Crop rotation and reduced chemical inputs",
            commonErrors: ["Choosing maximum pesticide — that is unsustainable."],
          },
        },
        {
          id: "olbio-u11-food-production-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is aquaculture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Breeding plants for colour" },
              { id: "b", text: "Intensive farming of aquatic organisms such as fish" },
              { id: "c", text: "Growing plants without soil" },
              { id: "d", text: "Making compost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aquaculture", statement: "Aquaculture is farming aquatic organisms such as fish." },
            ],
            steps: [
              { reasoning: "Recall the term.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Intensive farming of aquatic organisms such as fish",
            commonErrors: ["Confusing with hydroponics — that is soilless plant growth."],
          },
        },
        {
          id: "olbio-u11-food-production-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fish cage has a capacity of 2000 fish and currently holds 1500. Calculate the remaining space in fish numbers.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 500, unit: "fish" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Capacity remaining", statement: "Remaining = capacity − current number." },
            ],
            steps: [
              { reasoning: "Subtract current from capacity.", working: "2000 - 1500 = 500", marks: 1, markCode: "M" },
            ],
            finalAnswer: "500 fish",
            commonErrors: ["Answering 2000 — that is capacity, not remaining space."],
          },
        },
        {
          id: "olbio-u11-food-production-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A hydroponic tank holds 100 L of nutrient solution and 75 L has been used. Calculate the volume remaining.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "L" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining volume", statement: "Remaining = total − used." },
            ],
            steps: [
              { reasoning: "Subtract used volume.", working: "100 - 75 = 25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "25 L",
            commonErrors: ["Answering 75 — that is used, not remaining."],
          },
        },
        {
          id: "olbio-u11-food-production-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fish farm uses 500 kg of feed and 40% becomes waste. Calculate the mass of waste produced.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Waste mass", statement: "Waste = feed × waste percentage." },
            ],
            steps: [
              { reasoning: "Calculate 40% of 500 kg.", working: "500 × 0.40 = 200", marks: 1, markCode: "M" },
            ],
            finalAnswer: "200 kg",
            commonErrors: ["Using 500/40 — the percentage is multiplied."],
          },
        },
        {
          id: "olbio-u11-food-production-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A soil crop yields 100 kg and the same crop in hydroponics yields 150 kg. Enter the increase in yield and the percentage increase.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 50, unit: "kg" },
              { label: "b", answer: 50, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Yield increase", statement: "Increase = new − old; percentage = increase / old × 100." },
            ],
            steps: [
              { reasoning: "Calculate absolute increase.", working: "150 - 100 = 50", marks: 1, markCode: "M" },
              { reasoning: "Calculate percentage increase.", working: "50/100 × 100 = 50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increase = 50 kg; percentage = 50%",
            commonErrors: ["Dividing by the hydroponic yield instead of the soil yield."],
          },
        },
        {
          id: "olbio-u11-food-production-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a selective breeding programme, 25 of 100 offspring show the desired trait. Calculate the percentage showing the trait.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trait percentage", statement: "Percentage = desired / total × 100." },
            ],
            steps: [
              { reasoning: "Calculate the percentage.", working: "25/100 × 100 = 25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Reporting 25 offspring instead of a percentage."],
          },
        },
        {
          id: "olbio-u11-food-production-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a main advantage of hydroponics over soil farming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can grow without soil and allows precise nutrient control" },
              { id: "b", text: "It cannot be done indoors" },
              { id: "c", text: "It needs no nutrients" },
              { id: "d", text: "It always uses more water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hydroponics advantage", statement: "Soilless growth and precise nutrients are advantages." },
            ],
            steps: [
              { reasoning: "Recall a valid advantage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It can grow without soil and allows precise nutrient control",
            commonErrors: ["Choosing 'needs no nutrients' — nutrient solution is essential."],
          },
        },
        {
          id: "olbio-u11-food-production-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate intensive fish farming as a food production method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fish farming evaluation", statement: "High yield and control vs pollution, disease and escape risks." },
            ],
            steps: [
              { reasoning: "Advantage: high yield and controlled conditions.", working: "\\text{high yield}", marks: 1, markCode: "M" },
              { reasoning: "Advantage: year-round supply and less land needed.", working: "\\text{year-round}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: waste pollution and disease from overcrowding.", working: "\\text{pollution/disease}", marks: 1, markCode: "M" },
              { reasoning: "Conclude it is productive but needs careful management.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intensive fish farming gives high yields, controlled conditions and year-round supply, but can pollute water with waste, spread disease through overcrowding and risk escapees harming wild stocks — it is productive but requires careful management.",
            commonErrors: ["Listing only advantages or only disadvantages — evaluation needs balance."],
          },
        },
      ],
    },
    {
      id: "olbio-u11-bioaccumulation-acid-rain",
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
          id: "olbio-u11-bioaccumulation-acid-rain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is biomagnification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nutrient cycling" },
              { id: "b", text: "Breakdown of pollutants" },
              { id: "c", text: "Increasing toxin concentration up the food chain" },
              { id: "d", text: "Build-up of toxin in one organism" },
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
            finalAnswer: "**(c)** Increasing toxin concentration up the food chain",
            commonErrors: ["Confusing with bioaccumulation — that's within one organism."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q2",
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
          id: "olbio-u11-bioaccumulation-acid-rain-q3",
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
          id: "olbio-u11-bioaccumulation-acid-rain-q4",
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
          id: "olbio-u11-bioaccumulation-acid-rain-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is bioaccumulation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase of toxin up a food chain" },
              { id: "b", text: "Build-up of a substance in an organism faster than it is excreted" },
              { id: "c", text: "Photosynthesis" },
              { id: "d", text: "Breakdown of pollutants" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bioaccumulation", statement: "Substance builds up in one organism's tissues over time." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Build-up of a substance in an organism faster than it is excreted",
            commonErrors: ["Confusing with biomagnification — that is across trophic levels."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is biomagnification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removal of toxin by decomposers" },
              { id: "b", text: "Increasing concentration of toxin at each higher trophic level" },
              { id: "c", text: "Dilution of pollutant in water" },
              { id: "d", text: "Build-up of toxin within one organism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biomagnification", statement: "Toxin concentration rises up the food chain." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Increasing concentration of toxin at each higher trophic level",
            commonErrors: ["Confusing with bioaccumulation."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What pH is used as the threshold for acid rain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Above 7" },
              { id: "b", text: "Exactly 0" },
              { id: "c", text: "Below 7" },
              { id: "d", text: "Below 5.6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain threshold", statement: "Acid rain is rain with pH below about 5.6." },
            ],
            steps: [
              { reasoning: "Recall the threshold.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Below 5.6",
            commonErrors: ["Using pH 7 — that is neutral, not the acid rain threshold."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does DDT affect bird populations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases bird food supply" },
              { id: "b", text: "It thins eggshells, so eggs break before hatching" },
              { id: "c", text: "It makes eggshells thicker" },
              { id: "d", text: "It makes birds migrate faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "DDT effect", statement: "DDT biomagnifies and thins eggshells, reducing reproduction." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It thins eggshells, so eggs break before hatching",
            commonErrors: ["Saying birds die directly — the main effect is reproductive failure."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gases mainly cause acid rain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and nitrogen" },
              { id: "b", text: "CO₂ and methane" },
              { id: "c", text: "SO₂ and NOₓ" },
              { id: "d", text: "Hydrogen and helium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain gases", statement: "SO₂ and NOₓ form sulphuric and nitric acids in rain." },
            ],
            steps: [
              { reasoning: "Recall the acidic gases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** SO₂ and NOₓ",
            commonErrors: ["Choosing CO₂/methane — those are greenhouse gases."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "An organism takes in 2.0 mg of a toxin per day and excretes 0.5 mg per day. Calculate the net daily accumulation.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.5, unit: "mg/day" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Net accumulation", statement: "Net = intake − excretion." },
            ],
            steps: [
              { reasoning: "Subtract excretion from intake.", working: "2.0 - 0.5 = 1.5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1.5 mg/day",
            commonErrors: ["Adding the values — accumulation is net gain."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A food chain has toxin concentrations of 10 mg/kg in plants, 40 mg/kg in herbivores and 160 mg/kg in top carnivores. Enter the herbivore and carnivore concentrations.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "mg/kg" },
              { label: "b", answer: 160, unit: "mg/kg" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biomagnification", statement: "Concentration increases up the food chain." },
            ],
            steps: [
              { reasoning: "Identify herbivore concentration.", working: "40 \\text{ mg/kg}", marks: 1, markCode: "M" },
              { reasoning: "Identify carnivore concentration.", working: "160 \\text{ mg/kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Herbivore = 40 mg/kg; carnivore = 160 mg/kg",
            commonErrors: ["Reporting plant concentration — question asks higher levels."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A region emits 1000 tonnes of SO₂ and 30% is converted to acid in rain. Calculate the mass converted.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "tonnes" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Converted mass", statement: "Converted = emissions × percentage." },
            ],
            steps: [
              { reasoning: "Calculate 30% of 1000 tonnes.", working: "1000 × 0.30 = 300", marks: 1, markCode: "M" },
            ],
            finalAnswer: "300 tonnes",
            commonErrors: ["Using 1000/30 — the percentage is multiplied."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Normal rain has pH 5.6 and acid rain has pH 4.2. Calculate the difference in pH.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.4, unit: "pH units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH difference", statement: "Difference = normal pH − acid rain pH." },
            ],
            steps: [
              { reasoning: "Subtract the pH values.", working: "5.6 - 4.2 = 1.4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1.4 pH units",
            commonErrors: ["Forgetting pH is logarithmic — lower pH is much more acidic."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "DDT causes 20% of 500 bird eggs to fail. Calculate the number of eggs failing.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "eggs" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Failure number", statement: "Failed eggs = total × failure percentage." },
            ],
            steps: [
              { reasoning: "Calculate 20% of 500.", working: "500 × 0.20 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100 eggs",
            commonErrors: ["Using 500/20 — the percentage is multiplied."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do top predators usually have the highest toxin concentrations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They live in clean water" },
              { id: "b", text: "They excrete toxins fastest" },
              { id: "c", text: "They eat only plants" },
              { id: "d", text: "Toxins biomagnify up the food chain as predators eat contaminated prey" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biomagnification", statement: "Predators accumulate toxin from all the prey they eat." },
            ],
            steps: [
              { reasoning: "Recall the food-chain effect.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Toxins biomagnify up the food chain as predators eat contaminated prey",
            commonErrors: ["Thinking producers have highest concentrations — predators are highest."],
          },
        },
        {
          id: "olbio-u11-bioaccumulation-acid-rain-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how acid rain forms and give two of its effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain", statement: "SO₂/NOₓ + water vapour → acids → pH<5.6 → ecosystem and building damage." },
            ],
            steps: [
              { reasoning: "Fossil fuel burning releases SO₂ and NOₓ.", working: "SO_2/NO_x", marks: 1, markCode: "M" },
              { reasoning: "Gases react with water vapour to form sulphuric/nitric acid.", working: "\\text{acids}", marks: 1, markCode: "M" },
              { reasoning: "Acid rain falls with pH below 5.6.", working: "pH < 5.6", marks: 1, markCode: "M" },
              { reasoning: "Give two effects such as fish deaths and damaged leaves/buildings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂ and NOₓ from fossil fuels react with water vapour to form sulphuric and nitric acids; acid rain with pH below 5.6 acidifies lakes killing fish, damages leaves reducing photosynthesis, leaches soil minerals and corrodes buildings.",
            commonErrors: ["Omitting water vapour — gases alone do not make acid rain."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u11-food-bioaccumulation-notes",
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
