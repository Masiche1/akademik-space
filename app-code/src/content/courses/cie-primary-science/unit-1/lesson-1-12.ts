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
            { id: "a", text: "Both" },
            { id: "b", text: "Neither" },
            { id: "c", text: "Pull" },
            { id: "d", text: "Push" },
          ], correctChoiceId: "c" },
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
        {
          id: "cips-u1-fe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which action is a PUSH?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Closing a door" },
            { id: "b", text: "Opening a door" },
            { id: "c", text: "Opening a drawer" },
            { id: "d", text: "Picking up a bag" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Push", statement: "Force moving something away." }],
            steps: [{ reasoning: "Closing a door pushes it away from you.", marks: 1, markCode: "A" }],
            finalAnswer: "Closing a door",
          },
        },
        {
          id: "cips-u1-fe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which object is most likely to FLOAT on water?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A coin" },
            { id: "b", text: "A stone" },
            { id: "c", text: "A cork" },
            { id: "d", text: "A key" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Float", statement: "Stay on top of water." }],
            steps: [{ reasoning: "Cork floats; stone, coin and key sink.", marks: 1, markCode: "A" }],
            finalAnswer: "A cork",
          },
        },
        {
          id: "cips-u1-fe-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You test 5 objects on water. 3 float and 2 sink. How many objects sank?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "objects" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Float/sink test", statement: "Count the sinking objects." }],
            steps: [{ reasoning: "2 objects sank.", marks: 1, markCode: "M" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-fe-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A magnet picks up 7 paperclips on Monday and 7 on Tuesday. How many paperclips did it pick up in total over the two days?",
          response: { type: "numeric", parts: [{ label: "a", answer: 14, unit: "paperclips" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeating tests", statement: "Same result twice shows reliability." }],
            steps: [
              { reasoning: "$7 + 7 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "Total is 14 paperclips.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cips-u1-fe-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which device does NOT need electricity to work?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A lamp" },
            { id: "b", text: "A torch with batteries" },
            { id: "c", text: "A fridge" },
            { id: "d", text: "A wooden ruler" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Electricity", statement: "Powers devices like lights and fridges." }],
            steps: [{ reasoning: "A wooden ruler does not use electricity.", marks: 1, markCode: "A" }],
            finalAnswer: "A wooden ruler",
          },
        },
        {
          id: "cips-u1-fe-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two everyday actions that use a pull force.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pull", statement: "Force drawing something closer." }],
            steps: [
              { reasoning: "First valid pull action (e.g. pulling a drawer).", marks: 1, markCode: "M" },
              { reasoning: "Second valid pull action (e.g. opening a bag).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. pulling a drawer and opening a bag",
          },
        },
        {
          id: "cips-u1-fe-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "You place a plastic spoon and a stone in a bowl of water. The spoon floats and the stone sinks. Describe your observations and explain why the results differ.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Float/sink", statement: "Different materials behave differently in water." }],
            steps: [
              { reasoning: "Observation: spoon stays on top (floats).", marks: 1, markCode: "M" },
              { reasoning: "Observation: stone goes to bottom (sinks).", marks: 1, markCode: "M" },
              { reasoning: "Explanation: materials differ — plastic floats, stone sinks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spoon floats, stone sinks — different materials behave differently",
          },
        },
        {
          id: "cips-u1-fe-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A magnet attracts iron but not aluminium. Which object would the magnet attract?",
          response: { type: "mcq", choices: [
            { id: "a", text: "An iron nail" },
            { id: "b", text: "A wooden block" },
            { id: "c", text: "An aluminium can" },
            { id: "d", text: "A plastic ruler" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic materials", statement: "Magnets attract iron and steel." }],
            steps: [{ reasoning: "Iron nail is attracted; aluminium, plastic and wood are not.", marks: 1, markCode: "A" }],
            finalAnswer: "An iron nail",
          },
        },
        {
          id: "cips-u1-fe-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In three tries a magnet picks up 5, 6 and 5 paperclips. What is the total number of paperclips picked up?",
          response: { type: "numeric", parts: [{ label: "a", answer: 16, unit: "paperclips" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeating tests", statement: "Add all results for the total." }],
            steps: [
              { reasoning: "$5 + 6 + 5 = 16$.", marks: 1, markCode: "M" },
              { reasoning: "Total is 16 paperclips.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "cips-u1-fe-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a fridge needs electricity but a wooden spoon does not. Use the idea of what electricity does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Electricity", statement: "Powers devices to make them work." }],
            steps: [
              { reasoning: "A fridge uses electricity to keep food cold.", marks: 1, markCode: "M" },
              { reasoning: "Electricity gives the fridge the power it needs to work.", marks: 1, markCode: "M" },
              { reasoning: "A wooden spoon needs no power, so it works without electricity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fridge needs electricity to work; wooden spoon needs no power",
          },
        },
        {
          id: "cips-u1-fe-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when you place a heavy stone gently on water?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It stays in the middle" },
            { id: "b", text: "It sinks" },
            { id: "c", text: "It floats" },
            { id: "d", text: "It jumps out" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sink", statement: "Go down into water." }],
            steps: [{ reasoning: "Heavy stones sink in water.", marks: 1, markCode: "A" }],
            finalAnswer: "It sinks",
          },
        },
        {
          id: "cips-u1-fe-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Describe the difference between a push and a pull, with one example of each. (b) A ball rolls to you and stops — which force stopped it? (c) List three objects that float on water and three that sink. (d) Name three devices that need electricity. (e) Which materials does a magnet attract? (f) Why is testing with a magnet a fair test? (g) Describe how you would test whether a new object floats. (h) State one safety rule when testing objects in water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Forces, floating, electricity, magnets", statement: "Combine all Stage 1 ideas in one investigation-style answer." }],
            steps: [
              { reasoning: "(a) Push = away (e.g. push door shut); pull = closer (e.g. pull drawer).", marks: 1, markCode: "M" },
              { reasoning: "(b) Friction/ground force slowed and stopped the ball.", marks: 1, markCode: "M" },
              { reasoning: "(c) Floats: cork, leaf, boat; sinks: stone, coin, key.", marks: 1, markCode: "M" },
              { reasoning: "(d) Any three: light, TV, fridge, phone.", marks: 1, markCode: "M" },
              { reasoning: "(e) Iron and steel (magnetic metals).", marks: 1, markCode: "M" },
              { reasoning: "(f) Same magnet, same distance, same way of testing each object.", marks: 1, markCode: "M" },
              { reasoning: "(g) Place gently on water; watch if it stays on top or goes down.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. don't test sharp/heavy objects; wipe up spills; adult help.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Push/pull examples, friction, float/sink lists, electric devices, magnetic metals, fair test, float test, safety.",
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
