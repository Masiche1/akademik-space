import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "biosl-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Ultrastructure",
  goal: "I CAN identify the organelles of eukaryotic cells and their functions, compare plant and animal cells, and describe the structure of prokaryotic cells and viruses.",
  standards: ["Paper 1", "Paper 2", "Topic A.1"],
  vocabulary: [
    {
      term: "Nucleus",
      definition:
        "The membrane-bound organelle that contains the cell's DNA and controls cell activities.",
    },
    {
      term: "Mitochondrion",
      definition:
        "The organelle bounded by a double membrane, with folded inner membranes (cristae), where aerobic respiration occurs.",
    },
    {
      term: "Ribosome",
      definition:
        "A small non-membrane-bound particle, made of protein and RNA, that synthesises proteins.",
    },
    {
      term: "Chloroplast",
      definition:
        "A plant organelle containing chlorophyll and stacked thylakoid membranes (grana), where photosynthesis occurs.",
    },
    {
      term: "Endoplasmic reticulum",
      definition:
        "A network of membranes continuous with the nuclear envelope; rough ER is studded with ribosomes, smooth ER is not.",
    },
    {
      term: "Golgi apparatus",
      definition:
        "A stack of flattened membrane sacs that modifies, sorts and packages proteins for secretion.",
    },
  ],
  concepts: [
    {
      id: "biosl-u1-organelle",
      title: "Eukaryotic cell organelles",
      skill:
        "Identify organelles in plant and animal cells and link each structure to its function.",
      lesson: {
        sections: [
          {
            heading: "The main organelles",
            body: "The **nucleus** holds DNA and controls the cell. The **cytoplasm** is where most chemical reactions occur. **Mitochondria** carry out aerobic respiration to release energy as ATP; their cristae increase the surface area for this. **Ribosomes** — free in the cytoplasm or bound to the rough ER — synthesise proteins. The **rough ER** processes and transports proteins, while the **smooth ER** makes lipids and detoxifies. The **Golgi apparatus** modifies, packages and secretes proteins. **Lysosomes** contain digestive enzymes.",
          },
          {
            heading: "Plant cell structures",
            body: "Plant cells have all of the above plus a **cell wall** of cellulose for support, **chloroplasts** for photosynthesis, and a large permanent **vacuole** that maintains turgor. Root hair cells, for example, contain many mitochondria because active transport of ions requires a large ATP supply.",
          },
          {
            heading: "Structure linked to function",
            body: "Each organelle's structure suits its job: the double membrane of the mitochondrion separates the reactions from the cytoplasm; chloroplast grana maximise light absorption; the nuclear envelope's pores control the movement of RNA out of the nucleus. Compartmentalisation lets incompatible reactions occur in different parts of the same cell.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy release",
            statement:
              "Mitochondrion = site of aerobic respiration producing ATP",
          },
          {
            name: "Protein production",
            statement: "Ribosomes → rough ER → Golgi apparatus → secretion",
          },
          {
            name: "Photosynthesis",
            statement: "Chloroplast = chlorophyll + grana, plant cells only",
          },
        ],
        workedExample: {
          problem:
            "A muscle fibre contains a very large number of mitochondria. Explain this observation.",
          solution:
            "Muscle contraction requires large amounts of ATP, which is released by aerobic respiration. The high number of mitochondria provides a large capacity for ATP production to meet this demand.",
        },
      },
      questions: [
        {
          id: "biosl-u1-organelle-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which organelle is the site of aerobic respiration?",
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
              {
                kind: "definition",
                name: "Mitochondrion",
                statement:
                  "The mitochondrion is the site of aerobic respiration and ATP production.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Aerobic respiration releases energy as ATP inside mitochondria.",
                working: "\\text{mitochondrion}",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The chloroplast performs photosynthesis, not respiration.",
                working: "\\text{not chloroplast}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Mitochondrion",
            commonErrors: [
              "Confusing chloroplasts (photosynthesis) with mitochondria (respiration).",
            ],
            examinerNote: "B1 for each correct identification.",
          },
        },
        {
          id: "biosl-u1-organelle-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A student observes a cell containing a cellulose cell wall, chloroplasts and a large permanent vacuole. What type of cell is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prokaryotic cell" },
              { id: "b", text: "Animal cell" },
              { id: "c", text: "Plant cell" },
              { id: "d", text: "Fungal cell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant cell features",
                statement:
                  "A cellulose cell wall, chloroplasts and a large permanent vacuole together are unique to plant cells.",
              },
            ],
            steps: [
              {
                reasoning: "All three features are diagnostic of a plant cell.",
                working:
                  "\\text{cell wall}+\\text{chloroplasts}+\\text{vacuole}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Chloroplasts indicate photosynthetic plant tissue.",
                working: "\\text{plant cell}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Plant cell",
            commonErrors: [
              "Choosing fungal cell — fungi have a cell wall but no chloroplasts.",
            ],
          },
        },
        {
          id: "biosl-u1-organelle-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Which statement correctly links a cell structure to its function?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ribosomes on the rough ER synthesise proteins for secretion",
              },
              {
                id: "b",
                text: "The smooth ER is the site of protein synthesis",
              },
              { id: "c", text: "Lysosomes produce ATP" },
              {
                id: "d",
                text: "The Golgi apparatus stores the cell's genetic material",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Organelle functions",
                statement:
                  "Rough ER carries ribosomes for protein synthesis; smooth ER makes lipids; the Golgi modifies and packages proteins; lysosomes digest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ribosomes bound to rough ER translate mRNA into proteins destined for secretion.",
                working: "\\text{rough ER}\\to\\text{protein synthesis}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Eliminate the distractors: smooth ER makes lipids, the Golgi packages proteins, lysosomes digest.",
                working: "\\text{eliminate b,c,d}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the correct link.",
                working: "\\text{ribosomes on rough ER}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Ribosomes on the rough ER synthesise proteins for secretion",
            commonErrors: ["Reversing the roles of rough and smooth ER."],
          },
        },
        {
          id: "biosl-u1-organelle-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A palisade mesophyll cell is adapted for photosynthesis and is found near the upper surface of a leaf.",
          parts: [
            {
              label: "a",
              prompt:
                "Name three organelles that would be abundant in this cell and state the function of each.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why palisade cells contain many chloroplasts.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Compare a palisade mesophyll cell with a typical animal cell.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Suggest one advantage to the cell of dividing its reactions between membrane-bound compartments.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure-function",
                statement:
                  "Cell structures are adapted to the cell's role; plant cells have walls, chloroplasts and a permanent vacuole that animal cells lack.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Identify three suitable organelles, e.g. chloroplasts, mitochondria, nucleus.",
                working: "\\text{chloroplasts, mitochondria, nucleus}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "State the correct function of each named organelle.",
                working: "\\text{photosynthesis, respiration, control}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Palisade cells are the main photosynthetic tissue; chloroplasts contain chlorophyll.",
                working: "\\text{photosynthesis}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Many chloroplasts maximise light absorption and glucose production.",
                working: "\\text{maximise light capture}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "State two shared structures, e.g. nucleus, mitochondria, cell membrane.",
                working: "\\text{nucleus, mitochondria, membrane}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "State the plant-only structures: cellulose wall, chloroplasts, large permanent vacuole.",
                working: "\\text{wall, chloroplasts, vacuole}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Different reactions can occur simultaneously without interference.",
                working: "\\text{separate reactions}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Compartmentalisation allows incompatible processes and increases efficiency.",
                working: "\\text{efficiency}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) chloroplasts/photosynthesis, mitochondria/respiration, nucleus/control (b) maximise photosynthesis (c) plant cell has wall, chloroplasts, vacuole; animal cell does not (d) incompatible reactions can be separated",
            commonErrors: [
              "In (a), naming an organelle without its function or giving an incorrect function.",
              "In (c), forgetting that both cell types share the nucleus and mitochondria.",
            ],
            examinerNote: "M1 A1 for (b) and (d); A1 A1 for (a) and (c).",
          },
        },
        {
          id: "biosl-u1-organelle-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which organelle is mainly responsible for packaging and modifying proteins before secretion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Golgi apparatus" },
              { id: "b", text: "Rough endoplasmic reticulum" },
              { id: "c", text: "Lysosome" },
              { id: "d", text: "Chloroplast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Golgi apparatus",
                statement:
                  "The Golgi apparatus modifies, sorts and packages proteins into vesicles for secretion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Golgi apparatus receives proteins from the rough ER and packages them.",
                working: "\\text{Golgi apparatus}",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The rough ER mainly transports and processes newly made proteins.",
                working: "\\text{not ER alone}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Golgi apparatus",
            commonErrors: [
              "Choosing rough ER — it transports proteins but the Golgi completes packaging for secretion.",
            ],
          },
        },
        {
          id: "biosl-u1-organelle-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A palisade cell contains chloroplasts and mitochondria in the ratio $1:3$. If the cell contains $32$ of these organelles altogether, calculate the number of chloroplasts and the number of mitochondria.",
          response: {
            type: "numeric",
            parts: [
              { label: "Chloroplasts", answer: 8 },
              { label: "Mitochondria", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio calculations",
                statement:
                  "In a $1:3$ ratio there are four equal parts; divide the total by four to find one part.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide $32$ by $4$ parts to find the chloroplast count.",
                working: "\\frac{32}{4}=8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mitochondria are three times the chloroplast number.",
                working: "3\\times 8=24",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Chloroplasts $=8$, mitochondria $=24$",
            commonErrors: ["Using a ratio of $1:3$ as $32$ chloroplasts and $96$ mitochondria."],
          },
        },
        {
          id: "biosl-u1-organelle-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An electron micrograph of a mitochondrion has an image length of $36$ mm. The actual length of the mitochondrion is $1.2$ micrometres ($\\mu$m). Calculate the magnification of the image.",
          response: {
            type: "numeric",
            parts: [{ label: "Magnification", answer: 30000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnification",
                statement: "Magnification $=$ image size divided by actual size, with both measurements in the same units.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $36$ mm to micrometres: $36\\times1000=36000$ $\\mu$m.",
                working: "36\\times1000=36000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use magnification $=$ image size $/$ actual size.",
                working: "\\frac{36000}{1.2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The magnification is $30000$ times.",
                working: "30000\\times",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\times30000$",
            commonErrors: ["Forgetting to convert millimetres to micrometres before dividing."],
          },
        },
        {
          id: "biosl-u1-organelle-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which cell would be expected to contain the greatest number of mitochondria?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A leaf epidermal cell" },
              { id: "b", text: "A root hair cell actively absorbing mineral ions" },
              { id: "c", text: "A red blood cell" },
              { id: "d", text: "A storage cell in a potato tuber" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy demand",
                statement:
                  "Cells with high ATP demand for active transport or contraction contain many mitochondria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Root hair cells use active transport and therefore require ATP from respiration.",
                working: "\\text{active transport needs ATP}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Many mitochondria increase the rate of aerobic respiration.",
                working: "\\text{many mitochondria}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A root hair cell actively absorbing mineral ions",
            commonErrors: ["Choosing a photosynthetic cell — chloroplasts provide energy for photosynthesis, but mitochondria supply ATP for active processes."],
          },
        },
        {
          id: "biosl-u1-organelle-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A cell contains $12$ mitochondria and $8$ lysosomes. Calculate the total number of these organelles and the percentage of them that are mitochondria.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total organelles", answer: 20 },
              { label: "Percentage mitochondria", answer: 60, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Percentage $=$ part divided by total multiplied by $100$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add the two organelle counts.",
                working: "12+8=20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate $\\frac{12}{20}\\times100=60\\%$.",
                working: "\\frac{12}{20}\\times100=60",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Total $=20$; mitochondria $=60\\%$",
            commonErrors: ["Calculating $8/20$ instead of the percentage of mitochondria."],
          },
        },
        {
          id: "biosl-u1-organelle-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Each chloroplast in a leaf cell contains $24$ grana. The cell has $15$ chloroplasts. If $4$ chloroplasts are removed from the cell, calculate the total number of grana in the original cell and the number remaining after removal.",
          response: {
            type: "numeric",
            parts: [
              { label: "Original total grana", answer: 360 },
              { label: "Remaining grana", answer: 264 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organelle structure",
                statement:
                  "Chloroplasts contain stacked thylakoid membranes called grana, which increase the area for light absorption.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply chloroplasts by grana per chloroplast.",
                working: "15\\times24=360",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After removal, $11$ chloroplasts remain.",
                working: "15-4=11",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Calculate $11\\times24=264$ grana.",
                working: "11\\times24=264",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Original $=360$ grana; remaining $=264$ grana",
            commonErrors: ["Subtracting $4$ grana instead of $4$ chloroplasts."],
          },
        },
        {
          id: "biosl-u1-organelle-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A pancreatic cell contains $500$ free ribosomes and $300$ ribosomes bound to the rough ER. Calculate the total number of ribosomes and the percentage bound to the rough ER.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total ribosomes", answer: 800 },
              { label: "Percentage bound", answer: 37.5, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ribosome distribution",
                statement:
                  "Bound ribosomes usually make proteins for secretion, while free ribosomes make proteins used inside the cell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total ribosomes $=500+300=800$.",
                working: "500+300=800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use $\\frac{300}{800}\\times100$.",
                working: "\\frac{300}{800}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The bound percentage is $37.5\\%$.",
                working: "37.5\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Total $=800$; bound $=37.5\\%$",
            commonErrors: ["Using $300/500$ instead of $300/800$."],
          },
        },
        {
          id: "biosl-u1-organelle-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "On a micrograph, a nucleus has an image width of $8$ mm and an actual width of $2$ $\\mu$m. Calculate the magnification. What would be the image width of a mitochondrion with an actual width of $5$ $\\mu$m at the same magnification?",
          response: {
            type: "numeric",
            parts: [
              { label: "Magnification", answer: 4000 },
              { label: "Mitochondrion image width", answer: 20, unit: "mm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnification relationship",
                statement:
                  "At constant magnification, image size equals actual size multiplied by magnification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $8$ mm to $8000$ $\\mu$m and divide by $2$ $\\mu$m.",
                working: "\\frac{8000}{2}=4000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiply actual width by magnification.",
                working: "5\\times4000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The image width is $20000$ $\\mu$m $=20$ mm.",
                working: "20000\\mu\\text{m}=20\\text{ mm}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Magnification $=4000\\times$; image width $=20$ mm",
            commonErrors: ["Forgetting to convert the image width to micrometres before calculating magnification."],
          },
        },
        {
          id: "biosl-u1-organelle-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A student is asked to explain how a eukaryotic cell is organised so that different reactions can occur at the same time.",
          parts: [
            { label: "a", prompt: "State the meaning of compartmentalisation in a cell.", marks: 2 },
            { label: "b", prompt: "Describe how the rough ER, Golgi apparatus and lysosomes work together in protein production and digestion.", marks: 2 },
            { label: "c", prompt: "Explain why a muscle fibre contains many mitochondria.", marks: 2 },
            { label: "d", prompt: "Suggest one advantage and one limitation of compartmentalisation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compartmentalisation",
                statement:
                  "Membrane-bound organelles separate reactions, allowing specialised environments and efficient control.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Different reactions occur in different membrane-bound compartments.", working: "\\text{separate compartments}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This prevents incompatible reactions from interfering with each other.", working: "\\text{no interference}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ribosomes on rough ER make proteins, which pass to the Golgi for modification and packaging.", working: "\\text{ER}\\to\\text{Golgi}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lysosomes contain enzymes that digest unwanted materials or pathogens.", working: "\\text{lysosomes digest}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Muscle contraction requires large amounts of ATP.", working: "\\text{ATP demand}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Many mitochondria increase aerobic respiration and ATP production.", working: "\\text{many mitochondria}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Advantage: incompatible reactions can be separated and regulated.", working: "\\text{advantage}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Limitation: membranes use resources and require transport across them.", working: "\\text{limitation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reactions separated into membrane-bound compartments (b) rough ER to Golgi for secretion; lysosomes digest (c) high ATP demand for contraction (d) separation of incompatible reactions; membranes cost resources",
            commonErrors: [
              "In (b), reversing the roles of the Golgi apparatus and lysosomes.",
              "In (d), giving only one side — both advantage and limitation are needed.",
            ],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "biosl-u1-organelle-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which plant cell structure helps maintain turgor and provides support against the cell membrane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chloroplast" },
              { id: "b", text: "Nucleus" },
              { id: "c", text: "Cell wall" },
              { id: "d", text: "Smooth ER" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cell wall",
                statement:
                  "The cellulose cell wall supports the plant cell and resists the pressure created by the vacuole.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The rigid cellulose wall prevents the cell from bursting as water enters.",
                working: "\\text{cellulose wall}",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Turgor is the pressure of the cell contents against the wall.",
                working: "\\text{turgor pressure}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Cell wall",
            commonErrors: ["Confusing the large vacuole, which stores water, with the wall that provides support."],
          },
        },
        {
          id: "biosl-u1-organelle-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A student compares a palisade mesophyll cell with a root hair cell from the same plant.",
          parts: [
            { label: "a", prompt: "State two organelles that would be abundant in the palisade cell and explain why.", marks: 3 },
            { label: "b", prompt: "State two features that would be abundant or specialised in the root hair cell and explain why.", marks: 3 },
            { label: "c", prompt: "Explain how the large permanent vacuole benefits a plant cell.", marks: 2 },
            { label: "d", prompt: "Evaluate the claim that all eukaryotic cells have the same organelles.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cell specialisation",
                statement:
                  "Different cell types contain different numbers of organelles according to their functions.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Chloroplasts are abundant because the cell photosynthesises.", working: "\\text{chloroplasts}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mitochondria are abundant because photosynthesis and other processes require ATP.", working: "\\text{mitochondria}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Both are linked to the cell's role in the leaf.", working: "\\text{function linked}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Many mitochondria are needed for active uptake of mineral ions.", working: "\\text{mitochondria}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The elongated root hair shape increases surface area for absorption.", working: "\\text{surface area}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both adaptations support nutrient uptake from soil.", working: "\\text{uptake role}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The vacuole stores water and maintains turgor pressure.", working: "\\text{water storage}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Turgor keeps the cell firm and supports the plant.", working: "\\text{support}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The claim is false because organelle abundance varies with cell function.", working: "\\text{not identical}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For example, muscle cells have many mitochondria while some plant cells have chloroplasts.", working: "\\text{examples}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chloroplasts for photosynthesis and mitochondria for ATP (b) mitochondria for ion uptake and elongated shape for surface area (c) stores water and maintains turgor (d) false — organelles vary with cell function",
            commonErrors: [
              "Listing organelles without explaining their role in each cell type.",
              "Saying all plant cells have chloroplasts — root hair cells usually do not.",
            ],
            examinerNote: "M1 A1 for most parts; award marks for clear structure-function links.",
          },
        },
        {
          id: "biosl-u1-organelle-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which sequence correctly describes the pathway of a protein that will be secreted from a cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Golgi apparatus, ribosome, mitochondrion, cell membrane" },
              { id: "b", text: "Ribosome, Golgi apparatus, rough ER, cell membrane" },
              { id: "c", text: "Nucleus, lysosome, rough ER, cell membrane" },
              { id: "d", text: "Ribosome, rough ER, Golgi apparatus, vesicle, cell membrane" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secretory pathway",
                statement:
                  "Secretory proteins are made on ribosomes, processed in the rough ER and Golgi, then carried in vesicles to the membrane.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ribosomes make the protein and the rough ER processes it.",
                working: "\\text{ribosome}\\to\\text{ER}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The Golgi packages it into a vesicle that fuses with the cell membrane.",
                working: "\\text{Golgi}\\to\\text{vesicle}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Ribosome, rough ER, Golgi apparatus, vesicle, cell membrane",
            commonErrors: ["Placing the Golgi before the rough ER or omitting the vesicle."],
          },
        },
      ],
    },
    {
      id: "biosl-u1-prokaryote",
      title: "Prokaryotic cells and microscopy",
      skill:
        "Describe prokaryotic cell structure, compare it with eukaryotes, and explain the use of light and electron microscopy.",
      lesson: {
        sections: [
          {
            heading: "Prokaryotic cell structure",
            body: "Prokaryotes such as bacteria have no membrane-bound nucleus: their DNA is a single circular chromosome in the **nucleoid**. They may also carry small rings of DNA called **plasmids**, which can transfer between cells. Other features include a **cell wall** containing peptidoglycan, a **cell membrane**, **cytoplasm**, **ribosomes**, and sometimes a **flagellum** for movement and **pili** for attachment and DNA transfer. Prokaryotic cells are much smaller than eukaryotic cells.",
          },
          {
            heading: "Eukaryotes versus prokaryotes",
            body: "The defining difference is that eukaryotes have membrane-bound organelles, including a true nucleus, while prokaryotes have none. Both have ribosomes, a cell membrane and cytoplasm. Viruses are acellular: they consist of nucleic acid inside a protein coat (capsid) and can only reproduce inside a host cell.",
          },
          {
            heading: "Microscopy",
            body: "Light microscopes have a maximum useful magnification of about $\\times 2000$ and resolve structures down to roughly $0.2$ micrometres ($200$ nm). Electron microscopes use electrons instead of light, giving much higher resolution — transmission EM shows internal detail, scanning EM shows 3D surface detail. Remember: magnification makes an image bigger, resolution is the ability to distinguish two points.",
          },
        ],
        keyFormulas: [
          {
            name: "Prokaryote DNA",
            statement:
              "Single circular chromosome in the nucleoid; plasmids optional",
          },
          {
            name: "Magnification",
            statement: "Magnification = image size / actual size",
          },
          {
            name: "Resolution",
            statement:
              "The smallest distance between two points that can be distinguished as separate",
          },
        ],
        workedExample: {
          problem:
            "A student calculates the magnification of a cell image that is $50$ mm long when the actual cell is $10$ micrometres long. Find the magnification.",
          solution:
            "Convert units so both are the same: $50$ mm $= 50 \\times 1000 = 50000$ micrometres. Magnification $= \\frac{50000}{10} = 5000$.",
        },
      },
      questions: [
        {
          id: "biosl-u1-prokaryote-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which feature is found in prokaryotic cells but not in eukaryotic cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rough endoplasmic reticulum" },
              { id: "b", text: "Membrane-bound mitochondria" },
              { id: "c", text: "Circular DNA in a nucleoid region" },
              { id: "d", text: "A membrane-bound nucleus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prokaryote",
                statement:
                  "Prokaryotic cells lack membrane-bound organelles; their DNA lies free in the cytoplasm in a nucleoid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prokaryotes have no nucleus; their single circular chromosome is in the nucleoid.",
                working: "\\text{nucleoid}",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Mitochondria and ER are eukaryotic features.",
                working: "\\text{eukaryotic only}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Circular DNA in a nucleoid region",
            commonErrors: [
              "Thinking plasmids are the only correct answer — the nucleoid is the key diagnostic feature.",
            ],
          },
        },
        {
          id: "biosl-u1-prokaryote-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Why can an electron microscope resolve structures that a light microscope cannot?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It uses electrons which have a much shorter wavelength than light",
              },
              { id: "b", text: "It stains specimens more effectively" },
              { id: "c", text: "It magnifies specimens to a greater degree" },
              { id: "d", text: "It uses a stronger lens made of glass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resolution and wavelength",
                statement:
                  "Resolution depends on the wavelength of the radiation used; electrons have much shorter wavelengths than visible light.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shorter wavelength radiation gives better resolution.",
                working: "\\lambda_{\\text{electron}}<\\lambda_{\\text{light}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This allows finer structures, such as ribosomes and membranes, to be distinguished.",
                working: "\\text{higher resolution}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Electrons have a much shorter wavelength than light",
            commonErrors: [
              "Confusing magnification with resolution — magnification alone cannot reveal new detail.",
            ],
          },
        },
        {
          id: "biosl-u1-prokaryote-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Which statement about viruses is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Viruses are single-celled organisms that divide by mitosis",
              },
              {
                id: "b",
                text: "Viruses are acellular particles of nucleic acid in a protein coat that reproduce only inside host cells",
              },
              {
                id: "c",
                text: "Viruses are a type of bacterium that infects plant cells",
              },
              {
                id: "d",
                text: "Viruses contain ribosomes and can carry out respiration",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Virus",
                statement:
                  "A virus is an acellular particle of nucleic acid enclosed in a protein capsid; it is an obligate parasite of living cells.",
              },
            ],
            steps: [
              {
                reasoning: "Viruses are acellular — not cells at all.",
                working: "\\text{acellular}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They consist of nucleic acid (DNA or RNA) inside a protein capsid.",
                working: "\\text{nucleic acid}+\\text{capsid}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "They lack ribosomes and metabolism and can only replicate inside a host.",
                working: "\\text{obligate parasite}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Viruses are acellular particles of nucleic acid in a protein coat that reproduce only inside host cells",
            commonErrors: [
              "Describing viruses as 'very small bacteria' or living cells.",
            ],
          },
        },
        {
          id: "biosl-u1-prokaryote-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A scientist is comparing a bacterial cell (E. coli) with a leaf mesophyll cell under the microscope.",
          parts: [
            {
              label: "a",
              prompt:
                "State three structural differences between the two cells.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the bacterial cell is much smaller than the mesophyll cell.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A transmission electron micrograph shows ribosomes on the surface of a membrane system. Identify the membrane system and explain its function.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the use of an electron microscope rather than a light microscope for this comparison.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prokaryote versus eukaryote",
                statement:
                  "Prokaryotes lack membrane-bound organelles and a nucleus; eukaryotes have them. Viruses are acellular.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "State differences such as: nucleus vs nucleoid, presence of organelles, cell wall composition.",
                working:
                  "\\text{nucleoid vs nucleus; organelles; peptidoglycan vs cellulose}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Give three correct differences.",
                working: "\\text{3 differences}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Prokaryotes have a high surface area to volume ratio, so they do not need internal compartments.",
                working: "\\text{high SA:V ratio}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "They carry out all reactions directly in the cytoplasm.",
                working: "\\text{reactions in cytoplasm}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The membrane system is the rough endoplasmic reticulum, studded with ribosomes.",
                working: "\\text{rough ER}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "It synthesises and processes proteins for secretion.",
                working: "\\text{protein synthesis/secretion}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Electron microscopy gives much higher resolution, revealing organelles invisible to light microscopy.",
                working: "\\text{higher resolution}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "However it requires dead, thinly sliced specimens and is expensive; light microscopy can view living cells.",
                working: "\\text{killed specimens; costly}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) nucleus/nucleoid, organelles present/absent, wall type (b) small size gives large surface area for exchange (c) rough ER synthesises and processes proteins (d) EM gives higher resolution but kills specimens and is costly",
            commonErrors: [
              "In (b), claiming prokaryotes are 'primitive' rather than explaining the surface area advantage.",
              "In (d), only listing advantages without a limitation.",
            ],
            examinerNote: "A1 A1 for (a); M1 A1 for (b), (c), (d).",
          },
        },
        {
          id: "biosl-u1-prokaryote-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Where is the DNA of a typical bacterium located?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inside a membrane-bound nucleus" },
              { id: "b", text: "Within a mitochondrion" },
              { id: "c", text: "In a nucleoid region of the cytoplasm" },
              { id: "d", text: "Inside the Golgi apparatus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Nucleoid", statement: "The nucleoid is the region of cytoplasm containing the single circular chromosome of a prokaryote." }],
            steps: [
              { reasoning: "Prokaryotes have no nucleus; DNA is free in the cytoplasm.", working: "\\text{no nucleus}", marks: 1, markCode: "B" },
              { reasoning: "The chromosome occupies the nucleoid region.", working: "\\text{nucleoid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** In a nucleoid region of the cytoplasm",
            commonErrors: ["Describing bacterial DNA as being inside a nucleus."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A bacterial cell is $2$ $\\mu$m long and its image on a micrograph is $12$ mm long. Calculate the magnification.",
          response: { type: "numeric", parts: [{ label: "Magnification", answer: 6000 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnification", statement: "Magnification equals image size divided by actual size after unit conversion." }],
            steps: [
              { reasoning: "Convert $12$ mm to micrometres.", working: "12\\times1000=12000", marks: 1, markCode: "M" },
              { reasoning: "Divide image size by actual size.", working: "\\frac{12000}{2}", marks: 1, markCode: "M" },
              { reasoning: "The magnification is $6000$ times.", working: "6000\\times", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times6000$",
            commonErrors: ["Using $12$ mm directly without converting to micrometres."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Six bacterial cells are examined. Each contains one circular chromosome and two plasmids. Calculate the total number of chromosomes, the total number of plasmids, and the total number of DNA molecules.",
          response: {
            type: "numeric",
            parts: [
              { label: "Chromosomes", answer: 6 },
              { label: "Plasmids", answer: 12 },
              { label: "Total DNA molecules", answer: 18 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Bacterial DNA", statement: "Each bacterium usually has one circular chromosome and may carry additional plasmids." }],
            steps: [
              { reasoning: "Multiply one chromosome per cell by six cells.", working: "1\\times6=6", marks: 1, markCode: "M" },
              { reasoning: "Multiply two plasmids per cell by six cells.", working: "2\\times6=12", marks: 1, markCode: "M" },
              { reasoning: "Add chromosomes and plasmids.", working: "6+12=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chromosomes $=6$, plasmids $=12$, total DNA $=18$",
            commonErrors: ["Counting plasmids as part of the main chromosome instead of separate DNA molecules."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which structure helps some bacteria move through liquid environments?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flagellum" },
              { id: "b", text: "Capsid" },
              { id: "c", text: "Pilus" },
              { id: "d", text: "Plasmid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Flagellum", statement: "A flagellum is a long protein filament that rotates to move a bacterium through its environment." }],
            steps: [
              { reasoning: "Flagella provide locomotion.", working: "\\text{flagellum moves cell}", marks: 1, markCode: "B" },
              { reasoning: "Pili are mainly for attachment and DNA transfer.", working: "\\text{pili attach}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Flagellum",
            commonErrors: ["Confusing pili with flagella."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a sample of $100$ cells, $35$ are prokaryotes and $65$ are eukaryotes. Calculate the percentage of prokaryotes and the percentage of eukaryotes.",
          response: {
            type: "numeric",
            parts: [
              { label: "Prokaryotes", answer: 35, unit: "%" },
              { label: "Eukaryotes", answer: 65, unit: "%" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Percentage", statement: "Percentage equals number in category divided by total multiplied by $100$." }],
            steps: [
              { reasoning: "Prokaryotes are $35\\%$ of $100$ cells.", working: "\\frac{35}{100}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Eukaryotes make up the remaining $65\\%$.", working: "100-35=65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prokaryotes $=35\\%$; eukaryotes $=65\\%$",
            commonErrors: ["Reporting raw counts instead of percentages."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A transmission electron micrograph shows a bacterium that is $4$ $\\mu$m long on the image and has an actual length of $1$ $\\mu$m. Calculate the magnification. What would be the actual length of a structure shown as $10$ mm at the same magnification?",
          response: {
            type: "numeric",
            parts: [
              { label: "Magnification", answer: 4000 },
              { label: "Actual length", answer: 2.5, unit: "$\\mu$m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnification", statement: "Magnification is image size divided by actual size; rearrange to find actual size." }],
            steps: [
              { reasoning: "Magnification $=4/1=4000$ times.", working: "\\frac{4}{1}=4000", marks: 1, markCode: "M" },
              { reasoning: "Convert $10$ mm to $10000$ $\\mu$m.", working: "10\\times1000=10000", marks: 1, markCode: "M" },
              { reasoning: "Actual size $=10000/4000=2.5$ $\\mu$m.", working: "\\frac{10000}{4000}=2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnification $=4000\\times$; actual length $=2.5$ $\\mu$m",
            commonErrors: ["Failing to convert millimetres to micrometres in the second part."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A light microscope has a resolution of about $200$ nm. Express this resolution in micrometres.",
          response: { type: "numeric", parts: [{ label: "Resolution", answer: 0.2, unit: "$\\mu$m" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Unit conversion", statement: "$1$ $\\mu$m equals $1000$ nm." }],
            steps: [
              { reasoning: "Divide nanometres by $1000$ to obtain micrometres.", working: "\\frac{200}{1000}", marks: 1, markCode: "M" },
              { reasoning: "The resolution is $0.2$ $\\mu$m.", working: "0.2\\mu\\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.2$ $\\mu$m",
            commonErrors: ["Multiplying by $1000$ instead of dividing."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A student views the same bacterial cell under a light microscope and an electron microscope. The light microscope gives a maximum useful magnification of about $\\times2000$, while the electron microscope gives $\\times50000$. Calculate how many times greater the electron microscope magnification is.",
          response: { type: "numeric", parts: [{ label: "Difference in magnification", answer: 48000 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Magnification comparison", statement: "Subtract the smaller magnification from the larger to find the difference." }],
            steps: [
              { reasoning: "Identify the two magnifications.", working: "2000\\text{ and }50000", marks: 1, markCode: "M" },
              { reasoning: "Subtract the light microscope value.", working: "50000-2000", marks: 1, markCode: "M" },
              { reasoning: "The difference is $48000$ times.", working: "48000\\times", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\times48000$ greater",
            commonErrors: ["Calculating a ratio instead of the difference in magnification."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A student prepares a slide of pond water containing bacteria and algal cells.",
          parts: [
            { label: "a", prompt: "State three features that distinguish the bacterial cells from the algal cells.", marks: 3 },
            { label: "b", prompt: "Explain why bacteria can exchange plasmids but algal cells in this sample are eukaryotic.", marks: 2 },
            { label: "c", prompt: "Explain why an electron microscope can show bacterial ribosomes more clearly than a light microscope.", marks: 2 },
            { label: "d", prompt: "Suggest one limitation of using pond water as a sample for identifying prokaryotes.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Prokaryote versus eukaryote", statement: "Prokaryotes lack membrane-bound organelles; eukaryotes have a nucleus and organelles." }],
            steps: [
              { part: "a", reasoning: "Bacteria have no nucleus; algal cells do.", working: "\\text{nucleus absent/present}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Bacteria have no membrane-bound organelles such as chloroplasts or mitochondria.", working: "\\text{no organelles}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Bacteria have a nucleoid and may have plasmids, flagella or pili.", working: "\\text{nucleoid/plasmids}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Plasmids are small DNA molecules that can move between bacteria during conjugation.", working: "\\text{plasmid transfer}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Algal cells contain a nucleus and membrane-bound organelles, so they are eukaryotic.", working: "\\text{nucleus + organelles}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Electrons have shorter wavelengths than light, giving higher resolution.", working: "\\lambda_{\\text{e}}<\\lambda_{\\text{light}}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ribosomes are below the resolution limit of a light microscope.", working: "\\text{small structures}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Pond water contains many cell types, so identification may be difficult.", working: "\\text{mixed sample}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) no nucleus, no membrane-bound organelles, nucleoid/plasmids (b) plasmids transfer between bacteria; algae have a nucleus and organelles (c) electron wavelength gives higher resolution (d) mixed pond-water sample",
            commonErrors: ["Calling all pond organisms bacteria without checking for a nucleus.", "Saying electron microscopes simply magnify more — resolution is the key advantage."],
            examinerNote: "Award one mark per correct difference in (a); M1 A1 for (b), (c).",
          },
        },
        {
          id: "biosl-u1-prokaryote-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about viruses is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are acellular and reproduce only inside a host cell" },
              { id: "b", text: "They contain ribosomes and can respire independently" },
              { id: "c", text: "They have a peptidoglycan cell wall" },
              { id: "d", text: "They contain a single circular chromosome in a nucleoid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Virus", statement: "A virus is an acellular particle of nucleic acid in a protein capsid and is an obligate parasite." }],
            steps: [
              { reasoning: "Viruses are not cells and have no independent metabolism.", working: "\\text{acellular}", marks: 1, markCode: "B" },
              { reasoning: "They require a host cell to replicate.", working: "\\text{obligate parasite}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** They are acellular and reproduce only inside a host cell",
            commonErrors: ["Describing viruses as living cells."],
          },
        },
        {
          id: "biosl-u1-prokaryote-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A researcher compares bacterial cells with a eukaryotic cell under different microscopes.",
          parts: [
            { label: "a", prompt: "Describe the structure of a typical bacterial cell, naming four parts.", marks: 2 },
            { label: "b", prompt: "Explain why bacteria can exchange genetic material even though they lack a nucleus.", marks: 2 },
            { label: "c", prompt: "Explain why transmission electron microscopy is needed to see bacterial ribosomes clearly.", marks: 2 },
            { label: "d", prompt: "Evaluate the advantages of light microscopy when studying living bacterial cultures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cell types and microscopy", statement: "Prokaryotes have no membrane-bound organelles; electron microscopy gives higher resolution than light microscopy." }],
            steps: [
              { part: "a", reasoning: "Name parts such as cell wall, cell membrane, cytoplasm, nucleoid, ribosomes, flagellum.", working: "\\text{cell wall, membrane, cytoplasm, nucleoid}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State that DNA is a single circular chromosome in the nucleoid.", working: "\\text{circular chromosome}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bacteria can exchange plasmids or DNA during conjugation.", working: "\\text{plasmid/DNA transfer}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This does not require a nucleus because the DNA is in the cytoplasm.", working: "\\text{no nucleus needed}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Electrons have a shorter wavelength than visible light.", working: "\\lambda_{\\text{electron}}<\\lambda_{\\text{light}}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shorter wavelength gives higher resolution, allowing tiny ribosomes to be seen.", working: "\\text{higher resolution}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Light microscopy allows living cells to be observed over time.", working: "\\text{living cells}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It is cheaper, faster and easier to use than electron microscopy.", working: "\\text{cheap and simple}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Its limitation is lower resolution, so only larger structures are visible.", working: "\\text{lower resolution}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cell wall, membrane, cytoplasm, nucleoid with circular chromosome (b) plasmid/DNA exchange without a nucleus (c) electron wavelength gives higher resolution (d) can view living cells cheaply but lower resolution",
            commonErrors: ["Claiming bacteria cannot exchange DNA because they have no nucleus.", "Ignoring the living-cell advantage of light microscopy in (d)."],
            examinerNote: "M1 A1 for (b) and (c); award up to three marks in (d) for advantage and limitation.",
          },
        },
        {
          id: "biosl-u1-prokaryote-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A light microscope can resolve structures down to $200$ nm and an electron microscope down to $2$ nm. Calculate how many times smaller the electron microscope resolution limit is.",
          response: { type: "numeric", parts: [{ label: "Resolution improvement", answer: 100, unit: "times" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Resolution comparison", statement: "Divide the light microscope resolution by the electron microscope resolution." }],
            steps: [
              { reasoning: "Write the ratio $200/2$.", working: "\\frac{200}{2}=100", marks: 1, markCode: "M" },
              { reasoning: "The electron microscope resolves structures $100$ times smaller.", working: "100\\times", marks: 1, markCode: "A" },
              { reasoning: "This is because electrons have shorter wavelengths than light.", working: "\\lambda_{\\text{electron}}<\\lambda_{\\text{light}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ times smaller",
            commonErrors: ["Comparing magnification instead of resolution."],
          },
        },
      ],
    },
  ],
};
