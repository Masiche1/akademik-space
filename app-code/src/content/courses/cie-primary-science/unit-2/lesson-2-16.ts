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
            { id: "a", text: "Molars" },
            { id: "b", text: "Incisors" },
            { id: "c", text: "Wisdom teeth only" },
            { id: "d", text: "Canines" },
          ], aorrectChoiceId: "c" },
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
        {
          id: "cips-u2-th-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which teeth are at the front and used for biting and cutting?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Canines" },
            { id: "b", text: "Premolars" },
            { id: "c", text: "Incisors" },
            { id: "d", text: "Molars" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Incisors", statement: "Front teeth for cutting." }],
            steps: [{ reasoning: "Incisors at the front cut and bite.", marks: 1, markCode: "A" }],
            finalAnswer: "Incisors",
          },
        },
        {
          id: "cips-u2-th-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do pointed teeth called canines do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cut food only" },
            { id: "b", text: "Grind food" },
            { id: "c", text: "Tear food" },
            { id: "d", text: "Taste food" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Canines", statement: "Pointed teeth for tearing." }],
            steps: [{ reasoning: "Canines are pointed for tearing food.", marks: 1, markCode: "A" }],
            finalAnswer: "Tear food",
          },
        },
        {
          id: "cips-u2-th-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many parts does a simple circuit need: cell, wires, bulb?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "parts" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Cell + wires + bulb." }],
            steps: [{ reasoning: "Three parts needed.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-th-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You build 4 circuits: 3 light the bulb and 1 does not. How many circuits are complete?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "circuits" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Circuits", statement: "Bulb lights = complete loop." }],
            steps: [
              { reasoning: "3 circuits lit the bulb.", marks: 1, markCode: "M" },
              { reasoning: "They are complete → 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-th-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a switch do in a circuit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stops all electricity forever" },
            { id: "b", text: "Changes the colour of wires" },
            { id: "c", text: "Opens or closes the circuit" },
            { id: "d", text: "Makes the bulb bigger" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Switch", statement: "Opens/closes the circuit." }],
            steps: [{ reasoning: "A switch opens (breaks) or closes (completes) the circuit.", marks: 1, markCode: "A" }],
            finalAnswer: "Opens or closes the circuit",
          },
        },
        {
          id: "cips-u2-th-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two animals that live in a pond habitat and why they suit it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Habitat", statement: "Animals suited to conditions." }],
            steps: [
              { reasoning: "First pond animal (e.g. frog — needs water).", marks: 1, markCode: "M" },
              { reasoning: "Second (e.g. fish — gills for water breathing).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. frog and fish",
          },
        },
        {
          id: "cips-u2-th-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens in a circuit when you add a second cell.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circuits", statement: "More cells = more energy." }],
            steps: [
              { reasoning: "A second cell adds more energy/power.", marks: 1, markCode: "M" },
              { reasoning: "The bulb glows brighter because more current flows.", marks: 1, markCode: "M" },
              { reasoning: "The circuit must still be complete for this to work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bulb gets brighter — more power from two cells",
          },
        },
        {
          id: "cips-u2-th-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does a bulb NOT light when one wire is disconnected?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The circuit is broken/incomplete" },
            { id: "b", text: "Wires can't carry light" },
            { id: "c", text: "The cell is empty" },
            { id: "d", text: "The bulb is broken" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Needs complete loop." }],
            steps: [{ reasoning: "Disconnecting breaks the loop — no current flows.", marks: 1, markCode: "A" }],
            finalAnswer: "The circuit is broken",
          },
        },
        {
          id: "cips-u2-th-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A class builds 5 circuits. 4 work and 1 fails because of a break. How many circuits are working?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "circuits" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Circuits", statement: "Count working circuits." }],
            steps: [
              { reasoning: "4 circuits work.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u2-th-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why different habitats contain different animals, using the idea of adaptations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Habitats", statement: "Conditions suit certain animals." }],
            steps: [
              { reasoning: "Each habitat has different conditions — water, food, shelter.", marks: 1, markCode: "M" },
              { reasoning: "Animals have adaptations suited to those conditions.", marks: 1, markCode: "M" },
              { reasoning: "So pond animals suit ponds; desert animals suit deserts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Animals adapted to their habitat's conditions",
          },
        },
        {
          id: "cips-u2-th-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which tooth type is used for grinding food?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Canines" },
            { id: "b", text: "Molars" },
            { id: "c", text: "All teeth equally" },
            { id: "d", text: "Incisors" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Molars", statement: "Back teeth for grinding." }],
            steps: [{ reasoning: "Molars grind food.", marks: 1, markCode: "A" }],
            finalAnswer: "Molars",
          },
        },
        {
          id: "cips-u2-th-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the three tooth types and what each does. (b) What three parts does a circuit need? (c) Why must a circuit be complete? (d) What does a switch do? (e) What happens when you add a second cell? (f) Name two pond and two desert animals and why they suit their habitats. (g) Why do different habitats have different animals? (h) Describe how to build a working circuit.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Teeth, habitats, circuits", statement: "Integrated Stage 2 answer." }],
            steps: [
              { reasoning: "(a) Incisors cut, canines tear, molars grind.", marks: 1, markCode: "M" },
              { reasoning: "(b) Cell, wires, bulb.", marks: 1, markCode: "M" },
              { reasoning: "(c) Electricity needs a closed loop to flow.", marks: 1, markCode: "M" },
              { reasoning: "(d) Opens/closes the circuit.", marks: 1, markCode: "M" },
              { reasoning: "(e) Bulb brighter — more power.", marks: 1, markCode: "M" },
              { reasoning: "(f) e.g. frog/fish pond; camel/lizard desert.", marks: 1, markCode: "M" },
              { reasoning: "(g) Animals adapted to local conditions.", marks: 1, markCode: "M" },
              { reasoning: "(h) Connect cell → wire → bulb → wire → back to cell in closed loop.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Teeth jobs, circuit parts, completeness, switch, two cells, habitat animals, habitat differences, circuit building.",
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
