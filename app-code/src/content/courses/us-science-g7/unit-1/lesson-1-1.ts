import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "s7-u1-lesson-1-1",
  code: "1-1",
  title: "Cells",
  goal: "I CAN explain the cell theory, describe the functions of plant and animal cell organelles, compare unicellular and multicellular organisms, and use a microscope and the magnification equation.",
  standards: ["MS-LS1-1", "MS-LS1-2", "SEP: Developing and Using Models", "SEP: Constructing Explanations"],
  vocabulary: [
    { term: "Cell theory", definition: "All living things are made of one or more cells, the cell is the basic unit of structure and function, and all cells come from existing cells." },
    { term: "Organelle", definition: "A structure inside a cell that carries out a specific job." },
    { term: "Chloroplast", definition: "An organelle containing chlorophyll in which photosynthesis takes place." },
    { term: "Mitochondrion", definition: "An organelle where cellular respiration releases usable energy from food molecules." },
    { term: "Unicellular", definition: "Made of a single cell that carries out all life functions." },
    { term: "Multicellular", definition: "Made of many cells, often specialized to do different jobs." },
    { term: "Magnification", definition: "How many times larger an image appears than the real object: image size divided by actual size." },
  ],
  concepts: [
    {
      id: "s7-u1-cell-organelles",
      title: "Cell theory and organelles",
      skill: "State the cell theory and describe the function of organelles in plant and animal cells.",
      lesson: {
        sections: [
          {
            heading: "The cell theory",
            body: "The **cell theory** was built from the work of many scientists using microscopes. It has three parts.\n\n- All living things are made of one or more cells.\n- The cell is the basic unit of structure and function in living things.\n- All cells come from other existing cells.",
          },
          {
            heading: "Organelles found in plant and animal cells",
            body: "Cells contain **organelles**, each with a job.\n\n- The **nucleus** holds the DNA and directs the cell's activities.\n- The **cell membrane** controls what enters and leaves the cell.\n- The **cytoplasm** is the gel-like fluid where many reactions happen.\n- **Mitochondria** release usable energy from food through cellular respiration.\n- **Ribosomes** build proteins.\n\nCells that need a lot of energy, such as muscle cells, contain many mitochondria.",
          },
          {
            heading: "Extra organelles in plant cells",
            body: "Plant cells also have a rigid **cell wall** that supports the cell, **chloroplasts** that carry out photosynthesis, and a large central **vacuole** that stores water and helps keep the cell firm. Animal cells do not have these three structures.",
          },
        ],
        keyFormulas: [
          { name: "Cell theory", statement: "All living things are made of cells; the cell is the basic unit of life; cells come from existing cells" },
          { name: "Plant cell only", statement: "Cell wall, chloroplasts and a large central vacuole" },
          { name: "Energy organelles", statement: "Chloroplasts capture light energy; mitochondria release energy from food" },
        ],
        workedExample: {
          problem: "A cell has a nucleus, a cell membrane, a cell wall and a large central vacuole but no chloroplasts. Is it a plant or animal cell, and where might it come from?",
          solution: "A cell wall and a large central vacuole are found only in plant cells, so this is a plant cell. It has no chloroplasts, so it does not photosynthesize. It probably comes from a part of the plant that gets no light, such as a root.",
        },
      },
      questions: [
        {
          id: "s7-u1-cell-organelles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement is part of the cell theory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cells can form from nonliving material." },
              { id: "b", text: "All living things are made of one or more cells." },
              { id: "c", text: "Only animals are made of cells." },
              { id: "d", text: "Organelles are the smallest living units." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell theory", statement: "All living things are made of one or more cells; the cell is the basic unit of life; all cells come from existing cells." },
            ],
            steps: [
              { reasoning: "The first part of the cell theory says all living things are made of one or more cells.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** All living things are made of one or more cells.",
            commonErrors: ["Choosing (a): the cell theory says cells come from existing cells.", "Choosing (d): the cell, not the organelle, is the basic unit of life."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u1-cell-organelles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the function of each organelle.\n\n(i) Mitochondrion\n\n(ii) Cell membrane",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organelle functions", statement: "Mitochondria release energy from food in cellular respiration; the cell membrane controls what enters and leaves the cell." },
            ],
            steps: [
              { reasoning: "Mitochondria release usable energy from food (glucose) by cellular respiration.", marks: 1, markCode: "B" },
              { reasoning: "The cell membrane controls which substances move into and out of the cell.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(i) Releases energy from food by cellular respiration (ii) Controls what enters and leaves the cell.",
            commonErrors: ["Saying mitochondria 'make' energy; energy is transferred from food molecules, not created.", "Confusing the cell membrane with the cell wall, which only plant cells have."],
            examinerNote: "B1 each. Allow 'powerhouse' only if linked to energy release from food. Allow 'regulates what passes through' for the membrane.",
          },
        },
        {
          id: "s7-u1-cell-organelles-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A leaf cell contains both chloroplasts and mitochondria.\n\nExplain why the cell needs both organelles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chloroplast", statement: "Chloroplasts carry out photosynthesis, capturing light energy and storing it in glucose." },
              { kind: "definition", name: "Mitochondrion", statement: "Mitochondria release energy from glucose in cellular respiration." },
            ],
            steps: [
              { reasoning: "Chloroplasts carry out photosynthesis, using light energy to make glucose.", marks: 1, markCode: "B" },
              { reasoning: "Mitochondria carry out cellular respiration, releasing energy from glucose.", marks: 1, markCode: "B" },
              { reasoning: "The cell needs that released energy to carry out its life processes, and the cell must respire even when no light is available.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Chloroplasts make glucose by photosynthesis; mitochondria release the energy in glucose by respiration so the cell can carry out its processes.",
            commonErrors: ["Saying plants do not need mitochondria because they photosynthesize.", "Saying chloroplasts release energy for the cell; they store energy in glucose."],
            examinerNote: "B1 chloroplast / photosynthesis makes glucose. B1 mitochondria / respiration releases energy. R1 linking the energy to cell processes or to respiration in the dark.",
          },
        },
        {
          id: "s7-u1-cell-organelles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student views two cells under a microscope.\n\n- Cell A has a nucleus, cell membrane, cytoplasm, mitochondria, chloroplasts, a cell wall and a large central vacuole.\n- Cell B has a nucleus, cell membrane, cytoplasm and mitochondria only.",
          parts: [
            { label: "a", prompt: "Identify which cell is a plant cell.", marks: 1 },
            { label: "b", prompt: "Name the organelle in Cell A that carries out photosynthesis and the organelle that holds the DNA.", marks: 2 },
            { label: "c", prompt: "Construct an explanation, using a claim, evidence and reasoning, for why Cell A could not come from human skin.", marks: 3 },
            { label: "d", prompt: "A toxin damages the mitochondria in Cell B. Predict what will happen to the cell and explain your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant cell only organelles", statement: "Cell wall, chloroplasts and a large central vacuole are found in plant cells but not animal cells." },
              { kind: "definition", name: "Mitochondria", statement: "Mitochondria release usable energy from food through cellular respiration." },
            ],
            steps: [
              { part: "a", reasoning: "Cell A has the plant-only organelles.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Chloroplast carries out photosynthesis.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The nucleus holds the DNA.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Claim: Cell A is not a human cell.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evidence: Cell A has a cell wall, chloroplasts and a large central vacuole.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Reasoning: these organelles are found only in plant cells; human (animal) cells do not have them.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Prediction: the cell will have less energy available and may stop working or die.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Explanation: mitochondria release energy from food by cellular respiration, and the cell needs this energy for its life processes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Cell A (b) Chloroplast; nucleus (c) Claim: not human; evidence: cell wall, chloroplasts, large vacuole; reasoning: only plant cells have these (d) Less energy released, so the cell cannot carry out its processes and may die.",
            commonErrors: ["In (a) choosing Cell B because it is simpler.", "In (c) giving evidence that is shared by both cell types, such as the nucleus.", "In (d) saying the cell would stop photosynthesizing; Cell B has no chloroplasts."],
            examinerNote: "(c) Allow any two of the three plant-only organelles as evidence for the evidence mark. Reasoning mark requires the link to plant cells only.",
          },
        },
      ],
    },
    {
      id: "s7-u1-microscopes-magnification",
      title: "Unicellular and multicellular organisms, microscopes",
      skill: "Compare unicellular and multicellular organisms and calculate magnification and actual size.",
      lesson: {
        sections: [
          {
            heading: "One cell or many",
            body: "A **unicellular** organism, such as an amoeba or a bacterium, is a single cell that carries out every life function itself. A **multicellular** organism, such as a tree or a person, is made of many cells. Its cells are often **specialized** so each type does one job well, and the cells work together.",
          },
          {
            heading: "Using a light microscope",
            body: "Total magnification is the eyepiece magnification multiplied by the objective magnification. An eyepiece of $\\times10$ with an objective of $\\times40$ gives $10\\times40=400$.\n\n- Start with the lowest-power objective.\n- Use the coarse focus knob to find the specimen, then the fine focus knob to sharpen it.\n- Change to a higher-power objective and refocus with the fine focus only.",
          },
          {
            heading: "The magnification equation",
            body: "$$\\text{magnification}=\\frac{\\text{image size}}{\\text{actual size}}$$\n\nRearranged, $\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$. Use the same units for both sizes. Remember $1\\text{ mm}=1000\\ \\mu\\text{m}$.",
          },
        ],
        keyFormulas: [
          { name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
          { name: "Total magnification", statement: "eyepiece magnification $\\times$ objective magnification" },
          { name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
        ],
        workedExample: {
          problem: "A drawing of a cell is 60 mm long and the magnification is $\\times200$. Find the actual length in micrometers.",
          solution: "Actual size $=\\dfrac{60}{200}=0.3\\text{ mm}$. Multiply by 1000: $0.3\\times1000=300\\ \\mu\\text{m}$.",
        },
      },
      questions: [
        {
          id: "s7-u1-microscopes-magnification-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is unicellular?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amoeba" },
              { id: "b", text: "Mushroom" },
              { id: "c", text: "Earthworm" },
              { id: "d", text: "Maple tree" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unicellular", statement: "A unicellular organism is a single cell that carries out all life functions." },
            ],
            steps: [
              { reasoning: "An amoeba is a single-celled organism. The others are made of many cells.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Amoeba",
            commonErrors: ["Choosing mushroom because it is small or not a plant; it is multicellular."],
            examinerNote: "B1 for amoeba.",
          },
        },
        {
          id: "s7-u1-microscopes-magnification-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A microscope has an eyepiece lens of $\\times15$ and an objective lens of $\\times40$.\n\nCalculate the total magnification.",
          response: { type: "numeric", parts: [{ label: "Total magnification", answer: 600 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total magnification", statement: "total magnification = eyepiece magnification $\\times$ objective magnification" },
            ],
            steps: [
              { reasoning: "Multiply the two lens magnifications.", working: "15\\times40", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times600$",
            commonErrors: ["Adding the magnifications to get 55."],
            examinerNote: "M1 for 15 x 40. A1 for 600.",
          },
        },
        {
          id: "s7-u1-microscopes-magnification-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A photograph of a cell has an image length of 45 mm. The magnification is $\\times300$.\n\nCalculate the actual length of the cell in micrometers ($\\mu\\text{m}$).",
          response: { type: "numeric", parts: [{ label: "Actual length", answer: 150, unit: "μm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
            ],
            steps: [
              { reasoning: "Divide image size by magnification.", working: "\\frac{45}{300}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in millimeters.", working: "0.15\\text{ mm}", marks: 1, markCode: "A" },
              { reasoning: "Convert to micrometers by multiplying by 1000.", working: "0.15\\times1000=150\\ \\mu\\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150\\ \\mu\\text{m}$",
            commonErrors: ["Multiplying 45 by 300.", "Forgetting to convert from millimeters to micrometers."],
            examinerNote: "M1 for 45/300. A1 for 0.15 mm. A1 for 150. Allow ecf for the conversion.",
          },
        },
        {
          id: "s7-u1-microscopes-magnification-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student observes a single-celled organism called Paramecium under a light microscope. The student's drawing of one Paramecium is 30 mm long and the total magnification is $\\times150$.\n\nThe student also reads that liver cells from a mouse and liver cells from an elephant are both about 20 $\\mu\\text{m}$ across, even though an elephant is far larger than a mouse.",
          parts: [
            { label: "a", prompt: "Describe one way a multicellular organism differs from a unicellular organism in how its cells work.", marks: 2 },
            { label: "b", prompt: "Calculate the actual length of the Paramecium in micrometers.", marks: 3 },
            { label: "c", prompt: "At high power the student turns the coarse focus knob and the slide cracks. Explain what the student should have done.", marks: 2 },
            { label: "d", prompt: "Use the liver cell data to evaluate the claim that larger organisms have larger cells.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Specialization", statement: "In multicellular organisms, cells are specialized for different jobs and work together; a unicellular organism does every job in one cell." },
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
            ],
            steps: [
              { part: "a", reasoning: "A unicellular organism carries out all life functions in one cell.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A multicellular organism has specialized cells that each do a particular job and work together.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide image size by magnification.", working: "\\frac{30}{150}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate in millimeters.", working: "0.2\\text{ mm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert to micrometers.", working: "0.2\\times1000=200\\ \\mu\\text{m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only the fine focus knob should be used with the high-power objective.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The coarse focus moves the lens too far and can drive the objective into the slide; focus first at low power with the coarse knob.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Claim: the data do not support the claim.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Evidence: mouse and elephant liver cells are both about 20 micrometers across.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reasoning: larger organisms have more cells, not bigger cells.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Unicellular: one cell does all jobs; multicellular: specialized cells work together (b) $200\\ \\mu\\text{m}$ (c) Use fine focus only at high power after focusing at low power (d) Not supported: both cell types are about 20 $\\mu\\text{m}$; bigger organisms have more cells.",
            commonErrors: ["In (b) multiplying 30 by 150.", "In (b) leaving the answer in millimeters.", "In (d) agreeing with the claim because an elephant is bigger."],
            examinerNote: "(b) Full marks for 200 with unit. Allow ecf in the conversion. (d) Allow 'cell size is similar' for the evidence mark.",
          },
        },
      ],
    },
  ],
};
