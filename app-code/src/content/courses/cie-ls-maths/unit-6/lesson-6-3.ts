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
              { id: "a", text: "$0.03$ cm" },
              { id: "b", text: "$30$ cm" },
              { id: "c", text: "$3000$ cm" },
              { id: "d", text: "$300$ cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "m to cm", statement: "$1$ m $= 100$ cm, so $3 \\times 100 = 300$ cm." },
            ],
            steps: [
              { reasoning: "$3 \\times 100 = 300$ cm.", working: "3\\times100=300", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $300$ cm",
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
        {
          id: "cilm-u6-conv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many metres are in $2.5$ km?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2500$ m" },
              { id: "b", text: "$25$ m" },
              { id: "c", text: "$250$ m" },
              { id: "d", text: "$25\\,000$ m" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "km to m", statement: "$1$ km $= 1000$ m; $2.5\\times1000 = 2500$ m." },
            ],
            steps: [
              { reasoning: "$2.5 \\times 1000 = 2500$ m.", working: "2.5\\times1000=2500", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2500$ m",
            commonErrors: ["Choosing (a) — off by factor of 10."],
          },
        },
        {
          id: "cilm-u6-conv-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert $4500$ g to kilograms.",
          response: { type: "numeric", parts: [{ label: "mass (kg)", answer: 4.5 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "g to kg", statement: "$1$ kg $= 1000$ g; $4500\\div1000 = 4.5$ kg." },
            ],
            steps: [
              { reasoning: "$4500 \\div 1000 = 4.5$ kg.", working: "4.5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$4.5$ kg",
            commonErrors: ["$45$ kg — divided by 100 instead of 1000."],
          },
        },
        {
          id: "cilm-u6-conv-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $0.75$ litres to millilitres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "L to ml", statement: "$1$ L $= 1000$ ml; $0.75\\times1000 = 750$ ml." },
            ],
            steps: [
              { reasoning: "$0.75 \\times 1000 = 750$ ml.", working: "750\\text{ ml}", marks: 1, markCode: "M" },
              { reasoning: "$750$ ml.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$750$ ml",
            commonErrors: ["$7.5$ ml — wrong direction/factor."],
          },
        },
        {
          id: "cilm-u6-conv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which conversion is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ L $= 10$ cm³" },
              { id: "b", text: "$1$ L $= 1000$ cm³" },
              { id: "c", text: "$1$ L $= 1$ cm³" },
              { id: "d", text: "$1$ L $= 100$ cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Capacity", statement: "$1$ L $= 1000$ ml $= 1000$ cm³." },
            ],
            steps: [
              { reasoning: "$1$ litre $= 1000$ cm³.", working: "1000", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $1$ L $= 1000$ cm³",
            commonErrors: ["Choosing (a) — off by factor of 10."],
          },
        },
        {
          id: "cilm-u6-conv-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $3.2$ m to centimetres.",
          response: { type: "numeric", parts: [{ label: "length (cm)", answer: 320 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "m to cm", statement: "$1$ m $= 100$ cm; $3.2\\times100 = 320$ cm." },
            ],
            steps: [
              { reasoning: "$3.2 \\times 100 = 320$ cm.", working: "320", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$320$ cm",
            commonErrors: ["$32$ cm — multiplied by 10 instead of 100."],
          },
        },
        {
          id: "cilm-u6-conv-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Convert $2.8$ kg to grams, then subtract $350$ g. Give the answer in grams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Convert then calculate", statement: "$2.8$ kg $= 2800$ g; $2800-350 = 2450$ g." },
            ],
            steps: [
              { reasoning: "Convert: $2.8\\times1000 = 2800$ g.", working: "2800\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "$2800 - 350 = 2450$ g.", working: "2450", marks: 1, markCode: "M" },
              { reasoning: "$2450$ g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2450$ g",
            commonErrors: ["$2.8-350$ — must convert to same units first."],
          },
        },
        {
          id: "cilm-u6-conv-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the most appropriate unit for the mass of an adult person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grams" },
              { id: "b", text: "Metres" },
              { id: "c", text: "Milligrams" },
              { id: "d", text: "Kilograms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choosing units", statement: "kg for a person — g would give unwieldy thousands." },
            ],
            steps: [
              { reasoning: "Adult mass is best in kilograms.", working: "kg", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Kilograms",
            commonErrors: ["Choosing (b) — grams give numbers like $70\\,000$."],
          },
        },
        {
          id: "cilm-u6-conv-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $1250$ ml to litres.",
          response: { type: "numeric", parts: [{ label: "volume (L)", answer: 1.25 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "ml to L", statement: "$1250\\div1000 = 1.25$ L." },
            ],
            steps: [
              { reasoning: "$1250 \\div 1000 = 1.25$ L.", working: "1.25", marks: 1, markCode: "M" },
              { reasoning: "$1.25$ L.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.25$ L",
            commonErrors: ["$12.5$ L — divided by 100 instead of 1000."],
          },
        },
        {
          id: "cilm-u6-conv-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Convert $4.5$ cm to millimetres.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$45$ mm" },
              { id: "b", text: "$4.5$ mm" },
              { id: "c", text: "$0.45$ mm" },
              { id: "d", text: "$450$ mm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "cm to mm", statement: "$1$ cm $= 10$ mm; $4.5\\times10 = 45$ mm." },
            ],
            steps: [
              { reasoning: "$4.5 \\times 10 = 45$ mm.", working: "45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $45$ mm",
            commonErrors: ["Choosing (b) — that's m→cm factor applied wrongly."],
          },
        },
        {
          id: "cilm-u6-conv-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A water tank holds $2.4$ litres.",
          parts: [
            { label: "a", prompt: "Convert the capacity to millilitres.", marks: 2 },
            { label: "b", prompt: "$350$ ml is poured out. Find the remaining volume in litres.", marks: 2 },
            { label: "c", prompt: "State the capacity in cm³.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Capacity conversions", statement: "$1$ L $= 1000$ ml $= 1000$ cm³." },
            ],
            steps: [
              { part: "a", reasoning: "$2.4\\times1000 = 2400$ ml.", working: "2400\\text{ ml}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2400-350 = 2050$ ml $= 2.05$ L.", working: "2.05\\text{ L}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct conversion back to litres.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2.4$ L $= 2400$ cm³.", working: "2400\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2400$ ml (b) $2.05$ L (c) $2400$ cm³",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (b) subtracting in litres without converting ml first."],
          },
        },
        {
          id: "cilm-u6-conv-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the largest: $0.8$ kg, $750$ g, or $0.09$ kg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.09$ kg" },
              { id: "b", text: "$750$ g" },
              { id: "c", text: "$0.8$ kg" },
              { id: "d", text: "They are equal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Compare units", statement: "Convert all to grams: $800$ g, $750$ g, $90$ g." },
            ],
            steps: [
              { reasoning: "$0.8$ kg $=800$ g $> 750$ g $> 90$ g.", working: "800>750>90", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.8$ kg",
            commonErrors: ["Choosing (b) — comparing numbers without converting units."],
          },
        },
        {
          id: "cilm-u6-conv-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Convert $3.6$ km to metres, and then to millimetres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Length chain", statement: "$3.6$ km $= 3600$ m $= 3\\,600\\,000$ mm." },
            ],
            steps: [
              { reasoning: "$3.6 \\times 1000 = 3600$ m.", working: "3600\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "$3600 \\times 1000 = 3\\,600\\,000$ mm (or $\\times100$ twice).", working: "3600000\\text{ mm}", marks: 1, markCode: "M" },
              { reasoning: "Both conversions correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3600$ m and $3\\,600\\,000$ mm",
            commonErrors: ["Multiplying by $100$ instead of $1000$ for km→m."],
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
              { id: "a", text: "$32$ km/h" },
              { id: "b", text: "$0.07$ km/h" },
              { id: "c", text: "$15$ km/h" },
              { id: "d", text: "$60$ km/h" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "$s = \\frac{d}{t} = \\frac{30}{2} = 15$ km/h." },
            ],
            steps: [
              { reasoning: "$30 \\div 2 = 15$ km/h.", working: "30\\div2=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $15$ km/h",
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
        {
          id: "cilm-u6-spd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A runner covers $100$ m in $20$ s. What is their speed in m/s?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2000$ m/s" },
              { id: "b", text: "$0.2$ m/s" },
              { id: "c", text: "$20$ m/s" },
              { id: "d", text: "$5$ m/s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "$s = \\frac{d}{t} = \\frac{100}{20} = 5$ m/s." },
            ],
            steps: [
              { reasoning: "$100 \\div 20 = 5$ m/s.", working: "100\\div20=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $5$ m/s",
            commonErrors: ["Choosing (b) — that's $100\\div5$, wrong operation."],
          },
        },
        {
          id: "cilm-u6-spd-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "An object has mass $100$ g and volume $50$ cm³. Find its density.",
          response: { type: "numeric", parts: [{ label: "density (g/cm³)", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density", statement: "$\\rho = \\frac{m}{V} = \\frac{100}{50} = 2$ g/cm³." },
            ],
            steps: [
              { reasoning: "$100 \\div 50 = 2$ g/cm³.", working: "100\\div50=2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$2$ g/cm³",
            commonErrors: ["$0.5$ — inverted mass and volume."],
          },
        },
        {
          id: "cilm-u6-spd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bus travels $60$ km in $1.5$ hours. Find its average speed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "$s = \\frac{60}{1.5} = 40$ km/h." },
            ],
            steps: [
              { reasoning: "$s = 60 \\div 1.5 = 40$ km/h.", working: "60\\div1.5=40", marks: 1, markCode: "M" },
              { reasoning: "$40$ km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ km/h",
            commonErrors: ["$90$ km/h — multiplied instead of dividing."],
          },
        },
        {
          id: "cilm-u6-spd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The formula for speed is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$s = \\frac{t}{d}$" },
              { id: "b", text: "$s = \\frac{d}{t}$" },
              { id: "c", text: "$s = d \\times t$" },
              { id: "d", text: "$s = d + t$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "Speed = distance ÷ time." },
            ],
            steps: [
              { reasoning: "$s = \\frac{d}{t}$.", working: "d/t", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $s = \\frac{d}{t}$",
            commonErrors: ["Choosing (a) — that's the distance formula."],
          },
        },
        {
          id: "cilm-u6-spd-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels at $45$ km/h. How long does it take to travel $90$ km?",
          response: { type: "numeric", parts: [{ label: "time (hours)", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rearranging", statement: "$t = \\frac{d}{s} = \\frac{90}{45} = 2$ h." },
            ],
            steps: [
              { reasoning: "$t = 90 \\div 45 = 2$ hours.", working: "90\\div45=2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$2$ hours",
            commonErrors: ["$4050$ — multiplied instead of dividing."],
          },
        },
        {
          id: "cilm-u6-spd-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A material has density $3$ g/cm³. What is the mass of a piece with volume $40$ cm³?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Density rearranged", statement: "$m = \\rho V = 3 \\times 40 = 120$ g." },
            ],
            steps: [
              { reasoning: "Rearrange: $m = \\rho \\times V$.", working: "m=\\rho V", marks: 1, markCode: "M" },
              { reasoning: "$m = 3 \\times 40 = 120$ g.", working: "120\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "$120$ g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120$ g",
            commonErrors: ["$\\frac{3}{40}$ — dividing instead of multiplying."],
          },
        },
        {
          id: "cilm-u6-spd-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The density of water is approximately...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$ g/cm³" },
              { id: "b", text: "$100$ g/cm³" },
              { id: "c", text: "$1$ g/cm³" },
              { id: "d", text: "$0.1$ g/cm³" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density of water", statement: "Water $= 1$ g/cm³ — the reference density." },
            ],
            steps: [
              { reasoning: "Water density $= 1$ g/cm³.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1$ g/cm³",
            commonErrors: ["Choosing (c) — confusing with iron or similar."],
          },
        },
        {
          id: "cilm-u6-spd-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object has volume $30$ cm³ and density $2.5$ g/cm³. Find its mass.",
          response: { type: "numeric", parts: [{ label: "mass (g)", answer: 75 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Density rearranged", statement: "$m = \\rho V = 2.5 \\times 30 = 75$ g." },
            ],
            steps: [
              { reasoning: "$m = 2.5 \\times 30 = 75$ g.", working: "75", marks: 1, markCode: "M" },
              { reasoning: "$75$ g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75$ g",
            commonErrors: ["$12$ g — divided instead of multiplying."],
          },
        },
        {
          id: "cilm-u6-spd-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A speed of $20$ m/s is equal to how many km/h?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$72$ km/h" },
              { id: "b", text: "$20$ km/h" },
              { id: "c", text: "$200$ km/h" },
              { id: "d", text: "$36$ km/h" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed conversion", statement: "$1$ m/s $= 3.6$ km/h; $20\\times3.6 = 72$ km/h." },
            ],
            steps: [
              { reasoning: "$20 \\times 3.6 = 72$ km/h.", working: "20\\times3.6=72", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $72$ km/h",
            commonErrors: ["Choosing (b) — used $\\div3.6$ direction wrongly for m/s→km/h."],
          },
        },
        {
          id: "cilm-u6-spd-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A car travels $150$ km in $2$ hours at constant speed.",
          parts: [
            { label: "a", prompt: "Find the average speed in km/h.", marks: 2 },
            { label: "b", prompt: "How long would it take to travel $300$ km at the same speed?", marks: 2 },
            { label: "c", prompt: "How far does it travel in $45$ minutes at this speed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed applications", statement: "$s=d/t$; rearrange for $t$ and $d$; convert $45$ min $=0.75$ h." },
            ],
            steps: [
              { part: "a", reasoning: "$s = 150\\div2 = 75$ km/h.", working: "75\\text{ km/h}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$t = 300\\div75 = 4$ hours.", working: "4\\text{ h}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$45$ min $= 0.75$ h; $d = 75\\times0.75 = 56.25$ km.", working: "56.25\\text{ km}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $75$ km/h (b) $4$ h (c) $56.25$ km",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (c) using $45$ as hours instead of converting to $0.75$ h."],
          },
        },
        {
          id: "cilm-u6-spd-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An object has mass $60$ g and volume $12$ cm³. What is its density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ g/cm³" },
              { id: "b", text: "$0.2$ g/cm³" },
              { id: "c", text: "$48$ g/cm³" },
              { id: "d", text: "$72$ g/cm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density", statement: "$\\rho = \\frac{60}{12} = 5$ g/cm³." },
            ],
            steps: [
              { reasoning: "$60 \\div 12 = 5$ g/cm³.", working: "60\\div12=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$ g/cm³",
            commonErrors: ["Choosing (b) — inverted the formula."],
          },
        },
        {
          id: "cilm-u6-spd-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cube has side $4$ cm and mass $256$ g. Find its density.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Density of cube", statement: "$V = 4^3 = 64$ cm³; $\\rho = \\frac{256}{64} = 4$ g/cm³." },
            ],
            steps: [
              { reasoning: "Volume $= 4\\times4\\times4 = 64$ cm³.", working: "64\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "$\\rho = 256\\div64 = 4$ g/cm³.", working: "\\rho=4", marks: 1, markCode: "M" },
              { reasoning: "Density $=4$ g/cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ g/cm³",
            commonErrors: ["Using side $4$ as volume — must cube it."],
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
