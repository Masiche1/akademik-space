import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "edps2-u2-lesson-2-3",
  code: "2-3",
  title: "States of Matter and Mixing",
  goal: "I CAN describe solids, liquids and gases and what happens when they mix.",
  standards: ["Year 2 Science: Materials"],
  vocabulary: [
    { term: "Solid", definition: "Keeps its own shape: rock, wood, ice." },
    {
      term: "Liquid",
      definition: "Flows and takes container shape: water, juice.",
    },
    { term: "Gas", definition: "Spreads to fill space: air, steam." },
    {
      term: "Dissolve",
      definition: "When a solid mixes into a liquid and disappears.",
    },
  ],
  concepts: [
    {
      id: "edps2-u2-states",
      title: "Solids, liquids and gases",
      skill: "Identify states of matter and their properties.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "**Solids**: keep their shape (rock, ice cube, book). **Liquids**: flow and take the shape of their container (water, milk, juice). **Gases**: spread out to fill any space (air, steam, oxygen).",
          },
          {
            heading: "Changing state",
            body: "Solids can melt into liquids (ice → water), liquids can evaporate into gases (water → steam), gases can condense back to liquid (steam → water droplets).",
          },
        ],
        keyFormulas: [
          { name: "Solid", statement: "Keeps shape" },
          { name: "Liquid", statement: "Flows, takes container shape" },
          { name: "Gas", statement: "Fills space" },
        ],
        workedExample: {
          problem: "What state is steam?",
          solution: "Gas — it spreads out to fill the space around it.",
        },
      },
      questions: [
        {
          id: "edps2-u2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rock" },
              { id: "b", text: "Water" },
              { id: "c", text: "Air" },
              { id: "d", text: "Ice cube" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquid",
                statement: "Flows, takes container shape.",
              },
            ],
            steps: [{ reasoning: "Water is liquid.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Water",
            commonErrors: ["Wrong state."],
          },
        },
        {
          id: "edps2-u2-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when ice melts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays solid" },
              { id: "b", text: "It becomes gas" },
              { id: "c", text: "It becomes liquid" },
              { id: "d", text: "It disappears" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "State change",
                statement: "Solid → liquid = melting.",
              },
            ],
            steps: [
              { reasoning: "Identify change.", marks: 1, markCode: "M" },
              { reasoning: "Answer: becomes liquid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It becomes liquid",
            commonErrors: ["Wrong state."],
          },
        },
        {
          id: "edps2-u2-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name one solid, one liquid and one gas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "States",
                statement: "e.g. ice/water/air.",
              },
            ],
            steps: [
              { reasoning: "Solid given.", marks: 1, markCode: "A" },
              { reasoning: "Liquid given.", marks: 1, markCode: "A" },
              { reasoning: "Gas given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'ice; water; air'",
            commonErrors: ["Wrong states."],
          },
        },
        {
          id: "edps2-u2-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what happens when you boil water: trace the state changes.",
          parts: [
            { label: "a", prompt: "Starting state", marks: 1 },
            { label: "b", prompt: "First change", marks: 1 },
            { label: "c", prompt: "Second change", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "State changes",
                statement: "liquid → gas (evaporation/boiling).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Liquid start.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Heating.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gas formed.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Water (liquid) is heated → becomes steam (gas) as it boils",
            commonErrors: ["Incomplete or wrong."],
          },
        },
      ],
    },
    {
      id: "edps2-u2-mix",
      title: "Mixing and dissolving",
      skill: "Describe what happens when materials are mixed.",
      lesson: {
        sections: [
          {
            heading: "Mixing",
            body: "When we mix materials, they can: **stay separate** (oil + water — they don't mix), **dissolve** (sugar in water — disappears), or **form a new substance** (flour + water = dough).",
          },
          {
            heading: "Dissolving",
            body: "Some solids dissolve in liquids: sugar, salt, powdered drink. The solid seems to disappear but is still there — you can taste it. Stirring and warm water help things dissolve faster.",
          },
        ],
        keyFormulas: [
          { name: "Separate", statement: "Oil + water don't mix" },
          { name: "Dissolve", statement: "Solid disappears into liquid" },
          { name: "New substance", statement: "Flour + water = dough" },
        ],
        workedExample: {
          problem: "Does sugar disappear when dissolved in water?",
          solution:
            "It dissolves — still present but spread through the water (you can taste it).",
        },
      },
      questions: [
        {
          id: "edps2-u2-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when sugar is stirred into water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays as crystals" },
              { id: "b", text: "It burns" },
              { id: "c", text: "It floats" },
              { id: "d", text: "It dissolves" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dissolve",
                statement: "Sugar dissolves in water.",
              },
            ],
            steps: [{ reasoning: "Sugar dissolves.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** It dissolves",
            commonErrors: ["Wrong result."],
          },
        },
        {
          id: "edps2-u2-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which two liquids don't mix?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two juices" },
              { id: "b", text: "Milk and water" },
              { id: "c", text: "Water and juice" },
              { id: "d", text: "Oil and water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixing",
                statement: "Oil and water separate.",
              },
            ],
            steps: [
              { reasoning: "Identify non-mixing.", marks: 1, markCode: "M" },
              { reasoning: "Answer: oil + water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Oil and water",
            commonErrors: ["Wrong pair."],
          },
        },
        {
          id: "edps2-u2-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is dissolved sugar still in the water? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dissolving",
                statement: "Yes — spread through water, can taste it.",
              },
            ],
            steps: [
              { reasoning: "Answer: yes.", marks: 1, markCode: "A" },
              { reasoning: "Evidence: taste/spread.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Yes — it's dissolved, spread throughout the water (you can still taste it)",
            commonErrors: ["Thinking it's gone."],
          },
        },
        {
          id: "edps2-u2-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test: does warm or cold water dissolve sugar faster?",
          parts: [
            { label: "a", prompt: "What you keep the same", marks: 1 },
            { label: "b", prompt: "What you change", marks: 1 },
            { label: "c", prompt: "What you measure", marks: 1 },
            { label: "d", prompt: "Prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fair test",
                statement:
                  "Same sugar/water amount; change temperature; measure time.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Controls identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Variable changed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Measurement described.",
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
              "Keep same sugar/water; change temperature; measure dissolving time; predict warm faster",
            commonErrors: ["Unfair test or no prediction."],
          },
        },
      ],
    },
  ],
};
