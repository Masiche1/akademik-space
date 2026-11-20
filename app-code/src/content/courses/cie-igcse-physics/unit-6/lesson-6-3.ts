import type { Lesson } from "../../../types.ts";

export const lessonp63: Lesson = {
  id: "ciep-u6-lesson-6-3",
  code: "6-3",
  title: "Magnetism and Electromagnetism",
  goal: "I CAN describe magnetic fields, electromagnets and electromagnetic induction.",
  standards: ["0655 6.3"],
  vocabulary: [
    { term: "Magnetic field", definition: "Region around magnet where force acts on other magnets." },
    { term: "Field lines", definition: "Lines showing field direction — emerge N, enter S." },
    { term: "Electromagnet", definition: "Magnet made by current through coil." },
    { term: "Solenoid", definition: "Coil of wire producing uniform field." },
    { term: "Fleming's left-hand rule", definition: "Motor effect: First finger Field, seCond Current, Thumb Motion." },
    { term: "Fleming's right-hand rule", definition: "Generator: First finger Field, thuMb Motion, Center Current." },
    { term: "Electromagnetic induction", definition: "EMF induced by changing magnetic field." },
    { term: "Transformer", definition: "Device changing AC voltage using induction." },
  ],
  concepts: [
    {
      id: "ciep-u6-magnetic-fields",
      title: "Magnetic fields and electromagnets",
      skill: "Describe magnetic fields, electromagnets and motor effect.",
      lesson: {
        sections: [
          {
            heading: "Magnetic fields",
            body: "Field lines emerge from north pole, enter south.\n\n- Like poles repel, unlike attract\n- Field strongest at poles\n- Earth has magnetic field — compass needle aligns",
          },
          {
            heading: "Electromagnets",
            body: "Current through coil → magnetic field.\n\n- Stronger: more turns, more current, iron core\n- Solenoid: uniform field inside\n- Used in: cranes, relays, doorbells, MRI",
          },
          {
            heading: "Motor effect",
            body: "Current-carrying wire in magnetic field experiences force.\n\n**Fleming's left-hand rule**: First finger=Field, seCond finger=Current, Thumb=Motion (force).\n\nUsed in electric motors.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How to make an electromagnet stronger?",
          solution: "Increase current, add more coil turns, or insert iron core.",
        },
      },
      questions: [
        {
          id: "ciep-u6-magnetic-fields-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens between like magnetic poles?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Attract" }, { id: "b", text: "Repel" }, { id: "c", text: "Nothing" }, { id: "d", text: "Merge" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Magnetism", statement: "Like repel." }],
            steps: [{ reasoning: "Recall.", working: "\\text{like repel}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Repel",
            commonErrors: ["Confusing with unlike poles."],
          },
        },
        {
          id: "ciep-u6-magnetic-fields-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways to strengthen an electromagnet.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Electromagnet", statement: "More current/turns/core." }],
            steps: [
              { reasoning: "Any two valid.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increase current, increase number of coil turns, or add iron core.",
            commonErrors: ["Only one factor."],
          },
        },
        {
          id: "ciep-u6-magnetic-fields-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Fleming's left-hand rule for motor effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Fleming", statement: "First=Field, seCond=Current, Thumb=Motion." }],
            steps: [
              { reasoning: "First finger=Field.", marks: 1, markCode: "M" },
              { reasoning: "seCond=Current.", marks: 1, markCode: "M" },
              { reasoning: "Thumb=Motion/force.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First finger points in Field direction, seCond finger in Current direction — Thumb shows Motion/force direction.",
            commonErrors: ["Confusing with right-hand rule."],
          },
        },
        {
          id: "ciep-u6-magnetic-fields-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe magnetism and electromagnets.",
          parts: [
            { label: "a", prompt: "Magnetic field properties.", marks: 3 },
            { label: "b", prompt: "Electromagnet construction.", marks: 3 },
            { label: "c", prompt: "Motor effect and use.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Magnetism", statement: "Field lines; electromagnet=current+coil; motor effect." }],
            steps: [
              { part: "a", reasoning: "Field lines N→S.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Like repel unlike attract.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Current through coil.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Iron core optional.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strengthening factors.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Force on current wire.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fleming's rule.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Electric motors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) field N→S (b) coil+current+core (c) motor effect",
            commonErrors: ["In (c) wrong hand rule."],
          },
        },
      ],
    },
    {
      id: "ciep-u6-induction",
      title: "Electromagnetic induction",
      skill: "Explain induction and transformers.",
      lesson: {
        sections: [
          {
            heading: "Induction",
            body: "Changing magnetic field induces EMF in coil.\n\n- Faraday: relative motion or changing current\n- Lenz: induced current opposes change\n- EMF only when flux **changes**",
          },
          {
            heading: "Generator",
            body: "Coil rotating in magnetic field → AC output.\n\nFleming's right-hand rule: First=Field, thuMb=Motion, Center=Current.",
          },
          {
            heading: "Transformer",
            body: "Changes AC voltage. Vp/Vs = Np/Ns.\n\n- Step-up: more secondary turns → higher V\n- Step-down: fewer turns → lower V\n- Power conserved (ideal): VpIp = VsIs",
          },
        ],
        keyFormulas: [
          { name: "Transformer", statement: "$\\dfrac{V_p}{V_s} = \\dfrac{N_p}{N_s}$" },
        ],
        workedExample: {
          problem: "Transformer: primary 1000 turns at 230V, secondary 100 turns. Secondary voltage?",
          solution: "Vs = 230 × (100/1000) = 23 V (step-down).",
        },
      },
      questions: [
        {
          id: "ciep-u6-induction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When is EMF induced in a coil?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Constant field" }, { id: "b", text: "Changing magnetic field" }, { id: "c", text: "DC current" }, { id: "d", text: "No field" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Induction", statement: "Changing flux induces EMF." }],
            steps: [{ reasoning: "Recall.", working: "\\Delta B \\to EMF", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Changing magnetic field",
            commonErrors: ["Static field induces nothing."],
          },
        },
        {
          id: "ciep-u6-induction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a step-up transformer do?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Transformer", statement: "Increases voltage." }],
            steps: [
              { reasoning: "More secondary turns→higher V.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increases voltage — secondary has more turns than primary.",
            commonErrors: ["Reversed step-up/step-down."],
          },
        },
        {
          id: "ciep-u6-induction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A transformer has 500 primary turns, 2000 secondary turns, primary voltage 240V. Find secondary voltage.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Transformer", statement: "Vs = Vp × Ns/Np." }],
            steps: [
              { reasoning: "Vs = 240 × 2000/500.", marks: 1, markCode: "M" },
              { reasoning: "= 240 × 4 = 960 V.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
              { reasoning: "Unit V.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "960 V",
            commonErrors: ["Inverting turn ratio."],
          },
        },
        {
          id: "ciep-u6-induction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain electromagnetic induction and transformers.",
          parts: [
            { label: "a", prompt: "When is EMF induced?", marks: 3 },
            { label: "b", prompt: "Describe generator.", marks: 3 },
            { label: "c", prompt: "Transformer principle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Induction", statement: "Changing flux→EMF; transformer Vp/Vs=Np/Ns." }],
            steps: [
              { part: "a", reasoning: "Changing magnetic field.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "EMF proportional to rate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Coil rotates in field.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "AC output.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vp/Vs=Np/Ns.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Step-up/down.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) changing flux (b) rotating coil→AC (c) V∝N",
            commonErrors: ["In (c) wrong ratio direction."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u6-magnetic-fields-notes",
      title: "Magnetism and electromagnetism — revision notes",
      summary: "Fields, electromagnets, motor effect, induction, transformers.",
      sections: [
        {
          heading: "Key facts",
          body: "Field lines N→S. Like repel. Electromagnet=coil+current. Left-hand=motor; right-hand=generator. Transformer: V∝N.",
        },
        {
          heading: "Exam technique",
          body: "- EMF only when flux changes.\n- Step-up: Ns>Np.\n- AC needed for transformers.",
        },
      ],
    },
  ],
};
