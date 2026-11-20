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
              { id: "a", text: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂" },
              { id: "b", text: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O" },
              { id: "c", text: "6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂" },
              { id: "d", text: "CO₂ + H₂O → O₂ + glucose" },
            ],
            correctChoiceId: "a",
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
              {
                id: "a",
                text: "Light intensity, CO₂ concentration, temperature",
              },
              { id: "b", text: "Water, soil, wind" },
              { id: "c", text: "Nitrogen, phosphorus, potassium" },
              { id: "d", text: "Oxygen, nitrogen, hydrogen" },
            ],
            correctChoiceId: "a",
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
