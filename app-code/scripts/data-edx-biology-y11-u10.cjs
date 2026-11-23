module.exports = [
  {
    file: "lesson-10-1.ts", exportName: "lesson101",
    lesson: {
      id: "ebi11-u10-lesson-10-1", code: "10-1",
      title: "Tissues in Animals and Plants",
      goal: "I CAN identify major tissue types in animals and plants and state their functions.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Organisation of multicellular organisms", "4BI1 tissues"],
      vocabulary: [
        { term: "Tissue", definition: "Group of similar cells organised to perform a shared function." },
        { term: "Epithelial tissue", definition: "Animal tissue covering surfaces and lining organs." },
        { term: "Muscle tissue", definition: "Animal tissue that contracts to produce movement." },
        { term: "Glandular tissue", definition: "Animal tissue that secretes enzymes or hormones." },
        { term: "Connective tissue", definition: "Animal tissue that supports and connects body parts (e.g. blood, bone)." },
        { term: "Epidermal tissue", definition: "Plant tissue forming the outer protective layer." },
        { term: "Mesophyll", definition: "Plant photosynthetic tissue of palisade and spongy cells." },
        { term: "Meristem", definition: "Plant tissue of dividing cells responsible for growth." },
      ],
      concepts: [
        {
          id: "ebi11-u10-animal-tissues", title: "Animal tissues",
          skill: "Describe epithelial, muscle, glandular, connective and nerve tissues and their roles.",
          sections: [
            { heading: "Covering and lining tissues", body: "Epithelial tissue covers body surfaces and lines organs (skin, gut lining) — protects and allows exchange. Glandular tissue is modified epithelial tissue that secretes digestive enzymes and hormones." },
            { heading: "Contractile and supporting tissues", body: "Muscle tissue contracts to produce movement — cardiac (heart), skeletal (limbs) and smooth (gut wall). Connective tissue supports and connects: blood, bone, cartilage, adipose (fat) tissue." },
            { heading: "Nerve tissue", body: "Nerve tissue consists of neurones that transmit electrical impulses, coordinating responses. It is found throughout the body, especially brain, spinal cord and nerves." },
          ],
          keyFormulas: [
            { name: "Animal tissues", statement: "Epithelial, muscle, glandular, connective, nerve" },
            { name: "Levels", statement: "Cell → tissue → organ → system → organism" },
          ],
          workedExample: {
            problem: "Which tissues are found in the stomach wall and what does each do?",
            solution: "Muscle tissue churns food; glandular tissue secretes gastric juice; epithelial tissue lines and protects the wall.",
          },
          questions: [
            {
              id: "ebi11-u10-at-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which tissue contracts to produce movement?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Epithelial" }, { id: "b", text: "Muscle" },
                { id: "c", text: "Connective" }, { id: "d", text: "Glandular" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Muscle tissue", statement: "Contractile tissue." }],
                steps: [{ reasoning: "Muscle tissue contracts for movement.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Muscle",
              },
            },
            {
              id: "ebi11-u10-at-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the function of epithelial tissue.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Epithelial tissue", statement: "Covers surfaces and lines organs." }],
                steps: [{ reasoning: "Covers body surfaces and lines organs for protection/exchange.", marks: 2, markCode: "M" }],
                finalAnswer: "Protection and lining of surfaces",
              },
            },
            {
              id: "ebi11-u10-at-q3", difficulty: "core", totalMarks: 4,
              stem: "Describe the function of glandular tissue with an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Glandular tissue", statement: "Secretory tissue." }],
                steps: [
                  { reasoning: "Glandular tissue secretes substances.", marks: 1, markCode: "M" },
                  { reasoning: "Example: stomach glands secrete gastric juice/enzymes.", marks: 1, markCode: "A" },
                  { reasoning: "Or endocrine glands secrete hormones.", marks: 1, markCode: "M" },
                  { reasoning: "Secretions aid digestion or regulate body functions.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Secretory tissue — enzymes/hormones",
              },
            },
            {
              id: "ebi11-u10-at-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Compare muscle tissue and connective tissue in structure and function.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Tissue comparison", statement: "Different roles in body." }],
                steps: [
                  { reasoning: "Muscle: elongated cells that contract for movement.", marks: 1, markCode: "M" },
                  { reasoning: "Connective: varied cells in matrix — supports/connects.", marks: 1, markCode: "M" },
                  { reasoning: "Muscle function = force/motion; connective = support/transport.", marks: 1, markCode: "A" },
                  { reasoning: "Examples: muscle in heart/limbs; connective = blood/bone.", marks: 1, markCode: "M" },
                  { reasoning: "Both essential but serve different purposes.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Muscle contracts; connective supports/connects",
              },
            },
            {
              id: "ebi11-u10-at-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name three animal tissues.", marks: 1 },
                { label: "b", prompt: "State the function of each.", marks: 3 },
                { label: "c", prompt: "Name the tissue that transmits impulses.", marks: 1 },
                { label: "d", prompt: "Give one example of connective tissue.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Animal tissues", statement: "Types and roles." }],
                steps: [
                  { part: "a", reasoning: "Epithelial/muscle/glandular/connective/nerve (any three).", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Protection/contraction/secretion/support/impulse (matched).", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Nerve tissue.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Blood/bone/cartilage/adipose.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Tissue types; functions; nerve; connective example",
              },
            },
            {
              id: "ebi11-u10-at-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define tissue. (b) Name four animal tissues. (c) State the function of muscle and glandular tissue. (d) What is connective tissue? (e) What does nerve tissue do? (f) Name two organs made of these tissues.",
              parts: [
                { label: "a", prompt: "Tissue definition.", marks: 1 },
                { label: "b", prompt: "Four tissues.", marks: 2 },
                { label: "c", prompt: "Muscle + glandular functions.", marks: 2 },
                { label: "d", prompt: "Connective tissue.", marks: 2 },
                { label: "e", prompt: "Nerve tissue.", marks: 1 },
                { label: "f", prompt: "Two organs.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Animal tissues", statement: "Structure and roles." }],
                steps: [
                  { part: "a", reasoning: "Group of similar cells with shared function.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Epithelial, muscle, glandular, connective, nerve (any four).", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Muscle contracts; glandular secretes.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Supports/connects — blood, bone, cartilage.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Carries electrical impulses.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Heart, stomach, skin, lung (any two).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Tissue def; types; functions; connective; nerve; organs",
              },
            },
          ],
        },
        {
          id: "ebi11-u10-plant-tissues", title: "Plant tissues",
          skill: "Describe epidermal, photosynthetic, vascular and meristem tissues in plants.",
          sections: [
            { heading: "Protective and photosynthetic tissues", body: "Epidermal tissue forms the outer protective layer with a waxy cuticle reducing water loss. Palisade and spongy mesophyll are photosynthetic tissues inside leaves. Guard cells (modified epidermal) control stomata." },
            { heading: "Vascular and growing tissues", body: "Xylem transports water and minerals upward; phloem transports sucrose between source and sink. Vascular bundles contain both. Meristematic tissue at root and shoot tips divides for growth — the plant equivalent of stem-cell activity." },
            { heading: "Tissue organisation", body: "Plant tissues are arranged in organs: leaf = epidermis + mesophyll + vascular bundles; stem = epidermis + cortex + vascular bundles; root = epidermis + cortex + vascular cylinder." },
          ],
          keyFormulas: [
            { name: "Plant tissues", statement: "Epidermal, mesophyll, xylem/phloem, meristem" },
            { name: "Meristem", statement: "Dividing tissue at tips → growth" },
          ],
          workedExample: {
            problem: "What tissues would you find in a leaf cross-section?",
            solution: "Upper/lower epidermis (protection), palisade mesophyll (photosynthesis), spongy mesophyll (gas exchange), vascular bundles (xylem+phloem transport), guard cells (stomatal control).",
          },
          questions: [
            {
              id: "ebi11-u10-pt-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which plant tissue transports water and minerals?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Palisade mesophyll" }, { id: "b", text: "Phloem" },
                { id: "c", text: "Xylem" }, { id: "d", text: "Epidermis" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Xylem", statement: "Water/mineral transport tissue." }],
                steps: [{ reasoning: "Xylem carries water and minerals.", marks: 1, markCode: "M" }],
                finalAnswer: "**(c)** Xylem",
              },
            },
            {
              id: "ebi11-u10-pt-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is the function of epidermal tissue in plants?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Epidermal tissue", statement: "Protective outer layer." }],
                steps: [{ reasoning: "Forms protective outer layer; cuticle reduces water loss.", marks: 2, markCode: "M" }],
                finalAnswer: "Protection / waterproofing",
              },
            },
            {
              id: "ebi11-u10-pt-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the role of meristem tissue in plant growth.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Meristem", statement: "Dividing tissue for growth." }],
                steps: [
                  { reasoning: "Meristem cells are unspecialised and divide rapidly.", marks: 1, markCode: "M" },
                  { reasoning: "Found at root tips and shoot tips.", marks: 1, markCode: "M" },
                  { reasoning: "New cells differentiate into specialised tissues.", marks: 1, markCode: "A" },
                  { reasoning: "Enables lengthwise growth of roots and shoots.", marks: 1, markCode: "A" },
              ],
                finalAnswer: "Dividing cells at tips → growth and differentiation",
              },
            },
            {
              id: "ebi11-u10-pt-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Describe the tissues found in a leaf and their functions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Leaf tissues", statement: "Each tissue has a role in the leaf." }],
                steps: [
                  { reasoning: "Epidermis protects leaf surface.", marks: 1, markCode: "M" },
                  { reasoning: "Palisade mesophyll photosynthesises.", marks: 1, markCode: "M" },
                  { reasoning: "Spongy mesophyll allows gas diffusion.", marks: 1, markCode: "A" },
                  { reasoning: "Vascular bundles (xylem/phloem) transport.", marks: 1, markCode: "M" },
                  { reasoning: "Guard cells control stomata.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Epidermis, palisade, spongy, vascular, guard cells",
              },
            },
            {
              id: "ebi11-u10-pt-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name three plant tissues.", marks: 1 },
                { label: "b", prompt: "State the function of xylem and phloem.", marks: 2 },
                { label: "c", prompt: "State the function of epidermal and meristem tissues.", marks: 2 },
                { label: "d", prompt: "Name the tissue containing chloroplasts for photosynthesis.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Plant tissues", statement: "Types and roles." }],
                steps: [
                  { part: "a", reasoning: "Epidermal/mesophyll/xylem/phloem/meristem (any three).", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Xylem water/minerals up; phloem sucrose source→sink.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Epidermis protects; meristem divides for growth.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Palisade (and spongy) mesophyll.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Tissue types; vascular functions; epidermis/meristem; mesophyll",
              },
            },
            {
              id: "ebi11-u10-pt-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define tissue. (b) Name three plant tissues. (c) State the function of xylem and phloem. (d) State the function of epidermal and meristem tissue. (e) Name the photosynthetic tissue. (f) How does tissue organisation differ between leaf and stem?",
              parts: [
                { label: "a", prompt: "Tissue definition.", marks: 1 },
                { label: "b", prompt: "Three tissues.", marks: 1 },
                { label: "c", prompt: "Vascular functions.", marks: 2 },
                { label: "d", prompt: "Epidermis + meristem.", marks: 2 },
                { label: "e", prompt: "Photosynthetic tissue.", marks: 1 },
                { label: "f", prompt: "Leaf vs stem organisation.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Plant tissues", statement: "Hierarchy and roles." }],
                steps: [
                  { part: "a", reasoning: "Group of similar cells with shared function.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Epidermal, mesophyll, xylem, phloem, meristem (any three).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Xylem water up; phloem sucrose source→sink.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Epidermis protects; meristem divides for growth.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Palisade/spongy mesophyll.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Leaf: mesophyll for photosynthesis; stem: cortex/vascular for support+transport.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Def; tissues; vascular; epidermis/meristem; mesophyll; leaf vs stem",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u10-tissues-notes", title: "Tissues — notes",
      summary: "Animal tissues: epithelial, muscle, glandular, connective, nerve. Plant tissues: epidermal, mesophyll, vascular, meristem.",
      sections: [
        { heading: "Key idea", body: "Tissues are groups of similar cells with a shared function." },
        { heading: "Examples", body: "Heart = muscle+connective+epithelial+nerve; leaf = epidermis+mesophyll+vascular." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts", exportName: "lesson102",
    lesson: {
      id: "ebi11-u10-lesson-10-2", code: "10-2",
      title: "Organs and Organ Systems",
      goal: "I CAN explain how tissues form organs and organs cooperate in systems.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Organisation of multicellular organisms", "4BI1 organs and systems"],
      vocabulary: [
        { term: "Organ", definition: "Structure made of different tissues working together for a function." },
        { term: "Organ system", definition: "Group of organs cooperating to perform a major body function." },
        { term: "Digestive system", definition: "System breaking down and absorbing food (mouth to anus)." },
        { term: "Circulatory system", definition: "System of heart, blood vessels and blood transporting substances." },
        { term: "Respiratory system", definition: "System of lungs, airways and diaphragm for gas exchange." },
        { term: "Nervous system", definition: "System of brain, spinal cord and nerves coordinating responses." },
        { term: "Excretory system", definition: "System of kidneys and bladder removing nitrogenous waste." },
      ],
      concepts: [
        {
          id: "ebi11-u10-organs", title: "Organs and their structure",
          skill: "Define an organ and describe how multiple tissues combine in examples such as the heart and leaf.",
          sections: [
            { heading: "What makes an organ", body: "An organ contains several different tissues arranged to perform a specific function — more than the sum of its parts. Examples: heart, stomach, lung, kidney, leaf, root." },
            { heading: "The heart as an organ", body: "Heart contains cardiac muscle (contracts), connective tissue (structure/valves), epithelial tissue (lining), nerve tissue (coordination) and blood vessels. Together they pump blood." },
            { heading: "The leaf as an organ", body: "Leaf contains epidermal tissue (protection), palisade and spongy mesophyll (photosynthesis), vascular bundles (transport), guard cells (stomatal control). Together they photosynthesise and exchange gases." },
          ],
          keyFormulas: [
            { name: "Organ", statement: "Different tissues → one coordinated function" },
            { name: "Examples", statement: "Heart, stomach, lung, leaf, root, kidney" },
          ],
          workedExample: {
            problem: "Explain why the leaf qualifies as an organ.",
            solution: "It is made of several different tissues — epidermis, mesophyll, vascular bundles and guard cells — organised to carry out photosynthesis and gas exchange.",
          },
          questions: [
            {
              id: "ebi11-u10-org-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is an organ?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A single cell" }, { id: "b", text: "A group of identical cells" },
                { id: "c", text: "Different tissues working together" }, { id: "d", text: "A whole organ system" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organ", statement: "Different tissues, one function." }],
                steps: [{ reasoning: "Organ = different tissues working together.", marks: 1, markCode: "M" }],
                finalAnswer: "**(c)** Different tissues working together",
              },
            },
            {
              id: "ebi11-u10-org-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name two organs in the human body.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organ", statement: "Examples: heart, lung, stomach." }],
                steps: [{ reasoning: "Heart, lung, stomach, kidney, leaf (any two).", marks: 2, markCode: "M" }],
                finalAnswer: "Heart and lung (any two organs)",
              },
            },
            {
              id: "ebi11-u10-org-q3", difficulty: "core", totalMarks: 4,
              stem: "Describe the tissues found in the heart and their roles.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Heart tissues", statement: "Multiple tissues for pumping." }],
                steps: [
                  { reasoning: "Cardiac muscle tissue contracts to pump blood.", marks: 1, markCode: "M" },
                  { reasoning: "Connective tissue supports and forms valves.", marks: 1, markCode: "M" },
                  { reasoning: "Epithelial tissue lines chambers and vessels.", marks: 1, markCode: "M" },
                  { reasoning: "Nerve tissue coordinates the heartbeat.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Muscle+connective+epithelial+nerve → pump",
              },
            },
            {
              id: "ebi11-u10-org-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain how the tissues of a leaf work together to photosynthesise.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Leaf as organ", statement: "Tissues cooperate for photosynthesis." }],
                steps: [
                  { reasoning: "Palisade mesophyll contains chloroplasts for photosynthesis.", marks: 1, markCode: "M" },
                  { reasoning: "Epidermis protects leaf surface.", marks: 1, markCode: "M" },
                  { reasoning: "Stomata/guard cells allow CO2 entry.", marks: 1, markCode: "A" },
                  { reasoning: "Vascular bundles supply water and remove sugars.", marks: 1, markCode: "M" },
                  { reasoning: "Spongy mesophyll allows gas diffusion.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Mesophyll photosynthesises; epidermis protects; stomata exchange; vascular supplies",
              },
            },
            {
              id: "ebi11-u10-org-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define organ.", marks: 1 },
                { label: "b", prompt: "Name two organs and their functions.", marks: 2 },
                { label: "c", prompt: "State two tissues found in the heart.", marks: 1 },
                { label: "d", prompt: "State two tissues found in a leaf.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organs", statement: "Tissue combinations." }],
                steps: [
                  { part: "a", reasoning: "Different tissues working together.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Heart pumps; lung exchanges; stomach digests (any two).", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Muscle/connective/epithelial/nerve (any two).", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Epidermis/mesophyll/vascular (any two).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Organ def; examples; heart tissues; leaf tissues",
              },
            },
            {
              id: "ebi11-u10-org-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define organ. (b) Name three organs. (c) State the function of each. (d) Name two tissues in the heart. (e) Name two tissues in a leaf. (f) Why is an organ more than a tissue?",
              parts: [
                { label: "a", prompt: "Organ definition.", marks: 1 },
                { label: "b", prompt: "Three organs.", marks: 1 },
                { label: "c", prompt: "Functions.", marks: 3 },
                { label: "d", prompt: "Heart tissues.", marks: 1 },
                { label: "e", prompt: "Leaf tissues.", marks: 2 },
                { label: "f", prompt: "Organ vs tissue.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organs", statement: "Tissue-level organisation." }],
                steps: [
                  { part: "a", reasoning: "Different tissues working together for a function.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Heart, lung, stomach, leaf (any three).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Pump/exchange/digest/photosynthesise (any three correct).", marks: 3, markCode: "M" },
                  { part: "d", reasoning: "Muscle + connective/epithelial/nerve (any two).", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Epidermis + mesophyll/vascular (any two).", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "Organs integrate multiple tissue types for complex function.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Def; organs; functions; heart/leaf tissues; organ>tissue",
              },
            },
          ],
        },
        {
          id: "ebi11-u10-systems", title: "Organ systems",
          skill: "Describe major organ systems and explain how they depend on each other.",
          sections: [
            { heading: "Major systems", body: "Digestive (mouth→stomach→intestines): breaks down and absorbs food. Circulatory (heart, blood vessels, blood): transports substances. Respiratory (lungs, airways, diaphragm): gas exchange. Nervous (brain, spinal cord, nerves): coordinates responses. Excretory (kidneys, bladder): removes nitrogenous waste. Reproductive: produces offspring." },
            { heading: "Systems are interdependent", body: "Respiratory supplies O2 to blood; circulatory delivers it to cells. Digestive provides nutrients; circulatory transports them. Nervous controls muscle contraction and glands. Excretory removes wastes produced by respiration." },
            { heading: "Homeostasis", body: "Healthy function requires all systems working together — the body maintains constant internal conditions (temperature, glucose, water) through coordinated organ systems." },
          ],
          keyFormulas: [
            { name: "Organ system", statement: "Organs cooperating for a major function" },
            { name: "Interdependence", statement: "Systems depend on each other for homeostasis" },
          ],
          workedExample: {
            problem: "Why can the respiratory and circulatory systems not function independently?",
            solution: "Lungs oxygenate blood but cannot deliver it; the heart pumps oxygenated blood to cells and returns CO2 to lungs. Each is essential to the other's function.",
          },
          questions: [
            {
              id: "ebi11-u10-sys-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is an organ system?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A single organ" }, { id: "b", text: "A group of organs working together" },
                { id: "c", text: "A single tissue" }, { id: "d", text: "A cell type" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organ system", statement: "Organs cooperating." }],
                steps: [{ reasoning: "System = group of organs working together.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Group of organs working together",
              },
            },
            {
              id: "ebi11-u10-sys-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name one organ system and its main function.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organ system", statement: "System + function." }],
                steps: [
                  { reasoning: "e.g. circulatory = transport; respiratory = gas exchange.", marks: 1, markCode: "M" },
                  { reasoning: "System and function correctly matched.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "e.g. circulatory = transport",
              },
            },
            {
              id: "ebi11-u10-sys-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how the respiratory and circulatory systems depend on each other.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "System interdependence", statement: "Lungs oxygenate; circulation distributes." }],
                steps: [
                  { reasoning: "Lungs oxygenate blood and remove CO2.", marks: 1, markCode: "M" },
                  { reasoning: "Heart pumps oxygenated blood to body cells.", marks: 1, markCode: "M" },
                  { reasoning: "Cells respire, using O2 and producing CO2.", marks: 1, markCode: "A" },
                  { reasoning: "CO2 returns to lungs via blood for removal.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Lungs↔circulation exchange gases continuously",
              },
            },
            {
              id: "ebi11-u10-sys-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Describe how the digestive and circulatory systems work together.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "System interaction", statement: "Nutrition supply chain." }],
                steps: [
                  { reasoning: "Digestive system breaks food into absorbable products.", marks: 1, markCode: "M" },
                  { reasoning: "Products absorbed into blood in small intestine.", marks: 1, markCode: "M" },
                  { reasoning: "Circulatory system transports nutrients to all cells.", marks: 1, markCode: "A" },
                  { reasoning: "Also transports oxygen needed for respiration.", marks: 1, markCode: "A" },
                  { reasoning: "Wastes carried to excretory organs for removal.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Digestion→absorption→circulation distributes nutrients",
              },
            },
            {
              id: "ebi11-u10-sys-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define organ system.", marks: 1 },
                { label: "b", prompt: "Name two organ systems.", marks: 1 },
                { label: "c", prompt: "State the function of each.", marks: 2 },
                { label: "d", prompt: "Explain how two systems depend on each other.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organ systems", statement: "Cooperating organs." }],
                steps: [
                  { part: "a", reasoning: "Organs cooperating for a major function.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Circulatory, respiratory, digestive, nervous (any two).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Transport/gas exchange/digestion/coordination (any two).", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "e.g. respiratory supplies O2; circulatory distributes.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "System def; examples; functions; interdependence",
              },
            },
            {
              id: "ebi11-u10-sys-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define organ system. (b) Name three organ systems. (c) State the function of each. (d) Explain how the circulatory and respiratory systems interact. (e) Explain how the digestive and circulatory systems interact.",
              parts: [
                { label: "a", prompt: "Definition.", marks: 1 },
                { label: "b", prompt: "Three systems.", marks: 1 },
                { label: "c", prompt: "Functions.", marks: 3 },
                { label: "d", prompt: "Circulatory + respiratory.", marks: 3 },
                { label: "e", prompt: "Digestive + circulatory.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organ systems", statement: "Cooperation for homeostasis." }],
                steps: [
                  { part: "a", reasoning: "Organs cooperating for a major function.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Circulatory, respiratory, digestive, nervous, excretory (any three).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Transport/gas exchange/digestion/coordination/waste removal.", marks: 3, markCode: "M" },
                  { part: "d", reasoning: "Lungs oxygenate blood; heart pumps it; CO2 returns.", marks: 3, markCode: "A" },
                  { part: "e", reasoning: "Digested nutrients absorbed into blood and distributed.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Def; systems; functions; interactions",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u10-systems-notes", title: "Organs and systems — notes",
      summary: "Organs = different tissues for one function. Systems = organs for a major function. Systems are interdependent for homeostasis.",
      sections: [
        { heading: "Key idea", body: "Levels: cell→tissue→organ→system→organism." },
        { heading: "Examples", body: "Heart=organ; circulatory=system; lungs+heart cooperate." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts", exportName: "lesson103",
    lesson: {
      id: "ebi11-u10-lesson-10-3", code: "10-3",
      title: "Structure and Function of Major Organs",
      goal: "I CAN relate the structure of major animal and plant organs to their functions.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Organisation of multicellular organisms", "4BI1 organ structure-function"],
      vocabulary: [
        { term: "Heart", definition: "Muscular organ pumping blood around the body." },
        { term: "Lung", definition: "Organ where gas exchange occurs in alveoli." },
        { term: "Leaf", definition: "Plant organ specialised for photosynthesis." },
        { term: "Root", definition: "Plant organ for anchorage and water/mineral absorption." },
        { term: "Stem", definition: "Plant organ supporting leaves and transporting materials." },
        { term: "Coronary artery", definition: "Vessel supplying oxygenated blood to heart muscle." },
        { term: "Cuticle", definition: "Waxy waterproof layer on leaf epidermis reducing water loss." },
        { term: "Vascular bundle", definition: "Cluster of xylem and phloem conducting materials in plants." },
      ],
      concepts: [
        {
          id: "ebi11-u10-animal-organs", title: "Animal organs: heart, lung and gut",
          skill: "Describe how heart, lung and digestive organs are structured for their functions.",
          sections: [
            { heading: "Heart", body: "Four chambers (two atria, two ventricles), valves preventing backflow, thick muscular walls (left ventricle thickest), coronary arteries feeding heart muscle. Pumps blood in double circulation." },
            { heading: "Lung", body: "Airways branch to bronchioles ending in alveoli. Alveoli have huge surface area, one-cell walls, moist lining and dense capillaries for efficient gas exchange. Diaphragm and intercostal muscles ventilate." },
            { heading: "Digestive organs", body: "Mouth (teeth/tongue), oesophagus (peristalsis), stomach (churns + acid + protease), small intestine (villi for absorption), large intestine (absorbs water). Each organ's structure matches its digestive role." },
          ],
          keyFormulas: [
            { name: "Heart", statement: "Chambers + valves + thick walls → efficient pumping" },
            { name: "Alveoli", statement: "Large SA + thin + moist + capillaries → gas exchange" },
          ],
          workedExample: {
            problem: "How does the heart's structure suit its pumping function?",
            solution: "Thick muscular walls generate pressure; four chambers separate oxygenated/deoxygenated blood; valves prevent backflow; coronary arteries supply the muscle itself.",
          },
          questions: [
            {
              id: "ebi11-u10-ao-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which organ pumps blood around the body?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Lung" }, { id: "b", text: "Heart" },
                { id: "c", text: "Stomach" }, { id: "d", text: "Kidney" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Heart", statement: "Muscular blood pump." }],
                steps: [{ reasoning: "Heart pumps blood.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Heart",
              },
            },
            {
              id: "ebi11-u10-ao-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the organ where gas exchange occurs in humans.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lung", statement: "Gas exchange organ." }],
                steps: [{ reasoning: "The lungs (alveoli) exchange gases.", marks: 2, markCode: "M" }],
                finalAnswer: "Lungs",
              },
            },
            {
              id: "ebi11-u10-ao-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how the structure of the heart suits its function.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Heart structure", statement: "Adapted pump." }],
                steps: [
                  { reasoning: "Thick muscular walls generate pumping pressure.", marks: 1, markCode: "M" },
                  { reasoning: "Four chambers keep oxygenated/deoxygenated blood separate.", marks: 1, markCode: "A" },
                  { reasoning: "Valves prevent backflow during contraction.", marks: 1, markCode: "M" },
                  { reasoning: "Coronary arteries supply the heart muscle with O2.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Muscular walls, chambers, valves, coronary supply",
              },
            },
            {
              id: "ebi11-u10-ao-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain how the alveoli are adapted for gas exchange.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Alveolus", statement: "Efficient exchange surface." }],
                steps: [
                  { reasoning: "Millions of alveoli give huge surface area.", marks: 1, markCode: "M" },
                  { reasoning: "One-cell-thick wall → short diffusion distance.", marks: 1, markCode: "A" },
                  { reasoning: "Moist lining dissolves gases for diffusion.", marks: 1, markCode: "M" },
                  { reasoning: "Dense capillary network maintains concentration gradients.", marks: 1, markCode: "A" },
                  { reasoning: "Together these maximise rate of gas exchange.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Large SA, thin, moist, capillary supply",
              },
            },
            {
              id: "ebi11-u10-ao-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name two animal organs and their functions.", marks: 2 },
                { label: "b", prompt: "State two structural features of the heart.", marks: 2 },
                { label: "c", prompt: "State two adaptations of the small intestine for absorption.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Organ structure", statement: "Structure suits function." }],
                steps: [
                  { part: "a", reasoning: "Heart pumps; lung exchanges; stomach digests; kidney filters.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Four chambers; valves; thick walls.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Villi; long/coiled; capillary supply.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Organs+functions; heart features; intestine adaptations",
              },
            },
            {
              id: "ebi11-u10-ao-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name two animal organs. (b) State the function of each. (c) Name two structural features of the heart. (d) Name two adaptations of alveoli. (e) State the function of the small intestine. (f) Name two tissues found in the heart.",
              parts: [
                { label: "a", prompt: "Two organs.", marks: 1 },
                { label: "b", prompt: "Functions.", marks: 2 },
                { label: "c", prompt: "Heart features.", marks: 2 },
                { label: "d", prompt: "Alveolar adaptations.", marks: 2 },
                { label: "e", prompt: "Small intestine.", marks: 1 },
                { label: "f", prompt: "Heart tissues.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Animal organs", statement: "Structure suits function." }],
                steps: [
                  { part: "a", reasoning: "Heart, lung, stomach, kidney (any two).", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Pump/exchange/digest/filter (any two correct).", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Chambers/valves/thick walls (any two).", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Large SA/thin wall/moist/capillaries (any two).", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Absorption of digested food.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Muscle + connective + epithelial + nerve (any two).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Organs; functions; heart/alveoli features; intestine; tissues",
              },
            },
          ],
        },
        {
          id: "ebi11-u10-plant-organs", title: "Plant organs: leaf, root and stem",
          skill: "Describe how leaf, root and stem structure supports plant function.",
          sections: [
            { heading: "Leaf", body: "Broad and thin for maximum light capture; palisade mesophyll packed with chloroplasts; stomata for gas exchange; spongy mesophyll air spaces for diffusion; vascular bundles for transport; waxy cuticle reduces water loss." },
            { heading: "Root", body: "Anchors the plant; root hairs massively increase surface area for water/mineral absorption by osmosis; meristem at tip for growth; root cap protects tip; may store food (e.g. carrot)." },
            { heading: "Stem", body: "Supports leaves and flowers; vascular bundles (xylem+phloem) transport water upward and sugars between source and sink; may store food or photosynthesise if green; turgor pressure provides support." },
          ],
          keyFormulas: [
            { name: "Leaf", statement: "Broad, thin, chloroplast-rich, stomata → photosynthesis" },
            { name: "Root", statement: "Root hairs + meristem → absorption + growth" },
          ],
          workedExample: {
            problem: "How is a leaf adapted for photosynthesis?",
            solution: "Broad thin shape maximises light capture; palisade cells packed with chloroplasts; stomata allow CO2 entry; vascular bundles supply water and remove sugars.",
          },
          questions: [
            {
              id: "ebi11-u10-po-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which plant organ is the main site of photosynthesis?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Root" }, { id: "b", text: "Stem" },
                { id: "c", text: "Leaf" }, { id: "d", text: "Flower" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Leaf", statement: "Photosynthesis organ." }],
                steps: [{ reasoning: "Leaves photosynthesise.", marks: 1, markCode: "M" }],
                finalAnswer: "**(c)** Leaf",
              },
            },
            {
              id: "ebi11-u10-po-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the plant organ that absorbs most water and minerals.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Root", statement: "Absorption and anchorage." }],
                steps: [{ reasoning: "Roots (root hairs) absorb water and minerals.", marks: 2, markCode: "M" }],
                finalAnswer: "Roots",
              },
            },
            {
              id: "ebi11-u10-po-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how the leaf is adapted for photosynthesis.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Leaf adaptations", statement: "Shape, tissues, stomata." }],
                steps: [
                  { reasoning: "Broad, thin shape maximises light capture.", marks: 1, markCode: "M" },
                  { reasoning: "Palisade mesophyll packed with chloroplasts.", marks: 1, markCode: "M" },
                  { reasoning: "Stomata allow CO2 entry for photosynthesis.", marks: 1, markCode: "A" },
                  { reasoning: "Vascular bundles supply water and remove sugars.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Broad shape, chloroplasts, stomata, vascular supply",
              },
            },
            {
              id: "ebi11-u10-po-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain the functions of root, stem and leaf in a plant.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Plant organs", statement: "Distinct roles per organ." }],
                steps: [
                  { reasoning: "Root: anchors plant; absorbs water/minerals.", marks: 1, markCode: "M" },
                  { reasoning: "Stem: supports; transports water/sugars; stores food.", marks: 1, markCode: "M" },
                  { reasoning: "Leaf: photosynthesises; gas exchange; transpiration.", marks: 1, markCode: "M" },
                  { reasoning: "They work together for whole-plant function.", marks: 1, markCode: "A" },
                  { reasoning: "Vascular tissue links them for transport.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Root absorb/anchor; stem support/transport; leaf photosynthesise",
              },
            },
            {
              id: "ebi11-u10-po-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name three plant organs.", marks: 1 },
                { label: "b", prompt: "State the main function of each.", marks: 3 },
                { label: "c", prompt: "State two leaf adaptations for photosynthesis.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Plant organs", statement: "Root, stem, leaf." }],
                steps: [
                  { part: "a", reasoning: "Root, stem, leaf.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Absorb/anchor; support/transport; photosynthesis.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Chloroplast-rich palisade; stomata; broad thin shape (any two).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Root/stem/leaf; functions; leaf adaptations",
              },
            },
            {
              id: "ebi11-u10-po-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name three plant organs. (b) State the function of each. (c) State two adaptations of the leaf. (d) State two adaptations of the root. (e) What is a vascular bundle? (f) What is the cuticle?",
              parts: [
                { label: "a", prompt: "Three organs.", marks: 1 },
                { label: "b", prompt: "Functions.", marks: 3 },
                { label: "c", prompt: "Leaf adaptations.", marks: 2 },
                { label: "d", prompt: "Root adaptations.", marks: 2 },
                { label: "e", prompt: "Vascular bundle.", marks: 1 },
                { label: "f", prompt: "Cuticle.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Plant organs", statement: "Structure suits function." }],
                steps: [
                  { part: "a", reasoning: "Root, stem, leaf.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Absorb/anchor; support/transport; photosynthesis.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Chloroplasts/palisade; stomata; broad shape (any two).", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Root hairs; meristem tip; large SA (any two).", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Cluster of xylem and phloem.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Waxy waterproof layer reducing water loss.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Organs+functions; leaf/root adaptations; vascular bundle; cuticle",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u10-structure-notes", title: "Organ structure — notes",
      summary: "Animal organs (heart, lung, gut) and plant organs (leaf, root, stem) are structured for their functions.",
      sections: [
        { heading: "Key idea", body: "Structure always supports function at every level." },
        { heading: "Plants", body: "Leaf=photosynthesis; root=absorption; stem=transport/support." },
      ],
    },
  },
];
