import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cipub-u3-lesson-3-1",
  code: "3-1",
  title: "Cell biology in depth",
  goal: "I CAN explain cell structure, membrane transport, cell division and organelle function in depth.",
  standards: [
    "Cambridge Pre-U Biology 9769",
    "Paper 1: Core topics — cell biology",
  ],
  vocabulary: [
    {
      term: "Plasma membrane",
      definition:
        "Phospholipid bilayer with proteins — controls what enters/leaves cell.",
    },
    {
      term: "Fluid mosaic model",
      definition:
        "Membrane model — proteins float in fluid phospholipid bilayer.",
    },
    {
      term: "Diffusion",
      definition: "Net movement of particles from high to low concentration.",
    },
    {
      term: "Osmosis",
      definition: "Diffusion of water across partially permeable membrane.",
    },
    {
      term: "Active transport",
      definition: "Movement against concentration gradient using ATP energy.",
    },
    {
      term: "Endocytosis",
      definition: "Cell membrane engulfs material — phagocytosis, pinocytosis.",
    },
    {
      term: "Exocytosis",
      definition: "Vesicle fuses with membrane to release contents.",
    },
    {
      term: "Mitosis",
      definition: "Cell division producing two identical diploid cells.",
    },
    {
      term: "Meiosis",
      definition: "Cell division producing four haploid gametes.",
    },
    {
      term: "Cytokinesis",
      definition: "Cytoplasm division after nuclear division.",
    },
    {
      term: "Chromosome",
      definition: "Condensed DNA + proteins — carries genetic information.",
    },
    {
      term: "Centromere",
      definition: "Point where sister chromatids join.",
    },
  ],
  concepts: [
    {
      id: "cipub-u3-membrane",
      title: "Cell membrane transport",
      skill:
        "Explain diffusion, osmosis, active transport and bulk transport across membranes.",
      lesson: {
        sections: [
          {
            heading: "Membrane structure",
            body: "**Fluid mosaic model**: phospholipid bilayer with embedded proteins — membrane is fluid (components move) and mosaic (proteins scattered). **Phospholipids**: hydrophilic heads, hydrophobic tails — form bilayer. **Proteins**: channel proteins (pores), carrier proteins (transport), glycoproteins (recognition). **Cholesterol**: stabilises membrane, affects fluidity.",
          },
          {
            heading: "Passive transport",
            body: "**Diffusion**: net movement from high to low concentration — no energy needed. Factors: concentration gradient, temperature, surface area, distance. **Osmosis**: diffusion of water across partially permeable membrane — from high water potential to low. **Facilitated diffusion**: uses channel/carrier proteins — still passive (no ATP).",
          },
          {
            heading: "Active and bulk transport",
            body: "**Active transport**: movement against concentration gradient — needs ATP and carrier proteins. Example: sodium-potassium pump, mineral uptake in roots. **Endocytosis**: membrane engulfs material — phagocytosis (solids), pinocytosis (liquids). **Exocytosis**: vesicle fuses with membrane to release contents — secretion, neurotransmitters.",
          },
        ],
        keyFormulas: [
          {
            name: "Diffusion",
            statement: "High → low concentration · no energy",
          },
          {
            name: "Osmosis",
            statement: "Water across partially permeable membrane",
          },
          {
            name: "Active transport",
            statement: "Against gradient · needs ATP",
          },
          {
            name: "Bulk transport",
            statement: "Endocytosis (in) · exocytosis (out)",
          },
        ],
        workedExample: {
          problem: "Why does active transport need ATP?",
          solution:
            "Moving against concentration gradient requires energy — ATP powers carrier proteins.",
        },
      },
      questions: [
        {
          id: "cipub-u3-mem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The fluid mosaic model describes the cell membrane as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Fluid phospholipid bilayer with embedded proteins",
              },
              { id: "b", text: "Solid wall" },
              { id: "c", text: "Protein only" },
              { id: "d", text: "Lipid only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fluid mosaic",
                statement: "Fluid bilayer + embedded proteins.",
              },
            ],
            steps: [
              {
                reasoning: "Fluid mosaic = fluid bilayer + proteins.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fluid bilayer + proteins.",
          },
        },
        {
          id: "cipub-u3-mem-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Phospholipids in the membrane have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrophilic heads and hydrophobic tails" },
              { id: "b", text: "Only hydrophilic" },
              { id: "c", text: "Only hydrophobic" },
              { id: "d", text: "No polarity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipid",
                statement: "Hydrophilic heads, hydrophobic tails.",
              },
            ],
            steps: [
              {
                reasoning: "Phospholipid = polar structure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Hydrophilic heads, hydrophobic tails.",
          },
        },
        {
          id: "cipub-u3-mem-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Diffusion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Net movement from high to low concentration" },
              { id: "b", text: "Movement against gradient" },
              { id: "c", text: "Water movement" },
              { id: "d", text: "Active transport" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffusion",
                statement: "High → low concentration.",
              },
            ],
            steps: [
              {
                reasoning: "Diffusion = down gradient.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) High to low concentration.",
          },
        },
        {
          id: "cipub-u3-mem-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Osmosis is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Diffusion of water across partially permeable membrane",
              },
              { id: "b", text: "Diffusion of solutes" },
              { id: "c", text: "Active transport" },
              { id: "d", text: "Endocytosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Osmosis",
                statement: "Water across partially permeable membrane.",
              },
            ],
            steps: [
              {
                reasoning: "Osmosis = water diffusion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Water diffusion.",
          },
        },
        {
          id: "cipub-u3-mem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Active transport requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ATP energy" },
              { id: "b", text: "No energy" },
              { id: "c", text: "Only diffusion" },
              { id: "d", text: "Only osmosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active transport",
                statement: "Needs ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Active = needs ATP.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) ATP energy.",
          },
        },
        {
          id: "cipub-u3-mem-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Endocytosis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Membrane engulfs material into cell" },
              { id: "b", text: "Material released" },
              { id: "c", text: "Diffusion" },
              { id: "d", text: "Osmosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endocytosis",
                statement: "Engulfs material in.",
              },
            ],
            steps: [
              {
                reasoning: "Endocytosis = into cell.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Engulfs material in.",
          },
        },
        {
          id: "cipub-u3-mem-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Exocytosis is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Vesicle fuses with membrane to release contents",
              },
              { id: "b", text: "Material engulfed" },
              { id: "c", text: "Diffusion" },
              { id: "d", text: "Osmosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exocytosis",
                statement: "Vesicle releases out.",
              },
            ],
            steps: [
              {
                reasoning: "Exocytosis = out of cell.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Vesicle releases out.",
          },
        },
        {
          id: "cipub-u3-mem-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Channel proteins in the membrane:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Form pores for specific molecules" },
              { id: "b", text: "Carry molecules" },
              { id: "c", text: "Recognise cells" },
              { id: "d", text: "Stabilise membrane" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Channel protein",
                statement: "Forms pores.",
              },
            ],
            steps: [
              {
                reasoning: "Channel = pores.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Form pores.",
          },
        },
        {
          id: "cipub-u3-mem-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Carrier proteins in the membrane:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bind and transport specific molecules" },
              { id: "b", text: "Form pores" },
              { id: "c", text: "Recognise cells" },
              { id: "d", text: "Stabilise" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrier protein",
                statement: "Binds and transports.",
              },
            ],
            steps: [
              {
                reasoning: "Carrier = binds/transports.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Bind and transport.",
          },
        },
        {
          id: "cipub-u3-mem-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Facilitated diffusion uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Channel or carrier proteins — still passive" },
              { id: "b", text: "ATP" },
              { id: "c", text: "Active transport" },
              { id: "d", text: "Endocytosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Facilitated diffusion",
                statement: "Uses proteins, still passive.",
              },
            ],
            steps: [
              {
                reasoning: "Facilitated = proteins, passive.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Proteins, still passive.",
          },
        },
        {
          id: "cipub-u3-mem-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Factors affecting diffusion rate include:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Concentration gradient, temperature, surface area",
              },
              { id: "b", text: "Only concentration" },
              { id: "c", text: "Only temperature" },
              { id: "d", text: "Only pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffusion factors",
                statement: "Gradient, temperature, area.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Gradient, temperature, area.",
          },
        },
        {
          id: "cipub-u3-mem-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water potential refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Potential energy of water in a system" },
              { id: "b", text: "Amount of water" },
              { id: "c", text: "Water pressure" },
              { id: "d", text: "Water temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water potential",
                statement: "Energy of water in system.",
              },
            ],
            steps: [
              {
                reasoning: "Water potential = energy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Energy of water.",
          },
        },
        {
          id: "cipub-u3-mem-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cell placed in a hypotonic solution will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gain water and swell" },
              { id: "b", text: "Lose water and shrink" },
              { id: "c", text: "Stay same" },
              { id: "d", text: "Burst immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hypotonic",
                statement: "Higher water potential outside → water enters.",
              },
            ],
            steps: [
              {
                reasoning: "Hypotonic = water enters.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Gain water, swell.",
          },
        },
        {
          id: "cipub-u3-mem-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cell placed in a hypertonic solution will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lose water and shrink (plasmolysis)" },
              { id: "b", text: "Gain water" },
              { id: "c", text: "Stay same" },
              { id: "d", text: "Burst" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hypertonic",
                statement: "Water leaves → plasmolysis.",
              },
            ],
            steps: [
              {
                reasoning: "Hypertonic = water leaves.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lose water, plasmolysis.",
          },
        },
        {
          id: "cipub-u3-mem-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plasmolysis occurs when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Plant cell loses water in hypertonic solution",
              },
              { id: "b", text: "Cell gains water" },
              { id: "c", text: "Cell divides" },
              { id: "d", text: "Cell dies" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plasmolysis",
                statement: "Water loss in hypertonic.",
              },
            ],
            steps: [
              {
                reasoning: "Plasmolysis = water loss.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Water loss in hypertonic.",
          },
        },
        {
          id: "cipub-u3-mem-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Turgor pressure in plant cells results from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water entering cell against cell wall" },
              { id: "b", text: "Water leaving" },
              { id: "c", text: "Cell division" },
              { id: "d", text: "Active transport" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Turgor pressure",
                statement: "Water pressure against cell wall.",
              },
            ],
            steps: [
              {
                reasoning: "Turgor = water pressure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Water pressure against wall.",
          },
        },
        {
          id: "cipub-u3-mem-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "The sodium-potassium pump is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active transport" },
              { id: "b", text: "Diffusion" },
              { id: "c", text: "Osmosis" },
              { id: "d", text: "Endocytosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Na/K pump",
                statement: "Active transport example.",
              },
            ],
            steps: [
              {
                reasoning: "Na/K pump = active transport.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Active transport.",
          },
        },
        {
          id: "cipub-u3-mem-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Phagocytosis is a type of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endocytosis — engulfing solids" },
              { id: "b", text: "Exocytosis" },
              { id: "c", text: "Diffusion" },
              { id: "d", text: "Osmosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phagocytosis",
                statement: "Endocytosis of solids.",
              },
            ],
            steps: [
              {
                reasoning: "Phagocytosis = solids in.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Endocytosis of solids.",
          },
        },
        {
          id: "cipub-u3-mem-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pinocytosis is a type of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endocytosis — engulfing liquids" },
              { id: "b", text: "Exocytosis" },
              { id: "c", text: "Diffusion" },
              { id: "d", text: "Osmosis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pinocytosis",
                statement: "Endocytosis of liquids.",
              },
            ],
            steps: [
              {
                reasoning: "Pinocytosis = liquids in.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Endocytosis of liquids.",
          },
        },
        {
          id: "cipub-u3-mem-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between diffusion and osmosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffusion vs osmosis",
                statement: "Solutes vs water.",
              },
            ],
            steps: [
              {
                reasoning: "Diffusion: movement of solutes/particles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Osmosis: movement of water specifically.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Diffusion = solutes; osmosis = water.",
          },
        },
        {
          id: "cipub-u3-mem-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors affecting diffusion rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffusion factors",
                statement: "Gradient, temperature, area, distance.",
              },
            ],
            steps: [
              {
                reasoning: "Concentration gradient and temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Surface area and distance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gradient, temperature, surface area, distance.",
          },
        },
        {
          id: "cipub-u3-mem-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why active transport is necessary for some substances.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Active transport need",
                statement: "Against gradient requires energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Some substances need to move against concentration gradient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Diffusion/osmosis can't achieve this — passive only.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Active transport uses ATP to power carrier proteins.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Against gradient needs ATP-powered carriers.",
          },
        },
        {
          id: "cipub-u3-mem-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant root absorbs minerals from soil. Explain the transport mechanism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mineral uptake",
                statement: "Active transport needed.",
              },
            ],
            steps: [
              {
                reasoning: "Mineral ions often at lower concentration in soil.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Root cells use active transport — ATP + carrier proteins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moves ions against gradient into root cells.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then transported via xylem to rest of plant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Active transport against gradient → xylem transport.",
          },
        },
        {
          id: "cipub-u3-mem-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Glycoproteins in the membrane function in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell recognition" },
              { id: "b", text: "Transport" },
              { id: "c", text: "Stabilisation" },
              { id: "d", text: "Energy production" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycoprotein",
                statement: "Cell recognition.",
              },
            ],
            steps: [
              {
                reasoning: "Glycoprotein = recognition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cell recognition.",
          },
        },
        {
          id: "cipub-u3-mem-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of cholesterol in the membrane?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cholesterol role",
                statement: "Stabilises membrane fluidity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stabilises membrane — prevents too fluid or too rigid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Affects fluidity — important at different temperatures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Stabilises fluidity — prevents extremes.",
          },
        },
        {
          id: "cipub-u3-mem-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how exocytosis works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exocytosis mechanism",
                statement: "Vesicle fuses with membrane.",
              },
            ],
            steps: [
              {
                reasoning: "Vesicle containing substance moves to membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vesicle membrane fuses with plasma membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contents released outside cell — requires ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vesicle fuses → contents released → ATP needed.",
          },
        },
        {
          id: "cipub-u3-mem-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which transport requires ATP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active transport" },
              { id: "b", text: "Diffusion" },
              { id: "c", text: "Osmosis" },
              { id: "d", text: "Facilitated diffusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ATP transport",
                statement: "Only active transport.",
              },
            ],
            steps: [
              {
                reasoning: "Active = ATP.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Active transport.",
          },
        },
        {
          id: "cipub-u3-mem-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the cell membrane described as 'fluid'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Membrane fluidity",
                statement: "Components can move.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phospholipids and proteins can move within membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Allows membrane to change shape — endocytosis/exocytosis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Components move — allows shape change.",
          },
        },
        {
          id: "cipub-u3-mem-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A red blood cell is placed in distilled water. Predict and explain what happens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Osmosis prediction",
                statement: "Hypotonic → water enters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Distilled water = hypotonic (higher water potential).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water enters cell by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No cell wall — cell swells and bursts (haemolysis).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Animal cells lack cell wall — can't withstand pressure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Water enters → cell bursts (no cell wall).",
          },
        },
        {
          id: "cipub-u3-mem-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between phagocytosis and pinocytosis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phago vs pino",
                statement: "Solids vs liquids.",
              },
            ],
            steps: [
              {
                reasoning: "Phagocytosis: engulfing solid particles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pinocytosis: engulfing liquid droplets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Phago = solids; pino = liquids.",
          },
        },
      ],
    },
    {
      id: "cipub-u3-division",
      title: "Cell division: mitosis and meiosis",
      skill: "Explain stages of mitosis and meiosis and their significance.",
      lesson: {
        sections: [
          {
            heading: "The cell cycle",
            body: "**Interphase**: G1 (growth), S (DNA replication), G2 (preparation). **Mitosis**: nuclear division — prophase, metaphase, anaphase, telophase. **Cytokinesis**: cytoplasm divides. Cell cycle is tightly controlled — checkpoints prevent errors.",
          },
          {
            heading: "Mitosis stages",
            body: "**Prophase**: chromosomes condense, nuclear envelope breaks, spindle forms. **Metaphase**: chromosomes align at equator (metaphase plate), spindle fibres attach to centromeres. **Anaphase**: sister chromatids separate, pulled to opposite poles. **Telophase**: nuclear envelopes reform, chromosomes decondense. **Cytokinesis**: cell splits into two identical daughter cells.",
          },
          {
            heading: "Meiosis and significance",
            body: "**Meiosis**: two divisions (Meiosis I and II) producing four haploid cells. **Meiosis I**: homologous chromosomes separate — crossing over creates variation. **Meiosis II**: sister chromatids separate — like mitosis. Significance: produces gametes for sexual reproduction — genetic variation through independent assortment and crossing over.",
          },
        ],
        keyFormulas: [
          {
            name: "Mitosis result",
            statement: "Two identical diploid cells",
          },
          {
            name: "Meiosis result",
            statement: "Four different haploid cells",
          },
          {
            name: "Mitosis stages",
            statement: "Prophase → metaphase → anaphase → telophase",
          },
          {
            name: "Meiosis significance",
            statement: "Gametes + genetic variation",
          },
        ],
        workedExample: {
          problem: "Why does meiosis produce variation?",
          solution:
            "Crossing over exchanges genetic material; independent assortment shuffles chromosomes — produces unique gametes.",
        },
      },
      questions: [
        {
          id: "cipub-u3-div-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mitosis produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two identical diploid cells" },
              { id: "b", text: "Four haploid cells" },
              { id: "c", text: "One cell" },
              { id: "d", text: "Different cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitosis result",
                statement: "Two identical diploid.",
              },
            ],
            steps: [
              {
                reasoning: "Mitosis = identical diploid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Two identical diploid.",
          },
        },
        {
          id: "cipub-u3-div-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Meiosis produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four different haploid cells" },
              { id: "b", text: "Two identical diploid" },
              { id: "c", text: "One cell" },
              { id: "d", text: "Diploid cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meiosis result",
                statement: "Four different haploid.",
              },
            ],
            steps: [
              {
                reasoning: "Meiosis = four haploid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Four different haploid.",
          },
        },
        {
          id: "cipub-u3-div-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Prophase of mitosis involves:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Chromosomes condense, nuclear envelope breaks",
              },
              { id: "b", text: "Chromosomes align" },
              { id: "c", text: "Chromatids separate" },
              { id: "d", text: "Cell splits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prophase",
                statement: "Condensation, envelope breaks.",
              },
            ],
            steps: [
              {
                reasoning: "Prophase = condensation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Condense, envelope breaks.",
          },
        },
        {
          id: "cipub-u3-div-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Metaphase of mitosis involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chromosomes align at equator" },
              { id: "b", text: "Chromosomes condense" },
              { id: "c", text: "Chromatids separate" },
              { id: "d", text: "Cell splits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphase",
                statement: "Align at equator.",
              },
            ],
            steps: [
              {
                reasoning: "Metaphase = alignment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Align at equator.",
          },
        },
        {
          id: "cipub-u3-div-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Anaphase of mitosis involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sister chromatids separate to opposite poles" },
              { id: "b", text: "Chromosomes align" },
              { id: "c", text: "Cell splits" },
              { id: "d", text: "DNA replicates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaphase",
                statement: "Chromatids separate.",
              },
            ],
            steps: [
              {
                reasoning: "Anaphase = separation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Chromatids separate.",
          },
        },
        {
          id: "cipub-u3-div-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Telophase of mitosis involves:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Nuclear envelopes reform, chromosomes decondense",
              },
              { id: "b", text: "Chromosomes align" },
              { id: "c", text: "Chromatids separate" },
              { id: "d", text: "Cell splits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Telophase",
                statement: "Envelopes reform.",
              },
            ],
            steps: [
              {
                reasoning: "Telophase = reform.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Envelopes reform.",
          },
        },
        {
          id: "cipub-u3-div-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cytokinesis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Division of cytoplasm after nuclear division" },
              { id: "b", text: "Nuclear division" },
              { id: "c", text: "DNA replication" },
              { id: "d", text: "Chromosome condensation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cytokinesis",
                statement: "Cytoplasm division.",
              },
            ],
            steps: [
              {
                reasoning: "Cytokinesis = cytoplasm split.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cytoplasm division.",
          },
        },
        {
          id: "cipub-u3-div-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Interphase includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "G1, S, G2 phases" },
              { id: "b", text: "Only mitosis" },
              { id: "c", text: "Only meiosis" },
              { id: "d", text: "Cytokinesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interphase",
                statement: "G1, S, G2.",
              },
            ],
            steps: [
              {
                reasoning: "Interphase = G1/S/G2.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) G1, S, G2.",
          },
        },
        {
          id: "cipub-u3-div-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The S phase of interphase involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA replication" },
              { id: "b", text: "Cell growth" },
              { id: "c", text: "Protein synthesis" },
              { id: "d", text: "Cell division" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "S phase",
                statement: "DNA replication.",
              },
            ],
            steps: [
              {
                reasoning: "S = DNA replication.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) DNA replication.",
          },
        },
        {
          id: "cipub-u3-div-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Crossing over occurs during:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meiosis I prophase" },
              { id: "b", text: "Mitosis" },
              { id: "c", text: "Interphase" },
              { id: "d", text: "Cytokinesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crossing over",
                statement: "Meiosis I prophase.",
              },
            ],
            steps: [
              {
                reasoning: "Crossing over = meiosis I.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Meiosis I prophase.",
          },
        },
        {
          id: "cipub-u3-div-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Independent assortment refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random arrangement of homologous chromosomes" },
              { id: "b", text: "DNA replication" },
              { id: "c", text: "Cell division" },
              { id: "d", text: "Chromosome condensation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent assortment",
                statement: "Random chromosome arrangement.",
              },
            ],
            steps: [
              {
                reasoning: "Independent = random arrangement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Random arrangement.",
          },
        },
        {
          id: "cipub-u3-div-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A homologous chromosome pair consists of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Two chromosomes with same genes (one from each parent)",
              },
              { id: "b", text: "Identical chromosomes" },
              { id: "c", text: "Different genes" },
              { id: "d", text: "One chromosome" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous pair",
                statement: "Same genes, one from each parent.",
              },
            ],
            steps: [
              {
                reasoning: "Homologous = same genes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same genes, one each parent.",
          },
        },
        {
          id: "cipub-u3-div-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A centromere is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Point where sister chromatids join" },
              { id: "b", text: "End of chromosome" },
              { id: "c", text: "DNA sequence" },
              { id: "d", text: "Spindle fibre" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Centromere",
                statement: "Where chromatids join.",
              },
            ],
            steps: [
              {
                reasoning: "Centromere = join point.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Where chromatids join.",
          },
        },
        {
          id: "cipub-u3-div-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sister chromatids are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identical copies of a chromosome" },
              { id: "b", text: "Different chromosomes" },
              { id: "c", text: "Homologous pairs" },
              { id: "d", text: "Gametes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sister chromatids",
                statement: "Identical copies.",
              },
            ],
            steps: [
              {
                reasoning: "Sister = identical.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Identical copies.",
          },
        },
        {
          id: "cipub-u3-div-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The spindle apparatus is made of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Microtubules" },
              { id: "b", text: "Actin" },
              { id: "c", text: "DNA" },
              { id: "d", text: "Proteins only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spindle",
                statement: "Microtubules.",
              },
            ],
            steps: [
              {
                reasoning: "Spindle = microtubules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Microtubules.",
          },
        },
        {
          id: "cipub-u3-div-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Meiosis I is called 'reductional' because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It reduces chromosome number from diploid to haploid",
              },
              { id: "b", text: "It reduces cell size" },
              { id: "c", text: "It reduces DNA" },
              { id: "d", text: "It reduces protein" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reductional division",
                statement: "Diploid → haploid.",
              },
            ],
            steps: [
              {
                reasoning: "Meiosis I = reduction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Diploid to haploid.",
          },
        },
        {
          id: "cipub-u3-div-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Meiosis II is similar to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitosis" },
              { id: "b", text: "Interphase" },
              { id: "c", text: "Meiosis I" },
              { id: "d", text: "Cytokinesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meiosis II",
                statement: "Like mitosis — chromatids separate.",
              },
            ],
            steps: [
              {
                reasoning: "Meiosis II = mitosis-like.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Mitosis.",
          },
        },
        {
          id: "cipub-u3-div-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A diploid cell has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two sets of chromosomes" },
              { id: "b", text: "One set" },
              { id: "c", text: "No chromosomes" },
              { id: "d", text: "Four sets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diploid",
                statement: "Two chromosome sets.",
              },
            ],
            steps: [
              {
                reasoning: "Diploid = 2n.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Two sets.",
          },
        },
        {
          id: "cipub-u3-div-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A haploid cell has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One set of chromosomes" },
              { id: "b", text: "Two sets" },
              { id: "c", text: "No chromosomes" },
              { id: "d", text: "Four sets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Haploid",
                statement: "One chromosome set.",
              },
            ],
            steps: [
              {
                reasoning: "Haploid = n.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One set.",
          },
        },
        {
          id: "cipub-u3-div-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between mitosis and meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mitosis vs meiosis",
                statement: "Identical vs varied gametes.",
              },
            ],
            steps: [
              {
                reasoning: "Mitosis: two identical diploid cells.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Meiosis: four different haploid gametes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mitosis = identical diploid; meiosis = varied haploid.",
          },
        },
        {
          id: "cipub-u3-div-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two sources of genetic variation in meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genetic variation",
                statement: "Crossing over + independent assortment.",
              },
            ],
            steps: [
              {
                reasoning: "Crossing over exchanges genetic material.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Independent assortment shuffles chromosomes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Crossing over + independent assortment.",
          },
        },
        {
          id: "cipub-u3-div-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the significance of mitosis in living organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mitosis significance",
                statement: "Growth, repair, asexual reproduction.",
              },
            ],
            steps: [
              {
                reasoning: "Produces identical cells for growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Replaces damaged cells — repair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Enables asexual reproduction — identical offspring.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Growth, repair, asexual reproduction.",
          },
        },
        {
          id: "cipub-u3-div-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A species has 2n=8. How many chromosomes in gametes? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Chromosome calculation",
                statement: "Gametes are haploid (n).",
              },
            ],
            steps: [
              {
                reasoning: "2n=8 means diploid has 8 chromosomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gametes are haploid — n=4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Meiosis halves chromosome number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fertilisation restores diploid — 2n=8 in offspring.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gametes have 4 chromosomes (n=4).",
          },
        },
        {
          id: "cipub-u3-div-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "The metaphase plate is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The equatorial plane where chromosomes align" },
              { id: "b", text: "A chromosome" },
              { id: "c", text: "A spindle fibre" },
              { id: "d", text: "A centromere" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metaphase plate",
                statement: "Equatorial alignment plane.",
              },
            ],
            steps: [
              {
                reasoning: "Metaphase plate = equator.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Equatorial plane.",
          },
        },
        {
          id: "cipub-u3-div-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'nondisjunction'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nondisjunction",
                statement: "Failure of chromosomes to separate.",
              },
            ],
            steps: [
              {
                reasoning: "Failure of chromosomes/chromatids to separate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Results in abnormal chromosome numbers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Failure to separate → abnormal numbers.",
          },
        },
        {
          id: "cipub-u3-div-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how crossing over increases genetic variation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crossing over",
                statement: "Exchanges genetic material.",
              },
            ],
            steps: [
              {
                reasoning: "Homologous chromosomes exchange segments.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates new allele combinations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increases variation beyond independent assortment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exchanges segments → new combinations → more variation.",
          },
        },
        {
          id: "cipub-u3-div-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gametes are produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meiosis" },
              { id: "b", text: "Mitosis" },
              { id: "c", text: "Interphase" },
              { id: "d", text: "Cytokinesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gamete production",
                statement: "Meiosis.",
              },
            ],
            steps: [
              {
                reasoning: "Gametes = meiosis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Meiosis.",
          },
        },
        {
          id: "cipub-u3-div-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are daughter cells from mitosis identical?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mitosis identical",
                statement: "Same chromosome number and genes.",
              },
            ],
            steps: [
              {
                reasoning: "DNA replicates before division — exact copies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sister chromatids are identical — separate equally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "DNA replicates exactly → identical cells.",
          },
        },
        {
          id: "cipub-u3-div-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why meiosis is essential for sexual reproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Meiosis significance",
                statement: "Gametes + variation + chromosome number.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Produces haploid gametes — correct chromosome number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fertilisation restores diploid — maintains species number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Crossing over + independent assortment create variation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Variation allows evolution and adaptation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gametes + variation + chromosome number maintenance.",
          },
        },
        {
          id: "cipub-u3-div-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens if nondisjunction occurs in meiosis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nondisjunction consequence",
                statement: "Abnormal chromosome numbers.",
              },
            ],
            steps: [
              {
                reasoning: "Chromosomes fail to separate properly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gametes have wrong chromosome number → genetic disorders.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Abnormal chromosome numbers → genetic disorders.",
          },
        },
      ],
    },
  ],
};
