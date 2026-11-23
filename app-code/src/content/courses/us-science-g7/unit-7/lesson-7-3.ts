import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "s7-u7-lesson-7-3",
  code: "7-3",
  title: "States of Matter and Changes",
  goal: "I CAN describe the three states of matter, explain phase changes, and distinguish between physical and chemical changes.",
  standards: [
    "MS-PS1-1",
    "MS-PS1-4",
    "MS-PS1-5",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Solid",
      definition:
        "A state of matter with fixed shape and volume; particles are tightly packed.",
    },
    {
      term: "Liquid",
      definition:
        "A state of matter with fixed volume but takes the shape of its container; particles can move.",
    },
    {
      term: "Gas",
      definition:
        "A state of matter with no fixed shape or volume; particles are far apart and move freely.",
    },
    { term: "Melting", definition: "The change from solid to liquid." },
    {
      term: "Boiling",
      definition: "The rapid change from liquid to gas throughout the liquid.",
    },
    {
      term: "Evaporation",
      definition: "The change from liquid to gas at the surface of a liquid.",
    },
    {
      term: "Chemical change",
      definition:
        "A change that produces new substances with different properties.",
    },
  ],
  concepts: [
    {
      id: "s7-u7-states",
      title: "States of matter",
      skill:
        "Describe the properties of solids, liquids and gases and how particles behave in each.",
      lesson: {
        sections: [
          {
            heading: "Particle model",
            body: "Matter exists in three states based on how particles are arranged and move:\n\n- **Solid**: particles are tightly packed in fixed positions; they vibrate but don't move freely. Fixed shape and volume.\n- **Liquid**: particles are close but can slide past each other; they take the shape of the container. Fixed volume.\n- **Gas**: particles are far apart and move freely in all directions; no fixed shape or volume.",
          },
          {
            heading: "Properties comparison",
            body: "| State | Shape | Volume | Particle arrangement |\n|-------|-------|--------|---------------------|\n| Solid | Fixed | Fixed | Tightly packed, fixed |\n| Liquid | Container | Fixed | Close, can move |\n| Gas | Fills container | None | Far apart, free |",
          },
        ],
        keyFormulas: [
          {
            name: "Solid",
            statement: "Fixed shape and volume; particles tightly packed.",
          },
          {
            name: "Liquid",
            statement:
              "Fixed volume, takes container shape; particles can slide.",
          },
          {
            name: "Gas",
            statement:
              "No fixed shape or volume; particles far apart and free.",
          },
        ],
        workedExample: {
          problem: "Why does a gas fill its container completely?",
          solution:
            "Gas particles move freely in all directions and are far apart, so they spread to fill all available space.",
        },
      },
      questions: [
        {
          id: "s7-u7-states-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter has a fixed shape and volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liquid" },
              { id: "b", text: "Gas" },
              { id: "c", text: "Solid" },
              { id: "d", text: "Plasma" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solid",
                statement: "Fixed shape and volume.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solids have fixed shape and volume; liquids have fixed volume only; gases have neither.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Solid.",
            commonErrors: ["Choosing (a): liquids take container shape."],
          },
        },
        {
          id: "s7-u7-states-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the particle arrangement in a solid and a gas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Particle model",
                statement:
                  "Solids: tightly packed, fixed. Gases: far apart, free.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solid particles are tightly packed in fixed positions.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Gas particles are far apart and move freely.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This explains why solids have fixed shape and gases fill containers.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Solids: tightly packed, fixed. Gases: far apart, free-moving.",
            commonErrors: ["Saying gas particles are tightly packed."],
          },
        },
        {
          id: "s7-u7-states-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a liquid takes the shape of its container but keeps its volume.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Liquid properties",
                statement: "Particles can move but stay close together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Liquid particles can slide past each other, allowing the liquid to flow.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Particles remain close together, maintaining fixed volume.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The liquid flows to the bottom of the container due to gravity.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "It cannot expand to fill the container like a gas because particles stay close.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Particles can move (shape changes) but stay close (volume fixed).",
            commonErrors: ["Saying liquids have no fixed volume."],
          },
        },
        {
          id: "s7-u7-states-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A substance is heated and changes from solid to liquid to gas.",
          parts: [
            { label: "a", prompt: "Name the two phase changes.", marks: 2 },
            {
              label: "b",
              prompt: "What happens to particle energy during heating?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Does the substance's chemical identity change? Explain.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give an example of this process.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phase changes",
                statement:
                  "Melting (solid→liquid) and boiling/evaporation (liquid→gas).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Melting (solid→liquid) and vaporization (liquid→gas).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Particles gain kinetic energy, move faster, overcome forces holding them together.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "No — phase changes are physical; substance remains the same chemically.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Ice melting to water, then water boiling to steam.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Melting, vaporization (b) Particles gain energy (c) No, physical change (d) Ice→water→steam.",
            commonErrors: ["Saying phase changes create new substances."],
          },
        },
      ],
    },
    {
      id: "s7-u7-phase-changes",
      title: "Phase changes and energy",
      skill:
        "Explain melting, freezing, evaporation, condensation, sublimation and deposition and their energy requirements.",
      lesson: {
        sections: [
          {
            heading: "Phase change names",
            body: "Phase changes between states:\n\n- **Melting**: solid → liquid (absorbs energy)\n- **Freezing**: liquid → solid (releases energy)\n- **Vaporization** (evaporation/boiling): liquid → gas (absorbs energy)\n- **Condensation**: gas → liquid (releases energy)\n- **Sublimation**: solid → gas (absorbs energy; e.g., dry ice)\n- **Deposition**: gas → solid (releases energy; e.g., frost)",
          },
          {
            heading: "Energy in phase changes",
            body: "Phase changes require or release energy because particles must overcome or form intermolecular forces:\n\n- **Endothermic** (absorbs energy): melting, vaporization, sublimation.\n- **Exothermic** (releases energy): freezing, condensation, deposition.\n\nTemperature stays constant during a phase change as energy goes into breaking/forming bonds rather than increasing kinetic energy.",
          },
        ],
        keyFormulas: [
          {
            name: "Endothermic changes",
            statement: "Melting, vaporization, sublimation — absorb energy.",
          },
          {
            name: "Exothermic changes",
            statement: "Freezing, condensation, deposition — release energy.",
          },
          {
            name: "Temperature constant",
            statement:
              "During phase change, energy goes to bond changes, not temperature.",
          },
        ],
        workedExample: {
          problem: "Why does ice stay at 0°C while melting?",
          solution:
            "Energy goes into breaking the bonds holding water molecules in the solid lattice, not into increasing temperature.",
        },
      },
      questions: [
        {
          id: "s7-u7-phase-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is sublimation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solid to liquid" },
              { id: "b", text: "Liquid to gas" },
              { id: "c", text: "Solid to gas" },
              { id: "d", text: "Gas to liquid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sublimation",
                statement: "Solid changes directly to gas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sublimation is solid → gas, skipping the liquid state (e.g., dry ice).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Solid to gas.",
            commonErrors: ["Choosing (a): that's melting."],
          },
        },
        {
          id: "s7-u7-phase-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why condensation releases energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Phase change energy",
                statement:
                  "Gas → liquid forms intermolecular forces, releasing energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When gas molecules condense to liquid, they form intermolecular attractions.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Forming these attractions releases energy (exothermic).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This is why condensation warms the surroundings (e.g., steam burns).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Condensation forms intermolecular bonds, releasing energy.",
            commonErrors: ["Saying condensation absorbs energy."],
          },
        },
        {
          id: "s7-u7-phase-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pot of water is heated on a stove. Describe what happens at the molecular level during boiling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Boiling",
                statement:
                  "Liquid → gas throughout; requires energy to overcome intermolecular forces.",
              },
            ],
            steps: [
              {
                reasoning: "Heat increases water molecule kinetic energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "At boiling point, molecules have enough energy to overcome intermolecular forces.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Molecules escape as water vapor throughout the liquid (not just surface).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Temperature stays at boiling point during the phase change.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Heat gives molecules energy to escape as vapor; temperature stays constant during boiling.",
            commonErrors: ["Saying temperature keeps rising during boiling."],
          },
        },
        {
          id: "s7-u7-phase-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze the energy changes in the water cycle.",
          parts: [
            {
              label: "a",
              prompt: "What phase change occurs during evaporation?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Is evaporation endothermic or exothermic?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What phase change occurs during condensation?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Where does the energy for evaporation come from?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water cycle energy",
                statement:
                  "Evaporation absorbs solar energy; condensation releases it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Liquid water → water vapor (liquid to gas).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Endothermic — absorbs energy from sun/warm surfaces.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Water vapor → liquid droplets (gas to liquid).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Solar energy heats water surfaces, providing energy for evaporation.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Liquid→gas (b) Endothermic (c) Gas→liquid (d) Solar energy.",
            commonErrors: ["Saying condensation absorbs energy."],
          },
        },
      ],
    },
    {
      id: "s7-u7-physical-chemical",
      title: "Physical vs chemical changes",
      skill:
        "Distinguish between physical and chemical changes using evidence.",
      lesson: {
        sections: [
          {
            heading: "Physical changes",
            body: "A **physical change** alters a substance's appearance or state without changing its chemical identity. The substance remains the same chemically.\n\nExamples: melting ice, dissolving salt, crushing a can, cutting paper, boiling water, stretching a rubber band.\n\nEvidence: no new substance formed, reversible (usually), no color change to a new substance, no gas produced (unless physical like boiling).",
          },
          {
            heading: "Chemical changes",
            body: "A **chemical change** produces new substances with different properties. The original substance is transformed.\n\nExamples: rusting iron, burning wood, cooking an egg, digestion, photosynthesis, sour milk.\n\nEvidence: new substance formed, often irreversible, color change, gas bubbles, precipitate, energy released or absorbed (heat, light).",
          },
        ],
        keyFormulas: [
          {
            name: "Physical change",
            statement: "No new substance; reversible; same chemical identity.",
          },
          {
            name: "Chemical change",
            statement:
              "New substance formed; often irreversible; different properties.",
          },
          {
            name: "Evidence of chemical change",
            statement:
              "Color change, gas, precipitate, energy change, new substance.",
          },
        ],
        workedExample: {
          problem: "Is frying an egg a physical or chemical change?",
          solution:
            "Chemical — the proteins denature and new substances form; cannot be reversed to a raw egg.",
        },
      },
      questions: [
        {
          id: "s7-u7-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a chemical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting ice" },
              { id: "b", text: "Dissolving salt" },
              { id: "c", text: "Rusting iron" },
              { id: "d", text: "Cutting paper" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chemical change",
                statement: "Produces new substances.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rusting iron produces iron oxide, a new substance — chemical change.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Rusting iron.",
            commonErrors: ["Choosing (a): melting is physical."],
          },
        },
        {
          id: "s7-u7-pc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two pieces of evidence that a chemical change has occurred.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chemical change evidence",
                statement:
                  "New substance, color change, gas, precipitate, energy change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formation of a new substance with different properties.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Color change, gas bubbles, or precipitate formation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Energy released or absorbed (heat, light).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "New substance formed; color change/gas/precipitate; energy change.",
            commonErrors: ["Listing only one type of evidence."],
          },
        },
        {
          id: "s7-u7-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each as physical or chemical change: (a) burning wood, (b) dissolving sugar, (c) photosynthesis, (d) crushing a can.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical vs chemical",
                statement: "No new substance vs new substance formed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Burning wood = chemical (new substances: ash, CO2, water).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "(b) Dissolving sugar = physical (sugar still sugar).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "(c) Photosynthesis = chemical (CO2 + water → glucose + O2).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "(d) Crushing a can = physical (same material, different shape).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Chemical (b) Physical (c) Chemical (d) Physical.",
            commonErrors: ["Saying dissolving is chemical."],
          },
        },
        {
          id: "s7-u7-pc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student observes that bread dough rises when yeast is added and warm water is mixed in.",
          parts: [
            {
              label: "a",
              prompt: "What evidence suggests a chemical change?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the role of yeast in this process.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Is baking bread a physical or chemical change? Explain.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Why can't risen dough be 'un-risen' to the original state?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fermentation",
                statement: "Yeast produces CO2 gas, causing dough to rise.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Gas bubbles form (CO2) and dough texture changes — evidence of chemical change.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Yeast ferments sugars, producing CO2 gas and alcohol; CO2 creates bubbles.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Chemical — new substances form (CO2, alcohol) and cannot be reversed.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Chemical changes are irreversible; new substances cannot be converted back.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Gas bubbles, texture change (b) Yeast ferments sugar → CO2 (c) Chemical (d) Irreversible chemical change.",
            commonErrors: ["Saying it's just physical expansion."],
          },
        },
      ],
    },
  ],
};
