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
              { id: "b", text: "The size of the specimen" },
              { id: "c", text: "The wavelength of light used" },
              { id: "d", text: "The resolution of the microscope" },
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
        {
          id: "cieb-u1-microscopy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the microscope do you turn to bring the image into focus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mirror only" },
              { id: "b", text: "Stage clip" },
              { id: "c", text: "Base" },
              { id: "d", text: "Focus knob" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Microscope parts", statement: "Focus knobs adjust the distance between objective and specimen." },
            ],
            steps: [
              { reasoning: "Recall the focusing part.", working: "\\text{focus knob}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Focus knob",
            commonErrors: ["Choosing the mirror — it directs light, it does not focus."],
          },
        },
        {
          id: "cieb-u1-microscopy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before switching to high power, you should first:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remove the coverslip" },
              { id: "b", text: "Close the iris diaphragm completely" },
              { id: "c", text: "Centre the specimen and focus on low power" },
              { id: "d", text: "Use the coarse focus on high power" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Microscope use", statement: "Always locate and focus on low power before switching to high power." },
            ],
            steps: [
              { reasoning: "Recall the correct sequence.", working: "\\text{centre + low power first}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Centre the specimen and focus on low power",
            commonErrors: ["Choosing (c) — coarse focus must never be used on high power."],
          },
        },
        {
          id: "cieb-u1-microscopy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Resolution is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total magnification of the eyepiece" },
              { id: "b", text: "How much bigger the image is than the specimen" },
              { id: "c", text: "The ability to distinguish two close points as separate" },
              { id: "d", text: "The brightness of the image" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resolution", statement: "Ability to distinguish two close points as separate." },
            ],
            steps: [
              { reasoning: "Recall the definition of resolution.", working: "\\text{distinguish close points}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The ability to distinguish two close points as separate",
            commonErrors: ["Confusing resolution with magnification."],
          },
        },
        {
          id: "cieb-u1-microscopy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of microscope has the highest resolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hand lens" },
              { id: "b", text: "Electron microscope" },
              { id: "c", text: "Magnifying glass" },
              { id: "d", text: "Light microscope" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Resolution", statement: "Electron microscopes have much higher resolution than light microscopes." },
            ],
            steps: [
              { reasoning: "Compare the resolution of microscope types.", working: "\\text{electron microscope}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Electron microscope",
            commonErrors: ["Choosing light microscope — electron microscopes resolve finer detail."],
          },
        },
        {
          id: "cieb-u1-microscopy-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An image of a cell is 45 mm across. The actual cell is 0.05 mm wide. Calculate the magnification.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 900, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnification", statement: "M = image size / actual size." },
            ],
            steps: [
              { reasoning: "Apply the magnification formula.", working: "M = \\frac{45}{0.05}", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 900", marks: 1, markCode: "A" },
            ],
            finalAnswer: "×900",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "cieb-u1-microscopy-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A specimen has an actual size of 0.02 mm and is viewed at ×500 magnification. Calculate the image size.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Image size", statement: "Image size = actual size × magnification." },
            ],
            steps: [
              { reasoning: "Multiply actual size by magnification.", working: "0.02 \\times 500", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "= 10 \\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 mm",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "cieb-u1-microscopy-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cell nucleus measures 32 mm on a micrograph taken at ×1600. Calculate the actual size of the nucleus in micrometres (μm).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "μm" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Actual size", statement: "Actual size = image size / magnification; 1 mm = 1000 μm." },
            ],
            steps: [
              { reasoning: "Divide image by magnification, then convert mm to μm.", working: "\\frac{32}{1600} = 0.02 \\text{ mm} = 20 \\mu\\text{m}", marks: 1, markCode: "M" },
              { reasoning: "State the answer in μm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 μm",
            commonErrors: ["Giving 0.02 mm without converting to μm."],
          },
        },
        {
          id: "cieb-u1-microscopy-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two reasons for adding a stain when preparing a microscope slide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Staining", statement: "Stains make cell structures visible by colouring parts of the cell." },
            ],
            steps: [
              { reasoning: "Stain colours structures so they contrast with the background.", working: "\\text{contrast}", marks: 1, markCode: "M" },
              { reasoning: "It helps distinguish different cell structures.", working: "\\text{distinguish structures}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "To make cell structures visible/coloured and to distinguish different parts of the cell.",
            commonErrors: ["Saying the stain kills the cells — it is for visibility, not killing."],
          },
        },
        {
          id: "cieb-u1-microscopy-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why you should never switch a microscope straight from low power to high power without first focusing on low power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Microscope safety", statement: "High-power objectives have a very short working distance." },
            ],
            steps: [
              { reasoning: "On high power the lens is very close to the slide.", working: "\\text{short working distance}", marks: 1, markCode: "M" },
              { reasoning: "Using coarse focus could crash the lens into the slide.", working: "\\text{lens damage}", marks: 1, markCode: "M" },
              { reasoning: "Focusing on low power first centres the specimen safely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The high-power lens sits very close to the slide; if the specimen is not centred and focused on low power first, adjusting focus could drive the lens into the slide and damage both.",
            commonErrors: ["Saying it is just a 'rule' without explaining the crash risk."],
          },
        },
        {
          id: "cieb-u1-microscopy-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "To calculate the actual size of a specimen, you use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Image size ÷ magnification" },
              { id: "b", text: "Actual size × magnification" },
              { id: "c", text: "Image size × magnification" },
              { id: "d", text: "Magnification ÷ image size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Actual size", statement: "Actual size = image size / magnification." },
            ],
            steps: [
              { reasoning: "Recall the rearranged formula.", working: "\\text{image}/M", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Image size ÷ magnification",
            commonErrors: ["Choosing (b) — that gives image size, not actual size."],
          },
        },
        {
          id: "cieb-u1-microscopy-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An onion epidermal cell is 0.05 mm wide and is viewed under a light microscope.",
          parts: [
            { label: "a", prompt: "Calculate the image size at ×100 magnification.", marks: 2 },
            { label: "b", prompt: "Calculate the image size at ×400 magnification.", marks: 2 },
            { label: "c", prompt: "Explain why the field of view appears smaller at ×400 than at ×100.", marks: 2 },
            { label: "d", prompt: "Describe the correct procedure when changing from the ×100 to the ×400 objective lens.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnification", statement: "Image size = actual size × magnification." },
              { kind: "technique", name: "High power use", statement: "Switch objective, then focus with fine focus only and adjust the light." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply actual size by magnification.", working: "0.05 \\times 100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the image size.", working: "= 5 \\text{ mm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply actual size by magnification.", working: "0.05 \\times 400", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the image size.", working: "= 20 \\text{ mm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher magnification means a smaller area of the specimen is visible.", working: "\\text{smaller field}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: the field of view appears smaller/more magnified.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Rotate the nosepiece to the ×400 objective.", working: "\\text{rotate nosepiece}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Focus using the fine focus knob only.", working: "\\text{fine focus only}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Adjust the light/iris for brightness if needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 mm (b) 20 mm (c) higher magnification shows a smaller area (d) rotate nosepiece, fine focus only, adjust light",
            commonErrors: ["In (d) using the coarse focus on high power."],
          },
        },
        {
          id: "cieb-u1-microscopy-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is placed on the stage of the microscope for observation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The slide containing the specimen" },
              { id: "b", text: "The focusing knob" },
              { id: "c", text: "The mirror" },
              { id: "d", text: "The eyepiece lens" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Microscope stage", statement: "The slide with the specimen is secured on the stage under the objective." },
            ],
            steps: [
              { reasoning: "Recall what sits on the stage.", working: "\\text{slide}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The slide containing the specimen",
            commonErrors: ["Choosing the eyepiece — it is at the top, not the stage."],
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
              { id: "a", text: "Organism → organ → tissue → cell → organ system" },
              { id: "b", text: "Cell → organ → tissue → organism → organ system" },
              { id: "c", text: "Tissue → cell → organ → organism → organ system" },
              { id: "d", text: "Cell → tissue → organ → organ system → organism" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cieb-u1-levels-organisation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which level of organisation is the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell" },
              { id: "b", text: "Tissue" },
              { id: "c", text: "Organ" },
              { id: "d", text: "Organ system" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels", statement: "An organ is made of different tissues working together — the heart is an organ." },
            ],
            steps: [
              { reasoning: "Recall which level the heart represents.", working: "\\text{organ}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Organ",
            commonErrors: ["Choosing tissue — the heart contains several different tissues."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tissue is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different tissues working together" },
              { id: "b", text: "A single specialised cell" },
              { id: "c", text: "A group of organs" },
              { id: "d", text: "Many similar cells performing a shared function" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tissue", statement: "Group of similar cells with a shared function." },
            ],
            steps: [
              { reasoning: "Recall the definition of a tissue.", working: "\\text{similar cells, shared function}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Many similar cells performing a shared function",
            commonErrors: ["Choosing (b) — that describes an organ."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An organ system is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The whole organism" },
              { id: "b", text: "A group of organs working together for a major function" },
              { id: "c", text: "A collection of tissues with no shared function" },
              { id: "d", text: "A group of similar cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organ system", statement: "Group of organs cooperating for a major function." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{organs cooperating}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A group of organs working together for a major function",
            commonErrors: ["Choosing (d) — the whole organism includes all systems, not just organs."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'organ system'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organ system", statement: "Group of organs cooperating for a major function." },
            ],
            steps: [
              { reasoning: "Identify the components.", working: "\\text{group of organs}", marks: 1, markCode: "M" },
              { reasoning: "State the shared purpose.", working: "\\text{major function}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A group of organs that work together to carry out a major function of the organism.",
            commonErrors: ["Defining it as a single organ — a system contains several organs."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many levels of organisation are there from cell to organism, counting both ends?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "levels" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels", statement: "Cell → tissue → organ → organ system → organism." },
            ],
            steps: [
              { reasoning: "Count the levels in the hierarchy.", working: "5 \\text{ levels}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "5 levels",
            commonErrors: ["Counting only 4 — forgetting the organism level at the top."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims 'the heart is a tissue because it is made of muscle'. Explain why this is incorrect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Organ vs tissue", statement: "Tissue = similar cells, one function; organ = different tissues working together." },
            ],
            steps: [
              { reasoning: "Point out the heart contains several different tissues.", working: "\\text{muscle + nerve + blood tissue}", marks: 1, markCode: "M" },
              { reasoning: "State what a tissue actually is.", working: "\\text{similar cells, shared function}", marks: 1, markCode: "M" },
              { reasoning: "Define an organ correctly.", working: "\\text{different tissues cooperating}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the heart is an organ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The heart contains several different tissues (muscle, nerve, blood) working together, so it is an organ — a tissue is made of similar cells performing one shared function.",
            commonErrors: ["Agreeing that muscle = tissue but not explaining the multi-tissue nature of the heart."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the most complex level of organisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organ" },
              { id: "b", text: "Cell" },
              { id: "c", text: "Organism" },
              { id: "d", text: "Tissue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels", statement: "Complexity increases from cell to organism." },
            ],
            steps: [
              { reasoning: "Identify the top of the hierarchy.", working: "\\text{organism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Organism",
            commonErrors: ["Choosing organ — systems and the whole organism are more complex."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Of the following structures — heart, muscle cell, leaf, epithelial tissue, stomach — how many are organs?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "organs" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Organs", statement: "Organs = different tissues working together: heart, leaf, stomach." },
            ],
            steps: [
              { reasoning: "Identify the organs in the list.", working: "\\text{heart, leaf, stomach} = 3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "3 organs",
            commonErrors: ["Counting the muscle cell or epithelial tissue as organs — they are lower levels."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how levels of organisation allow a multicellular organism to carry out complex functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Organisation", statement: "Specialisation increases from cell to organism." },
            ],
            steps: [
              { reasoning: "Cells become specialised for particular jobs.", working: "\\text{cell specialisation}", marks: 1, markCode: "M" },
              { reasoning: "Similar cells group into tissues with shared functions.", working: "\\text{cells} \\to \\text{tissues}", marks: 1, markCode: "M" },
              { reasoning: "Different tissues combine into organs, then organs into systems.", working: "\\text{tissues} \\to \\text{organs} \\to \\text{systems}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: coordinated whole organism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cells specialise, group into tissues, tissues form organs, organs form systems — so the whole organism can carry out complex functions through coordinated specialisation.",
            commonErrors: ["Listing the levels without explaining how specialisation enables function."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sequence shows levels of organisation in order of increasing complexity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tissue → organ → cell → organ system → organism" },
              { id: "b", text: "Organ system → organ → tissue → organism → cell" },
              { id: "c", text: "Organ → tissue → cell → organism → organ system" },
              { id: "d", text: "Cell → tissue → organ → organ system → organism" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels", statement: "Complexity increases: cell < tissue < organ < system < organism." },
            ],
            steps: [
              { reasoning: "Check each sequence against the hierarchy.", working: "\\text{cell} \\to \\text{tissue} \\to \\text{organ} \\to \\text{system} \\to \\text{organism}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cell → tissue → organ → organ system → organism",
            commonErrors: ["Choosing (b) or (c) — they place organ before tissue or cell out of order."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Give an example of each level of organisation using the human eye.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels example", statement: "Cell→tissue→organ→system→organism with the eye." },
            ],
            steps: [
              { reasoning: "Cell: e.g. rod cell in the retina.", working: "\\text{rod cell}", marks: 1, markCode: "M" },
              { reasoning: "Tissue: nervous/retinal tissue.", working: "\\text{retina tissue}", marks: 1, markCode: "M" },
              { reasoning: "Organ: the eye.", working: "\\text{eye}", marks: 1, markCode: "M" },
              { reasoning: "System: nervous system (or sense organs).", working: "\\text{nervous system}", marks: 1, markCode: "M" },
              { reasoning: "Organism: human.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rod cell → retinal/nervous tissue → eye → nervous system → human.",
            commonErrors: ["Skipping a level — e.g. going straight from tissue to organism."],
          },
        },
        {
          id: "cieb-u1-levels-organisation-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many levels of organisation lie above the cell level (from tissue up to and including organism)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "levels" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Levels", statement: "Above cell: tissue, organ, organ system, organism." },
            ],
            steps: [
              { reasoning: "Count levels above the cell.", working: "\\text{tissue, organ, system, organism} = 4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "4 levels",
            commonErrors: ["Answering 5 — that counts the cell level itself."],
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
