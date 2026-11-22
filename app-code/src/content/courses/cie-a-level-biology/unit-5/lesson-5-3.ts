import type { Lesson } from "../../../types.ts";

export const lesson513: Lesson = {
  id: "cial-b-u5-lesson-5-3",
  code: "5-3",
  title: "Photosynthesis",
  goal: "I CAN describe the light-dependent and light-independent reactions of photosynthesis.",
  standards: ["9700 Unit 15: photosynthesis"],
  vocabulary: [
    {
      term: "Photosynthesis",
      definition:
        "Process converting light energy to chemical energy in glucose.",
    },
    {
      term: "Chloroplast",
      definition: "Organelle containing chlorophyll; site of photosynthesis.",
    },
    {
      term: "Light-dependent reaction",
      definition: "Reactions in thylakoids producing ATP and NADPH.",
    },
    {
      term: "Calvin cycle",
      definition:
        "Light-independent reactions in stroma fixing CO₂ into glucose.",
    },
    {
      term: "Chlorophyll",
      definition: "Green pigment absorbing light for photosynthesis.",
    },
    {
      term: "Photolysis",
      definition:
        "Splitting of water molecules releasing O₂, H⁺ and electrons.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u5-photosynthesis",
      title: "Photosynthesis reactions",
      skill: "Describe light-dependent and light-independent reactions.",
      lesson: {
        sections: [
          {
            heading: "Overall equation",
            body: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Occurs in chloroplasts: thylakoid membranes (light reactions) and stroma (Calvin cycle).",
          },
          {
            heading: "Light-dependent reactions",
            body: "In thylakoid membranes. Chlorophyll absorbs light → energy for photolysis of water (releases O₂). Electrons flow through electron transport chain → produces ATP (photophosphorylation) and NADPH. Products: ATP, NADPH, O₂.",
          },
          {
            heading: "Calvin cycle (light-independent)",
            body: "In stroma. CO₂ fixed by RuBisCO onto RuBP → glycerate-3-phosphate → reduced by NADPH → glucose-6-phosphate → glucose. Uses ATP and NADPH from light reactions.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis",
            statement: "Light reactions→ATP+NADPH+O₂; Calvin→CO₂→glucose.",
          },
        ],
        workedExample: {
          problem: "Where does O₂ come from in photosynthesis?",
          solution:
            "Photolysis of water in light-dependent reactions — not from CO₂.",
        },
      },
      questions: [
        {
          id: "cial-b-u5-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the overall equation for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO₂ + H₂O → O₂ + glucose" },
              { id: "b", text: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O" },
              { id: "c", text: "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂" },
              { id: "d", text: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis",
                statement: "CO₂+H₂O+light→glucose+O₂.",
              },
            ],
            steps: [
              { reasoning: "Reverse of respiration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 6CO₂+6H₂O+light→C₆H₁₂O₆+6O₂",
            commonErrors: ["Confusing with respiration (reversed)."],
          },
        },
        {
          id: "cial-b-u5-ph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products of the light-dependent reactions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light reactions",
                statement: "ATP + NADPH + O₂.",
              },
            ],
            steps: [
              { reasoning: "ATP and NADPH.", marks: 1, markCode: "M" },
              {
                reasoning: "O₂ from water photolysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "ATP, NADPH and O₂.",
            commonErrors: ["Saying glucose is produced here."],
          },
        },
        {
          id: "cial-b-u5-ph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Calvin cycle is called 'light-independent'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Calvin cycle",
                statement:
                  "Doesn't require light directly — uses ATP/NADPH from light reactions.",
              },
            ],
            steps: [
              { reasoning: "Occurs in stroma.", marks: 1, markCode: "M" },
              {
                reasoning: "Uses ATP+NADPH from light reactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Doesn't need light directly.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Uses products of light reactions; doesn't need light directly.",
            commonErrors: ["Thinking it needs light."],
          },
        },
        {
          id: "cial-b-u5-ph-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Photosynthesis.",
          parts: [
            { label: "a", prompt: "Overall equation?", marks: 2 },
            { label: "b", prompt: "Light-dependent products?", marks: 2 },
            {
              label: "c",
              prompt: "Why is Calvin 'light-independent'?",
              marks: 3,
            },
            { label: "d", prompt: "Where does O₂ come from?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis",
                statement: "Equation+products+Calvin+O₂ source.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "6CO₂+6H₂O+light→C₆H₁₂O₆+6O₂.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "ATP+NADPH.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "O₂ included.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Uses ATP/NADPH.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Doesn't need light directly.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Photolysis of water.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Not from CO₂.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) equation (b) ATP+NADPH+O₂ (c) uses light products (d) water photolysis",
          },
        },
        {
          id: "cial-b-u5-ph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which organelle does photosynthesis occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Chloroplast" },
              { id: "c", text: "Mitochondrion" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chloroplast",
                statement: "Chloroplasts contain chlorophyll and are the site of photosynthesis.",
              },
            ],
            steps: [
              { reasoning: "Photosynthesis occurs in chloroplasts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chloroplast",
            commonErrors: ["Confusing chloroplasts with mitochondria."],
          },
        },
        {
          id: "cial-b-u5-ph-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do the light-dependent reactions occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the cell wall" },
              { id: "b", text: "In the stroma" },
              { id: "c", text: "In the thylakoid membranes" },
              { id: "d", text: "In the nucleus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light-dependent reactions",
                statement: "Light reactions occur in thylakoid membranes.",
              },
            ],
            steps: [
              { reasoning: "Thylakoids contain the photosynthetic pigments and electron transport components.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Thylakoid membranes",
            commonErrors: ["Placing light reactions in the stroma."],
          },
        },
        {
          id: "cial-b-u5-ph-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the source of oxygen released during photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Chlorophyll" },
              { id: "c", text: "Photolysis of water" },
              { id: "d", text: "Breakdown of glucose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photolysis",
                statement: "Water is split in light-dependent reactions, releasing oxygen.",
              },
            ],
            steps: [
              { reasoning: "Oxygen comes from water, not carbon dioxide.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Photolysis of water",
            commonErrors: ["Saying oxygen comes from $CO_2$."],
          },
        },
        {
          id: "cial-b-u5-ph-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which enzyme fixes carbon dioxide in the Calvin cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amylase" },
              { id: "b", text: "RuBisCO" },
              { id: "c", text: "Lipase" },
              { id: "d", text: "Catalase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RuBisCO",
                statement: "RuBisCO catalyses carbon dioxide fixation onto RuBP.",
              },
            ],
            steps: [
              { reasoning: "RuBisCO is the $CO_2$-fixing enzyme.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** RuBisCO",
            commonErrors: ["Confusing RuBisCO with digestive enzymes."],
          },
        },
        {
          id: "cial-b-u5-ph-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which molecules are produced by the light-dependent reactions for use in the Calvin cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactate and ethanol" },
              { id: "b", text: "ATP and NADPH" },
              { id: "c", text: "Glucose and oxygen only" },
              { id: "d", text: "DNA and RNA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light reaction products",
                statement: "Light reactions produce ATP, NADPH and oxygen.",
              },
            ],
            steps: [
              { reasoning: "ATP and NADPH supply energy and reducing power to Calvin cycle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** ATP and NADPH",
            commonErrors: ["Saying glucose is produced directly in light reactions."],
          },
        },
        {
          id: "cial-b-u5-ph-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does the Calvin cycle depend on the light-dependent reactions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces light directly" },
              { id: "b", text: "It uses ATP and NADPH produced by light reactions" },
              { id: "c", text: "It occurs in thylakoids" },
              { id: "d", text: "It releases oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Calvin cycle dependence",
                statement: "Calvin cycle requires ATP and NADPH from light-dependent reactions.",
              },
            ],
            steps: [
              { reasoning: "Light products provide energy and reducing equivalents.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Uses ATP and NADPH",
            commonErrors: ["Thinking Calvin cycle is independent of light reactions."],
          },
        },
        {
          id: "cial-b-u5-ph-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The overall photosynthesis equation uses 6 carbon dioxide molecules per glucose. How many carbon dioxide molecules are needed to produce 5 glucose molecules?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photosynthesis equation",
                statement: "Six $CO_2$ molecules are fixed per glucose produced.",
              },
            ],
            steps: [
              { reasoning: "$5 \\times 6 = 30$ $CO_2$ molecules.", marks: 1, markCode: "M" },
              { reasoning: "Thirty carbon dioxide molecules are required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 carbon dioxide molecules",
            commonErrors: ["Using one $CO_2$ per glucose."],
          },
        },
        {
          id: "cial-b-u5-ph-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Twelve water molecules are split during photolysis, producing oxygen molecules. How many oxygen molecules are released?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photolysis",
                statement: "Two water molecules provide the atoms for one oxygen molecule.",
              },
            ],
            steps: [
              { reasoning: "$12 \\div 2 = 6$ oxygen molecules.", marks: 1, markCode: "M" },
              { reasoning: "Six $O_2$ molecules are released.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 oxygen molecules",
            commonErrors: ["Answering 12 oxygen molecules."],
          },
        },
        {
          id: "cial-b-u5-ph-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 3 glucose molecules are produced, how many carbon dioxide molecules were fixed assuming the overall equation ratio?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Carbon fixation ratio",
                statement: "Six $CO_2$ molecules are fixed per glucose molecule.",
              },
            ],
            steps: [
              { reasoning: "$3 \\times 6 = 18$ $CO_2$ molecules.", marks: 1, markCode: "M" },
              { reasoning: "Eighteen carbon dioxide molecules were fixed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 carbon dioxide molecules",
            commonErrors: ["Dividing by 6 instead of multiplying."],
          },
        },
        {
          id: "cial-b-u5-ph-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The overall equation produces 6 oxygen molecules per glucose. How many oxygen molecules are released when 4 glucose molecules are produced?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Oxygen production",
                statement: "Six $O_2$ molecules are released per glucose produced.",
              },
            ],
            steps: [
              { reasoning: "$4 \\times 6 = 24$ oxygen molecules.", marks: 1, markCode: "M" },
              { reasoning: "Twenty-four oxygen molecules are released.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 oxygen molecules",
            commonErrors: ["Using carbon dioxide count instead of oxygen."],
          },
        },
        {
          id: "cial-b-u5-ph-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A chloroplast produces ATP and NADPH in light reactions. If a Calvin cycle turn requires ATP and NADPH from light reactions, how many product types are transferred between the two stages?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light reaction products",
                statement: "ATP and NADPH are the main products transferred to the Calvin cycle.",
              },
            ],
            steps: [
              { reasoning: "ATP and NADPH are the two transferred products.", marks: 1, markCode: "M" },
              { reasoning: "The number is 2 product types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 product types",
            commonErrors: ["Counting oxygen as a Calvin cycle substrate."],
          },
        },
        {
          id: "cial-b-u5-ph-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the light-dependent reactions and Calvin cycle work together in photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis coupling",
                statement: "Light reactions capture energy as ATP and NADPH, which power carbon fixation in the Calvin cycle.",
              },
            ],
            steps: [
              { reasoning: "Light reactions in thylakoids produce ATP, NADPH and oxygen.", marks: 1, markCode: "M" },
              { reasoning: "The Calvin cycle in stroma uses ATP and NADPH to fix $CO_2$ into carbohydrate.", marks: 1, markCode: "M" },
              { reasoning: "Together they convert light energy into chemical energy stored in glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light reactions supply ATP/NADPH for the Calvin cycle to fix $CO_2$ into glucose.",
            commonErrors: ["Treating the two stages as independent."],
          },
        },
      ],
    },
    {
      id: "cial-b-u5-photo-limiting",
      title: "Limiting factors and leaf structure",
      skill:
        "Describe leaf adaptations and factors limiting photosynthesis rate.",
      lesson: {
        sections: [
          {
            heading: "Leaf adaptations",
            body: "Broad flat shape maximises light capture. Palisade mesophyll near top — densely packed chloroplasts. Stomata for gas exchange. Veins transport water/minerals and sugars. Thin → short diffusion distance.",
          },
          {
            heading: "Limiting factors",
            body: "Light intensity, CO₂ concentration, temperature. At low levels, rate increases with factor; at high levels, another factor becomes limiting (plateau). Temperature optimum ~25-30°C; above → enzymes denature.",
          },
          {
            heading: "Measuring rate",
            body: "Measure O₂ production, CO₂ uptake, or glucose/starch production. Bubble counter for O₂; IRGA for CO₂; iodine test for starch. Rate plateaus when a factor is limiting.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis factors",
            statement:
              "Light+CO₂+temperature limit rate; leaf structure optimised.",
          },
        ],
        workedExample: {
          problem:
            "Why does photosynthesis rate plateau at high light intensity?",
          solution:
            "Another factor (CO₂ or temperature) becomes limiting — enzyme saturation.",
        },
      },
      questions: [
        {
          id: "cial-b-u5-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Name three limiting factors of photosynthesis.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen, phosphorus, potassium" },
              { id: "b", text: "Water, soil, wind" },
              {
                id: "c",
                text: "Light intensity, CO₂ concentration, temperature",
              },
              { id: "d", text: "Oxygen, nitrogen, hydrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting factors",
                statement: "Light, CO₂, temperature.",
              },
            ],
            steps: [
              { reasoning: "Three correct factors.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Light, CO₂, temperature",
            commonErrors: ["Listing nutrients instead."],
          },
        },
        {
          id: "cial-b-u5-pl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is the rate of photosynthesis measured?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Measuring rate",
                statement:
                  "O₂ production, CO₂ uptake, or starch/glucose production.",
              },
            ],
            steps: [
              { reasoning: "O₂ or CO₂ measurement.", marks: 1, markCode: "M" },
              {
                reasoning: "Or product measurement (starch).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "O₂/CO₂ exchange or product formation.",
            commonErrors: ["Measuring light intensity only."],
          },
        },
        {
          id: "cial-b-u5-pl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why leaf structure is adapted for photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leaf adaptations",
                statement: "Broad shape, palisade layer, stomata, thin, veins.",
              },
            ],
            steps: [
              {
                reasoning: "Broad flat maximises light.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Palisade = dense chloroplasts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stomata for gas exchange.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Thin = short diffusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Broad+palisade+stomata+thin=optimised for photosynthesis.",
            commonErrors: ["Listing features without function."],
          },
        },
        {
          id: "cial-b-u5-pl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Limiting factors.",
          parts: [
            { label: "a", prompt: "Three limiting factors?", marks: 1 },
            { label: "b", prompt: "How is rate measured?", marks: 2 },
            { label: "c", prompt: "Leaf adaptations?", marks: 3 },
            { label: "d", prompt: "Why does rate plateau?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis",
                statement: "Factors+measurement+adaptations+plateau.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Light, CO₂, temp.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "O₂/CO₂ or product.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct method.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Broad maximises light.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Palisade+stomata.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Thin for diffusion.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Another factor becomes limiting.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Enzyme saturation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Plateau explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) light/CO₂/temp (b) O₂/CO₂/product (c) broad+palisade+thin (d) factor limiting→plateau",
          },
        },
        {
          id: "cial-b-u5-pl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor does not directly limit the rate of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light intensity" },
              { id: "b", text: "Soil colour" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Carbon dioxide concentration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting factors",
                statement: "Light intensity, $CO_2$ concentration and temperature are the main limiting factors.",
              },
            ],
            steps: [
              { reasoning: "Soil colour is not a standard limiting factor.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Soil colour",
            commonErrors: ["Listing nutrients as direct limiting factors."],
          },
        },
        {
          id: "cial-b-u5-pl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which leaf feature maximises light absorption?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absence of chlorophyll" },
              { id: "b", text: "Thick waxy cuticle only" },
              { id: "c", text: "Needle shape" },
              { id: "d", text: "Broad flat surface" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leaf adaptation",
                statement: "A broad flat leaf presents a large surface area to light.",
              },
            ],
            steps: [
              { reasoning: "Broad leaves capture more light.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Broad flat surface",
            commonErrors: ["Focusing only on thickness."],
          },
        },
        {
          id: "cial-b-u5-pl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of stomata in photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They store starch" },
              { id: "b", text: "They transport water only" },
              { id: "c", text: "They produce chlorophyll" },
              { id: "d", text: "They allow carbon dioxide to enter and oxygen to leave" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stomata",
                statement: "Stomata regulate gas exchange for photosynthesis.",
              },
            ],
            steps: [
              { reasoning: "$CO_2$ enters and $O_2$/water vapour leave through stomata.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gas exchange",
            commonErrors: ["Saying stomata absorb light."],
          },
        },
        {
          id: "cial-b-u5-pl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does the rate of photosynthesis plateau at high light intensity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Another factor such as $CO_2$ or temperature becomes limiting" },
              { id: "b", text: "Stomata close permanently" },
              { id: "c", text: "Chlorophyll disappears" },
              { id: "d", text: "Light stops being absorbed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting factor",
                statement: "When one factor is in excess, another factor limits the rate.",
              },
            ],
            steps: [
              { reasoning: "$CO_2$ or temperature may limit further increase.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Another factor becomes limiting",
            commonErrors: ["Thinking light has no effect above a threshold."],
          },
        },
        {
          id: "cial-b-u5-pl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens to photosynthetic enzymes at temperatures above their optimum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They work faster indefinitely" },
              { id: "b", text: "They denature and the rate falls" },
              { id: "c", text: "They become light-independent" },
              { id: "d", text: "They produce oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature effect",
                statement: "High temperature denatures enzymes involved in photosynthesis.",
              },
            ],
            steps: [
              { reasoning: "Denaturation reduces enzyme activity and rate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Enzymes denature",
            commonErrors: ["Assuming higher temperature always increases rate."],
          },
        },
        {
          id: "cial-b-u5-pl-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which method can be used to measure the rate of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Counting stomata only" },
              { id: "b", text: "Measuring root length only" },
              { id: "c", text: "Measuring oxygen production or carbon dioxide uptake" },
              { id: "d", text: "Measuring leaf colour only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Rate measurement",
                statement: "Rate can be measured by $O_2$ production, $CO_2$ uptake or carbohydrate production.",
              },
            ],
            steps: [
              { reasoning: "Gas exchange or product formation indicates rate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $O_2$ production or $CO_2$ uptake",
            commonErrors: ["Measuring only light intensity."],
          },
        },
        {
          id: "cial-b-u5-pl-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The rate of photosynthesis rises from 10 units min$^{-1}$ to 50 units min$^{-1}$ as light intensity increases before plateauing. Calculate the increase in rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate increase",
                statement: "Increase $=$ maximum rate $-$ initial rate.",
              },
            ],
            steps: [
              { reasoning: "$50-10=40$ units min$^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "The rate increased by 40 units min$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 units min$^{-1}$",
            commonErrors: ["Answering the final rate rather than the increase."],
          },
        },
        {
          id: "cial-b-u5-pl-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Carbon dioxide concentration increases from $0.04\\%$ to $0.08\\%$. Calculate the increase in percentage concentration.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.04 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Concentration change",
                statement: "Increase $=$ final concentration $-$ initial concentration.",
              },
            ],
            steps: [
              { reasoning: "$0.08-0.04=0.04\\%$.", marks: 1, markCode: "M" },
              { reasoning: "The increase is 0.04%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.04%",
            commonErrors: ["Doubling the value instead of subtracting."],
          },
        },
        {
          id: "cial-b-u5-pl-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A leaf has surface area $25\\ \\text{cm}^2$ and is replaced by a leaf of area $50\\ \\text{cm}^2$. Assuming all else is equal, calculate the increase in surface area.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Area increase",
                statement: "Increase $=$ new area $-$ old area.",
              },
            ],
            steps: [
              { reasoning: "$50-25=25\\ \\text{cm}^2$.", marks: 1, markCode: "M" },
              { reasoning: "The surface area increases by 25 cm$^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 cm$^2$",
            commonErrors: ["Answering 50 instead of the increase."],
          },
        },
        {
          id: "cial-b-u5-pl-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The photosynthesis rate is 15 units min$^{-1}$ at $20^\\circ\\text{C}$ and 30 units min$^{-1}$ at the optimum temperature. Calculate the increase in rate at the optimum.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate increase",
                statement: "Increase $=$ optimum rate $-$ lower-temperature rate.",
              },
            ],
            steps: [
              { reasoning: "$30-15=15$ units min$^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "The rate increases by 15 units min$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 units min$^{-1}$",
            commonErrors: ["Confusing temperature with rate."],
          },
        },
        {
          id: "cial-b-u5-pl-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An experiment runs for 10 minutes at an average photosynthesis rate of 20 units min$^{-1}$. Calculate the total amount of product formed in arbitrary units.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total product",
                statement: "Total product $=$ rate $\\times$ time.",
              },
            ],
            steps: [
              { reasoning: "$20 \\times 10 = 200$ units.", marks: 1, markCode: "M" },
              { reasoning: "The total product formed is 200 units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 units",
            commonErrors: ["Dividing rate by time."],
          },
        },
        {
          id: "cial-b-u5-pl-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain what is meant by a limiting factor and why the rate of photosynthesis reaches a plateau.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting factor",
                statement: "The factor in shortest supply limits the overall rate even if other factors are increased.",
              },
            ],
            steps: [
              { reasoning: "At low levels, increasing light, $CO_2$ or suitable temperature raises the rate.", marks: 1, markCode: "M" },
              { reasoning: "Eventually one factor cannot support further increase.", marks: 1, markCode: "M" },
              { reasoning: "The rate plateaus because another factor, such as $CO_2$ or enzyme activity, becomes limiting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The scarcest factor limits rate; increasing another factor then produces a plateau.",
            commonErrors: ["Thinking all factors must be increased together."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u5-photosynthesis-notes",
      title: "Photosynthesis — revision notes",
      summary:
        "Light-dependent and light-independent reactions, leaf adaptations, limiting factors.",
      sections: [
        {
          heading: "Reactions",
          body: "Light-dependent (thylakoids): ATP+NADPH+O₂. Calvin cycle (stroma): CO₂→glucose using ATP/NADPH. O₂ from water photolysis.",
        },
        {
          heading: "Factors",
          body: "Light, CO₂, temperature limit rate. Leaf: broad, palisade, stomata, thin, veins. Plateau when factor limiting.",
        },
        {
          heading: "Exam checklist",
          body: "Can you write equation? Name products? Explain Calvin cycle? Describe leaf adaptations? Explain limiting factors?",
        },
      ],
    },
  ],
};
