import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "edps3-u3-lesson-3-2",
  code: "3-2",
  title: "Forces and Magnets",
  goal: "I CAN describe forces and how magnets work.",
  standards: ["Year 3 Science: Forces and magnets"],
  vocabulary: [
    { term: "Magnet", definition: "Object attracting iron and steel." },
    { term: "Poles", definition: "Ends of a magnet — north and south." },
    { term: "Attract/repel", definition: "Pull together / push apart." },
    { term: "Friction", definition: "Force slowing rubbing surfaces." },
  ],
  concepts: [
    {
      id: "edps3-u3-magnets",
      title: "Magnets",
      skill: "Describe magnet properties and magnetic materials.",
      lesson: {
        sections: [
          {
            heading: "Magnet properties",
            body: "Magnets attract **iron, steel, nickel, cobalt** (magnetic materials) but not most other materials. Magnets have **two poles**: north and south. Like poles **repel** (push apart); unlike poles **attract** (pull together).",
          },
          {
            heading: "Uses",
            body: "Fridge magnets, compass (points north), magnetic fasteners, scrapyard cranes, MRI machines. Breaking a magnet gives two smaller magnets each with two poles.",
          },
        ],
        keyFormulas: [
          {
            name: "Magnetic materials",
            statement: "Iron, steel, nickel, cobalt",
          },
          { name: "Like poles", statement: "Repel" },
          { name: "Unlike poles", statement: "Attract" },
        ],
        workedExample: {
          problem: "Why does a compass point north?",
          solution:
            "Earth acts like a giant magnet; compass needle aligns with its magnetic field.",
        },
      },
      questions: [
        {
          id: "edps3-u3-ma-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is magnetic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Plastic" },
              { id: "c", text: "Glass" },
              { id: "d", text: "Wood" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnetic materials",
                statement: "Iron is magnetic.",
              },
            ],
            steps: [{ reasoning: "Iron magnetic.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Iron",
            commonErrors: ["Non-magnetic chosen."],
          },
        },
        {
          id: "edps3-u3-ma-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when two north poles face each other?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They repel" },
              { id: "b", text: "They stick" },
              { id: "c", text: "They attract" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poles",
                statement: "Like poles repel.",
              },
            ],
            steps: [
              { reasoning: "Recall rule.", marks: 1, markCode: "M" },
              { reasoning: "Answer: repel.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They repel",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edps3-u3-ma-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two uses of magnets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnet uses",
                statement: "Fridge, compass, cranes, fasteners.",
              },
            ],
            steps: [
              { reasoning: "Use 1.", marks: 1, markCode: "A" },
              { reasoning: "Use 2.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Fridge magnets; compass'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps3-u3-ma-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why breaking a magnet in half doesn't isolate a single pole.",
          parts: [
            { label: "a", prompt: "What happens when broken", marks: 1 },
            { label: "b", prompt: "Pole behaviour", marks: 1 },
            { label: "c", prompt: "Why", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnet poles",
                statement: "Each piece has N and S.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two magnets formed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Each has both poles.",
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
              "Each half becomes a smaller magnet with its own north and south pole — poles can't be separated",
            commonErrors: ["Single pole predicted."],
          },
        },
      ],
    },
    {
      id: "edps3-u3-forces",
      title: "Forces: gravity and friction",
      skill: "Describe gravity, friction and air resistance effects.",
      lesson: {
        sections: [
          {
            heading: "Gravity and friction",
            body: "**Gravity** pulls objects towards Earth. **Friction** opposes motion when surfaces rub — rougher surfaces = more friction. **Air resistance** slows objects through air; streamlined shapes reduce it.",
          },
          {
            heading: "Uses of forces",
            body: "Friction helps walking (grip), but engineers reduce it with oil/lubricants. Parachutes use air resistance to slow falls; cars are streamlined to reduce drag.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Pulls towards Earth" },
          { name: "Friction", statement: "Slows rubbing surfaces" },
          { name: "Air resistance", statement: "Slows through air" },
        ],
        workedExample: {
          problem: "Why do cars have rounded shapes?",
          solution: "Streamlined shape reduces air resistance, saving fuel.",
        },
      },
      questions: [
        {
          id: "edps3-u3-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does gravity do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stops motion" },
              { id: "b", text: "Pulls things towards Earth" },
              { id: "c", text: "Creates wind" },
              { id: "d", text: "Pushes things away" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gravity",
                statement: "Pulls towards Earth.",
              },
            ],
            steps: [
              { reasoning: "Gravity pulls down.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pulls things towards Earth",
            commonErrors: ["Wrong effect."],
          },
        },
        {
          id: "edps3-u3-fo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which surface has more friction: carpet or ice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both same" },
              { id: "b", text: "Ice" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Carpet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Friction",
                statement: "Rougher = more friction.",
              },
            ],
            steps: [
              { reasoning: "Compare surfaces.", marks: 1, markCode: "M" },
              { reasoning: "Answer: carpet.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Carpet",
            commonErrors: ["Wrong surface."],
          },
        },
        {
          id: "edps3-u3-fo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are race cars streamlined?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Streamlining",
                statement: "Reduces air resistance = faster.",
              },
            ],
            steps: [
              { reasoning: "Purpose identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Streamlined shape reduces air resistance, allowing higher speeds",
            commonErrors: ["No resistance link."],
          },
        },
        {
          id: "edps3-u3-fo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a parachute slows a fall using air resistance.",
          parts: [
            { label: "a", prompt: "Parachute shape", marks: 1 },
            { label: "b", prompt: "Air resistance role", marks: 1 },
            { label: "c", prompt: "Effect on descent", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Air resistance",
                statement: "Large canopy = lots of resistance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Shape described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Resistance explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Slowing effect.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Large canopy creates lots of air resistance that slows descent, making landing safe",
            commonErrors: ["No resistance explanation."],
          },
        },
      ],
    },
  ],
};
