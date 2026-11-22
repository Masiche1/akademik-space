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
              { id: "a", text: "Pyramid of numbers" },
              { id: "b", text: "Pyramid of biomass" },
              { id: "c", text: "All can be inverted" },
              { id: "d", text: "Pyramid of energy" },
            ],
            correctChoiceId: "d",
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
        {
          id: "olbio-u10-pyramids-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a pyramid of biomass show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population growth rate" },
              { id: "b", text: "Energy transferred at each level" },
              { id: "c", text: "Dry mass of organisms at each trophic level" },
              { id: "d", text: "Number of organisms at each level" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pyramid of biomass", statement: "Shows the dry mass of organisms at each trophic level." },
            ],
            steps: [
              { reasoning: "Recall what biomass measures.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Dry mass of organisms at each trophic level",
            commonErrors: ["Confusing biomass with numbers or energy."],
          },
        },
        {
          id: "olbio-u10-pyramids-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pyramid can be inverted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pyramid of energy only" },
              { id: "b", text: "All three always" },
              { id: "c", text: "Pyramid of numbers and sometimes biomass" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pyramid shape", statement: "Energy always decreases upward; numbers and biomass can invert." },
            ],
            steps: [
              { reasoning: "Recall which pyramids can invert.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pyramid of numbers and sometimes biomass",
            commonErrors: ["Choosing energy — it cannot invert."],
          },
        },
        {
          id: "olbio-u10-pyramids-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is a food web more stable than a single food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organisms have alternative food sources if one is lost" },
              { id: "b", text: "It always has more producers" },
              { id: "c", text: "It has fewer feeding relationships" },
              { id: "d", text: "It removes decomposers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Food web stability", statement: "Interconnected chains provide alternative feeding routes." },
            ],
            steps: [
              { reasoning: "Recall the stability advantage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Organisms have alternative food sources if one is lost",
            commonErrors: ["Saying food webs are less realistic — they are more realistic."],
          },
        },
        {
          id: "olbio-u10-pyramids-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most energy is lost between trophic levels because it is used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storing in bones" },
              { id: "b", text: "Respiration, movement and excretion as well as heat loss" },
              { id: "c", text: "Making new DNA only" },
              { id: "d", text: "Only reproduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy loss", statement: "Energy is lost as heat and used for respiration, movement and excretion." },
            ],
            steps: [
              { reasoning: "Recall where energy goes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Respiration, movement and excretion as well as heat loss",
            commonErrors: ["Saying energy is destroyed — it is lost as unusable heat."],
          },
        },
        {
          id: "olbio-u10-pyramids-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about the pyramid of energy is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is the same as biomass" },
              { id: "b", text: "It can be inverted in some ecosystems" },
              { id: "c", text: "It shows the number of individuals" },
              { id: "d", text: "It always decreases upward because energy is lost" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy pyramid", statement: "Energy always decreases upward due to losses." },
            ],
            steps: [
              { reasoning: "Recall the defining feature.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It always decreases upward because energy is lost",
            commonErrors: ["Confusing it with pyramid of numbers."],
          },
        },
        {
          id: "olbio-u10-pyramids-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "An energy pyramid has 10 000 units at the producer level. Enter the energy at the primary, secondary and tertiary consumer levels after 10% transfers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000, unit: "units" },
              { label: "b", answer: 100, unit: "units" },
              { label: "c", answer: 10, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "Each level receives 10% of the energy below it." },
            ],
            steps: [
              { reasoning: "First transfer.", working: "10000 × 0.10 = 1000", marks: 1, markCode: "M" },
              { reasoning: "Second transfer.", working: "1000 × 0.10 = 100", marks: 1, markCode: "M" },
              { reasoning: "Third transfer.", working: "100 × 0.10 = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary = 1000; secondary = 100; tertiary = 10",
            commonErrors: ["Applying 10% only once for all levels."],
          },
        },
        {
          id: "olbio-u10-pyramids-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a pyramid of numbers for one oak tree, there is 1 producer, 200 caterpillars and 5 woodpeckers. Enter the number of organisms at the producer, primary consumer and top consumer levels.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, unit: "tree" },
              { label: "b", answer: 200, unit: "caterpillars" },
              { label: "c", answer: 5, unit: "woodpeckers" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pyramid of numbers", statement: "It counts organisms at each trophic level." },
            ],
            steps: [
              { reasoning: "Identify producer count.", working: "1 \\text{ tree}", marks: 1, markCode: "M" },
              { reasoning: "Identify primary consumer count.", working: "200 \\text{ caterpillars}", marks: 1, markCode: "M" },
              { reasoning: "Identify top consumer count.", working: "5 \\text{ woodpeckers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Producer = 1; primary consumer = 200; top consumer = 5",
            commonErrors: ["Summing all organisms — each level is counted separately."],
          },
        },
        {
          id: "olbio-u10-pyramids-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A biomass pyramid has 200 kg at producer level, 20 kg at primary consumer level and 2 kg at secondary consumer level. Enter the percentage of producer biomass present at the primary and secondary consumer levels.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "%" },
              { label: "b", answer: 1, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Biomass percentage", statement: "Level percentage = level biomass / producer biomass × 100." },
            ],
            steps: [
              { reasoning: "Calculate primary consumer percentage.", working: "20/200 × 100 = 10", marks: 1, markCode: "M" },
              { reasoning: "Calculate secondary consumer percentage.", working: "2/200 × 100 = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary = 10%; secondary = 1%",
            commonErrors: ["Comparing to the level below instead of the producer."],
          },
        },
        {
          id: "olbio-u10-pyramids-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the first trophic level has 5000 units of energy, how many units reach the third trophic level after two 10% transfers?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "Two transfers multiply energy by 0.10 twice." },
            ],
            steps: [
              { reasoning: "Apply two successive transfers.", working: "5000 × (0.10)^2 = 50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "50 units",
            commonErrors: ["Applying only one transfer."],
          },
        },
        {
          id: "olbio-u10-pyramids-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "One oak tree supports 200 caterpillars and 5 woodpeckers. Enter the number of organisms at the producer, primary consumer and top consumer levels of the numbers pyramid.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, unit: "oak" },
              { label: "b", answer: 200, unit: "caterpillars" },
              { label: "c", answer: 5, unit: "woodpeckers" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverted numbers pyramid", statement: "One producer can support many more herbivores." },
            ],
            steps: [
              { reasoning: "Producer level count.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Primary consumer level count.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "Top consumer level count.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 oak; 200 caterpillars; 5 woodpeckers",
            commonErrors: ["Assuming every pyramid must narrow upward."],
          },
        },
        {
          id: "olbio-u10-pyramids-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pyramid measures the dry mass of organisms at each trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pyramid of biomass" },
              { id: "b", text: "Pyramid of numbers" },
              { id: "c", text: "Food web" },
              { id: "d", text: "Pyramid of energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pyramid of biomass", statement: "Biomass = dry mass of living organisms." },
            ],
            steps: [
              { reasoning: "Match the measure to the pyramid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pyramid of biomass",
            commonErrors: ["Choosing numbers — that counts organisms, not mass."],
          },
        },
        {
          id: "olbio-u10-pyramids-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a food web gives a more realistic picture of an ecosystem than a food chain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food webs", statement: "Real feeding relationships are interconnected, not linear." },
            ],
            steps: [
              { reasoning: "Organisms eat more than one type of food.", working: "\\text{many prey}", marks: 1, markCode: "M" },
              { reasoning: "Organisms are eaten by more than one predator.", working: "\\text{many predators}", marks: 1, markCode: "M" },
              { reasoning: "Alternative routes make the ecosystem more stable.", working: "\\text{stability}", marks: 1, markCode: "M" },
              { reasoning: "Conclude it is more realistic than a single chain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A food web shows that organisms eat many different things and are eaten by many predators, giving alternative feeding routes and greater stability — making it more realistic than a single linear food chain.",
            commonErrors: ["Only saying it has more arrows without explaining realism/stability."],
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
              { id: "b", text: "Total biomass of producers" },
              { id: "c", text: "Rate of population growth" },
              { id: "d", text: "Number of species present" },
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
        {
          id: "olbio-u10-population-sampling-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens during the lag phase of population growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rapid exponential growth" },
              { id: "b", text: "Slow growth while organisms adapt to the environment" },
              { id: "c", text: "Population declines rapidly" },
              { id: "d", text: "Population reaches carrying capacity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lag phase", statement: "Growth is slow at first while organisms adjust." },
            ],
            steps: [
              { reasoning: "Recall the lag phase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Slow growth while organisms adapt to the environment",
            commonErrors: ["Choosing rapid growth — that is the log phase."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During which phase does population growth become rapid and exponential?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Logarithmic/exponential phase" },
              { id: "b", text: "Stationary phase" },
              { id: "c", text: "Death phase" },
              { id: "d", text: "Lag phase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Log phase", statement: "Resources are abundant and growth is exponential." },
            ],
            steps: [
              { reasoning: "Recall the exponential phase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Logarithmic/exponential phase",
            commonErrors: ["Choosing stationary — growth slows there."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What defines the stationary phase of population growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth slows as the population approaches carrying capacity" },
              { id: "b", text: "All organisms reproduce at once" },
              { id: "c", text: "The population becomes extinct" },
              { id: "d", text: "Population grows without limit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Stationary phase", statement: "Births roughly equal deaths near carrying capacity." },
            ],
            steps: [
              { reasoning: "Recall the stationary phase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Growth slows as the population approaches carrying capacity",
            commonErrors: ["Choosing unlimited growth — resources limit it."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The environmental factor in shortest supply that limits population size" },
              { id: "b", text: "A factor that speeds population growth" },
              { id: "c", text: "A predator at the top of a food chain" },
              { id: "d", text: "The total number of species" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Limiting factor", statement: "The factor in shortest supply controls population size." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The environmental factor in shortest supply that limits population size",
            commonErrors: ["Choosing any factor — only the shortest-supply factor limits."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organisms are most suitable for sampling with a quadrat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Migrating fish" },
              { id: "b", text: "Sessile plants and slow-moving animals" },
              { id: "c", text: "Fast-moving birds" },
              { id: "d", text: "Flying insects" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Quadrat use", statement: "Quadrats suit stationary or slow-moving organisms." },
            ],
            steps: [
              { reasoning: "Choose organisms that stay in the frame.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sessile plants and slow-moving animals",
            commonErrors: ["Choosing fast movers — they leave the quadrat."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quadrat of area 0.25 m² contains 18 daisies. Calculate the density per square metre.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 72, unit: "daisies/m²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "Density = count / area." },
            ],
            steps: [
              { reasoning: "Divide count by quadrat area.", working: "18 / 0.25 = 72", marks: 1, markCode: "M" },
            ],
            finalAnswer: "72 daisies/m²",
            commonErrors: ["Multiplying by area instead of dividing."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ten 1 m² quadrats record plant counts of 4, 7, 5, 9, 6, 8, 3, 7, 5 and 6. Calculate the mean number per quadrat.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "plants" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "Mean = total count / number of quadrats." },
            ],
            steps: [
              { reasoning: "Sum the counts and divide by 10.", working: "60 / 10 = 6", marks: 1, markCode: "M" },
            ],
            finalAnswer: "6 plants per quadrat",
            commonErrors: ["Dividing by the wrong number of quadrats."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quadrat is divided into 100 squares and a plant covers 25 of them. Calculate the percentage cover.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage cover", statement: "Cover = covered squares / total squares × 100." },
            ],
            steps: [
              { reasoning: "Calculate the percentage.", working: "25/100 × 100 = 25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Giving 25 plants instead of a percentage."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A species is present in 8 out of 10 quadrats. Calculate its frequency as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency", statement: "Frequency = quadrats containing species / total quadrats × 100." },
            ],
            steps: [
              { reasoning: "Calculate the percentage frequency.", working: "8/10 × 100 = 80", marks: 1, markCode: "M" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Reporting 8 as a percentage instead of 80%."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 0.5 m² quadrat contains 12 grass plants, and the field area is 200 m². Enter the density per m² and the estimated total population.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 24, unit: "plants/m²" },
              { label: "b", answer: 4800, unit: "plants" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population estimate", statement: "Density = count/area; population = density × total area." },
            ],
            steps: [
              { reasoning: "Calculate density from the quadrat.", working: "12 / 0.5 = 24", marks: 1, markCode: "M" },
              { reasoning: "Scale density to the field area.", working: "24 × 200 = 4800", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Density = 24 plants/m²; estimated population = 4800 plants",
            commonErrors: ["Forgetting to convert quadrat area before scaling up."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are quadrats placed randomly during sampling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To kill the organisms" },
              { id: "b", text: "To make counting easier" },
              { id: "c", text: "To avoid bias and obtain a representative sample" },
              { id: "d", text: "To cover the whole habitat every time" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Random sampling", statement: "Random placement reduces bias and represents the whole area." },
            ],
            steps: [
              { reasoning: "Recall the reason for randomness.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To avoid bias and obtain a representative sample",
            commonErrors: ["Saying it is for convenience — it is for validity."],
          },
        },
        {
          id: "olbio-u10-population-sampling-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a quadrat is used to estimate the population of a plant species.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Quadrat sampling", statement: "Random quadrats → count/cover → calculate density/frequency → scale up." },
            ],
            steps: [
              { reasoning: "Place a square frame randomly in the habitat.", working: "\\text{random quadrat}", marks: 1, markCode: "M" },
              { reasoning: "Count individuals or estimate percentage cover.", working: "\\text{count/cover}", marks: 1, markCode: "M" },
              { reasoning: "Repeat several times and calculate mean density or frequency.", working: "\\text{mean}", marks: 1, markCode: "M" },
              { reasoning: "Scale the density to the total area to estimate population.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Place square quadrats randomly, count the target plants or estimate cover, repeat across the area, calculate mean density/frequency, then multiply density by total area to estimate the population.",
            commonErrors: ["Forgetting random placement or using only one quadrat."],
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
