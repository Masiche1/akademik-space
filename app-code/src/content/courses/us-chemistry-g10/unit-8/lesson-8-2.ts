import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "chem10-u8-lesson-8-2",
  code: "8-2",
  title: "Reaction Rates and Kinetics",
  goal: "I CAN explain factors affecting reaction rate and interpret rate data.",
  standards: [
    "HS-PS1-5",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Reaction rate",
      definition: "Speed at which reactants are consumed or products formed.",
    },
    {
      term: "Collision theory",
      definition:
        "Reactions occur when particles collide with sufficient energy and orientation.",
    },
    {
      term: "Activation energy",
      definition: "Minimum energy needed for reaction to occur.",
    },
    {
      term: "Catalyst",
      definition: "Substance that speeds reaction without being consumed.",
    },
    {
      term: "Rate law",
      definition: "Mathematical relationship between rate and concentrations.",
    },
    {
      term: "Order of reaction",
      definition: "Dependence of rate on concentration.",
    },
    {
      term: "Rate constant",
      definition: "k in rate law; temperature dependent.",
    },
  ],
  concepts: [
    {
      id: "chem10-u8-rate-factors",
      title: "Factors affecting rate",
      skill:
        "Explain how concentration, temperature, surface area, and catalysts affect rate.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "Reactions need particles to collide with:\n- **Sufficient energy** (≥ activation energy).\n- **Correct orientation**.\n\nMore collisions → faster rate.",
          },
          {
            heading: "Factors",
            body: "- **Concentration**: more particles → more collisions → faster.\n- **Temperature**: more kinetic energy → more effective collisions.\n- **Surface area**: more exposed surface → more collisions.\n- **Catalyst**: lowers activation energy → faster.",
          },
        ],
        keyFormulas: [
          {
            name: "Collision theory",
            statement: "Energy + orientation + frequency = rate",
          },
          {
            name: "Activation energy",
            statement: "Minimum energy for reaction",
          },
          { name: "Catalyst", statement: "Lowers Ea without being consumed" },
        ],
        workedExample: {
          problem: "Why does crushing a solid speed its reaction?",
          solution: "Increases surface area → more particle collisions.",
        },
      },
      questions: [
        {
          id: "chem10-u8-rate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is activation energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy released" },
              { id: "b", text: "Minimum energy for reaction" },
              { id: "c", text: "Total energy" },
              { id: "d", text: "Heat energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Activation energy",
                statement: "Minimum energy barrier.",
              },
            ],
            steps: [
              {
                reasoning: "Ea = energy needed to start reaction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Minimum energy for reaction",
            commonErrors: ["Confusing with enthalpy."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u8-rate-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a catalyst speed a reaction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Catalyst",
                statement: "Lowers activation energy.",
              },
            ],
            steps: [
              {
                reasoning: "Provides alternative pathway.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Lower Ea → more particles have enough energy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Not consumed → unchanged at end.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Lowers Ea → faster reaction.",
            commonErrors: ["Thinking catalyst is consumed."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u8-rate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing temperature increases reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature effect",
                statement: "More kinetic energy → more effective collisions.",
              },
            ],
            steps: [
              {
                reasoning: "Higher T → particles move faster.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "More collisions per second.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "More particles exceed Ea → effective collisions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Small T increase → large rate increase.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "More energy → more effective collisions.",
            commonErrors: ["Not mentioning Ea."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u8-rate-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare reaction rates for:",
          parts: [
            { label: "a", prompt: "Powdered vs lump CaCO₃ in HCl?", marks: 3 },
            {
              label: "b",
              prompt: "Hot vs cold water in dissolving?",
              marks: 2,
            },
            { label: "c", prompt: "With vs without catalyst?", marks: 3 },
            { label: "d", prompt: "Concentrated vs dilute acid?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rate factors",
                statement: "Surface, T, catalyst, concentration.",
              },
            ],
            steps: [
              {
                reasoning: "Powder faster — more surface area.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Hot faster — more kinetic energy.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Catalyst faster — lowers Ea.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Concentrated faster — more particles.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) powder (b) hot (c) catalyst (d) concentrated.",
            commonErrors: ["Not explaining mechanism."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u8-rate-law",
      title: "Rate laws",
      skill: "Write and interpret rate laws for chemical reactions.",
      lesson: {
        sections: [
          {
            heading: "Rate law",
            body: "$$\text{Rate} = k[A]^m[B]^n$$\n\n- m, n = reaction orders.\n- k = rate constant.\n- Overall order = m + n.",
          },
          {
            heading: "Determining order",
            body: "Change one concentration, observe rate change:\n- Double [A], rate doubles → first order in A.\n- Double [A], rate quadruples → second order in A.\n- No change → zero order in A.",
          },
        ],
        keyFormulas: [
          { name: "Rate law", statement: "$Rate = k[A]^m[B]^n$" },
          { name: "Overall order", statement: "$m + n$" },
          {
            name: "Order determination",
            statement: "Rate change vs concentration change",
          },
        ],
        workedExample: {
          problem: "Rate = k[A]²[B]. What's the order in A? Overall order?",
          solution: "Second order in A; overall order = 3.",
        },
      },
      questions: [
        {
          id: "chem10-u8-ratelaw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In rate = k[A]²[B], what is the order in A?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rate law",
                statement: "Exponent = order.",
              },
            ],
            steps: [
              {
                reasoning: "Exponent of A is 2 → second order.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 2",
            commonErrors: ["Reading coefficient not exponent."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem10-u8-ratelaw-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rate = k[A][B]². What's the overall order?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Overall order",
                statement: "Sum of exponents.",
              },
            ],
            steps: [
              {
                reasoning: "Order in A = 1, in B = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Overall = 1 + 2 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Third order overall.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 (third order).",
            commonErrors: ["Adding coefficients not exponents."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u8-ratelaw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Doubling [A] quadruples rate; doubling [B] doubles rate. What's the rate law?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Order determination",
                statement: "Rate change reveals order.",
              },
            ],
            steps: [
              {
                reasoning: "[A] doubled → rate ×4 → second order in A.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "[B] doubled → rate ×2 → first order in B.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Rate = k[A]²[B].", marks: 1, markCode: "M" },
              { reasoning: "Overall order = 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rate = k[A]²[B].",
            commonErrors: ["Wrong exponent assignment."],
            examinerNote: "R2, M1, A1.",
          },
        },
        {
          id: "chem10-u8-ratelaw-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For reaction A + B → products, experimental data:",
          parts: [
            {
              label: "a",
              prompt: "Exp 1: [A]=0.1, [B]=0.1, rate=0.01",
              marks: 0,
            },
            {
              label: "b",
              prompt: "Exp 2: [A]=0.2, [B]=0.1, rate=0.04",
              marks: 0,
            },
            {
              label: "c",
              prompt: "Exp 3: [A]=0.1, [B]=0.2, rate=0.02",
              marks: 0,
            },
            { label: "d", prompt: "Determine rate law.", marks: 5 },
            { label: "e", prompt: "Find k.", marks: 3 },
            {
              label: "f",
              prompt: "Predict rate at [A]=0.3, [B]=0.4.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rate law determination",
                statement: "Compare experiments.",
              },
            ],
            steps: [
              {
                reasoning: "Exp1→2: [A] doubles, rate ×4 → order 2 in A.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Exp1→3: [B] doubles, rate ×2 → order 1 in B.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Rate = k[A]²[B].",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "k = 0.01/(0.1² × 0.1) = 0.01/0.001 = 10.",
                marks: 2,
                markCode: "M",
                part: "e",
              },
              {
                reasoning: "Answer: k = 10.",
                marks: 1,
                markCode: "A",
                part: "e",
              },
              {
                reasoning: "Rate = 10 × 0.3² × 0.4 = 10 × 0.09 × 0.4 = 0.36.",
                marks: 1,
                markCode: "M",
                part: "f",
              },
              {
                reasoning: "Answer: 0.36.",
                marks: 1,
                markCode: "A",
                part: "f",
              },
            ],
            finalAnswer: "(d) k[A]²[B] (e) k=10 (f) 0.36.",
            commonErrors: ["Wrong order determination."],
            examinerNote: "Data parts informational; 5+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u8-half-life-reaction",
      title: "Reaction progress and half-life",
      skill: "Interpret reaction progress curves and half-life of reactants.",
      lesson: {
        sections: [
          {
            heading: "Reaction progress",
            body: "Plot concentration vs time:\n- Steep initial slope = fast rate.\n- Curve flattens as reactants deplete.\n- Rate decreases over time.",
          },
          {
            heading: "Half-life of reactant",
            body: "Time for [reactant] to halve. For first-order reactions, half-life is constant.\n\n$[A] = [A]_0 e^{-kt}$ — exponential decay.",
          },
        ],
        keyFormulas: [
          { name: "Rate vs time", statement: "Decreases as reactants deplete" },
          { name: "Half-life", statement: "Constant for first-order" },
          { name: "First-order decay", statement: "$[A] = [A]_0 e^{-kt}$" },
        ],
        workedExample: {
          problem:
            "Reactant starts at 0.8 M, halves to 0.4 M in 10 min. What's [A] at 30 min?",
          solution: "3 half-lives → 0.8 × (1/2)³ = 0.1 M.",
        },
      },
      questions: [
        {
          id: "chem10-u8-progress-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does reaction rate change over time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Constant" },
              { id: "b", text: "Increases" },
              { id: "c", text: "Decreases as reactants deplete" },
              { id: "d", text: "Becomes zero immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rate vs time",
                statement: "Decreases as [reactant] drops.",
              },
            ],
            steps: [
              {
                reasoning: "Fewer reactant molecules → fewer collisions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Decreases as reactants deplete",
            commonErrors: ["Thinking rate is constant."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem10-u8-progress-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A reactant has half-life 20 min. Starting at 1.0 M, what's [A] at 60 min?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "$[A] = [A]_0(1/2)^n$",
              },
            ],
            steps: [
              {
                reasoning: "n = 60/20 = 3 half-lives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1.0 \\times (1/2)^3 = 0.125$ M.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 0.125 M.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.125 M.",
            commonErrors: ["Wrong half-life count."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u8-progress-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why first-order reactions have constant half-life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "First-order",
                statement: "Rate ∝ [A] → constant half-life.",
              },
            ],
            steps: [
              {
                reasoning: "Rate = k[A] — proportional to concentration.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "As [A] drops, rate drops proportionally.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Time to halve remains constant.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: radioactive decay follows same pattern.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rate ∝ [A] → constant half-life.",
            commonErrors: ["Not linking to rate law."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u8-progress-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Drug elimination follows first-order kinetics (t½ = 6 hr).",
          parts: [
            {
              label: "a",
              prompt: "If dose = 400 mg, how much after 18 hr?",
              marks: 3,
            },
            { label: "b", prompt: "How long until 50 mg remains?", marks: 4 },
            {
              label: "c",
              prompt: "Why is first-order important for dosing?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "$N = N_0(1/2)^n$",
              },
            ],
            steps: [
              {
                reasoning: "n = 18/6 = 3; $400 \\times (1/2)^3 = 50$ mg.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "50/400 = 1/8 = (1/2)³ → n=3.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Time = 3 × 6 = 18 hr.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Predictable elimination → consistent dosing intervals.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer: "(a) 50 mg (b) 18 hr (c) predictable dosing.",
            commonErrors: ["Wrong half-life calculation."],
            examinerNote: "3+4+3 = 10.",
          },
        },
      ],
    },
  ],
};
