import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "phys11-u8-lesson-8-1",
  code: "8-1",
  title: "Work, Power, and Kinetic Energy",
  goal: "I CAN calculate work, power, and kinetic energy in various situations.",
  standards: [
    "HS-PS3-1",
    "HS-PS3-2",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    { term: "Work", definition: "Force × displacement in direction of force." },
    { term: "Power", definition: "Rate of doing work: P = W/t." },
    { term: "Kinetic energy", definition: "Energy of motion: KE = ½mv²." },
    { term: "Joule", definition: "Unit of energy/work: 1 J = 1 N·m." },
    { term: "Watt", definition: "Unit of power: 1 W = 1 J/s." },
    {
      term: "Work-energy theorem",
      definition: "Net work = change in kinetic energy.",
    },
  ],
  concepts: [
    {
      id: "phys11-u8-work",
      title: "Work and power",
      skill: "Calculate work and power in various situations.",
      lesson: {
        sections: [
          {
            heading: "Work",
            body: "$$W = Fd\\cos\\theta$$\n\nForce × displacement × cos(angle). Only component in direction of displacement counts.",
          },
          {
            heading: "Power",
            body: "$$P = \\frac{W}{t} = Fv$$\n\nRate of doing work. Units: watts (J/s).",
          },
          {
            heading: "Special cases",
            body: "- Force parallel to displacement: W = Fd.\n- Force perpendicular: W = 0 (e.g., normal force).\n- Force at angle: W = Fd cos θ.",
          },
        ],
        keyFormulas: [
          { name: "Work", statement: "$W = Fd\\cos\\theta$" },
          { name: "Power", statement: "$P = W/t = Fv$" },
          { name: "Joule", statement: "1 J = 1 N·m" },
        ],
        workedExample: {
          problem: "50 N force pushes box 10 m horizontally. Work?",
          solution: "$W = 50 \\times 10 \\times \\cos0° = 500$ J.",
        },
      },
      questions: [
        {
          id: "phys11-u8-work-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force × time" },
              { id: "b", text: "Force × displacement" },
              { id: "c", text: "Mass × velocity" },
              { id: "d", text: "Energy per second" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Work", statement: "W = Fd cos θ." },
            ],
            steps: [
              {
                reasoning: "Work = force × displacement.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Force × displacement",
            commonErrors: ["Force × time."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u8-work-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "100 N force pushes box 5 m at 30° above horizontal. Work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "W = Fd cos θ",
                statement: "W = 100×5×cos30°",
              },
            ],
            steps: [
              {
                reasoning: "$W = 100 \\times 5 \\times \\cos30°$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 500 × 0.866 = 433 J.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 433 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "433 J.",
            commonErrors: ["Ignoring angle."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u8-work-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is no work done when carrying a bag horizontally at constant velocity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Work",
                statement: "W = Fd cos θ; θ = 90° → W = 0.",
              },
            ],
            steps: [
              {
                reasoning: "Force is upward (supporting weight).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Displacement is horizontal.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Angle between force and displacement = 90°.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "cos90° = 0 → W = 0.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Force perpendicular to displacement → W = 0.",
            commonErrors: ["Force × distance only."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u8-work-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Crane lifts 500 kg load 20 m in 10 s.",
          parts: [
            { label: "a", prompt: "Work done?", marks: 3 },
            { label: "b", prompt: "Power?", marks: 3 },
            { label: "c", prompt: "If time halves, new power?", marks: 2 },
            { label: "d", prompt: "Energy gained?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Work/Potential energy",
                statement: "$W = mgh$; $P = W/t$",
              },
            ],
            steps: [
              {
                reasoning: "$W = 500 \\times 9.8 \\times 20 = 98000$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 98000 J.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$P = 98000/10 = 9800$ W.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 9800 W.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "P = 98000/5 = 19600 W.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "GPE gained = 98000 J.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) 98000J (b) 9800W (c) 19600W (d) 98000J.",
            commonErrors: ["Wrong formula."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-kinetic",
      title: "Kinetic energy",
      skill: "Calculate and analyze kinetic energy.",
      lesson: {
        sections: [
          {
            heading: "Kinetic energy",
            body: "$$KE = \\frac{1}{2}mv^2$$\n\nEnergy of motion. Units: joules.",
          },
          {
            heading: "Kinetic energy relationships",
            body: "- Double mass → double KE.\n- Double speed → quadruple KE.\n- KE always positive.",
          },
          {
            heading: "Work-energy theorem",
            body: "$W_{net} = \\Delta KE = KE_f - KE_i$\n\nNet work changes kinetic energy.",
          },
        ],
        keyFormulas: [
          { name: "KE", statement: "$KE = \\frac{1}{2}mv^2$" },
          { name: "Work-energy", statement: "$W_{net} = \\Delta KE$" },
          { name: "v² relationship", statement: "KE ∝ v²" },
        ],
        workedExample: {
          problem: "10 kg object at 5 m/s. Kinetic energy?",
          solution: "$KE = \\frac{1}{2}(10)(25) = 125$ J.",
        },
      },
      questions: [
        {
          id: "phys11-u8-ke-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is kinetic energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "½mv" },
              { id: "b", text: "½mv²" },
              { id: "c", text: "mv²" },
              { id: "d", text: "mgh" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "KE",
                statement: "$KE = \\frac{1}{2}mv^2$.",
              },
            ],
            steps: [{ reasoning: "KE = ½mv².", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** ½mv²",
            commonErrors: ["Wrong formula."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u8-ke-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "If speed doubles, what happens to KE?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "KE ∝ v²",
                statement: "KE quadruples.",
              },
            ],
            steps: [
              { reasoning: "$KE \\propto v^2$.", marks: 1, markCode: "R" },
              {
                reasoning: "Double v → 2² = 4 → 4× KE.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: quadruples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quadruples — KE ∝ v².",
            commonErrors: ["Doubles."],
            examinerNote: "R1, M1, A1.",
          },
        },
        {
          id: "phys11-u8-ke-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Car 1000 kg at 30 m/s vs 20 m/s. KE ratio?",
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
                reasoning: "$KE_1 = \\frac{1}{2}(1000)(900) = 450000$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$KE_2 = \\frac{1}{2}(1000)(400) = 200000$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio = 450000/200000 = 2.25.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2.25:1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.25:1.",
            commonErrors: ["1.5:1."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "phys11-u8-ke-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Object 5 kg accelerates from 2 m/s to 8 m/s over 10 m.",
          parts: [
            { label: "a", prompt: "KE before?", marks: 2 },
            { label: "b", prompt: "KE after?", marks: 2 },
            { label: "c", prompt: "Change in KE?", marks: 2 },
            { label: "d", prompt: "Average force?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "KE and work-energy",
                statement: "$KE = \\frac{1}{2}mv^2$; $W = \\Delta KE$.",
              },
            ],
            steps: [
              {
                reasoning: "$KE_i = \\frac{1}{2}(5)(4) = 10$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$KE_f = \\frac{1}{2}(5)(64) = 160$ J.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$\\Delta KE = 160 - 10 = 150$ J.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$F = W/d = 150/10 = 15$ N.",
                marks: 3,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 15 N.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 10J (b) 160J (c) 150J (d) 15N.",
            commonErrors: ["Wrong KE formula."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-potential",
      title: "Potential energy",
      skill: "Calculate gravitational and elastic potential energy.",
      lesson: {
        sections: [
          {
            heading: "Gravitational potential energy",
            body: "$$PE = mgh$$\n\nEnergy due to height. Reference point arbitrary.",
          },
          {
            heading: "Elastic potential energy",
            body: "$$PE = \\frac{1}{2}kx^2$$\n\nEnergy stored in spring/compressed object.",
          },
          {
            heading: "Conservation of energy",
            body: "$KE_i + PE_i = KE_f + PE_f$ (no friction)\n\nEnergy transforms but total conserved.",
          },
        ],
        keyFormulas: [
          { name: "GPE", statement: "$PE = mgh$" },
          { name: "Elastic PE", statement: "$PE = \\frac{1}{2}kx^2$" },
          { name: "Conservation", statement: "$KE + PE = constant$" },
        ],
        workedExample: {
          problem: "5 kg object at 10 m height. GPE?",
          solution: "$PE = 5 \\times 9.8 \\times 10 = 490$ J.",
        },
      },
      questions: [
        {
          id: "phys11-u8-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is gravitational potential energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mgh" },
              { id: "b", text: "½mv²" },
              { id: "c", text: "Fd" },
              { id: "d", text: "W/t" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "GPE", statement: "$PE = mgh$." },
            ],
            steps: [{ reasoning: "GPE = mgh.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** mgh",
            commonErrors: ["Wrong formula."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u8-pe-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Object falls from 20 m to 10 m. Change in GPE? (m=5 kg)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ΔPE",
                statement: "$\\Delta PE = mg\\Delta h$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta PE = 5 \\times 9.8 \\times 10 = 490$ J.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Decreased by 490 J.", marks: 1, markCode: "R" },
              { reasoning: "Answer: −490 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "−490 J (decreased).",
            commonErrors: ["Wrong sign."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "phys11-u8-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Ball dropped from 10 m. Speed at bottom? (g=10, neglect air resistance)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy conservation",
                statement: "mgh = ½mv².",
              },
            ],
            steps: [
              {
                reasoning: "$mgh = \\frac{1}{2}mv^2$ → $v = \\sqrt{2gh}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$v = \\sqrt{2 \\times 10 \\times 10} = \\sqrt{200} = 14.1$ m/s.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mass cancels.", marks: 1, markCode: "R" },
              { reasoning: "Answer: 14.1 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14.1 m/s.",
            commonErrors: ["Using mass."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u8-pe-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Pendulum: bob 0.5 kg, released from 2 m height, swings to lowest point.",
          parts: [
            { label: "a", prompt: "GPE at top?", marks: 2 },
            { label: "b", prompt: "KE at bottom?", marks: 3 },
            { label: "c", prompt: "Speed at bottom?", marks: 3 },
            { label: "d", prompt: "GPE at bottom?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy conservation",
                statement: "PE converts to KE.",
              },
            ],
            steps: [
              {
                reasoning: "$PE = 0.5 \\times 9.8 \\times 2 = 9.8$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "At bottom: PE=0, KE=9.8 J.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 9.8 J.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "$v = \\sqrt{2KE/m} = \\sqrt{2 \\times 9.8/0.5} = \\sqrt{39.2} = 6.26$ m/s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 6.26 m/s.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "$PE = mgh = 0.5 \\times 9.8 \\times 0 = 0$ J.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) 9.8J (b) 9.8J (c) 6.26m/s (d) 0J.",
            commonErrors: ["PE not zero at bottom."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-conservation",
      title: "Conservation of energy",
      skill: "Apply energy conservation to solve problems.",
      lesson: {
        sections: [
          {
            heading: "Energy conservation",
            body: "$KE_i + PE_i + W_{friction} = KE_f + PE_f$\n\nWithout friction: $KE_i + PE_i = KE_f + PE_f$",
          },
          {
            heading: "Energy transformations",
            body: "- Falling: PE → KE.\n- Pendulum: PE ↔ KE.\n- Roller coaster: PE ↔ KE + heat.\n- Springs: elastic PE ↔ KE.",
          },
        ],
        keyFormulas: [
          { name: "Conservation", statement: "$E_{total} = constant$" },
          { name: "With friction", statement: "$E_f = E_i - W_{friction}$" },
          { name: "Transformations", statement: "PE ↔ KE" },
        ],
        workedExample: {
          problem: "Ball at 15 m falls to 5 m. Speed at 5 m? (g=10)",
          solution: "$v = \\sqrt{2g(15-5)} = \\sqrt{200} = 14.1$ m/s.",
        },
      },
      questions: [
        {
          id: "phys11-u8-cons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is conserved in energy problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic energy only" },
              { id: "b", text: "Potential energy only" },
              { id: "c", text: "Total mechanical energy" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conservation",
                statement: "Total energy conserved (no friction).",
              },
            ],
            steps: [
              {
                reasoning: "Total mechanical energy conserved.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Total mechanical energy",
            commonErrors: ["KE only."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "phys11-u8-cons-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Object at rest at top of hill, rolls down. What happens to energy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy transformation",
                statement: "PE → KE.",
              },
            ],
            steps: [
              { reasoning: "At top: PE max, KE = 0.", marks: 1, markCode: "R" },
              {
                reasoning: "At bottom: PE = 0, KE max.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: PE converts to KE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "PE → KE.",
            commonErrors: ["Energy created."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u8-cons-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a ball not return to original height after bouncing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy loss",
                statement: "Friction/heat reduces mechanical energy.",
              },
            ],
            steps: [
              {
                reasoning: "Some KE converted to heat/sound on bounce.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Air resistance during flight.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Less energy → lower height.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: energy lost to non-mechanical forms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Energy lost to heat/sound/air resistance.",
            commonErrors: ["Energy not conserved."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u8-cons-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Skier: mass 60 kg, starts at rest at 50 m height, reaches 20 m height.",
          parts: [
            { label: "a", prompt: "PE lost?", marks: 3 },
            { label: "b", prompt: "KE gained?", marks: 2 },
            { label: "c", prompt: "Speed at 20 m?", marks: 3 },
            { label: "d", prompt: "If friction present?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy conservation",
                statement: "PE → KE (ideal).",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\Delta PE = 60 \\times 9.8 \\times 30 = 17640$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 17640 J.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$KE = 17640$ J (assuming no friction).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "$v = \\sqrt{2 \\times 17640/60} = \\sqrt{588} = 24.2$ m/s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 24.2 m/s.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "Some energy → heat; speed lower.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) 17640J (b) 17640J (c) 24.2m/s (d) lower speed.",
            commonErrors: ["Ignoring friction."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-power",
      title: "Power and efficiency",
      skill: "Calculate power and efficiency in mechanical systems.",
      lesson: {
        sections: [
          {
            heading: "Power",
            body: "$$P = \\frac{W}{t} = Fv$$\n\nRate of energy transfer. Units: watts.",
          },
          {
            heading: "Efficiency",
            body: "$$\\eta = \\frac{W_{out}}{W_{in}} \\times 100\\%$$\n\nRatio of useful output to input.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$P = W/t = Fv$" },
          { name: "Efficiency", statement: "$\\eta = W_{out}/W_{in}$" },
          { name: "Watt", statement: "1 W = 1 J/s" },
        ],
        workedExample: {
          problem: "Motor does 1000 J of work in 5 s. Power?",
          solution: "$P = 1000/5 = 200$ W.",
        },
      },
      questions: [
        {
          id: "phys11-u8-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "W/t" },
              { id: "b", text: "W×t" },
              { id: "c", text: "F/d" },
              { id: "d", text: "E/t²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power", statement: "$P = W/t$." },
            ],
            steps: [{ reasoning: "P = W/t.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** W/t",
            commonErrors: ["W×t."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u8-power-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Engine does 5000 J of work in 2 s. Power?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "P = W/t", statement: "P = 5000/2" },
            ],
            steps: [
              { reasoning: "$P = 5000/2$.", marks: 1, markCode: "M" },
              { reasoning: "= 2500 W.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2500 W.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2500 W.",
            commonErrors: ["Wrong calculation."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u8-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Machine: input 1000 W, output 750 W. Efficiency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Efficiency",
                statement: "$\\eta = W_{out}/W_{in}$",
              },
            ],
            steps: [
              { reasoning: "$\\eta = 750/1000$.", marks: 1, markCode: "M" },
              { reasoning: "= 0.75 or 75%.", marks: 1, markCode: "M" },
              {
                reasoning: "25% lost to heat/friction.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%.",
            commonErrors: ["Wrong formula."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "phys11-u8-power-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Car: mass 1200 kg, accelerates 0→30 m/s in 10 s on level road.",
          parts: [
            { label: "a", prompt: "Work done?", marks: 3 },
            { label: "b", prompt: "Average power?", marks: 3 },
            {
              label: "c",
              prompt: "If engine is 80% efficient, input power?",
              marks: 2,
            },
            { label: "d", prompt: "Energy lost?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power/Efficiency",
                statement:
                  "$W = \\Delta KE$; $P = W/t$; $\\eta = W_{out}/W_{in}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta KE = \\frac{1}{2}(1200)(900) = 540000$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 540000 J.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$P = 540000/10 = 54000$ W = 54 kW.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 54000 W.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$P_{in} = 54000/0.8 = 67500$ W.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Energy lost = 0.2 × 540000 = 108000 J.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) 540kJ (b) 54kW (c) 67.5kW (d) 108kJ.",
            commonErrors: ["Efficiency formula."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
