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
              { id: "a", text: "Positive" },
              { id: "b", text: "Zero" },
              { id: "c", text: "Depends on temperature" },
              { id: "d", text: "Negative" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-c-u4-en-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During an exothermic reaction carried out in solution, what happens to the temperature of the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It first rises then falls" },
              { id: "b", text: "It rises" },
              { id: "c", text: "It falls" },
              { id: "d", text: "It stays the same" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exothermic",
                statement: "$\\Delta H < 0$ — heat released to surroundings.",
              },
            ],
            steps: [
              {
                reasoning: "Heat released warms the solution, so temperature rises.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It rises",
          },
        },
        {
          id: "cial-c-u4-en-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following processes is endothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation of water vapour" },
              { id: "b", text: "Thermal decomposition of calcium carbonate" },
              { id: "c", text: "Complete combustion of methane" },
              { id: "d", text: "Neutralisation of an acid by an alkali" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endothermic",
                statement: "$\\Delta H > 0$ — absorbs heat.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposing $CaCO_3$ requires heat input; the others release heat.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thermal decomposition of calcium carbonate",
          },
        },
        {
          id: "cial-c-u4-en-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the heat energy $q$ when $250$ g of water ($c=4.18$ J g$^{-1}$ °C$^{-1}$) is heated from $18$ °C to $26$ °C.",
          response: {
            type: "numeric",
            parts: [{ label: "q", answer: 8.36, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "q = mcΔT",
                statement: "$q = mc\\Delta T$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta T = 26-18 = 8$ °C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$q = 250 \\times 4.18 \\times 8 = 8360$ J.",
                working: "250 \\times 4.18 \\times 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$q = 8.36$ kJ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8.36$ kJ",
          },
        },
        {
          id: "cial-c-u4-en-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Dissolving $0.050$ mol of a salt in $150$ g of water raises the temperature by $4.2$ °C. Calculate $\\Delta H_{solution}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q = mc\\Delta T$; $\\Delta H = -\\frac{q}{n}$ for exothermic.",
              },
            ],
            steps: [
              {
                reasoning: "$q = 150 \\times 4.18 \\times 4.2 = 2633$ J released.",
                working: "150 \\times 4.18 \\times 4.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Temperature rose $\\to$ exothermic, so $\\Delta H < 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = -\\frac{2633}{0.050} = -52660$ J.",
                working: "-\\frac{2633}{0.050}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -52.7$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-52.7$ kJ mol$^{-1}$",
            commonErrors: ["Forgetting the negative sign for exothermic."],
          },
        },
        {
          id: "cial-c-u4-en-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The temperature of the surroundings rises during a chemical reaction. What can be concluded about $\\Delta H$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is exothermic, $\\Delta H < 0$" },
              { id: "b", text: "No conclusion can be drawn" },
              { id: "c", text: "It is endothermic, $\\Delta H > 0$" },
              { id: "d", text: "$\\Delta H = 0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sign conventions",
                statement: "Surroundings warm $\\to$ system loses heat $\\to$ exothermic.",
              },
            ],
            steps: [
              {
                reasoning: "Heat transferred to surroundings means the reaction released energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Exothermic, $\\Delta H<0$",
          },
        },
        {
          id: "cial-c-u4-en-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Burning $0.20$ mol of ethanol raises the temperature of $100$ g of water by $12$ °C. Calculate $\\Delta H_{combustion}$ ($c=4.18$).",
          response: {
            type: "numeric",
            parts: [{ label: "dH", answer: -25.1, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$\\Delta H = -\\frac{mc\\Delta T}{n}$ for exothermic combustion.",
              },
            ],
            steps: [
              {
                reasoning: "$q = 100 \\times 4.18 \\times 12 = 5016$ J released.",
                working: "100 \\times 4.18 \\times 12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = -\\frac{5016}{0.20} = -25080$ J mol$^{-1}$.",
                working: "-\\frac{5016}{0.20}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -25.1$ kJ mol$^{-1}$ (negative = exothermic).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-25.1$ kJ mol$^{-1}$",
            commonErrors: ["Forgetting the negative sign for exothermic."],
          },
        },
        {
          id: "cial-c-u4-en-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Enthalpy of combustion.",
          parts: [
            {
              label: "a",
              prompt: "Define enthalpy of combustion.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Burning $0.025$ mol of fuel raises $80$ g of water by $9.5$ °C. Calculate $\\Delta H_{combustion}$ ($c=4.18$).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "State the sign of $\\Delta H$ and explain why.",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Give two reasons why experimental enthalpy values are often less exothermic than expected.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy of combustion",
                statement: "Heat released when 1 mol burns completely in oxygen.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Enthalpy change when one mole of substance burns completely in oxygen.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Products are $CO_2$ and $H_2O$ (and $SO_2$ for sulfur compounds).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$q = 80 \\times 4.18 \\times 9.5 = 3177$ J released.",
                working: "80 \\times 4.18 \\times 9.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\Delta H = -\\frac{3177}{0.025} = -127000$ J.",
                working: "-\\frac{3177}{0.025}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= -127$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Negative — combustion is exothermic, heat released.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Some heat lost to surroundings/container.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Not all fuel burns / incomplete combustion.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Water produced may remain as vapour not liquid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) 1 mol burns in O2 (b) -127 kJ/mol (c) negative, exothermic (d) heat loss, incomplete combustion, water vapour",
          },
        },
        {
          id: "cial-c-u4-en-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the units of specific heat capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "J mol$^{-1}$" },
              { id: "b", text: "J g$^{-1}$ °C$^{-1}$" },
              { id: "c", text: "kJ mol$^{-1}$ °C$^{-1}$" },
              { id: "d", text: "J g$^{-1}$ s$^{-1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specific heat capacity",
                statement: "Energy to raise 1 g by 1 °C.",
              },
            ],
            steps: [
              {
                reasoning: "Per gram per degree: J g$^{-1}$ °C$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "J g$^{-1}$ °C$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-en-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the temperature change when $120$ g of water ($c=4.18$) absorbs $3010$ J of heat.",
          response: {
            type: "numeric",
            parts: [{ label: "dT", answer: 6.0, unit: "°C" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "q = mcΔT",
                statement: "$\\Delta T = \\frac{q}{mc}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta T = \\frac{3010}{120 \\times 4.18} = \\frac{3010}{501.6}$.",
                working: "\\frac{3010}{501.6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta T = 6.0$ °C.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6.0$ °C",
          },
        },
        {
          id: "cial-c-u4-en-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Equal volumes of $1.00$ mol dm$^{-3}$ HCl and $1.00$ mol dm$^{-3}$ NaOH ($50.0$ cm$^3$ each) are mixed and the temperature rises by $6.8$ °C. Assuming the mass of solution is $100$ g and $c=4.18$, calculate $\\Delta H_{neutralisation}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Neutralisation calorimetry",
                statement: "$\\Delta H = -\\frac{mc\\Delta T}{n}$; $n$ = moles of $H^+$ = moles of $OH^- = 0.050$ mol.",
              },
            ],
            steps: [
              {
                reasoning: "$q = 100 \\times 4.18 \\times 6.8 = 2842$ J released.",
                working: "100 \\times 4.18 \\times 6.8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moles of acid = $0.050 \\times 1.00 = 0.050$ mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = -\\frac{2842}{0.050} = -56800$ J.",
                working: "-\\frac{2842}{0.050}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -56.8$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-56.8$ kJ mol$^{-1}$",
            commonErrors: ["Dividing by total moles of both solutions instead of limiting reactant."],
          },
        },
        {
          id: "cial-c-u4-en-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dissolving ammonium nitrate in water causes the temperature to fall. The process is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always exothermic for salts" },
              { id: "b", text: "Neither — temperature is unrelated" },
              { id: "c", text: "Endothermic" },
              { id: "d", text: "Exothermic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sign conventions",
                statement: "Temperature falls $\\to$ endothermic, $\\Delta H > 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Solution cools, so heat is absorbed — endothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Endothermic",
          },
        },
        {
          id: "cial-c-u4-en-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Calorimetry calculation.",
          parts: [
            {
              label: "a",
              prompt: "State the sign of $\\Delta H$ for exothermic and endothermic changes.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate $q$ when $300$ g of water is heated from $14$ °C to $27$ °C ($c=4.18$).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "If this heat came from $0.15$ mol of reactant, find $\\Delta H$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State one assumption made in this calculation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q = mc\\Delta T$; $\\Delta H = \\frac{q}{n}$ with sign.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Exothermic: $\\Delta H < 0$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Endothermic: $\\Delta H > 0$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\Delta T = 27-14 = 13$ °C.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$q = 300 \\times 4.18 \\times 13 = 16302$ J.",
                working: "300 \\times 4.18 \\times 13",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$q = 16.3$ kJ.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Temperature rose $\\to$ exothermic: $\\Delta H = -\\frac{16302}{0.15}$.",
                working: "-\\frac{16302}{0.15}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= -109000$ J $= -109$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "No heat loss to surroundings / all heat absorbed by water.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Specific heat capacity of solution $=$ that of water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) exo<0 endo>0 (b) 16.3 kJ (c) -109 kJ/mol (d) no heat loss, c of solution = water",
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
              { id: "a", text: "Bond energies are constant" },
              { id: "b", text: "Enthalpy change is independent of route" },
              { id: "c", text: "Temperature never changes" },
              { id: "d", text: "All reactions are exothermic" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-c-u4-hb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression gives the enthalpy change of a reaction using bond enthalpies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sum BE_{formed} - \\sum BE_{broken}$" },
              { id: "b", text: "$\\sum BE_{broken} - \\sum BE_{formed}$" },
              { id: "c", text: "$\\sum BE_{broken} + \\sum BE_{formed}$" },
              { id: "d", text: "$\\sum BE_{formed}$ only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy cycle",
                statement: "Breaking costs energy; forming releases it.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta H = \\sum BE_{broken} - \\sum BE_{formed}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sum BE_{broken} - \\sum BE_{formed}$",
          },
        },
        {
          id: "cial-c-u4-hb-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $H_2 + I_2 \\to 2HI$, given $BE(H-H)=436$, $BE(I-I)=151$, $BE(H-I)=299$ kJ mol$^{-1}$, what is $\\Delta H$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+11$ kJ mol$^{-1}$" },
              { id: "b", text: "$-587$ kJ mol$^{-1}$" },
              { id: "c", text: "$-11$ kJ mol$^{-1}$" },
              { id: "d", text: "$-598$ kJ mol$^{-1}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy cycle",
                statement: "$\\Delta H = (436+151) - 2(299) = -11$.",
              },
            ],
            steps: [
              {
                reasoning: "Broken: $436+151=587$; formed: $2 \\times 299=598$; $\\Delta H = 587-598 = -11$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-11$ kJ mol$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-hb-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $N_2 + 3H_2 \\to 2NH_3$, given $BE(N\\equiv N)=945$, $BE(N-H)=391$, $BE(H-H)=436$ kJ mol$^{-1}$, calculate $\\Delta H$.",
          response: {
            type: "numeric",
            parts: [{ label: "dH", answer: -93, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy cycle",
                statement: "$\\Delta H = \\sum BE_{broken} - \\sum BE_{formed}$.",
              },
            ],
            steps: [
              {
                reasoning: "Broken: $945 + 3(436) = 945 + 1308 = 2253$ kJ.",
                working: "945+3(436)=2253",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Formed: $6(391) = 2346$ kJ (2 $NH_3$ has 6 N-H bonds).",
                working: "6(391)=2346",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = 2253 - 2346 = -93$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-93$ kJ mol$^{-1}$",
            commonErrors: ["Counting 4 N-H bonds instead of 6 in $2NH_3$."],
          },
        },
        {
          id: "cial-c-u4-hb-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Given $\\Delta H_c(CH_4)=-890$, $\\Delta H_c(C \\to CO_2)=-394$ and $\\Delta H_c(H_2 \\to H_2O)=-286$ kJ mol$^{-1}$, calculate the standard enthalpy of formation of methane, $\\Delta H_f(CH_4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hess's law",
                statement: "Formation cycle: elements $\\to$ compound via combustion data.",
              },
            ],
            steps: [
              {
                reasoning: "Elements: $C + 2H_2 \\to CO_2 + 2H_2O$ releases $-394 + 2(-286) = -966$ kJ.",
                working: "-394+2(-286)=-966",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Target: $C + 2H_2 \\to CH_4$; cycle subtracts combustion of $CH_4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H_f = -966 - (-890) = -76$ kJ mol$^{-1}$.",
                working: "-966-(-890)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct final value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-76$ kJ mol$^{-1}$",
            commonErrors: ["Adding the combustion enthalpy instead of subtracting."],
          },
        },
        {
          id: "cial-c-u4-hb-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are tabulated bond enthalpies called 'mean' bond enthalpies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They change with temperature" },
              { id: "b", text: "They only apply to ionic compounds" },
              { id: "c", text: "They are measured in kJ g$^{-1}$ not kJ mol$^{-1}$" },
              { id: "d", text: "They are averages over many molecules where the same bond has slightly different energies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mean bond enthalpy",
                statement: "Average BE across molecules/environments.",
              },
            ],
            steps: [
              {
                reasoning: "Bond energy varies slightly with molecular environment; tables give the mean.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Average over many molecules",
          },
        },
        {
          id: "cial-c-u4-hb-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $2H_2 + O_2 \\to 2H_2O$, given $BE(H-H)=436$, $BE(O=O)=498$, $BE(O-H)=463$ kJ mol$^{-1}$, calculate $\\Delta H$ for the equation as written.",
          response: {
            type: "numeric",
            parts: [{ label: "dH", answer: -482, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy cycle",
                statement: "$\\Delta H = \\sum BE_{broken} - \\sum BE_{formed}$.",
              },
            ],
            steps: [
              {
                reasoning: "Broken: $2(436) + 498 = 1370$ kJ.",
                working: "2(436)+498=1370",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Formed: $4(463) = 1852$ kJ ($2H_2O$ has 4 O-H bonds).",
                working: "4(463)=1852",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = 1370 - 1852 = -482$ kJ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-482$ kJ",
            commonErrors: ["Using 2 O-H bonds instead of 4 for $2H_2O$."],
          },
        },
        {
          id: "cial-c-u4-hb-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A Born–Haber cycle for NaCl includes atomisation of Na, ionisation of Na, dissociation of $Cl_2$, electron affinity of Cl and formation of the lattice. Explain how these steps combine to give $\\Delta H_f(NaCl)$ and state the sign of the lattice enthalpy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hess's law",
                statement: "Elements $\\to$ gaseous ions $\\to$ solid lattice.",
              },
            ],
            steps: [
              {
                reasoning: "Na(s) $\\to$ Na(g): atomisation enthalpy (endothermic).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Na(g) $\\to$ Na$^+$(g) + $e^-$: ionisation enthalpy (endothermic).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gaseous ions $\\to$ NaCl(s): lattice enthalpy, exothermic ($\\Delta H < 0$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sum of all steps = $\\Delta H_f(NaCl)$ by Hess's law.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Sum of steps = ΔHf; lattice enthalpy negative",
          },
        },
        {
          id: "cial-c-u4-hb-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hess's law is possible because enthalpy is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "State function — it depends only on initial and final states" },
              { id: "b", text: "Scalar quantity measured in joules" },
              { id: "c", text: "Path function — it depends on the route" },
              { id: "d", text: "Property of the catalyst used" },
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
                reasoning: "$\\Delta H$ depends only on states, not path.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "State function",
          },
        },
        {
          id: "cial-c-u4-hb-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $\\Delta H = -50$ kJ mol$^{-1}$ for $A \\to B$ and $\\Delta H = +30$ kJ mol$^{-1}$ for $B \\to C$, calculate $\\Delta H$ for $A \\to C$.",
          response: {
            type: "numeric",
            parts: [{ label: "dH", answer: -20, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hess's law",
                statement: "Add enthalpies along the cycle: $-50 + 30$.",
              },
            ],
            steps: [
              {
                reasoning: "Route $A \\to B \\to C$ sums the two steps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = -50 + 30 = -20$ kJ mol$^{-1}$.",
                working: "-50+30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-20$ kJ mol$^{-1}$",
          },
        },
        {
          id: "cial-c-u4-hb-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $CH_4 + Cl_2 \\to CH_3Cl + HCl$, given $BE(C-H)=413$, $BE(Cl-Cl)=243$, $BE(C-Cl)=327$, $BE(H-Cl)=431$ kJ mol$^{-1}$, calculate $\\Delta H$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy cycle",
                statement: "$\\Delta H = \\sum BE_{broken} - \\sum BE_{formed}$.",
              },
            ],
            steps: [
              {
                reasoning: "Broken: $4(413) + 243 = 1652 + 243 = 1895$ kJ.",
                working: "4(413)+243=1895",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Formed: $3(413) + 327 + 431 = 1239 + 758 = 1997$ kJ.",
                working: "3(413)+327+431=1997",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta H = 1895 - 1997 = -102$ kJ mol$^{-1}$.",
                working: "1895-1997",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct final value with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-102$ kJ mol$^{-1}$",
            commonErrors: ["Using 4 C-H bonds formed instead of 3 in $CH_3Cl$."],
          },
        },
        {
          id: "cial-c-u4-hb-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a reaction is reversed in a Hess cycle, its enthalpy change:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Doubles in value" },
              { id: "b", text: "Stays exactly the same" },
              { id: "c", text: "Becomes zero" },
              { id: "d", text: "Changes sign but keeps the same magnitude" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hess's law",
                statement: "Reversing a step reverses the sign of $\\Delta H$.",
              },
            ],
            steps: [
              {
                reasoning: "Reverse reaction has $\\Delta H$ of opposite sign, same value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sign changes, magnitude same",
          },
        },
        {
          id: "cial-c-u4-hb-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Hess cycles and bond enthalpies.",
          parts: [
            {
              label: "a",
              prompt: "State Hess's law.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "For $N_2 + 3H_2 \\to 2NH_3$ with $BE(N\\equiv N)=945$, $BE(N-H)=391$, $BE(H-H)=436$, find $\\Delta H$.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Explain why bond enthalpy calculations give approximate $\\Delta H$ values.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give one other use of a Hess cycle besides bond enthalpies.",
              marks: 2,
            },
          ],
          response: { type: "open" },
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
                part: "a",
                reasoning: "Enthalpy change independent of the route/path taken.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Broken: $945 + 3(436) = 2253$ kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Formed: $6(391) = 2346$ kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\Delta H = 2253 - 2346$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= -93$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Bond enthalpies are mean values — actual bond energies differ by molecule.",
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
                reasoning: "Born–Haber cycle for lattice/formation enthalpies (or finding $\\Delta H_f$ from combustion).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Any valid Hess cycle application accepted.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) route-independent (b) -93 (c) mean values (d) Born-Haber",
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
