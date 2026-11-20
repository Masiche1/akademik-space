import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypp4-u1-lesson-1-3",
  code: "1-3",
  title: "Pressure, Density and Moments",
  goal: "I CAN calculate pressure, density and moments, and apply the principle of moments.",
  standards: [
    "Key concept: Systems",
    "MYP Sciences: Forces",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Pressure", definition: "Force per unit area; $P = F/A$, measured in pascals (Pa = N/m²)." },
    { term: "Density", definition: "Mass per unit volume; $\\rho = m/V$, measured in kg/m³." },
    { term: "Moment", definition: "Turning effect of a force; $M = F \\times d$, measured in N m." },
    { term: "Pivot", definition: "The fixed point about which a lever or object rotates." },
    { term: "Hydraulic system", definition: "System using liquid pressure to transmit forces; pressure is transmitted equally (Pascal's principle)." },
    { term: "Principle of moments", definition: "For balance: sum of clockwise moments = sum of anticlockwise moments." },
  ],
  concepts: [
    {
      id: "mypp4-u1-pressure",
      title: "Pressure and density",
      skill: "Calculate pressure and density and explain their applications.",
      lesson: {
        sections: [
          {
            heading: "Pressure",
            body: "$P = \\frac{F}{A}$. A force spread over a small area gives high pressure — sharp needles pierce easily; wide tyres and snowshoes reduce pressure by increasing area. Atmospheric pressure is about $101\\,000$ Pa at sea level.",
          },
          {
            heading: "Hydraulic systems",
            body: "Pascal's principle: pressure applied to a confined liquid is transmitted equally in all directions. A small force on a small piston creates a large force on a large piston: $F_1/A_1 = F_2/A_2$.",
          },
          {
            heading: "Density",
            body: "$\\rho = \\frac{m}{V}$. Water has density $1000\\ \\text{kg/m}^3$; most materials float or sink depending on whether their density is less or greater than the fluid. Density explains why oil floats on water.",
          },
        ],
        keyFormulas: [
          { name: "Pressure", statement: "$P = F/A$ Pa" },
          { name: "Density", statement: "$\\rho = m/V$ kg/m³" },
          { name: "Hydraulic", statement: "$F_1/A_1 = F_2/A_2$" },
        ],
        workedExample: {
          problem: "A 500 N force acts on an area of 0.25 m². Find the pressure.",
          solution: "$P = 500/0.25 = 2000$ Pa.",
        },
      },
      questions: [
        {
          id: "mypp4-u1-press-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton" },
              { id: "b", text: "Pascal" },
              { id: "c", text: "Joule" },
              { id: "d", text: "Watt" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Pressure", statement: "$P = F/A$, unit Pa = N/m²." }],
            steps: [
              { reasoning: "Pascal is the SI unit of pressure.", working: "\\text{Pa}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pascal",
            commonErrors: ["Confusing with newton (force)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-press-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force of 200 N acts on an area of 0.5 m². Calculate the pressure.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100 Pa" },
              { id: "b", text: "250 Pa" },
              { id: "c", text: "400 Pa" },
              { id: "d", text: "0.0025 Pa" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "P = F/A", statement: "$P = 200/0.5$" }],
            steps: [
              { reasoning: "Pressure = force ÷ area.", working: "\\frac{200}{0.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "400\\ \\text{Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "400 Pa",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A block of volume 0.002 m³ has mass 2.7 kg. Calculate its density.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1350 kg/m³" },
              { id: "b", text: "0.0054 kg/m³" },
              { id: "c", text: "4.7 kg/m³" },
              { id: "d", text: "5400 kg/m³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "ρ = m/V", statement: "$\\rho = 2.7/0.002$" }],
            steps: [
              { reasoning: "Density = mass ÷ volume.", working: "\\frac{2.7}{0.002}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1350\\ \\text{kg/m}^3", marks: 1, markCode: "A" },
              { reasoning: "Density greater than water → sinks.", working: "\\text{sinks}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1350 kg/m³",
            commonErrors: ["Dividing volume by mass."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A hydraulic press has pistons of area 0.01 m² and 0.5 m² connected by oil.",
          parts: [
            { label: "a", prompt: "State Pascal's principle.", marks: 1 },
            { label: "b", prompt: "A force of 50 N is applied to the small piston. Calculate the pressure transmitted.", marks: 2 },
            { label: "c", prompt: "Calculate the force produced on the large piston.", marks: 3 },
            { label: "d", prompt: "Explain why hydraulic brakes are useful in cars.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pascal's principle", statement: "Pressure in confined liquid transmitted equally." },
              { kind: "formula", name: "F₁/A₁ = F₂/A₂", statement: "Force multiplication via area ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Pressure applied to enclosed fluid is transmitted equally in all directions.", working: "\\text{Pascal}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$P = 50/0.01 = 5000$ Pa.", working: "\\frac{50}{0.01}=5000\\ \\text{Pa}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct value.", working: "5000\\ \\text{Pa}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$F_2 = P \\times A_2 = 5000 \\times 0.5$.", working: "5000\\times0.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "2500\\ \\text{N}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Force multiplied 50×.", working: "\\text{50x}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Small pedal force → large braking force at wheels.", working: "\\text{force multiplication}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reliable and safe transmission of force.", working: "\\text{reliable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pressure transmitted equally (b) 5000 Pa (c) 2500 N (d) multiplies pedal force",
            commonErrors: ["Using wrong piston area in (c)."],
            examinerNote: "B1 for (a), M1 A1 for (b), M1 A1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u1-press-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Atmospheric pressure at sea level is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 000 Pa" },
              { id: "b", text: "101 000 Pa" },
              { id: "c", text: "1 000 000 Pa" },
              { id: "d", text: "100 Pa" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Atmospheric pressure", statement: "About $101\\,000$ Pa at sea level." }],
            steps: [
              { reasoning: "Standard atmospheric pressure ≈ 101 kPa.", working: "101\\ \\text{kPa}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 101 000 Pa",
            commonErrors: ["Confusing with other pressure values."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-press-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A force of 100 N acts on an area of 0.2 m². Calculate the pressure.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 500, unit: "Pa" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "P = F/A", statement: "Pressure = force ÷ area." }],
            steps: [
              { reasoning: "Apply $P = F/A$.", working: "\\frac{100}{0.2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "500\\ \\text{Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 Pa",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block has mass 8 kg and volume 0.004 m³. Calculate its density.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2000, unit: "kg/m³" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "ρ = m/V", statement: "Density = mass ÷ volume." }],
            steps: [
              { reasoning: "Apply $\\rho = m/V$.", working: "\\frac{8}{0.004}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2000\\ \\text{kg/m}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2000 kg/m³",
            commonErrors: ["Dividing volume by mass."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do wide tyres on vehicles reduce the pressure on soft ground?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They increase the force on the ground" },
              { id: "b", text: "They increase the contact area, reducing pressure $P = F/A$" },
              { id: "c", text: "They reduce the vehicle's weight" },
              { id: "d", text: "They increase friction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "P = F/A", statement: "Same force over larger area gives lower pressure." }],
            steps: [
              { reasoning: "Weight (force) is unchanged; area increases.", working: "A\\ \\text{increases}", marks: 1, markCode: "M" },
              { reasoning: "Larger area → lower pressure.", working: "P\\ \\text{decreases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** larger area reduces pressure",
            commonErrors: ["Thinking tyres reduce weight."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block of density 800 kg/m³ is placed in water (density 1000 kg/m³). What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It sinks" },
              { id: "b", text: "It floats" },
              { id: "c", text: "It dissolves" },
              { id: "d", text: "Nothing — density is irrelevant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Floating", statement: "Objects less dense than the fluid float." }],
            steps: [
              { reasoning: "800 < 1000 kg/m³ → less dense than water.", working: "800<1000", marks: 1, markCode: "M" },
              { reasoning: "Less dense → floats.", working: "\\text{floats}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It floats",
            commonErrors: ["Reversing the density comparison."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a hydraulic press, a force of 20 N acts on a piston of area 0.002 m². The other piston has area 0.04 m². Calculate the force produced on the large piston.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 400, unit: "N" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Pascal's principle", statement: "$F_1/A_1 = F_2/A_2$ — pressure transmitted equally." }],
            steps: [
              { reasoning: "Pressure = $20/0.002 = 10\\,000$ Pa, transmitted to large piston.", working: "\\frac{20}{0.002}=10000\\ \\text{Pa}", marks: 1, markCode: "M" },
              { reasoning: "$F_2 = P \\times A_2 = 10\\,000 \\times 0.04$.", working: "10000\\times0.04", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: force multiplied 20×.", working: "400\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "400 N",
            commonErrors: ["Using areas in wrong order."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The same force is applied by a sharp nail and a blunt nail to wood. Why does the sharp nail penetrate more easily?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It exerts a larger force" },
              { id: "b", text: "It has a much smaller contact area, giving higher pressure" },
              { id: "c", text: "It is made of stronger material" },
              { id: "d", text: "It weighs less" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "P = F/A", statement: "Same force over smaller area → higher pressure." }],
            steps: [
              { reasoning: "Force is the same; sharp tip has tiny area.", working: "A\\ \\text{small}", marks: 1, markCode: "M" },
              { reasoning: "$P = F/A$ gives much higher pressure at the tip.", working: "P\\ \\text{high}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** smaller area → higher pressure",
            commonErrors: ["Thinking sharp objects exert more force."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kg" },
              { id: "b", text: "kg/m³" },
              { id: "c", text: "N/m²" },
              { id: "d", text: "g/cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Density", statement: "$\\rho = m/V$ → kg/m³." }],
            steps: [
              { reasoning: "Mass per volume = kg/m³.", working: "\\text{kg/m}^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** kg/m³",
            commonErrors: ["Confusing with pressure unit Pa (N/m²)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-press-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A metal block has volume 0.001 m³ and density 2700 kg/m³. Calculate its mass.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2.7, unit: "kg" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "ρ = m/V", statement: "Rearrange: $m = \\rho V$." }],
            steps: [
              { reasoning: "Apply $m = \\rho V$.", working: "2700\\times0.001", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.7\\ \\text{kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.7 kg",
            commonErrors: ["Dividing instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a sharp knife cuts food much more easily than a blunt one, using the concept of pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "P = F/A", statement: "Pressure = force ÷ area." },
              { kind: "principle", name: "Cutting", statement: "High pressure at a small area breaks material." },
            ],
            steps: [
              { reasoning: "Both knives apply similar downward force from the hand.", working: "F\\ \\text{similar}", marks: 1, markCode: "M" },
              { reasoning: "The sharp blade has a much smaller contact area with the food.", working: "A\\ \\text{small}", marks: 1, markCode: "M" },
              { reasoning: "$P = F/A$ → pressure at the edge is much higher.", working: "P\\ \\text{high}", marks: 1, markCode: "A" },
              { reasoning: "High pressure breaks the food's structure → cuts easily.", working: "\\text{cuts}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sharp edge = small area = high pressure = easy cutting",
            commonErrors: ["Claiming the sharp knife applies more force."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u1-press-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hydraulic jack has pistons of area 0.005 m² and 0.2 m² filled with oil. A force of 100 N is applied to the small piston.",
          parts: [
            { label: "a", prompt: "Calculate the pressure transmitted through the oil.", marks: 2 },
            { label: "b", prompt: "Calculate the force produced on the large piston.", marks: 1 },
            { label: "c", prompt: "Suggest one practical use of this force multiplication.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pascal's principle", statement: "Pressure in confined liquid is transmitted equally." },
              { kind: "formula", name: "P = F/A", statement: "Pressure then force = pressure × area." },
            ],
            steps: [
              { part: "a", reasoning: "$P = 100/0.005 = 20\\,000$ Pa.", working: "\\frac{100}{0.005}=20000\\ \\text{Pa}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State pressure.", working: "20000\\ \\text{Pa}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$F = 20\\,000 \\times 0.2 = 4000$ N.", working: "4000\\ \\text{N}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "E.g. lifting a car with small effort, car brakes, or heavy machinery.", working: "\\text{lifting}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 000 Pa (b) 4000 N (c) e.g. lifting cars/heavy loads",
            commonErrors: ["Using the wrong piston area for force."],
            examinerNote: "M1 A1 for (a), M1 for (b), A1 for (c).",
          },
        },
        {
          id: "mypp4-u1-press-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ice (density ≈ 917 kg/m³) floats on water (density 1000 kg/m³). Why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice is warmer than water" },
              { id: "b", text: "Ice is less dense than water, so buoyancy supports it" },
              { id: "c", text: "Ice has no mass" },
              { id: "d", text: "Water pushes ice down but ice is slippery" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Buoyancy", statement: "Objects less dense than the fluid float." }],
            steps: [
              { reasoning: "917 < 1000 kg/m³ → ice is less dense.", working: "917<1000", marks: 1, markCode: "M" },
              { reasoning: "Buoyant force exceeds weight → floats.", working: "\\text{buoyancy}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ice is less dense → floats",
            commonErrors: ["Thinking all solids sink in liquids."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u1-moments",
      title: "Moments and levers",
      skill: "Calculate moments and apply the principle of moments to balanced systems.",
      lesson: {
        sections: [
          {
            heading: "Moments",
            body: "A **moment** is the turning effect of a force: $M = F \\times d$ where $d$ is the perpendicular distance from the pivot, in N m. A longer wrench gives a bigger moment for the same force.",
          },
          {
            heading: "Principle of moments",
            body: "For an object to balance: sum of clockwise moments = sum of anticlockwise moments. This is why a seesaw balances when torques match.",
          },
          {
            heading: "Levers",
            body: "A lever pivots on a fulcrum. Mechanical advantage = effort arm ÷ load arm. Longer effort arm relative to load arm means less force needed — but the effort moves further.",
          },
        ],
        keyFormulas: [
          { name: "Moment", statement: "$M = F \\times d$ N m" },
          { name: "Balance", statement: "Clockwise moments = anticlockwise moments" },
          { name: "Lever arms", statement: "Mechanical advantage = effort arm / load arm" },
        ],
        workedExample: {
          problem: "A 10 N force is applied 0.5 m from a pivot. Find the moment.",
          solution: "$M = 10 \\times 0.5 = 5$ N m.",
        },
      },
      questions: [
        {
          id: "mypp4-u1-mmnt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of a moment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "N" },
              { id: "b", text: "N m" },
              { id: "c", text: "Pa" },
              { id: "d", text: "J" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Moment", statement: "$M = F \\times d$ → N m." }],
            steps: [
              { reasoning: "Force × distance = N m.", working: "\\text{N m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** N m",
            commonErrors: ["Confusing with force (N)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-mmnt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force of 8 N is applied 0.25 m from a pivot. Calculate the moment.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 N m" },
              { id: "b", text: "8.25 N m" },
              { id: "c", text: "32 N m" },
              { id: "d", text: "0.03 N m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "M = Fd", statement: "$M = 8 \\times 0.25$" }],
            steps: [
              { reasoning: "Moment = force × perpendicular distance.", working: "8\\times0.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2\\ \\text{N m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 N m",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On a balanced see-saw, a 300 N child sits 2 m from the pivot. What weight must sit 3 m from the pivot on the other side?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "200 N" },
              { id: "b", text: "450 N" },
              { id: "c", text: "600 N" },
              { id: "d", text: "900 N" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Balance", statement: "$F_1 d_1 = F_2 d_2$" }],
            steps: [
              { reasoning: "Clockwise moment = anticlockwise moment: $300 \\times 2 = F \\times 3$.", working: "300\\times2=F\\times3", marks: 1, markCode: "M" },
              { reasoning: "Solve for $F$.", working: "F=\\frac{600}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "200\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 N",
            commonErrors: ["Reversing the distances."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A uniform metre rule is pivoted at the 50 cm mark. A 4 N weight hangs at the 20 cm mark and another weight at the 80 cm mark.",
          parts: [
            { label: "a", prompt: "Calculate the moment of the 4 N weight about the pivot.", marks: 2 },
            { label: "b", prompt: "State the direction of the moment produced by the 4 N weight.", marks: 1 },
            { label: "c", prompt: "For the rule to balance, what moment must the weight at 80 cm produce?", marks: 1 },
            { label: "d", prompt: "Calculate the weight needed at 80 cm for balance.", marks: 2 },
            { label: "e", prompt: "If the rule were pivoted at 25 cm instead, explain how the required weight at 80 cm would change.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "M = Fd", statement: "Distance from pivot = 50 - 20 = 30 cm." },
              { kind: "principle", name: "Balance", statement: "Anticlockwise moment must equal clockwise moment." },
            ],
            steps: [
              { part: "a", reasoning: "Distance = 30 cm = 0.3 m; $M = 4 \\times 0.3 = 1.2$ N m.", working: "4\\times0.3=1.2\\ \\text{N m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct value.", working: "1.2\\ \\text{N m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weight at 20 cm is left of pivot → anticlockwise.", working: "\\text{anticlockwise}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Must equal 1.2 N m clockwise.", working: "1.2\\ \\text{N m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Distance = 30 cm; $W = 1.2/0.3 = 4$ N.", working: "\\frac{1.2}{0.3}=4\\ \\text{N}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct value.", working: "4\\ \\text{N}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "New distance for 4 N = 25 cm → moment = 1.0 N m; new distance for weight = 55 cm.", working: "4\\times0.25=1.0", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Required weight $= 1.0/0.55 = 1.8$ N — smaller.", working: "1.8\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.2 N m (b) anticlockwise (c) 1.2 N m clockwise (d) 4 N (e) smaller, ≈1.8 N",
            commonErrors: ["Forgetting to convert cm to m; mis-identifying pivot side."],
            examinerNote: "M1 A1 for (a), A1 for (b),(c), M1 A1 for (d), M1 A1 for (e).",
          },
        },
        {
          id: "mypp4-u1-mmnt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A moment is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "force × perpendicular distance from pivot" },
              { id: "b", text: "force ÷ distance" },
              { id: "c", text: "mass × velocity" },
              { id: "d", text: "force + distance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Moment", statement: "$M = F \\times d$ where $d$ is perpendicular distance from pivot." }],
            steps: [
              { reasoning: "Moment = force × perpendicular distance.", working: "M=Fd", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** force × perpendicular distance",
            commonErrors: ["Using distance along the object rather than perpendicular distance."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypp4-u1-mmnt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A force of 20 N is applied 0.4 m from a pivot. Calculate the moment.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 8, unit: "N m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "M = Fd", statement: "Moment = force × distance." }],
            steps: [
              { reasoning: "Apply $M = Fd$.", working: "20\\times0.4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8\\ \\text{N m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 N m",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force produces a moment of 12 N m. If the force is 6 N, calculate the perpendicular distance from the pivot.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "M = Fd", statement: "Rearrange: $d = M/F$." }],
            steps: [
              { reasoning: "Rearrange $M = Fd$ to $d = M/F$.", working: "d=\\frac{M}{F}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $12/6 = 2$ m.", working: "2\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 m",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it easier to open a heavy door by pushing near the handle rather than near the hinges?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The handle is further from the pivot, giving a larger moment" },
              { id: "b", text: "The handle applies more force" },
              { id: "c", text: "The hinges are too slippery" },
              { id: "d", text: "The door is lighter near the handle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "M = Fd", statement: "Larger distance from pivot → larger moment for same force." }],
            steps: [
              { reasoning: "Handle is far from hinges (pivot); same force gives bigger moment.", working: "d\\ \\text{large}", marks: 1, markCode: "M" },
              { reasoning: "Larger moment overcomes resistance more easily.", working: "M\\ \\text{large}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** larger moment arm",
            commonErrors: ["Thinking the handle applies more force."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a balanced see-saw, a 10 N force acts 0.5 m from the pivot on one side. What force must act 1 m from the pivot on the other side for balance?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 5, unit: "N" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Balance", statement: "Clockwise moment = anticlockwise moment: $F_1d_1 = F_2d_2$." }],
            steps: [
              { reasoning: "Set moments equal: $10 \\times 0.5 = F \\times 1$.", working: "10\\times0.5=F\\times1", marks: 1, markCode: "M" },
              { reasoning: "Solve: $F = 5$ N.", working: "5\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 N",
            commonErrors: ["Reversing the distances."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A lever is used to lift a 200 N load. An effort force of 50 N is applied 2 m from the pivot. Calculate the distance from the pivot at which the load must act for the lever to be balanced.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 0.5, unit: "m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Balance", statement: "$F_{effort} \\times d_{effort} = F_{load} \\times d_{load}$." }],
            steps: [
              { reasoning: "Effort moment = $50 \\times 2 = 100$ N m.", working: "50\\times2=100", marks: 1, markCode: "M" },
              { reasoning: "Set equal: $100 = 200 \\times d_{load}$ → $d = 0.5$ m.", working: "\\frac{100}{200}=0.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.5\\ \\text{m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5 m",
            commonErrors: ["Reversing effort and load arms."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A uniform metre rule is pivoted at the 30 cm mark. The same force is applied at the 70 cm mark and at the 10 cm mark. Which produces the larger moment, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The 70 cm mark — distance from pivot is 40 cm vs 20 cm" },
              { id: "b", text: "The 10 cm mark — closer forces are stronger" },
              { id: "c", text: "Both produce equal moments" },
              { id: "d", text: "Neither — moments need weight, not force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "M = Fd", statement: "Same force: larger distance from pivot → larger moment." }],
            steps: [
              { reasoning: "Distance to 70 cm mark = 40 cm; to 10 cm mark = 20 cm.", working: "40\\ \\text{cm vs }20\\ \\text{cm}", marks: 1, markCode: "M" },
              { reasoning: "Larger distance gives larger moment for same force.", working: "M\\propto d", marks: 1, markCode: "M" },
              { reasoning: "Match choice (a).", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 70 cm mark — larger moment arm",
            commonErrors: ["Measuring from the end of the rule instead of the pivot."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of a moment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "N" },
              { id: "b", text: "N m" },
              { id: "c", text: "J" },
              { id: "d", text: "W" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Moment", statement: "$M = Fd$ → N × m = N m." }],
            steps: [
              { reasoning: "Force (N) × distance (m) = N m.", working: "\\text{N m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** N m",
            commonErrors: ["Confusing with energy (J = N m, same dimension but moment is turning effect)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u1-mmnt-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force of 15 N is applied perpendicular to a spanner at 0.3 m from the nut. Calculate the moment about the nut.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 4.5, unit: "N m" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "M = Fd", statement: "Moment = force × perpendicular distance." }],
            steps: [
              { reasoning: "Apply $M = Fd$.", working: "15\\times0.3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4.5\\ \\text{N m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.5 N m",
            commonErrors: ["Using the spanner length instead of distance from nut."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a balanced see-saw, a 25 N force acts 2 m from the pivot on one side. What force must act on the other side at 1 m from the pivot?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 50, unit: "N" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Balance", statement: "$F_1d_1 = F_2d_2$." }],
            steps: [
              { reasoning: "Set moments equal: $25 \\times 2 = F \\times 1$.", working: "25\\times2=F\\times1", marks: 1, markCode: "M" },
              { reasoning: "Solve: $F = 50$ N.", working: "50\\ \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 N",
            commonErrors: ["Halving instead of doubling the force."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a longer spanner makes it easier to loosen a tight nut, using the concept of moments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "M = Fd", statement: "Moment = force × perpendicular distance from pivot (the nut)." },
              { kind: "principle", name: "Balance", statement: "Sufficient moment overcomes the resisting moment of the tight nut." },
            ],
            steps: [
              { reasoning: "The nut acts as the pivot; the spanner applies force at its end.", working: "\\text{pivot=nut}", marks: 1, markCode: "M" },
              { reasoning: "Longer spanner → larger $d$ → larger moment for the same applied force.", working: "M=Fd", marks: 1, markCode: "M" },
              { reasoning: "Larger moment can overcome the nut's resisting moment with less effort.", working: "\\text{overcomes resistance}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: less force needed with a longer spanner.", working: "\\text{easier}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Longer spanner = larger moment arm = bigger moment for same force",
            commonErrors: ["Thinking the spanner increases the force applied."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u1-mmnt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A uniform metre rule is pivoted at the 50 cm mark. A 3 N weight hangs at the 30 cm mark. For balance, where must a 2 N weight be placed, and on which side of the pivot?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "M = Fd", statement: "Distance from pivot matters, not position on rule." },
              { kind: "principle", name: "Balance", statement: "Anticlockwise moment = clockwise moment." },
            ],
            steps: [
              { reasoning: "3 N weight is 20 cm left of pivot → anticlockwise moment = $3 \\times 0.2 = 0.6$ N m.", working: "3\\times0.2=0.6\\ \\text{N m}", marks: 1, markCode: "M" },
              { reasoning: "Required clockwise moment = 0.6 N m; $d = 0.6/2 = 0.3$ m = 30 cm right of pivot.", working: "\\frac{0.6}{2}=0.3\\ \\text{m}", marks: 1, markCode: "M" },
              { reasoning: "30 cm right of 50 cm pivot = 80 cm mark.", working: "80\\ \\text{cm}", marks: 1, markCode: "A" },
              { reasoning: "It must be on the right side of the pivot (opposite the 3 N weight).", working: "\\text{right side}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At the 80 cm mark, on the right side of the pivot",
            commonErrors: ["Measuring 30 cm from the end instead of the pivot."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
      ],
    },
  ],
};
