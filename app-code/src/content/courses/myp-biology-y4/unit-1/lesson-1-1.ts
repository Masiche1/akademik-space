import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypb4-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Structure and Classification",
  goal: "I CAN identify cell structures in plant and animal cells, explain their functions, and use classification systems to group organisms.",
  standards: [
    "Key concept: Systems",
    "MYP Sciences: Living things",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Nucleus", definition: "The control centre of the cell containing DNA; surrounded by a nuclear envelope with pores." },
    { term: "Mitochondrion", definition: "The site of aerobic respiration; has a double membrane with folded inner membrane (cristae)." },
    { term: "Ribosome", definition: "Tiny structures that synthesise proteins; found free in cytoplasm or attached to rough ER." },
    { term: "Chloroplast", definition: "Plant cell organelle containing chlorophyll; site of photosynthesis." },
    { term: "Cell membrane", definition: "Partially permeable phospholipid bilayer that controls what enters and leaves the cell." },
    { term: "Classification", definition: "The scientific grouping of organisms into kingdoms, phyla, classes, orders, families, genera and species." },
  ],
  concepts: [
    {
      id: "mypb4-u1-cell-structure",
      title: "Cell ultrastructure",
      skill: "Identify and describe the functions of organelles in plant and animal cells.",
      lesson: {
        sections: [
          {
            heading: "Common structures",
            body: "Both plant and animal cells have: **nucleus** (controls cell, holds DNA), **cytoplasm** (site of reactions), **cell membrane** (controls entry/exit), **mitochondria** (respiration), **ribosomes** (protein synthesis). Plant cells additionally have **cell wall** (support, cellulose), **chloroplasts** (photosynthesis), and a large **vacuole** (storage, turgor).",
          },
          {
            heading: "Specialised organelles",
            body: "**Rough ER** (studded with ribosomes) processes proteins; **smooth ER** makes lipids and detoxifies; **Golgi apparatus** modifies, packages and secretes proteins; **lysosomes** contain digestive enzymes.",
          },
          {
            heading: "Structure-function link",
            body: "Each organelle's structure relates to its function: cristae increase surface area for respiration; chloroplasts are stacked (grana) to maximise light capture; the cell wall gives rigidity without energy cost.",
          },
        ],
        keyFormulas: [
          { name: "Plant only", statement: "Cell wall, chloroplasts, large permanent vacuole" },
          { name: "Energy organelle", statement: "Mitochondrion = site of aerobic respiration" },
          { name: "Protein synthesis", statement: "Ribosomes + rough ER → Golgi → secretion" },
        ],
        workedExample: {
          problem: "Why do muscle cells contain many mitochondria?",
          solution: "Muscle contraction requires lots of ATP from aerobic respiration; more mitochondria = more ATP production capacity.",
        },
      },
      questions: [
        {
          id: "mypb4-u1-cell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure is found only in plant cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Mitochondrion" },
              { id: "c", text: "Chloroplast" },
              { id: "d", text: "Cell membrane" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant cell features", statement: "Chloroplasts, cell wall and large vacuole are plant-only." },
            ],
            steps: [
              { reasoning: "Chloroplasts contain chlorophyll for photosynthesis — absent in animal cells.", working: "\\text{chloroplast}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Chloroplast",
            commonErrors: ["Choosing cell wall — also plant-only but chloroplast is the clearer answer."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypb4-u1-cell-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of the mitochondrion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis" },
              { id: "b", text: "Aerobic respiration and ATP production" },
              { id: "c", text: "Protein synthesis" },
              { id: "d", text: "Cell division" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mitochondrion", statement: "Site of aerobic respiration; produces ATP." },
            ],
            steps: [
              { reasoning: "Mitochondria carry out aerobic respiration releasing energy as ATP.", working: "\\text{respiration}", marks: 1, markCode: "M" },
              { reasoning: "State the function.", working: "ATP\\text{ production}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aerobic respiration / ATP production",
            commonErrors: ["Confusing with chloroplast (photosynthesis)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student observes a cell with a cell wall, chloroplasts and a large vacuole under a microscope. What type of cell is it and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plant cell — these three structures are unique to plant cells" },
              { id: "b", text: "Animal cell — all cells have these" },
              { id: "c", text: "Bacterial cell — no nucleus needed" },
              { id: "d", text: "Fungal cell — has a cell wall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Identification", statement: "Cell wall + chloroplasts + large vacuole = plant cell." },
            ],
            steps: [
              { reasoning: "All three features together are diagnostic of plant cells.", working: "\\text{plant cell}", marks: 1, markCode: "M" },
              { reasoning: "Chloroplasts indicate photosynthetic plant tissue.", working: "\\text{photosynthesis}", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", working: "\\text{plant cell}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plant cell",
            commonErrors: ["Fungal cells have walls but no chloroplasts."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare plant and animal cells.",
          parts: [
            { label: "a", prompt: "List three structures found only in plant cells.", marks: 2 },
            { label: "b", prompt: "List three structures common to both cell types.", marks: 2 },
            { label: "c", prompt: "Explain why a root hair cell has no chloroplasts.", marks: 2 },
            { label: "d", prompt: "Suggest why muscle cells contain many mitochondria.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell biology", statement: "Structure relates to function and environment." },
            ],
            steps: [
              { part: "a", reasoning: "Cell wall, chloroplasts, large permanent vacuole.", working: "\\text{wall,chloroplasts,vacuole}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All three listed.", working: "\\text{3 features}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nucleus, mitochondria, cell membrane, cytoplasm, ribosomes.", working: "\\text{common structures}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three or more correct.", working: "\\text{3+}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Root hairs are underground — no light for photosynthesis, so chloroplasts unnecessary.", working: "\\text{no light}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Structure-function explanation.", working: "\\text{no photosynthesis}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Muscle contraction needs large amounts of ATP from aerobic respiration.", working: "\\text{ATP demand}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Link mitochondria to energy needs.", working: "\\text{many mitochondria}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plant-only: wall, chloroplasts, vacuole; common: nucleus, mitochondria, membrane; root hair: no light; muscle: high ATP demand",
            commonErrors: ["In (c), saying chloroplasts are 'dead' — they're absent because unneeded."],
            examinerNote: "A1 A1 for (a), A1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u1-cell-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle is the site of protein synthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Ribosome" },
              { id: "c", text: "Lysosome" },
              { id: "d", text: "Vacuole" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ribosome", statement: "Tiny structures that synthesise proteins; free in cytoplasm or on rough ER." },
            ],
            steps: [
              { reasoning: "Ribosomes build proteins — they are the site of protein synthesis.", working: "\\text{ribosome}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ribosome",
            commonErrors: ["Choosing nucleus — it stores DNA but does not synthesise protein."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypb4-u1-cell-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pair of structures is found ONLY in plant cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus and mitochondrion" },
              { id: "b", text: "Cell wall and chloroplast" },
              { id: "c", text: "Cell membrane and cytoplasm" },
              { id: "d", text: "Ribosome and vacuole" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plant-only structures", statement: "Cell wall, chloroplasts and large permanent vacuole are unique to plant cells." },
            ],
            steps: [
              { reasoning: "Cell wall and chloroplasts are both absent from animal cells.", working: "\\text{wall+chloroplast}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{plant only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell wall and chloroplast",
            commonErrors: ["Vacuoles exist in animal cells too — only the large permanent vacuole is plant-specific."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A macrophage engulfs bacteria and digests them inside vesicles. Which organelle most directly carries out this digestion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Mitochondrion" },
              { id: "c", text: "Lysosome" },
              { id: "d", text: "Chloroplast" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lysosome", statement: "Contains digestive enzymes that break down engulfed material and worn-out organelles." },
            ],
            steps: [
              { reasoning: "Lysosomes contain hydrolytic (digestive) enzymes.", working: "\\text{enzymes}", marks: 1, markCode: "M" },
              { reasoning: "They fuse with phagosomes to digest engulfed bacteria.", working: "\\text{phagosome}", marks: 1, markCode: "M" },
              { reasoning: "State the organelle.", working: "\\text{lysosome}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lysosome",
            commonErrors: ["Choosing mitochondrion — it releases energy, not digestion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student compares a leaf cell and a cheek (animal) cell. (a) How many of these structures are found ONLY in plant cells: cell wall, chloroplast, large permanent vacuole? (b) How many are found in BOTH cell types: nucleus, mitochondrion, cell membrane?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cell comparison", statement: "Plant-only: wall, chloroplasts, large vacuole; both: nucleus, mitochondria, membrane." },
            ],
            steps: [
              { reasoning: "Cell wall, chloroplast and large vacuole = 3 plant-only structures.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Nucleus, mitochondrion and cell membrane = 3 shared structures.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 3",
            commonErrors: ["Counting the small vacuole in animal cells as plant-only."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student examines 80 leaf cells under a light microscope; 65 contain visible chloroplasts and the rest do not. (a) How many cells did NOT contain chloroplasts? (b) What percentage of the cells contained chloroplasts?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
              { label: "b", answer: 81.25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = (part / total) x 100." },
            ],
            steps: [
              { reasoning: "80 - 65 = 15 cells lacked chloroplasts.", working: "80-65=15", marks: 1, markCode: "M" },
              { reasoning: "Percentage = $\\frac{65}{80} \\times 100$.", working: "\\frac{65}{80}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Percentage = 81.25%.", working: "81.25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 15, b) 81.25%",
            commonErrors: ["Using 15 instead of 65 in the percentage calculation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Model a root hair cell as a cylinder of length $1000\\ \\mu\\text{m}$ and diameter $10\\ \\mu\\text{m}$. (a) Calculate the circumference in $\\mu\\text{m}$ (use $\\pi \\approx 3.14$). (b) Calculate the lateral surface area in $\\mu\\text{m}^2$. (c) Calculate the total surface area including both ends in $\\mu\\text{m}^2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 31.4 },
              { label: "b", answer: 31400 },
              { label: "c", answer: 31557 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder surface area", statement: "$C = \\pi d$; lateral area $= C \\times l$; ends $= 2\\pi r^2$ each." },
            ],
            steps: [
              { reasoning: "Circumference $= \\pi d = 3.14 \\times 10 = 31.4\\ \\mu\\text{m}$.", working: "3.14\\times10=31.4", marks: 1, markCode: "M" },
              { reasoning: "Lateral area $= 31.4 \\times 1000 = 31400\\ \\mu\\text{m}^2$.", working: "31.4\\times1000", marks: 1, markCode: "M" },
              { reasoning: "Each end: $\\pi r^2 = 3.14 \\times 25 = 78.5$; two ends $= 157$.", working: "2\\times78.5=157", marks: 1, markCode: "M" },
              { reasoning: "Total $= 31400 + 157 = 31557\\ \\mu\\text{m}^2$.", working: "31400+157=31557", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 31.4, b) 31400, c) 31557 $\\mu\\text{m}^2$",
            commonErrors: ["Forgetting the two circular ends in part (c)."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many of these organelles are present in BOTH plant and animal cells: nucleus, chloroplast, cell wall, mitochondrion, cell membrane?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shared organelles", statement: "Nucleus, mitochondria, ribosomes, cell membrane and cytoplasm occur in both cell types." },
            ],
            steps: [
              { reasoning: "Nucleus, mitochondrion and cell membrane are shared; chloroplast and cell wall are plant-only.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting chloroplast or cell wall."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u1-cell-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a section of leaf, 30% of the cells are palisade mesophyll cells. In a sample of 400 cells, (a) how many are palisade cells and (b) how many are other cell types?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 120 },
              { label: "b", answer: 280 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of sample", statement: "Part = percentage / 100 x total." },
            ],
            steps: [
              { reasoning: "Palisade cells $= 0.30 \\times 400 = 120$.", working: "0.3\\times400=120", marks: 1, markCode: "M" },
              { reasoning: "Other cells $= 400 - 120 = 280$.", working: "400-120=280", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 120, b) 280",
            commonErrors: ["Calculating 30% of 400 as 30 instead of 120."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "One mitochondrion in a muscle cell can produce about 30 ATP per glucose molecule respired aerobically. If a muscle cell contains 800 mitochondria and each respires 2 glucose molecules per minute: (a) How many ATP does one mitochondrion produce per minute? (b) How many ATP does the whole cell produce per minute?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60 },
              { label: "b", answer: 48000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ATP yield", statement: "ATP/min = ATP per glucose x glucose per mitochondrion x mitochondria count." },
            ],
            steps: [
              { reasoning: "Per mitochondrion: $30 \\times 2 = 60$ ATP per minute.", working: "30\\times2=60", marks: 1, markCode: "M" },
              { reasoning: "Whole cell: $60 \\times 800 = 48000$ ATP per minute.", working: "60\\times800", marks: 1, markCode: "M" },
              { reasoning: "State the total.", working: "48000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 60, b) 48000 ATP",
            commonErrors: ["Multiplying by 800 before finding per-mitochondrion yield."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-cell-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Compare a mature red blood cell and a typical plant cell.",
          parts: [
            { label: "a", prompt: "Name one structure found only in the plant cell.", marks: 1 },
            { label: "b", prompt: "State one feature of a mature red blood cell.", marks: 1 },
            { label: "c", prompt: "Name one organelle present in both cells.", marks: 1 },
            { label: "d", prompt: "State one difference between the two cells.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cell diversity", statement: "Specialised cells differ in structure according to function." },
            ],
            steps: [
              { part: "a", reasoning: "Chloroplast, cell wall or large vacuole.", working: "\\text{plant only}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "No nucleus; contains haemoglobin; biconcave disc shape.", working: "\\text{no nucleus}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cell membrane, mitochondrion or ribosome.", working: "\\text{shared}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. plant cell has nucleus and cell wall; RBC lacks both.", working: "\\text{difference}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Plant-only: chloroplast/wall/vacuole; RBC: no nucleus; shared: membrane/mitochondria; difference: nucleus presence",
            commonErrors: ["In (c), naming chloroplast which RBCs lack."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-cell-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how the structure of three specialised cells relates to their function.",
          parts: [
            { label: "a", prompt: "Palisade mesophyll cell", marks: 2 },
            { label: "b", prompt: "Xylem vessel", marks: 2 },
            { label: "c", prompt: "Motor neurone", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure-function", statement: "Cell structure is adapted to its role in the organism." },
            ],
            steps: [
              { part: "a", reasoning: "Packed with chloroplasts near upper surface for maximum light absorption.", working: "\\text{chloroplasts}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Column shape maximises photosynthetic area.", working: "\\text{columnar}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dead, hollow tube with lignified walls — no obstruction to water flow.", working: "\\text{hollow tube}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lignin strengthens walls to withstand transpiration pull.", working: "\\text{lignin}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Long axon conducts impulse over distance; myelin speeds transmission.", working: "\\text{axon+myelin}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dendrites receive signals from other neurones.", working: "\\text{dendrites}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Palisade: chloroplasts+shape for photosynthesis; xylem: hollow lignified tube for water; neurone: axon+myelin for fast impulse",
            commonErrors: ["Describing functions without linking to structure."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-cell-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student claims that every cell in the human body contains a nucleus. Which observation disproves this claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mature red blood cells have no nucleus" },
              { id: "b", text: "Plant cells contain chloroplasts" },
              { id: "c", text: "Some cells have a cellulose wall" },
              { id: "d", text: "Some cells have a large vacuole" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exceptions to nucleus rule", statement: "Mature mammalian red blood cells and xylem vessels lack nuclei." },
            ],
            steps: [
              { reasoning: "Enucleated RBCs carry more haemoglobin — a direct counterexample.", working: "\\text{RBC no nucleus}", marks: 1, markCode: "M" },
              { reasoning: "Other options do not address the nucleus claim.", working: "\\text{irrelevant}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Mature red blood cells have no nucleus",
            commonErrors: ["Choosing chloroplasts — that disproves 'all cells are animal-like', not the nucleus claim."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u1-classification",
      title: "Classification and Dichotomous Keys",
      skill: "Use classification hierarchy and dichotomous keys to identify and group organisms.",
      lesson: {
        sections: [
          {
            heading: "The classification hierarchy",
            body: "Organisms are grouped: **Kingdom → Phylum → Class → Order → Family → Genus → Species**. Each level is more specific. The scientific name is *Genus species* (binomial nomenclature), e.g. *Homo sapiens*.",
          },
          {
            heading: "Dichotomous keys",
            body: "A key uses paired statements ('has/does not have') to identify an organism step by step. At each step choose the description that matches, leading to the next pair until a name is reached. Always start at question 1.",
          },
          {
            heading: "Why classify?",
            body: "Classification organises biodiversity, shows evolutionary relationships, and provides a universal naming system so scientists worldwide refer to the same organism unambiguously.",
          },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "Kingdom, Phylum, Class, Order, Family, Genus, Species" },
          { name: "Binomial name", statement: "*Genus species* — italicised, genus capitalised" },
          { name: "Key use", statement: "Answer paired questions in sequence" },
        ],
        workedExample: {
          problem: "Use a key: 1a has wings → 2; 1b no wings → 3. 2a two pairs wings → butterfly; 2b one pair → fly. Identify an insect with one pair of wings.",
          solution: "1a → 2; 2b → fly.",
        },
      },
      questions: [
        {
          id: "mypb4-u1-class-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of classification levels from broadest to most specific?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kingdom, Phylum, Class, Order, Family, Genus, Species" },
              { id: "b", text: "Species, Genus, Family, Order, Class, Phylum, Kingdom" },
              { id: "c", text: "Phylum, Kingdom, Class, Order, Family, Genus, Species" },
              { id: "d", text: "Kingdom, Class, Phylum, Order, Family, Genus, Species" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hierarchy", statement: "Kingdom is broadest, Species most specific." },
            ],
            steps: [
              { reasoning: "KPCOFGS is the standard order.", working: "KPCOFGS", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Kingdom → Species",
            commonErrors: ["Reversing the order."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u1-class-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the name *Felis catus*, what does *Felis* represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The genus" },
              { id: "b", text: "The species" },
              { id: "c", text: "The family" },
              { id: "d", text: "The kingdom" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binomial nomenclature", statement: "First name = genus (capitalised), second = species." },
            ],
            steps: [
              { reasoning: "*Felis* is the genus; *catus* is the species.", working: "\\text{genus}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{genus}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The genus",
            commonErrors: ["Thinking first name is species."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A dichotomous key for insects: 1a wings present → 2; 1b no wings → 3. 2a one pair of wings → 4; 2b two pairs → 5. 3a six legs → ant; 3b ten legs → spider. 4a long legs → crane fly; 4b short legs → housefly. Identify a wingless insect with six legs.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ant" },
              { id: "b", text: "Spider" },
              { id: "c", text: "Housefly" },
              { id: "d", text: "Crane fly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Key use", statement: "No wings → 1b → 3; six legs → 3a → ant." },
            ],
            steps: [
              { reasoning: "No wings → statement 1b → couplet 3.", working: "1b", marks: 1, markCode: "M" },
              { reasoning: "Six legs → 3a → ant.", working: "3a", marks: 1, markCode: "M" },
              { reasoning: "State the identification.", working: "\\text{ant}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ant",
            commonErrors: ["Spider is not an insect — key leads to ant for six-legged wingless."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Four organisms: *Panthera leo* (lion), *Panthera tigris* (tiger), *Felis catus* (cat), *Canis lupus* (wolf).",
          parts: [
            { label: "a", prompt: "Which two share the same genus?", marks: 1 },
            { label: "b", prompt: "Which share the same family but different genus?", marks: 2 },
            { label: "c", prompt: "Construct a simple classification tree for these four.", marks: 3 },
            { label: "d", prompt: "Explain why *Panthera leo* and *Panthera tigris* are more closely related than *Panthera leo* and *Felis catus*.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Classification", statement: "Shared genus/family indicates closer evolutionary relationship." },
            ],
            steps: [
              { part: "a", reasoning: "*Panthera leo* and *Panthera tigris* share genus *Panthera*.", working: "leo,tigris", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lion/tiger (Panthera) and cat (Felis) are both felids — same family Felidae, different genera.", working: "Felidae", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Wolf (Canis) is different family (Canidae).", working: "\\text{cat vs lion/tiger}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tree: Carnivora → Felidae (Panthera: leo,tigris; Felis: catus) and Canidae (Canis: lupus).", working: "\\text{tree}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct grouping by family/genus.", working: "\\text{Felidae,Canidae}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "All four placed correctly.", working: "\\text{complete}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Shared genus *Panthera* = more recent common ancestor than shared family only.", working: "\\text{shared genus}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explain hierarchy relationship.", working: "\\text{closer relation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lion & tiger (b) cat with lion/tiger — Felidae (c) tree with Felidae/Canidae (d) shared genus = closer relation",
            commonErrors: ["In (b), grouping wolf with cats — different family."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u1-class-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which classification level is the MOST specific?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kingdom" },
              { id: "b", text: "Genus" },
              { id: "c", text: "Family" },
              { id: "d", text: "Phylum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hierarchy", statement: "Kingdom → Phylum → Class → Order → Family → Genus → Species; genus and species are most specific." },
            ],
            steps: [
              { reasoning: "Genus is second only to species in specificity.", working: "\\text{genus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Genus",
            commonErrors: ["Choosing kingdom — that is the broadest level."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypb4-u1-class-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the binomial name *Homo sapiens*, which part is the species name?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "*Homo*" },
              { id: "b", text: "*sapiens*" },
              { id: "c", text: "Both names together" },
              { id: "d", text: "Neither name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binomial nomenclature", statement: "First name = genus (capitalised), second = species (lowercase)." },
            ],
            steps: [
              { reasoning: "*Homo* is the genus; *sapiens* is the species.", working: "sapiens", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{species}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "*sapiens*",
            commonErrors: ["Thinking the capitalised first word is the species."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A dichotomous key for arthropods: 1a wings present → 2; 1b no wings → 3. 2a one pair of wings → housefly; 2b two pairs of wings → butterfly. 3a six legs → ant; 3b eight legs → spider. A specimen has no wings and eight legs. Identify it.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ant" },
              { id: "b", text: "Spider" },
              { id: "c", text: "Housefly" },
              { id: "d", text: "Butterfly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Key use", statement: "Follow couplets in order: no wings → 1b → 3; eight legs → 3b → spider." },
            ],
            steps: [
              { reasoning: "No wings → statement 1b → couplet 3.", working: "1b", marks: 1, markCode: "M" },
              { reasoning: "Eight legs → statement 3b → spider.", working: "3b", marks: 1, markCode: "M" },
              { reasoning: "State the identification.", working: "\\text{spider}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spider",
            commonErrors: ["Stopping at 'ant' without checking leg number."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The classification hierarchy has 7 levels. (a) How many levels come BELOW Kingdom in the hierarchy? (b) How many levels come ABOVE Species?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hierarchy count", statement: "Kingdom, Phylum, Class, Order, Family, Genus, Species = 7 levels." },
            ],
            steps: [
              { reasoning: "Below Kingdom: Phylum, Class, Order, Family, Genus, Species = 6.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Above Species: all other 6 levels.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 6, b) 6",
            commonErrors: ["Answering 7 by counting all levels."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Consider the hierarchy Kingdom → Phylum → Class → Order → Family → Genus → Species. (a) How many levels are shared by two organisms in the same genus? (b) How many levels lie strictly BETWEEN Family and Species? (c) How many names make up a binomial name?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 1 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classification levels", statement: "Same genus means shared Kingdom through Genus = 6 levels; Genus is between Family and Species." },
            ],
            steps: [
              { reasoning: "Same genus → share Kingdom, Phylum, Class, Order, Family, Genus = 6 levels.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Only Genus lies between Family and Species = 1.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Binomial = genus + species = 2 names.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 6, b) 1, c) 2",
            commonErrors: ["In (b), counting Family or Species themselves."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A classification tree contains 4 families. Each family contains 3 genera, and each genus contains 2 species. (a) How many genera are there in total? (b) How many species are there in total? (c) How many genera are in each family? (d) How many species are in each genus?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 24 },
              { label: "c", answer: 3 },
              { label: "d", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Classification counts", statement: "Total genera = families x genera per family; total species = genera x species per genus." },
            ],
            steps: [
              { reasoning: "Genera $= 4 \\times 3 = 12$.", working: "4\\times3=12", marks: 1, markCode: "M" },
              { reasoning: "Species $= 12 \\times 2 = 24$.", working: "12\\times2=24", marks: 1, markCode: "M" },
              { reasoning: "3 genera per family (given).", working: "3", marks: 1, markCode: "M" },
              { reasoning: "2 species per genus (given).", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 12, b) 24, c) 3, d) 2",
            commonErrors: ["In (b), multiplying 4 x 3 only and forgetting species per genus."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many names make up a correct scientific (binomial) name?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binomial nomenclature", statement: "Scientific name = genus + species, two italicised words." },
            ],
            steps: [
              { reasoning: "Genus name plus species name = 2 words.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Including the authority or family name."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u1-class-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a sample of 80 classified organisms, 20 belong to genus *Felis* and 15 to genus *Panthera*. (a) What percentage belong to *Felis*? (b) How many belong to neither genus?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25 },
              { label: "b", answer: 45 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = (part / total) x 100." },
            ],
            steps: [
              { reasoning: "$\\frac{20}{80} \\times 100 = 25\\%$ for *Felis*.", working: "25\\%", marks: 1, markCode: "M" },
              { reasoning: "Neither $= 80 - 20 - 15 = 45$.", working: "80-35=45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 25%, b) 45",
            commonErrors: ["Subtracting only one genus count for part (b)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A zoo keeps 360 animals divided equally among 6 families. Each family is divided equally among 3 genera, and each genus among 2 species. (a) How many animals are in each family? (b) How many are in each genus? (c) How many are in each species?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60 },
              { label: "b", answer: 20 },
              { label: "c", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equal division", statement: "Group size = total / number of groups at each level." },
            ],
            steps: [
              { reasoning: "Per family: $360 / 6 = 60$.", working: "360/6=60", marks: 1, markCode: "M" },
              { reasoning: "Per genus: $60 / 3 = 20$.", working: "60/3=20", marks: 1, markCode: "M" },
              { reasoning: "Per species: $20 / 2 = 10$.", working: "20/2=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 60, b) 20, c) 10",
            commonErrors: ["Dividing 360 by 3 or 2 directly instead of stepwise."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-class-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Describe the classification hierarchy.",
          parts: [
            { label: "a", prompt: "List the seven levels in order.", marks: 1 },
            { label: "b", prompt: "Name the broadest level.", marks: 1 },
            { label: "c", prompt: "Name the most specific level.", marks: 1 },
            { label: "d", prompt: "State one reason why organisms are classified.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classification", statement: "Hierarchical grouping from kingdom to species; aids identification and shows relationships." },
            ],
            steps: [
              { part: "a", reasoning: "Kingdom, Phylum, Class, Order, Family, Genus, Species.", working: "KPCOFGS", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Kingdom is broadest.", working: "\\text{kingdom}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Species is most specific.", working: "\\text{species}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. universal naming, shows evolutionary relationships, organises biodiversity.", working: "\\text{naming}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "K→P→C→O→F→G→S; kingdom broadest; species most specific; reason: naming/relationships",
            commonErrors: ["Reversing the order in (a)."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-class-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student must identify an unknown insect using a dichotomous key.",
          parts: [
            { label: "a", prompt: "Describe how to use a dichotomous key.", marks: 2 },
            { label: "b", prompt: "Apply the key: 1a wings → 2; 1b no wings → 3; 2a two wing pairs → butterfly; 2b one pair → housefly; 3a six legs → ant; 3b eight legs → spider. Specimen: wings present, one pair. What is it?", marks: 2 },
            { label: "c", prompt: "Explain why keys use paired 'has / does not have' statements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Key use", statement: "Start at couplet 1, choose matching statement, follow to next couplet until named." },
            ],
            steps: [
              { part: "a", reasoning: "Begin at first couplet; choose the description matching the specimen.", working: "\\text{start}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Follow the indicated couplet; repeat until a name is reached.", working: "\\text{sequence}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Wings present → 1a → 2; one pair → 2b → housefly.", working: "1a,2b", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Identified as housefly.", working: "\\text{housefly}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Paired statements are mutually exclusive — exactly one fits any specimen.", working: "\\text{exclusive}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This prevents ambiguity at each step.", working: "\\text{unambiguous}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) follow couplets in order (b) housefly (c) paired statements are mutually exclusive",
            commonErrors: ["In (b), choosing butterfly by ignoring wing pair count."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypb4-u1-class-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Four species: *Panthera leo* (lion), *Panthera tigris* (tiger), *Felis catus* (cat), *Canis lupus* (wolf). Which pair shares the most recent common ancestor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "*Panthera leo* and *Panthera tigris*" },
              { id: "b", text: "*Panthera leo* and *Felis catus*" },
              { id: "c", text: "*Felis catus* and *Canis lupus*" },
              { id: "d", text: "All pairs are equally related" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Relatedness", statement: "Shared genus indicates a more recent common ancestor than shared family or order." },
            ],
            steps: [
              { reasoning: "Lion and tiger share genus *Panthera* — closest grouping.", working: "Panthera", marks: 1, markCode: "M" },
              { reasoning: "Cat shares only family; wolf shares only order.", working: "\\text{family/order}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** *Panthera leo* and *Panthera tigris*",
            commonErrors: ["Choosing lion and cat — same family but different genus."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
