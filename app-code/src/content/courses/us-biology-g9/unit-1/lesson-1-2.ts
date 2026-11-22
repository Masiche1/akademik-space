import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "bio9-u1-lesson-1-2",
  code: "1-2",
  title: "Cell Structure and Transport",
  goal: "I CAN compare prokaryotic and eukaryotic cells, explain how organelles work together, and explain how substances cross the membrane and why cell size is limited by surface area to volume ratio.",
  standards: ["HS-LS1-2", "HS-LS1-3", "CCC: Scale, Proportion, and Quantity", "SEP: Developing and Using Models"],
  vocabulary: [
    { term: "Prokaryote", definition: "An organism whose cells have no nucleus or membrane-bound organelles, such as a bacterium." },
    { term: "Eukaryote", definition: "An organism whose cells have a nucleus and membrane-bound organelles, such as plants, animals, fungi and protists." },
    { term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to a region of lower concentration, with no energy input." },
    { term: "Osmosis", definition: "The diffusion of water across a selectively permeable membrane from a region of higher water potential to lower water potential." },
    { term: "Active transport", definition: "The movement of substances across a membrane against their concentration gradient, using ATP and carrier proteins." },
    { term: "Surface area to volume ratio", definition: "The total surface area of a cell divided by its volume; it falls as the cell gets larger." },
  ],
  concepts: [
    {
      id: "bio9-u1-cell-types-organelles",
      title: "Prokaryotic and eukaryotic cells",
      skill: "Compare cell types and explain how organelles work together.",
      lesson: {
        sections: [
          {
            heading: "Two kinds of cells",
            body: "**Prokaryotic** cells (bacteria and archaea) are small, usually $1$ to $5\\ \\mu\\text{m}$. Their DNA is a single circular chromosome in a region called the nucleoid, not enclosed by a membrane. They have ribosomes but no membrane-bound organelles, and most have a cell wall.\n\n**Eukaryotic** cells are larger, usually $10$ to $100\\ \\mu\\text{m}$. Their DNA is linear and enclosed in a **nucleus**, and they have membrane-bound organelles. Compartments let different reactions happen in different places at the same time.",
          },
          {
            heading: "Organelles working together",
            body: "Cell organelles act as a system. Take a secreted protein such as insulin:\n\n- The **nucleus** holds the gene (DNA) and sends instructions as mRNA.\n- **Ribosomes** on the **rough endoplasmic reticulum** build the protein.\n- Vesicles carry it to the **Golgi apparatus**, which modifies, sorts and packages it.\n- A vesicle fuses with the **cell membrane** and releases the protein outside.\n- **Mitochondria** supply the ATP needed throughout.\n\nOther organelles: lysosomes digest waste; chloroplasts (plants) carry out photosynthesis.",
          },
        ],
        keyFormulas: [
          { name: "Prokaryote", statement: "No nucleus, no membrane-bound organelles, circular DNA, 70S ribosomes" },
          { name: "Eukaryote", statement: "Nucleus and membrane-bound organelles, linear DNA" },
          { name: "Protein secretion pathway", statement: "Nucleus, rough ER, Golgi apparatus, vesicle, cell membrane" },
        ],
        workedExample: {
          problem: "A bacterium is $2\\ \\mu\\text{m}$ long. A human cheek cell is $60\\ \\mu\\text{m}$ across. How many times wider is the cheek cell?",
          solution: "$\\dfrac{60}{2}=30$. The cheek cell is 30 times wider than the bacterium.",
        },
      },
      questions: [
        {
          id: "bio9-u1-cell-types-organelles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes a prokaryotic cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has DNA but no membrane-bound nucleus" },
              { id: "b", text: "Its DNA is enclosed inside a nuclear membrane" },
              { id: "c", text: "It is always larger than a eukaryotic cell" },
              { id: "d", text: "It contains mitochondria and a Golgi apparatus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Prokaryote", statement: "Prokaryotes lack a nucleus and membrane-bound organelles." }],
            steps: [{ reasoning: "Prokaryotic DNA lies in the cytoplasm (nucleoid) with no membrane around it.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** It has DNA but no membrane-bound nucleus",
            commonErrors: ["Thinking bacteria have no DNA.", "Thinking all cells have mitochondria."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "bio9-u1-cell-types-organelles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A typical bacterial cell is $2\\ \\mu\\text{m}$ in diameter and a typical plant cell is $50\\ \\mu\\text{m}$ in diameter.\n\nCalculate how many times larger the diameter of the plant cell is than the bacterial cell.",
          response: { type: "numeric", parts: [{ label: "Times larger", answer: 25 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Ratio", statement: "ratio = larger value divided by smaller value" }],
            steps: [
              { reasoning: "Divide the plant cell diameter by the bacterial diameter (same units).", working: "\\frac{50}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 times",
            commonErrors: ["Subtracting the diameters to give 48.", "Dividing the other way to give 0.04."],
            examinerNote: "M1 for 50 / 2. A1 for 25.",
          },
        },
        {
          id: "bio9-u1-cell-types-organelles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pancreatic cell makes and secretes the protein hormone insulin.\n\nDescribe the pathway of insulin through the cell, naming the organelles involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Secretory pathway", statement: "Proteins made on the rough ER are packaged by the Golgi apparatus and exported in vesicles." },
              { kind: "definition", name: "Ribosome", statement: "Ribosomes build proteins from amino acids using mRNA." },
            ],
            steps: [
              { reasoning: "The nucleus provides the instructions (mRNA copied from the gene).", marks: 1, markCode: "B" },
              { reasoning: "Ribosomes on the rough ER make the protein.", marks: 1, markCode: "B" },
              { reasoning: "A vesicle carries it to the Golgi apparatus, which modifies and packages it.", marks: 1, markCode: "B" },
              { reasoning: "A vesicle fuses with the cell membrane and releases insulin by exocytosis.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Nucleus (mRNA) to ribosomes on rough ER, vesicle to Golgi apparatus, vesicle to cell membrane and out by exocytosis.",
            commonErrors: ["Leaving out the Golgi apparatus.", "Saying mitochondria make the protein."],
            examinerNote: "Allow 'secretory vesicle' for vesicle. Ignore mention of mitochondria supplying ATP.",
          },
        },
        {
          id: "bio9-u1-cell-types-organelles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A researcher examines two cell samples. Cell X has a diameter of $1.5\\ \\mu\\text{m}$, no nucleus and a circular chromosome. Cell Y has a diameter of $30\\ \\mu\\text{m}$, a nucleus, mitochondria and a Golgi apparatus.",
          parts: [
            { label: "a", prompt: "Identify which cell is eukaryotic and give one piece of evidence.", marks: 2 },
            { label: "b", prompt: "Calculate how many times greater the diameter of Cell Y is than Cell X.", marks: 2 },
            { label: "c", prompt: "State the function of the mitochondria in Cell Y.", marks: 1 },
            { label: "d", prompt: "Explain one advantage of having membrane-bound organelles.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eukaryote", statement: "Eukaryotic cells have a nucleus and membrane-bound organelles." },
              { kind: "definition", name: "Mitochondria", statement: "Mitochondria carry out aerobic respiration to make ATP." },
              { kind: "principle", name: "Compartmentalization", statement: "Membranes separate reactions so that different conditions can be maintained in different places." },
            ],
            steps: [
              { part: "a", reasoning: "Cell Y is eukaryotic.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Evidence: it has a nucleus (or mitochondria or Golgi), which Cell X lacks.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Divide the larger diameter by the smaller.", working: "\\frac{30}{1.5}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=20", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Aerobic respiration, releasing energy as ATP.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Different reactions need different conditions (for example pH), which a compartment can keep.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reactions happen at the same time without interfering with each other, such as lysosome enzymes kept away from the cytoplasm.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "This makes processes more efficient, as enzymes and substrates are concentrated in a small volume.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Cell Y; it has a nucleus (b) 20 times (c) Aerobic respiration to release energy as ATP (d) Compartments keep separate conditions and concentrate reactants, so reactions are efficient and do not interfere.",
            commonErrors: ["Choosing Cell X because it is smaller and 'simpler' without evidence.", "In (b) giving 0.05 by dividing the wrong way round."],
            examinerNote: "(a) Second mark needs evidence stated; reject 'larger' on its own. (c) Reject 'makes energy' without respiration unless ATP is mentioned. (d) Any valid advantage with development for 3 marks.",
          },
        },
      ],
    },
    {
      id: "bio9-u1-membrane-transport",
      title: "Membrane transport and surface area to volume ratio",
      skill: "Distinguish diffusion, osmosis and active transport, and use surface area to volume ratio.",
      lesson: {
        sections: [
          {
            heading: "The cell membrane and transport",
            body: "The cell membrane is a **phospholipid bilayer** with embedded proteins. It is selectively permeable: small nonpolar molecules such as $\\text{O}_2$ pass through, while ions and large polar molecules need channel or carrier proteins.\n\n- **Diffusion**: down a concentration gradient, no energy. **Facilitated diffusion** uses channel proteins.\n- **Osmosis**: water diffuses across the membrane towards the side with more dissolved solute. In a hypotonic solution a cell gains water; in a hypertonic solution it loses water.\n- **Active transport**: against the gradient, using ATP and carrier proteins, for example sodium-potassium pumps.",
          },
          {
            heading: "Surface area to volume ratio",
            body: "Materials enter a cell across its surface, but the needs of a cell depend on its volume. As a cell grows, volume increases faster than surface area, so the ratio falls and diffusion becomes too slow. This limits cell size.\n\nFor a cube of side $L$: surface area $=6L^2$, volume $=L^3$, so the ratio $=\\dfrac{6}{L}$.\n\nAdaptations that increase surface area, such as microvilli and root hairs, speed up exchange.",
          },
        ],
        keyFormulas: [
          { name: "Cube surface area and volume", statement: "$SA=6L^2$, $V=L^3$" },
          { name: "SA:V ratio", statement: "$\\dfrac{SA}{V}=\\dfrac{6}{L}$ for a cube" },
          { name: "Percent change in mass", statement: "$\\dfrac{\\text{final}-\\text{initial}}{\\text{initial}}\\times100$" },
        ],
        workedExample: {
          problem: "A cube-shaped cell has sides of 3 $\\mu$m. Calculate its surface area to volume ratio.",
          solution: "$SA=6\\times3^2=54\\ \\mu\\text{m}^2$. $V=3^3=27\\ \\mu\\text{m}^3$. Ratio $=\\dfrac{54}{27}=2$, or $2:1$.",
        },
      },
      questions: [
        {
          id: "bio9-u1-membrane-transport-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process moves a substance against its concentration gradient and requires ATP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Facilitated diffusion" },
              { id: "b", text: "Osmosis" },
              { id: "c", text: "Simple diffusion" },
              { id: "d", text: "Active transport" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Active transport", statement: "Active transport moves substances against the gradient using ATP." }],
            steps: [{ reasoning: "Only active transport needs energy to move a substance from low to high concentration.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Active transport",
            commonErrors: ["Choosing facilitated diffusion because it uses proteins; it does not use ATP."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "bio9-u1-membrane-transport-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cube-shaped cell has sides of 4 $\\mu$m.\n\nCalculate the surface area to volume ratio of the cell. Give your answer as a single number (surface area divided by volume).",
          response: { type: "numeric", parts: [{ label: "SA:V ratio", answer: 1.5, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cube", statement: "$SA=6L^2$ and $V=L^3$" }],
            steps: [
              { reasoning: "Surface area has 6 faces.", working: "SA=6\\times4^2=96\\ \\mu\\text{m}^2", marks: 1, markCode: "M" },
              { reasoning: "Volume of the cube.", working: "V=4^3=64\\ \\mu\\text{m}^3", marks: 1, markCode: "M" },
              { reasoning: "Divide.", working: "\\frac{96}{64}=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5 (that is 1.5 : 1)",
            commonErrors: ["Using only one face (16) for surface area.", "Dividing volume by surface area to give 0.67."],
            examinerNote: "M1 for 96. M1 for 64. A1 for 1.5. Allow 1.5:1 or 3:2.",
          },
        },
        {
          id: "bio9-u1-membrane-transport-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student places a potato cylinder of mass 5.0 g in pure water. After 60 minutes its mass is 5.6 g.\n\nCalculate the percent change in mass, and explain the change using water potential.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent change", statement: "$\\dfrac{\\text{final}-\\text{initial}}{\\text{initial}}\\times100$" },
              { kind: "principle", name: "Osmosis", statement: "Water moves across a selectively permeable membrane to the region with lower water potential (more solute)." },
            ],
            steps: [
              { reasoning: "Calculate the percent change.", working: "\\frac{5.6-5.0}{5.0}\\times100=12\\%", marks: 2, markCode: "A" },
              { reasoning: "Pure water has a higher water potential than the potato cells, so water moves into the cells by osmosis.", marks: 1, markCode: "B" },
              { reasoning: "The extra water increases the mass.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A 12% increase in mass; water entered the potato cells by osmosis from higher to lower water potential.",
            commonErrors: ["Dividing by the final mass (10.7%).", "Saying solutes moved out of the potato."],
            examinerNote: "A2 for 12 (A1 for 0.6 / 5.0 seen). Allow +12. Allow 'cells are hypertonic to the water' for the explanation.",
          },
        },
        {
          id: "bio9-u1-membrane-transport-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two cube-shaped model cells are compared. Cell A has sides of 2 mm and Cell B has sides of 4 mm.",
          parts: [
            { label: "a", prompt: "Calculate the surface area to volume ratio of Cell A.", marks: 2 },
            { label: "b", prompt: "Calculate the surface area to volume ratio of Cell B.", marks: 2 },
            { label: "c", prompt: "Explain why a larger cell has more difficulty obtaining enough oxygen by diffusion.", marks: 2 },
            { label: "d", prompt: "Intestinal cells have microvilli. Explain how this helps absorption.", marks: 1 },
            { label: "e", prompt: "Glucose is absorbed from the intestine into cells at a concentration already higher inside the cell than outside. Name the process and explain how you know.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cube", statement: "$SA=6L^2$, $V=L^3$, ratio $=6/L$" },
              { kind: "principle", name: "Diffusion limit", statement: "Larger cells have a smaller SA:V ratio, so exchange is slower relative to demand." },
              { kind: "definition", name: "Active transport", statement: "Movement against a concentration gradient using ATP." },
            ],
            steps: [
              { part: "a", reasoning: "SA = 6 x 4 = 24 mm$^2$ and V = 8 mm$^3$.", working: "\\frac{24}{8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "SA = 6 x 16 = 96 mm$^2$ and V = 64 mm$^3$.", working: "\\frac{96}{64}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=1.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Volume (oxygen demand) increases faster than surface area, so the SA:V ratio falls.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Less surface per unit volume and a longer diffusion distance, so the supply is too slow for the cell's needs.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Microvilli increase the surface area for absorption.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Active transport.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Glucose moves against its concentration gradient (low to high), which requires ATP and carrier proteins.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 3 (b) 1.5 (c) Volume rises faster than surface area, so the ratio falls and diffusion is too slow (d) More surface area (e) Active transport, as glucose moves against its gradient.",
            commonErrors: ["Using surface area of one face.", "Saying larger cells have 'less' surface area.", "Choosing facilitated diffusion in (e)."],
            examinerNote: "(a), (b) Allow 3:1 and 1.5:1. (c) Allow oe. (e) Allow ecf only if the process matches the reason given.",
          },
        },
      ],
    },
  ],
};
