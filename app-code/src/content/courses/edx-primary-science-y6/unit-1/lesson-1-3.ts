import type { Lesson } from "../../../types.ts";

export const lesson163: Lesson = {
  id: "edps6-u1-lesson-1-3",
  code: "1-3",
  title: "Habitats, Adaptation and Survival",
  goal: "I CAN describe habitats, microhabitats and survival strategies.",
  standards: ["Year 6 Science: Habitats and survival"],
  vocabulary: [
    { term: "Habitat", definition: "Place where organism lives." },
    { term: "Niche", definition: "Organism's role in ecosystem." },
    { term: "Microhabitat", definition: "Small specific habitat." },
    { term: "Competition", definition: "Rivalry for resources." },
  ],
  concepts: [
    {
      id: "edps6-u1-habitat",
      title: "Habitats and niches",
      skill: "Describe habitats, microhabitats and ecological niches.",
      lesson: {
        sections: [
          {
            heading: "Habitat needs",
            body: "Every habitat must provide: **food**, **water**, **shelter**, **space**. Missing any → organisms can't survive. Different habitats suit different organisms.",
          },
          {
            heading: "Niches and competition",
            body: "**Niche** = organism's role (what it eats, where it lives, how it interacts). **Competition** for limited resources (food, space, mates) — only well-adapted survive. **Microhabitats** reduce competition by providing specific conditions.",
          },
        ],
        keyFormulas: [
          { name: "Habitat needs", statement: "Food, water, shelter, space" },
          { name: "Niche", statement: "Role in ecosystem" },
          { name: "Competition", statement: "For limited resources" },
        ],
        workedExample: {
          problem: "Why do woodlice live under logs?",
          solution: "Microhabitat — damp, dark, protected from predators.",
        },
      },
      questions: [
        {
          id: "edps6-u1-ha-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a habitat provide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only water" },
              { id: "b", text: "Food, water, shelter and space" },
              { id: "c", text: "Toys" },
              { id: "d", text: "Only food" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habitat",
                statement: "All survival needs.",
              },
            ],
            steps: [{ reasoning: "Habitat needs.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Food, water, shelter and space",
            commonErrors: ["Partial answer."],
          },
        },
        {
          id: "edps6-u1-ha-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an ecological niche?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An organism's role in ecosystem" },
              { id: "b", text: "A habitat" },
              { id: "c", text: "A predator" },
              { id: "d", text: "A food chain" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Niche",
                statement: "Role in ecosystem.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: role.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** An organism's role in ecosystem",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps6-u1-ha-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why competition occurs in ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Competition",
                statement: "Limited resources.",
              },
            ],
            steps: [
              { reasoning: "Resources limited.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Organisms compete for limited food, water, space and mates — only the best adapted survive",
            commonErrors: ["No resource link."],
          },
        },
        {
          id: "edps6-u1-ha-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Predict what happens if two species compete for the same niche.",
          parts: [
            { label: "a", prompt: "Competition described", marks: 1 },
            { label: "b", prompt: "Outcome 1", marks: 1 },
            { label: "c", prompt: "Outcome 2", marks: 1 },
            { label: "d", prompt: "Full prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Competition",
                statement: "One species may outcompete other.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Competition described.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Outcome 1.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Outcome 2.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Species compete for same resources; one may outcompete and dominate, other declines or goes extinct locally",
            commonErrors: ["No outcome."],
          },
        },
      ],
    },
    {
      id: "edps6-u1-survival",
      title: "Survival Strategies",
      skill:
        "Describe survival strategies: hibernation, migration, camouflage.",
      lesson: {
        sections: [
          {
            heading: "Survival strategies",
            body: "**Hibernation** (winter sleep — bears, hedgehogs), **migration** (seasonal movement — birds, whales), **camouflage** (blending — chameleon, stick insect), **mimicry** (copying harmful species — hoverfly mimics wasp), **playing dead** (opossum), **herd defence** (wildebeest).",
          },
          {
            heading: "Why they work",
            body: "Strategies reduce predation, conserve energy, find food, or reproduce successfully. Each is an adaptation to environmental pressures.",
          },
        ],
        keyFormulas: [
          { name: "Hibernation", statement: "Winter sleep" },
          { name: "Camouflage", statement: "Blend in" },
          { name: "Mimicry", statement: "Copy harmful species" },
        ],
        workedExample: {
          problem: "How does camouflage help survival?",
          solution:
            "Blending with environment makes animal harder for predators to spot.",
        },
      },
      questions: [
        {
          id: "edps6-u1-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is mimicry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sleeping" },
              { id: "b", text: "Copying a harmful species to avoid predators" },
              { id: "c", text: "Moving" },
              { id: "d", text: "Blending in" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mimicry",
                statement: "Copies harmful species.",
              },
            ],
            steps: [{ reasoning: "Mimicry defined.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Copying a harmful species to avoid predators",
            commonErrors: ["Confused with camouflage."],
          },
        },
        {
          id: "edps6-u1-su-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which animal hibernates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hedgehog" },
              { id: "b", text: "Eagle" },
              { id: "c", text: "Dolphin" },
              { id: "d", text: "Butterfly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hibernation",
                statement: "Hedgehogs hibernate.",
              },
            ],
            steps: [
              { reasoning: "Identify hibernator.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hedgehog.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Hedgehog",
            commonErrors: ["Wrong animal."],
          },
        },
        {
          id: "edps6-u1-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how camouflage helps an animal survive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Camouflage",
                statement: "Blending avoids detection.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Benefit explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Camouflage makes animal blend with environment so predators can't easily spot it",
            commonErrors: ["No predator link."],
          },
        },
        {
          id: "edps6-u1-su-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare hibernation and migration as survival strategies.",
          parts: [
            { label: "a", prompt: "Hibernation", marks: 1 },
            { label: "b", prompt: "Migration", marks: 1 },
            { label: "c", prompt: "Similarity", marks: 1 },
            { label: "d", prompt: "Key difference", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Survival strategies",
                statement: "Stay+sleep vs move+active.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hibernation described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Migration described.",
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
              "Both survive winter; hibernation stays in place sleeping, migration moves to warmer areas staying active",
            commonErrors: ["No comparison."],
          },
        },
      ],
    },
  ],
};
