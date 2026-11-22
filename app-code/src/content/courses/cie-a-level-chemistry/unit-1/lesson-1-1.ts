import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cial-c-u1-lesson-1-1",
  code: "1-1",
  title: "The mole and chemical formulae",
  goal: "I CAN use the mole concept, molar masses and formulae to calculate amounts of substance.",
  standards: ["9701 1.1: the mole concept"],
  vocabulary: [
    {
      term: "Mole",
      definition:
        "The amount of substance containing $6.02 \\times 10^{23}$ particles (atoms, ions or molecules).",
    },
    {
      term: "Molar mass",
      definition:
        "Mass of one mole of a substance in grams; numerically equal to $A_r$ or $M_r$.",
    },
    {
      term: "Avogadro constant",
      definition: "$N_A = 6.02 \\times 10^{23}$ particles per mole.",
    },
    {
      term: "Empirical formula",
      definition: "Simplest whole-number ratio of atoms in a compound.",
    },
    {
      term: "Molecular formula",
      definition:
        "Actual number of atoms of each element in one molecule; a multiple of the empirical formula.",
    },
    {
      term: "Percentage composition",
      definition:
        "Mass percentage of each element in a compound, from $A_r$ values.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u1-mole-concept",
      title: "The mole concept and molar mass",
      skill: "Convert between mass, moles and number of particles.",
      lesson: {
        sections: [
          {
            heading: "What a mole is",
            body: "One mole of any substance contains $6.02 \\times 10^{23}$ particles. The molar mass $M$ (g/mol) links mass and moles: $n = \\frac{m}{M}$. For elements use $A_r$; for compounds sum $A_r$ over the formula, e.g. $H_2SO_4$: $2(1)+32+4(16)=98$ g/mol.",
          },
          {
            heading: "Particles from moles",
            body: "Number of particles $N = n \\times N_A = \\frac{m}{M} \\times 6.02 \\times 10^{23}$. For ionic compounds the 'particle' is the formula unit — one mole of $NaCl$ contains $6.02 \\times 10^{23}$ $Na^+$ AND $6.02 \\times 10^{23}$ $Cl^-$ ions, i.e. $2N_A$ ions total.",
          },
          {
            heading: "Moles in equations",
            body: "Balanced equations give mole ratios directly: $2H_2 + O_2 \\to 2H_2O$ means 2 mol $H_2$ reacts with 1 mol $O_2$ to give 2 mol $H_2O$. Convert masses to moles first, apply the ratio, convert back.",
          },
        ],
        keyFormulas: [
          {
            name: "Moles from mass",
            statement: "$n = \\dfrac{m}{M}$",
          },
          {
            name: "Particles",
            statement: "$N = n \\times 6.02 \\times 10^{23}$",
          },
          {
            name: "Mole ratio",
            statement: "Coefficients in a balanced equation = mole ratio.",
          },
        ],
        workedExample: {
          problem:
            "How many moles and how many molecules are in $8.0$ g of methane, $CH_4$ ($A_r$: C=12, H=1)?",
          solution:
            "$M(CH_4)=12+4=16$ g/mol, so $n=\\frac{8}{16}=0.5$ mol. Molecules $=0.5 \\times 6.02 \\times 10^{23}=3.01 \\times 10^{23}$.",
        },
      },
      questions: [
        {
          id: "cial-c-u1-mc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the molar mass of $CaCO_3$ ($A_r$: Ca=40, C=12, O=16)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120$ g/mol" },
              { id: "b", text: "$100$ g/mol" },
              { id: "c", text: "$84$ g/mol" },
              { id: "d", text: "$68$ g/mol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molar mass",
                statement:
                  "$M = \\sum A_r$ over all atoms in the formula unit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$M = 40 + 12 + 3(16) = 40+12+48 = 100$ g/mol.",
                working: "40+12+48=100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$100$ g/mol",
            commonErrors: [
              "Using $O_3$ or forgetting to multiply O by 3.",
            ],
          },
        },
        {
          id: "cial-c-u1-mc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the number of moles in $11.2$ g of $N_2$ ($A_r$: N=14).",
          response: { type: "numeric", parts: [{ label: "n", answer: 0.4 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles from mass",
                statement: "$n = \\frac{m}{M}$ with $M(N_2)=28$.",
              },
            ],
            steps: [
              {
                reasoning: "$M(N_2)=2 \\times 14 = 28$ g/mol.",
                working: "2 \\times 14 = 28",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n = \\frac{11.2}{28} = 0.4$ mol.",
                working: "\\frac{11.2}{28}=0.4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.4$ mol",
            commonErrors: ["Using $A_r=14$ instead of $M_r=28$ for $N_2$."],
          },
        },
        {
          id: "cial-c-u1-mc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How many ions are present in one mole of $Na_2SO_4$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formula unit",
                statement:
                  "One mole of an ionic compound contains $N_A$ formula units, each dissociating into its ions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$Na_2SO_4$ gives $2Na^+ + SO_4^{2-}$: 3 ions per formula unit.",
                working: "2+1=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One mole contains $N_A$ formula units.",
                working: "6.02 \\times 10^{23}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total ions $= 3 \\times 6.02 \\times 10^{23}$.",
                working: "3 \\times 6.02 \\times 10^{23}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 1.81 \\times 10^{24}$ ions.",
                working: "1.81 \\times 10^{24}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.81 \\times 10^{24}$ ions",
            commonErrors: [
              "Answering $6.02 \\times 10^{23}$ — that is formula units, not ions.",
            ],
          },
        },
        {
          id: "cial-c-u1-mc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The mole concept.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the molar mass of $Mg(NO_3)_2$ ($A_r$: Mg=24, N=14, O=16).",
              marks: 1,
            },
            { label: "b", prompt: "Find the moles in $4.9$ g of $Mg(NO_3)_2$.", marks: 2 },
            {
              label: "c",
              prompt:
                "How many $NO_3^-$ ions are in $0.25$ mol of $Mg(NO_3)_2$?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "For $2H_2 + O_2 \\to 2H_2O$, what mass of water forms from $4.0$ g of hydrogen?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mole conversions",
                statement:
                  "$n=\\frac{m}{M}$, $N=nN_A$, and equation coefficients give mole ratios.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$M = 24 + 2(14 + 48) = 24 + 124 = 148$.",
                working: "24+2(14+48)=148",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$n = \\frac{4.9}{148}$.",
                working: "\\frac{4.9}{148}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= 0.033$ mol.",
                working: "0.033",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Each formula unit has 2 $NO_3^-$ ions.",
                working: "2 \\times 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 0.50$ mol $= 3.01 \\times 10^{23}$ ions.",
                working: "0.5 \\times 6.02 \\times 10^{23}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$M(H_2)=2$, $n(H_2)=\\frac{4}{2}=2$ mol.",
                working: "\\frac{4}{2}=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Ratio $H_2:H_2O = 2:2 = 1:1$, so $n(H_2O)=2$ mol.",
                working: "n(H_2O)=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$M(H_2O)=18$, mass $=2 \\times 18$.",
                working: "2 \\times 18",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$=36$ g.",
                working: "36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 148 (b) 0.033 mol (c) 3.01e23 (d) 36 g",
          },
        },
        {
          id: "cial-c-u1-mc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many hydrogen atoms are present in one mole of $H_2O$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.41 \\times 10^{24}$" },
              { id: "b", text: "$3.01 \\times 10^{23}$" },
              { id: "c", text: "$6.02 \\times 10^{23}$" },
              { id: "d", text: "$1.20 \\times 10^{24}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Avogadro constant",
                statement: "One mole of particles contains $N_A = 6.02 \\times 10^{23}$ particles.",
              },
            ],
            steps: [
              {
                reasoning: "Each $H_2O$ molecule has 2 H atoms, so 1 mol contains $2N_A$ H atoms.",
                working: "2 \\times 6.02 \\times 10^{23}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $1.20 \\times 10^{24}$ hydrogen atoms",
          },
        },
        {
          id: "cial-c-u1-mc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sample contains the greatest number of moles of particles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$32$ g of $O_2$" },
              { id: "b", text: "$4$ g of $H_2$" },
              { id: "c", text: "$40$ g of $Ar$" },
              { id: "d", text: "$16$ g of $CH_4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles from mass",
                statement: "$n = \\frac{m}{M}$; compare moles, not masses.",
              },
            ],
            steps: [
              {
                reasoning: "$n(H_2)=\\frac{4}{2}=2$ mol; $n(CH_4)=\\frac{16}{16}=1$; $n(O_2)=\\frac{32}{32}=1$; $n(Ar)=\\frac{40}{40}=1$ mol.",
                working: "2,\\ 1,\\ 1,\\ 1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $4$ g of $H_2$",
          },
        },
        {
          id: "cial-c-u1-mc-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many atoms, in total, are in $0.25$ mol of $Al_2(SO_4)_3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.25 \\times 10^{24}$" },
              { id: "b", text: "$3.01 \\times 10^{24}$" },
              { id: "c", text: "$2.56 \\times 10^{24}$" },
              { id: "d", text: "$1.51 \\times 10^{24}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formula unit atoms",
                statement: "$Al_2(SO_4)_3$ contains $2+3+12=17$ atoms per formula unit.",
              },
            ],
            steps: [
              {
                reasoning: "Atoms $=0.25 \\times 17 \\times 6.02 \\times 10^{23} = 4.25 \\times 6.02 \\times 10^{23} \\approx 2.56 \\times 10^{24}$.",
                working: "4.25 \\times 6.02 \\times 10^{23}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $2.56 \\times 10^{24}$ atoms",
            commonErrors: ["Counting ions (5) instead of atoms (17) per formula unit."],
          },
        },
        {
          id: "cial-c-u1-mc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the mass of $0.020$ mol of $Na_2CO_3$? ($A_r$: Na=23, C=12, O=16)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.06$ g" },
              { id: "b", text: "$2.12$ g" },
              { id: "c", text: "$21.2$ g" },
              { id: "d", text: "$10.6$ g" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass from moles",
                statement: "$m = n \\times M$ with $M(Na_2CO_3)=106$.",
              },
            ],
            steps: [
              {
                reasoning: "$m = 0.020 \\times 106 = 2.12$ g.",
                working: "0.020 \\times 106 = 2.12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $2.12$ g",
          },
        },
        {
          id: "cial-c-u1-mc-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about the mole is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ mol of $NaCl$ contains $6.02 \\times 10^{23}$ ions" },
              { id: "b", text: "$1$ mol of $O_2$ and $1$ mol of $O_3$ contain the same number of atoms" },
              { id: "c", text: "$1$ mol of $H_2SO_4$ has a mass of $49$ g" },
              { id: "d", text: "$1$ mol of any gas occupies the same volume at the same temperature and pressure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole properties",
                statement: "Equal moles of gas occupy equal volumes at the same T and P.",
              },
            ],
            steps: [
              {
                reasoning: "(a) false — $O_3$ has 3 atoms per molecule; (c) false — $NaCl$ gives 2 ions per formula unit; (d) false — $M(H_2SO_4)=98$. Only (b) is correct.",
                working: "b",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** $1$ mol of any gas occupies the same volume at the same T and P",
            commonErrors: ["Confusing moles of molecules with moles of atoms or ions."],
          },
        },
        {
          id: "cial-c-u1-mc-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the number of moles in $7.3$ g of $HCl$ ($A_r$: H=1, Cl=35.5).",
          response: { type: "numeric", parts: [{ label: "n", answer: 0.2 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles from mass",
                statement: "$n = \\frac{m}{M}$ with $M(HCl)=36.5$.",
              },
            ],
            steps: [
              {
                reasoning: "$M(HCl)=1+35.5=36.5$ g/mol.",
                working: "1+35.5=36.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n=\\frac{7.3}{36.5}=0.20$ mol.",
                working: "\\frac{7.3}{36.5}=0.2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.20$ mol",
          },
        },
        {
          id: "cial-c-u1-mc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many molecules are present in $3.2$ g of $SO_2$ ($A_r$: S=32, O=16)?",
          response: {
            type: "numeric",
            parts: [
              { label: "n", answer: 0.05 },
              { label: "N", answer: 30100000000000000000000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles then particles",
                statement: "$n=\\frac{m}{M}$; $N=n \\times 6.02 \\times 10^{23}$.",
              },
            ],
            steps: [
              {
                reasoning: "$M(SO_2)=32+2(16)=64$ g/mol, so $n=\\frac{3.2}{64}=0.050$ mol.",
                working: "\\frac{3.2}{64}=0.05",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$N = 0.050 \\times 6.02 \\times 10^{23}$.",
                working: "0.05 \\times 6.02 \\times 10^{23}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$N = 3.01 \\times 10^{22}$ molecules.",
                working: "3.01 \\times 10^{22}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3.01 \\times 10^{22}$ molecules",
            commonErrors: ["Using $A_r(S)=32$ instead of $M_r(SO_2)=64$."],
          },
        },
        {
          id: "cial-c-u1-mc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2Na + Cl_2 \\to 2NaCl$, what mass of $NaCl$ is formed from $4.6$ g of sodium? ($A_r$: Na=23, Cl=35.5)",
          response: {
            type: "numeric",
            parts: [
              { label: "nNa", answer: 0.2 },
              { label: "m", answer: 11.7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Mole ratio from equation",
                statement: "Coefficients give mole ratios: $n(Na):n(NaCl)=1:1$.",
              },
            ],
            steps: [
              {
                reasoning: "$n(Na)=\\frac{4.6}{23}=0.20$ mol.",
                working: "\\frac{4.6}{23}=0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio $Na:NaCl=2:2=1:1$, so $n(NaCl)=0.20$ mol.",
                working: "n(NaCl)=0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$M(NaCl)=23+35.5=58.5$ g/mol; mass $=0.20 \\times 58.5$.",
                working: "0.2 \\times 58.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass $=11.7$ g.",
                working: "11.7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$11.7$ g",
          },
        },
        {
          id: "cial-c-u1-mc-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why one mole of $MgCl_2$ contains $1.81 \\times 10^{24}$ ions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ions per formula unit",
                statement: "$MgCl_2$ dissociates into $Mg^{2+} + 2Cl^-$: 3 ions per formula unit.",
              },
            ],
            steps: [
              {
                reasoning: "Each formula unit of $MgCl_2$ gives $1 + 2 = 3$ ions.",
                working: "1+2=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One mole contains $N_A = 6.02 \\times 10^{23}$ formula units.",
                working: "6.02 \\times 10^{23}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total ions $=3 \\times 6.02 \\times 10^{23} = 1.81 \\times 10^{24}$.",
                working: "3 \\times 6.02 \\times 10^{23} \\approx 1.81 \\times 10^{24}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3 ions per formula unit $\\times N_A$ $= 1.81 \\times 10^{24}$ ions",
          },
        },
        {
          id: "cial-c-u1-mc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student wants the mass of hydrogen produced when $6.5$ g of zinc reacts with excess hydrochloric acid: $Zn + 2HCl \\to ZnCl_2 + H_2$. Describe the full calculation and state the final answer. ($A_r$: Zn=65, H=1)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Stoichiometric calculation",
                statement: "Convert mass to moles, apply the equation ratio, convert back to mass.",
              },
            ],
            steps: [
              {
                reasoning: "$n(Zn)=\\frac{6.5}{65}=0.10$ mol.",
                working: "\\frac{6.5}{65}=0.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratio $Zn:H_2=1:1$, so $n(H_2)=0.10$ mol.",
                working: "n(H_2)=0.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$M(H_2)=2$ g/mol; mass $=0.10 \\times 2$.",
                working: "0.1 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mass of $H_2 = 0.20$ g.",
                working: "0.20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.20$ g of $H_2$",
          },
        },
        {
          id: "cial-c-u1-mc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of the following is NOT equal to one mole?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.02 \\times 10^{23}$ ions in one mole of $NaCl$" },
              { id: "b", text: "$24$ dm$^3$ of $CO_2$ gas at r.t.p." },
              { id: "c", text: "$18$ g of $H_2O$" },
              { id: "d", text: "$6.02 \\times 10^{23}$ molecules of $H_2O$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "One mole",
                statement: "1 mol $=$ $M_r$ grams $=$ $N_A$ particles $=$ $24$ dm$^3$ gas at r.t.p.",
              },
            ],
            steps: [
              {
                reasoning: "1 mol $NaCl$ contains $2N_A = 1.20 \\times 10^{24}$ ions, not $N_A$.",
                working: "2 \\times 6.02 \\times 10^{23}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $6.02 \\times 10^{23}$ ions in one mole of $NaCl$",
            commonErrors: ["Counting formula units instead of ions for ionic compounds."],
          },
        },
        {
          id: "cial-c-u1-mc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mole calculations.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the number of moles in $8.8$ g of $CO_2$ ($A_r$: C=12, O=16).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the number of $CO_2$ molecules in this sample.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "For $N_2 + 3H_2 \\to 2NH_3$, what mass of $NH_3$ forms from $6.0$ g of $H_2$? ($A_r$: N=14, H=1)",
              marks: 3,
            },
            {
              label: "d",
              prompt: "What is the percentage by mass of nitrogen in $NH_3$?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mole conversions",
                statement: "$n=\\frac{m}{M}$, $N=nN_A$, equation coefficients give mole ratios.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$M(CO_2)=12+32=44$ g/mol.",
                working: "12+32=44",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$n=\\frac{8.8}{44}=0.20$ mol.",
                working: "\\frac{8.8}{44}=0.2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$N=0.20 \\times 6.02 \\times 10^{23}$.",
                working: "0.2 \\times 6.02 \\times 10^{23}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$N=1.20 \\times 10^{23}$ molecules.",
                working: "1.20 \\times 10^{23}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$n(H_2)=\\frac{6}{2}=3.0$ mol; ratio $H_2:NH_3=3:2$, so $n(NH_3)=2.0$ mol.",
                working: "n(H_2)=3,\\ n(NH_3)=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$M(NH_3)=14+3=17$ g/mol; mass $=2.0 \\times 17$.",
                working: "2 \\times 17=34",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Mass $=34$ g.",
                working: "34",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$\\%N=\\frac{14}{17} \\times 100$.",
                working: "\\frac{14}{17} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$=82.4\\%$.",
                working: "82.4\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.20 mol (b) 1.20e23 molecules (c) 34 g (d) 82.4%",
          },
        },
      ],
    },
    {
      id: "cial-c-u1-formulae",
      title: "Empirical and molecular formulae",
      skill: "Derive empirical formulae from composition and molecular formulae from $M_r$.",
      lesson: {
        sections: [
          {
            heading: "Empirical formula method",
            body: "From percentage or mass composition: divide each element's mass by its $A_r$ to get moles, divide all by the smallest, and scale to whole numbers. E.g. 40% C, 6.7% H, 53.3% O $\\to$ C: $40/12=3.33$, H: $6.7/1=6.7$, O: $53.3/16=3.33$; ratio $1:2:1$ $\\to$ $CH_2O$.",
          },
          {
            heading: "Molecular formula",
            body: "Molecular formula $=$ empirical formula $\\times n$, where $n = \\frac{M_r(\\text{molecular})}{M_r(\\text{empirical})}$. For $CH_2O$ ($M_r=30$) with molecular $M_r=180$: $n=6$, formula $C_6H_{12}O_6$.",
          },
          {
            heading: "Percentage composition",
            body: "Reverse direction: $\\%$ element $= \\frac{\\text{mass of element in formula}}{M_r} \\times 100$. Useful for comparing hydrates and checking formulae.",
          },
        ],
        keyFormulas: [
          {
            name: "Empirical formula",
            statement:
              "Moles of each element $\\to$ divide by smallest $\\to$ whole-number ratio.",
          },
          {
            name: "Molecular formula",
            statement:
              "$n = \\dfrac{M_r(\\text{molecular})}{M_r(\\text{empirical})}$.",
          },
        ],
        workedExample: {
          problem:
            "A compound is 85.7% C and 14.3% H by mass, with $M_r = 56$. Find the molecular formula.",
          solution:
            "C: $85.7/12=7.14$; H: $14.3/1=14.3$. Ratio $1:2$ $\\to$ empirical $CH_2$ ($M_r=14$). $n=56/14=4$, so molecular formula $C_4H_8$.",
        },
      },
      questions: [
        {
          id: "cial-c-u1-ef-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the empirical formula of $C_2H_6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CH_2$" },
              { id: "b", text: "$C_2H_6$" },
              { id: "c", text: "$C_3H_9$" },
              { id: "d", text: "$CH_3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical formula",
                statement: "Simplest whole-number ratio of atoms.",
              },
            ],
            steps: [
              {
                reasoning: "$C_2H_6$ simplifies by dividing by 2 to $CH_3$.",
                working: "C_2H_6 \\div 2 = CH_3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$CH_3$",
          },
        },
        {
          id: "cial-c-u1-ef-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A compound contains 24.0 g of carbon and 6.0 g of hydrogen. Find its empirical formula.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Empirical formula method",
                statement: "Moles $=$ mass/$A_r$; divide by smallest moles.",
              },
            ],
            steps: [
              {
                reasoning: "C: $24/12=2$ mol; H: $6/1=6$ mol.",
                working: "\\frac{24}{12}=2,\\ \\frac{6}{1}=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by smallest (2): C $=1$, H $=3$.",
                working: "1 : 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Empirical formula $CH_3$.",
                working: "CH_3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$CH_3$",
            commonErrors: ["Dividing masses by $A_r$ but not by the smallest mole value."],
          },
        },
        {
          id: "cial-c-u1-ef-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The empirical formula of a compound is $CH_2O$ and its $M_r$ is 90. Find the molecular formula.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molecular = empirical × n",
                statement:
                  "$n=\\frac{M_r(\\text{molecular})}{M_r(\\text{empirical})}$.",
              },
            ],
            steps: [
              {
                reasoning: "$M_r(CH_2O)=12+2+16=30$.",
                working: "12+2+16=30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n = \\frac{90}{30} = 3$.",
                working: "\\frac{90}{30}=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Molecular formula $= 3 \\times CH_2O$.",
                working: "C_3H_6O_3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: $C_3H_6O_3$.",
                working: "C_3H_6O_3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$C_3H_6O_3$",
            commonErrors: ["Forgetting to multiply ALL subscripts by $n$."],
          },
        },
        {
          id: "cial-c-u1-ef-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Formulae from composition.",
          parts: [
            {
              label: "a",
              prompt: "A compound is 40.0% C, 6.7% H, 53.3% O by mass. Find the empirical formula.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Its $M_r$ is 180. Find the molecular formula.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the percentage of oxygen by mass in the molecular compound.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Empirical then molecular",
                statement:
                  "Mole ratio first; scale by $n=M_r(\\text{mol})/M_r(\\text{emp})$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Assume 100 g: C $40/12=3.33$, H $6.7/1=6.7$, O $53.3/16=3.33$.",
                working: "3.33 : 6.7 : 3.33",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide by 3.33: $1 : 2 : 1$.",
                working: "1:2:1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Empirical formula $CH_2O$ ($M_r=30$).",
                working: "CH_2O,\\ M_r=30",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Stated correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$n=180/30=6$.",
                working: "\\frac{180}{30}=6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Molecular formula $C_6H_{12}O_6$.",
                working: "C_6H_{12}O_6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Mass of O in $C_6H_{12}O_6$ $=6 \\times 16=96$.",
                working: "6 \\times 16=96",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\%O = \\frac{96}{180} \\times 100$.",
                working: "\\frac{96}{180} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 53.3\\%$.",
                working: "53.3\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) CH2O (b) C6H12O6 (c) 53.3%",
          },
        },
        {
          id: "cial-c-u1-ef-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the empirical formula of $C_6H_{12}O_6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C_6H_{12}O_6$" },
              { id: "b", text: "$C_3H_6O_3$" },
              { id: "c", text: "$CH_2O$" },
              { id: "d", text: "$CHO$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical formula",
                statement: "Simplest whole-number ratio of atoms.",
              },
            ],
            steps: [
              {
                reasoning: "Divide all subscripts by 6: $C_6H_{12}O_6 \\to CH_2O$.",
                working: "C_6H_{12}O_6 \\div 6 = CH_2O",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $CH_2O$",
          },
        },
        {
          id: "cial-c-u1-ef-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the percentage by mass of carbon in ethane, $C_2H_6$ ($M_r = 30$).",
          response: { type: "numeric", parts: [{ label: "%C", answer: 80 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage composition",
                statement: "$\\%\\text{element} = \\frac{\\text{mass of element}}{M_r} \\times 100$.",
              },
            ],
            steps: [
              {
                reasoning: "Mass of C per mole $= 2 \\times 12 = 24$ g.",
                working: "2 \\times 12 = 24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\%C = \\frac{24}{30} \\times 100 = 80\\%$.",
                working: "\\frac{24}{30} \\times 100 = 80",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$80\\%$",
          },
        },
        {
          id: "cial-c-u1-ef-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "A compound contains $13.2$ g of carbon, $2.2$ g of hydrogen and $8.8$ g of oxygen. Determine its empirical formula. ($A_r$: C=12, H=1, O=16)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Empirical formula method",
                statement: "Moles $=$ mass/$A_r$; divide by smallest moles.",
              },
            ],
            steps: [
              {
                reasoning: "C: $13.2/12=1.1$; H: $2.2/1=2.2$; O: $8.8/16=0.55$ mol.",
                working: "1.1 : 2.2 : 0.55",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by smallest (0.55): $2 : 4 : 1$.",
                working: "2:4:1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Empirical formula is $C_2H_4O$.",
                working: "C_2H_4O",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$C_2H_4O$",
            commonErrors: ["Using $A_r$ of O as 8 instead of 16, doubling the oxygen count."],
          },
        },
        {
          id: "cial-c-u1-ef-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of compounds have the same empirical formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CH_4$ and $C_2H_6$" },
              { id: "b", text: "$CH_2O$ and $C_6H_{12}O_6$" },
              { id: "c", text: "$NO_2$ and $N_2O$" },
              { id: "d", text: "$KCl$ and $NaCl$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical formula",
                statement: "Same atom ratio gives the same empirical formula.",
              },
            ],
            steps: [
              {
                reasoning: "$C_6H_{12}O_6$ simplifies to $CH_2O$; the others have different ratios.",
                working: "a",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $CH_2O$ and $C_6H_{12}O_6$",
          },
        },
        {
          id: "cial-c-u1-ef-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A compound has empirical formula $CH_2$ and $M_r = 70$. What is its molecular formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C_5H_{10}$" },
              { id: "b", text: "$C_7H_{14}$" },
              { id: "c", text: "$C_4H_8$" },
              { id: "d", text: "$C_6H_{12}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molecular = empirical × n",
                statement: "$n = \\frac{M_r(\\text{molecular})}{M_r(\\text{empirical})} = \\frac{70}{14} = 5$.",
              },
            ],
            steps: [
              {
                reasoning: "$M_r(CH_2)=14$, so $n=70/14=5$ and the formula is $5 \\times CH_2 = C_5H_{10}$.",
                working: "n=5 \\Rightarrow C_5H_{10}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $C_5H_{10}$",
          },
        },
        {
          id: "cial-c-u1-ef-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $10.0$ g sample of a compound contains $6.00$ g of carbon and $4.00$ g of hydrogen. Calculate the amount in moles of carbon and of hydrogen in the sample. ($A_r$: C=12, H=1)",
          response: {
            type: "numeric",
            parts: [
              { label: "n(C)", answer: 0.5 },
              { label: "n(H)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles from mass",
                statement: "$n = \\frac{m}{A_r}$ for each element.",
              },
            ],
            steps: [
              {
                reasoning: "$n(C) = \\frac{6.00}{12} = 0.50$ mol.",
                working: "\\frac{6.00}{12}=0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n(H) = \\frac{4.00}{1} = 4.0$ mol.",
                working: "\\frac{4.00}{1}=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$n(C)=0.50$ mol, $n(H)=4.0$ mol",
          },
        },
        {
          id: "cial-c-u1-ef-q11",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A compound is $40.0\\%$ C, $6.7\\%$ H and $53.3\\%$ O by mass, with $M_r = 60$. ($A_r$: C=12, H=1, O=16)",
          parts: [
            { label: "a", prompt: "Determine the empirical formula.", marks: 3 },
            { label: "b", prompt: "Determine the molecular formula.", marks: 2 },
            { label: "c", prompt: "Calculate the percentage by mass of oxygen in this molecular compound.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Empirical then molecular",
                statement:
                  "Mole ratio first; scale by $n=M_r(\\text{mol})/M_r(\\text{emp})$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Assume 100 g: C $40/12=3.33$, H $6.7/1=6.7$, O $53.3/16=3.33$.",
                working: "3.33 : 6.7 : 3.33",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide by 3.33: $1:2:1$, giving empirical formula $CH_2O$.",
                working: "1:2:1 \\Rightarrow CH_2O",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Empirical formula stated correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$M_r(CH_2O)=30$, so $n=60/30=2$.",
                working: "\\frac{60}{30}=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Molecular formula $C_2H_4O_2$.",
                working: "C_2H_4O_2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Mass of O in one mole $= 2 \\times 16 = 32$ g.",
                working: "2 \\times 16=32",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\%O = \\frac{32}{60} \\times 100 = 53.3\\%$.",
                working: "\\frac{32}{60} \\times 100 = 53.3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) CH2O (b) C2H4O2 (c) 53.3%",
          },
        },
        {
          id: "cial-c-u1-ef-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the empirical formula of $N_2O_4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$N_2O_4$" },
              { id: "b", text: "$N_2O$" },
              { id: "c", text: "$NO$" },
              { id: "d", text: "$NO_2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical formula",
                statement: "Simplest whole-number ratio of atoms.",
              },
            ],
            steps: [
              {
                reasoning: "Divide subscripts by 2: $N_2O_4 \\to NO_2$.",
                working: "N_2O_4 \\div 2 = NO_2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $NO_2$",
          },
        },
        {
          id: "cial-c-u1-ef-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the percentage by mass of oxygen in $CO_2$? ($A_r$: C=12, O=16)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$27.3\\%$" },
              { id: "b", text: "$32.0\\%$" },
              { id: "c", text: "$72.7\\%$" },
              { id: "d", text: "$57.1\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage composition",
                statement: "$\\%O = \\frac{32}{44} \\times 100$ with $M_r(CO_2)=44$.",
              },
            ],
            steps: [
              {
                reasoning: "$M_r(CO_2)=12+32=44$; $\\%O=\\frac{32}{44}\\times 100=72.7\\%$.",
                working: "\\frac{32}{44} \\times 100 = 72.7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $72.7\\%$",
            commonErrors: ["Using $M_r=28$ (CO) instead of 44."],
          },
        },
        {
          id: "cial-c-u1-ef-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hydrocarbon contains $85.7\\%$ carbon and $14.3\\%$ hydrogen by mass and has $M_r = 56$. ($A_r$: C=12, H=1)",
          response: {
            type: "numeric",
            parts: [
              { label: "Mr_emp", answer: 14 },
              { label: "n", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Empirical then molecular",
                statement:
                  "Mole ratio $\\to$ empirical formula; $n = \\frac{M_r(\\text{mol})}{M_r(\\text{emp})}$.",
              },
            ],
            steps: [
              {
                reasoning: "Mole ratio C:H $= \\frac{85.7}{12} : \\frac{14.3}{1} \\approx 7.14 : 14.3 = 1:2$, so empirical formula $CH_2$.",
                working: "1:2 \\Rightarrow CH_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$M_r(CH_2) = 12 + 2 = 14$.",
                working: "12+2=14",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n = \\frac{56}{14} = 4$.",
                working: "\\frac{56}{14}=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Molecular formula $C_4H_8$; consistent with a hydrocarbon.",
                working: "C_4H_8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$M_r(\\text{emp})=14$, $n=4$; molecular formula $C_4H_8$",
          },
        },
        {
          id: "cial-c-u1-ef-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A compound of nitrogen and oxygen contains $30.4\\%$ N and $69.6\\%$ O by mass. Find its empirical formula. ($A_r$: N=14, O=16)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Empirical formula method",
                statement: "Moles $=$ mass/$A_r$; divide by smallest moles.",
              },
            ],
            steps: [
              {
                reasoning: "Assume 100 g: N $30.4/14=2.17$, O $69.6/16=4.35$ mol.",
                working: "2.17 : 4.35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by 2.17: ratio $1 : 2$.",
                working: "1:2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Empirical formula $NO_2$.",
                working: "NO_2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$NO_2$",
            commonErrors: ["Rounding 2.17 and 4.35 to whole numbers before dividing."],
          },
        },
        {
          id: "cial-c-u1-ef-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two different compounds have exactly the same percentage composition by mass. What must they have in common?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same physical properties" },
              { id: "b", text: "The same molar mass" },
              { id: "c", text: "The same empirical formula" },
              { id: "d", text: "The same molecular formula" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical formula",
                statement: "Percentage composition fixes only the simplest atom ratio.",
              },
            ],
            steps: [
              {
                reasoning: "Same % composition means the same mole ratio of elements, i.e. the same empirical formula; molecular formulae may differ by a multiplier.",
                working: "b",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** The same empirical formula",
            commonErrors: ["Assuming identical % composition implies identical molecular formula."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u1-mole-formulae-notes",
      title: "The mole and chemical formulae — revision notes",
      summary:
        "Mole conversions, empirical/molecular formulae and percentage composition.",
      sections: [
        {
          heading: "Core conversions",
          body: "$n=\\frac{m}{M}$; $N=n \\times 6.02\\times10^{23}$. Use $M_r$ (sum of $A_r$) for compounds, $A_r$ for elements in moles — but remember $H_2$, $O_2$, $N_2$ are diatomic so $M_r=2A_r$. Ionic compounds: count ions per formula unit.",
        },
        {
          heading: "Formulae",
          body: "Empirical: mass/$A_r$ $\\to$ mole ratio $\\to$ smallest whole numbers. Molecular: empirical $\\times n$ where $n=\\frac{M_r(\\text{mol})}{M_r(\\text{emp})}$. Percentage: $\\frac{\\text{element mass in formula}}{M_r}\\times100$.",
        },
        {
          heading: "Exam checklist",
          body: "Show the mole calculation line — method marks depend on it. For hydrates, include water of crystallisation in $M_r$. Round only at the end; keep 3–4 s.f. in intermediates.",
        },
      ],
    },
  ],
};
