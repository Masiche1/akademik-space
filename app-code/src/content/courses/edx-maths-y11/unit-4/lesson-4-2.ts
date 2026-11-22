import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edm11-u4-lesson-4-2",
  code: "4-2",
  title: "Compound Measures and Growth",
  goal: "I CAN solve problems involving speed, density, pressure and exchange rates, and model exponential growth and decay.",
  standards: ["4MA1 2.9", "4MA1 1.12"],
  vocabulary: [
    { term: "Compound measure", definition: "A measure made by combining two other measures, such as speed (distance and time) or density (mass and volume)." },
    { term: "Density", definition: "Mass per unit volume: $\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$." },
    { term: "Pressure", definition: "Force per unit area: $\\text{pressure} = \\frac{\\text{force}}{\\text{area}}$." },
    { term: "Exchange rate", definition: "The number of units of one currency equal to one unit of another currency." },
    { term: "Exponential growth", definition: "Growth by a constant multiplier each period, with value after $n$ periods $= A \\times r^n$ where $r > 1$." },
    { term: "Exponential decay", definition: "Decrease by a constant multiplier $r$ each period, where $0 < r < 1$." },
  ],
  concepts: [
    {
      id: "edm11-u4-compound-measures",
      title: "Speed, density, pressure and exchange rates",
      skill: "Use formulae for compound measures, convert units, and solve exchange rate problems.",
      lesson: {
        sections: [
          {
            heading: "The formula triangles",
            body: "Speed $= \\frac{\\text{distance}}{\\text{time}}$, density $= \\frac{\\text{mass}}{\\text{volume}}$, pressure $= \\frac{\\text{force}}{\\text{area}}$. Rearrange to find any of the three quantities, for example distance $=$ speed $\\times$ time.",
          },
          {
            heading: "Units",
            body: "Check units before substituting. To change km/h to m/s, multiply by $1000$ and divide by $3600$: $72$ km/h $= 20$ m/s. Times in minutes must be converted to hours before using km/h: $45$ minutes $= 0.75$ hours.",
          },
          {
            heading: "Exchange rates",
            body: "If $\\pounds 1 = 1.25$ euros, multiply by $1.25$ to go from pounds to euros and divide by $1.25$ to go back. Ask yourself which answer should be larger to check you have used the right operation.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" },
          { name: "Density", statement: "$\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$" },
          { name: "Pressure", statement: "$\\text{pressure} = \\frac{\\text{force}}{\\text{area}}$" },
        ],
        workedExample: {
          problem: "A metal block has mass $450$ g and volume $50$ cm$^3$. Work out its density.",
          solution: "Density $= \\frac{450}{50} = 9$ g/cm$^3$.",
        },
      },
      questions: [
        {
          id: "edm11-u4-compound-measures-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A car travels $150$ km in $2.5$ hours at a constant speed.\n\nWork out its speed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$75$ km/h" },
              { id: "b", text: "$375$ km/h" },
              { id: "c", text: "$60$ km/h" },
              { id: "d", text: "$0.0167$ km/h" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the time.", working: "\\frac{150}{2.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "60 \\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $60$ km/h",
            commonErrors: ["Multiplying distance by time to get $375$.", "Dividing time by distance."],
          },
        },
        {
          id: "edm11-u4-compound-measures-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A solid block of metal has a mass of $2.7$ kg and a volume of $1000$ cm$^3$.\n\nWork out the density of the metal in g/cm$^3$.",
          response: { type: "numeric", parts: [{ label: "Density", answer: 2.7, unit: "g/cm^3" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$" },
            ],
            steps: [
              { reasoning: "Convert the mass to grams.", working: "2.7 \\text{ kg} = 2700 \\text{ g}", marks: 1, markCode: "B" },
              { reasoning: "Divide mass by volume.", working: "\\frac{2700}{1000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.7 \\text{ g/cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.7$ g/cm$^3$",
            commonErrors: ["Not converting kg to g, giving $0.0027$.", "Dividing volume by mass."],
          },
        },
        {
          id: "edm11-u4-compound-measures-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Amir drives $84$ km at an average speed of $63$ km/h. He then drives a further $48$ km at an average speed of $96$ km/h.\n\nWork out his average speed for the whole journey. Give your answer correct to $3$ significant figures.",
          response: { type: "numeric", parts: [{ label: "Average speed (km/h)", answer: 72, tolerance: 0.05, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}}$" },
            ],
            steps: [
              { reasoning: "Time for the first part.", working: "84 \\div 63 = \\frac43 \\text{ h}", marks: 1, markCode: "M" },
              { reasoning: "Time for the second part.", working: "48 \\div 96 = 0.5 \\text{ h}", marks: 1, markCode: "M" },
              { reasoning: "Total distance over total time.", working: "\\frac{84 + 48}{\\frac43 + \\frac12} = \\frac{132}{\\frac{11}{6}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "72 \\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72$ km/h",
            commonErrors: ["Averaging the two speeds: $\\frac{63+96}{2} = 79.5$.", "Leaving out one of the distances."],
          },
        },
        {
          id: "edm11-u4-compound-measures-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A rectangular steel plate has length $0.8$ m, width $0.5$ m and thickness $2$ cm. The density of steel is $7.8$ g/cm$^3$. The plate stands on its smallest face, which has area $100$ cm$^2$.\n\nTake the weight of $1$ kg to be $10$ N.",
          parts: [
            { label: "a", prompt: "Work out the volume of the plate in cm$^3$.", marks: 2 },
            { label: "b", prompt: "Work out the mass of the plate in kg.", marks: 2 },
            { label: "c", prompt: "Work out the weight of the plate in newtons.", marks: 1 },
            { label: "d", prompt: "Work out the pressure on the ground in N/cm$^2$ when the plate stands on its smallest face, which has area $100$ cm$^2$.", marks: 2 },
            { label: "e", prompt: "Convert the pressure to N/m$^2$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) volume (cm^3)", answer: 8000 },
              { label: "(b) mass (kg)", answer: 62.4, tolerance: 0.05 },
              { label: "(c) weight (N)", answer: 624, tolerance: 0.5 },
              { label: "(d) pressure (N/cm^2)", answer: 6.24, tolerance: 0.005 },
              { label: "(e) pressure (N/m^2)", answer: 62400, tolerance: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\text{mass} = \\text{density} \\times \\text{volume}$" },
              { kind: "formula", name: "Pressure", statement: "$\\text{pressure} = \\frac{\\text{force}}{\\text{area}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Convert to cm: $80 \\times 50 \\times 2$.", working: "80 \\times 50 \\times 2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "8000 \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mass in grams is density times volume.", working: "7.8 \\times 8000 = 62400 \\text{ g}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to kg.", working: "62.4 \\text{ kg}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weight is $10$ N per kg.", working: "62.4 \\times 10 = 624 \\text{ N}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Divide force by area.", working: "\\frac{624}{100}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "6.24 \\text{ N/cm}^2", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$1$ m$^2 = 10\\,000$ cm$^2$, so multiply by $10\\,000$.", working: "6.24 \\times 10000", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "62400 \\text{ N/m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8000$ cm$^3$. (b) $62.4$ kg. (c) $624$ N. (d) $6.24$ N/cm$^2$. (e) $62\\,400$ N/m$^2$.",
            commonErrors: ["Not converting all lengths to cm before multiplying.", "Using $100$ instead of $10\\,000$ to convert cm$^2$ to m$^2$."],
            examinerNote: "Allow ft in later parts from earlier errors.",
          },
        },
      ],
    },
    {
      id: "edm11-u4-growth-decay",
      title: "Exponential growth and decay",
      skill: "Use a repeated multiplier to model growth and decay, including compound change and finding the number of periods.",
      lesson: {
        sections: [
          {
            heading: "The multiplier",
            body: "A growth of $r\\%$ per period has multiplier $1 + \\frac{r}{100}$ and a decay of $r\\%$ has multiplier $1 - \\frac{r}{100}$. After $n$ periods the value is $A \\times (\\text{multiplier})^n$ where $A$ is the starting amount.",
          },
          {
            heading: "Calculator use",
            body: "Use the power key, for example $2000 \\times 1.05^6$. Work out the multiplier power first and round only at the end. Money is given to 2 decimal places.",
          },
          {
            heading: "How many periods?",
            body: "To find when a value first passes a target, try successive whole numbers of periods in a table. The answer must be a whole number of periods.",
          },
        ],
        keyFormulas: [
          { name: "Exponential change", statement: "$V = A \\times k^n$, with $k = 1 \\pm \\frac{r}{100}$" },
        ],
        workedExample: {
          problem: "A car costs $\\pounds 12\\,000$ and loses $15\\%$ of its value each year. Work out its value after 3 years.",
          solution: "Multiplier $0.85$. Value $= 12000 \\times 0.85^3 = 12000 \\times 0.614125 = \\pounds 7369.50$.",
        },
      },
      questions: [
        {
          id: "edm11-u4-growth-decay-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A population of bacteria increases by $20\\%$ every hour. What is the multiplier for each hour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.2$" },
              { id: "b", text: "$0.8$" },
              { id: "c", text: "$20$" },
              { id: "d", text: "$0.2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage multipliers", statement: "An increase of $r\\%$ has multiplier $1 + \\frac{r}{100}$." },
            ],
            steps: [
              { reasoning: "The original is $100\\%$ and we add $20\\%$.", working: "100\\% + 20\\% = 120\\%", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "1.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1.2$",
            commonErrors: ["Using $0.2$, which gives only the increase.", "Using $0.8$, the decrease multiplier."],
          },
        },
        {
          id: "edm11-u4-growth-decay-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Sam invests $\\pounds 2000$ at $5\\%$ compound interest per year.\n\nWork out the value of the investment after $3$ years. Give your answer to the nearest penny.",
          response: { type: "numeric", parts: [{ label: "Value (pounds)", answer: 2315.25, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$V = A \\times 1.05^n$" },
            ],
            steps: [
              { reasoning: "Multiplier for $5\\%$ increase is $1.05$.", working: "2000 \\times 1.05^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $1.05^3 = 1.157625$.", working: "2000 \\times 1.157625", marks: 1, markCode: "M" },
              { reasoning: "Round to the nearest penny.", working: "\\pounds 2315.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds 2315.25$",
            commonErrors: ["Simple interest: $2000 + 3 \\times 100 = 2300$.", "Using $1.5$ as the multiplier."],
          },
        },
        {
          id: "edm11-u4-growth-decay-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A car is bought for $\\pounds 16\\,000$. Its value decreases by $18\\%$ each year.\n\nWork out the value of the car after $4$ years. Give your answer to the nearest pound.",
          response: { type: "numeric", parts: [{ label: "Value (pounds)", answer: 7234, tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential decay", statement: "$V = A \\times 0.82^n$" },
            ],
            steps: [
              { reasoning: "Multiplier for an $18\\%$ decrease is $0.82$.", working: "1 - 0.18 = 0.82", marks: 1, markCode: "B" },
              { reasoning: "Raise to the power $4$.", working: "0.82^4 = 0.45212\\ldots", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the starting value.", working: "16000 \\times 0.452122\\ldots", marks: 1, markCode: "M" },
              { reasoning: "Round.", working: "\\pounds 7234", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds 7234$",
            commonErrors: ["Subtracting $4 \\times 18\\% = 72\\%$, giving $\\pounds 4480$.", "Using $1.18$."],
          },
        },
        {
          id: "edm11-u4-growth-decay-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A colony of bacteria contains $500$ bacteria at 12:00. The number of bacteria increases by $30\\%$ every hour.",
          parts: [
            { label: "a", prompt: "Work out the number of bacteria at 15:00. Give your answer to the nearest whole number.", marks: 3 },
            { label: "b", prompt: "Find the first whole number of hours after 12:00 when there are more than $5000$ bacteria.", marks: 3 },
            { label: "c", prompt: "A second colony starts with $8000$ bacteria and decreases by $25\\%$ every hour. Work out the number of bacteria in this colony after $3$ hours. Give your answer to the nearest whole number.", marks: 2 },
            { label: "d", prompt: "Explain why the second colony will never reach zero according to this model.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) number of bacteria", answer: 1099, tolerance: 1 },
              { label: "(b) hours", answer: 9 },
              { label: "(c) number of bacteria", answer: 3375, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential change", statement: "$V = A \\times k^n$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiplier $1.3$ over $3$ hours.", working: "500 \\times 1.3^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$1.3^3 = 2.197$.", working: "500 \\times 2.197 = 1098.5", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Round to the nearest whole number.", working: "1099", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set up the condition.", working: "500 \\times 1.3^n > 5000 \\Rightarrow 1.3^n > 10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Test values: $1.3^8 = 8.157$ and $1.3^9 = 10.604$.", working: "1.3^8 = 8.16 < 10,\\quad 1.3^9 = 10.6 > 10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the first whole number of hours.", working: "n = 9", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiplier $0.75$ for $3$ hours.", working: "8000 \\times 0.75^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "8000 \\times 0.421875 = 3375", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiplying a positive number by $0.75$ always gives a positive number, so the value gets smaller but never reaches $0$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1099$. (b) $9$ hours. (c) $3375$. (d) A positive number multiplied by $0.75$ stays positive.",
            commonErrors: ["Using $500 + 3 \\times 30\\%$ of $500$.", "Giving $1.3^9$ rather than the number of hours."],
          },
        },
      ],
    },
  ],
};
