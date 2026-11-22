import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "esc7-u2-lesson-2-1",
  code: "2-1",
  title: "States of Matter and Particle Theory",
  goal: "I CAN explain the three states of matter using particle theory and changes of state.",
  standards: ["Edexcel KS3 Science — Chemistry"],
  vocabulary: [
    {
      term: "Particle theory",
      definition:
        "Model explaining matter as particles with energy and spacing determining state.",
    },
    {
      term: "Solid",
      definition:
        "Particles tightly packed, vibrating in place — fixed shape and volume.",
    },
    {
      term: "Liquid",
      definition:
        "Particles close but can slide past each other — fixed volume, variable shape.",
    },
    {
      term: "Gas",
      definition:
        "Particles far apart, moving freely — variable shape and volume.",
    },
  ],
  concepts: [
    {
      id: "esc7-u2-states",
      title: "Particle Theory and States of Matter",
      skill:
        "Explain how particle arrangement and energy determine the state of matter.",
      lesson: {
        sections: [
          {
            heading: "Particle arrangement",
            body: "**Solids**: particles tightly packed in fixed positions, vibrating in place — gives fixed shape and volume. **Liquids**: particles close together but can slide past each other — fixed volume but takes container's shape. **Gases**: particles far apart, moving rapidly in all directions — fills any container.\n\n**Temperature effect**: heating gives particles energy → they move faster → spread further apart. Cooling → less energy → particles slow → pack closer. This explains all changes of state.",
          },
          {
            heading: "Changes of state",
            body: "**Melting** (solid→liquid), **evaporation/boiling** (liquid→gas), **condensation** (gas→liquid), **freezing** (liquid→solid), **sublimation** (solid→gas, e.g. dry ice).\n\n**During state changes**: particles gain/lose energy but temperature stays constant — energy breaks/form bonds between particles, not increases kinetic energy. Water at 0°C is ice and water simultaneously during melting.",
          },
        ],
        keyFormulas: [
          {
            name: "Particle states",
            statement: "Solid=tight/fixed, liquid=close/slide, gas=apart/free.",
          },
          {
            name: "State changes",
            statement:
              "Melting, evaporation, condensation, freezing, sublimation.",
          },
        ],
        workedExample: {
          problem: "Why does a puddle disappear on a warm day?",
          solution:
            "Water molecules gain energy → evaporate → become water vapour gas — invisible but still present in air.",
        },
      },
      questions: [
        {
          id: "esc7-u2-states-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How are particles arranged in a solid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tightly packed, vibrating in fixed positions" },
              { id: "b", text: "Far apart, moving freely" },
              { id: "c", text: "Close but sliding past each other" },
              { id: "d", text: "Random and scattered" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solid particles",
                statement: "Tightly packed, vibrating in place.",
              },
            ],
            steps: [
              {
                reasoning: "Solid = fixed positions, vibration only.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Tightly packed, vibrating in place",
            commonErrors: ["Confusing with liquid."],
          },
        },
        {
          id: "esc7-u2-states-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a gas fills its container completely.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas behaviour",
                statement:
                  "Gas particles move freely in all directions until hitting container walls.",
              },
            ],
            steps: [
              {
                reasoning: "Particles far apart, moving rapidly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Move in all directions until walls.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Uniformly fills available space.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Gas particles move freely in all directions — spreading to fill all available space.",
            commonErrors: [
              "Particles attracted to walls view.",
              "No movement explanation.",
            ],
          },
        },
        {
          id: "esc7-u2-states-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does temperature stay constant during melting even though heat is being added?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Latent heat",
                statement:
                  "Energy during state change breaks bonds rather than increasing kinetic energy.",
              },
            ],
            steps: [
              {
                reasoning: "Energy breaks bonds between particles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Not used to increase particle speed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Temperature measures kinetic energy.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Added energy breaks intermolecular bonds (latent heat) instead of increasing particle kinetic energy — so temperature stays constant.",
            commonErrors: [
              "Energy vanishes view.",
              "No bond-breaking mechanism.",
            ],
          },
        },
        {
          id: "esc7-u2-states-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sealed syringe contains air. The plunger is pushed in.",
          parts: [
            {
              label: "a",
              prompt: "Describe what happens to the gas particles.",
              marks: 3,
            },
            { label: "b", prompt: "Explain why pressure increases.", marks: 3 },
            {
              label: "c",
              prompt: "Predict what happens if temperature also increases.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas compression",
                statement:
                  "Compressing gas reduces volume → more particle collisions → higher pressure.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Same particles in smaller volume.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Particles closer together.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) More frequent wall collisions.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) More collisions = more force on walls.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Pressure = force per area.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Higher temp = faster particles = even more pressure.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) closer, more collisions (b) more force→higher pressure (c) temp increase adds more pressure",
            commonErrors: [
              "Particles destroyed view.",
              "Pressure mechanism unclear.",
            ],
          },
        },
      ],
    },
    {
      id: "esc7-u2-mixtures",
      title: "Mixtures and Separation",
      skill:
        "Distinguish mixtures from compounds and select separation techniques.",
      lesson: {
        sections: [
          {
            heading: "Mixtures vs compounds",
            body: "**Mixture**: two or more substances physically combined — each retains its properties, no chemical change, can be separated by physical means. **Compound**: elements chemically bonded — new substance with different properties, requires chemical reaction to separate.\n\nExamples: air (mixture of gases), salt water (mixture), steel (alloy mixture) vs water H₂O (compound), table salt NaCl (compound), CO₂ (compound).",
          },
          {
            heading: "Separation techniques",
            body: "**Filtration**: separates insoluble solid from liquid (sand from water). **Evaporation**: recovers dissolved solid (salt from water). **Distillation**: separates by boiling point — simple (solvent from dissolved solid), fractional (two miscible liquids). **Chromatography**: separates dissolved substances by different movement rates. **Magnetic separation**: separates magnetic materials. **Decanting**: pouring off liquid from settled solid.\n\nChoosing the right technique depends on the properties being exploited: solubility, boiling point, magnetism, particle size.",
          },
        ],
        keyFormulas: [
          {
            name: "Mixture vs compound",
            statement:
              "Mixture=physical mix/separable; compound=chemical bond/new substance.",
          },
          {
            name: "Separation methods",
            statement:
              "Filtration, evaporation, distillation, chromatography, magnetism.",
          },
        ],
        workedExample: {
          problem: "Separate a mixture of iron filings, sand and salt.",
          solution:
            "Magnet removes iron → dissolve salt in water → filter sand → evaporate water to recover salt.",
        },
      },
      questions: [
        {
          id: "esc7-u2-mixtures-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the key difference between a mixture and a compound?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Mixtures can be separated physically; compounds require chemical change",
              },
              { id: "b", text: "No difference" },
              { id: "c", text: "Compounds are always liquids" },
              { id: "d", text: "Mixtures are always solids" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mixture vs compound",
                statement: "Physical separation vs chemical bond.",
              },
            ],
            steps: [
              {
                reasoning: "Mixtures=physical; compounds=chemical.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Physical separation vs chemical change",
            commonErrors: ["State-based confusion."],
          },
        },
        {
          id: "esc7-u2-mixtures-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which technique separates an insoluble solid from a liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Chromatography" },
              { id: "c", text: "Distillation" },
              { id: "d", text: "Filtration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Filtration",
                statement:
                  "Separates insoluble solid from liquid using filter paper.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Filtration traps insoluble solid; liquid passes through.",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Filtration",
            commonErrors: ["Confusing with evaporation."],
          },
        },
        {
          id: "esc7-u2-mixtures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why fractional distillation is needed to separate crude oil fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fractional distillation",
                statement:
                  "Separates liquids with close boiling points using temperature gradient column.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Crude oil fractions have similar/close boiling points.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Simple distillation insufficient.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fractionating column provides temperature gradient.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each fraction condenses at its boiling point.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Close boiling points require gradient column — each fraction condenses at its own temperature level.",
            commonErrors: [
              "Simple distillation suffices view.",
              "No gradient mechanism.",
            ],
          },
        },
        {
          id: "esc7-u2-mixtures-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A mixture contains iron filings, sand, salt and water.",
          parts: [
            {
              label: "a",
              prompt: "Outline a method to separate all four components.",
              marks: 5,
            },
            { label: "b", prompt: "Justify each technique chosen.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation design",
                statement:
                  "Choose techniques exploiting different physical properties.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Magnet removes iron filings.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Dissolve salt in water, filter sand.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Evaporate water to recover salt.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct sequence/logic.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(a) All components addressed.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Techniques justified by properties.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Magnetism/solubility/volatility exploited.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "Magnet→iron; dissolve+filter→sand; evaporate→salt; water collected separately",
            commonErrors: ["Wrong sequence.", "Missing component."],
          },
        },
      ],
    },
  ],
};
