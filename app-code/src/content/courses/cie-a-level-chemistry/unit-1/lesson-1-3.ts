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
              { id: "a", text: "All water has evaporated" },
              { id: "b", text: "The flask is empty" },
              { id: "c", text: "The indicator has changed colour" },
              { id: "d", text: "The solution is neutral" },
            ],
            correctChoiceId: "c",
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
          response: { type: "numeric", parts: [{ label: "c(NaOH)", answer: 0.148, unit: "mol dm-3" }] },
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
        {
          id: "cial-c-u1-ti-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes the equivalence point in a titration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The point where the burette is empty" },
              { id: "b", text: "The point where pH is always 7" },
              { id: "c", text: "The point where moles of reactants exactly match the equation ratio" },
              { id: "d", text: "The first colour change of the indicator" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Equivalence point", statement: "Stoichiometric amounts have reacted." }],
            steps: [{ reasoning: "Equivalence means the mole ratio has been reached.", marks: 1, markCode: "A" }],
            finalAnswer: "Stoichiometric amounts react.",
          },
        },
        {
          id: "cial-c-u1-ti-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "$20.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl neutralises $25.0$ cm$^3$ of NaOH. Calculate the concentration of NaOH.",
          response: { type: "numeric", parts: [{ label: "c(NaOH)", answer: 0.08, unit: "mol dm-3" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration", statement: "1:1 reaction: c1V1 = c2V2." }],
            steps: [
              { reasoning: "n(HCl)=0.100*0.0200=0.00200 mol.", working: "0.100*0.0200=0.00200", marks: 1, markCode: "M" },
              { reasoning: "1:1 ratio gives n(NaOH)=0.00200 mol in 0.0250 dm3.", working: "0.00200/0.0250", marks: 1, markCode: "M" },
              { reasoning: "c(NaOH)=0.080 mol dm-3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.080$ mol dm$^{-3}$",
          },
        },
        {
          id: "cial-c-u1-ti-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which volume unit must be used with concentration in mol dm$^{-3}$ when calculating $n=cV$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mm$^3$" },
              { id: "b", text: "cm$^3$" },
              { id: "c", text: "dm$^3$" },
              { id: "d", text: "m$^3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Units", statement: "c is per dm3." }],
            steps: [{ reasoning: "n=cV requires V in dm3.", marks: 1, markCode: "A" }],
            finalAnswer: "dm$^3$",
          },
        },
        {
          id: "cial-c-u1-ti-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$20.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ H2SO4 neutralises $20.0$ cm$^3$ of NaOH. For $H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O$, calculate the concentration of the NaOH solution.",
          response: { type: "numeric", parts: [{ label: "c(NaOH)", answer: 0.2, unit: "mol dm-3" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "1 mol H2SO4 reacts with 2 mol NaOH." }],
            steps: [
              { reasoning: "n(H2SO4)=0.100*0.0200=0.00200 mol.", working: "0.00200", marks: 1, markCode: "M" },
              { reasoning: "n(NaOH)=2*0.00200=0.00400 mol.", working: "0.00400", marks: 1, markCode: "M" },
              { reasoning: "V(NaOH)=20.0 cm3=0.0200 dm3.", working: "0.0200", marks: 1, markCode: "M" },
              { reasoning: "c=0.00400/0.0200=0.200 mol dm-3.", working: "0.200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.200$ mol dm$^{-3}$",
            commonErrors: ["Assuming a 1:1 ratio."],
          },
        },
        {
          id: "cial-c-u1-ti-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which indicator is suitable for a titration of a weak acid with a strong base?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Methyl orange" },
              { id: "b", text: "No indicator is needed" },
              { id: "c", text: "Litmus only" },
              { id: "d", text: "Phenolphthalein" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Indicator choice", statement: "Choose a change near the equivalence point pH." }],
            steps: [{ reasoning: "The equivalence point is alkaline, so phenolphthalein is appropriate.", marks: 1, markCode: "A" }],
            finalAnswer: "Phenolphthalein",
          },
        },
        {
          id: "cial-c-u1-ti-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Describe two features of a reliable titration procedure.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading the burette from above the meniscus" },
              { id: "b", text: "Using concordant titres that agree closely" },
              { id: "c", text: "Stopping the titration before the endpoint" },
              { id: "d", text: "Using a different indicator for each titre" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "method", name: "Titration technique", statement: "Accuracy depends on procedure." }],
            steps: [{ reasoning: "Concordant titres show the procedure is precise and repeatable.", marks: 1, markCode: "A" }],
            finalAnswer: "Concordant titres.",
          },
        },
        {
          id: "cial-c-u1-ti-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "$25.0$ cm$^3$ of a NaOH solution is diluted from a $250$ cm$^3$ flask. The aliquot needs $20.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl. Find the concentration of the original NaOH solution.",
          response: { type: "numeric", parts: [{ label: "original c", answer: 0.8, unit: "mol dm-3" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration and dilution", statement: "Calculate aliquot concentration then multiply by dilution factor." }],
            steps: [
              { reasoning: "n(HCl)=0.100*0.0200=0.00200 mol; n(NaOH in aliquot)=0.00200 mol.", working: "0.00200", marks: 1, markCode: "M" },
              { reasoning: "Aliquot concentration=0.00200/0.0250=0.080 mol dm-3.", working: "0.080", marks: 1, markCode: "M" },
              { reasoning: "Original flask concentration is 10 times larger: 0.80 mol dm-3.", working: "0.80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.80$ mol dm$^{-3}$",
          },
        },
        {
          id: "cial-c-u1-ti-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2HCl + CaCO_3 \\rightarrow CaCl_2 + H_2O + CO_2$, $25.0$ cm$^3$ of $0.20$ mol dm$^{-3}$ HCl reacts with excess CaCO3. Calculate the moles of CaCO3 reacted.",
          response: { type: "numeric", parts: [{ label: "n(CaCO3)", answer: 0.0025, unit: "mol" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "2 mol HCl react with 1 mol CaCO3." }],
            steps: [
              { reasoning: "n(HCl)=0.20*0.0250=0.0050 mol.", working: "0.20*0.0250=0.0050", marks: 1, markCode: "M" },
              { reasoning: "Ratio HCl:CaCO3=2:1.", working: "2:1", marks: 1, markCode: "M" },
              { reasoning: "n(CaCO3)=0.0050/2=0.0025 mol.", working: "0.0025", marks: 1, markCode: "M" },
              { reasoning: "Answer 0.0025 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.0025$ mol",
            commonErrors: ["Dividing by 2 in the wrong direction."],
          },
        },
        {
          id: "cial-c-u1-ti-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O$, what is the mole ratio of acid to base?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:1$" },
              { id: "b", text: "$2:2$" },
              { id: "c", text: "$1:1$" },
              { id: "d", text: "$1:2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Coefficients", statement: "Coefficients give mole ratio." }],
            steps: [{ reasoning: "1 mol H2SO4 reacts with 2 mol NaOH.", marks: 1, markCode: "A" }],
            finalAnswer: "$1:2$",
          },
        },
        {
          id: "cial-c-u1-ti-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What volume of $0.050$ mol dm$^{-3}$ NaOH is needed to neutralise $25.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl?",
          response: { type: "numeric", parts: [{ label: "V(NaOH)", answer: 50, unit: "cm3" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration", statement: "1:1 ratio, c1V1=c2V2." }],
            steps: [
              { reasoning: "n(HCl)=0.100*0.0250=0.00250 mol, so n(NaOH)=0.00250 mol.", working: "0.00250", marks: 1, markCode: "M" },
              { reasoning: "V(NaOH)=0.00250/0.050=0.050 dm3 = 50 cm3.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ cm$^3$",
          },
        },
        {
          id: "cial-c-u1-ti-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Suggest two ways a student could reduce error when carrying out an acid–base titration.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read the meniscus from above the burette" },
              { id: "b", text: "Add all the titrant quickly in one go" },
              { id: "c", text: "Use a different indicator for every titre" },
              { id: "d", text: "Use concordant titres and read the burette at eye level" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "method", name: "Experimental accuracy", statement: "Careful technique improves precision." }],
            steps: [{ reasoning: "Concordant titres and eye-level reading reduce random and systematic error.", marks: 1, markCode: "A" }],
            finalAnswer: "Concordant titres and careful reading.",
          },
        },
        {
          id: "cial-c-u1-ti-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Titration problem.",
          parts: [
            { label: "a", prompt: "For $H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O$, state the mole ratio of acid to base.", marks: 1 },
            { label: "b", prompt: "$25.0$ cm$^3$ of NaOH needs $18.0$ cm$^3$ of $0.200$ mol dm$^{-3}$ H2SO4. Calculate the concentration of NaOH.", marks: 4 },
            { label: "c", prompt: "Explain why the endpoint may not equal the exact equivalence point.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration", statement: "Use mole ratio and indicator approximation." }],
            steps: [
              { part: "a", reasoning: "Ratio H2SO4:NaOH = 1:2.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "n(H2SO4)=0.200*0.0180=0.00360 mol.", working: "0.00360", marks: 1, markCode: "M" },
              { part: "b", reasoning: "n(NaOH)=2*0.00360=0.00720 mol.", working: "0.00720", marks: 1, markCode: "M" },
              { part: "b", reasoning: "c(NaOH)=0.00720/0.0250.", working: "0.00720/0.0250", marks: 1, markCode: "M" },
              { part: "b", reasoning: "c=0.288 mol dm-3.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The indicator changes colour over a pH range, not at one exact pH.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The colour change may occur slightly before or after the true equivalence point.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This gives a small systematic error in the titre.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 1:2 (b) 0.288 mol dm-3 (c) indicator range",
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
              { id: "a", text: "Percentage of water in the sample" },
              { id: "b", text: "Mass of pure substance as a percentage of sample mass" },
              { id: "c", text: "Purity of the solvent" },
              { id: "d", text: "Percentage of product formed" },
            ],
            correctChoiceId: "b",
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
          response: { type: "numeric", parts: [{ label: "x", answer: 5 }] },
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
        {
          id: "cial-c-u1-pp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sample contains $8.0$ g of pure substance in $10.0$ g of sample. What is its percentage purity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$%" },
              { id: "b", text: "$80$%" },
              { id: "c", text: "$125$%" },
              { id: "d", text: "$20$%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Purity", statement: "pure mass/sample mass * 100." }],
            steps: [{ reasoning: "(8.0/10.0)*100 = 80%.", marks: 1, markCode: "A" }],
            finalAnswer: "$80$%",
          },
        },
        {
          id: "cial-c-u1-pp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $4.00$ g impure sample contains $3.20$ g of pure NaOH. Calculate the percentage purity.",
          response: { type: "numeric", parts: [{ label: "% purity", answer: 80 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Purity", statement: "m_pure/m_sample * 100." }],
            steps: [
              { reasoning: "% purity = (3.20/4.00)*100.", working: "3.20/4.00*100", marks: 1, markCode: "M" },
              { reasoning: "% purity = 80%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$%",
          },
        },
        {
          id: "cial-c-u1-pp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is water of crystallisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water molecules fixed in the crystal lattice" },
              { id: "b", text: "Water used to dissolve the salt" },
              { id: "c", text: "Water produced during heating" },
              { id: "d", text: "Water adsorbed on the surface only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Water of crystallisation", statement: "Water molecules in the lattice." }],
            steps: [{ reasoning: "Hydrated salts contain water within the crystal structure.", marks: 1, markCode: "A" }],
            finalAnswer: "Water in the crystal lattice",
          },
        },
        {
          id: "cial-c-u1-pp-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $10.0$ g hydrate loses $1.80$ g water on heating, leaving $8.20$ g anhydrous salt with $M_r=82$. Find $x$ in $salt \\cdot xH_2O$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Hydrate analysis", statement: "n(H2O)/n(salt) = x." }],
            steps: [
              { reasoning: "n(H2O)=1.80/18=0.100 mol.", working: "1.80/18=0.100", marks: 1, markCode: "M" },
              { reasoning: "n(salt)=8.20/82=0.100 mol.", working: "8.20/82=0.100", marks: 1, markCode: "M" },
              { reasoning: "x=0.100/0.100=1.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Formula is salt·H2O.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$",
            commonErrors: ["Using the original 10.0 g instead of the water mass."],
          },
        },
        {
          id: "cial-c-u1-pp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which formula represents copper(II) sulfate pentahydrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CuSO_4 \\cdot H_2O$" },
              { id: "b", text: "$CuSO_4 \\cdot 5H_2O$" },
              { id: "c", text: "$CuSO_4$" },
              { id: "d", text: "$Cu(OH)_2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Hydrate notation", statement: "Dot shows water of crystallisation." }],
            steps: [{ reasoning: "Pentahydrate contains five waters.", marks: 1, markCode: "A" }],
            finalAnswer: "$CuSO_4 \\cdot 5H_2O$",
          },
        },
        {
          id: "cial-c-u1-pp-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the percentage of oxygen by mass in $CO_2$ ($A_r$: C=12, O=16).",
          response: { type: "numeric", parts: [{ label: "% O", answer: 72.7, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Percentage composition", statement: "element mass/Mr * 100." }],
            steps: [
              { reasoning: "M(CO2)=12+2*16=44.", working: "44", marks: 1, markCode: "M" },
              { reasoning: "Oxygen mass=2*16=32.", working: "32", marks: 1, markCode: "M" },
              { reasoning: "%O=(32/44)*100=72.7%.", working: "72.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72.7$%",
          },
        },
        {
          id: "cial-c-u1-pp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the percentage of nitrogen by mass in $NH_3$ ($A_r$: N=14, H=1).",
          response: { type: "numeric", parts: [{ label: "% N", answer: 82.4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Composition", statement: "element mass/Mr*100." }],
            steps: [
              { reasoning: "M(NH3)=14+3=17; N mass=14.", working: "17 and 14", marks: 1, markCode: "M" },
              { reasoning: "%N=(14/17)*100=82.4%.", working: "82.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$82.4$%",
          },
        },
        {
          id: "cial-c-u1-pp-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $10.0$ g hydrate loses $4.50$ g water on heating, leaving $5.50$ g anhydrous salt with $M_r=110$. Find $x$ in $salt \\cdot xH_2O$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Hydrate analysis", statement: "n(H2O)/n(salt) = x." }],
            steps: [
              { reasoning: "n(H2O)=4.50/18=0.250 mol.", working: "4.50/18=0.250", marks: 1, markCode: "M" },
              { reasoning: "n(salt)=5.50/110=0.0500 mol.", working: "5.50/110=0.0500", marks: 1, markCode: "M" },
              { reasoning: "x=0.250/0.0500=5.", working: "0.250/0.0500=5", marks: 1, markCode: "M" },
              { reasoning: "The hydrate is salt·5H2O.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Using the original hydrate mass instead of the anhydrous mass."],
          },
        },
        {
          id: "cial-c-u1-pp-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is meant by an anhydrous salt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A salt that is always white" },
              { id: "b", text: "A salt containing no water of crystallisation" },
              { id: "c", text: "A salt made without water" },
              { id: "d", text: "A salt that dissolves easily" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Anhydrous", statement: "No water of crystallisation." }],
            steps: [{ reasoning: "Anhydrous means water-free hydrate form.", marks: 1, markCode: "A" }],
            finalAnswer: "No water of crystallisation.",
          },
        },
        {
          id: "cial-c-u1-pp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $2.00$ g sample of impure NaOH is dissolved to $250$ cm$^3$. A $25.0$ cm$^3$ aliquot needs $20.0$ cm$^3$ of $0.100$ mol dm$^{-3}$ HCl. Find the percentage purity ($M(NaOH)=40$).",
          response: { type: "numeric", parts: [{ label: "% purity", answer: 40, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration purity", statement: "Find pure mass then divide by sample mass." }],
            steps: [
              { reasoning: "n(HCl)=0.100*0.0200=0.00200 mol in aliquot; total n(NaOH)=0.0200 mol.", working: "0.0200", marks: 1, markCode: "M" },
              { reasoning: "Pure mass=0.0200*40=0.80 g.", working: "0.80", marks: 1, markCode: "M" },
              { reasoning: "% purity=(0.80/2.00)*100=40%.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$%",
          },
        },
        {
          id: "cial-c-u1-pp-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A compound has empirical formula $CH_2O$ and molar mass $180$. What is its molecular formula? ($A_r$: C=12, H=1, O=16)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C_6H_{12}O_6$" },
              { id: "b", text: "$CH_2O$" },
              { id: "c", text: "$C_{12}H_{24}O_{12}$" },
              { id: "d", text: "$C_3H_6O_3$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Empirical to molecular", statement: "Molecular = empirical * n." }],
            steps: [
              { reasoning: "Empirical Mr=30 and 180/30=6, so molecular formula is C6H12O6.", working: "180/30=6", marks: 1, markCode: "M" },
              { reasoning: "C6H12O6 has Mr = 6*12+12+6*16 = 180.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C_6H_{12}O_6$",
          },
        },
        {
          id: "cial-c-u1-pp-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Purity and composition problem.",
          parts: [
            { label: "a", prompt: "State the formula for percentage purity.", marks: 1 },
            { label: "b", prompt: "A $5.00$ g sample contains $4.50$ g pure NaCl. Find its purity.", marks: 2 },
            { label: "c", prompt: "A hydrate loses $3.60$ g water leaving $6.40$ g anhydrous salt ($M_r=160$). Find x.", marks: 3 },
            { label: "d", prompt: "Calculate the percentage of water in the original hydrate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Purity and hydrates", statement: "Use mass ratios and mole ratios." }],
            steps: [
              { part: "a", reasoning: "% purity = m_pure/m_sample * 100.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "% purity=(4.50/5.00)*100.", working: "4.50/5.00*100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "% purity=90%.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "n(H2O)=3.60/18=0.20; n(salt)=6.40/160=0.040.", working: "0.20 and 0.040", marks: 1, markCode: "M" },
              { part: "c", reasoning: "x=0.20/0.040=5.", working: "5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Formula salt·5H2O.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total hydrate mass=6.40+3.60=10.0 g.", working: "10.0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "%H2O=(3.60/10.0)*100=36%.", working: "36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) formula (b) 90% (c) x=5 (d) 36%",
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
