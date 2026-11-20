import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cilm-u6-lesson-6-3",
  code: "6-3",
  title: "Units and conversion",
  goal: "I CAN convert between metric units of length, mass and capacity, and choose appropriate units.",
  standards: ["0862 Measure: units and conversion"],
  vocabulary: [
    { term: "Conversion factor", definition: "The number you multiply or divide by to change units." },
    { term: "Metric system", definition: "Decimal-based system: milli, centi, base, kilo, mega." },
    { term: "km", definition: "Kilometre = $1000$ metres." },
    { term: "cm", definition: "Centimetre = $0.01$ metres ($1$ m $= 100$ cm)." },
    { term: "ml", definition: "Millilitre = $0.001$ litres ($1$ L $= 1000$ ml)." },
    { term: "kg", definition: "Kilogram = $1000$ grams." },
  ],
  concepts: [
    {
      id: "cilm-u6-conversions",
      title: "Metric conversions",
      skill: "Convert between km/m/cm/mm, kg/g/mg, L/ml using place value shifts.",
      lesson: {
        sections: [
          {
            heading: "Length",
            body: "$1$ km $= 1000$ m; $1$ m $= 100$ cm; $1$ cm $= 10$ mm.\n\nConverting UP (to smaller units): multiply. DOWN: divide.\n\n$2.5$ km $= 2500$ m; $3.4$ m $= 340$ cm.",
          },
          {
            heading: "Mass and capacity",
            body: "$1$ kg $= 1000$ g; $1$ g $= 1000$ mg.\n$1$ L $= 1000$ ml; $1$ L $= 1000$ cm³.\n\n$1.2$ kg $= 1200$ g; $750$ ml $= 0.75$ L.",
          },
          {
            heading: "Choosing units",
            body: "Match unit to scale: mm for pencil width, cm for phone, m for room, km for journey; mg for medicine, g for food, kg for person; ml for drink, L for bucket.",
          },
        ],
        keyFormulas: [
          { name: "Metric prefixes", statement: "kilo $=\\times1000$; centi $=\\times0.01$; milli $=\\times0.001$." },
        ],
        workedExample: {
          problem: "Convert $2.4$ km to metres, then to centimetres.",
          solution: "$2.4$ km $= 2400$ m $= 240{,}000$ cm.",
        },
      },
      questions: [
        {
          id: "cilm-u6-conv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many centimetres are in $3$ metres?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$300$ cm" },
              { id: "b", text: "$30$ cm" },
              { id: "c", text: "$3000$ cm" },
              { id: "d", text: "$0.03$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "m to cm", statement: "$1$ m $= 100$ cm, so $3 \\times 100 = 300$ cm." },
            ],
            steps: [
              { reasoning: "$3 \\times 100 = 300$ cm.", working: "3\\times100=300", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $300$ cm",
            commonErrors: ["Choosing (b) — off by factor of 10."],
          },
        },
        {
          id: "cilm-u6-conv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $1.5$ litres to millilitres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "L to ml", statement: "$1$ L $= 1000$ ml; $1.5 \\times 1000 = 1500$ ml." },
            ],
            steps: [
              { reasoning: "$1.5 \\times 1000 = 1500$ ml.", working: "1500\\text{ ml}", marks: 1, markCode: "M" },
              { reasoning: "$1500$ ml.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1500$ ml",
            commonErrors: ["$15$ ml — multiplying by 10 instead of 1000."],
          },
        },
        {
          id: "cilm-u6-conv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe needs $250$ g of flour. You have a $0.5$ kg bag. How many grams are left after using the recipe amount?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed conversion", statement: "$0.5$ kg $= 500$ g; $500 - 250 = 250$ g left." },
            ],
            steps: [
              { reasoning: "Convert first: $0.5 \\times 1000 = 500$ g.", working: "500\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "$500 - 250 = 250$ g.", working: "250\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "$250$ g remaining.", marks: 1, markCode: "M" },
              { reasoning: "Correct conversion before subtracting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250$ g",
            commonErrors: ["$0.5 - 250$ — must convert to same units first."],
          },
        },
        {
          id: "cilm-u6-conv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A car journey is $2.5$ hours at $80$ km/h.",
          parts: [
            { label: "a", prompt: "Find the distance in km.", marks: 2 },
            { label: "b", prompt: "Convert the distance to metres.", marks: 2 },
            { label: "c", prompt: "If the car uses $8$ litres per $100$ km, how much fuel is used?", marks: 3 },
            { label: "d", prompt: "Convert the fuel to millilitres.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multi-step conversion", statement: "Distance $= s \\times t$; fuel $= \\frac{8}{100} \\times d$; convert units throughout." },
            ],
            steps: [
              { part: "a", reasoning: "$d = 80 \\times 2.5 = 200$ km.", working: "200\\text{ km}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$200 \\times 1000 = 200{,}000$ m.", working: "200000\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fuel $= \\frac{8}{100} \\times 200 = 16$ litres.", working: "16\\text{ L}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rate applied correctly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$16 \\times 1000 = 16{,}000$ ml.", working: "16000\\text{ ml}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $200$ km (b) $200{,}000$ m (c) $16$ L (d) $16{,}000$ ml",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Fuel correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Conversion correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) using $8$ litres per km instead of per $100$ km."],
          },
        },
      ],
    },
    {
      id: "cilm-u6-speed",
      title: "Speed and density",
      skill: "Calculate speed, and introduce density as mass per unit volume.",
      lesson: {
        sections: [
          {
            heading: "Speed",
            body: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$\n\nUnits: km/h, m/s, m/min. Always match distance and time units.",
          },
          {
            heading: "Density",
            body: "$\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$\n\nUnits: g/cm³, kg/m³. Water $= 1$ g/cm³ — objects denser than water sink.",
          },
          {
            heading: "Rearranging",
            body: "$d = s \\times t$; $t = \\frac{d}{s}$; $s = \\frac{d}{t}$.\n\nDensity: $m = \\rho V$; $V = \\frac{m}{\\rho}$.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$s = \\frac{d}{t}$ — distance over time." },
          { name: "Density", statement: "$\\rho = \\frac{m}{V}$ — mass over volume." },
        ],
        workedExample: {
          problem: "A car travels $180$ km in $2$ hours. Find its speed.",
          solution: "$s = \\frac{180}{2} = 90$ km/h.",
        },
      },
      questions: [
        {
          id: "cilm-u6-spd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cyclist rides $30$ km in $2$ hours. What is their speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$ km/h" },
              { id: "b", text: "$60$ km/h" },
              { id: "c", text: "$32$ km/h" },
              { id: "d", text: "$0.07$ km/h" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "$s = \\frac{d}{t} = \\frac{30}{2} = 15$ km/h." },
            ],
            steps: [
              { reasoning: "$30 \\div 2 = 15$ km/h.", working: "30\\div2=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $15$ km/h",
            commonErrors: ["Choosing (b) — multiplied instead of divided."],
          },
        },
        {
          id: "cilm-u6-spd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block of metal has mass $54$ g and volume $20$ cm³. Find its density.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density", statement: "$\\rho = \\frac{m}{V} = \\frac{54}{20} = 2.7$ g/cm³." },
            ],
            steps: [
              { reasoning: "$\\rho = \\frac{54}{20} = 2.7$ g/cm³.", working: "54\\div20=2.7", marks: 1, markCode: "M" },
              { reasoning: "$2.7$ g/cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.7$ g/cm³",
            commonErrors: ["$\\frac{20}{54}$ — density is mass/volume, not volume/mass."],
          },
        },
        {
          id: "cilm-u6-spd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A train travels $240$ km at $120$ km/h. How long does the journey take?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rearranging speed", statement: "$t = \\frac{d}{s} = \\frac{240}{120} = 2$ hours." },
            ],
            steps: [
              { reasoning: "Rearrange: $t = \\frac{d}{s}$.", working: "t=\\frac{d}{s}", marks: 1, markCode: "M" },
              { reasoning: "$t = \\frac{240}{120} = 2$ hours.", working: "t=2\\text{ h}", marks: 1, markCode: "M" },
              { reasoning: "$2$ hours.", marks: 1, markCode: "M" },
              { reasoning: "Units consistent (km and km/h).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ hours",
            commonErrors: ["$240 \\times 120$ — time is distance ÷ speed."],
          },
        },
        {
          id: "cilm-u6-spd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A delivery van travels $180$ km in $2.5$ hours.",
          parts: [
            { label: "a", prompt: "Find the average speed in km/h.", marks: 2 },
            { label: "b", prompt: "Convert the speed to m/s.", marks: 3 },
            { label: "c", prompt: "A second van travels the same distance at $80$ km/h. How long does it take?", marks: 2 },
            { label: "d", prompt: "Which van is faster and by how much?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed analysis", statement: "Speed = d/t; convert km/h→m/s ($\\div3.6$); compare rates." },
            ],
            steps: [
              { part: "a", reasoning: "$s = \\frac{180}{2.5} = 72$ km/h.", working: "72\\text{ km/h}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$72 \\text{ km/h} = 72 \\times \\frac{1000}{3600} = 20$ m/s.", working: "72\\div3.6=20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conversion correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$20$ m/s.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$t = \\frac{180}{80} = 2.25$ hours.", working: "2.25\\text{ h}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "First van $72$ km/h $> 80$? No — second van is faster by $8$ km/h.", working: "80-72=8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comparison correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $72$ km/h (b) $20$ m/s (c) $2.25$ h (d) second van faster by $8$ km/h",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Conversion correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (b) multiplying by $3.6$ — km/h to m/s divides by $3.6$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u6-units-notes",
      title: "Units, conversion, speed — revision notes",
      summary: "Metric conversions, speed and density formulas.",
      sections: [
        {
          heading: "Conversions",
          body: "Metric: $\\times1000$ per step up (km→m→cm→mm). Convert before calculating. $1$ L $= 1000$ ml $= 1000$ cm³.",
        },
        {
          heading: "Speed & density",
          body: "$s=d/t$; rearrange for any variable. $\\rho = m/V$; water $=1$ g/cm³. Units must match before substituting.",
        },
      ],
    },
  ],
};
