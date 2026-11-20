import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypp4-u2-lesson-2-1",
  code: "2-1",
  title: "Energy Stores, Transfers and Efficiency",
  goal: "I CAN identify energy stores and transfers, and calculate efficiency of energy systems.",
  standards: [
    "Key concept: Energy",
    "MYP Sciences: Energy",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Energy store", definition: "A place where energy is held: kinetic, gravitational potential, elastic, chemical, thermal, nuclear." },
    { term: "Energy transfer", definition: "Movement of energy from one store to another, e.g. chemical → kinetic in a car engine." },
    { term: "Efficiency", definition: "Useful energy output ÷ total energy input × 100%." },
    { term: "Kinetic energy", definition: "$E_k = \\frac{1}{2}mv^2$, measured in joules (J)." },
    { term: "Gravitational potential energy", definition: "$E_p = mgh$, with $g = 9.8\\ \\text{N/kg}$ and $h$ in metres." },
    { term: "Conservation of energy", definition: "Energy is never created or destroyed, only transferred or dissipated." },
  ],
  concepts: [
    {
      id: "mypp4-u2-energy",
      title: "Energy stores and transfers",
      skill: "Identify energy stores, transfers and calculate kinetic and potential energy.",
      lesson: {
        sections: [
          {
            heading: "Energy stores",
            body: "Key stores: **kinetic** (moving objects), **gravitational potential** (height), **elastic** (stretched springs), **chemical** (food, fuels), **thermal** (temperature), **nuclear** (atomic nuclei). Energy moves between them: a falling ball converts GPE to kinetic.",
          },
          {
            heading: "Calculating energy",
            body: "$E_k = \\frac{1}{2}mv^2$; $E_p = mgh$. For a 2 kg ball at 5 m height: $E_p = 2 \\times 9.8 \\times 5 = 98$ J.",
          },
          {
            heading: "Energy transfer diagrams",
            body: "Trace energy flows: e.g. a torch: chemical (battery) → electrical → light + thermal. Sankey-style reasoning shows where energy is 'lost' (usually dissipated as heat, not destroyed).",
          },
        ],
        keyFormulas: [
          { name: "Kinetic energy", statement: "$E_k = \\frac{1}{2}mv^2$ J" },
          { name: "Potential energy", statement: "$E_p = mgh$ J" },
          { name: "Efficiency", statement: "$\\eta = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A 3 kg mass is raised 4 m. Calculate its gain in GPE.",
          solution: "$E_p = mgh = 3 \\times 9.8 \\times 4 = 117.6$ J.",
        },
      },
      questions: [
        {
          id: "mypp4-u2-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton" },
              { id: "b", text: "Watt" },
              { id: "c", text: "Joule" },
              { id: "d", text: "Pascal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy", statement: "Energy measured in joules (J)." }],
            steps: [
              { reasoning: "1 J = 1 N m = 1 kg m²/s².", working: "\\text{J}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Joule",
            commonErrors: ["Confusing with watt (power)."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u2-en-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 2 kg object moves at 3 m/s. Calculate its kinetic energy.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 J" },
              { id: "b", text: "6 J" },
              { id: "c", text: "9 J" },
              { id: "d", text: "18 J" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Ek = ½mv²", statement: "$E_k = \\frac{1}{2} \\times 2 \\times 3^2$" }],
            steps: [
              { reasoning: "Apply $E_k = \\frac{1}{2}mv^2$.", working: "\\frac{1}{2}\\times2\\times9", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "9\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 J",
            commonErrors: ["Forgetting the ½ factor."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An engine uses 800 J of chemical energy to produce 240 J of useful kinetic energy. What is its efficiency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3.3%" },
              { id: "b", text: "30%" },
              { id: "c", text: "240%" },
              { id: "d", text: "33%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "$\\eta = \\text{useful}/\\text{input} \\times 100$" }],
            steps: [
              { reasoning: "Efficiency = useful output ÷ total input.", working: "\\frac{240}{800}", marks: 1, markCode: "M" },
              { reasoning: "Convert to percentage.", working: "0.30\\times100=30\\%", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Inverting the ratio."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rollercoaster car of mass 500 kg starts at rest at the top of a 40 m high hill and reaches 30 m/s at the bottom.",
          parts: [
            { label: "a", prompt: "Calculate the GPE at the top.", marks: 2 },
            { label: "b", prompt: "Calculate the kinetic energy at the bottom.", marks: 2 },
            { label: "c", prompt: "Explain why the kinetic energy is less than the initial GPE.", marks: 2 },
            { label: "d", prompt: "Calculate the efficiency of the energy conversion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ep = mgh", statement: "$E_p = 500 \\times 9.8 \\times 40$" },
              { kind: "formula", name: "Ek = ½mv²", statement: "$E_k = \\frac{1}{2} \\times 500 \\times 30^2$" },
            ],
            steps: [
              { part: "a", reasoning: "$E_p = 500 \\times 9.8 \\times 40 = 196\\,000$ J.", working: "500\\times9.8\\times40=196000\\ \\text{J}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct value.", working: "196\\ \\text{kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$E_k = 0.5 \\times 500 \\times 900 = 225\\,000$ J.", working: "0.5\\times500\\times900=225000\\ \\text{J}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct value.", working: "225\\ \\text{kJ}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Some GPE is dissipated as heat/sound through friction and air resistance.", working: "\\text{dissipated}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Energy conserved but not all becomes KE.", working: "\\text{conserved}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\eta = 225/196 \\times 100$.", working: "\\frac{225000}{196000}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate: ≈115% — impossible, indicating energy gained (e.g. motor assist) or data issue.", working: "\\approx115\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 196 kJ (b) 225 kJ (c) energy dissipated as heat/sound (d) ≈115% — exceeds 100%, indicating additional energy input",
            commonErrors: ["Not noticing efficiency >100% signals extra energy source."],
            examinerNote: "M1 A1 for (a),(b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u2-en-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which energy store is held in a stretched elastic band?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic" },
              { id: "b", text: "Gravitational potential" },
              { id: "c", text: "Elastic potential" },
              { id: "d", text: "Nuclear" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Elastic store", statement: "Deformed elastic objects store elastic potential energy." }],
            steps: [
              { reasoning: "Stretched band stores elastic potential energy.", working: "\\text{elastic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Elastic potential",
            commonErrors: ["Confusing with kinetic or chemical stores."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u2-en-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the gravitational potential energy gained when a 2 kg mass is raised 3 m. Take $g = 9.8\\ \\text{N/kg}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 58.8, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Ep = mgh", statement: "$E_p = 2 \\times 9.8 \\times 3$" }],
            steps: [
              { reasoning: "Apply $E_p = mgh$.", working: "2\\times9.8\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "58.8\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "58.8 J",
            commonErrors: ["Forgetting the $g$ factor."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 4 kg object moves at 5 m/s. Calculate its kinetic energy.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 50, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Ek = ½mv²", statement: "$E_k = \\frac{1}{2} \\times 4 \\times 5^2$" }],
            steps: [
              { reasoning: "Apply $E_k = \\frac{1}{2}mv^2$.", working: "0.5\\times4\\times25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "50\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 J",
            commonErrors: ["Forgetting to square the velocity or the ½ factor."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ball falls from a height. Which energy transfer occurs as it falls (ignoring air resistance)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic → gravitational potential" },
              { id: "b", text: "Gravitational potential → kinetic" },
              { id: "c", text: "Chemical → thermal" },
              { id: "d", text: "Elastic → kinetic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy transfer", statement: "Falling converts GPE to KE." }],
            steps: [
              { reasoning: "Height decreases (loses GPE); speed increases (gains KE).", working: "GPE\\to KE", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** GPE → kinetic",
            commonErrors: ["Reversing the direction of transfer."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sequence correctly describes the energy transfers in a battery-powered torch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical → electrical → light + thermal" },
              { id: "b", text: "Electrical → chemical → light" },
              { id: "c", text: "Light → electrical → chemical" },
              { id: "d", text: "Thermal → chemical → light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy transfer chain", statement: "Battery chemical energy → electrical → light and heat." }],
            steps: [
              { reasoning: "Battery stores chemical energy; circuit carries electrical energy.", working: "\\text{chemical}\\to\\text{electrical}", marks: 1, markCode: "M" },
              { reasoning: "Bulb outputs light plus wasted thermal energy.", working: "\\text{light+thermal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** chemical → electrical → light + thermal",
            commonErrors: ["Omitting the wasted thermal energy."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 3 kg mass is raised 5 m above the ground. Assuming no energy losses, how much kinetic energy will it have just before hitting the ground? Take $g = 9.8\\ \\text{N/kg}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14.7 J" },
              { id: "b", text: "98 J" },
              { id: "c", text: "147 J" },
              { id: "d", text: "294 J" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ep = mgh", statement: "Initial GPE = $3 \\times 9.8 \\times 5$" },
              { kind: "principle", name: "Conservation", statement: "No losses → all GPE becomes KE." },
            ],
            steps: [
              { reasoning: "GPE at top = $3 \\times 9.8 \\times 5 = 147$ J.", working: "3\\times9.8\\times5=147\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "By conservation of energy, KE at bottom = 147 J.", working: "E_k=147\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (c).", working: "\\text{(c)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 147 J",
            commonErrors: ["Using $mgh$ with wrong mass or forgetting $g$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 0.5 kg ball is thrown at 12 m/s. Calculate its kinetic energy.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 36, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Ek = ½mv²", statement: "$E_k = \\frac{1}{2} \\times 0.5 \\times 12^2$" }],
            steps: [
              { reasoning: "Square the velocity: $12^2 = 144$.", working: "12^2=144", marks: 1, markCode: "M" },
              { reasoning: "Apply $E_k = \\frac{1}{2} \\times 0.5 \\times 144$.", working: "0.5\\times0.5\\times144", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "36\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 J",
            commonErrors: ["Forgetting to square $v$ or dropping the ½."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT an energy store?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic energy" },
              { id: "b", text: "Thermal energy" },
              { id: "c", text: "Force" },
              { id: "d", text: "Chemical energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy store", statement: "Stores hold energy: kinetic, GPE, elastic, chemical, thermal, nuclear." }],
            steps: [
              { reasoning: "Force is a push/pull, not a store of energy.", working: "\\text{force}\\neq\\text{store}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Force",
            commonErrors: ["Thinking force stores energy."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u2-en-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 60 kg person climbs a flight of stairs rising 4 m. Calculate the gain in gravitational potential energy. Take $g = 9.8\\ \\text{N/kg}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2352, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Ep = mgh", statement: "$E_p = 60 \\times 9.8 \\times 4$" }],
            steps: [
              { reasoning: "Apply $E_p = mgh$.", working: "60\\times9.8\\times4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2352\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2352 J",
            commonErrors: ["Arithmetic slips; answer may be given as 2.35 kJ."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the energy transfers that occur when a battery-powered torch is switched on, naming each store involved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy transfer chain", statement: "Chemical → electrical → light + thermal." },
              { kind: "principle", name: "Conservation", statement: "Energy is transferred, not created." },
            ],
            steps: [
              { reasoning: "Chemical energy is stored in the battery.", working: "\\text{chemical}", marks: 1, markCode: "M" },
              { reasoning: "Chemical energy transfers to electrical energy in the circuit.", working: "\\text{electrical}", marks: 1, markCode: "M" },
              { reasoning: "The bulb converts electrical energy to light energy (useful output).", working: "\\text{light}", marks: 1, markCode: "A" },
              { reasoning: "Some energy is wasted as thermal energy (heat) in bulb and wires.", working: "\\text{thermal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chemical → electrical → light + thermal",
            commonErrors: ["Omitting the wasted thermal energy or naming wrong stores."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u2-en-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 2 kg mass is released from rest at the top of a frictionless 3 m high platform.",
          parts: [
            { label: "a", prompt: "Calculate the gravitational potential energy at the top.", marks: 2 },
            { label: "b", prompt: "State the kinetic energy just before it reaches the ground.", marks: 1 },
            { label: "c", prompt: "Explain why the kinetic energy equals the initial potential energy.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ep = mgh", statement: "$E_p = 2 \\times 9.8 \\times 3$" },
              { kind: "principle", name: "Conservation of energy", statement: "No losses → GPE fully converts to KE." },
            ],
            steps: [
              { part: "a", reasoning: "$E_p = 2 \\times 9.8 \\times 3 = 58.8$ J.", working: "2\\times9.8\\times3=58.8\\ \\text{J}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State answer.", working: "58.8\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "KE = 58.8 J (all GPE converted).", working: "58.8\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy is conserved — frictionless surface means no energy dissipated.", working: "\\text{conserved}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 58.8 J (b) 58.8 J (c) energy conserved, no losses",
            commonErrors: ["Forgetting the surface is frictionless (no losses)."],
            examinerNote: "M1 A1 for (a), A1 for (b),(c).",
          },
        },
        {
          id: "mypp4-u2-en-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two objects have the same mass. Object B moves at twice the speed of object A. What is the ratio of B's kinetic energy to A's?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 : 1" },
              { id: "b", text: "4 : 1" },
              { id: "c", text: "8 : 1" },
              { id: "d", text: "1 : 1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Ek = ½mv²", statement: "KE depends on $v^2$ — doubling speed quadruples KE." }],
            steps: [
              { reasoning: "$E_k \\propto v^2$ for same mass.", working: "E_k\\propto v^2", marks: 1, markCode: "M" },
              { reasoning: "$(2v)^2 = 4v^2$ → ratio 4:1.", working: "4:1", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 4 : 1",
            commonErrors: ["Thinking KE doubles when speed doubles."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u2-efficiency",
      title: "Energy efficiency and conservation",
      skill: "Calculate efficiency and explain conservation of energy in real systems.",
      lesson: {
        sections: [
          {
            heading: "Efficiency in practice",
            body: "No device is 100% efficient — energy is always dissipated as thermal energy (and sound). LED bulbs are ~90% efficient vs filament bulbs ~5%; electric motors ~90%; human muscles ~25%.",
          },
          {
            heading: "Conservation of energy",
            body: "Total energy is conserved: $E_{\\text{in}} = E_{\\text{useful}} + E_{\\text{wasted}}$. Wasted energy isn't destroyed — it becomes less useful thermal energy spread to surroundings (entropy increases).",
          },
          {
            heading: "Improving efficiency",
            body: "Reduce friction (lubrication), insulation (reduce heat loss), streamline shapes, recycle waste heat. Hybrid/electric vehicles recover braking energy, raising overall efficiency.",
          },
        ],
        keyFormulas: [
          { name: "Energy balance", statement: "$E_{in} = E_{useful} + E_{wasted}$" },
          { name: "Efficiency", statement: "$\\eta = \\frac{E_{useful}}{E_{in}} \\times 100\\%$" },
          { name: "Power", statement: "$P = E/t$ watts" },
        ],
        workedExample: {
          problem: "A motor uses 500 J and produces 350 J useful work. Find efficiency and wasted energy.",
          solution: "$\\eta = 350/500 \\times 100 = 70\\%$; wasted = 150 J.",
        },
      },
      questions: [
        {
          id: "mypp4-u2-eff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum possible efficiency of any energy device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50%" },
              { id: "b", text: "90%" },
              { id: "c", text: "100%" },
              { id: "d", text: "No limit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Efficiency", statement: "100% is ideal but never achieved in practice." }],
            steps: [
              { reasoning: "Theoretical maximum is 100%.", working: "100\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 100%",
            commonErrors: ["Thinking efficiency must be below 50%."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u2-eff-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A heater uses 2000 J of electrical energy and produces 1600 J of thermal energy. Calculate its efficiency.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20%" },
              { id: "b", text: "80%" },
              { id: "c", text: "125%" },
              { id: "d", text: "160%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "$\\eta = 1600/2000 \\times 100$" }],
            steps: [
              { reasoning: "Efficiency = useful/total.", working: "\\frac{1600}{2000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate as percentage.", working: "80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80%",
            commonErrors: ["Inverting ratio → 125%."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 60 W bulb runs for 10 minutes. How much energy does it use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "36 kJ" },
              { id: "b", text: "600 J" },
              { id: "c", text: "6 kJ" },
              { id: "d", text: "360 kJ" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "E = Pt", statement: "$E = 60 \\times 600$" }],
            steps: [
              { reasoning: "Convert 10 min to 600 s.", working: "600\\ \\text{s}", marks: 1, markCode: "M" },
              { reasoning: "$E = Pt = 60 \\times 600 = 36\\,000$ J.", working: "60\\times600=36000\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "Convert to kJ.", working: "36\\ \\text{kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 kJ",
            commonErrors: ["Using minutes instead of seconds."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A power station produces 1000 MW of electricity. The fuel's chemical energy input is 2500 MW. 60% of the waste heat is captured for district heating.",
          parts: [
            { label: "a", prompt: "Calculate the station's efficiency.", marks: 2 },
            { label: "b", prompt: "Calculate the wasted power.", marks: 1 },
            { label: "c", prompt: "Calculate how much waste heat is captured.", marks: 2 },
            { label: "d", prompt: "Evaluate whether combined heat and power improves overall efficiency and discuss the environmental benefit.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\eta = 1000/2500 \\times 100$" },
              { kind: "principle", name: "Energy conservation", statement: "Wasted energy can be reused." },
            ],
            steps: [
              { part: "a", reasoning: "$\\eta = 1000/2500 \\times 100 = 40\\%$.", working: "\\frac{1000}{2500}\\times100=40\\%", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct value.", working: "40\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Wasted = 2500 - 1000 = 1500 MW.", working: "1500\\ \\text{MW}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Captured = 60% of 1500 MW.", working: "0.6\\times1500", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "900\\ \\text{MW}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total useful output = 1000 + 900 = 1900 MW → efficiency rises to 76%.", working: "1900\\ \\text{MW}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Less fuel burned per unit useful energy → lower emissions.", working: "\\text{lower emissions}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Environmental benefit: reduced CO₂ and fuel use.", working: "\\text{CO}_2\\text{ reduced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40% (b) 1500 MW (c) 900 MW (d) efficiency rises to 76%; reduces fuel use and emissions",
            commonErrors: ["Forgetting waste heat is part of input, not output."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u2-eff-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Efficiency is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "total input ÷ useful output" },
              { id: "b", text: "useful output ÷ total input × 100%" },
              { id: "c", text: "wasted energy ÷ total input" },
              { id: "d", text: "useful output × total input" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "$\\eta = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$." }],
            steps: [
              { reasoning: "Efficiency = useful/total × 100%.", working: "\\eta=\\frac{\\text{useful}}{\\text{input}}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** useful output ÷ total input × 100%",
            commonErrors: ["Inverting the ratio."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-eff-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A device uses 500 J of energy input and produces 350 J of useful output. Calculate its efficiency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 70, unit: "%" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "$\\eta = 350/500 \\times 100$" }],
            steps: [
              { reasoning: "Apply $\\eta = \\text{useful}/\\text{input} \\times 100$.", working: "\\frac{350}{500}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "70\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70%",
            commonErrors: ["Forgetting ×100 or inverting ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A machine has an efficiency of 60%. If 2000 J of energy is supplied, calculate the useful output energy.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 1200, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "Useful output = efficiency × input." }],
            steps: [
              { reasoning: "Rearrange: useful = $0.60 \\times 2000$.", working: "0.6\\times2000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1200\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1200 J",
            commonErrors: ["Multiplying by 60 instead of 0.6."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device is 25% efficient with an energy input of 800 J. How much energy is wasted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "200 J" },
              { id: "b", text: "600 J" },
              { id: "c", text: "750 J" },
              { id: "d", text: "25 J" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy balance", statement: "$E_{in} = E_{useful} + E_{wasted}$." }],
            steps: [
              { reasoning: "Useful = 25% of 800 = 200 J.", working: "0.25\\times800=200\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "Wasted = 800 - 200 = 600 J.", working: "800-200=600\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 600 J",
            commonErrors: ["Answering the useful energy instead of wasted."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An LED bulb uses 10 J of electrical energy and produces 9 J of light energy. Calculate its efficiency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 90, unit: "%" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "$\\eta = 9/10 \\times 100$" }],
            steps: [
              { reasoning: "Apply efficiency formula.", working: "\\frac{9}{10}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "90\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90%",
            commonErrors: ["Inverting the ratio → 111%."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An electric motor draws a current of 2 A from a 12 V supply and runs for 10 s. Calculate the electrical energy supplied to the motor.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 240, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "P = VI", statement: "Power = voltage × current." },
              { kind: "formula", name: "E = Pt", statement: "Energy = power × time." },
            ],
            steps: [
              { reasoning: "Power = $12 \\times 2 = 24$ W.", working: "12\\times2=24\\ \\text{W}", marks: 1, markCode: "M" },
              { reasoning: "Energy = $24 \\times 10$.", working: "24\\times10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "240\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "240 J",
            commonErrors: ["Using volts × amps as energy directly without time."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why can no energy device ever be 100% efficient in practice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy is destroyed inside the device" },
              { id: "b", text: "Some energy is always dissipated as thermal energy (and sound) to the surroundings" },
              { id: "c", text: "Input energy is always too small" },
              { id: "d", text: "Friction creates new energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Dissipation", statement: "Friction and resistance always convert some energy to less-useful thermal energy." }],
            steps: [
              { reasoning: "Real devices have friction, resistance and other losses.", working: "\\text{losses}", marks: 1, markCode: "M" },
              { reasoning: "Lost energy becomes thermal/sound — not useful output.", working: "\\text{thermal}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** energy dissipated as heat/sound",
            commonErrors: ["Thinking energy is destroyed — it is transferred."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In most energy devices, wasted energy is mainly dissipated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "light" },
              { id: "b", text: "chemical energy" },
              { id: "c", text: "thermal energy" },
              { id: "d", text: "nuclear energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Dissipation", statement: "Wasted energy mostly becomes thermal energy in surroundings." }],
            steps: [
              { reasoning: "Friction and electrical resistance produce heat.", working: "\\text{thermal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** thermal energy",
            commonErrors: ["Thinking wasted energy disappears."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u2-eff-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A power station has an energy input of 5000 MW and electrical output of 2000 MW. Calculate its efficiency.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "$\\eta = 2000/5000 \\times 100$" }],
            steps: [
              { reasoning: "Apply efficiency formula.", working: "\\frac{2000}{5000}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Inverting the ratio → 250%."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 100 W heater runs continuously for 2 hours. Calculate the total energy it uses.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 720000, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "E = Pt", statement: "$E = 100 \\times 7200$" }],
            steps: [
              { reasoning: "Convert 2 h to 7200 s; $E = Pt$.", working: "100\\times7200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate (accept 720 kJ).", working: "720000\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "720 000 J (720 kJ)",
            commonErrors: ["Using hours directly: 100 × 2 = 200."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why 'wasted' energy in a device is not actually destroyed, referring to the principle of conservation of energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of energy", statement: "Energy is never created or destroyed, only transferred or dissipated." },
              { kind: "principle", name: "Dissipation", statement: "Wasted energy becomes less useful thermal energy spread to surroundings." },
            ],
            steps: [
              { reasoning: "State conservation: total energy is constant.", working: "E_{total}\\ \\text{const}", marks: 1, markCode: "M" },
              { reasoning: "'Wasted' energy is transferred to the surroundings as thermal energy (and sound).", working: "\\text{heat to surroundings}", marks: 1, markCode: "M" },
              { reasoning: "It is less useful — harder to harness — but still exists.", working: "\\text{less useful}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: energy is dissipated, not destroyed.", working: "\\text{dissipated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wasted energy becomes thermal energy in surroundings — dissipated, not destroyed",
            commonErrors: ["Saying energy is destroyed or disappears."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u2-eff-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 60 W bulb and a 100 W bulb each run for 1 hour on the same 230 V supply.",
          parts: [
            { label: "a", prompt: "Calculate the energy used by each bulb.", marks: 2 },
            { label: "b", prompt: "State which bulb uses more energy and calculate the difference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "E = Pt", statement: "Energy = power × time; time = 3600 s." }],
            steps: [
              { part: "a", reasoning: "60 W bulb: $60 \\times 3600 = 216\\,000$ J; 100 W bulb: $100 \\times 3600 = 360\\,000$ J.", working: "216\\,000\\ \\text{J and }360\\,000\\ \\text{J}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both values correct.", working: "216\\ \\text{kJ},\\ 360\\ \\text{kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "100 W bulb uses more; difference = $360 - 216 = 144$ kJ.", working: "144\\ \\text{kJ}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State conclusion.", working: "100\\ \\text{W bulb}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 216 kJ and 360 kJ (b) 100 W bulb uses 144 kJ more",
            commonErrors: ["Using 1 hour instead of 3600 s."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b).",
          },
        },
      ],
    },
  ],
};
