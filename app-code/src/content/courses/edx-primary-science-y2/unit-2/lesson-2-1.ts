import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "edps2-u2-lesson-2-1",
  code: "2-1",
  title: "Material Properties",
  goal: "I CAN test and describe properties of everyday materials.",
  standards: ["Year 2 Science: Materials"],
  vocabulary: [
    { term: "Transparent", definition: "You can see through it." },
    { term: "Opaque", definition: "You cannot see through it." },
    { term: "Waterproof", definition: "Water cannot pass through it." },
    { term: "Absorbent", definition: "Soaks up liquid." },
  ],
  concepts: [
    {
      id: "edps2-u2-properties",
      title: "Testing properties",
      skill: "Test materials for transparency, waterproofness and absorbency.",
      lesson: {
        sections: [
          {
            heading: "Testing materials",
            body: "We can test materials: hold to light (**transparent** = see through; **opaque** = blocks light), drip water (**waterproof** = beads up; **absorbent** = soaks in), bend them (**bendy** vs **rigid**), and try to scratch (**hard** vs **soft**).",
          },
          {
            heading: "Results",
            body: "Glass: transparent, waterproof, rigid. Paper: opaque, absorbent, bends. Plastic: can be transparent, waterproof, bendy. Fabric: opaque, absorbent, soft.",
          },
        ],
        keyFormulas: [
          { name: "Transparent", statement: "See through" },
          { name: "Waterproof", statement: "Water beads up" },
          { name: "Absorbent", statement: "Soaks up liquid" },
        ],
        workedExample: {
          problem: "How would you test if a material is waterproof?",
          solution:
            "Drip water on it — if water beads up and doesn't soak in, it's waterproof.",
        },
      },
      questions: [
        {
          id: "edps2-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'transparent' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's soft" },
              { id: "b", text: "You can see through" },
              { id: "c", text: "You cannot see through" },
              { id: "d", text: "It's heavy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transparent",
                statement: "See through.",
              },
            ],
            steps: [
              {
                reasoning: "Transparent = see through.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** You can see through",
            commonErrors: ["Confused with opaque."],
          },
        },
        {
          id: "edps2-u2-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which material is absorbent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metal" },
              { id: "b", text: "Plastic sheet" },
              { id: "c", text: "Glass" },
              { id: "d", text: "Paper" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Absorbent",
                statement: "Paper soaks up liquid.",
              },
            ],
            steps: [
              { reasoning: "Identify absorbent.", marks: 1, markCode: "M" },
              { reasoning: "Answer: paper.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Paper",
            commonErrors: ["Wrong material."],
          },
        },
        {
          id: "edps2-u2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how to test if a material is transparent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Testing",
                statement: "Hold to light and see if you can see through.",
              },
            ],
            steps: [
              { reasoning: "Method described.", marks: 1, markCode: "A" },
              { reasoning: "Correct test.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hold it up to light — if you can see through it, it's transparent",
            commonErrors: ["Wrong test."],
          },
        },
        {
          id: "edps2-u2-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Test these materials and record results: glass, paper, plastic bag, fabric.",
          parts: [
            { label: "a", prompt: "Transparent?", marks: 1 },
            { label: "b", prompt: "Waterproof?", marks: 1 },
            { label: "c", prompt: "Absorbent?", marks: 1 },
            { label: "d", prompt: "Summary table", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material testing",
                statement:
                  "glass=transp/waterproof; paper=opaque/absorbent; plastic=waterproof; fabric=absorbent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Transparency recorded.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Waterproof recorded.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Absorbent recorded.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Summary clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "glass: transparent+waterproof; paper: opaque+absorbent; plastic: waterproof; fabric: absorbent",
            commonErrors: ["Incomplete or wrong results."],
          },
        },
      ],
    },
    {
      id: "edps2-u2-uses",
      title: "Choosing materials for purpose",
      skill: "Explain why materials are chosen for particular objects.",
      lesson: {
        sections: [
          {
            heading: "Matching properties to purpose",
            body: "Raincoat: **waterproof** + flexible. Window: **transparent** + rigid. Spoon: **hard** + doesn't melt + hygienic. Teddy bear: **soft** + cuddly. Umbrella: **waterproof** + strong frame.",
          },
          {
            heading: "Trade-offs",
            body: "No material is perfect. Glass is transparent but breaks easily. Plastic is waterproof but can tear. Metal is strong but heavy. We choose the best balance of properties.",
          },
        ],
        keyFormulas: [
          { name: "Match", statement: "Property fits purpose" },
          { name: "Trade-off", statement: "No perfect material" },
          { name: "Best choice", statement: "Balanced properties" },
        ],
        workedExample: {
          problem: "Why is a window made of glass not plastic?",
          solution:
            "Glass is transparent and rigid — doesn't scratch easily like plastic.",
        },
      },
      questions: [
        {
          id: "edps2-u2-us-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is a raincoat made of waterproof material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's colourful" },
              { id: "b", text: "It's cheap" },
              { id: "c", text: "It keeps rain out" },
              { id: "d", text: "It's soft" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement: "Waterproof = stays dry.",
              },
            ],
            steps: [
              { reasoning: "Property matches need.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It keeps rain out",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps2-u2-us-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a window made of glass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's transparent and rigid" },
              { id: "b", text: "It's cheap" },
              { id: "c", text: "It's soft" },
              { id: "d", text: "It's bendy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement: "Transparent + rigid.",
              },
            ],
            steps: [
              { reasoning: "Properties identified.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: transparent/rigid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** It's transparent and rigid",
            commonErrors: ["Wrong properties."],
          },
        },
        {
          id: "edps2-u2-us-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a sponge towel made of fabric not plastic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Material selection",
                statement: "Fabric is absorbent; plastic isn't.",
              },
            ],
            steps: [
              { reasoning: "Property identified.", marks: 1, markCode: "M" },
              { reasoning: "Reason explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fabric is absorbent so it soaks up water; plastic is waterproof so it wouldn't",
            commonErrors: ["No property link."],
          },
        },
        {
          id: "edps2-u2-us-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design challenge: choose a material for a rain hat and justify your choice.",
          parts: [
            { label: "a", prompt: "Material chosen", marks: 1 },
            { label: "b", prompt: "Properties needed", marks: 1 },
            { label: "c", prompt: "Why it works", marks: 1 },
            { label: "d", prompt: "Trade-off considered", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Design",
                statement: "Waterproof + light; trade-offs noted.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Material chosen.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Properties identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Justified.", marks: 1, markCode: "R" },
              {
                part: "d",
                reasoning: "Trade-off noted.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Waterproof plastic — keeps rain out; though it can tear, it's light and cheap'",
            commonErrors: ["Poor choice or no reasoning."],
          },
        },
      ],
    },
  ],
};
