import type { Lesson } from "../../../types.ts";

export const lessonp33: Lesson = {
  id: "ciep-u3-lesson-3-3",
  code: "3-3",
  title: "Work, Power and Efficiency",
  goal: "I CAN calculate work done, power and efficiency of energy transfers.",
  standards: ["0655 3.3"],
  vocabulary: [
    { term: "Work done", definition: "Energy transferred by force: W = Fd (force × distance)." },
    { term: "Power", definition: "Rate of doing work/energy transfer: P = W/t = Fv." },
    { term: "Efficiency", definition: "Useful output/total input × 100%." },
    { term: "Joule (J)", definition: "SI unit of energy/work: 1 J = 1 N m." },
    { term: "Watt (W)", definition: "SI unit of power: 1 W = 1 J/s." },
    { term: "Useful energy", definition: "Energy in desired form/output." },
    { term: "Wasted energy", definition: "Energy dissipated as heat/sound — not useful." },
    { term: "kWh", definition: "Kilowatt-hour = 3.6 MJ — electricity billing unit." },
  ],
  concepts: [
    {
      id: "ciep-u3-work-power",
      title: "Work and power calculations",
      skill: "Calculate work done, power and relate to energy.",
      lesson: {
        sections: [
          {
            heading: "Work done",
            body: "**W = Fd** — work = force × distance moved in force direction.\n\n- Units: joules (J) = N m\n- No distance → no work even if force applied\n- Lifting: work = mgh (force × height)",
          },
          {
            heading: "Power",
            body: "**P = W/t** — power = work/time.\n\nAlso: P = Fv (force × velocity).\n\n- Units: watts (W) = J/s\n- 1 kW = 1000 W; 1 MW = 10⁶ W",
          },
          {
            heading: "kWh",
            body: "1 kWh = 1000 W × 3600 s = 3.6 MJ.\n\nElectricity bills in kWh — a 2 kW heater for 1 hour = 2 kWh.",
          },
        ],
        keyFormulas: [
          { name: "Work", statement: "$W = Fd$" },
          { name: "Power", statement: "$P = \\dfrac{W}{t} = Fv$" },
          { name: "kWh", statement: "$1\\ \\text{kWh} = 3.6\\ \\text{MJ}$" },
        ],
        workedExample: {
          problem: "A 50 N force moves an object 10 m. Work done?",
          solution: "W = Fd = 50 × 10 = 500 J.",
        },
      },
      questions: [
        {
          id: "ciep-u3-work-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for work done?",
          response: { type: "mcq", choices: [
            { id: "a", text: "W = Ft" }, { id: "b", text: "W = Fd" }, { id: "c", text: "W = Fv" }, { id: "d", text: "W = mv" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Work", statement: "W = Fd." }],
            steps: [{ reasoning: "Recall.", working: "W = Fd", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** W = Fd",
            commonErrors: ["Confusing with power P=W/t."],
          },
        },
        {
          id: "ciep-u3-work-power-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate power if 600 J of work is done in 30 s.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Power", statement: "P = W/t." }],
            steps: [
              { reasoning: "P = 600/30.", working: "P = \\frac{600}{30}", marks: 1, markCode: "M" },
              { reasoning: "= 20 W.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 W",
            commonErrors: ["Inverting W/t."],
          },
        },
        {
          id: "ciep-u3-work-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A crane lifts 500 kg through 20 m in 50 s. Calculate power. (g=9.8)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Power", statement: "W=mgh; P=W/t." }],
            steps: [
              { reasoning: "W = 500 × 9.8 × 20 = 98,000 J.", marks: 1, markCode: "M" },
              { reasoning: "P = 98,000/50.", marks: 1, markCode: "M" },
              { reasoning: "= 1960 W.", marks: 1, markCode: "A" },
              { reasoning: "≈ 2 kW.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1960 W (≈ 2 kW)",
            commonErrors: ["Forgetting g in weight."],
          },
        },
        {
          id: "ciep-u3-work-power-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Calculate work and power in a lifting scenario.",
          parts: [
            { label: "a", prompt: "Work done lifting 10 kg through 5 m.", marks: 3 },
            { label: "b", prompt: "Power if done in 4 s.", marks: 3 },
            { label: "c", prompt: "Energy in kWh for 1 kW for 3 hours.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Work/power", statement: "W=Fd=mgh; P=W/t; kWh=W×h." }],
            steps: [
              { part: "a", reasoning: "W = 10×9.8×5 = 490 J.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "P = 490/4.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "= 122.5 W.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "1 kW × 3 h = 3 kWh.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "= 10.8 MJ.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 490 J (b) 122.5 W (c) 3 kWh = 10.8 MJ",
            commonErrors: ["In (c) forgetting kWh = kW×hours."],
          },
        },
      ],
    },
    {
      id: "ciep-u3-efficiency",
      title: "Efficiency of energy transfers",
      skill: "Calculate efficiency and describe energy dissipation.",
      lesson: {
        sections: [
          {
            heading: "Efficiency",
            body: "**η = useful output / total input × 100%**\n\nNo machine is 100% efficient — some energy always wasted as heat/sound/friction.",
          },
          {
            heading: "Energy dissipation",
            body: "Wasted energy ends as thermal energy in surroundings — cannot be fully recovered. This is why perpetual motion impossible.",
          },
          {
            heading: "Improving efficiency",
            body: "- Reduce friction (lubricants)\n- Insulate to reduce heat loss\n- Streamline to reduce drag\n- Use better materials",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\eta = \\dfrac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A motor uses 500 J to produce 400 J useful work. Efficiency?",
          solution: "η = 400/500 × 100% = 80%.",
        },
      },
      questions: [
        {
          id: "ciep-u3-efficiency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is efficiency?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Total energy used" }, { id: "b", text: "Useful output ÷ total input × 100%" }, { id: "c", text: "Speed of machine" }, { id: "d", text: "Power output" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "Useful/total ×100%." }],
            steps: [{ reasoning: "Recall.", working: "\\eta = \\frac{\\text{useful}}{\\text{total}}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Useful output ÷ total input × 100%",
            commonErrors: ["Using power not energy."],
          },
        },
        {
          id: "ciep-u3-efficiency-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device uses 800 J input to give 600 J useful output. Calculate efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "η = useful/total ×100%." }],
            steps: [
              { reasoning: "η = 600/800 × 100.", working: "\\frac{600}{800} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "= 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Inverting ratio."],
          },
        },
        {
          id: "ciep-u3-efficiency-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can no machine be 100% efficient?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Efficiency", statement: "Energy dissipated as heat/sound." }],
            steps: [
              { reasoning: "Friction generates heat.", marks: 1, markCode: "M" },
              { reasoning: "Some energy always wasted.", marks: 1, markCode: "M" },
              { reasoning: "Cannot recover all.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friction, air resistance and electrical resistance dissipate some energy as heat/sound — this energy cannot be fully recovered, so efficiency is always less than 100%.",
            commonErrors: ["Saying 'machines are imperfect' — it's physics."],
          },
        },
        {
          id: "ciep-u3-efficiency-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain efficiency of energy transfers.",
          parts: [
            { label: "a", prompt: "Define efficiency.", marks: 2 },
            { label: "b", prompt: "Calculate example.", marks: 3 },
            { label: "c", prompt: "Explain why <100% and improvement.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Efficiency", statement: "Useful/total; always <100% due to dissipation." }],
            steps: [
              { part: "a", reasoning: "Useful output/total input.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "×100%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example calc.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct %.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Heat/sound wasted.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cannot recover.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reduce friction/insulate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) useful/total×100% (b) example (c) dissipation<100%, reduce friction",
            commonErrors: ["In (c) not explaining physically."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u3-work-efficiency-notes",
      title: "Work, power and efficiency — revision notes",
      summary: "W=Fd, P=W/t=Fv, efficiency %, kWh.",
      sections: [
        {
          heading: "Key facts",
          body: "W=Fd (J=N m). P=W/t (W=J/s). η=useful/total×100%. 1 kWh=3.6 MJ. No machine 100% efficient.",
        },
        {
          heading: "Exam technique",
          body: "- Lifting: W=mgh.\n- P=Fv useful for vehicles.\n- Efficiency <100% always.",
        },
      ],
    },
  ],
};
