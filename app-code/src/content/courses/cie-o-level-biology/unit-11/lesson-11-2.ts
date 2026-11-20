import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "olbio-u11-lesson-11-2",
  code: "11-2",
  title: "Human Influences and Conservation",
  goal: "I CAN describe human impacts on the environment and methods of conservation and sustainable management.",
  standards: ["5090 11.3"],
  vocabulary: [
    { term: "Sustainable development", definition: "Meeting present needs without compromising future generations' ability to meet theirs." },
    { term: "Conservation", definition: "Protection and management of natural resources and habitats." },
    { term: "Biodiversity", definition: "Variety of life in an ecosystem — species, genetic, habitat diversity." },
    { term: "Eutrophication", definition: "Excess nutrients → algal bloom → deoxygenation → ecosystem damage." },
    { term: "Greenhouse effect", definition: "Trapping of heat by gases (CO₂, methane) → global warming." },
    { term: "Sustainable fishing", definition: "Fishing at levels allowing fish stocks to replenish." },
    { term: "Reforestation", definition: "Replanting trees to replace those cut down." },
    { term: "Pollution", definition: "Contamination of air, water or soil by harmful substances." },
  ],
  concepts: [
    {
      id: "olbio-u11-human-impacts",
      title: "Human impacts",
      skill: "Describe major human impacts on the environment and their consequences.",
      lesson: {
        sections: [
          {
            heading: "Land and habitat",
            body: "- **Deforestation**: habitat loss, soil erosion, biodiversity loss, CO₂ increase.\n- **Intensive farming**: monoculture (less biodiversity), fertiliser/pesticide pollution, soil degradation.",
          },
          {
            heading: "Water",
            body: "- **Eutrophication**: fertiliser runoff → nitrate/phosphate → algal bloom → deoxygenation → fish deaths.\n- **Pollution**: sewage, industrial waste, plastics.",
          },
          {
            heading: "Air and climate",
            body: "- **Greenhouse gases** (CO₂, methane): fossil fuels + deforestation → global warming → sea level rise, extreme weather.\n- **Air pollution**: SO₂ → acid rain → damages ecosystems/buildings.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does fertiliser runoff cause fish deaths?",
          solution: "Nitrates/phosphates → algal bloom → decomposition consumes O₂ → fish suffocate (eutrophication).",
        },
      },
      questions: [
        {
          id: "olbio-u11-human-impacts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes eutrophication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excess nutrients (nitrates/phosphates) in water" },
              { id: "b", text: "Oil spills" },
              { id: "c", text: "Acid rain" },
              { id: "d", text: "Deforestation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Eutrophication", statement: "Nutrient overload → algal bloom → O₂ depletion." },
            ],
            steps: [
              { reasoning: "Recall the cause.", working: "\\text{nitrates/phosphates}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Excess nutrients (nitrates/phosphates) in water",
            commonErrors: ["Choosing acid rain — that's SO₂ pollution."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two greenhouse gases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Greenhouse gases", statement: "CO₂ and methane (also water vapour, nitrous oxide)." },
            ],
            steps: [
              { reasoning: "Give two gases.", working: "\\text{CO}_2, \\text{methane}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carbon dioxide and methane (also water vapour, nitrous oxide).",
            commonErrors: ["Choosing oxygen/nitrogen — they're not greenhouse gases."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how intensive farming can damage the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Intensive farming", statement: "Monoculture, fertilisers/pesticides, soil degradation." },
            ],
            steps: [
              { reasoning: "Monoculture → less biodiversity.", working: "\\text{monoculture}", marks: 1, markCode: "M" },
              { reasoning: "Fertiliser/pesticide runoff → pollution.", working: "\\text{runoff}", marks: 1, markCode: "M" },
              { reasoning: "Soil degradation → erosion/fertility loss.", working: "\\text{soil degradation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: ecosystem damage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Monoculture reduces biodiversity; fertiliser/pesticide runoff pollutes water (eutrophication); soil loses fertility and erodes — damaging the environment.",
            commonErrors: ["Only mentioning 'more food' — question asks about damage."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the greenhouse effect and its consequences.",
          parts: [
            { label: "a", prompt: "Explain the greenhouse effect.", marks: 3 },
            { label: "b", prompt: "State two human activities increasing greenhouse gases.", marks: 2 },
            { label: "c", prompt: "Describe two consequences of global warming.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Greenhouse effect", statement: "Gases trap heat → warming; CO₂/methane increased by human activity." },
            ],
            steps: [
              { part: "a", reasoning: "Sun's energy reaches Earth.", working: "\\text{solar energy}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Greenhouse gases trap heat in atmosphere.", working: "\\text{trap heat}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Natural effect but amplified by humans.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fossil fuel burning.", working: "\\text{fossil fuels}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deforestation/livestock.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sea level rise (ice melt).", working: "\\text{sea level}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Extreme weather/climate change.", working: "\\text{extreme weather}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Habitat loss/extinction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gases trap heat (b) fossil fuels, deforestation (c) sea level rise, extreme weather, habitat loss",
            commonErrors: ["In (a) saying 'ozone hole' — different issue (though related to UV, not warming)."],
          },
        },
      ],
    },
    {
      id: "olbio-u11-conservation",
      title: "Conservation and sustainable management",
      skill: "Describe conservation methods and sustainable use of resources.",
      lesson: {
        sections: [
          {
            heading: "Conservation methods",
            body: "- **Protected areas**: national parks, reserves.\n- **Sustainable fishing**: quotas, mesh size limits, closed seasons.\n- **Reforestation**: replace cut trees.\n- **Captive breeding**: endangered species breeding programmes.",
          },
          {
            heading: "Sustainable practices",
            body: "- **Organic farming**: no synthetic chemicals → less pollution.\n- **Renewable energy**: solar/wind reduce fossil fuel use.\n- **Waste reduction**: recycling, composting.\n- **Water management**: efficient irrigation, sewage treatment.",
          },
          {
            heading: "Why conserve?",
            body: "Biodiversity maintains ecosystem stability, provides resources (medicine, food), and has intrinsic value. Sustainable use ensures resources last for future generations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does sustainable fishing work?",
          solution: "Set quotas on catch, minimum mesh sizes to let young fish escape, and closed seasons during breeding — allowing stocks to replenish.",
        },
      },
      questions: [
        {
          id: "olbio-u11-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is sustainable fishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fishing at levels allowing stocks to replenish" },
              { id: "b", text: "Catching as many fish as possible" },
              { id: "c", text: "Using dynamite" },
              { id: "d", text: "Fishing only in rivers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable fishing", statement: "Catch rates below reproduction rate." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{replenish stocks}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fishing at levels allowing stocks to replenish",
            commonErrors: ["Choosing 'catch as many as possible' — that's overfishing."],
          },
        },
        {
          id: "olbio-u11-conservation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two conservation methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Conservation", statement: "Protected areas, reforestation, sustainable fishing, captive breeding." },
            ],
            steps: [
              { reasoning: "Give two methods.", working: "\\text{protected areas, reforestation, fishing}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protected areas (national parks), reforestation, sustainable fishing quotas, or captive breeding programmes.",
            commonErrors: ["Saying 'do nothing' — conservation requires active management."],
          },
        },
        {
          id: "olbio-u11-conservation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how reforestation helps the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reforestation", statement: "Restores habitat, absorbs CO₂, reduces soil erosion." },
            ],
            steps: [
              { reasoning: "Restores habitat for species.", working: "\\text{habitat}", marks: 1, markCode: "M" },
              { reasoning: "Trees absorb CO₂ via photosynthesis.", working: "\\text{CO}_2 \\text{ absorption}", marks: 1, markCode: "M" },
              { reasoning: "Roots hold soil → less erosion.", working: "\\text{soil stability}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: multiple benefits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reforestation restores habitats for wildlife, trees absorb CO₂ reducing greenhouse effect, and roots stabilise soil preventing erosion.",
            commonErrors: ["Only mentioning 'more trees' without ecosystem benefits."],
          },
        },
        {
          id: "olbio-u11-conservation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate the need for conservation and sustainable management of natural resources.",
          parts: [
            { label: "a", prompt: "State why conservation is important.", marks: 3 },
            { label: "b", prompt: "Describe two conservation methods.", marks: 3 },
            { label: "c", prompt: "Explain what 'sustainable' means.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Conservation", statement: "Maintains biodiversity, ecosystem services, future resources." },
              { kind: "definition", name: "Sustainable", statement: "Use without compromising future availability." },
            ],
            steps: [
              { part: "a", reasoning: "Biodiversity/ecosystem stability.", working: "\\text{biodiversity}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Resources for humans (food, medicine).", working: "\\text{resources}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Intrinsic value of species.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Method 1: protected areas.", working: "\\text{protected areas}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method 2: sustainable practices.", working: "\\text{sustainable fishing/farming}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State methods.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Meet needs without compromising future.", working: "\\text{future needs}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Resources used at replenishment rate.", working: "\\text{replenishment}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) biodiversity, resources, intrinsic value (b) protected areas, sustainable use (c) meet needs without compromising future",
            commonErrors: ["In (c) saying 'use everything now' — that's the opposite of sustainable."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u11-human-influences-notes",
      title: "Human influences and conservation — revision notes",
      summary: "Environmental impacts, conservation methods, sustainability.",
      sections: [
        {
          heading: "Impacts",
          body: "Deforestation → habitat loss/erosion. Eutrophication → nutrients → algae → O₂ depletion. Greenhouse gases → warming → sea level rise. Acid rain → SO₂.",
        },
        {
          heading: "Conservation",
          body: "Protected areas, sustainable fishing (quotas, mesh size), reforestation, captive breeding, organic farming, renewable energy.",
        },
        {
          heading: "Exam technique",
          body: "- 'Sustainable' = meet present needs without compromising future.\n- Eutrophication chain: fertiliser → algae → decomposition → O₂ depletion → fish die.\n- Greenhouse gases: CO₂, methane — trap heat → global warming.",
        },
      ],
    },
  ],
};
