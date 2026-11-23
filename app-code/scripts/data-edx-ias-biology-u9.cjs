module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson91",
    lesson: {
      id: "ediasbio-u9-lesson-9-1", code: "9-1",
      title: "Respiration and ATP Production",
      goal: "I CAN describe aerobic and anaerobic respiration, the stages of each, and the ATP yield per glucose.",
      standards: ["WBI15 Respiration, Internal Environment, Coordination and Gene Technology", "Respiration"],
      vocabulary: [
        { term: "Respiration", definition: "Metabolic reactions releasing energy from organic molecules, mainly glucose, to make ATP." },
        { term: "ATP", definition: "Adenosine triphosphate — the universal energy currency of cells, hydrolysed to ADP + Pi releasing energy." },
        { term: "Glycolysis", definition: "First stage of respiration in the cytoplasm: glucose is split to two pyruvate molecules with a net gain of 2 ATP." },
        { term: "Krebs cycle", definition: "Cycle in the mitochondrial matrix that oxidises acetyl-CoA producing CO2, NADH and FADH2." },
        { term: "Electron transport chain", definition: "Series of proteins in the inner mitochondrial membrane that uses electrons from NADH/FADH2 to make most of the ATP." },
        { term: "Anaerobic respiration", definition: "Respiration without oxygen; only glycolysis operates, producing 2 ATP per glucose plus lactate or ethanol." },
        { term: "Lactic acid", definition: "Product of anaerobic respiration in animal muscles; causes fatigue and must be removed using oxygen." },
      ],
      concepts: [
        {
          id: "ediasbio-u9-aerobic", title: "Aerobic respiration",
          skill: "Describe the stages of aerobic respiration and the role of mitochondria in ATP production.",
          sections: [
            { heading: "Glycolysis and the link reaction", body: "Glycolysis occurs in the cytoplasm: glucose is phosphorylated and split into two triose phosphate molecules, which are oxidised to pyruvate. Net gain: 2 ATP and 2 NADH per glucose. Pyruvate enters the mitochondrion, where the link reaction converts each pyruvate into acetyl-CoA, releasing CO2 and reducing NAD to NADH." },
            { heading: "Krebs cycle and oxidative phosphorylation", body: "In the mitochondrial matrix, acetyl-CoA combines with oxaloacetate to form citrate. The Krebs cycle decarboxylates the two-carbon units, releasing CO2 and generating NADH and FADH2 while regenerating oxaloacetate. NADH and FADH2 donate electrons to the electron transport chain on the inner membrane (cristae); oxygen is the final electron acceptor, forming water. Energy released pumps H+ into the intermembrane space; H+ diffuse back through ATP synthase producing about 34 ATP. Overall yield is about 36 ATP per glucose." },
            { heading: "Mitochondrial adaptations", body: "Mitochondria have a double membrane. The inner membrane is folded into cristae, greatly increasing surface area for the electron transport chain and ATP synthase. The matrix contains the enzymes of the link reaction and Krebs cycle; the intermembrane space holds the proton gradient that drives chemiosmosis." },
          ],
          keyFormulas: [
            { name: "Overall equation", statement: "C6H12O6 + 6O2 → 6CO2 + 6H2O + energy (about 36 ATP)" },
            { name: "Glycolysis", statement: "Glucose → 2 pyruvate; net 2 ATP + 2 NADH" },
            { name: "Link reaction", statement: "Pyruvate + CoA + NAD → acetyl-CoA + CO2 + NADH" },
            { name: "Oxygen role", statement: "O2 is the final electron acceptor → forms water" },
          ],
          workedExample: {
            problem: "How many molecules of CO2 are released and how many ATP are produced when one glucose molecule is respired aerobically?",
            solution: "CO2: 2 from the link reaction (one per pyruvate) + 4 from two turns of the Krebs cycle = 6 CO2. ATP: about 36 per glucose (2 glycolysis + about 2 link + about 32 from Krebs/ETC, commonly quoted as 36 total).",
          },
          questions: [
            {
              id: "ediasbio-u9-aer-q1", difficulty: "foundation", totalMarks: 1,
              stem: "In which organelle does aerobic respiration mainly occur?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Ribosome" }, { id: "b", text: "Mitochondrion" },
                { id: "c", text: "Nucleus" }, { id: "d", text: "Chloroplast" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Aerobic respiration site", statement: "Mitochondria are the site of aerobic respiration." }],
                steps: [{ reasoning: "Aerobic respiration occurs in mitochondria.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Mitochondrion",
              },
            },
            {
              id: "ediasbio-u9-aer-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Write the overall equation for aerobic respiration and state the approximate ATP yield per glucose molecule.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Aerobic respiration", statement: "Glucose + oxygen → CO2 + water + ATP." }],
                steps: [
                  { reasoning: "Equation: C6H12O6 + 6O2 → 6CO2 + 6H2O + energy.", marks: 1, markCode: "M" },
                  { reasoning: "Yield: about 36 ATP per glucose.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "C6H12O6 + 6O2 → 6CO2 + 6H2O; about 36 ATP",
              },
            },
            {
              id: "ediasbio-u9-aer-q3", difficulty: "core", totalMarks: 4,
              stem: "Describe what happens to pyruvate after glycolysis during aerobic respiration.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Link reaction and Krebs cycle", statement: "Pyruvate → acetyl-CoA → Krebs cycle → electron carriers." }],
                steps: [
                  { reasoning: "Pyruvate diffuses into the mitochondrion.", marks: 1, markCode: "M" },
                  { reasoning: "Link reaction: pyruvate + CoA + NAD → acetyl-CoA + CO2 + NADH.", marks: 1, markCode: "M" },
                  { reasoning: "Acetyl-CoA enters the Krebs cycle in the matrix.", marks: 1, markCode: "M" },
                  { reasoning: "NADH/FADH2 carry hydrogen to the electron transport chain for ATP production.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Pyruvate → acetyl-CoA → Krebs cycle → NADH/FADH2 → ETC → ATP",
              },
            },
            {
              id: "ediasbio-u9-aer-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain why the inner mitochondrial membrane is folded into cristae.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Cristae", statement: "Folding increases surface area for respiration." }],
                steps: [
                  { reasoning: "Cristae greatly increase the surface area of the inner membrane.", marks: 1, markCode: "M" },
                  { reasoning: "More room for electron transport chain complexes and ATP synthase enzymes.", marks: 1, markCode: "M" },
                  { reasoning: "More H+ can be pumped into the intermembrane space per unit time.", marks: 1, markCode: "M" },
                  { reasoning: "Steeper proton gradient → faster chemiosmosis → more ATP produced.", marks: 1, markCode: "A" },
                  { reasoning: "Supports the high ATP demand of metabolically active cells.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Cristae increase SA → more ETC/ATP synthase → greater ATP production",
              },
            },
            {
              id: "ediasbio-u9-aer-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State where glycolysis takes place in the cell.", marks: 1 },
                { label: "b", prompt: "State the net ATP yield of glycolysis per glucose molecule.", marks: 1 },
                { label: "c", prompt: "Explain why oxygen is essential for aerobic respiration.", marks: 2 },
                { label: "d", prompt: "Name the products of the link reaction.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Stages of aerobic respiration", statement: "Glycolysis → link → Krebs → ETC; oxygen is final electron acceptor." }],
                steps: [
                  { part: "a", reasoning: "Cytoplasm.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "2 ATP net per glucose.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "O2 is the final electron acceptor in the electron transport chain.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Without it the ETC stops, the proton gradient collapses and almost no ATP is made beyond glycolysis.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Products: acetyl-CoA, CO2 and NADH.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "All three named.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Cytoplasm; 2 ATP; O2 final acceptor; acetyl-CoA + CO2 + NADH",
              },
            },
            {
              id: "ediasbio-u9-aer-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Describe the four stages of aerobic respiration.",
              parts: [
                { label: "a", prompt: "Describe glycolysis.", marks: 2 },
                { label: "b", prompt: "Describe the link reaction.", marks: 2 },
                { label: "c", prompt: "Describe the Krebs cycle.", marks: 3 },
                { label: "d", prompt: "Describe oxidative phosphorylation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Aerobic respiration stages", statement: "Glycolysis → link → Krebs → ETC in sequence." }],
                steps: [
                  { part: "a", reasoning: "Glycolysis occurs in the cytoplasm.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Glucose → 2 pyruvate with net 2 ATP + 2 NADH.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Pyruvate enters the mitochondrion; CoA and NAD are involved.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Products: acetyl-CoA + CO2 + NADH.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "In the matrix, acetyl-CoA + oxaloacetate → citrate.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Decarboxylations release CO2 and produce NADH/FADH2.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Oxaloacetate is regenerated so the cycle can repeat.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "NADH/FADH2 donate electrons to the ETC on the cristae.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Energy pumps H+ into the intermembrane space; H+ return through ATP synthase makes ATP.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "O2 is the final electron acceptor, forming water; most ATP is made here.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Glycolysis, link reaction, Krebs cycle, oxidative phosphorylation",
                commonErrors: ["Saying glycolysis occurs in the mitochondrion.", "Forgetting oxygen is the final electron acceptor."],
              },
            },
          ],
        },
        {
          id: "ediasbio-u9-anaerobic", title: "Anaerobic respiration",
          skill: "Compare aerobic and anaerobic respiration and explain the role of oxygen in removing lactate.",
          sections: [
            { heading: "Lactic acid fermentation", body: "When oxygen supply is insufficient (e.g. sprinting), pyruvate is reduced to lactate by lactate dehydrogenase. This oxidises NADH back to NAD+, which is essential because NAD+ is needed for glycolysis to continue. Net gain is only 2 ATP per glucose, but ATP is produced rapidly. Lactate accumulates, lowering pH and causing fatigue." },
            { heading: "Alcoholic fermentation", body: "In yeast and some bacteria, pyruvate is converted to ethanol and CO2: pyruvate → ethanol + CO2, again regenerating NAD+. This is used industrially in brewing, bread-making (CO2 makes dough rise) and biofuel production." },
            { heading: "Oxygen debt and uses", body: "After exercise, extra oxygen (the oxygen debt, or excess post-exercise oxygen consumption, EPOC) is needed to oxidise and remove accumulated lactate. Aerobic respiration yields about 36 ATP per glucose but is slower; anaerobic yields only 2 ATP but is very fast — useful for short bursts of intense activity." },
          ],
          keyFormulas: [
            { name: "Lactic acid fermentation", statement: "Glucose → 2 lactate + 2 ATP (net)" },
            { name: "Alcoholic fermentation", statement: "Glucose → 2 ethanol + 2 CO2 + 2 ATP (net)" },
            { name: "ATP comparison", statement: "Aerobic ≈ 36 ATP/glucose vs anaerobic = 2 ATP/glucose" },
          ],
          workedExample: {
            problem: "Why do sprinters breathe heavily for several minutes after finishing a 100 m race?",
            solution: "The sprint used anaerobic respiration, producing lactate. The oxygen debt must be repaid: extra oxygen oxidises lactate to CO2 and water, so ventilation and heart rate stay elevated during recovery.",
          },
          questions: [
            {
              id: "ediasbio-u9-ana-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is the main product of anaerobic respiration in human muscle cells?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Carbon dioxide" }, { id: "b", text: "Ethanol" },
                { id: "c", text: "Lactic acid" }, { id: "d", text: "Water" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lactic acid fermentation", statement: "Pyruvate → lactate in animal muscles." }],
                steps: [{ reasoning: "Animal muscles produce lactic acid anaerobically.", marks: 1, markCode: "B" }],
                finalAnswer: "**(c)** Lactic acid",
              },
            },
            {
              id: "ediasbio-u9-ana-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Why must NAD+ be regenerated during anaerobic respiration?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "NAD+ regeneration", statement: "Glycolysis requires NAD+ as an electron carrier." }],
                steps: [
                  { reasoning: "NAD+ is needed as an electron carrier in glycolysis.", marks: 1, markCode: "M" },
                  { reasoning: "Without oxygen, NADH is oxidised back to NAD+ by reducing pyruvate to lactate/ethanol, allowing glycolysis to continue.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Regenerating NAD+ allows glycolysis to continue without oxygen",
              },
            },
            {
              id: "ediasbio-u9-ana-q3", difficulty: "core", totalMarks: 4,
              stem: "Compare the ATP yield of aerobic and anaerobic respiration.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Aerobic vs anaerobic yield", statement: "36 vs 2 ATP per glucose." }],
                steps: [
                  { reasoning: "Aerobic respiration yields about 36 ATP per glucose.", marks: 1, markCode: "M" },
                  { reasoning: "Anaerobic respiration yields only 2 ATP per glucose.", marks: 1, markCode: "M" },
                  { reasoning: "Anaerobic uses only glycolysis — no Krebs cycle or electron transport chain.", marks: 1, markCode: "M" },
                  { reasoning: "Aerobic is far more efficient but requires oxygen; anaerobic is fast but inefficient.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Aerobic ≈36 ATP, anaerobic = 2 ATP per glucose",
              },
            },
            {
              id: "ediasbio-u9-ana-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain the term oxygen debt.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Oxygen debt", statement: "Extra oxygen needed after exercise to remove lactate." }],
                steps: [
                  { reasoning: "During intense exercise, anaerobic respiration produces lactate that accumulates in muscles.", marks: 1, markCode: "M" },
                  { reasoning: "After exercise, extra oxygen (the oxygen debt) is required to deal with the lactate.", marks: 1, markCode: "M" },
                  { reasoning: "Oxygen is used to oxidise lactate to CO2 and water (or to convert it back to glucose in the liver).", marks: 1, markCode: "M" },
                  { reasoning: "Breathing and heart rate therefore stay elevated during recovery.", marks: 1, markCode: "A" },
                  { reasoning: "Also called excess post-exercise oxygen consumption (EPOC).", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Extra O2 needed to oxidise/remove accumulated lactate after exercise",
                commonErrors: ["Saying oxygen debt is oxygen stored in muscles."],
              },
            },
            {
              id: "ediasbio-u9-ana-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name a microorganism used for alcoholic fermentation.", marks: 1 },
                { label: "b", prompt: "State the products of alcoholic fermentation.", marks: 2 },
                { label: "c", prompt: "Explain why dough rises during bread-making.", marks: 1 },
                { label: "d", prompt: "Give two industrial uses of anaerobic fermentation.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Alcoholic fermentation", statement: "Pyruvate → ethanol + CO2; industrial uses." }],
                steps: [
                  { part: "a", reasoning: "Yeast.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Products: ethanol and carbon dioxide.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Both products named.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "CO2 produced by yeast becomes trapped in the dough, making it rise.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Any two: brewing/beer/wine, yogurt/cheese production, biogas generation, biofuel.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Two valid uses given.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Yeast; ethanol + CO2; CO2 raises dough; brewing, dairy, biogas",
              },
            },
            {
              id: "ediasbio-u9-ana-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Compare aerobic and anaerobic respiration.",
              parts: [
                { label: "a", prompt: "Write the overall equation for aerobic respiration.", marks: 1 },
                { label: "b", prompt: "Write the overall equation for lactic acid fermentation.", marks: 1 },
                { label: "c", prompt: "State the ATP yield of each.", marks: 2 },
                { label: "d", prompt: "Give examples of organisms using each type.", marks: 2 },
                { label: "e", prompt: "Compare the advantages and disadvantages of each.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Aerobic vs anaerobic respiration", statement: "Equations, yield, organisms, efficiency." }],
                steps: [
                  { part: "a", reasoning: "C6H12O6 + 6O2 → 6CO2 + 6H2O + energy.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Glucose → 2 lactate + 2 ATP (net).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Aerobic ≈ 36 ATP per glucose.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Anaerobic = 2 ATP per glucose.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Aerobic: most eukaryotes and many prokaryotes.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Anaerobic: muscle during oxygen debt, yeast (alcoholic), some bacteria.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Aerobic: efficient, complete oxidation, no toxic products; needs oxygen.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Anaerobic: rapid ATP production, works without oxygen; very inefficient, produces lactate/ethanol.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Conclusion: aerobic preferred for sustained activity, anaerobic for short bursts.", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "Lactate must later be oxidised using oxygen (oxygen debt).", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Aerobic ≈36 ATP, needs O2; anaerobic 2 ATP, fast, produces lactate/ethanol",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ediasbio-u9-resp-notes", title: "Respiration and ATP — notes",
      summary: "Aerobic respiration ≈36 ATP via glycolysis, link, Krebs, ETC; anaerobic = 2 ATP and produces lactate or ethanol.",
      sections: [
        { heading: "Key idea", body: "Oxygen is only needed at the electron transport chain as the final electron acceptor; without it cells fall back on glycolysis alone (2 ATP)." },
        { heading: "Memory aid", body: "Glycolysis (cytoplasm, 2 ATP) → link (acetyl-CoA) → Krebs (matrix) → oxidative phosphorylation (cristae, most ATP)." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson92",
    lesson: {
      id: "ediasbio-u9-lesson-9-2", code: "9-2",
      title: "Skeletal Muscle and Contraction",
      goal: "I CAN describe the structure of skeletal muscle and explain the sliding-filament mechanism of contraction.",
      standards: ["WBI15 Respiration, Muscles and the Internal Environment", "Muscle contraction"],
      vocabulary: [
        { term: "Skeletal muscle", definition: "Striated muscle attached to bones, under voluntary control, made of parallel fibres." },
        { term: "Muscle fibre", definition: "Single muscle cell containing many nuclei, mitochondria and myofibrils." },
        { term: "Myofibril", definition: "Long cylindrical organelle inside a muscle fibre made of repeating sarcomeres." },
        { term: "Sarcomere", definition: "Contractile unit between two Z-lines containing actin and myosin filaments." },
        { term: "Actin / myosin", definition: "Thin / thick protein filaments that slide past each other during contraction." },
        { term: "Sarcoplasmic reticulum", definition: "Membranous network in muscle fibres storing and releasing calcium ions." },
        { term: "Motor unit", definition: "A motor neurone and all the muscle fibres it innervates." },
      ],
      concepts: [
        {
          id: "ediasbio-u9-muscle", title: "Structure of skeletal muscle",
          skill: "Describe the levels of organisation in skeletal muscle and the band pattern of a sarcomere.",
          sections: [
            { heading: "Levels of organisation", body: "A whole muscle is made of bundles of muscle fibres. Each fibre is a multinucleate cell containing myofibrils, mitochondria for ATP supply, and a sarcoplasmic reticulum storing Ca2+. Each myofibril is a chain of sarcomeres — the basic contractile units lying between Z-lines." },
            { heading: "Filaments and bands", body: "Thin actin filaments and thick myosin filaments overlap in the sarcomere. The I-band contains actin only, the A-band contains both filaments, the H-zone contains myosin only, and the M-line is at the centre. Troponin and tropomyosin sit on actin and block the myosin-binding sites at rest." },
            { heading: "Motor units", body: "A motor neurone plus the fibres it supplies is a motor unit. Stimulating a motor unit contracts all its fibres (all-or-none). Force is graded by recruiting more motor units (summation). Fast fibres contract quickly but fatigue; slow fibres are fatigue-resistant." },
          ],
          keyFormulas: [
            { name: "Sarcomere", statement: "Contractile unit between two Z-lines" },
            { name: "Bands", statement: "I-band = actin only; A-band = actin + myosin; H-zone = myosin only; M-line = centre" },
            { name: "Contraction change", statement: "I-band and H-zone shorten; A-band stays the same length" },
          ],
          workedExample: {
            problem: "During muscle contraction, which regions of the sarcomere change length?",
            solution: "The I-band and H-zone shorten because actin slides over myosin; the A-band (length of the myosin filament) stays constant and the Z-lines move closer together.",
          },
          questions: [
            {
              id: "ediasbio-u9-mus-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is the basic contractile unit of a muscle fibre?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Myofibril" }, { id: "b", text: "Sarcomere" },
                { id: "c", text: "Muscle fibre" }, { id: "d", text: "Motor unit" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sarcomere", statement: "Basic contractile unit between Z-lines." }],
                steps: [{ reasoning: "The sarcomere is the contractile unit.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Sarcomere",
              },
            },
            {
              id: "ediasbio-u9-mus-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the two protein filaments found in a sarcomere and state which is thicker.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Actin and myosin", statement: "Thin actin, thick myosin." }],
                steps: [
                  { reasoning: "Thin filaments: actin; thick filaments: myosin.", marks: 1, markCode: "M" },
                  { reasoning: "Myosin is the thicker filament.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Actin (thin) and myosin (thick)",
              },
            },
            {
              id: "ediasbio-u9-mus-q3", difficulty: "core", totalMarks: 4,
              stem: "Describe the structure of a sarcomere.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Sarcomere structure", statement: "Z-lines to Z-lines with actin/myosin bands." }],
                steps: [
                  { reasoning: "A sarcomere extends from one Z-line to the next.", marks: 1, markCode: "M" },
                  { reasoning: "Thin actin and thick myosin filaments overlap within it.", marks: 1, markCode: "M" },
                  { reasoning: "I-band (actin only), A-band (both), H-zone (myosin only) and M-line at centre.", marks: 1, markCode: "M" },
                  { reasoning: "Troponin and tropomyosin are associated with actin and block binding sites at rest.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Z-line to Z-line; actin + myosin with I/A/H bands",
              },
            },
            {
              id: "ediasbio-u9-mus-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain the roles of troponin and tropomyosin in muscle contraction.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Troponin and tropomyosin", statement: "Ca2+-regulated blocking of actin binding sites." }],
                steps: [
                  { reasoning: "At rest, tropomyosin covers the myosin-binding sites on actin, preventing cross-bridge formation.", marks: 1, markCode: "M" },
                  { reasoning: "Troponin binds calcium ions released from the sarcoplasmic reticulum.", marks: 1, markCode: "M" },
                  { reasoning: "Ca2+ binding to troponin causes tropomyosin to move, exposing the binding sites.", marks: 1, markCode: "M" },
                  { reasoning: "Myosin heads can then bind actin and contraction proceeds.", marks: 1, markCode: "A" },
                  { reasoning: "This prevents contraction without a nerve signal raising Ca2+.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Troponin senses Ca2+; tropomyosin blocks/unblocks actin sites",
              },
            },
            {
              id: "ediasbio-u9-mus-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the membrane surrounding a muscle fibre.", marks: 1 },
                { label: "b", prompt: "Name the organelle that stores calcium ions in a muscle fibre.", marks: 1 },
                { label: "c", prompt: "Define a motor unit.", marks: 2 },
                { label: "d", prompt: "Explain how muscle force is graded using motor units.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Motor units", statement: "Neuron + fibres; all-or-none, graded by recruitment." }],
                steps: [
                  { part: "a", reasoning: "Sarcolemma.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Sarcoplasmic reticulum.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "A motor unit is a motor neurone plus all the muscle fibres it innervates.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Both components named.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Stimulating a motor unit contracts all its fibres (all-or-none).", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "More motor units are recruited for greater force; summation of twitches smooths contraction.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Sarcolemma; SR; motor neurone + fibres; graded by recruitment",
              },
            },
            {
              id: "ediasbio-u9-mus-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Describe the structure of skeletal muscle from the whole organ to the protein filaments.",
              parts: [
                { label: "a", prompt: "Describe the levels of organisation.", marks: 3 },
                { label: "b", prompt: "Name the protein filaments and their associated proteins.", marks: 2 },
                { label: "c", prompt: "Describe the band pattern of a sarcomere.", marks: 3 },
                { label: "d", prompt: "State the role of the sarcoplasmic reticulum.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Muscle organisation", statement: "Muscle → fibres → myofibrils → sarcomeres → filaments." }],
                steps: [
                  { part: "a", reasoning: "Whole muscle contains bundles of muscle fibres.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Each fibre is a multinucleate cell containing myofibrils, mitochondria and SR.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Myofibrils are chains of sarcomeres between Z-lines.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Actin (thin) and myosin (thick) filaments.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Troponin and tropomyosin associated with actin.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Z-lines define sarcomere ends; M-line at centre.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "I-band = actin only; A-band = actin + myosin; H-zone = myosin only.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "I-band and H-zone shorten on contraction; A-band constant.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Stores Ca2+ ions.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Releases Ca2+ on stimulation to trigger contraction; pumps it back for relaxation.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Hierarchy of organisation, filaments, bands, SR role",
              },
            },
          ],
        },
        {
          id: "ediasbio-u9-sliding", title: "The sliding-filament mechanism",
          skill: "Explain excitation-contraction coupling and the cross-bridge cycle.",
          sections: [
            { heading: "Excitation-contraction coupling", body: "A motor neurone releases acetylcholine at the neuromuscular junction, generating an action potential along the sarcolemma and down T-tubules. This triggers the sarcoplasmic reticulum to release Ca2+ into the sarcoplasm. Ca2+ binds troponin, tropomyosin moves, and myosin-binding sites on actin are exposed." },
            { heading: "The cross-bridge cycle", body: "Myosin heads bind to exposed actin sites forming cross-bridges. A power stroke pulls the thin filament toward the M-line. ATP binds the myosin head, causing detachment; ATP is hydrolysed to ADP + Pi, re-cocking the head for the next stroke. The cycle repeats, sliding actin over myosin so the sarcomere shortens." },
            { heading: "Relaxation", body: "When stimulation stops, Ca2+ is actively pumped back into the sarcoplasmic reticulum using ATP. Tropomyosin returns to block the actin sites, cross-bridges detach, and the sarcomere lengthens. Without ATP (e.g. after death), myosin cannot detach — this is rigor mortis." },
          ],
          keyFormulas: [
            { name: "Trigger", statement: "Nerve impulse → ACh → action potential → SR releases Ca2+" },
            { name: "Cross-bridge", statement: "Myosin binds actin → power stroke → ATP detaches head → ATP hydrolysis re-cocks" },
            { name: "Result", statement: "Actin slides over myosin; I-band and H-zone shorten; A-band unchanged" },
          ],
          workedExample: {
            problem: "Why does rigor mortis occur after death?",
            solution: "No ATP is produced after death, so myosin heads cannot detach from actin binding sites. Cross-bridges remain locked in place and muscles stay contracted.",
          },
          questions: [
            {
              id: "ediasbio-u9-sli-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which ion triggers muscle contraction by binding to troponin?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Na+" }, { id: "b", text: "K+" },
                { id: "c", text: "Ca2+" }, { id: "d", text: "Cl-" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Calcium trigger", statement: "Ca2+ released from SR binds troponin." }],
                steps: [{ reasoning: "Calcium ions trigger contraction via troponin.", marks: 1, markCode: "B" }],
                finalAnswer: "**(c)** Ca2+",
              },
            },
            {
              id: "ediasbio-u9-sli-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the role of ATP in the cross-bridge cycle.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "ATP in cross-bridge cycle", statement: "ATP detaches myosin and re-cocks it." }],
                steps: [
                  { reasoning: "ATP binding causes the myosin head to detach from actin.", marks: 1, markCode: "M" },
                  { reasoning: "Hydrolysis of ATP to ADP + Pi re-cocks (energises) the head for the next power stroke.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "ATP detaches myosin heads and powers re-cocking",
              },
            },
            {
              id: "ediasbio-u9-sli-q3", difficulty: "core", totalMarks: 4,
              stem: "Describe excitation-contraction coupling.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Excitation-contraction coupling", statement: "Nerve impulse → Ca2+ release → binding sites exposed." }],
                steps: [
                  { reasoning: "Motor neurone releases acetylcholine, generating an action potential along the sarcolemma and T-tubules.", marks: 1, markCode: "M" },
                  { reasoning: "The sarcoplasmic reticulum releases Ca2+ into the sarcoplasm.", marks: 1, markCode: "M" },
                  { reasoning: "Ca2+ binds troponin, causing tropomyosin to move.", marks: 1, markCode: "M" },
                  { reasoning: "Myosin-binding sites on actin are exposed, allowing contraction.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Impulse → ACh → action potential → Ca2+ → sites exposed",
              },
            },
            {
              id: "ediasbio-u9-sli-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain the sliding-filament theory of muscle contraction.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sliding filament", statement: "Actin slides over myosin powered by ATP." }],
                steps: [
                  { reasoning: "Myosin heads bind exposed sites on actin to form cross-bridges.", marks: 1, markCode: "M" },
                  { reasoning: "A power stroke pulls the thin actin filament toward the M-line.", marks: 1, markCode: "M" },
                  { reasoning: "ATP detaches the head and is hydrolysed to re-cock it; the cycle repeats.", marks: 1, markCode: "M" },
                  { reasoning: "The sarcomere shortens: I-band and H-zone shorten while A-band stays constant.", marks: 1, markCode: "M" },
                  { reasoning: "Z-lines move closer together.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Cross-bridges pull actin over myosin; I-band and H-zone shorten",
              },
            },
            {
              id: "ediasbio-u9-sli-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the ion that is pumped back into the sarcoplasmic reticulum during relaxation.", marks: 1 },
                { label: "b", prompt: "Why does relaxation require ATP?", marks: 2 },
                { label: "c", prompt: "What is rigor mortis?", marks: 2 },
                { label: "d", prompt: "State what happens to the length of the I-band during contraction.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Relaxation and rigor", statement: "Ca2+ reuptake needs ATP; no ATP → locked cross-bridges." }],
                steps: [
                  { part: "a", reasoning: "Ca2+ (calcium ions).", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Pumping Ca2+ back into the SR is active transport against its concentration gradient.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Active transport requires ATP hydrolysis.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Rigor mortis is persistent muscle contraction after death.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Without ATP, myosin heads cannot detach from actin, so cross-bridges stay locked.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "The I-band shortens.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Ca2+; ATP for Ca2+ pump; rigor = locked cross-bridges; I-band shortens",
              },
            },
            {
              id: "ediasbio-u9-sli-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Explain how a nerve impulse causes skeletal muscle contraction.",
              parts: [
                { label: "a", prompt: "Describe transmission at the neuromuscular junction.", marks: 2 },
                { label: "b", prompt: "Explain the role of calcium ions.", marks: 3 },
                { label: "c", prompt: "Describe the cross-bridge cycle.", marks: 3 },
                { label: "d", prompt: "Describe relaxation and rigor mortis.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Muscle contraction sequence", statement: "Impulse → Ca2+ → cross-bridges → relaxation needs ATP." }],
                steps: [
                  { part: "a", reasoning: "Motor neurone releases acetylcholine into the synaptic cleft.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "ACh binds receptors on the sarcolemma → action potential propagates along sarcolemma/T-tubules.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Action potential triggers SR to release Ca2+ into sarcoplasm.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Ca2+ binds troponin on actin filaments.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Tropomyosin moves, exposing myosin-binding sites.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Myosin heads bind exposed actin sites forming cross-bridges.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Power stroke pulls actin toward M-line; ATP detaches head and re-cocks it via hydrolysis.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Cycle repeats → sarcomere shortens, filaments slide.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "On relaxation, Ca2+ is pumped back into SR, tropomyosin re-blocks sites, cross-bridges detach.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Without ATP (after death) myosin cannot detach → rigor mortis.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "NMJ → Ca2+ release → cross-bridge cycling → ATP-dependent relaxation",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ediasbio-u9-mus-notes", title: "Muscle structure and contraction — notes",
      summary: "Muscle → fibres → myofibrils → sarcomeres. Nerve impulse → Ca2+ → cross-bridge cycle slides actin over myosin; ATP needed to detach and relax.",
      sections: [
        { heading: "Key idea", body: "Contraction is not shortening of filaments — actin slides over myosin. I-band and H-zone shorten; A-band stays constant." },
        { heading: "ATP link", body: "ATP is needed for the power stroke cycle (detachment/re-cocking) and for pumping Ca2+ back during relaxation." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson93",
    lesson: {
      id: "ediasbio-u9-lesson-9-3", code: "9-3",
      title: "Exercise, Oxygen Debt and Recovery",
      goal: "I CAN explain oxygen debt, recovery after exercise, and the cardiorespiratory adaptations to training.",
      standards: ["WBI15 Respiration, Muscles and the Internal Environment", "Exercise physiology"],
      vocabulary: [
        { term: "Oxygen debt", definition: "Extra oxygen consumed after exercise to oxidise and remove accumulated lactate." },
        { term: "EPOC", definition: "Excess post-exercise oxygen consumption — elevated oxygen uptake during recovery." },
        { term: "Cardiac output", definition: "Volume of blood pumped by the heart per minute = heart rate × stroke volume." },
        { term: "Stroke volume", definition: "Volume of blood pumped by one ventricle per beat." },
        { term: "Anaerobic threshold", definition: "Exercise intensity at which anaerobic respiration begins to contribute significantly to ATP supply." },
        { term: "Capillarisation", definition: "Increase in capillary density around muscle fibres improving oxygen delivery." },
      ],
      concepts: [
        {
          id: "ediasbio-u9-oxygendebt", title: "Oxygen debt and recovery",
          skill: "Explain oxygen debt, lactate removal and the recovery period after exercise.",
          sections: [
            { heading: "Oxygen debt", body: "During intense exercise, oxygen demand exceeds supply and anaerobic respiration dominates, producing lactate faster than it can be removed. After exercise, extra oxygen — the oxygen debt or EPOC — is needed to oxidise lactate to CO2 and water (or convert it back to glucose in the liver)." },
            { heading: "Recovery curve", body: "Oxygen consumption stays above resting levels during recovery. A fast component restores oxygen stores in blood, muscle and myoglobin; a slower component oxidises accumulated lactate. Ventilation and heart rate remain elevated until the debt is repaid." },
            { heading: "Effects of lactate", body: "Lactate lowers muscle pH, inhibiting enzymes and causing fatigue and the burning sensation. Trained athletes clear lactate faster, have a higher anaerobic threshold, and can sustain higher intensities aerobically." },
          ],
          keyFormulas: [
            { name: "Oxygen debt", statement: "Extra O2 after exercise ≈ O2 needed to oxidise accumulated lactate" },
            { name: "EPOC", statement: "Excess post-exercise oxygen consumption during recovery" },
            { name: "Anaerobic threshold", statement: "Intensity where anaerobic respiration becomes significant" },
          ],
          workedExample: {
            problem: "Why do sprinters breathe heavily for several minutes after a 400 m race?",
            solution: "The sprint relied on anaerobic respiration, building up lactate. The oxygen debt must be repaid: extra oxygen oxidises the lactate, so ventilation and heart rate remain elevated during recovery.",
          },
          questions: [
            {
              id: "ediasbio-u9-oxy-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which substance accumulates in muscles during anaerobic exercise and contributes to fatigue?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Glucose" }, { id: "b", text: "Lactic acid" },
                { id: "c", text: "Glycogen" }, { id: "d", text: "Carbon dioxide" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lactate accumulation", statement: "Anaerobic respiration produces lactate causing fatigue." }],
                steps: [{ reasoning: "Lactic acid accumulates during anaerobic exercise.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Lactic acid",
              },
            },
            {
              id: "ediasbio-u9-oxy-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Define oxygen debt.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Oxygen debt", statement: "Extra O2 needed after exercise." }],
                steps: [
                  { reasoning: "Oxygen debt is the extra oxygen consumed after exercise.", marks: 1, markCode: "M" },
                  { reasoning: "It is needed to oxidise/remove lactate accumulated during anaerobic respiration.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Extra O2 to oxidise/remove accumulated lactate",
              },
            },
            {
              id: "ediasbio-u9-oxy-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why heart rate and breathing rate increase after vigorous exercise.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Recovery response", statement: "Elevated HR and ventilation repay oxygen debt." }],
                steps: [
                  { reasoning: "An oxygen debt has been incurred during anaerobic exercise.", marks: 1, markCode: "M" },
                  { reasoning: "Extra oxygen is needed to oxidise/remove the accumulated lactate.", marks: 1, markCode: "M" },
                  { reasoning: "Heart rate rises to increase cardiac output and deliver more oxygen to muscles.", marks: 1, markCode: "M" },
                  { reasoning: "Ventilation increases to speed up gas exchange in the lungs.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Repay oxygen debt → more O2 delivery and gas exchange",
              },
            },
            {
              id: "ediasbio-u9-oxy-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Describe the recovery period after vigorous exercise.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Recovery (EPOC)", statement: "Oxygen consumption stays elevated until debt repaid." }],
                steps: [
                  { reasoning: "Oxygen consumption remains above the resting level (EPOC).", marks: 1, markCode: "M" },
                  { reasoning: "A fast component restores oxygen stores in blood, muscle and myoglobin.", marks: 1, markCode: "M" },
                  { reasoning: "A slower component oxidises lactate to CO2 and water; some is converted back to glucose in the liver.", marks: 1, markCode: "M" },
                  { reasoning: "Breathing and heart rate stay elevated to supply the extra oxygen.", marks: 1, markCode: "A" },
                  { reasoning: "Rates return to resting values once the oxygen debt is fully repaid.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "EPOC: O2 stores restored then lactate oxidised until debt repaid",
              },
            },
            {
              id: "ediasbio-u9-oxy-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the molecule whose build-up causes the burning sensation in muscles during intense exercise.", marks: 1 },
                { label: "b", prompt: "State two effects of lactic acid on muscle performance.", marks: 2 },
                { label: "c", prompt: "Define the anaerobic threshold.", marks: 2 },
                { label: "d", prompt: "State one way lactate is removed after exercise.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lactate and anaerobic threshold", statement: "Lactate causes fatigue; threshold marks anaerobic onset." }],
                steps: [
                  { part: "a", reasoning: "Lactic acid (lactate).", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Lowers muscle pH, inhibiting enzymes → fatigue.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Causes muscle burning/cramps and reduces contraction force.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Anaerobic threshold is the exercise intensity at which anaerobic respiration begins to make a significant contribution to ATP supply.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Beyond it, lactate accumulates faster than it is removed.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Oxidised to CO2 and water (or converted back to glucose in the liver).", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Lactate; fatigue/low pH; threshold = anaerobic onset; oxidised/converted",
              },
            },
            {
              id: "ediasbio-u9-oxy-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Explain the physiological events during and after a 400 m sprint.",
              parts: [
                { label: "a", prompt: "Describe the type of respiration used during the sprint.", marks: 2 },
                { label: "b", prompt: "Describe what happens to lactate during the sprint.", marks: 2 },
                { label: "c", prompt: "Describe the immediate recovery phase.", marks: 3 },
                { label: "d", prompt: "Describe the longer-term recovery phase.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Exercise and recovery", statement: "Anaerobic sprint → lactate → oxygen debt repayment." }],
                steps: [
                  { part: "a", reasoning: "Sprint relies mainly on anaerobic respiration because oxygen demand exceeds supply.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Only 2 ATP per glucose, but produced rapidly.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Pyruvate is reduced to lactate, which accumulates in muscles.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Lactate lowers pH causing fatigue; NAD+ is regenerated so glycolysis continues.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Heart rate and ventilation rise sharply to increase oxygen delivery and gas exchange.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Oxygen stores in blood, muscle and myoglobin are restored first (fast component of EPOC).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Lactate begins to be oxidised/removed using the extra oxygen.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Lactate is oxidised to CO2 and water or converted back to glucose in the liver.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Oxygen consumption stays elevated until the full oxygen debt is repaid.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Eventually breathing and heart rate return to resting levels.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Anaerobic sprint → lactate build-up → EPOC repays oxygen debt",
              },
            },
          ],
        },
        {
          id: "ediasbio-u9-cardio", title: "Cardiorespiratory adaptations to exercise",
          skill: "Calculate cardiac output and describe adaptations of heart, lungs and muscles to training.",
          sections: [
            { heading: "Cardiac adaptations", body: "Regular training enlarges (hypertrophies) the heart muscle, increasing stroke volume. Cardiac output = heart rate × stroke volume rises during exercise because both increase. Trained hearts have lower resting heart rates because each beat pumps more blood." },
            { heading: "Respiratory adaptations", body: "Ventilation rate and depth increase to meet oxygen demand. Training increases capillarisation around muscle fibres (more blood vessels), haemoglobin concentration and oxygen-carrying capacity, and myoglobin stores in muscle." },
            { heading: "Muscular adaptations", body: "Muscles develop more mitochondria, raising aerobic capacity and the anaerobic threshold. Slow-twitch fibres increase for endurance; lactic acid clearance improves, so less lactate accumulates at a given intensity." },
          ],
          keyFormulas: [
            { name: "Cardiac output", statement: "CO = heart rate × stroke volume" },
            { name: "Units", statement: "cm³/min or dm³/min (1 dm³ = 1000 cm³)" },
          ],
          workedExample: {
            problem: "At rest, heart rate = 70 beats/min and stroke volume = 70 cm³. During exercise, heart rate = 180 and stroke volume = 120 cm³. Calculate cardiac output in each case.",
            solution: "Rest: 70 × 70 = 4900 cm³/min ≈ 4.9 dm³/min. Exercise: 180 × 120 = 21 600 cm³/min = 21.6 dm³/min — about 4.4 times higher.",
          },
          questions: [
            {
              id: "ediasbio-u9-car-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which equation gives cardiac output?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Heart rate × stroke volume" }, { id: "b", text: "Heart rate + stroke volume" },
                { id: "c", text: "Stroke volume ÷ heart rate" }, { id: "d", text: "Heart rate − stroke volume" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cardiac output", statement: "CO = HR × SV." }],
                steps: [{ reasoning: "Cardiac output equals heart rate times stroke volume.", marks: 1, markCode: "B" }],
                finalAnswer: "**(a)** HR × SV",
              },
            },
            {
              id: "ediasbio-u9-car-q2", difficulty: "foundation", totalMarks: 2,
              stem: "A person has a resting heart rate of 60 beats/min and a stroke volume of 80 cm³. Calculate the cardiac output in dm³/min.",
              response: { type: "numeric", parts: [{ label: "a", answer: 4.8, unit: "dm³/min" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Cardiac output", statement: "CO = HR × SV." }],
                steps: [
                  { reasoning: "CO = 60 × 80 = 4800 cm³/min.", marks: 1, markCode: "M" },
                  { reasoning: "Convert to dm³: 4800 cm³ = 4.8 dm³/min.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "4.8 dm³/min",
              },
            },
            {
              id: "ediasbio-u9-car-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how cardiac output increases during exercise.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Cardiac output during exercise", statement: "Both HR and SV rise → CO increases." }],
                steps: [
                  { reasoning: "Heart rate increases (sympathetic stimulation/adrenaline).", marks: 1, markCode: "M" },
                  { reasoning: "Stroke volume increases because the ventricles contract more strongly and fill more.", marks: 1, markCode: "M" },
                  { reasoning: "Since CO = HR × SV, the product rises substantially.", marks: 1, markCode: "M" },
                  { reasoning: "More blood is delivered per minute, supplying O2 and glucose to working muscles.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "HR and SV both rise → cardiac output increases",
              },
            },
            {
              id: "ediasbio-u9-car-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Describe three adaptations of the cardiorespiratory system to regular exercise training.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Training adaptations", statement: "Heart, vessels and muscles adapt to raise aerobic capacity." }],
                steps: [
                  { reasoning: "Heart muscle hypertrophy increases stroke volume and lowers resting heart rate.", marks: 1, markCode: "M" },
                  { reasoning: "Capillarisation increases around muscle fibres, improving oxygen delivery.", marks: 1, markCode: "M" },
                  { reasoning: "More mitochondria in muscles raises aerobic capacity and the anaerobic threshold.", marks: 1, markCode: "M" },
                  { reasoning: "Increased haemoglobin/myoglobin improves oxygen carriage and storage.", marks: 1, markCode: "A" },
                  { reasoning: "Lactate clearance improves, so less fatigue at a given intensity.", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Bigger heart SV, more capillaries, more mitochondria, better O2 carriage",
              },
            },
            {
              id: "ediasbio-u9-car-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define stroke volume.", marks: 1 },
                { label: "b", prompt: "Calculate cardiac output when heart rate is 150 beats/min and stroke volume is 100 cm³. Give your answer in dm³/min.", marks: 2 },
                { label: "c", prompt: "Name two factors that can increase stroke volume.", marks: 2 },
                { label: "d", prompt: "State the usual units of cardiac output.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cardiac output", statement: "CO = HR × SV; units cm³/min or dm³/min." }],
                steps: [
                  { part: "a", reasoning: "Stroke volume is the volume of blood pumped by one ventricle per beat.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "CO = 150 × 100 = 15 000 cm³/min.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "= 15 dm³/min.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Stronger ventricular contraction (more forceful ejection).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Greater end-diastolic volume (more blood filling the ventricle).", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "cm³/min or dm³/min.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "SV per beat; 15 dm³/min; stronger contraction/greater filling; cm³ or dm³ per min",
              },
            },
            {
              id: "ediasbio-u9-car-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A trained athlete has a resting heart rate of 50 beats/min and stroke volume of 90 cm³. During a race, heart rate rises to 190 beats/min and stroke volume to 130 cm³.",
              parts: [
                { label: "a", prompt: "Calculate the resting cardiac output in dm³/min.", marks: 2 },
                { label: "b", prompt: "Calculate the cardiac output during the race in dm³/min.", marks: 2 },
                { label: "c", prompt: "Calculate the percentage increase in cardiac output.", marks: 2 },
                { label: "d", prompt: "Explain why a trained athlete can have a lower resting heart rate than an untrained person.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cardiac output", statement: "CO = HR × SV; compare rest vs exercise." }],
                steps: [
                  { part: "a", reasoning: "Resting CO = 50 × 90 = 4500 cm³/min = 4.5 dm³/min.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Correct conversion to dm³/min.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Exercise CO = 190 × 130 = 24 700 cm³/min.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "= 24.7 dm³/min.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Increase = 24.7 − 4.5 = 20.2 dm³/min.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Percentage increase = (20.2 / 4.5) × 100 ≈ 449%.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Training enlarges the heart so stroke volume is larger at rest.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "A lower heart rate can therefore maintain the same resting cardiac output.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Increased parasympathetic (vagal) tone slows the resting heart.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "This leaves a greater heart-rate reserve for exercise.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Rest 4.5, exercise 24.7 dm³/min; ≈449% increase; larger SV → lower resting HR",
                commonErrors: ["Using cm³/min without converting to dm³/min.", "Calculating percentage of exercise CO instead of increase."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ediasbio-u9-ex-notes", title: "Exercise, oxygen debt and recovery — notes",
      summary: "Intense exercise → lactate + oxygen debt; recovery (EPOC) restores O2 stores then oxidises lactate. CO = HR × SV.",
      sections: [
        { heading: "Key idea", body: "Oxygen debt = extra oxygen needed after exercise, mainly to oxidise accumulated lactate." },
        { heading: "Calculation", body: "Cardiac output = heart rate × stroke volume; convert cm³ to dm³ (÷1000) for dm³/min." },
      ],
    },
  },
];
