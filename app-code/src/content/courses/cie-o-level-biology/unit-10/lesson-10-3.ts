import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "olbio-u10-lesson-10-3",
  code: "10-3",
  title: "Ecology: Pyramids, Food Webs and Sampling",
  goal: "I CAN draw and interpret ecological pyramids, describe food webs, population growth curves, and quadrat sampling.",
  standards: ["5090 10.2"],
  vocabulary: [
    { term: "Pyramid of numbers", definition: "Number of organisms at each trophic level." },
    { term: "Pyramid of biomass", definition: "Dry mass of organisms at each trophic level." },
    { term: "Pyramid of energy", definition: "Energy available at each trophic level; always pyramid-shaped." },
    { term: "Food web", definition: "Interconnected food chains showing feeding relationships." },
    { term: "Population growth curve", definition: "Graph of population size vs time — lag, log, stationary phases." },
    { term: "Carrying capacity", definition: "Maximum population size an environment can sustain." },
    { term: "Quadrat", definition: "Square frame used to sample organisms in an area." },
    { term: "Abiotic factor", definition: "Non-living environmental factor (light, temperature, pH, water)." },
    { term: "Biotic factor", definition: "Living factor affecting a population (competition, predation, disease)." },
    { term: "Limiting factor", definition: "Environmental factor that limits population size when in short supply." },
  ],
  concepts: [
    {
      id: "olbio-u10-pyramids",
      title: "Ecological pyramids and food webs",
      skill: "Draw and interpret pyramids of numbers, biomass and energy, and describe food webs.",
      lesson: {
        sections: [
          {
            heading: "Three types of pyramid",
            body: "| Type | Shows | Shape |\n|---|---|---|\n| Numbers | count of organisms | can be inverted (one tree → many insects) |\n| Biomass | dry mass per level | usually pyramid, can invert |\n| Energy | energy transferred per level | always pyramid (~10% each level) |",
          },
          {
            heading: "Why energy pyramid is always pyramid-shaped",
            body: "Only ~10% of energy transfers between trophic levels — rest lost as heat, used in respiration, excreted. So each higher level has less energy → always narrower.",
          },
          {
            heading: "Food webs",
            body: "Multiple interconnected food chains — more realistic than single chains because organisms eat many things and are eaten by many. Shows stability: if one food source removed, alternatives exist.",
          },
        ],
        keyFormulas: [
          { name: "Energy transfer", statement: "$\\text{energy transfer} \\approx 10\\%$" },
        ],
        workedExample: {
          problem: "Why can a pyramid of numbers be inverted while a pyramid of energy cannot?",
          solution: "Numbers can invert (one tree supports many insects). Energy cannot invert because energy always decreases up the chain (~10% transfer) — more organisms at a higher level would need more energy than available.",
        },
      },
      questions: [
        {
          id: "olbio-u10-pyramids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pyramid is always pyramid-shaped?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pyramid of energy" },
              { id: "b", text: "Pyramid of numbers" },
              { id: "c", text: "Pyramid of biomass" },
              { id: "d", text: "All can be inverted" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pyramids", statement: "Energy always decreases upward (~10%); numbers/biomass can invert." },
            ],
            steps: [
              { reasoning: "Recall which can't invert.", working: "\\text{energy}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pyramid of energy",
            commonErrors: ["Choosing numbers — one tree can support many insects (inverted)."],
          },
        },
        {
          id: "olbio-u10-pyramids-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is only about 10% of energy transferred between trophic levels?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy transfer", statement: "~10% transfer; rest lost as heat, respiration, excretion." },
            ],
            steps: [
              { reasoning: "Most energy lost as heat.", working: "\\text{heat loss}", marks: 1, markCode: "M" },
              { reasoning: "Used in respiration/metabolism, excreted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Most energy is lost as heat through respiration, used for metabolic processes, and excreted — only ~10% is incorporated into biomass available to the next trophic level.",
            commonErrors: ["Saying 'organisms are inefficient' without explaining where energy goes."],
          },
        },
        {
          id: "olbio-u10-pyramids-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a food web is more realistic than a food chain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food webs", statement: "Real feeding relationships are interconnected, not linear." },
            ],
            steps: [
              { reasoning: "Organisms eat many different things.", working: "\\text{many food sources}", marks: 1, markCode: "M" },
              { reasoning: "Organisms are eaten by many predators.", working: "\\text{many predators}", marks: 1, markCode: "M" },
              { reasoning: "Shows stability — alternatives if one source lost.", marks: 1, markCode: "M" },
              { reasoning: "Conclude: more realistic model.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A food web shows interconnected feeding relationships — organisms eat many things and are eaten by many — giving a more realistic and stable picture than a single linear chain.",
            commonErrors: ["Only saying 'it has more arrows' — explain the ecological meaning."],
          },
        },
        {
          id: "olbio-u10-pyramids-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the three types of ecological pyramid.",
          parts: [
            { label: "a", prompt: "State what each pyramid measures.", marks: 3 },
            { label: "b", prompt: "Explain why the energy pyramid is always pyramid-shaped.", marks: 3 },
            { label: "c", prompt: "Give an example where numbers pyramid inverts.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ecological pyramids", statement: "Numbers count, biomass mass, energy always decreases upward." },
            ],
            steps: [
              { part: "a", reasoning: "Numbers = count of organisms.", working: "\\text{count}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Biomass = dry mass.", working: "\\text{dry mass}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Energy = energy per level.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "~10% energy transfer between levels.", working: "10\\%", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rest lost as heat/respiration/excretion.", working: "\\text{losses}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude: always decreases upward.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Example: one tree → many insects → few birds.", working: "\\text{tree/insects}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Numbers increase then decrease → inverted.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) numbers=count, biomass=dry mass, energy=energy per level (b) ~10% transfer, rest lost (c) tree→insects→birds inverted",
            commonErrors: ["In (c) using a normal pyramid example — need inversion."],
          },
        },
      ],
    },
    {
      id: "olbio-u10-population-sampling",
      title: "Population growth and quadrat sampling",
      skill: "Describe population growth curves, limiting factors, and quadrat sampling methods.",
      lesson: {
        sections: [
          {
            heading: "Population growth curve",
            body: "| Phase | Description |\n|---|---|\n| Lag | slow growth, adaptation |\n| Log (exponential) | rapid growth, resources abundant |\n| Stationary | growth slows at carrying capacity |\n| Death (optional) | decline if resources exhausted |",
          },
          {
            heading: "Limiting factors",
            body: "- **Abiotic**: light, temperature, water, pH, space.\n- **Biotic**: competition, predation, disease, food availability.\n- Population limited by whichever factor is in shortest supply.",
          },
          {
            heading: "Quadrat sampling",
            body: "Square frame placed randomly in habitat → count organisms within → repeat several times → calculate **percentage cover** or **frequency**. Used for plants, slow-moving animals, sessile organisms.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A quadrat covers 1 m² and contains 12 daisies. What percentage cover would be estimated if the quadrat was divided into 100 squares and daisies covered 15?",
          solution: "15/100 × 100 = 15% cover.",
        },
      },
      questions: [
        {
          id: "olbio-u10-population-sampling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the carrying capacity of an environment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum population size the environment can sustain" },
              { id: "b", text: "Rate of population growth" },
              { id: "c", text: "Number of species present" },
              { id: "d", text: "Total biomass of producers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carrying capacity", statement: "Max sustainable population." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{max population}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Maximum population size the environment can sustain",
            commonErrors: ["Confusing with population size — it's the limit."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three phases of a population growth curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Growth phases", statement: "Lag → log (exponential) → stationary." },
            ],
            steps: [
              { reasoning: "Lag phase.", working: "\\text{lag}", marks: 1, markCode: "M" },
              { reasoning: "Log and stationary phases.", working: "\\text{log + stationary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lag phase, logarithmic/exponential phase, stationary phase.",
            commonErrors: ["Missing 'stationary' — it's where growth levels at carrying capacity."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish abiotic from biotic limiting factors with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Limiting factors", statement: "Abiotic = non-living; biotic = living." },
            ],
            steps: [
              { reasoning: "Define abiotic.", working: "\\text{non-living}", marks: 1, markCode: "M" },
              { reasoning: "Abiotic examples: light, temp, water.", marks: 1, markCode: "M" },
              { reasoning: "Define biotic.", working: "\\text{living}", marks: 1, markCode: "M" },
              { reasoning: "Biotic examples: competition, predation, disease.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Abiotic factors are non-living (light, temperature, water, pH); biotic factors are living (competition, predation, disease, food availability).",
            commonErrors: ["Mixing categories — 'food' is biotic but 'water' is abiotic."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how quadrat sampling is used in ecology.",
          parts: [
            { label: "a", prompt: "State what a quadrat is and how it is used.", marks: 2 },
            { label: "b", prompt: "Explain why quadrats are placed randomly.", marks: 3 },
            { label: "c", prompt: "Describe how results can be used to estimate population or distribution.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Quadrat sampling", statement: "Random placement → count/cover → estimate population or distribution." },
            ],
            steps: [
              { part: "a", reasoning: "Square frame for sampling.", working: "\\text{frame}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Count organisms or estimate cover.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Random avoids bias.", working: "\\text{unbiased}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Representative of whole area.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Calculate frequency or percentage cover.", working: "\\text{frequency/cover}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Repeat several times for reliability.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Estimate population size by scaling up.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) square frame, count/cover (b) random = unbiased, representative (c) frequency/cover → estimate population/distribution",
            commonErrors: ["In (b) saying 'to cover more area' — it's about avoiding bias."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u10-ecology-extended-notes",
      title: "Ecology: pyramids, food webs, sampling — revision notes",
      summary: "Ecological pyramids, food webs, population growth, quadrat sampling.",
      sections: [
        {
          heading: "Pyramids",
          body: "Numbers (count, can invert), biomass (dry mass, usually pyramid), energy (always pyramid, ~10% transfer). Food webs = interconnected chains → more realistic/stable.",
        },
        {
          heading: "Population & sampling",
          body: "Growth curve: lag → log → stationary (carrying capacity). Limiting factors: abiotic (light/temp/water) vs biotic (competition/predation). Quadrat sampling: random square frame → count/cover → estimate.",
        },
        {
          heading: "Exam technique",
          body: "- Energy pyramid always narrows upward (~10% rule).\n- Quadrat sampling: always 'random' placement for unbiased results.",
        },
      ],
    },
  ],
};
