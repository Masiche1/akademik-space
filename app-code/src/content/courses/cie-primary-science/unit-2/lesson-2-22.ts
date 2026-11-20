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
            { id: "a", text: "Opens or closes the circuit" }, { id: "b", text: "Stores electricity" }, { id: "c", text: "Makes light brighter" }, { id: "d", text: "Changes the wire colour" },
          ], correctChoiceId: "a" },
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
