import type { Lesson } from "../../../types.ts";

export const lesson202: Lesson = {
  id: "edxbteceng-u2-lesson-2-2",
  code: "2-2",
  title: "Engineering Materials and Processes",
  goal: "I CAN classify engineering materials and match manufacturing processes to material and product requirements.",
  standards: [
    "BTEC L3 National Engineering — Unit 2: Engineering Applications",
  ],
  vocabulary: [
    {
      term: "Ferrous metal",
      definition:
        "Metal containing iron — e.g. steel, cast iron; generally magnetic and prone to rust without protection.",
    },
    {
      term: "Non-ferrous metal",
      definition:
        "Metal without iron — e.g. aluminium, copper, titanium; typically lighter and corrosion-resistant.",
    },
    {
      term: "Thermoplastic",
      definition:
        "Polymer that softens when heated and hardens when cooled, repeatedly — e.g. ABS, acrylic.",
    },
    {
      term: "Thermoset",
      definition:
        "Polymer that sets permanently on curing and cannot be re-melted — e.g. epoxy resin, vulcanised rubber.",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u2-2-metals",
      title: "Metals: Ferrous, Non-ferrous and Alloys",
      skill: "Classify metals and select them for engineering applications.",
      lesson: {
        sections: [
          {
            heading: "Ferrous metals",
            body: "Steel is iron + ~0.2–2% carbon. Plain carbon steel is cheap and strong; alloy steels add chromium, nickel, molybdenum for hardness, toughness and corrosion resistance (stainless steel = ≥10.5% Cr). Cast iron (>2% C) is hard but brittle — good for machine bases and engine blocks where vibration damping matters.\n\nWrought iron and mild steel suit general fabrication; high-carbon tool steels suit cutting edges.",
          },
          {
            heading: "Non-ferrous metals and alloys",
            body: "Aluminium (low density, corrosion-resistant) is used for aircraft and automotive bodies. Copper and brass excel in electrical conductors and plumbing. Titanium offers the highest strength-to-weight ratio but is expensive. Magnesium is the lightest structural metal.\n\nSelection weighs density, strength, stiffness, corrosion resistance, cost and manufacturability — the CES method scores candidates against the dominant design constraint.",
          },
        ],
        keyFormulas: [
          {
            name: "Specific strength",
            statement: "$\\sigma_y/\\rho$ — yield strength per unit density",
          },
          {
            name: "Carbon content",
            statement: "Steel: <2% C; cast iron: >2% C (approximate boundary)",
          },
        ],
        workedExample: {
          problem:
            "Choose a material for a bicycle frame needing low weight and corrosion resistance. Justify between aluminium alloy and steel.",
          solution:
            "Aluminium: density 2700 vs 7850 kg/m³ — ~65% lighter for similar strength; forms a protective oxide so needs no painting. Steel is stiffer and cheaper but heavier and rusts without coating. For a weight-critical, corrosion-exposed frame, aluminium wins on specific strength.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u2-2-metals-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Stainless steel resists corrosion mainly because it contains:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "zinc",
              },
              {
                id: "b",
                text: "aluminium",
              },
              {
                id: "c",
                text: "at least ~10.5% chromium",
              },
              {
                id: "d",
                text: "lead",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cr forms a passive oxide layer",
                statement:
                  "Cr forms a passive oxide layer protecting the surface",
              },
            ],
            steps: [
              {
                reasoning: "Stainless = steel + chromium ≥ ~10.5%",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Chromium",
            commonErrors: [
              "Confusing stainless with galvanised (zinc-coated) steel",
            ],
            examinerNote: "Chromium's passive layer is the mechanism.",
          },
        },
        {
          id: "edxbteceng-u2-2-metals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A component mass $2\\ \\text{kg}$ is made of steel ($\\rho = 7850$ kg/m³). If replaced by aluminium ($\\rho = 2700$ kg/m³) with the same volume, calculate the new mass.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 0.688,
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Same volume → mass scales with",
                statement: "Same volume → mass scales with density",
              },
            ],
            steps: [
              {
                reasoning: "$V = m/\\rho = 2/7850$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$m_{\\text{Al}} = V \\times 2700 = (2/7850) \\times 2700$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.688$ kg",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.69 kg",
            commonErrors: [
              "Multiplying densities instead of scaling",
              "Unit errors",
            ],
            examinerNote: "Density ratio method is faster: 2700/7850 × 2.",
          },
        },
        {
          id: "edxbteceng-u2-2-metals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cast iron is used for machine tool bases even though it is brittle.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cast iron: high compressive strength, good",
                statement:
                  "Cast iron: high compressive strength, good damping, low cost; weak in tension",
              },
            ],
            steps: [
              {
                reasoning: "Identifies compression-dominated loading",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Vibration damping benefit",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Links property to application",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coherent engineering justification",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Compression strength + damping + castability",
            commonErrors: [
              "Ignoring the loading mode",
              "Saying 'strong' without qualification",
            ],
            examinerNote: "Application-aware property use is the skill.",
          },
        },
        {
          id: "edxbteceng-u2-2-metals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An aircraft wing spar must be light, stiff and fatigue-resistant. Candidates: aluminium alloy, titanium alloy, carbon-fibre composite.",
          parts: [
            {
              label: "a",
              prompt: "Compare the three on density and specific stiffness.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why fatigue resistance matters for a spar.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Recommend a material with justification.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CES trade-off between mechanical properties, den",
                statement:
                  "CES trade-off between mechanical properties, density and cost",
              },
            ],
            steps: [
              {
                reasoning:
                  "Correct comparative data/claims for the three materials",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Specific stiffness ranked correctly",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Nuanced comparison (no single winner)",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Fatigue = failure under repeated cyclic loading",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Links cyclic flight loads to crack growth risk",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Defensible recommendation",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Justified against requirements",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Acknowledges trade-offs/cost",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) CFRP best specific properties, Al light/cheap, Ti strong/heavy (b) cyclic loading → fatigue (c) reasoned choice",
            commonErrors: [
              "Choosing on strength alone ignoring weight",
              "No justification for recommendation",
            ],
            examinerNote: "Real design = multi-criteria trade-off.",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u2-2-polymers",
      title: "Polymers and Composites",
      skill:
        "Distinguish thermoplastics, thermosets and composites and match them to applications.",
      lesson: {
        sections: [
          {
            heading: "Polymers",
            body: "Polymers are long-chain molecules classified by behaviour on heating. Thermoplastics (ABS, acrylic, nylon, HDPE) soften reversibly — recyclable and suited to injection moulding. Thermosets (epoxy, phenolic, vulcanised rubber) cure permanently — high heat resistance but cannot be remoulded.\n\nProperties vary widely: nylons are tough and wear-resistant, acrylics are transparent, PTFE is slippery and chemical-proof. Selection depends on mechanical, thermal, chemical and cost requirements.",
          },
          {
            heading: "Composites",
            body: "Composites combine a matrix (polymer, metal, ceramic) with reinforcement (fibres, particles). Fibre-reinforced polymers (FRP) — carbon, glass or aramid fibres in epoxy — offer exceptional specific strength and stiffness. Properties are anisotropic: strong along fibres, weaker across.\n\nApplications: aircraft structures, racing cars, wind-turbine blades, sports equipment. Manufacturing routes include lay-up, filament winding and resin transfer moulding; quality depends on fibre orientation, void content and curing.",
          },
        ],
        keyFormulas: [
          {
            name: "Rule of mixtures (approx.)",
            statement: "$E_{\\text{comp}} \\approx V_f E_f + V_m E_m$",
          },
          {
            name: "Anisotropy",
            statement:
              "Properties differ with direction relative to fibre orientation",
          },
        ],
        workedExample: {
          problem:
            "Why is a carbon-fibre bicycle frame stiffer than a steel one of the same weight?",
          solution:
            "Carbon fibre has much higher specific stiffness ($E/\\rho$) than steel; at equal mass the composite's higher $E/\\rho$ gives less deflection. Properties are highest along the fibre direction, so layup is engineered for the load paths.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u2-2-polymers-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which material can be repeatedly melted and remoulded?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Epoxy resin",
              },
              {
                id: "b",
                text: "ABS plastic",
              },
              {
                id: "c",
                text: "Vulcanised rubber",
              },
              {
                id: "d",
                text: "Phenolic resin",
              },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thermoplastics soften reversibly; thermosets cur",
                statement:
                  "Thermoplastics soften reversibly; thermosets cure permanently",
              },
            ],
            steps: [
              {
                reasoning: "ABS is a thermoplastic",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "ABS",
            commonErrors: ["Confusing thermoplastic with thermoset names"],
            examinerNote: "'Thermo-plastic' = re-processable.",
          },
        },
        {
          id: "edxbteceng-u2-2-polymers-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A composite has 60% carbon fibre by volume ($E_f = 230$ GPa) in an epoxy matrix ($E_m = 3$ GPa). Using the rule of mixtures, estimate $E$ along the fibres.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 139.2,
                tolerance: 0.5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "along fibres",
                statement: "$E_c \\approx V_f E_f + V_m E_m$ along fibres",
              },
            ],
            steps: [
              {
                reasoning: "$V_f = 0.6$, $V_m = 0.4$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E_c = 0.6(230) + 0.4(3)$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 138 + 1.2 = 139.2$ GPa",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "139.2 GPa",
            commonErrors: [
              "Using weight fraction as volume fraction",
              "Ignoring the matrix contribution",
            ],
            examinerNote:
              "Rule of mixtures is valid along the fibre direction.",
          },
        },
        {
          id: "edxbteceng-u2-2-polymers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what 'anisotropic' means for a carbon-fibre composite and one design consequence.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anisotropy = direction-dependent properties from",
                statement:
                  "Anisotropy = direction-dependent properties from fibre orientation",
              },
            ],
            steps: [
              {
                reasoning: "Correct definition",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains directional strength difference",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Valid design consequence (fibre orientation/layup)",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Clear engineering explanation",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Direction-dependent properties; orient fibres along loads",
            commonErrors: ["Treating composite as isotropic", "No design link"],
            examinerNote: "Anisotropy is THE key composite concept.",
          },
        },
        {
          id: "edxbteceng-u2-2-polymers-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A drone manufacturer must choose between aluminium alloy and carbon-fibre composite for the airframe.",
          parts: [
            {
              label: "a",
              prompt:
                "Compare specific stiffness and specific strength of the two.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Give two manufacturing challenges for the composite option.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Recommend a material for a mass-produced hobby drone and justify.",
              marks: 3,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CES: performance vs cost vs manufacturability",
                statement:
                  "CES: performance vs cost vs manufacturability trade-off",
              },
            ],
            steps: [
              {
                reasoning: "CFRP superior specific properties stated",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Comparison quantified or well-qualified",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Tooling/mould cost challenge",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Process/skill/quality challenge",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Third valid challenge or elaboration",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Recommendation suits hobby/mass-production context",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Justified against requirements",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Considers cost/repair/production",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) CFRP higher specific properties (b) tooling+process challenges (c) Al for hobby scale, CFRP for performance",
            commonErrors: [
              "Choosing CFRP without considering cost",
              "Ignoring manufacturing constraints",
            ],
            examinerNote:
              "Volume matters: composites win at high performance, metals at high volume.",
          },
        },
      ],
    },
  ],
};
