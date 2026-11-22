import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ech11-u4-lesson-4-3",
  code: "4-3",
  title: "Investigating Materials and Polymers",
  goal: "I CAN test material properties and investigate polymer behaviour.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Thermoplastic",
      definition: "Polymer softens when heated — can be reshaped.",
    },
    {
      term: "Thermoset",
      definition: "Polymer sets permanently — can't be reshaped.",
    },
    {
      term: "Density",
      definition: "Mass per unit volume — used to identify plastics.",
    },
    {
      term: "Tensile strength",
      definition: "Force needed to break material — stretching test.",
    },
  ],
  concepts: [
    {
      id: "ech11-u4-polymers",
      title: "Polymer Identification Tests",
      skill: "Identify plastics using density, burning and chemical tests.",
      lesson: {
        sections: [
          {
            heading: "Plastic identification",
            body: "**Density test**: float in water (PE, PP float; PVC, PET sink). Density gradient column for precise ID. **Burning test**: observe flame colour, smell, drip, self-extinguishing. PE/PP: blue flame, paraffin smell, drips. PVC: green flame, choking, doesn't drip. PET: yellow flame, sweet smell.\n\n**Chemical tests**: some plastics react with specific reagents — nylon dissolves in formic acid, PTFE inert to most chemicals. **IR spectroscopy**: identify by absorption spectrum (advanced).",
          },
          {
            heading: "Material properties testing",
            body: "**Tensile test**: stretch sample, measure force vs extension — find tensile strength and elastic limit. **Hardness**: scratch test or indentation. **Melting point**: heat slowly, observe softening/melting — identifies polymer type.\n\n**Data**: force-extension graphs, stress-strain curves, compare materials. Applications: choose material for purpose (strength, flexibility, cost, recyclability).",
          },
        ],
        keyFormulas: [
          {
            name: "Density ID",
            statement:
              "Float/sink in liquids of known density — identifies plastic.",
          },
          {
            name: "Burning test",
            statement: "Flame colour, smell, drip behaviour identify polymer.",
          },
        ],
        workedExample: {
          problem:
            "Plastic floats in water, blue flame, paraffin smell. Identify?",
          solution:
            "Polyethene (PE) or polypropylene (PP) — low density polyolefin.",
        },
      },
      questions: [
        {
          id: "ech11-u4-polymers-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a plastic's density tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its price" },
              { id: "b", text: "Its colour" },
              { id: "c", text: "Its age" },
              { id: "d", text: "Its identity/type" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Density ID",
                statement: "Different plastics have characteristic densities.",
              },
            ],
            steps: [
              {
                reasoning: "Density helps identify plastic.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Identity/type",
            commonErrors: ["Colour assumed."],
          },
        },
        {
          id: "ech11-u4-polymers-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do different plastics burn with different smells?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Burning test",
                statement:
                  "Different chemical composition → different combustion products.",
              },
            ],
            steps: [
              {
                reasoning: "Different elements in polymer chains.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Combustion produces different gases/smells.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Smell identifies polymer type.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Different chemical compositions → different combustion products → characteristic smells.",
            commonErrors: ["All same smell.", "No composition link."],
          },
        },
        {
          id: "ech11-u4-polymers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why thermoplastics can be recycled but thermosets can't.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polymer structure",
                statement:
                  "Thermoplastics = linear chains (soften); thermosets = cross-linked (permanent).",
              },
            ],
            steps: [
              {
                reasoning: "Thermoplastics: linear chains, no cross-links.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Heat softens — can reshape/remelt.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Thermosets: cross-linked network — permanent bonds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can't reshape without breaking bonds.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Thermoplastics soften when heated (recyclable); thermosets have permanent cross-links (not recyclable).",
            commonErrors: ["All recyclable.", "No structure link."],
          },
        },
        {
          id: "ech11-u4-polymers-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Identifying an unknown plastic sample.",
          parts: [
            { label: "a", prompt: "Describe density test method.", marks: 3 },
            {
              label: "b",
              prompt: "Describe burning test observations.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How would you confirm identification?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plastic ID",
                statement: "Multiple tests confirm identification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Float in water/density liquids — observe sink/float.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(a) Compare to known densities.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Burn small sample — flame colour, smell, drip.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Record observations systematically.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Melting point or chemical test to confirm.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) float/sink density (b) flame/smell/drip (c) melting point/chemical test",
            commonErrors: ["Single test.", "No confirmation."],
          },
        },
      ],
    },
    {
      id: "ech11-u4-materials",
      title: "Material Properties and Selection",
      skill: "Test material properties and select materials for applications.",
      lesson: {
        sections: [
          {
            heading: "Mechanical testing",
            body: "**Tensile test**: clamp sample, apply increasing force, measure extension → force-extension graph. Regions: elastic (returns), plastic (permanent), breaking point. **Young's modulus** = stress/strain in elastic region.\n\n**Hardness**: scratch test (Mohs scale) or indentation (Brinell/Vickers). **Impact**: drop weight, measure energy absorbed. **Fatigue**: repeated stress cycles → eventual failure.",
          },
          {
            heading: "Material selection",
            body: "**Consider**: strength, stiffness, toughness, density, corrosion resistance, cost, manufacturability, sustainability. **Examples**: aircraft = aluminium/titanium (light+strong); bridges = steel/concrete (strong+cheap); clothing = cotton/polyester (flexible+cheap).\n\n**Composite materials**: combine properties — fibreglass (glass fibres + resin), carbon fibre (strong+light), concrete (concrete + steel reinforcement).",
          },
        ],
        keyFormulas: [
          {
            name: "Young's modulus",
            statement: "stress ÷ strain — stiffness measure.",
          },
          {
            name: "Tensile strength",
            statement: "Maximum stress before breaking.",
          },
        ],
        workedExample: {
          problem: "Why is steel used for bridges not aluminium?",
          solution:
            "Steel stronger and cheaper — aluminium lighter but weaker and expensive.",
        },
      },
      questions: [
        {
          id: "ech11-u4-materials-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a force-extension graph show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour" },
              { id: "b", text: "Temperature" },
              { id: "c", text: "Density" },
              { id: "d", text: "Elastic/plastic behaviour" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Force-extension",
                statement:
                  "Shows elastic limit, plastic deformation, breaking point.",
              },
            ],
            steps: [
              {
                reasoning: "Shows elastic/plastic behaviour.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Elastic/plastic",
            commonErrors: ["Density confused."],
          },
        },
        {
          id: "ech11-u4-materials-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is Young's modulus?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Young's modulus",
                statement: "Stress ÷ strain — measures stiffness.",
              },
            ],
            steps: [
              { reasoning: "Stress ÷ strain.", marks: 1, markCode: "AO1" },
              { reasoning: "Measures stiffness.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Higher = stiffer material.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Stress ÷ strain — measures stiffness; higher = stiffer.",
            commonErrors: ["Strength confused.", "Wrong formula."],
          },
        },
        {
          id: "ech11-u4-materials-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is aluminium used for aircraft instead of steel?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement:
                  "Aluminium lighter + corrosion resistant — better for aircraft.",
              },
            ],
            steps: [
              {
                reasoning: "Aluminium much less dense than steel.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lighter = less fuel needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Still strong enough + corrosion resistant.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Steel stronger but too heavy/expensive.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Aluminium lighter + corrosion resistant — reduces fuel; steel too heavy for aircraft.",
            commonErrors: ["Stronger assumed.", "No weight link."],
          },
        },
        {
          id: "ech11-u4-materials-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Selecting material for a bicycle frame.",
          parts: [
            { label: "a", prompt: "List three properties needed.", marks: 3 },
            {
              label: "b",
              prompt: "Compare steel vs aluminium for this.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest one composite alternative.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement:
                  "Strength, weight, cost, durability determine choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Strength, light weight, durability/corrosion resistance.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Any three valid properties.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Steel: stronger, cheaper, heavier. Aluminium: lighter, corrosion resistant, weaker.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Trade-offs for cyclists.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) Carbon fibre — light + strong.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) strength/light/durable (b) steel strong+cheap vs aluminium light+rustproof (c) carbon fibre",
            commonErrors: ["No trade-offs.", "Single material assumed."],
          },
        },
      ],
    },
  ],
};
