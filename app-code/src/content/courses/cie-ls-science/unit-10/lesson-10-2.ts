import type { Lesson } from "../../../types.ts";

export const lesson1022: Lesson = {
  id: "cils-u10-lesson-10-2",
  code: "10-2",
  title: "Stage 8 Checkpoint — Chemistry and Physics",
  goal: "I CAN apply materials, energy, forces and electricity skills at Stage 8 checkpoint standard.",
  standards: ["0893 Checkpoint Stage 8: chemistry and physics"],
  stage: 8,
  vocabulary: [
    { term: "Element", definition: "Substance made of one type of atom." },
    {
      term: "Mixture",
      definition: "Two or more substances physically combined.",
    },
    { term: "Force", definition: "Push or pull measured in newtons." },
    { term: "Circuit", definition: "Complete path for electric current." },
    { term: "Energy", definition: "Capacity to do work — measured in joules." },
  ],
  concepts: [
    {
      id: "cils-u10-s8-chem",
      title: "Stage 8 chemistry checkpoint",
      skill: "Classify substances and describe reactions.",
      lesson: {
        sections: [
          {
            heading: "Materials",
            body: "Elements = one atom type; compounds = chemically joined elements; mixtures = physically combined (can be separated). Reactions: combustion needs fuel + oxygen → CO₂ + water + energy.",
          },
        ],
        keyFormulas: [
          {
            name: "Combustion",
            statement: "$fuel + O_2 \\to CO_2 + H_2O + energy$",
          },
          {
            name: "Separation",
            statement:
              "Mixtures separated by filtration, evaporation, distillation",
          },
        ],
        workedExample: {
          problem:
            "Salt dissolved in water — element, compound or mixture? How separated?",
          solution:
            "Mixture (salt + water not chemically joined). Evaporate water to recover salt.",
        },
      },
      questions: [
        {
          id: "cils-u10-s8-c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a mixture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pure substance" },
              { id: "b", text: "Substances physically combined, separable" },
              { id: "c", text: "One type of atom only" },
              { id: "d", text: "Chemically joined elements" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mixture",
                statement: "Physical combination, separable.",
              },
            ],
            steps: [
              {
                reasoning: "Mixture = physically combined, can be separated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Physically combined, separable",
          },
        },
        {
          id: "cils-u10-s8-c-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products of complete combustion of a hydrocarbon fuel?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combustion",
                statement: "Fuel + O₂ → CO₂ + H₂O + energy.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon dioxide and water (+ energy).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Oxygen is required as reactant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CO₂ + H₂O + energy",
          },
        },
        {
          id: "cils-u10-s8-c-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How would you separate a mixture of sand and salt?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation",
                statement: "Dissolve soluble part, filter, evaporate.",
              },
            ],
            steps: [
              {
                reasoning: "Dissolve salt in water — sand stays undissolved.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Filter to remove sand.", marks: 1, markCode: "M" },
              {
                reasoning: "Evaporate water to recover salt.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dissolve → filter → evaporate.",
          },
        },
        {
          id: "cils-u10-s8-c-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why incomplete combustion is dangerous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combustion",
                statement: "Limited O₂ → CO instead of CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Limited oxygen → incomplete combustion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Produces carbon monoxide (CO) — toxic gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CO binds to haemoglobin → reduces oxygen transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can be fatal in enclosed spaces.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Limited O₂ → toxic CO → reduces blood oxygen → dangerous/fatal.",
          },
        },
        {
          id: "cils-u10-s8-c-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elements chemically joined together" },
              { id: "b", text: "A substance that can be separated" },
              { id: "c", text: "Two or more substances mixed together" },
              { id: "d", text: "A substance made of one type of atom" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Element",
                statement: "Substance made of one type of atom.",
              },
            ],
            steps: [
              {
                reasoning: "An element contains only one type of atom.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** One type of atom",
          },
        },
        {
          id: "cils-u10-s8-c-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How could you separate a mixture of iron filings and sand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation",
                statement: "Magnetic separation uses differences in magnetism.",
              },
            ],
            steps: [
              {
                reasoning: "Iron filings are magnetic; sand is not.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use a magnet to lift out the iron filings, leaving sand behind.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Use a magnet to attract and remove the iron filings",
          },
        },
        {
          id: "cils-u10-s8-c-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salt dissolved in water" },
              { id: "b", text: "Air" },
              { id: "c", text: "Sand mixed with salt" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compound",
                statement: "Elements chemically joined in fixed proportions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO₂ is chemically joined carbon and oxygen; the others are mixtures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Carbon dioxide",
          },
        },
        {
          id: "cils-u10-s8-c-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how distillation can be used to separate ethanol from water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Distillation",
                statement:
                  "Boil off lower-boiling liquid, then condense the vapour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Heat the mixture — ethanol (lower boiling point) evaporates first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Vapour passes into a condenser where it cools back to liquid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water remains behind in the flask.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Heat → ethanol evaporates → condenses as pure liquid; water left behind",
          },
        },
        {
          id: "cils-u10-s8-c-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A candle flame is yellow and smoky. Explain why this happens and what would make the flame burn blue instead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combustion",
                statement:
                  "Limited O₂ → incomplete combustion → soot and CO.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Not enough oxygen reaches the fuel → incomplete combustion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Incomplete combustion produces soot (unburnt carbon).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Soot particles glow yellow and make the flame smoky.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More air/oxygen supply → complete combustion → clean blue flame.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Limited O₂ → incomplete combustion → soot glows yellow; better air supply gives complete combustion (blue flame).",
          },
        },
        {
          id: "cils-u10-s8-c-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a physical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cooking an egg" },
              { id: "b", text: "Burning wood" },
              { id: "c", text: "Melting ice" },
              { id: "d", text: "Rusting iron" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical change",
                statement:
                  "Change of state or appearance; substance stays the same.",
              },
            ],
            steps: [
              {
                reasoning: "Melting is a change of state — still water.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Melting ice",
          },
        },
        {
          id: "cils-u10-s8-c-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why can a mixture be separated by physical methods while a compound cannot?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixture vs compound",
                statement:
                  "Mixtures are physically combined; compounds are chemically joined.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In a mixture the substances keep their own properties — they can be sorted out physically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In a compound the elements are chemically bonded and must be separated by chemical methods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mixture parts are physically separable; compound parts are chemically bonded",
          },
        },
        {
          id: "cils-u10-s8-c-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solution contains 20 g of salt dissolved in 80 g of water. What is the percentage by mass of salt in the solution? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 20, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Percentage by mass",
                statement:
                  "Percentage = mass of solute ÷ mass of solution × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Total mass = $20 + 80 = 100\\ g$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{20}{100} \\times 100 = 20\\%$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20\\%$",
          },
        },
        {
          id: "cils-u10-s8-c-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which state of matter has particles that can slide past each other but keep a fixed volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vapour only" },
              { id: "b", text: "Gas" },
              { id: "c", text: "Liquid" },
              { id: "d", text: "Solid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "States of matter",
                statement:
                  "Liquids: fixed volume, particles slide past each other.",
              },
            ],
            steps: [
              {
                reasoning: "Only liquids fit both descriptions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Liquid",
          },
        },
        {
          id: "cils-u10-s8-c-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you could separate a mixture of sand, salt and water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation",
                statement: "Dissolve, filter, evaporate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Salt dissolves in water; sand remains undissolved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Filter to remove the sand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaporate the water to recover the salt.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dissolve salt → filter sand → evaporate water",
          },
        },
        {
          id: "cils-u10-s8-c-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student is given a mixture of iron filings, sand and salt. Design a method to separate all three components and recover each one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation",
                statement:
                  "Use magnetic, solubility and evaporation differences.",
              },
            ],
            steps: [
              {
                reasoning: "Use a magnet to remove iron filings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add water — salt dissolves, sand does not.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Filter to remove sand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaporate the water to recover salt.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Magnet → iron; dissolve → filter sand → evaporate → salt",
          },
        },
        {
          id: "cils-u10-s8-c-q16",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A candle burns for 45 minutes. How many seconds is this? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Seconds", answer: 2700, unit: "s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Unit conversion",
                statement: "1 minute = 60 seconds.",
              },
            ],
            steps: [
              {
                reasoning: "$45 \\times 60$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 2700\\ s$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2700\\ s$",
          },
        },
      ],
    },
    {
      id: "cils-u10-s8-phys",
      title: "Stage 8 physics checkpoint",
      skill: "Apply forces, energy and electricity concepts.",
      lesson: {
        sections: [
          {
            heading: "Forces and energy",
            body: "Forces change motion (push/pull, newtons); energy transfers: kinetic (moving), potential (height), thermal, sound, light. Circuits need a complete loop; current flows from + to − conventionally.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy types",
            statement: "KE $= \\frac12 mv^2$; GPE $= mgh$",
          },
          {
            name: "Circuit",
            statement: "Complete loop + power source = current flows",
          },
        ],
        workedExample: {
          problem:
            "A torch bulb doesn't light. Name two possible circuit problems.",
          solution:
            "Broken connection (incomplete circuit) or flat battery (no power source).",
        },
      },
      questions: [
        {
          id: "cils-u10-s8-p-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is needed for electric current to flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light" },
              { id: "b", text: "Just a wire" },
              { id: "c", text: "A magnet" },
              { id: "d", text: "A complete circuit with a power source" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Circuit",
                statement: "Complete loop + source required.",
              },
            ],
            steps: [
              {
                reasoning: "Current needs complete path and power source.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete circuit + power source",
          },
        },
        {
          id: "cils-u10-s8-p-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two forms of energy and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy forms",
                statement:
                  "Kinetic, potential, thermal, sound, light, electrical.",
              },
            ],
            steps: [
              {
                reasoning: "Any two correct forms with examples.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Two valid pairs.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. kinetic (moving car), gravitational PE (book on shelf).",
          },
        },
        {
          id: "cils-u10-s8-p-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ball rolls down a slope and up the other side. Describe the energy changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "GPE → KE → GPE.",
              },
            ],
            steps: [
              {
                reasoning: "At top: maximum GPE, zero KE.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rolling down: GPE → KE (speed increases).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Up other side: KE → GPE (slows, stops lower if friction).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GPE→KE descending; KE→GPE ascending; total decreases with friction.",
          },
        },
        {
          id: "cils-u10-s8-p-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a metal spoon feels hotter than a wooden spoon in hot soup, even though both are the same temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conduction",
                statement: "Metals conduct heat faster.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both at soup temperature — difference is heat transfer rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metal conducts heat to your hand quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wood is a poor conductor — heat transfers slowly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Delocalised electrons in metal carry heat energy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Metal conducts heat faster to your hand; wood insulates — same temperature, different heat transfer rate.",
          },
        },
        {
          id: "cils-u10-s8-p-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A form of energy" },
              { id: "b", text: "A push or pull measured in newtons" },
              { id: "c", text: "A type of electric current" },
              { id: "d", text: "A measure of speed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Force",
                statement: "A push or pull measured in newtons.",
              },
            ],
            steps: [
              {
                reasoning: "A force is a push or pull; its unit is the newton.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A push or pull measured in newtons",
          },
        },
        {
          id: "cils-u10-s8-p-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A remote-controlled car moves $3\\ m$ in $6\\ s$. Calculate its speed. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 0.5, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Speed",
                statement: "$v = \\frac{s}{t}$.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\frac{3}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v = 0.5\\ m\\,s^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.5\\ m\\,s^{-1}$",
          },
        },
        {
          id: "cils-u10-s8-p-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy store increases as a ball is lifted higher?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravitational potential energy" },
              { id: "b", text: "Kinetic energy" },
              { id: "c", text: "Sound energy" },
              { id: "d", text: "Thermal energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gravitational potential energy",
                statement: "Energy stored due to height above the ground.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Height increases gravitational PE; a stationary lifted ball has no KE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gravitational potential energy",
          },
        },
        {
          id: "cils-u10-s8-p-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If there is a break in a circuit wire, what happens to the current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays the same" },
              { id: "b", text: "It doubles" },
              { id: "c", text: "It stops completely" },
              { id: "d", text: "It flows backwards" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Circuit",
                statement: "Current needs a complete, unbroken loop.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A break makes the circuit incomplete, so current cannot flow.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It stops completely",
          },
        },
        {
          id: "cils-u10-s8-p-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $60\\ W$ light bulb is switched on for $5$ minutes. Calculate the energy it uses in joules. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 18000, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Electrical energy",
                statement: "$E = Pt$ — energy = power × time.",
              },
            ],
            steps: [
              {
                reasoning: "$t = 5 \\times 60 = 300\\ s$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E = 60 \\times 300 = 18000\\ J$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$18000\\ J$",
          },
        },
        {
          id: "cils-u10-s8-p-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A small car and a loaded lorry travel at the same speed. Explain why the lorry has more kinetic energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Kinetic energy",
                statement: "KE $= \\frac12 mv^2$ — depends on mass and speed.",
              },
            ],
            steps: [
              {
                reasoning: "Kinetic energy depends on both mass and speed squared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both vehicles have the same speed, so $v^2$ is the same.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The lorry has a much greater mass than the car.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Greater mass at the same speed means greater KE and more work needed to stop it.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Same speed but much larger mass → larger $\\frac12 mv^2$ → more kinetic energy.",
          },
        },
        {
          id: "cils-u10-s8-p-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is a good conductor of electricity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rubber" },
              { id: "b", text: "Copper" },
              { id: "c", text: "Plastic" },
              { id: "d", text: "Wood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conductors",
                statement: "Metals such as copper conduct electricity well.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Copper is a metal with free electrons; the others are insulators.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Copper",
          },
        },
        {
          id: "cils-u10-s8-p-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the energy changes when a ball is thrown vertically upwards and then falls back down.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "KE and GPE interchange as height and speed change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "As the ball rises, kinetic energy is transferred to gravitational PE and it slows down.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At the highest point the ball has maximum GPE and minimum KE.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As it falls, GPE is transferred back to KE and the ball speeds up.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Upwards: KE → GPE (slows); downwards: GPE → KE (speeds up).",
          },
        },
        {
          id: "cils-u10-s8-p-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $2\\ V$ battery is connected across a device carrying $0.5\\ A$. Calculate the power. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Power", answer: 1, unit: "W" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power",
                statement: "$P = VI$ — power = voltage × current.",
              },
            ],
            steps: [
              {
                reasoning: "$P = 2 \\times 0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P = 1\\ W$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1\\ W$",
          },
        },
        {
          id: "cils-u10-s8-p-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the resistance of a metal wire increases when it is heated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Resistance",
                statement: "Heating increases resistance for most metals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When heated, the metal atoms vibrate more vigorously.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Vibrating atoms collide with the moving electrons more often.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More collisions mean greater opposition to the flow of current.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "So for the same voltage the current decreases — resistance has increased.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "More atomic vibration → more electron collisions → higher resistance → lower current.",
          },
        },
        {
          id: "cils-u10-s8-p-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which form of energy is stored in a stretched elastic band?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thermal energy" },
              { id: "b", text: "Elastic potential energy" },
              { id: "c", text: "Gravitational potential energy" },
              { id: "d", text: "Kinetic energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Elastic potential energy",
                statement:
                  "Energy stored when an object is stretched or squashed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stretching stores energy in the deformed material — elastic PE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Elastic potential energy",
          },
        },
        {
          id: "cils-u10-s8-p-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "An electric heater rated $2\\ kW$ runs for $30$ minutes. Calculate the energy used in kWh. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 1, unit: "kWh" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Energy",
                statement: "$E = Pt$ — energy in kWh when power is in kW and time in hours.",
              },
            ],
            steps: [
              {
                reasoning: "$t = 30\\ min = 0.5\\ h$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E = 2 \\times 0.5 = 1\\ kWh$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1\\ kWh$",
          },
        },
      ],
    },
    {
      id: "cils-u10-s8-mx",
      title: "Stage 8 mixed checkpoint",
      skill: "Apply chemistry and physics knowledge together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine materials science, forces and motion, electricity and waves. Show formula substitutions and units.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$v = \\frac{s}{t}$" },
          { name: "Ohm's law", statement: "$V = IR$" },
        ],
        workedExample: {
          problem: "A car travels $150\\ m$ in $30\\ s$. Find its speed.",
          solution: "$v = \\frac{150}{30} = 5\\ m\\,s^{-1}$.",
        },
      },
      questions: [
        {
          id: "cils-u10-s8-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter has a fixed shape and a fixed volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plasma" },
              { id: "b", text: "Gas" },
              { id: "c", text: "Liquid" },
              { id: "d", text: "Solid" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "States of matter",
                statement:
                  "Solids have fixed shape and volume; liquids fixed volume only; gases neither.",
              },
            ],
            steps: [
              {
                reasoning: "Only solids keep both shape and volume fixed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solid",
          },
        },
        {
          id: "cils-u10-s8-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist travels $150\\ m$ in $30\\ s$. Calculate her speed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Speed", statement: "$v = \\frac{s}{t}$." },
            ],
            steps: [
              { reasoning: "$v = \\frac{150}{30}$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 5\\ m\\,s^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\ m\\,s^{-1}$",
          },
        },
        {
          id: "cils-u10-s8-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Balance the equation: $H_2 + O_2 \\rightarrow H_2O$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of mass",
                statement:
                  "Atoms are conserved — same number of each element on both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hydrogen: 2 atoms on left, so coefficient 2 on $H_2O$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oxygen: 2 atoms on left, so coefficient 1 on $O_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2H_2 + O_2 \\rightarrow 2H_2O$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2H_2 + O_2 \\rightarrow 2H_2O$",
          },
        },
        {
          id: "cils-u10-s8-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two $6\\ \\Omega$ resistors are connected in series to a $12\\ V$ battery. Find the total resistance and the current in the circuit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Series circuit",
                statement: "Resistances add in series; $V = IR$.",
              },
            ],
            steps: [
              {
                reasoning: "Total resistance $R = 6 + 6 = 12\\ \\Omega$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange $I = \\frac{V}{R} = \\frac{12}{12}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$I = 1\\ A$.", marks: 1, markCode: "M" },
              {
                reasoning: "$R = 12\\ \\Omega$, $I = 1\\ A$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12\\ \\Omega$; $1\\ A$",
          },
        },
        {
          id: "cils-u10-s8-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil" },
              { id: "b", text: "Table salt (NaCl)" },
              { id: "c", text: "Sea water" },
              { id: "d", text: "Air" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compound",
                statement: "Elements chemically joined in fixed proportions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NaCl is sodium and chlorine chemically joined; the others are mixtures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Table salt (NaCl)",
          },
        },
        {
          id: "cils-u10-s8-mx-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels $240\\ m$ in $60\\ s$. Calculate its speed. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Speed", answer: 4, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Speed", statement: "$v = \\frac{s}{t}$." },
            ],
            steps: [
              {
                reasoning: "$v = \\frac{240}{60}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$v = 4\\ m\\,s^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4\\ m\\,s^{-1}$",
          },
        },
        {
          id: "cils-u10-s8-mx-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a chemical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crumpling a piece of foil" },
              { id: "b", text: "Dissolving sugar in water" },
              { id: "c", text: "Burning paper" },
              { id: "d", text: "Melting ice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chemical change",
                statement:
                  "A new substance is formed that cannot easily be reversed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Burning forms new substances (ash, gases); the others are physical changes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Burning paper",
          },
        },
        {
          id: "cils-u10-s8-mx-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Balance the equation: $CH_4 + O_2 \\rightarrow CO_2 + H_2O$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of mass",
                statement:
                  "Atoms are conserved — same number of each element on both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Carbon: 1 atom on each side — coefficient 1 on $CO_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hydrogen: 4 atoms on left, so coefficient 2 on $H_2O$; oxygen then needs coefficient 2 on $O_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$",
          },
        },
        {
          id: "cils-u10-s8-mx-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $100\\ W$ light bulb is on for $8$ hours. Calculate the energy used in kWh. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 0.8, unit: "kWh" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Energy",
                statement: "$E = Pt$ — energy in kWh = power in kW × time in hours.",
              },
            ],
            steps: [
              {
                reasoning: "$P = 100\\ W = 0.1\\ kW$; $E = 0.1 \\times 8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E = 0.8\\ kWh$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.8\\ kWh$",
          },
        },
        {
          id: "cils-u10-s8-mx-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why metals are used for the wires inside electrical cables but plastic is used for the insulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conductors and insulators",
                statement:
                  "Metals conduct electricity well; plastics do not conduct.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Metals contain free electrons that can carry electric current.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This lets current flow along the cable with little energy loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Plastic has no free electrons, so it is an insulator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The plastic prevents current escaping and protects people from electric shock.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Metal conducts current efficiently; plastic insulates and prevents electric shock.",
          },
        },
        {
          id: "cils-u10-s8-mx-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The particles of a gas...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are fixed in position" },
              { id: "b", text: "slide past each other but stay close together" },
              { id: "c", text: "do not move at all" },
              { id: "d", text: "are far apart and move freely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "States of matter",
                statement: "Gas particles are widely spaced and move rapidly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gas particles are far apart with large spaces between them and move freely.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Are far apart and move freely",
          },
        },
        {
          id: "cils-u10-s8-mx-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resistor has $9\\ V$ across it and a current of $1.5\\ A$ flows through it. Calculate its resistance. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance", answer: 6, unit: "Ω" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Ohm's law", statement: "$R = \\frac{V}{I}$." },
            ],
            steps: [
              {
                reasoning: "$R = \\frac{9}{1.5}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$R = 6\\ \\Omega$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6\\ \\Omega$",
          },
        },
        {
          id: "cils-u10-s8-mx-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a torch bulb lights, most of the electrical energy becomes...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sound" },
              { id: "b", text: "kinetic energy" },
              { id: "c", text: "light and heat" },
              { id: "d", text: "chemical energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy transfer",
                statement: "Electrical energy in a bulb becomes light and heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A bulb filament heats up and glows — energy leaves as light and thermal energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Light and heat",
          },
        },
        {
          id: "cils-u10-s8-mx-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two identical bulbs are connected in series to a battery. Explain why both bulbs are dimmer than when only one bulb is connected.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Series circuit",
                statement: "In series the voltage is shared between components.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With two bulbs in series the battery voltage is shared between them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each bulb receives only half the voltage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lower voltage means lower current and less power, so each bulb is dimmer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Voltage shared in series → each bulb gets less → less power → dimmer.",
          },
        },
        {
          id: "cils-u10-s8-mx-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device transfers energy at a rate of $60\\ W$ for $30\\ s$. Calculate the energy transferred in joules. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 1800, unit: "J" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Energy",
                statement: "$E = Pt$ — energy = power × time.",
              },
            ],
            steps: [
              {
                reasoning: "$E = 60 \\times 30$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E = 1800\\ J$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1800\\ J$",
          },
        },
        {
          id: "cils-u10-s8-mx-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A candle flame gives out light and heat. Trace the energy changes from the wax to the surroundings.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "Chemical energy in fuel is released as thermal and light energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The wax stores chemical energy from when the candle was made.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Burning the wax releases this energy as heat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some energy is also released as light from the flame.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This energy spreads to the surroundings and cannot be reused by the candle.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Chemical energy in wax → thermal + light energy → dissipated to surroundings.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u10-stage8-chem-phys-notes",
      title: "Stage 8 chemistry and physics — revision notes",
      summary: "Mixtures vs compounds, combustion, circuits, energy transfers.",
      sections: [
        {
          heading: "Chemistry",
          body: "Element/compound/mixture distinctions; combustion → CO₂ + H₂O; separation techniques; CO is toxic.",
        },
        {
          heading: "Physics",
          body: "Circuits need complete loop; energy forms transfer (GPE↔KE); metals conduct heat better than wood.",
        },
      ],
    },
  ],
};
