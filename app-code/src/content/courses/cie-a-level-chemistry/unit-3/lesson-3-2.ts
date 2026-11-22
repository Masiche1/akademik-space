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
              { id: "a", text: "Beryllium" },
              { id: "b", text: "Magnesium" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "None of them" },
            ],
            correctChoiceId: "c",
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
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products when magnesium reacts with steam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$MgO + H_2$" },
              { id: "b", text: "$Mg(OH)_2 + O_2$" },
              { id: "c", text: "$MgCl_2 + H_2$" },
              { id: "d", text: "$Mg(OH)_2 + H_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Group 2 + water",
                statement: "With steam the metal oxide and hydrogen form: $Mg + H_2O \\to MgO + H_2$.",
              },
            ],
            steps: [{ reasoning: "$Mg + H_2O \\to MgO + H_2$ — magnesium oxide and hydrogen.", marks: 1, markCode: "A" }],
            finalAnswer: "$MgO + H_2$",
          },
        },
        {
          id: "cial-c-u3-g2r-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is barium more reactive than magnesium with water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ba has fewer electron shells than Mg" },
              { id: "b", text: "Ba has a lower ionisation energy, so it loses electrons more easily" },
              { id: "c", text: "Mg has a higher ionisation energy than Ba" },
              { id: "d", text: "Ba forms ions less easily than Mg" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Down-group reactivity",
                statement:
                  "Lower IE and larger atoms down group $\\to$ lose electrons more easily.",
              },
            ],
            steps: [{ reasoning: "Greater shielding and larger radius give Ba a lower IE and easier electron loss.", marks: 1, markCode: "A" }],
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
        {
          id: "cial-c-u3-g2r-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Group 2 metal does not react with cold water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beryllium" },
              { id: "b", text: "Strontium" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "Barium" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Group 2 reactivity", statement: "Be reacts only with steam." }],
            steps: [{ reasoning: "Be does not react with cold water.", marks: 1, markCode: "A" }],
            finalAnswer: "Beryllium",
          },
        },
        {
          id: "cial-c-u3-g2r-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $Ca + 2H_2O \\rightarrow Ca(OH)_2 + H_2$, how many moles of $H_2$ form from $0.20$ mol Ca?",
          response: { type: "numeric", parts: [{ label: "n(H2)", answer: 0.2, unit: "mol" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "1 mol Ca gives 1 mol H2." }],
            steps: [
              { reasoning: "Ratio Ca:H2 = 1:1.", working: "1:1", marks: 1, markCode: "M" },
              { reasoning: "n(H2)=0.20 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.20$ mol",
          },
        },
        {
          id: "cial-c-u3-g2r-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the equation for strontium reacting with cold water and name the products.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Group 2 + water", statement: "M + 2H2O -> M(OH)2 + H2." }],
            steps: [
              { reasoning: "$Sr + 2H_2O \\rightarrow Sr(OH)_2 + H_2$.", marks: 1, markCode: "M" },
              { reasoning: "Products are strontium hydroxide and hydrogen.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Sr(OH)_2 + H_2$",
          },
        },
        {
          id: "cial-c-u3-g2r-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $Ba + 2H_2O \\rightarrow Ba(OH)_2 + H_2$, calculate the volume of $H_2$ at r.t.p. produced by $0.10$ mol Ba.",
          response: { type: "numeric", parts: [{ label: "V(H2)", answer: 2.4, unit: "dm3" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Gas volume", statement: "n=0.10 mol; V=24n dm3." }],
            steps: [
              { reasoning: "Ratio Ba:H2 = 1:1, so n(H2)=0.10 mol.", working: "0.10", marks: 1, markCode: "M" },
              { reasoning: "V = 0.10 * 24.", working: "0.10*24", marks: 1, markCode: "M" },
              { reasoning: "V = 2.4 dm3.", marks: 1, markCode: "M" },
              { reasoning: "Correct volume stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.4$ dm$^3$",
          },
        },
        {
          id: "cial-c-u3-g2r-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What are the products when magnesium reacts with steam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Mg(OH)_2 + H_2$" },
              { id: "b", text: "$MgCl_2 + H_2$" },
              { id: "c", text: "$MgO + H_2$" },
              { id: "d", text: "$MgO_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Group 2 + steam", statement: "Same as water reaction." }],
            steps: [{ reasoning: "Mg + steam gives Mg(OH)2 and H2.", marks: 1, markCode: "A" }],
            finalAnswer: "$Mg(OH)_2 + H_2$",
          },
        },
        {
          id: "cial-c-u3-g2r-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does reactivity of Group 2 metals with water change down the group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases because shielding decreases" },
              { id: "b", text: "It decreases because atomic radius increases" },
              { id: "c", text: "It stays the same for all Group 2 metals" },
              { id: "d", text: "It increases because ionisation energy decreases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Reactivity trend", statement: "Lower IE increases reactivity." }],
            steps: [{ reasoning: "Larger atoms with more shielding lose electrons more easily down the group.", marks: 1, markCode: "A" }],
            finalAnswer: "Reactivity increases as IE decreases down group.",
          },
        },
        {
          id: "cial-c-u3-g2r-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many moles of hydrogen form when $0.50$ mol of calcium reacts with water?",
          response: { type: "numeric", parts: [{ label: "n(H2)", answer: 0.5, unit: "mol" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Mole ratio", statement: "1 Ca gives 1 H2." }],
            steps: [
              { reasoning: "n(Ca)=0.50 mol and ratio is 1:1.", working: "0.50", marks: 1, markCode: "M" },
              { reasoning: "n(H2)=0.50 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.50$ mol",
          },
        },
        {
          id: "cial-c-u3-g2r-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare the reactions of beryllium and magnesium with water.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both react vigorously with cold water" },
              { id: "b", text: "Be reacts only with steam; Mg reacts with steam but not readily with cold water" },
              { id: "c", text: "Mg does not react with steam but Be does" },
              { id: "d", text: "Both are equally reactive with cold water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Group 2 water reaction", statement: "Be only steam; Mg steam slowly." }],
            steps: [{ reasoning: "Be is the least reactive; Mg reacts with steam but not readily with cold water.", marks: 1, markCode: "A" }],
            finalAnswer: "Be least reactive; Mg reacts with steam only.",
          },
        },
        {
          id: "cial-c-u3-g2r-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula of the oxide formed when calcium burns in oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Ca(OH)_2$" },
              { id: "b", text: "$CaCO_3$" },
              { id: "c", text: "$CaO_2$" },
              { id: "d", text: "$CaO$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Group 2 oxide", statement: "2M + O2 -> 2MO." }],
            steps: [{ reasoning: "Calcium forms CaO.", marks: 1, markCode: "A" }],
            finalAnswer: "$CaO$",
          },
        },
        {
          id: "cial-c-u3-g2r-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons does a calcium atom lose when it forms $Ca^{2+}$?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 2, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Ion charge", statement: "Group 2 forms 2+ ions." }],
            steps: [
              { reasoning: "Ca has two outer electrons.", working: "4s2", marks: 1, markCode: "M" },
              { reasoning: "It loses both, forming Ca2+.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cial-c-u3-g2r-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write equations for calcium reacting with oxygen and for calcium oxide reacting with water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Group 2 chemistry", statement: "Oxide then hydroxide formation." }],
            steps: [
              { reasoning: "$2Ca + O_2 \\rightarrow 2CaO$.", marks: 1, markCode: "M" },
              { reasoning: "$CaO + H_2O \\rightarrow Ca(OH)_2$.", marks: 1, markCode: "M" },
              { reasoning: "Both equations balanced with correct products.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2Ca+O_2\\to 2CaO$; $CaO+H_2O\\to Ca(OH)_2$",
          },
        },
        {
          id: "cial-c-u3-g2r-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Group 2 reactions problem.",
          parts: [
            { label: "a", prompt: "State which Group 2 metals react with cold water.", marks: 1 },
            { label: "b", prompt: "Write the equation for barium reacting with water.", marks: 2 },
            { label: "c", prompt: "Name the products and state the solution's nature.", marks: 2 },
            { label: "d", prompt: "Explain why reactivity increases down the group.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Group 2 reactions", statement: "M + 2H2O -> M(OH)2 + H2." }],
            steps: [
              { part: "a", reasoning: "Ca, Sr and Ba react with cold water.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Ba + 2H_2O \\rightarrow Ba(OH)_2 + H_2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct products and balancing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Barium hydroxide and hydrogen.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solution is alkaline.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "IE decreases down the group.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Electrons are lost more easily.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "So reactions become more vigorous down the group.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Ca,Sr,Ba (b) Ba+2H2O→Ba(OH)2+H2 (c) alkaline (d) IE↓",
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
              { id: "a", text: "$Be(OH)_2$" },
              { id: "b", text: "$Ba(OH)_2$" },
              { id: "c", text: "None are soluble" },
              { id: "d", text: "$Mg(OH)_2$" },
            ],
            correctChoiceId: "b",
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
          difficulty: "core",
          totalMarks: 1,
          stem: "How does the thermal stability of Group 2 carbonates change down the group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases because larger cations polarise $CO_3^{2-}$ less" },
              { id: "b", text: "It decreases because cations become larger" },
              { id: "c", text: "It increases because charge density increases" },
              { id: "d", text: "It stays the same for all Group 2 carbonates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thermal stability",
                statement:
                  "Larger cations stabilise $CO_3^{2-}$ more — harder to decompose.",
              },
            ],
            steps: [{ reasoning: "Lower charge density of larger cations polarises the carbonate less, so it is more stable.", marks: 1, markCode: "A" }],
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
        {
          id: "cial-c-u3-g2c-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Group 2 sulfate is insoluble in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$BeSO_4$" },
              { id: "b", text: "$BaSO_4$" },
              { id: "c", text: "$MgSO_4$" },
              { id: "d", text: "$CaSO_4$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Sulfate solubility", statement: "Solubility decreases down group." }],
            steps: [{ reasoning: "BaSO4 is insoluble.", marks: 1, markCode: "A" }],
            finalAnswer: "$BaSO_4$",
          },
        },
        {
          id: "cial-c-u3-g2c-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $CaCO_3 \\rightarrow CaO + CO_2$, how many moles of $CO_2$ form from $0.15$ mol $CaCO_3$?",
          response: { type: "numeric", parts: [{ label: "n(CO2)", answer: 0.15, unit: "mol" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Decomposition ratio", statement: "1:1 ratio." }],
            steps: [
              { reasoning: "1 mol CaCO3 gives 1 mol CO2.", working: "1:1", marks: 1, markCode: "M" },
              { reasoning: "n(CO2)=0.15 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.15$ mol",
          },
        },
        {
          id: "cial-c-u3-g2c-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does the solubility of Group 2 sulfates change down the group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays constant down the group" },
              { id: "b", text: "It decreases, so $BaSO_4$ is insoluble" },
              { id: "c", text: "It increases, so $BaSO_4$ is soluble" },
              { id: "d", text: "It decreases only for magnesium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Sulfate solubility", statement: "Larger cations give less soluble sulfates." }],
            steps: [{ reasoning: "Solubility decreases down the group, making BaSO4 insoluble.", marks: 1, markCode: "A" }],
            finalAnswer: "Solubility decreases down group.",
          },
        },
        {
          id: "cial-c-u3-g2c-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the mass of $CaO$ formed when $20$ g of $CaCO_3$ decomposes completely ($M$: 100 and 56).",
          response: { type: "numeric", parts: [{ label: "mass CaO", answer: 11.2, unit: "g" }, { label: "mass CO2", answer: 8.8, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Decomposition stoichiometry", statement: "1 mol CaCO3 gives 1 mol CaO." }],
            steps: [
              { reasoning: "n(CaCO3)=20/100=0.20 mol.", working: "20/100=0.20", marks: 1, markCode: "M" },
              { reasoning: "n(CaO)=0.20 mol.", working: "0.20", marks: 1, markCode: "M" },
              { reasoning: "Mass=0.20*56.", working: "0.20*56", marks: 1, markCode: "M" },
              { reasoning: "Mass CaO = 0.20*56 = 11.2 g; mass CO2 = 0.20*44 = 8.8 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11.2$ g CaO and $8.8$ g CO$_2$",
          },
        },
        {
          id: "cial-c-u3-g2c-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which Group 2 carbonate is most thermally stable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CaCO_3$" },
              { id: "b", text: "$BaCO_3$" },
              { id: "c", text: "$BeCO_3$" },
              { id: "d", text: "$MgCO_3$" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Thermal stability", statement: "Increases down group." }],
            steps: [{ reasoning: "BaCO3 is most stable.", marks: 1, markCode: "A" }],
            finalAnswer: "$BaCO_3$",
          },
        },
        {
          id: "cial-c-u3-g2c-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does the solubility of Group 2 hydroxides change down the group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All Group 2 hydroxides are insoluble" },
              { id: "b", text: "It increases, so $Ba(OH)_2$ is soluble" },
              { id: "c", text: "It decreases, so $Ba(OH)_2$ is insoluble" },
              { id: "d", text: "It stays constant down the group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Hydroxide solubility", statement: "Solubility increases down group." }],
            steps: [{ reasoning: "Larger cations give more soluble hydroxides, so Ba(OH)2 is soluble.", marks: 1, markCode: "A" }],
            finalAnswer: "Larger cations give more soluble hydroxides.",
          },
        },
        {
          id: "cial-c-u3-g2c-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many oxygen atoms are in one formula unit of $CaSO_4$?",
          response: { type: "numeric", parts: [{ label: "O atoms", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Formula unit", statement: "SO4 contains four oxygens." }],
            steps: [
              { reasoning: "SO4 has four oxygen atoms.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "CaSO4 therefore has 4 oxygen atoms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cial-c-u3-g2c-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State the flame colours of calcium, strontium and barium ions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Flame tests", statement: "Characteristic colours identify ions." }],
            steps: [
              { reasoning: "Ca gives brick red/orange-red.", marks: 1, markCode: "A" },
              { reasoning: "Sr gives crimson/red.", marks: 1, markCode: "A" },
              { reasoning: "Ba gives green.", marks: 1, markCode: "A" },
              { reasoning: "All three correctly stated.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ca brick-red, Sr crimson, Ba green",
          },
        },
        {
          id: "cial-c-u3-g2c-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which Group 2 carbonate decomposes most easily on heating?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$MgCO_3$" },
              { id: "b", text: "$SrCO_3$" },
              { id: "c", text: "$BaCO_3$" },
              { id: "d", text: "$BeCO_3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Thermal stability", statement: "Least stable at top of group." }],
            steps: [{ reasoning: "BeCO3 decomposes most easily.", marks: 1, markCode: "A" }],
            finalAnswer: "$BeCO_3$",
          },
        },
        {
          id: "cial-c-u3-g2c-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the equation for the thermal decomposition of strontium nitrate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Nitrate decomposition", statement: "M(NO3)2 -> MO + 2NO2 + O2." }],
            steps: [
              { reasoning: "$Sr(NO_3)_2 \\rightarrow SrO + 2NO_2 + O_2$.", marks: 1, markCode: "M" },
              { reasoning: "Products are strontium oxide, nitrogen dioxide and oxygen.", marks: 1, markCode: "M" },
              { reasoning: "Equation is balanced.", marks: 1, markCode: "A" },
              { reasoning: "Correct products and states implied.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$SrO+2NO_2+O_2$",
          },
        },
        {
          id: "cial-c-u3-g2c-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How is $BaSO_4$ used to test for sulfate ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acidified $Ba^{2+}$ solution gives a white $BaSO_4$ precipitate" },
              { id: "b", text: "It dissolves to give an alkaline solution" },
              { id: "c", text: "It forms a yellow precipitate with sulfates" },
              { id: "d", text: "It gives a green flame with barium ions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Sulfate test", statement: "BaSO4 is insoluble white precipitate." }],
            steps: [{ reasoning: "Acidified barium ions precipitate white insoluble BaSO4, confirming sulfate.", marks: 1, markCode: "A" }],
            finalAnswer: "Ba2+ gives white BaSO4 precipitate.",
          },
        },
        {
          id: "cial-c-u3-g2c-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Group 2 compounds problem.",
          parts: [
            { label: "a", prompt: "State the solubility trend of Group 2 hydroxides.", marks: 1 },
            { label: "b", prompt: "Write the equation for $MgCO_3$ decomposing.", marks: 2 },
            { label: "c", prompt: "Explain why thermal stability increases down the group.", marks: 3 },
            { label: "d", prompt: "Give the flame colour of strontium.", marks: 1 },
            { label: "e", prompt: "Name a reagent that tests for $Ba^{2+}$ ions.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Group 2 compounds", statement: "Solubility and stability trends." }],
            steps: [
              { part: "a", reasoning: "Hydroxide solubility increases down the group.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$MgCO_3 \\rightarrow MgO + CO_2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct products and balancing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cation size increases down the group.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Larger cations polarise CO3 less, stabilising it.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "So decomposition needs more heat down the group.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Strontium gives a crimson/red flame.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "A sulfate reagent such as sulfuric acid or soluble sulfate gives insoluble BaSO4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) increases (b) MgO+CO2 (c) less polarisation (d) crimson (e) sulfate/BaSO4",
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
