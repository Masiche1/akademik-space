import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cial-c-u1-lesson-1-3",
  code: "1-3",
  title: "Titrations and percentage purity",
  goal: "I CAN carry out titration calculations and determine percentage purity and percentage composition.",
  standards: ["9701 1.1: titrations and purity"],
  vocabulary: [
    {
      term: "Titration",
      definition:
        "Adding a solution of known concentration from a burette until the reaction is complete.",
    },
    {
      term: "Endpoint",
      definition: "Point where indicator changes colour, showing reaction completion.",
    },
    {
      term: "Equivalence point",
      definition:
        "Exact point where moles of acid = moles of base; endpoint approximates it.",
    },
    {
      term: "Standard solution",
      definition: "Solution of accurately known concentration.",
    },
    {
      term: "Percentage purity",
      definition:
        "$\\frac{\\text{mass of pure substance}}{\\text{mass of sample}} \\times 100\\%$.",
    },
    {
      term: "Anhydrous",
      definition: "Containing no water of crystallisation.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u1-titrations",
      title: "Titration calculations",
      skill: "Calculate unknown concentrations and amounts from titration data.",
      lesson: {
        sections: [
          {
            heading: "The calculation",
            body: "At the endpoint, moles of acid $=$ moles of base (for 1:1 reactions). Use $n=cV$ for each solution with $V$ in dm$^3$. For non-1:1 reactions use the mole ratio from the equation.",
          },
          {
            heading: "Acid–base titrations",
            body: "For $HCl + NaOH \\to NaCl + H_2O$ the ratio is 1:1. For $H_2SO_4 + 2NaOH \\to Na_2SO_4 + 2H_2O$ it is 1:2 — check the balanced equation before assuming 1:1.",
          },
          {
            heading: "Indicators",
            body: "Choose an indicator whose colour change occurs near the pH at the equivalence point: methyl orange or phenolphthalein for strong acid–strong base; phenolphthalein for weak acid–strong base.",
          },
        ],
        keyFormulas: [
          {
            name: "Titration relation",
            statement:
              "$c_1V_1 \\times \\text{ratio} = c_2V_2$ for 1:1 use $c_1V_1=c_2V_2$.",
          },
          {
            name: "Moles",
            statement: "$n = cV$ with $V$ in dm$^3$.",
          },
        ],
        workedExample: {
          problem:
            "$25.0$ cm$^3$ of $NaOH$ needs $20.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ $HCl$ for neutralisation. Find $c(NaOH)$.",
          solution:
            "1:1 ratio: $c(NaOH)=\\frac{0.100 \\times 20.0}{25.0}=0.080$ mol dm$^{-3}$.",
        },
      },
      questions: [
        {
          id: "cial-c-u1-ti-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a titration, what does the endpoint tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The indicator has changed colour" },
              { id: "b", text: "The flask is empty" },
              { id: "c", text: "All water has evaporated" },
              { id: "d", text: "The solution is neutral" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endpoint",
                statement: "Indicator colour change approximates the equivalence point.",
              },
            ],
            steps: [
              {
                reasoning: "Endpoint = colour change of indicator.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Indicator colour change",
          },
        },
        {
          id: "cial-c-u1-ti-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$20.0$ cm$^3$ of $0.15$ mol dm$^{-3}$ $NaOH$ is neutralised by $H_2SO_4$. Given $H_2SO_4 + 2NaOH \\to Na_2SO_4 + 2H_2O$, find the moles of $H_2SO_4$ used.",
          response: {
            type: "numeric",
            parts: [{ label: "n(H2SO4)", answer: 0.0015 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Mole ratio in titration",
                statement:
                  "$n(NaOH)=2n(H_2SO_4)$ from the balanced equation.",
              },
            ],
            steps: [
              {
                reasoning: "$n(NaOH)=0.15 \\times 0.0200=0.0030$ mol.",
                working: "0.15 \\times 0.0200 = 0.0030",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio 2:1 $\\Rightarrow n(H_2SO_4)=\\frac{0.0030}{2}$.",
                working: "\\frac{0.0030}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=0.0015$ mol.",
                working: "0.0015",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.0015$ mol",
            commonErrors: ["Assuming 1:1 and getting $0.0030$ mol."],
          },
        },
        {
          id: "cial-c-u1-ti-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$25.0$ cm$^3$ of a $NaOH$ solution is titrated with $0.200$ mol dm$^{-3}$ $HCl$; $18.5$ cm$^3$ is required. Calculate the concentration of $NaOH$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration relation",
                statement: "1:1 reaction: $c_{NaOH}V_{NaOH}=c_{HCl}V_{HCl}$.",
              },
            ],
            steps: [
              {
                reasoning: "$n(HCl)=0.200 \\times 0.0185=0.0037$ mol.",
                working: "0.200 \\times 0.0185",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1:1 ratio so $n(NaOH)=0.0037$ mol.",
                working: "n(NaOH)=0.0037",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$c=\\frac{0.0037}{0.0250}$.",
                working: "\\frac{0.0037}{0.0250}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=0.148$ mol dm$^{-3}$.",
                working: "0.148",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.148$ mol dm$^{-3}$",
            commonErrors: ["Using cm$^3$ without converting to dm$^3$."],
          },
        },
        {
          id: "cial-c-u1-ti-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Titrations and purity.",
          parts: [
            {
              label: "a",
              prompt: "State what is measured in a titration and the role of the indicator.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "$20.0$ cm$^3$ of $HCl$ is neutralised by $15.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ $NaOH$. Find $c(HCl)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "A $2.50$ g sample of impure $NaOH$ is dissolved and made up to $250$ cm$^3$. $25.0$ cm$^3$ of this needs $30.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ $HCl$. Find the percentage purity of the sample ($M(NaOH)=40$).",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration and purity",
                statement:
                  "$c_1V_1=c_2V_2$; purity $=\\frac{n_{pure} \\times M}{m_{sample}}\\times100$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Volume of titrant delivered from burette until reaction complete.",
                working: "\\text{titre}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Indicator signals the endpoint (equivalence point).",
                working: "\\text{endpoint signal}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$n(NaOH)=0.100 \\times 0.0150=0.00150$ mol.",
                working: "0.100 \\times 0.0150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "1:1 ratio $\\Rightarrow n(HCl)=0.00150$ mol.",
                working: "n(HCl)=0.00150",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$c=\\frac{0.00150}{0.0200}=0.0750$ mol dm$^{-3}$.",
                working: "0.0750",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$n(HCl)=0.100 \\times 0.0300=0.00300$ mol in $25$ cm$^3$ aliquot.",
                working: "0.00300",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Total $n(NaOH)$ in $250$ cm$^3$ $=0.00300 \\times 10=0.0300$ mol.",
                working: "0.00300 \\times 10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Mass pure $=0.0300 \\times 40=1.20$ g.",
                working: "0.0300 \\times 40=1.20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\%purity=\\frac{1.20}{2.50}\\times100=48.0\\%$.",
                working: "\\frac{1.20}{2.50} \\times 100 = 48.0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) titre+indicator (b) 0.0750 (c) 48.0%",
          },
        },
      ],
    },
    {
      id: "cial-c-u1-purity",
      title: "Percentage purity and composition",
      skill: "Determine purity of samples and percentage composition by mass.",
      lesson: {
        sections: [
          {
            heading: "Percentage purity",
            body: "Purity compares the actual amount of pure substance to the total sample. From titration data: find moles of pure substance, multiply by $M_r$ for mass, divide by sample mass, $\\times 100$.",
          },
          {
            heading: "Water of crystallisation",
            body: "Hydrated salts contain water: $CuSO_4 \\cdot 5H_2O$. Heating drives off water; the mass loss gives the water content. Formula: $\\frac{\\text{mass anhydrous}}{M_r(\\text{anhydrous})}$ gives moles of salt, $\\frac{\\text{mass water}}{18}$ gives moles of water — ratio gives $x$ in $\\cdot xH_2O$.",
          },
          {
            heading: "Percentage composition",
            body: "For any compound: $\\%\\text{element}=\\frac{\\text{total mass of element in formula}}{M_r}\\times100$. Used to check formulae and analyse mixtures.",
          },
        ],
        keyFormulas: [
          {
            name: "Purity",
            statement:
              "$\\dfrac{m_{pure}}{m_{sample}} \\times 100\\%$",
          },
          {
            name: "Hydrate water",
            statement:
              "$x = \\dfrac{n(H_2O)}{n(\\text{salt})}$ in $salt \\cdot xH_2O$.",
          },
        ],
        workedExample: {
          problem:
            "On heating, $3.99$ g of $CuSO_4 \\cdot 5H_2O$ leaves $2.55$ g anhydrous $CuSO_4$ ($M_r$: 250 and 160). Find $x$ if the formula is $CuSO_4 \\cdot xH_2O$.",
          solution:
            "Water mass $=1.44$ g $\\to n=0.080$ mol. $n(CuSO_4)=2.55/160=0.0159$ mol. $x=0.080/0.0159=5.03 \\approx 5$.",
        },
      },
      questions: [
        {
          id: "cial-c-u1-pp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'percentage purity' measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass of pure substance as a percentage of sample mass" },
              { id: "b", text: "Percentage of water in the sample" },
              { id: "c", text: "Purity of the solvent" },
              { id: "d", text: "Percentage of product formed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Percentage purity",
                statement: "$\\frac{m_{pure}}{m_{sample}}\\times100\\%$.",
              },
            ],
            steps: [
              {
                reasoning: "Purity = pure mass / sample mass $\\times 100$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Pure mass / sample mass",
          },
        },
        {
          id: "cial-c-u1-pp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $5.00$ g sample of $NaOH$ contains $4.00$ g pure $NaOH$. What is the percentage purity?",
          response: {
            type: "numeric",
            parts: [{ label: "% purity", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage purity",
                statement: "$\\frac{m_{pure}}{m_{sample}}\\times100$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{4.00}{5.00} \\times 100$.",
                working: "\\frac{4.00}{5.00} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=80\\%$.",
                working: "80",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State as percentage.",
                working: "\\%",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$80\\%$",
          },
        },
        {
          id: "cial-c-u1-pp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Heating $10.0$ g of a hydrated salt leaves $6.40$ g anhydrous residue ($M_r$ anhydrous $=160$). Find $x$ in $salt \\cdot xH_2O$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hydrate analysis",
                statement:
                  "Moles of water / moles of anhydrous salt $=x$.",
              },
            ],
            steps: [
              {
                reasoning: "Water mass $=10.0-6.40=3.60$ g; $n(H_2O)=3.60/18=0.20$.",
                working: "\\frac{3.60}{18}=0.20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n(\\text{salt})=6.40/160=0.040$ mol.",
                working: "\\frac{6.40}{160}=0.040",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x=0.20/0.040=5$.",
                working: "\\frac{0.20}{0.040}=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Formula $salt \\cdot 5H_2O$.",
                working: "\\cdot 5H_2O",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Using total mass instead of water mass for $n(H_2O)$."],
          },
        },
        {
          id: "cial-c-u1-pp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Purity and composition.",
          parts: [
            {
              label: "a",
              prompt: "Explain how water of crystallisation affects the molar mass of a hydrated salt.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "A hydrate loses $3.60$ g water on heating, leaving $6.40$ g anhydrous salt ($M_r=160$). Find $x$ in $salt \\cdot xH_2O$.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Calculate the percentage of water in the original hydrate.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water of crystallisation",
                statement:
                  "Water molecules are part of the crystal lattice, counted in $M_r$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$M_r$ of hydrate includes $x \\times 18$ for the water.",
                working: "M_r + 18x",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "So hydrate $M_r$ is larger than anhydrous $M_r$.",
                working: "\\text{larger}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$n(H_2O)=3.60/18=0.20$ mol.",
                working: "\\frac{3.60}{18}=0.20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$n(\\text{salt})=6.40/160=0.040$ mol.",
                working: "\\frac{6.40}{160}=0.040",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x=0.20/0.040=5$.",
                working: "5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Stated as $\\cdot 5H_2O$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total hydrate mass $=6.40+3.60=10.0$ g.",
                working: "10.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\%H_2O=\\frac{3.60}{10.0}\\times100$.",
                working: "\\frac{3.60}{10.0} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$=36.0\\%$.",
                working: "36.0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) adds 18x to Mr (b) x=5 (c) 36.0%",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u1-titration-purity-notes",
      title: "Titrations and percentage purity — revision notes",
      summary:
        "Titration calculations, percentage purity and water of crystallisation.",
      sections: [
        {
          heading: "Titrations",
          body: "At endpoint moles of reactants match the equation ratio — check it (1:1 for $HCl+NaOH$, 1:2 for $H_2SO_4+2NaOH$). Always convert volumes to dm$^3$ before $n=cV$. Indicator colour change approximates the equivalence point.",
        },
        {
          heading: "Purity and hydrates",
          body: "Purity $=\\frac{m_{pure}}{m_{sample}}\\times100$. For hydrates: moles of water $=$ mass loss/18; moles of anhydrous salt $=$ residue mass/$M_r$; ratio gives $x$ in $\\cdot xH_2O$. Water of crystallisation counts in the hydrate's $M_r$.",
        },
        {
          heading: "Exam checklist",
          body: "For titration of a diluted sample, multiply by the dilution factor (e.g. $\\times10$ for a $25$ cm$^3$ aliquot of $250$ cm$^3$). Show every conversion line — method marks are awarded for correct setup even if arithmetic slips.",
        },
      ],
    },
  ],
};
