import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "edps3-u3-lesson-3-1",
  code: "3-1",
  title: "Materials and Changes",
  goal: "I CAN describe states of matter and reversible/irreversible changes.",
  standards: ["Year 3 Science: Materials"],
  vocabulary: [
    {
      term: "Solid/liquid/gas",
      definition: "Fixed shape / fixed volume / no fixed shape.",
    },
    { term: "Melting/freezing", definition: "Solid→liquid / liquid→solid." },
    {
      term: "Evaporation/condensation",
      definition: "Liquid→gas / gas→liquid.",
    },
    {
      term: "Reversible/irreversible",
      definition: "Can be undone / cannot be undone.",
    },
  ],
  concepts: [
    {
      id: "edps3-u3-states",
      title: "States of matter",
      skill: "Describe the three states and changes between them.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "**Solids**: fixed shape and volume. **Liquids**: fixed volume, takes container shape. **Gases**: no fixed shape or volume, fills container. Heating/cooling changes states.",
          },
          {
            heading: "State changes",
            body: "Melting (solid→liquid), freezing (liquid→solid), evaporation (liquid→gas), condensation (gas→liquid), sublimation (solid→gas directly — dry ice).",
          },
        ],
        keyFormulas: [
          { name: "Solid", statement: "Fixed shape + volume" },
          { name: "Liquid", statement: "Fixed volume only" },
          { name: "Gas", statement: "No fixed shape/volume" },
        ],
        workedExample: {
          problem: "What happens when ice warms up?",
          solution: "It melts — solid to liquid.",
        },
      },
      questions: [
        {
          id: "edps3-u3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state has no fixed shape or volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas" },
              { id: "b", text: "Liquid" },
              { id: "c", text: "Solid" },
              { id: "d", text: "All have fixed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gas",
                statement: "No fixed shape/volume.",
              },
            ],
            steps: [{ reasoning: "Gas properties.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Gas",
            commonErrors: ["Wrong state."],
          },
        },
        {
          id: "edps3-u3-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the change from liquid to gas called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freezing" },
              { id: "b", text: "Melting" },
              { id: "c", text: "Evaporation" },
              { id: "d", text: "Condensation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaporation",
                statement: "Liquid→gas.",
              },
            ],
            steps: [
              { reasoning: "Identify change.", marks: 1, markCode: "M" },
              { reasoning: "Answer: evaporation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Evaporation",
            commonErrors: ["Wrong term."],
          },
        },
        {
          id: "edps3-u3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the change: gas → liquid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation",
                statement: "Gas→liquid.",
              },
            ],
            steps: [
              { reasoning: "Term identified.", marks: 1, markCode: "A" },
              { reasoning: "Direction correct.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Condensation",
            commonErrors: ["Wrong term."],
          },
        },
        {
          id: "edps3-u3-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the water cycle using state changes.",
          parts: [
            { label: "a", prompt: "Evaporation", marks: 1 },
            { label: "b", prompt: "Condensation", marks: 1 },
            { label: "c", prompt: "Precipitation", marks: 1 },
            { label: "d", prompt: "Full cycle", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water cycle",
                statement: "Evaporate→condense→precipitate→collect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Evaporation described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Condensation described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Precipitation described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Cycle coherent.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Water evaporates → condenses into clouds → precipitates as rain → collects back in oceans",
            commonErrors: ["Missing stage."],
          },
        },
      ],
    },
    {
      id: "edps3-u3-changes",
      title: "Reversible and irreversible changes",
      skill: "Distinguish reversible and irreversible material changes.",
      lesson: {
        sections: [
          {
            heading: "Reversible",
            body: "Changes that can be **undone**: melting ice (refreeze), dissolving sugar in water (evaporate to get sugar back), bending wire (unbend). The material stays the same substance.",
          },
          {
            heading: "Irreversible",
            body: "Changes that **cannot** be undone: burning wood (→ ash), cooking egg (protein changes), rusting iron (new substance), baking cake. A **new substance** forms.",
          },
        ],
        keyFormulas: [
          { name: "Reversible", statement: "Can be undone; same substance" },
          { name: "Irreversible", statement: "New substance forms" },
          { name: "Burning/rusting/cooking", statement: "Irreversible" },
        ],
        workedExample: {
          problem: "Is dissolving salt in water reversible?",
          solution: "Yes — evaporate the water to recover the salt.",
        },
      },
      questions: [
        {
          id: "edps3-u3-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change is irreversible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting ice" },
              { id: "b", text: "Dissolving sugar" },
              { id: "c", text: "Bending wire" },
              { id: "d", text: "Burning wood" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Irreversible",
                statement: "Burning = new substance.",
              },
            ],
            steps: [
              { reasoning: "Identify irreversible.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Burning wood",
            commonErrors: ["Choosing reversible."],
          },
        },
        {
          id: "edps3-u3-ch-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is cooking an egg reversible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No, new substance forms" },
              { id: "b", text: "Yes, add water" },
              { id: "c", text: "Depends" },
              { id: "d", text: "Yes, cool it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cooking",
                statement: "Irreversible — protein changes.",
              },
            ],
            steps: [
              { reasoning: "Recall rule.", marks: 1, markCode: "M" },
              { reasoning: "Answer: irreversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** No, new substance forms",
            commonErrors: ["Thinking reversible."],
          },
        },
        {
          id: "edps3-u3-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify as reversible or irreversible: melting wax, rusting nail, freezing water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classification",
                statement: "Melting/freezing reversible; rusting irreversible.",
              },
            ],
            steps: [
              {
                reasoning: "Melting/freezing correct.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Rusting correct.", marks: 1, markCode: "A" },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Melting wax: reversible; rusting nail: irreversible; freezing water: reversible",
            commonErrors: ["Rusting misclassified."],
          },
        },
        {
          id: "edps3-u3-ch-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why burning is irreversible but melting is reversible.",
          parts: [
            { label: "a", prompt: "Melting explanation", marks: 1 },
            { label: "b", prompt: "Burning explanation", marks: 1 },
            { label: "c", prompt: "New substance", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reversibility",
                statement: "Same substance vs new substance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Melting same substance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Burning new substance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "New substance identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Melting keeps same substance (ice→water→ice); burning creates new substances (wood→ash+gas) that can't be undone",
            commonErrors: ["No substance link."],
          },
        },
      ],
    },
  ],
};
