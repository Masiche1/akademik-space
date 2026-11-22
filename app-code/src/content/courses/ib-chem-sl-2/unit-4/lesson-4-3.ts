import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "chemsl-u4-lesson-4-3",
  code: "4-3",
  title: "Gas Volumes and Solution Stoichiometry",
  goal: "I CAN apply Avogadro's law and molar volume to calculate gas volumes in reactions, and use concentration and dilution relationships in solution stoichiometry.",
  standards: ["Paper 1", "Paper 2", "Topic 1.3", "Topic 11.1"],
  vocabulary: [
    {
      term: "Avogadro's law",
      definition:
        "Equal volumes of gases at the same temperature and pressure contain equal numbers of particles (moles).",
    },
    {
      term: "Molar volume",
      definition:
        "The volume occupied by one mole of a gas; at room temperature and pressure it is approximately $24$ dm$^3$ mol$^{-1}$.",
    },
    {
      term: "Room temperature and pressure (r.t.p.)",
      definition:
        "Approximately $298$ K and $1$ atm pressure, at which the molar volume of a gas is $24$ dm$^3$ mol$^{-1}$.",
    },
    {
      term: "Concentration",
      definition:
        "The amount of solute per unit volume of solution, in mol dm$^{-3}$; also expressed as mass concentration in g dm$^{-3}$.",
    },
    {
      term: "Dilution",
      definition:
        "The process of adding solvent to reduce the concentration of a solution while keeping the amount of solute constant.",
    },
    {
      term: "Standard solution",
      definition:
        "A solution of accurately known concentration, used in titrations and other volumetric analysis.",
    },
  ],
  concepts: [
    {
      id: "chemsl-u4-gasvol",
      title: "Gas volumes and Avogadro's law",
      skill:
        "Calculate volumes of gaseous reactants and products using the mole ratio and the molar volume of $24$ dm$^3$ mol$^{-1}$ at r.t.p.",
      lesson: {
        sections: [
          {
            heading: "Avogadro's law and molar volume",
            body: "**Avogadro's law** states that equal volumes of gases at the same temperature and pressure contain equal numbers of moles. This means the volumes of gaseous reactants and products in a reaction are in the same ratio as their moles — the coefficients of the balanced equation. At room temperature and pressure (r.t.p., about $298$ K and $1$ atm), one mole of any gas occupies approximately $24$ dm$^3$.",
          },
          {
            heading: "Calculating gas volumes",
            body: "Two routes give the same answer: convert the known quantity to moles, apply the mole ratio, then use $V = n \\times 24$ dm$^3$; or, when all species are gases at the same conditions, use volume ratios directly — $60$ cm$^3$ of propane in $\\mathrm{C}_3\\mathrm{H}_8 + 5\\mathrm{O}_2 \\rightarrow 3\\mathrm{CO}_2 + 4\\mathrm{H}_2\\mathrm{O}$ produces $3 \\times 60 = 180$ cm$^3$ of $\\mathrm{CO}_2$ and consumes $5 \\times 60 = 300$ cm$^3$ of $\\mathrm{O}_2$.",
          },
          {
            heading: "Liquids and the total gas volume",
            body: "Water produced in combustion is a liquid at r.t.p., so it does not contribute to the measured gas volume. When asked for the total volume of gas remaining, exclude liquid water. If the products include water vapour (high temperature conditions), include it using the $2:1$ mole ratio of $\\mathrm{H}_2\\mathrm{O}$ to $\\mathrm{H}_2$.",
          },
        ],
        keyFormulas: [
          {
            name: "Volume from moles",
            statement: "$V = n \\times 24$ dm$^3$ mol$^{-1}$ at r.t.p.",
          },
          {
            name: "Gas volume ratio",
            statement:
              "Volumes of gaseous species are in the ratio of their coefficients in the balanced equation",
          },
          {
            name: "Mass from gas volume",
            statement: "$n = \\frac{V}{24}$, then $m = nM_r$",
          },
        ],
        workedExample: {
          problem:
            "$120$ cm$^3$ of carbon monoxide reacts with oxygen: $2\\mathrm{CO} + \\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2$. All gases are measured at r.t.p. Calculate the volume of oxygen required and the volume of carbon dioxide produced.",
          solution:
            "The volume ratio CO : $\\mathrm{O}_2$ : $\\mathrm{CO}_2$ is $2:1:2$. Oxygen needed $= \\frac{120}{2} = 60$ cm$^3$; carbon dioxide produced $= 120$ cm$^3$ (same volume as the CO, since the ratio is $2:2$).",
        },
      },
      questions: [
        {
          id: "chemsl-u4-gasvol-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What volume does $0.500$ mol of an ideal gas occupy at room temperature and pressure, where the molar volume is $24$ dm$^3$ mol$^{-1}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12.0$ dm$^3$" },
              { id: "b", text: "$48.0$ dm$^3$" },
              { id: "c", text: "$24.0$ dm$^3$" },
              { id: "d", text: "$0.0208$ dm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molar volume",
                statement: "$V = n \\times 24$ dm$^3$ mol$^{-1}$ at r.t.p.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply moles by the molar volume.",
                working: "V = 0.500 \\times 24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V = 12.0\\ \\text{dm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $12.0$ dm$^3$",
            commonErrors: [
              "Using $22.4$ dm$^3$ mol$^{-1}$ (the s.t.p. value) instead of $24$.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Carbon monoxide burns in oxygen: $2\\mathrm{CO} + \\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2$. What volume of oxygen is needed to react completely with $120$ cm$^3$ of carbon monoxide, all measured at the same temperature and pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60$ cm$^3$" },
              { id: "b", text: "$240$ cm$^3$" },
              { id: "c", text: "$120$ cm$^3$" },
              { id: "d", text: "$30$ cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Avogadro's law",
                statement:
                  "Gas volumes are in the ratio of the coefficients in the balanced equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The equation gives a $2:1$ volume ratio of CO to $\\mathrm{O}_2$.",
                working: "V(\\mathrm{O}_2) = \\frac{120}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V(\\mathrm{O}_2) = 60\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (b) assumes a $1:1$ ratio; option (c) inverts the ratio.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(a)** $60$ cm$^3$",
            commonErrors: [
              "Using the $2:2$ CO to $\\mathrm{CO}_2$ ratio for oxygen.",
              "Multiplying instead of dividing by the stoichiometric ratio.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$4.80$ dm$^3$ of hydrogen gas is collected at r.t.p. ($24$ dm$^3$ mol$^{-1}$). What mass of hydrogen ($A_r$ of H $= 1.0$) does this represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.200$ g" },
              { id: "b", text: "$0.800$ g" },
              { id: "c", text: "$4.80$ g" },
              { id: "d", text: "$0.400$ g" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount from gas volume",
                statement: "$n = \\frac{V}{24}$ mol at r.t.p.",
              },
              {
                kind: "formula",
                name: "Mass from moles",
                statement: "$m = nM_r$",
              },
            ],
            steps: [
              {
                reasoning: "Convert the gas volume to moles.",
                working: "n = \\frac{4.80}{24} = 0.200\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert moles to mass using $M_r(\\mathrm{H}_2) = 2.0$.",
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
              {
                reasoning:
                  "Option (a) uses $M_r = 1.0$ (the atomic mass) instead of the molecular mass $2.0$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(d)** $0.400$ g",
            commonErrors: [
              "Using the molar mass of atomic hydrogen instead of $\\mathrm{H}_2$.",
              "Multiplying volume by molar volume instead of dividing.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A $60.0$ cm$^3$ sample of propane gas is completely burned in exactly the required amount of oxygen at room temperature and pressure: $\\mathrm{C}_3\\mathrm{H}_8 + 5\\mathrm{O}_2 \\rightarrow 3\\mathrm{CO}_2 + 4\\mathrm{H}_2\\mathrm{O}$. The water produced condenses to a liquid.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the volume of carbon dioxide produced.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the volume of oxygen consumed.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State the total volume of gas remaining after cooling to room temperature and explain your answer.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the total volume of gas that would remain if the water stayed as vapour.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "Volumes of gaseous species are in the ratio of the coefficients in the balanced equation.",
              },
              {
                kind: "principle",
                name: "States of matter",
                statement:
                  "At r.t.p. water is a liquid and does not contribute to gas volume.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The propane to $\\mathrm{CO}_2$ volume ratio is $1:3$.",
                working:
                  "V(\\mathrm{CO}_2) = 3 \\times 60.0 = 180\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The propane to $\\mathrm{O}_2$ volume ratio is $1:5$.",
                working:
                  "V(\\mathrm{O}_2) = 5 \\times 60.0 = 300\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "All the oxygen is consumed and the water condenses to a liquid, so the only gas remaining is the carbon dioxide.",
                working:
                  "V_{\\text{gas}} = 180\\ \\text{cm}^3\\ \\text{(CO}_2\\text{ only; H}_2\\text{O liquid)}",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "If water is vapour it contributes $4 \\times 60.0 = 240$ cm$^3$ to the gas volume.",
                working: "V_{\\text{total}} = 180 + 240 = 420\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $180$ cm$^3$ (b) $300$ cm$^3$ (c) $180$ cm$^3$ of $\\mathrm{CO}_2$ only, since water condenses (d) $420$ cm$^3$ if water is vapour",
            commonErrors: [
              "Including the water volume in part (c) even though it is liquid at r.t.p.",
              "Using the wrong coefficient ratio, e.g. $4:5$ for $\\mathrm{CO}_2$.",
            ],
            examinerNote:
              "In (c) award R1 for identifying $\\mathrm{CO}_2$ as the only remaining gas and R1 for the correct explanation involving liquid water.",
          },
        },
        {
          id: "chemsl-u4-gasvol-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What volume does $0.750$ mol of an ideal gas occupy at room temperature and pressure, where the molar volume is $24$ dm$^3$ mol$^{-1}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18.0$ dm$^3$" },
              { id: "b", text: "$32.0$ dm$^3$" },
              { id: "c", text: "$0.0313$ dm$^3$" },
              { id: "d", text: "$24.0$ dm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molar volume",
                statement: "$V = n \\times 24$ dm$^3$ mol$^{-1}$ at r.t.p.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply moles by the molar volume.",
                working: "V = 0.750 \\times 24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V = 18.0\\ \\text{dm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $18.0$ dm$^3$",
            commonErrors: [
              "Dividing by the molar volume instead of multiplying.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Hydrogen reacts with chlorine: $\\mathrm{H}_2 + \\mathrm{Cl}_2 \\rightarrow 2\\mathrm{HCl}$. All gases are measured at the same temperature and pressure. What volume of hydrogen chloride is produced from $100$ cm$^3$ of hydrogen and excess chlorine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$200$ cm$^3$" },
              { id: "b", text: "$50$ cm$^3$" },
              { id: "c", text: "$100$ cm$^3$" },
              { id: "d", text: "$400$ cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "Volumes of gaseous species are in the ratio of the coefficients in the balanced equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The equation gives a $1:1:2$ volume ratio of $\\mathrm{H}_2$ : $\\mathrm{Cl}_2$ : HCl.",
                working: "V(\\mathrm{HCl}) = 2 \\times V(\\mathrm{H}_2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working:
                  "V(\\mathrm{HCl}) = 2 \\times 100 = 200\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (b) assumes a $1:1$ ratio; the product coefficient is $2$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $200$ cm$^3$",
            commonErrors: [
              "Using a $1:1$ ratio and ignoring the coefficient $2$ on HCl.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Ethane burns completely: $\\mathrm{C}_2\\mathrm{H}_6 + \\frac{7}{2}\\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2 + 3\\mathrm{H}_2\\mathrm{O}$. What volume of carbon dioxide is produced when $80$ cm$^3$ of ethane is burned in excess oxygen at room temperature and pressure (water is a liquid)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$560$ cm$^3$" },
              { id: "b", text: "$80$ cm$^3$" },
              { id: "c", text: "$240$ cm$^3$" },
              { id: "d", text: "$160$ cm$^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "Gas volumes are in the ratio of the coefficients; only gases count.",
              },
              {
                kind: "principle",
                name: "States of matter",
                statement:
                  "Water is a liquid at r.t.p. and does not contribute to gas volume.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The ethane to $\\mathrm{CO}_2$ volume ratio is $1:2$.",
                working: "V(\\mathrm{CO}_2) = 2 \\times 80",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "V(\\mathrm{CO}_2) = 160\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (d) incorrectly includes the water; option (c) uses the $1:3$ ratio to water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** $160$ cm$^3$",
            commonErrors: [
              "Including the volume of water as a gas.",
              "Using the $1:7/2$ ratio intended for oxygen.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "$100$ cm$^3$ of hydrogen and $40$ cm$^3$ of oxygen react: $2\\mathrm{H}_2 + \\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O}$. All gases are at the same temperature and pressure and the water condenses. What volume of gas remains after the reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$ cm$^3$ of hydrogen" },
              { id: "b", text: "$80$ cm$^3$ of hydrogen" },
              { id: "c", text: "$20$ cm$^3$ of oxygen" },
              {
                id: "d",
                text: "$0$ cm$^3$ — the reactants are in the exact ratio",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting reagent for gases",
                statement:
                  "Gas volumes follow the mole ratio; the limiting reagent determines what remains.",
              },
              {
                kind: "principle",
                name: "States of matter",
                statement: "Water is a liquid at these conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The ratio needed is $2$ vol $\\mathrm{H}_2$ per $1$ vol $\\mathrm{O}_2$; $40$ cm$^3$ of $\\mathrm{O}_2$ can consume only $80$ cm$^3$ of $\\mathrm{H}_2$.",
                working:
                  "2 \\times 40 = 80\\ \\text{cm}^3\\ \\mathrm{H}_2\\ \\text{consumed}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hydrogen is in excess: $100 - 80 = 20$ cm$^3$ remains; the water is liquid so contributes nothing.",
                working:
                  "V_{\\text{remaining}} = 20\\ \\text{cm}^3\\ \\mathrm{H}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The gas remaining is hydrogen, not oxygen — all the oxygen is consumed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $20$ cm$^3$ of hydrogen",
            commonErrors: [
              "Assuming equal volumes react in a $1:1$ ratio.",
              "Counting liquid water as a gas product.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "Calculate the amount, in moles, of gas present in $3.60$ dm$^3$ at room temperature and pressure, where the molar volume is $24$ dm$^3$ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$n$ / mol",
                answer: 0.15,
                tolerance: 0.001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount from gas volume",
                statement: "$n = \\frac{V}{24}$ mol at r.t.p.",
              },
            ],
            steps: [
              {
                reasoning: "Divide the gas volume by the molar volume.",
                working: "n = \\frac{3.60}{24}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.150\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n = 0.150$ mol",
            commonErrors: [
              "Multiplying by the molar volume instead of dividing.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the mass, in grams, of carbon dioxide ($M_r = 44.0$) in $2.40$ dm$^3$ measured at room temperature and pressure, where the molar volume is $24$ dm$^3$ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$m(\\mathrm{CO}_2)$ / g",
                answer: 4.4,
                tolerance: 0.01,
                unit: "g",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount from gas volume",
                statement: "$n = \\frac{V}{24}$ mol at r.t.p.",
              },
              {
                kind: "formula",
                name: "Mass from moles",
                statement: "$m = nM_r$",
              },
            ],
            steps: [
              {
                reasoning: "Convert the gas volume to moles.",
                working: "n = \\frac{2.40}{24} = 0.100\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert moles to mass.",
                working: "m = 0.100 \\times 44.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m = 4.40\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m(\\mathrm{CO}_2) = 4.40$ g",
            commonErrors: [
              "Using $M_r = 12$ (carbon only) instead of $44$ for $\\mathrm{CO}_2$.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "$120$ cm$^3$ of carbon monoxide reacts with oxygen: $2\\mathrm{CO} + \\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2$, all gases measured at the same temperature and pressure. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) volume of $\\mathrm{O}_2$ / cm$^3$",
                answer: 60,
                tolerance: 0.1,
                unit: "cm$^3$",
              },
              {
                label: "(b) volume of $\\mathrm{CO}_2$ / cm$^3$",
                answer: 120,
                tolerance: 0.1,
                unit: "cm$^3$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "Volumes of gaseous species are in the ratio of the coefficients: $2:1:2$.",
              },
            ],
            steps: [
              {
                reasoning: "The CO to $\\mathrm{O}_2$ ratio is $2:1$.",
                working:
                  "V(\\mathrm{O}_2) = \\frac{120}{2} = 60\\ \\text{cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The CO to $\\mathrm{CO}_2$ ratio is $2:2 = 1:1$.",
                working: "V(\\mathrm{CO}_2) = 120\\ \\text{cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the oxygen volume.",
                working: "60\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate the carbon dioxide volume.",
                working: "120\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $60$ cm$^3$ (b) $120$ cm$^3$",
            commonErrors: [
              "Using the $2:2$ ratio for oxygen instead of $2:1$.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$50$ cm$^3$ of methane burns completely in oxygen at room temperature and pressure: $\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}$ (water is a liquid). Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) volume of $\\mathrm{CO}_2$ / cm$^3$",
                answer: 50,
                tolerance: 0.1,
                unit: "cm$^3$",
              },
              {
                label: "(b) volume of $\\mathrm{O}_2$ needed / cm$^3$",
                answer: 100,
                tolerance: 0.1,
                unit: "cm$^3$",
              },
              {
                label: "(c) total gas volume remaining / cm$^3$",
                answer: 50,
                tolerance: 0.1,
                unit: "cm$^3$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "Gas volumes follow the coefficient ratio $1:2:1$ for $\\mathrm{CH}_4$ : $\\mathrm{O}_2$ : $\\mathrm{CO}_2$.",
              },
              {
                kind: "principle",
                name: "States of matter",
                statement:
                  "Water produced is a liquid at r.t.p. and does not count as gas.",
              },
            ],
            steps: [
              {
                reasoning: "The methane to $\\mathrm{CO}_2$ ratio is $1:1$.",
                working: "V(\\mathrm{CO}_2) = 50\\ \\text{cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The methane to $\\mathrm{O}_2$ ratio is $1:2$.",
                working: "V(\\mathrm{O}_2) = 2 \\times 50 = 100\\ \\text{cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All methane and oxygen are consumed and water is liquid, so only the $\\mathrm{CO}_2$ remains.",
                working: "V_{\\text{gas}} = 50\\ \\text{cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate all three values.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $50$ cm$^3$ (b) $100$ cm$^3$ (c) $50$ cm$^3$",
            commonErrors: [
              "Counting the water as a gas product ($2 \\times 50 = 100$ cm$^3$ extra).",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "$90$ cm$^3$ of hydrogen and $30$ cm$^3$ of oxygen react completely: $2\\mathrm{H}_2 + \\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O}$ (water is a liquid). What volume of gas remains unreacted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$ cm$^3$" },
              { id: "b", text: "$30$ cm$^3$ of hydrogen" },
              { id: "c", text: "$30$ cm$^3$ of oxygen" },
              { id: "d", text: "$60$ cm$^3$ of hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "The $2:1$ ratio means $30$ cm$^3$ of $\\mathrm{O}_2$ consumes $60$ cm$^3$ of $\\mathrm{H}_2$.",
              },
            ],
            steps: [
              {
                reasoning: "Find the hydrogen consumed by the oxygen.",
                working:
                  "2 \\times 30 = 60\\ \\text{cm}^3\\ \\mathrm{H}_2\\ \\text{consumed}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hydrogen is in excess; the remainder is $90 - 60 = 30$ cm$^3$.",
                working:
                  "V_{\\text{excess}} = 30\\ \\text{cm}^3\\ \\mathrm{H}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "All the oxygen is consumed, so the remaining gas is hydrogen, not oxygen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $30$ cm$^3$ of hydrogen",
            commonErrors: ["Assuming both gases are fully consumed."],
          },
        },
        {
          id: "chemsl-u4-gasvol-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "$40$ cm$^3$ of butane gas burns completely in exactly the required amount of oxygen at room temperature and pressure: $\\mathrm{C}_4\\mathrm{H}_{10} + \\frac{13}{2}\\mathrm{O}_2 \\rightarrow 4\\mathrm{CO}_2 + 5\\mathrm{H}_2\\mathrm{O}$. The water produced condenses to a liquid.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the volume of carbon dioxide produced.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the volume of oxygen consumed.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State the total volume of gas remaining after cooling to room temperature and explain your answer.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the total volume of gas that would remain if the water stayed as vapour.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "Volumes of gaseous species are in the ratio of the coefficients in the balanced equation.",
              },
              {
                kind: "principle",
                name: "States of matter",
                statement:
                  "At r.t.p. water is a liquid and does not contribute to gas volume.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The butane to $\\mathrm{CO}_2$ volume ratio is $1:4$.",
                working:
                  "V(\\mathrm{CO}_2) = 4 \\times 40 = 160\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The butane to $\\mathrm{O}_2$ volume ratio is $1:\\frac{13}{2}$.",
                working:
                  "V(\\mathrm{O}_2) = \\frac{13}{2} \\times 40 = 260\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "All oxygen is consumed and the water condenses, so only carbon dioxide remains as a gas.",
                working:
                  "V_{\\text{gas}} = 160\\ \\text{cm}^3\\ \\text{(CO}_2\\text{ only)}",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "If water is vapour it contributes $5 \\times 40 = 200$ cm$^3$.",
                working: "V_{\\text{total}} = 160 + 200 = 360\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $160$ cm$^3$ (b) $260$ cm$^3$ (c) $160$ cm$^3$ of $\\mathrm{CO}_2$ only (d) $360$ cm$^3$ if water is vapour",
            commonErrors: [
              "Including the water volume in part (c) even though it is liquid at r.t.p.",
              "Using the wrong coefficient ratio for oxygen.",
            ],
            examinerNote:
              "In (c) award B1 for identifying $\\mathrm{CO}_2$ as the only remaining gas and B1 for the correct explanation involving liquid water.",
          },
        },
        {
          id: "chemsl-u4-gasvol-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "$96$ cm$^3$ of carbon monoxide reacts with oxygen: $2\\mathrm{CO} + \\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2$, all gases measured at the same temperature and pressure. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) volume of $\\mathrm{O}_2$ / cm$^3$",
                answer: 48,
                tolerance: 0.1,
                unit: "cm$^3$",
              },
              {
                label: "(b) volume of $\\mathrm{CO}_2$ / cm$^3$",
                answer: 96,
                tolerance: 0.1,
                unit: "cm$^3$",
              },
              {
                label: "(c) $n(\\mathrm{CO}_2)$ / mol",
                answer: 0.004,
                tolerance: 0.0001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement: "Volumes follow the $2:1:2$ coefficient ratio.",
              },
              {
                kind: "formula",
                name: "Amount from gas volume",
                statement:
                  "$n = \\frac{V}{24}$ mol at r.t.p. with $V$ in dm$^3$.",
              },
            ],
            steps: [
              {
                reasoning: "The CO to $\\mathrm{O}_2$ ratio is $2:1$.",
                working: "V(\\mathrm{O}_2) = \\frac{96}{2} = 48\\ \\text{cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The CO to $\\mathrm{CO}_2$ ratio is $2:2$, so volumes are equal.",
                working: "V(\\mathrm{CO}_2) = 96\\ \\text{cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert $96$ cm$^3$ to dm$^3$ then to moles.",
                working:
                  "V = 0.0960\\ \\text{dm}^3;\\quad n = \\frac{0.0960}{24}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the volume answers.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate the mole answer.",
                working: "n = 0.00400\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $48$ cm$^3$ (b) $96$ cm$^3$ (c) $0.00400$ mol",
            commonErrors: [
              "Using $96$ cm$^3$ directly in $n = V/24$ without converting to dm$^3$.",
            ],
          },
        },
        {
          id: "chemsl-u4-gasvol-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Nitrogen reacts with hydrogen to form ammonia: $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightarrow 2\\mathrm{NH}_3$. All gases are measured at room temperature and pressure. In one experiment $120$ cm$^3$ of nitrogen is mixed with an excess of hydrogen.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the volume ratio of nitrogen : hydrogen : ammonia for this reaction.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the volume of ammonia produced and the volume of hydrogen consumed.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "In a second experiment $120$ cm$^3$ of nitrogen is mixed with only $300$ cm$^3$ of hydrogen. Calculate the volume of ammonia produced.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Calculate the mass of ammonia ($M_r = 17.0$) produced in the first experiment.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume ratios",
                statement:
                  "Volumes of gases are in the ratio of the coefficients: $1:3:2$.",
              },
              {
                kind: "formula",
                name: "Amount from gas volume",
                statement:
                  "$n = \\frac{V}{24}$ mol at r.t.p. with $V$ in dm$^3$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The coefficients give the volume ratio directly for gases at the same conditions.",
                working:
                  "\\mathrm{N}_2 : \\mathrm{H}_2 : \\mathrm{NH}_3 = 1 : 3 : 2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "State that all three species are gases at r.t.p. so the ratio applies to volumes.",
                working:
                  "\\text{all gases at same } T, P \\Rightarrow V \\propto n",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Apply the $1:3:2$ ratio to $120$ cm$^3$ of nitrogen.",
                working:
                  "V(\\mathrm{NH}_3) = 2 \\times 120 = 240\\ \\text{cm}^3;\\quad V(\\mathrm{H}_2) = 3 \\times 120 = 360\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate the ammonia volume.",
                working: "240\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "With only $300$ cm$^3$ of hydrogen, hydrogen is limiting: $300$ cm$^3$ H$_2$ gives $\\frac{2}{3} \\times 300 = 200$ cm$^3$ NH$_3$.",
                working:
                  "V(\\mathrm{NH}_3) = \\frac{2}{3} \\times 300 = 200\\ \\text{cm}^3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "200\\ \\text{cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Convert $240$ cm$^3$ to dm$^3$ and moles, then to mass.",
                working:
                  "n = \\frac{0.240}{24} = 0.0100\\ \\text{mol};\\quad m = 0.0100 \\times 17.0 = 0.170\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $1:3:2$ (b) $240$ cm$^3$ NH$_3$, $360$ cm$^3$ H$_2$ consumed (c) $200$ cm$^3$ NH$_3$ (d) $0.170$ g",
            commonErrors: [
              "Using the $1:3$ ratio instead of $1:3:2$.",
              "Forgetting to convert cm$^3$ to dm$^3$ in part (d).",
            ],
            examinerNote:
              "Award M1 for the correct volume ratio and B1 for the Avogadro justification in (a); M1 for the ratio application and A1 for each volume in (b); M1 for identifying hydrogen as limiting and A1 for 200 cm$^3$ in (c); M1 for the mole chain and A1 for 0.170 g in (d).",
          },
        },
      ],
    },
    {
      id: "chemsl-u4-solution",
      title: "Concentration and solution stoichiometry",
      skill:
        "Calculate concentrations, prepare standard solutions, and apply dilution relationships to solution calculations.",
      lesson: {
        sections: [
          {
            heading: "Concentration",
            body: "Concentration is the amount of solute per unit volume of solution: $c = \\frac{n}{V}$ in mol dm$^{-3}$, or mass concentration $= \\frac{m}{V}$ in g dm$^{-3}$. To find the mass of solute needed for a given volume, rearrange to $n = cV$ then $m = nM_r$. Always convert cm$^3$ to dm$^3$ (divide by $1000$).",
          },
          {
            heading: "Dilution",
            body: "Dilution adds solvent without changing the amount of solute, so $n$ is constant: $c_1V_1 = c_2V_2$. This is the basis of serial dilution, used to prepare a range of standard solutions from one concentrated stock. The dilution factor is $\\frac{V_2}{V_1}$, and the concentration is divided by the same factor.",
          },
          {
            heading: "Preparing a standard solution",
            body: "Weigh the required mass of solid accurately, dissolve it in a small volume of distilled water in a beaker, transfer quantitatively to a volumetric flask, rinse the beaker and funnel into the flask, then make up to the calibration mark with distilled water and invert repeatedly to mix. The final volume must be exactly the flask's capacity for the concentration to be correct.",
          },
        ],
        keyFormulas: [
          {
            name: "Concentration",
            statement: "$c = \\dfrac{n}{V}$ in mol dm$^{-3}$",
          },
          {
            name: "Mass of solute",
            statement: "$m = cV \\times M_r$ (with $V$ in dm$^3$)",
          },
          { name: "Dilution", statement: "$c_1V_1 = c_2V_2$" },
        ],
        workedExample: {
          problem:
            "$100$ cm$^3$ of $2.00$ mol dm$^{-3}$ sodium chloride solution is diluted to a final volume of $500$ cm$^3$. Calculate the new concentration.",
          solution:
            "$c_2 = \\frac{c_1V_1}{V_2} = \\frac{2.00 \\times 100}{500} = 0.400$ mol dm$^{-3}$. The amount of solute is unchanged: $0.200$ mol.",
        },
      },
      questions: [
        {
          id: "chemsl-u4-solution-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What amount, in moles, of solute is present in $250$ cm$^3$ of a $0.0200$ mol dm$^{-3}$ solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.00125$ mol" },
              { id: "b", text: "$5.00$ mol" },
              { id: "c", text: "$0.0800$ mol" },
              { id: "d", text: "$0.00500$ mol" },
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
            ],
            steps: [
              {
                reasoning: "Convert volume and multiply by concentration.",
                working: "n = 0.0200 \\times \\frac{250}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.00500\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $0.00500$ mol",
            commonErrors: ["Using $250$ instead of $0.250$ dm$^3$."],
          },
        },
        {
          id: "chemsl-u4-solution-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$25.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ solution is diluted with water to a final volume of $100$ cm$^3$. What is the new concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.0500$ mol dm$^{-3}$" },
              { id: "b", text: "$0.800$ mol dm$^{-3}$" },
              { id: "c", text: "$0.0200$ mol dm$^{-3}$" },
              { id: "d", text: "$0.500$ mol dm$^{-3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilution",
                statement:
                  "$c_1V_1 = c_2V_2$; the amount of solute is unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Apply the dilution relationship.",
                working: "c_2 = \\frac{0.200 \\times 25.0}{100}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c_2 = 0.0500\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (a) multiplies by the dilution factor instead of dividing.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(a)** $0.0500$ mol dm$^{-3}$",
            commonErrors: [
              "Multiplying concentration by the volume ratio instead of dividing.",
              "Using the wrong volumes (e.g. $25/100$ inverted gives $0.800$).",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$5.85$ g of sodium chloride ($M_r = 58.5$) is dissolved in water and made up to $250$ cm$^3$. What is the concentration of the solution in mol dm$^{-3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.60$ mol dm$^{-3}$" },
              { id: "b", text: "$23.4$ mol dm$^{-3}$" },
              { id: "c", text: "$0.100$ mol dm$^{-3}$" },
              { id: "d", text: "$0.400$ mol dm$^{-3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = \\frac{m}{M_r}$",
              },
              {
                kind: "formula",
                name: "Concentration",
                statement: "$c = \\frac{n}{V}$ in mol dm$^{-3}$.",
              },
            ],
            steps: [
              {
                reasoning: "Convert the mass of NaCl to moles.",
                working: "n = \\frac{5.85}{58.5} = 0.100\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the volume in dm$^3$.",
                working: "c = \\frac{0.100}{0.250}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c = 0.400\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (d) is the mass concentration in g dm$^{-3}$, not the molar concentration.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(d)** $0.400$ mol dm$^{-3}$",
            commonErrors: [
              "Reporting mass concentration (g dm$^{-3}$) instead of molar concentration.",
              "Forgetting to convert $250$ cm$^3$ to $0.250$ dm$^3$.",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student needs to prepare $250$ cm$^3$ of $0.100$ mol dm$^{-3}$ sodium carbonate solution ($M_r = 106$) for a titration.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the mass of sodium carbonate required.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe how the student should prepare the solution to ensure the concentration is accurate.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The student dilutes $25.0$ cm$^3$ of this solution to $250$ cm$^3$. Calculate the new concentration.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the amount, in moles, of sodium carbonate in $25.0$ cm$^3$ of the diluted solution.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = cV$ and $m = nM_r$.",
              },
              {
                kind: "formula",
                name: "Dilution",
                statement: "$c_1V_1 = c_2V_2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Find moles needed then convert to mass.",
                working:
                  "n = 0.100 \\times \\frac{250}{1000} = 0.0250\\ \\text{mol};\\quad m = 0.0250 \\times 106 = 2.65\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Weigh accurately, dissolve in a beaker, transfer quantitatively to a $250$ cm$^3$ volumetric flask with washings, then make up to the mark with distilled water and mix thoroughly.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Apply the dilution relationship.",
                working:
                  "c_2 = \\frac{0.100 \\times 25.0}{250} = 0.0100\\ \\text{mol dm}^{-3}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Use $n = cV$ with the diluted concentration and volume.",
                working:
                  "n = 0.0100 \\times \\frac{25.0}{1000} = 0.000250\\ \\text{mol}",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2.65$ g (b) dissolve, transfer quantitatively to a volumetric flask and make up to the mark (c) $0.0100$ mol dm$^{-3}$ (d) $0.000250$ mol",
            commonErrors: [
              "Making up to $250$ cm$^3$ in a beaker instead of a volumetric flask.",
              "Forgetting that diluting $25.0$ to $250$ cm$^3$ is a tenfold dilution.",
            ],
            examinerNote:
              "Award M1 for the n = cV and m = nMr chain and A1 for 2.65 g in (a); award R1 for each valid procedural point in (b) up to 2 marks; M1 for c1V1 = c2V2 and A1 for 0.0100 in (c); A1 for 0.000250 mol in (d).",
          },
        },
        {
          id: "chemsl-u4-solution-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What amount, in moles, of solute is present in $100$ cm$^3$ of a $0.500$ mol dm$^{-3}$ solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.00500$ mol" },
              { id: "b", text: "$0.0500$ mol" },
              { id: "c", text: "$0.500$ mol" },
              { id: "d", text: "$5.00$ mol" },
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
                working: "n = 0.500 \\times \\frac{100}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "n = 0.0500\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $0.0500$ mol",
            commonErrors: ["Using $100$ instead of $0.100$ dm$^3$."],
          },
        },
        {
          id: "chemsl-u4-solution-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$50$ cm$^3$ of $0.400$ mol dm$^{-3}$ solution is diluted with water to a final volume of $250$ cm$^3$. What is the new concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.00$ mol dm$^{-3}$" },
              { id: "b", text: "$0.0800$ mol dm$^{-3}$" },
              { id: "c", text: "$0.0200$ mol dm$^{-3}$" },
              { id: "d", text: "$0.160$ mol dm$^{-3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilution",
                statement:
                  "$c_1V_1 = c_2V_2$; the amount of solute is unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Apply the dilution relationship.",
                working: "c_2 = \\frac{0.400 \\times 50}{250}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c_2 = 0.0800\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (b) multiplies by the volume ratio instead of dividing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $0.0800$ mol dm$^{-3}$",
            commonErrors: [
              "Multiplying the concentration by the dilution factor instead of dividing.",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "What mass of sodium chloride ($M_r = 58.5$) is needed to make $250$ cm$^3$ of a $0.100$ mol dm$^{-3}$ solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$58.5$ g" },
              { id: "b", text: "$14.6$ g" },
              { id: "c", text: "$1.46$ g" },
              { id: "d", text: "$0.146$ g" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
              {
                kind: "formula",
                name: "Mass from moles",
                statement: "$m = nM_r$",
              },
            ],
            steps: [
              {
                reasoning: "Find moles needed then convert to mass.",
                working:
                  "n = 0.100 \\times \\frac{250}{1000} = 0.0250\\ \\text{mol};\\quad m = 0.0250 \\times 58.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m = 1.46\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Option (b) forgets to convert $250$ cm$^3$ to $0.250$ dm$^3$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** $1.46$ g",
            commonErrors: [
              "Forgetting the $/1000$ conversion for cm$^3$ to dm$^3$.",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "$10.0$ cm$^3$ of $1.00$ mol dm$^{-3}$ sodium hydroxide solution is diluted to a final volume of $1000$ cm$^3$ in a volumetric flask. What is the new concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.0100$ mol dm$^{-3}$" },
              { id: "b", text: "$0.100$ mol dm$^{-3}$" },
              { id: "c", text: "$0.00100$ mol dm$^{-3}$" },
              { id: "d", text: "$100$ mol dm$^{-3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilution",
                statement:
                  "$c_2 = \\frac{c_1V_1}{V_2}$ with volumes in consistent units.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the dilution relationship — the volumes can both stay in cm$^3$ since they cancel.",
                working: "c_2 = \\frac{1.00 \\times 10.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c_2 = 0.0100\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The dilution factor is $100$, so the concentration is divided by $100$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $0.0100$ mol dm$^{-3}$",
            commonErrors: [
              "Dividing by $10$ instead of $100$ (the actual dilution factor).",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q9",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A solution contains $0.250$ mol of solute in $2.00$ dm$^3$ of solution. Calculate the concentration in mol dm$^{-3}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$c$ / mol dm$^{-3}$",
                answer: 0.125,
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
                reasoning: "Apply $c = n/V$.",
                working: "c = \\frac{0.250}{2.00}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "c = 0.125\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$c = 0.125$ mol dm$^{-3}$",
            commonErrors: ["Multiplying instead of dividing by the volume."],
          },
        },
        {
          id: "chemsl-u4-solution-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the mass, in grams, of glucose ($M_r = 180$) needed to make $500$ cm$^3$ of a $0.200$ mol dm$^{-3}$ solution.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$ / g", answer: 18, tolerance: 0.01, unit: "g" },
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
                kind: "formula",
                name: "Mass from moles",
                statement: "$m = nM_r$",
              },
            ],
            steps: [
              {
                reasoning: "Find moles needed.",
                working:
                  "n = 0.200 \\times \\frac{500}{1000} = 0.100\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert moles to mass.",
                working: "m = 0.100 \\times 180",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "m = 18.0\\ \\text{g}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m = 18.0$ g",
            commonErrors: ["Using $500$ cm$^3$ instead of $0.500$ dm$^3$."],
          },
        },
        {
          id: "chemsl-u4-solution-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "$25.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ sodium chloride solution is diluted to $250$ cm$^3$. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "(a) new concentration / mol dm$^{-3}$",
                answer: 0.02,
                tolerance: 0.0001,
                unit: "mol dm$^{-3}$",
              },
              {
                label: "(b) $n$ in $25.0$ cm$^3$ of diluted solution / mol",
                answer: 0.0005,
                tolerance: 0.00001,
                unit: "mol",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilution",
                statement: "$c_2 = \\frac{c_1V_1}{V_2}$",
              },
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
            ],
            steps: [
              {
                reasoning: "Apply the dilution relationship.",
                working:
                  "c_2 = \\frac{0.200 \\times 25.0}{250} = 0.0200\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find moles in $25.0$ cm$^3$ of the diluted solution.",
                working: "n = 0.0200 \\times \\frac{25.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the concentration.",
                working: "0.0200\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate the amount.",
                working: "n = 0.000500\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.0200$ mol dm$^{-3}$ (b) $0.000500$ mol",
            commonErrors: [
              "Using the original concentration instead of the diluted one in part (b).",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which procedure gives the most accurate concentration when preparing a standard solution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Weigh the solid approximately and make up to the mark in a volumetric flask",
              },
              {
                id: "b",
                text: "Dissolve the solid in a beaker and estimate the final volume by eye",
              },
              {
                id: "c",
                text: "Weigh the solid accurately, dissolve it, transfer quantitatively to a volumetric flask and make up exactly to the calibration mark",
              },
              {
                id: "d",
                text: "Add the solid to a measuring cylinder and fill to $250$ cm$^3$",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Standard solution",
                statement:
                  "An accurate concentration requires an accurately weighed mass and an accurately measured final volume.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both the mass of solute and the final volume must be measured accurately for the concentration to be correct.",
                working:
                  "m \\text{ accurate} + V \\text{ accurate} \\Rightarrow c \\text{ accurate}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A volumetric flask is calibrated to deliver an exact volume; a beaker or measuring cylinder is not.",
                working:
                  "\\text{volumetric flask} \\Rightarrow \\text{exact } V",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quantitative transfer with washings ensures all the dissolved solute reaches the flask.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(c)** Weigh accurately, transfer quantitatively to a volumetric flask and make up exactly to the mark",
            commonErrors: [
              "Thinking any container can be used to make up the volume.",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A student prepares a solution of potassium nitrate ($M_r = 101$) by dissolving solid in water and making up to $250$ cm$^3$. Give your answers in the requested units.",
          response: {
            type: "numeric",
            parts: [
              {
                label:
                  "(a) mass of $\\mathrm{KNO}_3$ for $0.100$ mol dm$^{-3}$ / g",
                answer: 2.53,
                tolerance: 0.01,
                unit: "g",
              },
              {
                label:
                  "(b) concentration after diluting $25.0$ cm$^3$ to $250$ cm$^3$ / mol dm$^{-3}$",
                answer: 0.01,
                tolerance: 0.0001,
                unit: "mol dm$^{-3}$",
              },
              {
                label: "(c) $n$ in $25.0$ cm$^3$ of diluted solution / mol",
                answer: 0.00025,
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
                statement: "$n = cV$ and $m = nM_r$ with $V$ in dm$^3$.",
              },
              {
                kind: "formula",
                name: "Dilution",
                statement: "$c_2 = \\frac{c_1V_1}{V_2}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find moles needed for $250$ cm$^3$ of $0.100$ mol dm$^{-3}$.",
                working:
                  "n = 0.100 \\times \\frac{250}{1000} = 0.0250\\ \\text{mol}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to mass.",
                working: "m = 0.0250 \\times 101 = 2.53\\ \\text{g}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the dilution relationship.",
                working:
                  "c_2 = \\frac{0.100 \\times 25.0}{250} = 0.0100\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find moles in $25.0$ cm$^3$ of the diluted solution.",
                working: "n = 0.0100 \\times \\frac{25.0}{1000}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate all answers.",
                working:
                  "2.53\\ \\text{g};\\ 0.0100\\ \\text{mol dm}^{-3};\\ 0.000250\\ \\text{mol}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2.53$ g (b) $0.0100$ mol dm$^{-3}$ (c) $0.000250$ mol",
            commonErrors: [
              "Using $M_r = 39$ (K only) instead of $101$ for $\\mathrm{KNO}_3$.",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student needs to prepare $250$ cm$^3$ of $0.0500$ mol dm$^{-3}$ sodium carbonate solution ($M_r = 106$) for an experiment.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the mass of sodium carbonate required.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe how the solution should be prepared to ensure the concentration is accurate.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The student dilutes $25.0$ cm$^3$ of the solution to $250$ cm$^3$. Calculate the new concentration.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the amount, in moles, of sodium carbonate in $25.0$ cm$^3$ of the diluted solution.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Amount in moles",
                statement: "$n = cV$ and $m = nM_r$ with $V$ in dm$^3$.",
              },
              {
                kind: "formula",
                name: "Dilution",
                statement: "$c_1V_1 = c_2V_2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Find moles needed then convert to mass.",
                working:
                  "n = 0.0500 \\times \\frac{250}{1000} = 0.0125\\ \\text{mol};\\quad m = 0.0125 \\times 106 = 1.33\\ \\text{g}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Weigh accurately, dissolve in a beaker, transfer quantitatively to a $250$ cm$^3$ volumetric flask with washings, make up to the mark with distilled water and mix thoroughly.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Apply the dilution relationship.",
                working:
                  "c_2 = \\frac{0.0500 \\times 25.0}{250} = 0.00500\\ \\text{mol dm}^{-3}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Use $n = cV$ with the diluted concentration and volume.",
                working:
                  "n = 0.00500 \\times \\frac{25.0}{1000} = 0.000125\\ \\text{mol}",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1.33$ g (b) dissolve, transfer quantitatively to a volumetric flask and make up to the mark (c) $0.00500$ mol dm$^{-3}$ (d) $0.000125$ mol",
            commonErrors: [
              "Forgetting that diluting $25.0$ to $250$ cm$^3$ is a tenfold dilution.",
            ],
            examinerNote:
              "Award M1 for the n = cV and m = nMr chain and A1 for 1.33 g in (a); award B1 for each valid procedural point in (b) up to 2 marks; M1 for c1V1 = c2V2 and A1 for 0.00500 in (c); A1 for 0.000125 mol in (d).",
          },
        },
        {
          id: "chemsl-u4-solution-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "$20$ cm$^3$ of $0.500$ mol dm$^{-3}$ solution is diluted to $500$ cm$^3$. What is the dilution factor and the new concentration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factor $10$; $0.0500$ mol dm$^{-3}$" },
              { id: "b", text: "Factor $25$; $0.0200$ mol dm$^{-3}$" },
              { id: "c", text: "Factor $100$; $0.00500$ mol dm$^{-3}$" },
              { id: "d", text: "Factor $25$; $0.200$ mol dm$^{-3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilution",
                statement:
                  "$c_2 = \\frac{c_1V_1}{V_2}$; dilution factor $= \\frac{V_2}{V_1}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The dilution factor is the final volume divided by the initial volume.",
                working: "\\text{factor} = \\frac{500}{20} = 25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide the concentration by the dilution factor.",
                working:
                  "c_2 = \\frac{0.500}{25} = 0.0200\\ \\text{mol dm}^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (d) reports the original concentration; the others use the wrong factor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Factor $25$; $0.0200$ mol dm$^{-3}$",
            commonErrors: [
              "Using $500/20 = 25$ as a multiplier instead of a divisor.",
            ],
          },
        },
        {
          id: "chemsl-u4-solution-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A student has a $2.00$ mol dm$^{-3}$ stock solution of sodium hydroxide and needs a series of dilute standard solutions for titrations.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the concentration obtained when $10.0$ cm$^3$ of the stock is diluted to $100$ cm$^3$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the concentration obtained when $10.0$ cm$^3$ of the solution from part (a) is diluted to $100$ cm$^3$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate the overall dilution factor from the stock to the solution in part (b).",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the amount, in moles, of NaOH in $25.0$ cm$^3$ of the solution from part (b).",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Describe how the student should carry out the dilutions safely and accurately.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilution",
                statement: "$c_2 = \\frac{c_1V_1}{V_2}$",
              },
              {
                kind: "formula",
                name: "Amount in solution",
                statement: "$n = cV$ with $V$ in dm$^3$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply the dilution relationship.",
                working:
                  "c = \\frac{2.00 \\times 10.0}{100} = 0.200\\ \\text{mol dm}^{-3}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Apply the same dilution to the intermediate solution.",
                working:
                  "c = \\frac{0.200 \\times 10.0}{100} = 0.0200\\ \\text{mol dm}^{-3}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Overall factor is the product of the two dilution factors, or final volume over initial volume.",
                working:
                  "\\text{factor} = 10 \\times 10 = 100;\\quad \\frac{2.00}{0.0200} = 100",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Use $n = cV$ with the final concentration.",
                working:
                  "n = 0.0200 \\times \\frac{25.0}{1000} = 0.000500\\ \\text{mol}",
                marks: 2,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Use a pipette or burette to measure the $10.0$ cm$^3$ aliquot accurately, add it to a volumetric flask partly filled with distilled water, then make up to the mark and mix thoroughly; NaOH is corrosive so eye protection is needed.",
                working:
                  "\\text{accurate aliquot + volumetric flask + make to mark}",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $0.200$ mol dm$^{-3}$ (b) $0.0200$ mol dm$^{-3}$ (c) factor $100$ (d) $0.000500$ mol (e) measure aliquot with a pipette, dilute in a volumetric flask to the mark",
            commonErrors: [
              "Applying the dilution twice to the stock volume instead of the intermediate solution.",
            ],
            examinerNote:
              "Award M1 for each correct c1V1 = c2V2 application and A1 for each concentration; M1 for the dilution factor and A1 for the overall factor in (c); A1 for 0.000500 mol in (d); award B1 for accurate measurement and B1 for the volumetric-flask procedure in (e).",
          },
        },
      ],
    },
  ],
};
