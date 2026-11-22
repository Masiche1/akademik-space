import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cils-u2-lesson-2-3",
  code: "2-3",
  title: "Levels of organisation",
  goal: "I CAN describe how cells organise into tissues, organs, systems and organisms.",
  standards: ["0893 Biology: levels of organisation"],
  vocabulary: [
    { term: "Tissue", definition: "Group of similar cells working together — e.g. muscle tissue." },
    { term: "Organ", definition: "Structure of different tissues working together — e.g. heart." },
    { term: "Organ system", definition: "Group of organs working together — e.g. digestive system." },
    { term: "Organism", definition: "Complete living individual made of organ systems." },
    { term: "Differentiation", definition: "Process where cells become specialised for specific jobs." },
    { term: "Stem cell", definition: "Unspecialised cell that can become different cell types." },
  ],
  concepts: [
    {
      id: "cils-u2-organisation",
      title: "From cells to organisms",
      skill: "Describe the hierarchy: cell → tissue → organ → system → organism.",
      lesson: {
        sections: [
          {
            heading: "The hierarchy",
            body: "Cell → Tissue → Organ → Organ system → Organism.\n\nExample: nerve cell → nervous tissue → brain → nervous system → human.",
          },
          {
            heading: "Each level adds function",
            body: "Cells do basic jobs; tissues coordinate similar cells; organs combine tissues for complex functions; systems coordinate organs; organism is the whole.",
          },
          {
            heading: "Examples",
            body: "- Muscle cell → muscle tissue → heart → circulatory system → human\n- Xylem cell → vascular tissue → leaf → plant transport system → tree",
          },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "Cell < Tissue < Organ < System < Organism (increasing complexity)." },
        ],
        workedExample: {
          problem: "Place in order: organ system, cell, tissue, organism, organ.",
          solution: "Cell → tissue → organ → organ system → organism.",
        },
      },
      questions: [
        {
          id: "cils-u2-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a group of similar cells working together called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tissue" },
              { id: "b", text: "System" },
              { id: "c", text: "Organ" },
              { id: "d", text: "Organism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tissue", statement: "Similar cells grouped = tissue." },
            ],
            steps: [
              { reasoning: "Tissue = similar cells working together.", working: "tissue", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Tissue",
            commonErrors: ["Choosing (b) — organs contain multiple tissue types."],
          },
        },
        {
          id: "cils-u2-org-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these in order from simplest to most complex: organism, cell, organ, tissue, organ system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Hierarchy", statement: "Cell → tissue → organ → system → organism." },
            ],
            steps: [
              { reasoning: "Correct sequence stated.", working: "cell-tissue-organ-system-organism", marks: 1, markCode: "M" },
              { reasoning: "Accurate ordering.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell → tissue → organ → organ system → organism",
            commonErrors: ["Putting organ before tissue — tissues build organs."],
          },
        },
        {
          id: "cils-u2-org-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the heart relates to the circulatory system using the levels of organisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Levels applied", statement: "Heart is an organ made of tissues; part of circulatory system." },
            ],
            steps: [
              { reasoning: "Cardiac muscle cells → cardiac muscle tissue.", working: "cells→tissue", marks: 1, markCode: "M" },
              { reasoning: "Muscle + blood + nerve tissues → heart organ.", working: "tissues→organ", marks: 1, markCode: "M" },
              { reasoning: "Heart + blood vessels + blood → circulatory system.", working: "organ→system", marks: 1, markCode: "M" },
              { reasoning: "Hierarchy applied correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Muscle cells → cardiac tissue → heart (organ) → circulatory system (with vessels/blood) → human.",
            commonErrors: ["Skipping levels — must show full chain."],
          },
        },
        {
          id: "cils-u2-org-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider the digestive system.",
          parts: [
            { label: "a", prompt: "Name two organs in the digestive system.", marks: 2 },
            { label: "b", prompt: "Explain what makes the stomach an 'organ'.", marks: 3 },
            { label: "c", prompt: "How does the digestive system relate to the whole organism?", marks: 2 },
            { label: "d", prompt: "Give another example of an organ system and its organs.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Organ systems", statement: "Organs = multiple tissues; systems = multiple organs working together." },
            ],
            steps: [
              { part: "a", reasoning: "Stomach, liver, intestines, etc.", working: "organs", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Contains multiple tissue types (muscle, epithelial, nervous) working together.", working: "tissues", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Coordinated function explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Digestive system is one of many systems in the organism — works with others.", working: "part of organism", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Relationship clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. circulatory: heart, blood vessels; respiratory: lungs, trachea.", working: "example", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) stomach/liver/intestines (b) multiple tissues working together (c) one system among many (d) e.g. circulatory: heart+vessels",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Organs named.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Organ explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Relationship clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Example valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Calling stomach a tissue — it's an organ made of tissues."],
          },
        },
        {
          id: "cils-u2-org-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of an organ system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Circulatory system" },
              { id: "b", text: "A skin cell" },
              { id: "c", text: "A single neuron" },
              { id: "d", text: "Muscle tissue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Organ system", statement: "An organ system is a group of organs working together." }],
            steps: [{ reasoning: "The circulatory system contains the heart and blood vessels.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Circulatory system",
          },
        },
        {
          id: "cils-u2-org-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the sequence cell → tissue → organ → system → organism, an organ is the third level. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Level", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Organ is the third level." }],
            steps: [{ reasoning: "Cell=1, tissue=2, organ=3.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u2-org-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define the term tissue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tissue", statement: "A tissue is a group of similar cells working together." }],
            steps: [
              { reasoning: "Cells in a tissue are similar and perform a shared function.", marks: 1, markCode: "M" },
              { reasoning: "Examples include muscle tissue and nervous tissue.", marks: 1, markCode: "A" }],
            finalAnswer: "A tissue is a group of similar cells working together.",
          },
        },
        {
          id: "cils-u2-org-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure is an organ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Muscle tissue" },
              { id: "b", text: "Heart" },
              { id: "c", text: "The whole human" },
              { id: "d", text: "A red blood cell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Organ", statement: "An organ contains different tissues working together." }],
            steps: [{ reasoning: "The heart is made of muscle, blood and nerve tissues.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Heart",
          },
        },
        {
          id: "cils-u2-org-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main levels are there from cell to organism? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Levels", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Cell, tissue, organ, system and organism make five levels." }],
            steps: [{ reasoning: "Five levels are shown.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u2-org-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why an organ is more complex than a tissue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Levels of organisation", statement: "Higher levels combine lower levels for more complex functions." }],
            steps: [
              { reasoning: "A tissue contains one main type of similar cell.", marks: 1, markCode: "M" },
              { reasoning: "An organ contains several different tissues.", marks: 1, markCode: "M" },
              { reasoning: "Coordinating tissues allows more complex functions.", marks: 1, markCode: "A" }],
            finalAnswer: "An organ combines several tissue types, allowing more complex functions than a single tissue.",
          },
        },
        {
          id: "cils-u2-org-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair contains organs of the digestive system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Muscle tissue and skin cell" },
              { id: "b", text: "Nerve and blood only" },
              { id: "c", text: "Stomach and liver" },
              { id: "d", text: "Heart and lung only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Digestive system", statement: "Stomach, liver and intestines are digestive organs." }],
            steps: [{ reasoning: "Stomach and liver are organs involved in digestion.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Stomach and liver",
          },
        },
        {
          id: "cils-u2-org-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Above the organ level in the hierarchy are organ system and organism. Enter the number of higher levels.",
          response: { type: "numeric", parts: [{ label: "Levels", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Organ system and organism are above organ." }],
            steps: [{ reasoning: "Two levels are more complex than organ.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u2-org-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stem cell is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of tissue" },
              { id: "b", text: "A dead cell" },
              { id: "c", text: "A fully specialised muscle cell" },
              { id: "d", text: "An unspecialised cell that can become different cell types" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stem cell", statement: "Stem cells are unspecialised and can differentiate." }],
            steps: [{ reasoning: "Stem cells have the potential to become specialised cells.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** An unspecialised cell that can become different cell types",
          },
        },
        {
          id: "cils-u2-org-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Number the hierarchy cell=1, tissue=2, organ=3, system=4, organism=5. Enter the value for organism.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Organism is the most complex level." }],
            steps: [{ reasoning: "Organism is level 5.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u2-org-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give one example of the hierarchy from cell to organism for a plant leaf.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Hierarchy example", statement: "A valid example links cell, tissue, organ, system and organism." }],
            steps: [
              { reasoning: "Start with a palisade mesophyll cell or similar plant cell.", marks: 1, markCode: "M" },
              { reasoning: "Group it into photosynthetic tissue, then a leaf organ.", marks: 1, markCode: "M" },
              { reasoning: "Link leaf to transport system and whole plant.", marks: 1, markCode: "A" }],
            finalAnswer: "Palisade cell → photosynthetic tissue → leaf → plant transport system → tree.",
          },
        },
        {
          id: "cils-u2-org-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which level of organisation is the most complex?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organism" },
              { id: "b", text: "Tissue" },
              { id: "c", text: "Organ" },
              { id: "d", text: "Cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Hierarchy", statement: "Organism is the highest level." }],
            steps: [{ reasoning: "The organism contains all lower levels.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Organism",
          },
        },
      ],
    },
    {
      id: "cils-u2-differentiation",
      title: "Differentiation and stem cells",
      skill: "Explain how cells specialise and the role of stem cells.",
      lesson: {
        sections: [
          {
            heading: "Differentiation",
            body: "Early cells are unspecialised (stem cells). As organism develops, cells differentiate — activate specific genes to become specialised (nerve, muscle, skin).",
          },
          {
            heading: "Stem cells",
            body: "Unspecialised cells that can become many cell types. Found in embryos and some adult tissues (bone marrow, skin). Used in medicine to repair damage.",
          },
          {
            heading: "Advantages of specialisation",
            body: "Efficient division of labour — each cell type does one job very well. More complex organisms can have specialised functions.",
          },
        ],
        keyFormulas: [
          { name: "Differentiation", statement: "Unspecialised → specialised cell through gene activation." },
        ],
        workedExample: {
          problem: "Why do organisms need specialised cells rather than all identical?",
          solution: "Specialisation = efficiency — different cells do different jobs better than one generalist type.",
        },
      },
      questions: [
        {
          id: "cils-u2-diff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is differentiation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cells becoming specialised for specific jobs" },
              { id: "b", text: "Cells dividing to make more cells" },
              { id: "c", text: "Cells joining together" },
              { id: "d", text: "Cells dying off" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Differentiation", statement: "Unspecialised → specialised." },
            ],
            steps: [
              { reasoning: "Differentiation = cells specialising.", working: "specialise", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cells becoming specialised for specific jobs",
            commonErrors: ["Choosing (b) — that's cell division, not differentiation."],
          },
        },
        {
          id: "cils-u2-diff-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a stem cell?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stem cell", statement: "Unspecialised cell capable of becoming different types." },
            ],
            steps: [
              { reasoning: "Unspecialised cell with potential to differentiate.", working: "unspecialised", marks: 1, markCode: "M" },
              { reasoning: "Can become various cell types (e.g. blood, muscle, nerve).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An unspecialised cell that can develop into different specialised cell types.",
            commonErrors: ["Saying 'dead cell' — stem cells are alive and dividing."],
          },
        },
        {
          id: "cils-u2-diff-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why specialised cells are more efficient than unspecialised cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specialisation benefit", statement: "Division of labour = each cell optimised for its job." },
            ],
            steps: [
              { reasoning: "Specialised cells have structures adapted to their function.", working: "adapted", marks: 1, markCode: "M" },
              { reasoning: "E.g. RBC has more haemoglobin space; nerve cell has long axon.", working: "examples", marks: 1, markCode: "M" },
              { reasoning: "Efficiency: faster, better performance at specific tasks.", working: "efficient", marks: 1, markCode: "M" },
              { reasoning: "Clear reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specialised cells are adapted for their jobs — more efficient than generalists doing everything poorly.",
            commonErrors: ["Saying 'they're bigger' — size isn't the reason."],
          },
        },
        {
          id: "cils-u2-diff-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Stem cells are being researched for medical treatments.",
          parts: [
            { label: "a", prompt: "Explain what stem cells can do.", marks: 2 },
            { label: "b", prompt: "Give two potential medical uses.", marks: 3 },
            { label: "c", prompt: "What ethical concerns might stem cell research raise?", marks: 2 },
            { label: "d", prompt: "Why might stem cell therapy be better than organ donation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stem cells", statement: "Regenerative potential + ethical considerations." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiation into various cell types — repair/regenerate tissue.", working: "differentiate", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Treat diseases (leukaemia), repair damaged tissue (heart, spinal cord), grow organs.", working: "uses", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two valid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Embryo destruction, 'playing God', unknown long-term effects.", working: "ethics", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valid concerns.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No donor needed, less rejection risk, unlimited supply potential.", working: "advantages", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) differentiate into cell types (b) treat disease, repair tissue (c) embryo ethics, unknown effects (d) no rejection, unlimited supply",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Uses valid.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Concerns valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Advantages valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Ignoring ethical dimension — balanced answer needed."],
          },
        },
        {
          id: "cils-u2-diff-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stem cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of tissue" },
              { id: "b", text: "A fully specialised red blood cell" },
              { id: "c", text: "A dead cell" },
              { id: "d", text: "An unspecialised cell that can become specialised" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stem cell", statement: "Stem cells are unspecialised and can differentiate." }],
            steps: [{ reasoning: "Stem cells have the potential to become different cell types.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** An unspecialised cell that can become specialised",
          },
        },
        {
          id: "cils-u2-diff-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two adult sources of stem cells. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Sources", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Stem cells", statement: "Adult stem cells occur in tissues such as bone marrow and skin." }],
            steps: [{ reasoning: "Bone marrow and skin are two sources.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u2-diff-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define differentiation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Differentiation", statement: "The process by which cells become specialised for particular functions." }],
            steps: [
              { reasoning: "Unspecialised cells develop specific structures.", marks: 1, markCode: "M" },
              { reasoning: "They become specialised for functions such as nerve or muscle cells.", marks: 1, markCode: "A" }],
            finalAnswer: "Differentiation is the process by which cells become specialised.",
          },
        },
        {
          id: "cils-u2-diff-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes a stem cell to become a specialised cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loss of all DNA" },
              { id: "b", text: "Complete cell death" },
              { id: "c", text: "Activation of specific genes" },
              { id: "d", text: "Random movement only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Differentiation", statement: "Gene activation controls which proteins a cell produces." }],
            steps: [{ reasoning: "Specific genes are switched on during differentiation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Activation of specific genes",
          },
        },
        {
          id: "cils-u2-diff-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Stem cells may become blood, muscle or nerve cells. Enter the number of cell types listed.",
          response: { type: "numeric", parts: [{ label: "Types", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Stem cells", statement: "Stem cells can differentiate into several cell types." }],
            steps: [{ reasoning: "Blood, muscle and nerve make three types.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u2-diff-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give two potential medical uses of stem cells.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Stem cell uses", statement: "Stem cells may repair tissues or treat diseases." }],
            steps: [
              { reasoning: "They could replace damaged cells in organs or nerves.", marks: 1, markCode: "M" },
              { reasoning: "They could be used to treat blood diseases or injuries.", marks: 1, markCode: "M" },
              { reasoning: "Uses should be realistic and medically relevant.", marks: 1, markCode: "A" }],
            finalAnswer: "Repair damaged tissue and treat diseases such as blood disorders.",
          },
        },
        {
          id: "cils-u2-diff-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an ethical concern about embryonic stem cell research?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It may involve destruction of embryos" },
              { id: "b", text: "It removes all DNA" },
              { id: "c", text: "It produces no cells" },
              { id: "d", text: "It always cures disease immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Ethics", statement: "Embryonic stem cell research raises concerns about embryo use." }],
            steps: [{ reasoning: "Some methods require embryos, which creates ethical debate.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** It may involve destruction of embryos",
          },
        },
        {
          id: "cils-u2-diff-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Specialised cells have two key advantages over unspecialised cells. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Advantages", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Specialisation", statement: "Specialisation improves efficiency and function." }],
            steps: [{ reasoning: "Better efficiency and specific function are advantages.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u2-diff-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is meant by division of labour in cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All cells do the same job" },
              { id: "b", text: "Cells stop dividing" },
              { id: "c", text: "Different cells perform different specialised jobs" },
              { id: "d", text: "Cells merge into one" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Division of labour", statement: "Specialised cells perform different roles." }],
            steps: [{ reasoning: "Different cell types handle different functions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Different cells perform different specialised jobs",
          },
        },
        {
          id: "cils-u2-diff-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Differentiation changes a cell from unspecialised to specialised. Enter the number of stages described.",
          response: { type: "numeric", parts: [{ label: "Stages", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Differentiation", statement: "There is a starting unspecialised state and a specialised state." }],
            steps: [{ reasoning: "Two states are described: before and after differentiation.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u2-diff-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why specialised cells are more efficient than unspecialised cells.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Efficiency", statement: "Specialised cells have structures adapted to one job." }],
            steps: [
              { reasoning: "Specialised cells develop structures suited to their function.", marks: 1, markCode: "M" },
              { reasoning: "They do not waste resources on unrelated functions.", marks: 1, markCode: "M" },
              { reasoning: "This improves speed and effectiveness.", marks: 1, markCode: "A" }],
            finalAnswer: "Specialised cells are adapted to one job, making them more efficient.",
          },
        },
        {
          id: "cils-u2-diff-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a possible use of stem cells in medicine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stopping all growth" },
              { id: "b", text: "Removing every organ" },
              { id: "c", text: "Repairing damaged tissues" },
              { id: "d", text: "Replacing the skeleton" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Stem cell therapy", statement: "Stem cells may regenerate damaged tissues." }],
            steps: [{ reasoning: "Stem cells can differentiate into needed cell types.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Repairing damaged tissues",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u2-organisation-notes",
      title: "Levels of organisation — revision notes",
      summary: "Cell→tissue→organ→system→organism; differentiation and stem cells.",
      sections: [
        {
          heading: "Hierarchy",
          body: "Cell → tissue → organ → organ system → organism. Each level more complex. Organs contain multiple tissues; systems contain multiple organs.",
        },
        {
          heading: "Specialisation",
          body: "Differentiation = cells specialising. Stem cells = unspecialised, can become many types. Efficiency through division of labour.",
        },
      ],
    },
  ],
};
