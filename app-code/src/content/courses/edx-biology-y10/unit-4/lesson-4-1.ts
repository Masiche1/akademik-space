import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ebi10-u4-lesson-4-1",
  code: "4-1",
  title: "Biology Practical Skills I: Microscopy and Food Tests",
  goal: "I CAN prepare slides, use a microscope and carry out food tests.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Resolution",
      definition: "Ability to distinguish two close points as separate.",
    },
    {
      term: "Stain",
      definition: "Chemical that colours cell structures for visibility.",
    },
    {
      term: "Mountant",
      definition:
        "Liquid (e.g., glycerol) that supports the specimen under coverslip.",
    },
    {
      term: "Food test",
      definition:
        "Chemical test identifying nutrients — Benedict's, iodine, Biuret.",
    },
  ],
  concepts: [
    {
      id: "ebi10-u4-microscopy",
      title: "Microscopy Technique",
      skill: "Prepare slides and use a light microscope correctly.",
      lesson: {
        sections: [
          {
            heading: "Preparing slides",
            body: "Place thin specimen on slide → add stain (methylene blue for cells, iodine for starch) → lower coverslip at 45° to avoid air bubbles → blot excess liquid. **Thin sections** essential — thick specimens block light.\n\n**Focus order**: low power first (×4-×10) → centre specimen → fine focus → switch to high power (×40) → fine focus ONLY (coarse damages slide). Never use coarse focus on high power.",
          },
          {
            heading: "Measurements and drawing",
            body: "**Magnification** = image size ÷ actual size. Measure with eyepiece graticule calibrated against stage micrometer. **Scale drawings**: measure specimen, multiply by magnification, draw proportional diagram with labels and scale bar.\n\n**Errors**: bubbles (lower coverslip slowly), thick specimens (section thinner), wrong stain (choose appropriate), dirty lens (use lens paper only). Store microscope with lowest power objective engaged.",
          },
        ],
        keyFormulas: [
          {
            name: "Magnification",
            statement: "Magnification = image size ÷ actual size.",
          },
          {
            name: "Focus order",
            statement:
              "Low power → centre → fine focus → high power → fine only.",
          },
        ],
        workedExample: {
          problem:
            "Cell measures 0.05 mm actual, image is 5 mm. Magnification?",
          solution: "5 ÷ 0.05 = ×100.",
        },
      },
      questions: [
        {
          id: "ebi10-u4-microscopy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is a thin specimen section important for microscopy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light can pass through" },
              { id: "b", text: "It looks bigger" },
              { id: "c", text: "It stains faster" },
              { id: "d", text: "It prevents bubbles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thin sections",
                statement: "Light must pass through specimen to be seen.",
              },
            ],
            steps: [
              {
                reasoning: "Light transmission needs thin section.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Light passes through",
            commonErrors: ["Size confused."],
          },
        },
        {
          id: "ebi10-u4-microscopy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the correct order for focusing a microscope.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Focusing",
                statement:
                  "Low power → centre → fine → high power → fine only.",
              },
            ],
            steps: [
              {
                reasoning: "Start low power objective.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Centre specimen, use fine focus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "High power: fine focus only — coarse risks damage.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Low power → centre → fine focus → high power → fine focus only.",
            commonErrors: ["Coarse on high power.", "Wrong order."],
          },
        },
        {
          id: "ebi10-u4-microscopy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student sees many air bubbles under the coverslip. Explain the cause and prevention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Air bubbles",
                statement: "Lowered coverslip too quickly traps air.",
              },
            ],
            steps: [
              {
                reasoning: "Coverslip lowered flat/too fast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Air trapped between slide and coverslip.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower at 45° angle slowly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Or add stain first then lower carefully.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Coverslip lowered too quickly — lower at 45° slowly to push air out.",
            commonErrors: ["Stain blamed.", "No prevention."],
          },
        },
        {
          id: "ebi10-u4-microscopy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Calculate magnification: image = 12 mm, actual = 0.06 mm.",
          parts: [
            { label: "a", prompt: "Calculate the magnification.", marks: 2 },
            {
              label: "b",
              prompt: "If eyepiece is ×10 and objective ×40, verify.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain why image appears larger but isn't.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnification",
                statement: "Image ÷ actual; eyepiece × objective = total.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 12 ÷ 0.06 = ×200.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) ×10 × ×40 = ×400 — doesn't match; recalculate.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Lenses bend light to make image appear larger.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning:
                  "(c) Actual specimen unchanged — only image enlarged.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) ×200 (b) eyepiece×objective=×400 (c) optics enlarge image, not object",
            commonErrors: ["Actual size changed view.", "Formula inverted."],
          },
        },
      ],
    },
    {
      id: "ebi10-u4-foodtests",
      title: "Food Tests",
      skill:
        "Perform and interpret tests for starch, reducing sugars, proteins and lipids.",
      lesson: {
        sections: [
          {
            heading: "Starch and reducing sugars",
            body: "**Iodine test**: add iodine solution → blue-black = starch present; brown/orange = absent. No heating needed.\n\n**Benedict's test**: add Benedict's solution → heat in water bath → blue → green → yellow → orange → brick red = reducing sugar present (more sugar = redder). Must heat — reaction needs energy. **Non-reducing sugars** (sucrose) need acid hydrolysis first.",
          },
          {
            heading: "Protein and lipid tests",
            body: "**Biuret test**: add Biuret solution → purple/lilac = protein present; blue = absent. No heating. Works on peptide bonds.\n\n**Ethanol emulsion test**: add ethanol, shake, pour into water → cloudy/milky emulsion = lipid present; clear = absent. **Emulsion test** alternative: Sudan III stain → red layer = lipid.",
          },
        ],
        keyFormulas: [
          {
            name: "Food tests",
            statement:
              "Iodine=starch (blue-black); Benedict's=sugar (brick red); Biuret=protein (purple); ethanol=lipid (milky).",
          },
        ],
        workedExample: {
          problem:
            "Unknown food turns blue with iodine, brick red with Benedict's. What's present?",
          solution: "Both starch and reducing sugar.",
        },
      },
      questions: [
        {
          id: "ebi10-u4-foodtests-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which food test requires heating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iodine" },
              { id: "b", text: "Biuret" },
              { id: "c", text: "Benedict's" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Benedict's",
                statement: "Requires heating for colour change.",
              },
            ],
            steps: [
              {
                reasoning: "Benedict's needs heating.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Benedict's",
            commonErrors: ["Iodine confused — no heating."],
          },
        },
        {
          id: "ebi10-u4-foodtests-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample turns purple with Biuret solution. What does this indicate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Biuret test",
                statement: "Purple = protein present.",
              },
            ],
            steps: [
              { reasoning: "Purple = protein.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Peptide bonds react with Biuret.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Blue would mean absent.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Protein present — Biuret detects peptide bonds.",
            commonErrors: ["Starch confused.", "No interpretation."],
          },
        },
        {
          id: "ebi10-u4-foodtests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why must Benedict's test be heated while iodine test doesn't?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Test conditions",
                statement:
                  "Benedict's reaction needs energy; iodine reacts at room temp.",
              },
            ],
            steps: [
              {
                reasoning: "Benedict's reduction needs activation energy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Heating provides energy for reaction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Iodine-starch complex forms spontaneously.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Benedict's needs heat for the reduction reaction; iodine-starch complex forms without heating.",
            commonErrors: ["Both need heat.", "No energy explanation."],
          },
        },
        {
          id: "ebi10-u4-foodtests-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Test an unknown food sample for all four nutrients.",
          parts: [
            {
              label: "a",
              prompt: "List the reagents and order of tests.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "State expected positive results for each.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why samples should be separate for each test.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Food test battery",
                statement:
                  "Separate samples — tests interfere with each other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Iodine, Benedict's+heat, Biuret, ethanol emulsion.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Separate sample per test.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Blue-black, brick red, purple, milky emulsion.",
                marks: 3,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning:
                  "(c) Reagents interfere — e.g., Benedict's copper affects others.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) four tests, separate samples (b) colours listed (c) reagent interference",
            commonErrors: ["Same sample used.", "Reagents mixed up."],
          },
        },
      ],
    },
  ],
};
