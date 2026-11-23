import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "phys11-u8-lesson-8-2",
  code: "8-2",
  title: "Energy Conservation Applications",
  goal: "I CAN apply energy conservation to solve problems with friction and multiple energy forms.",
  standards: [
    "HS-PS3-1",
    "HS-PS3-2",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    { term: "Mechanical energy", definition: "KE + PE." },
    {
      term: "Non-conservative force",
      definition: "Force that dissipates energy (friction).",
    },
    { term: "Work done by friction", definition: "Energy lost to heat." },
    { term: "Total energy", definition: "All forms combined." },
    {
      term: "Energy dissipation",
      definition: "Conversion to unusable forms (heat).",
    },
    { term: "Efficiency", definition: "Useful output / total input." },
  ],
  concepts: [
    {
      id: "phys11-u8-mechanical",
      title: "Mechanical energy with friction",
      skill: "Apply energy conservation including friction losses.",
      lesson: {
        sections: [
          {
            heading: "Energy conservation with friction",
            body: "$KE_i + PE_i = KE_f + PE_f + W_{friction}$\n\nFriction converts mechanical energy to heat.",
          },
          {
            heading: "Work-energy with friction",
            body: "$W_{net} = \\Delta KE$\n$W_{applied} + W_{friction} = \\Delta KE$",
          },
        ],
        keyFormulas: [
          { name: "With friction", statement: "$E_i = E_f + W_f$" },
          { name: "Friction work", statement: "$W_f = f \\times d$" },
          { name: "Energy loss", statement: "Heat = friction work" },
        ],
        workedExample: {
          problem: "5 kg box slides 10 m, μ=0.2. Speed lost? (v₀=5 m/s)",
          solution:
            "$f = 0.2 \\times 49 = 9.8$ N; $W_f = 98$ J; $\\Delta KE = -98$ J.",
        },
      },
      questions: [
        {
          id: "phys11-u8-mech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to mechanical energy with friction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases" },
              { id: "b", text: "Decreases (converted to heat)" },
              { id: "c", text: "Stays same" },
              { id: "d", text: "Becomes zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Friction",
                statement: "Converts ME to heat.",
              },
            ],
            steps: [
              {
                reasoning: "Friction → heat → ME decreases.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Decreases — converted to heat",
            commonErrors: ["Stays same."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u8-mech-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ball rolls down incline with friction. What happens to total energy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy conservation",
                statement: "Total energy conserved; mechanical decreases.",
              },
            ],
            steps: [
              {
                reasoning: "ME decreases due to friction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Heat increases by same amount.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Total energy remains constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Total energy conserved; ME → heat.",
            commonErrors: ["Energy created."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u8-mech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Block slides 20 m on rough surface, μ=0.3. How much energy lost to friction? (m=10 kg)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Friction work",
                statement: "$W_f = \\mu mgd$",
              },
            ],
            steps: [
              {
                reasoning: "$f = 0.3 \\times 10 \\times 9.8 = 29.4$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$W_f = 29.4 \\times 20 = 588$ J.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Energy lost = 588 J.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 588 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "588 J.",
            commonErrors: ["Wrong friction formula."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "phys11-u8-mech-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Block 8 kg slides from 15 m height, μ=0.25, horizontal distance 20 m at bottom.",
          parts: [
            { label: "a", prompt: "Initial PE?", marks: 2 },
            { label: "b", prompt: "Friction work?", marks: 3 },
            { label: "c", prompt: "KE at bottom?", marks: 3 },
            { label: "d", prompt: "Speed at bottom?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy with friction",
                statement: "$E_i = KE_f + W_f$",
              },
            ],
            steps: [
              {
                reasoning: "$PE = 8 \\times 9.8 \\times 15 = 1176$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "$f = 0.25 \\times 8 \\times 9.8 = 19.6$ N; $W_f = 19.6 \\times 20 = 392$ J.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 392 J.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$KE_f = 1176 - 392 = 784$ J.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 784 J.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning:
                  "$v = \\sqrt{2 \\times 784/8} = \\sqrt{196} = 14$ m/s.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) 1176J (b) 392J (c) 784J (d) 14m/s.",
            commonErrors: ["Ignoring friction."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-efficiency",
      title: "Efficiency and energy loss",
      skill: "Calculate efficiency and analyze energy losses.",
      lesson: {
        sections: [
          {
            heading: "Efficiency",
            body: "$$\\eta = \\frac{E_{out}}{E_{in}} \\times 100\\%$$\n\nRatio of useful output to total input.",
          },
          {
            heading: "Energy losses",
            body: "- **Heat**: friction, resistance.\n- **Sound**: vibrations.\n- **Light**: radiation.\n- **Deformation**: permanent shape change.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\eta = E_{out}/E_{in}$" },
          { name: "Energy loss", statement: "$E_{lost} = E_{in} - E_{out}$" },
          { name: "Heat", statement: "Major loss in machines" },
        ],
        workedExample: {
          problem: "Engine: input 1000 J, output 750 J. Efficiency?",
          solution: "$\\eta = 750/1000 = 75\\%$.",
        },
      },
      questions: [
        {
          id: "phys11-u8-eff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is efficiency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Output/input" },
              { id: "b", text: "Input/output" },
              { id: "c", text: "Output×input" },
              { id: "d", text: "Input−output" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "$\\eta = E_{out}/E_{in}$.",
              },
            ],
            steps: [
              {
                reasoning: "Efficiency = output/input.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Output/input",
            commonErrors: ["Input/output."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u8-eff-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Machine: 800 J in, 600 J useful out. Efficiency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "η = Eout/Ein",
                statement: "η = 600/800",
              },
            ],
            steps: [
              { reasoning: "$\\eta = 600/800$.", marks: 1, markCode: "M" },
              { reasoning: "= 0.75 or 75%.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u8-eff-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't efficiency be 100%?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy loss",
                statement: "Some energy always lost to heat/sound.",
              },
            ],
            steps: [
              {
                reasoning: "Friction converts energy to heat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Sound and vibration losses.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Thermodynamics: can't convert all to useful work.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: energy always dissipated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Energy always lost to heat/sound.",
            commonErrors: ["Perfect machines."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u8-eff-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Electric motor: input 2000 W, output 1600 W, runs 5 min.",
          parts: [
            { label: "a", prompt: "Efficiency?", marks: 2 },
            { label: "b", prompt: "Energy input?", marks: 3 },
            { label: "c", prompt: "Energy output?", marks: 2 },
            { label: "d", prompt: "Energy lost?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "$\\eta = P_{out}/P_{in}$; $E = Pt$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\eta = 1600/2000 = 80\\%$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$E_{in} = 2000 \\times 300 = 600000$ J.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 600000 J.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$E_{out} = 1600 \\times 300 = 480000$ J.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$E_{lost} = 600000 - 480000 = 120000$ J.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 120000 J.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 80% (b) 600kJ (c) 480kJ (d) 120kJ.",
            commonErrors: ["Wrong time units."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-integrated",
      title: "Integrated energy problems",
      skill: "Solve complex energy problems combining multiple concepts.",
      lesson: {
        sections: [
          {
            heading: "Integration strategy",
            body: "1. Identify energy forms (KE, PE, heat).\n2. Apply conservation with losses.\n3. Calculate final state.\n4. Verify reasonableness.",
          },
          {
            heading: "Common combinations",
            body: "- Projectile + energy conservation.\n- Incline + friction.\n- Machines + efficiency.\n- Springs + collisions.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Multiple energy forms" },
          { name: "Verification", statement: "Check energy balance" },
        ],
        workedExample: {
          problem:
            "Ball thrown up → falls → hits ground → energy analysis at each point.",
          solution: "PE ↔ KE at each stage; total conserved.",
        },
      },
      questions: [
        {
          id: "phys11-u8-integ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the first step in energy problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Identify energy forms" },
              { id: "c", text: "Guess answer" },
              { id: "d", text: "Check units" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Problem solving",
                statement: "Identify energy forms first.",
              },
            ],
            steps: [
              {
                reasoning: "Identify energy forms before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Identify energy forms",
            commonErrors: ["Jumping to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u8-integ-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ball thrown up at 20 m/s. Max height? (g=10)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy conservation",
                statement: "$\\frac{1}{2}mv^2 = mgh$",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{2}(400) = 10h$ → $h = 20$ m.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 20 m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 m.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u8-integ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Car brakes from 30 m/s to 0 over 100 m. Energy dissipated? (m=1000 kg)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "KE",
                statement: "$KE = \\frac{1}{2}mv^2$",
              },
            ],
            steps: [
              {
                reasoning: "$KE = \\frac{1}{2}(1000)(900) = 450000$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All KE → heat via friction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Energy dissipated = 450000 J.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 450000 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "450000 J.",
            commonErrors: ["Not all KE lost."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u8-integ-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Roller coaster: car 500 kg, starts at 40 m, drops to 10 m, then climbs to 25 m.",
          parts: [
            { label: "a", prompt: "PE at start?", marks: 2 },
            { label: "b", prompt: "KE at 10 m?", marks: 3 },
            { label: "c", prompt: "Speed at 10 m?", marks: 2 },
            { label: "d", prompt: "PE at 25 m climb?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy conservation",
                statement: "PE ↔ KE at each point.",
              },
            ],
            steps: [
              {
                reasoning: "$PE = 500 \\times 9.8 \\times 40 = 196000$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "$PE = 500 \\times 9.8 \\times 10 = 49000$ J; $KE = 196000 - 49000 = 147000$ J.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 147000 J.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "$v = \\sqrt{2 \\times 147000/500} = \\sqrt{588} = 24.2$ m/s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$PE = 500 \\times 9.8 \\times 25 = 122500$ J.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 122500 J.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 196kJ (b) 147kJ (c) 24.2m/s (d) 122.5kJ.",
            commonErrors: ["Wrong reference point."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
