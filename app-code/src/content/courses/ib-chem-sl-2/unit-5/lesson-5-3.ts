import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "chemsl-u5-lesson-5-3",
  code: "5-3",
  title: "Reaction Kinetics",
  goal: "I CAN explain reaction rates using collision theory, interpret rate–time graphs, and describe how concentration, temperature, surface area and catalysts affect rate.",
  standards: ["Paper 1", "Paper 2", "Topic 6.1", "Topic 6.2"],
  vocabulary: [
    { term: "Rate of reaction", definition: "The change in concentration of a reactant or product per unit time, often measured as gas volume per unit time or concentration per unit time." },
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy (at least the activation energy) and in the correct orientation." },
    { term: "Activation energy ($E_a$)", definition: "The minimum energy that colliding particles must have for a reaction to occur." },
    { term: "Maxwell–Boltzmann distribution", definition: "The distribution of kinetic energies of gas particles; only the fraction of particles with energy $\\geq E_a$ can react." },
    { term: "Catalyst", definition: "A substance that increases the rate of a reaction by providing an alternative pathway with lower activation energy, without being consumed." },
    { term: "Initial rate", definition: "The rate of reaction at the start, found from the gradient of the tangent to the curve at $t = 0$." },
  ],
  concepts: [
    {
      id: "chemsl-u5-collision",
      title: "Collision theory and factors affecting rate",
      skill: "Explain how concentration, temperature, surface area and catalysts affect the rate of a reaction using collision theory.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "For a reaction to occur, particles must **collide** with (1) energy at least equal to the **activation energy** $E_a$ and (2) the correct **orientation**. The **Maxwell–Boltzmann distribution** describes the spread of particle energies: only the fraction of particles with energy $\\geq E_a$ can react. The rate depends on the **frequency of successful collisions** per unit time.",
          },
          {
            heading: "Factors that increase rate",
            body: "**Concentration/pressure**: more particles per unit volume means more frequent collisions. **Temperature**: particles move faster, collide more often, and — more importantly — a much larger fraction has energy $\\geq E_a$, so the rate increases sharply (roughly doubling per $10$ °C). **Surface area** (for solids): smaller particles expose more surface, so more collisions per unit time. A **catalyst** provides a lower-$E_a$ pathway, increasing the fraction of successful collisions without changing the overall energy change $\\Delta H$.",
          },
          {
            heading: "Catalysts and equilibrium",
            body: "A catalyst speeds up **both** the forward and reverse reactions equally, so it does not change the position of equilibrium or the yield — only the rate at which equilibrium is reached. This is why catalysts are used industrially: they reduce the temperature needed, saving energy, without reducing the equilibrium yield.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "$\\text{rate} = \\dfrac{\\Delta[\\text{product}]}{\\Delta t}$ or volume of gas per unit time" },
          { name: "Successful collisions", statement: "Rate $\\propto$ collision frequency $\\times$ fraction of collisions with $E \\geq E_a$" },
          { name: "Temperature effect", statement: "Rate roughly doubles for each $10$ °C rise" },
        ],
        workedExample: {
          problem: "Explain, using collision theory, why increasing the temperature of a reaction mixture increases the rate of reaction.",
          solution: "At higher temperature particles move faster, so they collide more frequently. More importantly, the Maxwell–Boltzmann distribution shifts to higher energies, so a much larger fraction of collisions have energy $\\geq E_a$. Both effects increase the frequency of successful collisions, raising the rate.",
        },
      },
      questions: [
        {
          id: "chemsl-u5-collision-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to collision theory, what must happen for a chemical reaction to occur when two particles collide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The particles must collide only once" },
              { id: "b", text: "The particles must collide with energy at least equal to the activation energy and in the correct orientation" },
              { id: "c", text: "The particles must collide with any amount of energy" },
              { id: "d", text: "The particles must be at the same temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collision theory", statement: "Reaction requires collisions with $E \\geq E_a$ and correct orientation." },
            ],
            steps: [
              { reasoning: "Both conditions — sufficient energy and correct orientation — are required for a successful collision.", working: "E \\geq E_a \\ \\text{and correct orientation}", marks: 1, markCode: "M" },
              { reasoning: "Most collisions fail because energy or orientation is wrong; that is why not every collision reacts.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Collide with energy $\\geq E_a$ and in the correct orientation",
            commonErrors: ["Thinking any collision causes reaction."],
          },
        },
        {
          id: "chemsl-u5-collision-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Why does increasing the temperature of a reaction mixture increase the rate of reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Particles move faster and collide more often, and a much larger fraction of particles has energy $\\geq E_a$" },
              { id: "b", text: "The activation energy decreases" },
              { id: "c", text: "The reaction becomes exothermic" },
              { id: "d", text: "The particles become larger" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature effect", statement: "Higher T increases collision frequency and the fraction of particles with $E \\geq E_a$; $E_a$ itself is unchanged." },
            ],
            steps: [
              { reasoning: "Higher temperature means faster-moving particles and more frequent collisions.", working: "\\text{faster particles} \\Rightarrow \\text{more collisions}", marks: 1, markCode: "M" },
              { reasoning: "The Maxwell–Boltzmann distribution shifts to higher energies, so a larger fraction exceeds $E_a$ — this is the dominant effect.", working: "\\text{larger fraction with } E \\geq E_a", marks: 1, markCode: "M" },
              { reasoning: "The activation energy is a property of the reaction and does not change with temperature (option b is wrong).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** More frequent collisions and a larger fraction of particles with energy $\\geq E_a$",
            commonErrors: ["Claiming temperature changes $E_a$."],
          },
        },
        {
          id: "chemsl-u5-collision-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A catalyst is added to a reversible reaction at equilibrium. Which statements are correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rate of both forward and reverse reactions increases equally, so the equilibrium position is unchanged but equilibrium is reached faster" },
              { id: "b", text: "The enthalpy change of the reaction becomes more negative" },
              { id: "c", text: "The equilibrium position shifts to the right because the forward rate increases" },
              { id: "d", text: "The catalyst is consumed during the reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catalyst", statement: "Lowers $E_a$ via an alternative pathway for both directions; not consumed; does not change $\\Delta H$ or equilibrium position." },
            ],
            steps: [
              { reasoning: "A catalyst provides a lower-$E_a$ pathway, so more collisions are successful in both directions.", working: "E_a^{\\text{catalysed}} < E_a^{\\text{uncatalysed}}", marks: 1, markCode: "M" },
              { reasoning: "Because forward and reverse rates increase by the same factor, the equilibrium position is unchanged — only the rate of attainment changes.", working: "k_{\\text{f}} \\text{ and } k_{\\text{r}} \\text{ both increase}", marks: 1, markCode: "M" },
              { reasoning: "The catalyst does not alter $\\Delta H$ (option c) and is regenerated, not consumed (option d).", marks: 1, markCode: "R" },
              { reasoning: "Only option (a) is fully correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Both rates increase equally; equilibrium position unchanged, equilibrium reached faster",
            commonErrors: ["Thinking a catalyst shifts equilibrium or increases yield."],
          },
        },
        {
          id: "chemsl-u5-collision-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Hydrogen peroxide decomposes according to $2\\mathrm{H}_2\\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O} + \\mathrm{O}_2$. A student investigates the rate by measuring the volume of oxygen produced over time.",
          parts: [
            { label: "a", prompt: "Define the rate of reaction in this experiment.", marks: 2 },
            { label: "b", prompt: "Explain, using collision theory, why the rate decreases as the reaction proceeds.", marks: 2 },
            { label: "c", prompt: "Explain the effect of adding manganese(IV) oxide on the rate and on the total volume of oxygen eventually produced.", marks: 2 },
            { label: "d", prompt: "Explain the effect of doubling the concentration of hydrogen peroxide on the rate, in terms of collision frequency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rate", statement: "Rate is the change in amount/concentration of a species per unit time." },
              { kind: "principle", name: "Collision theory", statement: "Rate depends on frequency of successful collisions." },
              { kind: "definition", name: "Catalyst", statement: "Lowers $E_a$ for both directions; does not change the overall amount of product." },
            ],
            steps: [
              { part: "a", reasoning: "Rate is the change in volume of oxygen per unit time (equivalently concentration of $\\mathrm{H}_2\\mathrm{O}_2$ per unit time).", working: "\\text{rate} = \\frac{\\Delta V(\\mathrm{O}_2)}{\\Delta t}", marks: 2, markCode: "R" },
              { part: "b", reasoning: "As $\\mathrm{H}_2\\mathrm{O}_2$ is consumed its concentration falls.", working: "[\\mathrm{H}_2\\mathrm{O}_2] \\downarrow", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fewer reactant particles means fewer collisions per unit time, so the rate falls.", working: "\\text{fewer collisions} \\Rightarrow \\text{lower rate}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "MnO$_2$ is a catalyst that lowers the activation energy, so more collisions are successful and the rate increases.", working: "E_a \\downarrow \\Rightarrow \\text{rate} \\uparrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The catalyst does not change the overall reaction, so the final volume of oxygen is unchanged — it is only produced faster.", working: "V_{\\text{final}}\\ \\text{unchanged}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Doubling concentration doubles the number of $\\mathrm{H}_2\\mathrm{O}_2$ particles per unit volume.", working: "n/V \\times 2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Collision frequency roughly doubles, so the rate approximately doubles.", working: "\\text{rate} \\approx 2 \\times", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rate $= \\Delta V(\\mathrm{O}_2)/\\Delta t$ (b) concentration of $\\mathrm{H}_2\\mathrm{O}_2$ falls so collisions become less frequent (c) MnO$_2$ lowers $E_a$, increasing rate but not the final volume of $\\mathrm{O}_2$ (d) doubling concentration doubles collision frequency and roughly doubles the rate",
            commonErrors: ["Claiming the catalyst increases the final volume of oxygen.", "Saying rate is constant throughout the experiment."],
            examinerNote: "Award R1 for a correct definition of rate in (a); M1 for the concentration argument and R1 for the collision conclusion in (b); M1 for the catalyst mechanism and R1 for the unchanged final volume in (c); M1 for the particle-density reasoning and A1 for the doubled rate in (d).",
          },
        },
        {
          id: "chemsl-u5-collision-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A reaction produces $30$ cm$^3$ of gas in $15$ s under constant conditions. Calculate the average rate of gas production.",
          response: {
            type: "numeric",
            parts: [{ label: "Rate", answer: 2.0, unit: "cm3/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\frac{\\Delta V}{\\Delta t}$ for gas-producing reactions." },
            ],
            steps: [
              { reasoning: "Divide volume of gas by time.", working: "\\text{rate} = \\frac{30}{15}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "\\text{rate} = 2.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Dividing time by volume instead of volume by time."],
          },
        },
        {
          id: "chemsl-u5-collision-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why does increasing the concentration of a reactant in solution increase the rate of reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are more particles per unit volume, so collisions occur more frequently" },
              { id: "b", text: "The particles move faster" },
              { id: "c", text: "The activation energy decreases" },
              { id: "d", text: "The reaction becomes exothermic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Rate depends on the frequency of successful collisions; higher concentration means more particles and more collisions per unit time." },
            ],
            steps: [
              { reasoning: "Doubling concentration roughly doubles the number of particles in the same volume.", working: "n/V \\uparrow \\Rightarrow \\text{collision frequency} \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "The activation energy and particle speeds are unchanged — only collision frequency changes (options b–d wrong).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** More particles per unit volume means more frequent collisions",
            commonErrors: ["Claiming concentration changes the activation energy."],
          },
        },
        {
          id: "chemsl-u5-collision-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For a reaction, the initial rate is $2.0$ cm$^3$ s$^{-1}$ when $[\\mathrm{A}] = 0.10$ mol dm$^{-3}$ and $4.0$ cm$^3$ s$^{-1}$ when $[\\mathrm{A}] = 0.20$ mol dm$^{-3}$ (all other conditions constant). Predict the initial rate when $[\\mathrm{A}] = 0.30$ mol dm$^{-3}$ and state the order of reaction with respect to A.",
          response: {
            type: "numeric",
            parts: [
              { label: "Predicted rate", answer: 6.0, unit: "cm3/s" },
              { label: "Order in A", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initial rates method", statement: "Doubling concentration doubles the rate $\\Rightarrow$ first order; the rate is proportional to concentration." },
            ],
            steps: [
              { reasoning: "Doubling $[\\mathrm{A}]$ doubled the rate, so rate $\\propto [\\mathrm{A}]$ — first order in A.", working: "2 \\times [\\mathrm{A}] \\Rightarrow 2 \\times \\text{rate} \\Rightarrow n = 1", marks: 1, markCode: "M" },
              { reasoning: "Tripling the concentration from $0.10$ to $0.30$ triples the rate.", working: "3 \\times 0.10 \\Rightarrow 3 \\times 2.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate both answers.", working: "\\text{rate} = 6.0\\ \\text{cm}^3\\ \\text{s}^{-1},\\ \\text{order} = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.0$ cm$^3$ s$^{-1}$; first order in A",
            commonErrors: ["Assuming second order and predicting $12.0$ cm$^3$ s$^{-1}$."],
          },
        },
        {
          id: "chemsl-u5-collision-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "For the reaction $\\mathrm{A} + \\mathrm{B} \\rightarrow \\text{products}$, the initial rate is proportional to $[\\mathrm{A}][\\mathrm{B}]$. When $[\\mathrm{A}] = [\\mathrm{B}] = 0.10$ mol dm$^{-3}$ the initial rate is $0.50$ cm$^3$ s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Rate at $[\\mathrm{A}] = 0.20$, $[\\mathrm{B}] = 0.10$", answer: 1.0, unit: "cm3/s" },
              { label: "Rate at $[\\mathrm{A}] = 0.20$, $[\\mathrm{B}] = 0.20$", answer: 2.0, unit: "cm3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate proportionality", statement: "If rate $\\propto [\\mathrm{A}][\\mathrm{B}]$, doubling one reactant's concentration doubles the rate; doubling both quadruples it." },
            ],
            steps: [
              { reasoning: "Doubling $[\\mathrm{A}]$ alone doubles the rate.", working: "0.20/0.10 = 2 \\Rightarrow 2 \\times 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the first rate.", working: "\\text{rate} = 1.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "Doubling both concentrations multiplies the rate by $2 \\times 2 = 4$.", working: "4 \\times 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the second rate.", working: "\\text{rate} = 2.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.0$ and $2.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Quadrupling the rate for the first case — only one concentration changed."],
          },
        },
        {
          id: "chemsl-u5-collision-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which change increases the rate of a reaction by increasing the frequency of collisions, without providing a new reaction pathway or changing the particles' energies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding a catalyst" },
              { id: "b", text: "Increasing the concentration of a reactant" },
              { id: "c", text: "Decreasing the surface area of a solid reactant" },
              { id: "d", text: "Increasing the temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factors affecting rate", statement: "Concentration increases collision frequency only; catalysts provide a lower-$E_a$ pathway; temperature raises particle energies; surface area changes exposed area." },
            ],
            steps: [
              { reasoning: "Higher concentration means more particles per unit volume, so collisions are more frequent while $E_a$ and particle energies are unchanged.", working: "[\\mathrm{A}] \\uparrow \\Rightarrow \\text{collision frequency} \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "A catalyst provides a new pathway (b), temperature raises particle energies (c), and decreasing surface area lowers the rate (d).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increasing the concentration of a reactant",
            commonErrors: ["Thinking temperature changes the activation energy itself."],
          },
        },
        {
          id: "chemsl-u5-collision-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The rate of a reaction is proportional to $[\\mathrm{A}]^2$. When $[\\mathrm{A}] = 0.10$ mol dm$^{-3}$ the initial rate is $0.50$ cm$^3$ s$^{-1}$. Calculate the initial rate when $[\\mathrm{A}] = 0.20$ mol dm$^{-3}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Initial rate", answer: 2.0, unit: "cm3/s" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second-order dependence", statement: "Rate $\\propto [\\mathrm{A}]^2$: doubling concentration quadruples the rate." },
            ],
            steps: [
              { reasoning: "Doubling $[\\mathrm{A}]$ multiplies the rate by $2^2 = 4$.", working: "\\left(\\frac{0.20}{0.10}\\right)^2 = 4", marks: 1, markCode: "M" },
              { reasoning: "Multiply the original rate by 4.", working: "4 \\times 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\text{rate} = 2.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Doubling the rate instead of quadrupling it (first-order thinking)."],
          },
        },
        {
          id: "chemsl-u5-collision-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "On a Maxwell–Boltzmann distribution of molecular kinetic energies, what happens to the curve when the temperature is increased?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The curve becomes narrower with all particles at the same energy" },
              { id: "b", text: "The activation energy $E_a$ decreases" },
              { id: "c", text: "The curve shifts to lower energies" },
              { id: "d", text: "The curve shifts to higher energies and a larger fraction of particles has energy $\\geq E_a$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Maxwell–Boltzmann distribution", statement: "Raising temperature broadens and shifts the distribution to higher energies, increasing the fraction of particles with $E \\geq E_a$." },
            ],
            steps: [
              { reasoning: "Higher temperature means higher average kinetic energy, shifting the distribution right.", working: "T \\uparrow \\Rightarrow \\bar{E}_k \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "The area under the curve beyond $E_a$ grows, so more collisions are successful; $E_a$ itself is unchanged (option d wrong).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Curve shifts to higher energies; larger fraction has $E \\geq E_a$",
            commonErrors: ["Thinking the activation energy changes with temperature."],
          },
        },
        {
          id: "chemsl-u5-collision-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Magnesium reacts with hydrochloric acid: $\\mathrm{Mg} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl}_2 + \\mathrm{H}_2$. Powdered magnesium reacts noticeably faster than a ribbon of magnesium of the same mass.",
          parts: [
            { label: "a", prompt: "Explain, using collision theory, why powdered magnesium reacts faster than ribbon magnesium.", marks: 2 },
            { label: "b", prompt: "State two other changes that would increase the rate of this reaction.", marks: 2 },
            { label: "c", prompt: "Explain the effect of adding a catalyst on the rate and on the enthalpy change of the reaction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Smaller particles expose more surface area, so more reactant particles are available for collisions per unit time." },
              { kind: "definition", name: "Catalyst", statement: "Provides a lower-$E_a$ pathway for both directions; not consumed; does not change $\\Delta H$." },
            ],
            steps: [
              { part: "a", reasoning: "Powder has a much larger surface area than ribbon of the same mass.", working: "\\text{surface area} \\uparrow", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More surface means more Mg particles exposed to HCl collisions, increasing the frequency of successful collisions and the rate.", working: "\\text{more collisions} \\Rightarrow \\text{faster rate}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any two of: increase acid concentration, increase temperature, stir the mixture.", working: "[\\mathrm{HCl}] \\uparrow;\\ T \\uparrow;\\ \\text{stirring}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A catalyst lowers the activation energy via an alternative pathway, increasing the fraction of successful collisions.", working: "E_a^{\\text{cat}} < E_a \\Rightarrow \\text{rate} \\uparrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The catalyst does not change the overall energy difference, so $\\Delta H$ is unchanged.", working: "\\Delta H_{\\text{catalysed}} = \\Delta H_{\\text{uncatalysed}}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) powder has larger surface area, so more frequent successful collisions (b) e.g. higher [HCl] and higher temperature (c) catalyst lowers $E_a$ and increases rate but does not change $\\Delta H$",
            commonErrors: ["Claiming the catalyst is consumed or changes $\\Delta H$.", "Saying powder reacts faster because the particles are 'more reactive'."],
            examinerNote: "Award M1 for the surface-area argument and B1 for linking it to collision frequency in (a); M1 for each valid factor in (b); M1 for the lower-$E_a$ mechanism and B1 for unchanged $\\Delta H$ in (c).",
          },
        },
        {
          id: "chemsl-u5-collision-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The concentration of a reactant falls from $0.60$ mol dm$^{-3}$ to $0.20$ mol dm$^{-3}$ in $50$ s. Calculate the average rate of disappearance of the reactant.",
          response: {
            type: "numeric",
            parts: [{ label: "Average rate", answer: 0.008, unit: "mol dm-3 s-1" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average rate", statement: "$\\text{rate} = \\frac{\\Delta[\\text{reactant}]}{\\Delta t}$ for disappearance." },
            ],
            steps: [
              { reasoning: "Find the concentration change.", working: "\\Delta[\\mathrm{A}] = 0.60 - 0.20 = 0.40\\ \\text{mol dm}^{-3}", marks: 1, markCode: "M" },
              { reasoning: "Divide by time.", working: "\\text{rate} = \\frac{0.40}{50} = 0.008\\ \\text{mol dm}^{-3}\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.008$ mol dm$^{-3}$ s$^{-1}$",
            commonErrors: ["Dividing $50$ by $0.40$ instead of $0.40$ by $50$."],
          },
        },
        {
          id: "chemsl-u5-collision-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For the reaction between a solid and an acid, the rate is proportional to the surface area of the solid. A sample of solid with surface area $A$ gives an initial rate of $3.0$ cm$^3$ s$^{-1}$. What initial rate would be expected for the same mass of solid with surface area $4A$?",
          response: {
            type: "numeric",
            parts: [{ label: "Initial rate", answer: 12.0, unit: "cm3/s" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Rate is proportional to surface area of a solid reactant — more exposed particles means more collisions." },
            ],
            steps: [
              { reasoning: "Set up the proportionality.", working: "\\text{rate} \\propto \\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Quadrupling the surface area quadruples the rate.", working: "4 \\times 3.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\text{rate} = 12.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Assuming the rate depends on mass rather than surface area."],
          },
        },
        {
          id: "chemsl-u5-collision-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Sodium thiosulfate solution reacts with hydrochloric acid to produce a precipitate of sulfur: $\\mathrm{Na_2S_2O_3} + 2\\mathrm{HCl} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{SO_2} + \\mathrm{S} + \\mathrm{H_2O}$. A student measures the rate by timing how long it takes for a cross beneath the flask to become hidden.",
          parts: [
            { label: "a", prompt: "Define the rate of this reaction in terms of what the student measures.", marks: 2 },
            { label: "b", prompt: "Explain, using collision theory, why increasing the temperature decreases the time taken for the cross to disappear.", marks: 2 },
            { label: "c", prompt: "Explain why using a more concentrated thiosulfate solution decreases the time taken.", marks: 2 },
            { label: "d", prompt: "Suggest one reason why repeating the experiment might give slightly different times.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rate", statement: "Rate is the change in concentration (or amount) of a species per unit time; here it is inversely related to the time for the precipitate to hide the cross." },
              { kind: "principle", name: "Collision theory", statement: "Higher temperature increases collision frequency and the fraction of particles with $E \\geq E_a$." },
            ],
            steps: [
              { part: "a", reasoning: "Rate can be expressed as $1/t$ — the shorter the time for the cross to disappear, the faster the rate.", working: "\\text{rate} \\propto \\frac{1}{t}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Higher temperature makes particles move faster, increasing collision frequency.", working: "T \\uparrow \\Rightarrow \\text{collisions} \\uparrow", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The energy distribution shifts so a larger fraction of collisions has $E \\geq E_a$, so more collisions are successful and the reaction is faster.", working: "\\text{larger fraction} \\geq E_a \\Rightarrow \\text{rate} \\uparrow", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Higher concentration means more thiosulfate particles per unit volume.", working: "[\\mathrm{S_2O_3^{2-}}] \\uparrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collisions occur more frequently, so precipitate forms faster and the cross disappears sooner.", working: "\\text{frequency} \\uparrow \\Rightarrow t \\downarrow", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any valid reason: human reaction time judging when the cross disappears, temperature fluctuations, or impurities in reagents.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) rate $\\propto 1/t$ (b) higher T increases collision frequency and the fraction with $E \\geq E_a$ (c) higher concentration increases collision frequency (d) e.g. reaction time in judging the endpoint",
            commonErrors: ["Saying the rate equals $t$ rather than being inversely related to it.", "Claiming concentration changes the activation energy."],
            examinerNote: "Award M1 for the $1/t$ relationship and A1 for correct units/interpretation in (a); M1 for collision frequency and B1 for the energy-distribution effect in (b); M1 for particle density and B1 for the faster-precipitate link in (c); B1 for each valid reason up to 2 marks in (d).",
          },
        },
        {
          id: "chemsl-u5-collision-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For a reaction, the rate approximately doubles for every $10$ °C rise in temperature. The rate at $20$ °C is $1.2$ cm$^3$ s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Rate at $50$ °C", answer: 9.6, unit: "cm3/s", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature effect", statement: "Rate roughly doubles for each $10$ °C rise — a rule of thumb for many reactions." },
            ],
            steps: [
              { reasoning: "The temperature rise is $50 - 20 = 30$ °C, i.e. $3$ intervals of $10$ °C.", working: "\\frac{30}{10} = 3", marks: 1, markCode: "M" },
              { reasoning: "Apply the doubling rule three times.", working: "1.2 \\times 2^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1.2 \\times 8 = 9.6\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "State that this is an approximation since the rule is only a guideline.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$9.6$ cm$^3$ s$^{-1}$ (approximate)",
            commonErrors: ["Multiplying by $2^{35}$ instead of $2^{3.5}$.", "Treating the rule as exact rather than approximate."],
          },
        },
      ],
    },
    {
      id: "chemsl-u5-rategraphs",
      title: "Rate graphs and initial rates",
      skill: "Interpret concentration–time and volume–time graphs, find rates from gradients, and use initial rates to deduce reaction orders qualitatively.",
      lesson: {
        sections: [
          {
            heading: "Reading rate graphs",
            body: "For a reaction producing a gas, a graph of gas volume against time rises steeply at first and levels off as the reactant is used up. The **rate at any instant** is the gradient of the tangent to the curve at that point; the **average rate** over an interval is $\\frac{\\Delta V}{\\Delta t}$. Because the reactant concentration falls, the curve becomes less steep with time and the rate decreases. A concentration–time graph for a reactant falls steeply then levels off at zero or at equilibrium.",
          },
          {
            heading: "Initial rate",
            body: "The **initial rate** is the gradient of the tangent at $t = 0$ — the steepest part of the curve, before any reactant is significantly depleted. Measuring initial rates at different starting concentrations is the basis of the **initial rates method**: if doubling $[\\mathrm{A}]$ doubles the initial rate, the reaction is first order in A; if it quadruples the rate, second order; if there is no change, zero order.",
          },
          {
            heading: "Interpreting the curve",
            body: "The curve levels off when the reaction is complete (all limiting reactant consumed) or when equilibrium is reached (rates equal). The total volume of gas at the plateau equals the amount of product formed — independent of rate, which is why a catalyst does not change the final volume. Sketch features to look for: steep initial gradient (fast initial rate), decreasing gradient (rate falling), horizontal asymptote (reaction complete or equilibrium).",
          },
        ],
        keyFormulas: [
          { name: "Instantaneous rate", statement: "Gradient of the tangent to the curve at a point" },
          { name: "Average rate", statement: "$\\text{rate} = \\dfrac{\\Delta V}{\\Delta t}$ or $\\dfrac{\\Delta[\\text{species}]}{\\Delta t}$" },
          { name: "Initial rate orders", statement: "Rate $\\propto [\\mathrm{A}]^n$; $n=1$ first order, $n=2$ second order, $n=0$ zero order" },
        ],
        workedExample: {
          problem: "In an experiment, $50$ cm$^3$ of gas is produced in the first $20$ s and the reaction is complete after $100$ s. Calculate the average rate over the first $20$ s and explain why the instantaneous rate at $t = 50$ s is lower.",
          solution: "Average rate $= \\frac{50}{20} = 2.5$ cm$^3$ s$^{-1}$. At $t = 50$ s the reactant concentration is lower than at the start, so collisions are less frequent and the gradient of the curve — the instantaneous rate — is smaller.",
        },
      },
      questions: [
        {
          id: "chemsl-u5-rategraphs-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an experiment, $50$ cm$^3$ of gas is collected in the first $20$ s. What is the average rate of gas production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.40$ cm$^3$ s$^{-1}$" },
              { id: "b", text: "$2.5$ cm$^3$ s$^{-1}$" },
              { id: "c", text: "$5.0$ cm$^3$ s$^{-1}$" },
              { id: "d", text: "$250$ cm$^3$ s$^{-1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average rate", statement: "$\\text{rate} = \\frac{\\Delta V}{\\Delta t}$." },
            ],
            steps: [
              { reasoning: "Divide volume by time.", working: "\\text{rate} = \\frac{50}{20}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "= 2.5\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2.5$ cm$^3$ s$^{-1}$",
            commonErrors: ["Dividing time by volume ($0.40$) instead of volume by time."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A graph of gas volume produced against time for a reaction between a solid and a solution rises steeply at first and then levels off. Which statement best describes the shape of the curve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The curve is a straight line because the rate is constant" },
              { id: "b", text: "The curve decreases because the gas is used up" },
              { id: "c", text: "The gradient decreases with time because the reactant concentration falls, until the reaction is complete and the curve becomes horizontal" },
              { id: "d", text: "The gradient increases with time as more product forms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and concentration", statement: "Rate falls as reactant is consumed; the curve levels off when the reaction is complete." },
            ],
            steps: [
              { reasoning: "At the start the reactant concentration is highest, so the initial gradient is steepest.", working: "\\text{max rate at } t = 0", marks: 1, markCode: "M" },
              { reasoning: "As reactant is depleted, collisions become less frequent and the gradient decreases.", working: "\\text{gradient} \\downarrow \\text{ with time}", marks: 1, markCode: "M" },
              { reasoning: "When the limiting reactant is used up the rate becomes zero and the curve is horizontal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Gradient decreases as reactant concentration falls; curve becomes horizontal when the reaction is complete",
            commonErrors: ["Thinking the rate stays constant throughout."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In an investigation of the reaction between marble chips and hydrochloric acid, the initial rate is measured for different experiments. Experiment A uses chips of one size and gives an initial rate of $2.0$ cm$^3$ s$^{-1}$. Experiment B uses chips with twice the total surface area and gives an initial rate of $4.0$ cm$^3$ s$^{-1}$. What can be deduced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rate is independent of surface area" },
              { id: "b", text: "The rate is proportional to the surface area of the solid — doubling the surface area doubles the rate" },
              { id: "c", text: "The reaction is second order in the acid" },
              { id: "d", text: "The chips in experiment B are a catalyst" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Greater surface area exposes more reactant particles to collisions, increasing the rate proportionally." },
            ],
            steps: [
              { reasoning: "The only variable changed between A and B is the surface area of the marble chips.", working: "\\text{only surface area changed}", marks: 1, markCode: "M" },
              { reasoning: "Doubling surface area doubled the initial rate, showing a direct proportionality.", working: "2 \\times \\text{area} \\Rightarrow 2 \\times \\text{rate}", marks: 1, markCode: "M" },
              { reasoning: "No conclusion about the order in acid can be drawn because acid concentration was not varied (option b).", marks: 1, markCode: "R" },
              { reasoning: "Smaller chips are not a catalyst — they simply provide more surface (option d is wrong).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rate is proportional to surface area of the solid",
            commonErrors: ["Confusing surface area with a catalyst."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "For the reaction between marble chips and hydrochloric acid, $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$, a student records the volume of $\\mathrm{CO}_2$ produced every $10$ s. The resulting curve rises steeply at first, then levels off.",
          parts: [
            { label: "a", prompt: "Explain why the curve levels off.", marks: 2 },
            { label: "b", prompt: "Define the initial rate and describe how it is obtained from the graph.", marks: 2 },
            { label: "c", prompt: "In a second experiment the temperature is increased by $10$ °C and the initial rate approximately doubles. Explain this using collision theory.", marks: 2 },
            { label: "d", prompt: "State what the total volume of gas at the plateau represents and whether a catalyst would change it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and depletion", statement: "Rate falls as reactant is consumed; the curve levels off when a reactant is used up or equilibrium is reached." },
              { kind: "principle", name: "Temperature effect", statement: "Higher T increases collision frequency and the fraction of particles with $E \\geq E_a$." },
              { kind: "definition", name: "Catalyst", statement: "Changes rate, not the amount of product." },
            ],
            steps: [
              { part: "a", reasoning: "Either the marble chips or the acid is completely consumed.", working: "\\text{limiting reactant used up}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "With no reactant left there are no collisions, so the rate becomes zero and the curve is horizontal.", working: "\\text{rate} = 0 \\Rightarrow \\text{horizontal}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Initial rate is the rate at $t = 0$, the maximum rate before reactant is depleted.", working: "\\text{rate at } t = 0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It is found from the gradient of the tangent drawn to the curve at the origin.", working: "\\text{gradient of tangent at } t = 0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher temperature makes particles move faster, increasing collision frequency.", working: "\\text{faster particles} \\Rightarrow \\text{more collisions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The energy distribution shifts so a larger fraction of collisions has $E \\geq E_a$, roughly doubling the rate for a $10$ °C rise.", working: "\\text{larger fraction} \\geq E_a \\Rightarrow \\text{rate} \\approx 2 \\times", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The plateau volume equals the total amount of $\\mathrm{CO}_2$ produced, fixed by the limiting reactant.", working: "V_{\\text{plateau}} = V_{\\text{total product}}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A catalyst speeds the reaction but does not change the amount of product, so the plateau volume is unchanged.", working: "\\text{catalyst: same } V_{\\text{final}}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) a reactant is used up so the rate falls to zero (b) initial rate is the gradient of the tangent at $t = 0$ (c) higher T increases collision frequency and the fraction with $E \\geq E_a$ (d) plateau volume = total $\\mathrm{CO}_2$; catalyst does not change it",
            commonErrors: ["Confusing average rate over the whole experiment with initial rate.", "Claiming the plateau volume changes with rate or catalyst."],
            examinerNote: "Award M1 for identifying the limiting reactant and R1 for the zero-rate explanation in (a); M1 for the definition and A1 for the tangent method in (b); M1 for collision frequency and A1 for the energy-distribution effect in (c); M1 for the plateau meaning and R1 for the catalyst point in (d).",
          },
        },
        {
          id: "chemsl-u5-rategraphs-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an experiment, $60$ cm$^3$ of gas is produced in the first $30$ s. What is the average rate of gas production?",
          response: {
            type: "numeric",
            parts: [{ label: "Average rate", answer: 2.0, unit: "cm3/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average rate", statement: "$\\text{rate} = \\frac{\\Delta V}{\\Delta t}$." },
            ],
            steps: [
              { reasoning: "Divide the volume produced by the time taken.", working: "\\text{rate} = \\frac{60}{30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "\\text{rate} = 2.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Inverting the ratio to give $0.50$ cm$^3$ s$^{-1}$."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "On a graph of gas volume produced against time, what does the gradient of the curve at a particular point represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The instantaneous rate of reaction at that time" },
              { id: "b", text: "The activation energy of the reaction" },
              { id: "c", text: "The total volume of gas produced" },
              { id: "d", text: "The enthalpy change of the reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate graphs", statement: "The gradient of a volume–time curve gives the instantaneous rate; the gradient of the tangent at $t = 0$ gives the initial rate." },
            ],
            steps: [
              { reasoning: "Rate is change in volume per unit time — exactly what a gradient measures.", working: "\\text{rate} = \\frac{dV}{dt} = \\text{gradient}", marks: 1, markCode: "M" },
              { reasoning: "The total volume is the value on the y-axis, not the gradient; $E_a$ and $\\Delta H$ cannot be read from this graph.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The instantaneous rate of reaction at that time",
            commonErrors: ["Confusing the gradient with the value of the curve."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A volume–time graph for a gas-producing reaction shows the tangent at $t = 0$ has a gradient of $6.0$ cm$^3$ s$^{-1}$, and a total of $90$ cm$^3$ of gas is produced by $t = 60$ s. State the initial rate and the average rate over the whole experiment.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial rate", answer: 6.0, unit: "cm3/s" },
              { label: "Average rate", answer: 1.5, unit: "cm3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initial vs average rate", statement: "Initial rate = gradient of tangent at $t = 0$; average rate = total change / total time." },
            ],
            steps: [
              { reasoning: "The initial rate is read directly from the tangent gradient at the origin.", working: "\\text{initial rate} = 6.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Average rate uses total volume over total time.", working: "\\text{average rate} = \\frac{90}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — the average is lower because the rate falls as reactant is consumed.", working: "\\text{average rate} = 1.5\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initial rate $6.0$ cm$^3$ s$^{-1}$; average rate $1.5$ cm$^3$ s$^{-1}$",
            commonErrors: ["Using the initial rate as the average rate."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "For the reaction $\\mathrm{A} + \\mathrm{B} + \\mathrm{C} \\rightarrow \\text{products}$, initial rates are measured: doubling $[\\mathrm{A}]$ doubles the rate; doubling $[\\mathrm{B}]$ quadruples the rate; doubling $[\\mathrm{C}]$ has no effect on the rate. Deduce the order of reaction with respect to each reactant.",
          response: {
            type: "numeric",
            parts: [
              { label: "Order in A", answer: 1 },
              { label: "Order in B", answer: 2 },
              { label: "Order in C", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initial rates method", statement: "Rate $\\propto [\\mathrm{A}]^n$: doubling concentration doubles rate $\\Rightarrow n = 1$; quadruples $\\Rightarrow n = 2$; no change $\\Rightarrow n = 0$." },
            ],
            steps: [
              { reasoning: "Doubling $[\\mathrm{A}]$ doubles the rate — first order in A.", working: "2 \\times [\\mathrm{A}] \\Rightarrow 2 \\times \\text{rate} \\Rightarrow n_A = 1", marks: 1, markCode: "M" },
              { reasoning: "Doubling $[\\mathrm{B}]$ quadruples the rate — second order in B.", working: "2 \\times [\\mathrm{B}] \\Rightarrow 4 \\times \\text{rate} \\Rightarrow n_B = 2", marks: 1, markCode: "M" },
              { reasoning: "No change when $[\\mathrm{C}]$ is doubled — zero order in C (C does not appear in the rate equation).", working: "2 \\times [\\mathrm{C}] \\Rightarrow \\text{same rate} \\Rightarrow n_C = 0", marks: 1, markCode: "M" },
              { reasoning: "State all three orders clearly.", working: "\\text{orders}:\\ 1,\\ 2,\\ 0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First order in A, second order in B, zero order in C",
            commonErrors: ["Assigning first order to B because 'doubling always doubles' — it quadrupled.", "Giving order 1 for C because it is a reactant."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A graph of reactant concentration against time for a reaction that goes to completion falls steeply and then levels off at zero. Why does the curve level off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reaction reaches equilibrium with equal forward and reverse rates" },
              { id: "b", text: "The product begins to inhibit the reaction" },
              { id: "c", text: "The temperature of the mixture falls to room temperature" },
              { id: "d", text: "The reactant is completely consumed, so the rate falls to zero" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and depletion", statement: "A concentration–time curve levels off when the reactant is used up (rate = 0) or when equilibrium is reached." },
            ],
            steps: [
              { reasoning: "Leveling off at zero concentration means all the reactant has been consumed.", working: "[\\mathrm{A}] \\rightarrow 0 \\Rightarrow \\text{rate} \\rightarrow 0", marks: 1, markCode: "M" },
              { reasoning: "For a complete reaction there is no equilibrium; the curve is horizontal because no reactant remains.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The reactant is completely consumed, so the rate falls to zero",
            commonErrors: ["Confusing completion with equilibrium — equilibrium would level off above zero."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "On a volume–time graph, $40$ cm$^3$ of gas has been produced at $t = 10$ s and $100$ cm$^3$ at $t = 30$ s. Calculate the average rate of gas production between $t = 10$ s and $t = 30$ s.",
          response: {
            type: "numeric",
            parts: [{ label: "Average rate", answer: 3.0, unit: "cm3/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average rate", statement: "$\\text{rate} = \\frac{\\Delta V}{\\Delta t}$ over the chosen interval." },
            ],
            steps: [
              { reasoning: "Find the change in volume over the interval.", working: "\\Delta V = 100 - 40 = 60\\ \\text{cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Find the time interval.", working: "\\Delta t = 30 - 10 = 20\\ \\text{s}", marks: 1, markCode: "M" },
              { reasoning: "Divide and evaluate.", working: "\\text{rate} = \\frac{60}{20} = 3.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Using the total volume $100$ cm$^3$ instead of the change $60$ cm$^3$."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "When using the initial rates method to determine the order of a reaction, why is the initial rate measured rather than the rate at a later time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The initial rate equals the activation energy" },
              { id: "b", text: "Later measurements are impossible to make" },
              { id: "c", text: "At the start the reactant concentrations are known and have not changed significantly, so the rate corresponds to the stated concentrations" },
              { id: "d", text: "The rate is always fastest at the end of the reaction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initial rates method", statement: "Orders are deduced by comparing rates at known, fixed starting concentrations — only the initial rate corresponds exactly to those concentrations." },
            ],
            steps: [
              { reasoning: "As the reaction proceeds, reactant concentrations fall, so a later rate does not match the stated starting concentrations.", working: "t > 0 \\Rightarrow [\\mathrm{A}] < [\\mathrm{A}]_0 \\Rightarrow \\text{rate not comparable}", marks: 1, markCode: "M" },
              { reasoning: "The initial rate is measured before significant depletion, so it can be linked directly to the initial concentrations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Initial concentrations are known and unchanged, so the rate corresponds to the stated concentrations",
            commonErrors: ["Thinking the rate is constant throughout the reaction."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student produces volume–time graphs for the reaction between hydrochloric acid and marble chips. Two experiments are run: experiment A uses large chips, experiment B uses the same mass of chips crushed to a powder. Both graphs rise steeply then level off at the same final volume.",
          parts: [
            { label: "a", prompt: "Explain why experiment B reaches its maximum volume sooner than experiment A.", marks: 2 },
            { label: "b", prompt: "Describe how the initial rate is obtained from each graph.", marks: 2 },
            { label: "c", prompt: "State what the identical final volume on both graphs shows.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Powder has greater surface area, so collisions are more frequent and the reaction is faster." },
              { kind: "principle", name: "Rate vs yield", statement: "Rate affects how quickly the curve rises; the final volume depends only on the amount of limiting reactant." },
            ],
            steps: [
              { part: "a", reasoning: "Powder exposes more surface area of CaCO$_3$ to the acid.", working: "\\text{surface area}_{\\mathrm{B}} > \\text{surface area}_{\\mathrm{A}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More frequent successful collisions give a faster rate, so the same total volume is reached sooner.", working: "\\text{rate}_{\\mathrm{B}} > \\text{rate}_{\\mathrm{A}} \\Rightarrow t_{\\mathrm{B}} < t_{\\mathrm{A}}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Draw the tangent to the curve at $t = 0$; its gradient is the initial rate.", working: "\\text{initial rate} = \\text{gradient of tangent at } t = 0", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The plateau volume equals the total amount of CO$_2$ produced, fixed by the limiting reactant — surface area affects rate, not yield.", working: "V_{\\text{final}} = f(n_{\\text{limiting}})\\ \\text{only}", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) powder has more surface area so reacts faster (b) gradient of tangent at $t = 0$ (c) same total CO$_2$ — surface area changes rate, not the amount of product",
            commonErrors: ["Claiming the powder produces more gas.", "Confusing the gradient at a point with the total volume."],
            examinerNote: "Award M1 for the surface-area reasoning and B1 for the faster-rate conclusion in (a); M1 for the tangent description and A1 for identifying it as the initial rate in (b); B1 for the plateau meaning and B1 for the rate-vs-yield distinction in (c).",
          },
        },
        {
          id: "chemsl-u5-rategraphs-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The concentration of a product rises from $0$ to $0.30$ mol dm$^{-3}$ in $60$ s. Calculate the average rate of formation of the product.",
          response: {
            type: "numeric",
            parts: [{ label: "Average rate", answer: 0.005, unit: "mol dm-3 s-1" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average rate", statement: "$\\text{rate} = \\frac{\\Delta[\\text{product}]}{\\Delta t}$." },
            ],
            steps: [
              { reasoning: "Divide the concentration change by the time.", working: "\\text{rate} = \\frac{0.30}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "\\text{rate} = 0.005\\ \\text{mol dm}^{-3}\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.005$ mol dm$^{-3}$ s$^{-1}$",
            commonErrors: ["Dividing $60$ by $0.30$ instead of $0.30$ by $60$."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For a reaction, doubling $[\\mathrm{A}]$ doubles the rate and doubling $[\\mathrm{B}]$ quadruples the rate. The initial rate is $2.0$ cm$^3$ s$^{-1}$ when $[\\mathrm{A}] = [\\mathrm{B}] = 0.10$ mol dm$^{-3}$. Calculate the initial rate when $[\\mathrm{A}] = 0.20$ mol dm$^{-3}$ and $[\\mathrm{B}] = 0.20$ mol dm$^{-3}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Initial rate", answer: 16.0, unit: "cm3/s" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initial rates method", statement: "First order in A and second order in B: rate $\\propto [\\mathrm{A}][\\mathrm{B}]^2$." },
            ],
            steps: [
              { reasoning: "Doubling $[\\mathrm{A}]$ multiplies rate by 2; doubling $[\\mathrm{B}]$ multiplies it by $2^2 = 4$.", working: "2 \\times [\\mathrm{A}] \\Rightarrow 2 \\times;\\ 2 \\times [\\mathrm{B}] \\Rightarrow 4 \\times", marks: 1, markCode: "M" },
              { reasoning: "Combined factor is $2 \\times 4 = 8$.", working: "8 \\times 2.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\text{rate} = 16.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Quadrupling for both changes (giving $32.0$) — A is only first order."],
          },
        },
        {
          id: "chemsl-u5-rategraphs-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student measures the volume of hydrogen produced every $10$ s for the reaction between zinc granules and dilute sulfuric acid. The volume increments per $10$ s get smaller as time goes on, and the curve eventually levels off.",
          parts: [
            { label: "a", prompt: "Explain why the volume produced in each successive $10$ s interval decreases.", marks: 2 },
            { label: "b", prompt: "Distinguish between the average rate and the instantaneous rate on this graph.", marks: 2 },
            { label: "c", prompt: "Describe how the initial rate could be found from the graph.", marks: 2 },
            { label: "d", prompt: "State what would happen to the shape of the curve if the temperature were increased.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and depletion", statement: "Rate falls as reactant concentration falls; the curve steepens at higher temperature." },
              { kind: "principle", name: "Rate graphs", statement: "Instantaneous rate = tangent gradient; initial rate = gradient at $t = 0$." },
            ],
            steps: [
              { part: "a", reasoning: "Acid concentration (or zinc surface) decreases as the reaction proceeds.", working: "[\\mathrm{H^+}] \\downarrow", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fewer particles means less frequent collisions, so each $10$ s interval produces less gas.", working: "\\text{collisions} \\downarrow \\Rightarrow \\text{volume increment} \\downarrow", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Average rate is total volume divided by total time (or over an interval); instantaneous rate is the gradient of the tangent at a point.", working: "\\text{avg} = \\frac{\\Delta V}{\\Delta t};\\ \\text{inst} = \\frac{dV}{dt}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Draw a tangent to the curve at the origin and measure its gradient.", working: "\\text{gradient of tangent at } t = 0", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Higher temperature increases collision frequency and the fraction of particles with $E \\geq E_a$.", working: "T \\uparrow \\Rightarrow \\text{rate} \\uparrow", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The curve would rise more steeply initially and reach the plateau sooner, though the final volume is unchanged.", working: "\\text{steeper start},\\ \\text{same plateau}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) reactant concentration falls so collisions become less frequent (b) average = $\\Delta V/\\Delta t$; instantaneous = tangent gradient (c) gradient of tangent at $t = 0$ (d) steeper initial rise, same plateau volume",
            commonErrors: ["Confusing average and instantaneous rates.", "Claiming the final volume changes with temperature."],
            examinerNote: "Award M1 for the depletion argument and B1 for the collision conclusion in (a); M1 for each correct rate definition in (b); M1 for the tangent method in (c); M1 for the faster initial rate and B1 for the unchanged plateau in (d).",
          },
        },
        {
          id: "chemsl-u5-rategraphs-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For a gas-producing reaction, the tangent to the volume–time curve at $t = 0$ has a gradient of $5.0$ cm$^3$ s$^{-1}$, and $60$ cm$^3$ of gas has been produced by $t = 20$ s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial rate", answer: 5.0, unit: "cm3/s" },
              { label: "Average rate over first 20 s", answer: 3.0, unit: "cm3/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initial vs average rate", statement: "Initial rate is the tangent gradient at $t = 0$; average rate is $\\Delta V/\\Delta t$." },
            ],
            steps: [
              { reasoning: "Read the initial rate directly from the tangent gradient.", working: "\\text{initial rate} = 5.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Calculate the average rate over the first $20$ s.", working: "\\text{average rate} = \\frac{60}{20}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate both.", working: "\\text{average rate} = 3.0\\ \\text{cm}^3\\ \\text{s}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "The average is lower than the initial rate because the rate decreases as reactant is consumed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Initial rate $5.0$ cm$^3$ s$^{-1}$; average rate $3.0$ cm$^3$ s$^{-1}$",
            commonErrors: ["Reporting the initial rate as the average rate."],
          },
        },
      ],
    },
  ],
};
