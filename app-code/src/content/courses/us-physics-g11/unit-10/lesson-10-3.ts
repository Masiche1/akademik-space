import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "phys11-u10-lesson-10-3",
  code: "10-3",
  title: "Magnetism and Electromagnetic Waves",
  goal: "I CAN analyze magnetic fields, electromagnetic induction, and EM wave production.",
  standards: [
    "HS-PS2-5",
    "HS-PS4-3",
    "SEP: Developing and Using Models",
    "SEP: Using Mathematics and Computational Thinking",
  ],
  vocabulary: [
    { term: "Magnetic field", definition: "Region where magnetic force acts." },
    { term: "Magnetic flux", definition: "Total magnetic field through area." },
    {
      term: "Electromagnetic induction",
      definition: "Voltage induced by changing magnetic field.",
    },
    { term: "Faraday's law", definition: "EMF = -dΦ/dt." },
    { term: "Lenz's law", definition: "Induced current opposes change." },
    { term: "Electromagnetic wave", definition: "Oscillating E and B fields." },
    { term: "Transformer", definition: "Device that changes AC voltage." },
  ],
  concepts: [
    {
      id: "phys11-u10-magnetism",
      title: "Magnetic fields",
      skill: "Analyze magnetic fields and forces on charges.",
      lesson: {
        sections: [
          {
            heading: "Magnetic fields",
            body: "- Field lines: north → south outside magnet.\n- Magnetic force on moving charge: $F = qvB\\sin\\theta$.\n- Direction: right-hand rule.",
          },
          {
            heading: "Magnetic force",
            body: "- Only affects moving charges.\n- Always perpendicular to velocity.\n- Causes circular motion.",
          },
        ],
        keyFormulas: [
          { name: "Magnetic force", statement: "$F = qvB\\sin\\theta$" },
          { name: "Field lines", statement: "N → S outside" },
          { name: "Right-hand rule", statement: "Direction of force" },
        ],
        workedExample: {
          problem:
            "Charge +1 C moving at 10 m/s perpendicular to B = 0.5 T. Force?",
          solution: "$F = 1 \\times 10 \\times 0.5 \\times \\sin90° = 5$ N.",
        },
      },
      questions: [
        {
          id: "phys11-u10-mag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the direction of magnetic field lines outside a magnet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "S → N" },
              { id: "b", text: "N → S" },
              { id: "c", text: "Random" },
              { id: "d", text: "Circular" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Magnetic field",
                statement: "N → S outside magnet.",
              },
            ],
            steps: [
              {
                reasoning: "Field lines: N → S outside.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** N → S",
            commonErrors: ["S → N."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-mag-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Does magnetic field affect stationary charge?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Magnetic force",
                statement: "Only affects moving charges.",
              },
            ],
            steps: [
              {
                reasoning: "$F = qvB\\sin\\theta$; v=0 → F=0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stationary charge → no magnetic force.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: No.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — needs motion.",
            commonErrors: ["Yes."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "phys11-u10-mag-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does magnetic force cause circular motion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Magnetic force",
                statement: "Always perpendicular to velocity.",
              },
            ],
            steps: [
              {
                reasoning: "Force always perpendicular to velocity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Changes direction but not speed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Result: circular motion.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: perpendicular force → centripetal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Perpendicular force → circular motion.",
            commonErrors: ["Linear motion."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-mag-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Proton (q=1.6×10⁻¹⁹ C) moving at 10⁶ m/s perpendicular to B=0.5 T.",
          parts: [
            { label: "a", prompt: "Magnetic force?", marks: 3 },
            {
              label: "b",
              prompt: "Radius of circular path? (m=1.67×10⁻²⁷ kg)",
              marks: 4,
            },
            { label: "c", prompt: "Period of revolution?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnetic force",
                statement: "$F = qvB$; $r = mv/qB$; $T = 2\\pi m/qB$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F = 1.6×10^{-19} \\times 10^6 \\times 0.5 = 8×10^{-14}$ N.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 8×10⁻¹⁴ N.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "$r = mv/qB = (1.67×10^{-27})(10^6)/(1.6×10^{-19} \\times 0.5) = 1.67×10^{-21}/8×10^{-20} = 0.021$ m.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0.021 m.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "$T = 2\\pi r/v = 2\\pi \\times 0.021/10^6 = 1.3×10^{-7}$ s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 1.3×10⁻⁷ s.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 8×10⁻¹⁴N (b) 0.021m (c) 1.3×10⁻⁷s.",
            commonErrors: ["Wrong formulas."],
            examinerNote: "3+4+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-induction",
      title: "Electromagnetic induction",
      skill: "Apply Faraday's and Lenz's laws to induction problems.",
      lesson: {
        sections: [
          {
            heading: "Electromagnetic induction",
            body: "Changing magnetic field induces voltage.\n- **Faraday's law**: EMF = -dΦ/dt.\n- **Lenz's law**: induced current opposes change.",
          },
          {
            heading: "Applications",
            body: "- Generators: mechanical → electrical.\n- Transformers: voltage conversion.\n- Induction cooktops: changing magnetic field heats pot.",
          },
        ],
        keyFormulas: [
          { name: "Faraday", statement: "$EMF = -d\\Phi/dt$" },
          { name: "Lenz", statement: "Opposes change" },
          { name: "Flux", statement: "$\\Phi = BA\\cos\\theta$" },
        ],
        workedExample: {
          problem: "Magnet moved into coil → what happens?",
          solution: "Changing flux → induced EMF → current flows.",
        },
      },
      questions: [
        {
          id: "phys11-u10-ind-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What induces voltage in a circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant magnetic field" },
              { id: "b", text: "Changing magnetic field" },
              { id: "c", text: "Constant current" },
              { id: "d", text: "Static charge" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Induction",
                statement: "Changing flux → EMF.",
              },
            ],
            steps: [
              {
                reasoning: "Changing magnetic field induces voltage.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Changing magnetic field",
            commonErrors: ["Constant field."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-ind-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does Lenz's law state?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lenz's law",
                statement: "Induced current opposes change.",
              },
            ],
            steps: [
              {
                reasoning: "Induced current opposes flux change.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Conserves energy.", marks: 1, markCode: "R" },
              { reasoning: "Answer: oppose change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Induced current opposes change.",
            commonErrors: ["Enhances change."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-ind-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a transformer work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transformer",
                statement: "Mutual induction between coils.",
              },
            ],
            steps: [
              {
                reasoning: "AC in primary coil → changing flux.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Induces voltage in secondary coil.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Turns ratio determines voltage ratio.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: mutual induction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mutual induction between coils.",
            commonErrors: ["Direct connection."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-ind-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Coil: 100 turns, area 0.01 m², B changes from 0 to 0.5 T in 0.1 s.",
          parts: [
            { label: "a", prompt: "Initial flux?", marks: 2 },
            { label: "b", prompt: "Final flux?", marks: 2 },
            { label: "c", prompt: "Rate of change?", marks: 3 },
            { label: "d", prompt: "Induced EMF?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Faraday",
                statement: "$EMF = -N d\\Phi/dt$; $\\Phi = BA$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Phi_i = 0 \\times 0.01 = 0$ Wb.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$\\Phi_f = 0.5 \\times 0.01 = 0.005$ Wb.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$d\\Phi/dt = 0.005/0.1 = 0.05$ Wb/s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 0.05 Wb/s.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "$EMF = -100 \\times 0.05 = -5$ V.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 5 V (magnitude).",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 0 (b) 0.005 (c) 0.05 (d) 5V.",
            commonErrors: ["Forgetting N turns."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-em-waves",
      title: "Electromagnetic wave production",
      skill: "Understand how EM waves are generated and propagate.",
      lesson: {
        sections: [
          {
            heading: "EM wave production",
            body: "Oscillating electric field creates oscillating magnetic field and vice versa.\n- Propagates at c = 3×10⁸ m/s in vacuum.\n- No medium required.",
          },
          {
            heading: "EM spectrum generation",
            body: "Different sources produce different frequencies:\n- Radio: antennas.\n- Visible: atomic transitions.\n- X-ray: electron transitions/bremsstrahlung.\n- Gamma: nuclear decay.",
          },
        ],
        keyFormulas: [
          { name: "EM wave", statement: "Oscillating E + B fields" },
          { name: "Speed", statement: "$c = 3×10^8$ m/s" },
          { name: "Sources", statement: "Different for each region" },
        ],
        workedExample: {
          problem: "How are radio waves generated?",
          solution: "Oscillating electrons in antenna.",
        },
      },
      questions: [
        {
          id: "phys11-u10-emw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are electromagnetic waves made of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound waves" },
              { id: "b", text: "Oscillating E and B fields" },
              { id: "c", text: "Particles" },
              { id: "d", text: "Plasma" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "EM wave",
                statement: "Oscillating E + B fields.",
              },
            ],
            steps: [
              {
                reasoning: "EM waves = oscillating fields.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Oscillating E and B fields",
            commonErrors: ["Sound waves."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-emw-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Do EM waves need a medium?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM waves",
                statement: "No medium required.",
              },
            ],
            steps: [
              {
                reasoning: "EM waves are fields, not matter.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Travel through vacuum.", marks: 1, markCode: "R" },
              { reasoning: "Answer: No.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — travel through vacuum.",
            commonErrors: ["Yes."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-emw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How are different EM frequencies generated?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM sources",
                statement: "Different mechanisms for different frequencies.",
              },
            ],
            steps: [
              {
                reasoning: "Radio: antenna oscillations.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Visible: atomic transitions.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Gamma: nuclear decay.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: different mechanisms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Different mechanisms for different frequencies.",
            commonErrors: ["Same mechanism."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-emw-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "EM wave: λ = 500 nm, in vacuum.",
          parts: [
            { label: "a", prompt: "Frequency?", marks: 3 },
            {
              label: "b",
              prompt: "Energy per photon? (h = 6.63×10⁻³⁴)",
              marks: 3,
            },
            { label: "c", prompt: "Color?", marks: 2 },
            {
              label: "d",
              prompt: "If enters glass (n=1.5), what changes?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "EM wave",
                statement: "$v = f\\lambda$; $E = hf$.",
              },
            ],
            steps: [
              {
                reasoning: "$f = 3×10^8/(500×10^{-9}) = 6×10^{14}$ Hz.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 6×10¹⁴ Hz.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "$E = 6.63×10^{-34} \\times 6×10^{14} = 3.98×10^{-19}$ J.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 3.98×10⁻¹⁹ J.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "500 nm = green.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Speed decreases → λ decreases; frequency same.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 6×10¹⁴Hz (b) 3.98×10⁻¹⁹J (c) green (d) λ decreases, f same.",
            commonErrors: ["Frequency changes."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-capstone",
      title: "Electricity and magnetism capstone",
      skill: "Integrate all EM concepts in comprehensive problems.",
      lesson: {
        sections: [
          {
            heading: "EM integration",
            body: "1. Analyze charge distributions.\n2. Calculate fields and forces.\n3. Apply circuit laws.\n4. Consider magnetic effects.\n5. Connect to EM waves.",
          },
          {
            heading: "Real-world applications",
            body: "- Power generation/distribution.\n- Motors and generators.\n- Communication systems.\n- Medical imaging (MRI).",
          },
        ],
        keyFormulas: [
          {
            name: "Integration",
            statement: "Charge → field → circuit → magnetism → EM",
          },
          { name: "Applications", statement: "Technology + nature" },
        ],
        workedExample: {
          problem:
            "Complete analysis: charge → field → force → circuit → induction → EM wave.",
          solution: "Step-by-step through EM spectrum.",
        },
      },
      questions: [
        {
          id: "phys11-u10-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the relationship between electricity and magnetism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Separate phenomena" },
              { id: "b", text: "Unified in electromagnetism" },
              { id: "c", text: "Opposite forces" },
              { id: "d", text: "Same thing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "EM unification",
                statement: "Electricity and magnetism unified.",
              },
            ],
            steps: [
              {
                reasoning: "EM unified in electromagnetism.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Unified in electromagnetism",
            commonErrors: ["Separate."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-cap-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does an electric motor work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Motor",
                statement: "Magnetic force on current-carrying wire.",
              },
            ],
            steps: [
              {
                reasoning: "Current in magnetic field → force.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Force causes rotation.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: magnetic force → rotation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Magnetic force on current → rotation.",
            commonErrors: ["Electric only."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a generator produce electricity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Generator",
                statement: "Mechanical → electrical via induction.",
              },
            ],
            steps: [
              {
                reasoning: "Rotate coil in magnetic field.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Changing flux → induced EMF.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "AC or DC output.", marks: 1, markCode: "R" },
              { reasoning: "Answer: induction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mechanical → electrical via induction.",
            commonErrors: ["Battery."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-cap-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Comprehensive EM problem: generator produces 240V AC, 50 Hz.",
          parts: [
            { label: "a", prompt: "Wavelength of EM radiation?", marks: 3 },
            { label: "b", prompt: "How is AC generated?", marks: 3 },
            {
              label: "c",
              prompt: "Why is AC used for transmission?",
              marks: 2,
            },
            { label: "d", prompt: "How is voltage changed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "EM generation",
                statement: "$\\lambda = c/f$; induction; transformers.",
              },
            ],
            steps: [
              {
                reasoning: "$\\lambda = 3×10^8/50 = 6×10^6$ m.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 6×10⁶ m.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Coil rotates in magnetic field → changing flux → EMF.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Answer: induction.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "AC allows voltage transformation → high V transmission.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Transformers change voltage.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 6×10⁶m (b) induction (c) transformers (d) transformers.",
            commonErrors: ["Wrong wavelength."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
