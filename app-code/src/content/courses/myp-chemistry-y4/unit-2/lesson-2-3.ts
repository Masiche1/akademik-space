import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypc4-u2-lesson-2-3",
  code: "2-3",
  title: "Rates of Reaction and Quantitative Chemistry",
  goal: "I CAN explain factors affecting reaction rate and use the mole concept for calculations.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Rate of reaction", definition: "Speed of reaction measured by change in mass/volume/time or disappearance of reactant." },
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy (activation energy) and correct orientation." },
    { term: "Activation energy", definition: "Minimum energy needed for reaction to occur; catalyst lowers it." },
    { term: "Mole", definition: "Amount of substance containing 6.02×10²³ particles; n = mass/Mr." },
    { term: "Concentration", definition: "Amount of solute per volume of solution; mol/dm³." },
    { term: "Limiting reagent", definition: "Reactant completely used up first — determines maximum product." },
  ],
  concepts: [
    {
      id: "mypc4-u2-rates",
      title: "Rates of reaction",
      skill: "Explain factors affecting rate using collision theory.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "Reactions need particles to collide with (1) enough energy ≥ activation energy and (2) correct orientation. Rate increases with more frequent successful collisions.",
          },
          {
            heading: "Factors",
            body: "**Temperature**: particles move faster → more collisions + more have activation energy. **Concentration**: more particles per volume → more collisions. **Surface area**: powdered > lump → more exposed particles. **Catalyst**: provides alternative pathway with lower activation energy.",
          },
          {
            heading: "Measuring rate",
            body: "Gas volume/time (e.g. H₂ from acid+metal), mass loss/time (CO₂ from carbonate), color change/time, precipitate formation/time. Rate = quantity/time; steepest slope = fastest.",
          },
        ],
        keyFormulas: [
          { name: "Collision theory", statement: "Collision + energy + orientation = reaction" },
          { name: "Rate factors", statement: "Temp, concentration, surface area, catalyst" },
          { name: "Catalyst", statement: "Lowers activation energy" },
        ],
        workedExample: {
          problem: "Why does powdered calcium carbonate react faster with acid than lumps?",
          solution: "Powder has larger surface area → more particles exposed → more collisions per second.",
        },
      },
      questions: [
        {
          id: "mypc4-u2-rate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a catalyst do to a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is used up in reaction" },
              { id: "b", text: "Changes products" },
              { id: "c", text: "Slows it down" },
              { id: "d", text: "Speeds it up by lowering activation energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catalyst", statement: "Lowers activation energy; not consumed." },
            ],
            steps: [
              { reasoning: "Catalyst provides lower-energy pathway → faster rate.", working: "\\text{Ea lower}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lowers activation energy",
            commonErrors: ["Thinking catalyst is consumed."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-rate-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does increasing temperature increase reaction rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Particles become bigger" },
              { id: "b", text: "Particles stop moving" },
              { id: "c", text: "Activation energy decreases" },
              { id: "d", text: "Particles move faster → more collisions, and more have energy ≥ activation energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature effect", statement: "More energy → faster movement + more successful collisions." },
            ],
            steps: [
              { reasoning: "Higher temp → particles move faster → more collisions.", working: "\\text{more collisions}", marks: 1, markCode: "M" },
              { reasoning: "More particles exceed activation energy.", working: "\\text{Ea met}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More frequent + more energetic collisions",
            commonErrors: ["Saying temperature lowers activation energy."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A reaction produces gas. How could you measure its rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measure gas volume every 10 s and calculate volume/time" },
              { id: "b", text: "Count bubbles without timing" },
              { id: "c", text: "Weigh the flask only at end" },
              { id: "d", text: "Measure temperature only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate measurement", statement: "Quantity of product per unit time." },
            ],
            steps: [
              { reasoning: "Gas volume is measurable product quantity.", working: "\\text{volume}", marks: 1, markCode: "M" },
              { reasoning: "Divide by time intervals for rate.", working: "\\text{volume/time}", marks: 1, markCode: "M" },
              { reasoning: "State the method.", working: "\\text{rate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas volume per time interval",
            commonErrors: ["Only measuring at start/end."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Marble chips react with hydrochloric acid producing CO₂.",
          parts: [
            { label: "a", prompt: "Write the word equation for marble + acid.", marks: 2 },
            { label: "b", prompt: "Explain why powdered marble reacts faster.", marks: 2 },
            { label: "c", prompt: "Describe how temperature affects the rate.", marks: 2 },
            { label: "d", prompt: "Suggest why the reaction slows over time.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory application", statement: "Surface area, temperature, concentration affect rate." },
            ],
            steps: [
              { part: "a", reasoning: "Calcium carbonate + hydrochloric acid → calcium chloride + water + carbon dioxide.", working: "CaCO_3+HCl", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All products correct.", working: "CO_2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Powder = larger surface area → more particles exposed.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "More collisions per second → faster.", working: "\\text{collisions}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher temp → faster particles → more collisions + more exceed activation energy.", working: "\\text{temp}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain mechanism.", working: "\\text{Ea}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reactant (acid/marble) depleted → fewer particles → fewer collisions.", working: "\\text{depletion}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Concentration/amount decreases over time.", working: "\\text{concentration}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CaCO₃+HCl→CaCl₂+H₂O+CO₂ (b) surface area (c) temp increases rate (d) reactants depleted",
            commonErrors: ["In (d), saying reaction stops instantly."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypc4-u2-rate-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The rate of a reaction is calculated as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quantity of product formed per unit time" },
              { id: "b", text: "Volume of the container" },
              { id: "c", text: "Temperature of the mixture" },
              { id: "d", text: "Total mass of reactants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rate", statement: "Rate = quantity/time." },
            ],
            steps: [
              { reasoning: "Rate measures speed = product amount per time.", working: "\\text{q/t}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Quantity per unit time",
            commonErrors: ["Thinking rate is just quantity."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-rate-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does powdered calcium carbonate react faster with acid than large lumps?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Powder has fewer particles" },
              { id: "b", text: "Powder is a catalyst" },
              { id: "c", text: "Powder has a larger surface area, so more particles are exposed to collide" },
              { id: "d", text: "Lumps are colder" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Larger surface area → more collisions per second." },
            ],
            steps: [
              { reasoning: "Powder exposes more CaCO₃ particles to acid.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "More collisions → faster rate.", working: "\\text{collisions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Larger surface area",
            commonErrors: ["Saying powder is more concentrated."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reaction produces 60 cm³ of gas in 30 seconds. What is the average rate?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "cm^3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate calculation", statement: "rate = volume/time = 60/30." },
            ],
            steps: [
              { reasoning: "60/30 = 2 cm³/s.", working: "60/30=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 cm³/s",
            commonErrors: ["Dividing time by volume."],
            examinerNote: "B1 for 2 cm³/s.",
          },
        },
        {
          id: "mypc4-u2-rate-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The rate of a reaction is 0.50 g/s at t = 10 s and 0.20 g/s at t = 20 s. By how much did the rate decrease?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.3, unit: "g/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate change", statement: "Decrease = earlier rate − later rate." },
            ],
            steps: [
              { reasoning: "0.50 − 0.20 = 0.30 g/s.", working: "0.50-0.20=0.30", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "0.30\\text{ g/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.30 g/s",
            commonErrors: ["Computing a ratio instead of difference."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A catalyst increases the rate of a reaction by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the temperature" },
              { id: "b", text: "Changing the products formed" },
              { id: "c", text: "Providing an alternative pathway with lower activation energy" },
              { id: "d", text: "Being consumed in the reaction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catalyst", statement: "Lowers activation energy; not consumed; unchanged at end." },
            ],
            steps: [
              { reasoning: "Catalyst offers lower-energy pathway.", working: "\\text{Ea lower}", marks: 1, markCode: "M" },
              { reasoning: "State mechanism.", working: "\\text{pathway}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower activation energy pathway",
            commonErrors: ["Saying catalyst is used up."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Doubling the concentration of a reactant doubles the rate. If the rate is 3.0 mol/dm³/min, what is the rate at double concentration?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6.0, unit: "mol/dm^3/min" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Concentration effect", statement: "Rate proportional to concentration for this system." },
            ],
            steps: [
              { reasoning: "3.0 × 2 = 6.0 mol/dm³/min.", working: "3.0\\times2=6.0", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "6.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6.0 mol/dm³/min",
            commonErrors: ["Adding 2 instead of doubling."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does a reaction gradually slow down as it proceeds, even at constant temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature drops automatically" },
              { id: "b", text: "The activation energy increases" },
              { id: "c", text: "Products block the container" },
              { id: "d", text: "Reactant particles are used up, so there are fewer particles and fewer collisions per second" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Depletion", statement: "Lower reactant concentration → fewer collisions → slower rate." },
            ],
            steps: [
              { reasoning: "Reactants are consumed over time.", working: "\\text{depleted}", marks: 1, markCode: "M" },
              { reasoning: "Fewer particles → fewer collisions per second.", working: "\\text{fewer collisions}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{slower}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reactants depleted → fewer collisions",
            commonErrors: ["Saying temperature changes."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Gas volume measurements: 0 s → 0 cm³, 10 s → 25 cm³, 20 s → 40 cm³. What is the average rate between 0 and 20 s?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "cm^3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Average rate", statement: "rate = total volume/total time = 40/20." },
            ],
            steps: [
              { reasoning: "Total gas = 40 cm³ in 20 s.", working: "40\\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "40/20 = 2 cm³/s.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2\\text{ cm}^3/s", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 cm³/s",
            commonErrors: ["Using only one interval."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many factors affect the rate of a reaction?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rate factors", statement: "Temperature, concentration, surface area, catalyst = 4." },
            ],
            steps: [
              { reasoning: "Four factors listed.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Missing catalyst."],
            examinerNote: "B1 for 4.",
          },
        },
        {
          id: "mypc4-u2-rate-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 10 °C temperature rise approximately doubles the rate. If the rate is 1.5 mol/dm³/min, estimate the rate at the higher temperature.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.0, unit: "mol/dm^3/min" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature effect", statement: "~10 °C rise ≈ doubles rate (rule of thumb)." },
            ],
            steps: [
              { reasoning: "1.5 × 2 = 3.0 mol/dm³/min.", working: "3.0", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "3.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.0 mol/dm³/min",
            commonErrors: ["Adding 10 to rate."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-rate-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Collision theory and rate factors.",
          parts: [
            { label: "a", prompt: "State the two conditions needed for a successful collision.", marks: 2 },
            { label: "b", prompt: "Explain how increasing surface area increases rate.", marks: 2 },
            { label: "c", prompt: "Describe one method to measure the rate of a gas-producing reaction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Energy ≥ Ea + correct orientation = reaction." },
            ],
            steps: [
              { part: "a", reasoning: "Sufficient energy (≥ activation energy) and correct orientation.", working: "\\text{energy+orient}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both conditions stated.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More particles exposed → more collisions per second.", working: "\\text{more coll}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State link to rate.", working: "\\text{faster}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Measure gas volume at timed intervals.", working: "\\text{vol/time}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Method described correctly.", working: "\\text{method}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) energy+orientation (b) more collisions (c) gas volume vs time",
            commonErrors: ["In (a), omitting orientation."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypc4-u2-rate-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Marble chips (CaCO₃) react with hydrochloric acid.",
          parts: [
            { label: "a", prompt: "Explain how temperature affects the rate using collision theory.", marks: 2 },
            { label: "b", prompt: "Explain how concentration of acid affects the rate.", marks: 2 },
            { label: "c", prompt: "Explain the role of a catalyst and why it does not appear in the equation.", marks: 2 },
            { label: "d", prompt: "Sketch/describe the shape of a volume-time graph and identify the fastest point.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate factors", statement: "Temp, concentration, surface area, catalyst all affect collision frequency/energy." },
            ],
            steps: [
              { part: "a", reasoning: "Higher temp → particles move faster → more collisions, more exceed Ea.", working: "\\text{temp}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct mechanism.", working: "\\text{Ea}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Higher concentration → more particles per volume → more collisions.", working: "\\text{conc}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct explanation.", working: "\\text{collisions}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Catalyst lowers Ea via alternative pathway; unchanged at end so not in equation.", working: "\\text{catalyst}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both points covered.", working: "\\text{not consumed}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Curve starts steep, flattens as reactants deplete; steepest at start = fastest.", working: "\\text{curve}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct description.", working: "\\text{steepest}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) temp→faster+more Ea (b) conc→more collisions (c) lowers Ea, unchanged (d) steep start, flattens",
            commonErrors: ["In (d), identifying the end as fastest."],
            examinerNote: "M1 A1 for each part.",
          },
        },
      ],
    },
    {
      id: "mypc4-u2-moles",
      title: "The Mole Concept",
      skill: "Use moles for quantitative calculations: mass↔moles, concentration, reacting masses.",
      lesson: {
        sections: [
          {
            heading: "What is a mole?",
            body: "1 mole = 6.02×10²³ particles (Avogadro's number). **n = mass / Mr** where Mr = relative molecular mass. Example: H₂O Mr=18, so 18 g = 1 mol = 6.02×10²³ molecules.",
          },
          {
            heading: "Concentration and volume",
            body: "**n = c × V** (concentration mol/dm³ × volume dm³). 1 dm³ = 1000 cm³. For titrations: moles acid = moles base (1:1). For gases at RTP: 1 mol = 24 dm³.",
          },
          {
            heading: "Stoichiometry",
            body: "Balanced equation gives mole ratio. E.g. 2H₂ + O₂ → 2H₂O: 2 mol H₂ reacts with 1 mol O₂ → 2 mol H₂O. Use ratio to find unknown moles/masses.",
          },
        ],
        keyFormulas: [
          { name: "Moles", statement: "n = mass/Mr" },
          { name: "Concentration", statement: "n = cV" },
          { name: "Gas volume", statement: "1 mol = 24 dm³ at RTP" },
        ],
        workedExample: {
          problem: "How many moles in 4.5 g of water (Mr=18)?",
          solution: "n = 4.5/18 = 0.25 mol.",
        },
      },
      questions: [
        {
          id: "mypc4-u2-mole-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many particles in 1 mole of any substance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6.02×10²⁴" },
              { id: "b", text: "6.02×10²³" },
              { id: "c", text: "1×10²³" },
              { id: "d", text: "6.02×10²²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Avogadro's number", statement: "6.02×10²³ particles per mole." },
            ],
            steps: [
              { reasoning: "1 mole = 6.02×10²³ particles.", working: "6.02\\times10^{23}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 6.02×10²³",
            commonErrors: ["Wrong power of ten."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-mole-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many moles are in 9.0 g of water (Mr = 18)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2.0 mol" },
              { id: "b", text: "0.5 mol" },
              { id: "c", text: "0.25 mol" },
              { id: "d", text: "18 mol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole calculation", statement: "n = mass/Mr = 9/18 = 0.5." },
            ],
            steps: [
              { reasoning: "n = 9.0/18 = 0.5 mol.", working: "9/18=0.5", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "0.5\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5 mol",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate moles in 250 cm³ of 0.5 mol/dm³ NaCl solution.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.5 mol" },
              { id: "b", text: "0.125 mol" },
              { id: "c", text: "125 mol" },
              { id: "d", text: "0.025 mol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "n=cV", statement: "Convert cm³ to dm³ first: 250 cm³ = 0.25 dm³." },
            ],
            steps: [
              { reasoning: "V = 250/1000 = 0.25 dm³.", working: "0.25\\text{ dm}^3", marks: 1, markCode: "M" },
              { reasoning: "n = 0.5 × 0.25 = 0.125 mol.", working: "0.125", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "0.125\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.125 mol",
            commonErrors: ["Forgetting cm³→dm³ conversion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "2H₂ + O₂ → 2H₂O. 4.0 g H₂ reacts with excess O₂.",
          parts: [
            { label: "a", prompt: "Calculate moles of H₂ (Mr=2).", marks: 2 },
            { label: "b", prompt: "Use equation ratio to find moles of H₂O formed.", marks: 2 },
            { label: "c", prompt: "Calculate mass of water produced (Mr=18).", marks: 2 },
            { label: "d", prompt: "Explain why O₂ is in excess.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stoichiometry", statement: "n=mass/Mr; equation ratio links moles." },
            ],
            steps: [
              { part: "a", reasoning: "n(H₂) = 4.0/2 = 2.0 mol.", working: "2.0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", working: "\\text{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ratio 2H₂:2H₂O = 1:1 → 2.0 mol H₂O.", working: "2.0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply ratio correctly.", working: "\\text{1:1}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "mass = n×Mr = 2.0×18 = 36 g.", working: "36\\text{ g}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct mass.", working: "\\text{36g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Excess = more than needed; ensures H₂ fully reacts (limiting reagent).", working: "\\text{excess}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "H₂ determines product amount.", working: "\\text{limiting}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2.0 mol H₂ (b) 2.0 mol H₂O (c) 36 g (d) H₂ is limiting reagent",
            commonErrors: ["In (b), using 2:1 ratio backwards."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u2-mole-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One mole of any substance contains how many particles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.00×10²⁴" },
              { id: "b", text: "6.02×10²³" },
              { id: "c", text: "3.01×10²³" },
              { id: "d", text: "6.02×10²²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Avogadro's number", statement: "6.02×10²³ particles per mole." },
            ],
            steps: [
              { reasoning: "1 mol = 6.02×10²³ particles.", working: "6.02\\times10^{23}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 6.02×10²³",
            commonErrors: ["Wrong power of ten."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-mole-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "The number of moles of a substance is calculated using...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "n = mass / Mr" },
              { id: "b", text: "n = mass + Mr" },
              { id: "c", text: "n = mass × Mr" },
              { id: "d", text: "n = Mr / mass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "n = mass/Mr." },
            ],
            steps: [
              { reasoning: "Moles = mass divided by molar mass.", working: "n=m/M_r", marks: 1, markCode: "M" },
              { reasoning: "State formula.", working: "\\text{n=m/Mr}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "n = mass/Mr",
            commonErrors: ["Inverting the formula."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many moles are in 36 g of water? (Mr H₂O = 18)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.0, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Moles", statement: "n = 36/18 = 2.0 mol." },
            ],
            steps: [
              { reasoning: "n = 36/18 = 2.0 mol.", working: "36/18=2.0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2.0 mol",
            commonErrors: ["Answering 18."],
            examinerNote: "B1 for 2.0 mol.",
          },
        },
        {
          id: "mypc4-u2-mole-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the moles of NaOH in 0.250 dm³ of 0.40 mol/dm³ solution.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.1, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "n=cV", statement: "n = 0.40 × 0.250 = 0.10 mol." },
            ],
            steps: [
              { reasoning: "n = c×V = 0.40 × 0.250.", working: "0.40\\times0.250", marks: 1, markCode: "M" },
              { reasoning: "n = 0.10 mol.", working: "0.10\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.10 mol",
            commonErrors: ["Using 250 instead of 0.250 dm³."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the relative molecular mass (Mr) of CO₂? (Ar: C = 12, O = 16)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "46" },
              { id: "b", text: "44" },
              { id: "c", text: "32" },
              { id: "d", text: "28" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mr", statement: "Mr = sum of atomic masses = 12 + 2×16." },
            ],
            steps: [
              { reasoning: "Mr = 12 + (2×16) = 44.", working: "12+32=44", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "44", marks: 1, markCode: "A" },
            ],
            finalAnswer: "44",
            commonErrors: ["Counting only one oxygen."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the mass of 0.25 mol of NaCl. (Mr NaCl = 58.5)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 14.6, unit: "g", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mass from moles", statement: "mass = n × Mr = 0.25 × 58.5." },
            ],
            steps: [
              { reasoning: "mass = 0.25 × 58.5 = 14.625 ≈ 14.6 g.", working: "14.6\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "14.6\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14.6 g",
            commonErrors: ["Dividing by Mr."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why must the volume be converted from cm³ to dm³ when using n = c × V?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moles are always in dm³" },
              { id: "b", text: "Concentration is defined per dm³, so volume must be in dm³ for units to match" },
              { id: "c", text: "It makes the answer bigger" },
              { id: "d", text: "cm³ is not a real unit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Units", statement: "c in mol/dm³ requires V in dm³." },
            ],
            steps: [
              { reasoning: "Concentration unit is mol per dm³.", working: "\\text{mol/dm}^3", marks: 1, markCode: "M" },
              { reasoning: "V must match → convert cm³ ÷ 1000.", working: "\\div1000", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Units must be consistent (dm³)",
            commonErrors: ["Thinking conversion is optional."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For 2H₂ + O₂ → 2H₂O, 0.50 mol of H₂ reacts completely. How many moles of H₂O form, and what volume of O₂ is used at RTP (1 mol gas = 24 dm³)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "mol" },
              { label: "b", answer: 6.0, unit: "dm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stoichiometry", statement: "2H₂:1O₂:2H₂O; gas at RTP 24 dm³/mol." },
            ],
            steps: [
              { reasoning: "H₂:H₂O = 1:1 → 0.50 mol H₂O.", working: "0.50", marks: 1, markCode: "M" },
              { reasoning: "H₂:O₂ = 2:1 → 0.25 mol O₂.", working: "0.25", marks: 1, markCode: "M" },
              { reasoning: "V(O₂) = 0.25 × 24 = 6.0 dm³.", working: "6.0\\text{ dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.50 mol H₂O; 6.0 dm³ O₂",
            commonErrors: ["Using 1:1 for O₂."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many moles are in 12 g of carbon? (Ar C = 12)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.5 mol" },
              { id: "b", text: "6.0 mol" },
              { id: "c", text: "12 mol" },
              { id: "d", text: "1.0 mol" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Moles", statement: "n = 12/12 = 1.0 mol." },
            ],
            steps: [
              { reasoning: "n = mass/Mr = 12/12 = 1.0 mol.", working: "1.0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1.0 mol",
            commonErrors: ["Answering 12."],
            examinerNote: "B1 for 1.0 mol.",
          },
        },
        {
          id: "mypc4-u2-mole-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What volume does 0.50 mol of any gas occupy at room temperature and pressure? (1 mol = 24 dm³)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12, unit: "dm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Gas volume", statement: "V = n × 24 dm³/mol at RTP." },
            ],
            steps: [
              { reasoning: "V = 0.50 × 24 = 12 dm³.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "12\\text{ dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 dm³",
            commonErrors: ["Dividing by 24."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-mole-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "The mole concept.",
          parts: [
            { label: "a", prompt: "Define one mole of a substance.", marks: 1 },
            { label: "b", prompt: "Calculate the moles in 9.0 g of water (Mr = 18).", marks: 1 },
            { label: "c", prompt: "Calculate the moles in 100 cm³ of 0.50 mol/dm³ NaCl.", marks: 2 },
            { label: "d", prompt: "For 2H₂ + O₂ → 2H₂O, state the mole ratio of H₂ to O₂.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole concept", statement: "n = mass/Mr = cV; equation gives mole ratios." },
            ],
            steps: [
              { part: "a", reasoning: "Amount containing 6.02×10²³ particles.", working: "\\text{def}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "n = 9/18 = 0.50 mol.", working: "0.50", marks: 1, markCode: "A" },
              { part: "c", reasoning: "V = 100/1000 = 0.100 dm³.", working: "0.100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "n = 0.50 × 0.100 = 0.050 mol.", working: "0.050", marks: 1, markCode: "A" },
              { part: "d", reasoning: "H₂:O₂ = 2:1.", working: "2:1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct ratio stated.", working: "\\text{ratio}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6.02×10²³ particles (b) 0.50 mol (c) 0.050 mol (d) 2:1",
            commonErrors: ["In (c), forgetting cm³→dm³."],
            examinerNote: "A1 for (a),(b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u2-mole-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "2H₂ + O₂ → 2H₂O. A student uses 4.0 g H₂ with excess O₂.",
          parts: [
            { label: "a", prompt: "Calculate moles of H₂ (Mr = 2).", marks: 1 },
            { label: "b", prompt: "Calculate moles of H₂O formed using the equation ratio.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of water produced (Mr = 18).", marks: 2 },
            { label: "d", prompt: "Explain what would happen to the product mass if only 2.0 g H₂ were used instead.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stoichiometry", statement: "n = mass/Mr; ratio links reactant to product." },
            ],
            steps: [
              { part: "a", reasoning: "n(H₂) = 4.0/2 = 2.0 mol.", working: "2.0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ratio 1:1 → 2.0 mol H₂O.", working: "2.0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct application.", working: "\\text{1:1}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "mass = 2.0 × 18 = 36 g.", working: "36\\text{ g}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct mass.", working: "\\text{36g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Half the H₂ → half the product: 1.0 mol → 18 g.", working: "18\\text{ g}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Halving logic correct.", working: "\\text{half}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Final answer stated.", working: "\\text{18g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2.0 mol (b) 2.0 mol (c) 36 g (d) 18 g (half)",
            commonErrors: ["In (d), thinking product mass unchanged."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
      ],
    },
  ],
};
