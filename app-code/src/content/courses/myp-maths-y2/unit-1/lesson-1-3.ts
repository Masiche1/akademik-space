import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypm2-u1-lesson-1-3",
  code: "1-3",
  title: "Ratio, Rates and Proportion",
  goal: "I CAN solve direct and inverse proportion problems, and calculate with speed, density, unit rates and exchange rates.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Direct proportion", definition: "Two quantities are in direct proportion when one is multiplied by a number and the other is multiplied by the same number. Their ratio stays constant." },
    { term: "Inverse proportion", definition: "Two quantities are in inverse proportion when one is multiplied by a number and the other is divided by that number. Their product stays constant." },
    { term: "Unitary method", definition: "Finding the value of one unit first, then scaling to the amount you need." },
    { term: "Map scale", definition: "A ratio such as 1 : 50 000 comparing a length on the map with the real length." },
    { term: "Compound measure", definition: "A measure made by combining two units, such as speed in km/h or density in g/cm$^3$." },
    { term: "Exchange rate", definition: "The amount of one currency you get for one unit of another currency." },
  ],
  concepts: [
    {
      id: "mypm2-u1-direct-inverse-proportion",
      title: "Direct and inverse proportion",
      skill: "Use the unitary method for direct and inverse proportion, and solve recipe and map-scale problems.",
      lesson: {
        sections: [
          {
            heading: "Direct proportion and the unitary method",
            body: "In direct proportion, doubling one quantity doubles the other. Find the value of **one** unit, then multiply. If 4 kg of apples cost 9.60 euros, 1 kg costs $9.60\\div4=2.40$ euros, so 7 kg cost $2.40\\times7=16.80$ euros. Recipes work the same way: scale every ingredient by the same factor.",
          },
          {
            heading: "Inverse proportion",
            body: "In inverse proportion, as one quantity increases the other decreases, and their **product** stays constant. If 6 workers take 10 days, the job is $6\\times10=60$ worker-days. With 4 workers it takes $60\\div4=15$ days. More workers means fewer days, not more.",
          },
          {
            heading: "Map scales",
            body: "A scale of 1 : 25 000 means 1 cm on the map is 25 000 cm in real life. Multiply a map length by 25 000 to get the real length, then convert: 100 cm = 1 m and 100 000 cm = 1 km. To go from real life to the map, divide.",
          },
        ],
        keyFormulas: [
          { name: "Direct proportion", statement: "$\\dfrac{y}{x}$ is constant" },
          { name: "Inverse proportion", statement: "$x\\times y$ is constant" },
        ],
        workedExample: {
          problem: "A map has scale 1 : 50 000. Two towns are 7 cm apart on the map. How far apart are they in kilometres?",
          solution: "$7\\times50\\,000=350\\,000$ cm $=3500$ m $=3.5$ km.",
        },
      },
      questions: [
        {
          id: "mypm2-u1-direct-inverse-proportion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "4 notebooks cost 6 euros. How much do 10 notebooks cost at the same price each?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "60 euros" },
              { id: "b", text: "15 euros" },
              { id: "c", text: "16 euros" },
              { id: "d", text: "12 euros" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unitary method", statement: "Find the cost of one item, then multiply." },
            ],
            steps: [
              { reasoning: "One notebook costs $6\\div4=1.50$ euros, so 10 cost 15 euros.", working: "1.5\\times10=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 15 euros",
            commonErrors: ["Adding 6 to the extra 6 notebooks, giving 12.", "Multiplying 6 by 10."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A recipe for 6 people uses 240 g of flour. How many grams of flour are needed for 10 people?",
          response: { type: "numeric", parts: [{ label: "Flour", answer: 400, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "Scale all quantities by the same factor." },
            ],
            steps: [
              { reasoning: "Find the flour for one person.", working: "240\\div6=40", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 10.", working: "40\\times10=400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$400$ g",
            commonErrors: ["Adding 4 people's worth incorrectly: $240+4=244$.", "Multiplying 240 by 10."],
            examinerNote: "M1 for 40 or scale factor $\\frac{10}{6}$. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A map has a scale of 1 : 25 000. Two villages are 8.4 cm apart on the map. Work out the real distance between them in kilometres.",
          response: { type: "numeric", parts: [{ label: "Real distance", answer: 2.1, unit: "km" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Map scale", statement: "Real length = map length $\\times$ scale factor." },
            ],
            steps: [
              { reasoning: "Multiply the map length by 25 000 to get the real length in cm.", working: "8.4\\times25\\,000=210\\,000\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Convert to metres (divide by 100).", working: "2100\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Convert to kilometres (divide by 1000).", working: "2.1\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.1$ km",
            commonErrors: ["Dividing by 25 000 instead of multiplying.", "Mistakes converting 210 000 cm: forgetting there are 100 000 cm in 1 km."],
            examinerNote: "M1 for $8.4\\times25\\,000$. M1 for a correct unit conversion. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Karim is organising a school fair and needs to scale quantities and times.",
          parts: [
            { label: "a", prompt: "4 kg of apples cost 9.60 euros. Work out the cost of 7 kg, in euros.", marks: 2 },
            { label: "b", prompt: "A recipe for 8 pancakes uses 200 ml of milk. Work out how many millilitres of milk are needed for 20 pancakes.", marks: 2 },
            { label: "c", prompt: "On a map with scale 1 : 20 000, the real distance of the fair's fun run is 3 km. Work out the length of the route on the map, in centimetres.", marks: 2 },
            { label: "d", prompt: "6 volunteers can set up the stalls in 10 hours. Explain why the number of volunteers and the time are in inverse proportion, and work out how many hours 4 volunteers would take working at the same rate.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost of 7 kg", answer: 16.8, unit: "euros" },
              { label: "(b) Milk", answer: 500, unit: "ml" },
              { label: "(c) Length on the map", answer: 15, unit: "cm" },
              { label: "(d) Time for 4 volunteers", answer: 15, unit: "hours" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unitary method", statement: "Find the value of one unit, then scale." },
              { kind: "principle", name: "Map scale", statement: "Map length = real length $\\div$ scale factor." },
              { kind: "principle", name: "Inverse proportion", statement: "The product of the two quantities is constant." },
            ],
            steps: [
              { part: "a", reasoning: "Cost of 1 kg.", working: "9.60\\div4=2.40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply by 7.", working: "2.40\\times7=16.80", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The scale factor is $20\\div8=2.5$, or find milk for one pancake: $200\\div8=25$.", working: "25\\times20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "500", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert 3 km to cm, then divide by the scale factor.", working: "3\\,\\text{km}=300\\,000\\text{ cm},\\quad 300\\,000\\div20\\,000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "More volunteers means less time, and the total work is fixed: $6\\times10=60$ volunteer-hours, so the product is constant.", working: "6\\times10=60", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Divide the total work by 4 volunteers.", working: "60\\div4=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $16.80$ euros (b) $500$ ml (c) $15$ cm (d) the product is constant (60 volunteer-hours); $15$ hours",
            commonErrors: ["In (c), multiplying by 20 000 instead of dividing.", "In (d), treating it as direct proportion: $10\\times\\frac{4}{6}\\approx6.7$ hours."],
            examinerNote: "In (d) the R mark needs the idea that the product (total work) is constant, or that more people take less time (oe).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "5 pens cost 4.50 euros. How much do 8 pens cost at the same price each?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7.20 euros" },
              { id: "b", text: "6.40 euros" },
              { id: "c", text: "9.00 euros" },
              { id: "d", text: "8.00 euros" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unitary method", statement: "Find the cost of one item, then multiply." },
            ],
            steps: [
              { reasoning: "One pen costs $4.50\\div5=0.90$ euros, so 8 cost 7.20 euros.", working: "0.90\\times8=7.20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 7.20 euros",
            commonErrors: ["Adding 3 pens' worth to the total incorrectly, giving 9.00."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recipe for 4 people uses 300 g of flour. How much flour is needed for 6 people?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "600 g" },
              { id: "b", text: "450 g" },
              { id: "c", text: "350 g" },
              { id: "d", text: "200 g" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "Scale all quantities by the same factor." },
            ],
            steps: [
              { reasoning: "For one person: $300\\div4=75$ g, so for 6 people $75\\times6=450$ g.", working: "300\\times\\frac{6}{4}=450", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 450 g",
            commonErrors: ["Adding 2 people's worth incorrectly, giving 350 or 200."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "8 cinema tickets cost 96 euros. Work out the cost of 5 tickets at the same price each, in euros.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 60, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unitary method", statement: "Find the value of one unit, then scale." },
            ],
            steps: [
              { reasoning: "Find the cost of one ticket.", working: "96\\div8=12", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 5.", working: "12\\times5=60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60$ euros",
            commonErrors: ["Multiplying 96 by 5.", "Adding 3 tickets' worth incorrectly."],
            examinerNote: "M1 for 12 or the scale factor $\\frac{5}{8}$. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "6 identical machines can complete a job in 8 hours. Working at the same rate, how many hours would 4 machines take?",
          response: { type: "numeric", parts: [{ label: "Time", answer: 12, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "The product of the two quantities is constant: $6\\times8=48$ machine-hours." },
            ],
            steps: [
              { reasoning: "The total work is $6\\times8=48$ machine-hours.", working: "48", marks: 1, markCode: "M" },
              { reasoning: "Divide by 4 machines.", working: "48\\div4=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ hours",
            commonErrors: ["Treating it as direct proportion: $8\\times\\frac{4}{6}\\approx5.3$ hours."],
            examinerNote: "M1 for 48 machine-hours oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a map with scale 1 : 10 000, two buildings are 5 cm apart. What is the real distance between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50 m" },
              { id: "b", text: "5 km" },
              { id: "c", text: "500 m" },
              { id: "d", text: "50 km" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Map scale", statement: "Real length = map length $\\times$ scale factor." },
            ],
            steps: [
              { reasoning: "$5\\times10\\,000=50\\,000$ cm $=500$ m.", working: "50\\,000\\text{ cm}=500\\text{ m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 500 m",
            commonErrors: ["Forgetting to convert centimetres to metres, choosing 50 000 cm."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "12 painters can paint a hall in 9 days. How many days would 8 painters take, working at the same rate?",
          response: { type: "numeric", parts: [{ label: "Time", answer: 13.5, unit: "days" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "The product of the two quantities is constant." },
            ],
            steps: [
              { reasoning: "Find the total work in painter-days.", working: "12\\times9=108", marks: 1, markCode: "M" },
              { reasoning: "Divide by the new number of painters.", working: "108\\div8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "13.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13.5$ days",
            commonErrors: ["Treating it as direct proportion: $9\\times\\frac{8}{12}=6$ days."],
            examinerNote: "M1 for 108 painter-days oe. M1 for division. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A map has a scale of 1 : 50 000. What does 1 cm on the map represent in real life?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$500$ m" },
              { id: "b", text: "$50$ m" },
              { id: "c", text: "$5$ km" },
              { id: "d", text: "$0.5$ km" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Map scale", statement: "1 cm on the map is 50 000 cm in real life." },
            ],
            steps: [
              { reasoning: "$1\\times50\\,000=50\\,000$ cm $=500$ m.", working: "50\\,000\\text{ cm}=500\\text{ m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $500$ m",
            commonErrors: ["Forgetting that 100 000 cm = 1 km, choosing 5 km."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A delivery company uses vans. Explain whether the number of vans and the time taken to deliver all the parcels are in direct or inverse proportion, and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "As one quantity increases the other decreases, and their product is constant." },
              { kind: "principle", name: "Direct proportion", statement: "Both quantities increase or decrease together and their ratio is constant." },
            ],
            steps: [
              { reasoning: "More vans means the same total work is shared, so the time decreases.", marks: 1, markCode: "R" },
              { reasoning: "The total work is constant: if $v$ vans take $t$ hours, $v\\times t$ is the same for any pair.", working: "v\\times t=\\text{constant}", marks: 1, markCode: "M" },
              { reasoning: "Because one quantity increases as the other decreases and the product is constant, they are in inverse proportion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Inverse proportion: more vans take less time, and vans $\\times$ time is constant.",
            commonErrors: ["Saying direct proportion because 'more vans means more work'."],
            examinerNote: "The key idea is the constant product (or constant total work).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "3 kg of apples cost 10.80 euros. Work out the cost of 2.5 kg of apples at the same price per kilogram, in euros.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 9, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unitary method", statement: "Find the cost of one unit, then scale." },
            ],
            steps: [
              { reasoning: "Find the cost per kilogram.", working: "10.80\\div3=3.60", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 2.5.", working: "3.60\\times2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "9.00", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$ euros",
            commonErrors: ["Multiplying 10.80 by 2.5.", "Rounding 3.60 to 3.6 and making an arithmetic slip."],
            examinerNote: "M1 for 3.60. M1 for $\\times2.5$. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these situations shows inverse proportion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distance travelled and fuel used at a constant rate" },
              { id: "b", text: "Map length and real length for a fixed scale" },
              { id: "c", text: "Cost of apples and mass bought" },
              { id: "d", text: "Number of workers and time to complete a fixed job" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "One quantity increases as the other decreases and their product is constant." },
            ],
            steps: [
              { reasoning: "Only (b) has one quantity increasing while the other decreases, with a constant product (total work).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Number of workers and time",
            commonErrors: ["Choosing (a), (c) or (d), which are all direct proportion."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scale model of a building is made. On the model a wall is 12 cm long and the real wall is 9 m long. Explain how you would find the length on the model of a real corridor that is 15 m long, including why you multiply or divide by the scale factor.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Map scale", statement: "Real length and model length are in direct proportion; the scale factor converts one to the other." },
            ],
            steps: [
              { reasoning: "The scale factor is real $\\div$ model: $9\\text{ m}=900\\text{ cm}$, so $900\\div12=75$.", working: "900\\div12=75", marks: 1, markCode: "M" },
              { reasoning: "To go from real to model, divide the real length by the scale factor 75.", working: "1500\\div75", marks: 1, markCode: "M" },
              { reasoning: "The corridor is 15 m $=1500$ cm.", working: "15\\text{ m}=1500\\text{ cm}", marks: 1, markCode: "A" },
              { reasoning: "The model length is $1500\\div75=20$ cm. Division is needed because the model is smaller than real life.", working: "20\\text{ cm}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$20$ cm; divide by the scale factor 75 because real lengths are larger than model lengths.",
            commonErrors: ["Multiplying by 75 instead of dividing.", "Forgetting to convert 15 m to centimetres."],
            examinerNote: "Accept scale factor 0.75 (model per real) with correct method.",
          },
        },
        {
          id: "mypm2-u1-direct-inverse-proportion-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school club is baking for a fair. A recipe for 10 servings uses 500 g of flour, 300 ml of milk and 4 eggs.",
          parts: [
            { label: "a", prompt: "Work out the amount of each ingredient needed for 25 servings.", marks: 3 },
            { label: "b", prompt: "The club has 1.5 kg of flour. Work out the greatest number of complete servings they can make, assuming flour is the limiting ingredient.", marks: 2 },
            { label: "c", prompt: "6 helpers can decorate 40 cakes in 3 hours. How many helpers are needed to decorate 40 cakes in 2 hours, working at the same rate? Explain your method.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) flour for 25 servings", answer: 1250, unit: "g" },
              { label: "(a) milk for 25 servings", answer: 750, unit: "ml" },
              { label: "(a) eggs for 25 servings", answer: 10 },
              { label: "(b) greatest number of complete servings", answer: 30 },
              { label: "(c) number of helpers", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "Scale every ingredient by the same factor." },
              { kind: "principle", name: "Inverse proportion", statement: "The product of the two quantities is constant." },
            ],
            steps: [
              { part: "a", reasoning: "The scale factor is $25\\div10=2.5$; apply it to each ingredient.", working: "500\\times2.5=1250\\text{ g},\\ 300\\times2.5=750\\text{ ml},\\ 4\\times2.5=10\\text{ eggs}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Flour: 1250 g.", working: "1250", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Milk and eggs: 750 ml and 10 eggs.", working: "750,\\ 10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Flour per serving is $500\\div10=50$ g; $1500\\div50=30$ servings.", working: "1500\\div50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check: 30 servings need 1500 g, exactly the amount available.", working: "30", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The total work is $6\\times3=18$ helper-hours; in 2 hours need $18\\div2=9$ helpers.", working: "6\\times3\\div2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fewer hours means more helpers, so this is inverse proportion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate and state.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1250 g flour, 750 ml milk, 10 eggs (b) 30 servings (c) 9 helpers, because helper-hours is constant",
            commonErrors: ["In (b) rounding up to 31 servings, which would need more flour than available.", "In (c) treating it as direct proportion and using fewer helpers for fewer hours, giving $6\\times\\frac{2}{3}=4$."],
            examinerNote: "In (c) the method must use the constant product (18 helper-hours).",
          },
        },
      ],
    },
    {
      id: "mypm2-u1-compound-measures",
      title: "Speed, density, unit rates and exchange rates",
      skill: "Calculate with compound measures, convert units of speed and use unit rates and exchange rates.",
      lesson: {
        sections: [
          {
            heading: "Speed and density",
            body: "Both are compound measures made by dividing one quantity by another.\n\n$$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}\\qquad \\text{density}=\\dfrac{\\text{mass}}{\\text{volume}}$$\n\nRearrange to find distance $=$ speed $\\times$ time, or mass $=$ density $\\times$ volume. Keep the units consistent: a distance in km and a time in hours give a speed in km/h.",
          },
          {
            heading: "Converting units of speed",
            body: "To convert km/h to m/s, multiply by 1000 to change km to m, and divide by 3600 to change hours to seconds. So $72\\text{ km/h}=\\dfrac{72\\times1000}{3600}=20$ m/s. To go from m/s to km/h, multiply by 3.6.",
          },
          {
            heading: "Unit rates and exchange rates",
            body: "A unit rate is the cost or amount for one unit, such as euros per bottle. Use it to find the best buy: the lowest cost per unit. An exchange rate is a unit rate too. If 1 euro buys 1.10 USD, then 360 euros buy $360\\times1.10=396$ USD. To go the other way, divide.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
          { name: "Density", statement: "$\\text{density}=\\dfrac{\\text{mass}}{\\text{volume}}$" },
        ],
        workedExample: {
          problem: "A car travels 90 km in 1.5 hours. Find its average speed in km/h and in m/s.",
          solution: "Speed $=90\\div1.5=60$ km/h. In m/s: $\\dfrac{60\\times1000}{3600}=16.\\dot{6}\\approx16.7$ m/s.",
        },
      },
      questions: [
        {
          id: "mypm2-u1-compound-measures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A train travels 150 km in 2 hours. What is its average speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$300$ km/h" },
              { id: "b", text: "$0.013$ km/h" },
              { id: "c", text: "$148$ km/h" },
              { id: "d", text: "$75$ km/h" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the time.", working: "150\\div2=75", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $75$ km/h",
            commonErrors: ["Multiplying distance and time, giving 300.", "Subtracting the time, giving 148.", "Dividing time by distance, giving 0.013."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Change a speed of 72 km/h into metres per second.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 20, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit conversion", statement: "1 km = 1000 m and 1 hour = 3600 seconds." },
            ],
            steps: [
              { reasoning: "Convert km to m, then divide by the seconds in an hour.", working: "\\dfrac{72\\times1000}{3600}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ m/s",
            commonErrors: ["Dividing by 60 instead of 3600.", "Multiplying by 3.6 instead of dividing."],
            examinerNote: "M1 for $72\\,000\\div3600$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A metal block is a cuboid measuring 5 cm by 4 cm by 6 cm. Its mass is 540 g. Work out the density of the metal in g/cm$^3$.",
          response: { type: "numeric", parts: [{ label: "Density", answer: 4.5, unit: "g/cm^3" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\text{density}=\\dfrac{\\text{mass}}{\\text{volume}}$" },
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=l\\times w\\times h$" },
            ],
            steps: [
              { reasoning: "Find the volume of the cuboid.", working: "5\\times4\\times6=120\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Divide the mass by the volume.", working: "540\\div120", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.5$ g/cm$^3$",
            commonErrors: ["Dividing volume by mass, giving 0.22.", "Using only one dimension as the volume."],
            examinerNote: "M1 for volume 120. M1 for mass $\\div$ volume. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Sofia is planning a cycling trip and a shopping stop.",
          parts: [
            { label: "a", prompt: "She cycles 45 km in 2.5 hours. Work out her average speed in km/h.", marks: 2 },
            { label: "b", prompt: "Change her average speed into metres per second.", marks: 2 },
            { label: "c", prompt: "A bike costs 360 euros. The exchange rate is 1 euro = 1.10 USD. Work out the price in USD.", marks: 2 },
            { label: "d", prompt: "Water is sold as 6 bottles for 2.70 euros or 10 bottles for 4.20 euros. Work out the cost per bottle of the better buy, in euros.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Average speed", answer: 18, unit: "km/h" },
              { label: "(b) Average speed", answer: 5, unit: "m/s" },
              { label: "(c) Price", answer: 396, unit: "USD" },
              { label: "(d) Cost per bottle of the better buy", answer: 0.42, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
              { kind: "principle", name: "Unit conversion", statement: "km/h to m/s: multiply by 1000 and divide by 3600." },
              { kind: "principle", name: "Unit rates", statement: "The better buy has the lower cost per unit." },
            ],
            steps: [
              { part: "a", reasoning: "Divide distance by time.", working: "45\\div2.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "18", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert km to m and hours to seconds.", working: "\\dfrac{18\\times1000}{3600}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each euro is worth 1.10 USD, so multiply.", working: "360\\times1.10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "396", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the cost per bottle for each: $2.70\\div6=0.45$ and $4.20\\div10=0.42$.", working: "0.45\\text{ and }0.42", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The 10-bottle pack is cheaper per bottle, so it is the better buy.", working: "0.42", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $18$ km/h (b) $5$ m/s (c) $396$ USD (d) $0.42$ euros per bottle (10-bottle pack)",
            commonErrors: ["In (c), dividing by 1.10 and getting about 327.", "In (d), comparing total prices instead of prices per bottle."],
            examinerNote: "In (d) the R mark is for identifying the 10-bottle pack as the better buy by comparing unit prices.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bus travels 120 km in 3 hours. What is its average speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.025$ km/h" },
              { id: "b", text: "$117$ km/h" },
              { id: "c", text: "$40$ km/h" },
              { id: "d", text: "$360$ km/h" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the time.", working: "120\\div3=40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $40$ km/h",
            commonErrors: ["Multiplying distance and time, giving 360.", "Dividing time by distance."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A block has mass 200 g and volume 50 cm$^3$. What is its density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.25$ g/cm$^3$" },
              { id: "b", text: "$4$ g/cm$^3$" },
              { id: "c", text: "$150$ g/cm$^3$" },
              { id: "d", text: "$10\\,000$ g/cm$^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\text{density}=\\dfrac{\\text{mass}}{\\text{volume}}$" },
            ],
            steps: [
              { reasoning: "Divide the mass by the volume.", working: "200\\div50=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4$ g/cm$^3$",
            commonErrors: ["Dividing volume by mass, giving 0.25."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Change a speed of 54 km/h into metres per second.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 15, unit: "m/s" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit conversion", statement: "1 km = 1000 m and 1 hour = 3600 seconds." },
            ],
            steps: [
              { reasoning: "Convert km to m, then divide by the number of seconds in an hour.", working: "\\frac{54\\times1000}{3600}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ m/s",
            commonErrors: ["Dividing by 60 instead of 3600.", "Multiplying by 3.6."],
            examinerNote: "M1 for $54\\,000\\div3600$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels 180 km in 2.5 hours. Work out its average speed in km/h.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 72, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance by the time.", working: "180\\div2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "72", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72$ km/h",
            commonErrors: ["Multiplying 180 by 2.5.", "Dividing 2.5 by 180."],
            examinerNote: "M1 for $180\\div2.5$. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two packs of juice are for sale: 4 litres for 6 euros, or 6 litres for 9 euros. Which is the better buy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The 4-litre pack, because it is smaller" },
              { id: "b", text: "They cost the same per litre" },
              { id: "c", text: "The 6-litre pack, because it is cheaper per litre" },
              { id: "d", text: "Neither; compare the total prices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rates", statement: "Compare the cost per unit; the lower unit rate is the better buy." },
            ],
            steps: [
              { reasoning: "Cost per litre: $6\\div4=1.50$ and $9\\div6=1.50$, so they are equal.", working: "1.50=1.50", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They cost the same per litre",
            commonErrors: ["Choosing the bigger pack without checking the unit rate."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The exchange rate is 1 GBP = 1.25 USD. Work out how many USD you get for 240 GBP.",
          response: { type: "numeric", parts: [{ label: "Amount in USD", answer: 300, unit: "USD" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exchange rate", statement: "An exchange rate is a unit rate: multiply by the rate to convert." },
            ],
            steps: [
              { reasoning: "Each pound is worth 1.25 dollars, so multiply.", working: "240\\times1.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "300", marks: 1, markCode: "A" },
              { reasoning: "Check the direction: GBP to USD multiplies because 1 GBP buys more than 1 USD.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$300$ USD",
            commonErrors: ["Dividing by 1.25, giving 192."],
            examinerNote: "M1 for $240\\times1.25$. A1 for 300. R1 for a sensible direction check.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Change a speed of 10 m/s into kilometres per hour.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$600$ km/h" },
              { id: "b", text: "$36$ km/h" },
              { id: "c", text: "$2.78$ km/h" },
              { id: "d", text: "$3.6$ km/h" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit conversion", statement: "To convert m/s to km/h, multiply by 3.6." },
            ],
            steps: [
              { reasoning: "$10\\times3.6=36$ km/h, or $\\frac{10\\times3600}{1000}=36$.", working: "10\\times3.6=36", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $36$ km/h",
            commonErrors: ["Dividing by 3.6, giving 2.78."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why distance equals speed multiplied by time, using an example with consistent units.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$, so distance $=\\text{speed}\\times\\text{time}$." },
            ],
            steps: [
              { reasoning: "Speed is the distance covered per unit of time, so multiplying by the time gives the total distance.", marks: 1, markCode: "R" },
              { reasoning: "Example: at 60 km/h for 2.5 hours, distance $=60\\times2.5$.", working: "60\\times2.5", marks: 1, markCode: "M" },
              { reasoning: "The units are consistent: km/h $\\times$ hours = km, giving 150 km.", working: "150\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Distance $=$ speed $\\times$ time; e.g. $60\\times2.5=150$ km.",
            commonErrors: ["Using inconsistent units, such as km/h with minutes, without converting."],
            examinerNote: "The R mark is for explaining the per-unit-time meaning of speed.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A metal has density 2.5 g/cm$^3$. Work out the mass of a piece with volume 400 cm$^3$, in grams.",
          response: { type: "numeric", parts: [{ label: "Mass", answer: 1000, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\text{mass}=\\text{density}\\times\\text{volume}$" },
            ],
            steps: [
              { reasoning: "Rearrange the density formula to find mass.", working: "m=d\\times V", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "2.5\\times400", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1000$ g ($1$ kg)",
            commonErrors: ["Dividing density by volume instead of multiplying."],
            examinerNote: "M1 for rearranging. M1 for $2.5\\times400$. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A cyclist travels at a steady 20 km/h for 1.5 hours. How far does she travel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13.3$ km" },
              { id: "b", text: "$30$ km" },
              { id: "c", text: "$300$ km" },
              { id: "d", text: "$18.5$ km" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$\\text{distance}=\\text{speed}\\times\\text{time}$" },
            ],
            steps: [
              { reasoning: "Multiply the speed by the time; the units km/h $\\times$ h give km.", working: "20\\times1.5=30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $30$ km",
            commonErrors: ["Dividing speed by time, giving 13.3."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain, step by step, why $90$ km/h is equal to $25$ m/s. Include the two unit conversions you use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit conversion", statement: "1 km = 1000 m and 1 hour = 3600 seconds." },
            ],
            steps: [
              { reasoning: "Change kilometres to metres: $90\\times1000=90\\,000$ m per hour.", marks: 1, markCode: "M" },
              { reasoning: "Change hours to seconds: there are 3600 seconds in an hour.", marks: 1, markCode: "M" },
              { reasoning: "Divide metres by seconds.", working: "\\frac{90\\,000}{3600}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and conclude the speeds are equal.", working: "25\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\text{ km/h}=\\frac{90\\times1000}{3600}=25\\text{ m/s}$",
            commonErrors: ["Dividing by 60 instead of 3600.", "Multiplying by 3.6 instead of dividing."],
            examinerNote: "All four marks require the two conversions to be stated.",
          },
        },
        {
          id: "mypm2-u1-compound-measures-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A delivery van drives 240 km at an average speed of 60 km/h. It then stops for a 30-minute break. The total journey, including the break, takes 4.5 hours.",
          parts: [
            { label: "a", prompt: "Work out the driving time, in hours.", marks: 2 },
            { label: "b", prompt: "Work out the average speed for the whole journey, including the break, in km/h.", marks: 2 },
            { label: "c", prompt: "A fuel can holds 20 litres. The van uses 8 litres per 100 km. Work out how many full tanks of fuel the van needs for the 240 km drive.", marks: 2 },
            { label: "d", prompt: "The van's speed in m/s during the drive is 60 km/h converted. Work out this speed in m/s.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Driving time", answer: 4, unit: "hours" },
              { label: "(b) Average speed for whole journey", answer: 53.33, tolerance: 0.01, unit: "km/h" },
              { label: "(c) Number of full tanks", answer: 1 },
              { label: "(d) Speed", answer: 16.67, tolerance: 0.01, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed}=\\dfrac{\\text{distance}}{\\text{time}}$ and $\\text{time}=\\dfrac{\\text{distance}}{\\text{speed}}$" },
              { kind: "principle", name: "Unit conversion", statement: "km/h to m/s: multiply by 1000 and divide by 3600." },
            ],
            steps: [
              { part: "a", reasoning: "Divide distance by driving speed.", working: "240\\div60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "4\\text{ hours}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The whole journey is 4.5 hours including the break; use total distance over total time.", working: "240\\div4.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. Check: $4+0.5=4.5$ hours, consistent with the stated total.", working: "53.33\\text{ km/h}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fuel used: $8\\times\\frac{240}{100}=8\\times2.4=19.2$ litres.", working: "19.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "19.2 litres fits in one 20-litre tank, so 1 full tank is needed.", working: "1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert km to m and hours to seconds.", working: "\\frac{60\\times1000}{3600}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate (accept 16.7 or $16\\tfrac23$).", working: "16.67\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ hours (b) $53.3$ km/h (c) $1$ full tank (d) about $16.7$ m/s",
            commonErrors: ["In (b) using 4.5 hours (drive + break) instead of the stated 5 hours.", "In (c) rounding 19.2 up to 2 tanks — a full tank suffices because 19.2 < 20."],
            examinerNote: "In (b) accept 53.3 or 53.33 km/h when total time 4.5 hours is used.",
          },
        },
      ],
    },
  ],
};
