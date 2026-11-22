import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "edps4-u2-lesson-2-3",
  code: "2-3",
  title: "Plant Reproduction and Seed Dispersal",
  goal: "I CAN explain pollination, fertilisation and seed dispersal.",
  standards: ["Year 4 Science: Plant reproduction"],
  vocabulary: [
    { term: "Pollination", definition: "Transfer of pollen to stigma." },
    { term: "Fertilisation", definition: "Fusion of male and female cells." },
    { term: "Seed dispersal", definition: "Spreading seeds away from parent." },
    { term: "Germination", definition: "Seed starting to grow." },
  ],
  concepts: [
    {
      id: "edps4-u2-repro",
      title: "Pollination and fertilisation",
      skill: "Describe pollination, fertilisation and seed/fruit formation.",
      lesson: {
        sections: [
          {
            heading: "Pollination",
            body: "**Pollination** = pollen moves from anther to stigma. Agents: wind (grass), insects (flowers attract with colour/scent/nectar), birds, water. Cross-pollination between different plants creates variety.",
          },
          {
            heading: "Fertilisation and seeds",
            body: "After pollination, **fertilisation** occurs: male pollen fuses with female ovule → seed forms. Ovary → fruit protects seeds. Some plants self-pollinate; others need cross-pollination.",
          },
        ],
        keyFormulas: [
          { name: "Pollination", statement: "Pollen → stigma" },
          { name: "Fertilisation", statement: "Pollen + ovule → seed" },
          { name: "Fruit", statement: "Protects seeds" },
        ],
        workedExample: {
          problem: "How does an apple tree reproduce?",
          solution:
            "Insects pollinate flowers → fertilised ovules become seeds → ovary becomes apple fruit containing seeds.",
        },
      },
      questions: [
        {
          id: "edps4-u2-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is pollination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watering plants" },
              { id: "b", text: "Pollen transfer to stigma" },
              { id: "c", text: "Photosynthesis" },
              { id: "d", text: "Seed dispersal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pollination",
                statement: "Pollen → stigma.",
              },
            ],
            steps: [
              { reasoning: "Pollination defined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pollen transfer to stigma",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps4-u2-re-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What forms after fertilisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only flowers" },
              { id: "b", text: "Seeds and fruit" },
              { id: "c", text: "Leaves" },
              { id: "d", text: "Roots" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fertilisation",
                statement: "Seeds form; ovary becomes fruit.",
              },
            ],
            steps: [
              { reasoning: "Recall outcome.", marks: 1, markCode: "M" },
              { reasoning: "Answer: seeds+fruit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Seeds and fruit",
            commonErrors: ["Incomplete answer."],
          },
        },
        {
          id: "edps4-u2-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two ways pollen can be transferred between flowers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pollination agents",
                statement: "Wind, insects, birds, water.",
              },
            ],
            steps: [
              { reasoning: "Agent 1.", marks: 1, markCode: "A" },
              { reasoning: "Agent 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Wind; insects (bees)'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps4-u2-re-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why some flowers are brightly coloured and scented.",
          parts: [
            { label: "a", prompt: "Attract what", marks: 1 },
            { label: "b", prompt: "Why attract", marks: 1 },
            { label: "c", prompt: "Pollination link", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pollination attraction",
                statement: "Colour/scent attract pollinators.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Pollinators identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Benefit explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Pollination linked.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Bright colours and scents attract insects/birds that carry pollen between flowers, enabling fertilisation",
            commonErrors: ["No pollinator link."],
          },
        },
      ],
    },
    {
      id: "edps4-u2-seed",
      title: "Seed dispersal and germination",
      skill: "Describe seed dispersal methods and germination requirements.",
      lesson: {
        sections: [
          {
            heading: "Dispersal methods",
            body: "**Wind** (dandelion, sycamore — parachutes/wings), **water** (coconut — floats), **animals** (sticky seeds attach, fruits eaten → seeds pass through), **explosion** (pea pods burst). Dispersal prevents competition and spreads species.",
          },
          {
            heading: "Germination",
            body: "Seeds need **water** (activates enzymes), **warmth** (right temperature), and **oxygen** (respiration). Some need light too. Dormancy prevents premature germination.",
          },
        ],
        keyFormulas: [
          { name: "Dispersal", statement: "Wind/water/animals/explosion" },
          { name: "Germination", statement: "Needs water+warmth+oxygen" },
          { name: "Dormancy", statement: "Waiting state" },
        ],
        workedExample: {
          problem: "How do dandelion seeds travel?",
          solution: "Parachute-like hairs catch wind and carry seeds far away.",
        },
      },
      questions: [
        {
          id: "edps4-u2-sd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is seed dispersal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spreading seeds away from parent" },
              { id: "b", text: "Planting seeds" },
              { id: "c", text: "Seed germination" },
              { id: "d", text: "Eating seeds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Seed dispersal",
                statement: "Spreading seeds.",
              },
            ],
            steps: [
              { reasoning: "Dispersal = spreading.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Spreading seeds away from parent",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps4-u2-sd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which seed is dispersed by water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coconut" },
              { id: "b", text: "Pea" },
              { id: "c", text: "Dandelion" },
              { id: "d", text: "Sycamore" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water dispersal",
                statement: "Coconut floats.",
              },
            ],
            steps: [
              { reasoning: "Identify water seed.", marks: 1, markCode: "M" },
              { reasoning: "Answer: coconut.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Coconut",
            commonErrors: ["Wrong seed."],
          },
        },
        {
          id: "edps4-u2-sd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does a seed need to germinate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germination",
                statement: "Water, warmth, oxygen.",
              },
            ],
            steps: [
              { reasoning: "Condition 1.", marks: 1, markCode: "A" },
              { reasoning: "Condition 2.", marks: 1, markCode: "A" },
              { reasoning: "Condition 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water, warmth and oxygen (air)",
            commonErrors: ["Missing condition."],
          },
        },
        {
          id: "edps4-u2-sd-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test: does a seed need warmth to germinate?",
          parts: [
            { label: "a", prompt: "Controls", marks: 1 },
            { label: "b", prompt: "Variable changed", marks: 1 },
            { label: "c", prompt: "What you measure", marks: 1 },
            { label: "d", prompt: "Prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fair test",
                statement: "Same water/soil/air; only temperature differs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Controls listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Temperature varied.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Germination measured.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Prediction made.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Keep all same except temperature; count germinated seeds; predict warm seeds germinate, cold don't",
            commonErrors: ["Unfair test."],
          },
        },
      ],
    },
  ],
};
