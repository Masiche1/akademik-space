import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "edps5-u2-lesson-2-2",
  code: "2-2",
  title: "Skeleton, Muscles and Circulation",
  goal: "I CAN describe the skeletal, muscular and circulatory systems.",
  standards: ["Year 5 Science: Body systems"],
  vocabulary: [
    {
      term: "Vertebral column",
      definition: "Series of vertebrae forming spine.",
    },
    { term: "Cardiac muscle", definition: "Involuntary muscle in heart." },
    { term: "Aorta", definition: "Main artery from heart." },
    { term: "Capillary", definition: "Tiny vessel for exchange." },
  ],
  concepts: [
    {
      id: "edps5-u2-skeleton",
      title: "Skeleton and muscles",
      skill: "Describe skeletal structure and muscle types.",
      lesson: {
        sections: [
          {
            heading: "Skeletal system",
            body: "206 bones in adult. **Axial skeleton** (skull, spine, ribs) protects organs; **appendicular** (arms, legs) enables movement. Vertebrae protect spinal cord; ribs protect heart/lungs; skull protects brain.",
          },
          {
            heading: "Muscle types",
            body: "**Skeletal** (voluntary — move bones), **cardiac** (heart — involuntary), **smooth** (involuntary — organs, blood vessels). Muscles work in antagonistic pairs; only contract.",
          },
        ],
        keyFormulas: [
          { name: "206 bones", statement: "Adult human" },
          { name: "Cardiac muscle", statement: "Heart — involuntary" },
          { name: "Smooth muscle", statement: "Organs — involuntary" },
        ],
        workedExample: {
          problem: "Why can't you control your heartbeat?",
          solution: "Cardiac muscle is involuntary — works automatically.",
        },
      },
      questions: [
        {
          id: "edps5-u2-sk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bones does an adult human have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "306" },
              { id: "b", text: "106" },
              { id: "c", text: "206" },
              { id: "d", text: "406" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Skeleton", statement: "206 bones." },
            ],
            steps: [{ reasoning: "Recall number.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 206",
            commonErrors: ["Wrong number."],
          },
        },
        {
          id: "edps5-u2-sk-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which muscle type is involuntary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skeletal" },
              { id: "b", text: "Cardiac" },
              { id: "c", text: "Both a and b" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cardiac muscle",
                statement: "Involuntary.",
              },
            ],
            steps: [
              { reasoning: "Identify type.", marks: 1, markCode: "M" },
              { reasoning: "Answer: cardiac.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cardiac",
            commonErrors: ["Wrong muscle."],
          },
        },
        {
          id: "edps5-u2-sk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two bones that protect vital organs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protection",
                statement: "Skull→brain; ribs→heart/lungs; spine→cord.",
              },
            ],
            steps: [
              { reasoning: "Bone 1.", marks: 1, markCode: "A" },
              { reasoning: "Bone 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Skull protects brain; ribs protect heart and lungs'",
            commonErrors: ["Invalid bones."],
          },
        },
        {
          id: "edps5-u2-sk-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the skeleton and muscles work together for movement.",
          parts: [
            { label: "a", prompt: "Bones role", marks: 1 },
            { label: "b", prompt: "Muscle role", marks: 1 },
            { label: "c", prompt: "Joint role", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Movement",
                statement: "Muscles pull bones at joints.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Bones as framework.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Muscles pull.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Joints allow.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Bones form framework; muscles contract and pull bones; joints allow bones to move",
            commonErrors: ["No synergy."],
          },
        },
      ],
    },
    {
      id: "edps5-u2-circulation",
      title: "The circulatory system",
      skill: "Describe blood circulation, vessels and blood components.",
      lesson: {
        sections: [
          {
            heading: "Circulation",
            body: "Heart pumps blood through **arteries** (away, oxygenated), **capillaries** (exchange), **veins** (back, deoxygenated). **Pulmonary** circulation: heart→lungs→heart. **Systemic**: heart→body→heart. Double circulation = oxygenated and deoxygenated blood separate.",
          },
          {
            heading: "Blood components",
            body: "**Red blood cells** (carry oxygen via haemoglobin), **white blood cells** (fight infection), **platelets** (clotting), **plasma** (transports nutrients/waste/hormones).",
          },
        ],
        keyFormulas: [
          { name: "Arteries", statement: "Away from heart" },
          { name: "Veins", statement: "To heart" },
          { name: "Red cells", statement: "Carry oxygen" },
        ],
        workedExample: {
          problem: "Why is blood bright red in arteries?",
          solution: "Oxygenated haemoglobin makes blood bright red.",
        },
      },
      questions: [
        {
          id: "edps5-u2-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do red blood cells carry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Waste" },
              { id: "c", text: "Hormones" },
              { id: "d", text: "Food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Red cells",
                statement: "Carry oxygen.",
              },
            ],
            steps: [{ reasoning: "RBC function.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Oxygen",
            commonErrors: ["Wrong cargo."],
          },
        },
        {
          id: "edps5-u2-ci-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of white blood cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clot blood" },
              { id: "b", text: "Transport nutrients" },
              { id: "c", text: "Carry oxygen" },
              { id: "d", text: "Fight infection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "White cells",
                statement: "Immune defence.",
              },
            ],
            steps: [
              { reasoning: "Recall function.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: fight infection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Fight infection",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "edps5-u2-ci-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the path of blood through the body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circulation",
                statement: "Heart→lungs→heart→body→heart.",
              },
            ],
            steps: [
              { reasoning: "Heart→lungs.", marks: 1, markCode: "A" },
              { reasoning: "Heart→body.", marks: 1, markCode: "A" },
              { reasoning: "Return path.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Heart → lungs (oxygenate) → heart → body (deliver O₂/nutrients) → heart",
            commonErrors: ["Incomplete path."],
          },
        },
        {
          id: "edps5-u2-ci-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why blood is described as having double circulation.",
          parts: [
            { label: "a", prompt: "Pulmonary circuit", marks: 1 },
            { label: "b", prompt: "Systemic circuit", marks: 1 },
            { label: "c", prompt: "Benefit", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Double circulation",
                statement: "Separate oxygenated/deoxygenated paths.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Pulmonary described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Systemic described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Benefit explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Blood goes heart→lungs→heart (pulmonary) then heart→body→heart (systemic) — separate circuits keep oxygenated blood efficient",
            commonErrors: ["No two circuits."],
          },
        },
      ],
    },
  ],
};
