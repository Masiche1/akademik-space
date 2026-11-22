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
              { id: "a", text: "Oil spills" },
              { id: "b", text: "Acid rain" },
              { id: "c", text: "Excess nutrients (nitrates/phosphates) in water" },
              { id: "d", text: "Deforestation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Eutrophication", statement: "Nutrient overload → algal bloom → O₂ depletion." },
            ],
            steps: [
              { reasoning: "Recall the cause.", working: "\\text{nitrates/phosphates}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Excess nutrients (nitrates/phosphates) in water",
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
        {
          id: "olbio-u11-human-impacts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which are greenhouse gases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and nitrogen" },
              { id: "b", text: "Helium and argon" },
              { id: "c", text: "Carbon dioxide and methane" },
              { id: "d", text: "Hydrogen and ozone only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Greenhouse gases", statement: "CO₂ and methane trap heat in the atmosphere." },
            ],
            steps: [
              { reasoning: "Recall common greenhouse gases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbon dioxide and methane",
            commonErrors: ["Choosing oxygen/nitrogen — they are not greenhouse gases."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sequence describes eutrophication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fish die → algae grow → nutrients disappear" },
              { id: "b", text: "Acid rain → algae bloom → oxygen rises" },
              { id: "c", text: "Nutrients → algal bloom → decomposition uses oxygen → fish die" },
              { id: "d", text: "Oxygen rises → plants die → nutrients fall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Eutrophication", statement: "Nutrient overload causes algal bloom, deoxygenation and fish deaths." },
            ],
            steps: [
              { reasoning: "Recall the causal chain.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Nutrients → algal bloom → decomposition uses oxygen → fish die",
            commonErrors: ["Reversing the sequence — oxygen falls after decomposition."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a disadvantage of monoculture farming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It always increases biodiversity" },
              { id: "b", text: "It prevents soil erosion" },
              { id: "c", text: "It reduces biodiversity and can increase pest problems" },
              { id: "d", text: "It uses no fertiliser" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Monoculture", statement: "One crop reduces biodiversity and can increase vulnerability to pests/disease." },
            ],
            steps: [
              { reasoning: "Recall the ecological drawback.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It reduces biodiversity and can increase pest problems",
            commonErrors: ["Thinking monoculture is always beneficial."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How is acid rain formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂ dissolves in rain only" },
              { id: "b", text: "Oxygen combines with rain" },
              { id: "c", text: "Plants release acid gases" },
              { id: "d", text: "SO₂ and NOₓ react with water vapour to form acids" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain formation", statement: "SO₂/NOₓ + water vapour → sulphuric/nitric acid." },
            ],
            steps: [
              { reasoning: "Recall the formation steps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** SO₂ and NOₓ react with water vapour to form acids",
            commonErrors: ["Naming only CO₂ — that is mainly greenhouse gas."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is pollution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Movement of animals" },
              { id: "b", text: "Contamination of air, water or soil by harmful substances" },
              { id: "c", text: "Growth of a population" },
              { id: "d", text: "The natural cycling of nutrients" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pollution", statement: "Harmful contamination of air, water or soil." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Contamination of air, water or soil by harmful substances",
            commonErrors: ["Confusing pollution with natural nutrient cycling."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fertiliser runoff contains 300 kg of nitrate and 20% reaches a lake. Calculate the mass entering the lake.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of mass", statement: "Mass reaching lake = total × percentage." },
            ],
            steps: [
              { reasoning: "Calculate 20% of 300 kg.", working: "300 × 0.20 = 60", marks: 1, markCode: "M" },
            ],
            finalAnswer: "60 kg",
            commonErrors: ["Using 300/20 — the percentage is multiplied."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country emits 5000 tonnes of CO₂ and aims to cut emissions by 10%. Calculate the reduction target.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 500, unit: "tonnes" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage reduction", statement: "Reduction = emissions × percentage." },
            ],
            steps: [
              { reasoning: "Calculate 10% of 5000 tonnes.", working: "5000 × 0.10 = 500", marks: 1, markCode: "M" },
            ],
            finalAnswer: "500 tonnes",
            commonErrors: ["Answering 5000 — that is total emissions, not the cut."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Normal rain has pH 5.6 and acid rain has pH 4.6. Calculate the difference in pH.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1, unit: "pH units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH difference", statement: "Difference = normal pH − acid rain pH." },
            ],
            steps: [
              { reasoning: "Subtract the pH values.", working: "5.6 - 4.6 = 1.0", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1.0 pH units",
            commonErrors: ["Remembering pH is logarithmic — a 1 unit difference is a tenfold change in acidity."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A forest covers 10 000 hectares and 15% is cleared. Calculate the area cleared.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1500, unit: "hectares" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of area", statement: "Cleared area = total × percentage." },
            ],
            steps: [
              { reasoning: "Calculate 15% of 10000 ha.", working: "10000 × 0.15 = 1500", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1500 hectares",
            commonErrors: ["Answering 15 hectares — that is 0.15%."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A lake has dissolved oxygen of 8.0 mg/L and algal decomposition lowers it by 2.5 mg/L. Calculate the oxygen remaining.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5.5, unit: "mg/L" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Oxygen remaining", statement: "Remaining = initial − decrease." },
            ],
            steps: [
              { reasoning: "Subtract the oxygen loss.", working: "8.0 - 2.5 = 5.5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "5.5 mg/L",
            commonErrors: ["Adding the decrease instead of subtracting."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which activity is a major source of sulphur dioxide pollution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using solar panels" },
              { id: "b", text: "Composting waste" },
              { id: "c", text: "Burning fossil fuels" },
              { id: "d", text: "Planting trees" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "SO₂ source", statement: "Fossil fuel combustion releases SO₂ that forms acid rain." },
            ],
            steps: [
              { reasoning: "Recall the source of SO₂.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Burning fossil fuels",
            commonErrors: ["Choosing renewable energy — it reduces emissions."],
          },
        },
        {
          id: "olbio-u11-human-impacts-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how fertiliser runoff can lead to the death of fish in a lake.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Eutrophication", statement: "Nutrients → algal bloom → decomposition → oxygen depletion → fish deaths." },
            ],
            steps: [
              { reasoning: "Nitrates/phosphates enter the water from fertiliser.", working: "\\text{nutrient runoff}", marks: 1, markCode: "M" },
              { reasoning: "Nutrients cause an algal bloom.", working: "\\text{algal bloom}", marks: 1, markCode: "M" },
              { reasoning: "Decomposers break down algae and use dissolved oxygen.", working: "\\text{decomposition}", marks: 1, markCode: "M" },
              { reasoning: "Oxygen falls and fish die from suffocation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fertiliser runoff adds nitrates/phosphates; these cause an algal bloom; decomposers consume oxygen breaking down the algae; dissolved oxygen falls and fish suffocate.",
            commonErrors: ["Stopping at algal bloom — must link to oxygen depletion and fish death."],
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
              { id: "a", text: "Catching as many fish as possible" },
              { id: "b", text: "Using dynamite" },
              { id: "c", text: "Fishing at levels allowing stocks to replenish" },
              { id: "d", text: "Fishing only in rivers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable fishing", statement: "Catch rates below reproduction rate." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{replenish stocks}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Fishing at levels allowing stocks to replenish",
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
        {
          id: "olbio-u11-conservation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a method of sustainable fishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fishing only at night" },
              { id: "b", text: "Setting quotas, minimum mesh sizes and closed seasons" },
              { id: "c", text: "Ignoring stock levels" },
              { id: "d", text: "Using very small mesh nets" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sustainable fishing", statement: "Quotas, mesh limits and closed seasons let stocks replenish." },
            ],
            steps: [
              { reasoning: "Recall sustainable measures.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Setting quotas, minimum mesh sizes and closed seasons",
            commonErrors: ["Choosing small mesh — that catches juveniles and is unsustainable."],
          },
        },
        {
          id: "olbio-u11-conservation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a protected area such as a national park?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To store waste" },
              { id: "b", text: "To conserve habitats and biodiversity" },
              { id: "c", text: "To allow unlimited farming" },
              { id: "d", text: "To build factories" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Protected areas", statement: "They conserve habitats and protect species." },
            ],
            steps: [
              { reasoning: "Recall the conservation purpose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To conserve habitats and biodiversity",
            commonErrors: ["Thinking protected areas are for development."],
          },
        },
        {
          id: "olbio-u11-conservation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are captive breeding programmes used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make animals live longer in zoos only" },
              { id: "b", text: "To increase the number of endangered species for release" },
              { id: "c", text: "To produce food faster" },
              { id: "d", text: "To breed pets" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Captive breeding", statement: "Breeding endangered species can produce individuals for release." },
            ],
            steps: [
              { reasoning: "Recall the conservation aim.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To increase the number of endangered species for release",
            commonErrors: ["Thinking captive breeding is only for display."],
          },
        },
        {
          id: "olbio-u11-conservation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an advantage of organic farming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It avoids synthetic chemicals, reducing pollution" },
              { id: "b", text: "It always gives higher yields" },
              { id: "c", text: "It uses more synthetic chemicals" },
              { id: "d", text: "It removes the need for soil" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Organic farming", statement: "Organic methods avoid synthetic chemicals and reduce pollution." },
            ],
            steps: [
              { reasoning: "Recall the environmental benefit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It avoids synthetic chemicals, reducing pollution",
            commonErrors: ["Claiming always higher yield — organic can be lower yielding."],
          },
        },
        {
          id: "olbio-u11-conservation-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does renewable energy help conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It removes the need for energy" },
              { id: "b", text: "It increases deforestation" },
              { id: "c", text: "It reduces reliance on fossil fuels and lowers emissions" },
              { id: "d", text: "It increases fossil fuel burning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Renewable energy", statement: "Solar/wind reduce fossil fuel use and emissions." },
            ],
            steps: [
              { reasoning: "Recall the environmental benefit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It reduces reliance on fossil fuels and lowers emissions",
            commonErrors: ["Thinking renewable energy removes all energy demand."],
          },
        },
        {
          id: "olbio-u11-conservation-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fish stock can replenish 1000 tonnes per year but last year's catch was 1200 tonnes. Calculate the overshoot.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "tonnes" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stock overshoot", statement: "Overshoot = catch − sustainable yield." },
            ],
            steps: [
              { reasoning: "Subtract sustainable yield from catch.", working: "1200 - 1000 = 200", marks: 1, markCode: "M" },
            ],
            finalAnswer: "200 tonnes",
            commonErrors: ["Answering 1000 — that is the sustainable limit, not the overshoot."],
          },
        },
        {
          id: "olbio-u11-conservation-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A reserve covers 250 km² and 30% is strictly protected. Calculate the strictly protected area.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "km²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Protected area", statement: "Protected area = total × percentage." },
            ],
            steps: [
              { reasoning: "Calculate 30% of 250 km².", working: "250 × 0.30 = 75", marks: 1, markCode: "M" },
            ],
            finalAnswer: "75 km²",
            commonErrors: ["Using 250/30 — percentage is multiplied."],
          },
        },
        {
          id: "olbio-u11-conservation-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A forest loses 500 trees but 450 are replanted. Calculate the shortfall.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "trees" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Replanting shortfall", statement: "Shortfall = trees lost − trees replanted." },
            ],
            steps: [
              { reasoning: "Subtract replanted from lost.", working: "500 - 450 = 50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "50 trees",
            commonErrors: ["Answering 950 — that is total involved, not the shortfall."],
          },
        },
        {
          id: "olbio-u11-conservation-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A captive breeding programme releases 40 animals and 75% survive their first year. Calculate the number surviving.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "animals" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Survival", statement: "Survivors = released × survival percentage." },
            ],
            steps: [
              { reasoning: "Calculate 75% of 40.", working: "40 × 0.75 = 30", marks: 1, markCode: "M" },
            ],
            finalAnswer: "30 animals",
            commonErrors: ["Using 40/75 — the percentage is multiplied."],
          },
        },
        {
          id: "olbio-u11-conservation-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A village uses 1000 kWh of electricity and 400 kWh comes from solar power. Calculate the percentage from solar.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy percentage", statement: "Percentage = renewable / total × 100." },
            ],
            steps: [
              { reasoning: "Calculate the solar share.", working: "400/1000 × 100 = 40", marks: 1, markCode: "M" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Using total/renewable — renewable energy is the numerator."],
          },
        },
        {
          id: "olbio-u11-conservation-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'sustainable development' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meeting present needs without compromising future generations" },
              { id: "b", text: "Using all resources as fast as possible" },
              { id: "c", text: "Stopping all farming" },
              { id: "d", text: "Building more factories" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable development", statement: "Meet present needs while preserving resources for the future." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Meeting present needs without compromising future generations",
            commonErrors: ["Choosing 'use everything now' — that is unsustainable."],
          },
        },
        {
          id: "olbio-u11-conservation-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why conserving biodiversity is important for ecosystems and humans.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Biodiversity value", statement: "Biodiversity supports ecosystem stability and provides resources." },
            ],
            steps: [
              { reasoning: "Biodiversity maintains ecosystem stability and resilience.", working: "\\text{stability}", marks: 1, markCode: "M" },
              { reasoning: "It provides resources such as food, medicine and materials.", working: "\\text{resources}", marks: 1, markCode: "M" },
              { reasoning: "It has intrinsic value for future generations.", working: "\\text{intrinsic value}", marks: 1, markCode: "M" },
              { reasoning: "Conclude conservation protects both ecosystems and human needs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Biodiversity keeps ecosystems stable and resilient, provides food, medicine and materials, and has intrinsic value — so conserving it protects both the environment and future human needs.",
            commonErrors: ["Listing only human benefits — include ecosystem stability too."],
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
