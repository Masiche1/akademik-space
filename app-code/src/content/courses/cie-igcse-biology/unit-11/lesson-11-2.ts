import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cieb-u11-lesson-11-2",
  code: "11-2",
  title: "Human Influences and Conservation",
  goal: "I CAN describe human impacts on the environment and methods of conservation and sustainable management.",
  standards: ["0653 11.3"],
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
      id: "cieb-u11-human-impacts",
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
          id: "cieb-u11-human-impacts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes eutrophication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oil spills" },
              { id: "b", text: "Acid rain" },
              { id: "c", text: "Deforestation" },
              { id: "d", text: "Excess nutrients (nitrates/phosphates) in water" },
            ],
            correctChoiceId: "d",
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
          id: "cieb-u11-human-impacts-q2",
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
          id: "cieb-u11-human-impacts-q3",
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
          id: "cieb-u11-human-impacts-q4",
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
          id: "cieb-u11-human-impacts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is mainly responsible for acid rain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Helium" },
              { id: "b", text: "Nitrogen" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Sulphur dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain gases", statement: "SO₂ and NOₓ from fossil fuel burning form acids in rain." },
            ],
            steps: [
              { reasoning: "Recall the main gas.", working: "SO_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sulphur dioxide",
            commonErrors: ["Choosing CO₂ — that is a greenhouse gas, not the main acid rain gas."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The greenhouse effect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Release of oxygen by plants" },
              { id: "b", text: "Trapping of heat by gases in the atmosphere" },
              { id: "c", text: "Burning of fossil fuels" },
              { id: "d", text: "The hole in the ozone layer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Greenhouse effect", statement: "Greenhouse gases trap outgoing heat → warming." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{heat trapped}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Trapping of heat by gases in the atmosphere",
            commonErrors: ["Confusing with the ozone hole — different atmospheric issue."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which human activity contributes most directly to increased carbon dioxide levels?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Planting trees" },
              { id: "b", text: "Burning fossil fuels" },
              { id: "c", text: "Using public transport" },
              { id: "d", text: "Recycling paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "CO₂ sources", statement: "Fossil fuel combustion releases stored carbon as CO₂." },
            ],
            steps: [
              { reasoning: "Identify the major CO₂ source.", working: "\\text{fossil fuels}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Burning fossil fuels",
            commonErrors: ["Choosing planting trees — trees absorb CO₂."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two effects of deforestation on the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Deforestation", statement: "Habitat loss, soil erosion, increased CO₂." },
            ],
            steps: [
              { reasoning: "Give two valid effects.", working: "\\text{habitat loss, erosion, CO}_2", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loss of habitat/biodiversity and increased soil erosion (also: more CO₂ released, less CO₂ absorbed).",
            commonErrors: ["Only mentioning 'fewer trees' without environmental consequences."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how deforestation contributes to global warming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Deforestation & climate", statement: "Fewer trees → less CO₂ absorbed; burning trees releases CO₂ and stored carbon." },
            ],
            steps: [
              { reasoning: "Trees absorb CO₂ by photosynthesis.", working: "\\text{CO}_2 \\text{ absorption}", marks: 1, markCode: "M" },
              { reasoning: "Fewer trees → less CO₂ removed from atmosphere.", working: "\\text{less uptake}", marks: 1, markCode: "M" },
              { reasoning: "Clearing/burning trees releases stored carbon as CO₂.", working: "\\text{CO}_2 \\text{ released}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: more greenhouse gases → warming.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Trees absorb CO₂ via photosynthesis; deforestation removes this sink and burning vegetation releases stored carbon as CO₂, increasing atmospheric greenhouse gases and global warming.",
            commonErrors: ["Only stating 'deforestation causes warming' without the CO₂ mechanism."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Eutrophication begins when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water temperature falls" },
              { id: "b", text: "Excess nitrate/phosphate enters the water" },
              { id: "c", text: "The lake dries up completely" },
              { id: "d", text: "Fish begin to reproduce rapidly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Eutrophication", statement: "Triggered by nutrient enrichment (nitrates/phosphates)." },
            ],
            steps: [
              { reasoning: "Recall the trigger.", working: "\\text{nutrient enrichment}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Excess nitrate/phosphate enters the water",
            commonErrors: ["Choosing (b) — eutrophication starts with nutrients, not fish reproduction."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Acid rain has a pH of about 4, while clean rain has a pH of about 6. Given that each pH unit represents a tenfold difference in H⁺ concentration, calculate how many times more acidic the acid rain is.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "times" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Each pH unit = 10× difference in H⁺ concentration." },
            ],
            steps: [
              { reasoning: "Find pH difference then apply tenfold rule.", working: "6 - 4 = 2 \\text{ units} \\to 10^2 = 100", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "100 \\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 times",
            commonErrors: ["Answering 2 — must apply the tenfold rule per unit, not just subtract."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways in which acid rain damages the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Acid rain effects", statement: "Acidifies water/soil, damages leaves, corrodes buildings." },
            ],
            steps: [
              { reasoning: "Give two valid effects.", working: "\\text{acidify water, damage leaves, corrode stone}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It acidifies lakes and rivers killing aquatic life, damages plant leaves reducing photosynthesis, and corrodes limestone buildings.",
            commonErrors: ["Confusing acid rain with eutrophication effects."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a consequence of global warming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduced extreme weather" },
              { id: "b", text: "Sea level rise" },
              { id: "c", text: "Decreased flooding" },
              { id: "d", text: "Colder average temperatures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Global warming", statement: "Ice melt → sea level rise; extreme weather increases." },
            ],
            steps: [
              { reasoning: "Recall a consequence.", working: "\\text{sea level rise}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sea level rise",
            commonErrors: ["Choosing (c) — global warming means warmer, not colder."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two ways in which human activities reduce biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Biodiversity loss", statement: "Habitat destruction and pollution reduce species variety." },
            ],
            steps: [
              { reasoning: "Way 1: habitat destruction (deforestation, development).", working: "\\text{habitat loss}", marks: 1, markCode: "M" },
              { reasoning: "Develop way 1.", working: "\\text{species lose homes}", marks: 1, markCode: "M" },
              { reasoning: "Way 2: pollution (eutrophication, pesticides, acid rain).", working: "\\text{pollution}", marks: 1, markCode: "M" },
              { reasoning: "Develop way 2 and conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deforestation and land development destroy habitats so species lose their homes; pollution such as fertiliser runoff (eutrophication) and pesticides kills organisms directly — both reduce the variety of life.",
            commonErrors: ["Listing human activities without linking to biodiversity loss."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A power station emits 250 tonnes of CO₂ per day. Calculate the mass emitted in one week (7 days).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1750, unit: "tonnes" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate × time", statement: "$250 \\times 7 = 1750 \\text{ tonnes}$" },
            ],
            steps: [
              { reasoning: "Multiply daily emission by days.", working: "250 \\times 7 = 1750", marks: 1, markCode: "M" },
            ],
            finalAnswer: "1750 tonnes",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "cieb-u11-human-impacts-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Acidified soil has a pH of 4.5, while unpolluted soil has a pH of 7.0. Calculate the difference in pH between the two soils.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "pH" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH difference", statement: "$7.0 - 4.5 = 2.5$" },
            ],
            steps: [
              { reasoning: "Subtract the two pH values.", working: "7.0 - 4.5 = 2.5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "2.5 \\text{ pH units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5 pH units",
            commonErrors: ["Subtracting in the wrong order and giving a negative value."],
          },
        },
      ],
    },
    {
      id: "cieb-u11-conservation",
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
          id: "cieb-u11-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is sustainable fishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using dynamite" },
              { id: "b", text: "Fishing only in rivers" },
              { id: "c", text: "Fishing at levels allowing stocks to replenish" },
              { id: "d", text: "Catching as many fish as possible" },
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
            finalAnswer: "**(a)** Fishing at levels allowing stocks to replenish",
            commonErrors: ["Choosing 'catch as many as possible' — that's overfishing."],
          },
        },
        {
          id: "cieb-u11-conservation-q2",
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
          id: "cieb-u11-conservation-q3",
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
          id: "cieb-u11-conservation-q4",
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
          id: "cieb-u11-conservation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sustainable development means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meeting present needs without compromising future generations" },
              { id: "b", text: "Stopping all farming and fishing" },
              { id: "c", text: "Using all resources as fast as possible" },
              { id: "d", text: "Only protecting rare species" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable development", statement: "Meet present needs without compromising future ability." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{present + future}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Meeting present needs without compromising future generations",
            commonErrors: ["Choosing (b) — that is exploitation, the opposite of sustainable."],
          },
        },
        {
          id: "cieb-u11-conservation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of a conservation method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overfishing" },
              { id: "b", text: "Creating protected areas / national parks" },
              { id: "c", text: "Clear-cutting forests" },
              { id: "d", text: "Dumping waste in rivers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Conservation", statement: "Protected areas, reforestation, sustainable fishing, captive breeding." },
            ],
            steps: [
              { reasoning: "Identify the conservation method.", working: "\\text{protected areas}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Creating protected areas / national parks",
            commonErrors: ["Choosing overfishing or clear-cutting — those destroy resources."],
          },
        },
        {
          id: "cieb-u11-conservation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is biodiversity important for an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is only important for rare species" },
              { id: "b", text: "It prevents all disease" },
              { id: "c", text: "It makes the ecosystem look colourful" },
              { id: "d", text: "It maintains ecosystem stability and provides resources" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biodiversity", statement: "Maintains stability, provides resources (food, medicine), intrinsic value." },
            ],
            steps: [
              { reasoning: "Recall the importance.", working: "\\text{stability + resources}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It maintains ecosystem stability and provides resources",
            commonErrors: ["Choosing (d) — biodiversity value applies to all species, not just rare ones."],
          },
        },
        {
          id: "cieb-u11-conservation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two methods used in sustainable fishing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sustainable fishing", statement: "Quotas, minimum mesh size, closed seasons." },
            ],
            steps: [
              { reasoning: "Give two valid methods.", working: "\\text{quotas, mesh size, closed seasons}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Setting catch quotas and using minimum mesh sizes so young fish escape (also: closed seasons during breeding).",
            commonErrors: ["Saying 'fish less' without specific management methods."],
          },
        },
        {
          id: "cieb-u11-conservation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fish population is 8000 individuals. A sustainable fishery allows a catch of 10% of the population per year. Calculate the maximum sustainable catch.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 800, unit: "fish" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$10\\% \\times 8000 = 800$" },
            ],
            steps: [
              { reasoning: "Calculate 10% of the population.", working: "0.1 \\times 8000 = 800", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "800 \\text{ fish}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "800 fish",
            commonErrors: ["Taking 10% incorrectly — 8000 × 0.10 = 800, not 80."],
          },
        },
        {
          id: "cieb-u11-conservation-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how protected areas help conserve biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Protected areas", statement: "Preserve habitat, allow breeding, reduce human disturbance." },
            ],
            steps: [
              { reasoning: "Habitats are preserved from destruction.", working: "\\text{habitat preserved}", marks: 1, markCode: "M" },
              { reasoning: "Species can breed and populations recover.", working: "\\text{breeding}", marks: 1, markCode: "M" },
              { reasoning: "Reduced pollution/hunting/logging pressure.", working: "\\text{less disturbance}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: biodiversity maintained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protected areas preserve habitats from destruction, let species breed and populations recover, and reduce pollution, hunting and logging — maintaining biodiversity.",
            commonErrors: ["Saying protected areas 'keep animals in cages' — they protect wild habitats."],
          },
        },
        {
          id: "cieb-u11-conservation-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which practice is NOT sustainable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Setting fishing quotas" },
              { id: "b", text: "Clear-cutting an entire forest every year" },
              { id: "c", text: "Replanting trees after logging" },
              { id: "d", text: "Using minimum mesh sizes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Unsustainable practice", statement: "Clear-cutting removes habitat faster than it can recover." },
            ],
            steps: [
              { reasoning: "Identify the unsustainable option.", working: "\\text{clear-cutting}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Clear-cutting an entire forest every year",
            commonErrors: ["Choosing (b), (c) or (d) — those are sustainable practices."],
          },
        },
        {
          id: "cieb-u11-conservation-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two benefits of organic farming for the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Organic farming", statement: "No synthetic chemicals → less pollution; promotes biodiversity." },
            ],
            steps: [
              { reasoning: "Give two valid benefits.", working: "\\text{less pollution, biodiversity}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It avoids synthetic fertilisers and pesticides so there is less water pollution, and it supports greater biodiversity in fields.",
            commonErrors: ["Saying organic farming always gives higher yields — the benefit is environmental."],
          },
        },
        {
          id: "cieb-u11-conservation-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a captive breeding programme, 20 breeding pairs produce 60 offspring. If 75% survive to adulthood, calculate how many offspring survive.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 45, unit: "offspring" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$75\\% \\times 60 = 45$" },
            ],
            steps: [
              { reasoning: "Calculate 75% of 60.", working: "0.75 \\times 60 = 45", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "45 \\text{ offspring}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45 offspring",
            commonErrors: ["Calculating 75% of 20 (the pairs) instead of 60 (the offspring)."],
          },
        },
        {
          id: "cieb-u11-conservation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sustainable management of resources is better than completely banning their use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sustainable management", statement: "Balances human needs with long-term resource availability." },
            ],
            steps: [
              { reasoning: "People still need resources (food, wood, fish).", working: "\\text{human needs}", marks: 1, markCode: "M" },
              { reasoning: "Bans are often ignored or cause hardship.", working: "\\text{bans impractical}", marks: 1, markCode: "M" },
              { reasoning: "Sustainable use allows harvest at replenishment rate.", working: "\\text{replenishment rate}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: resources last for future generations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "People depend on resources for food and materials, so total bans are impractical and often ignored. Sustainable management allows use at the rate resources replenish, meeting present needs while preserving supplies for the future.",
            commonErrors: ["Saying conservation means 'never use' — it means use sustainably."],
          },
        },
        {
          id: "cieb-u11-conservation-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Petrol" },
              { id: "b", text: "Natural gas" },
              { id: "c", text: "Coal" },
              { id: "d", text: "Wind power" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Renewable energy", statement: "Wind, solar, hydro — naturally replenished; fossil fuels are not." },
            ],
            steps: [
              { reasoning: "Identify the renewable source.", working: "\\text{wind}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Wind power",
            commonErrors: ["Choosing coal/gas/petrol — those are finite fossil fuels."],
          },
        },
        {
          id: "cieb-u11-conservation-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reforestation project plants 200 trees per hectare on 5 hectares. If 80% of the trees survive, calculate how many trees survive.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 800, unit: "trees" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$200 \\times 5 = 1000 \\text{ planted}; \\ 0.8 \\times 1000 = 800$" },
            ],
            steps: [
              { reasoning: "Find total planted then apply survival rate.", working: "200 \\times 5 \\times 0.8 = 800", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "800 \\text{ trees}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "800 trees",
            commonErrors: ["Calculating 80% of 200 only — must include all 5 hectares."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u11-human-influences-notes",
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
