import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "edps4-u1-lesson-1-2",
  code: "1-2",
  title: "Food Webs and Habitats",
  goal: "I CAN interpret food webs and describe habitat needs.",
  standards: ["Year 4 Science: Food webs and habitats"],
  vocabulary: [
    {
      term: "Food web",
      definition: "Interconnected food chains in an ecosystem.",
    },
    {
      term: "Ecosystem",
      definition: "Community of organisms + their environment.",
    },
    { term: "Microhabitat", definition: "Small habitat within a larger one." },
    { term: "Niche", definition: "An organism's role in its habitat." },
  ],
  concepts: [
    {
      id: "edps4-u1-foodweb",
      title: "Food webs",
      skill: "Interpret food webs and understand interdependence.",
      lesson: {
        sections: [
          {
            heading: "Food webs",
            body: "Real ecosystems have **food webs** — many interconnected food chains. One organism eats several things and is eaten by several predators. Removing one species affects many others.",
          },
          {
            heading: "Trophic levels",
            body: "**Producers** (level 1) → **herbivores** (level 2) → **carnivores** (level 3+) → **top predators**. Energy decreases at each level — only ~10% passes to the next.",
          },
        ],
        keyFormulas: [
          { name: "Food web", statement: "Multiple connected chains" },
          { name: "Energy transfer", statement: "~10% to next level" },
          { name: "Top predator", statement: "No natural enemies" },
        ],
        workedExample: {
          problem: "Why are top predators rare?",
          solution:
            "Little energy reaches the top — most is lost at each level.",
        },
      },
      questions: [
        {
          id: "edps4-u1-fw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a food web?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A habitat map" },
              { id: "b", text: "A spider's web" },
              { id: "c", text: "Many interconnected food chains" },
              { id: "d", text: "A single food chain" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food web",
                statement: "Multiple chains.",
              },
            ],
            steps: [
              {
                reasoning: "Food web = connected chains.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Many interconnected food chains",
            commonErrors: ["Confused with chain."],
          },
        },
        {
          id: "edps4-u1-fw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are top predators rare?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Little energy reaches the top" },
              { id: "b", text: "They're too big" },
              { id: "c", text: "They hide well" },
              { id: "d", text: "They reproduce slowly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy pyramid",
                statement: "Energy decreases up the chain.",
              },
            ],
            steps: [
              { reasoning: "Recall energy loss.", marks: 1, markCode: "M" },
              { reasoning: "Answer: little energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Little energy reaches the top",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps4-u1-fw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "If all the rabbits in a food web disappeared, what would happen?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food web",
                statement: "Removing species affects many others.",
              },
            ],
            steps: [
              { reasoning: "Predators affected.", marks: 1, markCode: "A" },
              { reasoning: "Plants affected.", marks: 1, markCode: "A" },
              { reasoning: "Web reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Foxes lose food source (decline); grass grows unchecked; whole web unbalances",
            commonErrors: ["Single effect only."],
          },
        },
        {
          id: "edps4-u1-fw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Draw/explain a simple food web with at least 3 organisms and 2 connections.",
          parts: [
            { label: "a", prompt: "Producers", marks: 1 },
            { label: "b", prompt: "Consumers", marks: 1 },
            { label: "c", prompt: "Connections", marks: 1 },
            { label: "d", prompt: "Web complete", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Food web",
                statement: "Producer→herbivore→carnivore connections.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Producer included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Consumers included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "2+ connections.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. grass→rabbit→fox; grass→mouse→owl; acorn→squirrel→fox",
            commonErrors: ["Linear chain only."],
          },
        },
      ],
    },
    {
      id: "edps4-u1-habitat",
      title: "Habitats and microhabitats",
      skill: "Describe habitats, microhabitats and environmental factors.",
      lesson: {
        sections: [
          {
            heading: "Habitat factors",
            body: "Habitats are shaped by **abiotic** (non-living: temperature, water, light, soil) and **biotic** (living: food, predators, competitors) factors. Different factors suit different organisms.",
          },
          {
            heading: "Microhabitats",
            body: "Small specific habitats within larger ones: under a log, in a pond, inside a tree. Many organisms live in microhabitats that offer protection or specific conditions.",
          },
        ],
        keyFormulas: [
          { name: "Abiotic", statement: "Non-living factors" },
          { name: "Biotic", statement: "Living factors" },
          { name: "Microhabitat", statement: "Small specific habitat" },
        ],
        workedExample: {
          problem: "Why do woodlice live under logs?",
          solution: "Microhabitat — damp, dark, protected from predators.",
        },
      },
      questions: [
        {
          id: "edps4-u1-ha-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are abiotic factors?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Animals" },
              { id: "b", text: "Plants" },
              { id: "c", text: "Living things" },
              { id: "d", text: "Non-living things like temperature and light" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abiotic",
                statement: "Non-living factors.",
              },
            ],
            steps: [
              { reasoning: "Abiotic = non-living.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Non-living things like temperature and light",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps4-u1-ha-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a microhabitat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A large habitat" },
              { id: "b", text: "A food web" },
              { id: "c", text: "A small specific habitat within a larger one" },
              { id: "d", text: "A type of animal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Microhabitat",
                statement: "Small specific habitat.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: small habitat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A small specific habitat within a larger one",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps4-u1-ha-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two abiotic factors that affect where animals live.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Abiotic factors",
                statement: "Temperature, water, light, soil.",
              },
            ],
            steps: [
              { reasoning: "Factor 1.", marks: 1, markCode: "A" },
              { reasoning: "Factor 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Temperature; amount of water'",
            commonErrors: ["Biotic chosen."],
          },
        },
        {
          id: "edps4-u1-ha-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why different animals live in different parts of a garden.",
          parts: [
            { label: "a", prompt: "Different needs", marks: 1 },
            { label: "b", prompt: "Microhabitats", marks: 1 },
            { label: "c", prompt: "Factors", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Habitat variety",
                statement: "Different microhabitats suit different animals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Needs differ.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Microhabitats noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Factors linked.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Different animals need different conditions — pond for frogs, soil for worms, trees for birds — creating microhabitats",
            commonErrors: ["No habitat reasoning."],
          },
        },
      ],
    },
  ],
};
