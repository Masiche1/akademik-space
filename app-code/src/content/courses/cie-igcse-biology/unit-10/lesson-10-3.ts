import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "cieb-u10-lesson-10-3",
  code: "10-3",
  title: "Ecology: Pyramids, Food Webs and Sampling",
  goal: "I CAN draw and interpret ecological pyramids, describe food webs, population growth curves, and quadrat sampling.",
  standards: ["0653 10.2"],
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
      id: "cieb-u10-pyramids",
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
          id: "cieb-u10-pyramids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pyramid is always pyramid-shaped?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pyramid of energy" },
              { id: "b", text: "Pyramid of biomass" },
              { id: "c", text: "All can be inverted" },
              { id: "d", text: "Pyramid of numbers" },
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
          id: "cieb-u10-pyramids-q2",
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
          id: "cieb-u10-pyramids-q3",
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
          id: "cieb-u10-pyramids-q4",
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
        {
          id: "cieb-u10-pyramids-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pyramid of biomass shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of organisms at each level" },
              { id: "b", text: "The dry mass of organisms at each trophic level" },
              { id: "c", text: "The energy flow between levels" },
              { id: "d", text: "The feeding relationships" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pyramid of biomass", statement: "Dry mass per trophic level." },
            ],
            steps: [
              { reasoning: "Recall what biomass measures.", working: "\\text{dry mass}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The dry mass of organisms at each trophic level",
            commonErrors: ["Confusing biomass with numbers — biomass measures mass, not count."],
          },
        },
        {
          id: "cieb-u10-pyramids-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pyramid of numbers shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total dry mass at each level" },
              { id: "b", text: "The energy available at each level" },
              { id: "c", text: "The size of each organism" },
              { id: "d", text: "The number of individual organisms at each trophic level" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pyramid of numbers", statement: "Count of organisms per trophic level." },
            ],
            steps: [
              { reasoning: "Recall the measurement.", working: "\\text{count of organisms}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The number of individual organisms at each trophic level",
            commonErrors: ["Choosing biomass — that is dry mass, not count."],
          },
        },
        {
          id: "cieb-u10-pyramids-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why can a pyramid of numbers be inverted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Numbers never decrease upward" },
              { id: "b", text: "One large producer can support many small consumers" },
              { id: "c", text: "Organisms cannot reproduce" },
              { id: "d", text: "Energy always increases upward" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverted numbers pyramid", statement: "Few large organisms can support many small ones." },
            ],
            steps: [
              { reasoning: "Give the mechanism.", working: "\\text{one tree} \\to \\text{many insects}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** One large producer can support many small consumers",
            commonErrors: ["Applying the 10% energy rule to numbers — counts can invert even though energy cannot."],
          },
        },
        {
          id: "cieb-u10-pyramids-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pyramid can also be inverted, like the pyramid of numbers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pyramid of biomass" },
              { id: "b", text: "Both numbers and biomass pyramids" },
              { id: "c", text: "Pyramid of energy" },
              { id: "d", text: "No pyramid can be inverted" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pyramids", statement: "Numbers and biomass can invert; energy always decreases upward." },
            ],
            steps: [
              { reasoning: "Recall which pyramids invert.", working: "\\text{numbers + biomass invert}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Both numbers and biomass pyramids",
            commonErrors: ["Choosing energy — it always narrows upward due to ~10% transfer."],
          },
        },
        {
          id: "cieb-u10-pyramids-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which trophic level contains the MOST energy in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All levels have equal energy" },
              { id: "b", text: "Top predators" },
              { id: "c", text: "Producers" },
              { id: "d", text: "Decomposers only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy pyramid", statement: "Energy decreases upward; producers hold the most." },
            ],
            steps: [
              { reasoning: "Energy enters at producer level.", working: "\\text{producers} = \\text{max energy}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Producers",
            commonErrors: ["Choosing top predators — they receive the least energy."],
          },
        },
        {
          id: "cieb-u10-pyramids-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a population growth curve, the lag phase is when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The population begins to decline" },
              { id: "b", text: "Growth is fastest" },
              { id: "c", text: "Growth is slow while organisms adapt to the new environment" },
              { id: "d", text: "The population reaches carrying capacity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lag phase", statement: "Slow initial growth during adaptation." },
            ],
            steps: [
              { reasoning: "Recall the phase description.", working: "\\text{slow growth, adaptation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Growth is slow while organisms adapt to the new environment",
            commonErrors: ["Confusing lag with log phase — log is the rapid growth phase."],
          },
        },
        {
          id: "cieb-u10-pyramids-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Producers capture 40 000 units of energy. Using the 10% rule, calculate the energy reaching secondary consumers (two transfers up).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "$E_{n+1} = 0.1 \\times E_n$" },
            ],
            steps: [
              { reasoning: "Apply 0.1 twice.", working: "40000 \\times 0.1 \\times 0.1 = 400", marks: 1, markCode: "M" },
            ],
            finalAnswer: "400 units",
            commonErrors: ["Applying only one transfer — secondary consumers are two levels up."],
          },
        },
        {
          id: "cieb-u10-pyramids-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A biomass pyramid has producers at 600 kg, herbivores at 60 kg and carnivores at 6 kg. What percentage of producer biomass does the herbivore level represent?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\frac{60}{600} \\times 100 = 10\\%$" },
            ],
            steps: [
              { reasoning: "Compute the ratio.", working: "\\frac{60}{600} \\times 100 = 10", marks: 1, markCode: "M" },
            ],
            finalAnswer: "10%",
            commonErrors: ["Using 6/60 — the question compares herbivores to producers."],
          },
        },
        {
          id: "cieb-u10-pyramids-q13",
          difficulty: "core",
            totalMarks: 1,
          stem: "In an energy pyramid the first level has 100 000 units of energy. If each level receives 10%, calculate the energy at the second level.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10000, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "$100000 \\times 0.1 = 10000$" },
            ],
            steps: [
              { reasoning: "Take 10% of level one.", working: "100000 \\times 0.1 = 10000", marks: 1, markCode: "M" },
            ],
            finalAnswer: "10000 units",
            commonErrors: ["Taking 1% — the rule is 10%."],
          },
        },
        {
          id: "cieb-u10-pyramids-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Producers hold 200 000 units of energy and each transfer keeps 10%. Calculate the energy reaching the fourth trophic level (three transfers).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "$200000 \\times 0.1^{3} = 200$" },
            ],
            steps: [
              { reasoning: "Apply 0.1 three times.", working: "200000 \\times 0.001 = 200", marks: 1, markCode: "M" },
            ],
            finalAnswer: "200 units",
            commonErrors: ["Applying only two transfers — the fourth level is three steps above producers."],
          },
        },
        {
          id: "cieb-u10-pyramids-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the pyramid of energy is considered the most useful ecological pyramid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy pyramid", statement: "Always pyramid-shaped; reflects energy flow and limits chain length." },
            ],
            steps: [
              { reasoning: "Energy always decreases upward (~10% rule).", working: "10\\% \\text{ rule}", marks: 1, markCode: "M" },
              { reasoning: "Numbers/biomass can be inverted — energy cannot.", working: "\\text{cannot invert}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: it best represents ecosystem function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The energy pyramid always narrows upward because only ~10% of energy transfers between levels, so it cannot be inverted. It directly reflects the energy available to each trophic level and explains why food chains are short — making it the most reliable pyramid.",
            commonErrors: ["Only saying 'it is always pyramid-shaped' without explaining why that matters."],
          },
        },
        {
          id: "cieb-u10-pyramids-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the three types of ecological pyramid.",
          parts: [
            { label: "a", prompt: "Describe what each pyramid measures.", marks: 3 },
            { label: "b", prompt: "Explain which pyramids can be inverted and give an example.", marks: 3 },
            { label: "c", prompt: "Explain why the energy pyramid is always pyramid-shaped.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ecological pyramids", statement: "Numbers=count, biomass=dry mass, energy=always decreases upward." },
            ],
            steps: [
              { part: "a", reasoning: "Numbers: count of organisms.", working: "\\text{count}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Biomass: dry mass per level.", working: "\\text{dry mass}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Energy: energy available per level.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Numbers and biomass can invert.", working: "\\text{numbers/biomass invert}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: one tree supports many insects.", working: "\\text{tree/insects}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Energy cannot invert — it always decreases.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only ~10% energy transfers per level.", working: "10\\%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rest lost as heat/respiration/excretion.", working: "\\text{losses}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: always narrows upward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) numbers=count, biomass=dry mass, energy=energy per level (b) numbers & biomass invert e.g. tree→insects; energy cannot (c) ~10% transfer, rest lost → always narrows",
            commonErrors: ["In (b) claiming the energy pyramid can invert — it cannot."],
          },
        },
      ],
    },
    {
      id: "cieb-u10-population-sampling",
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
          id: "cieb-u10-population-sampling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the carrying capacity of an environment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of species present" },
              { id: "b", text: "Total biomass of producers" },
              { id: "c", text: "Maximum population size the environment can sustain" },
              { id: "d", text: "Rate of population growth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carrying capacity", statement: "Max sustainable population." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{max population}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Maximum population size the environment can sustain",
            commonErrors: ["Confusing with population size — it's the limit."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q2",
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
          id: "cieb-u10-population-sampling-q3",
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
          id: "cieb-u10-population-sampling-q4",
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
        {
          id: "cieb-u10-population-sampling-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a population growth curve, the log (exponential) phase is when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The population reaches carrying capacity" },
              { id: "b", text: "The population begins to decline" },
              { id: "c", text: "Growth is slowest" },
              { id: "d", text: "Growth is fastest while resources are abundant" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Log phase", statement: "Rapid exponential growth when resources are abundant." },
            ],
            steps: [
              { reasoning: "Recall the phase description.", working: "\\text{rapid growth}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Growth is fastest while resources are abundant",
            commonErrors: ["Confusing log with lag — lag is the slow adaptation phase."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The stationary phase of a population growth curve occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The population levels off at carrying capacity" },
              { id: "b", text: "The population first enters the habitat" },
              { id: "c", text: "All organisms die" },
              { id: "d", text: "Growth is fastest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stationary phase", statement: "Population stabilises at carrying capacity — births ≈ deaths." },
            ],
            steps: [
              { reasoning: "Recall what happens at the plateau.", working: "\\text{carrying capacity}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The population levels off at carrying capacity",
            commonErrors: ["Choosing (b) — fastest growth is the log phase."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an abiotic limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Predation" },
              { id: "c", text: "Disease" },
              { id: "d", text: "Competition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Abiotic factors", statement: "Non-living factors: light, temperature, water, pH, space." },
            ],
            steps: [
              { reasoning: "Identify the non-living factor.", working: "\\text{temperature = abiotic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Temperature",
            commonErrors: ["Choosing competition — that is a biotic factor."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'percentage cover' as used in quadrat sampling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Percentage cover", statement: "Proportion of the quadrat area covered by a species, expressed as a percentage." },
            ],
            steps: [
              { reasoning: "State it is the proportion of area covered.", working: "\\text{area covered}", marks: 1, markCode: "M" },
              { reasoning: "Complete: expressed as a percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The percentage of the quadrat's area that is covered by a particular species.",
            commonErrors: ["Confusing it with frequency — cover measures area, frequency measures presence in quadrats."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student places 20 quadrats in a meadow. Daisies are found in 8 of them. Calculate the frequency of daisies.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency", statement: "$\\text{frequency} = \\frac{\\text{quadrats with species}}{\\text{total quadrats}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the frequency formula.", working: "\\frac{8}{20} \\times 100 = 40", marks: 1, markCode: "M" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Forgetting to multiply by 100 — giving 0.4 instead of 40%."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a population growth curve levels off in the stationary phase.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Stationary phase", statement: "Population stabilises when a limiting factor is in shortest supply." },
            ],
            steps: [
              { reasoning: "Resources become limiting as population grows.", working: "\\text{resources limited}", marks: 1, markCode: "M" },
              { reasoning: "Birth rate falls or death rate rises.", working: "\\text{births} \\approx \\text{deaths}", marks: 1, markCode: "M" },
              { reasoning: "The limiting factor sets the maximum size.", working: "\\text{carrying capacity}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: population levels off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "As the population grows, a limiting factor (e.g. food, space) becomes scarce; the death rate rises and the birth rate falls until they balance at carrying capacity, so the population levels off.",
            commonErrors: ["Saying 'the population stops growing because it runs out of space' without mentioning balanced birth/death rates."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A quadrat of area 0.25 m² contains 30 woodlice. Calculate the population density of woodlice in individuals per m².",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120, unit: "individuals/m²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\text{density} = \\frac{\\text{number of organisms}}{\\text{area sampled}}$" },
            ],
            steps: [
              { reasoning: "Divide count by quadrat area.", working: "\\frac{30}{0.25} = 120", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "120 \\text{ individuals/m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120 individuals/m²",
            commonErrors: ["Multiplying by 0.25 instead of dividing — density is per unit area."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a biotic limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil pH" },
              { id: "b", text: "Light intensity" },
              { id: "c", text: "Competition for food" },
              { id: "d", text: "Water availability" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biotic factors", statement: "Living factors: competition, predation, disease, food availability." },
            ],
            steps: [
              { reasoning: "Identify the living factor.", working: "\\text{competition = biotic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Competition for food",
            commonErrors: ["Choosing light or pH — those are abiotic."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how you would use quadrats to estimate the population size of a plant species in a field.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Quadrat sampling", statement: "Random quadrats → count/cover → scale up to whole area." },
            ],
            steps: [
              { reasoning: "Place several quadrats randomly in the field.", working: "\\text{random placement}", marks: 1, markCode: "M" },
              { reasoning: "Count the target species or estimate percentage cover in each.", working: "\\text{count/cover}", marks: 1, markCode: "M" },
              { reasoning: "Calculate mean density or cover across quadrats.", working: "\\text{mean}", marks: 1, markCode: "M" },
              { reasoning: "Scale up by total field area to estimate population.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Place quadrats randomly, count the plant species (or estimate cover) in each, find the mean per quadrat, then scale up by the total field area to estimate population size.",
            commonErrors: ["Placing quadrats only in dense patches — that biases the estimate."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quadrat is divided into 100 small squares. A plant species covers 42 of them. What is its percentage cover?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 42, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage cover", statement: "$\\frac{\\text{squares covered}}{\\text{total squares}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Compute covered fraction as percentage.", working: "\\frac{42}{100} \\times 100 = 42", marks: 1, markCode: "M" },
            ],
            finalAnswer: "42%",
            commonErrors: ["Giving 0.42 — percentage cover is expressed as a percentage."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which change would most improve the reliability of quadrat sampling results?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Count only the largest organisms" },
              { id: "b", text: "Use more randomly placed quadrats" },
              { id: "c", text: "Always use the same quadrat position" },
              { id: "d", text: "Place all quadrats in the densest part of the habitat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reliability", statement: "More random samples → more representative and reliable estimates." },
            ],
            steps: [
              { reasoning: "Identify what reduces sampling error.", working: "\\text{more random quadrats}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Use more randomly placed quadrats",
            commonErrors: ["Choosing (a) — that introduces bias, not reliability."],
          },
        },
        {
          id: "cieb-u10-population-sampling-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish between frequency and percentage cover as measures obtained from quadrat sampling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frequency vs cover", statement: "Frequency = % of quadrats containing species; cover = % of area covered." },
            ],
            steps: [
              { reasoning: "Define frequency.", working: "\\text{quadrats with species / total quadrats}", marks: 1, markCode: "M" },
              { reasoning: "Define percentage cover.", working: "\\text{area covered / quadrat area}", marks: 1, markCode: "M" },
              { reasoning: "State the key difference.", working: "\\text{presence vs area}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Frequency is the percentage of quadrats in which the species is found; percentage cover is the percentage of the quadrat area the species covers. Frequency measures how widespread the species is; cover measures how much space it occupies.",
            commonErrors: ["Using the two terms interchangeably."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u10-ecology-extended-notes",
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
