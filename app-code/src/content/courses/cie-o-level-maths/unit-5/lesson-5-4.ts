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
            { id: "a", text: "Mass ÷ volume" }, { id: "b", text: "Volume ÷ mass" }, { id: "c", text: "Mass × volume" }, { id: "d", text: "Mass + volume" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Volume per unit time" }, { id: "b", text: "Mass per unit time" }, { id: "c", text: "Distance per unit time" }, { id: "d", text: "Area per unit time" },
          ], correctChoiceId: "a" },
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
