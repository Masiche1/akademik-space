import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cils-u7-lesson-7-2",
  code: "7-2",
  title: "Magnetism and electromagnetism",
  goal: "I CAN describe magnets, magnetic fields and electromagnets.",
  standards: ["0893 Physics: magnetism"],
  vocabulary: [
    { term: "Magnet", definition: "Object that attracts iron/steel — has north and south poles." },
    { term: "Magnetic field", definition: "Region around magnet where force acts — field lines show direction." },
    { term: "Electromagnet", definition: "Temporary magnet created by electric current through coil." },
    { term: "Induced magnetism", definition: "Temporary magnetism in iron near a magnet." },
    { term: "Repel", definition: "Like poles push apart — N-N or S-S." },
    { term: "Attract", definition: "Opposite poles pull together — N-S." },
  ],
  concepts: [
    {
      id: "cils-u7-magnetism",
      title: "Magnets and fields",
      skill: "Describe magnetic properties, poles and field patterns.",
      lesson: {
        sections: [
          {
            heading: "Magnetic properties",
            body: "Magnets attract iron, steel, nickel, cobalt. Have two poles: north (N) and south (S). Like poles repel, opposite attract.",
          },
          {
            heading: "Magnetic field",
            body: "Invisible region around magnet where force acts. Field lines emerge from N, enter S — show direction of force on north pole.",
          },
          {
            heading: "Everyday magnets",
            body: "Fridge magnets, compass needles, speakers, MRI machines, magnetic resonance. Induced magnetism in iron near magnets.",
          },
        ],
        keyFormulas: [
          { name: "Magnetism", statement: "Like poles repel, opposite attract; field lines N→S outside magnet." },
        ],
        workedExample: {
          problem: "Two magnets: N pole of one near S pole of other. What happens?",
          solution: "Opposite poles attract — magnets pull together.",
        },
      },
      questions: [
        {
          id: "cils-u7-mag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which materials are attracted to magnets?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron and steel" },
              { id: "b", text: "Aluminium and copper" },
              { id: "c", text: "Plastic and wood" },
              { id: "d", text: "Glass and rubber" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnetic materials", statement: "Iron, steel, nickel, cobalt are magnetic." },
            ],
            steps: [
              { reasoning: "Iron/steel are ferromagnetic.", working: "iron/steel", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Iron and steel",
            commonErrors: ["Choosing (b) — aluminium/copper aren't magnetic."],
          },
        },
        {
          id: "cils-u7-mag-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when two north poles face each other?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Poles", statement: "Like poles repel." },
            ],
            steps: [
              { reasoning: "N-N = repel.", working: "repel", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They repel — like poles push apart.",
            commonErrors: ["Saying attract — only opposite poles attract."],
          },
        },
        {
          id: "cils-u7-mag-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the magnetic field around a bar magnet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Field pattern", statement: "Field lines emerge from N, curve around to S — strongest at poles." },
            ],
            steps: [
              { reasoning: "Field lines emerge from N pole, enter S pole.", working: "direction", marks: 1, markCode: "M" },
              { reasoning: "Lines curve around outside magnet — show force direction.", working: "curved", marks: 1, markCode: "M" },
              { reasoning: "Closest lines at poles = strongest field.", working: "strength", marks: 1, markCode: "M" },
              { reasoning: "Description accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lines emerge from N, curve to S — strongest at poles.",
            commonErrors: ["Saying field goes through magnet — lines outside only shown."],
          },
        },
        {
          id: "cils-u7-mag-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate magnetism.",
          parts: [
            { label: "a", prompt: "Name two magnetic materials.", marks: 1 },
            { label: "b", prompt: "Describe pole interactions.", marks: 2 },
            { label: "c", prompt: "Draw/describe field pattern.", marks: 3 },
            { label: "d", prompt: "Give two everyday uses of magnets.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Magnetism", statement: "Like repel, opposite attract; field N→S; applications everywhere." },
            ],
            steps: [
              { part: "a", reasoning: "Iron, steel, nickel, cobalt.", working: "materials", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Like poles repel; opposite attract.", working: "interactions", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Lines emerge N, enter S, curve around — strongest at poles.", working: "pattern", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fridge magnets, compass, speakers, MRI, door catches, motors.", working: "uses", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) iron/steel (b) like repel, opposite attract (c) N→S curved lines (d) fridge/compass/speakers",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Accurate.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ uses.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Field lines inside magnet — usually only outside shown."],
          },
        },
      ],
    },
    {
      id: "cils-u7-electro",
      title: "Electromagnets",
      skill: "Describe electromagnets, factors affecting strength and applications.",
      lesson: {
        sections: [
          {
            heading: "What is an electromagnet?",
            body: "Coil of wire around iron core — current creates magnetic field. Current on = magnet; current off = no magnet (temporary).",
          },
          {
            heading: "Strength factors",
            body: "- **Current**: more current = stronger magnet\n- **Turns**: more coil turns = stronger\n- **Core**: iron core concentrates field — much stronger",
          },
          {
            heading: "Applications",
            body: "Electric motors, relays, scrapyard cranes, door locks, MRI machines, loudspeakers.",
          },
        ],
        keyFormulas: [
          { name: "Electromagnet", statement: "Current through coil → magnetic field; strength ∝ current and turns." },
        ],
        workedExample: {
          problem: "How to make an electromagnet stronger?",
          solution: "Increase current, add more coil turns, or use iron core.",
        },
      },
      questions: [
        {
          id: "cils-u7-elec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an electromagnet temporary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current only flows when switched on" },
              { id: "b", text: "It's made of plastic" },
              { id: "c", text: "It has no poles" },
              { id: "d", text: "It's always weak" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electromagnet", statement: "Magnetism only while current flows." },
            ],
            steps: [
              { reasoning: "Current on = magnet; current off = not.", working: "current", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Current only flows when switched on",
            commonErrors: ["Thinking it's permanent — electromagnets lose magnetism when off."],
          },
        },
        {
          id: "cils-u7-elec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors that increase electromagnet strength.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strength factors", statement: "More current, more turns, iron core." },
            ],
            steps: [
              { reasoning: "Any two: more current, more turns, iron core.", working: "factors", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More current, more coil turns, or iron core (any two).",
            commonErrors: ["Saying 'bigger coil' — it's turns not size."],
          },
        },
        {
          id: "cils-u7-elec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an electromagnet works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Electromagnet", statement: "Current through coil creates magnetic field; iron core amplifies." },
            ],
            steps: [
              { reasoning: "Electric current flows through wire coil.", working: "current", marks: 1, markCode: "M" },
              { reasoning: "Current creates magnetic field around wire — coil concentrates it.", working: "field", marks: 1, markCode: "M" },
              { reasoning: "Iron core becomes temporarily magnetised — stronger field.", working: "iron core", marks: 1, markCode: "M" },
              { reasoning: "Mechanism clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current through coil creates field; iron core amplifies — temporary magnet.",
            commonErrors: ["Saying 'permanent magnet' — it's temporary, controlled by current."],
          },
        },
        {
          id: "cils-u7-elec-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate electromagnets.",
          parts: [
            { label: "a", prompt: "Describe electromagnet construction.", marks: 2 },
            { label: "b", prompt: "How to test its strength?", marks: 2 },
            { label: "c", prompt: "Predict effect of more turns.", marks: 2 },
            { label: "d", prompt: "Give two applications.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Electromagnets", statement: "Coil+current+iron core; strength ∝ current and turns." },
            ],
            steps: [
              { part: "a", reasoning: "Wire coil around iron core connected to circuit.", working: "construction", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Count paperclips picked up — more = stronger.", working: "paperclips", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Valid method.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "More turns = stronger magnet (more field lines).", working: "more turns", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Electric motors, scrapyard crane, door lock, relay, MRI.", working: "applications", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) coil+iron core+current (b) paperclip count (c) more turns=stronger (d) motor/crane/door lock",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Method valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ applications.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Thinking bigger core = stronger — it's turns and current that matter."],
          },
        },
      ],
    },
    {
      id: "cils-u7-motors",
      title: "Electric motors",
      skill: "Describe how electric motors work and their applications.",
      lesson: {
        sections: [
          {
            heading: "How motors work",
            body: "Current-carrying coil in magnetic field experiences force → rotates. Split-ring commutator reverses current every half-turn — keeps rotation continuous.",
          },
          {
            heading: "Motor components",
            body: "Armature (coil), commutator (split ring), brushes (contacts), magnets (field), axle (output).",
          },
          {
            heading: "Applications",
            body: "Fans, washing machines, drills, electric cars, lifts, printers — anywhere rotation needed.",
          },
        ],
        keyFormulas: [
          { name: "Motor", statement: "Current in magnetic field → force → rotation; commutator reverses current." },
        ],
        workedExample: {
          problem: "Why does a motor spin continuously instead of oscillating?",
          solution: "Split-ring commutator reverses current direction every half-turn — keeps force direction consistent.",
        },
      },
      questions: [
        {
          id: "cils-u7-motor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a motor spin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current in magnetic field" },
              { id: "b", text: "Static electricity" },
              { id: "c", text: "Gravity" },
              { id: "d", text: "Friction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motor", statement: "Current-carrying coil in magnetic field experiences force." },
            ],
            steps: [
              { reasoning: "Current + magnetic field = force = rotation.", working: "current+field", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Current in magnetic field",
            commonErrors: ["Choosing (d) — friction opposes, doesn't drive."],
          },
        },
        {
          id: "cils-u7-motor-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of the commutator?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Commutator", statement: "Split ring reverses current every half-turn — keeps rotation continuous." },
            ],
            steps: [
              { reasoning: "Reverses current direction each half revolution.", working: "reverse", marks: 1, markCode: "M" },
              { reasoning: "Prevents oscillation — continuous spin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reverses current every half-turn so motor keeps rotating same direction.",
            commonErrors: ["Saying 'increases voltage' — it reverses current direction."],
          },
        },
        {
          id: "cils-u7-motor-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the force on a current-carrying wire in a magnetic field.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motor principle", statement: "Current perpendicular to field → force; Fleming's left-hand rule." },
            ],
            steps: [
              { reasoning: "Current-carrying wire in magnetic field experiences force.", working: "force", marks: 1, markCode: "M" },
              { reasoning: "Force direction depends on current direction and field direction.", working: "direction", marks: 1, markCode: "M" },
              { reasoning: "In motor: force creates torque → rotation.", working: "torque", marks: 1, markCode: "M" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current + magnetic field = force → torque → rotation.",
            commonErrors: ["Saying 'attracts wire' — it's a sideways force."],
          },
        },
        {
          id: "cils-u7-motor-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate electric motors.",
          parts: [
            { label: "a", prompt: "Name motor components.", marks: 2 },
            { label: "b", prompt: "Explain commutator role.", marks: 2 },
            { label: "c", prompt: "How to increase motor speed?", marks: 2 },
            { label: "d", prompt: "Give two applications.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motors", statement: "Current+field=force; commutator reverses; more current/turns=faster." },
            ],
            steps: [
              { part: "a", reasoning: "Armature, commutator, brushes, magnets, axle.", working: "components", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three+ correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reverses current each half-turn — continuous rotation.", working: "commutator", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Increase current or voltage — stronger field/current = faster.", working: "speed", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fans, washing machines, drills, electric cars, printers.", working: "applications", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) armature/commutator/brushes/magnets (b) reverses current (c) more current/voltage (d) fan/drill/car",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Components correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Incomplete.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ applications.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Commutator doesn't reverse magnets — it reverses current."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u7-magnetism-notes",
      title: "Magnetism and motors — revision notes",
      summary: "Poles, fields, electromagnets, motor principle.",
      sections: [
        {
          heading: "Magnetism",
          body: "Like poles repel, opposite attract. Field lines N→S. Electromagnet: current+coil+iron core; strength ∝ current/turns.",
        },
        {
          heading: "Motors",
          body: "Current in magnetic field → force → rotation. Commutator reverses current for continuous spin. More current/voltage = faster.",
        },
      ],
    },
  ],
};
