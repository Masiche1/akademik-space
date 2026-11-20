import type { Lesson } from "../../../types.ts";

export const lesson411: Lesson = {
  id: "cial-b-u4-lesson-4-1",
  code: "4-1",
  title: "Transport in plants: xylem and phloem",
  goal: "I CAN describe xylem and phloem transport and factors affecting transpiration.",
  standards: ["9700 Unit 8: transport in plants"],
  vocabulary: [
    {
      term: "Xylem",
      definition:
        "Vascular tissue transporting water and minerals from roots to leaves.",
    },
    {
      term: "Phloem",
      definition:
        "Vascular tissue transporting sugars and amino acids (translocation).",
    },
    {
      term: "Transpiration",
      definition: "Loss of water vapour from leaves through stomata.",
    },
    {
      term: "Translocation",
      definition:
        "Transport of organic compounds in phloem from source to sink.",
    },
    {
      term: "Cohesion-tension",
      definition:
        "Water molecules stick together (cohesion) and to xylem walls (adhesion), pulled by transpiration.",
    },
    {
      term: "Stomata",
      definition:
        "Pores in leaf epidermis controlling gas exchange and water loss.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u4-xylem",
      title: "Xylem transport",
      skill: "Explain how water moves from roots to leaves.",
      lesson: {
        sections: [
          {
            heading: "Xylem structure",
            body: "Xylem vessels are dead, hollow tubes with lignified walls — no end walls, continuous tubes. Lignin provides support and waterproofing. Water and dissolved minerals move upward.",
          },
          {
            heading: "Cohesion-tension theory",
            body: "Transpiration pulls water up: evaporation from leaf mesophyll creates tension; water molecules cohere (H-bonds) forming a continuous column; adhesion to xylem walls prevents breaking. Root pressure assists in some plants.",
          },
          {
            heading: "Factors affecting transpiration",
            body: "Rate increases with: light intensity (stomata open), temperature (faster evaporation), wind (removes humid air), low humidity. Decreases with: darkness, still air, high humidity.",
          },
        ],
        keyFormulas: [
          {
            name: "Xylem",
            statement: "Transpiration pulls water up via cohesion-tension.",
          },
        ],
        workedExample: {
          problem: "Why does wind increase transpiration rate?",
          solution:
            "Wind removes humid air near leaf surface, increasing water potential gradient → faster evaporation.",
        },
      },
      questions: [
        {
          id: "cial-b-u4-xy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does xylem transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water and dissolved minerals" },
              { id: "b", text: "Sugars and amino acids" },
              { id: "c", text: "Hormones" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Xylem",
                statement: "Water + minerals, roots to leaves.",
              },
            ],
            steps: [
              { reasoning: "Xylem = water/minerals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water and minerals",
            commonErrors: ["Confusing with phloem (sugars)."],
          },
        },
        {
          id: "cial-b-u4-xy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is transpiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transpiration",
                statement: "Loss of water vapour from leaves through stomata.",
              },
            ],
            steps: [
              {
                reasoning: "Water vapour lost from leaves.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Through stomata.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loss of water vapour from leaves via stomata.",
            commonErrors: ["Confusing with translocation (phloem)."],
          },
        },
        {
          id: "cial-b-u4-xy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the cohesion-tension theory of water transport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cohesion-tension",
                statement:
                  "Transpiration pulls water up; H-bonds hold column together.",
              },
            ],
            steps: [
              {
                reasoning: "Transpiration creates tension at top.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water molecules cohere via H-bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adhesion to xylem walls prevents break.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Continuous column pulled upward.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Transpiration pulls water up; cohesion holds column.",
            commonErrors: ["Saying water is pushed up (that's root pressure)."],
          },
        },
        {
          id: "cial-b-u4-xy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Xylem transport.",
          parts: [
            { label: "a", prompt: "What does xylem transport?", marks: 1 },
            { label: "b", prompt: "What is transpiration?", marks: 2 },
            { label: "c", prompt: "Explain cohesion-tension.", marks: 3 },
            {
              label: "d",
              prompt: "Name three factors increasing transpiration rate.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Xylem",
                statement: "Transport+transpiration+cohesion+factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Water + minerals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Water vapour lost from leaves.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Through stomata.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Transpiration creates tension.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Cohesion via H-bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Continuous column pulled up.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Any three of light, temp, wind, low humidity.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Three named.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) water+minerals (b) water loss via stomata (c) cohesion-tension (d) light/temp/wind/humidity",
          },
        },
      ],
    },
    {
      id: "cial-b-u4-phloem",
      title: "Phloem transport and translocation",
      skill: "Explain how sugars are transported from source to sink.",
      lesson: {
        sections: [
          {
            heading: "Phloem structure",
            body: "Phloem consists of sieve tube elements (living, no nucleus, companion cells) and sieve plates. Transports sucrose, amino acids and other organic compounds bidirectionally.",
          },
          {
            heading: "Translocation mechanism",
            body: "Source (leaf) → sink (root, fruit). Sucrose loaded into phloem by active transport (companion cells). High solute concentration creates osmotic gradient → water enters → hydrostatic pressure pushes sap toward sink.",
          },
          {
            heading: "Source and sink",
            body: "Source: where sucrose is produced (photosynthesis) or released (storage organs). Sink: where sucrose is used or stored (roots, fruits, growing tissues). Direction can change seasonally.",
          },
        ],
        keyFormulas: [
          {
            name: "Phloem",
            statement: "Source→sink via osmotic pressure gradient.",
          },
        ],
        workedExample: {
          problem: "Why do companion cells matter in phloem?",
          solution:
            "They provide energy (mitochondria) and regulate loading of sucrose into sieve tubes via active transport.",
        },
      },
      questions: [
        {
          id: "cial-b-u4-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does phloem transport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sugars and amino acids" },
              { id: "b", text: "Water and minerals" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phloem",
                statement: "Organic compounds: sucrose, amino acids.",
              },
            ],
            steps: [
              {
                reasoning: "Phloem = sugars/amino acids.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Sugars and amino acids",
            commonErrors: ["Confusing with xylem (water)."],
          },
        },
        {
          id: "cial-b-u4-ph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'source' and 'sink' in phloem transport?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Source/sink",
                statement: "Source produces sucrose; sink uses or stores it.",
              },
            ],
            steps: [
              {
                reasoning: "Source = production site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sink = use/storage site.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Source produces; sink consumes or stores.",
            commonErrors: ["Reversing source and sink."],
          },
        },
        {
          id: "cial-b-u4-ph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how phloem loading creates a pressure gradient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phloem loading",
                statement:
                  "Active transport loads sucrose → osmotic water entry → pressure gradient.",
              },
            ],
            steps: [
              {
                reasoning: "Sucrose loaded by active transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High solute → water enters by osmosis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrostatic pressure builds at source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pressure pushes sap to sink.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sucrose loading → osmotic water entry → pressure gradient drives flow.",
            commonErrors: ["Thinking it's simple diffusion."],
          },
        },
        {
          id: "cial-b-u4-ph-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Phloem transport.",
          parts: [
            { label: "a", prompt: "What does phloem transport?", marks: 1 },
            { label: "b", prompt: "Source vs sink?", marks: 2 },
            {
              label: "c",
              prompt: "How does loading create pressure?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Why are companion cells important?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phloem",
                statement: "Transport+source/sink+pressure+companion cells.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sugars + amino acids.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Source produces.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Sink uses/stores.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Active transport loading.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Osmotic water entry.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Pressure gradient drives flow.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Provide energy via mitochondria.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Regulate loading.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Support sieve tubes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) sugars+amino acids (b) source/sink (c) osmotic pressure (d) energy+regulation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u4-plant-transport-notes",
      title: "Plant transport — revision notes",
      summary:
        "Xylem (water), phloem (sugars), transpiration and translocation.",
      sections: [
        {
          heading: "Xylem",
          body: "Water + minerals, roots→leaves. Cohesion-tension: transpiration pulls water up. Factors: light, temp, wind, humidity.",
        },
        {
          heading: "Phloem",
          body: "Sugars + amino acids, source→sink. Active loading → osmotic pressure → flow. Companion cells provide energy and regulation.",
        },
        {
          heading: "Exam checklist",
          body: "Can you explain cohesion-tension? Describe phloem loading? Name transpiration factors? Distinguish xylem/phloem?",
        },
      ],
    },
  ],
};
