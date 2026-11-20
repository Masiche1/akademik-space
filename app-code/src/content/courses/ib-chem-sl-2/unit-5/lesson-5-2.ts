import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "chemsl-u5-lesson-5-2",
  code: "5-2",
  title: "Calorimetry and Bond Enthalpies",
  goal: "I CAN measure enthalpy changes using calorimetry and estimate enthalpy changes from bond enthalpy data.",
  standards: ["Paper 1", "Paper 2", "Topic 5.1", "Topic 5.2"],
  vocabulary: [
    { term: "Calorimetry", definition: "An experimental technique that measures temperature change to determine the heat energy transferred in a reaction." },
    { term: "Specific heat capacity", definition: "The energy required to raise the temperature of $1$ g of a substance by $1$ K; for water it is $4.18$ J g$^{-1}$ K$^{-1}$." },
    { term: "Coffee-cup calorimeter", definition: "An insulated polystyrene cup used to measure enthalpy changes in solution with minimal heat loss to the surroundings." },
    { term: "Bond enthalpy", definition: "The average energy required to break one mole of a particular bond, or released when one mole of that bond forms." },
    { term: "Enthalpy of neutralisation", definition: "The enthalpy change when one mole of water is formed from $\\mathrm{H}^+$ and $\\mathrm{OH}^-$ ions; approximately $-57$ kJ mol$^{-1}$ for strong acid–strong base." },
    { term: "Heat loss", definition: "Energy escaping to the surroundings during a calorimetry experiment, which makes measured temperature changes — and hence measured $\\Delta H$ — smaller than the true value." },
  ],
  concepts: [
    {
      id: "chemsl-u5-calorimetry",
      title: "Calorimetry",
      skill: "Calculate heat released using $q = mc\\Delta T$ and convert it to an enthalpy change per mole of reactant.",
      lesson: {
        sections: [
          {
            heading: "Measuring heat change",
            body: "In solution calorimetry the heat released warms the solution (and the calorimeter). The heat energy is $q = mc\\Delta T$, where $m$ is the mass of the solution (taken as the mass of water, since density is $1.00$ g cm$^{-3}$), $c$ is the specific heat capacity ($4.18$ J g$^{-1}$ K$^{-1}$ for water) and $\\Delta T$ is the temperature rise. For a neutralisation in a **coffee-cup calorimeter**, $50$ cm$^3$ of acid plus $50$ cm$^3$ of alkali gives $100$ g of solution.",
          },
          {
            heading: "From heat to enthalpy",
            body: "The enthalpy change is $\\Delta H = -\\frac{q}{n}$, where $n$ is the moles of the limiting reactant — the negative sign makes exothermic reactions (temperature rises, $q > 0$ for the surroundings) have $\\Delta H < 0$. Both reactants must be checked for which is limiting; in a typical neutralisation with equimolar strong acid and base, either can be used.",
          },
          {
            heading: "Sources of error",
            body: "Heat is always lost to the surroundings, so the measured $\\Delta T$ — and therefore $|\\Delta H|$ — is smaller than the true value; measured exothermic enthalpies are less negative than the true value. Other errors include reading the thermometer too late (missing the maximum temperature), using an impure reactant, and assuming all the heat warms only the solution. Improvements include lagging the cup better, using larger quantities of reactant, and taking the maximum temperature reading promptly.",
          },
        ],
        keyFormulas: [
          { name: "Heat energy", statement: "$q = mc\\Delta T$ (J), with $c = 4.18$ J g$^{-1}$ K$^{-1}$ for water" },
          { name: "Enthalpy change", statement: "$\\Delta H = -\\dfrac{q}{n}$ in kJ mol$^{-1}$ (convert $q$ from J to kJ)" },
          { name: "Limiting reactant", statement: "Use the smaller of $n(\\text{acid})$ and $n(\\text{base})$ when they are not equimolar" },
        ],
        workedExample: {
          problem: "$50.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ NaOH is mixed with $50.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl in a coffee-cup calorimeter. The temperature rises by $0.68$ °C. Calculate $\\Delta H$ of neutralisation.",
          solution: "$n = 0.100 \\times 0.0500 = 0.00500$ mol (the $1:1$ reactants are equimolar). The solution mass is $100$ g, so $q = 100 \\times 4.18 \\times 0.68 = 284$ J $= 0.284$ kJ. Then $\\Delta H = -\\frac{0.284}{0.00500} = -56.8 \\approx -57$ kJ mol$^{-1}$, matching the accepted value for strong acid–strong base neutralisation.",
        },
      },
      questions: [
        {
          id: "chemsl-u5-calorimetry-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the heat energy absorbed by $100$ g of water when its temperature rises by $5.0$ °C. Specific heat capacity of water $= 4.18$ J g$^{-1}$ K$^{-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.09$ kJ" },
              { id: "b", text: "$0.209$ kJ" },
              { id: "c", text: "$20.9$ kJ" },
              { id: "d", text: "$418$ J" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$." },
            ],
            steps: [
              { reasoning: "Substitute mass, specific heat capacity and temperature change.", working: "q = 100 \\times 4.18 \\times 5.0 = 2090\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "Convert to kJ.", working: "q = 2.09\\ \\text{kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2.09$ kJ",
            commonErrors: ["Forgetting to convert J to kJ (answer $2090$ J).", "Dividing by $\\Delta T$ instead of multiplying."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a calorimetry experiment the measured enthalpy of an exothermic reaction is less negative than the accepted value. Which is the best explanation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Some heat escapes to the surroundings, so the measured temperature rise is smaller than the true value" },
              { id: "b", text: "The reaction is actually endothermic" },
              { id: "c", text: "The specific heat capacity of water is too large" },
              { id: "d", text: "Too much reactant was used" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heat loss", statement: "Energy lost to the surroundings makes the measured $\\Delta T$ — and hence $|\\Delta H|$ — smaller than the true value." },
            ],
            steps: [
              { reasoning: "In a real calorimeter some heat always leaks to the surroundings or warms the cup itself.", working: "q_{\\text{measured}} < q_{\\text{true}}", marks: 1, markCode: "M" },
              { reasoning: "A smaller measured $\\Delta T$ gives a smaller $q$ and therefore a smaller $|\\Delta H|$, so the exothermic value is less negative.", working: "\\Delta H_{\\text{meas}} > \\Delta H_{\\text{true}}\\ (\\text{less negative})", marks: 1, markCode: "M" },
              { reasoning: "Options (b)–(d) do not explain a systematic underestimate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Heat escapes to the surroundings, so the measured temperature rise — and $|\\Delta H|$ — is smaller than the true value",
            commonErrors: ["Thinking the sign of $\\Delta H$ is wrong rather than its magnitude."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$0.0200$ mol of sodium hydroxide is neutralised by excess hydrochloric acid in $50.0$ g of solution. The temperature rises by $7.0$ °C ($c = 4.18$ J g$^{-1}$ K$^{-1}$). What is the enthalpy of neutralisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-73.2$ kJ mol$^{-1}$" },
              { id: "b", text: "$-36.6$ kJ mol$^{-1}$" },
              { id: "c", text: "$+73.2$ kJ mol$^{-1}$" },
              { id: "d", text: "$-14.6$ kJ mol$^{-1}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$" },
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = -\\frac{q}{n}$" },
            ],
            steps: [
              { reasoning: "Calculate the heat released to the solution.", working: "q = 50.0 \\times 4.18 \\times 7.0 = 1463\\ \\text{J} = 1.463\\ \\text{kJ}", marks: 1, markCode: "M" },
              { reasoning: "Divide by moles of NaOH (limiting, $1:1$ ratio) and apply the negative sign for exothermic.", working: "\\Delta H = -\\frac{1.463}{0.0200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H = -73.15 \\approx -73.2\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "Option (b) forgets to divide correctly / uses the wrong mass; option (c) has the wrong sign for an exothermic reaction.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $-73.2$ kJ mol$^{-1}$",
            commonErrors: ["Omitting the negative sign.", "Using $50$ g instead of the total solution mass when volumes differ."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student places $50.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ hydrochloric acid and $50.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ sodium hydroxide in a polystyrene cup. The temperature rises from $20.0$ °C to $21.4$ °C. Assume density $= 1.00$ g cm$^{-3}$ and specific heat capacity $= 4.18$ J g$^{-1}$ K$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of each reactant.", marks: 2 },
            { label: "b", prompt: "Calculate the heat released to the solution, in kJ.", marks: 2 },
            { label: "c", prompt: "Calculate the enthalpy of neutralisation, in kJ mol$^{-1}$.", marks: 2 },
            { label: "d", prompt: "Suggest one improvement to the experiment and one reason the measured value differs from the accepted value of about $-57$ kJ mol$^{-1}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount in solution", statement: "$n = cV$ with $V$ in dm$^3$." },
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$" },
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = -\\frac{q}{n}$" },
            ],
            steps: [
              { part: "a", reasoning: "Both solutions have the same concentration and volume, so both amounts are equal.", working: "n = 0.200 \\times \\frac{50.0}{1000} = 0.0100\\ \\text{mol each}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Total solution mass is $100$ g and $\\Delta T = 1.4$ K.", working: "q = 100 \\times 4.18 \\times 1.4 = 585.2\\ \\text{J} = 0.5852\\ \\text{kJ}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Divide heat by moles of limiting reactant ($0.0100$ mol) with the negative sign.", working: "\\Delta H = -\\frac{0.5852}{0.0100} = -58.52 \\approx -58.5\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Any valid improvement (better insulation/lid, larger quantities, prompt maximum-temperature reading, calibrated thermometer).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Heat is lost to the surroundings so the measured $\\Delta T$ — and hence $|\\Delta H|$ — is too small; also the cup itself absorbs some heat.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.0100$ mol each (b) $0.5852$ kJ (c) $-58.5$ kJ mol$^{-1}$ (d) e.g. better insulation; heat loss to surroundings makes $|\\Delta H|$ smaller than the true value",
            commonErrors: ["Using only $50$ g of solution instead of the combined $100$ g.", "Forgetting the negative sign in (c).", "Using $0.0200$ mol (the sum) instead of $0.0100$ mol of limiting reactant."],
            examinerNote: "Award M1 for each correct n = cV calculation, M1 for q = mcΔT and A1 for 0.5852 kJ in (b), A1 for -58.5 kJ mol$^{-1}$ in (c), and R1 for each valid point in (d). Accept any valid improvement and any correct explanation of deviation.",
          },
        },
        {
          id: "chemsl-u5-calorimetry-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the heat energy absorbed by $50$ g of water when its temperature rises by $3.0$ °C. Specific heat capacity of water $= 4.18$ J g$^{-1}$ K$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$q$", answer: 0.627, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$." },
            ],
            steps: [
              { reasoning: "Substitute mass, specific heat capacity and temperature change.", working: "q = 50 \\times 4.18 \\times 3.0 = 627\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "Convert joules to kilojoules.", working: "q = 0.627\\ \\text{kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.627$ kJ",
            commonErrors: ["Forgetting to convert J to kJ.", "Using the temperature in °C incorrectly — the change $\\Delta T$ is the same in K."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the neutralisation $\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$, $0.010$ mol of HCl is mixed with $0.020$ mol of NaOH. Which reactant is limiting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrochloric acid" },
              { id: "b", text: "Sodium hydroxide" },
              { id: "c", text: "Neither — they are in exactly equal amounts" },
              { id: "d", text: "Water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting reactant", statement: "The reactant present in the smaller amount relative to the equation is used up first and determines $n$ in $\\Delta H = -q/n$." },
            ],
            steps: [
              { reasoning: "The equation has a $1:1$ ratio, so the smaller amount limits.", working: "0.010 < 0.020 \\Rightarrow \\mathrm{HCl}\\ \\text{limiting}", marks: 1, markCode: "M" },
              { reasoning: "Water is a product, not a reactant; NaOH is in excess.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Hydrochloric acid",
            commonErrors: ["Averaging the two amounts instead of identifying the limiting reactant."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$25.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl is mixed with $25.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ NaOH in a coffee-cup calorimeter. The temperature rises by $0.68$ °C. The total mass of solution is $50.0$ g and $c = 4.18$ J g$^{-1}$ K$^{-1}$. Calculate the enthalpy of neutralisation.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H_n$", answer: -56.8, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$" },
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = -\\frac{q}{n}$" },
            ],
            steps: [
              { reasoning: "Calculate the heat released to the solution.", working: "q = 50.0 \\times 4.18 \\times 0.68 = 142.1\\ \\text{J} = 0.1421\\ \\text{kJ}", marks: 1, markCode: "M" },
              { reasoning: "Find moles of the $1:1$ reactants — both are $0.00250$ mol, so either is limiting.", working: "n = 0.100 \\times \\frac{25.0}{1000} = 0.00250\\ \\text{mol}", marks: 1, markCode: "M" },
              { reasoning: "Divide heat by moles with the negative sign for exothermic.", working: "\\Delta H = -\\frac{0.1421}{0.00250} = -56.8\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-56.8$ kJ mol$^{-1}$ (approximately $-57$ kJ mol$^{-1}$)",
            commonErrors: ["Using $50$ cm$^3$ as the mass in grams without converting volume to mass correctly.", "Omitting the negative sign."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "$0.0200$ mol of sodium hydroxide is neutralised by excess hydrochloric acid. The temperature of the $60.0$ g of solution rises by $6.0$ °C. Specific heat capacity $= 4.18$ J g$^{-1}$ K$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$q$", answer: 1.50, unit: "kJ", tolerance: 0.01 },
              { label: "$\\Delta H_n$", answer: -75.2, unit: "kJ/mol", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$" },
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = -\\frac{q}{n}$" },
            ],
            steps: [
              { reasoning: "Calculate the heat released to the solution.", working: "q = 60.0 \\times 4.18 \\times 6.0 = 1504.8\\ \\text{J} = 1.5048\\ \\text{kJ}", marks: 1, markCode: "M" },
              { reasoning: "Convert to kJ (accept 1.50 kJ).", working: "q \\approx 1.50\\ \\text{kJ}", marks: 1, markCode: "A" },
              { reasoning: "Divide by moles of NaOH (limiting) and apply the negative sign.", working: "\\Delta H = -\\frac{1.5048}{0.0200}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H = -75.24 \\approx -75.2\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$q = 1.50$ kJ; $\\Delta H_n = -75.2$ kJ mol$^{-1}$",
            commonErrors: ["Using $50$ g instead of the stated $60.0$ g of solution.", "Dividing by $0.0400$ mol if both reactant amounts were incorrectly summed."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why is a polystyrene (foam) cup used as the calorimeter in a school neutralisation experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a good insulator, so less heat is lost to the surroundings during the measurement" },
              { id: "b", text: "It reacts with the acid to release extra heat" },
              { id: "c", text: "It increases the specific heat capacity of the solution" },
              { id: "d", text: "It allows the temperature to be measured more accurately than a thermometer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Calorimeter insulation", statement: "Insulation minimises heat exchange with the surroundings so the measured $\\Delta T$ is closer to the true value." },
            ],
            steps: [
              { reasoning: "Polystyrene traps air, which is a poor conductor, reducing heat loss.", working: "q_{\\text{loss}} \\downarrow \\Rightarrow \\Delta T_{\\text{measured}} \\approx \\Delta T_{\\text{true}}", marks: 1, markCode: "M" },
              { reasoning: "The cup does not react or change the solution's heat capacity; it simply insulates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It insulates, reducing heat loss to the surroundings",
            commonErrors: ["Thinking the cup itself absorbs the heat energy being measured."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A student measures the enthalpy of neutralisation as $-52$ kJ mol$^{-1}$, while the accepted value is $-57$ kJ mol$^{-1}$. Calculate the percentage error of the student's measurement.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage error", answer: 8.8, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage error", statement: "$\\%\\text{ error} = \\frac{|\\text{measured} - \\text{accepted}|}{|\\text{accepted}|} \\times 100$" },
            ],
            steps: [
              { reasoning: "Find the absolute difference between measured and accepted values.", working: "|-52 - (-57)| = 5", marks: 1, markCode: "M" },
              { reasoning: "Divide by the accepted value and multiply by 100.", working: "\\frac{5}{57} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx 8.8\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.8\\%$",
            commonErrors: ["Dividing by the measured value instead of the accepted value.", "Forgetting to multiply by 100."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In a calorimetry experiment the student reads the thermometer only after the temperature has started to fall from its maximum. What is the effect on the measured enthalpy change of an exothermic reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The measured temperature rise is smaller, so the magnitude of $\\Delta H$ is smaller than the true value" },
              { id: "b", text: "The measured temperature rise is larger, so $\\Delta H$ is more negative than the true value" },
              { id: "c", text: "The sign of $\\Delta H$ changes from negative to positive" },
              { id: "d", text: "There is no effect because the final temperature is the same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Maximum temperature reading", statement: "The true $\\Delta T$ is measured to the maximum temperature; a late reading underestimates $\\Delta T$ and hence $|\\Delta H|$." },
            ],
            steps: [
              { reasoning: "Reading late misses the peak temperature, so $\\Delta T_{\\text{measured}} < \\Delta T_{\\text{true}}$.", working: "\\Delta T_{\\text{meas}} < \\Delta T_{\\text{true}} \\Rightarrow q_{\\text{meas}} < q_{\\text{true}}", marks: 1, markCode: "M" },
              { reasoning: "A smaller $q$ gives a smaller $|\\Delta H|$ — the exothermic value is less negative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Measured $\\Delta T$ is smaller, so $|\\Delta H|$ is smaller than the true value",
            commonErrors: ["Thinking a late reading could make $\\Delta H$ more negative."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student investigates the neutralisation of $0.100$ mol dm$^{-3}$ hydrochloric acid with $0.100$ mol dm$^{-3}$ sodium hydroxide using a coffee-cup calorimeter.",
          parts: [
            { label: "a", prompt: "State the equation used to calculate the heat absorbed by the solution and identify each symbol.", marks: 2 },
            { label: "b", prompt: "Explain why the enthalpy of neutralisation for any strong acid reacting with any strong base is approximately $-57$ kJ mol$^{-1}$.", marks: 2 },
            { label: "c", prompt: "Suggest one reason why the student's measured value might be less negative than $-57$ kJ mol$^{-1}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$: $m$ = mass of solution, $c$ = specific heat capacity, $\\Delta T$ = temperature change." },
              { kind: "principle", name: "Net ionic neutralisation", statement: "Strong acid + strong base is effectively $\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H}_2\\mathrm{O}$ regardless of the ions involved." },
              { kind: "principle", name: "Heat loss", statement: "Heat lost to surroundings makes measured $|\\Delta H|$ smaller than the true value." },
            ],
            steps: [
              { part: "a", reasoning: "Correct equation with all three symbols correctly identified.", working: "q = mc\\Delta T;\\ m = \\text{mass (g)},\\ c = 4.18\\ \\text{J g}^{-1}\\text{K}^{-1},\\ \\Delta T = \\text{temp change}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Strong acids and bases are fully ionised, so the only reaction is $\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H}_2\\mathrm{O}$; spectator ions do not affect the energy change.", working: "\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H}_2\\mathrm{O},\\ \\Delta H \\approx -57\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "B" },
              { part: "c", reasoning: "Any valid reason: heat loss to surroundings, late thermometer reading, impure reactants, or heat absorbed by the cup.", working: "q_{\\text{meas}} < q_{\\text{true}} \\Rightarrow |\\Delta H_{\\text{meas}}| < |\\Delta H_{\\text{true}}|", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) $q = mc\\Delta T$ with $m$, $c$ and $\\Delta T$ defined (b) all strong acid–strong base neutralisations are effectively $\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H}_2\\mathrm{O}$ (c) e.g. heat lost to the surroundings",
            commonErrors: ["Quoting $q = mc\\Delta T$ without identifying the symbols.", "Claiming different strong acids give different neutralisation enthalpies."],
            examinerNote: "Award M1 for the equation and A1 for all symbols in (a); B1 for the net ionic equation and B1 for the constant value in (b); B1 for any valid experimental reason in (c).",
          },
        },
        {
          id: "chemsl-u5-calorimetry-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "What volume of $0.100$ mol dm$^{-3}$ hydrochloric acid is needed to neutralise exactly $20.0$ cm$^3$ of $0.150$ mol dm$^{-3}$ sodium hydroxide?",
          response: {
            type: "numeric",
            parts: [{ label: "Volume of HCl", answer: 30, unit: "cm3" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount in solution", statement: "$n = cV$ with $V$ in dm$^3$; neutralisation is $1:1$ for strong acid and base." },
            ],
            steps: [
              { reasoning: "Calculate moles of NaOH.", working: "n(\\mathrm{NaOH}) = 0.150 \\times \\frac{20.0}{1000} = 0.00300\\ \\text{mol}", marks: 1, markCode: "M" },
              { reasoning: "Equal moles of HCl are needed ($1:1$), so $V = n/c$.", working: "V = \\frac{0.00300}{0.100} = 0.0300\\ \\text{dm}^3", marks: 1, markCode: "M" },
              { reasoning: "Convert to cm$^3$.", working: "V = 30.0\\ \\text{cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30.0$ cm$^3$",
            commonErrors: ["Forgetting to convert cm$^3$ to dm$^3$ in the $n = cV$ calculation.", "Multiplying concentration by volume without converting units."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During a reaction, $200$ g of solution warms by $4.2$ °C. Calculate the heat absorbed by the solution. $c = 4.18$ J g$^{-1}$ K$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$q$", answer: 3.51, unit: "kJ", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$." },
            ],
            steps: [
              { reasoning: "Substitute into $q = mc\\Delta T$.", working: "q = 200 \\times 4.18 \\times 4.2 = 3511.2\\ \\text{J}", marks: 1, markCode: "M" },
              { reasoning: "Convert to kJ.", working: "q = 3.5112 \\approx 3.51\\ \\text{kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.51$ kJ",
            commonErrors: ["Leaving the answer in joules.", "Using $c$ for a substance other than water without justification."],
          },
        },
        {
          id: "chemsl-u5-calorimetry-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "$25.0$ cm$^3$ of $0.400$ mol dm$^{-3}$ hydrochloric acid is mixed with $25.0$ cm$^3$ of $0.400$ mol dm$^{-3}$ sodium hydroxide in a polystyrene cup. The temperature rises from $19.0$ °C to $21.6$ °C. Assume density $= 1.00$ g cm$^{-3}$ and specific heat capacity $= 4.18$ J g$^{-1}$ K$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the amount, in moles, of each reactant.", marks: 2 },
            { label: "b", prompt: "Calculate the heat released to the solution, in kJ.", marks: 2 },
            { label: "c", prompt: "Calculate the enthalpy of neutralisation, in kJ mol$^{-1}$.", marks: 2 },
            { label: "d", prompt: "Suggest one improvement to the experiment and state one reason the measured value could differ from the accepted value of about $-57$ kJ mol$^{-1}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Amount in solution", statement: "$n = cV$ with $V$ in dm$^3$." },
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$" },
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = -\\frac{q}{n}$" },
            ],
            steps: [
              { part: "a", reasoning: "Both reactants have equal concentration and volume, so both amounts are equal.", working: "n = 0.400 \\times \\frac{25.0}{1000} = 0.0100\\ \\text{mol each}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Total solution mass is $50.0$ g and $\\Delta T = 2.6$ K.", working: "q = 50.0 \\times 4.18 \\times 2.6 = 543.4\\ \\text{J} = 0.5434\\ \\text{kJ}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Divide by moles of limiting reactant ($0.0100$ mol) with the negative sign.", working: "\\Delta H = -\\frac{0.5434}{0.0100} = -54.3\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Any valid improvement (lid on cup, better insulation, larger quantities, prompt maximum-temperature reading).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Heat loss to the surroundings makes the measured $\\Delta T$ — and hence $|\\Delta H|$ — smaller, so the value is less negative.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.0100$ mol each (b) $0.5434$ kJ (c) $-54.3$ kJ mol$^{-1}$ (d) e.g. lid/insulation; heat loss makes $|\\Delta H|$ smaller",
            commonErrors: ["Using $25$ g instead of the combined $50$ g of solution.", "Using $0.0200$ mol (the sum) as the limiting amount."],
            examinerNote: "Award M1 for each correct $n = cV$ and A1 for $0.0100$ mol in (a); M1 for $q = mc\\Delta T$ and A1 for $0.5434$ kJ in (b); A1 for $-54.3$ kJ mol$^{-1}$ in (c); B1 for each valid point in (d).",
          },
        },
        {
          id: "chemsl-u5-calorimetry-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$25.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ hydrochloric acid is neutralised by excess sodium hydroxide. The total mass of the solution is $50.0$ g and the temperature rises by $1.5$ °C. $c = 4.18$ J g$^{-1}$ K$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H_n$", answer: -62.7, unit: "kJ/mol", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat energy", statement: "$q = mc\\Delta T$" },
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = -\\frac{q}{n}$ with $n$ the limiting reactant." },
            ],
            steps: [
              { reasoning: "Find moles of HCl (the limiting reactant, since NaOH is in excess).", working: "n = 0.200 \\times \\frac{25.0}{1000} = 0.00500\\ \\text{mol}", marks: 1, markCode: "M" },
              { reasoning: "Calculate heat released to the solution.", working: "q = 50.0 \\times 4.18 \\times 1.5 = 313.5\\ \\text{J} = 0.3135\\ \\text{kJ}", marks: 1, markCode: "M" },
              { reasoning: "Divide by moles with the negative sign.", working: "\\Delta H = -\\frac{0.3135}{0.00500}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H = -62.7\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-62.7$ kJ mol$^{-1}$",
            commonErrors: ["Using $100$ g instead of $50.0$ g of solution.", "Using the volume of NaOH rather than the limiting HCl amount."],
          },
        },
      ],
    },
    {
      id: "chemsl-u5-bondenthalpy",
      title: "Bond enthalpies",
      skill: "Estimate enthalpy changes from bond enthalpy data and compare the estimate with experimental values.",
      lesson: {
        sections: [
          {
            heading: "What a bond enthalpy is",
            body: "A **bond enthalpy** is the average energy required to break one mole of a particular bond in the gas phase. Bond enthalpies are averages across many molecules, so they give only an **estimate** of $\\Delta H$ for a specific reaction — the actual value can differ because bond strengths vary with the molecule and its environment.",
          },
          {
            heading: "The calculation",
            body: "To estimate $\\Delta H$: sum the bond enthalpies of all bonds **broken** in the reactants (energy absorbed, positive) and subtract the sum for all bonds **formed** in the products (energy released). $\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$. If more energy is released forming bonds than is needed to break them, $\\Delta H$ is negative (exothermic).",
          },
          {
            heading: "Bond enthalpy versus Hess's law",
            body: "Bond enthalpy estimates are quick and need no experimental data, but they are approximate. Hess's law using enthalpies of formation or combustion gives exact values under standard conditions. For example, the bond enthalpy estimate for $\\mathrm{H}_2 + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{HCl}$ gives $\\Delta H \\approx -184$ kJ mol$^{-1}$, close to but not exactly the experimental value.",
          },
        ],
        keyFormulas: [
          { name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E(\\text{bonds broken}) - \\sum E(\\text{bonds formed})$" },
          { name: "Sign", statement: "Positive when more energy is needed to break bonds than is released forming them" },
          { name: "Accuracy", statement: "Bond enthalpies are average values, so results are estimates only" },
        ],
        workedExample: {
          problem: "Use bond enthalpies (kJ mol$^{-1}$): H–H $436$, Cl–Cl $242$, H–Cl $431$ to estimate $\\Delta H$ for $\\mathrm{H}_2 + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{HCl}$.",
          solution: "Bonds broken: $436 + 242 = 678$ kJ mol$^{-1}$. Bonds formed: $2 \\times 431 = 862$ kJ mol$^{-1}$. $\\Delta H \\approx 678 - 862 = -184$ kJ mol$^{-1}$ (exothermic).",
        },
      },
      questions: [
        {
          id: "chemsl-u5-bondenthalpy-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the bond enthalpy calculation $\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$, why is energy 'added' for bonds broken and 'subtracted' for bonds formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Breaking bonds requires energy input (endothermic) while forming bonds releases energy (exothermic)" },
              { id: "b", text: "Breaking bonds releases energy while forming bonds requires energy" },
              { id: "c", text: "Bond enthalpies are always negative so the signs must be reversed" },
              { id: "d", text: "Only the bonds in the products need to be counted" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond enthalpy", statement: "Energy to break a bond is positive; energy released on forming a bond is subtracted." },
            ],
            steps: [
              { reasoning: "Breaking a bond is endothermic — energy must be supplied.", working: "+E_{\\text{broken}}", marks: 1, markCode: "M" },
              { reasoning: "Forming a bond is exothermic — energy is released and subtracted in the calculation.", working: "-E_{\\text{formed}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Breaking bonds costs energy; forming bonds releases it",
            commonErrors: ["Reversing the sign convention."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Bond enthalpies (kJ mol$^{-1}$): H–H $436$, F–F $159$, H–F $567$. Estimate $\\Delta H$ for $\\mathrm{H}_2 + \\mathrm{F}_2 \\rightarrow 2\\mathrm{HF}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-539$ kJ mol$^{-1}$" },
              { id: "b", text: "$+539$ kJ mol$^{-1}$" },
              { id: "c", text: "$-595$ kJ mol$^{-1}$" },
              { id: "d", text: "$-278.5$ kJ mol$^{-1}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { reasoning: "Sum the bonds broken in the reactants.", working: "E_{\\text{broken}} = 436 + 159 = 595", marks: 1, markCode: "M" },
              { reasoning: "Sum the bonds formed in the products — two H–F bonds.", working: "E_{\\text{formed}} = 2 \\times 567 = 1134", marks: 1, markCode: "M" },
              { reasoning: "Subtract and apply the sign.", working: "\\Delta H \\approx 595 - 1134 = -539\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-539$ kJ mol$^{-1}$",
            commonErrors: ["Forgetting to double the H–F bond enthalpy for $2\\mathrm{HF}$.", "Reversing the subtraction to give a positive value."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Estimate $\\Delta H$ for $\\mathrm{CH}_4 + \\mathrm{Cl}_2 \\rightarrow \\mathrm{CH}_3\\mathrm{Cl} + \\mathrm{HCl}$ using bond enthalpies (kJ mol$^{-1}$): C–H $413$, Cl–Cl $242$, C–Cl $339$, H–Cl $431$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-115$ kJ mol$^{-1}$" },
              { id: "b", text: "$+115$ kJ mol$^{-1}$" },
              { id: "c", text: "$-2260$ kJ mol$^{-1}$" },
              { id: "d", text: "$-349$ kJ mol$^{-1}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { reasoning: "Bonds broken: four C–H bonds in methane plus the Cl–Cl bond.", working: "E_{\\text{broken}} = 4(413) + 242 = 1894", marks: 1, markCode: "M" },
              { reasoning: "Bonds formed: three C–H bonds and one C–Cl bond in $\\mathrm{CH}_3\\mathrm{Cl}$, plus one H–Cl bond.", working: "E_{\\text{formed}} = 3(413) + 339 + 431 = 2009", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "\\Delta H \\approx 1894 - 2009", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — slightly exothermic.", working: "\\Delta H \\approx -115\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-115$ kJ mol$^{-1}$",
            commonErrors: ["Counting four C–H bonds in the products instead of three (the fourth becomes C–Cl).", "Adding broken and formed energies instead of subtracting."],
            examinerNote: "The key skill is tracking which bonds exist in reactants versus products — only one C–H bond is replaced by C–Cl and H–Cl.",
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "For the reaction $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightarrow 2\\mathrm{NH}_3$, use these bond enthalpies (kJ mol$^{-1}$): N≡N $945$, N–H $391$, H–H $436$.",
          parts: [
            { label: "a", prompt: "Explain why bond enthalpy calculations give only an estimate of $\\Delta H$.", marks: 2 },
            { label: "b", prompt: "Calculate the total energy needed to break all the bonds in the reactants.", marks: 2 },
            { label: "c", prompt: "Calculate the total energy released when all the bonds in the products form.", marks: 2 },
            { label: "d", prompt: "Estimate $\\Delta H$ for the reaction and state whether it is exothermic or endothermic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond enthalpy", statement: "The average energy to break one mole of a bond; values differ between molecules so results are estimates." },
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Bond enthalpies are average values measured across many different molecules.", working: "\\text{average bond enthalpies} \\Rightarrow \\text{estimate only}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The actual bond strength in a specific molecule can differ from the average, so the calculated $\\Delta H$ is approximate.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "One N≡N bond and three H–H bonds are broken.", working: "E_{\\text{broken}} = 945 + 3(436) = 2253\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two $\\mathrm{NH}_3$ molecules contain six N–H bonds.", working: "E_{\\text{formed}} = 6(391) = 2346\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Apply the bond enthalpy formula.", working: "\\Delta H \\approx 2253 - 2346 = -93\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\Delta H < 0$, so the reaction is exothermic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) bond enthalpies are averages, so the result is an estimate (b) $2253$ kJ mol$^{-1}$ (c) $2346$ kJ mol$^{-1}$ (d) $\\Delta H \\approx -93$ kJ mol$^{-1}$, exothermic",
            commonErrors: ["Using three N–H bonds instead of six (forgetting the $2$ in $2\\mathrm{NH}_3$).", "Counting the H–H bonds as six instead of three."],
            examinerNote: "Award M1 for the correct bonds broken and A1 for 2253 in (b); M1 for six N–H bonds and A1 for 2346 in (c); M1 for the subtraction and A1 for the sign in (d).",
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a reaction, the total bond enthalpy of bonds broken is $500$ kJ mol$^{-1}$ and the total bond enthalpy of bonds formed is $600$ kJ mol$^{-1}$. Estimate $\\Delta H$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H$", answer: -100, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { reasoning: "Apply the bond enthalpy formula.", working: "\\Delta H \\approx 500 - 600", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — more energy is released forming bonds, so the reaction is exothermic.", working: "\\Delta H \\approx -100\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-100$ kJ mol$^{-1}$ (exothermic)",
            commonErrors: ["Reversing the subtraction to give $+100$."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why do bond enthalpy calculations give only an estimate of the enthalpy change of a specific reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bond enthalpies are average values that vary between different molecules, so the actual bond strengths in the specific reaction may differ" },
              { id: "b", text: "Bond enthalpies cannot be measured experimentally" },
              { id: "c", text: "Bond enthalpies only apply to ionic compounds" },
              { id: "d", text: "The calculation ignores the number of moles involved" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond enthalpy", statement: "The average energy to break one mole of a bond across many molecules — an average, not an exact value for each molecule." },
            ],
            steps: [
              { reasoning: "Because bond enthalpies are averages, the true bond energies in a specific molecule can be stronger or weaker.", working: "\\Delta H_{\\text{estimate}} \\neq \\Delta H_{\\text{exact}}", marks: 1, markCode: "M" },
              { reasoning: "The other options are false: bond enthalpies are measurable and apply to covalent bonds in molecules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Bond enthalpies are averages, so actual bond strengths may differ",
            commonErrors: ["Claiming bond enthalpy calculations are always exact."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Use these bond enthalpies (kJ mol$^{-1}$): H–H $436$, Cl–Cl $242$, H–Cl $431$. Estimate $\\Delta H$ for $\\mathrm{H}_2 + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{HCl}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H$", answer: -184, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { reasoning: "Sum the bonds broken in the reactants.", working: "E_{\\text{broken}} = 436 + 242 = 678", marks: 1, markCode: "M" },
              { reasoning: "Sum the bonds formed — two H–Cl bonds.", working: "E_{\\text{formed}} = 2 \\times 431 = 862", marks: 1, markCode: "M" },
              { reasoning: "Subtract and apply the sign.", working: "\\Delta H \\approx 678 - 862 = -184\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-184$ kJ mol$^{-1}$",
            commonErrors: ["Counting only one H–Cl bond in the products.", "Adding the two sums instead of subtracting."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Estimate $\\Delta H$ for $\\mathrm{H}_2 + \\tfrac{1}{2}\\mathrm{O}_2 \\rightarrow \\mathrm{H}_2\\mathrm{O}(g)$ using bond enthalpies (kJ mol$^{-1}$): H–H $436$, O=O $498$, O–H $463$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$E_{\\text{broken}}$", answer: 685, unit: "kJ/mol" },
              { label: "$\\Delta H$", answer: -241, unit: "kJ/mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$; half an O=O bond is broken." },
            ],
            steps: [
              { reasoning: "One H–H bond and half of one O=O bond are broken.", working: "E_{\\text{broken}} = 436 + \\tfrac{1}{2}(498) = 685", marks: 1, markCode: "M" },
              { reasoning: "Two O–H bonds are formed in one water molecule.", working: "E_{\\text{formed}} = 2 \\times 463 = 926", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "\\Delta H \\approx 685 - 926", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — exothermic.", working: "\\Delta H \\approx -241\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E_{\\text{broken}} = 685$ kJ mol$^{-1}$; $\\Delta H \\approx -241$ kJ mol$^{-1}$",
            commonErrors: ["Using a whole O=O bond instead of half.", "Counting three O–H bonds as in liquid water's hydrogen bonding — only two covalent bonds form."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the calculation $\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$, what does a positive contribution from bonds broken represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy that must be supplied to break the bonds — an endothermic step" },
              { id: "b", text: "Energy released when the bonds form — an exothermic step" },
              { id: "c", text: "The activation energy of the reaction" },
              { id: "d", text: "The enthalpy of formation of the products" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond breaking", statement: "Breaking a bond requires an input of energy, so bond dissociation enthalpies are positive." },
            ],
            steps: [
              { reasoning: "Separating bonded atoms requires energy input — breaking bonds is endothermic.", working: "+E_{\\text{broken}}", marks: 1, markCode: "M" },
              { reasoning: "This is distinct from $E_a$ and from the formation enthalpy of products.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Energy supplied to break bonds — an endothermic step",
            commonErrors: ["Confusing bond breaking with bond forming."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For a certain reaction, breaking all the bonds in the reactants requires $1800$ kJ mol$^{-1}$ and forming all the bonds in the products releases $1900$ kJ mol$^{-1}$. Estimate $\\Delta H$ and state whether the reaction is exothermic or endothermic.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H$", answer: -100, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { reasoning: "Apply the formula with the given totals.", working: "\\Delta H \\approx 1800 - 1900", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the magnitude.", working: "\\Delta H \\approx -100\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Negative $\\Delta H$ means the reaction is exothermic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-100$ kJ mol$^{-1}$, exothermic",
            commonErrors: ["Reporting $+100$ by subtracting in the wrong order."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Estimate $\\Delta H$ for $2\\mathrm{H}_2 + \\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O}(g)$ using bond enthalpies (kJ mol$^{-1}$): H–H $436$, O=O $498$, O–H $463$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H$", answer: -482, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$ with coefficients applied to bond counts." },
            ],
            steps: [
              { reasoning: "Two H–H bonds and one O=O bond are broken.", working: "E_{\\text{broken}} = 2(436) + 498 = 1370", marks: 1, markCode: "M" },
              { reasoning: "Two water molecules contain four O–H bonds.", working: "E_{\\text{formed}} = 4(463) = 1852", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "\\Delta H \\approx 1370 - 1852", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — exothermic.", working: "\\Delta H \\approx -482\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-482$ kJ mol$^{-1}$",
            commonErrors: ["Counting two O–H bonds instead of four (forgetting the $2$ in $2\\mathrm{H}_2\\mathrm{O}$).", "Using one H–H bond instead of two."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "For the reaction $\\mathrm{CH}_4 + \\mathrm{Cl}_2 \\rightarrow \\mathrm{CH}_3\\mathrm{Cl} + \\mathrm{HCl}$, use these bond enthalpies (kJ mol$^{-1}$): C–H $413$, Cl–Cl $242$, C–Cl $339$, H–Cl $431$.",
          parts: [
            { label: "a", prompt: "List the bonds broken in the reactants and the bonds formed in the products.", marks: 2 },
            { label: "b", prompt: "Calculate $\\sum E_{\\text{broken}}$ and $\\sum E_{\\text{formed}}$.", marks: 2 },
            { label: "c", prompt: "Estimate $\\Delta H$ for the reaction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Broken: four C–H bonds and one Cl–Cl bond. Formed: three C–H bonds, one C–Cl bond and one H–Cl bond.", working: "\\text{broken: } 4\\times\\text{C–H} + \\text{Cl–Cl};\\ \\text{formed: } 3\\times\\text{C–H} + \\text{C–Cl} + \\text{H–Cl}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Sum each set correctly.", working: "E_{\\text{broken}} = 4(413) + 242 = 1894;\\ E_{\\text{formed}} = 3(413) + 339 + 431 = 2009", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Subtract broken from formed in the correct order.", working: "\\Delta H \\approx 1894 - 2009 = -115\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) broken: 4 C–H + Cl–Cl; formed: 3 C–H + C–Cl + H–Cl (b) $1894$ and $2009$ kJ mol$^{-1}$ (c) $-115$ kJ mol$^{-1}$",
            commonErrors: ["Counting four C–H bonds in the products — one C–H is replaced by C–Cl.", "Adding the two totals instead of subtracting."],
            examinerNote: "Award M1 for correctly identifying broken and A1 for formed bonds in (a); M1 for each correct sum in (b); M1 for the subtraction and A1 for the value in (c).",
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which method gives the most accurate value of the standard enthalpy change of a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using Hess's law with standard enthalpies of formation or combustion" },
              { id: "b", text: "Using average bond enthalpies" },
              { id: "c", text: "Measuring only the temperature change without converting to moles" },
              { id: "d", text: "Estimating from the colour change of an indicator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Accuracy of methods", statement: "Hess's law with formation/combustion enthalpies gives exact standard values; bond enthalpies give estimates only." },
            ],
            steps: [
              { reasoning: "Formation and combustion enthalpies are measured under standard conditions, giving exact $\\Delta H^\\theta$.", working: "\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})", marks: 1, markCode: "M" },
              { reasoning: "Bond enthalpies are averages (option b); the other options are not valid methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Hess's law with standard enthalpies of formation or combustion",
            commonErrors: ["Thinking bond enthalpy calculations are exact."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A bond enthalpy estimate for a reaction gives $\\Delta H = -180$ kJ mol$^{-1}$, while the experimental value is $-184$ kJ mol$^{-1}$. Calculate the percentage difference between the estimate and the experimental value.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage difference", answer: 2.2, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage difference", statement: "$\\%\\text{ difference} = \\frac{|\\text{estimate} - \\text{experimental}|}{|\\text{experimental}|} \\times 100$." },
            ],
            steps: [
              { reasoning: "Find the absolute difference.", working: "|-180 - (-184)| = 4", marks: 1, markCode: "M" },
              { reasoning: "Divide by the experimental value and multiply by 100.", working: "\\frac{4}{184} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx 2.2\\%", marks: 1, markCode: "M" },
              { reasoning: "The estimate is close to the experimental value, consistent with bond enthalpies being a good approximation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.2\\%$",
            commonErrors: ["Dividing by the estimate instead of the experimental value.", "Forgetting to multiply by 100."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Breaking the bonds in the reactants of a reaction requires $800$ kJ mol$^{-1}$ and forming the bonds in the products releases $950$ kJ mol$^{-1}$. Estimate $\\Delta H$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H$", answer: -150, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\Delta H \\approx 800 - 950", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — exothermic.", working: "\\Delta H \\approx -150\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-150$ kJ mol$^{-1}$",
            commonErrors: ["Reversing the order of subtraction."],
          },
        },
        {
          id: "chemsl-u5-bondenthalpy-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "For the reaction $\\mathrm{H}_2 + \\mathrm{I}_2 \\rightarrow 2\\mathrm{HI}$, use these bond enthalpies (kJ mol$^{-1}$): H–H $436$, I–I $151$, H–I $299$.",
          parts: [
            { label: "a", prompt: "Explain why a bond enthalpy calculation gives only an estimate of $\\Delta H$.", marks: 2 },
            { label: "b", prompt: "Calculate the total energy needed to break all the bonds in the reactants.", marks: 2 },
            { label: "c", prompt: "Calculate the total energy released when all the bonds in the products form.", marks: 2 },
            { label: "d", prompt: "Estimate $\\Delta H$ for the reaction, state whether it is exothermic or endothermic, and comment on why the estimate may differ from the experimental value.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bond enthalpy", statement: "Average energy to break one mole of a bond; values differ between molecules so results are estimates." },
              { kind: "formula", name: "Enthalpy estimate", statement: "$\\Delta H \\approx \\sum E_{\\text{broken}} - \\sum E_{\\text{formed}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Bond enthalpies are average values measured across many different molecules.", working: "\\text{average values} \\Rightarrow \\text{estimate only}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The actual bond strength in the specific molecules of this reaction can differ from the average.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "One H–H bond and one I–I bond are broken.", working: "E_{\\text{broken}} = 436 + 151 = 587\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two HI molecules contain two H–I bonds.", working: "E_{\\text{formed}} = 2 \\times 299 = 598\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Apply the formula.", working: "\\Delta H \\approx 587 - 598 = -11\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\Delta H < 0$ so exothermic; the estimate may differ from experiment because bond enthalpies are averages, not exact values for these molecules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) bond enthalpies are averages (b) $587$ kJ mol$^{-1}$ (c) $598$ kJ mol$^{-1}$ (d) $\\Delta H \\approx -11$ kJ mol$^{-1}$, exothermic; estimate may differ because averages are used",
            commonErrors: ["Counting one H–I bond instead of two.", "Claiming the estimate must equal the experimental value exactly."],
            examinerNote: "Award M1 for the averaging explanation and B1 for the molecule-specific point in (a); M1 for correct bonds and A1 for 587 in (b); M1 for two H–I bonds and A1 for 598 in (c); M1 for the subtraction and A1 for sign plus accuracy comment in (d).",
          },
        },
      ],
    },
  ],
};
