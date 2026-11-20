import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cieb-u1-lesson-1-3",
  code: "1-3",
  title: "Microscopy and Levels of Organisation",
  goal: "I CAN use a light microscope, calculate magnification, and describe levels of organisation from cell to organism.",
  standards: ["0653 1.1"],
  vocabulary: [
    { term: "Magnification", definition: "How many times larger an image appears compared to the actual specimen." },
    { term: "Resolution", definition: "Ability to distinguish two close points as separate." },
    { term: "Tissue", definition: "Group of similar cells performing a shared function." },
    { term: "Organ", definition: "Structure of different tissues working together for a function." },
    { term: "Organ system", definition: "Group of organs cooperating for a major function." },
    { term: "Organism", definition: "Complete living individual made of organ systems." },
    { term: "Temporary mount", definition: "Wet preparation of a specimen on a slide for microscopy." },
  ],
  concepts: [
    {
      id: "cieb-u1-microscopy",
      title: "Light microscopy",
      skill: "Describe microscope parts, specimen preparation, and calculate magnification and actual size.",
      lesson: {
        sections: [
          {
            heading: "Using a light microscope",
            body: "- Place slide on stage, secure with clips.\n- Start on LOW power, centre specimen, then switch to HIGH power (never on low — risk of crashing lens).\n- Adjust focus with fine focus only on high power.",
          },
          {
            heading: "Magnification calculations",
            body: "```\nMagnification = image size / actual size\nActual size = image size / magnification\nImage size = actual size × magnification\n```\n\nKeep units consistent (usually mm or μm).",
          },
          {
            heading: "Resolution vs magnification",
            body: "Magnification makes image bigger; **resolution** determines how much detail is visible. Electron microscopes have higher resolution than light microscopes.",
          },
        ],
        keyFormulas: [
          { name: "Magnification", statement: "$M = \\dfrac{\\text{image size}}{\\text{actual size}}$" },
        ],
        workedExample: {
          problem: "An image of a cell is 30 mm across. The actual cell is 0.03 mm. What is the magnification?",
          solution: "M = 30 / 0.03 = ×1000.",
        },
      },
      questions: [
        {
          id: "cieb-u1-microscopy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is magnification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How much larger the image is than the actual specimen" },
              { id: "b", text: "The resolution of the microscope" },
              { id: "c", text: "The size of the specimen" },
              { id: "d", text: "The wavelength of light used" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnification", statement: "Image size / actual size." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{image/actual}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** How much larger the image is than the actual specimen",
            commonErrors: ["Confusing with resolution — magnification ≠ detail."],
          },
        },
        {
          id: "cieb-u1-microscopy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A specimen appears 24 mm long in a micrograph. Its actual length is 0.06 mm. Calculate the magnification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnification formula", statement: "M = image size / actual size." },
            ],
            steps: [
              { reasoning: "Apply formula.", working: "M = \\frac{24}{0.06}", marks: 1, markCode: "M" },
              { reasoning: "Compute answer.", working: "M = 400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnification = 400×.",
            commonErrors: ["Inverting the ratio — image/actual, not actual/image."],
          },
        },
        {
          id: "cieb-u1-microscopy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student measures a nucleus as 4 mm on a micrograph taken at ×400 magnification. What is the actual size of the nucleus?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Actual size", statement: "Actual size = image size / magnification." },
            ],
            steps: [
              { reasoning: "Rearrange formula.", working: "\\text{actual} = \\text{image}/M", marks: 1, markCode: "M" },
              { reasoning: "Substitute values.", working: "4 \\text{ mm} / 400", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "0.01 \\text{ mm} = 10 \\mu\\text{m}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Actual size = 0.01 mm = 10 μm.",
            commonErrors: ["Multiplying instead of dividing — actual size is always smaller than image."],
          },
        },
        {
          id: "cieb-u1-microscopy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is asked to prepare and observe an onion epidermis slide.",
          parts: [
            { label: "a", prompt: "Describe how to prepare a temporary mount.", marks: 3 },
            { label: "b", prompt: "Explain why low power is used first.", marks: 2 },
            { label: "c", prompt: "State one safety precaution when using a microscope.", marks: 2 },
            { label: "d", prompt: "State the difference between magnification and resolution.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Microscopy", statement: "Mount → low power → centre → high power; resolution = detail." },
            ],
            steps: [
              { part: "a", reasoning: "Place specimen + water on slide.", working: "\\text{specimen + water}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lower coverslip avoiding bubbles.", working: "\\text{coverslip}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Stain if needed; mount on stage.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Low power gives wider field to locate specimen.", working: "\\text{wide field}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Safer to focus before high power.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Carry microscope with both hands / don't touch lenses.", working: "\\text{safety}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State a valid precaution.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Magnification = size increase.", working: "\\text{size}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Resolution = ability to distinguish detail.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mount+water+coverslip (b) wide field/safety (c) carry with both hands (d) magnification=size, resolution=detail",
            commonErrors: ["In (a) forgetting the coverslip or water."],
          },
        },
      ],
    },
    {
      id: "cieb-u1-levels-organisation",
      title: "Levels of organisation",
      skill: "Describe the hierarchy from cell to organism and give examples.",
      lesson: {
        sections: [
          {
            heading: "Hierarchy",
            body: "**Cell → tissue → organ → organ system → organism**\n\nEach level shows increasing complexity and specialization.",
          },
          {
            heading: "Examples",
            body: "- **Cell**: muscle cell\n- **Tissue**: muscle tissue (many muscle cells)\n- **Organ**: heart (muscle + nerve + blood tissue)\n- **System**: circulatory system (heart + vessels + blood)\n- **Organism**: human",
          },
          {
            heading: "Why organisation matters",
            body: "Specialisation at each level allows efficient function — cells can't do everything, so they group into tissues with shared roles.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Place in order: organ system, cell, tissue, organism, organ.",
          solution: "Cell → tissue → organ → organ system → organism.",
        },
      },
      questions: [
        {
          id: "cieb-u1-levels-organisation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of levels of organisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell → tissue → organ → organ system → organism" },
              { id: "b", text: "Cell → organ → tissue → organism → organ system" },
              { id: "c", text: "Tissue → cell → organ → organism → organ system" },
              { id: "d", text: "Organism → organ → tissue → cell → organ system" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels", statement: "Cell → tissue → organ → system → organism." },
            ],
            steps: [
              { reasoning: "Recall the sequence.", working: "\\text{cell} \\to \\text{tissue} \\to \\text{organ} \\to \\text{system} \\to \\text{organism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cell → tissue → organ → organ system → organism",
            commonErrors: ["Putting organ before tissue — tissue comes first."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'tissue'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tissue", statement: "Group of similar cells with shared function." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{similar cells}", marks: 1, markCode: "M" },
              { reasoning: "Complete: shared function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A group of similar cells that work together to perform a shared function.",
            commonErrors: ["Saying 'one cell' — tissue has MANY cells."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give an example of each level of organisation using the heart.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels example", statement: "Cell→tissue→organ→system→organism with heart." },
            ],
            steps: [
              { reasoning: "Cell: cardiac muscle cell.", working: "\\text{muscle cell}", marks: 1, markCode: "M" },
              { reasoning: "Tissue/organ: muscle tissue → heart.", working: "\\text{tissue/heart}", marks: 1, markCode: "M" },
              { reasoning: "System: circulatory system.", working: "\\text{circulatory}", marks: 1, markCode: "M" },
              { reasoning: "Organism: human.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cardiac muscle cell → muscle tissue → heart → circulatory system → human.",
            commonErrors: ["Mixing up tissue and organ levels."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain why multicellular organisms need levels of organisation.",
          parts: [
            { label: "a", prompt: "State the five levels of organisation.", marks: 2 },
            { label: "b", prompt: "Explain what a tissue is and give an example.", marks: 3 },
            { label: "c", prompt: "Explain the advantage of specialisation at each level.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Organisation", statement: "Specialisation increases efficiency at each level." },
            ],
            steps: [
              { part: "a", reasoning: "List levels.", working: "\\text{cell-tissue-organ-system-organism}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete list.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tissue = similar cells, shared function.", working: "\\text{similar cells}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: muscle/epithelial tissue.", working: "\\text{example}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete definition.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cells can't do all functions alone.", working: "\\text{can't do all}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Grouping allows specialisation.", working: "\\text{specialisation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Efficiency increases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 levels (b) similar cells shared function (c) specialisation → efficiency",
            commonErrors: ["In (c) saying 'to make organism bigger' — it's about efficiency/specialisation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u1-microscopy-notes",
      title: "Microscopy and organisation — revision notes",
      summary: "Microscope use, magnification calculations, levels of organisation.",
      sections: [
        {
          heading: "Microscopy",
          body: "M = image/actual. Low power first, then high power. Resolution = detail (better in EM than LM).",
        },
        {
          heading: "Organisation",
          body: "Cell → tissue → organ → organ system → organism. Each level = increasing specialisation and complexity.",
        },
        {
          heading: "Exam technique",
          body: "- Magnification: image size ÷ actual size — always check units match.\n- Levels: never skip a level in ordering questions.",
        },
      ],
    },
  ],
};
