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
              { id: "a", text: "A phospholipid bilayer" },
              { id: "b", text: "A protein sheet" },
              { id: "c", text: "A carbohydrate layer" },
              { id: "d", text: "A DNA strand" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Phospholipid bilayer",
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
              { id: "a", text: "Small non-polar molecules like O₂ and CO₂" },
              { id: "b", text: "Large proteins" },
              { id: "c", text: "Ions" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Small non-polar molecules",
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
