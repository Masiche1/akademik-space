import type { Lesson } from "../../../types.ts";

export const lesson162: Lesson = {
  id: "edps6-u1-lesson-1-2",
  code: "1-2",
  title: "Food Webs and Ecosystems",
  goal: "I CAN construct food webs and explain ecosystem dynamics.",
  standards: ["Year 6 Science: Food webs"],
  vocabulary: [
    { term: "Food web", definition: "Interconnected food chains." },
    { term: "Trophic level", definition: "Feeding level in food chain." },
    {
      term: "Bioaccumulation",
      definition: "Toxins concentrating up food chain.",
    },
    {
      term: "Carrying capacity",
      definition: "Max population an environment supports.",
    },
  ],
  concepts: [
    {
      id: "edps6-u1-foodweb",
      title: "Food webs and energy flow",
      skill: "Interpret food webs and energy pyramids.",
      lesson: {
        sections: [
          {
            heading: "Food web structure",
            body: "Producers → primary consumers → secondary consumers → tertiary consumers. Most organisms eat multiple things, creating webs. **Energy pyramid**: ~10% energy transfers up; ~90% lost as heat/movement. Biomass decreases up the pyramid.",
          },
          {
            heading: "Bioaccumulation",
            body: "**Bioaccumulation**: toxins (pesticides, heavy metals) concentrate up the food chain. Top predators have highest levels — e.g., mercury in tuna, DDT thinning bird eggshells.",
          },
        ],
        keyFormulas: [
          { name: "Energy pyramid", statement: "10% up, 90% lost" },
          { name: "Bioaccumulation", statement: "Toxins concentrate up" },
          { name: "Top predator", statement: "Highest toxin level" },
        ],
        workedExample: {
          problem: "Why do top predators have most toxins?",
          solution:
            "Toxins don't break down; each level accumulates more from food eaten.",
        },
      },
      questions: [
        {
          id: "edps6-u1-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is bioaccumulation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing bigger" },
              { id: "b", text: "Building muscle" },
              { id: "c", text: "Storing fat" },
              { id: "d", text: "Toxins concentrating up food chain" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bioaccumulation",
                statement: "Toxins concentrate up.",
              },
            ],
            steps: [
              {
                reasoning: "Bioaccumulation defined.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Toxins concentrating up food chain",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps6-u1-fw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percentage of energy passes to the next trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25%" },
              { id: "b", text: "50%" },
              { id: "c", text: "10%" },
              { id: "d", text: "75%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "~10% up.",
              },
            ],
            steps: [
              { reasoning: "Recall percentage.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 10%",
            commonErrors: ["Wrong percentage."],
          },
        },
        {
          id: "edps6-u1-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why food chains rarely exceed 4-5 levels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy loss",
                statement: "90% lost per level — insufficient energy.",
              },
            ],
            steps: [
              { reasoning: "Energy loss.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Each level loses ~90% energy as heat/movement; too little remains to support higher levels",
            commonErrors: ["No energy link."],
          },
        },
        {
          id: "edps6-u1-fw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Predict the effect of removing all producers from an ecosystem.",
          parts: [
            { label: "a", prompt: "Immediate effect", marks: 1 },
            { label: "b", prompt: "Knock-on effect", marks: 1 },
            { label: "c", prompt: "Long-term effect", marks: 1 },
            { label: "d", prompt: "Full prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food web",
                statement: "No producers = collapse.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Immediate effect.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Knock-on.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Long-term.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Herbivores starve first → carnivores lose food → whole web collapses → ecosystem dies",
            commonErrors: ["Incomplete cascade."],
          },
        },
      ],
    },
    {
      id: "edps6-u1-ecosystem",
      title: "Ecosystems and Human Impact",
      skill: "Describe ecosystem services and human impacts.",
      lesson: {
        sections: [
          {
            heading: "Ecosystem services",
            body: "Ecosystems provide: **provisioning** (food, water, materials), **regulating** (climate, water purification), **supporting** (nutrient cycling, soil formation), **cultural** (recreation, aesthetics).",
          },
          {
            heading: "Human impacts",
            body: "**Habitat destruction** (deforestation, urbanisation), **pollution** (air, water, plastic), **overexploitation** (overfishing), **invasive species**, **climate change**. **Sustainability** = meeting needs without harming future generations.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem services", statement: "Benefits humans get" },
          { name: "Habitat destruction", statement: "Major threat" },
          { name: "Sustainability", statement: "Long-term balance" },
        ],
        workedExample: {
          problem: "What are ecosystem services?",
          solution:
            "Benefits like food, clean water, climate regulation that ecosystems provide.",
        },
      },
      questions: [
        {
          id: "edps6-u1-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are ecosystem services?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gardening" },
              { id: "b", text: "Benefits ecosystems provide to humans" },
              { id: "c", text: "Animal hospitals" },
              { id: "d", text: "Zoos" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecosystem services",
                statement: "Benefits to humans.",
              },
            ],
            steps: [
              { reasoning: "Services = benefits.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Benefits ecosystems provide to humans",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edps6-u1-ec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways humans damage ecosystems.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protecting species" },
              { id: "b", text: "Recycling" },
              { id: "c", text: "Planting trees" },
              { id: "d", text: "Pollution and habitat destruction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human impact",
                statement: "Pollution, habitat loss, overfishing.",
              },
            ],
            steps: [
              { reasoning: "Identify impacts.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: pollution+habitat.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Pollution and habitat destruction",
            commonErrors: ["Positive actions."],
          },
        },
        {
          id: "edps6-u1-ec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what sustainable development means.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability",
                statement: "Meet needs without harming future.",
              },
            ],
            steps: [
              { reasoning: "Definition given.", marks: 1, markCode: "A" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Meeting current needs without compromising the ability of future generations to meet theirs",
            commonErrors: ["Incomplete definition."],
          },
        },
        {
          id: "edps6-u1-ec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a plan to reduce plastic pollution in oceans.",
          parts: [
            { label: "a", prompt: "Source reduction", marks: 1 },
            { label: "b", prompt: "Cleanup", marks: 1 },
            { label: "c", prompt: "Alternatives", marks: 1 },
            { label: "d", prompt: "Full plan", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Pollution reduction",
                statement: "Reduce use, clean up, alternatives.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Reduction strategy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Cleanup strategy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Alternatives.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Reduce single-use plastics, organise beach/river cleanups, promote biodegradable alternatives and recycling",
            commonErrors: ["Incomplete plan."],
          },
        },
      ],
    },
  ],
};
