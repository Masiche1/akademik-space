import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "chem11-u2-lesson-2-2",
  code: "2-2",
  title: "Chemical Equilibrium and Kc",
  goal: "I CAN explain dynamic equilibrium, write equilibrium constant expressions, use Q to predict reaction direction, and calculate Kc from equilibrium concentrations.",
  standards: ["HS-PS1-6", "CCC: Cause and Effect"],
  vocabulary: [
    { term: "Dynamic equilibrium", definition: "A state where forward and reverse reactions occur at equal rates, so concentrations stay constant but molecules keep reacting." },
    { term: "Equilibrium constant", definition: "The ratio of product to reactant concentrations (each raised to its coefficient) at equilibrium; a fixed value at a given temperature." },
    { term: "Kc", definition: "The equilibrium constant expressed in concentrations: $K_c = \\frac{[\\text{products}]}{[\\text{reactants}]}$ with stoichiometric exponents." },
    { term: "Reaction quotient Q", definition: "The same expression as Kc but computed with current (non-equilibrium) concentrations; comparing Q to K predicts direction." },
    { term: "Heterogeneous equilibrium", definition: "An equilibrium involving substances in more than one phase; pure solids and liquids are omitted from K." },
    { term: "Le Chatelier's principle", definition: "If a system at equilibrium is disturbed, it shifts to partially oppose the change." },
    { term: "Reversible reaction", definition: "A reaction that can proceed in both directions, written with a double arrow $\\rightleftharpoons$." },
  ],
  concepts: [
    {
      id: "chem11-u2-equilibrium-basics",
      title: "Dynamic equilibrium",
      skill: "Explain why equilibrium is dynamic, what happens to concentrations at equilibrium, and how temperature affects K.",
      lesson: {
        sections: [
          {
            heading: "What equilibrium really means",
            body: "In a reversible reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$, both forward and reverse reactions continue happening. At **dynamic equilibrium** the forward and reverse rates are equal, so the concentrations of all species stay constant — but molecules are still reacting constantly.\n\nThe position of equilibrium depends on conditions:\n\n- If the forward reaction is favored, the equilibrium mixture contains mostly products.\n- If the reverse is favored, mostly reactants remain.\n- At equilibrium, neither side is 'finished' — reactions continue in both directions.",
          },
          {
            heading: "Temperature is the key variable",
            body: "Only **temperature** changes the value of the equilibrium constant $K$.\n\n- For an **exothermic** reaction ($\\Delta H < 0$), raising temperature shifts equilibrium toward reactants and $K$ decreases.\n- For an **endothermic** reaction ($\\Delta H > 0$), raising temperature shifts toward products and $K$ increases.\n\nChanging concentration, pressure or adding a catalyst shifts the position temporarily but does **not** change $K$ itself — the system returns to a state with the same $K$ value.",
          },
          {
            heading: "Common misconceptions",
            body: "- Equilibrium does not mean 'equal amounts' of reactants and products; it means equal **rates**.\n- Reactions do not 'stop' at equilibrium; they reach equal forward and reverse rates.\n- A catalyst does not change $K$ or the equilibrium position; it only reaches equilibrium faster.",
          },
        ],
        keyFormulas: [
          { name: "Dynamic equilibrium", statement: "rate forward = rate reverse; concentrations constant" },
          { name: "Temperature effect", statement: "$T$ up: exothermic $K$ down, endothermic $K$ up" },
        ],
        workedExample: {
          problem: "For the exothermic reaction $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$, explain what happens to the equilibrium position and $K$ when temperature is increased.",
          solution: "The reaction is exothermic, so increasing temperature favors the endothermic direction (reverse). Equilibrium shifts toward $\\text{N}_2$ and $\\text{H}_2$, producing less $\\text{NH}_3$, and the value of $K$ decreases.",
        },
      },
      questions: [
        {
          id: "chem11-u2-equilibrium-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At dynamic equilibrium, which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reaction has stopped" },
              { id: "b", text: "Forward and reverse rates are equal" },
              { id: "c", text: "Reactants and products are present in equal amounts" },
              { id: "d", text: "Only the forward reaction occurs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Dynamic equilibrium", statement: "At equilibrium forward and reverse rates are equal; concentrations are constant but reactions continue." }],
            steps: [{ reasoning: "Dynamic equilibrium means equal forward and reverse rates, not equal amounts or a stopped reaction.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Forward and reverse rates are equal",
            commonErrors: ["Confusing equal rates with equal concentrations.", "Thinking equilibrium means the reaction stops."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u2-equilibrium-basics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$, the forward reaction is exothermic.\n\n(a) State what happens to the equilibrium position when temperature is increased.\n(b) State what happens to the value of $K$.\n(c) Explain why adding a catalyst does not change $K$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature and equilibrium", statement: "For exothermic reactions, increasing T shifts equilibrium toward reactants." },
              { kind: "principle", name: "K depends only on T", statement: "K changes only with temperature, not concentration, pressure or catalyst." },
            ],
            steps: [
              { reasoning: "Exothermic forward reaction: raising T favors the endothermic reverse direction, shifting equilibrium toward A and B.", marks: 1, markCode: "B" },
              { reasoning: "$K$ decreases because the equilibrium now favors reactants.", marks: 1, markCode: "B" },
              { reasoning: "A catalyst speeds both forward and reverse rates equally without changing the equilibrium position or K.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) shifts toward reactants (b) K decreases (c) catalyst affects both directions equally.",
            commonErrors: ["Saying K increases because 'more energy'.", "Thinking catalysts change K."],
            examinerNote: "B1 shift, B1 K direction, R1 catalyst reasoning.",
          },
        },
        {
          id: "chem11-u2-equilibrium-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider the endothermic reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$ with $\\Delta H = +50\\ \\text{kJ/mol}$.\n\n(a) Predict the effect of increasing temperature on the position of equilibrium and on $K$.\n(b) Explain using Le Chatelier's principle.\n(c) State whether adding more A at constant temperature changes $K$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Endothermic equilibrium", statement: "For endothermic reactions, raising T shifts equilibrium toward products and increases K." },
              { kind: "principle", name: "Le Chatelier", statement: "System shifts to oppose the disturbance." },
            ],
            steps: [
              { reasoning: "Endothermic reaction: raising T favors the forward (endothermic) direction, shifting toward C and D.", marks: 1, markCode: "B" },
              { reasoning: "$K$ increases because products are favored.", marks: 1, markCode: "B" },
              { reasoning: "Le Chatelier: the system absorbs the added heat by shifting in the endothermic direction (forward), producing more products.", marks: 1, markCode: "R" },
              { reasoning: "Adding A at constant T shifts position temporarily but does not change K, because K depends only on temperature.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) shifts toward products, K increases (b) system absorbs heat by moving forward (c) no change to K.",
            commonErrors: ["Applying the exothermic rule to an endothermic reaction.", "Thinking adding reactant changes K."],
            examinerNote: "B1 shift, B1 K, R1 Le Chatelier, B1 K unchanged.",
          },
        },
        {
          id: "chem11-u2-equilibrium-basics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The Haber process: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta H = -92\\ \\text{kJ/mol}$.",
          parts: [
            { label: "a", prompt: "State whether the forward reaction is exothermic or endothermic and explain what that means for heat flow.", marks: 2 },
            { label: "b", prompt: "Predict the effect on equilibrium position and K of: (i) increasing temperature, (ii) increasing pressure, (iii) adding a catalyst.", marks: 4 },
            { label: "c", prompt: "Explain why the Haber process uses a high pressure even though it costs energy.", marks: 2 },
            { label: "d", prompt: "Explain the compromise between temperature and yield in industrial ammonia production.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic reaction", statement: "$\\Delta H < 0$: the forward reaction releases heat to the surroundings." },
              { kind: "principle", name: "Le Chatelier", statement: "System shifts to oppose disturbances in concentration, pressure or temperature." },
              { kind: "principle", name: "K depends only on T", statement: "K is unchanged by pressure or catalyst." },
            ],
            steps: [
              { reasoning: "$\\Delta H = -92\\ \\text{kJ/mol} < 0$, so the forward reaction is exothermic and releases heat.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Exothermic means products have lower enthalpy; heat flows out of the system to surroundings during the forward reaction.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "(i) Increasing T shifts equilibrium toward reactants (fewer NH3) and decreases K, because the exothermic direction is disfavored by heat.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "(ii) Increasing pressure shifts toward the side with fewer gas moles: 4 mol gas reactants $\\to$ 2 mol gas products, so shifts right toward NH3; K unchanged.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "(iii) Catalyst does not change position or K; it only reaches equilibrium faster.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "High pressure favors the side with fewer gas molecules (products), increasing NH3 yield per pass, which is economically important even though compressing gases costs energy.", marks: 2, markCode: "R", part: "c" },
              { reasoning: "Higher T increases rate but shifts equilibrium away from NH3 (exothermic); lower T favors yield but slows the reaction. Industry uses a moderate T (~450°C) as a compromise plus a catalyst.", marks: 2, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) exothermic, releases heat (b) (i) T up: shifts left, K down; (ii) P up: shifts right, K same; (iii) catalyst: no change in position or K (c) high pressure favors fewer gas moles = more NH3 (d) moderate T balances rate vs yield.",
            commonErrors: ["Thinking high pressure decreases yield because it 'pushes' molecules; it favors fewer moles of gas.", "Forgetting catalyst doesn't change K."],
            examinerNote: "2+4+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem11-u2-kc-qprediction",
      title: "Kc expressions and Q predictions",
      skill: "Write Kc expressions for reactions, calculate Kc from equilibrium concentrations, and use Q to predict the direction of shift.",
      lesson: {
        sections: [
          {
            heading: "Writing Kc",
            body: "For a general reaction $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$:\n\n$$K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$\n\nRules:\n- Products on top, reactants on bottom, each raised to its stoichiometric coefficient.\n- Concentrations are equilibrium values in $\\text{mol dm}^{-3}$.\n- Pure solids and liquids are omitted (their 'concentration' is constant).\n- Kc has no units when the number of moles of gas is the same on both sides; otherwise it carries units.",
          },
          {
            heading: "Reaction quotient Q",
            body: "Q uses the same expression as Kc but with **current** concentrations, not equilibrium ones:\n\n- $Q < K_c$: reaction proceeds forward (toward products)\n- $Q > K_c$: reaction proceeds reverse (toward reactants)\n- $Q = K_c$: system is at equilibrium\n\nThis lets you predict which way a mixture will shift before equilibrium is reached.",
          },
          {
            heading: "Calculating Kc",
            body: "Given equilibrium concentrations, substitute into the Kc expression and evaluate. Always check that the concentrations used are the **equilibrium** values, not initial ones. For ICE tables (Initial, Change, Equilibrium), use the equilibrium row.",
          },
        ],
        keyFormulas: [
          { name: "Kc expression", statement: "$K_c = \\frac{[\\text{products}]^{\\text{coeff}}}{[\\text{reactants}]^{\\text{coeff}}}$" },
          { name: "Q vs K", statement: "$Q<K$: forward; $Q>K$: reverse; $Q=K$: equilibrium" },
        ],
        workedExample: {
          problem: "For $\\text{H}_2 + \\text{I}_2 \\rightleftharpoons 2\\text{HI}$, at equilibrium $[\\text{H}_2] = 0.10$, $[\\text{I}_2] = 0.20$, $[\\text{HI}] = 0.40\\ \\text{mol dm}^{-3}$. Calculate $K_c$.",
          solution: "$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0.40)^2}{(0.10)(0.20)} = \\frac{0.16}{0.02} = 8.0$.",
        },
      },
      questions: [
        {
          id: "chem11-u2-kc-qprediction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\text{N}_2O_4 \\rightleftharpoons 2\\text{NO}_2$, which is the correct Kc expression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_c = \\frac{[\\text{N}_2\\text{O}_4]}{[\\text{NO}_2]^2}$" },
              { id: "b", text: "$K_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]}$" },
              { id: "c", text: "$K_c = \\frac{[\\text{NO}_2]}{[\\text{N}_2\\text{O}_4]}$" },
              { id: "d", text: "$K_c = [\\text{NO}_2]^2[\\text{N}_2\\text{O}_4]$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Kc expression", statement: "Products over reactants, each raised to its coefficient." }],
            steps: [{ reasoning: "Product is $\\text{NO}_2$ with coefficient 2 (squared on top); reactant is $\\text{N}_2\\text{O}_4$ with coefficient 1 (bottom).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $K_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]}$",
            commonErrors: ["Inverting the fraction.", "Forgetting to square $[\\text{NO}_2]$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u2-kc-qprediction-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$, $K_c = 4.0$ at $25^\\circ\\text{C}$. A mixture has $[\\text{A}] = 0.50$, $[\\text{B}] = 0.50$, $[\\text{C}] = 0.25\\ \\text{mol dm}^{-3}$.\n\n(a) Calculate Q.\n(b) State whether the reaction will proceed forward or reverse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Q expression", statement: "$Q = \\frac{[\\text{C}]}{[\\text{A}][\\text{B}]}$ (same form as Kc)." },
              { kind: "principle", name: "Q vs K", statement: "$Q<K$: forward; $Q>K$: reverse." },
            ],
            steps: [
              { reasoning: "$Q = 0.25/(0.50 \\times 0.50) = 0.25/0.25 = 1.0$.", working: "Q=0.25/(0.50\\times0.50)=1.0", marks: 2, markCode: "M" },
              { reasoning: "$Q = 1.0 < K_c = 4.0$, so the reaction proceeds forward (toward products).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $Q = 1.0$ (b) forward",
            commonErrors: ["Comparing Q to 1 instead of to Kc.", "Inverting the Q expression."],
            examinerNote: "M2 Q calc, B1 direction.",
          },
        },
        {
          id: "chem11-u2-kc-qprediction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$, at equilibrium $[\\text{A}] = 0.30$, $[\\text{B}] = 0.20$, $[\\text{C}] = 0.10\\ \\text{mol dm}^{-3}$.\n\n(a) Write the Kc expression.\n(b) Calculate Kc.\n(c) All concentrations are suddenly doubled at the same instant. State whether Q is now greater than, less than, or equal to K, and predict the direction of any shift.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kc expression", statement: "$K_c = \\frac{[\\text{B}][\\text{C}]}{[\\text{A}]^2}$" },
              { kind: "principle", name: "Scaling of Q", statement: "Doubling all concentrations multiplies Q by $2^{(\\text{product order} - \\text{reactant order})}$; here both totals are 2, so Q is unchanged." },
            ],
            steps: [
              { reasoning: "Products B and C have coefficient 1 each (numerator); reactant A has coefficient 2 (squared in denominator): $K_c = [\\text{B}][\\text{C}]/[\\text{A}]^2$.", marks: 1, markCode: "B" },
              { reasoning: "$K_c = (0.20 \\times 0.10)/(0.30)^2 = 0.020/0.090 = 0.22$.", working: "(0.20\\times0.10)/(0.30)^2=0.22", marks: 2, markCode: "M" },
              { reasoning: "Doubling all concentrations multiplies the numerator by $2 \\times 2 = 4$ and the denominator by $2^2 = 4$, so $Q$ is unchanged and still equals $K_c$: the system stays at equilibrium with no shift.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $K_c = \\frac{[\\text{B}][\\text{C}]}{[\\text{A}]^2}$ (b) $K_c = 0.22$ (c) $Q = K_c$, no shift — because total order is the same on both sides.",
            commonErrors: ["Assuming any concentration change shifts equilibrium; equal total order means Q is unchanged.", "Forgetting to square [A] in the expression."],
            examinerNote: "B1 expression, M2 Kc value, R1 scaling/no-shift conclusion.",
          },
        },
        {
          id: "chem11-u2-kc-qprediction-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For the reaction $\\text{CO}(g) + 2\\text{H}_2(g) \\rightleftharpoons \\text{CH}_3\\text{OH}(g)$, a chemist measures equilibrium concentrations at $300^\\circ\\text{C}$: $[\\text{CO}] = 0.20$, $[\\text{H}_2] = 0.40$, $[\\text{CH}_3\\text{OH}] = 0.30\\ \\text{mol dm}^{-3}$.",
          parts: [
            { label: "a", prompt: "Write the Kc expression for this reaction.", marks: 2 },
            { label: "b", prompt: "Calculate the value of Kc.", marks: 3 },
            { label: "c", prompt: "A different mixture has $[\\text{CO}] = 0.10$, $[\\text{H}_2] = 0.20$, $[\\text{CH}_3\\text{OH}] = 0.30$. Calculate Q and state which way the reaction will shift.", marks: 3 },
            { label: "d", prompt: "Explain why Kc would change if the temperature were increased (the reaction is exothermic).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kc expression", statement: "$K_c = \\frac{[\\text{CH}_3\\text{OH}]}{[\\text{CO}][\\text{H}_2]^2}$" },
              { kind: "principle", name: "Q vs K", statement: "$Q<K$: forward; $Q>K$: reverse." },
              { kind: "principle", name: "T and K", statement: "K changes only with temperature; for exothermic reactions, higher T decreases K." },
            ],
            steps: [
              { reasoning: "Product CH3OH on top with coefficient 1; reactants CO (coeff 1) and H2 (coeff 2, squared) on bottom.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "The H2 exponent of 2 must be applied correctly in the denominator.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$K_c = 0.30/(0.20 \\times (0.40)^2) = 0.30/(0.20 \\times 0.16) = 0.30/0.032 = 9.4$.", working: "0.30/(0.20\\times0.16)=9.4", marks: 3, markCode: "M", part: "b" },
              { reasoning: "$Q = 0.30/(0.10 \\times (0.20)^2) = 0.30/(0.10 \\times 0.04) = 0.30/0.0040 = 75$.", working: "0.30/(0.10\\times0.04)=75", marks: 2, markCode: "M", part: "c" },
              { reasoning: "$Q = 75 > K_c = 9.4$, so the reaction shifts in reverse (toward CO and H2).", marks: 1, markCode: "R", part: "c" },
              { reasoning: "The reaction is exothermic; increasing temperature shifts equilibrium toward reactants and decreases K.", marks: 2, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) $K_c = \\frac{[\\text{CH}_3\\text{OH}]}{[\\text{CO}][\\text{H}_2]^2}$ (b) $K_c = 9.4$ (c) $Q = 75 > K_c$, shifts reverse (d) exothermic: higher T decreases K.",
            commonErrors: ["Forgetting to square [H2].", "Comparing Q to 1 instead of Kc."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
  ],
};