import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cial-c-u1-lesson-1-2",
  code: "1-2",
  title: "Reacting masses, gases and solutions",
  goal: "I CAN calculate reacting masses from equations, gas volumes and solution concentrations.",
  standards: ["9701 1.1: reacting masses, 1.2: gases and solutions"],
  vocabulary: [
    {
      term: "Limiting reactant",
      definition:
        "Reactant completely consumed first; determines the maximum product formed.",
    },
    {
      term: "Excess",
      definition: "Reactant present in more than the stoichiometric amount.",
    },
    {
      term: "Molar gas volume",
      definition:
        "Volume of one mole of gas at r.t.p.: $24$ dm$^3$ mol$^{-1}$.",
    },
    {
      term: "Concentration",
      definition: "Amount of solute per unit volume: $c = \\frac{n}{V}$ mol dm$^{-3}$.",
    },
    {
      term: "Titre",
      definition: "Volume of solution delivered from the burette in a titration.",
    },
    {
      term: "Percentage yield",
      definition:
        "$\\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u1-reacting-masses",
      title: "Reacting masses and limiting reactants",
      skill: "Use mole ratios from equations to find masses of reactants and products.",
      lesson: {
        sections: [
          {
            heading: "Mole-ratio method",
            body: "Balance the equation, convert given masses to moles, scale by the ratio, convert back to mass. Always work in moles — never compare masses directly.",
          },
          {
            heading: "Limiting reactant",
            body: "Calculate moles of each reactant and divide by its coefficient. The smallest result identifies the limiting reactant. Products are calculated from the limiting reactant only.",
          },
          {
            heading: "Percentage yield",
            body: "Actual yield is almost always below theoretical because of side reactions, incomplete reaction or loss in transfer. $\\%\\text{yield}=\\frac{m_{\\text{actual}}}{m_{\\text{theoretical}}}\\times100$.",
          },
        ],
        keyFormulas: [
          {
            name: "Mole ratio",
            statement: "Coefficients = mole ratio between species.",
          },
          {
            name: "Percentage yield",
            statement:
              "$\\dfrac{\\text{actual}}{\\text{theoretical}} \\times 100\\%$",
          },
        ],
        workedExample: {
          problem:
            "For $N_2 + 3H_2 \\to 2NH_3$, what mass of $NH_3$ forms from $28$ g $N_2$ and $10$ g $H_2$? ($A_r$: N=14, H=1)",
          solution:
            "$n(N_2)=1$ mol needs $3$ mol $H_2$; available $n(H_2)=5$ mol — $H_2$ excess. $n(NH_3)=2$ mol, $M=17$, mass $=34$ g.",
        },
      },
      questions: [
        {
          id: "cial-c-u1-rm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $2H_2 + O_2 \\to 2H_2O$, what is the mole ratio of $H_2$ to $O_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:1$" },
              { id: "b", text: "$1:2$" },
              { id: "c", text: "$2:2$" },
              { id: "d", text: "$1:1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Coefficients = mole ratio",
                statement: "2 mol $H_2$ : 1 mol $O_2$.",
              },
            ],
            steps: [
              {
                reasoning: "Coefficients 2 and 1 give ratio $2:1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2:1$",
          },
        },
        {
          id: "cial-c-u1-rm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What mass of $CO_2$ is produced when $24$ g of carbon burns completely in oxygen? ($A_r$: C=12, O=16)",
          response: {
            type: "numeric",
            parts: [{ label: "mass CO2", answer: 88, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Mole-ratio calculation",
                statement: "$C + O_2 \\to CO_2$: 1 mol C gives 1 mol $CO_2$.",
              },
            ],
            steps: [
              {
                reasoning: "$n(C)=\\frac{24}{12}=2$ mol.",
                working: "\\frac{24}{12}=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio 1:1, so $n(CO_2)=2$ mol; $M=44$.",
                working: "M(CO_2)=44",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass $=2 \\times 44 = 88$ g.",
                working: "2 \\times 44 = 88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$88$ g",
            commonErrors: ["Comparing 24 g C directly with 44 g $CO_2$ without moles."],
          },
        },
        {
          id: "cial-c-u1-rm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2Mg + O_2 \\to 2MgO$, a student uses $12$ g Mg and $12$ g $O_2$. Which is limiting and what mass of MgO forms? ($A_r$: Mg=24, O=16)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Limiting reactant",
                statement:
                  "Divide moles by coefficient; smallest value is limiting.",
              },
            ],
            steps: [
              {
                reasoning: "$n(Mg)=12/24=0.5$ mol, $n(O_2)=12/32=0.375$ mol.",
                working: "0.5 \\text{ and } 0.375",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Per coefficient: $Mg: 0.5/2=0.25$; $O_2: 0.375/1=0.375$. Mg limiting.",
                working: "0.25 < 0.375",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n(MgO)=0.5$ mol (ratio 2:2).",
                working: "n(MgO)=0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass $=0.5 \\times 40 = 20$ g.",
                working: "0.5 \\times 40 = 20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mg limiting; $20$ g MgO",
            commonErrors: ["Using total moles without dividing by coefficients."],
          },
        },
        {
          id: "cial-c-u1-rm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Reacting masses.",
          parts: [
            {
              label: "a",
              prompt: "For $CaCO_3 \\to CaO + CO_2$, find the mass of $CO_2$ from $50$ g $CaCO_3$ ($M$: 100, 56, 44).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "In practice only $17.6$ g $CO_2$ is obtained. Calculate the percentage yield.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Suggest two reasons why the yield is not 100%.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What mass of $CaO$ should theoretically form in part (a)?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Decomposition stoichiometry",
                statement:
                  "1 mol $CaCO_3$ gives 1 mol $CO_2$ and 1 mol $CaO$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$n(CaCO_3)=50/100=0.5$ mol.",
                working: "\\frac{50}{100}=0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Ratio 1:1, $n(CO_2)=0.5$ mol.",
                working: "n(CO_2)=0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Mass $=0.5 \\times 44=22$ g.",
                working: "0.5 \\times 44=22",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\%yield = \\frac{17.6}{22} \\times 100$.",
                working: "\\frac{17.6}{22} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$=80\\%$.",
                working: "80\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Incomplete decomposition / side reactions.",
                working: "\\text{incomplete reaction}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Loss of product during transfer/collection.",
                working: "\\text{product loss}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "$n(CaO)=0.5$ mol, $M=56$.",
                working: "n=0.5,\\ M=56",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Mass $=0.5 \\times 56=28$ g.",
                working: "0.5 \\times 56=28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 22 g (b) 80% (c) incomplete rxn, product loss (d) 28 g",
          },
        },
      ],
    },
    {
      id: "cial-c-u1-gases-solutions",
      title: "Gases and solutions",
      skill: "Calculate gas volumes at r.t.p. and concentrations of solutions.",
      lesson: {
        sections: [
          {
            heading: "Gas volumes",
            body: "At room temperature and pressure, 1 mol of any gas occupies $24$ dm$^3$. So $V = n \\times 24$ dm$^3$, or $n = \\frac{V}{24}$. Works for ideal gases regardless of identity.",
          },
          {
            heading: "Solution concentration",
            body: "$c = \\frac{n}{V}$ where $c$ in mol dm$^{-3}$, $n$ in mol, $V$ in dm$^3$. Rearrangements: $n = cV$; mass concentration $= \\frac{m}{V}$ g dm$^{-3}$.",
          },
          {
            heading: "Dilution",
            body: "Diluting does not change moles: $c_1V_1 = c_2V_2$. Standard solutions are made by dissolving a weighed mass and diluting to the mark in a volumetric flask.",
          },
        ],
        keyFormulas: [
          {
            name: "Gas volume",
            statement: "$V = 24n$ dm$^3$ at r.t.p.",
          },
          {
            name: "Concentration",
            statement: "$c = \\dfrac{n}{V}$ mol dm$^{-3}$; dilution $c_1V_1=c_2V_2$.",
          },
        ],
        workedExample: {
          problem:
            "What volume of $CO_2$ at r.t.p. forms when $10$ g $CaCO_3$ decomposes? ($M(CaCO_3)=100$)",
          solution:
            "$n(CaCO_3)=0.1$ mol $\\to n(CO_2)=0.1$ mol; $V=0.1 \\times 24 = 2.4$ dm$^3$.",
        },
      },
      questions: [
        {
          id: "cial-c-u1-gs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What volume does $0.5$ mol of gas occupy at r.t.p.?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$ dm$^3$" },
              { id: "b", text: "$24$ dm$^3$" },
              { id: "c", text: "$48$ dm$^3$" },
              { id: "d", text: "$6$ dm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molar gas volume",
                statement: "$V = 24n$ dm$^3$ at r.t.p.",
              },
            ],
            steps: [
              {
                reasoning: "$V = 0.5 \\times 24 = 12$ dm$^3$.",
                working: "0.5 \\times 24 = 12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12$ dm$^3$",
          },
        },
        {
          id: "cial-c-u1-gs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the concentration of a solution containing $0.25$ mol of solute in $500$ cm$^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Concentration",
                statement: "$c=\\frac{n}{V}$, $V$ in dm$^3$.",
              },
            ],
            steps: [
              {
                reasoning: "Convert $500$ cm$^3$ to $0.5$ dm$^3$.",
                working: "0.5\\ \\text{dm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$c=\\frac{0.25}{0.5}=0.5$ mol dm$^{-3}$.",
                working: "\\frac{0.25}{0.5}=0.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.5$ mol dm$^{-3}$",
            commonErrors: ["Dividing by $500$ cm$^3$ without converting to dm$^3$."],
          },
        },
        {
          id: "cial-c-u1-gs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$Zn + 2HCl \\to ZnCl_2 + H_2$. What volume of $H_2$ at r.t.p. is produced from $50$ cm$^3$ of $1.0$ mol dm$^{-3}$ $HCl$ with excess Zn?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Solution moles to gas volume",
                statement:
                  "$n=cV$; ratio $2HCl:H_2=2:1$; $V_{gas}=24n$.",
              },
            ],
            steps: [
              {
                reasoning: "$n(HCl)=1.0 \\times 0.050=0.050$ mol.",
                working: "1.0 \\times 0.050 = 0.050",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio 2:1 $\\Rightarrow n(H_2)=0.025$ mol.",
                working: "n(H_2)=0.025",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$V=0.025 \\times 24$.",
                working: "0.025 \\times 24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=0.60$ dm$^3$.",
                working: "0.60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.60$ dm$^3$",
            commonErrors: ["Using $n(H_2)=n(HCl)$ instead of halving."],
          },
        },
        {
          id: "cial-c-u1-gs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Gases and solutions.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the moles of solute in $250$ cm$^3$ of $0.20$ mol dm$^{-3}$ solution.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "This solution is diluted to $1.0$ dm$^3$. Find the new concentration.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "For $CaCO_3 \\to CaO + CO_2$, find the volume of $CO_2$ at r.t.p. from $0.10$ mol $CaCO_3$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain why the same volume of $CO_2$ and $O_2$ contain the same number of molecules at r.t.p.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "n=cV; V=24n",
                statement:
                  "Moles conserved on dilution; equal gas volumes contain equal moles at same T,P.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$n = 0.20 \\times 0.250$.",
                working: "0.20 \\times 0.250",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$=0.050$ mol.",
                working: "0.050",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$c_2 = \\frac{0.050}{1.0}$.",
                working: "\\frac{0.050}{1.0}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$=0.050$ mol dm$^{-3}$.",
                working: "0.050",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Ratio 1:1, $n(CO_2)=0.10$ mol.",
                working: "n(CO_2)=0.10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$V=0.10 \\times 24 = 2.4$ dm$^3$.",
                working: "0.10 \\times 24 = 2.4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "At same T and P, equal volumes contain equal moles (Avogadro).",
                working: "V \\propto n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Equal moles contain equal numbers of molecules ($\\times N_A$).",
                working: "N=nN_A",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Hence equal molecule counts.",
                working: "\\text{same } N",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) 0.050 mol (b) 0.050 mol/dm3 (c) 2.4 dm3 (d) equal volumes = equal moles = equal molecules",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u1-reacting-gases-solutions-notes",
      title: "Reacting masses, gases and solutions — revision notes",
      summary:
        "Mole-ratio calculations, limiting reactants, gas volumes and concentrations.",
      sections: [
        {
          heading: "Stoichiometry",
          body: "Always convert to moles first. Find the limiting reactant by dividing each reactant's moles by its coefficient — smallest wins. Percentage yield $=\\frac{\\text{actual}}{\\text{theoretical}}\\times100$; losses come from incomplete reaction or product handling.",
        },
        {
          heading: "Gases and solutions",
          body: "Gas at r.t.p.: $V=24n$ dm$^3$. Solution: $c=\\frac{n}{V}$ with $V$ in dm$^3$ — convert cm$^3$ first. Dilution conserves moles: $c_1V_1=c_2V_2$.",
        },
        {
          heading: "Exam checklist",
          body: "State which reactant is limiting before computing products. Check units on every line — dm$^3$ vs cm$^3$ is the classic mark-loser. Give gas volumes to 3 s.f.",
        },
      ],
    },
  ],
};
