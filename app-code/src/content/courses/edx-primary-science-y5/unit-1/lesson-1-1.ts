import type { Lesson } from "../../../types.ts";

export const lesson151: Lesson = {
  id: "edps5-u1-lesson-1-1",
  code: "1-1",
  title: "Food Chains and Ecosystems",
  goal: "I CAN construct food chains and explain ecosystem interdependence.",
  standards: ["Year 5 Science: Food chains and ecosystems"],
  vocabulary: [
    { term: "Food chain", definition: "Sequence of who eats whom." },
    {
      term: "Decomposer",
      definition: "Breaks down dead matter — fungi, bacteria.",
    },
    {
      term: "Biomass",
      definition: "Total mass of living organisms at each level.",
    },
    { term: "Ecosystem", definition: "Community + environment interacting." },
  ],
  concepts: [
    {
      id: "edps5-u1-foodchain",
      title: "Food chains and energy",
      skill: "Construct food chains and explain energy transfer.",
      lesson: {
        sections: [
          {
            heading: "Food chain structure",
            body: "**Producers** (plants/algae — make food via photosynthesis) → **primary consumers** (herbivores) → **secondary consumers** (carnivores eating herbivores) → **tertiary consumers** (top predators). **Decomposers** break down dead matter at every level.",
          },
          {
            heading: "Energy transfer",
            body: "Only ~10% of energy passes to the next level; 90% lost as heat/movement. This is why food chains rarely exceed 4-5 levels — not enough energy remains for top predators.",
          },
        ],
        keyFormulas: [
          { name: "Energy transfer", statement: "~10% to next level" },
          { name: "Producer", statement: "Level 1 — makes food" },
          { name: "Decomposer", statement: "Recycles nutrients" },
        ],
        workedExample: {
          problem: "Why can't food chains be very long?",
          solution:
            "Each level loses ~90% energy, so very little reaches top predators.",
        },
      },
      questions: [
        {
          id: "edps5-u1-fc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What percentage of energy typically passes to the next food chain level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100%" },
              { id: "b", text: "1%" },
              { id: "c", text: "10%" },
              { id: "d", text: "50%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "~10% passes up.",
              },
            ],
            steps: [
              { reasoning: "Recall percentage.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 10%",
            commonErrors: ["Wrong percentage."],
          },
        },
        {
          id: "edps5-u1-fc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are decomposers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants" },
              { id: "b", text: "Organisms breaking down dead matter" },
              { id: "c", text: "Herbivores" },
              { id: "d", text: "Top predators" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposer",
                statement: "Breaks down dead matter.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: decomposer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Organisms breaking down dead matter",
            commonErrors: ["Wrong role."],
          },
        },
        {
          id: "edps5-u1-fc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put in order: owl, grass, mouse, snake.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food chain order",
                statement: "Grass→mouse→snake→owl.",
              },
            ],
            steps: [
              { reasoning: "Producer first.", marks: 1, markCode: "A" },
              { reasoning: "Consumers ordered.", marks: 1, markCode: "A" },
              { reasoning: "Correct chain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Grass → mouse → snake → owl",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps5-u1-fc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why there are fewer top predators than herbivores in an ecosystem.",
          parts: [
            { label: "a", prompt: "Energy at each level", marks: 1 },
            { label: "b", prompt: "Energy loss", marks: 1 },
            { label: "c", prompt: "Result", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy pyramid",
                statement: "Less energy = fewer organisms up the chain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Energy levels.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Loss explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Result linked.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Only ~10% energy passes up each level, so top predators have far less energy available and must be fewer in number",
            commonErrors: ["No energy link."],
          },
        },
      ],
    },
    {
      id: "edps5-u1-ecosystem",
      title: "Ecosystems and human impact",
      skill: "Describe ecosystems and how humans affect them.",
      lesson: {
        sections: [
          {
            heading: "Ecosystem components",
            body: "An **ecosystem** includes producers, consumers, decomposers plus abiotic factors (sunlight, water, soil, temperature). All interconnected — change one element and others are affected.",
          },
          {
            heading: "Human impact",
            body: "Humans affect ecosystems through **pollution**, **habitat destruction**, **overfishing/hunting**, **climate change**, **invasive species**. Conservation protects habitats, reduces pollution, restores populations.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Community + environment" },
          { name: "Habitat destruction", statement: "Removes homes/food" },
          { name: "Conservation", statement: "Protects ecosystems" },
        ],
        workedExample: {
          problem: "How does deforestation affect an ecosystem?",
          solution:
            "Destroys habitat, reduces producers, disrupts food chains and increases erosion.",
        },
      },
      questions: [
        {
          id: "edps5-u1-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only animals" },
              { id: "b", text: "A food chain" },
              { id: "c", text: "Community of organisms + their environment" },
              { id: "d", text: "Only plants" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecosystem",
                statement: "Community + environment.",
              },
            ],
            steps: [
              { reasoning: "Ecosystem defined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Community of organisms + their environment",
            commonErrors: ["Partial definition."],
          },
        },
        {
          id: "edps5-u1-ec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways humans harm ecosystems.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollution and habitat destruction" },
              { id: "b", text: "Planting trees" },
              { id: "c", text: "Recycling" },
              { id: "d", text: "Protecting animals" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Pollution and habitat destruction",
            commonErrors: ["Positive actions chosen."],
          },
        },
        {
          id: "edps5-u1-ec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how pollution affects an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pollution",
                statement: "Harms organisms, disrupts food chains.",
              },
            ],
            steps: [
              { reasoning: "Direct effect.", marks: 1, markCode: "A" },
              { reasoning: "Indirect effect.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Pollution kills organisms directly and accumulates in food chains, disrupting the whole ecosystem",
            commonErrors: ["No ecosystem link."],
          },
        },
        {
          id: "edps5-u1-ec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Suggest three ways to protect an endangered habitat.",
          parts: [
            { label: "a", prompt: "Way 1", marks: 1 },
            { label: "b", prompt: "Way 2", marks: 1 },
            { label: "c", prompt: "Way 3", marks: 1 },
            { label: "d", prompt: "All explained", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Conservation",
                statement:
                  "Protect habitat, reduce pollution, restore species.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Valid way.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Valid way.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Valid way.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "All explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Create protected area; reduce pollution; reintroduce endangered species'",
            commonErrors: ["Ways don't protect."],
          },
        },
      ],
    },
  ],
};
