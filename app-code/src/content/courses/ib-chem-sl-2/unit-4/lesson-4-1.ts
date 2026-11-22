import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "chemsl-u4-lesson-4-1",
  code: "4-1",
  title: "Limiting Reagent and Percentage Yield",
  goal: "I CAN use a balanced equation to identify the limiting reagent, calculate the theoretical yield of a product, and determine percentage yield and atom economy.",
  standards: ["Paper 1", "Paper 2", "Topic 1.3", "Topic 1.4", "Topic 1.5"],
  vocabulary: [
    {
      term: "Limiting reagent",
      definition:
        "The reactant that is completely consumed first in a reaction; it determines the maximum amount of product that can form.",
    },
    {
      term: "Excess reagent",
      definition:
        "A reactant present in a greater amount than required by the balanced equation; some of it remains after the reaction.",
    },
    {
      term: "Theoretical yield",
      definition:
        "The maximum mass or amount of product that could be formed from the limiting reagent, assuming complete reaction and no losses.",
    },
    {
      term: "Percentage yield",
      definition:
        "The ratio of the actual yield to the theoretical yield expressed as a percentage: $100 \\times \\text{actual} / \\text{theoretical}$.",
    },
    {
      term: "Atom economy",
      definition:
        "The percentage of the total mass of reactants that ends up in the desired product, calculated from the balanced equation.",
    },
    {
      term: "Mole ratio",
      definition:
        "The ratio of amounts in moles of reactants and products given by the coefficients in a balanced equation.",
    },
  ],
  concepts: [
    {
      id: "chemsl-u4-limiting",
      title: "Limiting reagent and theoretical yield",
      skill:
        "Convert masses to moles, use the mole ratio from a balanced equation to identify the limiting reagent and calculate the theoretical yield.",
      lesson: {
        sections: [
          {
            heading: "Mole ratios from balanced equations",
            body: "A balanced equation gives the **mole ratio** of reactants to products. For example, in $2\\mathrm{Na} + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{NaCl}$, $2$ mol of sodium react with $1$ mol of chlorine to give $2$ mol of sodium chloride. To use this quantitatively, convert every mass to moles with $n = \\frac{m}{M_r}$, then scale by the mole ratio.",
          },
          {
            heading: "Identifying the limiting reagent",
            body: "The limiting reagent is the reactant that runs out first. For each reactant, work out how much of the *other* reactant would be needed to consume it completely; the reactant for which the required amount of partner exceeds what is available is limiting. Equivalently, compare the ratio of moles available with the ratio required by the equation — the smallest relative amount is limiting. The excess reagent is left over after the reaction.",
          },
          {
            heading: "Theoretical yield",
            body: "Once the limiting reagent is known, the **theoretical yield** follows from the mole ratio: multiply the moles of the limiting reagent by the product-to-reactant ratio, then convert back to mass with $m = n \\times M_r$. This is the maximum possible; the actual yield is usually lower because of side reactions, incomplete reaction or losses during separation.",
          },
        ],
        keyFormulas: [
          {
            name: "Amount in moles",
            statement:
              "$n = \\dfrac{m}{M_r}$, where $m$ is mass in grams and $M_r$ the molar mass",
          },
          {
            name: "Mole ratio",
            statement:
              "Coefficients in the balanced equation give the ratio of moles of reactants and products",
          },
          {
            name: "Theoretical mass of product",
            statement:
              "$m = n_{\\text{limiting}} \\times \\text{mole ratio} \\times M_r(\\text{product})$",
          },
        ],
        workedExample: {
          problem:
            "A mixture of $4.6$ g of sodium ($A_r = 23.0$) and $7.1$ g of chlorine ($A_r = 35.5$) is allowed to react: $2\\mathrm{Na} + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{NaCl}$. Identify the limiting reagent and calculate the theoretical mass of NaCl formed.",
          solution:
            "$n(\\mathrm{Na}) = \\frac{4.6}{23.0} = 0.20$ mol and $n(\\mathrm{Cl}_2) = \\frac{7.1}{71.0} = 0.10$ mol. The equation requires $2$ mol Na per $1$ mol $\\mathrm{Cl}_2$: $0.20$ mol Na needs exactly $0.10$ mol $\\mathrm{Cl}_2$ and $0.10$ mol $\\mathrm{Cl}_2$ needs exactly $0.20$ mol Na. The reactants are in the exact mole ratio $2:1$, so both are fully consumed. From the $2:2$ ratio, $n(\\mathrm{NaCl}) = 0.20$ mol, giving $m = 0.20 \\times 58.5 = 11.7$ g.",
        },
      },
      questions: [
        {
          id: "chemsl-u4-limiting-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the reaction $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightarrow 2\\mathrm{NH}_3$, a mixture contains $0.50$ mol of nitrogen and $0.80$ mol of hydrogen. Which is the limiting reagent?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Neither — the reactants are in the exact mole ratio",
              },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Both reactants are limiting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting reagent",
                statement:
                  "The reactant completely consumed first; it fixes the maximum amount of product.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The equation requires $3$ mol $\\mathrm{H}_2$ per $1$ mol $\\mathrm{N}_2$.",
                working:
                  "3 \\times 0.50 = 1.50\\ \\text{mol H}_2 \\text{ needed}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only $0.80$ mol of hydrogen is available, which is less than required, so hydrogen runs out first.",
                working:
                  "0.80 < 1.50 \\Rightarrow \\mathrm{H}_2\\ \\text{limiting}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Hydrogen",
            commonErrors: [
              "Choosing the reactant with the larger amount of moles rather than the smaller amount relative to the required ratio.",
              "Comparing masses instead of moles.",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$0.10$ mol of magnesium reacts with excess hydrochloric acid: $\\mathrm{Mg} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl}_2 + \\mathrm{H}_2$. What volume of hydrogen gas is produced at room temperature and pressure, where the molar volume of a gas is $24$ dm$^3$ mol$^{-1}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.4$ dm$^3$" },
              { id: "b", text: "$4.8$ dm$^3$" },
              { id: "c", text: "$0.24$ dm$^3$" },
              { id: "d", text: "$1.2$ dm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The equation shows $1$ mol Mg produces $1$ mol $\\mathrm{H}_2$; acid is in excess so Mg is limiting.",
              },
              {
                kind: "formula",
                name: "Gas volume",
                statement: "$V = n \\times 24$ dm$^3$ mol$^{-1}$ at r.t.p.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use the $1:1$ mole ratio between Mg and $\\mathrm{H}_2$.",
                working:
                  "n(\\mathrm{H}_2) = n(\\mathrm{Mg}) = 0.10\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert moles of gas to volume at r.t.p.",
                working: "V = 0.10 \\times 24 = 2.4\\ \\text{dm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the matching option.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $2.4$ dm$^3$",
            commonErrors: [
              "Doubling the volume because of the coefficient $2$ in front of HCl (the ratio that matters is Mg to $\\mathrm{H}_2$).",
              "Using $22.4$ dm$^3$ mol$^{-1}$ (the value at s.t.p., not r.t.p.).",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A mixture of $28$ g of nitrogen ($A_r = 14.0$) and $9.0$ g of hydrogen ($A_r = 1.0$) is sparked to form ammonia: $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightarrow 2\\mathrm{NH}_3$. What mass of ammonia ($M_r = 17.0$) is produced at most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$51$ g" },
              { id: "b", text: "$34$ g" },
              { id: "c", text: "$68$ g" },
              { id: "d", text: "$17$ g" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "The reactant that is consumed first determines the amount of product.",
              },
            ],
            steps: [
              {
                reasoning: "Convert both masses to moles.",
                working:
                  "n(\\mathrm{N}_2) = \\frac{28}{28} = 1.0\\ \\text{mol};\\quad n(\\mathrm{H}_2) = \\frac{9.0}{2.0} = 4.5\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The equation needs $3$ mol $\\mathrm{H}_2$ per $1$ mol $\\mathrm{N}_2$; $1.0$ mol $\\mathrm{N}_2$ would need $3.0$ mol $\\mathrm{H}_2$ and $4.5$ mol $\\mathrm{H}_2$ would need $1.5$ mol $\\mathrm{N}_2$. Nitrogen is limiting.",
                working:
                  "\\text{ratio needed } 1:3;\\ \\text{available } 1:4.5 \\Rightarrow \\mathrm{N}_2\\ \\text{limiting}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "From the $1:2$ mole ratio, $1.0$ mol $\\mathrm{N}_2$ gives $2.0$ mol $\\mathrm{NH}_3$.",
                working: "n(\\mathrm{NH}_3) = 2.0\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to mass.",
                working: "m = 2.0 \\times 17.0 = 34\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $34$ g",
            commonErrors: [
              "Using the mass ratio instead of the mole ratio.",
              "Taking hydrogen as limiting because $4.5$ mol is the larger amount.",
            ],
            examinerNote:
              "Award M1 for correct mole calculations, M1 for identifying N$_2$ as limiting, M1 for the mole ratio applied correctly, A1 for 34 g.",
          },
        },
        {
          id: "chemsl-u4-limiting-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student reacts $5.4$ g of aluminium ribbon ($A_r = 27.0$) with $25.0$ cm$^3$ of $1.00$ mol dm$^{-3}$ hydrochloric acid. The reaction is $2\\mathrm{Al} + 6\\mathrm{HCl} \\rightarrow 2\\mathrm{AlCl}_3 + 3\\mathrm{H}_2$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of aluminium and of hydrochloric acid used.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify the limiting reagent, justifying your answer with the mole ratio.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the theoretical mass of hydrogen gas produced ($A_r$ of H $= 1.0$).",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The student collects $0.0200$ g of hydrogen. Calculate the percentage yield and suggest one reason why it is below $100\\%$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement:
                  "$n = \\frac{m}{M_r}$ for solids and $n = cV$ for solutions (V in dm$^3$).",
              },
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "The reactant consumed first fixes the maximum product.",
              },
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Moles of aluminium from mass; moles of acid from concentration and volume.",
                working:
                  "n(\\mathrm{Al}) = \\frac{5.4}{27.0} = 0.200\\ \\text{mol};\\quad n(\\mathrm{HCl}) = 1.00 \\times \\frac{25.0}{1000} = 0.0250\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The equation needs $3$ mol HCl per $1$ mol Al, so $0.200$ mol Al would need $0.600$ mol HCl — far more than the $0.0250$ mol available.",
                working:
                  "0.600 > 0.0250 \\Rightarrow \\mathrm{HCl}\\ \\text{is limiting}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Apply the $6:3 = 2:1$ mole ratio of HCl to $\\mathrm{H}_2$, then convert to mass.",
                working:
                  "n(\\mathrm{H}_2) = \\frac{3}{6} \\times 0.0250 = 0.0125\\ \\text{mol};\\quad m = 0.0125 \\times 2.0 = 0.0250\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Percentage yield compares actual with theoretical mass.",
                working:
                  "\\%\\ \\text{yield} = \\frac{0.0200}{0.0250} \\times 100 = 80.0\\%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Hydrogen is a gas and can escape before it is collected, or the aluminium may be impure or the reaction incomplete.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $0.200$ mol Al, $0.0250$ mol HCl (b) HCl is limiting (c) $0.0250$ g $\\mathrm{H}_2$ (d) $80.0\\%$; hydrogen can escape as a gas before collection",
            commonErrors: [
              "Using the mole ratio $2:6$ incorrectly — the HCl to $\\mathrm{H}_2$ ratio is $6:3$.",
              "Comparing $0.200$ mol Al with $0.0250$ mol HCl directly without applying the ratio.",
              "Expressing the volume as $0.0250$ dm$^3$ instead of converting to moles.",
            ],
            examinerNote:
              "Award M1 for each correct mole calculation in (a), A1 for correct limiting reagent identification in (b), M1 for the correct mole ratio and A1 for the mass in (c), M1 for the percentage yield method and R1 for a valid reason in (d). Accept any chemically valid reason for yield loss.",
          },
        },
        {
          id: "chemsl-u4-limiting-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the reaction $2\\mathrm{H}_2 + \\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O}$, a mixture contains $0.50$ mol of hydrogen and $0.50$ mol of oxygen. Which reactant is present in excess?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both reactants are in excess" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Oxygen" },
              {
                id: "d",
                text: "Neither — the reactants are in the exact mole ratio",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Excess reagent",
                statement:
                  "A reactant present in a greater amount than the balanced equation requires; some remains after the reaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The equation requires $2$ mol $\\mathrm{H}_2$ per $1$ mol $\\mathrm{O}_2$, so $0.50$ mol $\\mathrm{H}_2$ needs only $0.25$ mol $\\mathrm{O}_2$.",
                working:
                  "\\frac{0.50}{2} = 0.25\\ \\text{mol O}_2 \\text{ needed}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$0.50$ mol of oxygen is available, more than the $0.25$ mol required, so oxygen is in excess and hydrogen is limiting.",
                working:
                  "0.50 > 0.25 \\Rightarrow \\mathrm{O}_2\\ \\text{excess}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Oxygen",
            commonErrors: [
              "Choosing the reactant with the larger amount of moles rather than the smaller amount relative to the required ratio.",
              "Assuming equal mole amounts mean both reactants are exactly stoichiometric.",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$0.20$ mol of calcium carbonate reacts completely with excess hydrochloric acid: $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$. What amount of carbon dioxide is produced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.20$ mol" },
              { id: "b", text: "$0.050$ mol" },
              { id: "c", text: "$0.10$ mol" },
              { id: "d", text: "$0.40$ mol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The coefficients show $1$ mol $\\mathrm{CaCO}_3$ produces $1$ mol $\\mathrm{CO}_2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the $1:1$ mole ratio between carbonate and carbon dioxide; acid is in excess so all the carbonate reacts.",
                working:
                  "n(\\mathrm{CO}_2) = n(\\mathrm{CaCO}_3) = 0.20\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the matching option.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $0.20$ mol",
            commonErrors: [
              "Applying the $1:2$ carbonate-to-acid ratio to the product instead of the acid.",
              "Doubling the amount because there are two product molecules besides water.",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "$5.4$ g of aluminium powder ($A_r = 27.0$) is mixed with $14.2$ g of chlorine gas ($A_r = 35.5$): $2\\mathrm{Al} + 3\\mathrm{Cl}_2 \\rightarrow 2\\mathrm{AlCl}_3$. What is the maximum mass of aluminium chloride ($M_r = 133.5$) that can form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$26.7$ g" },
              { id: "b", text: "$35.6$ g" },
              { id: "c", text: "$17.8$ g" },
              { id: "d", text: "$13.4$ g" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "The reactant consumed first fixes the maximum amount of product.",
              },
            ],
            steps: [
              {
                reasoning: "Convert both masses to moles.",
                working:
                  "n(\\mathrm{Al}) = \\frac{5.4}{27.0} = 0.20\\ \\text{mol};\\quad n(\\mathrm{Cl}_2) = \\frac{14.2}{71.0} = 0.20\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The equation needs $3$ mol $\\mathrm{Cl}_2$ per $2$ mol Al, so $0.20$ mol Al needs $0.30$ mol $\\mathrm{Cl}_2$ — only $0.20$ mol is available. Chlorine is limiting; $0.20$ mol $\\mathrm{Cl}_2$ gives $\\frac{2}{3} \\times 0.20 = 0.133$ mol $\\mathrm{AlCl}_3$.",
                working:
                  "n(\\mathrm{AlCl}_3) = \\frac{2}{3} \\times 0.20 = 0.133\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to mass.",
                working: "m = 0.133 \\times 133.5 = 17.8\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $17.8$ g",
            commonErrors: [
              "Using aluminium as limiting and obtaining $26.7$ g.",
              "Using $M_r(\\mathrm{Cl}_2) = 35.5$ instead of $71.0$.",
            ],
            examinerNote:
              "Award M1 for both correct mole conversions, M1 for the correct limiting reagent and mole ratio, A1 for 17.8 g.",
          },
        },
        {
          id: "chemsl-u4-limiting-q8",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Calculate the amount, in moles, of sodium chloride in $11.7$ g of NaCl ($M_r = 58.5$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$n$ / mol",
                answer: 0.2,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute the mass and molar mass into $n = \\frac{m}{M_r}$.",
                working: "n = \\frac{11.7}{58.5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.200\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n = 0.200$ mol",
            commonErrors: ["Inverting the ratio to obtain $5.00$ mol."],
          },
        },
        {
          id: "chemsl-u4-limiting-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "$24.5$ g of potassium chlorate(V) decomposes on heating: $2\\mathrm{KClO}_3 \\rightarrow 2\\mathrm{KCl} + 3\\mathrm{O}_2$ ($M_r(\\mathrm{KClO}_3) = 122.5$). Calculate the amount, in moles, of oxygen gas produced.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$n(\\mathrm{O}_2)$ / mol",
                answer: 0.3,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$2$ mol $\\mathrm{KClO}_3$ produce $3$ mol $\\mathrm{O}_2$.",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass of chlorate to moles.",
                working:
                  "n(\\mathrm{KClO}_3) = \\frac{24.5}{122.5} = 0.200\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $2:3$ mole ratio.",
                working: "n(\\mathrm{O}_2) = \\frac{3}{2} \\times 0.200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n(\\mathrm{O}_2) = 0.300\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n(\\mathrm{O}_2) = 0.300$ mol",
            commonErrors: [
              "Using the $2:1$ ratio of $\\mathrm{KClO}_3$ to $\\mathrm{KCl}$ instead of $2:3$ for oxygen.",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "$11.2$ g of iron filings ($A_r = 56.0$) reacts completely with excess hydrochloric acid: $\\mathrm{Fe} + 2\\mathrm{HCl} \\rightarrow \\mathrm{FeCl}_2 + \\mathrm{H}_2$. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{H}_2)$ / mol",
                answer: 0.2,
                tolerance: 0.001,
                unit: "mol",
              },
              {
                label: "(b) $m(\\mathrm{H}_2)$ / g",
                answer: 0.4,
                tolerance: 0.001,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement: "$1$ mol Fe produces $1$ mol $\\mathrm{H}_2$.",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass of iron to moles.",
                working:
                  "n(\\mathrm{Fe}) = \\frac{11.2}{56.0} = 0.200\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $1:1$ mole ratio for hydrogen.",
                working: "n(\\mathrm{H}_2) = 0.200\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert moles of hydrogen to mass using $M_r(\\mathrm{H}_2) = 2.0$.",
                working: "m = 0.200 \\times 2.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m = 0.400\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.200$ mol (b) $0.400$ g",
            commonErrors: [
              "Using $M_r(\\mathrm{H}_2) = 1.0$ instead of $2.0$.",
              "Applying the $1:2$ Fe-to-HCl ratio to the product.",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "$7.4$ g of calcium hydroxide ($M_r = 74.0$) is reacted with $40.0$ cm$^3$ of $2.00$ mol dm$^{-3}$ hydrochloric acid: $\\mathrm{Ca(OH)}_2 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + 2\\mathrm{H}_2\\mathrm{O}$. Calculate the mass of calcium chloride ($M_r = 111$) formed.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{HCl})$ / mol",
                answer: 0.08,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{CaCl}_2)$ / mol",
                answer: 0.04,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(c) $m(\\mathrm{CaCl}_2)$ / g",
                answer: 4.44,
                tolerance: 0.01,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement:
                  "$n = \\frac{m}{M_r}$ for solids and $n = cV$ for solutions.",
              },
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "The reactant consumed first fixes the maximum product.",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass of calcium hydroxide to moles.",
                working:
                  "n(\\mathrm{Ca(OH)}_2) = \\frac{7.4}{74.0} = 0.100\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find moles of hydrochloric acid from concentration and volume.",
                working:
                  "n(\\mathrm{HCl}) = 2.00 \\times \\frac{40.0}{1000} = 0.0800\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The equation needs $2$ mol HCl per $1$ mol $\\mathrm{Ca(OH)}_2$, so $0.100$ mol of base would need $0.200$ mol HCl — only $0.0800$ mol is available, so HCl is limiting.",
                working:
                  "0.200 > 0.0800 \\Rightarrow \\mathrm{HCl}\\ \\text{limiting}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply the $2:1$ mole ratio of HCl to $\\mathrm{CaCl}_2$.",
                working:
                  "n(\\mathrm{CaCl}_2) = \\frac{0.0800}{2} = 0.0400\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to mass.",
                working: "m = 0.0400 \\times 111 = 4.44\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.0800$ mol (b) $0.0400$ mol (c) $4.44$ g",
            commonErrors: [
              "Using the calcium hydroxide as limiting and getting $5.55$ g.",
              "Applying the $1:2$ ratio in the wrong direction.",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "$2.70$ g of aluminium powder ($A_r = 27.0$) is added to $100$ cm$^3$ of $0.500$ mol dm$^{-3}$ hydrochloric acid. The reaction is $2\\mathrm{Al} + 6\\mathrm{HCl} \\rightarrow 2\\mathrm{AlCl}_3 + 3\\mathrm{H}_2$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of aluminium and of hydrochloric acid used.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify the limiting reagent, justifying your answer with the mole ratio.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the theoretical mass of hydrogen gas produced ($A_r$ of H $= 1.0$).",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Only $0.0400$ g of hydrogen is collected. Calculate the percentage yield and suggest one reason why it is below $100\\%$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement:
                  "$n = \\frac{m}{M_r}$ for solids and $n = cV$ for solutions.",
              },
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "The reactant consumed first fixes the maximum product.",
              },
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Moles of aluminium from mass; moles of acid from concentration and volume.",
                working:
                  "n(\\mathrm{Al}) = \\frac{2.70}{27.0} = 0.100\\ \\text{mol};\\quad n(\\mathrm{HCl}) = 0.500 \\times \\frac{100}{1000} = 0.0500\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The equation needs $6$ mol HCl per $2$ mol Al (i.e. $3$ mol per $1$ mol), so $0.100$ mol Al would need $0.300$ mol HCl — far more than the $0.0500$ mol available.",
                working:
                  "0.300 > 0.0500 \\Rightarrow \\mathrm{HCl}\\ \\text{is limiting}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Apply the $6:3 = 2:1$ mole ratio of HCl to $\\mathrm{H}_2$, then convert to mass.",
                working:
                  "n(\\mathrm{H}_2) = \\frac{3}{6} \\times 0.0500 = 0.0250\\ \\text{mol};\\quad m = 0.0250 \\times 2.0 = 0.0500\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Percentage yield compares actual with theoretical mass.",
                working:
                  "\\%\\ \\text{yield} = \\frac{0.0400}{0.0500} \\times 100 = 80.0\\%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Hydrogen is a gas and can escape before it is collected, or the aluminium may be impure or the reaction incomplete.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $0.100$ mol Al, $0.0500$ mol HCl (b) HCl is limiting (c) $0.0500$ g $\\mathrm{H}_2$ (d) $80.0\\%$; hydrogen can escape as a gas before collection",
            commonErrors: [
              "Using the $2:6$ ratio in the wrong direction — the HCl to $\\mathrm{H}_2$ ratio is $6:3$.",
              "Comparing $0.100$ mol Al with $0.0500$ mol HCl directly without applying the ratio.",
              "Leaving the acid volume in cm$^3$ when finding moles.",
            ],
            examinerNote:
              "Award M1 for each correct mole calculation in (a), A1 for correct limiting reagent identification in (b), M1 for the correct mole ratio and A1 for the mass in (c), M1 for the percentage yield method and B1 for a valid reason in (d). Accept any chemically valid reason for yield loss.",
          },
        },
        {
          id: "chemsl-u4-limiting-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "$11.2$ g of iron powder ($A_r = 56.0$) is reacted with $6.4$ g of sulfur powder ($A_r = 32.0$): $\\mathrm{Fe} + \\mathrm{S} \\rightarrow \\mathrm{FeS}$. In this experiment the actual mass of iron(II) sulfide ($M_r = 88.0$) obtained is $15.0$ g.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of iron and of sulfur used.",
              marks: 2,
            },
            { label: "b", prompt: "Identify the limiting reagent.", marks: 2 },
            {
              label: "c",
              prompt:
                "Calculate the theoretical mass of iron(II) sulfide that could be formed.",
              marks: 2,
            },
            { label: "d", prompt: "Calculate the percentage yield.", marks: 2 },
            {
              label: "e",
              prompt:
                "Suggest two reasons why the actual yield is less than $100\\%$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "The reactant consumed first fixes the maximum product.",
              },
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Convert both masses to moles.",
                working:
                  "n(\\mathrm{Fe}) = \\frac{11.2}{56.0} = 0.200\\ \\text{mol};\\quad n(\\mathrm{S}) = \\frac{6.4}{32.0} = 0.200\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The equation requires $1$ mol Fe per $1$ mol S; $0.200$ mol of each is the exact stoichiometric ratio, so both reactants are fully consumed and neither is in excess.",
                working:
                  "0.200 : 0.200 = 1 : 1 \\Rightarrow \\text{exact ratio}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the $1:1$ mole ratio and convert to mass.",
                working:
                  "n(\\mathrm{FeS}) = 0.200\\ \\text{mol};\\quad m = 0.200 \\times 88.0 = 17.6\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Apply the percentage yield formula.",
                working:
                  "\\%\\ \\text{yield} = \\frac{15.0}{17.6} \\times 100 = 85.2\\%",
                marks: 2,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Yields below $100\\%$ arise from incomplete reaction, losses during separation or transfer, or impurities in the reactants.",
                working:
                  "\\text{incomplete reaction / transfer losses / impurities}",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $0.200$ mol each (b) exact $1:1$ ratio — both fully consumed (c) $17.6$ g (d) $85.2\\%$ (e) e.g. incomplete reaction and losses when collecting the solid",
            commonErrors: [
              "Forcing a limiting reagent when the amounts are already in the exact ratio.",
              "Using $M_r(\\mathrm{FeS}) = 56.0$ instead of $88.0$.",
            ],
            examinerNote:
              "In (b) accept 'neither — both are fully consumed' with justification. Award B1 for each valid reason in (e).",
          },
        },
        {
          id: "chemsl-u4-limiting-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For the reaction $2\\mathrm{Na} + \\\mathrm{Cl}_2 \\rightarrow 2\\mathrm{NaCl}$, a mixture contains $0.40$ mol of sodium and $0.30$ mol of chlorine. What is the maximum amount of sodium chloride that can form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.40$ mol" },
              { id: "b", text: "$0.60$ mol" },
              { id: "c", text: "$0.30$ mol" },
              { id: "d", text: "$0.80$ mol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "The reactant consumed first fixes the maximum product.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The equation needs $2$ mol Na per $1$ mol $\\mathrm{Cl}_2$. With $0.40$ mol Na and $0.30$ mol $\\mathrm{Cl}_2$, the ratio $0.40:0.30 = 1.33:1$ is less than the required $2:1$, so sodium is the limiting reagent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The mole ratio Na : NaCl is $1:1$, so $0.40$ mol Na produces $0.40$ mol NaCl.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
            commonErrors: [
              "Assuming chlorine is limiting without checking the mole ratio.",
              "Using the $2:1$ Na:Cl$_2$ ratio on the product instead of the $1:1$ Na:NaCl ratio.",
            ],
          },
        },
        {
          id: "chemsl-u4-limiting-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What amount, in moles, of sodium hydroxide is contained in $2.00$ dm$^3$ of a $0.250$ mol dm$^{-3}$ solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.500$ mol" },
              { id: "b", text: "$2.00$ mol" },
              { id: "c", text: "$0.125$ mol" },
              { id: "d", text: "$0.250$ mol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply concentration by volume in dm$^3$.",
                working: "n = 0.250 \\times 2.00",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.500\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $0.500$ mol",
            commonErrors: ["Dividing by concentration instead of multiplying."],
          },
        },
        {
          id: "chemsl-u4-limiting-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "$1.20$ g of magnesium ribbon ($A_r = 24.0$) reacts completely with excess hydrochloric acid: $\\mathrm{Mg} + 2\\mathrm{HCl} \\rightarrow \\mathrm{MgCl}_2 + \\mathrm{H}_2$. Calculate the mass of hydrogen gas produced ($A_r$ of H $= 1.0$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$m(\\mathrm{H}_2)$ / g",
                answer: 0.1,
                tolerance: 0.001,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The equation shows $1$ mol Mg produces $1$ mol $\\mathrm{H}_2$; the acid is in excess so Mg is limiting.",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass of magnesium to moles.",
                working:
                  "n(\\mathrm{Mg}) = \\frac{1.20}{24.0} = 0.0500\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $1:1$ mole ratio to hydrogen.",
                working: "n(\\mathrm{H}_2) = 0.0500\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert to mass using $M_r(\\mathrm{H}_2) = 2.0$ and evaluate.",
                working: "m = 0.0500 \\times 2.0 = 0.100\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m(\\mathrm{H}_2) = 0.100$ g",
            commonErrors: [
              "Using $M_r(\\mathrm{H}_2) = 1.0$ instead of $2.0$.",
              "Applying the $1:2$ Mg:HCl ratio to the hydrogen product.",
            ],
          },
        },
      ],
    },
    {
      id: "chemsl-u4-yield",
      title: "Percentage yield and atom economy",
      skill:
        "Distinguish percentage yield from atom economy and calculate both for reactions, including reactions with by-products.",
      lesson: {
        sections: [
          {
            heading: "Percentage yield",
            body: "The **percentage yield** measures how efficiently a reaction converts reactants into the desired product: $100 \\times \\text{actual yield} / \\text{theoretical yield}$. It is always $100\\%$ or less. Yields below $100\\%$ arise from side reactions, incomplete reaction, losses when transferring or purifying the product, and impurities in the reactants.",
          },
          {
            heading: "Atom economy",
            body: "**Atom economy** asks a different question: what fraction of the total mass of reactants ends up in the desired product? It is calculated from the balanced equation alone — $100 \\times M_r(\\text{desired product}) / \\sum M_r(\\text{reactants})$ — so it does not depend on how much product is actually obtained. Addition reactions have an atom economy of $100\\%$ because no atoms are wasted; reactions with by-products such as combustion or substitution have lower atom economies.",
          },
          {
            heading: "Why both matter",
            body: "A process can have a high atom economy but a low percentage yield (much reactant wasted as unreacted material), or vice versa. Green chemistry prefers processes with high atom economy because they generate less waste. For example, the hydration of ethene, $\\mathrm{C}_2\\mathrm{H}_4 + \\mathrm{H}_2\\mathrm{O} \\rightarrow \\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}$, incorporates every atom of reactant into ethanol (atom economy $100\\%$), whereas fermentation of glucose produces carbon dioxide as a by-product (atom economy about $51\\%$).",
          },
        ],
        keyFormulas: [
          {
            name: "Percentage yield",
            statement:
              "$\\%\\ \\text{yield} = \\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$",
          },
          {
            name: "Atom economy",
            statement:
              "$\\%\\ \\text{AE} = \\dfrac{M_r(\\text{desired product})}{\\sum M_r(\\text{reactants})} \\times 100$",
          },
          {
            name: "Addition reactions",
            statement:
              "All atoms of the reactants appear in the product, so atom economy $= 100\\%$",
          },
        ],
        workedExample: {
          problem:
            "In the reaction $\\mathrm{CH}_4 + \\mathrm{Cl}_2 \\rightarrow \\mathrm{CH}_3\\mathrm{Cl} + \\mathrm{HCl}$, calculate the atom economy for the production of chloromethane ($M_r(\\mathrm{CH}_4) = 16.0$, $M_r(\\mathrm{Cl}_2) = 71.0$, $M_r(\\mathrm{CH}_3\\mathrm{Cl}) = 50.5$).",
          solution:
            "Total mass of reactants $= 16.0 + 71.0 = 87.0$. Atom economy $= \\frac{50.5}{87.0} \\times 100 = 58.0\\%$. The remaining $42.0\\%$ of the mass ends up as hydrogen chloride, a by-product.",
        },
      },
      questions: [
        {
          id: "chemsl-u4-yield-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which expression defines percentage yield?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$100 \\times \\dfrac{\\text{actual yield}}{\\text{theoretical yield}}$",
              },
              {
                id: "b",
                text: "$100 \\times \\dfrac{\\text{mass of reactants}}{\\text{mass of products}}$",
              },
              {
                id: "c",
                text: "$100 \\times \\dfrac{\\text{mass of desired product}}{\\text{total mass of all products}}$",
              },
              {
                id: "d",
                text: "$100 \\times \\dfrac{\\text{theoretical yield}}{\\text{actual yield}}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Percentage yield",
                statement:
                  "Actual yield as a percentage of the theoretical (maximum) yield.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Percentage yield compares what was actually obtained with the maximum possible from the limiting reagent.",
                working:
                  "\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (d) describes a different concept (efficiency of product mixture, related to atom economy).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "**(a)** $100 \\times \\dfrac{\\text{actual yield}}{\\text{theoretical yield}}$",
            commonErrors: ["Confusing percentage yield with atom economy."],
          },
        },
        {
          id: "chemsl-u4-yield-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A reaction has a theoretical yield of $25.0$ g of product. After purification, the student obtains $20.0$ g. Calculate the percentage yield.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$80.0\\%$" },
              { id: "b", text: "$20.0\\%$" },
              { id: "c", text: "$5.00\\%$" },
              { id: "d", text: "$125\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute the yields into the formula.",
                working: "\\%\\ \\text{yield} = \\frac{20.0}{25.0} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "= 80.0\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The yield cannot exceed $100\\%$, ruling out $125\\%$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(b)** $80.0\\%$",
            commonErrors: [
              "Inverting the ratio to obtain $125\\%$.",
              "Subtracting the masses to obtain $5.00$ g or $20\\%$.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Which of the following reactions has an atom economy of $100\\%$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\mathrm{CaCO}_3 \\rightarrow \\mathrm{CaO} + \\mathrm{CO}_2$",
              },
              {
                id: "b",
                text: "$\\mathrm{C}_2\\mathrm{H}_4 + \\mathrm{H}_2\\mathrm{O} \\rightarrow \\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}$",
              },
              {
                id: "c",
                text: "$\\mathrm{C}_3\\mathrm{H}_8 + 5\\mathrm{O}_2 \\rightarrow 3\\mathrm{CO}_2 + 4\\mathrm{H}_2\\mathrm{O}$",
              },
              {
                id: "d",
                text: "$\\mathrm{CH}_4 + \\mathrm{Cl}_2 \\rightarrow \\mathrm{CH}_3\\mathrm{Cl} + \\mathrm{HCl}$",
              },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atom economy",
                statement:
                  "Mass of desired product as a percentage of the total mass of reactants, calculated from the equation.",
              },
              {
                kind: "property",
                name: "Addition reactions",
                statement:
                  "In an addition reaction every atom of the reactants appears in the single product, giving $100\\%$ atom economy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atom economy depends on whether unwanted by-products are formed.",
                working:
                  "\\text{AE} = \\frac{M_r(\\text{desired})}{\\sum M_r(\\text{reactants})} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Options (a), (b) and (d) each produce a second product (HCl, $\\mathrm{CO}_2$, $\\mathrm{CO}_2$ and $\\mathrm{H}_2\\mathrm{O}$), so some reactant mass is wasted.",
                working:
                  "\\text{by-products present} \\Rightarrow \\text{AE} < 100\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (c) is an addition reaction: all atoms of ethene and water appear in ethanol.",
                working:
                  "M_r(\\text{reactants}) = 28.0 + 18.0 = 46.0 = M_r(\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}) \\Rightarrow 100\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Atom economy is a property of the equation, not of the amount of product obtained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "**(c)** $\\mathrm{C}_2\\mathrm{H}_4 + \\mathrm{H}_2\\mathrm{O} \\rightarrow \\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}$",
            commonErrors: [
              "Confusing atom economy with percentage yield — it cannot be measured experimentally.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Ethanol can be produced industrially by the direct hydration of ethene, $\\mathrm{C}_2\\mathrm{H}_4 + \\mathrm{H}_2\\mathrm{O} \\rightarrow \\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}$, or by the fermentation of glucose, $\\mathrm{C}_6\\mathrm{H}_{12}\\mathrm{O}_6 \\rightarrow 2\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH} + 2\\mathrm{CO}_2$. In one fermentation batch, $360$ g of glucose ($M_r = 180$) produced $160.0$ g of ethanol ($M_r = 46$).",
          parts: [
            {
              label: "a",
              prompt:
                "Write the balanced equation for the complete combustion of ethanol, $\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}$, in oxygen.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the theoretical mass of ethanol obtainable from $360$ g of glucose.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the percentage yield of the fermentation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Compare the atom economy of the hydration and fermentation routes and state which is preferable from a green chemistry perspective.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combustion",
                statement:
                  "Complete combustion of a compound containing C, H and O produces $\\mathrm{CO}_2$ and $\\mathrm{H}_2\\mathrm{O}$.",
              },
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "formula",
                name: "Atom economy",
                statement:
                  "$100 \\times M_r(\\text{desired product}) / \\sum M_r(\\text{reactants})$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Balance carbon, then hydrogen, then oxygen. Two carbons give $2\\mathrm{CO}_2$; six hydrogens give $3\\mathrm{H}_2\\mathrm{O}$; this requires $3$ oxygen atoms on the right beyond the one already in ethanol, giving $\\frac{7}{2}\\mathrm{O}_2$.",
                working:
                  "\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH} + 3\\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2 + 3\\mathrm{H}_2\\mathrm{O}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check the equation is balanced: C $2=2$, H $6=6$, O $1+6=7=4+3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Convert glucose mass to moles, apply the $1:2$ mole ratio, then convert ethanol moles to mass.",
                working:
                  "n(\\mathrm{glucose}) = \\frac{360}{180} = 2.00\\ \\text{mol};\\quad n(\\mathrm{ethanol}) = 4.00\\ \\text{mol};\\quad m = 4.00 \\times 46 = 184\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Apply the percentage yield formula.",
                working:
                  "\\%\\ \\text{yield} = \\frac{160.0}{184} \\times 100 = 87.0\\%",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Hydration: $46 / (28 + 18) = 100\\%$. Fermentation: $92 / 180 \\approx 51\\%$ because half the glucose mass becomes $\\mathrm{CO}_2$.",
                working:
                  "AE_{\\text{hydration}} = \\frac{46}{46} = 100\\%;\\quad AE_{\\text{fermentation}} = \\frac{92}{180} \\approx 51\\%",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Hydration is preferable: it wastes no atoms as by-products and gives a higher atom economy.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH} + 3\\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2 + 3\\mathrm{H}_2\\mathrm{O}$ (b) $184$ g (c) $87.0\\%$ (d) hydration $100\\%$ vs fermentation $\\approx 51\\%$; hydration is greener",
            commonErrors: [
              "Writing $\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH} + 2\\mathrm{O}_2$ — oxygen is not balanced.",
              "Using $360$ g of glucose directly as the ethanol mass without the mole ratio.",
              "Confusing atom economy with percentage yield in part (d).",
            ],
            examinerNote:
              "Award M1 for correct balancing method and A1 for the balanced equation in (a); M1 for correct mole chain and A1 for 184 g in (b); M1 for the yield method and A1 for 87.0% in (c); M1 for both atom economies and R1 for the justified preference in (d).",
          },
        },
        {
          id: "chemsl-u4-yield-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The theoretical yield of a reaction is $40.0$ g of product, but only $30.0$ g is actually obtained. What is the percentage yield?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$75.0\\%$" },
              { id: "b", text: "$133\\%$" },
              { id: "c", text: "$30.0\\%$" },
              { id: "d", text: "$10.0\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute actual and theoretical yields into the formula.",
                working: "\\%\\ \\text{yield} = \\frac{30.0}{40.0} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate and check the value is below $100\\%$.",
                working: "= 75.0\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $75.0\\%$",
            commonErrors: ["Inverting the ratio to obtain $133\\%$."],
          },
        },
        {
          id: "chemsl-u4-yield-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which reaction has an atom economy of $100\\%$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\mathrm{H}_2 + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{HCl}$",
              },
              {
                id: "b",
                text: "$\\mathrm{CH}_4 + \\mathrm{Cl}_2 \\rightarrow \\mathrm{CH}_3\\mathrm{Cl} + \\mathrm{HCl}$",
              },
              {
                id: "c",
                text: "$\\mathrm{CaCO}_3 \\rightarrow \\mathrm{CaO} + \\mathrm{CO}_2$",
              },
              {
                id: "d",
                text: "$\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Atom economy",
                statement:
                  "Reactions forming a single product use all reactant atoms, giving $100\\%$ atom economy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only option (b) produces a single product — every atom of $\\mathrm{H}_2$ and $\\mathrm{Cl}_2$ ends up in HCl.",
                working:
                  "\\text{single product} \\Rightarrow \\text{AE} = 100\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other options each form a second product, so some reactant mass is wasted.",
                working:
                  "M_r(\\text{reactants}) = M_r(\\text{products total}) > M_r(\\text{desired})",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** $\\mathrm{H}_2 + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{HCl}$",
            commonErrors: [
              "Choosing a reaction with a high percentage yield rather than checking whether a by-product forms.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For the decomposition $\\mathrm{CaCO}_3 \\rightarrow \\mathrm{CaO} + \\mathrm{CO}_2$, what is the atom economy for the production of calcium oxide? ($M_r(\\mathrm{CaCO}_3) = 100$, $M_r(\\mathrm{CaO}) = 56$, $M_r(\\mathrm{CO}_2) = 44$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$44.0\\%$" },
              { id: "b", text: "$112\\%$" },
              { id: "c", text: "$56.0\\%$" },
              { id: "d", text: "$100\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Atom economy",
                statement:
                  "$\\%\\ \\text{AE} = \\frac{M_r(\\text{desired product})}{\\sum M_r(\\text{reactants})} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute the molar masses into the formula.",
                working: "\\%\\ \\text{AE} = \\frac{56}{100} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "= 56.0\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (b) is the fraction going to the by-product $\\mathrm{CO}_2$; atom economy cannot exceed $100\\%$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $56.0\\%$",
            commonErrors: [
              "Using the mass of $\\mathrm{CO}_2$ as the desired product.",
              "Adding product masses in the denominator instead of using only reactants.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A reaction has a theoretical yield of $20.0$ g of product. The student obtains $16.0$ g. Calculate the percentage yield.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\%\\ \\text{yield}$",
                answer: 80,
                tolerance: 0.01,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute the yields into the formula.",
                working: "\\%\\ \\text{yield} = \\frac{16.0}{20.0} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "= 80.0\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The percentage yield cannot exceed $100\\%$; the result is consistent.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$80.0\\%$",
            commonErrors: [
              "Giving $80.0$ without the percent sign or as a fraction $0.800$.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In the reaction $\\mathrm{CH}_4 + \\mathrm{Cl}_2 \\rightarrow \\mathrm{CH}_3\\mathrm{Cl} + \\mathrm{HCl}$, a student uses $87.0$ g of reactants ($16.0$ g methane and $71.0$ g chlorine). Calculate the atom economy for chloromethane ($M_r(\\mathrm{CH}_3\\mathrm{Cl}) = 50.5$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\%\\ \\text{AE}$",
                answer: 58,
                tolerance: 0.1,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Atom economy",
                statement:
                  "$\\%\\ \\text{AE} = \\frac{M_r(\\text{desired product})}{\\sum M_r(\\text{reactants})} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total mass of reactants is $16.0 + 71.0 = 87.0$ g; mass of desired product is $50.5$ g.",
                working: "\\sum m(\\text{reactants}) = 87.0\\ \\text{g}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the atom economy formula.",
                working: "\\%\\ \\text{AE} = \\frac{50.5}{87.0} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "= 58.0\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Atom economy is calculated from the equation; it is independent of the actual amount of product obtained.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$58.0\\%$",
            commonErrors: [
              "Dividing by the mass of products instead of reactants.",
              "Confusing atom economy with percentage yield.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement correctly distinguishes percentage yield from atom economy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Percentage yield is actual yield as a percentage of theoretical yield; atom economy is the fraction of reactant mass ending up in the desired product",
              },
              {
                id: "b",
                text: "Percentage yield depends only on the balanced equation; atom economy is measured experimentally",
              },
              {
                id: "c",
                text: "Atom economy can exceed $100\\%$ if the reaction is efficient",
              },
              {
                id: "d",
                text: "Percentage yield and atom economy are two names for the same quantity",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Percentage yield",
                statement:
                  "Actual yield as a percentage of the theoretical yield.",
              },
              {
                kind: "definition",
                name: "Atom economy",
                statement:
                  "Mass of desired product as a percentage of total reactant mass, from the equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Percentage yield is an experimental measure of efficiency of a particular preparation.",
                working:
                  "\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Atom economy is a property of the reaction equation and does not depend on the experiment.",
                working:
                  "\\%\\ \\text{AE} = \\frac{M_r(\\text{desired})}{\\sum M_r(\\text{reactants})} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (d) is impossible — atom economy is at most $100\\%$ because all reactant atoms either reach the product or become by-products.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The two quantities measure different things",
            commonErrors: [
              "Believing atom economy is measured from the actual yield.",
              "Thinking atom economy can exceed $100\\%$.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A reaction produces $3.50$ mol of product when the theoretical maximum is $5.0$ mol. Calculate the percentage yield.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$\\%\\ \\text{yield}$",
                answer: 70,
                tolerance: 0.1,
                unit: "%",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the formula with amounts in moles — the units cancel, so masses are not required.",
                working:
                  "\\%\\ \\text{yield} = \\frac{3.50}{5.0} \\times 100 = 70\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "= 70\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$70\\%$",
            commonErrors: ["Trying to convert moles to mass unnecessarily."],
          },
        },
        {
          id: "chemsl-u4-yield-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "Methanol, $\\mathrm{CH}_3\\mathrm{OH}$, is produced by the reaction $\\mathrm{CO} + 2\\mathrm{H}_2 \\rightarrow \\mathrm{CH}_3\\mathrm{OH}$. In one batch, excess hydrogen is used with $28$ g of carbon monoxide ($M_r = 28.0$), and $16.0$ g of methanol ($M_r = 32.0$) is obtained.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the theoretical mass of methanol obtainable from $28$ g of carbon monoxide.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the percentage yield of the reaction.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the atom economy of this reaction.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the atom economy of this reaction is $100\\%$ even though the percentage yield is less than $100\\%$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The equation shows $1$ mol CO produces $1$ mol $\\mathrm{CH}_3\\mathrm{OH}$.",
              },
              {
                kind: "formula",
                name: "Atom economy",
                statement:
                  "$\\%\\ \\text{AE} = \\frac{M_r(\\text{desired})}{\\sum M_r(\\text{reactants})} \\times 100$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Convert CO to moles, apply the $1:1$ ratio, then convert methanol moles to mass.",
                working:
                  "n(\\mathrm{CO}) = \\frac{28}{28.0} = 1.00\\ \\text{mol};\\quad n(\\mathrm{CH}_3\\mathrm{OH}) = 1.00\\ \\text{mol};\\quad m = 1.00 \\times 32.0 = 32.0\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Apply the percentage yield formula.",
                working:
                  "\\%\\ \\text{yield} = \\frac{16.0}{32.0} \\times 100 = 50.0\\%",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The reactants are CO ($28.0$) and $2\\mathrm{H}_2$ ($4.0$); the single product methanol has $M_r = 32.0$, equal to the sum of reactant molar masses.",
                working:
                  "\\%\\ \\text{AE} = \\frac{32.0}{28.0 + 4.0} \\times 100 = 100\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Atom economy depends only on the balanced equation — every atom ends up in the single product. Percentage yield measures how much product was actually isolated in this batch, which can be reduced by incomplete reaction or losses during purification.",
                working:
                  "\\text{AE: equation property};\\ \\%\\ \\text{yield: experimental result}",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $32.0$ g (b) $50.0\\%$ (c) $100\\%$ (d) AE is fixed by the equation (single product); yield depends on the actual experiment",
            commonErrors: [
              "Using $2$ mol of methanol per mole of CO.",
              "Using $M_r(\\mathrm{CH}_3\\mathrm{OH}) = 31.0$ or forgetting the $2\\mathrm{H}_2$ in the reactant mass for atom economy.",
            ],
            examinerNote:
              "Award M1 for each correct mole step and A1 for each final value; in (d) award B1 for identifying AE as an equation property and B1 for a valid experimental reason for yield loss.",
          },
        },
        {
          id: "chemsl-u4-yield-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In the fermentation $\\mathrm{C}_6\\mathrm{H}_{12}\\mathrm{O}_6 \\rightarrow 2\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH} + 2\\mathrm{CO}_2$, a batch gives an atom economy of about $51\\%$ for ethanol. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $\\%\\ \\text{AE}$",
                answer: 51,
                tolerance: 1,
                unit: "%",
              },
              {
                label:
                  "(b) mass of $\\mathrm{CO}_2$ waste per $180$ g glucose / g",
                answer: 88,
                tolerance: 1,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Atom economy",
                statement:
                  "$\\%\\ \\text{AE} = \\frac{M_r(\\text{desired})}{\\sum M_r(\\text{reactants})} \\times 100 = \\frac{92}{180} \\times 100 \\approx 51\\%$",
              },
              {
                kind: "principle",
                name: "Mass conservation",
                statement:
                  "The mass not ending up in ethanol becomes the $\\mathrm{CO}_2$ by-product.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two moles of ethanol have mass $2 \\times 46 = 92$ g from $180$ g of glucose.",
                working:
                  "\\%\\ \\text{AE} = \\frac{92}{180} \\times 100 = 51.1\\% \\approx 51\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The remaining mass is the carbon dioxide by-product: $180 - 92 = 88$ g.",
                working: "m(\\mathrm{CO}_2) = 180 - 92 = 88\\ \\text{g}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the atom economy.",
                working: "51\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate the waste mass.",
                working: "88\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $51\\%$ (b) $88$ g",
            commonErrors: [
              "Using $46$ g instead of $92$ g for the ethanol mass.",
              "Reporting the ethanol mass ($92$ g) instead of the waste mass.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which change would increase the percentage yield of a reaction without changing its atom economy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing the by-product as it forms" },
              {
                id: "b",
                text: "Changing the reactants so no by-product forms",
              },
              {
                id: "c",
                text: "Allowing the reaction to reach completion and minimising losses during purification",
              },
              { id: "d", text: "Using a catalyst" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Percentage yield",
                statement:
                  "Actual yield as a percentage of theoretical yield; losses and incomplete reaction reduce it.",
              },
              {
                kind: "definition",
                name: "Atom economy",
                statement: "A fixed property of the balanced equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Percentage yield improves by ensuring complete reaction and recovering more of the product.",
                working:
                  "\\text{complete reaction} + \\text{less loss} \\Rightarrow \\text{higher } \\%\\ \\text{yield}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Atom economy is unchanged because the balanced equation is unchanged.",
                working: "\\%\\ \\text{AE} = f(\\text{equation only})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (c) would change the equation and hence atom economy; options (a) and (b) do not address yield losses as directly.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(d)** Allowing complete reaction and minimising purification losses",
            commonErrors: [
              "Confusing percentage yield with atom economy — changing the equation changes AE.",
            ],
          },
        },
        {
          id: "chemsl-u4-yield-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Ammonia is produced by the Haber process: $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightarrow 2\\mathrm{NH}_3$. In one run, excess hydrogen is used with $28$ g of nitrogen ($A_r = 14.0$) and $34$ g of ammonia ($M_r = 17.0$) is collected.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the theoretical mass of ammonia obtainable.",
              marks: 2,
            },
            { label: "b", prompt: "Calculate the percentage yield.", marks: 2 },
            {
              label: "c",
              prompt: "Calculate the atom economy of the reaction.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Suggest two reasons why the actual yield may be less than $100\\%$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$1$ mol $\\mathrm{N}_2$ produces $2$ mol $\\mathrm{NH}_3$.",
              },
              {
                kind: "formula",
                name: "Atom economy",
                statement:
                  "$\\%\\ \\text{AE} = \\frac{M_r(\\text{desired})}{\\sum M_r(\\text{reactants})} \\times 100$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Convert nitrogen mass to moles, apply the $1:2$ ratio, then convert to mass.",
                working:
                  "n(\\mathrm{N}_2) = \\frac{28}{28.0} = 1.00\\ \\text{mol};\\quad n(\\mathrm{NH}_3) = 2.00\\ \\text{mol};\\quad m = 2.00 \\times 17.0 = 34.0\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Apply the percentage yield formula.",
                working:
                  "\\%\\ \\text{yield} = \\frac{34}{34.0} \\times 100 = 100\\%",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reactant masses: $\\mathrm{N}_2 = 28.0$, $3\\mathrm{H}_2 = 6.0$; product $2\\mathrm{NH}_3 = 34.0$.",
                working:
                  "\\%\\ \\text{AE} = \\frac{34.0}{28.0 + 6.0} \\times 100 = 100\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "In practice the reaction is reversible and does not go to completion, so some reactants remain unreacted; ammonia may also be lost during separation from unreacted gases or dissolved in water.",
                working: "\\text{reversible reaction / separation losses}",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $34.0$ g (b) $100\\%$ (c) $100\\%$ (d) e.g. the reaction is reversible so it does not go to completion; ammonia can be lost during separation",
            commonErrors: [
              "Using a $1:1$ mole ratio for nitrogen to ammonia.",
              "Forgetting to include all three moles of hydrogen in the reactant mass for atom economy.",
            ],
            examinerNote:
              "In this dataset the collected mass equals the theoretical mass; in (d) award B1 for each valid reason — reversibility, incomplete reaction, separation losses or dissolved ammonia.",
          },
        },
        {
          id: "chemsl-u4-yield-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A fertilizer plant produces ammonium nitrate, $\\mathrm{NH}_4\\mathrm{NO}_3$, from the reaction $\\mathrm{NH}_3 + \\mathrm{HNO}_3 \\rightarrow \\mathrm{NH}_4\\mathrm{NO}_3$ ($M_r = 80.0$). In one batch $17.0$ g of ammonia ($M_r = 17.0$) reacts with excess nitric acid and $40.0$ g of ammonium nitrate is isolated.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the balanced equation for the reaction and identify the limiting reagent.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the theoretical mass of ammonium nitrate.",
              marks: 2,
            },
            { label: "c", prompt: "Calculate the percentage yield.", marks: 2 },
            {
              label: "d",
              prompt: "Calculate the atom economy of the reaction.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "State one reason why a green chemist might still prefer this process despite its atom economy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$1$ mol $\\mathrm{NH}_3$ produces $1$ mol $\\mathrm{NH}_4\\mathrm{NO}_3$; acid is in excess so ammonia is limiting.",
              },
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "$\\%\\ \\text{yield} = \\frac{\\text{actual}}{\\text{theoretical}} \\times 100$",
              },
              {
                kind: "formula",
                name: "Atom economy",
                statement:
                  "$\\%\\ \\text{AE} = \\frac{M_r(\\text{desired})}{\\sum M_r(\\text{reactants})} \\times 100$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Balance N, H and O: one $\\mathrm{NH}_3$ and one $\\mathrm{HNO}_3$ give one $\\mathrm{NH}_4\\mathrm{NO}_3$.",
                working:
                  "\\mathrm{NH}_3 + \\mathrm{HNO}_3 \\rightarrow \\mathrm{NH}_4\\mathrm{NO}_3\\ \\text{(already balanced)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Acid is stated to be in excess, so ammonia is completely consumed and is the limiting reagent.",
                working: "\\mathrm{NH}_3\\ \\text{limiting}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Convert ammonia mass to moles, apply the $1:1$ ratio, then convert to mass of product.",
                working:
                  "n = \\frac{17.0}{17.0} = 1.00\\ \\text{mol};\\quad m = 1.00 \\times 80.0 = 80.0\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Apply the percentage yield formula.",
                working:
                  "\\%\\ \\text{yield} = \\frac{40.0}{80.0} \\times 100 = 50.0\\%",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Reactants: $\\mathrm{NH}_3 = 17.0$ and $\\mathrm{HNO}_3 = 63.0$; product $\\mathrm{NH}_4\\mathrm{NO}_3 = 80.0$ — all reactant mass appears in the single product.",
                working:
                  "\\%\\ \\text{AE} = \\frac{80.0}{17.0 + 63.0} \\times 100 = 100\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Atom economy is $100\\%$ so no atoms are wasted as by-products; however the reaction uses corrosive concentrated acids and may have a low percentage yield in practice, so other factors such as energy use and safety must also be considered.",
                working:
                  "\\text{no by-product waste, but energy/safety still matter}",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $\\mathrm{NH}_3 + \\mathrm{HNO}_3 \\rightarrow \\mathrm{NH}_4\\mathrm{NO}_3$; NH$_3$ limiting (b) $80.0$ g (c) $50.0\\%$ (d) $100\\%$ (e) e.g. no by-products are formed so atom economy is ideal, though energy use and safety still matter",
            commonErrors: [
              "Writing an unbalanced equation with coefficients.",
              "Using the actual yield as the theoretical yield.",
            ],
            examinerNote:
              "Award M1 for a correct balanced equation and B1 for identifying ammonia as limiting in (a); M1 for the mole chain and A1 for 80.0 g in (b); M1 for the yield method and A1 for 50.0% in (c); M1 for the AE calculation and A1 for 100% in (d); award B1 for a valid green-chemistry point in (e).",
          },
        },
      ],
    },
  ],
};
