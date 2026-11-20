import type { Lesson } from "../../../types.ts";

export const lesson411: Lesson = {
  id: "cial-c-u4-lesson-4-1",
  code: "4-1",
  title: "Enthalpy changes",
  goal: "I CAN define enthalpy changes, use Hess's law and calculate enthalpies from calorimetry and bond enthalpies.",
  standards: ["9701 4.1: enthalpy changes"],
  vocabulary: [
    {
      term: "Enthalpy change",
      definition: "Heat energy change at constant pressure, $\\Delta H$.",
    },
    {
      term: "Exothermic",
      definition: "$\\Delta H < 0$ — releases heat to surroundings.",
    },
    {
      term: "Endothermic",
      definition: "$\\Delta H > 0$ — absorbs heat from surroundings.",
    },
    {
      term: "Hess's law",
      definition:
        "Total enthalpy change is independent of the route taken.",
    },
    {
      term: "Bond enthalpy",
      definition: "Energy to break one mole of a bond (endothermic).",
    },
    {
      term: "Specific heat capacity",
      definition:
        "Energy needed to raise 1 g of a substance by 1 °C ($4.18$ J g$^{-1}$ °C$^{-1}$ for water).",
    },
  ],
  concepts: [
    {
      id: "cial-c-u4-enthalpy-basics",
      title: "Enthalpy definitions and calorimetry",
      skill: "Calculate enthalpy changes from temperature data.",
      lesson: {
        sections: [
          {
            heading: "Enthalpy changes",
            body: "$\\Delta H$ = heat change at constant pressure. Exothermic $\\Delta H<0$ (products lower energy); endothermic $\\Delta H>0$. Key types: combustion, formation, neutralisation, solution, atomisation.",
          },
          {
            heading: "Calorimetry",
            body: "$q = mc\\Delta T$ where $m$ = mass (g), $c$ = specific heat capacity, $\\Delta T$ = temp change. For solutions use the mass of water. $\\Delta H = \\frac{q}{n}$ per mole of limiting reactant. Assume no heat loss to surroundings.",
          },
          {
            heading: "Sign conventions",
            body: "System loses heat $\\to$ surroundings gain $\\to$ exothermic ($\\Delta H<0$). Temperature rises $\\to$ exothermic. Temperature falls $\\to$ endothermic.",
          },
        ],
        keyFormulas: [
          {
            name: "Heat change",
            statement: "$q = mc\\Delta T$; $\\Delta H = \\frac{q}{n}$ mol$^{-1}$.",
          },
          {
            name: "Signs",
            statement: "Exothermic $\\Delta H<0$; endothermic $\\Delta H>0$.",
          },
        ],
        workedExample: {
          problem:
            "Burning $0.10$ mol of fuel raises $200$ g of water by $15$ °C. Calculate $\\Delta H_{combustion}$ ($c=4.18$ J g$^{-1}$°C$^{-1}$).",
          solution:
            "$q=200 \\times 4.18 \\times 15 = 12540$ J released. $\\Delta H = -\\frac{12540}{0.10} = -125.4$ kJ mol$^{-1}$ (exothermic).",
        },
      },
      questions: [
        {
          id: "cial-c-u4-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sign of $\\Delta H$ for an exothermic reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative" },
              { id: "b", text: "Positive" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Depends on temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exothermic",
                statement: "$\\Delta H < 0$ — heat released.",
              },
            ],
            steps: [
              {
                reasoning: "Exothermic reactions have negative $\\Delta H$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Negative",
          },
        },
        {
          id: "cial-c-u4-en-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $q$ when $100$ g of water ($c=4.18$) is heated from $20$ °C to $35$ °C.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "q = mcΔT",
                statement: "$q = 100 \\times 4.18 \\times 15$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta T = 35-20 = 15$ °C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$q = 100 \\times 4.18 \\times 15$.",
                working: "q = mc\\Delta T",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$q = 6270$ J $= 6.27$ kJ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6.27$ kJ",
          },
        },
        {
          id: "cial-c-u4-en-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Dissolving $0.020$ mol of salt in $100$ g water raises the temperature by $3.0$ °C. Calculate $\\Delta H_{solution}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$\\Delta H = -\\frac{mc\\Delta T}{n}$ (exothermic negative).",
              },
            ],
            steps: [
              {
                reasoning: "$q = 100 \\times 4.18 \\times 3.0 = 1254$ J released.",
                working: "100 \\times 4.18 \\times 3.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Temperature rose $\\to$ exothermic, $\\Delta H < 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = -\\frac{1254}{0.020} = -62700$ J.",
                working: "-\\frac{1254}{0.020}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -62.7$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-62.7$ kJ mol$^{-1}$",
            commonErrors: ["Forgetting the negative sign for exothermic."],
          },
        },
        {
          id: "cial-c-u4-en-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Enthalpy changes.",
          parts: [
            {
              label: "a",
              prompt: "Define exothermic and endothermic reactions in terms of $\\Delta H$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate $q$ for $50$ g water heated by $10$ °C ($c=4.18$).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "If this heat came from $0.010$ mol of reactant, find $\\Delta H$ and state its sign.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State two assumptions made in calorimetry calculations.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy",
                statement:
                  "Exo $\\Delta H<0$, endo $\\Delta H>0$; $q=mc\\Delta T$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Exothermic: $\\Delta H<0$, releases heat.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Endothermic: $\\Delta H>0$, absorbs heat.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$q = 50 \\times 4.18 \\times 10$.",
                working: "q=mc\\Delta T",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$=2090$ J $=2.09$ kJ.",
                working: "2090",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\Delta H = \\frac{2090}{0.010}=209000$ J with negative sign (exothermic).",
                working: "-209",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= -209$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Sign stated as exothermic/negative.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "No heat loss to surroundings.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "All heat absorbed by solution only.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) exo<0 endo>0 (b) 2.09 kJ (c) -209 kJ/mol (d) no heat loss, solution only",
          },
        },
      ],
    },
    {
      id: "cial-c-u4-hess-bonds",
      title: "Hess's law and bond enthalpies",
      skill: "Apply Hess's law and bond enthalpy cycles to find enthalpy changes.",
      lesson: {
        sections: [
          {
            heading: "Hess's law",
            body: "Enthalpy is a state function — the route doesn't matter. Build a cycle: $\\Delta H_1 = \\Delta H_2 + \\Delta H_3$ etc. Rearrange to find unknown enthalpy. Always check directions and signs.",
          },
          {
            heading: "Bond enthalpies",
            body: "$\\Delta H = \\sum(\\text{bonds broken}) - \\sum(\\text{bonds formed})$. Breaking bonds costs energy (positive), forming releases (negative). Mean bond enthalpies are averages — actual values differ slightly.",
          },
          {
            heading: "Born–Haber style",
            body: "For ionic compounds: atomisation + ionisation + electron affinity + lattice enthalpy cycle gives $\\Delta H_f$. Lattice enthalpy is the energy released when gaseous ions form the solid.",
          },
        ],
        keyFormulas: [
          {
            name: "Hess's law",
            statement: "Total $\\Delta H$ independent of route.",
          },
          {
            name: "Bond enthalpies",
            statement: "$\\Delta H = \\sum BE_{broken} - \\sum BE_{formed}$",
          },
        ],
        workedExample: {
          problem: "For $H_2 + Cl_2 \\to 2HCl$, $BE(H-H)=436$, $BE(Cl-Cl)=243$, $BE(H-Cl)=432$ kJ/mol. Find $\\Delta H$.",
          solution:
            "Broken: $436+243=679$; formed: $2 \\times 432=864$. $\\Delta H = 679-864 = -185$ kJ/mol.",
        },
      },
      questions: [
        {
          id: "cial-c-u4-hb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Hess's law state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enthalpy change is independent of route" },
              { id: "b", text: "All reactions are exothermic" },
              { id: "c", text: "Bond energies are constant" },
              { id: "d", text: "Temperature never changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hess's law",
                statement: "State function — route independent.",
              },
            ],
            steps: [
              {
                reasoning: "Hess's law: $\\Delta H$ depends only on initial/final states.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Route independent",
          },
        },
        {
          id: "cial-c-u4-hb-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $CH_4 + 2O_2 \\to CO_2 + 2H_2O$, given $BE(C-H)=413$, $BE(O=O)=498$, $BE(C=O)=805$, $BE(O-H)=463$ kJ/mol, calculate $\\Delta H$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy cycle",
                statement:
                  "$\\Delta H = \\sum BE_{broken} - \\sum BE_{formed}$.",
              },
            ],
            steps: [
              {
                reasoning: "Broken: $4(413) + 2(498) = 1652 + 996 = 2648$.",
                working: "4(413)+2(498)=2648",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Formed: $2(805) + 4(463) = 1610 + 1852 = 3462$.",
                working: "2(805)+4(463)=3462",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = 2648 - 3462 = -814$ kJ/mol.",
                working: "2648-3462=-814",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-814$ kJ/mol",
            commonErrors: ["Counting wrong number of bonds — check the equation."],
          },
        },
        {
          id: "cial-c-u4-hb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Given: $C(s)+O_2(g)\\to CO_2(g)$ $\\Delta H=-394$; $CO(g)+\\frac12O_2\\to CO_2$ $\\Delta H=-283$. Find $\\Delta H$ for $C(s)+\\frac12O_2\\to CO(g)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hess's law",
                statement: "Construct cycle; reverse/subtract steps as needed.",
              },
            ],
            steps: [
              {
                reasoning: "Target = first reaction minus second: $C+O_2-CO-\\frac12O_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = -394 - (-283) = -111$.",
                working: "-394-(-283)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $CO + \\frac12O_2 \\to CO_2$ gives $-283$; adding $-111$ gives $-394$. Consistent.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = -111$ kJ/mol.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-111$ kJ/mol",
            commonErrors: ["Adding instead of subtracting — check the cycle direction."],
          },
        },
        {
          id: "cial-c-u4-hb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Hess's law and bond enthalpies.",
          parts: [
            {
              label: "a",
              prompt: "State Hess's law.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "For $H_2+Cl_2\\to2HCl$ with $BE(H-H)=436$, $BE(Cl-Cl)=243$, $BE(H-Cl)=432$, find $\\Delta H$.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Explain why bond enthalpy calculations give approximate values.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What is meant by 'mean bond enthalpy'?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hess and bond enthalpies",
                statement: "$\\Delta H$ route-independent; bond enthalpies are averages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Enthalpy change independent of reaction path.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Broken: $436+243=679$ kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Formed: $2 \\times 432 = 864$ kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\Delta H = 679-864$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= -185$ kJ/mol.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Bond enthalpies are mean values — actual bonds differ by molecule/environment.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "So calculated $\\Delta H$ is approximate.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Average energy to break a bond across many molecules.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Varies slightly with molecular environment.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) route-independent (b) -185 (c) mean values (d) average BE",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u4-enthalpy-notes",
      title: "Enthalpy changes — revision notes",
      summary:
        "Calorimetry, Hess's law and bond enthalpy calculations.",
      sections: [
        {
          heading: "Calorimetry",
          body: "$q=mc\\Delta T$; $\\Delta H=\\frac{q}{n}$ per mole. Temperature up $\\to$ exothermic ($\\Delta H<0$); down $\\to$ endothermic. Assume no heat loss and all heat into the solution.",
        },
        {
          heading: "Hess and bonds",
          body: "Hess's law: $\\Delta H$ is a state function — build cycles, reverse/subtract as needed. Bond enthalpies: $\\Delta H=\\sum BE_{broken}-\\sum BE_{formed}$; they're mean values so answers are approximate.",
        },
        {
          heading: "Exam checklist",
          body: "Always convert J to kJ and divide by moles. Check signs carefully — exothermic is negative. For bond enthalpies count every bond in the balanced equation.",
        },
      ],
    },
  ],
};
