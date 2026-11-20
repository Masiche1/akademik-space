import type { Lesson } from "../../../types.ts";

export const lessonp32: Lesson = {
  id: "ciep-u3-lesson-3-2",
  code: "3-2",
  title: "Kinetic and Potential Energy",
  goal: "I CAN calculate kinetic and potential energy and apply conservation of energy.",
  standards: ["0655 3.2"],
  vocabulary: [
    { term: "Kinetic energy (KE)", definition: "Energy of motion: KE = ½mv²." },
    { term: "Gravitational PE (GPE)", definition: "Energy from height: GPE = mgh." },
    { term: "Elastic PE", definition: "Energy stored in stretched/compressed objects (springs)." },
    { term: "Conservation of energy", definition: "Energy cannot be created/destroyed — only transferred." },
    { term: "g", definition: "9.8 m/s² — gravitational field strength." },
    { term: "h", definition: "Height above reference point (m)." },
    { term: "Work done", definition: "Energy transferred by force: W = Fd." },
    { term: "Power", definition: "Rate of energy transfer: P = W/t = E/t." },
  ],
  concepts: [
    {
      id: "ciep-u3-ke-gpe",
      title: "KE and GPE calculations",
      skill: "Calculate kinetic and gravitational potential energy.",
      lesson: {
        sections: [
          {
            heading: "Kinetic energy",
            body: "**KE = ½mv²** — depends on mass and speed squared.\n\n- Faster → much more KE (v²)\n- Units: joules (J)\n- Car at 30 m/s has 4× KE of car at 15 m/s (same mass)",
          },
          {
            heading: "Gravitational PE",
            body: "**GPE = mgh** — depends on mass, g and height.\n\n- Higher → more GPE\n- Units: joules (J)\n- Reference point arbitrary — usually ground",
          },
          {
            heading: "Energy transfers",
            body: "Object falling: GPE → KE (speed increases). Object thrown up: KE → GPE (slows). At top of throw: all GPE, zero KE momentarily.",
          },
        ],
        keyFormulas: [
          { name: "Kinetic energy", statement: "$KE = \\tfrac{1}{2}mv^2$" },
          { name: "Gravitational PE", statement: "$GPE = mgh$" },
        ],
        workedExample: {
          problem: "Calculate KE of 1000 kg car at 20 m/s.",
          solution: "KE = ½ × 1000 × 20² = ½ × 1000 × 400 = 200,000 J.",
        },
      },
      questions: [
        {
          id: "ciep-u3-ke-gpe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for kinetic energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "mv" }, { id: "b", text: "½mv²" }, { id: "c", text: "mgh" }, { id: "d", text: "mv²" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "KE", statement: "KE = ½mv²." }],
            steps: [{ reasoning: "Recall.", working: "KE = \\frac{1}{2}mv^2", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** ½mv²",
            commonErrors: ["Missing ½ factor."],
          },
        },
        {
          id: "ciep-u3-ke-gpe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate GPE of 2 kg mass at 5 m height. (g=9.8)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "GPE", statement: "GPE = mgh." }],
            steps: [
              { reasoning: "GPE = 2 × 9.8 × 5.", working: "2 \\times 9.8 \\times 5", marks: 1, markCode: "M" },
              { reasoning: "= 98 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "98 J",
            commonErrors: ["Using g=10 without noting."],
          },
        },
        {
          id: "ciep-u3-ke-gpe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate KE of 500 kg mass moving at 10 m/s.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "KE", statement: "KE = ½mv²." }],
            steps: [
              { reasoning: "KE = ½ × 500 × 10².", marks: 1, markCode: "M" },
              { reasoning: "= ½ × 500 × 100.", marks: 1, markCode: "M" },
              { reasoning: "= 25,000 J.", marks: 1, markCode: "A" },
              { reasoning: "Unit J.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "25,000 J (25 kJ)",
            commonErrors: ["Not squaring v."],
          },
        },
        {
          id: "ciep-u3-ke-gpe-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Calculate and compare KE and GPE.",
          parts: [
            { label: "a", prompt: "KE of 1000 kg at 30 m/s.", marks: 3 },
            { label: "b", prompt: "GPE of 1000 kg at 10 m.", marks: 3 },
            { label: "c", prompt: "Which is larger and why?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "KE/GPE", statement: "KE=½mv²; GPE=mgh." }],
            steps: [
              { part: "a", reasoning: "½×1000×900.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= 450,000 J.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "1000×9.8×10.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "= 98,000 J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "KE larger.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "v² makes KE grow fast.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 450 kJ (b) 98 kJ (c) KE larger—v² effect",
            commonErrors: ["In (c) not comparing magnitudes."],
          },
        },
      ],
    },
    {
      id: "ciep-u3-energy-conservation",
      title: "Energy conservation and transfers",
      skill: "Apply conservation of energy to falling objects and energy transfers.",
      lesson: {
        sections: [
          {
            heading: "Conservation",
            body: "Total energy stays constant — only transfers between stores.\n\nFalling object: GPE decreases as KE increases (ignoring air resistance).\n\nAt any point: KE + GPE = constant (mechanical energy).",
          },
          {
            heading: "Energy stores and transfers",
            body: "Stores: kinetic, gravitational PE, elastic, thermal, chemical, nuclear, sound, electrical.\n\nTransfers: mechanical work, heating, electrical current, radiation.",
          },
          {
            heading: "Efficiency",
            body: "Not all energy becomes useful — some dissipated as waste heat/sound. Efficiency = useful output/total input × 100%.",
          },
        ],
        keyFormulas: [
          { name: "KE+GPE", statement: "$KE + GPE = \\text{constant}$" },
          { name: "Efficiency", statement: "$\\eta = \\dfrac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A 2 kg mass falls from 10 m. Find speed at ground (g=9.8, ignore air).",
          solution: "GPE lost = mgh = 2×9.8×10 = 196 J = KE gained. ½mv²=196 → v²=196 → v=14 m/s.",
        },
      },
      questions: [
        {
          id: "ciep-u3-energy-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to GPE as an object falls?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increases" }, { id: "b", text: "Decreases, converting to KE" }, { id: "c", text: "Stays same" }, { id: "d", text: "Becomes zero instantly" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy conservation", statement: "GPE→KE on falling." }],
            steps: [{ reasoning: "Recall.", working: "GPE \\downarrow \\to KE \\uparrow", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Decreases, converting to KE",
            commonErrors: ["Energy destroyed — it transfers."],
          },
        },
        {
          id: "ciep-u3-energy-conservation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the law of conservation of energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Conservation", statement: "Energy not created/destroyed." }],
            steps: [
              { reasoning: "State law.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy cannot be created or destroyed — it can only be transferred from one store to another or dissipated.",
            commonErrors: ["Saying 'used up' — transferred."],
          },
        },
        {
          id: "ciep-u3-energy-conservation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 1 kg mass falls from 20 m. Find KE at ground. (g=9.8)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy conservation", statement: "KE = GPE lost = mgh." }],
            steps: [
              { reasoning: "GPE = 1 × 9.8 × 20 = 196 J.", marks: 1, markCode: "M" },
              { reasoning: "KE at bottom = 196 J.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
              { reasoning: "Unit J.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "196 J",
            commonErrors: ["Including initial KE — starts from rest."],
          },
        },
        {
          id: "ciep-u3-energy-conservation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain energy transfers in a falling object.",
          parts: [
            { label: "a", prompt: "Describe GPE→KE transfer.", marks: 3 },
            { label: "b", prompt: "State conservation principle.", marks: 3 },
            { label: "c", prompt: "Explain why real objects differ.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy", statement: "GPE→KE; conserved; air resistance dissipates." }],
            steps: [
              { part: "a", reasoning: "GPE decreases as falls.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "KE increases as speeds up.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Total constant.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy conserved.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Transfers only.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Air resistance→heat/sound.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Not all GPE→KE.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lower final speed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) GPE→KE (b) conserved (c) air resistance dissipates",
            commonErrors: ["In (c) ignoring air resistance."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u3-ke-gpe-notes",
      title: "KE, GPE and energy conservation — revision notes",
      summary: "KE=½mv², GPE=mgh, energy transfers, conservation.",
      sections: [
        {
          heading: "Key facts",
          body: "KE=½mv²; GPE=mgh. Falling: GPE→KE. Conservation: total constant. Air resistance dissipates energy as heat.",
        },
        {
          heading: "Exam technique",
          body: "- v² in KE makes speed very important.\n- GPE→KE when falling.\n- Real: not all energy useful.",
        },
      ],
    },
  ],
};
