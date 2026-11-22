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
            { id: "a", text: "A mirror" },
            { id: "b", text: "The Moon" },
            { id: "c", text: "The Sun" },
            { id: "d", text: "A white wall" },
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
        {
          id: "cips-u2-ls-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these only REFLECTS light and is not a light source?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A mirror" },
            { id: "b", text: "A candle" },
            { id: "c", text: "A fire" },
            { id: "d", text: "A torch" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light source", statement: "Makes own light vs reflects." }],
            steps: [{ reasoning: "A mirror reflects light; it does not make its own.", marks: 1, markCode: "A" }],
            finalAnswer: "A mirror",
          },
        },
        {
          id: "cips-u2-ls-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound is made by what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Magnets" },
            { id: "b", text: "Vibrations" },
            { id: "c", text: "Light" },
            { id: "d", text: "Heat only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sound wave", statement: "Vibration travels to our ears." }],
            steps: [{ reasoning: "Sound is made by vibrations.", marks: 1, markCode: "A" }],
            finalAnswer: "Vibrations",
          },
        },
        {
          id: "cips-u2-ls-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many parts does a complete circuit need: power source, wires, component?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "parts" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Complete loop required." }],
            steps: [{ reasoning: "Three parts: power source, wires, component.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-ls-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 6 materials in a circuit. 4 let the bulb light (conductors) and 2 do not. What is the total number of insulators found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing circuits", statement: "No current = insulator." }],
            steps: [
              { reasoning: "2 materials did not light the bulb.", marks: 1, markCode: "M" },
              { reasoning: "They are insulators → 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-ls-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A torch bulb goes out when one wire is disconnected. Why?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The circuit is incomplete" },
            { id: "b", text: "The bulb is broken" },
            { id: "c", text: "The battery is empty always" },
            { id: "d", text: "Light cannot travel" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Current needs a complete loop." }],
            steps: [{ reasoning: "Disconnecting breaks the loop — current stops.", marks: 1, markCode: "A" }],
            finalAnswer: "The circuit is incomplete",
          },
        },
        {
          id: "cips-u2-ls-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two safety rules for using electricity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Electrical safety", statement: "Never touch sockets; keep liquids away." }],
            steps: [
              { reasoning: "First rule (e.g. never touch sockets/damaged cords).", marks: 1, markCode: "M" },
              { reasoning: "Second rule (e.g. keep liquids away from plugs).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. don't touch sockets; keep liquids away",
          },
        },
        {
          id: "cips-u2-ls-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens to a shadow when you move your hand closer to a light source, using how light travels.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Shadow", statement: "Light blocked → dark area." }],
            steps: [
              { reasoning: "Light travels in straight lines.", marks: 1, markCode: "M" },
              { reasoning: "Closer to the source, the hand blocks a wider spread of light.", marks: 1, markCode: "M" },
              { reasoning: "So the shadow gets larger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shadow gets bigger when hand is closer to light",
          },
        },
        {
          id: "cips-u2-ls-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which gives a HIGHER pitch sound: fast vibrations or slow vibrations?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slow vibrations" },
            { id: "b", text: "Both the same" },
            { id: "c", text: "No vibrations" },
            { id: "d", text: "Fast vibrations" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pitch", statement: "Faster vibrations = higher pitch." }],
            steps: [{ reasoning: "Faster/tighter vibrations give higher pitch.", marks: 1, markCode: "A" }],
            finalAnswer: "Fast vibrations",
          },
        },
        {
          id: "cips-u2-ls-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a test, 5 objects are tried in a circuit: 3 make the bulb light and 2 do not. How many objects are insulators?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "objects" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Conductors/insulators", statement: "No current = insulator." }],
            steps: [
              { reasoning: "2 objects did not light the bulb.", marks: 1, markCode: "M" },
              { reasoning: "They are insulators → 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-ls-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a metal spoon feels colder than a wooden spoon in the same room, even though they are at the same temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conductors", statement: "Metal conducts heat away faster." }],
            steps: [
              { reasoning: "Both spoons are at the same temperature as the room.", marks: 1, markCode: "M" },
              { reasoning: "Metal conducts heat well — it draws heat from your hand quickly.", marks: 1, markCode: "M" },
              { reasoning: "Wood conducts poorly so it feels warmer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metal conducts heat from hand faster → feels colder",
          },
        },
        {
          id: "cips-u2-ls-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT needed for a complete circuit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wires" },
            { id: "b", text: "A power source" },
            { id: "c", text: "A component" },
            { id: "d", text: "A magnet" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Needs source, wires, component loop." }],
            steps: [{ reasoning: "A magnet is not needed for a basic circuit.", marks: 1, markCode: "A" }],
            finalAnswer: "A magnet",
          },
        },
        {
          id: "cips-u2-ls-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define light source and give two examples plus one non-source. (b) How is sound made? (c) What happens to pitch when vibrations speed up? (d) What is needed for a complete circuit? (e) Define conductor and insulator with one example each. (f) Why does a torch go out when a wire is disconnected? (g) Why must you never touch a socket? (h) Describe how to test if a material is a conductor.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Light, sound, electricity", statement: "Integrated Stage 6 answer." }],
            steps: [
              { reasoning: "(a) Makes own light; sun/candle; mirror (reflects).", marks: 1, markCode: "M" },
              { reasoning: "(b) Vibration travelling through air to ears.", marks: 1, markCode: "M" },
              { reasoning: "(c) Pitch gets higher.", marks: 1, markCode: "M" },
              { reasoning: "(d) Complete loop: power source, wires, component.", marks: 1, markCode: "M" },
              { reasoning: "(e) Conductor lets current pass (metal); insulator blocks (rubber/plastic).", marks: 1, markCode: "M" },
              { reasoning: "(f) Circuit breaks — current cannot flow.", marks: 1, markCode: "M" },
              { reasoning: "(g) Body conducts; mains voltage dangerous.", marks: 1, markCode: "M" },
              { reasoning: "(h) Put it in a circuit — if bulb lights it conducts; if not, it insulates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light sources, sound/vibration/pitch, circuit parts, conductor/insulator, broken circuit, socket danger, conductor test.",
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
