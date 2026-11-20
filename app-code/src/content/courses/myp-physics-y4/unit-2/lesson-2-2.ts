import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypp4-u2-lesson-2-2",
  code: "2-2",
  title: "Thermal Physics",
  goal: "I CAN explain heat transfer by conduction, convection and radiation, and use specific heat capacity.",
  standards: [
    "Key concept: Energy",
    "MYP Sciences: Energy",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Conduction", definition: "Heat transfer through a material by vibrating particles passing energy to neighbours; best in solids." },
    { term: "Convection", definition: "Heat transfer in fluids by circulating currents; hot fluid rises, cold fluid sinks." },
    { term: "Radiation", definition: "Heat transfer by infrared electromagnetic waves; needs no medium; works in vacuum." },
    { term: "Specific heat capacity", definition: "Energy needed to raise 1 kg of substance by 1°C; $c$ in J/(kg °C)." },
    { term: "Thermal insulator", definition: "Material that reduces heat transfer: wool, fibreglass, air gaps, vacuum flasks." },
    { term: "Black body", definition: "Surface that absorbs and emits infrared radiation most effectively." },
  ],
  concepts: [
    {
      id: "mypp4-u2-heat-transfer",
      title: "Heat transfer mechanisms",
      skill: "Explain conduction, convection and radiation and apply them to everyday situations.",
      lesson: {
        sections: [
          {
            heading: "Conduction",
            body: "In solids, vibrating particles transfer kinetic energy to neighbours. Metals conduct well (free electrons); wood, plastic and air are poor conductors — hence handles on pans are insulating.",
          },
          {
            heading: "Convection",
            body: "In fluids, warmer regions become less dense and rise; cooler regions sink — convection currents. Explains boiling in a pot, sea breezes and central heating radiators placed near floors.",
          },
          {
            heading: "Radiation",
            body: "Infrared radiation transfers heat without a medium — how the Sun warms Earth. Dark, matt surfaces absorb and emit best; shiny surfaces reflect. Vacuum flasks use silvered surfaces to reflect radiation.",
          },
        ],
        keyFormulas: [
          { name: "Conduction", statement: "Best in solids; poor in fluids" },
          { name: "Convection", statement: "Requires fluid; hot rises, cold sinks" },
          { name: "Radiation", statement: "No medium needed; IR waves" },
        ],
        workedExample: {
          problem: "Why does a metal spoon in hot soup become hot while a wooden spoon does not?",
          solution: "Metal conducts heat quickly along its length; wood is a poor conductor.",
        },
      },
      questions: [
        {
          id: "mypp4-u2-heat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mechanism of heat transfer requires no medium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conduction" },
              { id: "b", text: "Convection" },
              { id: "c", text: "Radiation" },
              { id: "d", text: "All three" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Radiation", statement: "IR waves travel through vacuum." }],
            steps: [
              { reasoning: "Radiation is electromagnetic — no particles needed.", working: "\\text{radiation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Radiation",
            commonErrors: ["Thinking all heat needs a medium."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u2-heat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do radiators get hot air to circulate around a room?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conduction through walls" },
              { id: "b", text: "Convection currents in the air" },
              { id: "c", text: "Radiation through the floor" },
              { id: "d", text: "Evaporation of water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Convection", statement: "Warm air rises, cool air sinks — convection currents." }],
            steps: [
              { reasoning: "Air near radiator heats, expands, becomes less dense, rises.", working: "\\text{convection}", marks: 1, markCode: "M" },
              { reasoning: "Identify mechanism.", working: "\\text{convection currents}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Convection currents",
            commonErrors: ["Citing conduction — air is a poor conductor."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A black-painted metal can and a shiny silver can, both filled with hot water, are left in a cool room. Which cools faster and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shiny can — it reflects heat back in" },
              { id: "b", text: "The black can — it emits infrared radiation more effectively" },
              { id: "c", text: "Both cool at the same rate" },
              { id: "d", text: "The black can — it conducts heat better" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Radiation", statement: "Dark matt surfaces emit IR radiation best; shiny surfaces reflect." }],
            steps: [
              { reasoning: "Black surface emits infrared radiation efficiently.", working: "\\text{black emits}", marks: 1, markCode: "M" },
              { reasoning: "Silver surface reflects radiation, reducing loss.", working: "\\text{silver reflects}", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", working: "\\text{black cools faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Black can — better emitter of radiation",
            commonErrors: ["Thinking shiny = better emitter."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A vacuum flask keeps drinks hot for hours. It has double glass walls with a vacuum between them, silvered inner surfaces, and a cork stopper.",
          parts: [
            { label: "a", prompt: "Explain how the vacuum between the walls reduces heat loss.", marks: 2 },
            { label: "b", prompt: "Explain the role of the silvered surfaces.", marks: 2 },
            { label: "c", prompt: "Explain why the stopper is made of cork or plastic.", marks: 2 },
            { label: "d", prompt: "Suggest one improvement to the flask design.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Insulation", statement: "Vacuum stops conduction/convection; silvering reflects radiation." },
              { kind: "principle", name: "Heat transfer", statement: "All three mechanisms must be blocked." },
            ],
            steps: [
              { part: "a", reasoning: "Vacuum removes particles — no conduction or convection possible.", working: "\\text{no particles}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Only radiation can cross the vacuum.", working: "\\text{radiation only}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Silvered surfaces reflect infrared radiation back into the drink.", working: "\\text{reflect IR}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reduces radiative heat loss.", working: "\\text{less loss}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cork/plastic are poor conductors — reduce conduction through the top.", working: "\\text{poor conductor}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Also traps air — insulator.", working: "\\text{air trapped}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. add a lid to reduce evaporation/convection at top; use thinner glass neck.", working: "\\text{lid/narrow neck}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Any valid improvement reducing heat transfer.", working: "\\text{valid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) vacuum stops conduction/convection (b) silvering reflects IR (c) cork insulates, traps air (d) e.g. lid, narrow neck",
            commonErrors: ["Forgetting radiation can still cross a vacuum."],
            examinerNote: "M1 A1 for each of (a),(b),(c), M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u2-heat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat travels along a metal spoon in hot soup mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "convection" },
              { id: "b", text: "conduction" },
              { id: "c", text: "radiation" },
              { id: "d", text: "evaporation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Conduction", statement: "Vibrating particles pass energy to neighbours — dominant in solids." }],
            steps: [
              { reasoning: "Metal spoon is a solid; heat conducts along it.", working: "\\text{conduction}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** conduction",
            commonErrors: ["Confusing with convection (needs fluid flow)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-heat-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "One end of a metal bar is at 90°C and the other end is at 30°C. What is the temperature difference across the bar?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 60, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "ΔT", statement: "Temperature difference = hot end − cold end." }],
            steps: [
              { reasoning: "Subtract the temperatures.", working: "90-30", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "60\\ \\text{°C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60°C",
            commonErrors: ["Dividing instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Infrared radiation from the Sun takes about 500 s to travel the $1.5 \\times 10^{11}$ m to Earth. Estimate the speed of this radiation.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 300000000, tolerance: 1000000, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "EM speed", statement: "All electromagnetic waves travel at ≈ $3 \\times 10^8$ m/s in vacuum." }],
            steps: [
              { reasoning: "Speed = distance ÷ time = $1.5 \\times 10^{11}/500$.", working: "\\frac{1.5\\times10^{11}}{500}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $3 \\times 10^8$ m/s.", working: "3\\times10^8\\ \\text{m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 \\times 10^8$ m/s",
            commonErrors: ["Misplacing powers of ten."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does water in a heated pan circulate as it boils?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conduction pushes water upwards" },
              { id: "b", text: "Convection currents: hot water expands, becomes less dense and rises" },
              { id: "c", text: "Radiation heats water unevenly" },
              { id: "d", text: "Water molecules repel each other" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Convection", statement: "Warm fluid rises, cool fluid sinks — convection currents." }],
            steps: [
              { reasoning: "Heated water expands, density decreases, rises.", working: "\\text{less dense, rises}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** convection currents",
            commonErrors: ["Citing conduction — water circulates by bulk movement."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of the silvered inner surfaces of a vacuum flask?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They absorb all heat" },
              { id: "b", text: "They reflect infrared radiation back into the drink" },
              { id: "c", text: "They conduct heat away quickly" },
              { id: "d", text: "They create convection currents" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Radiation", statement: "Shiny surfaces reflect IR radiation, reducing radiative heat loss." }],
            steps: [
              { reasoning: "Silvered surfaces are shiny → reflect IR.", working: "\\text{reflect IR}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** reflect infrared radiation",
            commonErrors: ["Thinking shiny surfaces absorb heat best."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which situation involves all three mechanisms of heat transfer — conduction, convection and radiation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat moving along an iron bar in a vacuum" },
              { id: "b", text: "A hot drink in a mug cooling in a room" },
              { id: "c", text: "Water boiling in a sealed container" },
              { id: "d", text: "The Sun warming a satellite in space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Heat transfer", statement: "Real situations often combine all three mechanisms." }],
            steps: [
              { reasoning: "Mug: conduction through ceramic, convection in air, radiation to room.", working: "\\text{all three}", marks: 1, markCode: "M" },
              { reasoning: "Check other options: (a) no convection/radiation medium issues, (c) mainly convection, (d) radiation only.", working: "\\text{check options}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** hot drink in a mug",
            commonErrors: ["Missing that radiation always occurs alongside the others."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a vacuum flask minimises all three mechanisms of heat transfer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conduction", statement: "Blocked by vacuum gap and insulating stopper." },
              { kind: "principle", name: "Convection", statement: "Blocked by vacuum — no fluid particles." },
              { kind: "principle", name: "Radiation", statement: "Blocked by silvered surfaces reflecting IR." },
            ],
            steps: [
              { reasoning: "Vacuum between glass walls removes particles → no conduction or convection across the gap.", working: "\\text{vacuum}", marks: 1, markCode: "M" },
              { reasoning: "Only radiation can cross the vacuum gap.", working: "\\text{radiation only}", marks: 1, markCode: "M" },
              { reasoning: "Silvered surfaces reflect infrared radiation back into the drink.", working: "\\text{reflect IR}", marks: 1, markCode: "A" },
              { reasoning: "Insulating stopper/cork reduces conduction and convection through the top.", working: "\\text{stopper}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vacuum blocks conduction/convection; silvering reflects radiation; stopper insulates",
            commonErrors: ["Forgetting radiation still crosses the vacuum."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convection as a heat transfer mechanism can only occur in:",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Convection", statement: "Requires a fluid that can circulate — liquids or gases." }],
            steps: [
              { reasoning: "Convection needs bulk movement of a fluid.", working: "\\text{fluid}", marks: 1, markCode: "M" },
              { reasoning: "Solids cannot flow → no convection in solids.", working: "\\text{liquids/gases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Liquids and gases (fluids)",
            commonErrors: ["Thinking convection occurs in solids."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Water in a pan is at 45°C while the surrounding air is at 20°C. What is the temperature difference driving heat transfer from the water to the air?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 25, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "ΔT", statement: "Heat flows from higher to lower temperature; difference = $45 - 20$." }],
            steps: [
              { reasoning: "Subtract temperatures.", working: "45-20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "25\\ \\text{°C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25°C",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a metal rail feels colder than a wooden rail at the same temperature on a cool day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conduction", statement: "Metals are good thermal conductors; wood is a poor conductor." },
              { kind: "principle", name: "Heat flow", statement: "Heat flows faster from your hand into the metal." },
            ],
            steps: [
              { reasoning: "Both rails are at the same temperature as the surroundings.", working: "\\text{same }T", marks: 1, markCode: "M" },
              { reasoning: "Metal conducts heat away from your hand much faster than wood.", working: "\\text{metal conducts}", marks: 1, markCode: "M" },
              { reasoning: "Faster heat loss from skin → metal feels colder.", working: "\\text{feels colder}", marks: 1, markCode: "A" },
              { reasoning: "Wood insulates, so less heat leaves your hand → feels warmer.", working: "\\text{wood insulates}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metal conducts heat away from hand faster → feels colder",
            commonErrors: ["Thinking the metal rail is actually at a lower temperature."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u2-heat-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A house loses heat to the outside through its walls, roof and windows on a cold day.",
          parts: [
            { label: "a", prompt: "Identify the main heat transfer mechanism through solid walls and explain briefly.", marks: 2 },
            { label: "b", prompt: "Identify the mechanism responsible for draughts carrying heat away.", marks: 1 },
            { label: "c", prompt: "Identify the mechanism by which heat escapes through glass windows even when closed.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conduction", statement: "Through solids — walls." },
              { kind: "definition", name: "Convection", statement: "Moving air — draughts." },
              { kind: "definition", name: "Radiation", statement: "IR waves through glass — no medium needed." },
            ],
            steps: [
              { part: "a", reasoning: "Conduction: vibrating particles in the wall material transfer heat from warm inside to cold outside.", working: "\\text{conduction}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Insulation (e.g. fibreglass, air gaps) reduces this.", working: "\\text{insulation}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convection: moving air (draughts) carries heat away.", working: "\\text{convection}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Radiation: infrared radiation passes through glass.", working: "\\text{radiation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) conduction through wall material (b) convection via draughts (c) infrared radiation through glass",
            commonErrors: ["Attributing all heat loss to one mechanism."],
            examinerNote: "M1 A1 for (a), M1 for (b), A1 for (c).",
          },
        },
        {
          id: "mypp4-u2-heat-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two identical containers of hot water are placed in a room: one painted matt black, one painted shiny silver. Which cools faster and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The silver one — it reflects heat back in" },
              { id: "b", text: "The black one — dark matt surfaces emit infrared radiation most effectively" },
              { id: "c", text: "Both cool at the same rate" },
              { id: "d", text: "The black one — black paint is a better conductor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Radiation", statement: "Dark matt surfaces are good emitters and absorbers of IR; shiny surfaces reflect." }],
            steps: [
              { reasoning: "Black matt surface emits IR radiation efficiently.", working: "\\text{black emits}", marks: 1, markCode: "M" },
              { reasoning: "Silver surface reflects IR, reducing radiative loss.", working: "\\text{silver reflects}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** black cools faster — better IR emitter",
            commonErrors: ["Thinking shiny surfaces emit better."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u2-shc",
      title: "Specific heat capacity",
      skill: "Use $Q = mc\\Delta T$ to calculate heat energy changes.",
      lesson: {
        sections: [
          {
            heading: "Specific heat capacity",
            body: "**Specific heat capacity** $c$ is the energy needed to raise 1 kg by 1°C. Water has an unusually high $c = 4200\\ \\text{J/(kg °C)}$ — that's why it stores heat well (central heating, sea breezes).",
          },
          {
            heading: "The equation",
            body: "$Q = mc\\Delta T$ where $Q$ in J, $m$ in kg, $c$ in J/(kg °C), $\\Delta T$ in °C. For 0.5 kg water heated by 20°C: $Q = 0.5 \\times 4200 \\times 20 = 42\\,000$ J.",
          },
          {
            heading: "Applications",
            body: "High $c$ materials (water, concrete) absorb lots of heat with small temperature rise — used in thermal stores. Low $c$ materials heat quickly — cooking pans, engine blocks.",
          },
        ],
        keyFormulas: [
          { name: "Heat energy", statement: "$Q = mc\\Delta T$ J" },
          { name: "Water c", statement: "$c = 4200\\ \\text{J/(kg °C)}$" },
          { name: "Temperature change", statement: "$\\Delta T = Q/(mc)$" },
        ],
        workedExample: {
          problem: "How much energy is needed to heat 2 kg of water from 20°C to 80°C?",
          solution: "$Q = 2 \\times 4200 \\times 60 = 504\\,000$ J = 504 kJ.",
        },
      },
      questions: [
        {
          id: "mypp4-u2-shc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the specific heat capacity of water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "420 J/(kg °C)" },
              { id: "b", text: "4200 J/(kg °C)" },
              { id: "c", text: "42 000 J/(kg °C)" },
              { id: "d", text: "100 J/(kg °C)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Water c", statement: "$c = 4200\\ \\text{J/(kg °C)}$ — unusually high." }],
            steps: [
              { reasoning: "Water's c is 4200 J/(kg °C).", working: "4200", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4200 J/(kg °C)",
            commonErrors: ["Misremembering as 420."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-shc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the energy needed to raise 1 kg of water by 10°C.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "420 J" },
              { id: "b", text: "4200 J" },
              { id: "c", text: "42 000 J" },
              { id: "d", text: "4.2 J" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Q = mcΔT", statement: "$Q = 1 \\times 4200 \\times 10$" }],
            steps: [
              { reasoning: "Apply $Q = mc\\Delta T$.", working: "1\\times4200\\times10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "42000\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "42 000 J",
            commonErrors: ["Using °C change wrong."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 0.2 kg aluminium block ($c = 900$ J/(kg °C)) absorbs 1800 J. By how much does its temperature rise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1°C" },
              { id: "b", text: "10°C" },
              { id: "c", text: "100°C" },
              { id: "d", text: "0.1°C" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "ΔT = Q/mc", statement: "$\\Delta T = 1800/(0.2 \\times 900)$" }],
            steps: [
              { reasoning: "Rearrange $Q = mc\\Delta T$.", working: "\\Delta T=\\frac{Q}{mc}", marks: 1, markCode: "M" },
              { reasoning: "Compute denominator: $0.2 \\times 900 = 180$.", working: "0.2\\times900=180", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta T = 1800/180 = 10$°C.", working: "10\\ \\text{°C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10°C",
            commonErrors: ["Dividing wrong direction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 1.5 kg kettle of water ($c = 4200$ J/(kg °C)) is heated from 15°C to 100°C using a 2000 W heater.",
          parts: [
            { label: "a", prompt: "Calculate the energy needed.", marks: 2 },
            { label: "b", prompt: "Calculate the minimum time taken.", marks: 2 },
            { label: "c", prompt: "Explain why the actual time is longer than calculated.", marks: 2 },
            { label: "d", prompt: "Suggest one way to reduce the energy used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Q = mcΔT", statement: "$Q = 1.5 \\times 4200 \\times 85$" },
              { kind: "formula", name: "t = E/P", statement: "Time = energy ÷ power." },
            ],
            steps: [
              { part: "a", reasoning: "$Q = 1.5 \\times 4200 \\times 85 = 535\\,500$ J.", working: "1.5\\times4200\\times85=535500\\ \\text{J}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct value.", working: "535.5\\ \\text{kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$t = 535500/2000 = 267.75$ s ≈ 268 s.", working: "\\frac{535500}{2000}=267.75\\ \\text{s}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to sensible units.", working: "268\\ \\text{s}\\approx4.5\\ \\text{min}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat lost to surroundings; kettle itself absorbs energy; efficiency <100%.", working: "\\text{heat losses}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Not all electrical energy heats the water.", working: "\\text{efficiency<100\\%}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. use less water, insulate kettle, heat to lower temp.", working: "\\text{less water/insulate}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Any valid energy-saving suggestion.", working: "\\text{valid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 535.5 kJ (b) ≈268 s (4.5 min) (c) heat losses, kettle heating, inefficiency (d) e.g. less water, insulate",
            commonErrors: ["Forgetting ΔT = 85 not 100."],
            examinerNote: "M1 A1 for (a),(b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u2-shc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the units of specific heat capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "J" },
              { id: "b", text: "J/(kg °C)" },
              { id: "c", text: "J/kg" },
              { id: "d", text: "W" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Specific heat capacity", statement: "Energy per kg per °C → J/(kg °C)." }],
            steps: [
              { reasoning: "From $Q = mc\\Delta T$, $c = Q/(m\\Delta T)$ → J/(kg °C).", working: "\\text{J/(kg °C)}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** J/(kg °C)",
            commonErrors: ["Confusing with energy unit J."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u2-shc-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the energy needed to raise the temperature of 1 kg of water by 5°C. ($c = 4200$ J/(kg °C))",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 21000, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Q = mcΔT", statement: "$Q = 1 \\times 4200 \\times 5$" }],
            steps: [
              { reasoning: "Apply $Q = mc\\Delta T$.", working: "1\\times4200\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "21000\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "21 000 J",
            commonErrors: ["Using °C change wrong or forgetting c."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How much energy is needed to heat 0.5 kg of water by 30°C? ($c = 4200$ J/(kg °C))",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 63000, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Q = mcΔT", statement: "$Q = 0.5 \\times 4200 \\times 30$" }],
            steps: [
              { reasoning: "Apply $Q = mc\\Delta T$.", working: "0.5\\times4200\\times30", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "63000\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "63 000 J",
            commonErrors: ["Arithmetic slips with decimals."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is water used in central heating systems and hot water bottles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water is cheap to buy" },
              { id: "b", text: "Water has a high specific heat capacity, so it stores a lot of heat energy" },
              { id: "c", text: "Water conducts heat badly" },
              { id: "d", text: "Water boils at a low temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "High c", statement: "High specific heat capacity → stores more energy per °C rise." }],
            steps: [
              { reasoning: "Water's $c = 4200$ is unusually high.", working: "c=4200", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** high specific heat capacity",
            commonErrors: ["Thinking water is a good insulator."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "8400 J of energy is supplied to 1 kg of water. By how much does its temperature rise? ($c = 4200$ J/(kg °C))",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "ΔT = Q/mc", statement: "Rearrange $Q = mc\\Delta T$." }],
            steps: [
              { reasoning: "Rearrange: $\\Delta T = 8400/(1 \\times 4200)$.", working: "\\frac{8400}{4200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2\\ \\text{°C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2°C",
            commonErrors: ["Multiplying instead of rearranging correctly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 2 kg block of aluminium ($c = 900$ J/(kg °C)) is heated until its temperature rises by 50°C. Calculate the energy supplied.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 90000, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Q = mcΔT", statement: "Use the material's own $c$ value." }],
            steps: [
              { reasoning: "Apply $Q = mc\\Delta T$ with $c = 900$.", working: "2\\times900\\times50", marks: 1, markCode: "M" },
              { reasoning: "Multiply correctly.", working: "90000", marks: 1, markCode: "M" },
              { reasoning: "State answer with unit.", working: "90000\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 000 J",
            commonErrors: ["Using water's $c = 4200$ instead of aluminium's."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Equal masses of water ($c = 4200$) and aluminium ($c = 900$) receive the same amount of heat energy. Which shows the greater temperature rise, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water — it absorbs more heat" },
              { id: "b", text: "Aluminium — its lower specific heat capacity means temperature rises more for the same energy" },
              { id: "c", text: "Both rise by the same amount" },
              { id: "d", text: "Neither — temperature cannot change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "ΔT = Q/mc", statement: "Lower $c$ → larger $\\Delta T$ for same $Q$ and $m$." }],
            steps: [
              { reasoning: "Same $Q$, same $m$: $\\Delta T \\propto 1/c$.", working: "\\Delta T\\propto\\frac{1}{c}", marks: 1, markCode: "M" },
              { reasoning: "Aluminium's $c = 900 < 4200$ → bigger temperature rise.", working: "900<4200", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** aluminium — lower c",
            commonErrors: ["Thinking higher c means bigger temperature change."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the equation $Q = mc\\Delta T$, the symbol $c$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "specific heat capacity" },
              { id: "b", text: "speed of light" },
              { id: "c", text: "charge" },
              { id: "d", text: "concentration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Q = mcΔT", statement: "$c$ = specific heat capacity in J/(kg °C)." }],
            steps: [
              { reasoning: "$c$ is specific heat capacity.", working: "c=\\text{shc}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** specific heat capacity",
            commonErrors: ["Confusing symbols."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypp4-u2-shc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "210 000 J of energy heats water from 20°C to 45°C. Calculate the mass of water heated. ($c = 4200$ J/(kg °C))",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2, unit: "kg" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "m = Q/cΔT", statement: "Rearrange $Q = mc\\Delta T$; $\\Delta T = 25$°C." }],
            steps: [
              { reasoning: "$m = 210000/(4200 \\times 25) = 210000/105000$.", working: "\\frac{210000}{105000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2\\ \\text{kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 kg",
            commonErrors: ["Using 45 instead of 25 for $\\Delta T$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why water's high specific heat capacity makes it useful for storing thermal energy, e.g. in solar water heaters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Specific heat capacity", statement: "$c = 4200$ J/(kg °C) for water — unusually high." },
              { kind: "formula", name: "Q = mcΔT", statement: "Large $c$ means large $Q$ stored for small $\\Delta T$." },
            ],
            steps: [
              { reasoning: "State water's high $c$ value.", working: "c=4200", marks: 1, markCode: "M" },
              { reasoning: "From $Q = mc\\Delta T$, for a given temperature rise water absorbs large energy.", working: "Q=mc\\Delta T", marks: 1, markCode: "M" },
              { reasoning: "It can store heat over time without large temperature swings.", working: "\\text{stores heat}", marks: 1, markCode: "A" },
              { reasoning: "Application: solar heaters / hot water bottles release heat gradually.", working: "\\text{application}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High c → stores much heat per °C rise → gradual release",
            commonErrors: ["Saying high c means water heats up quickly — it is the opposite."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u2-shc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 0.8 kg copper block ($c = 385$ J/(kg °C)) at 20°C absorbs 30 000 J of heat energy with no losses.",
          parts: [
            { label: "a", prompt: "Calculate the temperature rise of the block.", marks: 2 },
            { label: "b", prompt: "State the final temperature of the block.", marks: 1 },
            { label: "c", prompt: "Explain why the actual temperature rise in a real experiment would be smaller.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "ΔT = Q/mc", statement: "$\\Delta T = 30000/(0.8 \\times 385)$" },
              { kind: "principle", name: "Heat losses", statement: "Real systems lose energy to surroundings." },
            ],
            steps: [
              { part: "a", reasoning: "$\\Delta T = 30000/(0.8 \\times 385) = 30000/308 ≈ 97.4$°C.", working: "\\frac{30000}{308}=97.4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State answer.", working: "97.4\\ \\text{°C}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Final temperature = $20 + 97.4 = 117.4$°C.", working: "117.4\\ \\text{°C}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Some energy is lost to surroundings as heat → less energy heats the block.", working: "\\text{heat losses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ≈97.4°C (b) ≈117.4°C (c) heat losses to surroundings",
            commonErrors: ["Using final temperature as $\\Delta T$ in the calculation."],
            examinerNote: "M1 A1 for (a), A1 for (b),(c).",
          },
        },
        {
          id: "mypp4-u2-shc-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two substances of equal mass receive identical amounts of heat energy. Substance X has a lower specific heat capacity than substance Y. Which shows the greater temperature rise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Substance Y" },
              { id: "b", text: "Substance X — lower c gives larger ΔT" },
              { id: "c", text: "Both rise equally" },
              { id: "d", text: "Neither can be determined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "ΔT = Q/mc", statement: "$\\Delta T \\propto 1/c$ for fixed $Q$ and $m$." }],
            steps: [
              { reasoning: "Same $Q$ and $m$: temperature rise inversely proportional to $c$.", working: "\\Delta T\\propto\\frac{1}{c}", marks: 1, markCode: "M" },
              { reasoning: "Lower $c$ (X) → larger temperature rise.", working: "\\text{X larger}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** substance X",
            commonErrors: ["Reversing the relationship."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
