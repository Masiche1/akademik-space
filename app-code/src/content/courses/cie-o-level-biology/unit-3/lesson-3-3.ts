import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olbio-u3-lesson-3-3",
  code: "3-3",
  title: "Teeth and Digestion in Detail",
  goal: "I CAN describe tooth structure and types, compare mechanical and chemical digestion, and explain peristalsis.",
  standards: ["5090 3.4"],
  vocabulary: [
    { term: "Enamel", definition: "Hardest substance in body; covers crown of tooth." },
    { term: "Dentine", definition: "Bone-like tissue beneath enamel; makes up most of tooth." },
    { term: "Pulp cavity", definition: "Contains blood vessels and nerves; sensitive centre of tooth." },
    { term: "Incisor", definition: "Front teeth for cutting/biting." },
    { term: "Canine", definition: "Pointed teeth for tearing." },
    { term: "Premolar/Molar", definition: "Back teeth for grinding/crushing." },
    { term: "Peristalsis", definition: "Wave-like muscle contractions moving food along alimentary canal." },
    { term: "Mechanical digestion", definition: "Physical breakdown of food without changing chemical structure (chewing, churning)." },
  ],
  concepts: [
    {
      id: "olbio-u3-teeth",
      title: "Teeth structure and types",
      skill: "Describe tooth structure and the different types of teeth and their functions.",
      lesson: {
        sections: [
          {
            heading: "Tooth structure",
            body: "- **Crown**: visible part above gum — covered by **enamel** (hardest substance).\n- **Dentine**: beneath enamel, bone-like.\n- **Pulp cavity**: centre — blood vessels + nerves (sensitivity).\n- **Root**: anchors tooth in jawbone via periodontal ligament.",
          },
          {
            heading: "Types of teeth",
            body: "| Type | Shape | Function |\n|---|---|---|\n| Incisors | flat, sharp | cutting/biting |\n| Canines | pointed | tearing |\n| Premolars | flat with cusps | crushing |\n| Molars | large, flat | grinding |",
          },
          {
            heading: "Adult dentition",
            body: "32 teeth: 8 incisors, 4 canines, 8 premolars, 12 molars. Adults have two sets — deciduous (20 milk teeth) replaced by permanent.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is enamel important?",
          solution: "It's the hardest substance in the body, protecting the tooth from wear and decay.",
        },
      },
      questions: [
        {
          id: "olbio-u3-teeth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance covers the crown of a tooth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enamel" },
              { id: "b", text: "Dentine" },
              { id: "c", text: "Cementum" },
              { id: "d", text: "Pulp" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enamel", statement: "Hardest substance; covers crown." },
            ],
            steps: [
              { reasoning: "Recall the covering.", working: "\\text{enamel}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Enamel",
            commonErrors: ["Choosing dentine — that's beneath enamel."],
          },
        },
        {
          id: "olbio-u3-teeth-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of molars.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Molars", statement: "Large flat teeth for grinding/crushing." },
            ],
            steps: [
              { reasoning: "Give function.", working: "\\text{grinding}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Molars are large, flat teeth at the back used for grinding and crushing food.",
            commonErrors: ["Saying 'cutting' — that's incisors."],
          },
        },
        {
          id: "olbio-u3-teeth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how tooth structure is adapted to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Tooth structure", statement: "Enamel hard → protection; pulp → sensitivity; root → anchorage." },
            ],
            steps: [
              { reasoning: "Enamel: hard protection.", working: "\\text{enamel}", marks: 1, markCode: "M" },
              { reasoning: "Dentine: supportive bulk.", working: "\\text{dentine}", marks: 1, markCode: "M" },
              { reasoning: "Pulp: nerves/blood supply.", working: "\\text{pulp}", marks: 1, markCode: "M" },
              { reasoning: "Root: anchorage in jaw.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enamel provides a hard protective surface; dentine gives structural bulk; pulp contains nerves and blood supply; the root anchors the tooth in the jaw.",
            commonErrors: ["Only describing crown — include root and pulp."],
          },
        },
        {
          id: "olbio-u3-teeth-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the different types of teeth and their functions.",
          parts: [
            { label: "a", prompt: "Name the four types of teeth.", marks: 2 },
            { label: "b", prompt: "Describe the shape of each type.", marks: 4 },
            { label: "c", prompt: "State the function of each type.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Tooth types", statement: "Incisors cut, canines tear, premolars crush, molars grind." },
            ],
            steps: [
              { part: "a", reasoning: "Name four types.", working: "\\text{incisor, canine, premolar, molar}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete list.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Incisors flat/sharp.", working: "\\text{flat sharp}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Canines pointed.", working: "\\text{pointed}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Premolars/molars flat with cusps.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete shapes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Incisors cut, canines tear.", working: "\\text{cut/tear}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Premolars crush, molars grind.", working: "\\text{crush/grind}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete functions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 types (b) shapes (c) cut/tear/crush/grind",
            commonErrors: ["Mixing up premolar and molar functions — both grind but molars are larger."],
          },
        },
      ],
    },
    {
      id: "olbio-u3-digestion-detail",
      title: "Digestion mechanisms",
      skill: "Distinguish mechanical and chemical digestion and describe peristalsis and absorption.",
      lesson: {
        sections: [
          {
            heading: "Mechanical vs chemical",
            body: "- **Mechanical**: physical breakdown — chewing, churning in stomach, bile emulsification. Increases surface area but doesn't change molecules chemically.\n- **Chemical**: enzymatic breakdown — amylase, protease, lipase change molecules chemically into absorbable products.",
          },
          {
            heading: "Peristalsis",
            body: "Wave-like contractions of circular and longitudinal muscles push food along the alimentary canal — works even upside down. Controlled by autonomic nerves.",
          },
          {
            heading: "Absorption detail",
            body: "- **Glucose/amino acids**: diffuse/facilitated transport into blood capillaries.\n- **Fatty acids/glycerol**: absorbed into lacteals (lymph) → eventually blood.\n- **Water**: absorbed in large intestine.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the difference between mechanical and chemical digestion?",
          solution: "Mechanical physically breaks food into smaller pieces (chewing); chemical uses enzymes to break molecules chemically into absorbable units.",
        },
      },
      questions: [
        {
          id: "olbio-u3-digestion-detail-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is peristalsis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wave-like muscle contractions moving food along the gut" },
              { id: "b", text: "Enzyme breakdown of food" },
              { id: "c", text: "Chewing food" },
              { id: "d", text: "Absorption of nutrients" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peristalsis", statement: "Muscle waves move food along gut." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{muscle waves}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Wave-like muscle contractions moving food along the gut",
            commonErrors: ["Choosing 'chewing' — that's mechanical digestion in mouth."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish mechanical from chemical digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Digestion types", statement: "Mechanical: physical breakdown. Chemical: enzymatic breakdown." },
            ],
            steps: [
              { reasoning: "Define mechanical.", working: "\\text{physical breakdown}", marks: 1, markCode: "M" },
              { reasoning: "Define chemical.", working: "\\text{enzyme breakdown}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mechanical digestion physically breaks food into smaller pieces (chewing, churning); chemical digestion uses enzymes to break molecules into absorbable products.",
            commonErrors: ["Saying mechanical 'digests' chemically — it only reduces size."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of bile in lipid digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile", statement: "Emulsifies lipids → increases surface area for lipase." },
            ],
            steps: [
              { reasoning: "Bile breaks large fat droplets.", working: "\\text{emulsify}", marks: 1, markCode: "M" },
              { reasoning: "Creates smaller droplets.", working: "\\text{small droplets}", marks: 1, markCode: "M" },
              { reasoning: "Increases surface area for lipase.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: mechanical aid to chemical digestion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bile emulsifies large lipid droplets into small droplets, massively increasing surface area so lipase can digest them efficiently — a mechanical aid to chemical digestion.",
            commonErrors: ["Saying 'bile contains lipase' — it doesn't; it aids lipase."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the process of digestion and absorption of a protein meal.",
          parts: [
            { label: "a", prompt: "Describe mechanical digestion in the mouth and stomach.", marks: 3 },
            { label: "b", prompt: "Describe chemical digestion of protein.", marks: 3 },
            { label: "c", prompt: "Explain how amino acids are absorbed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Protein digestion", statement: "Mechanical breakdown → protease → amino acids → absorption." },
            ],
            steps: [
              { part: "a", reasoning: "Chewing in mouth.", working: "\\text{chewing}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Churning in stomach.", working: "\\text{churning}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "HCl + pepsin start protein digestion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pepsin in stomach.", working: "\\text{pepsin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Trypsin/chymotrypsin in intestine.", working: "\\text{trypsin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Protein → peptides → amino acids.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Diffusion/facilitated transport across villus.", working: "\\text{diffusion}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Into blood capillaries of villus.", working: "\\text{blood capillaries}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Transported to liver/body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chewing/churning/HCl (b) pepsin→trypsin→amino acids (c) diffusion into blood",
            commonErrors: ["In (b) forgetting stomach pepsin works first."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u3-teeth-notes",
      title: "Teeth and digestion — revision notes",
      summary: "Tooth structure/types, mechanical vs chemical digestion, peristalsis.",
      sections: [
        {
          heading: "Teeth",
          body: "Enamel (hardest) → dentine → pulp (nerves/blood). Types: incisors cut, canines tear, premolars crush, molars grind. 32 adult teeth.",
        },
        {
          heading: "Digestion",
          body: "Mechanical: physical breakdown (chewing, churning, bile emulsification). Chemical: enzymes (amylase/protease/lipase). Peristalsis: muscle waves move food.",
        },
        {
          heading: "Exam technique",
          body: "- Match tooth type to function: cut/tear/crush/grind.\n- Mechanical = size reduction; chemical = molecular breakdown.",
        },
      ],
    },
  ],
};
