import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "edps4-u3-lesson-3-1",
  code: "3-1",
  title: "Grouping Materials and Uses",
  goal: "I CAN group materials by properties and explain their uses.",
  standards: ["Year 4 Science: Materials"],
  vocabulary: [
    {
      term: "Property",
      definition: "Characteristic like hardness, transparency, conductivity.",
    },
    { term: "Natural/synthetic", definition: "From nature / man-made." },
    {
      term: "Thermal conductor/insulator",
      definition: "Conducts heat well / poorly.",
    },
    { term: "Rusting", definition: "Iron reacting with oxygen and water." },
  ],
  concepts: [
    {
      id: "edps4-u3-properties",
      title: "Material properties and uses",
      skill: "Match material properties to suitable uses.",
      lesson: {
        sections: [
          {
            heading: "Key properties",
            body: "**Hardness** (diamond hardest), **flexibility** (rubber bends), **transparency** (glass lets light through), **conductivity** (metals conduct heat/electricity), **waterproofing** (plastic/rubber repel water), **magnetism** (iron/steel).",
          },
          {
            heading: "Matching uses",
            body: "Uses depend on properties: **glass** windows (transparent), **metal** pans (conducts heat), **rubber** tyres (flexible + grip), **wood** furniture (hard + strong), **plastic** bottles (light + waterproof).",
          },
        ],
        keyFormulas: [
          { name: "Hardness", statement: "Resistance to scratching" },
          { name: "Transparency", statement: "Light passes through" },
          { name: "Conductivity", statement: "Heat/electricity flows" },
        ],
        workedExample: {
          problem: "Why are saucepans made of metal with plastic handles?",
          solution:
            "Metal conducts heat to cook food; plastic insulates handle so it stays cool.",
        },
      },
      questions: [
        {
          id: "edps4-u3-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is transparent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wood" },
              { id: "b", text: "Metal" },
              { id: "c", text: "Rubber" },
              { id: "d", text: "Glass" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transparency",
                statement: "Glass is transparent.",
              },
            ],
            steps: [
              { reasoning: "Identify transparent.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Glass",
            commonErrors: ["Opaque material chosen."],
          },
        },
        {
          id: "edps4-u3-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are electrical wires made of metal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're cheap" },
              { id: "b", text: "They're strong" },
              { id: "c", text: "They're flexible" },
              { id: "d", text: "Metal conducts electricity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conductivity",
                statement: "Metals conduct electricity.",
              },
            ],
            steps: [
              { reasoning: "Identify property.", marks: 1, markCode: "M" },
              { reasoning: "Answer: conducts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Metal conducts electricity",
            commonErrors: ["Wrong property."],
          },
        },
        {
          id: "edps4-u3-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one material and explain why it's used for a specific purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Property-use link",
                statement: "Property matched to function.",
              },
            ],
            steps: [
              { reasoning: "Material named.", marks: 1, markCode: "A" },
              { reasoning: "Use explained.", marks: 1, markCode: "A" },
              { reasoning: "Property linked.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Rubber for tyres because it's flexible and grips the road'",
            commonErrors: ["No property link."],
          },
        },
        {
          id: "edps4-u3-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A spoon gets too hot to hold when cooking. Explain and suggest a better design.",
          parts: [
            { label: "a", prompt: "Why it gets hot", marks: 1 },
            { label: "b", prompt: "Property involved", marks: 1 },
            { label: "c", prompt: "Better material", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thermal properties",
                statement: "Metal conducts heat; insulator prevents.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Heat transfer explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Conductivity named.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Insulator suggested.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Metal conducts heat from pan to handle; use wooden/plastic handle (insulator) to stay cool",
            commonErrors: ["No conductivity link."],
          },
        },
      ],
    },
    {
      id: "edps4-u3-rust",
      title: "Rusting and chemical changes",
      skill: "Understand rusting conditions and other irreversible changes.",
      lesson: {
        sections: [
          {
            heading: "Rusting",
            body: "**Rusting** = iron/steel reacting with **oxygen** and **water** to form iron oxide (rust). Needs all three: iron, oxygen, water. Prevented by painting, oiling, galvanising (zinc coating), or keeping dry.",
          },
          {
            heading: "Other chemical changes",
            body: "**Burning** (combustion → ash+CO₂), **cooking** (protein changes), **souring** (milk→yoghurt via bacteria), **metal + acid** (reaction). All create new substances irreversibly.",
          },
        ],
        keyFormulas: [
          { name: "Rusting", statement: "Iron+oxygen+water → rust" },
          { name: "Prevention", statement: "Paint/oil/galvanise/dry" },
          { name: "Chemical change", statement: "New substance" },
        ],
        workedExample: {
          problem: "Why does a bike left outside rust faster than indoors?",
          solution:
            "Outside has water (rain) + oxygen — both needed for rusting.",
        },
      },
      questions: [
        {
          id: "edps4-u3-ru-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does rusting need?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron + oxygen + water" },
              { id: "b", text: "Only oxygen" },
              { id: "c", text: "Only water" },
              { id: "d", text: "Heat only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rusting",
                statement: "Needs iron+O₂+water.",
              },
            ],
            steps: [
              { reasoning: "All three needed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Iron + oxygen + water",
            commonErrors: ["Missing condition."],
          },
        },
        {
          id: "edps4-u3-ru-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which prevents rusting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Painting the metal" },
              { id: "b", text: "Leaving metal wet" },
              { id: "c", text: "Exposing to air" },
              { id: "d", text: "Scratching it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rust prevention",
                statement: "Paint/oil blocks oxygen+water.",
              },
            ],
            steps: [
              { reasoning: "Identify prevention.", marks: 1, markCode: "M" },
              { reasoning: "Answer: painting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Painting the metal",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps4-u3-ru-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two ways to prevent iron from rusting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rust prevention",
                statement: "Paint, oil, galvanise, keep dry.",
              },
            ],
            steps: [
              { reasoning: "Method 1.", marks: 1, markCode: "A" },
              { reasoning: "Method 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Painting; oiling'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps4-u3-ru-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test to find out which condition rusts iron fastest: air, water, or both.",
          parts: [
            { label: "a", prompt: "What you keep same", marks: 1 },
            { label: "b", prompt: "What you change", marks: 1 },
            { label: "c", prompt: "What you measure", marks: 1 },
            { label: "d", prompt: "Prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fair test",
                statement: "Same iron type; vary exposure; measure rust.",
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
                reasoning: "Conditions varied.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Rust measured.",
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
              "Keep same iron nails; one in air only, one in water only, one in both; predict both = fastest rust",
            commonErrors: ["Unfair test."],
          },
        },
      ],
    },
  ],
};
