import type { Lesson } from "../../../types.ts";

export const lesson413: Lesson = {
  id: "cial-c-u4-lesson-4-3",
  code: "4-3",
  title: "Reaction kinetics",
  goal: "I CAN explain rate factors, determine orders and write rate equations.",
  standards: ["9701 4.3: reaction kinetics"],
  vocabulary: [
    {
      term: "Rate of reaction",
      definition: "Change in concentration of reactant/product per unit time.",
    },
    {
      term: "Rate equation",
      definition: "$\\text{rate} = k[A]^m[B]^n$ where $k$ is rate constant.",
    },
    {
      term: "Order",
      definition: "Power to which concentration is raised; sum = overall order.",
    },
    {
      term: "Activation energy",
      definition: "Minimum energy for reaction to occur ($E_a$).",
    },
    {
      term: "Catalyst",
      definition: "Lowers $E_a$ by providing alternative pathway.",
    },
    {
      term: "Collision theory",
      definition: "Reactions occur when particles collide with sufficient energy and correct orientation.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u4-rate-factors",
      title: "Rate factors and collision theory",
      skill: "Explain how concentration, temperature, surface area and catalysts affect rate.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "Rate depends on collision frequency and energy. More collisions or higher-energy collisions $\\to$ faster rate. Factors: concentration/pressure (more particles per volume), temperature (more particles exceed $E_a$), surface area (more contact), catalyst (lower $E_a$).",
          },
          {
            heading: "Temperature effect",
            body: "Rate roughly doubles per 10 °C rise — small temperature changes greatly increase the fraction of particles with $E > E_a$. Arrhenius equation: $k = Ae^{-E_a/RT}$.",
          },
          {
            heading: "Catalysts",
            body: "Provide alternative pathway with lower $E_a$ — more collisions succeed. Unchanged at end, not consumed. Homogeneous (same phase) or heterogeneous (surface, e.g. finely divided Ni).",
          },
        ],
        keyFormulas: [
          {
            name: "Rate factors",
            statement:
              "Conc $\\uparrow$, temp $\\uparrow$, surface $\\uparrow$, catalyst $\\downarrow E_a$ $\\Rightarrow$ rate $\\uparrow$.",
          },
          {
            name: "Arrhenius",
            statement: "$k = Ae^{-E_a/RT}$",
          },
        ],
        workedExample: {
          problem: "Why does powdered CaCO$_3$ react faster with acid than lumps?",
          solution: "Powder has larger surface area — more particles exposed to acid collisions per second.",
        },
      },
      questions: [
        {
          id: "cial-c-u4-kf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor does NOT increase reaction rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing concentration" },
              { id: "b", text: "Decreasing temperature" },
              { id: "c", text: "Increasing surface area" },
              { id: "d", text: "Adding a catalyst" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement: "Lower temp = fewer energetic collisions = slower rate.",
              },
            ],
            steps: [
              {
                reasoning: "Decreasing temperature slows the rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decreasing temperature",
          },
        },
        {
          id: "cial-c-u4-kf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing temperature increases reaction rate more than proportionally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maxwell distribution",
                statement:
                  "Small temp rise greatly increases fraction of particles exceeding $E_a$.",
              },
            ],
            steps: [
              {
                reasoning: "Higher T = faster particles = more frequent collisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also more particles have $E > E_a$ — exponential effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both effects multiply $\\to$ rate rises steeply.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "More collisions AND more exceed Ea",
          },
        },
        {
          id: "cial-c-u4-kf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a catalyst increase rate without being consumed? Relate to activation energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalysis",
                statement: "Alternative pathway with lower $E_a$.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst provides different mechanism/pathway.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This pathway has lower activation energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More collisions have enough energy to react.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Catalyst regenerated unchanged at end of reaction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Lower Ea pathway, regenerated",
          },
        },
        {
          id: "cial-c-u4-kf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Rate factors.",
          parts: [
            {
              label: "a",
              prompt: "State four factors affecting reaction rate.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain how temperature affects rate using collision theory.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why is a powdered solid faster than lumps?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement: "Rate $\\propto$ collision frequency $\\times$ fraction exceeding $E_a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Concentration, temperature, surface area, catalyst (any order).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Four factors listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Each factor named correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Bonus: pressure for gases.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Higher T = faster-moving particles.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "More frequent collisions per second.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Larger fraction exceed $E_a$ — exponential effect.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Powder has larger surface area exposed to reactant.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "More successful collisions per second.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) 4 factors (b) freq+energy (c) surface area",
          },
        },
        {
          id: "cial-c-u4-kf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does a catalyst increase the rate of a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By providing an alternative pathway with lower activation energy" },
              { id: "b", text: "By increasing the concentration of reactants" },
              { id: "c", text: "By shifting the equilibrium to the right" },
              { id: "d", text: "By increasing the temperature of the reactants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalysis",
                statement: "Lower $E_a$ pathway; catalyst unchanged at end.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst lowers $E_a$ so more collisions succeed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lower activation energy pathway",
          },
        },
        {
          id: "cial-c-u4-kf-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does a finely divided solid react faster than a single large lump?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The particles move faster" },
              { id: "b", text: "Greater surface area exposed to the other reactant" },
              { id: "c", text: "The concentration is higher" },
              { id: "d", text: "The activation energy is lower" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement: "More surface area = more collisions per second.",
              },
            ],
            steps: [
              {
                reasoning: "Finely divided solid has more surface area in contact with reactant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Greater surface area",
          },
        },
        {
          id: "cial-c-u4-kf-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "The rate of a reaction doubles for every 10 °C rise. At 20 °C the rate is $0.020$ mol dm$^{-3}$ s$^{-1}$. Estimate the rate at 30 °C.",
          response: {
            type: "numeric",
            parts: [{ label: "rate", answer: 0.04, unit: "mol dm-3 s-1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature effect",
                statement: "Rate roughly doubles per 10 °C.",
              },
            ],
            steps: [
              {
                reasoning: "One 10 °C rise ($\Rightarrow$ rate doubles.)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$0.020 \\times 2 = 0.040$ mol dm$^{-3}$ s$^{-1}$.",
                working: "0.020 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct estimated value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.040$ mol dm$^{-3}$ s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-kf-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a heterogeneous catalyst increases reaction rate, using the example of nickel in hydrogenation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heterogeneous catalysis",
                statement: "Surface provides adsorption site lowering $E_a$.",
              },
            ],
            steps: [
              {
                reasoning: "Reactants adsorb onto the surface of the solid catalyst.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adsorption weakens bonds / holds molecules in favourable orientation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower activation energy on the surface pathway.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ni unchanged at end — not consumed.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Adsorption on Ni surface lowers Ea",
          },
        },
        {
          id: "cial-c-u4-kf-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does a small increase in temperature cause a large increase in rate, according to the Maxwell distribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Collision frequency becomes constant" },
              { id: "b", text: "All particles move twice as fast" },
              { id: "c", text: "The fraction of particles with energy above $E_a$ increases sharply" },
              { id: "d", text: "The activation energy decreases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maxwell distribution",
                statement: "Small T rise greatly increases fraction exceeding $E_a$.",
              },
            ],
            steps: [
              {
                reasoning: "Exponential tail of energy distribution — effective collisions rise steeply.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fraction exceeding Ea rises sharply",
          },
        },
        {
          id: "cial-c-u4-kf-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The rate of a reaction is $0.020$ mol dm$^{-3}$ s$^{-1}$ at 20 °C and $0.040$ at 30 °C. Estimate the rate at 40 °C, assuming the rate doubles every 10 °C.",
          response: {
            type: "numeric",
            parts: [{ label: "rate", answer: 0.08, unit: "mol dm-3 s-1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature effect",
                statement: "Rate doubles per 10 °C rise.",
              },
            ],
            steps: [
              {
                reasoning: "From 20→30 °C rate doubles to $0.040$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "From 30→40 °C doubles again: $0.040 \\times 2$.",
                working: "0.040 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.080$ mol dm$^{-3}$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.080$ mol dm$^{-3}$ s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-kf-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Rate factors.",
          parts: [
            {
              label: "a",
              prompt: "State three conditions needed for a successful collision.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why increasing the pressure of a gaseous reactant increases the rate.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why is a catalyst described as 'heterogeneous' when it is a solid and reactants are gases?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement: "Collision frequency $\Rightarrow$ rate; energy/orientation determine success.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Particles must collide.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "With sufficient energy $\geq E_a$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "In the correct orientation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Higher pressure = more particles per unit volume.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "More frequent collisions per second.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Rate increases.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Catalyst and reactants are in different phases (solid vs gas).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reaction occurs on the catalyst surface.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Hence 'hetero' = different phases.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) collide, Ea, orientation (b) more collisions (c) different phases",
          },
        },
        {
          id: "cial-c-u4-kf-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to collision theory, a successful collision requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sufficient energy and correct orientation" },
              { id: "b", text: "A catalyst to be present" },
              { id: "c", text: "Only a high temperature" },
              { id: "d", text: "Equal masses of reactants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement: "Energy $\geq E_a$ plus correct orientation.",
              },
            ],
            steps: [
              {
                reasoning: "Both energy and orientation are required.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Energy and orientation",
          },
        },
        {
          id: "cial-c-u4-kf-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain, using collision theory, why increasing the concentration of a reactant in solution increases the rate of reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement: "Higher concentration = more particles per volume = more collisions.",
              },
            ],
            steps: [
              {
                reasoning: "More particles per unit volume at higher concentration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collisions occur more frequently per second.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More successful collisions (assuming same energy/orientation probability).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore rate increases.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "More frequent collisions per second",
          },
        },
        {
          id: "cial-c-u4-kf-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens to a catalyst at the end of a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is consumed" },
              { id: "b", text: "Its mass always decreases" },
              { id: "c", text: "It becomes a product" },
              { id: "d", text: "It is regenerated unchanged" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalysis",
                statement: "Catalyst unchanged at end of reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst is regenerated — not consumed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Regenerated unchanged",
          },
        },
        {
          id: "cial-c-u4-kf-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "The concentration of a reactant falls from $0.40$ mol dm$^{-3}$ to $0.10$ mol dm$^{-3}$ in $50$ s. Calculate the average rate of reaction.",
          response: {
            type: "numeric",
            parts: [{ label: "rate", answer: 0.006, unit: "mol dm-3 s-1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rate",
                statement: "Rate = $\\frac{-\\Delta[A]}{\\Delta t}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta[A] = 0.40 - 0.10 = 0.30$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate $= \\frac{0.30}{50}$.",
                working: "\\frac{0.30}{50}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.0060$ mol dm$^{-3}$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.006$ mol dm$^{-3}$ s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-kf-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Collision theory and rate factors.",
          parts: [
            {
              label: "a",
              prompt: "State two ways of increasing the frequency of collisions between particles.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why increasing temperature increases the rate more than would be expected from collision frequency alone.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What is meant by activation energy?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "How does a catalyst affect activation energy and the rate?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement: "Rate $\\propto$ collision frequency $\\times$ fraction exceeding $E_a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Increase concentration/pressure (more particles per volume).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Increase temperature (faster particles) or surface area.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Higher T gives more frequent collisions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Also a much larger fraction of particles exceed $E_a$ (Maxwell tail).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The two effects multiply — rate rises steeply.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Minimum energy needed for a successful collision.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Below $E_a$ collisions do not react.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Provides pathway with lower $E_a$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "More collisions succeed $\\to$ rate increases; catalyst unchanged.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) conc/temp/surface (b) freq+Ea fraction (c) min energy (d) lowers Ea",
          },
        },
      ],
    },
    {
      id: "cial-c-u4-rate-equations",
      title: "Rate equations and orders",
      skill: "Determine orders from experimental data and write rate equations.",
      lesson: {
        sections: [
          {
            heading: "Determining order",
            body: "Vary one concentration at a time, keep others constant. If rate doubles when [A] doubles $\\to$ first order in A. If rate quadruples $\\to$ second order. If rate unchanged $\\to$ zero order. Overall order = sum of powers.",
          },
          {
            heading: "Rate equations",
            body: "$\\text{rate} = k[A]^m[B]^n$. $k$ = rate constant (units depend on order). Rate constant only changes with temperature — concentrations do not affect $k$.",
          },
          {
            heading: "Half-life",
            body: "First order: constant half-life $t_{1/2}=\\frac{\\ln 2}{k}$. Zero order: linear decrease. Second order: $t_{1/2}$ doubles each time. Half-life method identifies order from concentration–time data.",
          },
        ],
        keyFormulas: [
          {
            name: "Rate equation",
            statement: "$\\text{rate}=k[A]^m[B]^n$",
          },
          {
            name: "First-order half-life",
            statement: "$t_{1/2}=\\frac{\\ln 2}{k}$ — constant",
          },
        ],
        workedExample: {
          problem: "When [A] doubles, rate quadruples; when [B] doubles, rate doubles. Find orders and write the rate equation.",
          solution:
            "Second order in A ($2^2=4$), first order in B. $\\text{rate}=k[A]^2[B]$, overall order 3.",
        },
      },
      questions: [
        {
          id: "cial-c-u4-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If rate = $k[A]^2[B]$, what is the overall order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Overall order",
                statement: "Sum of powers = 2+1 = 3.",
              },
            ],
            steps: [
              {
                reasoning: "Overall order = $2+1=3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cial-c-u4-re-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "When [A] is doubled (B constant), rate stays the same. What is the order in A?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zero order",
                statement: "Rate independent of concentration = order 0.",
              },
            ],
            steps: [
              {
                reasoning: "Rate unchanged when [A] doubles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only possible if power of [A] is 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order in A = 0 (zero order).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Order 0",
          },
        },
        {
          id: "cial-c-u4-re-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For a first-order reaction, $k=0.015$ s$^{-1}$. Calculate the half-life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First-order half-life",
                statement: "$t_{1/2}=\\frac{\\ln 2}{k}$.",
              },
            ],
            steps: [
              {
                reasoning: "$t_{1/2}=\\frac{0.693}{0.015}$.",
                working: "\\frac{\\ln 2}{0.015}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=46.2$ s.",
                working: "46.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Units: seconds (since $k$ in s$^{-1}$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$46.2$ s",
          },
        },
        {
          id: "cial-c-u4-re-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Rate equations.",
          parts: [
            {
              label: "a",
              prompt: "Doubling [A] doubles the rate. What is the order in A?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Doubling [B] quadruples the rate. What is the order in B?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Write the rate equation for rate = k[A][B]^2.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What is the overall order and what are the units of k if concentrations are in mol dm$^{-3}$ and time in s?",
              marks: 3,
            },
            {
              label: "e",
              prompt: "How does temperature affect k?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rate equations",
                statement: "Order from rate-concentration experiments; k depends on T only.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "First order in A.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Second order in B ($2^2=4$).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "rate $= k[A]^1[B]^2$ — powers written explicitly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct equation stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Overall order = 1+2 = 3.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Units of k: dm$^6$ mol$^{-2}$ s$^{-1}$ for 3rd order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct units stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "k increases with temperature (Arrhenius).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Concentrations do NOT affect k.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) 1st (b) 2nd (c) k[A][B]2 (d) order 3, dm6mol-2s-1 (e) k rises with T",
          },
        },
        {
          id: "cial-c-u4-re-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the rate equation $\\text{rate} = k[A][B]$, if both [A] and [B] are doubled, the rate is multiplied by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ (no change)" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate equation",
                statement: "Rate is proportional to $[A]^1[B]^1$; doubling both gives $2 \\times 2 = 4$.",
              },
            ],
            steps: [
              {
                reasoning: "New rate $= k(2[A])(2[B]) = 4k[A][B]$ — factor of 4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u4-re-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the units of the rate constant $k$ for a first-order reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "s$^{-1}$" },
              { id: "b", text: "mol dm$^{-3}$ s$^{-1}$" },
              { id: "c", text: "dm$^3$ mol$^{-1}$ s$^{-1}$" },
              { id: "d", text: "dm$^6$ mol$^{-2}$ s$^{-1}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Units of k",
                statement: "For first order, rate = k[A] so k has units of rate/concentration = s$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "Overall order 1 $\\Rightarrow$ $k$ units are s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-re-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A reaction is zero order with respect to reactant A. If [A] is doubled, what happens to the rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It quadruples" },
              { id: "b", text: "It doubles" },
              { id: "c", text: "It stays the same" },
              { id: "d", text: "It halves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zero order",
                statement: "Rate independent of [A]; [A]$^0 = 1$.",
              },
            ],
            steps: [
              {
                reasoning: "Zero order means rate does not depend on [A].",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rate stays the same",
          },
        },
        {
          id: "cial-c-u4-re-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $\\text{rate} = k[A]^2$, if [A] is halved, the rate becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Half of the original rate" },
              { id: "b", text: "Unchanged" },
              { id: "c", text: "One quarter of the original rate" },
              { id: "d", text: "Double the original rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second order",
                statement: "rate $\\propto [A]^2$; $(\\tfrac{1}{2})^2 = \\tfrac{1}{4}$.",
              },
            ],
            steps: [
              {
                reasoning: "Halving [A] gives factor $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "One quarter",
          },
        },
        {
          id: "cial-c-u4-re-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A reaction has rate equation $\\text{rate} = k[A]^2[B]$. What are the units of $k$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "s$^{-1}$" },
              { id: "b", text: "dm$^3$ mol$^{-1}$ s$^{-1}$" },
              { id: "c", text: "dm$^9$ mol$^{-3}$ s$^{-1}$" },
              { id: "d", text: "dm$^6$ mol$^{-2}$ s$^{-1}$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Units of k",
                statement: "Overall order = 3 $\\Rightarrow$ k units $= \\frac{\\text{mol dm}^{-3}\\text{ s}^{-1}}{(\\text{mol dm}^{-3})^3} = \\text{dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "Overall order 3 gives dm$^6$ mol$^{-2}$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "dm$^6$ mol$^{-2}$ s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-re-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $\\text{rate} = k[A]^2$, $k = 0.40$ dm$^3$ mol$^{-1}$ s$^{-1}$ and [A] $= 0.50$ mol dm$^{-3}$. Calculate the rate of reaction.",
          response: {
            type: "numeric",
            parts: [{ label: "rate", answer: 0.1, unit: "mol dm-3 s-1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate equation",
                statement: "Substitute values into $\\text{rate} = k[A]^2$.",
              },
            ],
            steps: [
              {
                reasoning: "rate $= 0.40 \\times (0.50)^2$.",
                working: "0.40 \\times (0.50)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.40 \\times 0.25 = 0.10$ mol dm$^{-3}$ s$^{-1}$.",
                working: "0.40 \\times 0.25 = 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.10$ mol dm$^{-3}$ s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-re-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A first-order reaction has $k = 0.025$ s$^{-1}$. Calculate its half-life.",
          response: {
            type: "numeric",
            parts: [{ label: "half-life", answer: 27.7, unit: "s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First-order half-life",
                statement: "$t_{1/2} = \\frac{\\ln 2}{k}$.",
              },
            ],
            steps: [
              {
                reasoning: "$t_{1/2} = \\frac{0.693}{0.025}$.",
                working: "\\frac{0.693}{0.025}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 27.7$ s (accept 27.72).",
                working: "27.7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$27.7$ s",
          },
        },
        {
          id: "cial-c-u4-re-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $\\text{rate} = k[A][B]^2$, $k = 0.020$ dm$^6$ mol$^{-2}$ s$^{-1}$, [A] $= 0.10$ mol dm$^{-3}$ and [B] $= 0.20$ mol dm$^{-3}$. Calculate the rate of reaction.",
          response: {
            type: "numeric",
            parts: [{ label: "rate", answer: 0.00008, unit: "mol dm-3 s-1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate equation",
                statement: "rate $= k[A]^1[B]^2$ — powers must be applied correctly.",
              },
            ],
            steps: [
              {
                reasoning: "$[B]^2 = (0.20)^2 = 0.040$ mol$^2$ dm$^{-6}$.",
                working: "(0.20)^2 = 0.040",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "rate $= 0.020 \\times 0.10 \\times 0.040$.",
                working: "0.020 \\times 0.10 \\times 0.040",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 8.0 \\times 10^{-5}$ mol dm$^{-3}$ s$^{-1}$.",
                working: "8.0 \\times 10^{-5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8.0 \\times 10^{-5}$ mol dm$^{-3}$ s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-re-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A first-order reaction has a half-life of 20 s. Calculate the value of the rate constant $k$, including units.",
          response: {
            type: "numeric",
            parts: [{ label: "k", answer: 0.0347, unit: "s-1" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First-order half-life",
                statement: "$t_{1/2} = \\frac{\\ln 2}{k}$, so $k = \\frac{\\ln 2}{t_{1/2}}$.",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange: $k = \\frac{\\ln 2}{t_{1/2}} = \\frac{0.693}{20}$.",
                working: "\\frac{0.693}{20}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.0347$ s$^{-1}$ (accept 0.03465).",
                working: "0.0347",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Units of k for first order are s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.0347$ s$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-re-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you would determine the order of reaction with respect to reactant A experimentally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Determining order",
                statement: "Vary [A] only; keep all other concentrations and temperature constant; compare rates.",
              },
            ],
            steps: [
              {
                reasoning: "Carry out experiments changing only [A] (e.g. double it), keeping [B] and temperature constant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measure the initial rate for each experiment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deduce order from the rate factor: rate doubles for [A] doubling $\\Rightarrow$ first order; quadruples $\\Rightarrow$ second; unchanged $\\Rightarrow$ zero.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vary [A] alone, measure rate, compare factors",
          },
        },
        {
          id: "cial-c-u4-re-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Rate equations.",
          parts: [
            {
              label: "a",
              prompt: "State what is meant by the overall order of reaction.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "A reaction is zero order in A and first order in B. Write its rate equation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What is the overall order of this reaction and what are the units of k (concentrations in mol dm$^{-3}$, time in s)?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain how increasing the temperature affects k and hence the rate of reaction.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rate equations",
                statement: "Overall order = sum of powers; k depends on temperature only.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Overall order is the sum of the powers to which all reactant concentrations are raised.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "It describes how rate depends on concentration overall.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Zero order in A means $[A]^0 = 1$ so A does not appear.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "rate $= k[B]$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Overall order = 0 + 1 = 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Units of k = s$^{-1}$ for first order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "k increases with temperature (Arrhenius behaviour).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "More particles have energy above $E_a$, so a greater fraction of collisions are successful.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Rate therefore increases steeply with temperature.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) sum of powers (b) rate=k[B] (c) order 1, s-1 (d) k and rate rise with T",
          },
        },
        {
          id: "cial-c-u4-re-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a first-order reaction has a constant half-life, using the rate equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First-order half-life",
                statement: "$t_{1/2} = \\frac{\\ln 2}{k}$ — independent of initial concentration.",
              },
            ],
            steps: [
              {
                reasoning: "For first order, rate $= k[A]$ — rate is proportional to concentration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The same fraction of reactant reacts in each equal time interval.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t_{1/2} = \\frac{\\ln 2}{k}$ does not contain $[A]$, so it is the same whatever the starting concentration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At fixed temperature k is constant, so half-life is constant.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "t1/2 = ln2/k independent of [A]",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u4-kinetics-notes",
      title: "Reaction kinetics — revision notes",
      summary:
        "Rate factors, collision theory, rate equations and half-life.",
      sections: [
        {
          heading: "Rate factors",
          body: "Rate $\\propto$ collision frequency $\\times$ fraction exceeding $E_a$. Increase rate: higher concentration/pressure, temperature, surface area, catalyst (lowers $E_a$). Temperature has exponential effect — rate roughly doubles per 10 °C.",
        },
        {
          heading: "Rate equations",
          body: "$\\text{rate}=k[A]^m[B]^n$; overall order = $m+n$. Determine order by varying one concentration at a time. First order has constant $t_{1/2}=\\frac{\\ln2}{k}$. $k$ depends only on temperature.",
        },
        {
          heading: "Exam checklist",
          body: "State the experimental method when determining order (change one variable). For half-life questions identify order first — constant half-life means first order.",
        },
      ],
    },
  ],
};
