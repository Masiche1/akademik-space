import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "s7-u7-lesson-7-2",
  code: "7-2",
  title: "Mixtures, Solutions and Physical Properties",
  goal: "I CAN distinguish between homogeneous and heterogeneous mixtures, describe solutions and their properties, and identify physical properties used to separate mixtures.",
  standards: [
    "MS-PS1-2",
    "MS-PS1-4",
    "SEP: Developing and Using Models",
    "SEP: Planning and Carrying Out Investigations",
  ],
  vocabulary: [
    {
      term: "Homogeneous mixture",
      definition:
        "A mixture with uniform composition throughout, such as salt water or air.",
    },
    {
      term: "Heterogeneous mixture",
      definition:
        "A mixture with non-uniform composition, such as salad or granite.",
    },
    {
      term: "Solution",
      definition:
        "A homogeneous mixture where one substance (solute) is dissolved in another (solvent).",
    },
    { term: "Solute", definition: "The substance dissolved in a solution." },
    {
      term: "Solvent",
      definition:
        "The substance that dissolves the solute, usually the larger amount.",
    },
    {
      term: "Solubility",
      definition:
        "The maximum amount of solute that can dissolve in a given amount of solvent at a given temperature.",
    },
    {
      term: "Physical property",
      definition:
        "A characteristic that can be observed or measured without changing the substance's identity.",
    },
  ],
  concepts: [
    {
      id: "s7-u7-mixtures",
      title: "Types of mixtures",
      skill:
        "Distinguish between homogeneous and heterogeneous mixtures and give examples.",
      lesson: {
        sections: [
          {
            heading: "Homogeneous mixtures",
            body: "A **homogeneous mixture** has the same composition throughout — you cannot see the different components. Examples:\n\n- **Solutions**: salt water, sugar water, air (gases mixed)\n- **Alloys**: brass (copper + zinc), steel (iron + carbon)\n\nThese are also called **solutions** when one substance is dissolved in another.",
          },
          {
            heading: "Heterogeneous mixtures",
            body: "A **heterogeneous mixture** has visibly different parts or non-uniform composition. Examples:\n\n- **Suspensions**: muddy water, salad dressing (particles settle)\n- **Colloids**: milk, fog (particles dispersed but not dissolved)\n- **Mechanical mixtures**: granite, trail mix, soil\n\nYou can usually see the different components or they separate over time.",
          },
        ],
        keyFormulas: [
          {
            name: "Homogeneous",
            statement: "Uniform composition; cannot see components.",
          },
          {
            name: "Heterogeneous",
            statement: "Non-uniform; components visible or separable.",
          },
          {
            name: "Solution",
            statement: "Homogeneous mixture of solute dissolved in solvent.",
          },
        ],
        workedExample: {
          problem: "Classify: (a) salt water, (b) granite, (c) milk, (d) air.",
          solution:
            "(a) Homogeneous solution (b) Heterogeneous mechanical mixture (c) Colloid (heterogeneous) (d) Homogeneous gas mixture.",
        },
      },
      questions: [
        {
          id: "s7-u7-mixtures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a homogeneous mixture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Granite" },
              { id: "b", text: "Salad" },
              { id: "c", text: "Salt water" },
              { id: "d", text: "Soil" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homogeneous mixture",
                statement: "Uniform composition throughout.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Salt water is uniform — salt is dissolved, not visible.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Salt water.",
            commonErrors: [
              "Choosing (a): granite has visible different minerals.",
            ],
          },
        },
        {
          id: "s7-u7-mixtures-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a solution and a suspension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solution",
                statement: "Homogeneous; solute dissolved in solvent.",
              },
              {
                kind: "definition",
                name: "Suspension",
                statement: "Heterogeneous; particles suspended but settle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solution: solute dissolves completely, uniform, does not settle.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Suspension: particles are suspended but not dissolved, settle over time.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Example: salt water = solution; muddy water = suspension.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Solution = dissolved, uniform. Suspension = suspended particles that settle.",
            commonErrors: ["Saying suspensions are homogeneous."],
          },
        },
        {
          id: "s7-u7-mixtures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each as homogeneous or heterogeneous: (a) air, (b) trail mix, (c) sugar water, (d) fog.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homogeneous vs heterogeneous",
                statement: "Uniform vs non-uniform composition.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Air = homogeneous gas mixture.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "(b) Trail mix = heterogeneous mechanical mixture.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "(c) Sugar water = homogeneous solution.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "(d) Fog = colloid (heterogeneous).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Homogeneous (b) Heterogeneous (c) Homogeneous (d) Heterogeneous.",
            commonErrors: ["Classifying fog as homogeneous."],
          },
        },
        {
          id: "s7-u7-mixtures-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student has a sample of seawater.",
          parts: [
            {
              label: "a",
              prompt: "Classify seawater as a type of mixture.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify the solvent and solute.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How could you separate the salt from the water?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Would evaporation change the salt's chemical composition? Explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solution",
                statement:
                  "Homogeneous mixture with solute dissolved in solvent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Seawater is a homogeneous solution (salt dissolved in water).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Solvent = water; solute = dissolved salts.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Evaporation or distillation separates salt from water.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "No — evaporation is physical; salt remains NaCl.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Homogeneous solution (b) Water solvent, salts solute (c) Evaporation/distillation (d) No — physical change.",
            commonErrors: ["Saying evaporation changes salt chemically."],
          },
        },
      ],
    },
    {
      id: "s7-u7-solutions",
      title: "Solutions and solubility",
      skill:
        "Describe solutions, solubility, and factors affecting dissolution.",
      lesson: {
        sections: [
          {
            heading: "Solution components",
            body: "A **solution** is a homogeneous mixture where a **solute** is dissolved in a **solvent**. The solvent is usually the larger amount (often water). The solute can be solid, liquid or gas.\n\n- **Concentration**: amount of solute per amount of solvent.\n- **Saturated solution**: contains the maximum solute at that temperature.\n- **Unsaturated solution**: can dissolve more solute.\n- **Supersaturated**: contains more than normally possible (unstable).",
          },
          {
            heading: "Solubility and temperature",
            body: "**Solubility** is the maximum amount of solute that dissolves in a given amount of solvent at a given temperature.\n\n- Most solids are **more soluble in hot water** than cold.\n- Gases are **less soluble in hot water** than cold (why soda goes flat when warm).\n- Solubility is a physical property — it does not change the solute's chemical identity.",
          },
        ],
        keyFormulas: [
          {
            name: "Solution",
            statement: "Solute dissolved in solvent; homogeneous.",
          },
          {
            name: "Solubility",
            statement: "Max solute that dissolves at given temperature.",
          },
          {
            name: "Temperature effect",
            statement: "Solids: more soluble hot. Gases: less soluble hot.",
          },
        ],
        workedExample: {
          problem: "Why does sugar dissolve faster in hot water?",
          solution:
            "Hot water has more kinetic energy; sugar molecules move faster and collide more with water molecules, dissolving faster.",
        },
      },
      questions: [
        {
          id: "s7-u7-solutions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a salt water solution, what is the solute?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Salt" },
              { id: "c", text: "Both equally" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solute",
                statement: "Substance dissolved in solution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Salt is the solute dissolved in water (the solvent).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Salt.",
            commonErrors: ["Choosing (a): water is the solvent."],
          },
        },
        {
          id: "s7-u7-solutions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define solubility and explain how temperature affects it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solubility",
                statement: "Max solute dissolved at given temperature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solubility = maximum amount of solute that dissolves in a given amount of solvent.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Most solids are more soluble in hot water (more kinetic energy).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Gases are less soluble in hot water (they escape more easily).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Solubility is max dissolved solute; solids more soluble hot, gases less soluble hot.",
            commonErrors: ["Saying temperature doesn't affect solubility."],
          },
        },
        {
          id: "s7-u7-solutions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student adds sugar to water until no more dissolves. What type of solution is this?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Saturated solution",
                statement: "Contains maximum solute at that temperature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When no more solute dissolves, the solution is saturated.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "It contains the maximum amount of solute for that temperature.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "If heated, more solute could dissolve (solubility increases).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "If cooled, some solute may crystallize out.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Saturated solution — maximum solute at that temperature.",
            commonErrors: ["Saying it's unsaturated or supersaturated."],
          },
        },
        {
          id: "s7-u7-solutions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain why a can of soda fizzes when opened and goes flat over time.",
          parts: [
            { label: "a", prompt: "What gas is dissolved in soda?", marks: 1 },
            { label: "b", prompt: "Why does it fizz when opened?", marks: 2 },
            { label: "c", prompt: "Why does it go flat?", marks: 2 },
            {
              label: "d",
              prompt: "Why does warm soda go flat faster?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Gas solubility",
                statement:
                  "CO2 is dissolved under pressure; less soluble when warm.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Carbon dioxide (CO2).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Pressure drops when opened; dissolved CO2 comes out of solution as bubbles.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "CO2 escapes to the air over time; less remains dissolved.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Gases are less soluble in warm liquids; CO2 escapes faster when warm.",
                marks: 3,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) CO2 (b) Pressure drop releases gas (c) CO2 escapes (d) Warm = less soluble gas.",
            commonErrors: ["Saying soda fizzes because it's shaken."],
          },
        },
      ],
    },
    {
      id: "s7-u7-physical-properties",
      title: "Physical properties and separation",
      skill:
        "Identify physical properties used to characterize and separate substances.",
      lesson: {
        sections: [
          {
            heading: "Physical vs chemical properties",
            body: "A **physical property** can be observed or measured without changing the substance's chemical identity. Examples: color, density, melting point, boiling point, solubility, hardness, conductivity.\n\nA **chemical property** describes how a substance reacts with other substances (e.g., flammability, reactivity).",
          },
          {
            heading: "Separation techniques",
            body: "Mixtures are separated using physical properties:\n\n- **Filtration**: separates solids from liquids (particle size).\n- **Evaporation**: separates dissolved solids from liquids.\n- **Distillation**: separates liquids by boiling point.\n- **Magnetism**: separates magnetic materials.\n- **Chromatography**: separates dissolved substances by how they move through a medium.",
          },
        ],
        keyFormulas: [
          {
            name: "Physical property",
            statement: "Observable without changing chemical identity.",
          },
          {
            name: "Separation methods",
            statement:
              "Filtration, evaporation, distillation, magnetism, chromatography.",
          },
          {
            name: "Chemical property",
            statement:
              "Describes reactivity; requires chemical change to observe.",
          },
        ],
        workedExample: {
          problem:
            "How would you separate a mixture of iron filings, sand and salt?",
          solution:
            "Use a magnet to remove iron filings; dissolve salt in water and filter off sand; evaporate water to recover salt.",
        },
      },
      questions: [
        {
          id: "s7-u7-phys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a physical property?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flammability" },
              { id: "b", text: "Reactivity" },
              { id: "c", text: "Melting point" },
              { id: "d", text: "Toxicity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Physical property",
                statement: "Observable without changing identity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Melting point is physical; the others are chemical properties.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Melting point.",
            commonErrors: ["Choosing (a): flammability is chemical."],
          },
        },
        {
          id: "s7-u7-phys-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two separation techniques and the property each uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Separation methods",
                statement: "Each uses a different physical property.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Filtration uses particle size to separate solids from liquids.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Distillation uses boiling point to separate liquids.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Magnetism separates magnetic materials from non-magnetic.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Filtration (particle size), distillation (boiling point), magnetism (magnetic property).",
            commonErrors: ["Listing techniques without the property used."],
          },
        },
        {
          id: "s7-u7-phys-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A mixture contains salt, sand and iron filings. Describe how to separate all three.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Separation sequence",
                statement:
                  "Use properties in order: magnetism, solubility, evaporation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use a magnet to remove iron filings (magnetic property).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Add water to dissolve salt; filter to remove sand (solubility + filtration).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Evaporate water to recover salt crystals.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Each step uses a different physical property.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Magnet removes iron; water dissolves salt; filter removes sand; evaporate to get salt.",
            commonErrors: [
              "Trying to separate all at once instead of sequentially.",
            ],
          },
        },
        {
          id: "s7-u7-phys-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "You have two unknown liquids: liquid A boils at 78°C, liquid B boils at 100°C.",
          parts: [
            {
              label: "a",
              prompt: "What physical property distinguishes them?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How could you separate a mixture of A and B?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why does boiling point differ between substances?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Is boiling point a physical or chemical property? Explain.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Boiling point",
                statement:
                  "Temperature at which liquid becomes gas; physical property.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Boiling point — different values distinguish the liquids.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Heat the mixture; A vaporizes first at 78°C; collect and condense vapor (distillation).",
                marks: 3,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Different intermolecular forces require different amounts of energy to overcome.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Physical — boiling doesn't change chemical identity; substance remains the same.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Boiling point (b) Distillation — A vaporizes first (c) Different intermolecular forces (d) Physical.",
            commonErrors: ["Saying boiling changes the substance chemically."],
          },
        },
      ],
    },
  ],
};
