import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olbio-u1-lesson-1-3",
  code: "1-3",
  title: "Microscopy and Levels of Organisation",
  goal: "I CAN use a light microscope, calculate magnification, and describe levels of organisation from cell to organism.",
  standards: ["5090 1.1"],
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
      id: "olbio-u1-microscopy",
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
          id: "olbio-u1-microscopy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is magnification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The wavelength of light used" },
              { id: "b", text: "The size of the specimen" },
              { id: "c", text: "The resolution of the microscope" },
              { id: "d", text: "How much larger the image is than the actual specimen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnification", statement: "Image size / actual size." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{image/actual}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** How much larger the image is than the actual specimen",
            commonErrors: ["Confusing with resolution — magnification ≠ detail."],
          },
        },
        {
          id: "olbio-u1-microscopy-q2",
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
          id: "olbio-u1-microscopy-q3",
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
          id: "olbio-u1-microscopy-q4",
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
        {
          id: "olbio-u1-microscopy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Resolution is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ability to distinguish two close points as separate" },
              { id: "b", text: "The size of the specimen" },
              { id: "c", text: "How much larger the image appears" },
              { id: "d", text: "The power of the eyepiece" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resolution", statement: "Ability to distinguish two close points as separate." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{distinguish close points}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The ability to distinguish two close points as separate",
            commonErrors: ["Confusing resolution with magnification."],
          },
        },
        {
          id: "olbio-u1-microscopy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "To calculate the actual size of a specimen, you use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Image size $\\div$ magnification" },
              { id: "b", text: "Image size $+$ magnification" },
              { id: "c", text: "Image size $\\times$ magnification" },
              { id: "d", text: "Magnification $\\div$ image size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "Actual size = image size / magnification." },
            ],
            steps: [
              { reasoning: "Rearrange the magnification formula.", working: "\\text{actual} = \\text{image}/M", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Image size $\\div$ magnification",
            commonErrors: ["Multiplying — actual size is always smaller than image size."],
          },
        },
        {
          id: "olbio-u1-microscopy-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should a student always focus on low power before switching to high power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low power shows more detail" },
              { id: "b", text: "It saves electricity" },
              { id: "c", text: "High power lenses are too weak to focus" },
              { id: "d", text: "Low power gives a wider field of view so the specimen can be located and centred safely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Microscope use", statement: "Low power first: wider field of view, safer focusing before high power." },
            ],
            steps: [
              { reasoning: "Identify the practical reason.", working: "\\text{wide field of view}", marks: 1, markCode: "M" },
              { reasoning: "State that it is also safer to focus before high power.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Low power gives a wider field of view so the specimen can be located and centred safely",
            commonErrors: ["Saying low power gives more detail — it gives a wider field, not more resolution."],
          },
        },
        {
          id: "olbio-u1-microscopy-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a micrograph a pollen grain measures 15 mm and its actual size is 0.05 mm. Calculate the magnification.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 300, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "M = image size / actual size." },
            ],
            steps: [
              { reasoning: "Divide image size by actual size.", working: "\\frac{15}{0.05}", marks: 1, markCode: "M" },
              { reasoning: "Compute the magnification.", working: "M = 300\\times", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300×",
            commonErrors: ["Inverting the ratio — magnification is always greater than 1 for a micrograph."],
          },
        },
        {
          id: "olbio-u1-microscopy-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two micrographs are compared: image X shows a cell 40 mm long whose actual length is 0.1 mm, and image Y shows a cell 25 mm long whose actual length is 0.05 mm. Calculate the magnification of each micrograph.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 400, unit: "×" },
              { label: "b", answer: 500, unit: "×" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "M = image size / actual size." },
            ],
            steps: [
              { reasoning: "Image X: 40 / 0.1.", working: "M = \\frac{40}{0.1} = 400", marks: 1, markCode: "M" },
              { reasoning: "Image Y: 25 / 0.05.", working: "M = \\frac{25}{0.05} = 500", marks: 1, markCode: "M" },
              { reasoning: "State both magnifications with × symbol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 400×; (b) 500×",
            commonErrors: ["Mixing up the two images' values."],
          },
        },
        {
          id: "olbio-u1-microscopy-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A nucleus measures 8 mm on a micrograph taken at ×200 magnification. Calculate the actual size of the nucleus in micrometres ($\\mu$m).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "μm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "Actual size = image size / magnification; 1 mm = 1000 μm." },
            ],
            steps: [
              { reasoning: "Divide image size by magnification.", working: "\\frac{8}{200} = 0.04 \\text{ mm}", marks: 1, markCode: "M" },
              { reasoning: "Convert millimetres to micrometres.", working: "0.04 \\times 1000 = 40 \\mu\\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 μm",
            commonErrors: ["Forgetting to convert mm to μm — 0.04 mm is not the final answer in μm."],
          },
        },
        {
          id: "olbio-u1-microscopy-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which instrument provides the highest resolution for viewing cell structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electron microscope" },
              { id: "b", text: "Light microscope" },
              { id: "c", text: "Telescope" },
              { id: "d", text: "Hand lens" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Microscope resolution", statement: "Electron microscopes have much higher resolution than light microscopes." },
            ],
            steps: [
              { reasoning: "Recall the comparison.", working: "\\text{EM} > \\text{LM}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Electron microscope",
            commonErrors: ["Choosing light microscope — it magnifies but cannot resolve fine detail like EM."],
          },
        },
        {
          id: "olbio-u1-microscopy-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how you would focus a specimen clearly when using the high-power objective lens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Focusing", statement: "Centre specimen on low power first; use fine focus only on high power." },
            ],
            steps: [
              { reasoning: "Centre the specimen using low power first.", working: "\\text{low power first}", marks: 1, markCode: "M" },
              { reasoning: "Use only the fine focus knob on high power.", working: "\\text{fine focus}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Centre and roughly focus the specimen on low power, switch to high power, then use only the fine focus knob for sharp focus.",
            commonErrors: ["Using the coarse focus on high power — it can crash the lens into the slide."],
          },
        },
        {
          id: "olbio-u1-microscopy-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between magnification and resolution, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Magnification vs resolution", statement: "Magnification = size increase; resolution = detail distinguishable." },
            ],
            steps: [
              { reasoning: "Define magnification as image size / actual size.", working: "\\text{size increase}", marks: 1, markCode: "M" },
              { reasoning: "Define resolution as the ability to distinguish close points.", working: "\\text{detail}", marks: 1, markCode: "M" },
              { reasoning: "Example: enlarging a photo does not reveal more detail (like low-resolution image).", working: "\\text{example}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: a highly magnified image can still be blurry if resolution is low.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnification is how many times larger the image is than the specimen; resolution is how much fine detail can be distinguished. A very large image can still lack detail if resolution is poor.",
            commonErrors: ["Saying higher magnification automatically means higher resolution."],
          },
        },
        {
          id: "olbio-u1-microscopy-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cell measures 20 mm in a micrograph taken at ×500 magnification. What is its actual size?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.4 mm" },
              { id: "b", text: "10 000 mm" },
              { id: "c", text: "0.04 mm" },
              { id: "d", text: "4 mm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "Actual size = image size / magnification." },
            ],
            steps: [
              { reasoning: "Divide 20 by 500.", working: "\\frac{20}{500} = 0.04 \\text{ mm}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 0.04 mm",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olbio-u1-microscopy-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student measures a chloroplast as 6 mm long on a micrograph. The actual chloroplast is 0.02 mm long.",
          parts: [
            { label: "a", prompt: "Calculate the magnification of the micrograph.", marks: 2 },
            { label: "b", prompt: "A nucleus in the same micrograph measures 2.4 mm. Calculate its actual size.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification formulas", statement: "M = image/actual; actual = image/M." },
            ],
            steps: [
              { part: "a", reasoning: "Magnification = 6 / 0.02.", working: "M = \\frac{6}{0.02}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute M = 300×.", working: "M = 300\\times", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Actual size = 2.4 / 300.", working: "\\text{actual} = \\frac{2.4}{300}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute 0.008 mm.", working: "0.008 \\text{ mm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State answer with units (or 8 μm).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 300× (b) 0.008 mm (= 8 μm)",
            commonErrors: ["In (b) multiplying by the magnification instead of dividing."],
          },
        },
        {
          id: "olbio-u1-microscopy-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is asked to prepare and observe a specimen of human cheek cells under a light microscope.",
          parts: [
            { label: "a", prompt: "Describe how to prepare a temporary mount of cheek cells.", marks: 3 },
            { label: "b", prompt: "Explain the correct order of using the objective lenses.", marks: 2 },
            { label: "c", prompt: "State two pieces of equipment needed besides the microscope and slide.", marks: 2 },
            { label: "d", prompt: "Explain why a stain such as methylene blue might be used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Temporary mount", statement: "Specimen + water/methylene blue on slide + coverslip; low power first." },
            ],
            steps: [
              { part: "a", reasoning: "Smear cells on slide with a drop of water or stain.", working: "\\text{smear + drop}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lower a coverslip to avoid air bubbles.", working: "\\text{coverslip}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Place on stage and clip in position.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Start on low power to locate specimen.", working: "\\text{low first}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Then switch to high power and fine focus.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Coverslip and dropper (or stain)", working: "\\text{coverslip/dropper}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State two items.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Stain makes transparent structures visible.", working: "\\text{contrast}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Methylene blue stains nucleus/cytoplasm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) smear cells, add water/stain, lower coverslip, mount on stage (b) low power first then high (c) coverslip, dropper/stain (d) stain adds contrast so cells are visible",
            commonErrors: ["In (a) dropping the coverslip from a height — lowers it at an angle to avoid bubbles."],
          },
        },
      ],
    },
    {
      id: "olbio-u1-levels-organisation",
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
          id: "olbio-u1-levels-organisation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of levels of organisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell → tissue → organ → organ system → organism" },
              { id: "b", text: "Organism → organ → tissue → cell → organ system" },
              { id: "c", text: "Cell → organ → tissue → organism → organ system" },
              { id: "d", text: "Tissue → cell → organ → organism → organ system" },
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
          id: "olbio-u1-levels-organisation-q2",
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
          id: "olbio-u1-levels-organisation-q3",
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
          id: "olbio-u1-levels-organisation-q4",
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
        {
          id: "olbio-u1-levels-organisation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A group of similar cells that perform a shared function is called a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tissue" },
              { id: "b", text: "Organ system" },
              { id: "c", text: "Organ" },
              { id: "d", text: "Organism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tissue", statement: "Group of similar cells with a shared function." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{similar cells}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Tissue",
            commonErrors: ["Choosing organ — an organ is made of several tissues."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The heart is an example of which level of organisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell" },
              { id: "b", text: "Organ" },
              { id: "c", text: "Tissue" },
              { id: "d", text: "Organ system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Organ", statement: "Structure of different tissues working together — e.g. heart." },
            ],
            steps: [
              { reasoning: "The heart contains muscle, nerve and blood tissues.", working: "\\text{multiple tissues}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Organ",
            commonErrors: ["Choosing organ system — the heart alone is an organ, not a system."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which level of organisation comes immediately after 'organ' in the hierarchy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell" },
              { id: "b", text: "Organism" },
              { id: "c", text: "Tissue" },
              { id: "d", text: "Organ system" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels order", statement: "Cell → tissue → organ → organ system → organism." },
            ],
            steps: [
              { reasoning: "Recall the sequence after organ.", working: "\\text{organ} \\to \\text{system}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct level.", working: "\\text{organ system}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Organ system",
            commonErrors: ["Choosing organism — the system level sits between organ and organism."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many levels of organisation exist in a multicellular organism from cell to organism?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "levels" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels count", statement: "Cell, tissue, organ, organ system, organism = 5 levels." },
            ],
            steps: [
              { reasoning: "Count the levels in the hierarchy.", working: "1+1+1+1+1 = 5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5 levels",
            commonErrors: ["Counting only three — forgetting organ system or organism."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using the hierarchy cell → tissue → organ → organ system → organism, number the levels: what position is 'organ' and what position is 'organism'?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "position" },
              { label: "b", answer: 5, unit: "position" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels order", statement: "Positions: cell 1, tissue 2, organ 3, organ system 4, organism 5." },
            ],
            steps: [
              { reasoning: "Count position of organ.", working: "\\text{cell}=1, \\text{tissue}=2, \\text{organ}=3", marks: 1, markCode: "M" },
              { reasoning: "Count position of organism.", working: "\\text{organism}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3; (b) 5",
            commonErrors: ["Counting from the top down instead of from the cell up."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A hypothetical organism has 3 organ systems. Each organ system contains 4 organs, and each organ contains 2 tissues. Each tissue contains 50 cells. Calculate the total number of cells in the organism.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1200, unit: "cells" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total cells", statement: "Total = systems x organs x tissues x cells per tissue." },
            ],
            steps: [
              { reasoning: "Multiply all levels together.", working: "3 \\times 4 \\times 2 \\times 50", marks: 1, markCode: "M" },
              { reasoning: "Compute step by step.", working: "12 \\times 2 = 24; \\ 24 \\times 50 = 1200", marks: 1, markCode: "M" },
              { reasoning: "State the total.", working: "1200 \\text{ cells}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1200 cells",
            commonErrors: ["Multiplying only some levels — all four factors are needed."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of an organ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heart" },
              { id: "b", text: "Circulatory system" },
              { id: "c", text: "Muscle cell" },
              { id: "d", text: "Muscle tissue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Organ example", statement: "An organ is made of several tissues — the heart contains muscle, nerve and blood tissue." },
            ],
            steps: [
              { reasoning: "Match structure to level.", working: "\\text{heart = organ}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Heart",
            commonErrors: ["Choosing muscle tissue — a tissue is one level lower."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define an 'organ'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organ", statement: "Structure made of different tissues working together to perform a function." },
            ],
            steps: [
              { reasoning: "Give the key idea: different tissues together.", working: "\\text{different tissues}", marks: 1, markCode: "M" },
              { reasoning: "Complete the definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A structure made of different tissues that work together to perform a specific function.",
            commonErrors: ["Saying 'one type of cell' — an organ has several tissue types."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give an example of each level of organisation using the digestive system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels example", statement: "Cell → tissue → organ → system → organism, e.g. using digestive system." },
            ],
            steps: [
              { reasoning: "Cell: e.g. epithelial cell of intestine.", working: "\\text{epithelial cell}", marks: 1, markCode: "M" },
              { reasoning: "Tissue: e.g. muscle tissue in gut wall.", working: "\\text{muscle tissue}", marks: 1, markCode: "M" },
              { reasoning: "Organ/system: stomach or intestine → digestive system → human.", working: "\\text{stomach/system/human}", marks: 1, markCode: "M" },
              { reasoning: "State all five levels correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Epithelial cell → muscle/epithelial tissue → stomach (or intestine) → digestive system → human.",
            commonErrors: ["Skipping a level — every level must be represented."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why specialisation at each level of organisation increases efficiency in a multicellular organism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Specialisation", statement: "Cells grouped into tissues share functions; levels build complexity for efficient whole-organism function." },
            ],
            steps: [
              { reasoning: "A single cell cannot perform all functions needed.", working: "\\text{can't do all}", marks: 1, markCode: "M" },
              { reasoning: "Grouping similar cells into tissues allows shared specialised roles.", working: "\\text{shared roles}", marks: 1, markCode: "M" },
              { reasoning: "Organs and systems combine specialised units for complex tasks.", working: "\\text{combined function}", marks: 1, markCode: "M" },
              { reasoning: "Result: more efficient function of the whole organism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cells cannot perform every function alone, so grouping them into specialised tissues, organs and systems allows each level to perform its role efficiently, making the whole organism more effective.",
            commonErrors: ["Saying organisation is 'just to look bigger' — it is about functional efficiency."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the levels of organisation in a multicellular organism.",
          parts: [
            { label: "a", prompt: "List the five levels in order.", marks: 2 },
            { label: "b", prompt: "Define 'organ system' and give an example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Organ system", statement: "Group of organs cooperating for a major function, e.g. circulatory system." },
            ],
            steps: [
              { part: "a", reasoning: "List the five levels in order.", working: "\\text{cell-tissue-organ-system-organism}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Order is correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Organs working together for a major function.", working: "\\text{organs together}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example: circulatory system (heart + vessels + blood).", working: "\\text{circulatory}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cell → tissue → organ → organ system → organism (b) group of organs working together for a major function, e.g. circulatory system",
            commonErrors: ["In (b) giving an organ instead of a system."],
          },
        },
        {
          id: "olbio-u1-levels-organisation-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is asked to explain why humans need specialised tissues and organs.",
          parts: [
            { label: "a", prompt: "State the five levels of organisation in order.", marks: 2 },
            { label: "b", prompt: "Explain what a tissue is and give two examples.", marks: 3 },
            { label: "c", prompt: "Explain how the hierarchy allows complex functions such as digestion.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Organisation and function", statement: "Each level adds specialisation, allowing complex functions like digestion to occur." },
            ],
            steps: [
              { part: "a", reasoning: "List all five levels.", working: "\\text{5 levels}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tissue = group of similar cells, shared function.", working: "\\text{similar cells}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example 1: muscle tissue.", working: "\\text{muscle}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example 2: epithelial tissue.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cells alone cannot digest food.", working: "\\text{specialisation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Tissues form organs like stomach/intestine.", working: "\\text{organs}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Organs form the digestive system.", working: "\\text{system}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Result: efficient digestion of varied food.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 levels in order (b) similar cells shared function; muscle/epithelial (c) specialisation builds to systems → efficient complex functions",
            commonErrors: ["In (c) describing only one level — trace the whole hierarchy."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u1-microscopy-notes",
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
