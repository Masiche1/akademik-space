module.exports = [
  {
    file: "lesson-8-1.ts", exportName: "lesson81",
    lesson: {
      id: "ebi11-u8-lesson-8-1", code: "8-1",
      title: "Balanced Diet, Nutrients and Teeth",
      goal: "I CAN describe the balanced diet, the functions of nutrients and the structure of teeth.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Animal nutrition", "4BI1 nutrition and balanced diet"],
      vocabulary: [
        { term: "Balanced diet", definition: "A diet containing all the nutrients needed in the correct proportions for good health." },
        { term: "Carbohydrate", definition: "Energy-yielding nutrient; includes sugars and starch." },
        { term: "Protein", definition: "Nutrient used for growth, repair and enzyme/hormone production." },
        { term: "Lipid", definition: "Energy store and insulator; includes fats and oils." },
        { term: "Fibre", definition: "Plant material that cannot be digested; aids peristalsis and prevents constipation." },
        { term: "Incisor", definition: "Chisel-edged front tooth used for cutting food." },
        { term: "Molar", definition: "Broad back tooth with a large surface area used for grinding food." },
      ],
      concepts: [
        {
          id: "ebi11-u8-diet", title: "Balanced diet and nutrient requirements",
          skill: "Describe the components of a balanced diet and the functions and deficiency effects of nutrients.",
          sections: [
            { heading: "Components of a balanced diet", body: "Carbohydrates (energy), proteins (growth and repair), lipids (energy store), vitamins and minerals (protection and regulation), water and fibre. The proportions needed vary with age, sex, activity level and health. Fats are concentrated energy stores; fibre (roughage) is indigestible plant material that adds bulk to the faeces." },
            { heading: "Vitamins and minerals", body: "Vitamin C prevents scurvy; vitamin D and calcium are needed for healthy bones; iron is needed to make haemoglobin. Iodine is needed for the thyroid hormone thyroxine. Deficiencies cause specific diseases, e.g. scurvy (bleeding gums, poor wound healing), rickets (soft, deformed bones) and anaemia (tiredness from low haemoglobin)." },
            { heading: "Energy and nutrients", body: "Energy in food is measured in kilojoules (kJ). Energy intake must balance energy used in respiration, plus extra for growth. Excess energy is stored as fat; insufficient intake causes malnutrition. Water makes up most of the body and is needed for transport, temperature control and chemical reactions." },
          ],
          keyFormulas: [
            { name: "Energy balance", statement: "Energy in food = energy used in respiration (+ growth/storage)" },
            { name: "Deficiency examples", statement: "Vitamin C → scurvy; vitamin D/Ca → rickets; Fe → anaemia; I → goitre" },
          ],
          workedExample: {
            problem: "A teenager plays sport daily. Why might their balanced diet differ from a sedentary adult's?",
            solution: "Higher activity means more energy is used in respiration, so more carbohydrate/lipid is needed. Growth also requires more protein, calcium and other nutrients than an adult who is not growing.",
          },
          questions: [
            {
              id: "ebi11-u8-diet-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which nutrient is the main source of energy in the diet?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Protein" }, { id: "b", text: "Carbohydrate" },
                { id: "c", text: "Vitamin C" }, { id: "d", text: "Fibre" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Carbohydrate", statement: "Main dietary energy source." }],
                steps: [{ reasoning: "Carbohydrates provide most dietary energy.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Carbohydrate",
              },
            },
            {
              id: "ebi11-u8-diet-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State two functions of protein in the diet.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Protein", statement: "Used for growth, repair and cell processes." }],
                steps: [
                  { reasoning: "Growth and repair of body tissues.", marks: 1, markCode: "M" },
                  { reasoning: "Production of enzymes and hormones (any one correct second function).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Growth/repair; enzymes or hormones",
              },
            },
            {
              id: "ebi11-u8-diet-q3", difficulty: "core", totalMarks: 4,
              stem: "A child develops bleeding gums and slow wound healing. (a) Name the vitamin likely deficient. (b) Name the deficiency disease. (c) Explain how this affects the diet needed to recover. (d) State one other vitamin deficiency disease and its vitamin.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Vitamin deficiency", statement: "Missing vitamins cause specific diseases." }],
                steps: [
                  { reasoning: "(a) Vitamin C.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Scurvy.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Diet must include vitamin-C-rich foods (fruit/vegetables) to restore levels.", marks: 1, markCode: "A" },
                  { reasoning: "(d) e.g. rickets — vitamin D (or calcium); anaemia — iron.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Vitamin C; scurvy; fruit/vegetables; e.g. rickets–vitamin D",
                commonErrors: ["Confusing vitamin C deficiency with anaemia."],
              },
            },
            {
              id: "ebi11-u8-diet-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain why a balanced diet must contain fibre, and why fibre itself is not digested. Include the effects of too little fibre.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Fibre function", statement: "Fibre adds bulk and aids peristalsis." }],
                steps: [
                  { reasoning: "Fibre is indigestible plant material — no enzymes break it down.", marks: 1, markCode: "M" },
                  { reasoning: "It adds bulk to the faeces, stimulating peristalsis.", marks: 1, markCode: "M" },
                  { reasoning: "This prevents constipation and may reduce bowel disease risk.", marks: 1, markCode: "A" },
                  { reasoning: "Too little fibre → slow movement, constipation.", marks: 1, markCode: "A" },
                  { reasoning: "Found in whole grains, fruit and vegetables.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Indigestible bulk → peristalsis; prevents constipation",
              },
            },
            {
              id: "ebi11-u8-diet-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State the main function of carbohydrates, proteins and lipids.", marks: 3 },
                { label: "b", prompt: "Explain why energy needs differ between a child and an elderly person.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Nutrient functions", statement: "Each nutrient class has a distinct role." }],
                steps: [
                  { part: "a", reasoning: "Carbohydrate: energy.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Protein: growth and repair.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Lipid: energy store/insulation.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Child needs more energy for growth and often more activity.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Elderly person has lower metabolic rate and activity, so needs less energy.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Needs measured in kJ and matched to respiration use.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "C:energy P:growth/repair L:energy store; children need more",
              },
            },
            {
              id: "ebi11-u8-diet-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) List the seven components of a balanced diet. (b) State the function of carbohydrates, protein and lipid. (c) Name the vitamin whose deficiency causes scurvy. (d) Name the mineral needed for haemoglobin. (e) Explain the role of fibre. (f) State two factors that change nutrient requirements.",
              parts: [
                { label: "a", prompt: "List components.", marks: 3 },
                { label: "b", prompt: "Functions of the three nutrients.", marks: 3 },
                { label: "c", prompt: "Scurvy vitamin.", marks: 1 },
                { label: "d", prompt: "Haemoglobin mineral.", marks: 1 },
                { label: "e", prompt: "Fibre role.", marks: 1 },
                { label: "f", prompt: "Two factors.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Balanced diet", statement: "All nutrients in correct proportions." }],
                steps: [
                  { part: "a", reasoning: "Carbohydrates, proteins, lipids.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Vitamins, minerals, water, fibre.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Carbohydrate: energy.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Protein: growth/repair.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Lipid: energy store.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Vitamin C.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Iron.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Adds bulk, aids peristalsis, prevents constipation.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Age/activity/health/sex (any two).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "7 components; functions; scurvy=vit C; Fe; fibre aids gut",
              },
            },
          ],
        },
        {
          id: "ebi11-u8-teeth", title: "Teeth and mechanical digestion",
          skill: "Describe the types of teeth, their structure and their role in mechanical digestion.",
          sections: [
            { heading: "Types of teeth", body: "Incisors (front, chisel-edged) cut food; canines (pointed) tear food; premolars and molars (broad, ridged) crush and grind food. Humans are omnivores with a generalised dentition suited to a varied diet. Dental formula for an adult: 2 incisors, 1 canine, 2 premolars, 3 molars per half jaw." },
            { heading: "Tooth structure", body: "Crown (visible) covered by enamel — the hardest substance in the body, protects against decay. Under enamel is dentine, softer and sensitive to temperature. Pulp cavity contains nerves and blood vessels. Cement covers the root, anchoring the tooth in the jaw via the periodontal ligament." },
            { heading: "Mechanical digestion", body: "Chewing (mastication) increases surface area of food so enzymes can act efficiently. The tongue manipulates food into a ball (bolus) and pushes it to the back of the throat for swallowing. Saliva moistens food and contains salivary amylase." },
          ],
          keyFormulas: [
            { name: "Adult dental formula", statement: "2I, 1C, 2PM, 3M per half jaw (×2 halves = 32 teeth)" },
            { name: "Enamel", statement: "Hardest substance in the body; protects tooth crown" },
          ],
          workedExample: {
            problem: "Why does chewing food improve digestion?",
            solution: "Chewing breaks food into smaller pieces and mixes it with saliva. This greatly increases the surface area to volume ratio, so digestive enzymes can act faster and more efficiently.",
          },
          questions: [
            {
              id: "ebi11-u8-teeth-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which tooth type is used for tearing food?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Incisor" }, { id: "b", text: "Canine" },
                { id: "c", text: "Molar" }, { id: "d", text: "Premolar" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Canine", statement: "Pointed tooth for tearing." }],
                steps: [{ reasoning: "Canines are pointed and tear food.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Canine",
              },
            },
            {
              id: "ebi11-u8-teeth-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the hardest substance in the human body.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Enamel", statement: "Hardest substance in body." }],
                steps: [{ reasoning: "Enamel covers the crown of each tooth.", marks: 2, markCode: "M" }],
                finalAnswer: "Enamel",
              },
            },
            {
              id: "ebi11-u8-teeth-q3", difficulty: "core", totalMarks: 4,
              stem: "Describe how the structure of a molar is suited to its function of grinding food.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Molar adaptation", statement: "Broad surface and ridges maximise grinding." }],
                steps: [
                  { reasoning: "Molars have a large, flat crown with ridges.", marks: 1, markCode: "M" },
                  { reasoning: "This gives a large surface area for grinding food into small pieces.", marks: 1, markCode: "A" },
                  { reasoning: "Small pieces increase surface area for enzyme action later.", marks: 1, markCode: "A" },
                  { reasoning: "Enamel protects the molar during this process.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Broad ridged crown → large area for grinding",
              },
            },
            {
              id: "ebi11-u8-teeth-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain the role of the tongue and saliva in the mouth during mechanical digestion.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Mechanical digestion", statement: "Physical breakdown increases surface area." }],
                steps: [
                  { reasoning: "Tongue mixes food with saliva and manipulates it.", marks: 1, markCode: "M" },
                  { reasoning: "It forms food into a bolus for swallowing.", marks: 1, markCode: "M" },
                  { reasoning: "Teeth cut, tear and grind food into smaller pieces.", marks: 1, markCode: "A" },
                  { reasoning: "Smaller pieces greatly increase surface area to volume ratio.", marks: 1, markCode: "A" },
                  { reasoning: "Saliva moistens food and begins starch digestion with amylase.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Tongue+teeth break food down → larger SA:V for enzymes",
              },
            },
            {
              id: "ebi11-u8-teeth-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State the function of incisors and canines.", marks: 2 },
                { label: "b", prompt: "Name the layer covering the crown and the pulp cavity contents.", marks: 2 },
                { label: "c", prompt: "Explain why tooth decay can cause pain.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Tooth structure", statement: "Enamel, dentine, pulp cavity." }],
                steps: [
                  { part: "a", reasoning: "Incisors: cut food; canines: tear food.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both functions correct.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Enamel covers the crown.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Pulp cavity contains nerves and blood vessels.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Decay exposes dentine/pulp; nerves detect pain.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Explains link between decay and pain sensation.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Incisors cut, canines tear; enamel+pulp; decay exposes nerves",
              },
            },
            {
              id: "ebi11-u8-teeth-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the four types of human teeth. (b) State the function of each. (c) Name the hardest substance in the body. (d) Name the layer beneath enamel. (e) State what the pulp cavity contains. (f) Explain how chewing helps digestion. (g) How many teeth does an adult human have?",
              parts: [
                { label: "a", prompt: "Four tooth types.", marks: 1 },
                { label: "b", prompt: "Functions.", marks: 4 },
                { label: "c", prompt: "Hardest substance.", marks: 1 },
                { label: "d", prompt: "Layer under enamel.", marks: 1 },
                { label: "e", prompt: "Pulp contents.", marks: 1 },
                { label: "f", prompt: "Chewing benefit.", marks: 1 },
                { label: "g", prompt: "Adult tooth count.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Teeth", statement: "Incisors, canines, premolars, molars." }],
                steps: [
                  { part: "a", reasoning: "Incisors, canines, premolars, molars.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Incisors cut; canines tear; premolars crush; molars grind.", marks: 4, markCode: "M" },
                  { part: "c", reasoning: "Enamel.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Dentine.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Nerves and blood vessels.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Increases surface area for enzymes.", marks: 1, markCode: "A" },
                  { part: "g", reasoning: "32.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "4 tooth types; enamel; dentine; pulp; 32 teeth",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u8-diet-notes", title: "Nutrition — notes",
      summary: "Balanced diet = carbs, proteins, lipids, vitamins, minerals, water, fibre. Teeth cut, tear, grind; enamel is hardest substance.",
      sections: [
        { heading: "Key idea", body: "Nutrient needs vary with age, activity and health." },
        { heading: "Deficiencies", body: "Vit C→scurvy; Vit D/Ca→rickets; Fe→anaemia; I→goitre." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts", exportName: "lesson82",
    lesson: {
      id: "ebi11-u8-lesson-8-2", code: "8-2",
      title: "The Digestive System and Enzymes",
      goal: "I CAN describe the alimentary canal, the digestive enzymes and the role of stomach acid and bile.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Animal nutrition", "4BI1 digestion and enzymes"],
      vocabulary: [
        { term: "Alimentary canal", definition: "Continuous muscular tube from mouth to anus through which food passes." },
        { term: "Peristalsis", definition: "Wave-like muscular contractions that push food along the canal." },
        { term: "Amylase", definition: "Enzyme that hydrolyses starch into maltose." },
        { term: "Protease", definition: "Enzyme that hydrolyses proteins into peptides and amino acids." },
        { term: "Lipase", definition: "Enzyme that hydrolyses lipids into fatty acids and glycerol." },
        { term: "Bile", definition: "Greenish fluid from the liver that emulsifies lipids and neutralises acid." },
        { term: "Emulsification", definition: "Breaking large lipid droplets into smaller droplets to increase surface area." },
      ],
      concepts: [
        {
          id: "ebi11-u8-gut", title: "Alimentary canal and digestive enzymes",
          skill: "Describe the regions of the alimentary canal and the enzymes that digest carbohydrates, proteins and lipids.",
          sections: [
            { heading: "Route of food", body: "Mouth (teeth, tongue, salivary amylase) → oesophagus → stomach → duodenum → ileum → large intestine → rectum → anus. Peristalsis moves food; sphincter muscles control movement between regions. The stomach churns food into chyme." },
            { heading: "Digestive enzymes", body: "Salivary amylase starts starch → maltose in the mouth. Gastric protease (pepsin) digests protein in the acidic stomach. Pancreatic and intestinal juice supply amylase, proteases and lipase in the duodenum/ileum. Maltase converts maltose → glucose. Each enzyme is substrate-specific and works best at its optimum pH." },
            { heading: "Products of digestion", body: "Carbohydrates end as monosaccharides (glucose), proteins as amino acids, lipids as fatty acids and glycerol. These small soluble products can be absorbed in the small intestine." },
          ],
          keyFormulas: [
            { name: "Starch digestion", statement: "Starch →(amylase) maltose →(maltase) glucose" },
            { name: "Protein digestion", statement: "Protein →(protease) peptides →(protease) amino acids" },
            { name: "Lipid digestion", statement: "Triglyceride + water →(lipase) fatty acids + glycerol" },
          ],
          workedExample: {
            problem: "Trace the digestion of a piece of bread from mouth to ileum.",
            solution: "Starch is partly digested to maltose by salivary amylase in the mouth. In the stomach, acid stops amylase. In the duodenum pancreatic amylase resumes starch → maltose, and maltase in the ileum converts maltose → glucose, ready for absorption.",
          },
          questions: [
            {
              id: "ebi11-u8-gut-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which enzyme begins starch digestion in the mouth?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Lipase" }, { id: "b", text: "Protease" },
                { id: "c", text: "Amylase" }, { id: "d", text: "Maltase" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Amylase", statement: "Hydrolyses starch to maltose." }],
                steps: [{ reasoning: "Salivary amylase acts on starch.", marks: 1, markCode: "M" }],
                finalAnswer: "**(c)** Amylase",
              },
            },
            {
              id: "ebi11-u8-gut-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the substrate and products of lipase.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lipase", statement: "Hydrolyses lipids." }],
                steps: [
                  { reasoning: "Substrate: triglycerides (lipids).", marks: 1, markCode: "M" },
                  { reasoning: "Products: fatty acids and glycerol.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Triglyceride → fatty acids + glycerol",
              },
            },
            {
              id: "ebi11-u8-gut-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how peristalsis moves food through the alimentary canal.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Peristalsis", statement: "Muscular waves push food along." }],
                steps: [
                  { reasoning: "Circular and longitudinal muscles contract in waves along the gut wall.", marks: 1, markCode: "M" },
                  { reasoning: "The wave squeezes food forward into the next region.", marks: 1, markCode: "M" },
                  { reasoning: "Sphincter muscles control entry into the stomach and between regions.", marks: 1, markCode: "A" },
                  { reasoning: "This works even against gravity (e.g. swallowing).", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Muscular waves push food along the canal",
              },
            },
            {
              id: "ebi11-u8-gut-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Describe the digestion of protein from the stomach to the ileum.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Sequential digestion", statement: "Enzymes act in sequence by site and pH." }],
                steps: [
                  { reasoning: "Stomach acid (HCl) gives optimum pH ~2 for protease (pepsin).", marks: 1, markCode: "M" },
                  { reasoning: "Pepsin breaks protein into peptides.", marks: 1, markCode: "M" },
                  { reasoning: "Bile neutralises acid in the duodenum.", marks: 1, markCode: "A" },
                  { reasoning: "Pancreatic/intestinal proteases continue peptide → amino acids.", marks: 1, markCode: "A" },
                  { reasoning: "Amino acids are then ready for absorption in the ileum.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Protein → peptides (pepsin) → amino acids (proteases)",
              },
            },
            {
              id: "ebi11-u8-gut-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the regions of the alimentary canal in order.", marks: 3 },
                { label: "b", prompt: "State which enzyme digests starch in the mouth and which finishes carbohydrate digestion in the ileum.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Alimentary canal", statement: "Mouth to anus route." }],
                steps: [
                  { part: "a", reasoning: "Mouth, oesophagus, stomach.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Duodenum, ileum.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Large intestine, rectum, anus.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Salivary amylase in the mouth.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Pancreatic amylase in duodenum/ileum.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Maltase converts maltose → glucose in ileum.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Mouth→stomach→ileum→anus; amylase; maltase",
              },
            },
            {
              id: "ebi11-u8-gut-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) List the alimentary canal regions in order. (b) Name the enzyme for starch, protein and lipid digestion. (c) State the products of each digestion. (d) Define peristalsis. (e) Where does most digestion and absorption occur?",
              parts: [
                { label: "a", prompt: "Regions in order.", marks: 3 },
                { label: "b", prompt: "Three enzymes.", marks: 3 },
                { label: "c", prompt: "Three product sets.", marks: 2 },
                { label: "d", prompt: "Peristalsis.", marks: 1 },
                { label: "e", prompt: "Main site.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Digestion", statement: "Enzymatic breakdown of food." }],
                steps: [
                  { part: "a", reasoning: "Mouth, oesophagus, stomach, duodenum, ileum, large intestine, rectum, anus.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Amylase (starch), protease (protein), lipase (lipid).", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Glucose/maltose; amino acids; fatty acids + glycerol.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Muscular waves pushing food along the canal.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Small intestine (duodenum + ileum).", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Regions; amylase/protease/lipase; products; peristalsis; small intestine",
              },
            },
          ],
        },
        {
          id: "ebi11-u8-bile", title: "Stomach acid, bile and pH control",
          skill: "Explain the roles of stomach acid and bile, and how pH affects digestive enzymes.",
          sections: [
            { heading: "Stomach acid", body: "Hydrochloric acid in gastric juice lowers stomach pH to about 2. This provides the optimum pH for protease (pepsin), helps denature proteins and kills many harmful microbes in food." },
            { heading: "Bile", body: "Bile is produced by the liver, stored in the gall bladder and released into the duodenum. Bile salts emulsify large lipid droplets into tiny droplets, greatly increasing surface area for lipase. The alkaline bile neutralises stomach acid so pancreatic enzymes work at their optimum pH." },
            { heading: "pH and enzymes", body: "Each digestive enzyme works best at a specific pH: pepsin ~pH 2, amylase and lipase ~neutral/alkaline. Changes in pH can denature enzymes. Therefore acid must be neutralised before pancreatic juice acts." },
          ],
          keyFormulas: [
            { name: "Emulsification", statement: "Large lipid droplets → small droplets → more surface area for lipase" },
            { name: "Stomach pH", statement: "About pH 2 — optimum for pepsin" },
          ],
          workedExample: {
            problem: "Why is bile essential for lipid digestion even though it contains no enzymes?",
            solution: "Bile salts break large lipid droplets into tiny droplets, massively increasing surface area so lipase can digest them faster. Its alkaline pH also neutralises stomach acid so pancreatic enzymes function.",
          },
          questions: [
            {
              id: "ebi11-u8-bile-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which organ produces bile?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Stomach" }, { id: "b", text: "Pancreas" },
                { id: "c", text: "Liver" }, { id: "d", text: "Gall bladder" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bile", statement: "Made by liver, stored in gall bladder." }],
                steps: [{ reasoning: "Bile is produced by the liver.", marks: 1, markCode: "M" }],
                finalAnswer: "**(c)** Liver",
              },
            },
            {
              id: "ebi11-u8-bile-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is the approximate pH of the stomach contents during digestion?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Gastric pH", statement: "About pH 2." }],
                steps: [{ reasoning: "Hydrochloric acid lowers pH to ~2.", marks: 2, markCode: "M" }],
                finalAnswer: "About pH 2",
              },
            },
            {
              id: "ebi11-u8-bile-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the two functions of bile in the duodenum.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bile function", statement: "Emulsifies lipids; neutralises acid." }],
                steps: [
                  { reasoning: "Bile salts emulsify large lipid droplets into smaller ones.", marks: 1, markCode: "M" },
                  { reasoning: "This increases surface area for lipase action.", marks: 1, markCode: "A" },
                  { reasoning: "Bile is alkaline and neutralises stomach acid.", marks: 1, markCode: "A" },
                  { reasoning: "This gives optimum pH for pancreatic/intestinal enzymes.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Emulsifies lipids; neutralises acid",
              },
            },
            {
              id: "ebi11-u8-bile-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain why stomach acid is necessary and why it must be neutralised later.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "pH control", statement: "Each enzyme needs its optimum pH." }],
                steps: [
                  { reasoning: "HCl provides pH ~2 for pepsin activity.", marks: 1, markCode: "M" },
                  { reasoning: "Acid helps denature proteins and kills many microbes.", marks: 1, markCode: "A" },
                  { reasoning: "Pancreatic amylase/lipase need near-neutral pH.", marks: 1, markCode: "A" },
                  { reasoning: "Bile neutralises acid in the duodenum.", marks: 1, markCode: "M" },
                  { reasoning: "This prevents denaturing the pancreatic enzymes.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Acid for pepsin + kills microbes; bile neutralises for pancreatic enzymes",
              },
            },
            {
              id: "ebi11-u8-bile-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State where bile is produced and stored.", marks: 2 },
                { label: "b", prompt: "Explain what emulsification is.", marks: 2 },
                { label: "c", prompt: "Why does bile contain no digestive enzymes yet aid lipid digestion?", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bile and emulsification", statement: "Bile aids digestion without enzymes." }],
                steps: [
                  { part: "a", reasoning: "Produced by liver; stored in gall bladder.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both correct.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Breaking large lipid droplets into small droplets.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "To increase surface area for enzyme action.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "It increases surface area for lipase, not digesting chemically itself.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Plus neutralises acid for optimal pH.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Liver/gall bladder; droplets→SA; aids lipase + pH",
              },
            },
            {
              id: "ebi11-u8-bile-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the organ producing bile and where it is stored. (b) Explain the role of bile salts. (c) Explain the role of stomach acid. (d) Why must acid be neutralised in the duodenum? (e) What is the optimum pH for pepsin?",
              parts: [
                { label: "a", prompt: "Source and storage of bile.", marks: 2 },
                { label: "b", prompt: "Bile salts role.", marks: 2 },
                { label: "c", prompt: "Stomach acid role.", marks: 2 },
                { label: "d", prompt: "Neutralisation reason.", marks: 3 },
                { label: "e", prompt: "Pepsin pH.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Bile and acid", statement: "pH control of digestion." }],
                steps: [
                  { part: "a", reasoning: "Liver produces; gall bladder stores.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Emulsify lipids → more surface area for lipase.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Provides pH ~2 for pepsin; kills microbes.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Pancreatic enzymes need neutral pH.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Bile neutralises stomach acid.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Prevents denaturing pancreatic enzymes.", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "About pH 2.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Liver/gall bladder; emulsify; acid pH 2; bile neutralises",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u8-gut-notes", title: "Digestion — notes",
      summary: "Food: mouth→stomach→small intestine→large intestine→anus. Amylase/protease/lipase; bile emulsifies and neutralises.",
      sections: [
        { heading: "Key idea", body: "Each enzyme is substrate-specific and pH-dependent." },
        { heading: "Bile", body: "Emulsifies lipids; alkaline pH protects pancreatic enzymes." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts", exportName: "lesson83",
    lesson: {
      id: "ebi11-u8-lesson-8-3", code: "8-3",
      title: "Absorption, Assimilation and Digestive Health",
      goal: "I CAN explain absorption in the small intestine, assimilation and digestive health issues.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Animal nutrition", "4BI1 absorption and assimilation"],
      vocabulary: [
        { term: "Villus", definition: "Finger-like projection of the ileum wall increasing surface area for absorption." },
        { term: "Absorption", definition: "Movement of digested food products from the gut lumen into blood or lymph." },
        { term: "Assimilation", definition: "Use of absorbed products by cells to build new material or release energy." },
        { term: "Lacteal", definition: "Lymph vessel inside a villus that absorbs lipid products." },
        { term: "Egestion", definition: "Removal of undigested food material (faeces) from the body." },
        { term: "Peristalsis", definition: "Muscular waves moving food along the gut." },
        { term: "Constipation", definition: "Difficulty passing faeces, often due to low fibre intake." },
      ],
      concepts: [
        {
          id: "ebi11-u8-absorb", title: "Villi and absorption",
          skill: "Explain how the small intestine is adapted for absorption and the routes of absorbed products.",
          sections: [
            { heading: "Structure of the ileum", body: "The ileum is long and folded, with millions of villi. Each villus contains a capillary network and a lacteal (lymph vessel). Villi greatly increase surface area. Microvilli on epithelial cells further increase area. Muscle layers allow peristalsis." },
            { heading: "Absorption", body: "Monosaccharides (glucose) and amino acids diffuse into capillaries → hepatic portal vein → liver. Fatty acids and glycerol re-form lipids and enter lacteals → lymph → blood. Most absorption occurs in the ileum." },
            { heading: "Assimilation and egestion", body: "Assimilation: absorbed products are used by cells — glucose for respiration, amino acids for protein synthesis, lipids for membranes/storage. Egestion: undigested material (mostly fibre) passes to the large intestine where water is absorbed, forming faeces expelled via the rectum." },
          ],
          keyFormulas: [
            { name: "Surface area adaptation", statement: "Long ileum + villi + microvilli → huge surface area" },
            { name: "Absorption routes", statement: "Glucose/amino acids → blood capillaries; lipids → lacteal → lymph" },
          ],
          workedExample: {
            problem: "Why is the ileum so folded and full of villi?",
            solution: "The folds, villi and microvilli massively increase surface area, allowing rapid absorption of digested food products into blood and lymph.",
          },
          questions: [
            {
              id: "ebi11-u8-absorb-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which part of the small intestine is the main site of absorption?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Duodenum" }, { id: "b", text: "Ileum" },
                { id: "c", text: "Stomach" }, { id: "d", text: "Oesophagus" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Ileum", statement: "Main absorption site." }],
                steps: [{ reasoning: "The ileum has villi for absorption.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Ileum",
              },
            },
            {
              id: "ebi11-u8-absorb-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the lymph vessel inside a villus.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lacteal", statement: "Lymph vessel in villus." }],
                steps: [{ reasoning: "The lacteal absorbs lipid products.", marks: 2, markCode: "M" }],
                finalAnswer: "Lacteal",
              },
            },
            {
              id: "ebi11-u8-absorb-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two structural adaptations of a villus that help absorption.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Villus adaptation", statement: "Large SA and thin wall aid diffusion." }],
                steps: [
                  { reasoning: "Villi greatly increase surface area of ileum wall.", marks: 1, markCode: "M" },
                  { reasoning: "Each villus has a dense capillary network close to the surface.", marks: 1, markCode: "M" },
                  { reasoning: "Short diffusion distance into blood.", marks: 1, markCode: "A" },
                  { reasoning: "Lacteal present for lipid absorption.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Large SA; capillaries+lacteal for short diffusion",
              },
            },
            {
              id: "ebi11-u8-absorb-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Compare the absorption of glucose and fatty acids after digestion.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Absorption routes", statement: "Monosaccharides to blood; lipids to lymph." }],
                steps: [
                  { reasoning: "Glucose diffuses into blood capillaries of villus.", marks: 1, markCode: "M" },
                  { reasoning: "Then carried via hepatic portal vein to liver.", marks: 1, markCode: "A" },
                  { reasoning: "Fatty acids + glycerol re-form lipids and enter lacteal.", marks: 1, markCode: "M" },
                  { reasoning: "Lacteal drains into lymph then blood.", marks: 1, markCode: "A" },
                  { reasoning: "Amino acids go to blood like glucose.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Glucose→blood capillaries; lipids→lacteal→lymph",
              },
            },
            {
              id: "ebi11-u8-absorb-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define absorption and assimilation.", marks: 2 },
                { label: "b", prompt: "State two uses of absorbed glucose and one use of amino acids.", marks: 2 },
                { label: "c", prompt: "What happens to undigested food in the large intestine?", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Absorption/assimilation", statement: "Uptake vs use of products." }],
                steps: [
                  { part: "a", reasoning: "Absorption: products into blood/lymph; assimilation: cells use them.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Both defined distinctly.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Glucose: respiration energy / glycogen store.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Amino acids: protein synthesis.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Water absorbed; faeces formed and egested.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Absorption=uptake; assimilation=use; water absorbed in large intestine",
              },
            },
            {
              id: "ebi11-u8-absorb-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the main absorption site. (b) Define villus. (c) State two adaptations of villi. (d) Where do glucose and lipids go after absorption? (e) Define assimilation. (f) What is egestion?",
              parts: [
                { label: "a", prompt: "Site.", marks: 1 },
                { label: "b", prompt: "Villus.", marks: 1 },
                { label: "c", prompt: "Two adaptations.", marks: 2 },
                { label: "d", prompt: "Routes.", marks: 2 },
                { label: "e", prompt: "Assimilation.", marks: 2 },
                { label: "f", prompt: "Egestion.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Absorption", statement: "Ileum villi absorb products." }],
                steps: [
                  { part: "a", reasoning: "Ileum (small intestine).", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Finger-like projection of ileum wall.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Large SA / capillary network + lacteal / thin wall.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Glucose→blood capillaries; lipids→lacteal→lymph.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Cells using absorbed products to build tissue or release energy.", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "Removal of undigested material (faeces).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Ileum; villus; SA adaptations; blood vs lymph; assimilation; egestion",
              },
            },
          ],
        },
        {
          id: "ebi11-u8-health", title: "Peristalsis, egestion and digestive health",
          skill: "Explain the role of the large intestine and fibre, and describe diet-related digestive problems.",
          sections: [
            { heading: "Large intestine", body: "Receives undigested material. Water and some mineral ions are absorbed here, leaving semi-solid faeces. Peristalsis moves material along; the rectum stores faeces until egested via the anus. Gut bacteria produce some vitamins (e.g. vitamin K)." },
            { heading: "Role of fibre", body: "Fibre adds bulk to faeces, stimulates peristalsis and prevents constipation. A low-fibre diet slows gut movement and can cause constipation or bowel disorders." },
            { heading: "Diet-related health", body: "Excess energy intake → obesity (risk of heart disease, diabetes). Excess saturated fat and salt linked to cardiovascular problems. High sugar linked to tooth decay. Imbalanced diets cause deficiency diseases (scurvy, rickets, anaemia)." },
          ],
          keyFormulas: [
            { name: "Fibre function", statement: "Adds bulk → stimulates peristalsis → prevents constipation" },
            { name: "Energy balance", statement: "Energy in food vs energy used; excess stored as fat" },
          ],
          workedExample: {
            problem: "A person eats little fruit, vegetables or whole grains. Predict a likely digestive problem.",
            solution: "Low fibre intake reduces faecal bulk, slowing peristalsis and likely causing constipation.",
          },
          questions: [
            {
              id: "ebi11-u8-health-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is egestion?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Breaking down food" }, { id: "b", text: "Removing undigested faeces" },
                { id: "c", text: "Absorbing glucose" }, { id: "d", text: "Chewing food" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Egestion", statement: "Removal of undigested material." }],
                steps: [{ reasoning: "Egestion = removal of faeces.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Removing undigested faeces",
              },
            },
            {
              id: "ebi11-u8-health-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the main function of the large intestine.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Large intestine", statement: "Absorbs water; forms faeces." }],
                steps: [
                  { reasoning: "Absorbs water from undigested material.", marks: 1, markCode: "M" },
                  { reasoning: "Forms and stores faeces for egestion.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Absorbs water; forms faeces",
              },
            },
            {
              id: "ebi11-u8-health-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how fibre prevents constipation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Fibre and constipation", statement: "Bulk stimulates peristalsis." }],
                steps: [
                  { reasoning: "Fibre is indigestible and adds bulk to faeces.", marks: 1, markCode: "M" },
                  { reasoning: "Bulk stretches gut wall, stimulating peristaltic waves.", marks: 1, markCode: "A" },
                  { reasoning: "Faster movement prevents faeces drying and hardening.", marks: 1, markCode: "A" },
                  { reasoning: "Low fibre → slow transit → constipation.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Fibre bulk → peristalsis → prevents constipation",
              },
            },
            {
              id: "ebi11-u8-health-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain how a diet consistently high in energy can lead to health problems.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Energy balance", statement: "Excess energy stored as fat." }],
                steps: [
                  { reasoning: "Energy intake exceeds energy used in respiration.", marks: 1, markCode: "M" },
                  { reasoning: "Excess glucose converted to fat and stored.", marks: 1, markCode: "A" },
                  { reasoning: "Leads to obesity.", marks: 1, markCode: "A" },
                  { reasoning: "Obesity increases risk of heart disease, diabetes, joint problems.", marks: 1, markCode: "M" },
                  { reasoning: "Often linked to high fat/sugar and low fibre diet.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Excess energy → fat storage → obesity → disease risk",
              },
            },
            {
              id: "ebi11-u8-health-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State the function of the large intestine.", marks: 2 },
                { label: "b", prompt: "Explain the role of fibre in gut health.", marks: 2 },
                { label: "c", prompt: "Name two health problems linked to a poor diet.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Gut health", statement: "Water absorption, fibre, diet balance." }],
                steps: [
                  { part: "a", reasoning: "Absorbs water; forms faeces.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Adds bulk, stimulates peristalsis, prevents constipation.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "e.g. obesity, constipation, tooth decay, scurvy.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Water absorption; fibre prevents constipation; obesity/decay",
              },
            },
            {
              id: "ebi11-u8-health-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define egestion. (b) State the function of the large intestine. (c) Explain the role of fibre. (d) Name two deficiency diseases. (e) Explain how excess energy intake causes obesity. (f) State one health risk of obesity.",
              parts: [
                { label: "a", prompt: "Egestion.", marks: 1 },
                { label: "b", prompt: "Large intestine.", marks: 2 },
                { label: "c", prompt: "Fibre role.", marks: 2 },
                { label: "d", prompt: "Two deficiencies.", marks: 2 },
                { label: "e", prompt: "Obesity mechanism.", marks: 2 },
                { label: "f", prompt: "One risk.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Digestive health", statement: "Egestion to diet disease." }],
                steps: [
                  { part: "a", reasoning: "Removal of undigested faeces.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Absorbs water; forms/stores faeces.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Bulk → peristalsis → prevents constipation.", marks: 2, markCode: "A" },
                  { part: "d", reasoning: "e.g. scurvy (vit C), rickets (vit D), anaemia (Fe).", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Energy in > used → stored as fat → obesity.", marks: 2, markCode: "A" },
                  { part: "f", reasoning: "Heart disease / diabetes / joint problems.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Egestion; water absorption; fibre; deficiencies; obesity mechanism",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u8-absorb-notes", title: "Absorption — notes",
      summary: "Ileum villi absorb products; glucose→blood, lipids→lacteal→lymph. Large intestine absorbs water; fibre prevents constipation.",
      sections: [
        { heading: "Key idea", body: "Surface area adaptations maximise absorption." },
        { heading: "Health", body: "Low fibre → constipation; excess energy → obesity." },
      ],
    },
  },
];
