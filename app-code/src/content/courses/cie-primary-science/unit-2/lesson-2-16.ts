import type { Lesson } from "../../../types.ts";

export const lesson216: Lesson = {
  id: "cips-u2-lesson-2-16",
  code: "2-16",
  title: "Stage 2 — Teeth, Habitats and Simple Circuits",
  goal: "I CAN describe teeth types, compare habitats and build a simple circuit.",
  standards: ["Cambridge Primary Science 0097 Stage 2: humans, environments and electricity",
  "Cambridge Primary Science 0097 framework substrands: 2Bs, 2Be, 2Pe, 2SIC"],
  stage: 2,
  vocabulary: [
    { term: "Incisors", definition: "Front teeth for biting and cutting." },
    { term: "Molars", definition: "Back teeth for grinding food." },
    { term: "Habitat", definition: "Natural home of an organism." },
    { term: "Circuit", definition: "Closed loop of wire, cell and bulb that lets electricity flow." },
    { term: "Switch", definition: "Device that opens or closes a circuit." },
  ],
  concepts: [
    {
      id: "cips-u2-s16-teeth-habitat",
      title: "Teeth, habitats and simple circuits",
      skill: "Identify tooth types and functions, compare habitats and construct simple circuits at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Teeth and habitats",
            body: "Humans have different teeth for different jobs: incisors at the front cut and bite, canines are pointed for tearing, molars at the back grind food. Different habitats — pond, forest, desert, garden — contain different plants and animals suited to those conditions.",
          },
          {
            heading: "Simple circuits",
            body: "A circuit needs a cell (power source), wires (conductors), and a bulb or buzzer. The loop must be complete for electricity to flow — a break means no current. Connect cell → wire → bulb → wire → back to cell. A switch opens (breaks) or closes (completes) the circuit.",
          },
        ],
        keyFormulas: [
          { name: "Teeth", statement: "incisors cut, canines tear, molars grind" },
          { name: "Circuit", statement: "cell + wires + bulb, loop must be closed" },
        ],
        workedExample: {
          problem: "Why doesn't a bulb light when one wire is disconnected?",
          solution: "The circuit is broken — electricity can't flow in an open loop.",
        },
      },
      questions: [
        {
          id: "cips-u2-th-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which teeth are at the back and grind food?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Incisors" }, { id: "b", text: "Canines" }, { id: "c", text: "Molars" }, { id: "d", text: "Wisdom teeth only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Molars", statement: "Back teeth for grinding." }],
            steps: [{ reasoning: "Molars grind food at the back.", marks: 1, markCode: "A" }],
            finalAnswer: "Molars",
          },
        },
        {
          id: "cips-u2-th-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What three parts does a simple circuit need?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit components", statement: "Cell, wires, bulb." }],
            steps: [
              { reasoning: "Cell (power) + wires + bulb/buzzer.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cell, wires and bulb",
          },
        },
        {
          id: "cips-u2-th-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do different habitats have different animals?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Habitats", statement: "Animals suited to local conditions." }],
            steps: [
              { reasoning: "Each habitat has different conditions (water, food, shelter).", marks: 1, markCode: "M" },
              { reasoning: "Animals adapted to those conditions live there.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Animals are suited to their habitat's conditions",
          },
        },
        {
          id: "cips-u2-th-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Draw/describe a circuit with a cell, two wires and a bulb — label each part. (b) Explain what happens when you add a second cell. (c) Compare a pond habitat and a desert habitat — name one animal suited to each and why. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circuits and habitats", statement: "Circuit construction + habitat comparison." }],
            steps: [
              { reasoning: "(a) Cell → wire → bulb → wire → cell loop described.", marks: 1, markCode: "M" },
              { reasoning: "(b) Bulb brighter — more energy/power.", marks: 1, markCode: "M" },
              { reasoning: "(c) Pond: frog/toad (needs water); desert: camel (stores water).", marks: 1, markCode: "M" },
              { reasoning: "Adaptations matched to conditions.", marks: 1, markCode: "M" },
              { reasoning: "Circuit loop correctly described.", marks: 1, markCode: "M" },
              { reasoning: "Two cells = more power explained.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cell-wire-bulb-wire loop (b) brighter (c) frog in pond, camel in desert",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-th-notes",
      title: "Teeth, habitats, circuits — notes",
      summary: "Incisors cut/canines tear/molars grind; circuit = closed loop; habitats suit local animals.",
      sections: [
        { heading: "Body/habitats", body: "Different teeth for different jobs; habitats match animal needs." },
        { heading: "Circuits", body: "Cell + wires + bulb; break = no current; switch opens/closes." },
      ],
    },
  ],
};
