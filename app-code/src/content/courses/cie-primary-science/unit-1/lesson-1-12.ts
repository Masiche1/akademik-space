import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cips-u1-lesson-1-12",
  code: "1-12",
  title: "Stage 1 — Pushes, Pulls, Floating and Early Electricity",
  goal: "I CAN describe pushes and pulls, test floating and identify things that use electricity.",
  standards: ["Cambridge Primary Science 0097 Stage 1: forces and energy",
  "Cambridge Primary Science 0097 framework substrands: 1Pf, 1Pe, 1Ps, 1SIC"],
  stage: 1,
  vocabulary: [
    { term: "Push", definition: "Force moving something away." },
    { term: "Pull", definition: "Force drawing something closer." },
    { term: "Float", definition: "Stay on top of water." },
    { term: "Sink", definition: "Go down into water." },
    { term: "Electricity", definition: "Power that makes devices work: lights, TVs, fridges." },
  ],
  concepts: [
    {
      id: "cips-u1-s12-forces-electricity",
      title: "Pushes, pulls, floating and electricity",
      skill: "Identify pushes/pulls as forces, test floating and sinking, and recognise electrical devices at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Forces and floating",
            body: "Pushes move things away; pulls draw them closer — both are forces that can start, stop or change movement. Some objects float on water (cork, leaf, boat) while others sink (stone, coin, key). Test by placing objects gently on water and watching what happens.",
          },
          {
            heading: "Electricity and magnets",
            body: "Many devices need electricity to work: lights, TVs, phones, fridges. Magnets attract certain metals like iron and steel but not wood, plastic or paper. Bringing a magnet near a material shows whether it is magnetic — the material gets pulled toward the magnet.",
          },
        ],
        keyFormulas: [
          { name: "Forces", statement: "push = away, pull = closer; change movement" },
          { name: "Float/sink", statement: "some materials float, some sink" },
          { name: "Electricity", statement: "powers lights, devices, appliances" },
        ],
        workedExample: {
          problem: "Does a plastic ruler float or sink?",
          solution: "Test: place gently on water — most plastics float.",
        },
      },
      questions: [
        {
          id: "cips-u1-fe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force do you use to open a drawer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Push" }, { id: "b", text: "Pull" }, { id: "c", text: "Both" }, { id: "d", text: "Neither" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pull", statement: "Draws toward you." }],
            steps: [{ reasoning: "Opening a drawer pulls it toward you.", marks: 1, markCode: "A" }],
            finalAnswer: "Pull",
          },
        },
        {
          id: "cips-u1-fe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things that need electricity to work.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Electric devices", statement: "Lights, TVs, fridges etc." }],
            steps: [
              { reasoning: "Any two correct devices.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. light and TV",
          },
        },
        {
          id: "cips-u1-fe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A stone sinks in water but a cork floats. Explain the difference using what you observe.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Float/sink", statement: "Materials behave differently in water." }],
            steps: [
              { reasoning: "Stone goes to bottom — sinks.", marks: 1, markCode: "M" },
              { reasoning: "Cork stays on top — floats.", marks: 1, markCode: "M" },
              { reasoning: "Different materials behave differently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Different materials float or sink differently",
          },
        },
        {
          id: "cips-u1-fe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Plan a test to find which of three objects (nail, plastic spoon, paper clip) is attracted to a magnet. Include: prediction, method, what you record, and safety notes. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing magnetic materials", statement: "Predict, test, record." }],
            steps: [
              { reasoning: "Prediction: nail attracted (metal), others maybe not.", marks: 1, markCode: "M" },
              { reasoning: "Method: hold magnet near each object one at a time.", marks: 1, markCode: "M" },
              { reasoning: "Record: attracted/not attracted for each.", marks: 1, markCode: "M" },
              { reasoning: "Repeat to check reliability.", marks: 1, markCode: "M" },
              { reasoning: "Safety: don't put magnet near electronic devices.", marks: 1, markCode: "M" },
              { reasoning: "Results table described.", marks: 1, markCode: "M" },
              { reasoning: "Fair test: same magnet, same distance.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion from evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Predict nail attracted → test each with magnet → record attracted/not → nail is magnetic",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-fe-notes",
      title: "Forces and electricity — notes",
      summary: "Push away/pull closer; float vs sink; electricity powers devices; magnets attract metals.",
      sections: [
        { heading: "Forces", body: "Pushes and pulls change movement; test floating by placing on water." },
        { heading: "Energy", body: "Electricity powers devices; magnets attract iron/steel only." },
      ],
    },
  ],
};
