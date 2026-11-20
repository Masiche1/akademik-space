import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "myps1-u2-lesson-2-1",
  code: "2-1",
  title: "Cells",
  goal: "I CAN describe the characteristics of living things, identify cell structures and specialised cells and state their functions, and use a light microscope and the magnification equation to find sizes.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Criterion C: Processing and evaluating",
    "Key concept: Systems",
    "Related concept: Function",
  ],
  vocabulary: [
    { term: "Cell", definition: "The basic building block of all living organisms." },
    { term: "Nucleus", definition: "The structure that contains the genetic material and controls the activities of the cell." },
    { term: "Specialised cell", definition: "A cell with a particular shape and structures that are adapted to carry out one job." },
    { term: "Chloroplast", definition: "A structure containing chlorophyll in which photosynthesis takes place." },
    { term: "Magnification", definition: "How many times larger an image appears than the real object: image size divided by actual size." },
    { term: "Micrometre", definition: "A unit of length equal to one thousandth of a millimetre, written $\\mu\\text{m}$." },
  ],
  concepts: [
    {
      id: "myps1-u2-cells-and-life-processes",
      title: "Living things and cell structures",
      skill: "State the characteristics of living things, identify the structures of animal and plant cells and link specialised cells to their functions.",
      lesson: {
        sections: [
          {
            heading: "Characteristics of living things",
            body: "All living things carry out seven life processes. The memory aid **MRS GREN** helps you recall them.\n\n- **M**ovement: changing position or moving parts of the body.\n- **R**espiration: releasing energy from food in cells.\n- **S**ensitivity: detecting and responding to changes in the surroundings.\n- **G**rowth: increasing in size and mass.\n- **R**eproduction: producing offspring.\n- **E**xcretion: getting rid of waste made by the body's cells.\n- **N**utrition: taking in or making food.\n\nAn object is only alive if it shows **all seven**. A river moves and a flame uses oxygen, but neither is alive.",
          },
          {
            heading: "Animal and plant cell structures",
            body: "Animal and plant cells both have a **nucleus** (controls the cell and holds the genetic material), **cytoplasm** (where most reactions happen), a **cell membrane** (controls what enters and leaves) and **mitochondria** (where respiration releases energy).\n\nPlant cells also have a **cell wall** (rigid, made of cellulose, supports the cell), a **permanent vacuole** (filled with cell sap) and, in the parts exposed to light, **chloroplasts** (where photosynthesis happens).",
          },
          {
            heading: "Specialised cells",
            body: "In many-celled organisms, different cells do different jobs. A **specialised cell** has features that suit its function.\n\n- A **root hair cell** has a long thin extension that gives a large surface area to absorb water and minerals.\n- A **sperm cell** has a tail to swim and many mitochondria to release the energy it needs.\n- A **palisade cell** in a leaf has many chloroplasts to carry out photosynthesis.",
          },
        ],
        keyFormulas: [
          { name: "MRS GREN", statement: "Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition" },
          { name: "Plant cell only", statement: "Cell wall, permanent vacuole and chloroplasts" },
          { name: "Specialised cell", statement: "Structure is adapted to function" },
        ],
        workedExample: {
          problem: "A cell has a nucleus, a cell membrane, a cell wall and a large number of chloroplasts. Decide whether it is a plant or an animal cell and suggest its job.",
          solution: "A cell wall and chloroplasts are found only in plant cells, so it is a plant cell. Many chloroplasts mean it carries out a lot of photosynthesis, so it is probably a leaf cell such as a palisade cell.",
        },
      },
      questions: [
        {
          id: "myps1-u2-cells-and-life-processes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which life process is the removal of waste products made by the cells of an organism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Respiration" },
              { id: "b", text: "Excretion" },
              { id: "c", text: "Sensitivity" },
              { id: "d", text: "Nutrition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Excretion", statement: "Excretion is the removal of waste products made by the cells of an organism." },
            ],
            steps: [
              { reasoning: "The E in MRS GREN is excretion, which means getting rid of the body's waste, for example carbon dioxide or urea.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Excretion",
            commonErrors: ["Choosing respiration because carbon dioxide is a waste product; respiration is the release of energy from food, not the removal of waste.", "Choosing nutrition because it is about substances entering the body, not leaving it."],
            examinerNote: "B1 for excretion.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of each of the following cell structures.\n\n(i) Mitochondria\n\n(ii) Cell wall",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cell structures and functions", statement: "Mitochondria are the site of respiration; the cell wall supports and strengthens a plant cell." },
            ],
            steps: [
              { reasoning: "Mitochondria are where respiration takes place, releasing energy for the cell.", marks: 1, markCode: "B" },
              { reasoning: "The cell wall is rigid and made of cellulose, so it supports the plant cell and gives it shape.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(i) Respiration / release of energy (ii) Supports (and strengthens) the plant cell",
            commonErrors: ["Saying mitochondria 'make energy'; energy is released from food, not created.", "Saying the cell wall controls what enters and leaves; that is the job of the cell membrane."],
            examinerNote: "(i) Allow 'where respiration happens', 'provides energy'. (ii) Allow 'keeps the cell rigid / gives it shape'. Reject 'controls what goes in and out'.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A root hair cell has a long, thin extension and contains many mitochondria.\n\nExplain how these features help the cell to absorb water and mineral ions from the soil.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and function", statement: "A specialised cell has structures that are adapted to its function." },
              { kind: "definition", name: "Mitochondria", statement: "Mitochondria are where respiration releases energy for cell processes." },
            ],
            steps: [
              { reasoning: "The long, thin extension gives the cell a large surface area in contact with the soil water.", marks: 1, markCode: "B" },
              { reasoning: "A large surface area means more water and mineral ions can be absorbed at the same time.", marks: 1, markCode: "B" },
              { reasoning: "Many mitochondria release energy by respiration, which the cell uses to take in mineral ions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Long thin extension gives a large surface area so more water and minerals are absorbed; many mitochondria release energy for taking in minerals.",
            commonErrors: ["Saying the extension 'makes the cell bigger' without linking this to surface area.", "Saying mitochondria 'make energy' rather than release it in respiration."],
            examinerNote: "B1 large surface area (oe). B1 faster / more absorption linked to the surface area. B1 mitochondria release energy / respiration linked to uptake of minerals. Allow 'increases rate of absorption'.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student says: \"A car is alive because it moves, takes in fuel and gives out waste gases.\"\n\nThe student then compares a sperm cell, which has a tail and many mitochondria, with a palisade cell from a leaf.",
          parts: [
            { label: "a", prompt: "State **two** characteristics of living things that a car does **not** show.", marks: 2 },
            { label: "b", prompt: "Explain why showing movement alone is not enough to prove that something is alive.", marks: 1 },
            { label: "c", prompt: "Explain how the tail and the many mitochondria help the sperm cell to carry out its function.", marks: 3 },
            { label: "d", prompt: "Name **one** structure found in a palisade cell but **not** in a sperm cell, and state its function.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Living things", statement: "A living thing shows all seven life processes: movement, respiration, sensitivity, growth, reproduction, excretion and nutrition." },
              { kind: "principle", name: "Structure and function", statement: "A specialised cell has structures adapted to its function." },
              { kind: "property", name: "Plant cell structures", statement: "Chloroplasts, a cell wall and a permanent vacuole are found in plant cells but not in animal cells." },
            ],
            steps: [
              { part: "a", reasoning: "Any two of growth, reproduction and sensitivity (cars do not grow, have offspring or sense and respond as living things do).", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Something must show all seven life processes to be alive; non-living things such as rivers and clouds also move.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The tail lets the sperm cell swim towards the egg cell.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Mitochondria release energy by respiration.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "This energy is needed to make the tail move, so many mitochondria allow sustained swimming.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Name a plant-only structure, for example chloroplasts (or cell wall or permanent vacuole).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "State the matching function: chloroplasts carry out photosynthesis (cell wall supports the cell; vacuole keeps the cell firm).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Any two from growth, reproduction, sensitivity (b) Living things must show all seven characteristics; non-living things also move (c) Tail for swimming to the egg; mitochondria release energy by respiration for the tail to move (d) Chloroplasts: photosynthesis (or cell wall: support; vacuole: keeps the cell firm)",
            commonErrors: ["In (a) naming movement, nutrition or excretion, which the car appears to show.", "In (c) saying mitochondria 'make' energy.", "In (d) naming the nucleus or cell membrane, which both cells have."],
            examinerNote: "(a) Reject movement, nutrition, excretion. Allow 'respiration' only if clearly described as happening in cells. (d) The function mark depends on a correct structure; allow ecf for a correct function of a wrongly named plant-only structure only if that structure is plant-only.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A plant makes its own food by photosynthesis. Which life process is this an example of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excretion" },
              { id: "b", text: "Nutrition" },
              { id: "c", text: "Sensitivity" },
              { id: "d", text: "Movement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nutrition", statement: "Nutrition is taking in or making food." },
            ],
            steps: [
              { reasoning: "Making food by photosynthesis is a form of nutrition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nutrition",
            commonErrors: ["Choosing movement, which is changing position.", "Choosing excretion, which is removing waste."],
            examinerNote: "B1 for nutrition.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell structure is found in plant cells but **not** in animal cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Cell membrane" },
              { id: "c", text: "Chloroplasts" },
              { id: "d", text: "Mitochondria" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant cell structures", statement: "Chloroplasts, a cell wall and a permanent vacuole are found in plant cells but not in animal cells." },
            ],
            steps: [
              { reasoning: "Chloroplasts (and the cell wall and permanent vacuole) are plant-only; the nucleus, cell membrane and mitochondria are in both.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Chloroplasts",
            commonErrors: ["Choosing mitochondria, which are found in both plant and animal cells."],
            examinerNote: "B1 for chloroplasts (accept cell wall or permanent vacuole).",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the function of mitochondria in a cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To control what enters and leaves the cell" },
              { id: "b", text: "To release energy by respiration" },
              { id: "c", text: "To carry out photosynthesis" },
              { id: "d", text: "To store water in plant cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mitochondria", statement: "Mitochondria are the site of respiration, where energy is released for cell processes." },
            ],
            steps: [
              { reasoning: "Mitochondria release energy through respiration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To release energy by respiration",
            commonErrors: ["Choosing the cell membrane's role (controls entry and exit).", "Choosing chloroplasts' role (photosynthesis)."],
            examinerNote: "B1 for releasing energy / respiration.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A robot can move and can detect and respond to obstacles. It cannot grow, reproduce, respire or excrete. A student claims the robot is alive because it moves and responds.\n\nExplain why the student is wrong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Living things", statement: "A living thing shows all seven life processes: movement, respiration, sensitivity, growth, reproduction, excretion and nutrition." },
            ],
            steps: [
              { reasoning: "An organism must show all seven life processes to be alive; showing only movement and sensitivity is not enough.", marks: 1, markCode: "B" },
              { reasoning: "The robot does not grow, reproduce, respire or excrete (and does not show cell-based nutrition), so it is not alive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The robot is not alive: living things must show all seven life processes, and the robot does not grow, reproduce, respire or excrete.",
            commonErrors: ["Saying the robot is alive because it 'acts like' a living thing.", "Listing life processes without saying all seven are needed."],
            examinerNote: "B1 for all seven required. R1 for identifying missing processes / robot not alive.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A palisade cell in a leaf contains many chloroplasts. What is the most likely reason for this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To release energy by respiration" },
              { id: "b", text: "To carry out a lot of photosynthesis" },
              { id: "c", text: "To control what enters the cell" },
              { id: "d", text: "To support the cell wall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and function", statement: "A specialised cell has structures that are adapted to its function." },
              { kind: "property", name: "Chloroplasts", statement: "Chloroplasts are where photosynthesis happens." },
            ],
            steps: [
              { reasoning: "Many chloroplasts mean the cell carries out lots of photosynthesis, which is the job of a palisade cell.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To carry out a lot of photosynthesis",
            commonErrors: ["Choosing respiration (mitochondria's job).", "Choosing cell membrane's job (control of entry and exit)."],
            examinerNote: "B1 for photosynthesis.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A root hair cell has a long, thin extension. Explain how this feature helps the cell to absorb water and mineral ions from the soil.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area and absorption", statement: "A larger surface area allows faster absorption of substances." },
            ],
            steps: [
              { reasoning: "The long thin extension gives the cell a large surface area.", marks: 1, markCode: "B" },
              { reasoning: "A larger surface area means water and mineral ions can be absorbed more quickly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The long thin extension gives a large surface area, so water and mineral ions can be absorbed faster.",
            commonErrors: ["Saying the extension 'reaches' water rather than increasing surface area.", "Saying it makes the cell stronger."],
            examinerNote: "B1 for large surface area. R1 for faster absorption linked to surface area.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student counts 200 cells in a microscope field of view: 160 are plant cells and 40 are animal cells.\n\nCalculate the percentage of the cells that are plant cells.",
          response: { type: "numeric", parts: [{ label: "Percentage of plant cells", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\dfrac{\\text{part}}{\\text{total}}\\times100$" },
            ],
            steps: [
              { reasoning: "Divide the number of plant cells by the total number of cells and multiply by 100.", working: "\\frac{160}{200}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\%$",
            commonErrors: ["Dividing by 40 instead of 200.", "Forgetting to multiply by 100."],
            examinerNote: "M1 for 160/200 x 100. A1 for 80%.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student counts the cells in two fields of view. Field 1 has 60 palisade cells and 40 other cells. Field 2 has 50 palisade cells and 50 other cells.\n\nCalculate the total number of cells counted in both fields of view.",
          response: { type: "numeric", parts: [{ label: "Total number of cells", answer: 200 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting cells", statement: "Add the cells in each field of view to find the total." },
            ],
            steps: [
              { reasoning: "Add all four groups of cells.", working: "60+40+50+50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$ cells",
            commonErrors: ["Adding only the palisade cells.", "Adding only one field of view."],
            examinerNote: "M1 for 60+40+50+50. A1 for 200.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a sample of 250 cells, 150 are leaf cells.\n\nCalculate (i) the percentage of cells that are leaf cells, (ii) the number of cells that are not leaf cells, and (iii) the fraction of cells that are leaf cells as a decimal.",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage of leaf cells", answer: 60, unit: "%" },
              { label: "Number of cells that are not leaf cells", answer: 100 },
              { label: "Fraction of leaf cells as a decimal", answer: 0.6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\dfrac{\\text{part}}{\\text{total}}\\times100$" },
            ],
            steps: [
              { reasoning: "Divide leaf cells by total cells and multiply by 100.", working: "\\frac{150}{250}\\times100=60\\%", marks: 1, markCode: "M" },
              { reasoning: "Subtract leaf cells from the total.", working: "250-150=100", marks: 1, markCode: "M" },
              { reasoning: "Divide leaf cells by total cells without multiplying by 100.", working: "\\frac{150}{250}=0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\%$, $100$ cells, $0.6$",
            commonErrors: ["Forgetting to multiply by 100 for the percentage.", "Using 150 as the number of non-leaf cells."],
            examinerNote: "M1 for each correct method. A1 for 0.6.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student counts cells in two microscope fields of view. Field 1 has 200 cells, of which 150 are palisade cells. Field 2 has 100 cells, of which 40 are palisade cells.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total number of cells in both fields", answer: 300 },
              { label: "Total number of palisade cells", answer: 190 },
              { label: "Total number of cells that are not palisade cells", answer: 110 },
              { label: "Percentage of all cells that are palisade cells", answer: 63.3, tolerance: 0.1, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage}=\\dfrac{\\text{part}}{\\text{total}}\\times100$" },
            ],
            steps: [
              { reasoning: "Add the cells in the two fields.", working: "200+100=300", marks: 1, markCode: "M" },
              { reasoning: "Add the palisade cells in the two fields.", working: "150+40=190", marks: 1, markCode: "M" },
              { reasoning: "Subtract palisade cells from the total.", working: "300-190=110", marks: 1, markCode: "M" },
              { reasoning: "Divide palisade cells by total cells and multiply by 100.", working: "\\frac{190}{300}\\times100=63.3\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$, $190$, $110$, $63.3\\%$",
            commonErrors: ["Adding 150 + 40 incorrectly.", "Using only field 1 for the percentage."],
            examinerNote: "M1 for each correct method. A1 for 63.3% (accept 63%).",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a specialised cell's structure is suited to its function, using the root hair cell and the sperm cell as examples.",
          parts: [
            { label: "a", prompt: "Describe one structural feature of a root hair cell and link it to its function.", marks: 2 },
            { label: "b", prompt: "Describe one structural feature of a sperm cell and link it to its function.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and function", statement: "A specialised cell has structures that are adapted to its function." },
            ],
            steps: [
              { part: "a", reasoning: "The root hair cell has a long thin extension.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "This gives a large surface area so water and mineral ions can be absorbed quickly.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The sperm cell has a tail and many mitochondria.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The tail lets it swim to the egg cell, and the mitochondria release the energy needed for swimming.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Long thin extension → large surface area → faster absorption of water and minerals (b) Tail → swimming to the egg; mitochondria → energy for movement.",
            commonErrors: ["Naming a structure without linking it to the function.", "Saying mitochondria 'make' energy instead of releasing it."],
            examinerNote: "Each part needs a structure and a linked function. Allow ecf for a correct feature-function pair in either cell.",
          },
        },
        {
          id: "myps1-u2-cells-and-life-processes-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student observes three cells under a microscope:\n\n- Cell X: has a cell wall, chloroplasts and a large permanent vacuole\n- Cell Y: has a tail and many mitochondria, but no cell wall\n- Cell Z: has only a nucleus, cell membrane, cytoplasm and mitochondria",
          parts: [
            { label: "a", prompt: "For each cell, state whether it is a plant or an animal cell, and give a reason.", marks: 3 },
            { label: "b", prompt: "Suggest the job of cell X and explain your choice.", marks: 2 },
            { label: "c", prompt: "Suggest the job of cell Y and explain your choice.", marks: 2 },
            { label: "d", prompt: "State one cell structure that cell Z shares with cell X.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Plant cell structures", statement: "Cell wall, permanent vacuole and chloroplasts are found only in plant cells." },
              { kind: "principle", name: "Structure and function", statement: "A specialised cell has structures adapted to its function." },
            ],
            steps: [
              { part: "a", reasoning: "Cell X is a plant cell because it has a cell wall, chloroplasts and a permanent vacuole.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Cell Y is an animal cell because it has no cell wall or chloroplasts.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Cell Z is an animal cell because it has only structures found in both cell types.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Cell X is probably a leaf cell such as a palisade cell.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Its many chloroplasts mean it carries out a lot of photosynthesis.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Cell Y is probably a sperm cell.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Its tail lets it swim and its many mitochondria release energy for movement.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Any one of nucleus, cell membrane, cytoplasm or mitochondria.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) X: plant (cell wall, chloroplasts, vacuole); Y: animal (no cell wall); Z: animal (only shared structures) (b) Leaf/palisade cell — many chloroplasts for photosynthesis (c) Sperm cell — tail for swimming, mitochondria for energy (d) Nucleus / cell membrane / cytoplasm / mitochondria.",
            commonErrors: ["In (a) calling cell Y a plant cell because of the mitochondria.", "In (b) or (c) naming the wrong specialised cell."],
            examinerNote: "(a) Award each cell 1 mark for the correct type with a reason. (d) Reject chloroplasts, cell wall, permanent vacuole.",
          },
        },
      ],
    },
    {
      id: "myps1-u2-microscope-magnification",
      title: "Using a microscope and magnification",
      skill: "Use a light microscope correctly and calculate magnification, image size and actual size, converting between millimetres and micrometres.",
      lesson: {
        sections: [
          {
            heading: "Using a light microscope",
            body: "A light microscope has an eyepiece lens and several objective lenses. The **total magnification** is the eyepiece magnification multiplied by the objective magnification. An eyepiece of $\\times10$ and an objective of $\\times25$ give $10\\times25=250$.\n\n- Start with the **lowest-power** objective lens, which finds the specimen more easily.\n- Use the **coarse focus** to bring the image roughly into focus, then the **fine focus** to make it sharp.\n- When you change to a higher-power objective, refocus using only the fine focus.\n\nThe specimen must be thin so that light can pass through it. A stain such as iodine makes the structures easier to see.",
          },
          {
            heading: "The magnification equation",
            body: "$$\\text{magnification}=\\frac{\\text{image size}}{\\text{actual size}}$$\n\nRearranged, $\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$ and $\\text{image size}=\\text{magnification}\\times\\text{actual size}$. Magnification has no unit, and the image size and actual size must be in the **same unit** before you divide.",
          },
          {
            heading: "Converting units",
            body: "Cells are measured in micrometres. $1\\text{ mm}=1000\\ \\mu\\text{m}$.\n\n- millimetres to micrometres: multiply by 1000.\n- micrometres to millimetres: divide by 1000.",
          },
        ],
        keyFormulas: [
          { name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
          { name: "Total magnification", statement: "eyepiece magnification $\\times$ objective magnification" },
          { name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
        ],
        workedExample: {
          problem: "A drawing of a cell is 18 mm long and the magnification is $\\times60$. Calculate the actual length of the cell in micrometres.",
          solution: "Actual size $=\\dfrac{18}{60}=0.3\\text{ mm}$. Multiply by 1000 to convert to micrometres: $0.3\\times1000=300\\ \\mu\\text{m}$.",
        },
      },
      questions: [
        {
          id: "myps1-u2-microscope-magnification-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cell is 0.2 mm long. What is its length in micrometres ($\\mu\\text{m}$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\ \\mu\\text{m}$" },
              { id: "b", text: "$20\\ \\mu\\text{m}$" },
              { id: "c", text: "$200\\ \\mu\\text{m}$" },
              { id: "d", text: "$2000\\ \\mu\\text{m}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$, so multiply millimetres by 1000." },
            ],
            steps: [
              { reasoning: "Multiply by 1000 to change millimetres into micrometres.", working: "0.2\\times1000=200\\ \\mu\\text{m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $200\\ \\mu\\text{m}$",
            commonErrors: ["Dividing by 1000 instead of multiplying.", "Multiplying by 100 or 10 000 by confusing the conversion factor with centimetres."],
            examinerNote: "B1 for 200 $\\mu\\text{m}$.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A drawing of a plant cell is 24 mm long. The magnification of the drawing is $\\times120$.\n\nCalculate the actual length of the cell in millimetres.",
          response: { type: "numeric", parts: [{ label: "Actual length", answer: 0.2, unit: "mm", tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
            ],
            steps: [
              { reasoning: "Rearrange the magnification equation and substitute the image size and magnification.", working: "\\text{actual size}=\\frac{24}{120}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "=0.2\\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.2\\text{ mm}$",
            commonErrors: ["Multiplying 24 by 120 to get 2880.", "Dividing 120 by 24 to get 5."],
            examinerNote: "M1 for 24 / 120 (oe). A1 for 0.2 mm. Allow 200 $\\mu\\text{m}$ if clearly stated.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A human cheek cell has an actual diameter of 60 $\\mu\\text{m}$. A student draws the cell with a diameter of 15 mm.\n\nCalculate the magnification of the drawing.",
          response: { type: "numeric", parts: [{ label: "Magnification", answer: 250 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
              { kind: "property", name: "Same units", statement: "Image size and actual size must be in the same unit; $1\\text{ mm}=1000\\ \\mu\\text{m}$." },
            ],
            steps: [
              { reasoning: "Convert the image size to micrometres so both sizes have the same unit.", working: "15\\text{ mm}=15\\times1000=15\\,000\\ \\mu\\text{m}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the magnification equation.", working: "\\text{magnification}=\\frac{15\\,000}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. Magnification has no unit.", working: "=250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times250$",
            commonErrors: ["Dividing 15 by 60 without converting units, giving 0.25.", "Converting the wrong way, for example 60 $\\mu\\text{m}$ to 60 000 mm."],
            examinerNote: "M1 for converting a size so the units match. M1 for image / actual. A1 for 250. Allow the answer 250 from 15 / 0.06.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student prepares a slide of onion skin, adds a drop of iodine solution and views it under a light microscope. The eyepiece lens is $\\times10$ and the objective lens is $\\times25$. The student photographs one cell. In the photograph the cell is 45 mm long.",
          parts: [
            { label: "a", prompt: "Calculate the total magnification of the microscope.", marks: 2 },
            { label: "b", prompt: "Calculate the actual length of the cell in millimetres, using the photograph and your answer to (a).", marks: 2 },
            { label: "c", prompt: "Give your answer to (b) in micrometres ($\\mu\\text{m}$).", marks: 1 },
            { label: "d", prompt: "Explain why the student should start with the lowest-power objective lens.", marks: 1 },
            { label: "e", prompt: "Suggest why the layer of onion skin must be very thin and why iodine solution is added.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total magnification", statement: "total magnification = eyepiece magnification $\\times$ objective magnification" },
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the eyepiece and objective magnifications.", working: "10\\times25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "250", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the image size by the magnification from (a).", working: "\\text{actual size}=\\frac{45}{250}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with a unit.", working: "=0.18\\text{ mm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply millimetres by 1000.", working: "0.18\\times1000=180\\ \\mu\\text{m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The specimen is easier to find with a wider field of view, and the low-power lens is shorter so it is less likely to touch and crush the slide.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The layer must be thin so that light can pass through it and the cells can be seen clearly (one layer of cells, no overlapping).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Iodine stains the cell structures (such as the nucleus), making them easier to see.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\times250$ (b) $0.18\\text{ mm}$ (c) $180\\ \\mu\\text{m}$ (d) Easier to find the specimen / avoids damaging the slide (e) Thin so light passes through; iodine stains structures so they show up",
            commonErrors: ["Adding the lens magnifications ($10+25=35$) instead of multiplying.", "Multiplying 45 by 250.", "Dividing by 1000 instead of multiplying in (c)."],
            examinerNote: "(b) Allow ecf from an incorrect (a). (c) Allow ecf from (b). (d) Allow 'to avoid breaking the slide' or 'wider field of view'. (e) Ignore 'to make it clearer' without a reason.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A microscope has an eyepiece lens of $\\times10$ and an objective lens of $\\times40$. What is the total magnification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\times50$" },
              { id: "b", text: "$\\times400$" },
              { id: "c", text: "$\\times410$" },
              { id: "d", text: "$\\times14$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total magnification", statement: "total magnification = eyepiece magnification $\\times$ objective magnification" },
            ],
            steps: [
              { reasoning: "Multiply the two lens magnifications: $10\\times40=400$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\times400$",
            commonErrors: ["Adding the magnifications ($10+40=50$).", "Multiplying by 100 incorrectly."],
            examinerNote: "B1 for 400.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should a student begin viewing a slide with the lowest-power objective lens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the image is always sharper at low power" },
              { id: "b", text: "Because the specimen is easier to find and the lens is less likely to damage the slide" },
              { id: "c", text: "Because high-power lenses cannot be used on thin sections" },
              { id: "d", text: "Because low-power lenses use less light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Microscope technique", statement: "Start with the lowest-power objective: the field of view is wider so the specimen is easier to find, and the lens is shorter so it is less likely to crush the slide." },
            ],
            steps: [
              { reasoning: "Low power gives a wider field of view for finding the specimen and a shorter lens that is safer for the slide.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Because the specimen is easier to find and the lens is less likely to damage the slide",
            commonErrors: ["Saying low power gives a sharper image; high power can be sharper once focused."],
            examinerNote: "B1 for (b). Accept 'wider field of view' oe.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When focusing a microscope, which adjustment should be used **first** to bring the image roughly into focus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fine focus" },
              { id: "b", text: "Coarse focus" },
              { id: "c", text: "The light intensity dial" },
              { id: "d", text: "The stage clips" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Focusing", statement: "Use the coarse focus to bring the image roughly into focus, then the fine focus to make it sharp." },
            ],
            steps: [
              { reasoning: "The coarse focus moves the stage a long way for rough focusing; the fine focus is then used for sharp focus.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Coarse focus",
            commonErrors: ["Choosing fine focus, which is for final sharp focusing only."],
            examinerNote: "B1 for coarse focus.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student measures an image of a cell as 30 mm long. The actual length of the cell is 0.1 mm.\n\nCalculate the magnification of the image.",
          response: { type: "numeric", parts: [{ label: "Magnification", answer: 300 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
            ],
            steps: [
              { reasoning: "Divide the image size by the actual size; both are already in millimetres.", working: "\\text{magnification}=\\frac{30}{0.1}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. Magnification has no unit.", working: "300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times300$",
            commonErrors: ["Multiplying 30 by 0.1.", "Dividing 0.1 by 30."],
            examinerNote: "M1 for 30/0.1. A1 for 300.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A cell has an actual length of 0.05 mm. What is this length in micrometres ($\\mu\\text{m}$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\ \\mu\\text{m}$" },
              { id: "b", text: "$50\\ \\mu\\text{m}$" },
              { id: "c", text: "$500\\ \\mu\\text{m}$" },
              { id: "d", text: "$5000\\ \\mu\\text{m}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$, so multiply millimetres by 1000." },
            ],
            steps: [
              { reasoning: "Multiply by 1000: $0.05\\times1000=50\\ \\mu\\text{m}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $50\\ \\mu\\text{m}$",
            commonErrors: ["Dividing by 1000.", "Multiplying by 100 instead of 1000."],
            examinerNote: "B1 for 50 $\\mu\\text{m}$.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When using the magnification equation $\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$, why must the image size and actual size be in the same unit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same units", statement: "A ratio or fraction is only meaningful when both quantities are measured in the same unit." },
            ],
            steps: [
              { reasoning: "Magnification is a ratio (image size divided by actual size), so both measurements must use the same unit for the division to be valid.", marks: 1, markCode: "B" },
              { reasoning: "If the units differ, the answer would be wrong by a factor of 1000 or similar; convert one size first (for example mm to $\\mu\\text{m}$).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Because magnification is a ratio, the two sizes must be in the same unit; otherwise the answer would be wrong by the conversion factor.",
            commonErrors: ["Saying it is 'easier' to calculate rather than that it is required for a valid ratio."],
            examinerNote: "B1 for ratio / same unit needed. R1 for conversion / wrong answer by factor oe.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A red blood cell has an actual diameter of 0.008 mm.\n\nConvert this diameter to micrometres ($\\mu\\text{m}$).",
          response: { type: "numeric", parts: [{ label: "Diameter in micrometres", answer: 8, unit: "µm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$." },
            ],
            steps: [
              { reasoning: "Multiply millimetres by 1000 to get micrometres.", working: "0.008\\times1000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "8\\ \\mu\\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\ \\mu\\text{m}$",
            commonErrors: ["Dividing by 1000 instead of multiplying.", "Multiplying by 100."],
            examinerNote: "M1 for 0.008 x 1000. A1 for 8 $\\mu\\text{m}$.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A drawing of a cell is 12 mm long and its magnification is $\\times80$.\n\nCalculate the actual length of the cell in millimetres.",
          response: { type: "numeric", parts: [{ label: "Actual length", answer: 0.15, tolerance: 0.001, unit: "mm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
            ],
            steps: [
              { reasoning: "Divide the image size by the magnification.", working: "\\text{actual size}=\\frac{12}{80}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "0.15\\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.15\\text{ mm}$ (accept $150\\ \\mu\\text{m}$)",
            commonErrors: ["Multiplying 12 by 80.", "Dividing 80 by 12."],
            examinerNote: "M1 for 12/80. A1 for 0.15 mm.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "An actual cell is 80 $\\mu\\text{m}$ long. A student draws it 24 mm long.\n\nCalculate the magnification of the drawing.",
          response: { type: "numeric", parts: [{ label: "Magnification", answer: 300 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "$\\text{magnification}=\\dfrac{\\text{image size}}{\\text{actual size}}$" },
              { kind: "property", name: "Same units", statement: "Convert units so both sizes are in the same unit; $1\\text{ mm}=1000\\ \\mu\\text{m}$." },
            ],
            steps: [
              { reasoning: "Convert the image size to micrometres: $24\\text{ mm}=24\\times1000\\ \\mu\\text{m}$.", working: "24\\times1000=24\\,000\\ \\mu\\text{m}", marks: 1, markCode: "M" },
              { reasoning: "Divide image size by actual size.", working: "\\text{magnification}=\\frac{24\\,000}{80}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. Magnification has no unit.", working: "300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times300$",
            commonErrors: ["Dividing 24 by 80 without converting units.", "Converting 80 $\\mu\\text{m}$ to 80 mm instead of 0.08 mm."],
            examinerNote: "M1 for conversion. M1 for image/actual. A1 for 300. Allow 24/0.08.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student photographs two cells under a microscope.\n\n- Cell A: image length 24 mm, magnification $\\times120$\n- Cell B: image length 45 mm, magnification $\\times250$",
          response: {
            type: "numeric",
            parts: [
              { label: "Actual length of cell A in mm", answer: 0.2, tolerance: 0.001, unit: "mm" },
              { label: "Actual length of cell A in micrometres", answer: 200, unit: "µm" },
              { label: "Actual length of cell B in micrometres", answer: 180, unit: "µm" },
              { label: "Actual length of cell B in mm", answer: 0.18, tolerance: 0.001, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$." },
            ],
            steps: [
              { reasoning: "Cell A: divide image size by magnification.", working: "\\frac{24}{120}=0.2\\text{ mm}", marks: 1, markCode: "M" },
              { reasoning: "Cell A: convert millimetres to micrometres.", working: "0.2\\times1000=200\\ \\mu\\text{m}", marks: 1, markCode: "M" },
              { reasoning: "Cell B: divide image size by magnification.", working: "\\frac{45}{250}=0.18\\text{ mm}=180\\ \\mu\\text{m}", marks: 1, markCode: "M" },
              { reasoning: "Cell B in millimetres.", working: "0.18\\text{ mm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell A: $0.2\\text{ mm}$ / $200\\ \\mu\\text{m}$; cell B: $180\\ \\mu\\text{m}$ / $0.18\\text{ mm}$",
            commonErrors: ["Multiplying image size by magnification.", "Forgetting to convert between mm and $\\mu\\text{m}$."],
            examinerNote: "M1 for each correct division. A1 for final mm answer. Allow ecf for conversions.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student is asked to prepare and view a slide of onion skin under a light microscope.",
          parts: [
            { label: "a", prompt: "Describe how the student should focus the microscope.", marks: 2 },
            { label: "b", prompt: "Explain why the onion skin layer must be very thin.", marks: 1 },
            { label: "c", prompt: "Suggest why a stain such as iodine is added to the slide.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Focusing", statement: "Use the coarse focus for rough focus, then the fine focus for sharp focus; after changing objective, use only the fine focus." },
              { kind: "property", name: "Preparing slides", statement: "The specimen must be thin so light can pass through; a stain makes structures easier to see." },
            ],
            steps: [
              { part: "a", reasoning: "Start with the lowest-power objective lens.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Use the coarse focus to bring the image roughly into focus, then the fine focus to make it sharp.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The layer must be thin so that light can pass through it and the cells can be seen clearly.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The stain colours the cell structures (such as the nucleus) so they are easier to see.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Low-power objective first; coarse focus then fine focus (b) Thin so light passes through and cells are clear (c) Stain makes structures easier to see.",
            commonErrors: ["In (a) using the fine focus first or the high-power lens first.", "In (c) saying the stain 'kills' the cells or 'magnifies' them."],
            examinerNote: "(a) Accept 'use coarse then fine focus' oe. (c) Accept 'makes structures visible/clearer'.",
          },
        },
        {
          id: "myps1-u2-microscope-magnification-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student views a cell under a light microscope. The eyepiece magnification is $\\times15$ and the objective magnification is $\\times40$. The cell appears 36 mm long in the image.",
          parts: [
            { label: "a", prompt: "Calculate the total magnification of the microscope.", marks: 2 },
            { label: "b", prompt: "Calculate the actual length of the cell in millimetres.", marks: 2 },
            { label: "c", prompt: "Give your answer to (b) in micrometres.", marks: 1 },
            { label: "d", prompt: "The student wants to see more detail. State which objective lens she should change to and explain what she should do to refocus.", marks: 2 },
            { label: "e", prompt: "Explain why the image size and actual size must be in the same unit when calculating magnification.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total magnification", statement: "total magnification = eyepiece magnification $\\times$ objective magnification" },
              { kind: "formula", name: "Actual size", statement: "$\\text{actual size}=\\dfrac{\\text{image size}}{\\text{magnification}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ mm}=1000\\ \\mu\\text{m}$" },
              { kind: "principle", name: "Same units", statement: "A ratio is only meaningful when both quantities are in the same unit." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the eyepiece and objective magnifications.", working: "15\\times40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "600", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the image size by the total magnification.", working: "\\text{actual size}=\\frac{36}{600}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "0.06\\text{ mm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply millimetres by 1000.", working: "0.06\\times1000=60\\ \\mu\\text{m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Change to a higher-power objective lens.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Refocus using only the fine focus, because the high-power lens is very close to the slide.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Magnification is image size divided by actual size, a ratio.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The sizes must share a unit or the answer would be wrong by a factor such as 1000.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\times600$ (b) $0.06\\text{ mm}$ (c) $60\\ \\mu\\text{m}$ (d) Higher-power objective; refocus with fine focus only (e) Ratio needs same units, else answer is wrong by the conversion factor.",
            commonErrors: ["Adding 15 and 40 instead of multiplying.", "Multiplying 36 by 600.", "Using the coarse focus after switching to high power."],
            examinerNote: "(b) Allow ecf from an incorrect (a). (c) Allow ecf from (b). (d) Accept 'higher magnification objective' oe. (e) Ignore 'to make it easier' without the ratio reason.",
          },
        },
      ],
    },
  ],
};
