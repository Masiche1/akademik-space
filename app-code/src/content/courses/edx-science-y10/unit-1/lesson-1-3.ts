import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "esc10-u1-lesson-1-3",
  code: "1-3",
  title: "Photosynthesis and Respiration",
  goal: "I CAN describe photosynthesis and respiration as complementary energy processes.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Biology"],
  vocabulary: [
    {
      term: "Photosynthesis",
      definition:
        "Process where plants convert light energy into glucose using CO₂ and water.",
    },
    {
      term: "Respiration",
      definition:
        "Process releasing energy from glucose using oxygen — occurs in all living cells.",
    },
    {
      term: "Chlorophyll",
      definition:
        "Green pigment in chloroplasts absorbing light energy for photosynthesis.",
    },
    {
      term: "Aerobic respiration",
      definition: "Glucose + oxygen → CO₂ + water + energy (most efficient).",
    },
  ],
  concepts: [
    {
      id: "esc10-u1-photosynthesis",
      title: "Photosynthesis",
      skill:
        "Describe the photosynthesis equation, limiting factors and its importance.",
      lesson: {
        sections: [
          {
            heading: "The process",
            body: "**Equation**: 6CO₂ + 6H₂O →(light, chlorophyll) C₆H₁₂O₆ + 6O₂. Occurs in **chloroplasts** — chlorophyll traps light. Products: glucose (stored as starch) and oxygen (released).\n\n**Limiting factors**: light intensity (more light → faster until saturation), CO₂ concentration, temperature (enzymes slow when cold, denature when hot). Increasing any factor raises rate until another becomes limiting.",
          },
          {
            heading: "Importance",
            body: "Photosynthesis is the **base of nearly all food chains** — every organism depends on it directly or indirectly. Produces the oxygen we breathe. Fossil fuels are ancient photosynthetic products.\n\n**Testing**: destarch a plant (keep dark 48h), expose part to light, test leaf with iodine — only illuminated parts turn blue-black (starch present). Proves light is needed and starch is the product.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis",
            statement: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light + chlorophyll).",
          },
          {
            name: "Limiting factors",
            statement:
              "Light, CO₂, temperature — rate limited by scarcest factor.",
          },
        ],
        workedExample: {
          problem:
            "A plant in a greenhouse gets more CO₂ but no extra light. Predict the effect.",
          solution:
            "Rate increases only if CO₂ was limiting; if light is now limiting, rate stays the same.",
        },
      },
      questions: [
        {
          id: "esc10-u1-photosynthesis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the products of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose and oxygen" },
              { id: "b", text: "Starch and CO₂" },
              { id: "c", text: "Oxygen and nitrogen" },
              { id: "d", text: "CO₂ and water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis products",
                statement: "Glucose + oxygen produced; CO₂ + water consumed.",
              },
            ],
            steps: [
              {
                reasoning: "Products = glucose + O₂.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Glucose and oxygen",
            commonErrors: ["Reversed equation."],
          },
        },
        {
          id: "esc10-u1-photosynthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three limiting factors of photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting factors",
                statement: "Light intensity, CO₂ concentration, temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct factors.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "All named correctly.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Factors are genuine limiting ones.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Light intensity, CO₂ concentration, temperature.",
            commonErrors: [
              "Water listed — usually not limiting.",
              "Wrong factors.",
            ],
          },
        },
        {
          id: "esc10-u1-photosynthesis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a limiting factor is using an analogy or example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting factor",
                statement:
                  "Rate determined by the scarcest required factor — like a chain's weakest link.",
              },
            ],
            steps: [
              {
                reasoning: "Defined: scarcest factor controls rate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: dim light + plenty CO₂ → light limits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Increasing non-limiting factor has no effect.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Limiting factor = scarcest input controlling rate; adding more of other factors won't help until it's addressed.",
            commonErrors: ["All factors equal view.", "No example."],
          },
        },
        {
          id: "esc10-u1-photosynthesis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A variegated leaf (green edges, white centre) is tested for starch after light exposure.",
          parts: [
            {
              label: "a",
              prompt:
                "Predict which parts turn blue-black with iodine and why.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "What does this experiment prove about photosynthesis?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Variegated leaf experiment",
                statement:
                  "Only chlorophyll-containing parts photosynthesise and store starch.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Green edges turn blue-black.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) White centre stays brown — no chlorophyll.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Chlorophyll needed for light absorption.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Starch only where photosynthesis occurred.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Proves light + chlorophyll needed.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Proves starch is the product stored.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) green parts only — need chlorophyll (b) proves light+chlorophyll required, starch produced",
            commonErrors: [
              "Whole leaf blue-black.",
              "Chlorophyll role missed.",
            ],
          },
        },
      ],
    },
    {
      id: "esc10-u1-respiration",
      title: "Respiration",
      skill:
        "Distinguish aerobic and anaerobic respiration and explain energy release.",
      lesson: {
        sections: [
          {
            heading: "Aerobic respiration",
            body: "**Equation**: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP). Occurs in **mitochondria** — releases ~38 ATP per glucose. Used by all living cells constantly — muscles during exercise need more.\n\n**Uses of energy**: muscle contraction, protein synthesis, cell division, active transport, maintaining body temperature. Respiration never stops while alive — it's how cells power all processes.",
          },
          {
            heading: "Anaerobic respiration",
            body: "Without oxygen: **animals** — glucose → lactic acid + small energy; **yeast/plants** — glucose → ethanol + CO₂ + small energy (fermentation). Much less efficient (~2 ATP vs ~38).\n\n**Oxygen debt**: after exercise, lactic acid accumulates → oxygen needed to break it down — explains heavy breathing post-exercise. Yeast fermentation used in bread-making (CO₂ raises dough) and brewing (ethanol).",
          },
        ],
        keyFormulas: [
          {
            name: "Aerobic respiration",
            statement: "Glucose + O₂ → CO₂ + H₂O + ~38 ATP.",
          },
          {
            name: "Anaerobic",
            statement:
              "Animals: lactic acid; yeast: ethanol + CO₂ — low yield.",
          },
        ],
        workedExample: {
          problem: "Why do sprinters breathe heavily after a race?",
          solution:
            "Oxygen debt — lactic acid from anaerobic respiration must be oxidised, requiring extra oxygen uptake.",
        },
      },
      questions: [
        {
          id: "esc10-u1-respiration-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where does aerobic respiration mainly occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Cell wall" },
              { id: "c", text: "Ribosome" },
              { id: "d", text: "Mitochondria" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitochondria",
                statement: "Site of aerobic respiration — releases energy.",
              },
            ],
            steps: [
              {
                reasoning: "Mitochondria = respiration site.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Mitochondria",
            commonErrors: ["Chloroplasts confused — photosynthesis."],
          },
        },
        {
          id: "esc10-u1-respiration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the word equation for aerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerobic respiration equation",
                statement:
                  "Glucose + oxygen → carbon dioxide + water + energy.",
              },
            ],
            steps: [
              {
                reasoning: "Reactants: glucose + oxygen.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Products: CO₂ + water + energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correctly balanced/equation complete.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Glucose + oxygen → carbon dioxide + water + energy",
            commonErrors: ["Missing energy.", "Wrong products."],
          },
        },
        {
          id: "esc10-u1-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is anaerobic respiration less efficient than aerobic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anaerobic efficiency",
                statement:
                  "Glucose only partially broken down — less ATP released.",
              },
            ],
            steps: [
              {
                reasoning: "Glucose not fully oxidised.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fewer ATP produced (~2 vs ~38).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Waste products (lactate/ethanol) retain energy.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Anaerobic breaks glucose only partially — ~2 ATP vs ~38, with energy trapped in lactate/ethanol.",
            commonErrors: ["Same yield view.", "No partial oxidation."],
          },
        },
        {
          id: "esc10-u1-respiration-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Bread dough rises because yeast respires anaerobically.",
          parts: [
            {
              label: "a",
              prompt: "Write the anaerobic respiration equation for yeast.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how this makes dough rise.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why the baked bread doesn't taste alcoholic.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fermentation",
                statement:
                  "Yeast: glucose → ethanol + CO₂; CO₂ gas expands dough.",
              },
            ],
            steps: [
              {
                reasoning: "(a) glucose → ethanol + carbon dioxide + energy.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) No oxygen needed.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) CO₂ gas produced.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Gas expands dough — bubbles trapped.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Heat during baking sets structure.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Ethanol evaporates during baking.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) glucose→ethanol+CO₂ (b) CO₂ expands dough (c) ethanol evaporates in oven",
            commonErrors: ["Aerobic equation used.", "No CO₂ role."],
          },
        },
      ],
    },
  ],
};
