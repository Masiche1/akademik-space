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
              { id: "a", text: "Decreasing temperature" },
              { id: "b", text: "Increasing concentration" },
              { id: "c", text: "Adding a catalyst" },
              { id: "d", text: "Increasing surface area" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$3$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "a",
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
