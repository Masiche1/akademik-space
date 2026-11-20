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
              { id: "b", text: "Organ" },
              { id: "c", text: "System" },
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
              { id: "c", text: "Cells dying off" },
              { id: "d", text: "Cells joining together" },
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
