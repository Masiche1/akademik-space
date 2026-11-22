import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "edps4-u3-lesson-3-2",
  code: "3-2",
  title: "Electricity: Circuits",
  goal: "I CAN build simple circuits and identify conductors and insulators.",
  standards: ["Year 4 Science: Electricity"],
  vocabulary: [
    { term: "Circuit", definition: "Complete path for electricity." },
    { term: "Conductor", definition: "Material allowing electricity to flow." },
    { term: "Insulator", definition: "Material blocking electricity." },
    { term: "Switch", definition: "Controls whether circuit is complete." },
  ],
  concepts: [
    {
      id: "edps4-u3-circuit",
      title: "Simple circuits",
      skill: "Build and describe simple series circuits.",
      lesson: {
        sections: [
          {
            heading: "Complete circuit",
            body: "A **circuit** needs a power source (battery), wires, and a component (bulb/buzzer) all connected in a complete loop. Electricity flows from positive to negative terminal. If the loop is broken (switch open, wire cut), no current flows.",
          },
          {
            heading: "Series circuits",
            body: "In a **series circuit**, components are in one path — if one bulb breaks, all go out. Adding more bulbs makes each dimmer (current shared). A **switch** opens/closes the circuit.",
          },
        ],
        keyFormulas: [
          { name: "Complete circuit", statement: "Loop must be unbroken" },
          { name: "Conductor", statement: "Allows current" },
          { name: "Insulator", statement: "Blocks current" },
        ],
        workedExample: {
          problem: "Why does a bulb go out when you unscrew it?",
          solution: "Unscrewing breaks the circuit — current can't flow.",
        },
      },
      questions: [
        {
          id: "edps4-u3-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is needed for a circuit to work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only wires" },
              { id: "b", text: "A complete loop with power source" },
              { id: "c", text: "Only a bulb" },
              { id: "d", text: "Only a battery" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Complete circuit",
                statement: "Loop must be unbroken.",
              },
            ],
            steps: [
              { reasoning: "Complete loop needed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A complete loop with power source",
            commonErrors: ["Incomplete circuit."],
          },
        },
        {
          id: "edps4-u3-ci-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which material is a conductor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rubber" },
              { id: "b", text: "Copper" },
              { id: "c", text: "Wood" },
              { id: "d", text: "Plastic" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conductors",
                statement: "Metals conduct.",
              },
            ],
            steps: [
              { reasoning: "Identify conductor.", marks: 1, markCode: "M" },
              { reasoning: "Answer: copper.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Copper",
            commonErrors: ["Insulator chosen."],
          },
        },
        {
          id: "edps4-u3-ci-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does a bulb go out when you open a switch?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Switch",
                statement: "Breaks circuit = no current.",
              },
            ],
            steps: [
              { reasoning: "Switch function.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Opening switch breaks the complete circuit so electricity can't flow to the bulb",
            commonErrors: ["No circuit link."],
          },
        },
        {
          id: "edps4-u3-ci-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a series circuit with 2 bulbs, both go dim when you add a third. Explain why.",
          parts: [
            { label: "a", prompt: "Series circuit", marks: 1 },
            { label: "b", prompt: "Current sharing", marks: 1 },
            { label: "c", prompt: "Brightness effect", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Series circuits",
                statement: "Current shared = dimmer bulbs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Series identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Current shared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Dimming explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "In series, current passes through all bulbs; adding one means less current per bulb so all dim",
            commonErrors: ["No current sharing."],
          },
        },
      ],
    },
    {
      id: "edps4-u3-conduct",
      title: "Conductors and insulators",
      skill: "Identify conducting and insulating materials and their uses.",
      lesson: {
        sections: [
          {
            heading: "Conductors",
            body: "**Conductors** allow electricity to flow: metals (copper, aluminium, iron), graphite, wet materials, humans (body conducts!). Used for wires, contacts, circuit components.",
          },
          {
            heading: "Insulators",
            body: "**Insulators** block electricity: plastic, rubber, glass, wood, dry air. Used for wire coating, handles, plugs — keeping us safe from shocks.",
          },
        ],
        keyFormulas: [
          { name: "Conductor", statement: "Allows current — metals" },
          { name: "Insulator", statement: "Blocks current — plastic/rubber" },
          { name: "Safety", statement: "Insulation prevents shocks" },
        ],
        workedExample: {
          problem: "Why are plug pins metal but the casing plastic?",
          solution:
            "Metal pins conduct electricity; plastic casing insulates to prevent shock.",
        },
      },
      questions: [
        {
          id: "edps4-u3-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an insulator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic" },
              { id: "b", text: "Iron" },
              { id: "c", text: "Aluminium" },
              { id: "d", text: "Copper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insulators",
                statement: "Plastic blocks current.",
              },
            ],
            steps: [
              { reasoning: "Identify insulator.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Plastic",
            commonErrors: ["Conductor chosen."],
          },
        },
        {
          id: "edps4-u3-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are electrical wires covered in plastic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic insulates to prevent shocks" },
              { id: "b", text: "To look nice" },
              { id: "c", text: "To conduct better" },
              { id: "d", text: "To make them heavier" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Insulation",
                statement: "Plastic prevents shocks.",
              },
            ],
            steps: [
              { reasoning: "Identify purpose.", marks: 1, markCode: "M" },
              { reasoning: "Answer: insulates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Plastic insulates to prevent shocks",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edps4-u3-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify as conductor or insulator: copper, rubber, aluminium, glass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conductors/insulators",
                statement: "Metals conduct; rubber/glass insulate.",
              },
            ],
            steps: [
              { reasoning: "Metals correct.", marks: 1, markCode: "A" },
              { reasoning: "Non-metals correct.", marks: 1, markCode: "A" },
              { reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Conductor: copper, aluminium; insulator: rubber, glass",
            commonErrors: ["Misclassified."],
          },
        },
        {
          id: "edps4-u3-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why you should never touch a socket or bare wire.",
          parts: [
            { label: "a", prompt: "Body conducts", marks: 1 },
            { label: "b", prompt: "Current through body", marks: 1 },
            { label: "c", prompt: "Danger", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electrical safety",
                statement: "Body conducts = shock risk.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Body conducts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Current path.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Danger explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Human body conducts electricity; touching live wires lets current flow through body causing burns/shock",
            commonErrors: ["No body conductivity."],
          },
        },
      ],
    },
  ],
};
