import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypc5-u2-lesson-2-1",
  code: "2-1",
  title: "Factors Affecting Reaction Rate",
  goal: "I CAN explain collision theory and describe how concentration, surface area, temperature and catalysts affect reaction rate.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating",
  ],
  vocabulary: [
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy (activation energy) and correct orientation." },
    { term: "Activation energy", definition: "Minimum energy particles need in a collision for a reaction to occur." },
    { term: "Rate of reaction", definition: "How quickly reactants are used up or products formed; measured by gas volume, mass loss or colour change." },
    { term: "Catalyst", definition: "Substance that speeds up a reaction by providing an alternative pathway with lower activation energy; not consumed." },
    { term: "Surface area", definition: "Total exposed area of a solid; larger surface area gives more collisions per second." },
    { term: "Concentration", definition: "Amount of solute per unit volume; higher concentration means more particles per volume." },
  ],
  concepts: [
    {
      id: "mypc5-u2-collision",
      title: "Collision theory and rate factors",
      skill: "Apply collision theory to explain concentration, surface area and temperature effects on rate.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "For a reaction to occur, particles must **collide** with (1) enough energy to exceed the **activation energy** and (2) a favourable orientation. Rate depends on the **frequency of successful collisions** per second. Temperature, concentration and surface area all increase this frequency.",
          },
          {
            heading: "Concentration, surface area, temperature",
            body: "**Higher concentration** → more particles per volume → more collisions → faster rate. **Larger surface area** (powdered vs lump CaCO₃) → more exposed particles → faster rate. **Higher temperature** → particles move faster (more collisions) AND a greater fraction exceed activation energy — a double effect, so temperature has the strongest influence.",
          },
          {
            heading: "Catalysts",
            body: "A **catalyst** provides an alternative reaction pathway with **lower activation energy**, increasing the proportion of successful collisions without being used up. Enzymes are biological catalysts; catalytic converters use Pt/Rh to speed harmful exhaust reactions.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "Rate ~ frequency of successful collisions per second" },
          { name: "Temperature", statement: "More collisions + more exceed E_a; strongest effect" },
          { name: "Catalyst", statement: "Lowers E_a via alternative pathway; not consumed" },
        ],
        workedExample: {
          problem: "Powdered magnesium reacts with hydrochloric acid faster than ribbon magnesium. Explain.",
          solution: "Powder has a much larger surface area, so more Mg atoms are exposed to H⁺ ions at any instant → more frequent successful collisions → faster rate.",
        },
      },
      questions: [
        {
          id: "mypc5-u2-collision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to collision theory, a reaction only occurs when particles...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Collide with sufficient energy and correct orientation" },
              { id: "b", text: "Are stationary" },
              { id: "c", text: "Are cold" },
              { id: "d", text: "Touch each other gently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collision theory", statement: "Successful collision needs energy ≥ E_a and correct orientation." },
            ],
            steps: [
              { reasoning: "Both energy and orientation conditions required.", working: "E_a+\\text{orientation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sufficient energy and correct orientation",
            commonErrors: ["Saying any collision causes reaction."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-collision-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does increasing temperature increase reaction rate more than increasing concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature increases collision frequency AND the proportion of collisions exceeding activation energy" },
              { id: "b", text: "Temperature only increases particle size" },
              { id: "c", text: "Concentration has no effect on rate" },
              { id: "d", text: "Temperature removes activation energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature effect", statement: "Double effect: more collisions + greater fraction with E > E_a." },
            ],
            steps: [
              { reasoning: "Hotter particles move faster → more collisions per second.", working: "\\text{more collisions}", marks: 1, markCode: "M" },
              { reasoning: "Energy distribution shifts → larger fraction exceeds E_a.", working: "E>E_a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature affects both collision frequency and energy",
            commonErrors: ["Saying temperature eliminates activation energy."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A catalyst speeds up the decomposition of hydrogen peroxide. Explain its action and why it does not appear in the overall equation.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It provides a lower-energy pathway so more collisions succeed; it is regenerated unchanged so net amount is unchanged" },
              { id: "b", text: "It is consumed by the reaction" },
              { id: "c", text: "It lowers the temperature" },
              { id: "d", text: "It increases activation energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalysis", statement: "Catalyst lowers E_a via alternative pathway; regenerated → not consumed." },
            ],
            steps: [
              { reasoning: "Alternative pathway has lower activation energy.", working: "E_a\\downarrow", marks: 1, markCode: "M" },
              { reasoning: "More collisions exceed lowered E_a → faster rate.", working: "\\text{faster}", marks: 1, markCode: "M" },
              { reasoning: "Catalyst regenerated → not in overall equation.", working: "\\text{regenerated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower E_a pathway; regenerated unchanged",
            commonErrors: ["Saying catalyst is consumed or changes equilibrium."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates the rate of reaction between marble chips (CaCO₃) and hydrochloric acid by measuring gas volume.",
          parts: [
            { label: "a", prompt: "Identify the independent variable if comparing lump vs powdered marble.", marks: 1 },
            { label: "b", prompt: "State the dependent variable and two controlled variables.", marks: 2 },
            { label: "c", prompt: "Predict and explain how the rate differs between lump and powdered marble using collision theory.", marks: 2 },
            { label: "d", prompt: "Write the balanced equation for the reaction and state one safety precaution.", marks: 2 },
            { label: "e", prompt: "Suggest one real-life application where increasing surface area speeds up a reaction.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate experiment", statement: "Measure gas volume vs time; control everything except the tested variable." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: surface area/particle size of marble.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dependent: volume of CO₂ produced / rate (cm³/s).", working: "V_{CO_2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Controlled: acid concentration/volume, mass of marble, temperature.", working: "\\text{controlled}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Powder reacts faster: larger surface area → more CaCO₃ particles exposed → more collisions with H⁺.", working: "\\text{faster}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Same total mass but greater exposed area per second.", working: "\\text{collisions}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "CaCO_3 + 2HCl -> CaCl_2 + H_2O + CO_2.", working: "CaCO_3+2HCl\\to CaCl_2+H_2O+CO_2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Safety: wear goggles (acid spray), use small quantities; balanced equation credit here split with equation — equation gets M, safety gets A.", working: "\\text{safety}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any valid application: powdered reactants in industry (cement, fertiliser), digestion aided by chewing, catalytic converters.", working: "\\text{application}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) surface area (b) CO₂ volume + controls (c) powder faster, more collisions (d) CaCO₃+2HCl→CaCl₂+H₂O+CO₂, goggles (e) powdered fuels/industry",
            commonErrors: ["In (c), saying powder has 'more CaCO₃' — same mass, just more exposed."],
            examinerNote: "A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d); A1 for (e).",
          },
        },
        {
          id: "mypc5-u2-collision-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change increases the rate of a reaction by increasing the frequency of collisions between particles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the concentration of a reactant" },
              { id: "b", text: "Adding a noble gas at constant volume" },
              { id: "c", text: "Decreasing the temperature" },
              { id: "d", text: "Removing a reactant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Concentration effect", statement: "Higher concentration → more particles per volume → more collisions per second." },
            ],
            steps: [
              { reasoning: "More particles in the same volume collide more often.", working: "\\text{concentration}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increasing concentration",
            commonErrors: ["Choosing temperature — that changes both frequency and energy."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-collision-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reaction produces 50 cm³ of gas in 25 seconds. What is the average rate of gas production?",
          response: {
            type: "numeric",
            parts: [{ label: "Rate", answer: 2, unit: "cm³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Rate = change in quantity / time." },
            ],
            steps: [
              { reasoning: "$50 \\div 25 = 2$ cm³/s.", working: "50\\div25=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\ \\text{cm}^3/\\text{s}$",
            commonErrors: ["Dividing time by volume instead."],
            examinerNote: "B1 for 2 cm³/s.",
          },
        },
        {
          id: "mypc5-u2-collision-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rank the rate of reaction with hydrochloric acid for equal masses of marble: lump chips vs finely powdered marble. Assign 1 = slowest.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "Lump chips", answer: 1 },
              { label: "Powdered", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Smaller particles → larger total surface area → more collisions per second." },
            ],
            steps: [
              { part: "Lump chips", reasoning: "Lump has small surface area → fewer CaCO₃ particles exposed → slower.", working: "\\text{slow}", marks: 1, markCode: "M" },
              { part: "Powdered", reasoning: "Powder exposes far more surface → more frequent collisions → faster.", working: "\\text{fast}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lump chips (1) < powdered (2)",
            commonErrors: ["Thinking powder is slower — smaller particles react faster."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a gas syringe experiment, 80 cm³ of gas is collected in 40 s. What is the average rate?",
          response: {
            type: "numeric",
            parts: [{ label: "Rate", answer: 2, unit: "cm³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Rate = volume / time." },
            ],
            steps: [
              { reasoning: "Rate = $80 \\div 40$.", working: "80\\div40", marks: 1, markCode: "M" },
              { reasoning: "Rate = $2$ cm³/s.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{cm}^3/\\text{s}$",
            commonErrors: ["Using 40 ÷ 80 = 0.5 — inverted ratio."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does raising the temperature increase reaction rate more than doubling the concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature both increases collision frequency AND shifts the energy distribution so a larger fraction of collisions exceed activation energy" },
              { id: "b", text: "Temperature only increases particle size" },
              { id: "c", text: "Concentration has no effect on rate" },
              { id: "d", text: "Temperature destroys activation energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature double effect", statement: "More collisions + larger fraction with $E > E_a$." },
            ],
            steps: [
              { reasoning: "Hotter particles move faster → more collisions per second.", working: "\\text{frequency}", marks: 1, markCode: "M" },
              { reasoning: "Energy distribution shifts → more collisions exceed $E_a$ → stronger effect than concentration alone.", working: "E>E_a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature affects both frequency and energy of collisions",
            commonErrors: ["Saying temperature eliminates activation energy."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas syringe graph shows 20 cm³ at t = 10 s and 60 cm³ at t = 30 s. What is the rate between these times?",
          response: {
            type: "numeric",
            parts: [{ label: "Rate", answer: 2, unit: "cm³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate from graph", statement: "Rate = gradient = $\\Delta V / \\Delta t$." },
            ],
            steps: [
              { reasoning: "Rate = $(60-20) \\div (30-10)$.", working: "\\frac{60-20}{30-10}", marks: 1, markCode: "M" },
              { reasoning: "Rate = $40 \\div 20 = 2$ cm³/s.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{cm}^3/\\text{s}$",
            commonErrors: ["Using 60 ÷ 30 = 2 but for wrong reason, or $(60-20) \\div 30$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Manganese(IV) oxide catalyses the decomposition of hydrogen peroxide. Explain how it speeds up the reaction without being used up.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It provides an alternative pathway with lower activation energy, so more collisions have sufficient energy; it is regenerated unchanged at the end" },
              { id: "b", text: "It is consumed by the reaction" },
              { id: "c", text: "It raises the temperature of the mixture" },
              { id: "d", text: "It increases the concentration of H₂O₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalysis", statement: "Catalyst lowers $E_a$ via alternative pathway; regenerated → not consumed." },
            ],
            steps: [
              { reasoning: "Alternative pathway has lower activation energy.", working: "E_a\\downarrow", marks: 1, markCode: "M" },
              { reasoning: "More collisions exceed the lowered $E_a$ → faster rate.", working: "\\text{faster}", marks: 1, markCode: "M" },
              { reasoning: "Catalyst regenerated → not in overall equation, not consumed.", working: "\\text{regenerated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower $E_a$ pathway; regenerated unchanged",
            commonErrors: ["Saying the catalyst is used up or changes the products."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Reaction A produces 30 cm³ of gas in 60 s; reaction B produces 45 cm³ in 30 s. Which is faster and by what factor?",
          response: {
            type: "numeric",
            parts: [
              { label: "Rate A", answer: 0.5, unit: "cm³/s" },
              { label: "Rate B", answer: 1.5, unit: "cm³/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate comparison", statement: "Rate = volume / time; compare gradients." },
            ],
            steps: [
              { part: "Rate A", reasoning: "Rate A = $30 \\div 60 = 0.5$ cm³/s.", working: "0.5", marks: 1, markCode: "M" },
              { part: "Rate B", reasoning: "Rate B = $45 \\div 30 = 1.5$ cm³/s.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "B is faster: $1.5 \\div 0.5 = 3$ times the rate of A.", working: "3\\times", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = 0.5, B = 1.5 cm³/s; B is 3× faster",
            commonErrors: ["Comparing volumes only (45 > 30) without normalising for time."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which factor has the greatest effect on the proportion of collisions that exceed activation energy, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature — heating shifts the particle energy distribution so a much larger fraction of collisions exceed $E_a$, in addition to increasing collision frequency" },
              { id: "b", text: "Surface area — it changes the number of collisions" },
              { id: "c", text: "Concentration — it changes particle spacing" },
              { id: "d", text: "A catalyst — it changes the reaction products" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature and $E_a$", statement: "Temperature affects both collision frequency and the fraction exceeding $E_a$." },
            ],
            steps: [
              { reasoning: "Only temperature changes the energy distribution of particles.", working: "\\text{energy dist}", marks: 1, markCode: "M" },
              { reasoning: "Larger fraction of collisions exceed $E_a$ at higher T.", working: "E>E_a", marks: 1, markCode: "M" },
              { reasoning: "Hence temperature has the strongest overall influence on rate.", working: "\\text{strongest}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature — double effect on collisions",
            commonErrors: ["Choosing surface area, which only changes collision frequency."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain, using collision theory, why increasing temperature increases reaction rate more than increasing concentration does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Rate depends on frequency AND energy of successful collisions." },
            ],
            steps: [
              { reasoning: "Higher T → particles move faster → more collisions per second (frequency effect).", working: "\\text{frequency}", marks: 1, markCode: "M" },
              { reasoning: "Higher T → energy distribution shifts → larger fraction of collisions exceed $E_a$.", working: "E>E_a", marks: 1, markCode: "M" },
              { reasoning: "Concentration only increases frequency (more particles per volume) — no effect on collision energy.", working: "\\text{concentration}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: temperature has a double effect → strongest influence on rate.", working: "\\text{double}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature increases both collision frequency and the fraction exceeding $E_a$",
            commonErrors: ["Claiming temperature removes activation energy entirely."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student wants to investigate how concentration affects the rate of reaction between magnesium ribbon and hydrochloric acid. Identify the independent variable, dependent variable and two controlled variables, and explain why each control is needed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Fair test", statement: "Change only the independent variable; control all others." },
            ],
            steps: [
              { reasoning: "Independent: concentration of HCl; dependent: rate (e.g. volume of H₂ per second or time for ribbon to dissolve).", working: "\\text{variables}", marks: 1, markCode: "M" },
              { reasoning: "Control 1: same mass/length/surface area of Mg ribbon — otherwise surface area affects rate too.", working: "\\text{Mg amount}", marks: 1, markCode: "M" },
              { reasoning: "Control 2: same temperature and volume of acid — temperature affects rate strongly; volume affects total gas.", working: "\\text{T and V}", marks: 1, markCode: "A" },
              { reasoning: "Without controls the test is unfair — other factors would change rate simultaneously.", working: "\\text{fair}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Concentration/rate; control Mg surface area, temperature, volume",
            commonErrors: ["Changing two variables at once."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-collision-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the use of catalysts in industrial processes, considering both benefits and limitations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Industrial catalysis", statement: "Catalysts lower $E_a$ → faster reactions at lower temperatures." },
            ],
            steps: [
              { reasoning: "Benefit: faster reaction rate at same temperature → higher throughput/production.", working: "\\text{rate}", marks: 1, markCode: "M" },
              { reasoning: "Benefit: allows lower operating temperatures → saves energy and cost; or same T gives higher yield for equilibrium.", working: "\\text{energy}", marks: 1, markCode: "M" },
              { reasoning: "Benefit: catalyst not consumed → small amounts used, reusable over long periods.", working: "\\text{reusable}", marks: 1, markCode: "M" },
              { reasoning: "Limitation: catalysts can be poisoned/deactivated by impurities → need purification and replacement.", working: "\\text{poisoning}", marks: 1, markCode: "A" },
              { reasoning: "Limitation: some catalysts are expensive (Pt, Rh) or toxic → cost/environmental issues.", working: "\\text{cost}", marks: 1, markCode: "A" },
              { reasoning: "Overall: huge industrial value despite drawbacks — e.g. Haber, Contact, catalytic converters.", working: "\\text{overall}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Catalysts boost rate and save energy; drawbacks are poisoning and cost",
            commonErrors: ["One-sided answer ignoring limitations."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u2-rate-measure",
      title: "Measuring and interpreting rate",
      skill: "Describe methods for measuring rate and interpret rate graphs and energy profiles.",
      lesson: {
        sections: [
          {
            heading: "Measuring rate",
            body: "Rate can be measured by: **gas syringe** (volume of gas vs time), **mass loss** (balance for CO₂ evolution), **colour change** (disappearing cross, colourimeter), or **precipitate/cloudiness** timing. Plot quantity vs time: steepest gradient = fastest rate; curve flattens as reactants deplete.",
          },
          {
            heading: "Rate graphs",
            body: "Volume-time graphs for gas-producing reactions start steep and level off when a reactant runs out. Doubling concentration does not double the final volume (same moles of limiting reactant) but doubles the initial gradient. Initial rate = gradient at t = 0.",
          },
          {
            heading: "Energy profile diagrams",
            body: "Plot **energy vs reaction progress**: reactants at one level, products at another, with a **peak = transition state** at height E_a above reactants. **Exothermic**: products lower than reactants (ΔH < 0); **endothermic**: products higher (ΔH > 0). Catalyst lowers the peak but does not change ΔH.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "Rate = change in quantity / time; gradient of curve" },
          { name: "E_a", statement: "Peak height above reactants on energy profile" },
          { name: "ΔH", statement: "Products - reactants; negative exothermic, positive endothermic" },
        ],
        workedExample: {
          problem: "A gas syringe graph rises steeply then levels at 50 cm³. What does the level-off indicate?",
          solution: "A reactant has been completely used up — the reaction has stopped because the limiting reagent is exhausted.",
        },
      },
      questions: [
        {
          id: "mypc5-u2-rate-measure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a volume-time graph, the fastest rate is shown by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The steepest part of the curve" },
              { id: "b", text: "The highest final volume" },
              { id: "c", text: "The flattest part" },
              { id: "d", text: "The x-axis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rate = gradient", statement: "Steepest gradient = maximum rate." },
            ],
            steps: [
              { reasoning: "Gradient = change/time = rate.", working: "\\text{gradient}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Steepest part",
            commonErrors: ["Confusing final volume with rate."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the peak on an energy profile diagram represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The transition state / activated complex at activation energy height" },
              { id: "b", text: "The products" },
              { id: "c", text: "The catalyst" },
              { id: "d", text: "The temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transition state", statement: "Peak = unstable intermediate at maximum energy." },
            ],
            steps: [
              { reasoning: "Peak marks the highest-energy point = transition state.", working: "\\text{peak}", marks: 1, markCode: "M" },
              { reasoning: "Its height above reactants = activation energy.", working: "E_a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transition state at E_a",
            commonErrors: ["Labelling the peak as products."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An exothermic reaction has ΔH = −80 kJ/mol. Sketch-describe the energy profile and explain how a catalyst changes it.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Products lower than reactants; peak is E_a; catalyst lowers the peak but ΔH stays −80 kJ/mol" },
              { id: "b", text: "Products higher than reactants; catalyst raises the peak" },
              { id: "c", text: "No peak exists; catalyst changes ΔH" },
              { id: "d", text: "Reactants and products at same level" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy profile", statement: "Exothermic: products below reactants; catalyst lowers E_a only." },
            ],
            steps: [
              { reasoning: "ΔH negative → exothermic → products lower.", working: "\\Delta H<0", marks: 1, markCode: "M" },
              { reasoning: "Peak = activation energy above reactants.", working: "E_a", marks: 1, markCode: "M" },
              { reasoning: "Catalyst lowers peak; ΔH unchanged.", working: "\\Delta H\\text{ same}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Products below reactants; catalyst lowers peak only",
            commonErrors: ["Thinking catalysts change ΔH."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A class measures the rate of reaction between sodium thiosulphate and hydrochloric acid by timing the 'disappearing cross'.",
          parts: [
            { label: "a", prompt: "Identify the independent and dependent variables if testing the effect of temperature.", marks: 2 },
            { label: "b", prompt: "Explain what the 'disappearing cross' measures and why it is a valid rate measure.", marks: 2 },
            { label: "c", prompt: "Predict the trend in time-to-disappear as temperature increases and justify with collision theory.", marks: 2 },
            { label: "d", prompt: "Write the word equation for the reaction producing sulphur.", marks: 1 },
            { label: "e", prompt: "State one limitation of this method for measuring rate.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate measurement", statement: "Time for fixed observable change proxies rate; control all but one variable." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: temperature of the mixture; dependent: time for cross to disappear.", working: "\\text{temp/time}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controlled: concentrations/volumes of both solutions, cross distance, observation conditions.", working: "\\text{controlled}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "S precipitate clouds the solution until cross invisible — marks a fixed extent of reaction.", working: "S\\text{ cloud}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shorter time = faster rate; valid proxy for reaction speed.", working: "\\text{valid}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Time decreases as temperature rises: more collisions AND larger fraction exceed E_a.", working: "t\\downarrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collision theory justification — double effect of temperature.", working: "E>E_a", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sodium thiosulphate + hydrochloric acid → sodium chloride + sulphur dioxide + sulphur + water.", working: "\\text{word eq}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Subjective endpoint (when exactly 'disappears'), human reaction time, or temperature drift during measurement.", working: "\\text{limitation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) temp/time + controls (b) S cloud marks fixed extent (c) hotter = faster, double effect (d) thiosulphate+acid→chloride+SO₂+S+water (e) subjective timing",
            commonErrors: ["In (c), saying only collision frequency matters — energy effect also counts."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 for (d); A1 for (e).",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a graph of gas volume against time, the fastest rate of reaction is shown by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The steepest part of the curve" },
              { id: "b", text: "The highest final volume" },
              { id: "c", text: "The flattest part of the curve" },
              { id: "d", text: "The point where the curve meets the time axis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rate = gradient", statement: "Gradient of quantity-time graph = rate." },
            ],
            steps: [
              { reasoning: "Steepest gradient = greatest change per unit time = maximum rate.", working: "\\text{gradient}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Steepest part",
            commonErrors: ["Confusing final volume with rate."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A gas syringe collects 30 cm³ of gas in 15 seconds. What is the rate?",
          response: {
            type: "numeric",
            parts: [{ label: "Rate", answer: 2, unit: "cm³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Rate = quantity / time." },
            ],
            steps: [
              { reasoning: "$30 \\div 15 = 2$ cm³/s.", working: "30\\div15=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\ \\text{cm}^3/\\text{s}$",
            commonErrors: ["Inverting the ratio."],
            examinerNote: "B1 for 2 cm³/s.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A volume-time graph for a gas-producing reaction rises steeply then levels off at a constant volume. What does the level-off indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A reactant has been completely used up, so the reaction has stopped" },
              { id: "b", text: "The rate is at its maximum" },
              { id: "c", text: "The products are dissolving" },
              { id: "d", text: "Temperature has dropped to zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting reactant", statement: "Curve flattens when a reactant is exhausted." },
            ],
            steps: [
              { reasoning: "No further gas produced → reaction stopped.", working: "\\text{stopped}", marks: 1, markCode: "M" },
              { reasoning: "Cause: limiting reactant fully consumed.", working: "\\text{limiting}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A reactant is used up — reaction stops",
            commonErrors: ["Saying the rate is still increasing at the plateau."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student records gas volume at t = 0 s (0 cm³) and t = 20 s (40 cm³). Calculate the average rate over this interval.",
          response: {
            type: "numeric",
            parts: [{ label: "Rate", answer: 2, unit: "cm³/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average rate", statement: "Average rate = total change / total time." },
            ],
            steps: [
              { reasoning: "Rate = $(40-0) \\div (20-0)$.", working: "\\frac{40}{20}", marks: 1, markCode: "M" },
              { reasoning: "Rate = $2$ cm³/s.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{cm}^3/\\text{s}$",
            commonErrors: ["Using only the final volume without the time interval."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "On an energy profile diagram, what does the vertical distance between the reactant level and the peak represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The activation energy" },
              { id: "b", text: "The enthalpy change ΔH" },
              { id: "c", text: "The temperature of the reaction" },
              { id: "d", text: "The rate of reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activation energy", statement: "$E_a$ = energy gap from reactants to transition-state peak." },
            ],
            steps: [
              { reasoning: "Peak height above reactants = minimum energy needed for reaction.", working: "E_a", marks: 1, markCode: "M" },
              { reasoning: "ΔH is measured between reactant and product levels, not the peak.", working: "\\Delta H", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Activation energy $E_a$",
            commonErrors: ["Confusing $E_a$ with $\\Delta H$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "On an energy profile, reactants are at 100 kJ and products at 40 kJ. What is ΔH?",
          response: {
            type: "numeric",
            parts: [{ label: "ΔH", answer: -60, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "ΔH", statement: "$\\Delta H = H_{products} - H_{reactants}$." },
            ],
            steps: [
              { reasoning: "$\\Delta H = 40 - 100$.", working: "40-100", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta H = -60$ kJ — exothermic since products are lower.", working: "-60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta H = -60\\ \\text{kJ}$ (exothermic)",
            commonErrors: ["Reversing the subtraction → +60."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A catalyst is added to a reaction. Describe how the energy profile changes and what stays the same.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The peak (activation energy) is lowered via an alternative pathway; ΔH and the positions of reactants and products are unchanged" },
              { id: "b", text: "The peak is raised and ΔH becomes more negative" },
              { id: "c", text: "Products move below reactants" },
              { id: "d", text: "No change to the profile" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalyst on profile", statement: "Catalyst lowers $E_a$ peak only; $\\Delta H$ unchanged." },
            ],
            steps: [
              { reasoning: "Alternative pathway → lower transition-state peak.", working: "E_a\\downarrow", marks: 1, markCode: "M" },
              { reasoning: "Reactant and product energy levels unchanged → $\\Delta H$ same.", working: "\\Delta H\\text{ same}", marks: 1, markCode: "M" },
              { reasoning: "Faster rate because more collisions exceed the lower $E_a$.", working: "\\text{faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower peak; same $\\Delta H$",
            commonErrors: ["Thinking catalysts change $\\Delta H$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On an energy profile, reactants are at 200 kJ, the peak at 300 kJ, and products at 150 kJ. Calculate the activation energy and ΔH.",
          response: {
            type: "numeric",
            parts: [
              { label: "E_a", answer: 100, unit: "kJ" },
              { label: "ΔH", answer: -50, unit: "kJ" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profile quantities", statement: "$E_a$ = peak − reactants; $\\Delta H$ = products − reactants." },
            ],
            steps: [
              { part: "E_a", reasoning: "$E_a = 300 - 200 = 100$ kJ.", working: "300-200=100", marks: 1, markCode: "M" },
              { part: "ΔH", reasoning: "$\\Delta H = 150 - 200 = -50$ kJ (exothermic).", working: "150-200=-50", marks: 1, markCode: "M" },
              { reasoning: "Both computed from correct reference levels (not peak for $\\Delta H$).", working: "\\text{correct}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E_a = 100\\ \\text{kJ}$; $\\Delta H = -50\\ \\text{kJ}$",
            commonErrors: ["Using peak height for $\\Delta H$ instead of product–reactant difference."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two experiments produce gas-volume graphs: experiment 1 collects 60 cm³ in 30 s; experiment 2 collects 60 cm³ in 15 s. Both start at 0 cm³. Calculate the rate for each and state the factor by which the faster exceeds the slower.",
          response: {
            type: "numeric",
            parts: [
              { label: "Exp 1 rate", answer: 2, unit: "cm³/s" },
              { label: "Exp 2 rate", answer: 4, unit: "cm³/s" },
              { label: "Factor", answer: 2, unit: "times" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate comparison", statement: "Same quantity in less time → faster rate (steeper gradient)." },
            ],
            steps: [
              { part: "Exp 1 rate", reasoning: "Rate 1 = $60 \\div 30 = 2$ cm³/s.", working: "2", marks: 1, markCode: "M" },
              { part: "Exp 2 rate", reasoning: "Rate 2 = $60 \\div 15 = 4$ cm³/s.", working: "4", marks: 1, markCode: "M" },
              { part: "Factor", reasoning: "Experiment 2 is $4 \\div 2 = 2$ times faster — steeper initial gradient.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exp 1 = 2, Exp 2 = 4 cm³/s; Exp 2 is 2× faster",
            commonErrors: ["Equating equal final volumes with equal rates."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two different practical methods for measuring the rate of a reaction between a solid and an acid, and state what is measured in each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate measurement", statement: "Track a measurable change (gas volume, mass loss, colour) vs time." },
            ],
            steps: [
              { reasoning: "Method 1: gas syringe — collect gas volume vs time; rate = gradient.", working: "\\text{gas syringe}", marks: 1, markCode: "M" },
              { reasoning: "Method 2: mass loss on balance — mass of CO₂ lost vs time; rate = gradient.", working: "\\text{mass loss}", marks: 1, markCode: "M" },
              { reasoning: "Alternative accepted: disappearing cross/turbidity timing, colourimeter, pH probe.", working: "\\text{alternatives}", marks: 1, markCode: "A" },
              { reasoning: "Each method measures a proxy for extent of reaction over time.", working: "\\text{proxy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas syringe or mass loss (or colour/turbidity) measured against time",
            commonErrors: ["Describing the method without stating what is measured."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the energy profile diagram for an endothermic reaction, labelling reactants, products, the peak and $E_a$, and state the sign of ΔH. Then state how a catalyst would alter the diagram.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy profile", statement: "Endothermic: products above reactants; $\\Delta H > 0$." },
            ],
            steps: [
              { reasoning: "Reactants drawn at lower energy level; products at higher level.", working: "\\text{products up}", marks: 1, markCode: "M" },
              { reasoning: "Peak (transition state) drawn above reactants; gap = $E_a$.", working: "\\text{peak}", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta H = H_{products} - H_{reactants} > 0$ for endothermic.", working: "\\Delta H>0", marks: 1, markCode: "A" },
              { reasoning: "Catalyst lowers the peak (lower $E_a$) but does not change reactant/product levels or $\\Delta H$.", working: "\\text{catalyst}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Products above reactants, $\\Delta H > 0$; catalyst lowers peak only",
            commonErrors: ["Drawing products below reactants for endothermic."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-rate-measure-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student measures the rate of reaction at three temperatures and concludes 'the reaction is exothermic because it gets faster when heated.' Evaluate this conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate vs thermodynamics", statement: "Rate depends on $E_a$/temperature kinetics, not directly on $\\Delta H$ sign." },
            ],
            steps: [
              { reasoning: "Rate increasing with temperature is expected for BOTH exothermic and endothermic reactions — temperature affects collision energy/frequency.", working: "\\text{kinetics}", marks: 1, markCode: "M" },
              { reasoning: "Exothermic/endothermic classification requires $\\Delta H$ — measured via temperature change of surroundings, calorimetry or energy profile, not rate.", working: "\\Delta H", marks: 1, markCode: "M" },
              { reasoning: "The student's reasoning is flawed: faster rate ≠ exothermic.", working: "\\text{flawed}", marks: 1, markCode: "A" },
              { reasoning: "Correct method: measure temperature rise/fall of surroundings, or construct energy profile from bond energies.", working: "\\text{method}", marks: 1, markCode: "M" },
              { reasoning: "Note: for exothermic reactions higher T actually shifts equilibrium away but rate still increases.", working: "\\text{equilibrium}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: conclusion unsupported; needs enthalpy measurement.", working: "\\text{conclusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rate increase does not prove exothermic — need $\\Delta H$ measurement",
            commonErrors: ["Accepting rate–temperature link as proof of exothermicity."],
            examinerNote: "M1 M1 A1 M1 A1 A1.",
          },
        },
      ],
    },
  ],
};
