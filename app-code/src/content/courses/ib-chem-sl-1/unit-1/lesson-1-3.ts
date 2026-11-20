import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "chemsl-u1-lesson-1-3",
  code: "1-3",
  title: "Stoichiometry of Reactions",
  goal: "I CAN use mole ratios from a balanced equation to calculate amounts, masses and gas volumes of reactants and products.",
  standards: ["Topic 1.1", "Topic 1.2", "Paper 1", "Paper 2"],
  vocabulary: [
    {
      term: "Stoichiometry",
      definition:
        "The quantitative study of the amounts of reactants and products in a chemical reaction, based on the mole ratio in the balanced equation.",
    },
    {
      term: "Mole ratio",
      definition:
        "The ratio of amounts (in moles) of substances in a reaction, given by the coefficients in the balanced equation.",
    },
    {
      term: "Balanced equation",
      definition:
        "A chemical equation in which the number of atoms of each element is the same on both sides; coefficients give the mole ratio.",
    },
    {
      term: "Limiting reactant",
      definition:
        "The reactant completely consumed first in a reaction; it determines the maximum amount of product formed.",
    },
    {
      term: "Excess reactant",
      definition:
        "A reactant present in greater amount than required by the mole ratio; some remains after the reaction stops.",
    },
    {
      term: "Room temperature and pressure (RTP)",
      definition:
        "Conditions of $25\\ \\mathrm{^\\circ C}$ and $100\\ \\mathrm{kPa}$, at which one mole of an ideal gas occupies approximately $24.0\\ \\mathrm{dm^3}$.",
    },
  ],
  concepts: [
    {
      id: "chemsl-u1-mole-ratios",
      title: "Mole ratios from balanced equations",
      skill:
        "Read mole ratios from coefficients and convert amounts of reactants to amounts of products.",
      lesson: {
        sections: [
          {
            heading: "Coefficients are mole ratios",
            body: "In a balanced equation the coefficients give the ratio in which amounts of substances react and are produced. For $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, two moles of hydrogen react with one mole of oxygen to give two moles of water. The ratio $2:1:2$ applies to moles, not to masses or volumes.",
          },
          {
            heading: "From one amount to another",
            body: "To convert an amount of one substance to an amount of another, divide by its coefficient and multiply by the coefficient of the target substance: $n_{\\mathrm{target}}=n_{\\mathrm{given}}\\times\\frac{\\text{coefficient}_{\\mathrm{target}}}{\\text{coefficient}_{\\mathrm{given}}}$. If the equation is unbalanced, balance it first — an unbalanced equation gives an incorrect ratio.",
          },
          {
            heading: "Excess and limiting reactants",
            body: "In most reactions one reactant is in excess and the other is limiting. When the question states that a reactant is in excess (or 'excess' appears), assume the other reactant is completely consumed and use its amount for all product calculations. Limiting-reactant calculations themselves are developed further in Year 2.",
          },
        ],
        keyFormulas: [
          {
            name: "Mole ratio",
            statement: "$n_A:n_B=\\text{coefficient}_A:\\text{coefficient}_B$",
          },
          {
            name: "Conversion",
            statement:
              "$n_{\\mathrm{target}}=n_{\\mathrm{given}}\\times\\frac{c_{\\mathrm{target}}}{c_{\\mathrm{given}}}$",
          },
          { name: "Moles to mass", statement: "$m=nM$" },
        ],
        workedExample: {
          problem:
            "In the reaction $\\mathrm{N_2}+3\\mathrm{H_2}\\to2\\mathrm{NH_3}$, $2.0\\ \\mathrm{mol}$ of $\\mathrm{N_2}$ reacts completely with excess hydrogen. Calculate the amount of $\\mathrm{NH_3}$ produced.",
          solution:
            "The mole ratio $\\mathrm{N_2}:\\mathrm{NH_3}=1:2$, so $n(\\mathrm{NH_3})=2.0\\times\\frac{2}{1}=4.0\\ \\mathrm{mol}$.",
        },
      },
      questions: [
        {
          id: "chemsl-u1-mole-ratios-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the balanced equation $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, what is the mole ratio of $\\mathrm{H_2}$ to $\\mathrm{H_2O}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:1$" },
              { id: "b", text: "$1:1$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$4:2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "Coefficients in a balanced equation give the mole ratio of reactants to products.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Read the coefficients of $\\mathrm{H_2}$ and $\\mathrm{H_2O}$: $2$ and $2$.",
                working: "2:2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the ratio.",
                working: "2:2=1:1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $1:1$",
            commonErrors: [
              "Using the coefficient of $\\mathrm{O_2}$ by mistake, giving $2:1$.",
              "Choosing $4:2$ without simplifying (this equals $2:1$, still wrong).",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For the reaction $\\mathrm{N_2}+3\\mathrm{H_2}\\to2\\mathrm{NH_3}$, $1.50\\ \\mathrm{mol}$ of $\\mathrm{N_2}$ reacts completely with excess hydrogen. Calculate the amount, in moles, of $\\mathrm{NH_3}$ produced.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$n(\\mathrm{NH_3})$ / mol",
                answer: 3,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "$\\mathrm{N_2}:\\mathrm{NH_3}=1:2$ from the coefficients.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the mole ratio $1:2$ to the amount of $\\mathrm{N_2}$.",
                working: "n(\\mathrm{NH_3})=1.50\\times\\frac{2}{1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(\\mathrm{NH_3})=3.00\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State with units.",
                working: "3.00\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n(\\mathrm{NH_3})=3.00\\ \\mathrm{mol}$",
            commonErrors: [
              "Using the ratio $1:3$ (reactants only) to get $4.50\\ \\mathrm{mol}$.",
              "Multiplying by $3$ instead of $2$.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In the reaction $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, $3.0\\ \\mathrm{mol}$ of hydrogen reacts completely with excess oxygen. ($M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{O_2})$ / mol",
                answer: 1.5,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{H_2O})$ / mol",
                answer: 3,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(c) $m(\\mathrm{H_2O})$ / g",
                answer: 54,
                tolerance: 0.1,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{H_2}:\\mathrm{O_2}:\\mathrm{H_2O}=2:1:2$",
              },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              {
                reasoning:
                  "Apply the $2:1$ ratio of $\\mathrm{H_2}$ to $\\mathrm{O_2}$.",
                working: "n(\\mathrm{O_2})=3.0\\times\\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(\\mathrm{O_2})=1.5\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Apply the $2:2$ ratio of $\\mathrm{H_2}$ to $\\mathrm{H_2O}$: same moles, $3.0\\ \\mathrm{mol}$; then convert to mass.",
                working: "m(\\mathrm{H_2O})=3.0\\times18.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate both remaining answers.",
                working:
                  "n(\\mathrm{H_2O})=3.0\\ \\mathrm{mol},\\ m=54\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1.5\\ \\mathrm{mol}$ (b) $3.0\\ \\mathrm{mol}$ (c) $54\\ \\mathrm{g}$",
            commonErrors: [
              "Using $2:1$ for $\\mathrm{H_2O}$ instead of $2:2$.",
              "Quoting moles for (c) instead of mass.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Methane burns completely in oxygen according to $\\mathrm{CH_4}+2\\mathrm{O_2}\\to\\mathrm{CO_2}+2\\mathrm{H_2O}$. A burner uses $0.250\\ \\mathrm{mol}$ of methane with excess oxygen. ($M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$)",
          parts: [
            {
              label: "a",
              prompt:
                "State the mole ratio of $\\mathrm{CH_4}$ to $\\mathrm{CO_2}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of carbon dioxide produced.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the mass, in grams, of carbon dioxide produced.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the amount of water produced is not needed to complete the calculation of carbon dioxide.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{CH_4}:\\mathrm{CO_2}=1:1$",
              },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Read the coefficients of $\\mathrm{CH_4}$ and $\\mathrm{CO_2}$: both are $1$.",
                working: "1:1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the ratio.",
                working: "\\mathrm{CH_4}:\\mathrm{CO_2}=1:1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Apply the $1:1$ ratio to $0.250\\ \\mathrm{mol}$ of methane.",
                working: "n(\\mathrm{CO_2})=0.250\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the amount.",
                working: "0.250\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Convert moles to mass with $m=nM$.",
                working: "m=0.250\\times44.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "m=11.0\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The mole ratio relates each product directly to the limiting reactant $\\mathrm{CH_4}$; water is a separate product whose amount does not enter the calculation.",
                working: "\\text{ratio to }\\mathrm{CH_4}\\text{ is direct}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Since oxygen is in excess, methane alone determines all product amounts.",
                working: "\\mathrm{CH_4}\\text{ is limiting}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1:1$ (b) $0.250\\ \\mathrm{mol}$ (c) $11.0\\ \\mathrm{g}$ (d) each product's amount follows directly from the limiting reactant via its own mole ratio",
            commonErrors: [
              "Using the $1:2$ methane–oxygen ratio for carbon dioxide.",
              "Trying to use the mass of water (unknown) instead of the mole ratio.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the balanced equation $\\mathrm{N_2}+3\\mathrm{H_2}\\to2\\mathrm{NH_3}$, what is the mole ratio of $\\mathrm{H_2}$ to $\\mathrm{NH_3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:3$" },
              { id: "b", text: "$3:2$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$3:1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "Coefficients in a balanced equation give the mole ratio of reactants to products.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Read the coefficients of $\\mathrm{H_2}$ and $\\mathrm{NH_3}$: $3$ and $2$.",
                working: "3:2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The ratio $3:2$ is already in simplest form.",
                working: "3:2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $3:2$",
            commonErrors: [
              "Reversing the ratio to $2:3$.",
              "Using the $\\mathrm{N_2}:\\mathrm{H_2}$ ratio $1:3$ by mistake.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For the reaction $\\mathrm{N_2}+3\\mathrm{H_2}\\to2\\mathrm{NH_3}$, $2.0\\ \\mathrm{mol}$ of $\\mathrm{N_2}$ reacts completely with excess hydrogen. What amount of $\\mathrm{NH_3}$ is produced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.0\\ \\mathrm{mol}$" },
              { id: "b", text: "$2.0\\ \\mathrm{mol}$" },
              { id: "c", text: "$4.0\\ \\mathrm{mol}$" },
              { id: "d", text: "$6.0\\ \\mathrm{mol}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{N_2}:\\mathrm{NH_3}=1:2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the $1:2$ ratio to $2.0\\ \\mathrm{mol}$ of $\\mathrm{N_2}$.",
                working: "n(\\mathrm{NH_3})=2.0\\times2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(\\mathrm{NH_3})=4.0\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $4.0\\ \\mathrm{mol}$",
            commonErrors: [
              "Using the $1:3$ ratio to get $6.0\\ \\mathrm{mol}$.",
              "Answering $2.0\\ \\mathrm{mol}$ by assuming a $1:1$ ratio.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the correctly balanced equation for the complete combustion of propane, $\\mathrm{C_3H_8}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C_3H_8}+5\\mathrm{O_2}\\to3\\mathrm{CO_2}+4\\mathrm{H_2O}$" },
              { id: "b", text: "$\\mathrm{C_3H_8}+4\\mathrm{O_2}\\to3\\mathrm{CO_2}+4\\mathrm{H_2O}$" },
              { id: "c", text: "$\\mathrm{C_3H_8}+5\\mathrm{O_2}\\to3\\mathrm{CO_2}+5\\mathrm{H_2O}$" },
              { id: "d", text: "$\\mathrm{C_3H_8}+\\mathrm{O_2}\\to3\\mathrm{CO_2}+4\\mathrm{H_2O}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balanced equation",
                statement:
                  "The same number of atoms of each element on both sides; coefficients give the mole ratio.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Balance C first: $3\\mathrm{CO_2}$; balance H: $4\\mathrm{H_2O}$; then O requires $5\\mathrm{O_2}$.",
                working: "3+4=7\\ O\\Rightarrow5\\mathrm{O_2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check atom counts: 3 C, 8 H and 10 O on each side.",
                working: "\\mathrm{C_3H_8}+5\\mathrm{O_2}\\to3\\mathrm{CO_2}+4\\mathrm{H_2O}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\mathrm{C_3H_8}+5\\mathrm{O_2}\\to3\\mathrm{CO_2}+4\\mathrm{H_2O}$",
            commonErrors: [
              "Choosing $4\\mathrm{O_2}$ which leaves oxygen unbalanced.",
              "Writing $5\\mathrm{H_2O}$ which does not balance hydrogen.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In the reaction $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, a mixture contains $4.0\\ \\mathrm{mol}$ of $\\mathrm{H_2}$ and $1.0\\ \\mathrm{mol}$ of $\\mathrm{O_2}$. Which reactant is the limiting reactant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{H_2}$" },
              { id: "b", text: "$\\mathrm{O_2}$" },
              { id: "c", text: "Both reactants are completely consumed" },
              { id: "d", text: "Neither — the reaction cannot proceed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting reactant",
                statement:
                  "The reactant completely consumed first; it determines the maximum amount of product.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The ratio $\\mathrm{H_2}:\\mathrm{O_2}=2:1$ requires $2.0\\ \\mathrm{mol}$ of $\\mathrm{H_2}$ per $1.0\\ \\mathrm{mol}$ of $\\mathrm{O_2}$; $4.0\\ \\mathrm{mol}$ is more than enough.",
                working: "need\\ 2.0,\\ have\\ 4.0\\ \\mathrm{mol}\\ \\mathrm{H_2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All the oxygen is consumed while hydrogen remains, so $\\mathrm{O_2}$ is limiting.",
                working: "\\mathrm{O_2}\\text{ limiting}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\mathrm{O_2}$",
            commonErrors: [
              "Choosing $\\mathrm{H_2}$ because it has the larger amount.",
              "Claiming neither is limiting without comparing amounts to the mole ratio.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "In the reaction $\\mathrm{N_2}+3\\mathrm{H_2}\\to2\\mathrm{NH_3}$, $0.500\\ \\mathrm{mol}$ of $\\mathrm{N_2}$ reacts completely with excess hydrogen. Find (a) the amount of $\\mathrm{NH_3}$ produced and (b) the amount of $\\mathrm{H_2}$ consumed.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{NH_3})$ / mol",
                answer: 1,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{H_2})$ / mol",
                answer: 1.5,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "$\\mathrm{N_2}:\\mathrm{H_2}:\\mathrm{NH_3}=1:3:2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the $1:2$ ratio of $\\mathrm{N_2}$ to $\\mathrm{NH_3}$.",
                working: "n(\\mathrm{NH_3})=0.500\\times2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(\\mathrm{NH_3})=1.00\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Apply the $1:3$ ratio of $\\mathrm{N_2}$ to $\\mathrm{H_2}$: $n(\\mathrm{H_2})=0.500\\times3=1.50\\ \\mathrm{mol}$.",
                working: "n(\\mathrm{H_2})=1.50\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1.00\\ \\mathrm{mol}$ (b) $1.50\\ \\mathrm{mol}$",
            commonErrors: [
              "Using $1:3$ for $\\mathrm{NH_3}$ instead of $1:2$.",
              "Reporting the amount of hydrogen remaining rather than consumed.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In the reaction $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, $2.0\\ \\mathrm{mol}$ of hydrogen reacts completely with excess oxygen. ($M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$) Calculate the mass of water produced.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$m(\\mathrm{H_2O})$ / g",
                answer: 36,
                tolerance: 0.1,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{H_2}:\\mathrm{H_2O}=2:2=1:1$",
              },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              {
                reasoning:
                  "The $1:1$ ratio gives $n(\\mathrm{H_2O})=2.0\\ \\mathrm{mol}$; convert to mass.",
                working: "m=2.0\\times18.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m=36\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State with units.",
                working: "36\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m(\\mathrm{H_2O})=36\\ \\mathrm{g}$",
            commonErrors: [
              "Using the $2:1$ ratio for oxygen and halving the answer.",
              "Answering $2.0\\ \\mathrm{mol}$ instead of a mass.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Marble chips react with excess hydrochloric acid: $\\mathrm{CaCO_3}+2\\mathrm{HCl}\\to\\mathrm{CaCl_2}+\\mathrm{H_2O}+\\mathrm{CO_2}$. $0.200\\ \\mathrm{mol}$ of $\\mathrm{CaCO_3}$ reacts completely. Find (a) $n(\\mathrm{CO_2})$, (b) $n(\\mathrm{HCl})$ required and (c) $n(\\mathrm{CaCl_2})$ produced.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{CO_2})$ / mol",
                answer: 0.2,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{HCl})$ / mol",
                answer: 0.4,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(c) $n(\\mathrm{CaCl_2})$ / mol",
                answer: 0.2,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "$\\mathrm{CaCO_3}:\\mathrm{HCl}:\\mathrm{CaCl_2}:\\mathrm{CO_2}=1:2:1:1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The $1:1$ ratio of $\\mathrm{CaCO_3}$ to $\\mathrm{CO_2}$ gives $0.200\\ \\mathrm{mol}$ of $\\mathrm{CO_2}$.",
                working: "n(\\mathrm{CO_2})=0.200\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:2$ ratio gives $n(\\mathrm{HCl})=0.200\\times2=0.400\\ \\mathrm{mol}$ required.",
                working: "n(\\mathrm{HCl})=0.400\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:1$ ratio of $\\mathrm{CaCO_3}$ to $\\mathrm{CaCl_2}$ gives $0.200\\ \\mathrm{mol}$ of $\\mathrm{CaCl_2}$.",
                working: "n(\\mathrm{CaCl_2})=0.200\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State all three answers with units.",
                working: "0.200,\\ 0.400,\\ 0.200\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.200\\ \\mathrm{mol}$ (b) $0.400\\ \\mathrm{mol}$ (c) $0.200\\ \\mathrm{mol}$",
            commonErrors: [
              "Using $1:1$ for $\\mathrm{HCl}$ instead of $1:2$.",
              "Reporting the mass of $\\mathrm{CaCl_2}$ instead of moles.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Methane burns completely in oxygen: $\\mathrm{CH_4}+2\\mathrm{O_2}\\to\\mathrm{CO_2}+2\\mathrm{H_2O}$. Find (a) the amount of $\\mathrm{O_2}$ needed to burn $6.0\\ \\mathrm{mol}$ of methane completely, (b) the amount of $\\mathrm{CO_2}$ produced and (c) the amount of $\\mathrm{H_2O}$ produced.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{O_2})$ / mol",
                answer: 12,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{CO_2})$ / mol",
                answer: 6,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(c) $n(\\mathrm{H_2O})$ / mol",
                answer: 12,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "$\\mathrm{CH_4}:\\mathrm{O_2}:\\mathrm{CO_2}:\\mathrm{H_2O}=1:2:1:2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the $1:2$ ratio of $\\mathrm{CH_4}$ to $\\mathrm{O_2}$.",
                working: "n(\\mathrm{O_2})=6.0\\times2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(\\mathrm{O_2})=12\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The $1:1$ ratio gives $n(\\mathrm{CO_2})=6.0\\ \\mathrm{mol}$ and the $1:2$ ratio gives $n(\\mathrm{H_2O})=12\\ \\mathrm{mol}$.",
                working: "6.0\\ \\mathrm{mol},\\ 12\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State all answers with units.",
                working: "12,\\ 6.0,\\ 12\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Check that all amounts are consistent with the $1:2:1:2$ ratio.",
                working: "\\text{ratio check }1:2:1:2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $12\\ \\mathrm{mol}$ (b) $6.0\\ \\mathrm{mol}$ (c) $12\\ \\mathrm{mol}$",
            commonErrors: [
              "Using $1:2$ for $\\mathrm{CO_2}$ (it is $1:1$).",
              "Halving the oxygen requirement instead of doubling.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Ammonia is produced industrially by the Haber process: $\\mathrm{N_2}+3\\mathrm{H_2}\\to2\\mathrm{NH_3}$. A reactor uses $1.0\\ \\mathrm{mol}$ of nitrogen with excess hydrogen.",
          parts: [
            {
              label: "a",
              prompt:
                "State the mole ratio of $\\mathrm{N_2}$ to $\\mathrm{NH_3}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of ammonia produced.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the amount, in moles, of hydrogen consumed.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the amount of hydrogen initially present is greater than the amount consumed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{N_2}:\\mathrm{NH_3}=1:2$ and $\\mathrm{N_2}:\\mathrm{H_2}=1:3$",
              },
              {
                kind: "definition",
                name: "Excess reactant",
                statement:
                  "A reactant present in greater amount than the mole ratio requires; some remains after reaction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Read the coefficients of $\\mathrm{N_2}$ and $\\mathrm{NH_3}$: $1$ and $2$.",
                working: "1:2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the ratio.",
                working: "\\mathrm{N_2}:\\mathrm{NH_3}=1:2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Apply the $1:2$ ratio to $1.0\\ \\mathrm{mol}$ of nitrogen.",
                working: "n(\\mathrm{NH_3})=1.0\\times2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "n(\\mathrm{NH_3})=2.0\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Apply the $1:3$ ratio of $\\mathrm{N_2}$ to $\\mathrm{H_2}$.",
                working: "n(\\mathrm{H_2})=1.0\\times3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "n(\\mathrm{H_2})=3.0\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Hydrogen is described as 'in excess', meaning more than the $3.0\\ \\mathrm{mol}$ required by the ratio is present.",
                working: "\\text{'excess' means more than required}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "The reaction stops when nitrogen is consumed; the leftover hydrogen is the unreacted excess.",
                working: "\\mathrm{N_2}\\text{ is limiting; H}_2\\text{ remains}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1:2$ (b) $2.0\\ \\mathrm{mol}$ (c) $3.0\\ \\mathrm{mol}$ (d) hydrogen is in excess, so more than $3.0\\ \\mathrm{mol}$ is present and some remains unreacted",
            commonErrors: [
              "Using the $1:2$ ratio for hydrogen instead of $1:3$.",
              "Claiming hydrogen is completely consumed.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "In the reaction $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, the coefficients show that $2\\ \\mathrm{mol}$ of hydrogen reacts with $1\\ \\mathrm{mol}$ of oxygen. The masses involved are very different: $4.0\\ \\mathrm{g}$ of hydrogen and $32\\ \\mathrm{g}$ of oxygen ($M_r(\\mathrm{H_2})=2.0$, $M_r(\\mathrm{O_2})=32.0\\ \\mathrm{g\\,mol^{-1}}$).",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why the mole ratio $2:1$ does not mean that the mass ratio is also $2:1$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the mass of oxygen needed to react completely with $4.0\\ \\mathrm{g}$ of hydrogen.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "Coefficients give the ratio in moles, not in mass or volume.",
              },
              { kind: "formula", name: "Mass from moles", statement: "$m=nM$" },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The coefficients count particles (moles); $\\mathrm{H_2}$ and $\\mathrm{O_2}$ molecules have different masses.",
                working: "\\text{coefficients count moles}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "One mole of $\\mathrm{O_2}$ ($32\\ \\mathrm{g}$) is sixteen times heavier than one mole of $\\mathrm{H_2}$ ($2.0\\ \\mathrm{g}$).",
                working: "32.0\\ \\mathrm{g\\,mol^{-1}}\\ \\text{vs}\\ 2.0\\ \\mathrm{g\\,mol^{-1}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Therefore the mass ratio ($4.0:32=1:8$) differs from the mole ratio ($2:1$); mass must be converted to moles first.",
                working: "\\text{mass ratio}\\neq\\text{mole ratio}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Convert hydrogen mass to moles: $n(\\mathrm{H_2})=\\frac{4.0}{2.0}=2.0\\ \\mathrm{mol}$; the $2:1$ ratio needs $1.0\\ \\mathrm{mol}$ of $\\mathrm{O_2}$.",
                working: "n(\\mathrm{O_2})=1.0\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Convert moles of oxygen to mass.",
                working: "m=1.0\\times32.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "m=32\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) coefficients give mole ratios; different molar masses give different mass ratios (b) $32\\ \\mathrm{g}$ of oxygen",
            commonErrors: [
              "Assuming $4.0\\ \\mathrm{g}$ of hydrogen needs $2.0\\ \\mathrm{g}$ of oxygen (halving the mass).",
              "Using the mass ratio $1:8$ as if it were the mole ratio.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the balanced equation $\\mathrm{CH_4}+2\\mathrm{O_2}\\to\\mathrm{CO_2}+2\\mathrm{H_2O}$, what is the mole ratio of $\\mathrm{O_2}$ to $\\mathrm{H_2O}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:1$" },
              { id: "b", text: "$1:2$" },
              { id: "c", text: "$1:1$" },
              { id: "d", text: "$2:2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "Coefficients give the mole ratio of any two substances in the equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Read the coefficients of $\\mathrm{O_2}$ and $\\mathrm{H_2O}$: $2$ and $2$.",
                working: "2:2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the ratio.",
                working: "2:2=1:1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $1:1$",
            commonErrors: [
              "Choosing $2:1$ by comparing $\\mathrm{O_2}$ to $\\mathrm{CH_4}$ instead of $\\mathrm{H_2O}$.",
              "Choosing $1:2$ by reversing the ratio.",
            ],
          },
        },
        {
          id: "chemsl-u1-mole-ratios-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Methane burns completely in oxygen: $\\mathrm{CH_4}+2\\mathrm{O_2}\\to\\mathrm{CO_2}+2\\mathrm{H_2O}$. A student uses the $\\mathrm{CH_4}:\\mathrm{O_2}=1:2$ ratio to calculate the amount of $\\mathrm{CO_2}$ produced from $0.50\\ \\mathrm{mol}$ of methane.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why the $1:2$ ratio cannot be used to find the amount of $\\mathrm{CO_2}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the correct amount, in moles, of $\\mathrm{CO_2}$ produced.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "Each pair of substances has its own ratio read from the coefficients.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The $1:2$ ratio relates methane to oxygen, a reactant pair; it says nothing about the product $\\mathrm{CO_2}$.",
                working: "1:2\\ \\text{is }\\mathrm{CH_4}:\\mathrm{O_2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "To find $\\mathrm{CO_2}$ the correct ratio is $\\mathrm{CH_4}:\\mathrm{CO_2}=1:1$, read directly from the coefficients.",
                working: "\\mathrm{CH_4}:\\mathrm{CO_2}=1:1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Using $1:2$ would give $1.0\\ \\mathrm{mol}$ of $\\mathrm{CO_2}$, double the true value — the error comes from mixing up which substances the coefficients relate.",
                working: "\\text{wrong pair of substances}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Apply the $1:1$ ratio to $0.50\\ \\mathrm{mol}$ of methane.",
                working: "n(\\mathrm{CO_2})=0.50\\times1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "n(\\mathrm{CO_2})=0.50\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the answer with units.",
                working: "0.50\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1:2$ is the $\\mathrm{CH_4}:\\mathrm{O_2}$ ratio; $\\mathrm{CO_2}$ needs the $\\mathrm{CH_4}:\\mathrm{CO_2}=1:1$ ratio (b) $0.50\\ \\mathrm{mol}$",
            commonErrors: [
              "Identifying the wrong ratio but still giving $1.0\\ \\mathrm{mol}$.",
              "Using the $1:2$ ratio 'in reverse' to get $0.25\\ \\mathrm{mol}$.",
            ],
          },
        },
      ],
    },
    {
      id: "chemsl-u1-reaction-calculations",
      title: "Mass-to-mass reaction calculations",
      skill:
        "Chain mass $\\rightarrow$ moles $\\rightarrow$ mole ratio $\\rightarrow$ moles $\\rightarrow$ mass (or gas volume) in reaction calculations.",
      lesson: {
        sections: [
          {
            heading: "The calculation roadmap",
            body: "Every stoichiometric calculation follows the same chain: convert the given mass to moles with $n=\\frac{m}{M}$, use the mole ratio from the balanced equation to find moles of the target substance, then convert back to mass with $m=nM$ or, for a gas at RTP, to volume with $V=n\\times24.0\\ \\mathrm{dm^3\\,mol^{-1}}$. Write each step with its unit.",
          },
          {
            heading: "Worked pattern",
            body: "For $\\mathrm{CaCO_3}+2\\mathrm{HCl}\\to\\mathrm{CaCl_2}+\\mathrm{H_2O}+\\mathrm{CO_2}$: given the mass of $\\mathrm{CaCO_3}$, find $n(\\mathrm{CaCO_3})=\\frac{m}{100.1}$; the ratio $\\mathrm{CaCO_3}:\\mathrm{CO_2}=1:1$; so $n(\\mathrm{CO_2})$ equals $n(\\mathrm{CaCO_3})$; mass of $\\mathrm{CO_2}$ is $n\\times44.0$. If the target were $\\mathrm{CaCl_2}$ the ratio is also $1:1$; for $\\mathrm{HCl}$ it would be $1:2$.",
          },
          {
            heading: "Gas volumes at RTP",
            body: "At room temperature and pressure ($25\\ \\mathrm{^\\circ C}$, $100\\ \\mathrm{kPa}$), one mole of any ideal gas occupies $24.0\\ \\mathrm{dm^3}$. IB questions state the conditions when this is required; check whether 'RTP' or specific conditions are given before using $V=24n$.",
          },
        ],
        keyFormulas: [
          { name: "Mass to moles", statement: "$n=\\frac{m}{M}$" },
          {
            name: "Mole ratio",
            statement:
              "$n_{\\mathrm{target}}=n_{\\mathrm{given}}\\times\\frac{c_{\\mathrm{target}}}{c_{\\mathrm{given}}}$",
          },
          {
            name: "Gas volume at RTP",
            statement: "$V=n\\times24.0\\ \\mathrm{dm^3}$ at RTP",
          },
        ],
        workedExample: {
          problem:
            "In $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, $2.00\\ \\mathrm{g}$ of hydrogen reacts completely with excess oxygen. Calculate the mass of water produced. ($M_r(\\mathrm{H_2})=2.0$, $M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$)",
          solution:
            "$n(\\mathrm{H_2})=\\frac{2.00}{2.0}=1.00\\ \\mathrm{mol}$. The ratio $\\mathrm{H_2}:\\mathrm{H_2O}=2:2=1:1$, so $n(\\mathrm{H_2O})=1.00\\ \\mathrm{mol}$ and $m=1.00\\times18.0=18.0\\ \\mathrm{g}$.",
        },
      },
      questions: [
        {
          id: "chemsl-u1-reaction-calculations-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, $8.0\\ \\mathrm{g}$ of hydrogen ($M_r=2.0\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess oxygen. What mass of water is produced? ($M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36\\ \\mathrm{g}$" },
              { id: "b", text: "$72\\ \\mathrm{g}$" },
              { id: "c", text: "$18\\ \\mathrm{g}$" },
              { id: "d", text: "$144\\ \\mathrm{g}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calculation chain",
                statement: "$m\\to n\\to\\text{ratio}\\to n\\to m$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$n(\\mathrm{H_2})=\\frac{8.0}{2.0}=4.0\\ \\mathrm{mol}$; ratio $\\mathrm{H_2}:\\mathrm{H_2O}=1:1$ so $n(\\mathrm{H_2O})=4.0\\ \\mathrm{mol}$.",
                working: "n(\\mathrm{H_2O})=4.0\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to mass.",
                working: "m=4.0\\times18.0=72\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $72\\ \\mathrm{g}$",
            commonErrors: [
              "Answering $36\\ \\mathrm{g}$ by using the $2:1$ oxygen ratio.",
              "Stopping at $4.0\\ \\mathrm{mol}$ without converting to mass.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Marble chips ($\\mathrm{CaCO_3}$, $M_r=100\\ \\mathrm{g\\,mol^{-1}}$) react with excess hydrochloric acid: $\\mathrm{CaCO_3}+2\\mathrm{HCl}\\to\\mathrm{CaCl_2}+\\mathrm{H_2O}+\\mathrm{CO_2}$. Calculate the mass of carbon dioxide produced from $10.0\\ \\mathrm{g}$ of $\\mathrm{CaCO_3}$. ($M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$m(\\mathrm{CO_2})$ / g",
                answer: 4.4,
                tolerance: 0.01,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{CaCO_3}:\\mathrm{CO_2}=1:1$",
              },
              {
                kind: "formula",
                name: "Amount of substance",
                statement: "$n=\\frac{m}{M}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert mass of $\\mathrm{CaCO_3}$ to moles.",
                working:
                  "n(\\mathrm{CaCO_3})=\\frac{10.0}{100}=0.100\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:1$ ratio gives $n(\\mathrm{CO_2})=0.100\\ \\mathrm{mol}$; convert to mass.",
                working: "m=0.100\\times44.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m=4.40\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m(\\mathrm{CO_2})=4.40\\ \\mathrm{g}$",
            commonErrors: [
              "Using the $1:2$ ratio for HCl and doubling the answer.",
              "Using $M_r(\\mathrm{CO_2})=28$ (CO).",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Calcium carbonate decomposes on strong heating: $\\mathrm{CaCO_3}\\to\\mathrm{CaO}+\\mathrm{CO_2}$. A $5.00\\ \\mathrm{g}$ sample is heated completely. ($M_r(\\mathrm{CaCO_3})=100$, $M_r(\\mathrm{CaO})=56.0$, $M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$; molar gas volume at RTP $=24.0\\ \\mathrm{dm^3\\,mol^{-1}}$)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{CaCO_3})$ / mol",
                answer: 0.05,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $m(\\mathrm{CaO})$ / g",
                answer: 2.8,
                tolerance: 0.01,
                unit: "g",
              },
              {
                label: "(c) $V(\\mathrm{CO_2})$ at RTP / dm$^3$",
                answer: 1.2,
                tolerance: 0.01,
                unit: "dm^3",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement:
                  "$\\mathrm{CaCO_3}:\\mathrm{CaO}:\\mathrm{CO_2}=1:1:1$",
              },
              {
                kind: "formula",
                name: "Gas volume at RTP",
                statement: "$V=n\\times24.0\\ \\mathrm{dm^3}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass to moles.",
                working:
                  "n(\\mathrm{CaCO_3})=\\frac{5.00}{100}=0.0500\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:1:1$ ratio gives $0.0500\\ \\mathrm{mol}$ of each product; convert $\\mathrm{CaO}$ to mass.",
                working:
                  "m(\\mathrm{CaO})=0.0500\\times56.0=2.80\\ \\mathrm{g}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert $\\mathrm{CO_2}$ moles to gas volume at RTP.",
                working: "V=0.0500\\times24.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the volume.",
                working: "V=1.20\\ \\mathrm{dm^3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.0500\\ \\mathrm{mol}$ (b) $2.80\\ \\mathrm{g}$ (c) $1.20\\ \\mathrm{dm^3}$",
            commonErrors: [
              "Using $24.0\\ \\mathrm{dm^3}$ per gram instead of per mole.",
              "Forgetting that $1:1:1$ means moles of $\\mathrm{CO_2}$ equals moles of $\\mathrm{CaCO_3}$.",
            ],
            examinerNote:
              "Credit mass of $\\mathrm{CO_2}$ ($2.20\\ \\mathrm{g}$) if the student uses the mass route instead of volume.",
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Ethanol burns completely in oxygen: $\\mathrm{C_2H_5OH}+3\\mathrm{O_2}\\to2\\mathrm{CO_2}+3\\mathrm{H_2O}$. A spirit burner contains $4.60\\ \\mathrm{g}$ of ethanol ($M_r(\\mathrm{C_2H_5OH})=46.0\\ \\mathrm{g\\,mol^{-1}}$, $M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$).",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of ethanol in the burner.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the mass, in grams, of carbon dioxide produced if all the ethanol burns.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the volume, in $\\mathrm{dm^3}$, of carbon dioxide produced at RTP (molar gas volume $24.0\\ \\mathrm{dm^3\\,mol^{-1}}$).",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate whether the assumption that all the ethanol burns is realistic for a spirit burner, giving one reason.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{C_2H_5OH}:\\mathrm{CO_2}=1:2$",
              },
              {
                kind: "formula",
                name: "Gas volume at RTP",
                statement: "$V=24.0n\\ \\mathrm{dm^3}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Convert mass to moles.",
                working: "n=\\frac{4.60}{46.0}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "n=0.100\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Apply the $1:2$ ratio to get $0.200\\ \\mathrm{mol}$ of $\\mathrm{CO_2}$, then convert to mass.",
                working: "m=0.200\\times44.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "m=8.80\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Convert moles of $\\mathrm{CO_2}$ to volume at RTP.",
                working: "V=0.200\\times24.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "V=4.80\\ \\mathrm{dm^3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Real burners lose ethanol as vapour and may burn incompletely (forming CO or soot), so 'all burns' is an idealisation.",
                working: "\\text{incomplete combustion / losses}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Therefore the calculated masses/volumes are maximum theoretical values.",
                working: "\\text{theoretical maximum}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.100\\ \\mathrm{mol}$ (b) $8.80\\ \\mathrm{g}$ (c) $4.80\\ \\mathrm{dm^3}$ (d) idealisation — incomplete combustion and evaporative losses mean real yield is lower",
            commonErrors: [
              "Using the $1:3$ ethanol–oxygen ratio for $\\mathrm{CO_2}$.",
              "Converting mass to volume without first finding moles.",
            ],
            examinerNote:
              "Accept any valid reason in (d): incomplete combustion, heat losses, ethanol evaporation.",
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, $4.0\\ \\mathrm{g}$ of hydrogen ($M_r=2.0\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess oxygen. What mass of water is produced? ($M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18\\ \\mathrm{g}$" },
              { id: "b", text: "$36\\ \\mathrm{g}$" },
              { id: "c", text: "$72\\ \\mathrm{g}$" },
              { id: "d", text: "$9.0\\ \\mathrm{g}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calculation chain",
                statement: "$m\\to n\\to\\text{ratio}\\to n\\to m$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$n(\\mathrm{H_2})=\\frac{4.0}{2.0}=2.0\\ \\mathrm{mol}$; ratio $\\mathrm{H_2}:\\mathrm{H_2O}=1:1$ so $n(\\mathrm{H_2O})=2.0\\ \\mathrm{mol}$.",
                working: "n(\\mathrm{H_2O})=2.0\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to mass.",
                working: "m=2.0\\times18.0=36\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $36\\ \\mathrm{g}$",
            commonErrors: [
              "Answering $18\\ \\mathrm{g}$ by using $1.0\\ \\mathrm{mol}$ of hydrogen.",
              "Answering $72\\ \\mathrm{g}$ by using the $2:1$ oxygen ratio.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In $\\mathrm{CaCO_3}+2\\mathrm{HCl}\\to\\mathrm{CaCl_2}+\\mathrm{H_2O}+\\mathrm{CO_2}$, $20.0\\ \\mathrm{g}$ of $\\mathrm{CaCO_3}$ ($M_r=100\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess acid. What mass of $\\mathrm{CO_2}$ is produced? ($M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.40\\ \\mathrm{g}$" },
              { id: "b", text: "$8.80\\ \\mathrm{g}$" },
              { id: "c", text: "$2.20\\ \\mathrm{g}$" },
              { id: "d", text: "$11.0\\ \\mathrm{g}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{CaCO_3}:\\mathrm{CO_2}=1:1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$n(\\mathrm{CaCO_3})=\\frac{20.0}{100}=0.200\\ \\mathrm{mol}$; the $1:1$ ratio gives $0.200\\ \\mathrm{mol}$ of $\\mathrm{CO_2}$, so $m=0.200\\times44.0=8.80\\ \\mathrm{g}$.",
                working: "m=0.200\\times44.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m=8.80\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $8.80\\ \\mathrm{g}$",
            commonErrors: [
              "Using $0.100\\ \\mathrm{mol}$ (the $10.0\\ \\mathrm{g}$ value) to get $4.40\\ \\mathrm{g}$.",
              "Using $M_r(\\mathrm{CO_2})=28$.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A student is given the mass of a reactant and asked to find the mass of a product. Which is the correct first step of the calculation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Convert the given mass to moles using $n=\\frac{m}{M}$" },
              { id: "b", text: "Multiply the mass by the mole ratio directly" },
              { id: "c", text: "Convert the mass to a gas volume using $24.0\\ \\mathrm{dm^3\\,mol^{-1}}$" },
              { id: "d", text: "Balance the chemical equation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calculation chain",
                statement: "$m\\to n\\to\\text{ratio}\\to n\\to m$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mole ratios relate amounts in moles, so the mass must first be converted to moles with $n=\\frac{m}{M}$.",
                working: "n=\\frac{m}{M}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only after the mole ratio has been applied and the target moles found is the mass recovered with $m=nM$.",
                working: "m=nM\\ \\text{at the end}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** convert the mass to moles first",
            commonErrors: [
              "Multiplying masses directly by the mole ratio.",
              "Converting to gas volume when the question asks for mass.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "What volume, in $\\mathrm{dm^3}$, does $0.500\\ \\mathrm{mol}$ of carbon dioxide occupy at room temperature and pressure? (molar gas volume at RTP $=24.0\\ \\mathrm{dm^3\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.0\\ \\mathrm{dm^3}$" },
              { id: "b", text: "$12.0\\ \\mathrm{dm^3}$" },
              { id: "c", text: "$24.0\\ \\mathrm{dm^3}$" },
              { id: "d", text: "$48.0\\ \\mathrm{dm^3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gas volume at RTP",
                statement: "$V=n\\times24.0\\ \\mathrm{dm^3}$ at RTP",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the amount in moles by the molar gas volume.",
                working: "V=0.500\\times24.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V=12.0\\ \\mathrm{dm^3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $12.0\\ \\mathrm{dm^3}$",
            commonErrors: [
              "Answering $24.0\\ \\mathrm{dm^3}$ (one mole) without multiplying by $0.500$.",
              "Halving again to get $6.0\\ \\mathrm{dm^3}$.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "Methane burns completely in oxygen: $\\mathrm{CH_4}+2\\mathrm{O_2}\\to\\mathrm{CO_2}+2\\mathrm{H_2O}$. $8.0\\ \\mathrm{g}$ of methane ($M_r=16.0\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess oxygen. Calculate the mass of carbon dioxide produced. ($M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$m(\\mathrm{CO_2})$ / g",
                answer: 22,
                tolerance: 0.1,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{CH_4}:\\mathrm{CO_2}=1:1$",
              },
              {
                kind: "formula",
                name: "Amount of substance",
                statement: "$n=\\frac{m}{M}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass of methane to moles.",
                working:
                  "n(\\mathrm{CH_4})=\\frac{8.0}{16.0}=0.500\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:1$ ratio gives $n(\\mathrm{CO_2})=0.500\\ \\mathrm{mol}$; convert to mass with $m=nM$.",
                working: "m=0.500\\times44.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m=22.0\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m(\\mathrm{CO_2})=22.0\\ \\mathrm{g}$",
            commonErrors: [
              "Using the $1:2$ methane–oxygen ratio to double the answer.",
              "Using $M_r(\\mathrm{CO_2})=28$ (CO).",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Marble chips react with excess hydrochloric acid: $\\mathrm{CaCO_3}+2\\mathrm{HCl}\\to\\mathrm{CaCl_2}+\\mathrm{H_2O}+\\mathrm{CO_2}$. Calculate the mass of carbon dioxide produced from $25.0\\ \\mathrm{g}$ of $\\mathrm{CaCO_3}$. ($M_r(\\mathrm{CaCO_3})=100$, $M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$m(\\mathrm{CO_2})$ / g",
                answer: 11,
                tolerance: 0.01,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{CaCO_3}:\\mathrm{CO_2}=1:1$",
              },
              {
                kind: "formula",
                name: "Amount of substance",
                statement: "$n=\\frac{m}{M}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert mass of $\\mathrm{CaCO_3}$ to moles.",
                working:
                  "n(\\mathrm{CaCO_3})=\\frac{25.0}{100}=0.250\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:1$ ratio gives $n(\\mathrm{CO_2})=0.250\\ \\mathrm{mol}$; convert to mass.",
                working: "m=0.250\\times44.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m=11.0\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m(\\mathrm{CO_2})=11.0\\ \\mathrm{g}$",
            commonErrors: [
              "Using the $1:2$ ratio for $\\mathrm{HCl}$ and doubling the answer.",
              "Forgetting that $\\mathrm{CO_2}$ and $\\mathrm{CaCO_3}$ are in a $1:1$ ratio.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Calcium carbonate decomposes on strong heating: $\\mathrm{CaCO_3}\\to\\mathrm{CaO}+\\mathrm{CO_2}$. A $10.0\\ \\mathrm{g}$ sample is heated completely ($M_r(\\mathrm{CaCO_3})=100\\ \\mathrm{g\\,mol^{-1}}$; molar gas volume at RTP $=24.0\\ \\mathrm{dm^3\\,mol^{-1}}$). Find (a) the amount of $\\mathrm{CaCO_3}$ in moles and (b) the volume of $\\mathrm{CO_2}$ produced at RTP.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{CaCO_3})$ / mol",
                answer: 0.1,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $V(\\mathrm{CO_2})$ / dm$^3$",
                answer: 2.4,
                tolerance: 0.01,
                unit: "dm^3",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{CaCO_3}:\\mathrm{CO_2}=1:1$",
              },
              {
                kind: "formula",
                name: "Gas volume at RTP",
                statement: "$V=n\\times24.0\\ \\mathrm{dm^3}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass to moles.",
                working:
                  "n(\\mathrm{CaCO_3})=\\frac{10.0}{100}=0.100\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:1$ ratio gives $n(\\mathrm{CO_2})=0.100\\ \\mathrm{mol}$.",
                working: "n(\\mathrm{CO_2})=0.100\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert moles to gas volume at RTP.",
                working: "V=0.100\\times24.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V=2.40\\ \\mathrm{dm^3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.100\\ \\mathrm{mol}$ (b) $2.40\\ \\mathrm{dm^3}$",
            commonErrors: [
              "Using $24.0\\ \\mathrm{dm^3}$ per gram instead of per mole.",
              "Using the mass of $\\mathrm{CaO}$ instead of moles of $\\mathrm{CO_2}$ for the volume.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Magnesium burns in oxygen: $2\\mathrm{Mg}+\\mathrm{O_2}\\to2\\mathrm{MgO}$. A $4.86\\ \\mathrm{g}$ piece of magnesium ($M_r(\\mathrm{Mg})=24.3\\ \\mathrm{g\\,mol^{-1}}$, $M_r(\\mathrm{MgO})=40.3\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess oxygen. Find (a) the amount of magnesium in moles, (b) the mass of $\\mathrm{MgO}$ produced and (c) the amount of oxygen consumed.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{Mg})$ / mol",
                answer: 0.2,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $m(\\mathrm{MgO})$ / g",
                answer: 8.06,
                tolerance: 0.01,
                unit: "g",
              },
              {
                label: "(c) $n(\\mathrm{O_2})$ / mol",
                answer: 0.1,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{Mg}:\\mathrm{O_2}:\\mathrm{MgO}=2:1:2$",
              },
              {
                kind: "formula",
                name: "Amount of substance",
                statement: "$n=\\frac{m}{M}$",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass of magnesium to moles.",
                working: "n(\\mathrm{Mg})=\\frac{4.86}{24.3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate: $n(\\mathrm{Mg})=0.200\\ \\mathrm{mol}$.",
                working: "n=0.200\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The $2:2$ ratio gives $n(\\mathrm{MgO})=0.200\\ \\mathrm{mol}$; convert to mass.",
                working: "m=0.200\\times40.3=8.06\\ \\mathrm{g}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $2:1$ ratio gives $n(\\mathrm{O_2})=0.100\\ \\mathrm{mol}$ consumed.",
                working: "n(\\mathrm{O_2})=0.100\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State all answers with units.",
                working: "0.200,\\ 8.06,\\ 0.100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.200\\ \\mathrm{mol}$ (b) $8.06\\ \\mathrm{g}$ (c) $0.100\\ \\mathrm{mol}$",
            commonErrors: [
              "Using the $2:1$ ratio for $\\mathrm{MgO}$ instead of $2:2$.",
              "Using $M_r(\\mathrm{MgO})=24.3$ instead of $40.3$.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Zinc reacts with excess hydrochloric acid: $\\mathrm{Zn}+2\\mathrm{HCl}\\to\\mathrm{ZnCl_2}+\\mathrm{H_2}$. A $6.50\\ \\mathrm{g}$ piece of zinc ($M_r(\\mathrm{Zn})=65.0\\ \\mathrm{g\\,mol^{-1}}$, $M_r(\\mathrm{HCl})=36.5\\ \\mathrm{g\\,mol^{-1}}$) reacts completely. The hydrogen is collected at RTP (molar gas volume $=24.0\\ \\mathrm{dm^3\\,mol^{-1}}$).",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of zinc.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the volume, in $\\mathrm{dm^3}$, of hydrogen produced at RTP.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the mass, in grams, of hydrochloric acid required.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the hydrochloric acid must be in excess for this calculation to be valid.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{Zn}:\\mathrm{HCl}:\\mathrm{H_2}=1:2:1$",
              },
              {
                kind: "formula",
                name: "Gas volume at RTP",
                statement: "$V=n\\times24.0\\ \\mathrm{dm^3}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Convert mass to moles.",
                working: "n=\\frac{6.50}{65.0}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "n=0.100\\ \\mathrm{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The $1:1$ ratio gives $n(\\mathrm{H_2})=0.100\\ \\mathrm{mol}$; convert to volume at RTP.",
                working: "V=0.100\\times24.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "V=2.40\\ \\mathrm{dm^3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The $1:2$ ratio gives $n(\\mathrm{HCl})=0.200\\ \\mathrm{mol}$; convert to mass.",
                working: "m=0.200\\times36.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "m=7.30\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The calculation assumes all the zinc reacts; this is only guaranteed if acid is present in excess so zinc is the limiting reactant.",
                working: "\\mathrm{Zn}\\text{ must be limiting}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "If acid ran out first, some zinc would remain and the calculated product amounts would be too large.",
                working: "\\text{excess ensures complete reaction of Zn}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.100\\ \\mathrm{mol}$ (b) $2.40\\ \\mathrm{dm^3}$ (c) $7.30\\ \\mathrm{g}$ (d) excess acid ensures all the zinc reacts, making zinc the limiting reactant",
            commonErrors: [
              "Using the $1:2$ ratio for $\\mathrm{H_2}$ instead of $1:1$.",
              "Converting moles of $\\mathrm{H_2}$ to mass instead of volume in (b).",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "In $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, $2.00\\ \\mathrm{g}$ of hydrogen ($M_r=2.0\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess oxygen.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why the mole ratio cannot be applied directly to masses, and describe the full calculation chain with units at each step.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the mass of water produced ($M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$).",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calculation chain",
                statement: "$m\\to n\\to\\text{ratio}\\to n\\to m$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mole ratios relate amounts in moles, so masses must be converted to moles before the ratio is applied.",
                working: "m\\to n\\text{ first}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The chain is: mass of reactant $\\rightarrow$ moles $\\rightarrow$ mole ratio $\\rightarrow$ moles of product $\\rightarrow$ mass of product.",
                working: "m\\to n\\to n\\to m",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Writing units at each step allows errors to be spotted and keeps $\\mathrm{mol}$, $\\mathrm{g}$ and $\\mathrm{dm^3}$ distinct.",
                working: "\\text{units prevent errors}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$n(\\mathrm{H_2})=\\frac{2.00}{2.0}=1.00\\ \\mathrm{mol}$; the $1:1$ ratio gives $n(\\mathrm{H_2O})=1.00\\ \\mathrm{mol}$.",
                working: "n(\\mathrm{H_2O})=1.00\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Convert to mass.",
                working: "m=1.00\\times18.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "m=18.0\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) convert mass to moles, apply mole ratio, convert back to mass; units at each step (b) $18.0\\ \\mathrm{g}$",
            commonErrors: [
              "Applying the ratio to $2.00\\ \\mathrm{g}$ directly.",
              "Stopping at $1.00\\ \\mathrm{mol}$ of water without converting to mass.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In $\\mathrm{CaCO_3}+2\\mathrm{HCl}\\to\\mathrm{CaCl_2}+\\mathrm{H_2O}+\\mathrm{CO_2}$, $5.0\\ \\mathrm{g}$ of $\\mathrm{CaCO_3}$ ($M_r=100\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess acid. What mass of carbon dioxide is produced? ($M_r(\\mathrm{CO_2})=44.0\\ \\mathrm{g\\,mol^{-1}}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.40\\ \\mathrm{g}$" },
              { id: "b", text: "$2.20\\ \\mathrm{g}$" },
              { id: "c", text: "$8.80\\ \\mathrm{g}$" },
              { id: "d", text: "$1.10\\ \\mathrm{g}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole ratio",
                statement: "$\\mathrm{CaCO_3}:\\mathrm{CO_2}=1:1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$n(\\mathrm{CaCO_3})=\\frac{5.0}{100}=0.050\\ \\mathrm{mol}$; the $1:1$ ratio gives $m(\\mathrm{CO_2})=0.050\\times44.0=2.20\\ \\mathrm{g}$.",
                working: "m=0.050\\times44.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m=2.20\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $2.20\\ \\mathrm{g}$",
            commonErrors: [
              "Doubling the answer using the $1:2$ HCl ratio.",
              "Using $0.100\\ \\mathrm{mol}$ (from $10.0\\ \\mathrm{g}$) to get $4.40\\ \\mathrm{g}$.",
            ],
          },
        },
        {
          id: "chemsl-u1-reaction-calculations-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "In $2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}$, $4.0\\ \\mathrm{g}$ of hydrogen ($M_r=2.0\\ \\mathrm{g\\,mol^{-1}}$) reacts completely with excess oxygen. A student calculates $n(\\mathrm{H_2O})=2.0\\ \\mathrm{mol}$ and writes this as the final answer to a question asking for the mass of water produced.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why the student's answer is incomplete.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the correct mass of water produced ($M_r(\\mathrm{H_2O})=18.0\\ \\mathrm{g\\,mol^{-1}}$).",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calculation chain",
                statement: "$m\\to n\\to\\text{ratio}\\to n\\to m$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The question asks for a mass in grams, but $2.0\\ \\mathrm{mol}$ is an amount of substance, not a mass.",
                working: "\\text{mol}\\neq\\text{g}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The final step of the calculation chain is converting moles of product back to mass with $m=nM$.",
                working: "m=nM\\ \\text{final step}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Stopping at moles loses the final conversion and answers a different question.",
                working: "\\text{must finish the chain}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The student's $n(\\mathrm{H_2O})=2.0\\ \\mathrm{mol}$ is correct (ratio $1:1$ from $2.0\\ \\mathrm{mol}$ of $\\mathrm{H_2}$).",
                working: "n(\\mathrm{H_2O})=2.0\\ \\mathrm{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Convert to mass.",
                working: "m=2.0\\times18.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "m=36\\ \\mathrm{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) moles are not grams; the mass must be found with $m=nM$ (b) $36\\ \\mathrm{g}$",
            commonErrors: [
              "Claiming the mole answer is correct but forgetting units.",
              "Recomputing the moles incorrectly instead of finishing the conversion.",
            ],
          },
        },
      ],
    },
  ],
};
