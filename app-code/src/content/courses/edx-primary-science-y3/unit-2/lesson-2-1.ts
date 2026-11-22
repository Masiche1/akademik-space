import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "edps3-u2-lesson-2-1",
  code: "2-1",
  title: "The Skeleton and Muscles",
  goal: "I CAN describe the skeleton's roles and how muscles work.",
  standards: ["Year 3 Science: The human body"],
  vocabulary: [
    { term: "Skeleton", definition: "Framework of bones supporting the body." },
    { term: "Joint", definition: "Where two bones meet and allow movement." },
    { term: "Muscle", definition: "Tissue that contracts to move bones." },
    { term: "Cartilage", definition: "Cushioning tissue at joints." },
  ],
  concepts: [
    {
      id: "edps3-u2-skeleton",
      title: "The skeleton",
      skill: "Describe the skeleton's roles and major bones.",
      lesson: {
        sections: [
          {
            heading: "Skeleton roles",
            body: "The **skeleton**: supports the body, protects organs (skull→brain, ribs→heart/lungs), allows movement with muscles, produces blood cells in bone marrow, stores minerals (calcium).",
          },
          {
            heading: "Major bones",
            body: "**Skull** (head), **spine/ribs** (torso), **pelvis** (hips), **femur** (thigh — longest bone), **humerus** (upper arm), **tibia/fibula** (lower leg). Bones join at **joints**.",
          },
        ],
        keyFormulas: [
          { name: "Skeleton", statement: "Support, protect, move, make blood" },
          { name: "Femur", statement: "Longest bone in body" },
          { name: "Joint", statement: "Where bones meet" },
        ],
        workedExample: {
          problem: "Which bone protects the brain?",
          solution: "The skull.",
        },
      },
      questions: [
        {
          id: "edps3-u2-sk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the longest bone in the human body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Femur" },
              { id: "b", text: "Tibia" },
              { id: "c", text: "Skull" },
              { id: "d", text: "Humerus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Femur", statement: "Longest bone." },
            ],
            steps: [{ reasoning: "Femur = longest.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Femur",
            commonErrors: ["Wrong bone."],
          },
        },
        {
          id: "edps3-u2-sk-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which bones protect the heart and lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Femur" },
              { id: "b", text: "Ribs" },
              { id: "c", text: "Spine" },
              { id: "d", text: "Skull" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ribs",
                statement: "Protect heart/lungs.",
              },
            ],
            steps: [
              {
                reasoning: "Identify protecting bones.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: ribs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ribs",
            commonErrors: ["Wrong bones."],
          },
        },
        {
          id: "edps3-u2-sk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two roles of the skeleton.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skeleton roles",
                statement: "Support, protect, movement, blood cells.",
              },
            ],
            steps: [
              { reasoning: "Role 1.", marks: 1, markCode: "A" },
              { reasoning: "Role 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Supports the body; protects organs'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps3-u2-sk-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the skeleton and muscles work together to move an arm.",
          parts: [
            { label: "a", prompt: "Skeleton role", marks: 1 },
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
                statement: "Muscles pull bones; joints allow movement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Bones identified.",
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
                reasoning: "Joint allows.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Muscles contract and pull on bones; joints allow bones to move, producing arm movement",
            commonErrors: ["No muscle-bone link."],
          },
        },
      ],
    },
    {
      id: "edps3-u2-muscle",
      title: "Muscles and joints",
      skill: "Understand how muscles move bones and different joint types.",
      lesson: {
        sections: [
          {
            heading: "How muscles work",
            body: "Muscles work in **pairs**: when one **contracts** (shortens) the other **relaxes** (lengthens). Muscles only **pull**, never push — bones are pushed by the relaxed partner muscle. Attach to bones via tendons.",
          },
          {
            heading: "Joint types",
            body: "**Ball and socket** (shoulder/hip — moves all directions), **hinge** (elbow/knee — opens/closes), **pivot** (neck — rotates), **gliding** (wrist — slides). Cartilage cushions joints; ligaments hold bones together.",
          },
        ],
        keyFormulas: [
          { name: "Muscle pairs", statement: "Contract + relax" },
          { name: "Ball & socket", statement: "All-direction movement" },
          { name: "Hinge", statement: "Open/close only" },
        ],
        workedExample: {
          problem: "Why can't muscles push?",
          solution:
            "They only contract (pull); the opposing muscle provides the push by relaxing.",
        },
      },
      questions: [
        {
          id: "edps3-u2-mu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do muscles move bones?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They spin" },
              { id: "b", text: "They float" },
              { id: "c", text: "They push" },
              { id: "d", text: "They pull" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Muscles",
                statement: "Pull via contraction.",
              },
            ],
            steps: [{ reasoning: "Muscles pull.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** They pull",
            commonErrors: ["Wrong action."],
          },
        },
        {
          id: "edps3-u2-mu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which joint allows the most movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ball and socket (shoulder)" },
              { id: "b", text: "Gliding (wrist)" },
              { id: "c", text: "Hinge (elbow)" },
              { id: "d", text: "Pivot (neck)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ball & socket",
                statement: "Moves in all directions.",
              },
            ],
            steps: [
              { reasoning: "Identify joint type.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ball & socket.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ball and socket (shoulder)",
            commonErrors: ["Wrong joint."],
          },
        },
        {
          id: "edps3-u2-mu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What happens when a muscle contracts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contraction",
                statement: "Muscle shortens, pulls bone.",
              },
            ],
            steps: [
              { reasoning: "Shortening described.", marks: 1, markCode: "A" },
              { reasoning: "Pull explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Muscle shortens and pulls the bone it's attached to",
            commonErrors: ["Incomplete description."],
          },
        },
        {
          id: "edps3-u2-mu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why you need two muscles to move your arm up and down.",
          parts: [
            { label: "a", prompt: "One muscle action", marks: 1 },
            { label: "b", prompt: "Other muscle action", marks: 1 },
            { label: "c", prompt: "Why pairs needed", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Muscle pairs",
                statement:
                  "One contracts to pull; other relaxes; reverse for opposite.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "First muscle explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Second muscle explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Pair need explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Biceps contracts to lift arm; triceps relaxes; to lower, triceps contracts and biceps relaxes — muscles only pull",
            commonErrors: ["No pair explanation."],
          },
        },
      ],
    },
  ],
};
