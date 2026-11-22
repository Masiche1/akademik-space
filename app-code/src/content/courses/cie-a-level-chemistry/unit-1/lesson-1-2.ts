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
              { id: "a", text: "$2:2$" },
              { id: "b", text: "$1:2$" },
              { id: "c", text: "$2:1$" },
              { id: "d", text: "$1:1$" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-c-u1-rm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $2Na + Cl_2 \\rightarrow 2NaCl$, how many moles of $NaCl$ form from $1$ mol of $Cl_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ mol" },
              { id: "b", text: "$2$ mol" },
              { id: "c", text: "$0.5$ mol" },
              { id: "d", text: "$4$ mol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "Coefficients give the mole ratio." }],
            steps: [{ reasoning: "2 mol NaCl form per 1 mol Cl2.", marks: 1, markCode: "A" }],
            finalAnswer: "$2$ mol",
          },
        },
        {
          id: "cial-c-u1-rm-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "What mass of $NaCl$ is produced when $4.6$ g of sodium reacts with excess chlorine? ($A_r$: Na=23, Cl=35.5)",
          response: { type: "numeric", parts: [{ label: "mass NaCl", answer: 11.7, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole-ratio calculation", statement: "Convert mass to moles, use ratio, convert back." }],
            steps: [
              { reasoning: "n(Na)=4.6/23=0.20 mol.", working: "4.6/23=0.20", marks: 1, markCode: "M" },
              { reasoning: "Ratio Na:NaCl=1:1, so n(NaCl)=0.20 mol; M(NaCl)=58.5.", working: "M=58.5", marks: 1, markCode: "M" },
              { reasoning: "Mass=0.20*58.5=11.7 g.", working: "0.20*58.5=11.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11.7$ g",
            commonErrors: ["Using 23+35.5 incorrectly or forgetting chlorine is diatomic is not needed here."],
          },
        },
        {
          id: "cial-c-u1-rm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why must reacting-mass calculations use moles rather than compare masses directly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different substances have different molar masses" },
              { id: "b", text: "Only gases can be measured in moles" },
              { id: "c", text: "Moles do not depend on the equation" },
              { id: "d", text: "Masses are always smaller than moles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Mole basis", statement: "Equation ratios count particles, not mass." }],
            steps: [{ reasoning: "Equal masses contain different particle numbers because molar masses differ.", marks: 1, markCode: "A" }],
            finalAnswer: "Moles match the stoichiometric ratio.",
          },
        },
        {
          id: "cial-c-u1-rm-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $N_2 + 3H_2 \\rightarrow 2NH_3$, $28$ g of $N_2$ and $9$ g of $H_2$ are mixed ($A_r$: N=14, H=1). Identify the limiting reactant and calculate the mass of $NH_3$ formed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Limiting reactant", statement: "Divide moles by coefficient; smallest value is limiting." }],
            steps: [
              { reasoning: "n(N2)=28/28=1.0 mol; n(H2)=9/2=4.5 mol.", working: "1.0 and 4.5", marks: 1, markCode: "M" },
              { reasoning: "Per coefficient: N2 gives 1.0, H2 gives 4.5/3=1.5. N2 is limiting.", working: "1.0 < 1.5", marks: 1, markCode: "M" },
              { reasoning: "n(NH3)=2*1.0=2.0 mol; M(NH3)=17.", working: "n=2.0, M=17", marks: 1, markCode: "M" },
              { reasoning: "Mass=2.0*17=34 g.", working: "2.0*17=34", marks: 1, markCode: "A" },
            ],
            finalAnswer: "N2 limiting; 34 g NH3",
            commonErrors: ["Using H2 as limiting because 9 g looks large."],
          },
        },
        {
          id: "cial-c-u1-rm-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For $2Mg + O_2 \\rightarrow 2MgO$, $12$ g Mg ($A_r$=24) and $16$ g $O_2$ ($A_r$=16) are mixed. Which reactant is limiting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Magnesium" },
              { id: "c", text: "Cannot be determined" },
              { id: "d", text: "Neither; they react exactly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Limiting reactant", statement: "Compare moles divided by coefficients." }],
            steps: [{ reasoning: "Mg: 0.5/2=0.25; O2: 0.5/1=0.5, so Mg is smaller and limiting.", marks: 1, markCode: "A" }],
            finalAnswer: "Magnesium",
          },
        },
        {
          id: "cial-c-u1-rm-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A reaction has a theoretical yield of $34$ g, but only $27.2$ g of product is collected. Calculate the percentage yield.",
          response: { type: "numeric", parts: [{ label: "% yield", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Percentage yield", statement: "actual/theoretical * 100." }],
            steps: [
              { reasoning: "% yield = (27.2/34)*100.", working: "27.2/34*100", marks: 1, markCode: "M" },
              { reasoning: "27.2/34 = 0.80.", working: "0.80", marks: 1, markCode: "M" },
              { reasoning: "Percentage yield = 80%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$%",
            commonErrors: ["Dividing theoretical by actual."],
          },
        },
        {
          id: "cial-c-u1-rm-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $CaCO_3 \\rightarrow CaO + CO_2$, calculate the mass of $CO_2$ produced from $10$ g of $CaCO_3$ ($M$: 100 and 44).",
          response: { type: "numeric", parts: [{ label: "mass CO2", answer: 4.4, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Decomposition ratio", statement: "1 mol CaCO3 gives 1 mol CO2." }],
            steps: [
              { reasoning: "n(CaCO3)=10/100=0.10 mol.", working: "10/100=0.10", marks: 1, markCode: "M" },
              { reasoning: "n(CO2)=0.10 mol because the ratio is 1:1; M(CO2)=44.", working: "M=44", marks: 1, markCode: "M" },
              { reasoning: "Mass=0.10*44=4.4 g.", working: "0.10*44=4.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.4$ g",
          },
        },
        {
          id: "cial-c-u1-rm-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a reason why the actual yield is lower than the theoretical yield?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The theoretical yield assumes impurities in the reactants" },
              { id: "b", text: "Some product is lost during filtering and transfer" },
              { id: "c", text: "Excess reactant always increases the yield above theoretical" },
              { id: "d", text: "The reaction produces extra product not predicted by the equation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Yield losses", statement: "Incomplete reaction or product loss reduces yield." }],
            steps: [{ reasoning: "Product can be lost during purification and collection.", marks: 1, markCode: "A" }],
            finalAnswer: "Product loss during purification",
            commonErrors: ["Saying yield can exceed theoretical for this type of reaction."],
          },
        },
        {
          id: "cial-c-u1-rm-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$, what is the mole ratio of $CH_4$ to $O_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1:4$" },
              { id: "b", text: "$1:1$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$2:1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Coefficients", statement: "Coefficients give mole ratios." }],
            steps: [{ reasoning: "CH4 coefficient 1 and O2 coefficient 2.", marks: 1, markCode: "A" }],
            finalAnswer: "$1:2$",
          },
        },
        {
          id: "cial-c-u1-rm-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $2Al + 3Cl_2 \\rightarrow 2AlCl_3$, calculate the mass of $AlCl_3$ formed from $5.4$ g Al with excess chlorine ($A_r$: Al=27, Cl=35.5).",
          response: { type: "numeric", parts: [{ label: "mass AlCl3", answer: 26.7, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "2 mol Al gives 2 mol AlCl3." }],
            steps: [
              { reasoning: "n(Al)=5.4/27=0.20 mol.", working: "5.4/27=0.20", marks: 1, markCode: "M" },
              { reasoning: "Ratio Al:AlCl3=1:1, so n(AlCl3)=0.20 mol; M(AlCl3)=133.5.", working: "M=133.5", marks: 1, markCode: "M" },
              { reasoning: "Mass=0.20*133.5=26.7 g.", working: "0.20*133.5=26.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$26.7$ g",
          },
        },
        {
          id: "cial-c-u1-rm-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In $Zn + 2HCl \\rightarrow ZnCl_2 + H_2$, $0.20$ mol Zn and $0.30$ mol HCl are available. Which reactant is in excess?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are in excess" },
              { id: "b", text: "Neither; both are limiting" },
              { id: "c", text: "$HCl$" },
              { id: "d", text: "$Zn$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Limiting reactant", statement: "Compare moles divided by coefficients." }],
            steps: [
              { reasoning: "Zn gives 0.20/1=0.20; HCl gives 0.30/2=0.15, so HCl is limiting.", working: "0.20 and 0.15", marks: 1, markCode: "M" },
              { reasoning: "Therefore Zn is present in excess.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Zn$ is in excess.",
            commonErrors: ["Choosing the reactant with the largest number of moles without using coefficients."],
          },
        },
        {
          id: "cial-c-u1-rm-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Reacting masses data.",
          parts: [
            { label: "a", prompt: "For $2H_2 + O_2 \\rightarrow 2H_2O$, state the mole ratio of $H_2$ to $O_2$.", marks: 1 },
            { label: "b", prompt: "A mixture contains $4.0$ g $H_2$ and $32$ g $O_2$ ($A_r$: H=1, O=16). Identify the limiting reactant.", marks: 3 },
            { label: "c", prompt: "Calculate the mass of water formed.", marks: 2 },
            { label: "d", prompt: "State one reason the actual mass might be lower.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Stoichiometry", statement: "Use mole ratios and the limiting reactant." }],
            steps: [
              { part: "a", reasoning: "Ratio H2:O2 = 2:1.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "n(H2)=4.0/2=2.0 mol; n(O2)=32/32=1.0 mol.", working: "2.0 and 1.0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Per coefficient: H2 gives 1.0 and O2 gives 1.0, so neither is limiting.", working: "1.0 and 1.0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They react in exactly the required ratio, so both reactants are completely used.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "n(H2O)=2.0 mol; M(H2O)=18.", working: "n=2.0, M=18", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mass=2.0*18=36 g.", working: "2.0*18=36", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any valid reason such as incomplete reaction or product loss.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2:1 (b) exact ratio (c) 36 g (d) any valid loss",
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
              { id: "a", text: "$24$ dm$^3$" },
              { id: "b", text: "$6$ dm$^3$" },
              { id: "c", text: "$12$ dm$^3$" },
              { id: "d", text: "$48$ dm$^3$" },
            ],
            correctChoiceId: "c",
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
          response: { type: "numeric", parts: [{ label: "concentration", answer: 0.5, unit: "mol dm-3" }] },
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
        {
          id: "cial-c-u1-gs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What volume does $1$ mol of an ideal gas occupy at room temperature and pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$ dm$^3$" },
              { id: "b", text: "$24$ dm$^3$" },
              { id: "c", text: "$2.4$ dm$^3$" },
              { id: "d", text: "$22.4$ dm$^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Molar gas volume", statement: "V = 24n dm3 at r.t.p." }],
            steps: [{ reasoning: "One mole occupies 24 dm3.", marks: 1, markCode: "A" }],
            finalAnswer: "$24$ dm$^3$",
          },
        },
        {
          id: "cial-c-u1-gs-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the concentration of a solution containing $0.40$ mol of solute in $250$ cm$^3$.",
          response: { type: "numeric", parts: [{ label: "concentration", answer: 1.6, unit: "mol dm-3" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Concentration", statement: "c = n/V with V in dm3." }],
            steps: [
              { reasoning: "Convert 250 cm3 to 0.250 dm3.", working: "0.250", marks: 1, markCode: "M" },
              { reasoning: "c = 0.40/0.250.", working: "0.40/0.250", marks: 1, markCode: "M" },
              { reasoning: "c = 1.6 mol dm-3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.6$ mol dm$^{-3}$",
          },
        },
        {
          id: "cial-c-u1-gs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When a solution is diluted with water, what happens to the amount of solute?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It becomes zero" },
              { id: "b", text: "It doubles" },
              { id: "c", text: "It halves" },
              { id: "d", text: "It stays the same" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Dilution", statement: "Adding solvent changes volume, not amount." }],
            steps: [{ reasoning: "No solute is added or removed, so n is unchanged.", marks: 1, markCode: "A" }],
            finalAnswer: "Moles of solute unchanged",
          },
        },
        {
          id: "cial-c-u1-gs-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $CaCO_3 \\rightarrow CaO + CO_2$, calculate the volume of $CO_2$ at r.t.p. produced from $5.0$ g $CaCO_3$ ($M(CaCO_3)=100$).",
          response: { type: "numeric", parts: [{ label: "V(CO2)", answer: 1.2, unit: "dm3" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Gas volume", statement: "n = mass/M; V = 24n dm3." }],
            steps: [
              { reasoning: "n(CaCO3) = 5.0/100 = 0.050 mol.", working: "5.0/100=0.050", marks: 1, markCode: "M" },
              { reasoning: "Ratio 1:1 gives n(CO2) = 0.050 mol.", working: "n=0.050", marks: 1, markCode: "M" },
              { reasoning: "V = 0.050 * 24.", working: "0.050*24", marks: 1, markCode: "M" },
              { reasoning: "V = 1.2 dm3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.2$ dm$^3$",
            commonErrors: ["Forgetting to convert moles to gas volume."],
          },
        },
        {
          id: "cial-c-u1-gs-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which solution is the most concentrated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.40$ mol in $500$ cm$^3$" },
              { id: "b", text: "$0.20$ mol in $100$ cm$^3$" },
              { id: "c", text: "$0.10$ mol in $100$ cm$^3$" },
              { id: "d", text: "$0.20$ mol in $250$ cm$^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Concentration", statement: "Smaller volume with same moles gives higher c." }],
            steps: [{ reasoning: "a gives 2.0 mol dm-3, the largest value.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.20$ mol in $100$ cm$^3$",
          },
        },
        {
          id: "cial-c-u1-gs-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$Zn + 2HCl \\rightarrow ZnCl_2 + H_2$. Find the volume of $H_2$ at r.t.p. from $25$ cm$^3$ of $0.40$ mol dm$^{-3}$ HCl with excess Zn.",
          response: { type: "numeric", parts: [{ label: "V(H2)", answer: 0.12, unit: "dm3" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Solution to gas", statement: "n=cV; ratio 2HCl:H2=2:1; V=24n." }],
            steps: [
              { reasoning: "n(HCl)=0.40*0.025=0.010 mol.", working: "0.40*0.025=0.010", marks: 1, markCode: "M" },
              { reasoning: "n(H2)=0.010/2=0.0050 mol.", working: "0.0050", marks: 1, markCode: "M" },
              { reasoning: "V=0.0050*24=0.12 dm3.", working: "0.0050*24=0.12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.12$ dm$^3$",
            commonErrors: ["Using n(H2)=n(HCl)."],
          },
        },
        {
          id: "cial-c-u1-gs-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "$25$ cm$^3$ of $2.0$ mol dm$^{-3}$ solution is diluted to $100$ cm$^3$. Calculate the new concentration.",
          response: { type: "numeric", parts: [{ label: "new concentration", answer: 0.5, unit: "mol dm-3" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Dilution", statement: "c1V1 = c2V2." }],
            steps: [
              { reasoning: "c2 = (2.0*25)/(100).", working: "(2.0*25)/100", marks: 1, markCode: "M" },
              { reasoning: "c2 = 50/100.", working: "50/100", marks: 1, markCode: "M" },
              { reasoning: "c2 = 0.50 mol dm-3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.50$ mol dm$^{-3}$",
          },
        },
        {
          id: "cial-c-u1-gs-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "At the same temperature and pressure, equal volumes of $CO_2$ and $O_2$ contain the same number of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atoms" },
              { id: "b", text: "Moles of each element present" },
              { id: "c", text: "Molecules" },
              { id: "d", text: "Grams of gas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Avogadro's principle", statement: "Equal gas volumes at same T,P contain equal moles." }],
            steps: [{ reasoning: "Equal volumes give equal moles, and each mole has the same number of molecules.", marks: 1, markCode: "A" }],
            finalAnswer: "Molecules",
          },
        },
        {
          id: "cial-c-u1-gs-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which volume must be used in $n=cV$ when $c$ is in mol dm$^{-3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume in dm$^3$" },
              { id: "b", text: "Volume in cm$^3$" },
              { id: "c", text: "Volume in m$^3$" },
              { id: "d", text: "Any volume unit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Units", statement: "c in mol dm-3 requires V in dm3." }],
            steps: [{ reasoning: "Concentration uses dm3.", marks: 1, markCode: "A" }],
            finalAnswer: "dm$^3$",
          },
        },
        {
          id: "cial-c-u1-gs-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the amount, in moles, of solute in $50$ cm$^3$ of $0.20$ mol dm$^{-3}$ solution.",
          response: { type: "numeric", parts: [{ label: "n", answer: 0.01, unit: "mol" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "n=cV", statement: "Convert cm3 to dm3 first." }],
            steps: [
              { reasoning: "V=0.050 dm3 and n=0.20*0.050.", working: "0.20*0.050", marks: 1, markCode: "M" },
              { reasoning: "n=0.010 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.010$ mol",
          },
        },
        {
          id: "cial-c-u1-gs-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how you would prepare $250$ cm$^3$ of $0.10$ mol dm$^{-3}$ sodium carbonate solution from solid $Na_2CO_3$ ($M=106$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Standard solution", statement: "Weigh exact mass, dissolve and dilute to mark." }],
            steps: [
              { reasoning: "n=0.10*0.250=0.025 mol.", working: "0.025", marks: 1, markCode: "M" },
              { reasoning: "Mass=0.025*106=2.65 g.", working: "0.025*106=2.65", marks: 1, markCode: "M" },
              { reasoning: "Dissolve in water and make up to 250 cm3 in a volumetric flask.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Weigh 2.65 g, dissolve and dilute to 250 cm3.",
          },
        },
        {
          id: "cial-c-u1-gs-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Gases and solutions data.",
          parts: [
            { label: "a", prompt: "Calculate the moles in $100$ cm$^3$ of $0.50$ mol dm$^{-3}$ HCl.", marks: 2 },
            { label: "b", prompt: "For $Mg + 2HCl \\rightarrow MgCl_2 + H_2$, find the volume of $H_2$ at r.t.p.", marks: 3 },
            { label: "c", prompt: "If the gas volume is measured as $0.30$ dm$^3$, calculate the percentage yield.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "n=cV and V=24n", statement: "Use stoichiometry then compare actual/theoretical volume." }],
            steps: [
              { part: "a", reasoning: "n(HCl)=0.50*0.100=0.050 mol.", working: "0.50*0.100=0.050", marks: 1, markCode: "M" },
              { part: "a", reasoning: "n=0.050 mol.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "n(H2)=0.050/2=0.025 mol.", working: "0.025", marks: 1, markCode: "M" },
              { part: "b", reasoning: "V=0.025*24.", working: "0.025*24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "V=0.60 dm3.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "% yield=(0.30/0.60)*100.", working: "0.30/0.60*100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "% yield=50%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.050 mol (b) 0.60 dm3 (c) 50%",
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
