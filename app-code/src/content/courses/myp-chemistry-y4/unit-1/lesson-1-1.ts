import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypc4-u1-lesson-1-1",
  code: "1-1",
  title: "Particles, Mixtures and Separation",
  goal: "I CAN describe the particle model of matter, distinguish elements/compounds/mixtures, and choose separation techniques.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Particle model", definition: "Matter consists of tiny particles (atoms/molecules/ions) in constant motion; solids fixed, liquids slide, gases fly." },
    { term: "Element", definition: "A substance containing only one type of atom; cannot be broken down chemically." },
    { term: "Compound", definition: "Two or more elements chemically bonded in fixed proportions; can be decomposed." },
    { term: "Mixture", definition: "Two or more substances physically combined; proportions vary; can be separated physically." },
    { term: "Filtration", definition: "Separating insoluble solid from liquid by passing through filter paper." },
    { term: "Distillation", definition: "Separating a dissolved solid or liquid by boiling, condensing and collecting the vapour." },
  ],
  concepts: [
    {
      id: "mypc4-u1-particles",
      title: "Particle model and states of matter",
      skill: "Describe particle arrangement in solids, liquids and gases and explain changes of state.",
      lesson: {
        sections: [
          {
            heading: "The particle model",
            body: "All matter is made of particles too small to see. **Solid**: particles fixed in regular arrangement, vibrate in place — definite shape and volume. **Liquid**: particles close but slide past each other — definite volume, takes container shape. **Gas**: particles far apart, move freely — no definite shape or volume.",
          },
          {
            heading: "Changes of state",
            body: "**Melting** (solid→liquid), **evaporation/boiling** (liquid→gas), **condensation** (gas→liquid), **freezing** (liquid→solid), **sublimation** (solid→gas). Heating gives particles energy to overcome attractions; cooling lets them settle.",
          },
          {
            heading: "Diffusion",
            body: "Particles spread from high to low concentration due to random motion — faster in gases (more energy) than liquids. Explains smells spreading, ink dispersing in water.",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid: fixed; Liquid: sliding; Gas: free" },
          { name: "Heating", statement: "Increases particle energy → changes state" },
          { name: "Diffusion", statement: "High → low concentration, faster in gases" },
        ],
        workedExample: {
          problem: "Why does a smell spread quickly through a room?",
          solution: "Gas particles diffuse rapidly from high concentration near source to low concentration throughout room.",
        },
      },
      questions: [
        {
          id: "mypc4-u1-part-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state has particles that are far apart and move freely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas" },
              { id: "b", text: "Solid" },
              { id: "c", text: "Liquid" },
              { id: "d", text: "All states equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gas particles", statement: "Far apart, high energy, move freely." },
            ],
            steps: [
              { reasoning: "Gas particles are far apart and move freely.", working: "\\text{gas}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gas",
            commonErrors: ["Confusing liquid and gas."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-part-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to particles when a liquid boils?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They gain enough energy to escape as gas" },
              { id: "b", text: "They slow down" },
              { id: "c", text: "They form a solid" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Boiling", statement: "Heat energy lets particles overcome attractions → gas." },
            ],
            steps: [
              { reasoning: "Boiling adds energy; particles escape as gas.", working: "\\text{energy gain}", marks: 1, markCode: "M" },
              { reasoning: "State the change.", working: "\\text{liquid to gas}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Particles gain energy and escape as gas",
            commonErrors: ["Saying particles disappear."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why gases diffuse faster than liquids.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas particles have more energy and move faster through large empty spaces" },
              { id: "b", text: "Gases are heavier" },
              { id: "c", text: "Liquids cannot diffuse" },
              { id: "d", text: "Gas particles are larger" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion rate", statement: "Higher particle energy and freedom = faster diffusion." },
            ],
            steps: [
              { reasoning: "Gas particles have more kinetic energy.", working: "\\text{more energy}", marks: 1, markCode: "M" },
              { reasoning: "They move through large spaces unimpeded.", working: "\\text{free movement}", marks: 1, markCode: "M" },
              { reasoning: "State the reason.", working: "\\text{faster diffusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More energy and freedom of movement",
            commonErrors: ["Saying gases are 'lighter' — it's about energy and spacing."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the particle model for each state of matter.",
          parts: [
            { label: "a", prompt: "Describe particle arrangement in a solid.", marks: 2 },
            { label: "b", prompt: "Describe particle arrangement in a liquid.", marks: 2 },
            { label: "c", prompt: "Describe particle arrangement in a gas.", marks: 2 },
            { label: "d", prompt: "Explain what happens to particles during melting.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Particle model", statement: "State determined by particle arrangement and energy." },
            ],
            steps: [
              { part: "a", reasoning: "Particles fixed in regular pattern, vibrate in place; definite shape+volume.", working: "\\text{fixed}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State properties.", working: "\\text{solid}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Particles close but can slide; definite volume, takes container shape.", working: "\\text{sliding}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State properties.", working: "\\text{liquid}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Particles far apart, move freely in all directions; no fixed shape/volume.", working: "\\text{free}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State properties.", working: "\\text{gas}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Heating gives particles energy to overcome fixed-position attractions.", working: "\\text{energy}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Particles gain freedom → liquid.", working: "\\text{melting}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fixed+regular (b) sliding (c) free+far apart (d) energy overcomes attractions",
            commonErrors: ["In (d), saying particles are created or destroyed."],
            examinerNote: "M1 A1 for each of (a)-(c), M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u1-part-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During condensation, gas particles...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lose energy and move closer together to form a liquid" },
              { id: "b", text: "Gain energy and move further apart" },
              { id: "c", text: "Are destroyed and reform as new particles" },
              { id: "d", text: "Become ions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Condensation", statement: "Gas → liquid: particles lose energy and move closer." },
            ],
            steps: [
              { reasoning: "Cooling removes energy; particles attract and form liquid.", working: "\\text{gas}\\to\\text{liquid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lose energy, move closer",
            commonErrors: ["Thinking particles are destroyed."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-part-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement describes particle motion in a solid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Particles vibrate about fixed positions in a regular arrangement" },
              { id: "b", text: "Particles slide past each other freely" },
              { id: "c", text: "Particles move freely in all directions" },
              { id: "d", text: "Particles do not move at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solid particles", statement: "Fixed positions, vibrate in place, regular arrangement." },
            ],
            steps: [
              { reasoning: "Solid particles have fixed positions and only vibrate.", working: "\\text{vibrate}", marks: 1, markCode: "M" },
              { reasoning: "State the arrangement.", working: "\\text{regular}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vibrate about fixed positions",
            commonErrors: ["Saying particles are completely stationary."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Steam at 120 °C is cooled to ice at −10 °C. How many changes of state occur?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Changes of state", statement: "Gas→liquid (condensation) and liquid→solid (freezing)." },
            ],
            steps: [
              { reasoning: "Steam condenses to water, then water freezes to ice — two changes.", working: "\\text{condensation}+\\text{freezing}=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting only one change."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u1-part-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas occupies a volume of 240 cm³. Express this volume in dm³.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.24, unit: "dm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Volume conversion", statement: "1 dm³ = 1000 cm³." },
            ],
            steps: [
              { reasoning: "Divide cm³ by 1000.", working: "240/1000", marks: 1, markCode: "M" },
              { reasoning: "State answer with unit.", working: "0.24\\text{ dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.24 dm³",
            commonErrors: ["Multiplying by 1000 instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Diffusion is faster in gases than in liquids mainly because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas particles have more energy and move through large empty spaces" },
              { id: "b", text: "Gas particles are larger" },
              { id: "c", text: "Liquid particles cannot move at all" },
              { id: "d", text: "Gases are always warmer substances" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion rate", statement: "Higher energy and freedom → faster diffusion." },
            ],
            steps: [
              { reasoning: "Gas particles have more kinetic energy and large spaces between them.", working: "\\text{energy+space}", marks: 1, markCode: "M" },
              { reasoning: "State the link to rate.", working: "\\text{faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More energy and free movement",
            commonErrors: ["Saying gases are 'lighter'."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A solid melts at 50 °C and boils at 150 °C. A sample is heated from 20 °C to 200 °C, then cooled to 10 °C. How many changes of state occur in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "State changes", statement: "Heating: melt + boil; cooling: condense + freeze." },
            ],
            steps: [
              { reasoning: "Heating passes melting point (50 °C) and boiling point (150 °C): 2 changes.", working: "\\text{melt}+\\text{boil}=2", marks: 1, markCode: "M" },
              { reasoning: "Cooling passes both points again: condensation + freezing: 2 more.", working: "\\text{condense}+\\text{freeze}=2", marks: 1, markCode: "M" },
              { reasoning: "Total = 4.", working: "2+2=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only heating or only cooling."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A liquid takes the shape of its container but a solid keeps its own shape because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liquid particles can slide past each other, while solid particles are fixed in place" },
              { id: "b", text: "Liquid particles are larger" },
              { id: "c", text: "Solid particles attract the container" },
              { id: "d", text: "Liquids have no particles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Particle arrangement", statement: "Mobility of particles determines shape behaviour." },
            ],
            steps: [
              { reasoning: "Liquid particles slide → take container shape.", working: "\\text{slide}", marks: 1, markCode: "M" },
              { reasoning: "Solid particles fixed → keep shape.", working: "\\text{fixed}", marks: 1, markCode: "M" },
              { reasoning: "State the comparison.", working: "\\text{shape}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Liquid particles slide; solid particles fixed",
            commonErrors: ["Saying liquids have no definite shape due to gravity only."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas has a density of 1.5 g/dm³. Calculate the mass of 4.0 dm³ of the gas.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6.0, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "density = mass/volume, so mass = density × volume." },
            ],
            steps: [
              { reasoning: "mass = 1.5 × 4.0.", working: "1.5\\times4.0", marks: 1, markCode: "M" },
              { reasoning: "mass = 6.0 g.", working: "6.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6.0 g",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many oxygen atoms are in one molecule of CO₂?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula", statement: "Subscript shows atom count: CO₂ has 2 O atoms." },
            ],
            steps: [
              { reasoning: "CO₂ contains two oxygen atoms per molecule.", working: "CO_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u1-part-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas at room temperature and pressure occupies 1.5 dm³. How many cm³ is this?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1500, unit: "cm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Volume conversion", statement: "1 dm³ = 1000 cm³." },
            ],
            steps: [
              { reasoning: "Multiply dm³ by 1000.", working: "1.5\\times1000", marks: 1, markCode: "M" },
              { reasoning: "State answer with unit.", working: "1500\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1500 cm³",
            commonErrors: ["Dividing by 1000."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-part-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Describe the particle model for solids and gases.",
          parts: [
            { label: "a", prompt: "Describe the arrangement and movement of particles in a solid.", marks: 2 },
            { label: "b", prompt: "Describe the arrangement and movement of particles in a gas.", marks: 2 },
            { label: "c", prompt: "Name two changes of state that occur when a substance is cooled.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Particle model", statement: "State depends on particle arrangement, spacing and energy." },
            ],
            steps: [
              { part: "a", reasoning: "Particles fixed in regular arrangement, vibrate in place.", working: "\\text{fixed+vibrate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Definite shape and volume.", working: "\\text{solid}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Particles far apart, move freely in all directions.", working: "\\text{far+free}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No definite shape or volume.", working: "\\text{gas}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Condensation (gas→liquid).", working: "\\text{condensation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Freezing (liquid→solid).", working: "\\text{freezing}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fixed, vibrate (b) far apart, free (c) condensation, freezing",
            commonErrors: ["In (c), naming heating changes only."],
            examinerNote: "M1 A1 for (a) and (b); M1 A1 for (c).",
          },
        },
        {
          id: "mypc4-u1-part-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Use the particle model to explain everyday observations.",
          parts: [
            { label: "a", prompt: "Explain why a smell spreads quickly through a room.", marks: 2 },
            { label: "b", prompt: "Compare the spacing of particles in a solid and a gas.", marks: 2 },
            { label: "c", prompt: "Explain why evaporation of sweat cools the skin.", marks: 2 },
            { label: "d", prompt: "State the direction of sublimation when a solid is heated.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Particle model applications", statement: "Diffusion, spacing and energy explain observations." },
            ],
            steps: [
              { part: "a", reasoning: "Gas particles diffuse from high to low concentration randomly.", working: "\\text{diffusion}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rapid movement spreads smell throughout room.", working: "\\text{spread}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Solid: particles close, fixed; gas: particles far apart.", working: "\\text{spacing}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct comparison stated.", working: "\\text{compare}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fastest particles escape as vapour, taking kinetic energy away.", working: "\\text{energy loss}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Remaining particles have less energy → cooling.", working: "\\text{cooling}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sublimation is solid → gas.", working: "\\text{solid}\\to\\text{gas}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct direction stated.", working: "\\text{direction}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) diffusion (b) gas far apart vs solid close (c) evaporation takes energy (d) solid→gas",
            commonErrors: ["In (d), reversing sublimation direction."],
            examinerNote: "M1 A1 for each part.",
          },
        },
      ],
    },
    {
      id: "mypc4-u1-mixtures",
      title: "Elements, Compounds and Mixtures",
      skill: "Distinguish elements, compounds and mixtures and select appropriate separation techniques.",
      lesson: {
        sections: [
          {
            heading: "Pure substances vs mixtures",
            body: "**Element**: one type of atom (O₂, Fe, C). **Compound**: elements chemically bonded in fixed ratio (H₂O, CO₂, NaCl) — properties differ from components. **Mixture**: substances physically mixed, variable proportions, separable physically (salt water, air, alloys).",
          },
          {
            heading: "Separation techniques",
            body: "**Filtration**: insoluble solid from liquid. **Evaporation/crystallisation**: dissolved solid from solution. **Distillation**: liquid from solution or separating two liquids by boiling point. **Chromatography**: separating dissolved substances by solubility. **Magnetic separation**: iron from mixture.",
          },
          {
            heading: "Choosing a method",
            body: "Match technique to property: size of particles (filtration), boiling point (distillation), solubility (chromatography), magnetism (magnetic), volatility (evaporation).",
          },
        ],
        keyFormulas: [
          { name: "Element", statement: "One atom type; e.g. O₂, Fe" },
          { name: "Compound", statement: "Fixed ratio chemical bond; e.g. H₂O, NaCl" },
          { name: "Mixture", statement: "Variable ratio physical mix; separable" },
        ],
        workedExample: {
          problem: "Classify: air, water, salt solution, iron filings + sulfur.",
          solution: "Air = mixture (gases), water = compound (H₂O), salt solution = mixture, iron+sulfur = mixture (can be separated physically).",
        },
      },
      questions: [
        {
          id: "mypc4-u1-mix-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water (H₂O)" },
              { id: "b", text: "Air" },
              { id: "c", text: "Salt solution" },
              { id: "d", text: "Iron filings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "Elements chemically bonded in fixed proportions." },
            ],
            steps: [
              { reasoning: "H₂O is hydrogen and oxygen chemically bonded = compound.", working: "H_2O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water",
            commonErrors: ["Choosing salt solution — that's a mixture."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-mix-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How would you separate sand from salt water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filter to remove sand, then evaporate water to get salt" },
              { id: "b", text: "Distillation only" },
              { id: "c", text: "Magnetic separation" },
              { id: "d", text: "Cannot be separated" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Separation", statement: "Insoluble sand filtered; dissolved salt crystallised." },
            ],
            steps: [
              { reasoning: "Sand is insoluble → filtration removes it.", working: "\\text{filtration}", marks: 1, markCode: "M" },
              { reasoning: "Salt dissolved → evaporate water to crystallise.", working: "\\text{evaporation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Filter then evaporate",
            commonErrors: ["Trying distillation for sand — sand isn't volatile."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between a compound and a mixture.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compound: chemically bonded, fixed ratio, new properties; mixture: physically combined, variable ratio, retains properties" },
              { id: "b", text: "They are the same" },
              { id: "c", text: "Mixtures are always pure" },
              { id: "d", text: "Compounds cannot be separated" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound vs mixture", statement: "Chemical bonding vs physical mixing; fixed vs variable." },
            ],
            steps: [
              { reasoning: "Compound = chemical bond, fixed ratio, new properties.", working: "\\text{chemical}", marks: 1, markCode: "M" },
              { reasoning: "Mixture = physical mix, variable ratio, original properties.", working: "\\text{physical}", marks: 1, markCode: "M" },
              { reasoning: "State the distinction.", working: "\\text{difference}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chemical vs physical combination",
            commonErrors: ["Saying mixtures can't be separated."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A mixture contains iron filings, sand and salt.",
          parts: [
            { label: "a", prompt: "Describe how to separate iron filings.", marks: 2 },
            { label: "b", prompt: "Describe how to separate sand from salt solution.", marks: 2 },
            { label: "c", prompt: "Explain why the order of separation matters.", marks: 2 },
            { label: "d", prompt: "Suggest a method to check if the salt obtained is pure.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Separation strategy", statement: "Use property differences sequentially." },
            ],
            steps: [
              { part: "a", reasoning: "Use magnet to attract and remove iron filings.", working: "\\text{magnet}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Iron is magnetic — selective removal.", working: "\\text{magnetic}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add water → dissolve salt → filter sand → evaporate water.", working: "\\text{dissolve+filter}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete method.", working: "\\text{evaporate}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Must remove insoluble/large particles before dissolving to avoid contamination.", working: "\\text{order}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Wrong order leaves impurities in final product.", working: "\\text{contamination}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check melting/boiling point — pure substance has sharp fixed point.", working: "\\text{mp/bp}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Impure substance has range/melting point depression.", working: "\\text{purity test}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) magnet (b) dissolve, filter, evaporate (c) order prevents contamination (d) check melting point",
            commonErrors: ["In (c), thinking order doesn't matter."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypc4-u1-mix-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen (O₂)" },
              { id: "b", text: "Water (H₂O)" },
              { id: "c", text: "Salt solution" },
              { id: "d", text: "Air" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Element", statement: "Only one type of atom; cannot be broken down chemically." },
            ],
            steps: [
              { reasoning: "O₂ contains only oxygen atoms → element.", working: "O_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen",
            commonErrors: ["Choosing water — that's a compound."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u1-mix-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A mixture contains iron filings and sulfur powder. Which separation method is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetic separation" },
              { id: "b", text: "Distillation" },
              { id: "c", text: "Filtration" },
              { id: "d", text: "Chromatography" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Magnetic separation", statement: "Uses magnetism to remove iron from a mixture." },
            ],
            steps: [
              { reasoning: "Iron is magnetic; sulfur is not.", working: "\\text{Fe magnetic}", marks: 1, markCode: "M" },
              { reasoning: "Magnet removes iron, leaving sulfur.", working: "\\text{magnet}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnetic separation",
            commonErrors: ["Choosing filtration — both are insoluble solids."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mixture of 20 g sand and 30 g salt is stirred into water and filtered. How many grams of solid remain on the filter paper?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filtration", statement: "Insoluble solid (sand) stays on filter; dissolved salt passes through." },
            ],
            steps: [
              { reasoning: "Only insoluble sand remains on filter paper.", working: "20\\text{ g}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "20 g",
            commonErrors: ["Answering 50 g (total mixture)."],
            examinerNote: "B1 for 20 g.",
          },
        },
        {
          id: "mypc4-u1-mix-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the mass of NaCl in 0.500 dm³ of 0.200 mol/dm³ NaCl solution. (Mr NaCl = 58.5)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5.85, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "n=cV then mass", statement: "n = c×V; mass = n×Mr." },
            ],
            steps: [
              { reasoning: "n = 0.200 × 0.500 = 0.100 mol.", working: "0.100", marks: 1, markCode: "M" },
              { reasoning: "mass = 0.100 × 58.5 = 5.85 g.", working: "5.85\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5.85 g",
            commonErrors: ["Forgetting to convert or multiply by Mr."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which separation technique relies on differences in boiling point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distillation" },
              { id: "b", text: "Filtration" },
              { id: "c", text: "Magnetic separation" },
              { id: "d", text: "Evaporation only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Distillation", statement: "Separates by boiling, condensing and collecting vapour." },
            ],
            steps: [
              { reasoning: "Distillation uses boiling point differences.", working: "\\text{bp}", marks: 1, markCode: "M" },
              { reasoning: "State the technique.", working: "\\text{distillation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Distillation",
            commonErrors: ["Choosing filtration — uses particle size."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 100 g mixture contains 60 g iron filings, 25 g sand and 15 g salt. The iron is removed with a magnet. What percentage of the original mass remains?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage composition", statement: "% = part/whole × 100." },
            ],
            steps: [
              { reasoning: "Remaining mass = 25 + 15 = 40 g.", working: "25+15=40", marks: 1, markCode: "M" },
              { reasoning: "% = 40/100 × 100 = 40%.", working: "\\frac{40}{100}\\times100", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Calculating iron percentage instead."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A mixture can be separated by physical means but a compound cannot. Why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mixture components are not chemically bonded, while compound components are chemically bonded in fixed proportions" },
              { id: "b", text: "Mixtures are always liquids" },
              { id: "c", text: "Compounds are always pure elements" },
              { id: "d", text: "Mixtures contain only one substance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mixture vs compound", statement: "Physical mixing vs chemical bonding determines separability." },
            ],
            steps: [
              { reasoning: "Mixture components keep their own properties and aren't bonded.", working: "\\text{physical}", marks: 1, markCode: "M" },
              { reasoning: "Compound components are chemically bonded → need chemical change to separate.", working: "\\text{chemical}", marks: 1, markCode: "M" },
              { reasoning: "State the conclusion.", working: "\\text{separable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mixture = physical mix; compound = chemical bonds",
            commonErrors: ["Saying mixtures cannot be separated."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "1.50 dm³ of solution contains 0.300 mol of NaCl. What is the concentration?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.2, unit: "mol/dm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concentration", statement: "c = n/V." },
            ],
            steps: [
              { reasoning: "c = 0.300/1.50.", working: "\\frac{0.300}{1.50}", marks: 1, markCode: "M" },
              { reasoning: "c = 0.200 mol/dm³.", working: "0.200\\text{ mol/dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.200 mol/dm³",
            commonErrors: ["Multiplying n by V instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A sample of alloy contains 3.0 g of copper, which makes up 40% of the total mass. What is the total mass of the alloy?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7.5, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage composition", statement: "part = % × whole; whole = part/%." },
            ],
            steps: [
              { reasoning: "3.0 g is 40% of total.", working: "3.0=0.40\\times\\text{total}", marks: 1, markCode: "M" },
              { reasoning: "total = 3.0/0.40.", working: "\\frac{3.0}{0.40}", marks: 1, markCode: "M" },
              { reasoning: "total = 7.5 g.", working: "7.5\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7.5 g",
            commonErrors: ["Multiplying 3.0 by 0.40."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u1-mix-q14",
          difficulty: "core",
          totalMarks: 6,
          stem: "Classify each substance as element, compound or mixture.",
          parts: [
            { label: "a", prompt: "Classify O₂, H₂O, air and NaCl.", marks: 4 },
            { label: "b", prompt: "State which of these can be separated by physical methods.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classification", statement: "Element = one atom type; compound = chemically bonded; mixture = physical mix." },
            ],
            steps: [
              { part: "a", reasoning: "O₂ = element; H₂O = compound; air = mixture; NaCl = compound.", working: "\\text{4 correct}", marks: 2, markCode: "M" },
              { part: "a", reasoning: "All four correct.", working: "\\text{complete}", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Only air is a mixture → physically separable.", working: "\\text{air}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Elements and compounds need chemical change.", working: "\\text{reason}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) O₂ element, H₂O compound, air mixture, NaCl compound (b) air only",
            commonErrors: ["Classifying NaCl as a mixture."],
            examinerNote: "M2 A2 for (a), M1 A1 for (b).",
          },
        },
        {
          id: "mypc4-u1-mix-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many different elements are present in sulfuric acid, H₂SO₄?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula", statement: "H₂SO₄ contains H, S and O = 3 elements." },
            ],
            steps: [
              { reasoning: "Hydrogen, sulfur and oxygen = 3 elements.", working: "H,S,O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting atoms instead of elements."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypc4-u1-mix-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A mixture contains salt, sand and iron filings.",
          parts: [
            { label: "a", prompt: "Describe how to remove the iron filings.", marks: 2 },
            { label: "b", prompt: "Describe how to separate the salt from the sand.", marks: 3 },
            { label: "c", prompt: "Explain why distillation could also recover the water used.", marks: 2 },
            { label: "d", prompt: "Suggest one test to check the purity of the salt obtained.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Separation strategy", statement: "Use property differences: magnetism, solubility, boiling point." },
            ],
            steps: [
              { part: "a", reasoning: "Use a magnet to attract and remove iron filings.", working: "\\text{magnet}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Iron is magnetic; salt and sand are not.", working: "\\text{selective}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add water to dissolve salt.", working: "\\text{dissolve}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Filter to remove insoluble sand.", working: "\\text{filter}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaporate water to crystallise salt.", working: "\\text{evaporate}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Water and dissolved salt have different boiling points.", working: "\\text{bp}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Distillation condenses pure water, leaving salt behind.", working: "\\text{distill}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Measure melting/boiling point — pure salt has a sharp fixed point.", working: "\\text{mp}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) magnet (b) dissolve, filter, evaporate (c) boiling point difference (d) melting point check",
            commonErrors: ["In (b), forgetting filtration step."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
      ],
    },
  ],
};
