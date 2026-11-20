import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "esc8-u1-lesson-1-1",
  code: "1-1",
  title: "Cells",
  goal: "I CAN identify the structures in plant and animal cells and state their functions, and use a microscope and the magnification equation to find image and actual sizes.",
  standards: ["KS3 Biology", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Cell", definition: "The basic building block of all living organisms." },
    { term: "Nucleus", definition: "The structure that contains the genetic material and controls the activities of the cell." },
    { term: "Mitochondria", definition: "Structures in the cytoplasm where aerobic respiration releases energy." },
    { term: "Chloroplast", definition: "A structure containing chlorophyll in which photosynthesis takes place." },
    { term: "Cell wall", definition: "A rigid layer of cellulose outside the cell membrane of plant cells that supports the cell." },
    { term: "Magnification", definition: "How many times larger an image appears than the real object: image size divided by actual size." },
    { term: "Micrometre", definition: "A unit of length equal to one thousandth of a millimetre, written $\\mu\\text{m}$." },
  ],
  concepts: [
    {
      id: "esc8-u1-cell-structures",
      title: "Plant and animal cell structures",
      skill: "Identify the structures in plant and animal cells and state the function of each.",
      lesson: {
        sections: [
          {
            heading: "Structures found in all cells",
            body: "Animal and plant cells both have a **nucleus**, **cytoplasm**, a **cell membrane**, **mitochondria** and **ribosomes**.\n\n- The nucleus contains the genetic material and controls the cell's activities.\n- The cytoplasm is a jelly-like substance where most chemical reactions happen.\n- The cell membrane controls which substances enter and leave the cell.\n- Mitochondria are where aerobic respiration releases energy.\n- Ribosomes are where proteins are made.",
          },
          {
            heading: "Extra structures in plant cells",
            body: "Plant cells also have three structures that animal cells do not have.\n\n- The **cell wall** is made of cellulose. It is rigid and supports the cell.\n- **Chloroplasts** contain the green pigment chlorophyll and are where photosynthesis happens.\n- The **permanent vacuole** is filled with cell sap and helps keep the cell firm.\n\nNot every plant cell has chloroplasts. Root cells are underground, where there is no light, so they do not have them.",
          },
        ],
        keyFormulas: [
          { name: "Plant cell only", statement: "Cell wall, chloroplasts and permanent vacuole" },
          { name: "Mitochondria", statement: "Site of aerobic respiration, which releases energy" },
          { name: "Chloroplasts", statement: "Site of photosynthesis (they contain chlorophyll)" },
        ],
        workedExample: {
          problem: "A cell has a nucleus, a cell membrane, a cell wall and a large permanent vacuole, but no chloroplasts. Decide whether it is a plant cell or an animal cell and suggest where in the plant it might be found.",
          solution: "A cell wall and a permanent vacuole are found only in plant cells, so it is a plant cell. The lack of chloroplasts means it does not photosynthesise, so it is likely to come from a part of the plant that receives no light, such as a root.",
        },
      },
      questions: [
        {
          id: "esc8-u1-cell-structures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure in a plant cell contains chlorophyll and is the site of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondrion" },
              { id: "b", text: "Chloroplast" },
              { id: "c", text: "Permanent vacuole" },
              { id: "d", text: "Cell wall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chloroplast", statement: "Chloroplasts contain chlorophyll, which absorbs light for photosynthesis." },
            ],
            steps: [
              { reasoning: "Chlorophyll is the green pigment found in chloroplasts, where photosynthesis takes place.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Chloroplast",
            commonErrors: ["Choosing mitochondrion because it is linked to energy; mitochondria release energy in respiration, they do not carry out photosynthesis.", "Choosing the cell wall because it is also only found in plant cells."],
            examinerNote: "B1 for chloroplast.",
          },
        },
        {
          id: "esc8-u1-cell-structures-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name **two** structures that are found in plant cells but **not** in animal cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant cell only structures", statement: "Plant cells have a cell wall, chloroplasts and a permanent vacuole; animal cells do not." },
            ],
            steps: [
              { reasoning: "One mark for each correct structure from the three plant-only structures.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "Any two from: cell wall; chloroplasts; (permanent) vacuole.",
            commonErrors: ["Naming the nucleus or mitochondria, which are found in both cell types.", "Naming the cell membrane, which both cell types have."],
            examinerNote: "B1 for each correct structure. Reject cell membrane, nucleus, mitochondria, cytoplasm. Allow cellulose cell wall.",
          },
        },
        {
          id: "esc8-u1-cell-structures-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Cells in the roots of a plant contain mitochondria but do **not** contain chloroplasts.\n\nExplain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "Photosynthesis needs light and takes place in chloroplasts." },
              { kind: "definition", name: "Respiration", statement: "Aerobic respiration takes place in mitochondria and releases energy for the cell." },
            ],
            steps: [
              { reasoning: "Roots are underground, so no light reaches them and photosynthesis cannot happen. Chloroplasts would have no use.", marks: 1, markCode: "B" },
              { reasoning: "Mitochondria carry out aerobic respiration, which all living cells need.", marks: 1, markCode: "B" },
              { reasoning: "The energy released is used for cell processes, for example taking in mineral ions from the soil or growing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No light underground, so no photosynthesis and no need for chloroplasts; mitochondria are needed for respiration, releasing energy for the cell's processes.",
            commonErrors: ["Saying roots do not need energy.", "Saying roots do not respire because they are not green."],
            examinerNote: "B1 for no light (in the soil) oe. B1 for mitochondria / respiration. B1 for energy released for a named cell process. Allow 'roots do not make their own food'. Ignore 'roots do not need chlorophyll' unless linked to light.",
          },
        },
        {
          id: "esc8-u1-cell-structures-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student looks at cells from the lining of a human cheek and cells from a leaf of pondweed under a light microscope.",
          parts: [
            { label: "a", prompt: "State **two** structures that can be seen in the leaf cells but not in the cheek cells.", marks: 2 },
            { label: "b", prompt: "State the function of the nucleus.", marks: 1 },
            { label: "c", prompt: "Muscle cells contain many more mitochondria than cheek cells. Explain why.", marks: 2 },
            { label: "d", prompt: "The student claims that all plant cells contain chloroplasts. Evaluate this claim, giving an example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant cell only structures", statement: "Cell wall, chloroplasts and permanent vacuole are found in plant cells but not animal cells." },
              { kind: "definition", name: "Mitochondria", statement: "Mitochondria are the site of aerobic respiration, which releases energy." },
              { kind: "principle", name: "Chloroplasts need light", statement: "Chloroplasts are only found in plant cells that are exposed to light." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of the three plant-only structures.", marks: 2, markCode: "B" },
              { part: "b", reasoning: "The nucleus contains the genetic material (DNA) and controls the activities of the cell.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Muscle cells contract, which needs a lot of energy.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Mitochondria release energy by aerobic respiration, so more mitochondria release more energy.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The claim is incorrect: only some plant cells contain chloroplasts.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Give a valid example of a plant cell without chloroplasts, such as a root cell.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Justify: root cells are underground where there is no light, so they cannot photosynthesise.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Any two from cell wall, chloroplasts, permanent vacuole (b) Contains genetic material and controls cell activities (c) Muscle cells need more energy; mitochondria release energy in respiration (d) Not all plant cells have chloroplasts, e.g. root cells have none because there is no light underground.",
            commonErrors: ["In (a) naming the nucleus or cell membrane.", "In (c) saying mitochondria 'make' or 'produce' energy; energy is released from glucose, not created.", "In (d) agreeing with the claim because plants photosynthesise."],
            examinerNote: "(c) Allow 'provide energy' for 'release energy'. Reject 'make energy' on its own at the second mark unless the context is clearly respiration. (d) Allow other examples such as xylem or epidermal cells in the root, or any cell in the colourless part of a plant.",
          },
        },
      ],
    },
    {
      id: "esc8-u1-microscopy-magnification",
      title: "Using a microscope and magnification",
      skill: "Use a light microscope correctly and calculate magnification, image size and actual size.",
      lesson: {
        sections: [
          {
            heading: "Using a light microscope",
            body: "A light microscope has an eyepiece lens and several objective lenses. The **total magnification** is the eyepiece magnification multiplied by the objective magnification. For an eyepiece of $\\times10$ and an objective of $\\times40$, the total magnification is $10\\times40=400$.\n\nTo get a clear image:\n\n- Start with the **lowest-power** objective lens.\n- Use the **coarse focus** knob to bring the specimen roughly into focus, then the **fine focus** knob to make the image sharp.\n- Switch to a higher-power objective and refocus using only the fine focus.\n\nThe specimen must be thin enough for light to pass through. A stain such as iodine helps to show up the structures.",
          },
          {
            heading: "The magnification equation",
            body: "Magnification links the size of the image to the real size of the object.\n\n$$\\text{magnification}=\\frac{\\text{image size}}{\\text{actual size}}$$\n\nRearranging gives $\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$. Image size and actual size must be in the **same units** before dividing. Magnification has no unit.",
          },
          {
            heading: "Units of length",
            body: "Cells are very small, so scientists use micrometres. $1\\text{ mm}=1000\\ \\mu\\text{m}$. To change millimetres into micrometres, multiply by 1000. To change micrometres into millimetres, divide by 1000.",
          },
        ],
        keyFormulas: [
          { name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
          { name: "Total magnification", statement: "eyepiece magnification $\\times$ objective magnification" },
          { name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
        ],
        workedExample: {
          problem: "A drawing of a cell is 60 mm long. The magnification is $\\times200$. Calculate the actual length of the cell in micrometres.",
          solution: "Actual size $=\\dfrac{\\text{image size}}{\\text{magnification}}=\\dfrac{60}{200}=0.3\\text{ mm}$. Convert to micrometres: $0.3\\times1000=300\\ \\mu\\text{m}$.",
        },
      },
      questions: [
        {
          id: "esc8-u1-microscopy-magnification-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation correctly links magnification, image size and actual size?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "magnification = actual size $\\div$ image size" },
              { id: "b", text: "magnification = image size $\\times$ actual size" },
              { id: "c", text: "magnification = image size $\\div$ actual size" },
              { id: "d", text: "magnification = image size $-$ actual size" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
            ],
            steps: [
              { reasoning: "Magnification tells you how many times bigger the image is than the real object, so divide the image size by the actual size.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** magnification = image size $\\div$ actual size",
            commonErrors: ["Inverting the equation, which would give a number less than 1 for an enlarged image.", "Multiplying the two sizes together."],
            examinerNote: "B1 for image size divided by actual size.",
          },
        },
        {
          id: "esc8-u1-microscopy-magnification-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A scientist takes a photograph of a cell. The image of the cell is 45 mm long. The actual length of the cell is 0.15 mm.\n\nCalculate the magnification of the photograph.",
          response: { type: "numeric", parts: [{ label: "Magnification", answer: 300 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
            ],
            steps: [
              { reasoning: "Substitute the image size and actual size, which are already in the same units (mm).", working: "\\text{magnification}=\\frac{45}{0.15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. There is no unit for magnification.", working: "\\text{magnification}=300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times300$",
            commonErrors: ["Dividing the actual size by the image size, giving 0.0033.", "Giving a unit such as mm with the answer."],
            examinerNote: "M1 for 45 / 0.15 (oe). A1 for 300. Allow $\\times300$ or 300.",
          },
        },
        {
          id: "esc8-u1-microscopy-magnification-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student draws a cell. The drawing is 36 mm long and the magnification is $\\times400$.\n\nCalculate the actual length of the cell in micrometres ($\\mu\\text{m}$).",
          response: { type: "numeric", parts: [{ label: "Actual length", answer: 90, unit: "μm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
            ],
            steps: [
              { reasoning: "Rearrange the magnification equation to make actual size the subject and substitute.", working: "\\text{actual size}=\\frac{36}{400}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in millimetres.", working: "=0.09\\text{ mm}", marks: 1, markCode: "A" },
              { reasoning: "Convert millimetres to micrometres by multiplying by 1000.", working: "0.09\\times1000=90\\ \\mu\\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\ \\mu\\text{m}$",
            commonErrors: ["Multiplying 36 by 400 instead of dividing.", "Stopping at 0.09 without converting to micrometres, or dividing by 1000 instead of multiplying."],
            examinerNote: "M1 for 36 / 400 (oe). A1 for 0.09 mm. A1 for 90 with unit $\\mu\\text{m}$. Award full marks for the correct answer of 90. Allow ecf for the conversion from an incorrect mm value.",
          },
        },
        {
          id: "esc8-u1-microscopy-magnification-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student views a thin layer of onion skin (epidermis) under a light microscope. The eyepiece lens is $\\times10$ and the objective lens is $\\times40$. The student draws one cell. The drawing is 28 mm long.",
          parts: [
            { label: "a", prompt: "Calculate the total magnification of the microscope.", marks: 2 },
            { label: "b", prompt: "Calculate the actual length of the cell in millimetres, using the drawing and the total magnification from (a).", marks: 3 },
            { label: "c", prompt: "Give your answer to (b) in micrometres ($\\mu\\text{m}$).", marks: 1 },
            { label: "d", prompt: "Describe how the student should use the microscope to obtain a clear, focused image at high power.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total magnification", statement: "total magnification = eyepiece magnification $\\times$ objective magnification" },
              { kind: "formula", name: "Magnification", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the two lens magnifications.", working: "10\\times40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "400", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rearrange the magnification equation to find actual size.", working: "\\text{actual size}=\\frac{\\text{image size}}{\\text{magnification}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute the values, using the answer to (a).", working: "\\frac{28}{400}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with a unit.", working: "0.07\\text{ mm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply millimetres by 1000.", working: "0.07\\times1000=70\\ \\mu\\text{m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Start with the lowest-power objective lens in place over the slide.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Use the coarse focus knob to get the specimen roughly in focus, then the fine focus knob to make the image sharp.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Switch to the higher-power objective ($\\times40$) and refocus using only the fine focus knob.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\times400$ (b) $0.07\\text{ mm}$ (c) $70\\ \\mu\\text{m}$ (d) Lowest-power lens first; coarse then fine focus; change to high power and refocus with fine focus only.",
            commonErrors: ["Adding the lens magnifications ($10+40=50$) instead of multiplying.", "Multiplying 28 by 400 to get 11 200.", "In (d) using the coarse focus with the high-power objective, which can crush the slide."],
            examinerNote: "(a) Accept 400 or $\\times400$. (b) Allow ecf from an incorrect (a). (c) Allow ecf from (b) (x 1000). (d) Allow 'start with low power' oe for the first mark. Ignore references to a light source or mirror.",
          },
        },
      ],
    },
  ],
};
