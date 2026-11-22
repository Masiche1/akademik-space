import type { Lesson } from "../../../types.ts";

export const lesson152: Lesson = {
  id: "edps5-u1-lesson-1-2",
  code: "1-2",
  title: "Life Cycles: Animals, Plants and Fungi",
  goal: "I CAN describe life cycles including fungi and flowering plants.",
  standards: ["Year 5 Science: Life cycles"],
  vocabulary: [
    { term: "Spore", definition: "Tiny cell that can grow into new organism." },
    { term: "Hypha", definition: "Thread-like structure of fungi." },
    { term: "Pollination", definition: "Pollen transfer for fertilisation." },
    { term: "Dispersal", definition: "Seed spreading method." },
  ],
  concepts: [
    {
      id: "edps5-u1-fungi",
      title: "Fungi life cycles",
      skill: "Describe how fungi reproduce via spores.",
      lesson: {
        sections: [
          {
            heading: "Fungi reproduction",
            body: "Fungi (mushrooms, mould, yeast) reproduce via **spores** — tiny cells that germinate into new fungi. **Mushroom**: spore → mycelium (network of hyphae) → fruiting body (mushroom) → releases spores. **Yeast**: budding reproduction.",
          },
          {
            heading: "Fungi roles",
            body: "**Decomposers**: break down dead matter. **Symbiotic**: mycorrhizal fungi help plants absorb water/nutrients; lichens (fungi+algae) survive harsh environments.",
          },
        ],
        keyFormulas: [
          { name: "Spore", statement: "Fungal reproductive cell" },
          { name: "Mycelium", statement: "Network of hyphae" },
          { name: "Decomposer", statement: "Breaks down dead matter" },
        ],
        workedExample: {
          problem: "How does a mushroom reproduce?",
          solution:
            "Releases spores from its gills that grow into new mycelium.",
        },
      },
      questions: [
        {
          id: "edps5-u1-fu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do fungi reproduce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spores" },
              { id: "b", text: "Eggs" },
              { id: "c", text: "Seeds" },
              { id: "d", text: "Budding only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fungi",
                statement: "Reproduce via spores.",
              },
            ],
            steps: [{ reasoning: "Fungi = spores.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Spores",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps5-u1-fu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is mycelium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A spore" },
              { id: "b", text: "Network of hyphae underground" },
              { id: "c", text: "A fruiting body" },
              { id: "d", text: "A mushroom's cap" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mycelium",
                statement: "Network of hyphae.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hyphae network.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Network of hyphae underground",
            commonErrors: ["Confused with mushroom."],
          },
        },
        {
          id: "edps5-u1-fu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of fungi as decomposers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decomposers",
                statement: "Break down dead matter, recycle nutrients.",
              },
            ],
            steps: [
              { reasoning: "Role identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fungi break down dead plants/animals, releasing nutrients back into soil for new growth",
            commonErrors: ["Vague role."],
          },
        },
        {
          id: "edps5-u1-fu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare fungal and plant reproduction.",
          parts: [
            { label: "a", prompt: "Plant method", marks: 1 },
            { label: "b", prompt: "Fungal method", marks: 1 },
            { label: "c", prompt: "Similarity", marks: 1 },
            { label: "d", prompt: "Difference", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reproduction",
                statement: "Plants=seeds; fungi=spores.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Plant method.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Fungal method.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Similarity noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Difference noted.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Both reproduce to spread; plants use seeds from flowers, fungi use spores — no flowers or seeds needed",
            commonErrors: ["No comparison."],
          },
        },
      ],
    },
    {
      id: "edps5-u1-plantlife",
      title: "Plant life cycles and growth",
      skill: "Describe complete plant life cycle and growth requirements.",
      lesson: {
        sections: [
          {
            heading: "Complete cycle",
            body: "**Seed → germination → seedling → mature plant → flower → pollination → fertilisation → fruit/seed → dispersal → new plant**. Some plants reproduce asexually (runners, tubers, bulbs) without seeds.",
          },
          {
            heading: "Growth requirements",
            body: "Plants need **light** (photosynthesis), **water** (transport + photosynthesis), **carbon dioxide**, **minerals** (nitrates for protein, phosphates for roots, potassium for flowers), **warmth**. Lack of any limits growth.",
          },
        ],
        keyFormulas: [
          { name: "Germination", statement: "Water+warmth+oxygen" },
          { name: "Photosynthesis", statement: "Light+water+CO₂" },
          { name: "Minerals", statement: "Nitrates, phosphates, potassium" },
        ],
        workedExample: {
          problem: "Why do plants need nitrates?",
          solution:
            "For protein production — needed for growth and leaf development.",
        },
      },
      questions: [
        {
          id: "edps5-u1-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do plants need for photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light, water and carbon dioxide" },
              { id: "b", text: "Only soil" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Only water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis",
                statement: "Needs light+water+CO₂.",
              },
            ],
            steps: [
              { reasoning: "Ingredients identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Light, water and carbon dioxide",
            commonErrors: ["Missing ingredient."],
          },
        },
        {
          id: "edps5-u1-pl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are nitrates needed for in plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flower colour" },
              { id: "b", text: "Protein production and growth" },
              { id: "c", text: "Water transport" },
              { id: "d", text: "Making leaves green" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nitrates",
                statement: "For protein/growth.",
              },
            ],
            steps: [
              { reasoning: "Recall role.", marks: 1, markCode: "M" },
              { reasoning: "Answer: protein/growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Protein production and growth",
            commonErrors: ["Wrong role."],
          },
        },
        {
          id: "edps5-u1-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put in order: flower, seed, seedling, mature plant, fruit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant cycle",
                statement: "Seed→seedling→mature→flower→fruit/seed.",
              },
            ],
            steps: [
              { reasoning: "Start correct.", marks: 1, markCode: "A" },
              { reasoning: "Middle correct.", marks: 1, markCode: "A" },
              { reasoning: "End correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Seed → seedling → mature plant → flower → fruit → seed",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps5-u1-pl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A plant is grown in complete darkness. Predict and explain what happens.",
          parts: [
            { label: "a", prompt: "Immediate effect", marks: 1 },
            { label: "b", prompt: "Longer-term effect", marks: 1 },
            { label: "c", prompt: "Why", marks: 1 },
            { label: "d", prompt: "Full prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Light requirement",
                statement: "No light → no photosynthesis → no food.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Immediate effect.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Long-term effect.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reason explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Plant becomes pale (etiolated) then dies — no light means no photosynthesis to make food",
            commonErrors: ["No photosynthesis link."],
          },
        },
      ],
    },
  ],
};
