import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "edps1-u3-lesson-3-2",
  code: "3-2",
  title: "Plants and What They Need",
  goal: "I CAN describe what plants need and how they grow.",
  standards: ["Year 1 Science: Plants"],
  vocabulary: [
    {
      term: "Seed",
      definition: "A small part of a plant that can grow into a new plant.",
    },
    {
      term: "Root",
      definition: "Part of plant that grows underground and absorbs water.",
    },
    {
      term: "Stem",
      definition: "Part that supports the plant and carries water.",
    },
    {
      term: "Leaf",
      definition: "Flat green part that makes food using sunlight.",
    },
  ],
  concepts: [
    {
      id: "edps1-u3-plants",
      title: "Plant parts and needs",
      skill: "Identify plant parts and what plants need to grow.",
      lesson: {
        sections: [
          {
            heading: "Plant parts",
            body: "**Roots**: underground, absorb water and anchor plant. **Stem**: supports plant, carries water. **Leaves**: green, make food from sunlight. **Flowers**: produce seeds for new plants.",
          },
          {
            heading: "What plants need",
            body: "Plants need: **sunlight** (to make food), **water** (from roots), **air** (carbon dioxide), **soil/nutrients**. Without these, plants die or don't grow.",
          },
        ],
        keyFormulas: [
          { name: "Roots", statement: "Absorb water, anchor" },
          { name: "Leaves", statement: "Make food from sunlight" },
          { name: "Needs", statement: "Sun, water, air, soil" },
        ],
        workedExample: {
          problem: "Why do plants need sunlight?",
          solution: "Leaves use sunlight to make food (photosynthesis).",
        },
      },
      questions: [
        {
          id: "edps1-u3-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a plant absorbs water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leaves" },
              { id: "b", text: "Stem" },
              { id: "c", text: "Flowers" },
              { id: "d", text: "Roots" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Roots", statement: "Absorb water." },
            ],
            steps: [{ reasoning: "Roots absorb.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Roots",
            commonErrors: ["Wrong part."],
          },
        },
        {
          id: "edps1-u3-pl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do leaves use to make food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water only" },
              { id: "b", text: "Air only" },
              { id: "c", text: "Soil" },
              { id: "d", text: "Sunlight" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis",
                statement: "Sunlight makes food.",
              },
            ],
            steps: [
              { reasoning: "Identify need.", marks: 1, markCode: "M" },
              { reasoning: "Answer: sunlight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Sunlight",
            commonErrors: ["Wrong need."],
          },
        },
        {
          id: "edps1-u3-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two things a plant needs to grow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant needs",
                statement: "Sunlight, water, air, soil.",
              },
            ],
            steps: [
              { reasoning: "Need 1.", marks: 1, markCode: "A" },
              { reasoning: "Need 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Sunlight; water'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u3-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Match plant part to job: roots, stem, leaves, flowers.",
          parts: [
            { label: "a", prompt: "Roots", marks: 1 },
            { label: "b", prompt: "Stem", marks: 1 },
            { label: "c", prompt: "Leaves", marks: 1 },
            { label: "d", prompt: "Flowers", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant parts",
                statement:
                  "roots=water; stem=support; leaves=food; flowers=seeds.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Roots = absorb water.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Stem = support.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Leaves = make food.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Flowers = seeds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "roots=water, stem=support, leaves=food, flowers=seeds",
            commonErrors: ["Mismatched parts/jobs."],
          },
        },
      ],
    },
    {
      id: "edps1-u3-growth",
      title: "Plant growth",
      skill: "Describe how plants grow from seeds.",
      lesson: {
        sections: [
          {
            heading: "From seed to plant",
            body: "A seed is planted in soil → it absorbs water → a root grows down → a shoot grows up → leaves appear → plant grows bigger → flowers and seeds form → cycle repeats.",
          },
          {
            heading: "What affects growth",
            body: "Plants grow best with: enough sunlight, regular watering, good soil, and space. Without these, growth is slow or stops. We can observe growth by measuring plants over time.",
          },
        ],
        keyFormulas: [
          { name: "Seed → plant", statement: "Germination process" },
          { name: "Germination", statement: "Seed starts to grow" },
          { name: "Measure", statement: "Track growth over time" },
        ],
        workedExample: {
          problem: "What happens first when a seed is planted?",
          solution: "It absorbs water and a root starts to grow.",
        },
      },
      questions: [
        {
          id: "edps1-u3-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a seed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A root" },
              { id: "b", text: "A flower" },
              { id: "c", text: "A small part that grows into a plant" },
              { id: "d", text: "A leaf" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Seed",
                statement: "Grows into plant.",
              },
            ],
            steps: [
              { reasoning: "Seed = new plant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A small part that grows into a plant",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps1-u3-gr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens first when a seed is planted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Root grows down" },
              { id: "b", text: "Leaves appear" },
              { id: "c", text: "Flowers appear" },
              { id: "d", text: "Seeds form" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germination",
                statement: "Root grows first.",
              },
            ],
            steps: [
              { reasoning: "Order identified.", marks: 1, markCode: "M" },
              { reasoning: "Answer: root grows.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Root grows down",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps1-u3-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these: leaf appears, seed planted, flower forms, root grows.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth order",
                statement: "seed → root → leaf → flower.",
              },
            ],
            steps: [
              { reasoning: "Seed first.", marks: 1, markCode: "A" },
              { reasoning: "Root next.", marks: 1, markCode: "A" },
              { reasoning: "Leaf then flower.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "seed planted → root grows → leaf appears → flower forms",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps1-u3-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What would happen to a plant with no sunlight? Explain.",
          parts: [
            { label: "a", prompt: "What plants need sunlight for", marks: 1 },
            { label: "b", prompt: "What happens without it", marks: 1 },
            { label: "c", prompt: "Result over time", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant needs",
                statement: "No sunlight = no food = plant dies.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Food making.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "No food produced.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Plant weakens/dies.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "No sunlight means leaves can't make food, so the plant weakens and dies",
            commonErrors: ["Incomplete explanation."],
          },
        },
      ],
    },
  ],
};
