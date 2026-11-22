import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ech11-u1-lesson-1-2",
  code: "1-2",
  title: "Rates of Reaction",
  goal: "I CAN calculate rates of reaction, explain the factors that change rate using collision theory and plan and interpret rate practicals.",
  standards: ["4CH1 3.9", "4CH1 3.10", "4CH1 3.11", "4CH1 3.12", "4CH1 3.13", "4CH1 3.14"],
  vocabulary: [
    { term: "Rate of reaction", definition: "How quickly reactants are used up or products are formed, measured as the change in quantity per unit time." },
    { term: "Collision theory", definition: "Reactions happen when particles collide with at least the activation energy. More frequent or more energetic collisions give a faster rate." },
    { term: "Activation energy", definition: "The minimum energy that colliding particles must have in order to react." },
    { term: "Catalyst", definition: "A substance that speeds up a reaction by providing an alternative pathway with a lower activation energy. It is not used up." },
    { term: "Surface area", definition: "The total area of solid exposed to a reacting liquid or gas. Smaller pieces have a larger surface area for the same mass." },
    { term: "Precipitate", definition: "An insoluble solid formed in a reaction in solution, for example sulfur in the thiosulfate and acid reaction." },
  ],
  concepts: [
    {
      id: "ech11-u1-rates-collision-theory",
      title: "Rates of reaction and collision theory",
      skill: "Calculate mean rates, read rate graphs and explain the effect of concentration, pressure, temperature and surface area using collision theory.",
      lesson: {
        sections: [
          {
            heading: "Measuring rate",
            body: "The **rate of reaction** is the change in the amount of a reactant or product divided by the time taken.\n\n$$\\text{mean rate} = \\frac{\\text{quantity of product formed (or reactant used)}}{\\text{time taken}}$$\n\nThe unit depends on what is measured, for example $\\text{cm}^3\\text{/s}$ for gas volume, $\\text{g/s}$ for mass lost, or $\\text{mol/s}$.\n\nOn a graph of product against time, the **gradient** is the rate. A steep line means a fast reaction. The line becomes flat when one reactant (the limiting reactant) has been used up.",
          },
          {
            heading: "Collision theory",
            body: "For particles to react they must **collide** with energy equal to or greater than the **activation energy**. The rate depends on the **frequency** of successful collisions.\n\n- **Higher concentration** (or pressure for gases): more particles in the same volume, so more frequent collisions.\n- **Higher temperature**: particles move faster, so they collide more often **and** a greater proportion have at least the activation energy. The second effect is more important.\n- **Larger surface area** (smaller pieces of a solid): more particles exposed, so more frequent collisions.",
          },
          {
            heading: "Writing good explanations",
            body: "Always link the change to the **frequency of collisions** or to the **energy of the collisions**. Do not say that particles collide 'more' without saying 'more often' or 'with more energy'. Increasing concentration does not change the energy of the particles, only how often they collide.",
          },
        ],
        keyFormulas: [
          { name: "Mean rate", statement: "$\\text{mean rate} = \\frac{\\text{change in quantity}}{\\text{time taken}}$" },
          { name: "Collision theory", statement: "Reaction needs collisions with energy $\\geq E_a$" },
          { name: "Rate and temperature", statement: "Higher temperature: more frequent collisions and a greater proportion with energy $\\geq E_a$" },
        ],
        workedExample: {
          problem: "A reaction produces $72\\text{ cm}^3$ of gas in $45\\text{ s}$. Calculate the mean rate of reaction.",
          solution: "Mean rate $= \\frac{72}{45} = 1.6\\text{ cm}^3\\text{/s}$.",
        },
      },
      questions: [
        {
          id: "ech11-u1-rates-collision-theory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change would NOT increase the rate of reaction between magnesium ribbon and dilute hydrochloric acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using a larger volume of acid of the same concentration" },
              { id: "b", text: "Using magnesium powder instead of ribbon of the same mass" },
              { id: "c", text: "Warming the acid" },
              { id: "d", text: "Using more concentrated acid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "The rate depends on the frequency of collisions between particles, which depends on concentration (not volume), temperature and surface area." },
            ],
            steps: [
              { reasoning: "A larger volume of acid with the same concentration has the same number of particles in each cm$^3$, so the collision frequency per unit volume is unchanged.", working: "\\text{same concentration} \\Rightarrow \\text{same rate}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Using a larger volume of acid of the same concentration",
            commonErrors: ["Thinking that more acid means a faster reaction, confusing volume with concentration."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "ech11-u1-rates-collision-theory-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reaction between marble chips and acid produces $72\\text{ cm}^3$ of carbon dioxide in $45\\text{ s}$. Calculate the mean rate of reaction in $\\text{cm}^3\\text{/s}$.",
          response: { type: "numeric", parts: [{ label: "Mean rate", answer: 1.6, unit: "cm³/s" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean rate", statement: "$\\text{mean rate} = \\frac{\\text{volume of gas}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the volume of gas by the time.", working: "\\frac{72}{45}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "1.6\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.6\\text{ cm}^3\\text{/s}$",
            commonErrors: ["Dividing time by volume, giving $0.625$."],
            examinerNote: "Allow 1.60. A1 requires the unit.",
          },
        },
        {
          id: "ech11-u1-rates-collision-theory-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain, in terms of collisions between particles, why increasing the concentration of hydrochloric acid increases the rate of its reaction with magnesium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Reaction occurs when particles collide with at least the activation energy. Greater collision frequency gives a greater rate." },
            ],
            steps: [
              { reasoning: "In a more concentrated solution there are more acid particles in the same volume.", marks: 1, markCode: "B" },
              { reasoning: "The particles are closer together, so collisions between acid particles and magnesium happen more often (greater frequency).", marks: 1, markCode: "B" },
              { reasoning: "So there are more successful collisions (with energy of at least the activation energy) per second.", marks: 1, markCode: "B" },
              { reasoning: "The energy of the particles is unchanged, so the proportion of collisions that are successful is the same, but the rate of successful collisions per second is greater, so the reaction is faster.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More particles per unit volume, so more frequent collisions and more successful collisions per second.",
            commonErrors: ["Saying the particles move faster or have more energy.", "Saying that there are 'more collisions' without referring to time or frequency."],
            examinerNote: "Reject 'particles have more energy'. Allow 'more crowded' oe for the first mark. The R mark needs a clear link between frequency and rate.",
          },
        },
        {
          id: "ech11-u1-rates-collision-theory-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student reacts excess marble chips with $50\\text{ cm}^3$ of dilute hydrochloric acid and measures the total volume of carbon dioxide collected in a gas syringe.\n\n| Time (s) | 0 | 20 | 40 | 60 | 80 | 100 |\n| --- | --- | --- | --- | --- | --- | --- |\n| Volume ($\\text{cm}^3$) | 0 | 30 | 48 | 58 | 60 | 60 |",
          parts: [
            { label: "a", prompt: "Calculate the mean rate of reaction during the first $20\\text{ s}$, in $\\text{cm}^3\\text{/s}$.", marks: 2 },
            { label: "b", prompt: "Calculate the mean rate of reaction between $40\\text{ s}$ and $60\\text{ s}$, in $\\text{cm}^3\\text{/s}$.", marks: 2 },
            { label: "c", prompt: "Explain why the rate is lower between $40\\text{ s}$ and $60\\text{ s}$ than in the first $20\\text{ s}$.", marks: 2 },
            { label: "d", prompt: "Explain why the volume of gas stays at $60\\text{ cm}^3$ after $80\\text{ s}$.", marks: 1 },
            { label: "e", prompt: "The experiment is repeated at a higher temperature. Explain, in terms of particles, why the initial rate is greater.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean rate", statement: "$\\text{mean rate} = \\frac{\\text{change in volume}}{\\text{time}}$" },
              { kind: "principle", name: "Collision theory", statement: "Rate depends on the frequency of collisions and the proportion with energy of at least the activation energy." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the volume produced by the time.", working: "\\frac{30 - 0}{20}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "1.5\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find the volume produced in this interval and divide by 20 s.", working: "\\frac{58 - 48}{20}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "0.5\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The concentration of the acid has decreased as it is used up.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So collisions between particles are less frequent.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The acid is the limiting reactant (the marble chips are in excess) and has all been used up, so no more gas is made.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "At a higher temperature the particles move faster, so they collide more frequently.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A greater proportion of the particles have at least the activation energy, so more collisions are successful.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $1.5\\text{ cm}^3\\text{/s}$ (b) $0.5\\text{ cm}^3\\text{/s}$ (c) acid concentration falls so fewer collisions per second (d) acid used up (e) faster particles, more frequent collisions and more with energy $\\geq E_a$",
            commonErrors: ["Using 58 divided by 60 in (b) rather than the change in volume over the interval.", "Saying the marble is used up in (d) when it is in excess.", "Saying that particles 'have more energy so collide more' without a proportion with at least the activation energy."],
            examinerNote: "In (a) and (b) A1 requires the unit. In (d) reject 'the reaction has finished' alone.",
          },
        },
      ],
    },
    {
      id: "ech11-u1-catalysts-rate-practicals",
      title: "Catalysts and rate practicals",
      skill: "Explain how catalysts work, calculate and compare rates and plan and evaluate rate experiments.",
      lesson: {
        sections: [
          {
            heading: "Catalysts",
            body: "A **catalyst** increases the rate of a reaction without being used up. It provides an **alternative reaction pathway** with a **lower activation energy**, so a greater proportion of collisions are successful. On an energy profile the catalysed route has a lower peak, but the energy of the reactants and products (and so $\\Delta H$) is unchanged.\n\nA catalyst does not change the amount of product formed. Examples: manganese(IV) oxide for the decomposition of hydrogen peroxide, iron in the Haber process, enzymes in living things. Catalysts are valuable in industry because they allow lower temperatures, saving energy and cost.",
          },
          {
            heading: "Measuring rate in practice",
            body: "Three common methods:\n\n- **Gas volume** collected in a gas syringe or by displacement of water, recorded at timed intervals.\n- **Mass loss** on a balance when a gas escapes (a cotton wool plug stops spray escaping).\n- **Disappearing cross**: sodium thiosulfate reacts with hydrochloric acid to form a cloudy precipitate of sulfur. The time for a cross under the flask to disappear is measured. The rate is proportional to $\\frac{1}{\\text{time}}$.\n\n$$\\text{Na}_2\\text{S}_2\\text{O}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{S} + \\text{SO}_2 + \\text{H}_2\\text{O}$$",
          },
          {
            heading: "Fair tests and reliability",
            body: "Change only the **independent variable**, measure the **dependent variable**, and keep all **control variables** constant (volumes, concentrations, mass of solid, temperature). Repeat and calculate a mean to improve reliability, ignoring anomalous results. Sulfur dioxide is toxic, so do the thiosulfate experiment in a well-ventilated space or fume cupboard, and wear eye protection.",
          },
        ],
        keyFormulas: [
          { name: "Catalyst", statement: "Alternative pathway, lower $E_a$, not used up, no change in $\\Delta H$ or yield" },
          { name: "Relative rate", statement: "$\\text{relative rate} \\propto \\frac{1}{\\text{time}}$" },
          { name: "Mean rate", statement: "$\\text{mean rate} = \\frac{\\text{change in quantity}}{\\text{time taken}}$" },
        ],
        workedExample: {
          problem: "Without a catalyst, $90\\text{ cm}^3$ of oxygen forms in $180\\text{ s}$. With a catalyst, the same volume forms in $60\\text{ s}$. How many times faster is the catalysed reaction?",
          solution: "Without: $\\frac{90}{180} = 0.50\\text{ cm}^3\\text{/s}$. With: $\\frac{90}{60} = 1.5\\text{ cm}^3\\text{/s}$. The ratio is $\\frac{1.5}{0.50} = 3$, so it is 3 times faster.",
        },
      },
      questions: [
        {
          id: "ech11-u1-catalysts-rate-practicals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about how a catalyst works is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the reaction more exothermic" },
              { id: "b", text: "It provides an alternative pathway with a lower activation energy" },
              { id: "c", text: "It increases the energy of the reacting particles" },
              { id: "d", text: "It increases the amount of product formed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catalyst", statement: "A catalyst speeds up a reaction by providing an alternative pathway with a lower activation energy. It is not used up." },
            ],
            steps: [
              { reasoning: "A catalyst lowers the activation energy, so more collisions are successful. It does not change the energy of particles, the yield or $\\Delta H$.", working: "E_a \\text{ lowered}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It provides an alternative pathway with a lower activation energy",
            commonErrors: ["Thinking a catalyst increases yield or gives particles more energy."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u1-catalysts-rate-practicals-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Hydrogen peroxide decomposes to form water and oxygen. Without a catalyst, $90\\text{ cm}^3$ of oxygen is collected in $120\\text{ s}$. With manganese(IV) oxide as a catalyst, $90\\text{ cm}^3$ is collected in $40\\text{ s}$. Calculate the mean rate of reaction without the catalyst and with the catalyst, in $\\text{cm}^3\\text{/s}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Rate without catalyst", answer: 0.75, unit: "cm³/s" },
              { label: "Rate with catalyst", answer: 2.25, unit: "cm³/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean rate", statement: "$\\text{mean rate} = \\frac{\\text{volume of gas}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide the volume by the time without the catalyst.", working: "\\frac{90}{120}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.75\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
              { reasoning: "Divide the volume by the time with the catalyst.", working: "\\frac{90}{40}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.25\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Without: $0.75\\text{ cm}^3\\text{/s}$; with: $2.25\\text{ cm}^3\\text{/s}$ (3 times faster)",
            commonErrors: ["Dividing time by volume.", "Subtracting the two times instead of calculating each rate."],
            examinerNote: "Allow 2.3 for 2.25. Allow ecf between the two parts.",
          },
        },
        {
          id: "ech11-u1-catalysts-rate-practicals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student investigates how the mass of manganese(IV) oxide affects the rate of decomposition of hydrogen peroxide solution, using a gas syringe. Describe how the student should carry out the investigation so that it is a fair test and the results are reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test", statement: "Change only the independent variable, measure the dependent variable and keep control variables constant. Repeat to improve reliability." },
            ],
            steps: [
              { reasoning: "Change only the mass of catalyst (independent variable), using several different masses.", marks: 1, markCode: "B" },
              { reasoning: "Keep the volume and concentration of hydrogen peroxide and the temperature the same each time (control variables).", marks: 1, markCode: "B" },
              { reasoning: "Measure the volume of oxygen in the gas syringe at regular time intervals with a stopwatch (or the time to collect a fixed volume).", marks: 1, markCode: "B" },
              { reasoning: "Repeat each mass at least twice more, ignore anomalous results and calculate a mean.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Vary catalyst mass only; control volume, concentration and temperature; measure gas volume against time; repeat and average.",
            commonErrors: ["Changing the temperature or concentration at the same time as the catalyst mass.", "Describing repeats without calculating a mean."],
            examinerNote: "Allow any two control variables for the second mark if they are correct. Reject 'same amount of catalyst' as a control, because it is the independent variable.",
          },
        },
        {
          id: "ech11-u1-catalysts-rate-practicals-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates how temperature affects the rate of reaction between sodium thiosulfate solution and dilute hydrochloric acid. The mixture turns cloudy as sulfur forms. She measures the time taken for a cross viewed through the flask to disappear.\n\n| Temperature ($^\\circ\\text{C}$) | 20 | 30 | 40 | 50 |\n| --- | --- | --- | --- | --- |\n| Time (s) | 78 | 41 | 19 | 10 |",
          parts: [
            { label: "a", prompt: "Name the substance that makes the cross disappear.", marks: 1 },
            { label: "b", prompt: "The relative rate is $\\frac{1000}{\\text{time}}$. Calculate the relative rate at $20^\\circ\\text{C}$. Give your answer to 1 decimal place.", marks: 2 },
            { label: "c", prompt: "Describe the pattern in the results, including the approximate effect on the rate of each $10^\\circ\\text{C}$ rise.", marks: 2 },
            { label: "d", prompt: "Explain, using ideas about particles, why a rise in temperature increases the rate of reaction.", marks: 3 },
            { label: "e", prompt: "State one variable that must be kept constant, and one safety precaution because sulfur dioxide is produced.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Higher temperature increases collision frequency and the proportion of particles with energy of at least the activation energy." },
              { kind: "formula", name: "Relative rate", statement: "$\\text{relative rate} = \\frac{1000}{\\text{time}}$, because rate is inversely proportional to time." },
            ],
            steps: [
              { part: "a", reasoning: "Insoluble sulfur forms as a precipitate and hides the cross.", working: "\\text{sulfur}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute the time at $20^\\circ\\text{C}$.", working: "\\frac{1000}{78}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 1 decimal place.", working: "12.82\\ldots \\approx 12.8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "As temperature increases, the time taken decreases (the rate increases).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Each $10^\\circ\\text{C}$ rise roughly doubles the rate (the time roughly halves).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "At higher temperature the particles move faster and have more energy.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So they collide more frequently.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A greater proportion of collisions have at least the activation energy, so more collisions are successful.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Any one valid control: volume or concentration of thiosulfate, volume or concentration of acid, the same cross, the same flask.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Any one valid precaution: work in a fume cupboard or well-ventilated room; wear eye protection; do not use with asthma sufferers nearby.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Sulfur (b) $12.8$ (c) time falls as temperature rises; rate roughly doubles per $10^\\circ\\text{C}$ (d) faster particles, more frequent and more energetic collisions (e) e.g. same volume of acid; fume cupboard",
            commonErrors: ["Giving the time as the rate.", "Saying sulfur dioxide hides the cross.", "Saying the proportion of particles with enough energy is unchanged."],
            examinerNote: "In (b) allow 12.82. In (c) allow 'roughly halves the time'. In (d) the third mark must refer to activation energy.",
          },
        },
      ],
    },
  ],
};
