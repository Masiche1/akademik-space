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
              { id: "a", text: "$100$ m" },
              { id: "b", text: "$1$ km" },
              { id: "c", text: "$10$ km" },
              { id: "d", text: "$100$ km" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Map scale", statement: "$1$ cm on map $=10\\ 000$ cm real $=100$ m." },
            ],
            steps: [
              { reasoning: "$10\\ 000$ cm $=100$ m $=0.1$ km.", working: "10\\ 000\\text{ cm}=100\\text{ m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $100$ m",
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
              { id: "a", text: "The $400\\ \\text{g}$ pack" },
              { id: "b", text: "The $650\\ \\text{g}$ pack" },
              { id: "c", text: "They are equal value" },
              { id: "d", text: "Cannot tell without more information" },
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
