import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "chem11-u2-lesson-2-1",
  code: "2-1",
  title: "Rates of Reaction",
  goal: "I CAN explain how collision theory predicts reaction rates, identify the factors that change rate, and design fair tests to measure how fast reactions proceed.",
  standards: ["HS-PS1-5", "SEP: Planning and Carrying Out Investigations"],
  vocabulary: [
    { term: "Reaction rate", definition: "How quickly reactants are consumed or products formed, usually expressed as change in concentration per unit time." },
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy (activation energy) and correct orientation." },
    { term: "Activation energy", definition: "The minimum energy particles must have in a collision for a reaction to occur; often supplied by heat." },
    { term: "Catalyst", definition: "A substance that speeds up a reaction by providing an alternative pathway with lower activation energy; it is not consumed." },
    { term: "Rate law", definition: "An equation relating rate to reactant concentrations, e.g. $\\text{rate} = k[A]^m[B]^n$; determined experimentally." },
    { term: "Rate constant", definition: "The constant $k$ in a rate law; its value depends on temperature and the reaction." },
    { term: "Order of reaction", definition: "The exponent of a concentration term in the rate law, found by experiment." },
  ],
  concepts: [
    {
      id: "chem11-u2-collision-theory",
      title: "Collision theory and factors affecting rate",
      skill: "Use collision theory to predict how concentration, temperature, surface area, catalysts and state of matter affect reaction rate.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "For a reaction to occur, reactant particles must collide. But not every collision works: the particles must have at least the **activation energy** $E_a$ and collide with the correct orientation.\n\nThe **rate** of a reaction is the number of successful collisions per unit time. Anything that increases the number of effective collisions speeds up the reaction.",
          },
          {
            heading: "Five factors that change rate",
            body: "- **Concentration/pressure**: more particles in the same volume means more collisions per second. Doubling concentration roughly doubles rate for many reactions.\n- **Temperature**: particles move faster and collide more often, and a much larger fraction of collisions exceed $E_a$. A 10°C rise can roughly double the rate.\n- **Surface area**: for solids, breaking a solid into smaller pieces exposes more surface to collide. Powder reacts faster than a lump.\n- **State of matter**: gases and dissolved substances collide more freely than solids.\n- **Catalysts**: provide an alternative pathway with lower $E_a$, so more collisions succeed. Enzymes are biological catalysts.",
          },
          {
            heading: "Measuring rate",
            body: "Rate can be measured by tracking a reactant disappearing or a product appearing: mass of gas produced over time, color change, precipitate formation, pH change or pressure change. A steeper graph of product vs time means a faster rate. At the start (t = 0) the rate is fastest because concentrations are highest; it slows as reactants are used up.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "$\\text{rate} = \\frac{\\text{change in amount}}{\\text{change in time}}$" },
          { name: "Collision requirements", statement: "Collisions must have energy $\\ge E_a$ and correct orientation" },
        ],
        workedExample: {
          problem: "A reaction between marble chips and hydrochloric acid produces $\\text{CO}_2$ gas. Explain three ways to make the reaction faster without changing the temperature.",
          solution: "1. Use smaller marble chips or powder to increase surface area. 2. Use a higher concentration of HCl so more $\\text{H}^+$ ions collide with the marble per second. 3. Stir the mixture so fresh acid reaches the marble surface. A catalyst is not available here, and temperature must stay fixed.",
        },
      },
      questions: [
        {
          id: "chem11-u2-collision-theory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change would NOT increase the rate of a reaction between two solutions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the concentration of one reactant" },
              { id: "b", text: "Raising the temperature" },
              { id: "c", text: "Adding a catalyst" },
              { id: "d", text: "Diluting the solution with water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Concentration and rate", statement: "More particles per volume means more collisions per second; diluting lowers concentration and rate." }],
            steps: [{ reasoning: "Diluting reduces the number of reactant particles per unit volume, so collisions become less frequent and the rate drops.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Diluting the solution",
            commonErrors: ["Thinking more water means more collisions; it actually lowers concentration."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "chem11-u2-collision-theory-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain, using collision theory, why powdered magnesium reacts with hydrochloric acid much faster than a single ribbon of magnesium of the same mass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Breaking a solid into smaller pieces exposes more surface atoms to collide with reactants." },
              { kind: "principle", name: "Collision frequency", statement: "More exposed surface means more effective collisions per second." },
            ],
            steps: [
              { reasoning: "The same mass of Mg as powder has far more total surface area than one ribbon.", marks: 1, markCode: "B" },
              { reasoning: "More surface area means more Mg atoms are in contact with H+ ions at any moment.", marks: 1, markCode: "B" },
              { reasoning: "Therefore the number of successful collisions per second is much higher and the reaction is faster.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Powder has greater surface area, exposing more Mg atoms to H+ ions, so more effective collisions occur per second.",
            commonErrors: ["Saying powder is 'lighter' or 'more reactive' chemically; it is a surface-area effect only.", "Ignoring that total mass is the same."],
            examinerNote: "B2 surface reasoning, R1 collision link.",
          },
        },
        {
          id: "chem11-u2-collision-theory-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A catalyst lowers the activation energy of a reaction from $80\\ \\text{kJ/mol}$ to $50\\ \\text{kJ/mol}$.\n\n(a) Explain why the catalyst speeds up the reaction.\n(b) State two properties a catalyst must have.\n(c) Explain why a catalyst does not change the position of equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activation energy", statement: "Minimum collision energy needed for reaction; catalyst provides a lower-energy pathway." },
              { kind: "principle", name: "Catalyst properties", statement: "A catalyst is not consumed and does not shift equilibrium; it speeds both forward and reverse rates equally." },
            ],
            steps: [
              { reasoning: "With $E_a$ reduced from 80 to 50 kJ/mol, a much larger fraction of collisions have enough energy, so the forward rate increases.", marks: 2, markCode: "B" },
              { reasoning: "A catalyst is not used up and it does not change the overall enthalpy or equilibrium position.", marks: 1, markCode: "B" },
              { reasoning: "It lowers $E_a$ for both the forward and reverse reactions equally, so equilibrium is reached faster but at the same position.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Lower activation energy means more collisions succeed (b) not consumed; does not change equilibrium (c) speeds forward and reverse equally.",
            commonErrors: ["Thinking a catalyst provides energy to particles; it only lowers the barrier.", "Claiming catalysts shift equilibrium toward products."],
            examinerNote: "B2 mechanism, B1 properties, R1 equilibrium reasoning.",
          },
        },
        {
          id: "chem11-u2-collision-theory-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates the rate of reaction between sodium thiosulfate and hydrochloric acid, which produces a cloudy precipitate of sulfur. The student times how long it takes for a black mark under the flask to disappear.",
          parts: [
            { label: "a", prompt: "State the variable being measured and explain what a shorter time means about the rate.", marks: 2 },
            { label: "b", prompt: "List three variables the student must keep constant to make the test fair.", marks: 3 },
            { label: "c", prompt: "The student doubles the concentration of thiosulfate and the time falls from 40 s to about 20 s. Explain this result using collision theory.", marks: 3 },
            { label: "d", prompt: "Suggest one improvement to the method that would make the results more reliable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate measurement", statement: "Rate is measured by how quickly a product appears; less time for the same change means faster rate." },
              { kind: "principle", name: "Fair test", statement: "Only one variable may change; all others must be controlled." },
              { kind: "principle", name: "Collision frequency", statement: "Higher concentration means more particles per volume and more collisions per second." },
            ],
            steps: [
              { reasoning: "The measured variable is the time taken for the precipitate to obscure the mark (a proxy for product formation).", marks: 1, markCode: "B", part: "a" },
              { reasoning: "A shorter time means the same amount of product formed faster, so the rate is higher.", marks: 1, markCode: "R", part: "a" },
              { reasoning: "Constant variables: temperature, total volume of mixture, concentration of HCl, and the same apparatus/method each time.", marks: 3, markCode: "B", part: "b" },
              { reasoning: "Doubling thiosulfate concentration doubles the number of thiosulfate particles per unit volume.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "More particles means more collisions with H+ ions per second, so the rate roughly doubles and the time halves.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "The rate is inversely proportional to time for the same endpoint, so halving time means doubling rate, consistent with doubled concentration.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Repeat each concentration several times and average the times, or use a stopwatch with more precision / a light sensor, to reduce human reaction-time error.", marks: 2, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) time for precipitate to hide the mark; shorter time = faster rate (b) temperature, volume, HCl concentration, apparatus (c) doubled concentration doubles collision frequency, halving the time (d) repeat trials and average, or use a more precise timer.",
            commonErrors: ["Saying higher concentration 'adds energy'; it only increases collision frequency.", "Changing two variables at once (e.g. concentration and temperature)."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem11-u2-rate-laws",
      title: "Rate laws and reaction order",
      skill: "Write and interpret rate laws, determine reaction order from experimental data, and calculate units of the rate constant.",
      lesson: {
        sections: [
          {
            heading: "The rate law",
            body: "Experiments show that rate depends on reactant concentrations raised to powers:\n\n$$\\text{rate} = k[A]^m[B]^n$$\n\n- $k$ is the **rate constant**, fixed for a given reaction at a given temperature.\n- $m$ and $n$ are the **orders** with respect to A and B, found only by experiment — they cannot be read from the balanced equation.\n- The **overall order** is $m + n$.",
          },
          {
            heading: "Common orders",
            body: "- **Zero order**: rate does not depend on that reactant's concentration (exponent 0). Doubling [A] leaves rate unchanged.\n- **First order**: rate is proportional to concentration. Doubling [A] doubles the rate. Units of $k$: $\\text{s}^{-1}$.\n- **Second order**: rate is proportional to concentration squared. Doubling [A] quadruples the rate. Units of $k$: $\\text{dm}^3\\,\\text{mol}^{-1}\\,\\text{s}^{-1}$ (or $\\text{M}^{-1}\\text{s}^{-1}$).\n\nFor an overall order of $n$, units of $k$ are $\\text{mol}^{1-n}\\,\\text{dm}^{3(n-1)}\\,\\text{s}^{-1}$; in practice memorize: zero order $\\text{mol dm}^{-3}\\text{ s}^{-1}$, first order $\\text{s}^{-1}$, second order $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.",
          },
          {
            heading: "Determining order experimentally",
            body: "Change one reactant's concentration at a time while keeping everything else constant. Compare the rates:\n\n- Rate unchanged $\\rightarrow$ order 0.\n- Rate changes by the same factor as concentration $\\rightarrow$ order 1.\n- Rate changes by the square of the concentration factor $\\rightarrow$ order 2.\n\nExample: if doubling [A] doubles the rate, A is first order. If doubling [A] quadruples the rate, A is second order.",
          },
        ],
        keyFormulas: [
          { name: "Rate law", statement: "$\\text{rate} = k[A]^m[B]^n$; overall order $= m + n$" },
          { name: "Units of k", statement: "0 order: $\\text{mol dm}^{-3}\\text{ s}^{-1}$; 1st: $\\text{s}^{-1}$; 2nd: $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
        ],
        workedExample: {
          problem: "For the reaction $\\text{A} + \\text{B} \\rightarrow \\text{products}$, experiments give: (1) [A] doubled, [B] constant: rate doubles; (2) [B] doubled, [A] constant: rate quadruples. Write the rate law and state the units of $k$ if rate is in $\\text{mol dm}^{-3}\\text{ s}^{-1}$.",
          solution: "Doubling A doubles rate $\\rightarrow$ first order in A. Quadrupling when B doubles $\\rightarrow$ second order in B. Rate law: $\\text{rate} = k[A][B]^2$. Overall order = 3, so units of $k$ are $\\text{dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$.",
        },
      },
      questions: [
        {
          id: "chem11-u2-rate-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the rate law $\\text{rate} = k[A]^2[B]$, what is the overall order of reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Overall order", statement: "Overall order is the sum of the exponents in the rate law." }],
            steps: [{ reasoning: "Overall order $= 2 + 1 = 3$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $3$",
            commonErrors: ["Adding the coefficients from a balanced equation instead of exponents.", "Multiplying the exponents."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem11-u2-rate-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For a first-order reaction, the rate is $0.020\\ \\text{mol dm}^{-3}\\text{ s}^{-1}$ when $[A] = 0.50\\ \\text{mol dm}^{-3}$.\n\n(a) Calculate the value of $k$ with units.\n(b) State what happens to the rate if $[A]$ is doubled.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate law", statement: "$\\text{rate} = k[A]$ for first order." },
              { kind: "method", name: "Units of k", statement: "For first order, $k$ has units $\\text{s}^{-1}$." },
            ],
            steps: [
              { reasoning: "$k = \\text{rate}/[A] = 0.020/0.50 = 0.040\\ \\text{s}^{-1}$.", working: "k=0.020/0.50=0.040", marks: 2, markCode: "M" },
              { reasoning: "First order: rate is proportional to [A], so doubling [A] doubles the rate to $0.040\\ \\text{mol dm}^{-3}\\text{ s}^{-1}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $k = 0.040\\ \\text{s}^{-1}$ (b) rate doubles",
            commonErrors: ["Multiplying instead of dividing for $k$.", "Forgetting units; $k$ for first order is $\\text{s}^{-1}$, not $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$."],
            examinerNote: "M2 calculation, B1 prediction.",
          },
        },
        {
          id: "chem11-u2-rate-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the reaction $\\text{X} + \\text{Y} \\rightarrow \\text{products}$, a student obtains these initial rates:\n\n| Experiment | $[X]$ (mol/dm³) | $[Y]$ (mol/dm³) | Initial rate (mol dm⁻³ s⁻¹) |\n|---|---|---|---|\n| 1 | 0.10 | 0.10 | 0.0020 |\n| 2 | 0.20 | 0.10 | 0.0080 |\n| 3 | 0.20 | 0.20 | 0.0160 |\n\nDetermine the order with respect to X and Y, write the rate law, and find $k$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Order determination", statement: "Compare experiments where only one concentration changes; the rate factor reveals the order." },
              { kind: "formula", name: "Rate law", statement: "$\\text{rate} = k[X]^m[Y]^n$" },
            ],
            steps: [
              { reasoning: "Experiments 1→2: [X] doubles, [Y] constant, rate goes $0.0020 \\to 0.0080$, a factor of 4 = $2^2$: second order in X.", marks: 2, markCode: "M" },
              { reasoning: "Experiments 2→3: [Y] doubles, [X] constant, rate doubles ($0.0080 \\to 0.0160$): first order in Y.", marks: 1, markCode: "M" },
              { reasoning: "Rate law: $\\text{rate} = k[X]^2[Y]$. Using experiment 1: $k = 0.0020/(0.10)^2(0.10) = 0.0020/0.0010 = 2.0\\ \\text{dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Second order in X, first order in Y; $\\text{rate} = k[X]^2[Y]$; $k = 2.0\\ \\text{dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$.",
            commonErrors: ["Swapping the orders of X and Y.", "Assuming rate quadruples means fourth order; it is second order because concentration doubled."],
            examinerNote: "M2 order X, M1 order Y, A1 k value. Overall order 3.",
          },
        },
        {
          id: "chem11-u2-rate-laws-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The decomposition of compound P is studied. The rate law is found to be $\\text{rate} = k[\\text{P}]$ with $k = 0.015\\ \\text{s}^{-1}$ at $25^\\circ\\text{C}$.",
          parts: [
            { label: "a", prompt: "State the order of reaction and the units of $k$. Explain how you know.", marks: 2 },
            { label: "b", prompt: "If $[\\text{P}] = 0.40\\ \\text{mol dm}^{-3}$ initially, calculate the initial rate.", marks: 2 },
            { label: "c", prompt: "Explain what happens to $k$ when the temperature is raised, and why the rate increases even though concentrations are unchanged.", marks: 3 },
            { label: "d", prompt: "Suggest why the rate law cannot be written directly from the balanced equation for this reaction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Order and units", statement: "Exponent of [P] is 1, so first order; first-order k has units $\\text{s}^{-1}$." },
              { kind: "principle", name: "Temperature and k", statement: "k increases with temperature because more molecules exceed activation energy; rate = k[conc] so rate rises." },
              { kind: "principle", name: "Rate laws are experimental", statement: "Rate laws must be determined by experiment; they reflect the mechanism, not the overall equation." },
            ],
            steps: [
              { reasoning: "The exponent of [P] is 1, so the reaction is first order.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "For first order, $k$ has units $\\text{s}^{-1}$ because rate (mol dm⁻³ s⁻¹) divided by concentration (mol dm⁻³) leaves s⁻¹.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "rate $= k[P] = 0.015 \\times 0.40 = 0.0060\\ \\text{mol dm}^{-3}\\text{ s}^{-1}$.", working: "0.015\\times0.40=0.0060", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Raising temperature increases k because a larger fraction of collisions exceed $E_a$.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Since rate $= k[P]$ and $k$ rises while $[P]$ is unchanged, the rate increases.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "The rate law is an experimental result; it describes the slowest step (mechanism), which may involve different species than the overall equation suggests.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "The balanced equation shows only overall stoichiometry; the actual mechanism may be multi-step and involve intermediates.", marks: 2, markCode: "B", part: "d" },
              { reasoning: "Rate laws must be found by varying concentrations and measuring rates; they cannot be deduced from coefficients.", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) first order, $k$ in $\\text{s}^{-1}$ (b) $0.0060\\ \\text{mol dm}^{-3}\\text{ s}^{-1}$ (c) k rises with temperature because more collisions exceed Ea (d) rate laws reflect mechanism and must be measured experimentally.",
            commonErrors: ["Thinking higher temperature 'adds reactant'; it raises k.", "Reading exponents from balanced-equation coefficients."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
