import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "edps4-u2-lesson-2-2",
  code: "2-2",
  title: "Skeleton, Muscles and Movement",
  goal: "I CAN describe how the skeleton and muscles enable movement.",
  standards: ["Year 4 Science: Movement"],
  vocabulary: [
    { term: "Ligament", definition: "Tissue connecting bones at joints." },
    { term: "Tendon", definition: "Tissue connecting muscle to bone." },
    {
      term: "Voluntary/involuntary",
      definition: "Controlled / automatic movement.",
    },
    { term: "Antagonistic pair", definition: "Two muscles working together." },
  ],
  concepts: [
    {
      id: "edps4-u2-movement",
      title: "How movement works",
      skill: "Explain the roles of bones, joints, muscles and tendons.",
      lesson: {
        sections: [
          {
            heading: "Movement system",
            body: "**Bones** provide framework; **joints** allow movement; **muscles** pull on bones via **tendons**; **ligaments** hold bones together at joints; **cartilage** cushions. Muscles work in **antagonistic pairs** — one contracts while other relaxes.",
          },
          {
            heading: "Joint types",
            body: "**Ball and socket** (hip/shoulder — all directions), **hinge** (elbow/knee — one direction), **pivot** (neck — rotation), **gliding** (wrist — sliding), **saddle** (thumb — two directions).",
          },
        ],
        keyFormulas: [
          { name: "Tendon", statement: "Muscle to bone" },
          { name: "Ligament", statement: "Bone to bone" },
          { name: "Antagonistic pair", statement: "Contract + relax" },
        ],
        workedExample: {
          problem: "What connects muscle to bone?",
          solution: "Tendon.",
        },
      },
      questions: [
        {
          id: "edps4-u2-mv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What connects muscle to bone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tendon" },
              { id: "b", text: "Ligament" },
              { id: "c", text: "Cartilage" },
              { id: "d", text: "Joint" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tendon",
                statement: "Muscle to bone.",
              },
            ],
            steps: [{ reasoning: "Tendon connects.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Tendon",
            commonErrors: ["Confused with ligament."],
          },
        },
        {
          id: "edps4-u2-mv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an antagonistic muscle pair?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two muscles pushing" },
              { id: "b", text: "One contracts while other relaxes" },
              { id: "c", text: "Muscles in pairs of legs" },
              { id: "d", text: "Muscles that never work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antagonistic pair",
                statement: "Contract + relax.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: contract+relax.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** One contracts while other relaxes",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps4-u2-mv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match: tendon, ligament, cartilage to their roles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Connective tissues",
                statement:
                  "Tendon=muscle-bone; ligament=bone-bone; cartilage=cushion.",
              },
            ],
            steps: [
              { reasoning: "Tendon correct.", marks: 1, markCode: "A" },
              { reasoning: "Ligament correct.", marks: 1, markCode: "A" },
              { reasoning: "Cartilage correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tendon: muscle→bone; ligament: bone→bone; cartilage: cushions joints",
            commonErrors: ["Mismatched."],
          },
        },
        {
          id: "edps4-u2-mv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why you can't bend your elbow in both directions with one muscle.",
          parts: [
            { label: "a", prompt: "Muscle action", marks: 1 },
            { label: "b", prompt: "Pair needed", marks: 1 },
            { label: "c", prompt: "Why pairs", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Muscle pairs",
                statement: "Muscles only pull — need pair for both directions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Pull explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Pair identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Need explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Muscles only pull; biceps pulls arm up while triceps relaxes, then triceps pulls down while biceps relaxes",
            commonErrors: ["No pair explanation."],
          },
        },
      ],
    },
    {
      id: "edps4-u2-skeleton",
      title: "The skeleton's functions",
      skill: "Describe all functions of the skeleton and bone structure.",
      lesson: {
        sections: [
          {
            heading: "Skeleton functions",
            body: "**Support** (framework), **protect** (skull→brain, ribs→heart/lungs, spine→spinal cord), **movement** (with muscles), **blood cell production** (bone marrow), **mineral storage** (calcium, phosphorus).",
          },
          {
            heading: "Bone structure",
            body: "Bones are living tissue — **compact bone** outer layer, **spongy bone** inner (lightweight), **bone marrow** inside (makes blood cells), covered by **periosteum**. Bones are strong but lightweight.",
          },
        ],
        keyFormulas: [
          { name: "Bone marrow", statement: "Makes blood cells" },
          { name: "Compact bone", statement: "Hard outer layer" },
          { name: "Spongy bone", statement: "Lightweight inner" },
        ],
        workedExample: {
          problem: "Where are blood cells made?",
          solution: "Bone marrow inside bones.",
        },
      },
      questions: [
        {
          id: "edps4-u2-sk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where are blood cells made?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liver" },
              { id: "b", text: "Muscles" },
              { id: "c", text: "Bone marrow" },
              { id: "d", text: "Heart" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bone marrow",
                statement: "Makes blood cells.",
              },
            ],
            steps: [
              { reasoning: "Bone marrow makes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Bone marrow",
            commonErrors: ["Wrong organ."],
          },
        },
        {
          id: "edps4-u2-sk-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two bones that protect organs.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pelvis and spine" },
              { id: "b", text: "Tibia and fibula" },
              { id: "c", text: "Skull and ribs" },
              { id: "d", text: "Femur and humerus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protection",
                statement: "Skull→brain; ribs→heart/lungs.",
              },
            ],
            steps: [
              {
                reasoning: "Identify protective bones.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: skull+ribs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Skull and ribs",
            commonErrors: ["Limb bones chosen."],
          },
        },
        {
          id: "edps4-u2-sk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List four functions of the skeleton.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skeleton functions",
                statement: "Support, protect, move, blood cells, minerals.",
              },
            ],
            steps: [
              { reasoning: "Function 1-2.", marks: 1, markCode: "A" },
              { reasoning: "Function 3-4.", marks: 1, markCode: "A" },
              { reasoning: "All four.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Support, protect organs, enable movement, produce blood cells (also store minerals)",
            commonErrors: ["Fewer than four."],
          },
        },
        {
          id: "edps4-u2-sk-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how bone structure makes bones both strong and lightweight.",
          parts: [
            { label: "a", prompt: "Compact bone", marks: 1 },
            { label: "b", prompt: "Spongy bone", marks: 1 },
            { label: "c", prompt: "Combined effect", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bone structure",
                statement: "Compact=strong; spongy=lightweight.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Compact described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Spongy described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Hard compact outer layer gives strength; honeycombed spongy inner reduces weight while keeping structure",
            commonErrors: ["No structure link."],
          },
        },
      ],
    },
  ],
};
