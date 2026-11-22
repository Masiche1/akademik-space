import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cial-b-u1-lesson-1-2",
  code: "1-2",
  title: "Cell membrane structure",
  goal: "I CAN describe the fluid mosaic model and explain membrane permeability.",
  standards: ["9700 Unit 4: cell membranes and transport"],
  vocabulary: [
    {
      term: "Fluid mosaic model",
      definition:
        "Membrane = phospholipid bilayer with embedded proteins; fluid and mosaic.",
    },
    {
      term: "Phospholipid",
      definition:
        "Molecule with hydrophilic head and hydrophobic tails forming the bilayer.",
    },
    {
      term: "Channel protein",
      definition:
        "Protein forming a pore for specific substances to cross the membrane.",
    },
    {
      term: "Carrier protein",
      definition:
        "Protein that binds and transports specific molecules across the membrane.",
    },
    {
      term: "Glycoprotein",
      definition:
        "Protein with carbohydrate chains — cell recognition and signalling.",
    },
    {
      term: "Permeability",
      definition: "The ease with which substances pass through the membrane.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u1-membrane-structure",
      title: "Fluid mosaic model",
      skill: "Describe membrane structure and the roles of its components.",
      lesson: {
        sections: [
          {
            heading: "The bilayer",
            body: "Phospholipids have hydrophilic (water-loving) heads and hydrophobic (water-fearing) tails. In water they self-assemble into a bilayer: heads face water, tails face each other inside. This forms the basic membrane barrier.",
          },
          {
            heading: "The mosaic proteins",
            body: "Proteins are embedded in the bilayer: integral (span the membrane) and peripheral (attached to surface). Channel proteins form pores; carrier proteins bind and move specific molecules; glycoproteins handle recognition; cholesterol regulates fluidity.",
          },
          {
            heading: "Fluidity",
            body: "The membrane is fluid — components drift laterally. Cholesterol buffers temperature effects: prevents tight packing when cold, prevents excessive fluidity when warm. Unsaturated fatty acid tails increase fluidity.",
          },
        ],
        keyFormulas: [
          {
            name: "Membrane",
            statement:
              "Phospholipid bilayer+integral/peripheral proteins=fluid mosaic.",
          },
        ],
        workedExample: {
          problem: "Why does the membrane self-assemble in water?",
          solution:
            "Hydrophilic heads face water; hydrophobic tails cluster inside — energetically favourable arrangement forms the bilayer.",
        },
      },
      questions: [
        {
          id: "cial-b-u1-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the fluid mosaic model, what forms the basic structure of the membrane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A carbohydrate layer" },
              { id: "b", text: "A phospholipid bilayer" },
              { id: "c", text: "A protein sheet" },
              { id: "d", text: "A DNA strand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fluid mosaic",
                statement: "Phospholipid bilayer with embedded proteins.",
              },
            ],
            steps: [
              {
                reasoning: "Bilayer is the basic structure.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Phospholipid bilayer",
            commonErrors: [
              "Thinking proteins form the structure — they're embedded in it.",
            ],
          },
        },
        {
          id: "cial-b-u1-ms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between a channel protein and a carrier protein?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Channel vs carrier",
                statement:
                  "Channel=form pore for specific substances; carrier=binds and transports specific molecules.",
              },
            ],
            steps: [
              {
                reasoning: "Channel: pore, no binding, specific.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carrier: binds, changes shape, transports.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Channel=pore; carrier=binds and moves specific molecules.",
            commonErrors: ["Treating them as identical."],
          },
        },
        {
          id: "cial-b-u1-ms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how cholesterol affects membrane fluidity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cholesterol",
                statement:
                  "Buffers fluidity: prevents tight packing when cold, prevents excess fluidity when warm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At low temps: prevents phospholipids packing tightly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At high temps: restricts excessive movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Maintains optimal fluidity across temperatures.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cholesterol buffers fluidity across temperature range.",
            commonErrors: ["Saying cholesterol is only harmful."],
          },
        },
        {
          id: "cial-b-u1-ms-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cell membrane structure.",
          parts: [
            {
              label: "a",
              prompt: "What forms the basic membrane structure?",
              marks: 1,
            },
            { label: "b", prompt: "Channel vs carrier protein?", marks: 3 },
            { label: "c", prompt: "Role of cholesterol?", marks: 2 },
            {
              label: "d",
              prompt: "Why is the membrane described as 'fluid mosaic'?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Membrane",
                statement: "Bilayer+proteins+fluidity=fluid mosaic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Phospholipid bilayer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Channel=pore for specific substances.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Carrier=binds and transports specific molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Distinction clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Buffers fluidity across temperatures.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "'Fluid'=components drift laterally.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "'Mosaic'=proteins embedded in bilayer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both aspects explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) bilayer (b) pore vs carrier (c) fluidity buffer (d) fluid+mosaic explained",
          },
        },
        {
          id: "cial-b-u1-ms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a phospholipid molecule, which part is hydrophilic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The glycerol backbone only" },
              { id: "b", text: "The fatty acid tails" },
              { id: "c", text: "The phosphate head" },
              { id: "d", text: "All parts equally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipid",
                statement:
                  "Hydrophilic phosphate head; hydrophobic fatty acid tails.",
              },
            ],
            steps: [
              {
                reasoning: "The phosphate-containing head is hydrophilic.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** The phosphate head",
            commonErrors: ["Confusing hydrophilic with hydrophobic."],
          },
        },
        {
          id: "cial-b-u1-ms-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How are phospholipids arranged in the bilayer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heads facing the water on both sides, tails inside" },
              { id: "b", text: "Tails facing outward on both sides" },
              { id: "c", text: "Heads facing inward, tails facing water" },
              { id: "d", text: "Random arrangement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bilayer",
                statement:
                  "Hydrophilic heads face water; hydrophobic tails cluster inside.",
              },
            ],
            steps: [
              {
                reasoning: "Heads out to water; tails in.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Heads to water, tails inside",
            commonErrors: ["Reversing heads and tails."],
          },
        },
        {
          id: "cial-b-u1-ms-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about integral proteins is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They span the phospholipid bilayer" },
              { id: "b", text: "They are made of carbohydrates" },
              { id: "c", text: "They float freely outside the cell" },
              { id: "d", text: "They are attached only to the membrane surface" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integral protein",
                statement: "Spans the bilayer; integral to the membrane.",
              },
            ],
            steps: [
              {
                reasoning: "Integral proteins span the membrane.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** They span the phospholipid bilayer",
            commonErrors: ["Describing peripheral proteins."],
          },
        },
        {
          id: "cial-b-u1-ms-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between integral and peripheral membrane proteins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Integral vs peripheral",
                statement:
                  "Integral spans the bilayer; peripheral attached to one surface.",
              },
            ],
            steps: [
              {
                reasoning: "Integral proteins span the whole bilayer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Peripheral proteins attach to the membrane surface only.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Integral=span bilayer; peripheral=surface attachment.",
            commonErrors: ["Swapping the two definitions."],
          },
        },
        {
          id: "cial-b-u1-ms-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A small spherical vesicle has radius 2 $\\mu$m. Calculate its surface area : volume ratio. (Take $\\pi = 3.14$.)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.5, unit: "$\\mu$m$^{-1}$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere SA:V",
                statement:
                  "SA $= 4\\pi r^2$; V $= \\frac{4}{3}\\pi r^3$; ratio $= 3/r$.",
              },
            ],
            steps: [
              {
                reasoning: "SA $= 4 \\times 3.14 \\times 2^2 = 50.24\\ \\mu\\text{m}^2$; V $= \\frac{4}{3} \\times 3.14 \\times 2^3 = 33.49\\ \\mu\\text{m}^3$.",
                working: "SA = 50.24,\\ V = 33.49",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio $= 3 / 2 = 1.5$.",
                working: "3 \\div 2 = 1.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.5 $\\mu$m$^{-1}$",
            commonErrors: ["Using the cube formula $6/s$."],
          },
        },
        {
          id: "cial-b-u1-ms-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why unsaturated fatty acid tails make membranes more fluid than saturated tails.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fatty acid saturation",
                statement:
                  "Cis double bonds in unsaturated tails create kinks — looser packing, more fluid.",
              },
            ],
            steps: [
              {
                reasoning: "Unsaturated tails have C=C double bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Double bonds cause kinks in the tails.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Kinks prevent close packing — more movement.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Therefore membrane is more fluid.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Kinks from C=C bonds prevent tight packing — increased fluidity.",
            commonErrors: ["Saying unsaturated tails are shorter."],
          },
        },
        {
          id: "cial-b-u1-ms-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the role of glycoproteins in the cell membrane.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycoprotein",
                statement:
                  "Protein with carbohydrate chains — cell recognition, adhesion and signalling.",
              },
            ],
            steps: [
              {
                reasoning: "Glycoproteins have carbohydrate chains attached.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They act as receptors for hormones/signalling molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They enable cell recognition (self vs non-self).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Functions stated accurately.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Carbohydrate chains for cell recognition, adhesion and signalling.",
            commonErrors: ["Saying they transport molecules across the membrane."],
          },
        },
        {
          id: "cial-b-u1-ms-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A membrane patch contains 600 phospholipid molecules and 200 protein molecules. What percentage of the molecules present are proteins?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage = (part / whole) $\\times$ 100.",
              },
            ],
            steps: [
              {
                reasoning: "Total molecules $= 600 + 200 = 800$.",
                working: "600 + 200 = 800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage $= (200 / 800) \\times 100 = 25$.",
                working: "200 \\div 800 \\times 100 = 25",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct percentage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Dividing by 600 instead of the total 800."],
          },
        },
        {
          id: "cial-b-u1-ms-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'fluid' mean in the fluid mosaic model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phospholipids and proteins move laterally within the membrane" },
              { id: "b", text: "Water moves through the bilayer" },
              { id: "c", text: "The membrane can flow like water" },
              { id: "d", text: "The membrane is dissolved in cytoplasm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fluidity",
                statement: "Membrane components drift laterally — membrane is fluid.",
              },
            ],
            steps: [
              {
                reasoning: "Lateral movement of components = fluid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Components move laterally",
            commonErrors: ["Thinking the whole membrane flows away."],
          },
        },
        {
          id: "cial-b-u1-ms-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor DECREASES membrane fluidity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing cholesterol" },
              { id: "b", text: "Decreasing temperature" },
              { id: "c", text: "More unsaturated fatty acids" },
              { id: "d", text: "Increasing temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fluidity factors",
                statement:
                  "Lower temperature, saturated tails and cholesterol reduce fluidity.",
              },
            ],
            steps: [
              {
                reasoning: "Cold = less fluid; warm = more fluid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Decreasing temperature",
            commonErrors: ["Confusing effects of temperature."],
          },
        },
        {
          id: "cial-b-u1-ms-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A membrane patch is cooled from 30 $^{\\circ}$C to 10 $^{\\circ}$C. Calculate the temperature change in kelvin.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "K" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Temperature change",
                statement:
                  "A change of 1 $^{\\circ}$C equals a change of 1 K.",
              },
            ],
            steps: [
              {
                reasoning: "Difference $= 30 - 10 = 20$.",
                working: "30 - 10 = 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$20\\,^{\\circ}$C change $= 20$ K change.",
                working: "20\\,^{\\circ}\\text{C} = 20\\text{ K}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct change in kelvin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 K",
            commonErrors: ["Adding 273 — only needed for absolute temperature, not changes."],
          },
        },
        {
          id: "cial-b-u1-ms-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Fluid mosaic model.",
          parts: [
            {
              label: "a",
              prompt: "What forms the basic structure of the membrane?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe the orientation of phospholipids in the bilayer.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State two roles of membrane proteins.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain how temperature affects membrane fluidity.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Membrane",
                statement:
                  "Bilayer orientation; protein roles; temperature-fluidity link.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Phospholipid bilayer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Hydrophilic heads face the water on both sides.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Hydrophobic tails face each other inside.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Any two of transport, enzymes, receptors, adhesion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Two correct roles stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Higher temperature = more kinetic energy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Components move faster/laterally.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Lower temperature = less fluid, may gel.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Clear explanation of the relationship.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) bilayer (b) heads out/tails in (c) transport/receptors (d) temp↑=fluid↑",
          },
        },
      ],
    },
    {
      id: "cial-b-u1-membrane-function",
      title: "Membrane permeability",
      skill: "Explain how membrane structure determines what crosses it.",
      lesson: {
        sections: [
          {
            heading: "Selective permeability",
            body: "The membrane controls what enters and leaves: small non-polar molecules (O₂, CO₂) diffuse through the bilayer directly; polar molecules need channels or carriers; large molecules need vesicles (endocytosis/exocytosis).",
          },
          {
            heading: "Factors affecting permeability",
            body: "Temperature: higher = more fluid = faster diffusion. Cholesterol content affects fluidity. Membrane damage (heat, chemicals, osmotic shock) increases permeability — cells burst or shrivel.",
          },
          {
            heading: "Osmosis and tonicity",
            body: "Water moves across membranes toward higher solute concentration. Hypotonic (dilute) solution → cell swells; hypertonic (concentrated) → shrivels; isotonic → no net movement. Plant cells have cell walls preventing bursting (turgor).",
          },
        ],
        keyFormulas: [
          {
            name: "Permeability",
            statement:
              "Structure controls transport: small non-polar=diffuse; polar=channels; large=vesicles.",
          },
        ],
        workedExample: {
          problem:
            "A red blood cell placed in distilled water swells and bursts. Why?",
          solution:
            "Distilled water is hypotonic — water enters by osmosis faster than ions leave, cell swells and lyses (haemolysis).",
        },
      },
      questions: [
        {
          id: "cial-b-u1-mf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which molecules can diffuse directly through the phospholipid bilayer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large proteins" },
              { id: "b", text: "Ions" },
              { id: "c", text: "Small non-polar molecules like O₂ and CO₂" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Permeability",
                statement:
                  "Small non-polar molecules diffuse directly; polar/large need transport proteins.",
              },
            ],
            steps: [
              {
                reasoning: "Non-polar small molecules pass through bilayer.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Small non-polar molecules",
            commonErrors: ["Thinking all molecules need proteins."],
          },
        },
        {
          id: "cial-b-u1-mf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to an animal cell in a hypotonic solution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypotonic",
                statement:
                  "Water enters by osmosis; animal cell swells and may burst.",
              },
            ],
            steps: [
              {
                reasoning: "Water enters by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cell swells; may burst (lysis).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Water enters; cell swells and may burst.",
            commonErrors: ["Saying cell shrinks — that's hypertonic."],
          },
        },
        {
          id: "cial-b-u1-mf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why don't plant cells burst in hypotonic solutions like animal cells do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell wall",
                statement:
                  "Rigid cellulose wall resists osmotic pressure — creates turgor.",
              },
            ],
            steps: [
              {
                reasoning: "Water enters by osmosis as in animal cells.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cell wall prevents bursting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: turgor pressure — firm, supported cell.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cell wall resists pressure — turgor instead of bursting.",
            commonErrors: ["Saying plant cells don't take in water."],
          },
        },
        {
          id: "cial-b-u1-mf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Membrane permeability.",
          parts: [
            {
              label: "a",
              prompt: "Which molecules diffuse directly?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Animal cell in hypotonic solution?",
              marks: 2,
            },
            { label: "c", prompt: "Why don't plant cells burst?", marks: 3 },
            {
              label: "d",
              prompt: "Name three factors affecting permeability.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Permeability",
                statement:
                  "Non-polar diffuse; tonicity; wall prevents bursting; factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Small non-polar (O₂, CO₂).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Water enters by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Cell swells/bursts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Water enters as in animal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Cell wall resists.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Turgor pressure results.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Any three of temperature, cholesterol, membrane damage.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Three named.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) non-polar (b) swell/burst (c) wall=turgor (d) temp/cholesterol/damage",
          },
        },
        {
          id: "cial-b-u1-mf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is osmosis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Movement of water across a partially permeable membrane" },
              { id: "b", text: "Movement of ions against their gradient" },
              { id: "c", text: "Movement of large molecules by vesicles" },
              { id: "d", text: "Movement of solute down its concentration gradient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmosis",
                statement:
                  "Net movement of water across a partially permeable membrane from high to low water potential.",
              },
            ],
            steps: [
              {
                reasoning: "Osmosis = water movement across a partially permeable membrane.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Water across a partially permeable membrane",
            commonErrors: ["Confusing osmosis with diffusion of solute."],
          },
        },
        {
          id: "cial-b-u1-mf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to an animal cell placed in a hypertonic solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing changes" },
              { id: "b", text: "It swells and may burst" },
              { id: "c", text: "It shrivels as water leaves" },
              { id: "d", text: "It divides rapidly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypertonic",
                statement:
                  "Higher external solute concentration; water leaves; cell shrivels (crenates).",
              },
            ],
            steps: [
              {
                reasoning: "Water leaves by osmosis in hypertonic solution.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** It shrivels as water leaves",
            commonErrors: ["Swapping hypertonic and hypotonic effects."],
          },
        },
        {
          id: "cial-b-u1-mf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which process requires energy (ATP) to move substances against their concentration gradient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Facilitated diffusion" },
              { id: "b", text: "Simple diffusion" },
              { id: "c", text: "Active transport" },
              { id: "d", text: "Osmosis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active transport",
                statement:
                  "Protein pumps move substances against the gradient using ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Active transport uses ATP against the gradient.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Active transport",
            commonErrors: ["Including facilitated diffusion — no ATP needed."],
          },
        },
        {
          id: "cial-b-u1-mf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between simple diffusion and facilitated diffusion across a membrane.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Diffusion types",
                statement:
                  "Simple: straight through bilayer, no protein. Facilitated: via channel/carrier protein, still down gradient.",
              },
            ],
            steps: [
              {
                reasoning: "Simple diffusion passes directly through the bilayer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Facilitated uses a membrane protein; both move down the gradient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Simple=through bilayer; facilitated=via protein; both down gradient.",
            commonErrors: ["Saying facilitated diffusion uses ATP."],
          },
        },
        {
          id: "cial-b-u1-mf-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A potato cylinder has initial mass 5.0 g. After 1 hour in a solution it has mass 4.0 g. Calculate the percentage change in mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -20, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage change",
                statement:
                  "Percentage change = ((final − initial) / initial) $\\times$ 100.",
              },
            ],
            steps: [
              {
                reasoning: "Change $= 4.0 - 5.0 = -1.0$ g.",
                working: "4.0 - 5.0 = -1.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage $= (-1.0 / 5.0) \\times 100 = -20$.",
                working: "-1.0 \\div 5.0 \\times 100 = -20",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Negative sign shows mass loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-20%",
            commonErrors: ["Ignoring the negative sign — mass decreased."],
          },
        },
        {
          id: "cial-b-u1-mf-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how endocytosis and exocytosis move large molecules across the cell membrane.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vesicle transport",
                statement:
                  "Endocytosis: membrane invaginates to engulf material. Exocytosis: vesicles fuse with membrane to release contents.",
              },
            ],
            steps: [
              {
                reasoning: "Endocytosis: membrane folds inward, forms vesicle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vesicle carries material into the cell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exocytosis: vesicle fuses with membrane, releases contents out.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both described accurately.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Endocytosis=membrane engulfs inward; exocytosis=vesicles release outward.",
            commonErrors: ["Saying large molecules diffuse through the bilayer."],
          },
        },
        {
          id: "cial-b-u1-mf-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a red blood cell bursts (haemolyses) when placed in distilled water but a plant cell does not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmosis and walls",
                statement:
                  "Distilled water is hypotonic; RBC has no wall so bursts; plant cell wall prevents bursting (turgor).",
              },
            ],
            steps: [
              {
                reasoning: "Distilled water = hypotonic; water enters both cells by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "RBC has no cell wall — membrane cannot resist pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "RBC swells and bursts (haemolysis).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plant cell wall resists — turgor instead of bursting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Water enters by osmosis; RBC lacks a wall so bursts; plant wall gives turgor.",
            commonErrors: ["Saying plant cells take in no water."],
          },
        },
        {
          id: "cial-b-u1-mf-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A potato cylinder of initial mass 4.0 g is placed in a solution and after 2 hours has mass 4.6 g. Calculate the percentage change in mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage change",
                statement:
                  "Percentage change = ((final − initial) / initial) $\\times$ 100.",
              },
            ],
            steps: [
              {
                reasoning: "Change $= 4.6 - 4.0 = 0.6$ g.",
                working: "4.6 - 4.0 = 0.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Percentage $= (0.6 / 4.0) \\times 100 = 15$.",
                working: "0.6 \\div 4.0 \\times 100 = 15",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Positive sign shows mass gain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "+15%",
            commonErrors: ["Reporting -15% — mass increased."],
          },
        },
        {
          id: "cial-b-u1-mf-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to an animal cell placed in a hypotonic solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shrivels as water leaves" },
              { id: "b", text: "It swells and may burst" },
              { id: "c", text: "It becomes rigid" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypotonic",
                statement:
                  "Lower external solute concentration; water enters; cell swells and may burst.",
              },
            ],
            steps: [
              {
                reasoning: "Water enters by osmosis in hypotonic solution.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** It swells and may burst",
            commonErrors: ["Swapping hypotonic and hypertonic."],
          },
        },
        {
          id: "cial-b-u1-mf-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which molecule typically needs a channel or carrier protein to cross the membrane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Ethanol" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transport",
                statement:
                  "Polar/charged molecules like glucose need channel/carrier proteins.",
              },
            ],
            steps: [
              {
                reasoning: "Glucose is polar — needs facilitated transport.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Glucose",
            commonErrors: ["Choosing a small non-polar molecule."],
          },
        },
        {
          id: "cial-b-u1-mf-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "An animal cell of mass 2.0 g is placed in a solution and gains 0.4 g of water by osmosis. Calculate its new mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.4, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "New mass",
                statement: "New mass = initial mass + mass gained.",
              },
            ],
            steps: [
              {
                reasoning: "New mass $= 2.0 + 0.4 = 2.4$ g.",
                working: "2.0 + 0.4 = 2.4",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct new mass with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.4 g",
            commonErrors: ["Subtracting instead of adding the water gained."],
          },
        },
        {
          id: "cial-b-u1-mf-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Membrane transport.",
          parts: [
            {
              label: "a",
              prompt: "Which molecules diffuse directly through the bilayer?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "What happens to an animal cell in a hypertonic solution?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Why do plant cells not burst in hypotonic solutions?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Distinguish diffusion, facilitated diffusion and active transport.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transport",
                statement:
                  "Non-polar diffuse; tonicity effects; wall prevents bursting; three transport types.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Small non-polar molecules like O$_2$ and CO$_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Water leaves by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Cell shrivels/crenates.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Water enters by osmosis as in animal cells.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Rigid cell wall resists osmotic pressure.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Result is turgor, not bursting.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Diffusion = through bilayer, down gradient, no protein.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Facilitated = via protein, down gradient, no ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Active = via pump protein, against gradient, uses ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) non-polar (b) shrivel (c) wall=turgor (d) diff/facilitated/active",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u1-cell-membrane-notes",
      title: "Cell membrane structure — revision notes",
      summary:
        "Fluid mosaic model, phospholipid bilayer and membrane permeability.",
      sections: [
        {
          heading: "Fluid mosaic model",
          body: "Membrane = phospholipid bilayer (hydrophilic heads out, hydrophobic tails in) with proteins, cholesterol and glycoproteins embedded. 'Fluid' — lipids and proteins move laterally; 'mosaic' — proteins scattered like tiles. Cholesterol buffers fluidity: stiffens at high temperature, prevents tight packing at low temperature.",
        },
        {
          heading: "Transport across the membrane",
          body: "Small non-polar molecules (O$_2$, CO$_2$) diffuse directly through the bilayer. Polar/charged molecules need channel or carrier proteins (facilitated diffusion, down gradient) or pumps (active transport, against gradient, uses ATP). Large molecules move by endocytosis/exocytosis via vesicles.",
        },
        {
          heading: "Permeability",
          body: "Permeability increases with fluidity and temperature. Factors: cholesterol content, fatty acid saturation (saturated = packed = less fluid), presence of aquaporins for water.",
        },
        {
          heading: "Exam checklist",
          body: "Distinguish diffusion (no protein, down gradient) from facilitated diffusion (protein, still down gradient) from active transport (protein + ATP, against gradient). Draw the bilayer with heads out / tails in when asked.",
        },
      ],
    },
  ],
};
