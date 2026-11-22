import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypp4-u3-lesson-3-2",
  code: "3-2",
  title: "Magnetism and Electromagnetism",
  goal: "I CAN explain magnetic fields, describe electromagnets, motors and generators.",
  standards: [
    "Key concept: Relationships",
    "MYP Sciences: Electricity",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Magnetic field", definition: "Region around a magnet where magnetic forces act; field lines go N to S externally." },
    { term: "Electromagnet", definition: "Magnet made by passing current through a coil around an iron core; strength ∝ current × turns." },
    { term: "Fleming's left-hand rule", definition: "For motors: First finger Field, seCond finger Current, thuMb Motion — predicts force direction." },
    { term: "Fleming's right-hand rule", definition: "For generators: First finger Field, thuMb Motion, seCond finger Current." },
    { term: "Motor", definition: "Device converting electrical energy to kinetic via magnetic force on current-carrying wire." },
    { term: "Generator", definition: "Device converting kinetic energy to electrical via electromagnetic induction." },
  ],
  concepts: [
    {
      id: "mypp4-u3-magnetism",
      title: "Magnetic fields and electromagnets",
      skill: "Describe magnetic fields, poles, and how electromagnets work.",
      lesson: {
        sections: [
          {
            heading: "Magnetic poles",
            body: "Magnets have north and south poles. Like poles repel, unlike attract. Magnetic field lines emerge from N and enter S externally, forming loops. Field strength is greatest near poles.",
          },
          {
            heading: "Electromagnets",
            body: "A current-carrying wire produces a magnetic field. Coiling the wire around an iron core concentrates the field. Strength increases with more turns, higher current, and soft iron core. Used in scrapyards, MRI, doorbells.",
          },
          {
            heading: "Earth's magnetism",
            body: "Earth acts as a giant magnet — compass needles align with its field. This is how we navigate; the magnetic north pole is near the geographic south.",
          },
        ],
        keyFormulas: [
          { name: "Poles", statement: "Like repel, unlike attract" },
          { name: "Field lines", statement: "N → S externally, closed loops" },
          { name: "Electromagnet", statement: "Strength ∝ current × turns × core" },
        ],
        workedExample: {
          problem: "How can an electromagnet's strength be increased?",
          solution: "Increase current, add more coil turns, or use a soft iron core.",
        },
      },
      questions: [
        {
          id: "mypp4-u3-mag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when two north poles of magnets are brought together?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They cancel" },
              { id: "b", text: "They repel" },
              { id: "c", text: "They attract" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Poles", statement: "Like poles repel." }],
            steps: [
              { reasoning: "N–N repels.", working: "\\text{repel}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They repel",
            commonErrors: ["Thinking all magnets attract."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-mag-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an electromagnet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A magnet that only works underwater" },
              { id: "b", text: "A coil of wire around an iron core carrying current" },
              { id: "c", text: "A battery-powered compass" },
              { id: "d", text: "A permanent magnet made of electricity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Electromagnet", statement: "Current-carrying coil + iron core = temporary magnet." }],
            steps: [
              { reasoning: "Current through coil creates magnetic field.", working: "\\text{current+coil}", marks: 1, markCode: "M" },
              { reasoning: "Iron core concentrates field; magnet only while current flows.", working: "\\text{temporary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coil + iron core + current",
            commonErrors: ["Thinking it's permanent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which change would NOT increase an electromagnet's strength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using soft iron instead of steel" },
              { id: "b", text: "Adding more coil turns" },
              { id: "c", text: "Replacing iron core with wood" },
              { id: "d", text: "Increasing the current" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Electromagnet strength", statement: "Needs ferromagnetic core; wood won't work." }],
            steps: [
              { reasoning: "Wood is not magnetic — no field concentration.", working: "\\text{wood non-magnetic}", marks: 1, markCode: "M" },
              { reasoning: "This would decrease or eliminate magnetism.", working: "\\text{decrease}", marks: 1, markCode: "M" },
              { reasoning: "Match choice.", working: "\\text{(c)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(c)",
            commonErrors: ["Thinking any material works as core."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An electric bell uses an electromagnet. When the button is pressed, the circuit completes, the electromagnet attracts an iron armature, the hammer strikes the bell, and the armature springs back, breaking the circuit — repeating rapidly.",
          parts: [
            { label: "a", prompt: "Explain why the electromagnet only works while current flows.", marks: 2 },
            { label: "b", prompt: "Describe what happens when the armature is attracted.", marks: 2 },
            { label: "c", prompt: "Explain why the bell rings continuously while the button is held.", marks: 2 },
            { label: "d", prompt: "Suggest one advantage of an electromagnet over a permanent magnet in this application.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electromagnet", statement: "Magnetic only when current flows — controllable." },
              { kind: "principle", name: "Circuit", statement: "Armature breaks contact → circuit opens → magnet off." },
            ],
            steps: [
              { part: "a", reasoning: "Magnetic field exists only while current flows through coil.", working: "\\text{current-dependent}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No current → no magnetism.", working: "\\text{temporary}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Armature pulled toward electromagnet, hammer strikes bell.", working: "\\text{attracts}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contact breaks → circuit opens.", working: "\\text{circuit opens}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Spring returns armature → contact remade → current → magnet → repeat.", working: "\\text{cycle repeats}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rapid on-off switching makes continuous ringing.", working: "\\text{rapid switching}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Can be switched on/off — permanent magnet can't be controlled.", working: "\\text{controllable}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Also stronger for size and adjustable.", working: "\\text{adjustable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) magnetism needs current (b) armature attracted, contact breaks (c) spring returns armature, cycle repeats (d) can be switched off/on",
            commonErrors: ["Forgetting the armature must break contact for the cycle."],
            examinerNote: "M1 A1 for each of (a),(b),(c), M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u3-mag-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a north pole of one magnet is brought near a south pole of another, they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cancel each other" },
              { id: "b", text: "attract" },
              { id: "c", text: "repel" },
              { id: "d", text: "do nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Poles", statement: "Unlike poles attract." }],
            steps: [
              { reasoning: "N–S attract.", working: "\\text{attract}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** attract",
            commonErrors: ["Confusing with like poles."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-mag-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An electromagnet's strength is proportional to turns × current. A coil has 500 turns carrying 0.4 A. Calculate the turns × current product.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 200, unit: "A turns" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Electromagnet strength", statement: "Strength ∝ current × turns." }],
            steps: [
              { reasoning: "Multiply turns by current.", working: "500\\times0.4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "200\\ \\text{A turns}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 A turns",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An electromagnet has 250 turns carrying 0.8 A. Calculate the turns × current product.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 200, unit: "A turns" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Electromagnet strength", statement: "Strength ∝ current × turns." }],
            steps: [
              { reasoning: "Multiply: $250 \\times 0.8$.", working: "250\\times0.8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "200\\ \\text{A turns}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 A turns",
            commonErrors: ["Decimal multiplication errors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where is the magnetic field of a bar magnet strongest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Near the poles" },
              { id: "b", text: "At the exact centre" },
              { id: "c", text: "Uniformly everywhere" },
              { id: "d", text: "Outside the magnet only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Magnetic field", statement: "Field lines are densest near the poles → strongest field." }],
            steps: [
              { reasoning: "Field lines concentrate at poles.", working: "\\text{near poles}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** near the poles",
            commonErrors: ["Thinking field is uniform."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An electromagnet has 500 turns at 1 A (turns × current = 500). How many turns would be needed at 2 A to produce the same strength?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 250, unit: "turns" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Electromagnet strength", statement: "Same turns × current product → same strength." }],
            steps: [
              { reasoning: "Need turns × 2 = 500 → turns = 250.", working: "N\\times2=500", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "250\\ \\text{turns}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "250 turns",
            commonErrors: ["Doubling turns instead of halving."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why do scrapyards use electromagnets rather than permanent magnets to lift cars?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They can be switched on to lift and off to release — permanent magnets cannot be controlled" },
              { id: "b", text: "Electromagnets are always stronger" },
              { id: "c", text: "Permanent magnets don't work on metal" },
              { id: "d", text: "Electromagnets are cheaper to make" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Electromagnet", statement: "Magnetic only while current flows — controllable on/off." }],
            steps: [
              { reasoning: "Current on → magnet attracts car; current off → releases.", working: "\\text{switchable}", marks: 1, markCode: "M" },
              { reasoning: "Permanent magnet would stay attached — unusable for release.", working: "\\text{permanent stuck}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** controllable on/off",
            commonErrors: ["Thinking electromagnets are always stronger."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an electromagnet produces a magnetic field, including the role of the iron core.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Current → field", statement: "A current-carrying wire produces a magnetic field around it." },
              { kind: "principle", name: "Iron core", statement: "Soft iron concentrates and strengthens the field." },
            ],
            steps: [
              { reasoning: "Electric current through the coil creates a magnetic field.", working: "I\\to B", marks: 1, markCode: "M" },
              { reasoning: "Coiling the wire concentrates the field along the axis.", working: "\\text{coil concentrates}", marks: 1, markCode: "M" },
              { reasoning: "Soft iron core is easily magnetised → amplifies the field.", working: "\\text{iron core}", marks: 1, markCode: "A" },
              { reasoning: "Field exists only while current flows → temporary magnet.", working: "\\text{temporary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current in coil → magnetic field; iron core concentrates it; only while current flows",
            commonErrors: ["Thinking the core creates the field — the current does."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A compass needle aligns with Earth's magnetic field, pointing roughly towards:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the geographic north pole" },
              { id: "b", text: "the geographic south pole" },
              { id: "c", text: "random directions" },
              { id: "d", text: "the equator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Earth's magnetism", statement: "Compass north points towards Earth's magnetic south (near geographic north)." }],
            steps: [
              { reasoning: "Compass needle's north points to geographic north.", working: "\\text{north}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** geographic north pole",
            commonErrors: ["Confusing magnetic and geographic poles."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypp4-u3-mag-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An electromagnet coil has 800 turns carrying 0.25 A. Calculate the turns × current product.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 200, unit: "A turns" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Electromagnet strength", statement: "Strength ∝ current × turns." }],
            steps: [
              { reasoning: "Multiply: $800 \\times 0.25$.", working: "800\\times0.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "200\\ \\text{A turns}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 A turns",
            commonErrors: ["Decimal errors."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a compass needle is a useful indicator of magnetic fields and how it relates to Earth's magnetism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compass", statement: "Small magnet that aligns with external magnetic field." },
              { kind: "principle", name: "Earth's field", statement: "Earth acts as a giant magnet producing a field everywhere." },
            ],
            steps: [
              { reasoning: "Compass needle is itself a magnet — aligns with any magnetic field.", working: "\\text{aligns}", marks: 1, markCode: "M" },
              { reasoning: "It rotates until its north pole points along the field direction.", working: "\\text{north along field}", marks: 1, markCode: "M" },
              { reasoning: "Earth's magnetic field makes the needle point towards geographic north.", working: "\\text{Earth field}", marks: 1, markCode: "A" },
              { reasoning: "This is how navigation using compasses works.", working: "\\text{navigation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compass aligns with magnetic field → points north via Earth's field",
            commonErrors: ["Thinking the needle is attracted to the pole itself rather than aligning with the field."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two identical electromagnets are made — one with an iron core, one with just air inside the coil. Which is stronger, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are equally strong" },
              { id: "b", text: "The air-core one — air doesn't interfere" },
              { id: "c", text: "The iron-core one — soft iron concentrates and strengthens the magnetic field" },
              { id: "d", text: "Neither produces a field" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Core material", statement: "Ferromagnetic core (iron) concentrates field lines → stronger magnet." }],
            steps: [
              { reasoning: "Iron is easily magnetised — concentrates the field.", working: "\\text{iron concentrates}", marks: 1, markCode: "M" },
              { reasoning: "Air is not magnetic → weaker field.", working: "\\text{air weak}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** iron core stronger",
            commonErrors: ["Thinking air core is better."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-mag-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The current direction in an electromagnet is reversed. What happens to its poles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The magnetism disappears" },
              { id: "b", text: "Nothing changes" },
              { id: "c", text: "The poles swap — north becomes south and vice versa" },
              { id: "d", text: "The strength doubles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Field direction", statement: "Pole direction depends on current direction (right-hand grip rule)." }],
            steps: [
              { reasoning: "Reversing current reverses the magnetic field direction.", working: "\\text{field reverses}", marks: 1, markCode: "M" },
              { reasoning: "Poles swap: N becomes S, S becomes N.", working: "\\text{poles swap}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** poles swap",
            commonErrors: ["Thinking strength changes rather than direction."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u3-motors",
      title: "Motors and generators",
      skill: "Explain how electric motors and generators convert energy.",
      lesson: {
        sections: [
          {
            heading: "Electric motor",
            body: "A current-carrying coil in a magnetic field experiences a force (Fleming's left-hand rule). The coil rotates; a split-ring commutator reverses current every half-turn so rotation continues. Converts electrical → kinetic energy.",
          },
          {
            heading: "Generator",
            body: "Rotating a coil in a magnetic field induces a voltage (electromagnetic induction, Fleming's right-hand rule). Converts kinetic → electrical energy. Used in power stations, dynamos, bike lights.",
          },
          {
            heading: "Transformers",
            body: "Step-up transformers increase voltage for efficient transmission (less current = less heat loss); step-down reduce it for safe use. $V_{out}/V_{in} = N_{out}/N_{in}$.",
          },
        ],
        keyFormulas: [
          { name: "Motor rule", statement: "Fleming left: Field, Current, Motion" },
          { name: "Generator rule", statement: "Fleming right: Field, Motion, Current" },
          { name: "Transformer", statement: "$V_s/V_p = N_s/N_p$" },
        ],
        workedExample: {
          problem: "A generator rotates a coil in a magnetic field. What is induced?",
          solution: "A voltage (EMF) — electromagnetic induction.",
        },
      },
      questions: [
        {
          id: "mypp4-u3-motor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an electric motor convert?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light to sound" },
              { id: "b", text: "Kinetic to electrical" },
              { id: "c", text: "Chemical to thermal" },
              { id: "d", text: "Electrical to kinetic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Motor", statement: "Electrical energy → rotation." }],
            steps: [
              { reasoning: "Motor uses electricity to spin.", working: "\\text{E→K}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Electrical to kinetic",
            commonErrors: ["Reversing motor/generator."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-motor-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is electromagnetic induction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inducing a voltage by moving a conductor in a magnetic field" },
              { id: "b", text: "Creating magnetism from electricity" },
              { id: "c", text: "Heating a wire with current" },
              { id: "d", text: "Storing charge in a capacitor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Induction", statement: "Relative motion between conductor and field induces EMF." }],
            steps: [
              { reasoning: "Moving conductor cuts field lines → voltage induced.", working: "\\text{motion+field}", marks: 1, markCode: "M" },
              { reasoning: "This is how generators work.", working: "\\text{generator}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Voltage induced by motion in field",
            commonErrors: ["Confusing with electromagnet."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does a split-ring commutator allow a motor to keep rotating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It prevents overheating" },
              { id: "b", text: "It stores energy" },
              { id: "c", text: "It reverses current direction every half-turn so force stays in same rotational direction" },
              { id: "d", text: "It increases the voltage" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Commutator", statement: "Reverses current each half-turn to maintain torque." }],
            steps: [
              { reasoning: "Without reversal, force would flip and stop rotation.", working: "\\text{force reverses}", marks: 1, markCode: "M" },
              { reasoning: "Commutator swaps contacts → current reverses → force direction maintained.", working: "\\text{reverses I}", marks: 1, markCode: "M" },
              { reasoning: "Continuous rotation achieved.", working: "\\text{continuous}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b)",
            commonErrors: ["Not realising force would reverse without it."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A power station generates electricity at 25 kV, transmits it 100 km, then steps it down to 230 V for homes.",
          parts: [
            { label: "a", prompt: "Explain why high voltage is used for transmission.", marks: 3 },
            { label: "b", prompt: "Calculate the step-down ratio.", marks: 2 },
            { label: "c", prompt: "Explain why transformers only work with alternating current (AC), not direct current (DC).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "P = VI", statement: "Higher V → lower I for same power → less I²R loss." },
              { kind: "principle", name: "Induction", statement: "Transformers need changing magnetic flux — AC only." },
            ],
            steps: [
              { part: "a", reasoning: "Power $P = VI$ fixed; higher voltage → lower current.", working: "I=\\frac{P}{V}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lower current → less heat loss $I^2R$ in cables.", working: "I^2R", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More efficient transmission over long distances.", working: "\\text{efficient}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ratio = $230/25000 = 0.0092$.", working: "\\frac{230}{25000}=0.0092", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Step-down ratio ≈ 1:108 or 0.0092.", working: "1:108", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Transformer works by electromagnetic induction — needs changing flux.", working: "\\text{changing flux}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "DC produces constant field → no induced voltage.", working: "\\text{DC constant}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Only AC's alternating current induces voltage in secondary.", working: "\\text{AC only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) high V → low I → less I²R loss (b) ≈1:108 step-down (c) needs changing flux; DC gives no induction",
            commonErrors: ["Thinking transformers work with DC."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypp4-u3-motor-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What energy conversion does an electric generator perform?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light to sound" },
              { id: "b", text: "Electrical to kinetic" },
              { id: "c", text: "Chemical to electrical" },
              { id: "d", text: "Kinetic to electrical" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Generator", statement: "Mechanical rotation → induced voltage → electrical energy." }],
            steps: [
              { reasoning: "Generator converts kinetic energy to electrical.", working: "K\\to E", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Kinetic to electrical",
            commonErrors: ["Reversing motor and generator."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-motor-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A transformer has 100 turns on its primary coil and 300 turns on its secondary. The input voltage is 12 V. Calculate the output voltage.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 36, unit: "V" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Transformer", statement: "$V_s/V_p = N_s/N_p$" }],
            steps: [
              { reasoning: "Apply $V_s = V_p \\times N_s/N_p = 12 \\times 300/100$.", working: "12\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "36\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 V",
            commonErrors: ["Inverting the turns ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A step-down transformer reduces 240 V to a turns ratio of 4:1 (primary:secondary). Calculate the output voltage.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 60, unit: "V" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Transformer", statement: "Step-down divides voltage by turns ratio." }],
            steps: [
              { reasoning: "Apply $V_s = 240/4$.", working: "\\frac{240}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "60\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 V",
            commonErrors: ["Multiplying instead of dividing for step-down."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fleming's left-hand rule is used to find:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the resistance of a wire" },
              { id: "b", text: "the direction of force on a current-carrying conductor in a motor" },
              { id: "c", text: "the voltage of a battery" },
              { id: "d", text: "the direction of induced current in a generator" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fleming's left-hand rule", statement: "First finger Field, seCond finger Current, thuMb Motion — for motors." }],
            steps: [
              { reasoning: "Left-hand rule → force/motion direction in motors.", working: "\\text{motor}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** force direction in a motor",
            commonErrors: ["Confusing left (motor) and right (generator) rules."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A transformer has 500 turns on the primary and 100 turns on the secondary. The input voltage is 230 V. Calculate the output voltage.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 46, unit: "V" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Transformer", statement: "$V_s = V_p \\times N_s/N_p = 230 \\times 100/500$" }],
            steps: [
              { reasoning: "Apply ratio: $230 \\times 0.2$.", working: "230\\times\\frac{100}{500}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "46\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "46 V",
            commonErrors: ["Using inverse ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does a split-ring commutator allow a simple DC motor to keep rotating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stores charge" },
              { id: "b", text: "It prevents the coil overheating" },
              { id: "c", text: "It reverses current direction every half-turn so the force keeps rotating the coil the same way" },
              { id: "d", text: "It increases the current" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Commutator", statement: "Reverses current each half-turn → force direction maintained → continuous rotation." }],
            steps: [
              { reasoning: "Without reversal the force would flip and stop rotation at the vertical position.", working: "\\text{force flips}", marks: 1, markCode: "M" },
              { reasoning: "Commutator swaps connections → current reverses → torque direction maintained.", working: "\\text{reverses I}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** reverses current each half-turn",
            commonErrors: ["Thinking it increases voltage."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An electric motor draws 3 A from a 6 V supply and runs for 20 s. Calculate the electrical energy supplied.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 360, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "E = VIt", statement: "Energy = voltage × current × time." }],
            steps: [
              { reasoning: "Apply $E = VIt = 6 \\times 3 \\times 20$.", working: "6\\times3\\times20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "360\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "360 J",
            commonErrors: ["Using P = VI then forgetting time."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Electromagnetic induction is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "creating a magnet from a coil" },
              { id: "b", text: "heating a wire with current" },
              { id: "c", text: "inducing a voltage when a conductor moves in a magnetic field" },
              { id: "d", text: "storing energy in a battery" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Induction", statement: "Relative motion between conductor and field induces EMF." }],
            steps: [
              { reasoning: "Motion + field → induced voltage.", working: "\\text{motion+field}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** induced voltage from motion in field",
            commonErrors: ["Confusing with electromagnetism."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-motor-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A transformer has 200 turns on the primary and 50 turns on the secondary. The primary voltage is 24 V. Calculate the secondary voltage.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 6, unit: "V" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Transformer", statement: "$V_s = 24 \\times 50/200$" }],
            steps: [
              { reasoning: "Apply $V_s = V_p \\times N_s/N_p$.", working: "24\\times\\frac{50}{200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "6\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 V",
            commonErrors: ["Using inverse ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a simple DC electric motor converts electrical energy into rotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Motor force", statement: "Current-carrying coil in magnetic field experiences a force (Fleming left)." },
              { kind: "principle", name: "Commutator", statement: "Reverses current each half-turn to maintain rotation." },
            ],
            steps: [
              { reasoning: "Current flows through the coil in a magnetic field.", working: "I\\text{ in }B", marks: 1, markCode: "M" },
              { reasoning: "Force acts on the coil sides → torque → rotation (Fleming's left-hand rule).", working: "F\\to\\text{rotation}", marks: 1, markCode: "M" },
              { reasoning: "Commutator reverses current every half-turn so force direction keeps rotating it.", working: "\\text{commutator}", marks: 1, markCode: "A" },
              { reasoning: "Electrical energy → kinetic energy of rotation.", working: "E\\to K", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current in field → force → rotation; commutator maintains direction",
            commonErrors: ["Forgetting the commutator's role."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u3-motor-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A step-up transformer has 50 turns on the primary coil and 500 turns on the secondary. The input voltage is 12 V.",
          parts: [
            { label: "a", prompt: "Calculate the output voltage.", marks: 2 },
            { label: "b", prompt: "State the step-up ratio.", marks: 1 },
            { label: "c", prompt: "Explain why step-up transformers are used before long-distance power transmission.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transformer", statement: "$V_s = 12 \\times 500/50$" },
              { kind: "formula", name: "P = VI", statement: "Higher V → lower I → less $I^2R$ loss." },
            ],
            steps: [
              { part: "a", reasoning: "$V_s = 12 \\times 10 = 120$ V.", working: "120\\ \\text{V}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State answer.", working: "120\\ \\text{V}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Step-up ratio = 1:10 (or 10×).", working: "1:10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher voltage → lower current → less heat loss ($I^2R$) in cables.", working: "I^2R\\ \\text{loss}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 120 V (b) 1:10 (c) high V → low I → less I²R loss",
            commonErrors: ["Inverting the ratio in (a)."],
            examinerNote: "M1 A1 for (a), A1 for (b),(c).",
          },
        },
        {
          id: "mypp4-u3-motor-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is alternating current (AC) used for mains electricity rather than direct current (DC)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DC cannot power appliances" },
              { id: "b", text: "Transformers only work with AC because they need a changing magnetic flux" },
              { id: "c", text: "AC is safer to touch" },
              { id: "d", text: "AC travels faster in wires" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Transformers", statement: "Induction requires changing flux → AC only." }],
            steps: [
              { reasoning: "Transformers step voltage up/down — essential for efficient transmission.", working: "\\text{transformers}", marks: 1, markCode: "M" },
              { reasoning: "DC gives constant flux → no induced voltage → transformers fail.", working: "\\text{DC constant}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** transformers need AC",
            commonErrors: ["Thinking DC is simply 'worse' without the transformer reason."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
