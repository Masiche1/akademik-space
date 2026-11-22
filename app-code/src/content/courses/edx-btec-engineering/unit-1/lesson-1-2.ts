import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edxbteceng-u1-lesson-1-2",
  code: "1-2",
  title: "Mechanical Principles",
  goal: "I CAN apply force, stress, strain and material-property calculations in mechanical engineering contexts.",
  standards: ["BTEC L3 National Engineering — Unit 1: Engineering Principles"],
  vocabulary: [
    {
      term: "Stress",
      definition:
        "Force per unit area, $\\sigma = F/A$, measured in pascals; describes the internal loading in a material.",
    },
    {
      term: "Strain",
      definition:
        "The fractional change in length, $\\varepsilon = \\Delta L / L$, dimensionless.",
    },
    {
      term: "Young's modulus",
      definition:
        "The ratio of stress to strain in the elastic region, $E = \\sigma/\\varepsilon$, measured in pascals; a measure of stiffness.",
    },
    {
      term: "Ductile / brittle",
      definition:
        "Ductile materials deform plastically before fracture (e.g. mild steel); brittle materials fracture with little plastic deformation (e.g. cast iron, ceramics).",
    },
  ],
  concepts: [
    {
      id: "edxbteceng-u1-2-stress",
      title: "Stress, Strain and Young's Modulus",
      skill: "Calculate stress, strain and elastic modulus for loaded members.",
      lesson: {
        sections: [
          {
            heading: "Stress and strain",
            body: "When a load $F$ is applied to a member of cross-sectional area $A$, the material experiences stress $\\sigma = F/A$ (Pa) and elongates by strain $\\varepsilon = \\Delta L/L$ (no units). Within the elastic limit, Hooke's law applies and the ratio $E = \\sigma/\\varepsilon$ — Young's modulus — is constant for a given material.\n\nTypical values: steel $E \\approx 200\\ \\text{GPa}$, aluminium $\\approx 70\\ \\text{GPa}$, timber much lower. A higher $E$ means a stiffer material — less deflection under the same load.",
          },
          {
            heading: "Elastic vs plastic behaviour",
            body: "Below the yield stress the material returns to its original shape when unloaded. Beyond yield, permanent (plastic) deformation occurs; at ultimate tensile stress fracture follows. Ductile materials show a clear plastic region and neck before breaking; brittle materials fracture suddenly.\n\nEngineering choice depends on the application: ductile materials absorb energy safely (crumple zones, bolts), brittle materials suit compression-only or hard-wearing roles (ceramic bearings, glass).",
          },
        ],
        keyFormulas: [
          {
            name: "Stress",
            statement: "$\\sigma = \\dfrac{F}{A}$ (Pa)",
          },
          {
            name: "Strain",
            statement: "$\\varepsilon = \\dfrac{\\Delta L}{L}$",
          },
          {
            name: "Young's modulus",
            statement:
              "$E = \\dfrac{\\sigma}{\\varepsilon}$ (Pa); also $\\Delta L = \\dfrac{FL}{AE}$",
          },
        ],
        workedExample: {
          problem:
            "A $2\\ \\text{m}$ steel rod of diameter $10\\ \\text{mm}$ carries a tensile load of $15\\ \\text{kN}$. Find the stress and elongation ($E = 200\\ \\text{GPa}$).",
          solution:
            "$A = \\pi(0.005)^2 = 7.85 \\times 10^{-5}\\ \\text{m}^2$.\n\n$\\sigma = 15\\,000 / 7.85 \\times 10^{-5} = 1.91 \\times 10^8\\ \\text{Pa} = 191\\ \\text{MPa}$.\n\n$\\Delta L = \\frac{FL}{AE} = \\frac{15\\,000 \\times 2}{7.85 \\times 10^{-5} \\times 200 \\times 10^9} = 1.9\\ \\text{mm}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u1-2-stress-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A force of $500\\ \\text{N}$ acts on a cross-sectional area of $0.0025\\ \\text{m}^2$. The stress is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$2\\ \\text{MPa}$",
              },
              {
                id: "b",
                text: "$200\\ \\text{kPa}$",
              },
              {
                id: "c",
                text: "$8\\ \\text{MPa}$",
              },
              {
                id: "d",
                text: "$1.25\\ \\text{MPa}$",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key principle",
                statement: "$\\sigma = F/A$",
              },
            ],
            steps: [
              {
                reasoning: "$500/0.0025 = 200\\,000$ Pa $= 200$ kPa",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "200 kPa",
            commonErrors: [
              "Inverting $F/A$",
              "Unit conversion errors (kPa vs MPa)",
            ],
            examinerNote: "Stress is force divided by area, never the reverse.",
          },
        },
        {
          id: "edxbteceng-u1-2-stress-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $1.5\\ \\text{m}$ aluminium bar ($E = 70\\ \\text{GPa}$) of cross-section $100\\ \\text{mm}^2$ is stretched by a load that produces stress $70\\ \\text{MPa}$. Calculate the extension $\\Delta L$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Answer",
                answer: 2.1,
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "and",
                statement:
                  "$\\varepsilon = \\sigma/E$ and $\\Delta L = \\varepsilon L$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\varepsilon = 70\\times10^6 / 70\\times10^9 = 1\\times10^{-3}$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\Delta L = 10^{-3} \\times 1.5 = 1.5\\times10^{-3}$ m",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1.5$ mm",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.5 mm",
            commonErrors: [
              "Using stress instead of strain",
              "Unit slip between mm and m",
            ],
            examinerNote:
              "Check whether the question wants metres or millimetres.",
          },
        },
        {
          id: "edxbteceng-u1-2-stress-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which statement about Young's modulus is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It measures stiffness — stress divided by strain in the elastic region",
              },
              {
                id: "b",
                text: "It is measured in newtons",
              },
              {
                id: "c",
                text: "It depends on the length of the specimen",
              },
              {
                id: "d",
                text: "It is the same for all metals",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "in the elastic region; a material",
                statement:
                  "$E = \\sigma/\\varepsilon$ in the elastic region; a material constant independent of specimen size",
              },
            ],
            steps: [
              {
                reasoning:
                  "E is an intensive material property in Pa describing stiffness; independent of L and A",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer: "Stiffness measure, material constant in pascals",
            commonErrors: [
              "Thinking E depends on dimensions",
              "Confusing E with stress or force",
            ],
            examinerNote: "Conceptual question — reward precise definition.",
          },
        },
        {
          id: "edxbteceng-u1-2-stress-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two bars of identical dimensions carry the same tensile load: one is mild steel ($E = 200$ GPa, yield $250$ MPa), the other aluminium alloy ($E = 70$ GPa, yield $280$ MPa).",
          parts: [
            {
              label: "a",
              prompt: "State which bar has the greater stress and explain why.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State which bar has the greater strain and explain why.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest one engineering reason for choosing aluminium despite its lower stiffness.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain what 'yield stress' means for each material.",
              marks: 2,
            },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "same for both; so lower E",
                statement:
                  "$\\sigma = F/A$ same for both; $\\varepsilon = \\sigma/E$ so lower E gives larger strain",
              },
            ],
            steps: [
              {
                reasoning: "Same load and area → same stress",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Identifies equal stress as the key point",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$\\varepsilon = \\sigma/E$; aluminium $E$ is lower",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Aluminium strains more",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Valid reason e.g. density/weight or corrosion",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Applied to design context",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Yield = onset of permanent deformation",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Both materials compared or stated correctly",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) equal stress (b) aluminium strains more (c) e.g. lower density/corrosion resistance (d) yield = permanent deformation begins",
            commonErrors: [
              "Claiming stress differs because E differs",
              "Vague reason in (c) with no engineering link",
            ],
            examinerNote:
              "Distinguish stress (load-driven) from strain (material-driven).",
          },
        },
      ],
    },
    {
      id: "edxbteceng-u1-2-forces",
      title: "Forces and Material Selection",
      skill:
        "Resolve simple force systems and match materials to engineering applications.",
      lesson: {
        sections: [
          {
            heading: "Types of mechanical load",
            body: "Engineering members experience tension (pulling apart), compression (squashing), shear (sliding layers past each other) and torsion (twisting). Each load type demands different material properties: tension needs tensile strength; compression suits cast iron and concrete; shear matters in bolts, rivets and shafts; torsion applies to drive shafts.\n\nForces also combine: a bracket may carry tension in one member and compression in another. Resolve forces into components and check each member against its weakest mode.",
          },
          {
            heading: "Material selection",
            body: "Selecting a material balances mechanical properties (strength, stiffness, toughness), physical properties (density, melting point, corrosion resistance) and cost. The CES approach scores candidate materials against the dominant constraint — e.g. minimum mass for a stiff beam favours high $E/\\rho$ (specific stiffness).\n\nCommon choices: steel for strength and stiffness, aluminium for light weight, titanium for high strength-to-weight at high temperature, polymers and composites for corrosion resistance and complex shapes.",
          },
        ],
        keyFormulas: [
          {
            name: "Tensile stress",
            statement: "$\\sigma = F/A$",
          },
          {
            name: "Shear stress",
            statement: "$\\tau = F/A_{\\text{shear}}$",
          },
          {
            name: "Specific stiffness",
            statement: "$E/\\rho$ — stiffness per unit density",
          },
        ],
        workedExample: {
          problem:
            "A $10\\ \\text{mm}$ diameter steel bolt in single shear carries $20\\ \\text{kN}$. The shear area is $\\frac{\\pi d^2}{4}$. Estimate the shear stress.",
          solution:
            "$A = \\pi(0.01)^2/4 = 7.85 \\times 10^{-5}\\ \\text{m}^2$.\n\n$\\tau = 20\\,000 / 7.85 \\times 10^{-5} = 2.55 \\times 10^8\\ \\text{Pa} = 255\\ \\text{MPa}$ — compare with the material's shear strength.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u1-2-forces-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A drive shaft transmits torque and is most likely to fail by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "torsion",
              },
              {
                id: "b",
                text: "pure tension",
              },
              {
                id: "c",
                text: "bending only",
              },
              {
                id: "d",
                text: "corrosion",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Torsion = twisting moment about the",
                statement: "Torsion = twisting moment about the shaft axis",
              },
            ],
            steps: [
              {
                reasoning: "Torque produces torsional shear stress",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Torsion",
            commonErrors: ["Confusing torsion with tension"],
            examinerNote: "Link load type to the stress mode.",
          },
        },
        {
          id: "edxbteceng-u1-2-forces-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two candidate materials for a light bracket: aluminium ($\\rho = 2700$ kg/m$^3$, $E = 70$ GPa) and steel ($\\rho = 7850$ kg/m$^3$, $E = 200$ GPa). Calculate $E/\\rho$ for each in units of $10^6$ m$^2$/s$^2$ (approximately) and state which is better for a stiffness-critical, weight-critical design.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Specific stiffness governs stiffness per unit",
                statement:
                  "Specific stiffness $E/\\rho$ governs stiffness per unit mass",
              },
            ],
            steps: [
              {
                reasoning: "$70\\times10^9/2700 = 2.59\\times10^7$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$200\\times10^9/7850 = 2.55\\times10^7$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Aluminium marginally higher",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Conclusion tied to weight-critical criterion",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Aluminium slightly better on specific stiffness",
            commonErrors: [
              "Comparing E alone without density",
              "Arithmetic slips in division",
            ],
            examinerNote: "Real CES analysis gives aluminium the edge here.",
          },
        },
        {
          id: "edxbteceng-u1-2-forces-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular steel strap $50\\ \\text{mm} \\times 5\\ \\text{mm}$ is pulled in tension by $30\\ \\text{kN}$. Calculate the tensile stress and state whether it is likely to yield (yield stress $250$ MPa).",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "; yield stress is the onset",
                statement:
                  "$\\sigma = F/A$; yield stress is the onset of permanent deformation",
              },
            ],
            steps: [
              {
                reasoning: "$A = 0.05 \\times 0.005 = 2.5\\times10^{-4}$ m$^2$",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\sigma = 30\\,000 / 2.5\\times10^{-4} = 1.2\\times10^8$ Pa",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$120$ MPa",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "$120 < 250$ MPa so elastic, no yield",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "120 MPa — below yield, elastic",
            commonErrors: [
              "Using mm$^2$ without converting",
              "Wrong comparison direction",
            ],
            examinerNote: "Always convert area to m$^2$ before using Pa.",
          },
        },
        {
          id: "edxbteceng-u1-2-forces-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bicycle frame designer must choose between steel, aluminium alloy and carbon-fibre composite for the main triangle.",
          parts: [
            {
              label: "a",
              prompt: "List one advantage of each material.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why 'stiffness' and 'strength' are different criteria for frame tubes.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Describe two manufacturing/process factors that affect the choice.",
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
                name: "CES trade-off: mechanical properties, physical p",
                statement:
                  "CES trade-off: mechanical properties, physical properties, process and cost",
              },
            ],
            steps: [
              {
                reasoning: "Steel: low cost, high strength, easy welding",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Aluminium: low density, corrosion resistance",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Composite: exceptional specific stiffness/strength",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Stiffness relates to deflection ($E$); strength to failure stress",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Explains why a stiff frame may still be strong or vice versa",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Valid process factors e.g. welding/bonding/joining",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Developed with examples",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Cost/tooling consideration included",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) one valid advantage each (b) stiffness vs strength distinguished (c) two process factors",
            commonErrors: [
              "Listing properties without engineering justification",
              "Confusing stiffness with strength",
            ],
            examinerNote: "Reward applied, comparative reasoning over lists.",
          },
        },
      ],
    },
  ],
};
