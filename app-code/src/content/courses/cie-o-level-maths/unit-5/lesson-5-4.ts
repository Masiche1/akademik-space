import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "olm-u5-lesson-5-4",
  code: "5-4",
  title: "Density, Rates and Capacity",
  goal: "I CAN solve problems involving density, rates of flow and capacity.",
  standards: ["4024: mensuration"],
  vocabulary: [
    { term: "Density", definition: "$\\rho=\\frac{\\text{mass}}{\\text{volume}}$." },
    { term: "Rate of flow", definition: "Volume per unit time, e.g. litres/minute." },
    { term: "Capacity", definition: "Maximum volume a container holds." },
    { term: "Displacement", definition: "Volume of water displaced = volume of submerged object." },
  ],
  concepts: [
    {
      id: "olm-u5-s4-density",
      title: "Density problems",
      skill: "Solve density problems at O Level.",
      lesson: {
        sections: [
          { heading: "Density formula", body: "$\\text{density}=\\frac{\\text{mass}}{\\text{volume}}$. Rearrange as needed: mass = density × volume; volume = mass ÷ density. Units must be consistent: g/cm³, kg/m³, g/ml (note 1 ml = 1 cm³). For irregular objects, use water displacement: volume = final reading − initial reading." },
          { heading: "Composite density", body: "For hollow objects, density uses the material volume, not external volume — subtract the hollow part. For objects made of two materials, find each part's mass separately and divide total mass by total volume. Archimedes' principle: a floating object displaces its own weight of fluid — useful for finding volumes of irregular objects." },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
          { name: "Displacement", statement: "$V_{\\text{object}}=V_{\\text{final}}-V_{\\text{initial}}$" },
        ],
        workedExample: { problem: "A metal block 4×3×2 cm has mass 96 g. Find its density.", solution: "$V=24$ cm³; $\\rho=\\frac{96}{24}=4$ g/cm³." },
      },
      questions: [
        {
          id: "olm-u5-s4-de-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Density equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Volume ÷ mass" },
            { id: "b", text: "Mass + volume" },
            { id: "c", text: "Mass ÷ volume" },
            { id: "d", text: "Mass × volume" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$m/V$." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "Mass ÷ volume" },
        },
        {
          id: "olm-u5-s4-de-q2", difficulty: "foundation", totalMarks: 2,
          stem: "An object has mass 50 g and volume 10 cm³. Find its density.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$m/V$." }], steps: [
            { reasoning: "$\\rho=\\frac{50}{10}=5$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 g/cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 g/cm³" },
        },
        {
          id: "olm-u5-s4-de-q3", difficulty: "core", totalMarks: 3,
          stem: "A stone has mass 120 g. When submerged in water, the level rises from 200 ml to 250 ml. Find its density.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Displacement", statement: "Volume from water rise." }], steps: [
            { reasoning: "$V=250-200=50$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\rho=\\frac{120}{50}=2.4$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.4 g/cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "2.4 g/cm³" },
        },
        {
          id: "olm-u5-s4-de-q4", difficulty: "core", totalMarks: 4,
          stem: "A hollow metal sphere has outer radius 5 cm, inner radius 4 cm. If the metal density is 8 g/cm³, find the mass of the sphere.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Hollow volume", statement: "Outer minus inner." }], steps: [
            { reasoning: "$V=\\frac43\\pi(125-64)=\\frac43\\pi\\times61=\\frac{244\\pi}{3}$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$m=8\\times\\frac{244\\pi}{3}=\\frac{1952\\pi}{3}\\approx2044$ g.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{1952\\pi}{3}$ g ($\\approx2.04$ kg).", marks: 1, markCode: "M" },
            { reasoning: "Inner void subtracted correctly.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{1952\\pi}{3}$ g" },
        },
        {
          id: "olm-u5-s4-de-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The density of water is approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1 g/cm³" },
            { id: "b", text: "0.1 g/cm³" },
            { id: "c", text: "100 g/cm³" },
            { id: "d", text: "10 g/cm³" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "context", name: "Water density", statement: "Reference value." }], steps: [{ reasoning: "$1$ g per cm³ (or 1000 kg/m³).", marks: 1, markCode: "A" }], finalAnswer: "1 g/cm³" },
        },
        {
          id: "olm-u5-s4-de-q6", difficulty: "foundation", totalMarks: 2,
          stem: "An object has mass 80 g and volume 20 cm³. Find its density.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "g/cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$m/V$." }], steps: [
            { reasoning: "$\\rho=\\frac{80}{20}=4$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 g/cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 g/cm³" },
        },
        {
          id: "olm-u5-s4-de-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A material has density 3 g/cm³. Find the mass of a piece with volume 15 cm³.",
          response: { type: "numeric", parts: [{ label: "a", answer: 45, unit: "g" }] },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$m=\\rho V$." }], steps: [
            { reasoning: "$m=3\\times15=45$ g.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 45 g.", marks: 1, markCode: "A" },
          ], finalAnswer: "45 g" },
        },
        {
          id: "olm-u5-s4-de-q8", difficulty: "core", totalMarks: 2,
          stem: "An irregular stone is lowered into water and the level rises from 30 ml to 45 ml. The stone's volume is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "15 cm³" },
            { id: "b", text: "75 cm³" },
            { id: "c", text: "30 cm³" },
            { id: "d", text: "45 cm³" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Displacement", statement: "Volume = rise in level." }], steps: [
            { reasoning: "$45-30=15$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 15 cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 cm³" },
        },
        {
          id: "olm-u5-s4-de-q9", difficulty: "core", totalMarks: 3,
          stem: "A stone has mass 96 g. When placed in a measuring cylinder the water level rises from 200 ml to 260 ml. Find its density.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Displacement", statement: "Volume then density." }], steps: [
            { reasoning: "$V=260-200=60$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\rho=\\frac{96}{60}=1.6$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.6 g/cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "1.6 g/cm³" },
        },
        {
          id: "olm-u5-s4-de-q10", difficulty: "core", totalMarks: 2,
          stem: "A block measures 4 cm by 3 cm by 5 cm and has mass 180 g. Its density is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "12 g/cm³" },
            { id: "b", text: "3 g/cm³" },
            { id: "c", text: "0.33 g/cm³" },
            { id: "d", text: "60 g/cm³" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Density", statement: "$m/V$." }], steps: [
            { reasoning: "$V=60$ cm³; $\\rho=\\frac{180}{60}=3$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 3 g/cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 g/cm³" },
        },
        {
          id: "olm-u5-s4-de-q11", difficulty: "core", totalMarks: 3,
          stem: "A copper block measures 6 cm by 4 cm by 2 cm and copper has density 8.9 g/cm³. Find the mass of the block.",
          response: { type: "numeric", parts: [{ label: "a", answer: 427.2, tolerance: 0.01, unit: "g" }] },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$m=\\rho V$." }], steps: [
            { reasoning: "$V=48$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$m=8.9\\times48=427.2$ g.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 427.2 g.", marks: 1, markCode: "A" },
          ], finalAnswer: "427.2 g" },
        },
        {
          id: "olm-u5-s4-de-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A floating object displaces a mass of fluid equal to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Twice its weight" },
            { id: "b", text: "Its own weight" },
            { id: "c", text: "Its own density" },
            { id: "d", text: "Its own volume" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Archimedes", statement: "Displaced fluid weight = object weight." }], steps: [
            { reasoning: "Standard Archimedes principle.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Its own weight" },
        },
        {
          id: "olm-u5-s4-de-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A cube of side 4 cm is made of two halves joined together. One half has density 2 g/cm³ and the other 6 g/cm³. Find the total mass.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two materials", statement: "Sum the masses." }], steps: [
            { reasoning: "Each half $=\\frac{64}{2}=32$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Masses $=2\\times32=64$ g and $6\\times32=192$ g.", marks: 1, markCode: "M" },
            { reasoning: "Total $=256$ g.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 256 g.", marks: 1, markCode: "A" },
          ], finalAnswer: "256 g" },
        },
        {
          id: "olm-u5-s4-de-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A measuring cylinder contains 300 ml of water. Object P (mass 250 g) raises it to 350 ml; then object Q (mass 150 g) raises it further to 400 ml. Find the density of object Q.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Displacement", statement: "Volume of Q = second rise." }], steps: [
            { reasoning: "Volume of Q $=400-350=50$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\rho_Q=\\frac{150}{50}=3$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Check: P's volume $=50$ cm³ → $\\rho_P=5$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3 g/cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 g/cm³" },
        },
        {
          id: "olm-u5-s4-de-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A material has density 5.5 g/cm³. Find the volume of a piece with mass 220 g.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$V=m/\\rho$." }], steps: [
            { reasoning: "$V=\\frac{220}{5.5}=40$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 40 cm³.", marks: 1, markCode: "M" },
            { reasoning: "Check: $5.5\\times40=220$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "40 cm³" },
        },
        {
          id: "olm-u5-s4-de-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A steel ball raises the water level in a cylinder from 400 ml to 470 ml. The ball has mass 560 g. Find its density.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Displacement", statement: "Volume then density." }], steps: [
            { reasoning: "$V=470-400=70$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\rho=\\frac{560}{70}=8$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 g/cm³ (typical steel density ✓).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 g/cm³" },
        },
      ],
    },
    {
      id: "olm-u5-s4-rates",
      title: "Rates and capacity problems",
      skill: "Solve rate-of-flow and capacity problems at O Level.",
      lesson: {
        sections: [
          { heading: "Rates", body: "Rate = quantity ÷ time. For filling/draining: volume = rate × time. For pipes filling a tank: combined rate = sum of individual rates; time to fill = volume ÷ combined rate. For emptying, subtract rates. Convert units carefully: litres ↔ cm³ (1 litre = 1000 cm³ = 1000 ml), minutes ↔ hours." },
          { heading: "Capacity problems", body: "To find how long to fill a container: compute its volume, divide by flow rate. For partial filling: volume needed ÷ rate. For two taps one filling one draining: net rate = fill rate − drain rate; time = volume ÷ net rate. Always check whether the question asks for time in minutes or hours and convert at the end." },
        ],
        keyFormulas: [
          { name: "Rate", statement: "$\\text{rate}=\\frac{\\text{volume}}{\\text{time}}$" },
          { name: "Combined", statement: "Rates add (fill) or subtract (drain)" },
        ],
        workedExample: { problem: "A tank holds 500 litres. Tap A fills at 20 litres/min, tap B at 30 litres/min. How long to fill?", solution: "Combined rate $=50$ litres/min; time $=\\frac{500}{50}=10$ minutes." },
      },
      questions: [
        {
          id: "olm-u5-s4-ra-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Rate of flow is measured in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Area per unit time" },
            { id: "b", text: "Volume per unit time" },
            { id: "c", text: "Mass per unit time" },
            { id: "d", text: "Distance per unit time" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Rate", statement: "Volume/time." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "Volume per unit time" },
        },
        {
          id: "olm-u5-s4-ra-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A tap fills at 15 litres/min. How long to fill a 90-litre tank?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "$V/rate$." }], steps: [
            { reasoning: "$t=\\frac{90}{15}=6$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q3", difficulty: "core", totalMarks: 3,
          stem: "Two taps fill a tank at 12 and 18 litres/min. How long to fill a 300-litre tank using both?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined rate", statement: "Add rates." }], steps: [
            { reasoning: "Combined rate $=12+18=30$ litres/min.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\frac{300}{30}=10$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q4", difficulty: "core", totalMarks: 4,
          stem: "A tank of 600 litres has an inlet at 25 litres/min and a leak draining at 10 litres/min. How long to fill from empty?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Net rate", statement: "Fill minus drain." }], steps: [
            { reasoning: "Net rate $=25-10=15$ litres/min.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\frac{600}{15}=40$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 40 minutes.", marks: 1, markCode: "M" },
            { reasoning: "Leak reduces effective rate — checked ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "40 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Rate of flow is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Time ÷ volume" },
            { id: "b", text: "Volume ÷ time" },
            { id: "c", text: "Volume × time" },
            { id: "d", text: "Mass ÷ volume" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Rate", statement: "$V/t$." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "Volume ÷ time" },
        },
        {
          id: "olm-u5-s4-ra-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A tap fills at 20 litres per minute. How long does it take to fill a 120-litre tank?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6, unit: "minutes" }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "$V/\\text{rate}$." }], steps: [
            { reasoning: "$t=\\frac{120}{20}=6$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Water flows through a pipe at 5 litres per second. How many litres flow in 10 minutes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "500 litres" },
            { id: "b", text: "3000 litres" },
            { id: "c", text: "300 litres" },
            { id: "d", text: "30 litres" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Unit conversion", statement: "Convert seconds to minutes." }], steps: [
            { reasoning: "$5\\times60=300$ litres/min; $300\\times10=3000$ litres.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 3000 litres.", marks: 1, markCode: "A" },
          ], finalAnswer: "3000 litres" },
        },
        {
          id: "olm-u5-s4-ra-q8", difficulty: "core", totalMarks: 2,
          stem: "Tap A fills a tank at 25 litres/min and tap B at 35 litres/min. Together they fill at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "10 litres/min" },
            { id: "b", text: "875 litres/min" },
            { id: "c", text: "30 litres/min" },
            { id: "d", text: "60 litres/min" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Combined rate", statement: "Rates add." }], steps: [
            { reasoning: "$25+35=60$ litres/min.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 60 litres/min.", marks: 1, markCode: "A" },
          ], finalAnswer: "60 litres/min" },
        },
        {
          id: "olm-u5-s4-ra-q9", difficulty: "core", totalMarks: 3,
          stem: "A tank holds 800 litres. Two taps fill it at 30 litres/min and 50 litres/min. How long does it take to fill the tank when both are open?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined rate", statement: "Add then divide." }], steps: [
            { reasoning: "Combined rate $=30+50=80$ litres/min.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\frac{800}{80}=10$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q10", difficulty: "core", totalMarks: 2,
          stem: "A 500-litre tank is filled at 40 litres/min while a leak drains 15 litres/min. How long to fill from empty?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "minutes" }] },
          markscheme: { principles: [{ kind: "technique", name: "Net rate", statement: "Fill − drain." }], steps: [
            { reasoning: "Net rate $=25$ litres/min; $t=\\frac{500}{25}=20$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "20 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q11", difficulty: "core", totalMarks: 3,
          stem: "A pipe delivers water at 250 ml per second. How long does it take to fill a tank of capacity 300 litres?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Unit conversion", statement: "ml/s → litres/min." }], steps: [
            { reasoning: "$250$ ml/s $=0.25$ litres/s $=15$ litres/min.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\frac{300}{15}=20$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "20 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Tap A can fill a tank in 6 hours and tap B in 3 hours. Working together, how long do they take?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3 hours" },
            { id: "b", text: "2 hours" },
            { id: "c", text: "1.5 hours" },
            { id: "d", text: "4.5 hours" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Combined rate", statement: "Add reciprocal times." }], steps: [
            { reasoning: "$\\frac16+\\frac13=\\frac12$ tank/hour → 2 hours.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 2 hours.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 hours" },
        },
        {
          id: "olm-u5-s4-ra-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A 900-litre tank is filled by tap A at 45 litres/min. After 10 minutes, tap B (55 litres/min) is also opened. Find the total time to fill the tank.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-stage filling", statement: "Split at the moment B opens." }], steps: [
            { reasoning: "After 10 min: $45\\times10=450$ litres; remaining $=450$ litres.", marks: 1, markCode: "M" },
            { reasoning: "Combined rate $=45+55=100$ litres/min.", marks: 1, markCode: "M" },
            { reasoning: "Extra time $=\\frac{450}{100}=4.5$ minutes; total $=14.5$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 14.5 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "14.5 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A container has capacity 2 m³. Water is pumped in at 40 litres per minute. Find the time taken to fill it, in hours.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Unit conversion", statement: "m³ → litres, minutes → hours." }], steps: [
            { reasoning: "$2$ m³ $=2000$ litres.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\frac{2000}{40}=50$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "$50$ minutes $=\\frac{50}{60}=\\frac56$ hour.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac56$ hour ($\\approx50$ min).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac56$ hour" },
        },
        {
          id: "olm-u5-s4-ra-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A tank is draining at a net rate of 18 litres per minute. How long will it take to drain 360 litres?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "minutes" }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "$V/\\text{rate}$." }], steps: [
            { reasoning: "$t=\\frac{360}{18}=20$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20 minutes.", marks: 1, markCode: "M" },
            { reasoning: "Check: $18\\times20=360$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "20 minutes" },
        },
        {
          id: "olm-u5-s4-ra-q16", difficulty: "challenge", totalMarks: 3,
          stem: "Two pipes fill a 720-litre tank at 50 litres/min and 30 litres/min, while a drain removes 20 litres/min. How long to fill?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12, unit: "minutes" }] },
          markscheme: { principles: [{ kind: "technique", name: "Net rate", statement: "Fills add, drain subtracts." }], steps: [
            { reasoning: "Net rate $=50+30-20=60$ litres/min.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\frac{720}{60}=12$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 minutes" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u5-s4-rate-notes", title: "Density & rates — notes", summary: "Density formula and flow problems.",
      sections: [
        { heading: "Density", body: "$\\rho=m/V$; displacement for irregular objects; hollow = outer − inner." },
        { heading: "Rates", body: "$V=\\text{rate}\\times t$; combined rates add; net rate = in − out." },
      ] },
  ],
};
