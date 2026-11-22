import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cilm-u2-lesson-2-3",
  code: "2-3",
  title: "Scale drawings and best buys",
  goal: "I CAN use scale factors on drawings and compare value using unit rates and multipliers.",
  standards: ["0862 Ratio and proportion: scale, best buys"],
  vocabulary: [
    { term: "Scale", definition: "The ratio of drawing size to real size — $1:100$ means $1$ cm represents $100$ cm." },
    { term: "Scale factor", definition: "The multiplier converting drawing measurements to real ones (and back)." },
    { term: "Best buy", definition: "The option with the lowest unit price or rate." },
    { term: "Unit price", definition: "Price per single unit — per kg, per litre, per item." },
    { term: "Enlargement", definition: "A scale factor greater than 1 — the image is bigger than the object." },
    { term: "Reduction", definition: "A scale factor between 0 and 1 — the image is smaller." },
  ],
  concepts: [
    {
      id: "cilm-u2-scale",
      title: "Scale drawings and maps",
      skill: "Convert between map and real measurements using scale ratios in both directions.",
      lesson: {
        sections: [
          {
            heading: "Reading a scale",
            body: "A map scale of $1:50\\ 000$ means $1$ cm on the map $=50\\ 000$ cm $=500$ m on the ground.\n\n- Map $\\to$ real: multiply by the scale factor.\n- Real $\\to$ map: divide by the scale factor.",
          },
          {
            heading: "Working in consistent units",
            body: "Convert everything to the same unit first. If the map is in cm and real distances in km:\n\n$1\\ \\text{cm} \\to 500\\ \\text{m} = 0.5\\ \\text{km}$\n\nOr work in cm throughout: $2\\ \\text{km} = 200\\ 000\\ \\text{cm}$.",
          },
          {
            heading: "Scale factor problems",
            body: "A model is built at scale $1:20$. A real car is $4.6$ m long → model length $=4.6\\div20=0.23$ m $=23$ cm. Reverse: model $15$ cm → real $=15\\times20=300$ cm $=3$ m.",
          },
        ],
        keyFormulas: [
          { name: "Scale conversion", statement: "Real $=$ drawing $\\times$ scale denominator; drawing $=$ real $\\div$ scale denominator." },
          { name: "Scale as ratio", statement: "$1:n$ means drawing:real $=1:n$." },
        ],
        workedExample: {
          problem: "On a $1:25\\ 000$ map, two towns are $8$ cm apart. What is the real distance in km?",
          solution: "$8 \\times 25\\ 000 = 200\\ 000$ cm $=2\\ \\text{km}$.",
        },
      },
      questions: [
        {
          id: "cilm-u2-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A map has scale $1:10\\ 000$. What real distance does $1$ cm represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$ km" },
              { id: "b", text: "$100$ km" },
              { id: "c", text: "$100$ m" },
              { id: "d", text: "$1$ km" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Map scale", statement: "$1$ cm on map $=10\\ 000$ cm real $=100$ m." },
            ],
            steps: [
              { reasoning: "$10\\ 000$ cm $=100$ m $=0.1$ km.", working: "10\\ 000\\text{ cm}=100\\text{ m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $100$ m",
            commonErrors: ["Choosing (b) — $10\\ 000$ cm is $100$ m, not $1$ km ($1$ km $=100\\ 000$ cm)."],
          },
        },
        {
          id: "cilm-u2-sc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A model ship is built at scale $1:50$. The real ship is $120$ m long. How long is the model?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale factor", statement: "Model length = real length ÷ scale denominator." },
            ],
            steps: [
              { reasoning: "$120\\text{ m} \\div 50 = 2.4$ m.", working: "120\\div50=2.4", marks: 1, markCode: "M" },
              { reasoning: "$2.4$ m $=240$ cm.", working: "2.4\\text{ m}=240\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.4$ m ($240$ cm)",
            commonErrors: ["Multiplying by 50 instead of dividing — scale $1:50$ makes the model smaller."],
          },
        },
        {
          id: "cilm-u2-sc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "On a $1:25\\ 000$ map, a lake is $6$ cm long and $4$ cm wide. Find its real area in km².",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale and area", statement: "Lengths scale by the factor; AREA scales by the factor SQUARED." },
            ],
            steps: [
              { reasoning: "Real length $=6\\times25\\ 000=150\\ 000$ cm $=1.5$ km.", working: "1.5\\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Real width $=4\\times25\\ 000=100\\ 000$ cm $=1$ km.", working: "1\\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Area $=1.5\\times1=1.5\\ \\text{km}^2$.", working: "1.5\\times1=1.5", marks: 1, markCode: "M" },
              { reasoning: "(Or scale area directly: $24\\text{ cm}^2 \\times (0.25)^2$... using km conversion gives same result.)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5\\ \\text{km}^2$",
            commonErrors: ["Scaling the map area $24\\text{ cm}^2$ by $25\\ 000$ directly — area needs the square of the scale factor."],
          },
        },
        {
          id: "cilm-u2-sc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A floor plan uses scale $1:100$.",
          parts: [
            { label: "a", prompt: "A room measures $8$ cm by $5$ cm on the plan. Find the real dimensions in metres.", marks: 3 },
            { label: "b", prompt: "Calculate the real area of the room in m².", marks: 2 },
            { label: "c", prompt: "A sofa is drawn $2$ cm long on the plan. How long is the real sofa in metres?", marks: 2 },
            { label: "d", prompt: "Explain the mistake of multiplying the plan's area by 100 instead of 10 000.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale problems", statement: "Lengths ×100; areas ×100² = ×10 000." },
            ],
            steps: [
              { part: "a", reasoning: "$8\\text{ cm}\\times100=800\\text{ cm}=8\\text{ m}$; $5\\text{ cm}\\times100=500\\text{ cm}=5\\text{ m}$.", working: "8\\text{ m},\\ 5\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both dimensions correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Units converted to metres.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area $=8\\times5=40\\ \\text{m}^2$.", working: "40\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2\\text{ cm}\\times100=200\\text{ cm}=2\\text{ m}$ — a sensible sofa length.", working: "2\\times100=200\\text{ cm}=2\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conversion to metres correct and reasonable.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Area is two-dimensional — each dimension scales by 100, so area scales by $100^2=10\\ 000$.", working: "100^2=10\\ 000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8$ m $\\times$ $5$ m (b) $40\\ \\text{m}^2$ (c) $2$ m (d) area scales by $100^2$",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Dimensions correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Area correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Length correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Squared factor explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) multiplying by 100 then forgetting to convert cm back to metres."],
          },
        },
        {
          id: "cilm-u2-sc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a map with scale $1:50\\ 000$, two villages are $3$ cm apart. What is the real distance between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$ km" },
              { id: "b", text: "$15$ km" },
              { id: "c", text: "$150$ m" },
              { id: "d", text: "$1.5$ km" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Map scale", statement: "Real $=$ map $\\times 50\\ 000$ cm $=150\\ 000$ cm $=1.5$ km." },
            ],
            steps: [
              { reasoning: "$3\\times50\\ 000=150\\ 000$ cm $=1.5$ km.", working: "150\\ 000\\text{ cm}=1.5\\text{ km}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $1.5$ km",
            commonErrors: ["Choosing (b) — decimal place error converting cm to km."],
          },
        },
        {
          id: "cilm-u2-sc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A model car is built at scale $1:20$. The real car is $3$ m long. How long is the model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60$ cm" },
              { id: "b", text: "$15$ cm" },
              { id: "c", text: "$6$ cm" },
              { id: "d", text: "$1.5$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale factor", statement: "Model $=$ real $\\div 20$: $3\\text{ m}\\div20=0.15$ m $=15$ cm." },
            ],
            steps: [
              { reasoning: "$300\\text{ cm}\\div20=15$ cm.", working: "300\\div20=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $15$ cm",
            commonErrors: ["Choosing (b) — multiplying by 20 instead of dividing."],
          },
        },
        {
          id: "cilm-u2-sc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a floor plan at scale $1:100$, a room measures $6$ cm by $4$ cm. What are the real dimensions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$600$ cm by $400$ cm is wrong; it is $6$ m by $4$ m" },
              { id: "b", text: "$0.6$ m by $0.4$ m" },
              { id: "c", text: "$60$ m by $40$ m" },
              { id: "d", text: "$6$ m by $4$ m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale factor", statement: "Multiply by 100 then convert cm to m." },
            ],
            steps: [
              { reasoning: "$6\\times100=600$ cm $=6$ m; $4\\times100=400$ cm $=4$ m.", working: "6\\text{ m},\\ 4\\text{ m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $6$ m by $4$ m",
            commonErrors: ["Choosing (c) — dividing by 100 instead of multiplying (scale $1:100$ enlarges)."],
          },
        },
        {
          id: "cilm-u2-sc-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A map has scale $1:20\\ 000$. Two towns are $5$ cm apart on the map. What is the real distance in km?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ km" },
              { id: "b", text: "$10$ km" },
              { id: "c", text: "$0.1$ km" },
              { id: "d", text: "$100$ km" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Map scale", statement: "$5\\times20\\ 000=100\\ 000$ cm $=1$ km." },
            ],
            steps: [
              { reasoning: "$5$ cm on map $=100\\ 000$ cm $=1$ km real.", working: "100\\ 000\\text{ cm}=1\\text{ km}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1$ km",
            commonErrors: ["Choosing (c) — treating $100\\ 000$ cm as $10$ km instead of $1$ km."],
          },
        },
        {
          id: "cilm-u2-sc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a map of scale $1:25\\ 000$, how far apart are two towns that are really $3$ km apart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.2$ cm" },
              { id: "b", text: "$120$ cm" },
              { id: "c", text: "$12$ cm" },
              { id: "d", text: "$7.5$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Real to map", statement: "$3$ km $=300\\ 000$ cm; $\\div25\\ 000=12$ cm." },
            ],
            steps: [
              { reasoning: "$300\\ 000\\div25\\ 000=12$ cm.", working: "300\\ 000\\div25\\ 000=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $12$ cm",
            commonErrors: ["Choosing (d) — multiplying by the scale instead of dividing."],
          },
        },
        {
          id: "cilm-u2-sc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A model is built at scale $1:25$. The real object is $50$ cm long. How long is the model?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 2, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale factor", statement: "Model $=$ real $\\div$ scale: $50\\div25=2$ cm." },
            ],
            steps: [
              { reasoning: "$50\\div25=2$ cm.", working: "50\\div25=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ cm",
            commonErrors: ["$1250$ cm — multiplying by 25 instead of dividing."],
          },
        },
        {
          id: "cilm-u2-sc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A map has scale $1:10\\ 000$. (a) What real distance does $2$ cm represent? (b) How far apart on the map are two places really $1.5$ km apart?",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 200, unit: "m" }, { label: "(b)", answer: 15, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale conversion", statement: "Both directions: multiply for map→real, divide for real→map." },
            ],
            steps: [
              { reasoning: "(a) $2\\times10\\ 000=20\\ 000$ cm $=200$ m.", working: "20\\ 000\\text{ cm}=200\\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "(b) $1.5$ km $=150\\ 000$ cm; $150\\ 000\\div10\\ 000=15$ cm.", working: "150\\ 000\\div10\\ 000=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $200$ m (b) $15$ cm",
            commonErrors: ["In (b) multiplying by $10\\ 000$ gives $15\\ 000\\ 000$ — real→map needs division."],
          },
        },
        {
          id: "cilm-u2-sc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A drawing uses scale $1:40$. A real object is $8$ m long. How long is it on the drawing?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 20, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale factor", statement: "$8$ m $=800$ cm; $800\\div40=20$ cm." },
            ],
            steps: [
              { reasoning: "$800\\div40=20$ cm.", working: "800\\div40=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ cm",
            commonErrors: ["$320$ cm — multiplying instead of dividing by the scale."],
          },
        },
        {
          id: "cilm-u2-sc-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "On a map with scale $1:25\\ 000$, two villages are $6$ cm apart. Find the real distance between them in km.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Map scale", statement: "Map cm × scale → real cm → convert to km." },
            ],
            steps: [
              { reasoning: "Real distance $=6\\times25\\ 000=150\\ 000$ cm.", working: "6\\times25\\ 000=150\\ 000", marks: 1, markCode: "M" },
              { reasoning: "$150\\ 000$ cm $=1500$ m $=1.5$ km.", working: "150\\ 000\\text{ cm}=1.5\\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1.5$ km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$ km",
            commonErrors: ["$15$ km — decimal slip converting cm to km (divide by $100\\ 000$)."],
          },
        },
        {
          id: "cilm-u2-sc-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A model car is built at scale $1:36$. The model is $8$ cm long. Find the length of the real car in metres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale factor", statement: "Real $=$ model $\\times$ scale; convert cm to m." },
            ],
            steps: [
              { reasoning: "Real length $=8\\times36=288$ cm.", working: "8\\times36=288", marks: 1, markCode: "M" },
              { reasoning: "$288$ cm $=2.88$ m.", working: "288\\text{ cm}=2.88\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2.88$ m — a sensible car length.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.88$ m",
            commonErrors: ["Leaving answer as $288$ cm — question asks for metres."],
          },
        },
        {
          id: "cilm-u2-sc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A garden plan uses scale $1:200$. A patio is drawn as a rectangle $5$ cm by $3$ cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale and area", statement: "Convert each dimension to real units, then multiply for area." },
            ],
            steps: [
              { reasoning: "Real length $=5\\times200=1000$ cm $=10$ m.", working: "10\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Real width $=3\\times200=600$ cm $=6$ m.", working: "6\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Area $=10\\times6=60$ m².", working: "10\\times6=60", marks: 1, markCode: "M" },
              { reasoning: "Answer: $60\\ \\text{m}^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\ \\text{m}^2$",
            commonErrors: ["Multiplying plan area $15$ cm² by $200$ — area scales by $200^2$, but converting dimensions first is safer."],
          },
        },
        {
          id: "cilm-u2-sc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A tourist map has scale $1:50\\ 000$.",
          parts: [
            { label: "a", prompt: "Two sites are $4$ cm apart on the map. Find the real distance in km.", marks: 2 },
            { label: "b", prompt: "A road is really $12$ km long. How long is it on the map, in cm?", marks: 2 },
            { label: "c", prompt: "A lake covers $8$ cm² on the map. Find its real area in km².", marks: 3 },
            { label: "d", prompt: "Explain why the area conversion uses the scale factor squared.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale problems", statement: "$1$ cm $=0.5$ km; areas scale by the square of the linear factor." },
            ],
            steps: [
              { part: "a", reasoning: "$4\\times50\\ 000=200\\ 000$ cm $=2$ km.", working: "200\\ 000\\text{ cm}=2\\text{ km}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$12$ km $=1\\ 200\\ 000$ cm; $1\\ 200\\ 000\\div50\\ 000=24$ cm.", working: "24\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$1$ cm² represents $(0.5)^2=0.25$ km²; $8\\times0.25=2$ km².", working: "8\\times0.25=2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Squared factor applied correctly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$2$ km² correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Area is two-dimensional — each dimension scales by $50\\ 000$, so area scales by $50\\ 000^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$ km (b) $24$ cm (c) $2$ km² (d) area scales by factor squared",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Distance correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Map length correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Area correct with squared factor.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (c) multiplying $8$ by $0.5$ — area needs the square of the scale."],
          },
        },
      ],
    },
    {
      id: "cilm-u2-best-buys",
      title: "Best buys and multipliers",
      skill: "Compare prices and quantities using unit rates to find the best value.",
      lesson: {
        sections: [
          {
            heading: "The unit rate method",
            body: "To compare two deals, find the **price per unit** for each:\n\n- $500\\ \\text{g}$ for $\\pounds1.80$ vs $750\\ \\text{g}$ for $\\pounds2.55$\n- Deal 1: $1.80\\div500=\\pounds0.0036$ per gram\n- Deal 2: $2.55\\div750=\\pounds0.0034$ per gram — Deal 2 is cheaper per gram despite higher total price.",
          },
          {
            heading: "Common traps",
            body: "- Bigger pack isn't always better value.\n- 'Buy one get one free' = pay for half → unit price halves.\n- Discounts: compare the FINAL price per unit, not the discount percentage.",
          },
          {
            heading: "Working with different sizes",
            body: "Convert to the same unit first. Compare per litre, per kg or per item — whichever is common. If sizes differ, scale up to a common quantity (e.g. price of 1 kg) before comparing.",
          },
        ],
        keyFormulas: [
          { name: "Best buy rule", statement: "Lowest unit price wins — compute price $\\div$ quantity for each option." },
        ],
        workedExample: {
          problem: "Which is better value: $2\\ \\text{L}$ of juice for $\\pounds3.20$ or $5\\ \\text{L}$ for $\\pounds7.75$?",
          solution: "Deal 1: $3.20\\div2=\\pounds1.60$/L. Deal 2: $7.75\\div5=\\pounds1.55$/L. Deal 2 is better value.",
        },
      },
      questions: [
        {
          id: "cilm-u2-bb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is better value: $400\\ \\text{g}$ of cereal for $\\pounds2.80$ or $650\\ \\text{g}$ for $\\pounds4.55$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot tell without more information" },
              { id: "b", text: "The $400\\ \\text{g}$ pack" },
              { id: "c", text: "They are equal value" },
              { id: "d", text: "The $650\\ \\text{g}$ pack" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit price", statement: "Compare price per gram: both equal $\\pounds0.007$/g." },
            ],
            steps: [
              { reasoning: "Deal 1: $2.80\\div400=\\pounds0.007$ per gram.", working: "2.80\\div400=0.007", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** They are equal value — both $\\pounds0.007$ per gram",
            commonErrors: ["Assuming bigger pack = better value without computing unit prices."],
          },
        },
        {
          id: "cilm-u2-bb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shop sells $6$ yoghurts for $\\pounds2.10$. What is the cost of one yoghurt?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Unit price", statement: "Divide total price by number of items." },
            ],
            steps: [
              { reasoning: "$2.10\\div6=\\pounds0.35$.", working: "2.10\\div6=0.35", marks: 1, markCode: "M" },
              { reasoning: "$35\\text{p}$ per yoghurt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds0.35$ ($35\\text{p}$)",
            commonErrors: ["$2.10\\times6$ — multiplying instead of dividing."],
          },
        },
        {
          id: "cilm-u2-bb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $10\\%$ discount is applied to two products: A costs $\\pounds40$, B costs $\\pounds25$. Which has the bigger discount in pounds, and by how much?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discount comparison", statement: "Same percentage, different bases — the larger original price saves more." },
            ],
            steps: [
              { reasoning: "A: $10\\%$ of $40 = \\pounds4$.", working: "0.10\\times40=4", marks: 1, markCode: "M" },
              { reasoning: "B: $10\\%$ of $25 = \\pounds2.50$.", working: "0.10\\times25=2.50", marks: 1, markCode: "M" },
              { reasoning: "A saves $\\pounds4 - \\pounds2.50 = \\pounds1.50$ more.", working: "4-2.50=1.50", marks: 1, markCode: "M" },
              { reasoning: "Same percentage doesn't mean same saving — base matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Product A — saves $\\pounds1.50$ more ($\\pounds4$ vs $\\pounds2.50$ discount)",
            commonErrors: ["Saying they're equal because both are $10\\%$ — the pound amounts differ."],
          },
        },
        {
          id: "cilm-u2-bb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A supermarket compares two brands of pasta sauce.",
          parts: [
            { label: "a", prompt: "Brand X: $500\\ \\text{g}$ jar for $\\pounds1.75$. Find the price per 100 g.", marks: 2 },
            { label: "b", prompt: "Brand Y: $750\\ \\text{g}$ jar for $\\pounds2.60$. Find the price per 100 g.", marks: 2 },
            { label: "c", prompt: "Which brand is better value? Justify with unit prices.", marks: 2 },
            { label: "d", prompt: "If you need exactly $1.5\\ \\text{kg}$ of sauce, which brand(s) could you buy and what would it cost?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Best buys", statement: "Normalise to a common unit (per 100 g) before comparing." },
            ],
            steps: [
              { part: "a", reasoning: "$1.75\\div5=\\pounds0.35$ per 100 g (since $500\\text{g}=5$ units of 100 g).", working: "1.75\\div5=0.35", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2.60\\div7.5=\\pounds0.3466\\ldots$ per 100 g — or $2.60\\div750\\times100=\\pounds0.34\\overline{6}$.", working: "2.60\\div7.5\\approx0.347", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct method.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Brand Y cheaper per 100 g ($0.347 < 0.35$) — better value despite higher jar price.", working: "0.347<0.35", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justified with numbers.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$1.5\\text{ kg}=1500\\text{ g}$. X: 3 jars $=1500\\text{g}$, cost $3\\times1.75=\\pounds5.25$. Y: 2 jars $=1500\\text{g}$, cost $2\\times2.60=\\pounds5.20$.", working: "X:\\pounds5.25; Y:\\pounds5.20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both quantities correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Y slightly cheaper — consistent with (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds0.35$/100 g (b) $\\approx\\pounds0.347$/100 g (c) Brand Y — lower unit price (d) X: 3 jars $\\pounds5.25$; Y: 2 jars $\\pounds5.20$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Unit prices correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Unit price correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong choice.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Purchase options correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) forgetting jars are discrete — can't buy fractional jars."],
          },
        },
        {
          id: "cilm-u2-bb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is better value: $2\\ \\text{L}$ of juice for $\\pounds3.00$ or $5\\ \\text{L}$ for $\\pounds6.50$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are equal value" },
              { id: "b", text: "The $2\\ \\text{L}$ bottle" },
              { id: "c", text: "Cannot tell" },
              { id: "d", text: "The $5\\ \\text{L}$ bottle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit price", statement: "Per litre: $\\pounds1.50$ vs $\\pounds1.30$ — bigger bottle wins." },
            ],
            steps: [
              { reasoning: "$3.00\\div2=1.50$; $6.50\\div5=1.30$ — lower unit price wins.", working: "1.50 \\text{ vs } 1.30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The $5\\ \\text{L}$ bottle ($\\pounds1.30$/L vs $\\pounds1.50$/L)",
            commonErrors: ["Choosing (a) — lower total price but higher price per litre."],
          },
        },
        {
          id: "cilm-u2-bb-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A carton of $10$ eggs costs $\\pounds2.20$. What is the cost of one egg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$220\\text{p}$" },
              { id: "b", text: "$20\\text{p}$" },
              { id: "c", text: "$\\pounds2.20$" },
              { id: "d", text: "$22\\text{p}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Unit price", statement: "$2.20\\div10=\\pounds0.22=22$ p." },
            ],
            steps: [
              { reasoning: "$2.20\\div10=\\pounds0.22$ per egg.", working: "2.20\\div10=0.22", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $22\\text{p}$",
            commonErrors: ["Choosing (c) — $22$ pence, not $\\pounds22$; check the unit."],
          },
        },
        {
          id: "cilm-u2-bb-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shop offers 'buy one get one free' on an item normally costing $\\pounds3$. What is the effective cost per item when buying two?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds2$" },
              { id: "b", text: "$\\pounds3$" },
              { id: "c", text: "$\\pounds1.50$" },
              { id: "d", text: "$\\pounds0.75$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multibuy offers", statement: "Pay for 1, get 2 → pay $\\pounds3$ for 2 items." },
            ],
            steps: [
              { reasoning: "$3\\div2=\\pounds1.50$ per item.", working: "3\\div2=1.50", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\pounds1.50$",
            commonErrors: ["Choosing (c) — halving the price is wrong; you pay full price for one item."],
          },
        },
        {
          id: "cilm-u2-bb-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Product A costs $\\pounds50$ with $20\\%$ off; Product B costs $\\pounds30$ with $10\\%$ off. Which gives the bigger discount in pounds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They save the same amount" },
              { id: "b", text: "Product B — saves $\\pounds3$" },
              { id: "c", text: "Product A — saves $\\pounds10$" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discount comparison", statement: "A: $20\\%$ of $50=\\pounds10$; B: $10\\%$ of $30=\\pounds3$." },
            ],
            steps: [
              { reasoning: "$0.20\\times50=10$; $0.10\\times30=3$ — A saves $\\pounds7$ more.", working: "10 \\text{ vs } 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Product A — $\\pounds10$ vs $\\pounds3$ discount",
            commonErrors: ["Choosing (c) — same percentage doesn't mean same pound saving."],
          },
        },
        {
          id: "cilm-u2-bb-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is better value per item: $3$ for $\\pounds2$ or $5$ for $\\pounds3.50$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ for $\\pounds3.50$ ($70\\text{p}$ each)" },
              { id: "b", text: "Cannot tell" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "$3$ for $\\pounds2$ ($\\approx66.7\\text{p}$ each)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit price", statement: "Per item: $200\\div3\\approx66.7$ p vs $350\\div5=70$ p." },
            ],
            steps: [
              { reasoning: "$66.7\\text{p} < 70\\text{p}$ — first deal is cheaper per item.", working: "66.7<70", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $3$ for $\\pounds2$",
            commonErrors: ["Choosing (b) — comparing total prices instead of unit prices."],
          },
        },
        {
          id: "cilm-u2-bb-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bottle of $750\\ \\text{ml}$ of cordial costs $\\pounds1.35$. What is the price per litre?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 1.8, unit: "pounds per litre" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit rate", statement: "$750$ ml $=0.75$ L; $1.35\\div0.75=1.80$." },
            ],
            steps: [
              { reasoning: "$1.35\\div0.75=\\pounds1.80$ per litre.", working: "1.35\\div0.75=1.80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds1.80$ per litre",
            commonErrors: ["$0.0018$ — dividing by 750 instead of converting ml to litres."],
          },
        },
        {
          id: "cilm-u2-bb-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Find the price per 100 g of $400\\ \\text{g}$ of cheese costing $\\pounds1.60$. (b) Find the price per kg of $1.2\\ \\text{kg}$ of apples costing $\\pounds5.40$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 0.4, unit: "pounds per 100 g" }, { label: "(b)", answer: 4.5, unit: "pounds per kg" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit price", statement: "Normalise to common units before comparing." },
            ],
            steps: [
              { reasoning: "(a) $400\\text{ g}=4$ units of 100 g; $1.60\\div4=\\pounds0.40$.", working: "1.60\\div4=0.40", marks: 1, markCode: "A" },
              { reasoning: "(b) $5.40\\div1.2=\\pounds4.50$ per kg.", working: "5.40\\div1.2=4.50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds0.40$/100 g (b) $\\pounds4.50$/kg",
            commonErrors: ["In (a) $1.60\\div400$ gives price per gram, not per 100 g."],
          },
        },
        {
          id: "cilm-u2-bb-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A coat originally costing $\\pounds80$ is reduced by $15\\%$. What is the sale price?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 68, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Percentage discount", statement: "Discount $=0.15\\times80=12$; sale price $=80-12=68$." },
            ],
            steps: [
              { reasoning: "$0.85\\times80=\\pounds68$ (or $80-12$).", working: "0.85\\times80=68", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds68$",
            commonErrors: ["$\\pounds12$ — that's the discount, not the sale price."],
          },
        },
        {
          id: "cilm-u2-bb-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is better value: $1\\ \\text{kg}$ of rice for $\\pounds3.20$ or $750\\ \\text{g}$ for $\\pounds2.55$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Best buy", statement: "Convert to price per kg — the common unit." },
            ],
            steps: [
              { reasoning: "Deal 1: $\\pounds3.20$ per kg.", working: "3.20\\text{ per kg}", marks: 1, markCode: "M" },
              { reasoning: "Deal 2: $2.55\\div0.75=\\pounds3.40$ per kg.", working: "2.55\\div0.75=3.40", marks: 1, markCode: "M" },
              { reasoning: "Deal 1 is cheaper per kg — better value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\ \\text{kg}$ for $\\pounds3.20$ is better value ($\\pounds3.20$ vs $\\pounds3.40$ per kg)",
            commonErrors: ["Choosing the smaller pack because $\\pounds2.55<\\pounds3.20$ — unit price decides."],
          },
        },
        {
          id: "cilm-u2-bb-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shop sells yoghurts singly at $70\\text{p}$ each, or $3$ for $\\pounds1.80$. How much does a customer save per yoghurt by buying the pack of 3?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit price and savings", statement: "Pack price per yoghurt $=180\\div3=60$ p; saving $=70-60=10$ p." },
            ],
            steps: [
              { reasoning: "Pack price per yoghurt $=180\\text{p}\\div3=60\\text{p}$.", working: "180\\div3=60", marks: 1, markCode: "M" },
              { reasoning: "Saving per yoghurt $=70-60=10\\text{p}$.", working: "70-60=10", marks: 1, markCode: "M" },
              { reasoning: "Answer: $10\\text{p}$ per yoghurt.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10\\text{p}$ per yoghurt",
            commonErrors: ["$\\pounds1.80-70\\text{p}$ — must compare per-yoghurt prices, not pack vs single."],
          },
        },
        {
          id: "cilm-u2-bb-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two deals on the same squash: $6$ bottles of $2\\ \\text{L}$ for $\\pounds4.80$, or $4$ bottles of $1.5\\ \\text{L}$ for $\\pounds3.90$. Which deal is better value per litre?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Best buy", statement: "Compute total volume and total price, then price per litre." },
            ],
            steps: [
              { reasoning: "Deal 1: $12$ L for $\\pounds4.80$ → $4.80\\div12=\\pounds0.40$/L.", working: "4.80\\div12=0.40", marks: 1, markCode: "M" },
              { reasoning: "Deal 2: $6$ L for $\\pounds3.90$ → $3.90\\div6=\\pounds0.65$/L.", working: "3.90\\div6=0.65", marks: 1, markCode: "M" },
              { reasoning: "Deal 1 much cheaper per litre.", marks: 1, markCode: "M" },
              { reasoning: "Answer: the $6\\times2\\text{ L}$ deal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deal 1 — $\\pounds0.40$/L vs $\\pounds0.65$/L",
            commonErrors: ["Comparing per bottle — bottle sizes differ, must compare per litre."],
          },
        },
        {
          id: "cilm-u2-bb-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A supermarket compares two brands of cereal.",
          parts: [
            { label: "a", prompt: "Brand X: $500\\ \\text{g}$ for $\\pounds1.90$. Find the price per 100 g.", marks: 2 },
            { label: "b", prompt: "Brand Y: $750\\ \\text{g}$ for $\\pounds2.70$. Find the price per 100 g.", marks: 2 },
            { label: "c", prompt: "Which brand is better value? Justify with unit prices.", marks: 2 },
            { label: "d", prompt: "How much would $1.5\\ \\text{kg}$ of each brand cost (buying whole boxes)?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Best buys", statement: "Normalise to per 100 g; boxes are discrete so round up." },
            ],
            steps: [
              { part: "a", reasoning: "$1.90\\div5=\\pounds0.38$ per 100 g.", working: "1.90\\div5=0.38", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2.70\\div7.5=\\pounds0.36$ per 100 g.", working: "2.70\\div7.5=0.36", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Brand Y cheaper per 100 g ($0.36<0.38$) — better value.", working: "0.36<0.38", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justified numerically.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "X: $3$ boxes $=1500$ g, cost $3\\times1.90=\\pounds5.70$; Y: $2$ boxes $=1500$ g, cost $2\\times2.70=\\pounds5.40$.", working: "X:\\pounds5.70; Y:\\pounds5.40", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Y cheaper overall — consistent with (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds0.38$/100 g (b) $\\pounds0.36$/100 g (c) Brand Y (d) X: $\\pounds5.70$; Y: $\\pounds5.40$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Unit price correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Unit price correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Costs correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (d) buying fractional boxes — must round up to whole boxes."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u2-scale-bestbuy-notes",
      title: "Scale drawings and best buys — revision notes",
      summary: "Map scales, scale factors and unit-price comparison.",
      sections: [
        {
          heading: "Scale",
          body: "$1:n$ means drawing:real $=1:n$. Real $=$ drawing $\\times n$; drawing $=$ real $\\div n$. Area scales by $n^2$, volume by $n^3$.",
        },
        {
          heading: "Best buys",
          body: "Compare price per unit, not total price. Bigger pack ≠ better value. Same percentage discount gives different pound savings on different prices.",
        },
      ],
    },
  ],
};
