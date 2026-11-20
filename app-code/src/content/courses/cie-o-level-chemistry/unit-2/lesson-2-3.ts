import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "olchem-u2-lesson-2-3",
  code: "2-3",
  title: "Metallic Bonding and Structures of Substances",
  goal: "I CAN describe metallic bonding, giant structures and the relationship between structure and properties.",
  standards: ["5070 2.3"],
  vocabulary: [
    { term: "Metallic bond", definition: "Attraction between positive metal ions and delocalised electrons." },
    { term: "Delocalised electrons", definition: "Electrons free to move throughout a metal structure." },
    { term: "Giant ionic", definition: "Lattice of ions, e.g. NaCl." },
    { term: "Giant covalent", definition: "Network of covalently bonded atoms, e.g. diamond, graphite." },
    { term: "Simple molecular", definition: "Small molecules with weak intermolecular forces, e.g. H₂O, CO₂." },
    { term: "Allotrope", definition: "Different structural forms of the same element, e.g. diamond/graphite." },
    { term: "Intermolecular forces", definition: "Weak attractions between molecules." },
    { term: "Ductile/malleable", definition: "Metal can be drawn into wires / hammered into sheets." },
  ],
  concepts: [
    {
      id: "olchem-u2-metallic-bonding",
      title: "Metallic bonding",
      skill: "Describe metallic bonding and explain metallic properties.",
      lesson: {
        sections: [
          {
            heading: "The metallic bond",
            body: "Metal atoms release outer electrons into a 'sea' of delocalised electrons. Positive metal ions sit in this electron sea; the attraction between ions and electrons is the metallic bond.",
          },
          {
            heading: "Properties explained",
            body: "- **Conducts electricity**: delocalised electrons carry charge\n- **Conducts heat**: electrons transfer kinetic energy\n- **Malleable/ductile**: layers of ions slide without breaking bonds (electron sea maintains attraction)\n- **High melting points**: strong metallic bonds (except mercury, liquid)",
          },
          {
            heading: "Alloys",
            body: "Mixtures of metals (or metal+non-metal). Different-sized atoms disrupt the regular lattice → stronger metallic bonding → harder than pure metal. E.g. steel = iron + carbon.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why are metals malleable but ionic compounds brittle?",
          solution: "In metals, ions can slide past each other while delocalised electrons maintain bonding. In ionic compounds, shifting layers brings like charges together → repulsion → shattering.",
        },
      },
      questions: [
        {
          id: "olchem-u2-metallic-bonding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What holds a metal structure together?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shared electron pairs only" }, { id: "b", text: "Positive ions + delocalised electrons" }, { id: "c", text: "Ionic bonds" }, { id: "d", text: "Hydrogen bonds" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Metallic bond", statement: "Ions attracted to delocalised electrons." }],
            steps: [{ reasoning: "Recall.", working: "\\text{ions + e}^- \\text{ sea}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Positive ions attracted to delocalised electrons",
            commonErrors: ["Describing metallic as covalent sharing."],
          },
        },
        {
          id: "olchem-u2-metallic-bonding-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why metals conduct electricity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Metallic conduction", statement: "Delocalised electrons carry charge." }],
            steps: [
              { reasoning: "Delocalised electrons exist.", marks: 1, markCode: "M" },
              { reasoning: "They move through structure carrying charge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metals contain delocalised electrons that are free to move through the structure; when a voltage is applied they drift and carry electric current.",
            commonErrors: ["Saying 'ions move' — electrons do."],
          },
        },
        {
          id: "olchem-u2-metallic-bonding-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alloys are harder than pure metals.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Alloys", statement: "Different-sized atoms distort the lattice." }],
            steps: [
              { reasoning: "Alloy contains atoms of different sizes.", marks: 1, markCode: "M" },
              { reasoning: "Distorts regular layers.", marks: 1, markCode: "M" },
              { reasoning: "Layers cannot slide easily.", marks: 1, markCode: "M" },
              { reasoning: "Harder/stronger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alloy atoms of different sizes distort the regular metal lattice, making it harder for layers of ions to slide past each other — so alloys are harder and stronger than pure metals.",
            commonErrors: ["Saying 'more bonds' — it's lattice distortion."],
          },
        },
        {
          id: "olchem-u2-metallic-bonding-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe metallic bonding and explain three properties of metals using it.",
          parts: [
            { label: "a", prompt: "Describe the structure.", marks: 3 },
            { label: "b", prompt: "Explain electrical conductivity.", marks: 2 },
            { label: "c", prompt: "Explain malleability and ductility.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Metallic structure", statement: "Positive ions in sea of delocalised electrons." }],
            steps: [
              { part: "a", reasoning: "Metal ions in lattice.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Outer electrons delocalised.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Attraction = metallic bond.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Electrons carry charge.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Free to move → conduction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Layers can slide.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Electron sea maintains attraction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No snapping → malleable.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Can be drawn into wire → ductile.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ions+electron sea (b) e⁻ carry charge (c) layers slide, sea holds → malleable/ductile",
            commonErrors: ["In (c) saying 'bonds break' — they don't."],
          },
        },
      ],
    },
    {
      id: "olchem-u2-giant-structures",
      title: "Giant structures: diamond and graphite",
      skill: "Compare giant covalent structures and relate structure to properties.",
      lesson: {
        sections: [
          {
            heading: "Diamond",
            body: "Each carbon covalently bonded to 4 others in a rigid 3D lattice.\nProperties: extremely hard, very high mp, does NOT conduct electricity (no free electrons/ions), transparent.",
          },
          {
            heading: "Graphite",
            body: "Each carbon bonded to 3 others in flat hexagonal layers. Layers held by weak forces → slide easily. One electron per carbon is delocalised.\nProperties: soft/lubricant, conducts electricity, high mp, used in electrodes/pencils.",
          },
          {
            heading: "Comparison",
            body: "| Property | Diamond | Graphite |\n|---|---|---|\n| Bonding | 4 bonds, 3D | 3 bonds, layers |\n| Hardness | very hard | soft |\n| Conducts? | no | yes |\n| Use | cutting, jewellery | electrodes, lubricant |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does graphite conduct electricity but diamond does not, though both are carbon?",
          solution: "Graphite has one delocalised electron per carbon between layers; diamond has all 4 electrons in fixed covalent bonds — no free charge carriers.",
        },
      },
      questions: [
        {
          id: "olchem-u2-giant-structures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance conducts electricity: diamond or graphite?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Diamond" }, { id: "b", text: "Graphite" }, { id: "c", text: "Both" }, { id: "d", text: "Neither" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Graphite", statement: "Delocalised electrons between layers." }],
            steps: [{ reasoning: "Recall.", working: "\\text{graphite}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Graphite",
            commonErrors: ["Assuming both conduct as 'carbon'."],
          },
        },
        {
          id: "olchem-u2-giant-structures-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why diamond is hard but graphite is soft.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Structure-property", statement: "Diamond 3D rigid; graphite layered with weak forces." }],
            steps: [
              { reasoning: "Diamond: rigid 3D covalent network.", marks: 1, markCode: "M" },
              { reasoning: "Graphite: weak forces between layers → slide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diamond's carbon atoms form a rigid 3D covalent network resisting deformation; graphite's layers are held by weak intermolecular forces that allow sliding.",
            commonErrors: ["Saying 'graphite has weaker bonds' — covalent bonds are same strength."],
          },
        },
        {
          id: "olchem-u2-giant-structures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why graphite is used as an electrode but diamond is not.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Graphite conduction", statement: "Delocalised electrons carry current." }],
            steps: [
              { reasoning: "Graphite has delocalised electrons.", marks: 1, markCode: "M" },
              { reasoning: "Can carry electric current.", marks: 1, markCode: "M" },
              { reasoning: "Diamond: all electrons in bonds — no carriers.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Graphite has delocalised electrons that conduct electricity, making it suitable as an electrode; diamond has all electrons locked in covalent bonds so cannot conduct.",
            commonErrors: ["Saying diamond 'isn't carbon' — allotropes differ structurally."],
          },
        },
        {
          id: "olchem-u2-giant-structures-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare diamond and graphite structures and properties.",
          parts: [
            { label: "a", prompt: "Compare atomic arrangement.", marks: 3 },
            { label: "b", prompt: "Compare hardness and melting point.", marks: 3 },
            { label: "c", prompt: "Explain electrical conductivity difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Allotropes", statement: "Same element, different structures → different properties." }],
            steps: [
              { part: "a", reasoning: "Diamond: each C bonded to 4, 3D network.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Graphite: each C bonded to 3, flat layers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Layers held by weak forces.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diamond very hard; graphite soft.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both very high mp (giant covalent).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct comparison.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Graphite: delocalised electrons.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Diamond: no free electrons.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3D 4-bond vs layered 3-bond (b) diamond hard/graphite soft, both high mp (c) graphite delocalised e⁻, diamond none",
            commonErrors: ["In (b) saying graphite has low mp — it's still giant covalent."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u2-structures-notes",
      title: "Metallic bonding and structures — revision notes",
      summary: "Metallic bond, electron sea, diamond vs graphite, alloys.",
      sections: [
        {
          heading: "Key facts",
          body: "Metal = positive ions + delocalised electrons → conducts, malleable, ductile. Alloys harder (lattice distortion). Diamond: 3D, hard, no conduct. Graphite: layers, soft, conducts. Giant structures = high mp.",
        },
        {
          heading: "Exam technique",
          body: "- Link every property to structure: electrons free → conduct; layers slide → soft.\n- Allotropes: same element different structure.",
        },
      ],
    },
  ],
};
