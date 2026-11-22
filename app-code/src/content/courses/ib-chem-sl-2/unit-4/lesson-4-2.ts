import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "chemsl-u4-lesson-4-2",
  code: "4-2",
  title: "Titration Calculations",
  goal: "I CAN use titration data to calculate the concentration of an unknown solution, and apply back titration to analyse an insoluble or slow-reacting sample.",
  standards: ["Paper 1", "Paper 2", "Topic 1.3", "Topic 11.1", "Topic 11.2"],
  vocabulary: [
    {
      term: "Titration",
      definition:
        "A volumetric analysis technique in which a solution of known concentration is added gradually to a solution of unknown concentration until the reaction is complete.",
    },
    {
      term: "Titre",
      definition:
        "The volume of the titrant added from the burette at the endpoint of a titration, usually read to $0.05$ cm$^3$.",
    },
    {
      term: "Endpoint",
      definition:
        "The point at which the indicator changes colour, taken as the end of the titration; it approximates the equivalence point.",
    },
    {
      term: "Equivalence point",
      definition:
        "The point at which the amounts of acid and alkali (or oxidant and reductant) are exactly stoichiometrically equivalent.",
    },
    {
      term: "Back titration",
      definition:
        "A technique in which an excess of a reagent is added to a sample, the unreacted excess is titrated, and the amount that reacted is found by difference.",
    },
    {
      term: "Indicator",
      definition:
        "A weak acid or base whose colour change signals that the endpoint of a titration has been reached.",
    },
  ],
  concepts: [
    {
      id: "chemsl-u4-acidbase",
      title: "Acid-base titration calculations",
      skill:
        "Use the mole ratio from a balanced equation with $n = cV$ to find unknown concentrations and volumes in titrations.",
      lesson: {
        sections: [
          {
            heading: "Setting up the calculation",
            body: "At the equivalence point the acid and base have reacted in the mole ratio of the balanced equation. For a monoprotic pair such as $\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$ the ratio is $1:1$, but for $2\\mathrm{NaOH} + \\mathrm{H}_2\\mathrm{SO}_4 \\rightarrow \\mathrm{Na}_2\\mathrm{SO}_4 + 2\\mathrm{H}_2\\mathrm{O}$ it is $2:1$. Always convert volumes from cm$^3$ to dm$^3$ before using $n = cV$.",
          },
          {
            heading: "The titration calculation chain",
            body: "Work in this order: (1) moles of the known solution $= c_{\\text{known}} \\times V_{\\text{known}}$; (2) use the mole ratio to get moles of the unknown; (3) divide by the unknown volume to get its concentration. The same chain in reverse gives the titre volume needed for a stated amount of titrant: $V = \\frac{n}{c}$.",
          },
          {
            heading: "Choosing an indicator",
            body: "The indicator must change colour near the pH at the equivalence point. For strong acid vs strong base (equivalence near pH $7$) phenolphthalein or methyl orange both work; for weak acid vs strong base phenolphthalein is preferred because its colour change lies in the alkaline region; for weak base vs strong acid methyl orange is preferred.",
          },
        ],
        keyFormulas: [
          {
            name: "Amount in solution",
            statement:
              "$n = cV$, with $V$ in dm$^3$ ($V_{\\text{cm}^3} / 1000$)",
          },
          {
            name: "Concentration",
            statement: "$c = \\dfrac{n}{V}$ in mol dm$^{-3}$",
          },
          {
            name: "Mole ratio",
            statement:
              "Moles of acid : moles of base = coefficients in the balanced equation",
          },
        ],
        workedExample: {
          problem:
            "$25.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ sodium hydroxide is titrated with hydrochloric acid. The titre is $20.0$ cm$^3$. Calculate the concentration of the hydrochloric acid.",
          solution:
            "$n(\\mathrm{NaOH}) = 0.100 \\times \\frac{25.0}{1000} = 0.00250$ mol. Since $\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$ is $1:1$, $n(\\mathrm{HCl}) = 0.00250$ mol. Then $c(\\mathrm{HCl}) = \\frac{0.00250}{0.0200} = 0.125$ mol dm$^{-3}$.",
        },
      },
      questions: [
        {
          id: "chemsl-u4-acidbase-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What amount, in moles, of hydrochloric acid is present in $20.0$ cm$^3$ of $0.150$ mol dm$^{-3}$ solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.00300$ mol" },
              { id: "b", text: "$0.0300$ mol" },
              { id: "c", text: "$7.50$ mol" },
              { id: "d", text: "$0.000300$ mol" },
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
                reasoning:
                  "Convert the volume to dm$^3$ and multiply by concentration.",
                working: "n = 0.150 \\times \\frac{20.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.00300\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.00300$ mol",
            commonErrors: [
              "Forgetting to convert cm$^3$ to dm$^3$, giving $3.00$ mol.",
              "Dividing by concentration instead of multiplying.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$20.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ sodium hydroxide is titrated with $0.0800$ mol dm$^{-3}$ hydrochloric acid: $\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$. What volume of acid is required?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12.5$ cm$^3$" },
              { id: "b", text: "$25.0$ cm$^3$" },
              { id: "c", text: "$40.0$ cm$^3$" },
              { id: "d", text: "$16.0$ cm$^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The $1:1$ equation means moles of HCl equal moles of NaOH.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of NaOH.",
                working:
                  "n = 0.100 \\times \\frac{20.0}{1000} = 0.00200\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $1:1$ ratio gives the same moles of HCl; find the volume from $V = n/c$.",
                working:
                  "V = \\frac{0.00200}{0.0800} = 0.0250\\ \\text{dm}^3 = 25.0\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $25.0$ cm$^3$",
            commonErrors: [
              "Multiplying by concentration instead of dividing for the titre.",
              "Forgetting to convert dm$^3$ back to cm$^3$.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$25.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ sodium hydroxide is titrated with $0.100$ mol dm$^{-3}$ sulfuric acid: $2\\mathrm{NaOH} + \\mathrm{H}_2\\mathrm{SO}_4 \\rightarrow \\mathrm{Na}_2\\mathrm{SO}_4 + 2\\mathrm{H}_2\\mathrm{O}$. What volume of sulfuric acid is required?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12.5$ cm$^3$" },
              { id: "b", text: "$50.0$ cm$^3$" },
              { id: "c", text: "$6.25$ cm$^3$" },
              { id: "d", text: "$25.0$ cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The equation shows $2$ mol NaOH react with $1$ mol $\\mathrm{H}_2\\mathrm{SO}_4$.",
              },
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of NaOH.",
                working:
                  "n(\\mathrm{NaOH}) = 0.100 \\times \\frac{25.0}{1000} = 0.00250\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply the $2:1$ ratio to get moles of sulfuric acid.",
                working:
                  "n(\\mathrm{H}_2\\mathrm{SO}_4) = \\frac{0.00250}{2} = 0.00125\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find the volume from $V = n/c$ and convert to cm$^3$.",
                working:
                  "V = \\frac{0.00125}{0.100} = 0.0125\\ \\text{dm}^3 = 12.5\\ \\text{cm}^3",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $12.5$ cm$^3$",
            commonErrors: [
              "Treating the reaction as $1:1$ and answering $25.0$ cm$^3$.",
              "Doubling instead of halving the moles of acid.",
            ],
            examinerNote:
              "Award M1 for correct moles of NaOH, M1 for the correct ratio application, A2 for the correct volume (allow A1 for correct method with a rounding slip).",
          },
        },
        {
          id: "chemsl-u4-acidbase-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "$25.0$ cm$^3$ of a sodium carbonate solution is titrated with $0.1000$ mol dm$^{-3}$ hydrochloric acid. The equation is $\\mathrm{Na}_2\\mathrm{CO}_3 + 2\\mathrm{HCl} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$. The titre is $22.50$ cm$^3$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid used.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of sodium carbonate in the $25.0$ cm$^3$ sample.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the concentration of the sodium carbonate solution in mol dm$^{-3}$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the mass of sodium carbonate ($M_r = 106$) in $1.00$ dm$^3$ of the solution.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$1$ mol $\\mathrm{Na}_2\\mathrm{CO}_3$ reacts with $2$ mol HCl.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Use $n = cV$ with the titre converted to dm$^3$.",
                working:
                  "n(\\mathrm{HCl}) = 0.1000 \\times \\frac{22.50}{1000} = 0.002250\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The $1:2$ ratio means moles of carbonate are half the moles of acid.",
                working:
                  "n(\\mathrm{Na}_2\\mathrm{CO}_3) = \\frac{0.002250}{2} = 0.001125\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Divide moles by the sample volume in dm$^3$.",
                working:
                  "c = \\frac{0.001125}{0.0250} = 0.0450\\ \\text{mol dm}^{-3}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Scale up: $1.00$ dm$^3$ contains $0.0450$ mol, then convert to mass.",
                working:
                  "n = 0.0450\\ \\text{mol};\\quad m = 0.0450 \\times 106 = 4.77\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $0.002250$ mol HCl (b) $0.001125$ mol $\\mathrm{Na}_2\\mathrm{CO}_3$ (c) $0.0450$ mol dm$^{-3}$ (d) $4.77$ g per dm$^3$",
            commonErrors: [
              "Forgetting the $1:2$ mole ratio and using $0.002250$ mol of carbonate.",
              "Leaving the volume in cm$^3$ when calculating concentration.",
            ],
            examinerNote:
              "Award M1 for correct n = cV method and A1 for each correct value in (a)-(d); in (d) award M1 for scaling by volume and A1 for 4.77 g.",
          },
        },
        {
          id: "chemsl-u4-acidbase-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What amount, in moles, of solute is present in $15.0$ cm$^3$ of a $0.200$ mol dm$^{-3}$ solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.33$ mol" },
              { id: "b", text: "$0.00300$ mol" },
              { id: "c", text: "$0.0300$ mol" },
              { id: "d", text: "$0.000300$ mol" },
            ],
            correctChoiceId: "b",
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
                reasoning:
                  "Convert the volume to dm$^3$ and multiply by concentration.",
                working: "n = 0.200 \\times \\frac{15.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.00300\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.00300$ mol",
            commonErrors: ["Using $15.0$ instead of $0.0150$ dm$^3$."],
          },
        },
        {
          id: "chemsl-u4-acidbase-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which indicator is most suitable for the titration of a weak acid with a strong base?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phenolphthalein" },
              { id: "b", text: "Methyl orange" },
              { id: "c", text: "Litmus only" },
              { id: "d", text: "Any indicator gives the same result" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indicator selection",
                statement:
                  "The indicator's colour change must occur near the pH at the equivalence point; for a weak acid with strong base the equivalence point is alkaline.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With a weak acid and strong base, the equivalence point is above pH $7$, so the indicator must change in the alkaline region.",
                working:
                  "\\text{equivalence pH} > 7 \\Rightarrow \\text{alkaline indicator}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Phenolphthalein changes colour in the alkaline region; methyl orange changes in the acidic region and would change before the equivalence point.",
                working: "\\text{phenolphthalein}: \\text{pH} \\approx 8.3-10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Phenolphthalein",
            commonErrors: [
              "Choosing methyl orange, which is suited to strong acid–weak base titrations.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$25.0$ cm$^3$ of sodium hydroxide solution is titrated with $0.100$ mol dm$^{-3}$ hydrochloric acid ($\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$). The titre is $20.0$ cm$^3$. What is the concentration of the sodium hydroxide solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.100$ mol dm$^{-3}$" },
              { id: "b", text: "$0.0800$ mol dm$^{-3}$" },
              { id: "c", text: "$0.200$ mol dm$^{-3}$" },
              { id: "d", text: "$0.125$ mol dm$^{-3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The $1:1$ equation means equal moles of acid and base.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of HCl from the titre.",
                working:
                  "n(\\mathrm{HCl}) = 0.100 \\times \\frac{20.0}{1000} = 0.00200\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $1:1$ ratio to get moles of NaOH.",
                working: "n(\\mathrm{NaOH}) = 0.00200\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the sample volume to get concentration.",
                working:
                  "c = \\frac{0.00200}{0.0250} = 0.0800\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.0800$ mol dm$^{-3}$",
            commonErrors: [
              "Inverting $c = n/V$ or using the titre volume for the NaOH volume.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$20.0$ cm$^3$ of $0.150$ mol dm$^{-3}$ sodium hydroxide is titrated with $0.100$ mol dm$^{-3}$ sulfuric acid: $2\\mathrm{NaOH} + \\mathrm{H}_2\\mathrm{SO}_4 \\rightarrow \\mathrm{Na}_2\\mathrm{SO}_4 + 2\\mathrm{H}_2\\mathrm{O}$. What volume of sulfuric acid is required?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15.0$ cm$^3$" },
              { id: "b", text: "$30.0$ cm$^3$" },
              { id: "c", text: "$7.50$ cm$^3$" },
              { id: "d", text: "$60.0$ cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The equation requires $2$ mol NaOH per $1$ mol $\\mathrm{H}_2\\mathrm{SO}_4$.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of NaOH.",
                working:
                  "n(\\mathrm{NaOH}) = 0.150 \\times \\frac{20.0}{1000} = 0.00300\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply the $2:1$ ratio to get moles of sulfuric acid.",
                working:
                  "n(\\mathrm{H}_2\\mathrm{SO}_4) = \\frac{0.00300}{2} = 0.00150\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Find the volume from $V = n/c$.",
                working:
                  "V = \\frac{0.00150}{0.100} = 0.0150\\ \\text{dm}^3 = 15.0\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $15.0$ cm$^3$",
            commonErrors: [
              "Treating the reaction as $1:1$ and answering $30.0$ cm$^3$.",
              "Doubling the acid volume instead of halving the moles.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a titration, $30.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ hydrochloric acid exactly neutralises $25.0$ cm$^3$ of a sodium hydroxide solution ($\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$). Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{HCl})$ / mol",
                answer: 0.006,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(b) $c(\\mathrm{NaOH})$ / mol dm$^{-3}$",
                answer: 0.24,
                tolerance: 0.001,
                unit: "mol dm$^{-3}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The $1:1$ equation means equal moles of HCl and NaOH.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of hydrochloric acid.",
                working:
                  "n(\\mathrm{HCl}) = 0.200 \\times \\frac{30.0}{1000} = 0.00600\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $1:1$ ratio to get moles of NaOH.",
                working: "n(\\mathrm{NaOH}) = 0.00600\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide by the NaOH volume in dm$^3$ to get concentration.",
                working: "c = \\frac{0.00600}{0.0250}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c = 0.240\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.00600$ mol (b) $0.240$ mol dm$^{-3}$",
            commonErrors: [
              "Using the acid volume instead of the base volume in the concentration calculation.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "$25.0$ cm$^3$ of a sodium hydroxide solution is titrated with hydrochloric acid. The student overshoots the endpoint and records a titre larger than the true value. What is the effect on the calculated concentration of the sodium hydroxide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The calculated concentration is too low" },
              { id: "b", text: "The concentration cannot be calculated" },
              { id: "c", text: "The calculated concentration is too high" },
              { id: "d", text: "The calculated concentration is unaffected" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Titration error",
                statement:
                  "The calculated amount of analyte is proportional to the titre volume recorded.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A larger titre gives a larger calculated amount of HCl, hence a larger calculated amount of NaOH.",
                working:
                  "V_{\\text{titre}} \\uparrow \\Rightarrow n(\\mathrm{HCl}) \\uparrow \\Rightarrow n(\\mathrm{NaOH}) \\uparrow",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since the NaOH volume is fixed, a larger n gives a larger c.",
                working:
                  "c = \\frac{n}{V} \\Rightarrow c_{\\text{calculated}} > c_{\\text{true}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overshooting the endpoint is a positive systematic error for this calculation.",
                working:
                  "\\text{overshoot} \\Rightarrow \\text{concentration too high}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The calculated concentration is too high",
            commonErrors: [
              "Assuming any error makes the result less accurate in an unspecified direction.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A solution contains $0.00500$ mol of solute in $50.0$ cm$^3$ of solution. Calculate the concentration in mol dm$^{-3}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$c$ / mol dm$^{-3}$",
                answer: 0.1,
                tolerance: 0.001,
                unit: "mol dm$^{-3}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Concentration",
                statement: "$c = \\frac{n}{V}$ with $V$ in dm$^3$.",
              },
            ],
            steps: [
              {
                reasoning: "Convert the volume to dm$^3$ and apply $c = n/V$.",
                working: "c = \\frac{0.00500}{0.0500}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c = 0.100\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$c = 0.100$ mol dm$^{-3}$",
            commonErrors: [
              "Using $50.0$ cm$^3$ directly instead of $0.0500$ dm$^3$.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "$20.0$ cm$^3$ of a sodium carbonate solution is titrated with $0.1000$ mol dm$^{-3}$ hydrochloric acid ($\\mathrm{Na}_2\\mathrm{CO}_3 + 2\\mathrm{HCl} \\rightarrow 2\\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$). The titre is $18.50$ cm$^3$. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{HCl})$ / mol",
                answer: 0.00185,
                tolerance: 0.00001,
                unit: "mol",
              },
              {
                label: "(b) $c(\\mathrm{Na}_2\\mathrm{CO}_3)$ / mol dm$^{-3}$",
                answer: 0.0463,
                tolerance: 0.001,
                unit: "mol dm$^{-3}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$1$ mol $\\mathrm{Na}_2\\mathrm{CO}_3$ reacts with $2$ mol HCl.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of HCl from the titre.",
                working:
                  "n(\\mathrm{HCl}) = 0.1000 \\times \\frac{18.50}{1000} = 0.001850\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $1:2$ ratio to get moles of carbonate.",
                working:
                  "n(\\mathrm{Na}_2\\mathrm{CO}_3) = \\frac{0.001850}{2} = 0.000925\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide by the sample volume in dm$^3$ to get concentration.",
                working: "c = \\frac{0.000925}{0.0200}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c = 0.0463\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.001850$ mol (b) $0.0463$ mol dm$^{-3}$",
            commonErrors: [
              "Forgetting to halve the moles of acid for the $1:2$ ratio.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "$25.0$ cm$^3$ of a sodium hydroxide solution is titrated with $0.120$ mol dm$^{-3}$ hydrochloric acid ($\\mathrm{NaOH} + \\mathrm{HCl} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$). The titre is $22.30$ cm$^3$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid used.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of sodium hydroxide in the sample.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the concentration of the sodium hydroxide solution in mol dm$^{-3}$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the mass of sodium hydroxide ($M_r = 40.0$) in $1.00$ dm$^3$ of the solution.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "The $1:1$ equation means equal moles of acid and base.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Use $n = cV$ with the titre converted to dm$^3$.",
                working:
                  "n(\\mathrm{HCl}) = 0.120 \\times \\frac{22.30}{1000} = 0.002676\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The $1:1$ ratio gives the same moles of NaOH.",
                working: "n(\\mathrm{NaOH}) = 0.002676\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Divide by the sample volume in dm$^3$.",
                working:
                  "c = \\frac{0.002676}{0.0250} = 0.107\\ \\text{mol dm}^{-3}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "One dm$^3$ contains $0.107$ mol; convert to mass.",
                working: "m = 0.107 \\times 40.0 = 4.29\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $0.002676$ mol (b) $0.002676$ mol (c) $0.107$ mol dm$^{-3}$ (d) $4.29$ g per dm$^3$",
            commonErrors: [
              "Forgetting to convert cm$^3$ to dm$^3$ in part (c).",
              "Using the acid concentration as the NaOH concentration.",
            ],
            examinerNote:
              "Award M1 for correct n = cV method and A1 for each correct value; in (d) award M1 for the mole-to-mass conversion.",
          },
        },
        {
          id: "chemsl-u4-acidbase-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "$25.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ sodium hydroxide is titrated with $0.100$ mol dm$^{-3}$ sulfuric acid: $2\\mathrm{NaOH} + \\mathrm{H}_2\\mathrm{SO}_4 \\rightarrow \\mathrm{Na}_2\\mathrm{SO}_4 + 2\\mathrm{H}_2\\mathrm{O}$. What titre is expected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20.0$ cm$^3$" },
              { id: "b", text: "$25.0$ cm$^3$" },
              { id: "c", text: "$50.0$ cm$^3$" },
              { id: "d", text: "$12.5$ cm$^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$2$ mol NaOH reacts with $1$ mol $\\mathrm{H}_2\\mathrm{SO}_4$.",
              },
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of NaOH and hence moles of acid needed.",
                working:
                  "n(\\mathrm{NaOH}) = 0.200 \\times 0.0250 = 0.00500\\ \\text{mol};\\quad n(\\mathrm{H}_2\\mathrm{SO}_4) = 0.00250\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Find the volume of $0.100$ mol dm$^{-3}$ acid.",
                working: "V = \\frac{0.00250}{0.100} = 0.0250\\ \\text{dm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to cm$^3$.",
                working: "V = 25.0\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $25.0$ cm$^3$",
            commonErrors: [
              "Treating the reaction as $1:1$ and giving $50.0$ cm$^3$.",
            ],
          },
        },
        {
          id: "chemsl-u4-acidbase-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "$30.0$ cm$^3$ of $0.150$ mol dm$^{-3}$ sulfuric acid is titrated with a sodium hydroxide solution ($2\\mathrm{NaOH} + \\mathrm{H}_2\\mathrm{SO}_4 \\rightarrow \\mathrm{Na}_2\\mathrm{SO}_4 + 2\\mathrm{H}_2\\mathrm{O}$). Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{H}_2\\mathrm{SO}_4)$ / mol",
                answer: 0.0045,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{NaOH})$ needed / mol",
                answer: 0.009,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label:
                  "(c) $c(\\mathrm{NaOH})$ if titre is $20.0$ cm$^3$ / mol dm$^{-3}$",
                answer: 0.45,
                tolerance: 0.001,
                unit: "mol dm$^{-3}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$2$ mol NaOH reacts with $1$ mol $\\mathrm{H}_2\\mathrm{SO}_4$.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of sulfuric acid.",
                working:
                  "n(\\mathrm{H}_2\\mathrm{SO}_4) = 0.150 \\times \\frac{30.0}{1000} = 0.00450\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $2:1$ ratio to get moles of NaOH.",
                working:
                  "n(\\mathrm{NaOH}) = 2 \\times 0.00450 = 0.00900\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If $20.0$ cm$^3$ of NaOH is needed, $V = 0.0200$ dm$^3$.",
                working: "V(\\mathrm{NaOH}) = 0.0200\\ \\text{dm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply $c = n/V$.",
                working: "c = \\frac{0.00900}{0.0200}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c = 0.450\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.00450$ mol (b) $0.00900$ mol (c) $0.450$ mol dm$^{-3}$",
            commonErrors: ["Using a $1:1$ ratio instead of $2:1$."],
          },
        },
        {
          id: "chemsl-u4-acidbase-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "$25.0$ cm$^3$ of a potassium hydroxide solution is titrated with $0.100$ mol dm$^{-3}$ hydrochloric acid ($\\mathrm{KOH} + \\mathrm{HCl} \\rightarrow \\mathrm{KCl} + \\mathrm{H}_2\\mathrm{O}$). The titre is $19.80$ cm$^3$.",
          parts: [
            {
              label: "a",
              prompt: "Write the balanced equation for the neutralisation.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid used.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the concentration of the potassium hydroxide solution in mol dm$^{-3}$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the mass of potassium hydroxide ($M_r = 56.0$) in $1.00$ dm$^3$ of the solution.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Suggest a suitable indicator for this titration and justify your choice.",
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
                  "The $1:1$ equation means equal moles of acid and base.",
              },
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Indicator selection",
                statement:
                  "Strong acid vs strong base has an equivalence point near pH $7$, so either phenolphthalein or methyl orange is suitable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "KOH is a strong base and HCl a strong acid; the products are a salt and water in a $1:1$ ratio.",
                working:
                  "\\mathrm{KOH} + \\mathrm{HCl} \\rightarrow \\mathrm{KCl} + \\mathrm{H}_2\\mathrm{O}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check the equation is balanced: K, Cl, H and O each appear once on both sides.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Use $n = cV$ with the titre converted to dm$^3$.",
                working:
                  "n(\\mathrm{HCl}) = 0.100 \\times \\frac{19.80}{1000} = 0.001980\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Apply the $1:1$ ratio then divide by the sample volume.",
                working:
                  "n(\\mathrm{KOH}) = 0.001980\\ \\text{mol};\\quad c = \\frac{0.001980}{0.0250} = 0.0792\\ \\text{mol dm}^{-3}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "One dm$^3$ contains $0.0792$ mol; convert to mass.",
                working: "m = 0.0792 \\times 56.0 = 4.44\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Phenolphthalein or methyl orange are both acceptable because the equivalence point is near pH $7$ for a strong acid–strong base titration.",
                working:
                  "\\text{equivalence pH} \\approx 7 \\Rightarrow \\text{either indicator}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "The indicator must change colour sharply at the endpoint so the titre is accurate.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $\\mathrm{KOH} + \\mathrm{HCl} \\rightarrow \\mathrm{KCl} + \\mathrm{H}_2\\mathrm{O}$ (b) $0.001980$ mol (c) $0.0792$ mol dm$^{-3}$ (d) $4.44$ g per dm$^3$ (e) phenolphthalein or methyl orange — equivalence near pH $7$",
            commonErrors: [
              "Using a $1:2$ ratio that does not apply to this equation.",
              "Leaving the volume in cm$^3$ when finding concentration.",
            ],
            examinerNote:
              "Award M1 for the correct balanced equation and A1 for the check in (a); M1 for correct n = cV and A1 for 0.001980 mol in (b); M1 for the ratio and A1 for 0.0792 in (c); M1 for the mole-to-mass chain and A1 for 4.44 g in (d); award B1 for a named suitable indicator and B1 for the pH justification in (e).",
          },
        },
      ],
    },
    {
      id: "chemsl-u4-backtitration",
      title: "Back titration and volumetric analysis",
      skill:
        "Apply a back titration to determine the amount of a reactant in an insoluble or slowly reacting sample.",
      lesson: {
        sections: [
          {
            heading: "When a direct titration fails",
            body: "Some samples cannot be titrated directly: they may be insoluble (such as calcium carbonate in limestone), react too slowly, or contain interfering substances. In a **back titration** a measured excess of a standard solution is added to the sample and allowed to react completely; the unreacted excess is then titrated with a second standard solution. The amount that reacted is found by difference.",
          },
          {
            heading: "The calculation",
            body: "The chain is: (1) moles of excess reagent added $= c_{\\text{excess}} \\times V_{\\text{excess}}$; (2) moles of excess reagent remaining $=$ moles found in the back titration, using the back-titration mole ratio; (3) moles that reacted $=$ added $-$ remaining; (4) use the sample's equation to convert to mass or purity. Each titration keeps its own mole ratio — never mix them up.",
          },
          {
            heading: "Purity and assay",
            body: "Back titration is the standard method for **assay** of limestone, antacid tablets and similar materials. Percentage purity $= \\frac{\\text{mass of pure compound found}}{\\text{mass of impure sample}} \\times 100$. Because two titrations are involved, an indicator suitable for each endpoint must be chosen, and random errors partly cancel but systematic errors accumulate.",
          },
        ],
        keyFormulas: [
          {
            name: "Moles reacted",
            statement:
              "$n_{\\text{reacted}} = n_{\\text{added}} - n_{\\text{excess}}$",
          },
          {
            name: "Percentage purity",
            statement:
              "$\\%\\ \\text{purity} = \\dfrac{m_{\\text{pure}}}{m_{\\text{sample}}} \\times 100$",
          },
          {
            name: "Amount in solution",
            statement: "$n = cV$ with $V$ in dm$^3$",
          },
        ],
        workedExample: {
          problem:
            "A $0.100$ g sample of impure calcium carbonate is reacted with $25.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ hydrochloric acid: $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$. The excess acid is back-titrated with $0.100$ mol dm$^{-3}$ NaOH and the titre is $12.5$ cm$^3$. Calculate the percentage purity of the sample.",
          solution:
            "HCl added: $0.100 \\times 0.0250 = 0.00250$ mol. Excess HCl $=$ moles of NaOH $= 0.100 \\times 0.0125 = 0.00125$ mol. HCl reacted $= 0.00250 - 0.00125 = 0.00125$ mol. From the $1:2$ ratio, $n(\\mathrm{CaCO}_3) = 0.000625$ mol, so $m = 0.000625 \\times 100 = 0.0625$ g. Purity $= \\frac{0.0625}{0.100} \\times 100 = 62.5\\%$.",
        },
      },
      questions: [
        {
          id: "chemsl-u4-backtitration-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why is a back titration used to analyse a sample of limestone rather than titrating the limestone directly with acid?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Calcium carbonate does not react with acid at all",
              },
              {
                id: "b",
                text: "Calcium carbonate is insoluble and reacts slowly, so an excess of acid is added and the leftover acid is titrated",
              },
              { id: "c", text: "A back titration requires no indicator" },
              {
                id: "d",
                text: "Direct titration would produce too much carbon dioxide to measure",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Back titration",
                statement:
                  "An excess reagent is added to the sample and the unreacted excess is titrated; the amount reacted is found by difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Limestone (calcium carbonate) is insoluble and reacts only slowly with acid, so a direct endpoint cannot be detected reliably.",
                working:
                  "\\text{insoluble + slow} \\Rightarrow \\text{excess acid added}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The leftover acid is then titrated accurately with a standard solution, giving the amount that reacted by difference.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "**(a)** The sample is insoluble and slow to react, so excess acid is added and the remainder is titrated",
            commonErrors: [
              "Thinking back titration avoids using an indicator.",
              "Claiming calcium carbonate does not react with acid.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$50.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ hydrochloric acid is added to a calcium carbonate sample. The excess acid is titrated with $0.100$ mol dm$^{-3}$ sodium hydroxide ($\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$) and the titre is $15.0$ cm$^3$. What amount of hydrochloric acid remains after reacting with the sample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.00350$ mol" },
              { id: "b", text: "$0.00100$ mol" },
              { id: "c", text: "$0.00500$ mol" },
              { id: "d", text: "$0.00150$ mol" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement: "HCl and NaOH react $1:1$ in the back titration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The remaining HCl equals the moles of NaOH used in the back titration.",
                working: "n(\\mathrm{NaOH}) = 0.100 \\times \\frac{15.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate and apply the $1:1$ ratio.",
                working:
                  "n(\\mathrm{HCl})_{\\text{remaining}} = 0.00150\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (b) is the amount added, not the amount remaining; (c) is the amount that reacted.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(a)** $0.00150$ mol",
            commonErrors: [
              "Reporting the acid added rather than the acid remaining.",
              "Reporting the acid that reacted instead of remaining.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Using the same experiment as before — $50.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl added to the sample and $15.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ NaOH needed for the back titration — and the equation $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$, what mass of calcium carbonate ($M_r = 100$) was present in the sample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.350$ g" },
              { id: "b", text: "$0.175$ g" },
              { id: "c", text: "$0.125$ g" },
              { id: "d", text: "$0.0875$ g" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moles reacted",
                statement:
                  "$n_{\\text{reacted}} = n_{\\text{added}} - n_{\\text{excess}}$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$1$ mol $\\mathrm{CaCO}_3$ reacts with $2$ mol HCl.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HCl added is $0.00500$ mol and HCl remaining is $0.00150$ mol, so $0.00350$ mol reacted.",
                working:
                  "n_{\\text{reacted}} = 0.00500 - 0.00150 = 0.00350\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $1:2$ ratio to get moles of carbonate.",
                working:
                  "n(\\mathrm{CaCO}_3) = \\frac{0.00350}{2} = 0.00175\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to mass.",
                working: "m = 0.00175 \\times 100 = 0.175\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (b) forgets to halve for the $1:2$ ratio; option (c) halves twice.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(a)** $0.175$ g",
            commonErrors: [
              "Forgetting the factor of $2$ in the CaCO$_3$:HCl ratio.",
              "Subtracting masses instead of moles.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A $0.200$ g sample of impure limestone is reacted with $50.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ hydrochloric acid. The unreacted acid is titrated with $0.100$ mol dm$^{-3}$ sodium hydroxide; the titre is $15.0$ cm$^3$. The relevant equations are $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$ and $\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid added to the limestone.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid remaining after the reaction.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the amount, in moles, of calcium carbonate in the sample.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the percentage purity of the limestone ($M_r$ of CaCO$_3$ $= 100$).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Moles reacted",
                statement: "Moles reacted $=$ moles added $-$ moles excess.",
              },
              {
                kind: "principle",
                name: "Mole ratios",
                statement: "CaCO$_3$:HCl is $1:2$; HCl:NaOH is $1:1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Use $n = cV$ with volume converted to dm$^3$.",
                working:
                  "n(\\mathrm{HCl})_{\\text{added}} = 0.100 \\times \\frac{50.0}{1000} = 0.00500\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The back titration is $1:1$, so remaining HCl equals moles of NaOH used.",
                working:
                  "n(\\mathrm{NaOH}) = 0.100 \\times \\frac{15.0}{1000} = 0.00150\\ \\text{mol} = n(\\mathrm{HCl})_{\\text{remaining}}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Subtract to find acid that reacted, then apply the $1:2$ ratio.",
                working:
                  "n_{\\text{reacted}} = 0.00500 - 0.00150 = 0.00350\\ \\text{mol};\\quad n(\\mathrm{CaCO}_3) = \\frac{0.00350}{2} = 0.00175\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Convert moles of carbonate to mass and express as a percentage of the sample.",
                working:
                  "m = 0.00175 \\times 100 = 0.175\\ \\text{g};\\quad \\%\\ \\text{purity} = \\frac{0.175}{0.200} \\times 100 = 87.5\\%",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.00500$ mol (b) $0.00150$ mol (c) $0.00175$ mol (d) $87.5\\%$ pure",
            commonErrors: [
              "Applying the $1:2$ ratio to the back titration instead of the acid-carbonate reaction.",
              "Using the acid added rather than the acid reacted in part (c).",
            ],
            examinerNote:
              "Award M1 for each correct n = cV calculation, M1 for the difference method in (c) and A1 for the final purity. Accept consistent follow-through from earlier parts.",
          },
        },
        {
          id: "chemsl-u4-backtitration-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the correct order of steps in a back titration?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Add the sample to the burette and titrate with itself",
              },
              {
                id: "b",
                text: "Add excess reagent to the sample, titrate the leftover excess, find the amount that reacted by difference",
              },
              { id: "c", text: "Weigh the sample, add water, then titrate" },
              {
                id: "d",
                text: "Titrate the sample directly, then add more reagent",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Back titration",
                statement:
                  "An excess reagent is added to the sample, the unreacted excess is titrated, and the amount that reacted is found by difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sample must be fully reacted first, which requires an excess of one reagent.",
                working:
                  "n_{\\text{excess}} \\text{ added} > n_{\\text{needed}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The leftover excess is then measured accurately by a second titration.",
                working:
                  "n_{\\text{reacted}} = n_{\\text{added}} - n_{\\text{remaining}}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Add excess reagent, titrate the leftover excess, find the reacted amount by difference",
            commonErrors: [
              "Thinking the sample itself is titrated directly in a back titration.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$25.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ hydrochloric acid is added to a calcium carbonate sample. The excess acid is back-titrated with $0.100$ mol dm$^{-3}$ sodium hydroxide ($\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$) and the titre is $20.0$ cm$^3$. What amount of hydrochloric acid remains after reacting with the sample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.00200$ mol" },
              { id: "b", text: "$0.00100$ mol" },
              { id: "c", text: "$0.00500$ mol" },
              { id: "d", text: "$0.00300$ mol" },
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
              {
                kind: "principle",
                name: "Mole ratio",
                statement: "HCl and NaOH react $1:1$ in the back titration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The remaining HCl equals the moles of NaOH used in the back titration.",
                working: "n(\\mathrm{NaOH}) = 0.100 \\times \\frac{20.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate and apply the $1:1$ ratio.",
                working:
                  "n(\\mathrm{HCl})_{\\text{remaining}} = 0.00200\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (a) is the amount added; option (c) is the amount that reacted.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $0.00200$ mol",
            commonErrors: [
              "Reporting the acid added rather than the acid remaining.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Why must an excess of acid be added to the limestone sample in a back titration?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "So that all of the calcium carbonate reacts completely, leaving a measurable amount of acid to titrate",
              },
              { id: "b", text: "So that no indicator is needed" },
              { id: "c", text: "So that the sample dissolves faster" },
              {
                id: "d",
                text: "Because calcium carbonate cannot react with a limited amount of acid",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Excess reagent",
                statement:
                  "An excess guarantees the sample is completely consumed; the leftover excess is then measured.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If the acid were limiting, an unknown amount of carbonate might remain unreacted and the result would be unreliable.",
                working: "n_{\\text{acid added}} > n_{\\text{acid needed}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The leftover acid must be present in a measurable amount for the back titration to give an accurate endpoint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The excess also ensures the reaction goes to completion despite the slow dissolution of the solid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(a)** To ensure complete reaction and leave a measurable excess to titrate",
            commonErrors: [
              "Thinking the excess is needed to make the sample dissolve rather than to guarantee complete reaction.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "In a limestone assay, a student calculates the mass of calcium carbonate from the acid that reacted but forgets that $2$ mol of HCl react with $1$ mol of $\\mathrm{CaCO}_3$. What is the effect on the calculated percentage purity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The purity is calculated too high" },
              { id: "b", text: "The purity cannot be calculated" },
              { id: "c", text: "The purity is calculated too low" },
              { id: "d", text: "The purity is unaffected" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$ requires halving the acid moles to get carbonate moles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without dividing by $2$, the moles of $\\mathrm{CaCO}_3$ are twice the true value.",
                working:
                  "n(\\mathrm{CaCO}_3)_{\\text{calc}} = n(\\mathrm{HCl})_{\\text{reacted}} = 2 \\times n_{\\text{true}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The mass and hence the percentage purity are therefore twice the true value.",
                working:
                  "m_{\\text{calc}} = 2m_{\\text{true}} \\Rightarrow \\%\\ \\text{purity too high}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is a systematic error — repeating the titration does not remove it.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** The purity is calculated too high",
            commonErrors: [
              "Thinking the error is random and cancels on averaging.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "In the back titration of a sample, $12.5$ cm$^3$ of $0.200$ mol dm$^{-3}$ sodium hydroxide is used to titrate the excess acid. Calculate the amount, in moles, of sodium hydroxide used.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$n(\\mathrm{NaOH})$ / mol",
                answer: 0.0025,
                tolerance: 0.00001,
                unit: "mol",
              },
            ],
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
                reasoning:
                  "Convert the volume to dm$^3$ and multiply by concentration.",
                working: "n = 0.200 \\times \\frac{12.5}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.00250\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n(\\mathrm{NaOH}) = 0.00250$ mol",
            commonErrors: ["Using $12.5$ instead of $0.0125$ dm$^3$."],
          },
        },
        {
          id: "chemsl-u4-backtitration-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "$40.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ hydrochloric acid is added to a calcium carbonate sample. The excess acid is back-titrated with $0.100$ mol dm$^{-3}$ sodium hydroxide ($\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$) and the titre is $25.0$ cm$^3$. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{HCl})$ added / mol",
                answer: 0.004,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{HCl})$ remaining / mol",
                answer: 0.0025,
                tolerance: 0.0001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement: "HCl and NaOH react $1:1$ in the back titration.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of acid added.",
                working:
                  "n(\\mathrm{HCl})_{\\text{added}} = 0.100 \\times \\frac{40.0}{1000} = 0.00400\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find moles of NaOH used, equal to the remaining HCl by the $1:1$ ratio.",
                working: "n(\\mathrm{NaOH}) = 0.100 \\times \\frac{25.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working:
                  "n(\\mathrm{HCl})_{\\text{remaining}} = 0.00250\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The acid that reacted is $0.00400 - 0.00250 = 0.00150$ mol (needed for later parts).",
                working: "n_{\\text{reacted}} = 0.00150\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $0.00400$ mol (b) $0.00250$ mol",
            commonErrors: ["Using the back-titration titre as the acid added."],
          },
        },
        {
          id: "chemsl-u4-backtitration-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Using the experiment in which $40.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl is added to a sample and $25.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ NaOH is needed for the back titration ($\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$), and $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$, give your answers in the requested units ($M_r(\\mathrm{CaCO}_3) = 100$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{HCl})$ reacted / mol",
                answer: 0.0015,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{CaCO}_3)$ / mol",
                answer: 0.00075,
                tolerance: 0.00001,
                unit: "mol",
              },
              {
                label: "(c) $m(\\mathrm{CaCO}_3)$ / g",
                answer: 0.075,
                tolerance: 0.001,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moles reacted",
                statement:
                  "$n_{\\text{reacted}} = n_{\\text{added}} - n_{\\text{remaining}}$",
              },
              {
                kind: "principle",
                name: "Mole ratio",
                statement:
                  "$1$ mol $\\mathrm{CaCO}_3$ reacts with $2$ mol HCl.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HCl added is $0.00400$ mol and HCl remaining is $0.00250$ mol.",
                working:
                  "n(\\mathrm{HCl})_{\\text{added}} = 0.00400\\ \\text{mol};\\quad n(\\mathrm{HCl})_{\\text{remaining}} = 0.00250\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract to find the acid that reacted.",
                working:
                  "n_{\\text{reacted}} = 0.00400 - 0.00250 = 0.00150\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the $1:2$ ratio to get moles of carbonate.",
                working:
                  "n(\\mathrm{CaCO}_3) = \\frac{0.00150}{2} = 0.000750\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert moles to mass.",
                working: "m = 0.000750 \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m = 0.0750\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.00150$ mol (b) $0.000750$ mol (c) $0.0750$ g",
            commonErrors: [
              "Forgetting the factor of $2$ in the CaCO$_3$:HCl ratio.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A $0.500$ g sample of impure limestone is reacted with $50.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ hydrochloric acid. The excess acid is back-titrated with $0.100$ mol dm$^{-3}$ sodium hydroxide and the titre is $25.0$ cm$^3$ ($\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$; $\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$). What is the percentage purity of the limestone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$37.5\\%$" },
              { id: "b", text: "$87.5\\%$" },
              { id: "c", text: "$75.0\\%$" },
              { id: "d", text: "$50.0\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moles reacted",
                statement: "Moles reacted $=$ moles added $-$ moles excess.",
              },
              {
                kind: "principle",
                name: "Mole ratios",
                statement: "CaCO$_3$:HCl is $1:2$; HCl:NaOH is $1:1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HCl added $= 0.0100$ mol; HCl remaining $=$ NaOH moles $= 0.00250$ mol; reacted $= 0.00750$ mol.",
                working:
                  "n_{\\text{reacted}} = 0.0100 - 0.00250 = 0.00750\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Halve for the $1:2$ ratio and convert to mass: $0.00375$ mol $\\times 100 = 0.375$ g CaCO$_3$.",
                working:
                  "m(\\mathrm{CaCO}_3) = \\frac{0.00750}{2} \\times 100 = 0.375\\ \\text{g}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Express as a percentage of the sample.",
                working:
                  "\\%\\ \\text{purity} = \\frac{0.375}{0.500} \\times 100 = 75.0\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $75.0\\%$",
            commonErrors: [
              "Forgetting to halve for the $1:2$ CaCO$_3$:HCl ratio, giving $150\\%$ or an impossible value.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A $0.500$ g sample of impure calcium carbonate is reacted with $50.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ hydrochloric acid. The unreacted acid is titrated with $0.200$ mol dm$^{-3}$ sodium hydroxide; the titre is $10.0$ cm$^3$. The equations are $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$ and $\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid added to the sample.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid remaining after the reaction.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the amount, in moles, of calcium carbonate in the sample.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the percentage purity of the sample ($M_r$ of CaCO$_3$ $= 100$).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Moles reacted",
                statement: "Moles reacted $=$ moles added $-$ moles excess.",
              },
              {
                kind: "principle",
                name: "Mole ratios",
                statement: "CaCO$_3$:HCl is $1:2$; HCl:NaOH is $1:1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Use $n = cV$ with volume converted to dm$^3$.",
                working:
                  "n(\\mathrm{HCl})_{\\text{added}} = 0.200 \\times \\frac{50.0}{1000} = 0.0100\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The back titration is $1:1$, so remaining HCl equals moles of NaOH used.",
                working:
                  "n(\\mathrm{NaOH}) = 0.200 \\times \\frac{10.0}{1000} = 0.00200\\ \\text{mol} = n(\\mathrm{HCl})_{\\text{remaining}}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Subtract to find acid that reacted, then apply the $1:2$ ratio.",
                working:
                  "n_{\\text{reacted}} = 0.0100 - 0.00200 = 0.00800\\ \\text{mol};\\quad n(\\mathrm{CaCO}_3) = \\frac{0.00800}{2} = 0.00400\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Convert moles to mass and express as a percentage of the sample.",
                working:
                  "m = 0.00400 \\times 100 = 0.400\\ \\text{g};\\quad \\%\\ \\text{purity} = \\frac{0.400}{0.500} \\times 100 = 80.0\\%",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.0100$ mol (b) $0.00200$ mol (c) $0.00400$ mol (d) $80.0\\%$ pure",
            commonErrors: [
              "Using the acid added rather than the acid reacted in part (c).",
              "Applying the $1:2$ ratio in the wrong direction.",
            ],
            examinerNote:
              "Award M1 for each correct n = cV calculation, M1 for the difference method in (c) and A1 for the final purity. Accept consistent follow-through from earlier parts.",
          },
        },
        {
          id: "chemsl-u4-backtitration-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "An antacid tablet containing calcium carbonate is analysed by back titration. $25.0$ cm$^3$ of $0.500$ mol dm$^{-3}$ hydrochloric acid is added to a crushed tablet. The excess acid is back-titrated with $0.250$ mol dm$^{-3}$ sodium hydroxide and the titre is $20.0$ cm$^3$ ($\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$; $\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$). Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) $n(\\mathrm{HCl})$ added / mol",
                answer: 0.0125,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(b) $n(\\mathrm{HCl})$ remaining / mol",
                answer: 0.005,
                tolerance: 0.0001,
                unit: "mol",
              },
              {
                label: "(c) $n(\\mathrm{CaCO}_3)$ / mol",
                answer: 0.00375,
                tolerance: 0.00001,
                unit: "mol",
              },
              {
                label: "(d) $m(\\mathrm{CaCO}_3)$ / g",
                answer: 0.375,
                tolerance: 0.001,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Moles reacted",
                statement: "Moles reacted $=$ moles added $-$ moles excess.",
              },
              {
                kind: "principle",
                name: "Mole ratios",
                statement: "CaCO$_3$:HCl is $1:2$; HCl:NaOH is $1:1$.",
              },
            ],
            steps: [
              {
                reasoning: "Find moles of acid added.",
                working:
                  "n(\\mathrm{HCl})_{\\text{added}} = 0.500 \\times \\frac{25.0}{1000} = 0.0125\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find moles of NaOH used, equal to remaining HCl by the $1:1$ back-titration ratio.",
                working:
                  "n(\\mathrm{NaOH}) = 0.250 \\times \\frac{20.0}{1000} = 0.00500\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subtract to find acid that reacted with the tablet.",
                working:
                  "n_{\\text{reacted}} = 0.0125 - 0.00500 = 0.00750\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply the $1:2$ ratio to get moles of calcium carbonate.",
                working:
                  "n(\\mathrm{CaCO}_3) = \\frac{0.00750}{2} = 0.00375\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert moles to mass using $M_r = 100$.",
                working: "m = 0.00375 \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m = 0.375\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.0125$ mol (b) $0.00500$ mol (c) $0.00375$ mol (d) $0.375$ g",
            commonErrors: [
              "Applying the $1:2$ ratio to the back titration instead of the acid–carbonate reaction.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which of the following is an advantage of using a back titration rather than a direct titration for an insoluble sample?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The endpoint is easier to detect because the sample reacts slowly with the excess reagent added all at once",
              },
              { id: "b", text: "Only one standard solution is needed" },
              { id: "c", text: "No indicator is required at all" },
              { id: "d", text: "The sample does not need to be weighed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Back titration",
                statement:
                  "Used when the sample is insoluble or reacts too slowly for a direct endpoint to be detected reliably.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adding a measured excess lets the slow reaction reach completion before any titration begins.",
                working:
                  "\\text{excess added} \\Rightarrow \\text{reaction goes to completion}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The subsequent titration of the excess is a fast, sharp acid–base reaction with a clear endpoint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A back titration still needs an indicator for the back titration and the sample still needs to be weighed.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(a)** The endpoint is easier to detect because the sample reacts slowly with the excess reagent added all at once",
            commonErrors: [
              "Thinking a back titration avoids indicators or weighing.",
            ],
          },
        },
        {
          id: "chemsl-u4-backtitration-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A $0.600$ g sample of impure limestone is reacted with $100$ cm$^3$ of $0.100$ mol dm$^{-3}$ hydrochloric acid. The unreacted acid is titrated with $0.100$ mol dm$^{-3}$ sodium hydroxide; the titre is $12.50$ cm$^3$. The equations are $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$ and $\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H}_2\\mathrm{O}$ ($M_r$ of CaCO$_3$ $= 100$).",
          parts: [
            {
              label: "a",
              prompt:
                "Write the balanced equation for the reaction of calcium carbonate with hydrochloric acid.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid added to the sample.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the amount, in moles, of hydrochloric acid remaining after the reaction.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the amount, in moles, of calcium carbonate in the sample.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Calculate the percentage purity of the limestone and suggest one improvement to the method.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole ratios",
                statement: "CaCO$_3$:HCl is $1:2$; HCl:NaOH is $1:1$.",
              },
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "principle",
                name: "Moles reacted",
                statement: "Moles reacted $=$ moles added $-$ moles excess.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Carbonate reacts with acid to give a salt, water and carbon dioxide; balance Ca, C, H and O.",
                working:
                  "\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Check the equation is balanced: Ca $1=1$, C $1=1$, Cl $2=2$, H $2=2$, O $3=3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Use $n = cV$ with the volume converted to dm$^3$.",
                working:
                  "n(\\mathrm{HCl})_{\\text{added}} = 0.100 \\times \\frac{100}{1000} = 0.0100\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The back titration is $1:1$, so remaining HCl equals moles of NaOH used.",
                working:
                  "n(\\mathrm{NaOH}) = 0.100 \\times \\frac{12.50}{1000} = 0.00125\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Subtract to find reacted acid, then halve for the $1:2$ ratio.",
                working:
                  "n_{\\text{reacted}} = 0.0100 - 0.00125 = 0.00875\\ \\text{mol};\\quad n(\\mathrm{CaCO}_3) = \\frac{0.00875}{2} = 0.004375\\ \\text{mol}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Convert moles to mass and express as a percentage of the sample.",
                working:
                  "m = 0.004375 \\times 100 = 0.4375\\ \\text{g};\\quad \\%\\ \\text{purity} = \\frac{0.4375}{0.600} \\times 100 = 72.9\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Any valid improvement: use larger samples, repeat titrations and average, use a more concentrated acid to ensure excess, or ensure all solid dissolves.",
                working:
                  "\\text{e.g. repeat and average / ensure complete dissolution}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $\\mathrm{CaCO}_3 + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl}_2 + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2$ (b) $0.0100$ mol (c) $0.00125$ mol (d) $0.004375$ mol (e) $72.9\\%$ pure; e.g. repeat titrations and average to reduce random error",
            commonErrors: [
              "Using the acid added rather than the acid reacted in part (d).",
              "Applying the $1:2$ ratio to the back titration.",
            ],
            examinerNote:
              "Award M1 for the balanced equation and A1 for the atom check in (a); M1 for each correct n = cV; M1 for the difference method and ratio in (d); A1 for 72.9% and B1 for a valid improvement in (e).",
          },
        },
      ],
    },
  ],
};
