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
              { id: "a", text: "Glass and rubber" },
              { id: "b", text: "Iron and steel" },
              { id: "c", text: "Aluminium and copper" },
              { id: "d", text: "Plastic and wood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnetic materials", statement: "Iron, steel, nickel, cobalt are magnetic." },
            ],
            steps: [
              { reasoning: "Iron/steel are ferromagnetic.", working: "iron/steel", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Iron and steel",
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
        {
          id: "cils-u7-mag-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many poles does a bar magnet have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two — north and south" },
              { id: "b", text: "Four" },
              { id: "c", text: "One" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poles", statement: "Every magnet has a north (N) and south (S) pole." },
            ],
            steps: [
              { reasoning: "Magnets have two poles.", working: "N + S", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Two — north and south",
            commonErrors: ["Choosing (c) — magnets have exactly two poles."],
          },
        },
        {
          id: "cils-u7-mag-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A freely suspended compass needle points:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "North-south (along Earth's magnetic field)" },
              { id: "b", text: "East-west" },
              { id: "c", text: "Straight up" },
              { id: "d", text: "Randomly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Compass", statement: "Needle aligns with Earth's magnetic field — N-S direction." },
            ],
            steps: [
              { reasoning: "Compass aligns with Earth's magnetic field.", working: "N-S", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** North-south",
            commonErrors: ["Choosing (b) — compass points along field lines, N-S."],
          },
        },
        {
          id: "cils-u7-mag-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Outside a bar magnet, magnetic field lines go:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Through the magnet only" },
              { id: "b", text: "From north pole to south pole" },
              { id: "c", text: "In straight parallel lines only" },
              { id: "d", text: "From south to north" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Field lines", statement: "Outside magnet: N → S; inside: S → N." },
            ],
            steps: [
              { reasoning: "Field lines emerge from N, enter S outside.", working: "N→S", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** North to south",
            commonErrors: ["Choosing (b) — reversed direction."],
          },
        },
        {
          id: "cils-u7-mag-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Induced magnetism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Magnetism from electric current" },
              { id: "b", text: "Permanent magnetism" },
              { id: "c", text: "Magnetism in all materials" },
              { id: "d", text: "Temporary magnetism produced in iron when near a magnet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Induced magnetism", statement: "Temporary — iron becomes magnetised only while near a magnet." },
            ],
            steps: [
              { reasoning: "Induced = temporary, from proximity to magnet.", working: "temporary", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Temporary magnetism in iron near a magnet",
            commonErrors: ["Choosing (c) — that's electromagnetism."],
          },
        },
        {
          id: "cils-u7-mag-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The north pole of a compass needle is attracted to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it only repels" },
              { id: "b", text: "Any non-magnetic material" },
              { id: "c", text: "The south pole of a magnet" },
              { id: "d", text: "The north pole of a magnet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Pole interaction", statement: "Opposite poles attract — compass north points to magnetic south." },
            ],
            steps: [
              { reasoning: "N attracts S — compass points north because Earth's magnetic south is there.", working: "N-S attract", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** South pole of a magnet",
            commonErrors: ["Choosing (b) — like poles repel."],
          },
        },
        {
          id: "cils-u7-mag-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The magnetic field of a bar magnet is strongest:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the poles" },
              { id: "b", text: "Outside only" },
              { id: "c", text: "Equally everywhere" },
              { id: "d", text: "In the middle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Field strength", statement: "Field lines closest together at poles = strongest field." },
            ],
            steps: [
              { reasoning: "Field concentrated at poles — strongest there.", working: "poles", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** At the poles",
            commonErrors: ["Choosing (c) — field varies; strongest at poles."],
          },
        },
        {
          id: "cils-u7-mag-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which material would NOT be attracted to a magnet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nickel" },
              { id: "b", text: "Iron" },
              { id: "c", text: "Copper" },
              { id: "d", text: "Steel" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnetic materials", statement: "Iron, steel, nickel, cobalt are magnetic; copper is not." },
            ],
            steps: [
              { reasoning: "Copper is non-magnetic.", working: "copper", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Copper",
            commonErrors: ["Choosing (d) — nickel IS magnetic."],
          },
        },
        {
          id: "cils-u7-mag-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many poles does a single bar magnet have? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Poles", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poles", statement: "Every magnet has a north and south pole." },
            ],
            steps: [
              { reasoning: "Two poles: N and S.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Answer = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u7-mag-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three bar magnets are placed together. How many magnetic poles are there in total? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Poles", answer: 6 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poles", statement: "Each magnet has 2 poles — 3 × 2 = 6." },
            ],
            steps: [
              { reasoning: "$3 \\times 2 = 6$ poles.", working: "3 × 2", marks: 1, markCode: "M" },
              { reasoning: "Six poles total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
          },
        },
        {
          id: "cils-u7-mag-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of these materials — iron, steel, aluminium, copper — how many are attracted to magnets? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Materials", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Magnetic materials", statement: "Iron and steel are magnetic; aluminium and copper are not." },
            ],
            steps: [
              { reasoning: "Iron + steel = 2 magnetic materials.", working: "Fe, steel", marks: 1, markCode: "M" },
              { reasoning: "Answer = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u7-mag-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A compass needle can align in how many distinct directions (north-pointing or south-pointing)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Directions", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Compass", statement: "Needle points along field line — either N or S end forward." },
            ],
            steps: [
              { reasoning: "Two orientations: north end forward or south end forward.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Answer = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u7-mag-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe a simple experiment to test whether an unknown object is magnetic, including what result would confirm it is.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Testing magnetism", statement: "Bring a known magnet near — attraction indicates magnetic material." },
            ],
            steps: [
              { reasoning: "Hold a known magnet near the object.", working: "magnet test", marks: 1, markCode: "M" },
              { reasoning: "If object is attracted, it contains magnetic material (iron/steel/nickel/cobalt).", working: "attraction", marks: 1, markCode: "M" },
              { reasoning: "Further test: see if it can pick up iron filings or deflect a compass.", working: "further test", marks: 1, markCode: "M" },
              { reasoning: "Clear method and interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnet attracts it → magnetic; also test with iron filings or compass.",
            commonErrors: ["Testing with non-magnetic objects only — need iron-based test."],
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
              { id: "b", text: "It's always weak" },
              { id: "c", text: "It's made of plastic" },
              { id: "d", text: "It has no poles" },
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
        {
          id: "cils-u7-elec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An electromagnet is made of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A battery alone" },
              { id: "b", text: "A permanent bar magnet" },
              { id: "c", text: "A coil of wire around an iron core" },
              { id: "d", text: "A copper rod" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electromagnet", statement: "Wire coil + iron core + electric current = temporary magnet." },
            ],
            steps: [
              { reasoning: "Coil of wire around iron core carries current.", working: "coil+core", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Coil of wire around iron core",
            commonErrors: ["Choosing (b) — that's a permanent magnet, not electromagnet."],
          },
        },
        {
          id: "cils-u7-elec-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the current to an electromagnet is switched off, the magnetism:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays the same" },
              { id: "b", text: "Changes polarity" },
              { id: "c", text: "Becomes stronger" },
              { id: "d", text: "Disappears — it is temporary" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electromagnet", statement: "Magnetism exists only while current flows." },
            ],
            steps: [
              { reasoning: "No current → no magnetic field → magnetism lost.", working: "lost", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Disappears",
            commonErrors: ["Choosing (b) — electromagnets are temporary by design."],
          },
        },
        {
          id: "cils-u7-elec-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change makes an electromagnet STRONGER?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reducing coil turns" },
              { id: "b", text: "Removing the iron core" },
              { id: "c", text: "Increasing the current" },
              { id: "d", text: "Using plastic wire" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strength factors", statement: "More current, more turns, iron core = stronger." },
            ],
            steps: [
              { reasoning: "Higher current → stronger field.", working: "current", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Increasing current",
            commonErrors: ["Choosing (b) — removing core weakens it."],
          },
        },
        {
          id: "cils-u7-elec-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The iron core in an electromagnet serves to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concentrate and amplify the magnetic field" },
              { id: "b", text: "Store electric charge" },
              { id: "c", text: "Reduce heat" },
              { id: "d", text: "Block the current" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Iron core", statement: "Iron concentrates magnetic field lines — much stronger magnet." },
            ],
            steps: [
              { reasoning: "Iron core amplifies field dramatically.", working: "amplify", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Concentrate/amplify field",
            commonErrors: ["Choosing (b) — core doesn't store charge."],
          },
        },
        {
          id: "cils-u7-elec-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is an electromagnet with an iron core stronger than one with just air inside the coil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron has more electrons" },
              { id: "b", text: "Iron conducts electricity better" },
              { id: "c", text: "Air blocks the field" },
              { id: "d", text: "Iron is easily magnetised — it concentrates the field lines" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ferromagnetism", statement: "Iron's domains align with field — amplifies it strongly." },
            ],
            steps: [
              { reasoning: "Iron magnetises easily → stronger overall field.", working: "domains", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Iron concentrates field lines",
            commonErrors: ["Choosing (b) — conductivity isn't the reason."],
          },
        },
        {
          id: "cils-u7-elec-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A scrapyard crane uses an electromagnet to lift cars. To release a car, the crane operator:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adds more turns" },
              { id: "b", text: "Switches off the current" },
              { id: "c", text: "Reverses the poles" },
              { id: "d", text: "Lifts higher" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Scrapyard crane", statement: "Switch off → magnetism lost → car drops." },
            ],
            steps: [
              { reasoning: "Current off = magnetism off = release.", working: "switch off", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Switches off current",
            commonErrors: ["Choosing (b) — reversing poles still attracts/repeals, doesn't release."],
          },
        },
        {
          id: "cils-u7-elec-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A relay uses an electromagnet to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Switch another circuit on or off remotely" },
              { id: "b", text: "Measure temperature" },
              { id: "c", text: "Generate electricity" },
              { id: "d", text: "Store energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Relay", statement: "Small current through electromagnet switches larger circuit." },
            ],
            steps: [
              { reasoning: "Relay = electrically operated switch.", working: "switch", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Switch circuits remotely",
            commonErrors: ["Choosing (b) — relay doesn't generate power."],
          },
        },
        {
          id: "cils-u7-elec-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many factors affect electromagnet strength: current, coil turns and core material? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Factors", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Strength factors", statement: "Current, turns and core — three factors." },
            ],
            steps: [
              { reasoning: "Count: current, turns, core.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u7-elec-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An electromagnet has 200 coil turns; an identical one has 100 turns with the same current and core. How many times stronger is the first? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Factor", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strength vs turns", statement: "Strength ∝ number of turns — double turns ≈ double strength." },
            ],
            steps: [
              { reasoning: "$200 \\div 100 = 2$.", working: "200 ÷ 100", marks: 1, markCode: "M" },
              { reasoning: "Approximately twice as strong.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u7-elec-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An electromagnet setup needs: wire coil, iron core, power supply and switch. How many components is that? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Components", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Electromagnet parts", statement: "Coil, core, power supply, switch — four components." },
            ],
            steps: [
              { reasoning: "Count the listed components.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Four components.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u7-elec-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The current through an electromagnet increases from $1\\ \\text{A}$ to $3\\ \\text{A}$. By what factor does the magnetic field strength increase (assuming linear)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Factor", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strength vs current", statement: "Field strength ∝ current — triple current ≈ triple strength." },
            ],
            steps: [
              { reasoning: "$3 \\div 1 = 3$.", working: "3 ÷ 1", marks: 1, markCode: "M" },
              { reasoning: "Three times stronger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u7-elec-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design an experiment to investigate how the number of coil turns affects electromagnet strength. Include method, measurement and expected result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Investigation", statement: "Control variables; vary turns; measure strength by paperclips attracted." },
            ],
            steps: [
              { reasoning: "Keep current, core and wire the same; wind coils with different turn counts.", working: "controls", marks: 1, markCode: "M" },
              { reasoning: "Switch on and count paperclips each electromagnet picks up.", working: "measure", marks: 1, markCode: "M" },
              { reasoning: "Repeat for reliability; record results.", working: "repeat", marks: 1, markCode: "M" },
              { reasoning: "Expect more turns → more paperclips (stronger).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vary turns, control current/core, count paperclips — more turns = stronger.",
            commonErrors: ["Changing current as well as turns — must control variables."],
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
              { id: "a", text: "Gravity" },
              { id: "b", text: "Current in magnetic field" },
              { id: "c", text: "Friction" },
              { id: "d", text: "Static electricity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motor", statement: "Current-carrying coil in magnetic field experiences force." },
            ],
            steps: [
              { reasoning: "Current + magnetic field = force = rotation.", working: "current+field", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Current in magnetic field",
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
        {
          id: "cils-u7-motor-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An electric motor converts which form of energy into movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic energy into electrical energy" },
              { id: "b", text: "Heat into light" },
              { id: "c", text: "Electrical energy into kinetic (rotational) energy" },
              { id: "d", text: "Chemical into nuclear" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motor", statement: "Electrical → mechanical (rotation) energy." },
            ],
            steps: [
              { reasoning: "Motor input = electricity; output = rotation.", working: "E→KE", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Electrical → kinetic",
            commonErrors: ["Choosing (b) — that's a generator."],
          },
        },
        {
          id: "cils-u7-motor-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a simple DC motor, the armature is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The power supply" },
              { id: "b", text: "The coil of wire that rotates" },
              { id: "c", text: "The casing" },
              { id: "d", text: "The stationary magnet" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Armature", statement: "The rotating coil carrying current." },
            ],
            steps: [
              { reasoning: "Armature = the current-carrying coil.", working: "coil", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The rotating coil",
            commonErrors: ["Choosing (b) — magnets are the field, not armature."],
          },
        },
        {
          id: "cils-u7-motor-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of the brushes in a motor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They maintain electrical contact with the rotating commutator" },
              { id: "b", text: "They reverse the current" },
              { id: "c", text: "They create the magnetic field" },
              { id: "d", text: "They cool the motor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Brushes", statement: "Sliding contacts that feed current to the commutator." },
            ],
            steps: [
              { reasoning: "Brushes = sliding electrical contacts.", working: "contacts", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Maintain contact with commutator",
            commonErrors: ["Choosing (c) — commutator reverses current, brushes just connect."],
          },
        },
        {
          id: "cils-u7-motor-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Without a commutator, a simple DC motor would:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce more torque" },
              { id: "b", text: "Not need a power supply" },
              { id: "c", text: "Oscillate or stop after half a turn" },
              { id: "d", text: "Spin faster" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Commutator", statement: "Without current reversal, force direction flips each half-turn → oscillation." },
            ],
            steps: [
              { reasoning: "Current must reverse each half-turn to keep same rotation direction.", working: "oscillate", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Oscillate/stop",
            commonErrors: ["Choosing (b) — no commutator means no continuous rotation."],
          },
        },
        {
          id: "cils-u7-motor-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "To make a DC motor spin faster, you could:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use a weaker magnet" },
              { id: "b", text: "Remove the brushes" },
              { id: "c", text: "Reduce the current" },
              { id: "d", text: "Increase the voltage/current or strengthen the magnetic field" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motor speed", statement: "More current/voltage or stronger field → faster rotation." },
            ],
            steps: [
              { reasoning: "Stronger current or field increases force/torque → speed.", working: "more force", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Increase voltage/current or field",
            commonErrors: ["Choosing (d) — less current = slower."],
          },
        },
        {
          id: "cils-u7-motor-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Fleming's left-hand rule is used to find:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The frequency of a wave" },
              { id: "b", text: "The voltage of a battery" },
              { id: "c", text: "The direction of the force on a current-carrying conductor in a magnetic field" },
              { id: "d", text: "The resistance of a wire" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fleming's left-hand rule", statement: "First finger = Field, seCond finger = Current, thuMb = Motion/force." },
            ],
            steps: [
              { reasoning: "Left-hand rule gives force direction in motors.", working: "force direction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Direction of force",
            commonErrors: ["Choosing (d) — not related to waves."],
          },
        },
        {
          id: "cils-u7-motor-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An electric generator differs from a motor because a generator:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Needs no magnetic field" },
              { id: "b", text: "Converts mechanical energy into electrical energy" },
              { id: "c", text: "Uses no moving parts" },
              { id: "d", text: "Converts electrical into mechanical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Generator vs motor", statement: "Motor: electrical → mechanical; generator: mechanical → electrical." },
            ],
            steps: [
              { reasoning: "Generator is the reverse energy conversion.", working: "mechanical→electrical", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mechanical → electrical",
            commonErrors: ["Choosing (b) — that's a motor."],
          },
        },
        {
          id: "cils-u7-motor-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A motor connected to a $12\\ \\text{V}$ supply draws $2\\ \\text{A}$. What is its electrical power input? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Power", answer: 24, unit: "W" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = V \\times I$" },
            ],
            steps: [
              { reasoning: "$P = 12 \\times 2$.", working: "12 × 2", marks: 1, markCode: "M" },
              { reasoning: "$24\\ \\text{W}$.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\ \\text{W}$",
          },
        },
        {
          id: "cils-u7-motor-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $60\\ \\text{W}$ motor runs for $1800\\ \\text{s}$. How much energy does it use? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 108000, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = P \\times t$" },
            ],
            steps: [
              { reasoning: "$E = 60 \\times 1800$.", working: "60 × 1800", marks: 1, markCode: "M" },
              { reasoning: "$108000\\ \\text{J}$.", working: "108000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$108000\\ \\text{J}$",
          },
        },
        {
          id: "cils-u7-motor-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a DC motor, the commutator and brushes together form the electrical contact system. How many of the listed components — armature, commutator, brushes, magnets, axle — are electrical contacts? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Contacts", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contacts", statement: "Commutator + brushes = electrical contact system." },
            ],
            steps: [
              { reasoning: "Commutator and brushes are the contacts — 2.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Answer = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u7-motor-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Motor A draws $2\\ \\text{A}$ at $6\\ \\text{V}$; motor B draws $4\\ \\text{A}$ at $6\\ \\text{V}$. How many times more power does B use? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Factor", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = VI$ — same V, double I = double P." },
            ],
            steps: [
              { reasoning: "A: $6 \\times 2 = 12\\ \\text{W}$; B: $6 \\times 4 = 24\\ \\text{W}$; ratio $24 \\div 12 = 2$.", working: "24 ÷ 12", marks: 1, markCode: "M" },
              { reasoning: "Twice the power.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u7-motor-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a simple DC motor needs a commutator and describe exactly what would happen to the rotation if it were removed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Commutator", statement: "Reverses current each half-turn so force direction stays consistent." },
            ],
            steps: [
              { reasoning: "Current-carrying coil in field experiences force — direction depends on current direction.", working: "force", marks: 1, markCode: "M" },
              { reasoning: "Commutator swaps contacts every half-turn → current reverses → force stays in same rotational sense.", working: "reverse", marks: 1, markCode: "M" },
              { reasoning: "Without it: after half turn force reverses → coil oscillates or stops at vertical position.", working: "oscillate", marks: 1, markCode: "M" },
              { reasoning: "Full mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Commutator reverses current each half-turn; without it the coil oscillates/stops.",
            commonErrors: ["Saying motor 'stops working' — it oscillates or stalls at one position."],
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
