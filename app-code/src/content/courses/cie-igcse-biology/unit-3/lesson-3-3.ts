import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cieb-u3-lesson-3-3",
  code: "3-3",
  title: "Teeth and Digestion in Detail",
  goal: "I CAN describe tooth structure and types, compare mechanical and chemical digestion, and explain peristalsis.",
  standards: ["0653 3.4"],
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
      id: "cieb-u3-teeth",
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
          id: "cieb-u3-teeth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance covers the crown of a tooth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dentine" },
              { id: "b", text: "Cementum" },
              { id: "c", text: "Pulp" },
              { id: "d", text: "Enamel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enamel", statement: "Hardest substance; covers crown." },
            ],
            steps: [
              { reasoning: "Recall the covering.", working: "\\text{enamel}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Enamel",
            commonErrors: ["Choosing dentine — that's beneath enamel."],
          },
        },
        {
          id: "cieb-u3-teeth-q2",
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
          id: "cieb-u3-teeth-q3",
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
          id: "cieb-u3-teeth-q4",
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
          id: "cieb-u3-teeth-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the hardest substance in the human body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cartilage" },
              { id: "b", text: "Bone" },
              { id: "c", text: "Tooth enamel" },
              { id: "d", text: "Tendon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enamel", statement: "Hardest substance in the body; covers the crown." },
            ],
            steps: [
              { reasoning: "Recall the fact.", working: "\\text{enamel}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Tooth enamel",
            commonErrors: ["Choosing bone — enamel is harder than bone."],
          },
        },
        {
          id: "cieb-u3-teeth-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which teeth are pointed and used for tearing food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Premolars" },
              { id: "b", text: "Incisors" },
              { id: "c", text: "Molars" },
              { id: "d", text: "Canines" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Canines", statement: "Pointed teeth for tearing." },
            ],
            steps: [
              { reasoning: "Match shape to function.", working: "\\text{pointed} \\to \\text{canine} \\to \\text{tear}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Canines",
            commonErrors: ["Choosing incisors — those are flat for cutting."],
          },
        },
        {
          id: "cieb-u3-teeth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The main function of incisors is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Store food" },
              { id: "b", text: "Tear food" },
              { id: "c", text: "Cut and bite food" },
              { id: "d", text: "Grind food" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Incisors", statement: "Flat, sharp front teeth for cutting/biting." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{incisors} \\to \\text{cut/biting}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Cut and bite food",
            commonErrors: ["Choosing grind — that is molars' job."],
          },
        },
        {
          id: "cieb-u3-teeth-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An adult has 32 permanent teeth and a child has 20 deciduous (milk) teeth. Calculate how many more teeth an adult has.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "teeth" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference", statement: "$32 - 20 = 12$" },
            ],
            steps: [
              { reasoning: "Subtract milk teeth from permanent teeth.", working: "32 - 20", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "12\\,\\text{teeth}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 teeth",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "cieb-u3-teeth-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An adult dentition has 8 incisors, 4 canines, 8 premolars and 12 molars. Calculate the total number of teeth.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32, unit: "teeth" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total teeth", statement: "$8 + 4 + 8 + 12 = 32$" },
            ],
            steps: [
              { reasoning: "Add all four types.", working: "8 + 4 + 8 + 12", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "32\\,\\text{teeth}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32 teeth",
            commonErrors: ["Missing one type in the sum."],
          },
        },
        {
          id: "cieb-u3-teeth-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many canines are in a full adult dentition?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "canines" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adult dentition", statement: "8 incisors, 4 canines, 8 premolars, 12 molars." },
            ],
            steps: [
              { reasoning: "Recall the count.", working: "4\\,\\text{canines}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Confusing canines with incisors (8)."],
          },
        },
        {
          id: "cieb-u3-teeth-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Of the 32 adult teeth, 12 are molars and 8 are premolars. Calculate how many teeth are incisors and canines combined.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "teeth" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Remaining teeth", statement: "$32 - (12 + 8) = 12$" },
            ],
            steps: [
              { reasoning: "Add molars and premolars.", working: "12 + 8 = 20", marks: 1, markCode: "M" },
              { reasoning: "Subtract from total.", working: "32 - 20 = 12", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 teeth (8 incisors + 4 canines)",
            commonErrors: ["Answering 20 (the back teeth) instead of the remainder."],
          },
        },
        {
          id: "cieb-u3-teeth-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of the pulp cavity inside a tooth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pulp cavity", statement: "Contains blood vessels and nerves." },
            ],
            steps: [
              { reasoning: "Give the contents/functions.", working: "\\text{blood supply; nerves}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The pulp cavity contains blood vessels (supplying the tooth) and nerves (giving sensitivity to pain/temperature).",
            commonErrors: ["Saying the pulp 'grinds food' — its role is supply and sensation."],
          },
        },
        {
          id: "cieb-u3-teeth-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Dentine is important in a tooth because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grows throughout life like hair" },
              { id: "b", text: "Forms the bulk of the tooth beneath the enamel and supports it" },
              { id: "c", text: "Contains no cells" },
              { id: "d", text: "Is the hardest layer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dentine", statement: "Bone-like tissue making up most of the tooth under enamel." },
            ],
            steps: [
              { reasoning: "Recall dentine's role.", working: "\\text{bulk/support}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Forms the bulk of the tooth beneath the enamel and supports it",
            commonErrors: ["Choosing 'hardest layer' — that is enamel."],
          },
        },
        {
          id: "cieb-u3-teeth-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which teeth are primarily used for tearing food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Molars" },
              { id: "b", text: "Incisors" },
              { id: "c", text: "Canines" },
              { id: "d", text: "Wisdom teeth only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Canine function", statement: "Pointed teeth for tearing." },
            ],
            steps: [
              { reasoning: "Match function to type.", working: "\\text{tear} \\to \\text{canine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Canines",
            commonErrors: ["Choosing incisors — they cut, not tear."],
          },
        },
        {
          id: "cieb-u3-teeth-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deciduous teeth are also commonly called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wisdom teeth" },
              { id: "b", text: "Permanent teeth" },
              { id: "c", text: "Milk teeth" },
              { id: "d", text: "Molar teeth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deciduous teeth", statement: "First set of 20 teeth, replaced by permanent set." },
            ],
            steps: [
              { reasoning: "Recall the term.", working: "\\text{milk teeth}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Milk teeth",
            commonErrors: ["Confusing with permanent dentition."],
          },
        },
        {
          id: "cieb-u3-teeth-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the different types of teeth work together to begin the mechanical digestion of food.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Tooth teamwork", statement: "Cut → tear → crush/grind → smaller particles for enzymes." },
            ],
            steps: [
              { reasoning: "Incisors cut food into manageable pieces.", working: "\\text{cut}", marks: 1, markCode: "M" },
              { reasoning: "Canines tear food.", working: "\\text{tear}", marks: 1, markCode: "M" },
              { reasoning: "Premolars/molars crush and grind.", working: "\\text{crush/grind}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: smaller particles → larger surface area for chemical digestion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Incisors cut food into pieces, canines tear it, and premolars/molars crush and grind it into small particles, greatly increasing surface area so digestive enzymes can work efficiently.",
            commonErrors: ["Listing tooth types without explaining how they cooperate."],
          },
        },
      ],
    },
    {
      id: "cieb-u3-digestion-detail",
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
          id: "cieb-u3-digestion-detail-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is peristalsis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chewing food" },
              { id: "b", text: "Wave-like muscle contractions moving food along the gut" },
              { id: "c", text: "Enzyme breakdown of food" },
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
          id: "cieb-u3-digestion-detail-q2",
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
          id: "cieb-u3-digestion-detail-q3",
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
          id: "cieb-u3-digestion-detail-q4",
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
          id: "cieb-u3-digestion-detail-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of mechanical digestion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chewing food with the teeth" },
              { id: "b", text: "Amylase breaking starch into maltose" },
              { id: "c", text: "Lipase breaking lipids into fatty acids" },
              { id: "d", text: "Pepsin breaking protein into peptides" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mechanical digestion", statement: "Physical breakdown without chemical change." },
            ],
            steps: [
              { reasoning: "Distinguish physical from chemical breakdown.", working: "\\text{chewing} = \\text{physical}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chewing food with the teeth",
            commonErrors: ["Choosing an enzyme reaction — those are chemical digestion."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bile aids lipid digestion by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutralising all stomach acid permanently" },
              { id: "b", text: "Containing lipase enzyme" },
              { id: "c", text: "Absorbing fatty acids directly" },
              { id: "d", text: "Emulsifying large fat droplets into small droplets" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile action", statement: "Emulsifies lipids → increases surface area for lipase." },
            ],
            steps: [
              { reasoning: "Recall bile's mechanism.", working: "\\text{emulsify}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Emulsifying large fat droplets into small droplets",
            commonErrors: ["Thinking bile contains lipase — it does not."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Peristalsis is produced by contractions of which muscles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cardiac muscle" },
              { id: "b", text: "Skeletal muscle only" },
              { id: "c", text: "Guard cells" },
              { id: "d", text: "Circular and longitudinal muscles in the gut wall" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Peristalsis", statement: "Wave-like contractions of circular and longitudinal gut muscles." },
            ],
            steps: [
              { reasoning: "Recall the muscles involved.", working: "\\text{circular + longitudinal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Circular and longitudinal muscles in the gut wall",
            commonErrors: ["Choosing skeletal muscle — peristalsis is involuntary smooth muscle."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Chewing reduces food particle size from 8 mm to 2 mm. Calculate the percentage reduction in particle size.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\% = \\dfrac{8 - 2}{8} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply percentage reduction formula.", working: "\\frac{8 - 2}{8} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Dividing 2 by 8 (=25%, the size remaining) instead of the reduction."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Food spends 4 hours in the stomach and 5 hours in the small intestine. Calculate the total time spent in these two organs.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total time", statement: "$4 + 5 = 9$" },
            ],
            steps: [
              { reasoning: "Add the times.", working: "4 + 5 = 9", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "9\\,\\text{h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 hours",
            commonErrors: ["Subtracting instead of adding."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A peristaltic wave travels at 2 cm per second along a 60 cm section of gut. Calculate the time taken for the wave to travel the full length.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$\\text{time} = \\dfrac{\\text{distance}}{\\text{speed}}$" },
            ],
            steps: [
              { reasoning: "Divide distance by speed.", working: "\\frac{60}{2} = 30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "30 s",
            commonErrors: ["Multiplying 60 × 2 instead of dividing."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a model gut, food particle size halves every minute. A particle starts at 8 mm. Calculate its size after 2 minutes and state the effect on the surface area available to enzymes.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "mm" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Particle size and digestion", statement: "Smaller particles → larger surface area → faster enzyme action." },
            ],
            steps: [
              { reasoning: "Halve twice.", working: "8 \\to 4 \\to 2\\,\\text{mm}", marks: 1, markCode: "M" },
              { reasoning: "State final size.", working: "2\\,\\text{mm}", marks: 1, markCode: "M" },
              { reasoning: "State effect: increased surface area for enzymes.", working: "\\text{larger surface area}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 mm — smaller particles increase surface area so enzymes can digest more quickly.",
            commonErrors: ["Halving only once (answering 4 mm)."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two examples of mechanical digestion in the alimentary canal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mechanical digestion examples", statement: "Chewing, stomach churning, bile emulsification." },
            ],
            steps: [
              { reasoning: "Give two valid examples.", working: "\\text{chewing; churning}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chewing by the teeth and churning by stomach muscles (also: bile emulsification of fats).",
            commonErrors: ["Listing enzyme actions — those are chemical digestion."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Bile is described as aiding chemical digestion even though it contains no enzymes because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changes lipids into glucose chemically" },
              { id: "b", text: "Digests protein into amino acids" },
              { id: "c", text: "Neutralises all enzymes" },
              { id: "d", text: "Emulsifies fats, greatly increasing the surface area for lipase" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile role", statement: "Physical aid to chemical digestion via emulsification." },
            ],
            steps: [
              { reasoning: "Link emulsification to enzyme efficiency.", working: "\\text{emulsify} \\to \\text{surface area}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Emulsifies fats, greatly increasing the surface area for lipase",
            commonErrors: ["Claiming bile 'contains lipase' — it only aids lipase."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most water from food is absorbed in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oesophagus" },
              { id: "b", text: "Large intestine" },
              { id: "c", text: "Mouth" },
              { id: "d", text: "Stomach" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water absorption", statement: "Mainly in the large intestine." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{large intestine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Large intestine",
            commonErrors: ["Choosing small intestine — that absorbs nutrients; large intestine absorbs water."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fatty acids and glycerol are absorbed into which structures in the villi?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lacteals (lymph vessels)" },
              { id: "b", text: "Phloem tubes" },
              { id: "c", text: "Xylem vessels" },
              { id: "d", text: "Blood capillaries directly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lipid absorption", statement: "Fatty acids/glycerol → lacteals → lymph → blood." },
            ],
            steps: [
              { reasoning: "Match product to route.", working: "\\text{FA/glycerol} \\to \\text{lacteals}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lacteals (lymph vessels)",
            commonErrors: ["Choosing blood capillaries — glucose/amino acids go there; lipids go via lacteals."],
          },
        },
        {
          id: "cieb-u3-digestion-detail-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why mechanical digestion is important before chemical digestion can occur efficiently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mechanical vs chemical digestion", statement: "Mechanical breakdown increases surface area for enzymes." },
            ],
            steps: [
              { reasoning: "Mechanical digestion physically breaks food into smaller pieces.", working: "\\text{smaller pieces}", marks: 1, markCode: "M" },
              { reasoning: "This greatly increases the surface area exposed to enzymes.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Give an example (chewing, churning, bile emulsification).", working: "\\text{chewing}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: faster, more complete chemical digestion and absorption.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mechanical digestion (chewing, churning, bile emulsification) breaks food into small particles, hugely increasing surface area so digestive enzymes can access and break down molecules quickly and completely.",
            commonErrors: ["Saying mechanical digestion 'makes enzymes' — it only prepares food for them."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u3-teeth-notes",
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
