import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "bio9-u7-lesson-7-2",
  code: "7-2",
  title: "Photosynthesis: Light Reactions and Calvin Cycle",
  goal: "I CAN explain the light-dependent reactions, the Calvin cycle, and factors limiting photosynthesis.",
  standards: [
    "HS-LS1-5",
    "HS-LS1-6",
    "HS-LS2-3",
    "CCC: Energy and Matter",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Thylakoid",
      definition:
        "Membrane discs inside chloroplasts where light reactions occur.",
    },
    {
      term: "Stroma",
      definition:
        "Fluid-filled space inside chloroplast where the Calvin cycle occurs.",
    },
    {
      term: "Photosystem",
      definition: "Protein-pigment complex that absorbs light (PSI and PSII).",
    },
    {
      term: "NADPH",
      definition:
        "Electron carrier delivering reducing power to the Calvin cycle.",
    },
    {
      term: "Rubisco",
      definition: "Enzyme that fixes CO₂ onto RuBP in the Calvin cycle.",
    },
    {
      term: "RuBP",
      definition: "Ribulose bisphosphate — CO₂ acceptor in the Calvin cycle.",
    },
    {
      term: "Limiting factor",
      definition: "Factor that restricts the rate of photosynthesis.",
    },
  ],
  concepts: [
    {
      id: "bio9-u7-light-reactions",
      title: "Light-dependent reactions",
      skill:
        "Describe electron flow through photosystems and ATP/NADPH production.",
      lesson: {
        sections: [
          {
            heading: "Light reaction mechanism",
            body: "In the **thylakoid membranes**:\n\n1. **Photosystem II** absorbs light → electrons excited.\n2. Water is split (photolysis) → releases O₂, provides electrons and H⁺.\n3. Electrons flow through **electron transport chain** → pumps H⁺ into thylakoid lumen.\n4. **Photosystem I** re-energizes electrons → reduces NADP⁺ to NADPH.\n5. H⁺ flows through **ATP synthase** → produces ATP (chemiosmosis).",
          },
          {
            heading: "Products",
            body: "Light reactions produce:\n- **ATP** — energy for Calvin cycle.\n- **NADPH** — reducing power for Calvin cycle.\n- **O₂** — released as waste from water splitting.",
          },
        ],
        keyFormulas: [
          {
            name: "Light reactions",
            statement: "Thylakoid: light → ATP + NADPH + O₂.",
          },
          {
            name: "Photolysis",
            statement: "$H_2O → 2H^+ + 2e^- + \\frac{1}{2}O_2$",
          },
          {
            name: "Chemiosmosis",
            statement: "H⁺ gradient → ATP synthase → ATP.",
          },
        ],
        workedExample: {
          problem: "Why is oxygen released during photosynthesis?",
          solution:
            "Water is split during photolysis; oxygen is the waste product.",
        },
      },
      questions: [
        {
          id: "bio9-u7-light-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do light-dependent reactions occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stroma" },
              { id: "b", text: "Thylakoid membranes" },
              { id: "c", text: "Cytoplasm" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Thylakoids",
                statement: "Light reactions occur on thylakoid membranes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thylakoids are the membrane sites of light reactions; stroma hosts the Calvin cycle.",
                evidence: "thylakoid",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Thylakoid membranes.",
            commonErrors: ["Choosing (a): that's the Calvin cycle location."],
          },
        },
        {
          id: "bio9-u7-light-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three products of light-dependent reactions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Light reaction products",
                statement: "ATP, NADPH, O₂.",
              },
            ],
            steps: [
              {
                reasoning: "ATP produced via chemiosmosis (ATP synthase).",
                evidence: "ATP",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "NADPH produced when PSI reduces NADP⁺.",
                evidence: "NADPH",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "O₂ released from water photolysis.",
                evidence: "O₂",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "ATP, NADPH, O₂.",
            commonErrors: ["Missing O₂ or NADPH."],
          },
        },
        {
          id: "bio9-u7-light-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the electron transport chain in photosynthesis produces ATP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photo ETC",
                statement: "Electron flow pumps H⁺ → chemiosmosis → ATP.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Excited electrons from PSII flow through ETC complexes.",
                evidence: "PSII→ETC",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Energy released pumps H⁺ into thylakoid lumen.",
                evidence: "H⁺ pump",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "H⁺ flows back through ATP synthase → ATP produced.",
                evidence: "synthase",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Same chemiosmosis principle as cellular respiration.",
                evidence: "chemiosmosis",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Electron flow → H⁺ gradient → ATP synthase → ATP.",
            commonErrors: ["Not mentioning chemiosmosis."],
          },
        },
        {
          id: "bio9-u7-light-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace electron flow through photosystems II and I.",
          parts: [
            { label: "a", prompt: "Where do electrons come from?", marks: 2 },
            { label: "b", prompt: "What does PSII do?", marks: 2 },
            { label: "c", prompt: "What does PSI do?", marks: 2 },
            { label: "d", prompt: "Final electron acceptor?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Electron flow",
                statement: "H₂O → PSII → ETC → PSI → NADP⁺.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Water photolysis provides electrons.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "PSII absorbs light, excites electrons → enters ETC.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "PSI re-energizes electrons → reduces NADP⁺ to NADPH.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "NADP⁺ is final acceptor → NADPH.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Water (b) Excites e⁻→ETC (c) Re-energizes→NADPH (d) NADP⁺.",
            commonErrors: ["Reversing PSII/PSI roles."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-calvin-cycle",
      title: "The Calvin Cycle",
      skill:
        "Describe carbon fixation, the Calvin cycle steps, and RuBisCO's role.",
      lesson: {
        sections: [
          {
            heading: "Calvin cycle steps",
            body: "The **Calvin cycle** (light-independent reactions) occurs in the stroma:\n\n1. **Carbon fixation**: CO₂ + RuBP → 3-PGA (catalyzed by RuBisCO).\n2. **Reduction**: 3-PGA → G3P using ATP and NADPH.\n3. **Regeneration**: G3P → RuBP using ATP.",
          },
          {
            heading: "Products",
            body: "- For every 3 CO₂ fixed: 1 G3P net (can make glucose).\n- 6 turns → 1 glucose molecule.\n- RuBisCO is Earth's most abundant enzyme but inefficient (also binds O₂ → photorespiration).",
          },
        ],
        keyFormulas: [
          {
            name: "Calvin cycle",
            statement: "CO₂ fixation → reduction → RuBP regeneration.",
          },
          { name: "RuBisCO", statement: "Enzyme fixing CO₂ onto RuBP." },
          {
            name: "Stoichiometry",
            statement: "3 CO₂ → 1 G3P; 6 turns → 1 glucose.",
          },
        ],
        workedExample: {
          problem: "How many Calvin cycle turns produce one glucose?",
          solution: "6 turns — each fixes 1 CO₂; 6 CO₂ needed for 1 glucose.",
        },
      },
      questions: [
        {
          id: "bio9-u7-calvin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What enzyme fixes CO₂ in the Calvin cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ATP synthase" },
              { id: "b", text: "RuBisCO" },
              { id: "c", text: "DNA polymerase" },
              { id: "d", text: "Amylase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RuBisCO",
                statement: "Enzyme catalyzing CO₂ fixation onto RuBP.",
              },
            ],
            steps: [
              {
                reasoning:
                  "RuBisCO (ribulose bisphosphate carboxylase/oxygenase) fixes CO₂.",
                evidence: "RuBisCO",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** RuBisCO.",
            commonErrors: ["Choosing (a): that's for ATP synthesis."],
          },
        },
        {
          id: "bio9-u7-calvin-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the three phases of the Calvin cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Calvin cycle phases",
                statement: "Fixation → reduction → regeneration.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon fixation: CO₂ + RuBP → 3-PGA.",
                evidence: "fixation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reduction: 3-PGA → G3P using ATP/NADPH.",
                evidence: "reduction",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Regeneration: G3P → RuBP using ATP.",
                evidence: "regeneration",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Fixation → reduction → regeneration.",
            commonErrors: ["Missing a phase."],
          },
        },
        {
          id: "bio9-u7-calvin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does RuBisCO's tendency to bind O₂ cause problems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photorespiration",
                statement:
                  "RuBisCO oxygenation wastes energy and releases CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "RuBisCO can bind O₂ instead of CO₂ (oxygenation).",
                evidence: "oxygenation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "This produces no sugar and consumes ATP/NADPH.",
                evidence: "waste",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Called photorespiration — reduces photosynthetic efficiency.",
                evidence: "photorespiration",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Some plants (C4, CAM) evolved mechanisms to minimize it.",
                evidence: "C4/CAM",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "O₂ binding → photorespiration → wasted energy, no sugar.",
            commonErrors: ["Saying it produces more glucose."],
          },
        },
        {
          id: "bio9-u7-calvin-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "How many ATP and NADPH does the Calvin cycle need per glucose?",
          parts: [
            { label: "a", prompt: "How many CO₂ per glucose?", marks: 2 },
            { label: "b", prompt: "How many ATP needed?", marks: 3 },
            { label: "c", prompt: "How many NADPH needed?", marks: 2 },
            { label: "d", prompt: "Where do these come from?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calvin stoichiometry",
                statement: "6 CO₂ → 1 glucose; needs 18 ATP + 12 NADPH.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "6 CO₂ per glucose.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "18 ATP per glucose (6 per turn × 3... actually 18 ATP total).",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "12 NADPH per glucose.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "From light-dependent reactions.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 6 CO₂ (b) 18 ATP (c) 12 NADPH (d) Light reactions.",
            commonErrors: ["Wrong stoichiometry."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-limiting-factors",
      title: "Limiting Factors in Photosynthesis",
      skill:
        "Identify factors limiting photosynthesis rate and interpret data.",
      lesson: {
        sections: [
          {
            heading: "Limiting factors",
            body: "The rate of photosynthesis is limited by whichever factor is in shortest supply:\n\n- **Light intensity**: more light → faster rate until saturation.\n- **CO₂ concentration**: more CO₂ → faster until saturation.\n- **Temperature**: affects enzyme activity; optimum ~25-35 °C.\n\n**Blackman's law of limiting factors**: rate is controlled by the factor closest to its minimum.",
          },
          {
            heading: "Interpreting data",
            body: "Graph interpretation:\n- Linear region: factor is limiting.\n- Plateau: another factor now limits.\n- To increase rate further, must increase the new limiting factor.",
          },
        ],
        keyFormulas: [
          {
            name: "Limiting factor",
            statement: "Rate limited by scarcest resource.",
          },
          {
            name: "Blackman's law",
            statement: "Rate controlled by factor closest to minimum.",
          },
          {
            name: "Plateau",
            statement: "Rate stops increasing — new factor limits.",
          },
        ],
        workedExample: {
          problem:
            "A plant photosynthesizes at constant rate despite increased CO₂. What limits it?",
          solution: "Something else is limiting — light or temperature.",
        },
      },
      questions: [
        {
          id: "bio9-u7-limiting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a limiting factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factor that speeds up photosynthesis" },
              { id: "b", text: "Factor in shortest supply restricting rate" },
              { id: "c", text: "Factor that stops photosynthesis" },
              { id: "d", text: "Factor unrelated to rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting factor",
                statement: "Scarcest factor controls rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rate limited by whichever factor is in shortest supply.",
                evidence: "scarcest",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Factor in shortest supply restricting rate.",
            commonErrors: ["Choosing (a): limiting means restricting."],
          },
        },
        {
          id: "bio9-u7-limiting-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three factors that limit photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Limiting factors",
                statement: "Light, CO₂, temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Light intensity.",
                evidence: "light",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "CO₂ concentration.",
                evidence: "CO₂",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Temperature (affects enzyme activity).",
                evidence: "temperature",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Light intensity, CO₂ concentration, temperature.",
            commonErrors: ["Listing water or soil."],
          },
        },
        {
          id: "bio9-u7-limiting-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Blackman's law of limiting factors with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Blackman's law",
                statement: "Rate controlled by factor closest to minimum.",
              },
            ],
            steps: [
              {
                reasoning: "If light is low but CO₂ is abundant, light limits.",
                evidence: "light limits",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Increasing CO₂ won't help until light increases.",
                evidence: "no help",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Once light increases, CO₂ may become the new limit.",
                evidence: "new limit",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rate is always set by the most limiting factor.",
                evidence: "law",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Rate limited by scarcest factor; increasing non-limiting factors doesn't help.",
            commonErrors: ["Saying all factors limit equally."],
          },
        },
        {
          id: "bio9-u7-limiting-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A graph shows photosynthesis rate vs light intensity plateauing at high light.",
          parts: [
            { label: "a", prompt: "What limits rate at low light?", marks: 2 },
            {
              label: "b",
              prompt: "What limits rate at the plateau?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How could you increase rate at the plateau?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What experiment would confirm this?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Limiting factor analysis",
                statement: "Plateau indicates new limiting factor.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Light intensity is limiting at low light.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "At plateau, another factor (CO₂ or temperature) is limiting.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Increase CO₂ concentration or optimize temperature.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Repeat with increased CO₂ — if rate rises, CO₂ was limiting.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Light (b) CO₂ or temp (c) Increase CO₂/temp (d) Test with more CO₂.",
            commonErrors: ["Saying light still limits at plateau."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-photo-respiration",
      title: "Photorespiration and C4/CAM Plants",
      skill: "Explain photorespiration and how C4 and CAM plants minimize it.",
      lesson: {
        sections: [
          {
            heading: "Photorespiration",
            body: "**Photorespiration** occurs when RuBisCO binds O₂ instead of CO₂:\n\n- Produces no sugar.\n- Consumes ATP and NADPH.\n- Releases CO₂.\n- Especially problematic in hot, dry conditions (stomata close → low CO₂).\n\nWastes energy and reduces crop yields.",
          },
          {
            heading: "C4 and CAM adaptations",
            body: "**C4 plants** (corn, sugarcane): CO₂ fixed into 4-carbon compound in mesophyll, then transported to bundle-sheath cells where RuBisCO acts — concentrates CO₂, minimizes photorespiration.\n\n**CAM plants** (cacti, pineapples): open stomata at night to fix CO₂ into malate; close during day; release CO₂ for Calvin cycle — water conservation in arid environments.",
          },
        ],
        keyFormulas: [
          {
            name: "Photorespiration",
            statement: "RuBisCO + O₂ → waste; no sugar.",
          },
          {
            name: "C4 plants",
            statement: "Spatial separation of CO₂ fixation and Calvin cycle.",
          },
          {
            name: "CAM plants",
            statement:
              "Temporal separation — night CO₂ uptake, day Calvin cycle.",
          },
        ],
        workedExample: {
          problem: "Why do cacti photosynthesize efficiently in deserts?",
          solution:
            "CAM photosynthesis — open stomata at night to conserve water.",
        },
      },
      questions: [
        {
          id: "bio9-u7-photoresp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is photorespiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis without light" },
              { id: "b", text: "RuBisCO binding O₂ instead of CO₂" },
              { id: "c", text: "Respiration in plants" },
              { id: "d", text: "Light-independent reactions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photorespiration",
                statement: "RuBisCO oxygenation → waste.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photorespiration = RuBisCO binds O₂ → no sugar, wastes energy.",
                evidence: "O₂ binding",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** RuBisCO binding O₂ instead of CO₂.",
            commonErrors: ["Choosing (a): it's not a separate photosynthesis."],
          },
        },
        {
          id: "bio9-u7-photoresp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do C4 plants minimize photorespiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "C4 plants",
                statement: "Spatial separation concentrates CO₂ near RuBisCO.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO₂ fixed into 4-carbon compound in mesophyll cells.",
                evidence: "C4 compound",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Compound transported to bundle-sheath cells.",
                evidence: "transport",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "CO₂ released near RuBisCO → high concentration → less O₂ binding.",
                evidence: "concentrate",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Spatial separation concentrates CO₂ near RuBisCO.",
            commonErrors: ["Not explaining the mechanism."],
          },
        },
        {
          id: "bio9-u7-photoresp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do CAM plants differ from C4 plants?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "CAM vs C4",
                statement:
                  "CAM = temporal separation; C4 = spatial separation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C4: CO₂ fixed in mesophyll, Calvin in bundle-sheath (different cells).",
                evidence: "C4 space",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "CAM: CO₂ fixed at night, Calvin during day (different times).",
                evidence: "CAM time",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "CAM plants open stomata at night → conserve water.",
                evidence: "night",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both minimize photorespiration in hot/dry conditions.",
                evidence: "shared goal",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "C4 = spatial separation; CAM = temporal separation.",
            commonErrors: ["Confusing the two mechanisms."],
          },
        },
        {
          id: "bio9-u7-photoresp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Why is photorespiration more problematic in hot, dry conditions?",
          parts: [
            {
              label: "a",
              prompt: "What happens to stomata in heat/drought?",
              marks: 2,
            },
            { label: "b", prompt: "How does this affect CO₂?", marks: 2 },
            {
              label: "c",
              prompt: "Why does low CO₂ increase photorespiration?",
              marks: 2,
            },
            { label: "d", prompt: "Which plants are affected most?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photorespiration conditions",
                statement:
                  "Hot/dry → stomata close → low CO₂ → more O₂ binding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Stomata close to conserve water.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "CO₂ can't enter → internal CO₂ drops.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Low CO₂ → RuBisCO more likely to bind O₂.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "C3 plants (rice, wheat, soybeans) most affected; C4/CAM adapted.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Stomata close (b) CO₂ drops (c) More O₂ binding (d) C3 plants.",
            commonErrors: ["Not linking stomata to CO₂."],
          },
        },
      ],
    },
  ],
};
