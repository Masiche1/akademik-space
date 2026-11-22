import type { Lesson } from "../../../types.ts";

export const lesson222: Lesson = {
  id: "cips-u2-lesson-2-22",
  code: "2-22",
  title: "Stage 4 — Electricity: Circuits and Conductors",
  goal: "I CAN describe how circuits work, use switches, identify conductors and insulators, and explain electrical safety.",
  standards: ["Cambridge Primary Science 0097 Stage 4: electricity",
  "Cambridge Primary Science 0097 framework substrands: 4Pe"],
  stage: 4,
  vocabulary: [
    { term: "Circuit", definition: "A complete path that electricity flows around." },
    { term: "Cell", definition: "A battery that provides electrical energy." },
    { term: "Conductor", definition: "A material that lets electricity flow — metals." },
    { term: "Insulator", definition: "A material that blocks electricity — plastic, rubber, wood." },
    { term: "Switch", definition: "A device that opens or closes a circuit." },
    { term: "Series circuit", definition: "Components joined in one path; a break stops all current." },
  ],
  concepts: [
    {
      id: "cips-u2-s22-electricity",
      title: "Circuits, switches and conductors",
      skill: "Describe circuit components, test conductors and explain safety at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "How circuits work",
            body: "A circuit needs a complete loop: cell → wire → lamp → back to cell. A break anywhere (open switch, loose wire) stops the lamp. Adding cells or lamps changes brightness. A switch opens/closes the circuit. In a series circuit all components share one path — one break stops everything.",
          },
          {
            heading: "Conductors, insulators and safety",
            body: "Test materials by putting them in a circuit: if the lamp lights, it's a conductor. Metals conduct well; plastic, rubber, wood and glass insulate. Safety: never touch sockets or bare wires, keep electrical items away from water, tell an adult about damaged plugs.",
          },
        ],
        keyFormulas: [
          { name: "Circuit", statement: "complete loop needed; break = no current" },
          { name: "Conductor test", statement: "lamp lights → conductor" },
          { name: "Safety", statement: "dry hands, no bare wires, tell adults" },
        ],
        workedExample: {
          problem: "A lamp won't light in a circuit with a cell, two wires and a switch. List three things to check.",
          solution: "Check: switch is closed; wires touch terminals firmly; cell isn't flat. Any break in the loop stops current.",
        },
      },
      questions: [
        {
          id: "cips-u2-el-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a switch do in a circuit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Makes light brighter" },
            { id: "b", text: "Changes the wire colour" },
            { id: "c", text: "Opens or closes the circuit" },
            { id: "d", text: "Stores electricity" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Switch", statement: "Opens/closes circuit." }],
            steps: [{ reasoning: "Switch controls whether the loop is complete.", marks: 1, markCode: "M" }],
            finalAnswer: "Opens or closes the circuit",
          },
        },
        {
          id: "cips-u2-el-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two conductors and two insulators.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conductors/insulators", statement: "Let/block current." }],
            steps: [
              { reasoning: "Conductors: copper, steel (metals).", marks: 1, markCode: "M" },
              { reasoning: "Insulators: plastic, rubber, wood.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. copper/plastic, steel/rubber",
          },
        },
        {
          id: "cips-u2-el-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You test a pencil lead in a circuit — the lamp lights. Is pencil lead a conductor or insulator? Explain how you know. Then predict: will a rubber eraser conduct?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conductivity test", statement: "Lamp lights → conductor." }],
            steps: [
              { reasoning: "Lamp lit → pencil lead conducts electricity.", marks: 1, markCode: "M" },
              { reasoning: "Complete path allowed current to flow.", marks: 1, markCode: "M" },
              { reasoning: "Rubber eraser = insulator (won't light).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conductor; rubber won't conduct",
          },
        },
        {
          id: "cips-u2-el-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Draw/describe a simple circuit with a cell, switch, lamp and wires. (b) What happens to the lamp when the switch opens? Why? (c) Name two safety rules for using electricity. (d) You add a second lamp in series — what happens to both lamps? (e) Test three materials (paperclip, plastic ruler, wooden stick) — predict which conducts. (f) Why are electrical wires covered in plastic?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Electricity", statement: "Circuits, switches, safety, conductors." }],
            steps: [
              { reasoning: "(a) Complete loop cell→switch→lamp→cell described.", marks: 1, markCode: "M" },
              { reasoning: "(b) Lamp goes out — break stops current.", marks: 1, markCode: "M" },
              { reasoning: "(c) Two safety rules (dry hands, no bare wires/tell adult).", marks: 1, markCode: "M" },
              { reasoning: "(d) Both dim — shared current in series.", marks: 1, markCode: "M" },
              { reasoning: "(e) Paperclip conducts (metal); ruler and stick don't.", marks: 1, markCode: "M" },
              { reasoning: "(f) Plastic insulates — prevents shocks and shorts.", marks: 1, markCode: "M" },
              { reasoning: "Reasoning uses circuit concepts correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Circuit loop, switch breaks current, safety, series dims, metal conducts, plastic insulates.",
          },
        },
        {
          id: "cips-u2-el-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What must a circuit have to work?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A complete loop" },
            { id: "b", text: "Only wires" },
            { id: "c", text: "Only a bulb" },
            { id: "d", text: "Only a switch" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Complete loop needed." }],
            steps: [{ reasoning: "A circuit needs a complete loop for current to flow.", marks: 1, markCode: "A" }],
            finalAnswer: "A complete loop",
          },
        },
        {
          id: "cips-u2-el-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is an INSULATOR?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Iron" },
            { id: "b", text: "Copper" },
            { id: "c", text: "Steel" },
            { id: "d", text: "Plastic" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Insulator", statement: "Blocks electricity." }],
            steps: [{ reasoning: "Plastic is an insulator; metals conduct.", marks: 1, markCode: "A" }],
            finalAnswer: "Plastic",
          },
        },
        {
          id: "cips-u2-el-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many components does a simple circuit need: cell, wires, bulb?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "components" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuit", statement: "Cell + wires + bulb." }],
            steps: [{ reasoning: "Three components needed.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-el-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 6 materials: 4 light the lamp and 2 do not. How many are conductors?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Conductor test", statement: "Lamp lights = conductor." }],
            steps: [
              { reasoning: "4 materials lit the lamp.", marks: 1, markCode: "M" },
              { reasoning: "They are conductors → 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u2-el-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a series circuit, what happens if one bulb is removed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The other bulb goes out too" },
            { id: "b", text: "The circuit gets stronger" },
            { id: "c", text: "Nothing changes" },
            { id: "d", text: "The other bulb stays lit" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Series circuit", statement: "One break stops all current." }],
            steps: [{ reasoning: "In series, removing one bulb breaks the loop — all go out.", marks: 1, markCode: "A" }],
            finalAnswer: "The other bulb goes out too",
          },
        },
        {
          id: "cips-u2-el-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two electrical safety rules.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Safety", statement: "Dry hands, no bare wires." }],
            steps: [
              { reasoning: "First rule (e.g. dry hands).", marks: 1, markCode: "M" },
              { reasoning: "Second (e.g. no bare wires / tell adult).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. dry hands and no bare wires",
          },
        },
        {
          id: "cips-u2-el-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why electrical wires are covered in plastic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Insulators", statement: "Plastic blocks current." }],
            steps: [
              { reasoning: "Plastic is an insulator — it blocks electricity.", marks: 1, markCode: "M" },
              { reasoning: "This prevents shocks to people touching wires.", marks: 1, markCode: "M" },
              { reasoning: "It also stops short circuits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plastic insulates — prevents shocks and shorts",
          },
        },
        {
          id: "cips-u2-el-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What happens to lamp brightness when you add a second cell?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No change" },
            { id: "b", text: "It gets dimmer" },
            { id: "c", text: "It turns off" },
            { id: "d", text: "It gets brighter" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circuits", statement: "More cells = more power." }],
            steps: [{ reasoning: "Adding cells increases energy — lamp gets brighter.", marks: 1, markCode: "A" }],
            finalAnswer: "It gets brighter",
          },
        },
        {
          id: "cips-u2-el-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A class tests 5 materials. 3 conduct and 2 insulate. How many insulators were found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Conductor test", statement: "Count insulators." }],
            steps: [
              { reasoning: "2 materials insulate.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-el-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You add a second lamp in series. What happens to both lamps and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Series circuit", statement: "Shared current." }],
            steps: [
              { reasoning: "Both lamps share the same current path.", marks: 1, markCode: "M" },
              { reasoning: "The current is split/dimmed — both glow dimmer.", marks: 1, markCode: "M" },
              { reasoning: "If one breaks, both go out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both dim — shared current; one break stops all",
          },
        },
        {
          id: "cips-u2-el-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How do you test if a material conducts electricity?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Put it in a circuit and see if the lamp lights" },
            { id: "b", text: "Weigh it" },
            { id: "c", text: "Smell it" },
            { id: "d", text: "Touch it with wet hands" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conductor test", statement: "Lamp lights = conductor." }],
            steps: [{ reasoning: "Include the material in a circuit — if the lamp lights, it conducts.", marks: 1, markCode: "A" }],
            finalAnswer: "Put it in a circuit and see if the lamp lights",
          },
        },
        {
          id: "cips-u2-el-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) What does a switch do? (b) What must a circuit have to work? (c) Define conductor and insulator with examples. (d) How do you test a material? (e) What happens when you open a switch? (f) What happens in series when one lamp is removed? (g) Name two safety rules. (h) Why are wires covered in plastic?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Electricity", statement: "Integrated Stage 4 electricity answer." }],
            steps: [
              { reasoning: "(a) Opens/closes the circuit.", marks: 1, markCode: "M" },
              { reasoning: "(b) Complete loop: cell + wires + components.", marks: 1, markCode: "M" },
              { reasoning: "(c) Conductor lets current flow (copper); insulator blocks (plastic).", marks: 1, markCode: "M" },
              { reasoning: "(d) Put in circuit — lamp lights = conductor.", marks: 1, markCode: "M" },
              { reasoning: "(e) Break stops current — lamp goes out.", marks: 1, markCode: "M" },
              { reasoning: "(f) All lamps go out — shared loop broken.", marks: 1, markCode: "M" },
              { reasoning: "(g) e.g. dry hands, no bare wires.", marks: 1, markCode: "M" },
              { reasoning: "(h) Plastic insulates — prevents shocks and shorts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Switch, circuit loop, conductor/insulator, test method, switch effect, series break, safety, wire covering.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-el-notes",
      title: "Electricity — notes",
      summary: "Complete loop needed; break stops current. Metals conduct, plastics insulate. Safety: dry hands, no bare wires.",
      sections: [
        { heading: "Circuits", body: "Cell → wires → components → back. Switch controls the loop." },
        { heading: "Conductors", body: "Lamp lights = conductor. Test by including material in circuit." },
      ],
    },
  ],
};
