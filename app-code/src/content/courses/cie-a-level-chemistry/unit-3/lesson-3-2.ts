import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "cial-c-u3-lesson-3-2",
  code: "3-2",
  title: "Group 2: the alkaline earth metals",
  goal: "I CAN describe the reactions and trends of Group 2 elements and their compounds.",
  standards: ["9701 3.2: Group 2"],
  vocabulary: [
    {
      term: "Alkaline earth metal",
      definition: "Group 2 element: Be, Mg, Ca, Sr, Ba, Ra.",
    },
    {
      term: "Reducing agent",
      definition: "Substance that donates electrons, itself oxidised.",
    },
    {
      term: "Thermal stability",
      definition: "Resistance to decomposition on heating.",
    },
    {
      term: "Flame test",
      definition: "Characteristic flame colour identifying metal ions.",
    },
    {
      term: "Solubility",
      definition: "Amount of substance dissolving in a solvent.",
    },
    {
      term: "Basic oxide",
      definition: "Oxide that reacts with water to form a base.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u3-g2-reactions",
      title: "Group 2 reactions",
      skill: "Describe reactions of Group 2 metals with water, oxygen and acids.",
      lesson: {
        sections: [
          {
            heading: "With water and steam",
            body: "Be reacts only with steam; Mg with steam slowly; Ca, Sr, Ba react with cold water. Reactivity increases down the group: $M + 2H_2O \\to M(OH)_2 + H_2$. The hydroxides are strong bases (alkaline).",
          },
          {
            heading: "With oxygen",
            body: "All form oxides $MO$ (white solids): $2M + O_2 \\to 2MO$. Mg burns brightly; Ca, Sr, Ba tarnish in air. Oxides react with water: $MO + H_2O \\to M(OH)_2$ — increasingly alkaline down the group.",
          },
          {
            heading: "With acids",
            body: "Metals react vigorously with dilute acids: $M + 2HCl \\to MCl_2 + H_2$. Salts are white crystalline solids, soluble in water, giving neutral solutions.",
          },
        ],
        keyFormulas: [
          {
            name: "Water reaction",
            statement: "$M + 2H_2O \\to M(OH)_2 + H_2$",
          },
          {
            name: "Oxide",
            statement: "$2M + O_2 \\to 2MO$",
          },
        ],
        workedExample: {
          problem: "Write the equation for calcium reacting with water and name the products.",
          solution:
            "$Ca + 2H_2O \\to Ca(OH)_2 + H_2$. Products: calcium hydroxide (slaked lime, alkaline) and hydrogen.",
        },
      },
      questions: [
        {
          id: "cial-c-u3-g2r-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Group 2 metal reacts with cold water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calcium" },
              { id: "b", text: "Beryllium" },
              { id: "c", text: "Magnesium" },
              { id: "d", text: "None of them" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Group 2 reactivity",
                statement: "Reactivity increases down the group with water.",
              },
            ],
            steps: [
              {
                reasoning: "Ca, Sr, Ba react with cold water; Be and Mg do not.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Calcium",
          },
        },
        {
          id: "cial-c-u3-g2r-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for magnesium reacting with steam and state the products.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Group 2 + water",
                statement: "$M + 2H_2O \\to M(OH)_2 + H_2$.",
              },
            ],
            steps: [
              {
                reasoning: "$Mg + 2H_2O \\to Mg(OH)_2 + H_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Products: magnesium hydroxide and hydrogen.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Equation correctly balanced.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$Mg(OH)_2 + H_2$",
          },
        },
        {
          id: "cial-c-u3-g2r-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why barium is more reactive than magnesium with water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Down-group reactivity",
                statement:
                  "Lower IE and larger atoms down group $\\to$ lose electrons more easily.",
              },
            ],
            steps: [
              {
                reasoning: "Ba has more electron shells than Mg.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More shielding and larger radius $\\to$ lower IE.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Loses electrons more easily $\\to$ more reactive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So Ba reacts faster/more vigorously with water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Lower IE down group = more reactive",
          },
        },
        {
          id: "cial-c-u3-g2r-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Group 2 reactions.",
          parts: [
            {
              label: "a",
              prompt: "Write the equation for calcium reacting with water.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Name the products of that reaction and state the nature of the solution formed.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Write the equation for strontium burning in oxygen.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain the trend in reactivity down Group 2 with reference to ionisation energy.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Group 2 chemistry",
                statement:
                  "$M+2H_2O\\to M(OH)_2+H_2$; $2M+O_2\\to2MO$; reactivity $\\uparrow$ down.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$Ca + 2H_2O \\to Ca(OH)_2 + H_2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Calcium hydroxide and hydrogen.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Solution is alkaline (basic).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "$2Sr + O_2 \\to 2SrO$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct formula and balancing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "IE decreases down the group (more shells, more shielding).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Lower IE $\\to$ easier to lose 2 electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "More reactive metal $\\to$ faster reactions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Hence Ba > Sr > Ca > Mg in reactivity.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Ca+2H2O→Ca(OH)2+H2 (b) Ca(OH)2+H2 alkaline (c) 2Sr+O2→2SrO (d) IE↓=reactivity↑",
          },
        },
      ],
    },
    {
      id: "cial-c-u3-g2-compounds",
      title: "Group 2 compounds: solubility and thermal stability",
      skill: "Explain trends in solubility and thermal decomposition of Group 2 compounds.",
      lesson: {
        sections: [
          {
            heading: "Solubility of hydroxides and sulfates",
            body: "Hydroxides: $Be(OH)_2$ and $Mg(OH)_2$ insoluble; $Ca(OH)_2$ sparingly soluble (limewater); $Sr(OH)_2$, $Ba(OH)_2$ soluble. Sulfates: $BeSO_4$, $MgSO_4$ soluble; $CaSO_4$ slightly soluble; $SrSO_4$, $BaSO_4$ insoluble — used to test for $Ba^{2+}$.",
          },
          {
            heading: "Thermal stability",
            body: "Carbonates $MCO_3$ decompose on heating: $MCO_3 \\to MO + CO_2$. Stability increases down the group: $BeCO_3$ least stable, $BaCO_3$ most stable. Same for nitrates $M(NO_3)_2 \\to MO + NO_2 + O_2$ and hydrogencarbonates.",
          },
          {
            heading: "Flame tests",
            body: "Ca: brick red/orange-red; Sr: crimson/red; Ba: green. Used to identify cations — flame colour from excited electrons returning to ground state.",
          },
        ],
        keyFormulas: [
          {
            name: "Decomposition",
            statement: "$MCO_3 \\to MO + CO_2$; $M(NO_3)_2 \\to MO + 2NO_2 + O_2$.",
          },
          {
            name: "Trends",
            statement:
              "Hydroxide solubility $\\uparrow$ down; sulfate solubility $\\downarrow$ down; thermal stability $\\uparrow$ down.",
          },
        ],
        workedExample: {
          problem: "Why does $BaCO_3$ require more heat to decompose than $MgCO_3$?",
          solution:
            "Down the group, $M^{2+}$ is larger with less charge density — stabilises the large $CO_3^{2-}$ less... actually larger cations stabilise the carbonate more, so decomposition needs more energy.",
        },
      },
      questions: [
        {
          id: "cial-c-u3-g2c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Group 2 hydroxide is soluble in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Ba(OH)_2$" },
              { id: "b", text: "$Mg(OH)_2$" },
              { id: "c", text: "$Be(OH)_2$" },
              { id: "d", text: "None are soluble" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hydroxide solubility",
                statement: "Solubility increases down Group 2.",
              },
            ],
            steps: [
              {
                reasoning: "$Ba(OH)_2$ is soluble; $Mg(OH)_2$ and $Be(OH)_2$ are not.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Ba(OH)_2$",
          },
        },
        {
          id: "cial-c-u3-g2c-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for the thermal decomposition of calcium carbonate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Carbonate decomposition",
                statement: "$MCO_3 \\to MO + CO_2$ on heating.",
              },
            ],
            steps: [
              {
                reasoning: "$CaCO_3 \\to CaO + CO_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Products: calcium oxide and carbon dioxide.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Equation balanced.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$CaO + CO_2$",
          },
        },
        {
          id: "cial-c-u3-g2c-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the trend in thermal stability of Group 2 carbonates down the group.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thermal stability",
                statement:
                  "Larger cations stabilise $CO_3^{2-}$ more — harder to decompose.",
              },
            ],
            steps: [
              {
                reasoning: "Cation size increases down the group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Larger $M^{2+}$ has lower charge density.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polarises $CO_3^{2-}$ less — anion more stable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So thermal stability increases: $BeCO_3$ least, $BaCO_3$ most stable.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Larger cation = less polarisation = more stable carbonate",
          },
        },
        {
          id: "cial-c-u3-g2c-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Group 2 compounds.",
          parts: [
            {
              label: "a",
              prompt: "State the solubility trend of Group 2 hydroxides down the group.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the equation for $BaCO_3$ decomposing on heating.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Which sulfate is used to test for $Ba^{2+}$ ions and why?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain the trend in thermal stability of Group 2 nitrates.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Group 2 compounds",
                statement:
                  "Hydroxides more soluble down; thermal stability increases down.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Increases down the group: $Be(OH)_2$ insoluble $\\to Ba(OH)_2$ soluble.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct trend stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$BaCO_3 \\to BaO + CO_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct products and balancing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$H_2SO_4$ or soluble sulfate — $BaSO_4$ is insoluble.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "White precipitate confirms $Ba^{2+}$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Nitrate stability increases down the group.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Larger cations polarise $NO_3^-$ less.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "So $Ba(NO_3)_2$ most stable, $Be(NO_3)_2$ least.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) solubility↑ (b) BaO+CO2 (c) BaSO4 precipitate (d) stability↑ down",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u3-group2-notes",
      title: "Group 2: alkaline earth metals — revision notes",
      summary:
        "Reactions with water/oxygen/acids, compound solubility and thermal stability.",
      sections: [
        {
          heading: "Reactions",
          body: "$M+2H_2O\\to M(OH)_2+H_2$ (Be only steam, Mg steam slowly, Ca/Sr/Ba cold water). $2M+O_2\\to2MO$. Acids: $M+2HCl\\to MCl_2+H_2$. Reactivity $\\uparrow$ down group as IE $\\downarrow$.",
        },
        {
          heading: "Compounds",
          body: "Hydroxide solubility $\\uparrow$ down ($Ba(OH)_2$ soluble); sulfate solubility $\\downarrow$ down ($BaSO_4$ insoluble — test for $Ba^{2+}$). Thermal stability of carbonates/nitrates $\\uparrow$ down — larger cations polarise anions less. Flame tests: Ca brick-red, Sr crimson, Ba green.",
        },
        {
          heading: "Exam checklist",
          body: "Write full balanced equations with state symbols if asked. For thermal decomposition always give $CO_2$ or $NO_2+O_2$ as products. Link every trend to cation size/charge density.",
        },
      ],
    },
  ],
};
