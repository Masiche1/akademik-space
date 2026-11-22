import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "chemhl-u1-lesson-3-3",
  code: "3-3",
  title: "Rate Laws and Reaction Mechanisms",
  goal: "I CAN determine rate expressions from experimental data, identify reaction orders, explain the role of the rate-determining step in a mechanism, and relate activation energy to the Maxwell-Boltzmann distribution.",
  standards: ["Paper 1", "Paper 2", "AHL R2"],
  vocabulary: [
    {
      term: "Rate expression",
      definition:
        "An equation showing how rate depends on reactant concentrations: $rate = k[A]^m[B]^n$, where $m$ and $n$ are the orders.",
    },
    {
      term: "Rate constant ($k$)",
      definition:
        "The proportionality constant in the rate expression; its value depends on temperature and the presence of a catalyst.",
    },
    {
      term: "Order of reaction",
      definition:
        "The power to which a reactant's concentration is raised in the rate expression; determined experimentally, not from the equation.",
    },
    {
      term: "Overall order",
      definition: "The sum of all individual orders in the rate expression.",
    },
    {
      term: "Rate-determining step",
      definition:
        "The slowest step in a reaction mechanism; it determines the overall rate and the form of the rate expression.",
    },
    {
      term: "Elementary step",
      definition:
        "A single step in a reaction mechanism involving the collision of the species shown in its molecularity.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u3-rate-laws",
      title: "Determining rate expressions",
      skill:
        "Use initial-rate data to find orders and the rate constant, and distinguish orders from stoichiometric coefficients.",
      lesson: {
        sections: [
          {
            heading: "Rate expressions and orders",
            body: "The rate of a reaction is $rate = k[A]^m[B]^n$ where $m$ and $n$ are the orders with respect to each reactant, determined experimentally — they are NOT necessarily the stoichiometric coefficients. The overall order is $m + n$. For a zero-order reactant the rate is independent of its concentration; first order means rate ∝ [A]; second order means rate ∝ [A]$^2$.",
          },
          {
            heading: "Finding orders from data",
            body: "To find the order with respect to a reactant, compare experiments where only that reactant's concentration changes while others are held constant. If doubling [A] doubles the rate → first order; if it quadruples → second order; if no change → zero order. Then substitute into the rate expression to find $k$. Units of $k$ depend on overall order: mol dm$^{-3}$ s$^{-1}$ (zero), dm$^3$ mol$^{-1}$ s$^{-1}$ (first), dm$^6$ mol$^{-2}$ s$^{-1}$ (second).",
          },
          {
            heading: "Half-life and first order",
            body: "For a first-order reaction the half-life $t_{1/2} = \\frac{\\ln 2}{k}$ is constant regardless of concentration — this is a diagnostic test for first order. For second-order reactions the half-life increases as concentration decreases. Integrated rate laws relate concentration to time: first order $\\ln[A]_t = \\ln[A]_0 - kt$; second order $\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$.",
          },
        ],
        keyFormulas: [
          {
            name: "Rate expression",
            statement:
              "$rate = k[A]^m[B]^n$; orders from experiment, not equation.",
          },
          {
            name: "First-order half-life",
            statement:
              "$t_{1/2} = \\frac{\\ln 2}{k}$ — constant for first order.",
          },
          {
            name: "Integrated first order",
            statement: "$\\ln[A]_t = \\ln[A]_0 - kt$.",
          },
        ],
        workedExample: {
          problem:
            "For $rate = k[NO_2]^2[O_2]$, if [NO$_2$] is doubled and [O$_2$] unchanged, by what factor does the rate increase?",
          solution:
            "Rate ∝ [NO$_2$]$^2$, so doubling [NO$_2$] gives $2^2 = 4$ times the rate. [O$_2$] is unchanged so its contribution is constant.",
        },
      },
      questions: [
        {
          id: "chemhl-u3-rl-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the reaction $2NO_2(g) + F_2(g) \\to 2NO_2F(g)$, the rate expression is $rate = k[NO_2][F_2]$. The order with respect to NO$_2$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Second order" },
              { id: "b", text: "First order" },
              { id: "c", text: "Zero order" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Order",
                statement:
                  "The power of concentration in the rate expression; here [NO$_2$]$^1$ → first order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "[NO$_2$] appears to the power 1 in the rate expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (a) is correct — first order (not second, despite the coefficient 2).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** First order",
            commonErrors: [
              "Using the stoichiometric coefficient 2 — orders come from the rate expression, not the equation.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For a first-order reaction, the half-life is $250$ s. Calculate the rate constant $k$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First-order half-life",
                statement: "$t_{1/2} = \\frac{\\ln 2}{k}$",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange for $k$.",
                working: "k = \\frac{\\ln 2}{t_{1/2}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $t_{1/2} = 250$ s.",
                working: "k = \\frac{0.693}{250}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "k = 2.77 \\times 10^{-3}\\ \\mathrm{s^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k = 2.77 \\times 10^{-3}$ s$^{-1}$",
            commonErrors: ["Using $t_{1/2} = 1/k$ instead of $\\ln 2 / k$."],
          },
        },
        {
          id: "chemhl-u3-rl-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Experimental data for the reaction between P and Q: Experiment 1: [P] = 0.10, [Q] = 0.20, rate = 0.0040 mol dm$^{-3}$ s$^{-1}$; Experiment 2: [P] = 0.20, [Q] = 0.20, rate = 0.0080 mol dm$^{-3}$ s$^{-1}$; Experiment 3: [P] = 0.10, [Q] = 0.40, rate = 0.0160 mol dm$^{-3}$ s$^{-1}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order determination",
                statement:
                  "Compare experiments where one concentration changes; rate ratio gives order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Experiments 1→2: [P] doubles, rate doubles → first order in P.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Experiments 1→3: [Q] doubles, rate quadruples → second order in Q.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate expression: $rate = k[P][Q]^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Overall order = 3; units of $k$ = dm$^6$ mol$^{-2}$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$rate = k[P][Q]^2$; overall order 3",
            commonErrors: [
              "Using stoichiometric coefficients instead of comparing rate data.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The decomposition of compound X is proposed to proceed by the mechanism:",
          parts: [
            {
              label: "a",
              prompt:
                "Step 1 (slow): X → Y + Z; Step 2 (fast): Y + W → P; Step 3 (fast): Z + W → Q. Write the overall equation, identifying the intermediates.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State the rate-determining step and write the rate expression.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the species Y and Z do not appear in the rate expression.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain how increasing temperature increases the rate in terms of the Maxwell-Boltzmann distribution and activation energy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate-determining step",
                statement:
                  "The slowest step controls the rate; its molecularity gives the rate expression.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sum all steps and cancel intermediates Y and Z: X + 2W → P + Q.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Y and Z are produced in step 1 and consumed in steps 2 and 3 — they are intermediates.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Step 1 is slow → rate-determining.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Rate = $k[X]$ — first order, unimolecular.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Y and Z are intermediates — produced and consumed within the mechanism, never accumulating.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The rate expression depends only on reactants in the slow step; intermediates do not appear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Higher T shifts the Maxwell-Boltzmann distribution, giving more molecules energy $> E_a$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "More successful collisions per second → faster rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) X + 2W → P + Q; intermediates Y, Z. (b) Step 1; rate = k[X]. (c) Intermediates don't appear in rate expressions. (d) More molecules exceed $E_a$.",
            commonErrors: [
              "Including the intermediate NO$_3$ in the rate expression.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The overall order of a reaction is found by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding the stoichiometric coefficients" },
              { id: "b", text: "Multiplying the concentrations" },
              { id: "c", text: "Counting the number of reactants" },
              {
                id: "d",
                text: "Adding the individual orders in the rate expression",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Overall order",
                statement:
                  "Overall order = sum of the powers of all reactant concentrations in the rate expression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each reactant contributes its order (the exponent); overall order is their sum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Sum of individual orders",
            commonErrors: [
              "Using stoichiometric coefficients instead of the exponents in the rate expression.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For $rate = k[A]^2$, if $[A]$ is doubled while everything else stays constant, the rate changes by a factor of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "2" },
              { id: "c", text: "8" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order and rate scaling",
                statement:
                  "Rate $\\propto [A]^n$; doubling $[A]$ multiplies rate by $2^n$.",
              },
            ],
            steps: [
              {
                reasoning: "Second order in A: $2^2 = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** 4",
            commonErrors: [
              "Multiplying by 2 instead of squaring — second order means the concentration is squared.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a reactant that is zero order in the rate expression, changing its concentration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Doubles the rate" },
              { id: "b", text: "Halves the rate" },
              { id: "c", text: "Stops the reaction" },
              { id: "d", text: "Has no effect on the rate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zero order",
                statement:
                  "Zero order means $[A]^0 = 1$ — the rate is independent of that reactant's concentration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any concentration raised to power 0 equals 1, so the term drops out of the rate expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** No effect on the rate",
            commonErrors: [
              "Thinking zero order means zero rate — it means zero dependence on concentration.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The units of the rate constant $k$ for an overall second-order reaction are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dm$^3$ mol$^{-1}$ s$^{-1}$" },
              { id: "b", text: "s$^{-1}$" },
              { id: "c", text: "mol dm$^{-3}$ s$^{-1}$" },
              { id: "d", text: "dm$^6$ mol$^{-2}$ s$^{-1}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Units of k",
                statement:
                  "Units of $k$ depend on overall order: mol dm$^{-3}$ s$^{-1}$ (zero), dm$^3$ mol$^{-1}$ s$^{-1}$ (first), dm$^6$ mol$^{-2}$ s$^{-1}$ (second).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Overall second order needs two concentration factors in the denominator to cancel the rate units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** dm$^6$ mol$^{-2}$ s$^{-1}$",
            commonErrors: [
              "Confusing first-order units (s$^{-1}$) with second-order units.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The order of a reaction with respect to each reactant is determined by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rate constant $k$" },
              { id: "b", text: "The colour of the products" },
              { id: "c", text: "Experimental initial-rate data" },
              { id: "d", text: "The balanced chemical equation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Experimental orders",
                statement:
                  "Orders are found only from initial-rate experiments — they cannot be deduced from the equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comparing rates when one concentration is varied reveals each order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Experimental initial-rate data",
            commonErrors: [
              "Reading orders off the balanced equation — stoichiometric coefficients are unrelated.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $rate = k[A][B]^2$ with $k = 0.50$ dm$^6$ mol$^{-2}$ s$^{-1}$, $[A] = 0.10$ mol dm$^{-3}$ and $[B] = 0.20$ mol dm$^{-3}$, calculate the rate in mol dm$^{-3}$ s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Rate",
                answer: 0.002,
                unit: "mol dm$^{-3}$ s$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate expression",
                statement: "$rate = k[A]^m[B]^n$",
              },
            ],
            steps: [
              {
                reasoning: "Square the B concentration: $(0.20)^2 = 0.040$.",
                working: "0.20^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by [A] and $k$.",
                working: "0.50 \\times 0.10 \\times 0.040 = 0.0020",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the rate with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$rate = 0.0020$ mol dm$^{-3}$ s$^{-1}$",
            commonErrors: [
              "Forgetting to square [B] — the exponent 2 applies to concentration.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "For $rate = k[A]^2[B]$, the initial rate is measured. If $[A]$ is doubled and $[B]$ is halved (all else constant), by what factor does the rate change?",
          response: {
            type: "numeric",
            parts: [{ label: "Rate factor", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order and rate scaling",
                statement:
                  "Each concentration contributes $factor^{order}$ to the rate change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Doubling [A] gives $2^2 = 4$; halving [B] gives $(\\frac{1}{2})^1 = \\frac{1}{2}$.",
                working: "4 \\times 0.5 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine the two contributions.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The rate doubles (factor 2).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rate increases by a factor of 2",
            commonErrors: ["Applying order 2 to [B] or order 1 to [A]."],
          },
        },
        {
          id: "chemhl-u3-rl-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For a first-order reaction, the initial rate is $0.025$ mol dm$^{-3}$ s$^{-1}$ when $[A] = 0.50$ mol dm$^{-3}$. Calculate the rate constant $k$ in s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Rate constant $k$", answer: 0.05, unit: "s$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First-order rate expression",
                statement: "$rate = k[A]$",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange for $k$.",
                working: "k = \\mathrm{rate}/[A]",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute values.",
                working: "0.025 / 0.50 = 0.050",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State $k$ with correct units for first order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k = 0.050$ s$^{-1}$",
            commonErrors: [
              "Dividing the wrong way — $k = rate/[A]$, not $[A]/rate$.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A first-order reaction has $k = 4.0 \\times 10^{-3}$ s$^{-1}$. Calculate its half-life in seconds.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Half-life",
                answer: 173,
                unit: "s",
                tolerance: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "First-order half-life",
                statement: "$t_{1/2} = \\frac{\\ln 2}{k}$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute into the half-life equation.",
                working: "t_{1/2} = 0.693 / (4.0 \\times 10^{-3})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "t_{1/2} = 173\\ \\mathrm{s}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Half-life is constant for first order, independent of concentration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t_{1/2} \\approx 173$ s",
            commonErrors: ["Using $t_{1/2} = 1/k$ instead of $\\ln 2/k$."],
          },
        },
        {
          id: "chemhl-u3-rl-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Initial-rate data for $A + B \\to$ products: Experiment 1: $[A] = 0.10$, $[B] = 0.10$, rate = $2.0 \\times 10^{-3}$. Experiment 2: $[A] = 0.20$, $[B] = 0.10$, rate = $8.0 \\times 10^{-3}$. Experiment 3: $[A] = 0.10$, $[B] = 0.20$, rate = $4.0 \\times 10^{-3}$ (all mol dm$^{-3}$, rates in mol dm$^{-3}$ s$^{-1}$).",
          response: {
            type: "numeric",
            parts: [
              { label: "Order in A", answer: 2 },
              { label: "Order in B", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order determination",
                statement:
                  "Rate ratio vs concentration ratio: $(ratio)^{order} = rate\\ ratio$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Experiments 1→2: [A] doubles, rate quadruples ($\\times 4$) → second order in A.",
                working: "2^2 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order in A = 2.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Experiments 1→3: [B] doubles, rate doubles ($\\times 2$) → first order in B.",
                working: "2^1 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order in B = 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Second order in A, first order in B",
            commonErrors: [
              "Comparing experiments 2 and 3 where BOTH concentrations differ.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $rate = k[A]^2$, the initial rate is $0.080$ mol dm$^{-3}$ s$^{-1}$. If $[A]$ is halved, calculate the new rate in mol dm$^{-3}$ s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "New rate",
                answer: 0.02,
                unit: "mol dm$^{-3}$ s$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order and rate scaling",
                statement:
                  "Halving [A] in a second-order dependence gives $(\\frac{1}{2})^2 = \\frac{1}{4}$ of the rate.",
              },
            ],
            steps: [
              {
                reasoning: "Second order: rate scales with $[A]^2$.",
                working: "(0.5)^2 = 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply the original rate by the factor.",
                working: "0.080 \\times 0.25 = 0.020",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the new rate with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$rate = 0.020$ mol dm$^{-3}$ s$^{-1}$",
            commonErrors: [
              "Halving the rate instead of quartering it — order 2 means the square.",
            ],
          },
        },
        {
          id: "chemhl-u3-rl-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Initial-rate data for the reaction between R and S: Experiment 1: $[R] = 0.20$, $[S] = 0.10$, rate = $4.0 \\times 10^{-3}$ mol dm$^{-3}$ s$^{-1}$. Experiment 2: $[R] = 0.40$, $[S] = 0.10$, rate = $8.0 \\times 10^{-3}$. Experiment 3: $[R] = 0.20$, $[S] = 0.20$, rate = $1.6 \\times 10^{-2}$. Concentrations in mol dm$^{-3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order determination",
                statement:
                  "Compare experiments varying one concentration; rate ratio raised to order gives the concentration ratio.",
              },
              {
                kind: "formula",
                name: "Rate expression",
                statement: "$rate = k[R]^m[S]^n$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Experiments 1→2: [R] doubles, rate doubles → first order in R.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Experiments 1→3: [S] doubles, rate quadruples → second order in S.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate expression: $rate = k[R][S]^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Overall order = 3.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Substitute experiment 1: $4.0 \\times 10^{-3} = k(0.20)(0.10)^2$ → $k = 2.0$ dm$^6$ mol$^{-2}$ s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Units of $k$ for overall order 3: dm$^6$ mol$^{-2}$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$rate = k[R][S]^2$ with $k = 2.0$ dm$^6$ mol$^{-2}$ s$^{-1}$; overall order 3",
            commonErrors: [
              "Comparing experiments where both concentrations change.",
              "Giving $k$ the wrong units for a third-order reaction.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u3-activation-energy",
      title: "Activation energy and reaction mechanisms",
      skill:
        "Relate activation energy to the Maxwell-Boltzmann distribution and collision theory, and use multi-step mechanisms to explain rate expressions and catalysis.",
      lesson: {
        sections: [
          {
            heading: "Activation energy",
            body: "Even exothermic reactions need energy to start — the activation energy $E_a$ is the minimum energy reactant molecules must have to form the transition state. The Maxwell-Boltzmann distribution shows that only a small fraction of molecules have energy $> E_a$ at room temperature; increasing temperature shifts the distribution so many more molecules exceed $E_a$, which is why rates increase rapidly with temperature. A catalyst provides an alternative pathway with lower $E_a$.",
          },
          {
            heading: "Reaction mechanisms",
            body: "Most reactions proceed through a series of elementary steps. The slowest step is rate-determining and its molecularity determines the rate expression. For example, if the slow step is unimolecular $A \\to$ products, rate = $k[A]$ regardless of other steps. If two molecules collide in the slow step, rate = $k[A][B]$. Intermediates formed in early steps do not appear in the rate expression.",
          },
          {
            heading: "Catalysis",
            body: "A catalyst lowers $E_a$ by providing an alternative mechanism — often involving an intermediate complex. In enzyme catalysis the active site binds the substrate, orienting it correctly and stabilising the transition state. Catalysts are not consumed and do not change $\\Delta H$ or equilibrium position — they only speed up both forward and reverse reactions equally.",
          },
        ],
        keyFormulas: [
          {
            name: "Arrhenius behaviour",
            statement:
              "Rate increases with T because more molecules exceed $E_a$; $k$ increases exponentially with T.",
          },
          {
            name: "Rate-determining step",
            statement:
              "Slowest elementary step sets the rate; its molecularity gives the rate expression.",
          },
          {
            name: "Catalyst effect",
            statement:
              "Lowers $E_a$ via alternative pathway; does not change $\\Delta H$ or equilibrium.",
          },
        ],
        workedExample: {
          problem:
            "A reaction has $E_a = 80$ kJ mol$^{-1}$. A catalyst lowers it to $50$ kJ mol$^{-1}$. Explain qualitatively why the rate increases dramatically.",
          solution:
            "The Maxwell-Boltzmann distribution shows that lowering $E_a$ dramatically increases the fraction of molecules with sufficient energy. At 298 K, going from 80 to 50 kJ/mol can increase the rate by orders of magnitude.",
        },
      },
      questions: [
        {
          id: "chemhl-u3-ae-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A catalyst increases the rate of a reaction by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing the enthalpy of reaction" },
              {
                id: "b",
                text: "Providing an alternative pathway with lower activation energy",
              },
              { id: "c", text: "Increasing the temperature" },
              { id: "d", text: "Increasing the concentration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalysis",
                statement:
                  "Catalysts lower $E_a$ via an alternative mechanism; they do not change $\\Delta H$ or equilibrium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A lower-energy pathway means more molecules can react.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Lower activation energy pathway",
            commonErrors: [
              "Thinking catalysts change the equilibrium position — they only speed up both directions.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain, using the Maxwell-Boltzmann distribution, why increasing temperature increases the rate of a reaction more than proportionally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maxwell-Boltzmann",
                statement:
                  "Higher T shifts the distribution so a larger fraction of molecules exceed $E_a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At higher T the distribution broadens and shifts to higher energies.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The fraction of molecules with energy $> E_a$ increases significantly — not just proportionally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More molecules can overcome the activation barrier → rate increases sharply.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher T gives more molecules energy $> E_a$ → disproportionately faster rate.",
            commonErrors: [
              "Saying 'molecules move faster' without the energy-distribution argument.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A reaction mechanism has three steps: (1) fast: A + B → C; (2) slow: C → D; (3) fast: D → E + F. Write the overall equation and the rate expression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mechanism analysis",
                statement:
                  "Overall equation sums all steps; rate expression comes from the slow step only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum steps and cancel intermediates C and D: A + B → E + F.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Step 2 is slow → rate-determining.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rate expression depends only on species in the slow step: rate = $k[C]$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Since C is an intermediate, the rate expression is often rewritten in terms of reactants if needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A + B → E + F; rate = k[C] (or equivalent in terms of A, B if C is substituted)",
            commonErrors: [
              "Writing rate = k[A][B] from the overall equation — the rate depends on the slow step, not the overall stoichiometry.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The reaction between thiosulfate and acid produces sulfur and a cloudy suspension. Its rate increases with temperature and concentration.",
          parts: [
            {
              label: "a",
              prompt: "Explain how a catalyst would affect the rate and why.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the rate increases with temperature using collision theory.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A proposed mechanism has a fast first step forming an intermediate and a slow second step. Explain how the rate expression is determined.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the overall rate cannot exceed the rate of the slowest step.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement:
                  "Rate depends on collision frequency and the fraction with energy $> E_a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A catalyst provides a lower-$E_a$ pathway.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "More molecules have sufficient energy → faster rate.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Higher T increases molecular speed → more frequent collisions.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Higher T also increases the fraction of collisions with energy $> E_a$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The slow step is rate-determining; its molecularity gives the rate expression.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Fast steps before it do not appear in the rate expression.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The overall reaction cannot proceed faster than its bottleneck step.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Even if earlier steps are fast, the slow step limits the throughput.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Catalyst lowers $E_a$. (b) More collisions + more energetic collisions. (c) Slow step sets rate. (d) Bottleneck limits overall rate.",
            commonErrors: [
              "Saying catalyst 'increases concentration' — it does not.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The transition state of a reaction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The catalyst active site" },
              { id: "b", text: "The starting reactant complex" },
              { id: "c", text: "The most stable product" },
              {
                id: "d",
                text: "The highest-energy arrangement along the reaction pathway",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transition state",
                statement:
                  "The peak of the energy profile — bonds are partially broken and formed at the maximum energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The transition state sits at the top of the activation barrier, above both reactants and products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Highest-energy arrangement",
            commonErrors: [
              "Confusing the transition state with an intermediate — intermediates are local minima, transition states are maxima.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Activation energy $E_a$ is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The energy of the catalyst" },
              { id: "b", text: "The enthalpy change of the reaction" },
              {
                id: "c",
                text: "The minimum energy reactants need to reach the transition state",
              },
              { id: "d", text: "The energy released by the products" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Activation energy",
                statement:
                  "Minimum energy required for reactant particles to overcome the barrier and form the transition state.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$E_a$ is measured from reactants up to the transition state — unrelated to $\\Delta H$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Minimum energy to reach transition state",
            commonErrors: [
              "Confusing $E_a$ with $\\Delta H$ — exothermic reactions still have large $E_a$.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A catalyst affects a reversible reaction by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Lowering $E_a$ for both directions without changing $\\Delta H$ or equilibrium",
              },
              { id: "b", text: "Making the reaction exothermic" },
              { id: "c", text: "Being consumed in the reaction" },
              { id: "d", text: "Shifting the equilibrium to products" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalysis",
                statement:
                  "A catalyst provides an alternative pathway of lower $E_a$; it speeds up forward and reverse equally and does not change $\\Delta H$ or $K$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lower barrier → more collisions succeed in both directions; equilibrium position unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Lowers $E_a$ both ways; no change to $\\Delta H$ or equilibrium",
            commonErrors: [
              "Thinking catalysts shift equilibrium — they only reach it faster.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Raising the temperature increases the rate of reaction mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Particles become larger" },
              { id: "b", text: "$E_a$ decreases with temperature" },
              { id: "c", text: "Concentrations automatically increase" },
              {
                id: "d",
                text: "A larger fraction of molecules have energy greater than $E_a$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maxwell-Boltzmann distribution",
                statement:
                  "Higher T broadens and shifts the energy distribution so a much larger fraction exceeds $E_a$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "More energetic collisions per second → rate rises faster than proportionally to T.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Larger fraction exceeds $E_a$",
            commonErrors: [
              "Saying 'molecules move faster' alone — the key is the fraction above $E_a$.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The rate-determining step of a reaction mechanism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first step in the mechanism" },
              { id: "b", text: "The slowest elementary step" },
              { id: "c", text: "The step producing the most product" },
              { id: "d", text: "The fastest elementary step" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rate-determining step",
                statement:
                  "The slowest step in a mechanism — it acts as the bottleneck controlling the overall rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Like the slowest link in a chain, the slowest step limits throughput.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The slowest step",
            commonErrors: [
              "Assuming the first step is always rate-determining — it is whichever step is slowest.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The rate constant of a reaction is $k_1 = 0.020$ s$^{-1}$ at 300 K and $k_2 = 0.080$ s$^{-1}$ at 330 K. Use the Arrhenius equation $\\ln(k_2/k_1) = -\\frac{E_a}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$ to estimate $E_a$ in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Activation energy",
                answer: 38.0,
                unit: "kJ mol$^{-1}$",
                tolerance: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arrhenius equation",
                statement:
                  "$\\ln(k_2/k_1) = -\\frac{E_a}{R}\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)$; $R = 8.314$ J K$^{-1}$ mol$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the rate-constant ratio.",
                working: "\\ln(0.080/0.020) = \\ln 4 = 1.386",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the temperature term.",
                working:
                  "1/330 - 1/300 = 0.003030 - 0.003333 = -3.03 \\times 10^{-4}\\ \\mathrm{K^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange for $E_a$.",
                working: "E_a = -R\\ln(k_2/k_1) / (1/T_2 - 1/T_1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute values.",
                working:
                  "E_a = -(8.314)(1.386)/(-3.03 \\times 10^{-4}) = 3.80 \\times 10^{4}\\ \\mathrm{J\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to kJ.",
                working: "E_a \\approx 38\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_a \\approx 38$ kJ mol$^{-1}$",
            commonErrors: [
              "Forgetting the minus sign in the rearrangement or the J-to-kJ conversion.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Using $k = A e^{-E_a/RT}$ with $A = 1.0 \\times 10^{8}$ s$^{-1}$, $E_a = 50$ kJ mol$^{-1}$ and $T = 298$ K, calculate $k$ in s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Rate constant $k$",
                answer: 0.17,
                unit: "s$^{-1}$",
                tolerance: 0.02,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arrhenius equation",
                statement:
                  "$k = A e^{-E_a/RT}$; $E_a$ must be in J mol$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "Convert $E_a$ to J mol$^{-1}$.",
                working: "E_a = 50000\\ \\mathrm{J\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the exponent.",
                working: "-E_a/RT = -50000/(8.314 \\times 298) = -20.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the exponential factor.",
                working: "e^{-20.2} \\approx 1.7 \\times 10^{-9}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by $A$.",
                working:
                  "k = 1.0 \\times 10^{8} \\times 1.7 \\times 10^{-9} \\approx 0.17\\ \\mathrm{s^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k \\approx 0.17$ s$^{-1}$",
            commonErrors: [
              "Using $E_a$ in kJ without converting to J — the exponent becomes tiny.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A reaction has $k = 0.010$ s$^{-1}$ at 283 K and $k = 0.040$ s$^{-1}$ at 308 K. Estimate $E_a$ in kJ mol$^{-1}$ using the Arrhenius equation.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Activation energy",
                answer: 40.2,
                unit: "kJ mol$^{-1}$",
                tolerance: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arrhenius equation",
                statement: "$E_a = \\frac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2}$",
              },
            ],
            steps: [
              {
                reasoning: "Compute the rate ratio.",
                working: "\\ln(0.040/0.010) = \\ln 4 = 1.386",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the reciprocal-temperature difference.",
                working:
                  "1/283 - 1/308 = 0.003534 - 0.003247 = 2.87 \\times 10^{-4}\\ \\mathrm{K^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the rearranged Arrhenius equation.",
                working: "E_a = (8.314 \\times 1.386)/(2.87 \\times 10^{-4})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate in J then convert.",
                working:
                  "E_a = 4.02 \\times 10^{4}\\ \\mathrm{J\\,mol^{-1}} = 40.2\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the final value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_a \\approx 40$ kJ mol$^{-1}$",
            commonErrors: [
              "Inverting the temperature term — check signs carefully.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A catalyst lowers the activation energy of a reaction from 90 kJ mol$^{-1}$ to 55 kJ mol$^{-1}$ at 298 K. Assuming the same pre-exponential factor $A$, calculate $\\ln(k_{cat}/k_{uncat})$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\ln(k_{cat}/k_{uncat})$",
                answer: 14.1,
                tolerance: 0.2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arrhenius equation",
                statement:
                  "With the same $A$: $\\ln(k_{cat}/k_{uncat}) = (E_{a,uncat} - E_{a,cat})/RT$.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the difference in activation energies.",
                working:
                  "90 - 55 = 35\\ \\mathrm{kJ\\,mol^{-1}} = 35000\\ \\mathrm{J\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $RT$.",
                working: "ln(k_{cat}/k_{uncat}) = 35000/(8.314 \\times 298)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "= 14.1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\ln(k_{cat}/k_{uncat}) \\approx 14$ (rate increases by ~$\\times 10^{6}$)",
            commonErrors: ["Using $E_a$ values in kJ without converting to J."],
          },
        },
        {
          id: "chemhl-u3-ae-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Using $k = A e^{-E_a/RT}$ with $A = 1.0 \\times 10^{9}$ s$^{-1}$, $E_a = 45$ kJ mol$^{-1}$ and $T = 320$ K, calculate $k$ in s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Rate constant $k$",
                answer: 45.7,
                unit: "s$^{-1}$",
                tolerance: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arrhenius equation",
                statement: "$k = A e^{-E_a/RT}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $E_a$ to J mol$^{-1}$ and compute the exponent.",
                working: "-45000/(8.314 \\times 320) = -16.9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the exponential.",
                working: "e^{-16.9} \\approx 4.6 \\times 10^{-8}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the pre-exponential factor.",
                working: "k = 1.0 \\times 10^{9} \\times 4.6 \\times 10^{-8}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "k \\approx 46\\ \\mathrm{s^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k \\approx 46$ s$^{-1}$",
            commonErrors: [
              "Sign error in the exponent — the exponential term must be less than 1.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A reaction's rate increases by a factor of 8 when the temperature rises from 300 K to 320 K. Estimate $E_a$ in kJ mol$^{-1}$ using the Arrhenius equation.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Activation energy",
                answer: 83.0,
                unit: "kJ mol$^{-1}$",
                tolerance: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arrhenius equation",
                statement: "$E_a = \\frac{R\\ln(k_2/k_1)}{1/T_1 - 1/T_2}$",
              },
            ],
            steps: [
              {
                reasoning: "Compute $\\ln(k_2/k_1)$.",
                working: "\\ln 8 = 2.08",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the reciprocal-temperature difference.",
                working:
                  "1/300 - 1/320 = 0.003333 - 0.003125 = 2.08 \\times 10^{-4}\\ \\mathrm{K^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into the rearranged equation.",
                working: "E_a = (8.314 \\times 2.08)/(2.08 \\times 10^{-4})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working:
                  "E_a \\approx 8.3 \\times 10^{4}\\ \\mathrm{J\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to kJ.",
                working: "E_a \\approx 83\\ \\mathrm{kJ\\,mol^{-1}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E_a \\approx 83$ kJ mol$^{-1}$",
            commonErrors: [
              "Using the wrong temperature order — $T_1$ is the lower temperature.",
            ],
          },
        },
        {
          id: "chemhl-u3-ae-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The hydrolysis of ester RCOOR' is investigated. Proposed mechanism: Step 1 (fast): acid catalyst protonates the carbonyl oxygen; Step 2 (slow): water attacks the protonated ester; Step 3 (fast): proton transfers and products leave.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the rate-determining step and write a qualitative rate expression for it.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the acid catalyst increases the rate without appearing in the overall stoichiometry.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain, using the Maxwell-Boltzmann distribution, why increasing temperature increases the rate of the slow step.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate-determining step",
                statement:
                  "The slowest elementary step controls the overall rate and gives the rate expression.",
              },
              {
                kind: "principle",
                name: "Catalysis",
                statement:
                  "A catalyst provides a lower-$E_a$ pathway and is regenerated, so it does not appear in the overall equation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Step 2 is slow → rate-determining.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Rate depends on the species in step 2 — e.g. $rate = k[\\text{ester}][H_2O]$ (or including catalyst if it participates).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The catalyst provides an alternative mechanism with a lower activation energy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "More collisions exceed the lower $E_a$, so the forward and reverse rates both increase.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The catalyst is regenerated at the end, so it is unchanged in the overall stoichiometry.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Higher T shifts the Maxwell-Boltzmann distribution to higher energies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "A larger fraction of collisions then have energy $> E_a$ of the slow step.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "More successful collisions per second → the rate of the rate-determining step, and hence the overall rate, increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Step 2 is rate-determining. (b) Catalyst lowers $E_a$ and is regenerated. (c) Higher T gives more molecules energy $> E_a$.",
            commonErrors: [
              "Including the catalyst in the overall equation — it is regenerated.",
            ],
          },
        },
      ],
    },
  ],
};
