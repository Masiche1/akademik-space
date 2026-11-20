import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ebi10-u1-lesson-1-1",
  code: "1-1",
  title: "Living Organisms and Cells",
  goal: "I CAN describe the characteristics and variety of living organisms and explain how cells are structured, specialised and used as stem cells.",
  standards: ["4BI1 1.1", "4BI1 1.2", "4BI1 1.3", "4BI1 1.4", "4BI1 2.1", "4BI1 2.2", "4BI1 2.3", "4BI1 2.4", "4BI1 2.5", "4BI1 2.6"],
  vocabulary: [
    { term: "Eukaryote", definition: "An organism whose cells have a nucleus and other membrane-bound organelles, such as plants, animals, fungi and protoctists." },
    { term: "Prokaryote", definition: "A single-celled organism with no nucleus. Its DNA is circular and lies free in the cytoplasm, as in bacteria." },
    { term: "Saprotroph", definition: "An organism that feeds on dead organic matter by secreting enzymes onto it and absorbing the soluble products." },
    { term: "Pathogen", definition: "An organism or virus that causes disease." },
    { term: "Differentiation", definition: "The process by which an unspecialised cell develops the structure and features needed for a particular function." },
    { term: "Stem cell", definition: "An unspecialised cell that can divide to make more cells and can differentiate into specialised cell types." },
    { term: "Magnification", definition: "How many times larger an image is than the real object: image size divided by actual size." },
  ],
  concepts: [
    {
      id: "ebi10-u1-characteristics-variety-organisms",
      title: "Characteristics and variety of living organisms",
      skill: "State the characteristics of living organisms and compare plants, animals, fungi, protoctists, bacteria and viruses.",
      lesson: {
        sections: [
          {
            heading: "Characteristics of living organisms",
            body: "All living organisms show these eight characteristics:\n\n- **nutrition**: taking in materials for energy, growth and development\n- **respiration**: releasing energy from food\n- **excretion**: removing waste products of metabolism\n- **response to surroundings** (sensitivity)\n- **movement**\n- **control of internal conditions**\n- **reproduction**\n- **growth and development**\n\nAn exam answer needs the biological meaning, not just the word. For example, plants move by growing towards light, and excretion is not the same as egestion (removing undigested food).",
          },
          {
            heading: "Eukaryotes: plants, animals, fungi and protoctists",
            body: "**Plants** are multicellular. Their cells have a nucleus, a cellulose cell wall and chloroplasts, and they make food by photosynthesis. They store carbohydrate as starch.\n\n**Animals** are multicellular. Their cells have a nucleus but no cell wall and no chloroplasts. They feed on other organisms, usually have nervous coordination and store carbohydrate as glycogen.\n\n**Fungi** may be single-celled (yeast) or multicellular with thread-like **hyphae**. Their walls are made of **chitin**, they have no chloroplasts, and many feed as **saprotrophs**: they secrete enzymes onto dead matter and absorb the soluble products. They store carbohydrate as glycogen.\n\n**Protoctists** are mostly single-celled eukaryotes. Some have chloroplasts like plants (for example *Chlorella*), others are animal-like (for example *Amoeba*).",
          },
          {
            heading: "Prokaryotes and viruses",
            body: "**Bacteria** are microscopic single-celled prokaryotes. A bacterial cell has a cell wall, cell membrane, cytoplasm and often **plasmids** (small rings of DNA). It has **no nucleus**: its main DNA is circular and lies free in the cytoplasm. Bacteria reproduce rapidly by binary fission, so the number doubles each time the cells divide.\n\n**Viruses** are not cells. Each is a tiny particle with a **protein coat** around genetic material (DNA or RNA). Viruses can reproduce only inside a living host cell, so they are generally not regarded as living organisms.\n\nPathogens (organisms or viruses that cause disease) can be bacteria, fungi, protoctists or viruses.",
          },
        ],
        keyFormulas: [
          { name: "Bacterial population after n divisions", statement: "$\\text{number of bacteria} = \\text{starting number} \\times 2^n$" },
          { name: "Plant cell wall / fungal cell wall", statement: "Plants: cellulose. Fungi: chitin. Bacteria: no nucleus, circular DNA." },
          { name: "Virus", statement: "Non-cellular: protein coat plus DNA or RNA; reproduces only inside host cells." },
        ],
        workedExample: {
          problem: "One bacterium divides every 30 minutes. Assuming unlimited food, how many bacteria are there after 4 hours?",
          solution: "4 hours = 240 minutes, so the number of divisions is $240 \\div 30 = 8$. Number of bacteria $= 1 \\times 2^8 = 256$.",
        },
      },
      questions: [
        {
          id: "ebi10-u1-characteristics-variety-organisms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An organism has multicellular hyphae with cell walls made of chitin and feeds on dead leaves. To which group does it belong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants" },
              { id: "b", text: "Bacteria" },
              { id: "c", text: "Protoctists" },
              { id: "d", text: "Fungi" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fungi", statement: "Fungi have chitin cell walls, are often made of hyphae and many feed saprotrophically on dead organic matter." },
            ],
            steps: [
              { reasoning: "Chitin walls, hyphae and saprotrophic feeding are the features of fungi. Plants have cellulose walls and make their own food.", working: "\\text{fungi}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Fungi",
            commonErrors: ["Choosing plants because the organism grows on leaves and has a cell wall. Plant walls are cellulose and plants photosynthesise."],
            examinerNote: "B1 for fungi.",
          },
        },
        {
          id: "ebi10-u1-characteristics-variety-organisms-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three ways in which a bacterial cell differs from an animal cell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prokaryote", statement: "A prokaryote has no nucleus and no membrane-bound organelles; its DNA is circular and free in the cytoplasm." },
            ],
            steps: [
              { reasoning: "Bacteria have no nucleus, so the genetic material lies free in the cytoplasm, whereas an animal cell has a nucleus.", marks: 1, markCode: "B" },
              { reasoning: "Bacteria have a cell wall, which animal cells do not have.", marks: 1, markCode: "B" },
              { reasoning: "Any one more: bacterial DNA is circular; bacteria may contain plasmids; bacteria have no mitochondria (or other membrane-bound organelles); bacterial cells are much smaller.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No nucleus (DNA free in cytoplasm); has a cell wall; plus one of: circular DNA, plasmids, no mitochondria, smaller.",
            commonErrors: ["Saying bacteria have no DNA. They have DNA, but it is not enclosed in a nucleus.", "Saying only that bacteria are smaller, with no second and third difference."],
            examinerNote: "Any three. Allow 'no membrane-bound organelles'. Ignore 'simpler' on its own. Reject 'bacteria have no genetic material'.",
          },
        },
        {
          id: "ebi10-u1-characteristics-variety-organisms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Viruses are not usually classified as living organisms. Explain why, with reference to the characteristics of living organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Characteristics of life", statement: "A living organism shows nutrition, respiration, excretion, response, movement, control of internal conditions, reproduction and growth." },
              { kind: "property", name: "Viruses", statement: "A virus is a non-cellular particle of genetic material in a protein coat that can only reproduce inside a host cell." },
            ],
            steps: [
              { reasoning: "A virus is not made of cells: it is a protein coat around DNA or RNA.", marks: 1, markCode: "B" },
              { reasoning: "A virus does not carry out processes such as respiration, nutrition or excretion itself.", marks: 1, markCode: "B" },
              { reasoning: "A virus can only reproduce inside a living host cell, using the host's cell machinery.", marks: 1, markCode: "B" },
              { reasoning: "So it does not show all the characteristics of living things on its own, which is why it is not regarded as living.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Non-cellular; no respiration, nutrition or excretion of its own; reproduces only inside a host cell; so does not show all characteristics of life.",
            commonErrors: ["Saying viruses are too small to be alive. Size is not the reason.", "Saying viruses do not reproduce. They do, but only inside a host cell."],
            examinerNote: "Allow 'does not grow' or 'does not respond' for the second mark. The final mark needs a linked conclusion, not a repeat of a previous point.",
          },
        },
        {
          id: "ebi10-u1-characteristics-variety-organisms-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A scientist studies two organisms found in compost.\n\n- Organism R is a single cell with a cell wall. It has no nucleus and its DNA is circular.\n- Organism S is made of thread-like hyphae with chitin cell walls and no chloroplasts. It grows on dead plant material.",
          parts: [
            { label: "a", prompt: "Name the group of organisms to which R belongs and the group to which S belongs.", marks: 2 },
            { label: "b", prompt: "Describe how S obtains its nutrients from dead plant material.", marks: 3 },
            { label: "c", prompt: "R divides by binary fission once every 20 minutes. Assuming unlimited food, calculate the number of bacteria produced from one cell R after 3 hours.", marks: 2 },
            { label: "d", prompt: "Suggest two reasons why the population of R in the compost would not continue to double at this rate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Saprotrophic nutrition", statement: "Saprotrophs secrete enzymes onto dead organic matter and absorb the soluble products of digestion." },
              { kind: "formula", name: "Exponential growth", statement: "$\\text{number} = \\text{starting number} \\times 2^n$, where $n$ is the number of divisions." },
            ],
            steps: [
              { part: "a", reasoning: "No nucleus, circular DNA and a cell wall identify a bacterium.", working: "\\text{R: bacteria}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Chitin walls and hyphae identify a fungus.", working: "\\text{S: fungi}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The fungus secretes (digestive) enzymes onto the dead material.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The enzymes break down large insoluble molecules into small soluble ones (extracellular digestion).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The hyphae absorb the soluble products.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "3 hours is 180 minutes, so there are $180 \\div 20 = 9$ divisions.", working: "\\frac{180}{20} = 9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Each division doubles the number.", working: "1 \\times 2^9 = 512", marks: 1, markCode: "A" },
              { part: "d", reasoning: "First valid reason, for example the nutrients or food run out.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Second valid reason, for example toxic waste products build up, space runs out, or the temperature or oxygen is unsuitable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) R bacteria, S fungi (b) secretes enzymes, digests extracellularly, absorbs soluble products (c) $512$ (d) food runs out; waste products accumulate",
            commonErrors: ["In (c) calculating $9 \\times 2 = 18$ or $180 \\div 2$ instead of $2^9$.", "In (c) using 3 divisions (one per hour).", "Saying the fungus 'eats' the material by taking it into a mouth."],
            examinerNote: "In (a) allow 'bacterium' and 'fungus'; reject 'prokaryote' alone for R unless bacteria is stated. In (c) M1 for 9 divisions, A1 for 512 (allow 2^9 evaluated). Allow ecf for A1 if the number of divisions is wrong but doubling is used. In (d) any two different valid reasons; ignore 'they die'.",
          },
        },
      ],
    },
    {
      id: "ebi10-u1-cell-structure-specialisation-stem-cells",
      title: "Cell structure, specialisation and stem cells",
      skill: "Describe cell organelles, compare plant and animal cells, calculate magnification and evaluate the use of stem cells.",
      lesson: {
        sections: [
          {
            heading: "Organelles and levels of organisation",
            body: "Living things are organised as **organelles, cells, tissues, organs and organ systems**.\n\n- **Nucleus**: contains DNA and controls the activities of the cell.\n- **Cytoplasm**: where most chemical reactions happen.\n- **Cell membrane**: partially permeable, controls what enters and leaves.\n- **Mitochondria**: site of aerobic respiration, releasing energy.\n- **Ribosomes**: site of protein synthesis.\n- **Cell wall** (plants): made of cellulose, strengthens the cell.\n- **Chloroplasts** (plants): contain chlorophyll for photosynthesis.\n- **Permanent vacuole** (plants): filled with cell sap, keeps the cell turgid.\n\nPlant cells have a cell wall, chloroplasts and a large permanent vacuole. Animal cells have none of these, though they may have small temporary vacuoles.",
          },
          {
            heading: "Magnification and specialised cells",
            body: "Magnification is calculated from the size of the image and the real size, both in the **same units**:\n\n$$\\text{magnification} = \\frac{\\text{image size}}{\\text{actual size}}$$\n\nRearranged, actual size = image size $\\div$ magnification. Convert units carefully: $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$.\n\n**Differentiation** is how a cell becomes specialised. Examples: a **root hair cell** has a long extension giving a large surface area and many mitochondria for active transport; a **red blood cell** has no nucleus and is biconcave to carry more oxygen with a large surface area; a **palisade cell** has many chloroplasts packed to absorb light; a **sperm cell** has a tail and many mitochondria for swimming.",
          },
          {
            heading: "Stem cells",
            body: "**Stem cells** are unspecialised cells that can divide and differentiate. **Embryonic stem cells** can become almost any cell type. **Adult stem cells**, for example in bone marrow, can form only some types, such as blood cells. In plants, stem cells are found in **meristems** (for example at the tips of roots and shoots).\n\nUses: treating diseases where cells are damaged, such as some blood disorders (bone marrow transplants), and growing replacement tissue.\n\n**Advantages**: can replace damaged cells and tissues; may treat conditions that are currently incurable.\n\n**Disadvantages**: embryos are destroyed, which some people object to on ethical grounds; cells can grow out of control and form tumours; transplanted cells may be rejected; viruses in donor cells could be transferred; the techniques are difficult and costly.",
          },
        ],
        keyFormulas: [
          { name: "Magnification", statement: "$\\text{magnification} = \\frac{\\text{image size}}{\\text{actual size}}$" },
          { name: "Unit conversion", statement: "$1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$" },
          { name: "Mitochondria and ribosomes", statement: "Mitochondria: aerobic respiration. Ribosomes: protein synthesis." },
        ],
        workedExample: {
          problem: "A drawing of a cell is 45 mm long. The magnification is $\\times 300$. Calculate the actual length of the cell in $\\mu\\text{m}$.",
          solution: "Actual size $= \\frac{45}{300} = 0.15\\text{ mm}$. Convert: $0.15 \\times 1000 = 150\\text{ }\\mu\\text{m}$.",
        },
      },
      questions: [
        {
          id: "ebi10-u1-cell-structure-specialisation-stem-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell structure is the site of aerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribosome" },
              { id: "b", text: "Mitochondrion" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Chloroplast" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitochondria", statement: "Mitochondria are organelles where aerobic respiration takes place, releasing energy." },
            ],
            steps: [
              { reasoning: "Aerobic respiration takes place in the mitochondria. Ribosomes make proteins, the nucleus holds DNA and chloroplasts carry out photosynthesis.", working: "\\text{mitochondrion}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mitochondrion",
            commonErrors: ["Choosing the ribosome, which makes proteins and does not release energy.", "Choosing the chloroplast, confusing respiration with photosynthesis."],
            examinerNote: "B1 for mitochondrion.",
          },
        },
        {
          id: "ebi10-u1-cell-structure-specialisation-stem-cells-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A micrograph shows a plant cell with an image length of 36 mm. The real length of the cell is 0.12 mm. Calculate the magnification of the micrograph.",
          response: { type: "numeric", parts: [{ label: "Magnification", answer: 300 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnification", statement: "$\\text{magnification} = \\frac{\\text{image size}}{\\text{actual size}}$" },
            ],
            steps: [
              { reasoning: "Divide the image size by the actual size. Both are already in millimetres.", working: "\\text{magnification} = \\frac{36}{0.12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. Magnification has no unit.", working: "300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times 300$",
            commonErrors: ["Dividing actual size by image size to get 0.0033.", "Not matching units before dividing."],
            examinerNote: "M1 for correct substitution. A1 for 300 (allow $\\times$300). Allow correct answers from conversion to micrometres, for example 36000 / 120.",
          },
        },
        {
          id: "ebi10-u1-cell-structure-specialisation-stem-cells-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the structure of a root hair cell makes it well adapted for taking in water and mineral ions from the soil.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and function", statement: "Specialised cells have features that increase the rate of the process they carry out." },
              { kind: "principle", name: "Osmosis and active transport", statement: "Water enters by osmosis from a dilute to a more concentrated solution; mineral ions are taken up by active transport against a concentration gradient, using energy from respiration." },
            ],
            steps: [
              { reasoning: "The long, thin extension gives a large surface area for absorption.", marks: 1, markCode: "B" },
              { reasoning: "The cell sap in the vacuole has a higher concentration of solutes than the soil water, so water enters by osmosis.", marks: 1, markCode: "B" },
              { reasoning: "The cell has many mitochondria, which release energy by respiration.", marks: 1, markCode: "B" },
              { reasoning: "This energy is used for active transport of mineral ions into the cell against their concentration gradient.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Large surface area from the extension; concentrated cell sap so water enters by osmosis; many mitochondria supply energy for active transport of mineral ions.",
            commonErrors: ["Saying the root hair cell has chloroplasts. It is underground and has none.", "Saying water enters by active transport."],
            examinerNote: "Allow 'thin cell wall so short diffusion distance' for the first mark if surface area has not been credited. The final mark needs the link from energy to active transport.",
          },
        },
        {
          id: "ebi10-u1-cell-structure-specialisation-stem-cells-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A patient with a blood disorder receives a bone marrow transplant. The bone marrow contains stem cells that make new red blood cells. A technician views a red blood cell in a micrograph. The image of the cell is 28 mm across and the magnification is $\\times 4000$.",
          parts: [
            { label: "a", prompt: "Explain what is meant by differentiation.", marks: 2 },
            { label: "b", prompt: "Name the type of stem cell found in bone marrow and name one place where stem cells are found in a plant.", marks: 2 },
            { label: "c", prompt: "Calculate the actual diameter of the red blood cell. Give your answer in micrometres ($\\mu\\text{m}$).", marks: 2 },
            { label: "d", prompt: "Evaluate the use of embryonic stem cells to treat disease by giving one advantage and two disadvantages.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Differentiation", statement: "Differentiation is the process by which an unspecialised cell becomes a specialised cell with a structure suited to its function." },
              { kind: "formula", name: "Magnification", statement: "$\\text{actual size} = \\frac{\\text{image size}}{\\text{magnification}}$, and $1\\text{ mm} = 1000\\text{ }\\mu\\text{m}$." },
            ],
            steps: [
              { part: "a", reasoning: "An unspecialised cell changes (develops) into a specialised cell.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The cell gains a structure suited to a particular function, because different genes are switched on or off.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Stem cells in bone marrow are adult stem cells.", working: "\\text{adult stem cell}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In plants, stem cells are found in meristems, for example root tips or shoot tips.", working: "\\text{meristem}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the image size by the magnification, giving millimetres.", working: "\\frac{28}{4000} = 0.007\\text{ mm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to micrometres by multiplying by 1000.", working: "0.007 \\times 1000 = 7\\text{ }\\mu\\text{m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "One advantage, for example they can differentiate into almost any cell type to replace damaged tissue, or may treat currently incurable conditions.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "One disadvantage, for example embryos are destroyed (ethical objections).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A second different disadvantage, for example risk of tumours, risk of rejection, or transfer of viruses.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) unspecialised cell develops structure for a specific function (b) adult stem cell; meristem (c) $7\\text{ }\\mu\\text{m}$ (d) e.g. can become any cell type; embryo destroyed; risk of tumours",
            commonErrors: ["In (c) multiplying 28 by 4000 instead of dividing.", "In (c) giving 0.007 without converting to micrometres.", "In (d) giving two points that are the same idea, such as 'unethical' and 'people disagree'."],
            examinerNote: "In (c) allow 7 with the unit; 0.007 mm earns M1 only unless the unit is clearly mm and then converted. In (d) ignore vague answers like 'it is risky'. Allow 'bone marrow' for part (b) only if 'adult' is given.",
          },
        },
      ],
    },
  ],
};
