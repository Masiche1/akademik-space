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
              { id: "a", text: "Growing plants without soil in nutrient solution" },
              { id: "b", text: "Rearing fish in cages" },
              { id: "c", text: "Using pesticides on crops" },
              { id: "d", text: "Breeding animals for traits" },
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
              { id: "a", text: "Increasing toxin concentration up the food chain" },
              { id: "b", text: "Build-up of toxin in one organism" },
              { id: "c", text: "Breakdown of pollutants" },
              { id: "d", text: "Nutrient cycling" },
            ],
            correctChoiceId: "a",
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
