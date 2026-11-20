import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "cips-u2-lesson-2-4",
  code: "2-4",
  title: "Stage 6 — Light, Sound and Electricity",
  goal: "I CAN explain how light, sound and electricity work and stay safe.",
  standards: ["Cambridge Primary Science 0097 Stage 6: light, sound and electricity",
  "Cambridge Primary Science 0097 framework substrands: 6Ps, 6Pe"],
  stage: 6,
  vocabulary: [
    { term: "Light source", definition: "Something that makes its own light, like the sun." },
    { term: "Sound wave", definition: "Vibration that travels through air to our ears." },
    { term: "Circuit", definition: "Complete path for electricity to flow." },
    { term: "Conductor", definition: "Material that lets electricity pass, like metal." },
    { term: "Insulator", definition: "Material that blocks electricity, like rubber." },
  ],
  concepts: [
    {
      id: "cips-u2-s4-lse",
      title: "Light, sound and electricity at Stage 6",
      skill: "Explain light sources, sound production and simple circuits; apply safety rules.",
      lesson: {
        sections: [
          {
            heading: "Light and sound",
            body: "Light sources make their own light (sun, fire, torch); other objects reflect light. Sound is made by vibrations — tighter/faster vibrations give higher pitch. Shadows form when light is blocked.",
          },
          {
            heading: "Electricity and safety",
            body: "A circuit needs a power source, wires and a component in a complete loop. Conductors (metals) carry current; insulators (plastic, rubber) do not. Safety: never touch sockets or damaged cords, keep liquids away from plugs.",
          },
        ],
        keyFormulas: [
          { name: "Circuit", statement: "Complete loop needed for current" },
          { name: "Conductor/insulator", statement: "Metal conducts; plastic/rubber insulate" },
        ],
        workedExample: {
          problem: "Why does a torch go off when a wire is disconnected?",
          solution: "The circuit is broken — current cannot flow, so the bulb cannot light.",
        },
      },
      questions: [
        {
          id: "cips-u2-ls-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a light source?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The Moon" }, { id: "b", text: "A mirror" }, { id: "c", text: "The Sun" }, { id: "d", text: "A white wall" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light source", statement: "Makes its own light." }],
            steps: [{ reasoning: "The Sun makes its own light; others only reflect it.", marks: 1, markCode: "A" }],
            finalAnswer: "The Sun",
          },
        },
        {
          id: "cips-u2-ls-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is needed for electricity to flow in a circuit?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Complete loop required." }],
            steps: [
              { reasoning: "A complete path: power source, wires, component, back to source.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A complete circuit",
          },
        },
        {
          id: "cips-u2-ls-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify each as conductor or insulator: copper wire, rubber coating, steel spoon, plastic ruler.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conductor/insulator", statement: "Metals conduct; non-metals insulate." }],
            steps: [
              { reasoning: "Conductors: copper wire, steel spoon.", marks: 1, markCode: "M" },
              { reasoning: "Insulators: rubber coating, plastic ruler.", marks: 1, markCode: "M" },
              { reasoning: "All four classified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cu/steel conduct; rubber/plastic insulate",
          },
        },
        {
          id: "cips-u2-ls-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why you should never touch a socket or put fingers near a plug, using what you know about conductors and the body.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Electrical safety", statement: "Body conducts; mains voltage dangerous." }],
            steps: [
              { reasoning: "The human body contains water and salts — it conducts electricity.", marks: 1, markCode: "M" },
              { reasoning: "Mains electricity is at dangerous voltage.", marks: 1, markCode: "M" },
              { reasoning: "Touching live parts can cause severe shock or burns.", marks: 1, markCode: "M" },
              { reasoning: "Safety rule stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Body conducts; mains voltage is dangerous",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-ls-notes",
      title: "Light, sound and electricity — revision notes",
      summary: "Sources vs reflectors; vibrations; complete circuits; conductors.",
      sections: [
        { heading: "Light/sound", body: "Sources make own light; sound = vibrations (faster = higher pitch)." },
        { heading: "Electricity", body: "Need complete circuit. Metals conduct; plastic/rubber insulate. Never touch mains — body conducts." },
      ],
    },
  ],
};
