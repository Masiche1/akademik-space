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
              { id: "a", text: "Pulp" },
              { id: "b", text: "Enamel" },
              { id: "c", text: "Dentine" },
              { id: "d", text: "Cementum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enamel", statement: "Hardest substance; covers crown." },
            ],
            steps: [
              { reasoning: "Recall the covering.", working: "\\text{enamel}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Enamel",
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
        {
          id: "olbio-u3-teeth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Incisors are primarily used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grinding" },
              { id: "b", text: "Tearing" },
              { id: "c", text: "Chewing sideways" },
              { id: "d", text: "Cutting and biting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incisors", statement: "Flat, sharp front teeth for cutting/biting." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{cutting}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cutting and biting",
            commonErrors: ["Choosing tearing — that is canines."],
          },
        },
        {
          id: "olbio-u3-teeth-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The pulp cavity of a tooth contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood vessels and nerves" },
              { id: "b", text: "Dentine only" },
              { id: "c", text: "Enamel" },
              { id: "d", text: "Gum tissue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pulp cavity", statement: "Contains blood vessels and nerves — makes tooth sensitive." },
            ],
            steps: [
              { reasoning: "Recall the contents.", working: "\\text{blood + nerves}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Blood vessels and nerves",
            commonErrors: ["Choosing enamel — that covers the crown, not the cavity."],
          },
        },
        {
          id: "olbio-u3-teeth-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many teeth are in a full set of adult (permanent) dentition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "32" },
              { id: "b", text: "28" },
              { id: "c", text: "20" },
              { id: "d", text: "36" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adult dentition", statement: "32 teeth: 8 incisors, 4 canines, 8 premolars, 12 molars." },
            ],
            steps: [
              { reasoning: "Recall the total.", working: "8+4+8+12 = 32", marks: 1, markCode: "M" },
              { reasoning: "Select 32.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 32",
            commonErrors: ["Choosing 20 — that is the number of deciduous (milk) teeth."],
          },
        },
        {
          id: "olbio-u3-teeth-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An adult has 32 teeth: 8 incisors, 4 canines, 8 premolars and 12 molars. Calculate the total number of premolars and molars.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "teeth" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adult dentition", statement: "Premolars + molars = 8 + 12 = 20." },
            ],
            steps: [
              { reasoning: "Add premolars and molars.", working: "8 + 12 = 20", marks: 1, markCode: "M" },
              { reasoning: "State the total.", working: "20 \\text{ teeth}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 teeth",
            commonErrors: ["Including incisors/canines — the question asks only premolars + molars."],
          },
        },
        {
          id: "olbio-u3-teeth-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An adult dentition has 8 incisors, 4 canines, 8 premolars and 12 molars. (a) Calculate the number of incisors and canines together. (b) Calculate the number of chewing teeth (premolars and molars) together.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12, unit: "teeth" },
              { label: "b", answer: 20, unit: "teeth" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adult dentition", statement: "8I + 4C + 8P + 12M = 32." },
            ],
            steps: [
              { reasoning: "(a) 8 + 4 = 12.", working: "8 + 4 = 12", marks: 1, markCode: "M" },
              { reasoning: "(b) 8 + 12 = 20.", working: "8 + 12 = 20", marks: 1, markCode: "M" },
              { reasoning: "State both totals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 teeth; (b) 20 teeth",
            commonErrors: ["In (a) forgetting the canines — incisors + canines = 8 + 4."],
          },
        },
        {
          id: "olbio-u3-teeth-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A child has 20 deciduous (milk) teeth. An adult has 32 permanent teeth. Calculate how many more permanent teeth than deciduous teeth an adult has.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "teeth" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dentition", statement: "Deciduous 20, permanent 32." },
            ],
            steps: [
              { reasoning: "Subtract: 32 - 20 = 12.", working: "32 - 20 = 12", marks: 1, markCode: "M" },
              { reasoning: "State the difference.", working: "12 \\text{ teeth}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 more teeth",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "olbio-u3-teeth-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the hardest substance in the human body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bone" },
              { id: "b", text: "Dentine" },
              { id: "c", text: "Keratin" },
              { id: "d", text: "Enamel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enamel", statement: "Hardest substance in body; covers crown." },
            ],
            steps: [
              { reasoning: "Recall the fact.", working: "\\text{enamel}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Enamel",
            commonErrors: ["Choosing dentine — that's beneath enamel."],
          },
        },
        {
          id: "olbio-u3-teeth-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'enamel'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enamel", statement: "Hardest substance in the body; covers the crown of a tooth." },
            ],
            steps: [
              { reasoning: "Give the key property.", working: "\\text{hardest}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The hardest substance in the human body, forming the protective outer layer of the tooth's crown.",
            commonErrors: ["Saying it is 'soft' — it is the hardest tissue."],
          },
        },
        {
          id: "olbio-u3-teeth-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the structure of a tooth is adapted to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Tooth structure", statement: "Enamel protects; dentine supports; pulp senses; root anchors." },
            ],
            steps: [
              { reasoning: "Enamel: hard protective surface.", working: "\\text{enamel}", marks: 1, markCode: "M" },
              { reasoning: "Dentine: supportive bulk beneath enamel.", working: "\\text{dentine}", marks: 1, markCode: "M" },
              { reasoning: "Pulp: nerves and blood supply for sensitivity/nutrition.", working: "\\text{pulp}", marks: 1, markCode: "M" },
              { reasoning: "Root: anchors tooth in jawbone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enamel provides a hard protective surface; dentine gives structural bulk; pulp contains nerves/blood vessels; the root anchors the tooth firmly in the jaw.",
            commonErrors: ["Describing only the crown — include root and pulp."],
          },
        },
        {
          id: "olbio-u3-teeth-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Canine teeth are adapted for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tearing" },
              { id: "b", text: "Cutting" },
              { id: "c", text: "Crushing only" },
              { id: "d", text: "Grinding" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Canines", statement: "Pointed teeth for tearing food." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{tearing}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Tearing",
            commonErrors: ["Choosing cutting — that is incisors."],
          },
        },
        {
          id: "olbio-u3-teeth-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Complete a comparison of the four types of teeth.",
          parts: [
            { label: "a", prompt: "Name the four types of teeth.", marks: 2 },
            { label: "b", prompt: "State the shape of each type.", marks: 2 },
            { label: "c", prompt: "State the function of canines.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Tooth types", statement: "Incisors cut, canines tear, premolars crush, molars grind." },
            ],
            steps: [
              { part: "a", reasoning: "Incisors, canines, premolars, molars.", working: "\\text{4 types}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete list.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shapes: flat/sharp, pointed, cusped, large flat.", working: "\\text{shapes}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all four shapes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Canines tear food.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) incisors, canines, premolars, molars (b) flat/sharp, pointed, cusped, large flat (c) tearing",
            commonErrors: ["Mixing up premolar and molar shapes/functions."],
          },
        },
        {
          id: "olbio-u3-teeth-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare deciduous (milk) teeth and permanent (adult) teeth.",
          parts: [
            { label: "a", prompt: "State the number of teeth in each dentition.", marks: 2 },
            { label: "b", prompt: "Describe how deciduous teeth are replaced.", marks: 2 },
            { label: "c", prompt: "Explain whether deciduous teeth have the same functions as permanent teeth.", marks: 2 },
            { label: "d", prompt: "State two ways to care for teeth and prevent decay.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Dentition", statement: "Deciduous 20 → replaced by permanent 32; same functions; care prevents decay." },
            ],
            steps: [
              { part: "a", reasoning: "Deciduous: 20 teeth.", working: "20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Permanent: 32 teeth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Deciduous teeth fall out and are replaced.", working: "\\text{fall out/replaced}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Permanent teeth grow into the gaps.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Yes — same types and functions (cut/tear/crush/grind).", working: "\\text{same functions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Permanent set just has more molars.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Care 1: brush twice daily with fluoride toothpaste.", working: "\\text{brushing}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Care 2: reduce sugary foods / regular dental checks.", working: "\\text{diet/checks}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State two valid care measures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 vs 32 (b) milk teeth fall out, replaced by permanent (c) same functions, more molars (d) brushing, less sugar/dental checks",
            commonErrors: ["In (a) saying adults have 20 teeth — that's children."],
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
              { id: "a", text: "Enzyme breakdown of food" },
              { id: "b", text: "Wave-like muscle contractions moving food along the gut" },
              { id: "c", text: "Chewing food" },
              { id: "d", text: "Absorption of nutrients" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peristalsis", statement: "Muscle waves move food along gut." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{muscle waves}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Wave-like muscle contractions moving food along the gut",
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
        {
          id: "olbio-u3-digestion-detail-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Peristalsis is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enzyme breakdown of food" },
              { id: "b", text: "Chewing food" },
              { id: "c", text: "Absorption of nutrients" },
              { id: "d", text: "Wave-like muscle contractions moving food along the gut" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peristalsis", statement: "Muscle waves move food along the alimentary canal." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{muscle waves}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Wave-like muscle contractions moving food along the gut",
            commonErrors: ["Choosing chewing — that's mechanical digestion in the mouth."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of mechanical digestion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipase digesting fat" },
              { id: "b", text: "Pepsin digesting protein" },
              { id: "c", text: "Chewing food in the mouth" },
              { id: "d", text: "Amylase breaking down starch" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mechanical digestion", statement: "Physical breakdown without chemical change — chewing, churning, emulsification." },
            ],
            steps: [
              { reasoning: "Identify the physical process.", working: "\\text{chewing}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Chewing food in the mouth",
            commonErrors: ["Choosing an enzyme — enzymes are chemical digestion."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Bile's role in lipid digestion is best classified as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peristalsis" },
              { id: "b", text: "Absorption" },
              { id: "c", text: "Mechanical digestion — it emulsifies fats" },
              { id: "d", text: "Chemical digestion — it contains lipase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile", statement: "Emulsifies lipids — mechanical aid, no enzymes." },
            ],
            steps: [
              { reasoning: "Recall bile contains no enzymes.", working: "\\text{no enzymes}", marks: 1, markCode: "M" },
              { reasoning: "Classify as mechanical.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Mechanical digestion — it emulsifies fats",
            commonErrors: ["Saying it contains lipase — it does not."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A peristaltic wave moves a food bolus 30 cm along the gut in 60 seconds. Calculate the speed of the bolus in cm s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5, unit: "cm s^{-1}", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "Speed = distance / time." },
            ],
            steps: [
              { reasoning: "Divide distance by time.", working: "\\frac{30}{60} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "State the speed with units.", working: "0.5 \\text{ cm s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5 cm s$^{-1}$",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The stomach wall makes 20 peristaltic contractions per minute. (a) Calculate the number of contractions in 5 minutes. (b) Calculate the number of contractions in 2 minutes.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100, unit: "contractions" },
              { label: "b", answer: 40, unit: "contractions" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total contractions", statement: "Total = rate per minute x minutes." },
            ],
            steps: [
              { reasoning: "(a) 20 x 5 = 100.", working: "20 \\times 5 = 100", marks: 1, markCode: "M" },
              { reasoning: "(b) 20 x 2 = 40.", working: "20 \\times 2 = 40", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100 contractions; (b) 40 contractions",
            commonErrors: ["Using wrong time interval for each part."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The alimentary canal is usually divided into these regions: mouth, oesophagus, stomach, duodenum, ileum, large intestine, rectum, anus. How many regions come before the large intestine?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "regions" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Alimentary canal", statement: "Mouth, oesophagus, stomach, duodenum, ileum precede large intestine." },
            ],
            steps: [
              { reasoning: "Count regions before large intestine.", working: "5 \\text{ regions}", marks: 1, markCode: "M" },
              { reasoning: "State the count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 regions",
            commonErrors: ["Including large intestine or rectum in the count."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most water is absorbed back into the body in which part of the alimentary canal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large intestine" },
              { id: "b", text: "Mouth" },
              { id: "c", text: "Stomach" },
              { id: "d", text: "Ileum only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water absorption", statement: "Large intestine absorbs most water." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{large intestine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Large intestine",
            commonErrors: ["Choosing ileum — that's for nutrients, water is mainly large intestine."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish mechanical from chemical digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Digestion types", statement: "Mechanical = physical breakdown; chemical = enzymatic molecular breakdown." },
            ],
            steps: [
              { reasoning: "Define mechanical.", working: "\\text{physical breakdown}", marks: 1, markCode: "M" },
              { reasoning: "Define chemical.", working: "\\text{enzyme breakdown}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mechanical digestion physically breaks food into smaller pieces (chewing, churning) without changing molecules; chemical digestion uses enzymes to break molecules into absorbable products.",
            commonErrors: ["Saying mechanical 'digests' — it only reduces particle size."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how peristalsis moves food along the alimentary canal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Peristalsis", statement: "Circular and longitudinal muscles contract in waves to push food along." },
            ],
            steps: [
              { reasoning: "Circular muscles contract behind the bolus.", working: "\\text{circular}", marks: 1, markCode: "M" },
              { reasoning: "Longitudinal muscles contract ahead.", working: "\\text{longitudinal}", marks: 1, markCode: "M" },
              { reasoning: "Wave-like motion pushes food forward.", working: "\\text{wave}", marks: 1, markCode: "M" },
              { reasoning: "Works even against gravity; controlled by nerves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Circular and longitudinal muscles contract in alternating waves, squeezing the gut wall and pushing the food bolus along — works even upside down.",
            commonErrors: ["Saying food is 'pulled' — it is pushed by muscle contractions."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fatty acids and glycerol are absorbed into which structures in the villi?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lacteals (lymph vessels)" },
              { id: "b", text: "Blood capillaries" },
              { id: "c", text: "Alveoli" },
              { id: "d", text: "Nephrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lipid absorption", statement: "Fatty acids/glycerol enter lacteals → lymph." },
            ],
            steps: [
              { reasoning: "Recall the route.", working: "\\text{lacteals}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lacteals (lymph vessels)",
            commonErrors: ["Choosing blood capillaries — that's for glucose/amino acids."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the absorption of glucose and fatty acids in the ileum.",
          parts: [
            { label: "a", prompt: "Describe how glucose is absorbed.", marks: 2 },
            { label: "b", prompt: "Describe how fatty acids are absorbed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Absorption routes", statement: "Glucose → blood capillaries; fatty acids → lacteals → lymph." },
            ],
            steps: [
              { part: "a", reasoning: "Glucose diffuses/facilitated transport across epithelium.", working: "\\text{diffusion}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Into blood capillaries of the villus.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fatty acids/glycerol absorbed into lacteals.", working: "\\text{lacteals}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lymph carries them to blood eventually.", working: "\\text{lymph→blood}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Different route to glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) glucose diffuses into blood capillaries (b) fatty acids enter lacteals → lymph → blood",
            commonErrors: ["Saying both go directly to blood — lipids use the lymph route."],
          },
        },
        {
          id: "olbio-u3-digestion-detail-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the digestion and absorption of a starchy meal.",
          parts: [
            { label: "a", prompt: "Describe what happens to starch in the mouth.", marks: 2 },
            { label: "b", prompt: "Describe what happens to starch in the stomach and small intestine.", marks: 3 },
            { label: "c", prompt: "Explain how glucose is absorbed into the blood.", marks: 2 },
            { label: "d", prompt: "State the role of fibre in this meal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Starch digestion", statement: "Amylase → maltose → glucose; absorbed via villi; fibre adds bulk." },
            ],
            steps: [
              { part: "a", reasoning: "Salivary amylase begins starch digestion.", working: "\\text{amylase}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Starch → maltose; chewing = mechanical.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Stomach: acid stops salivary amylase.", working: "\\text{HCl}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pancreatic amylase continues starch → maltose.", working: "\\text{amylase}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Maltase → glucose.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Glucose diffuses/facilitated transport across villus epithelium.", working: "\\text{diffusion}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Into blood capillaries → transported to liver.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fibre adds bulk and aids gut movement.", working: "\\text{bulk}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Not digested but important for gut health.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) amylase → maltose (b) pancreatic amylase/maltase → glucose (c) diffusion into blood (d) fibre adds bulk, aids gut",
            commonErrors: ["In (b) saying starch digestion stops in the stomach — pancreatic amylase continues."],
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
