import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ech10-u3-lesson-3-1",
  code: "3-1",
  title: "Groups 1 and 7, and the Atmosphere",
  goal: "I CAN explain the trends and reactions of Group 1 and Group 7, and describe the gases in the atmosphere and how to test for them.",
  standards: ["4CH1 2.1", "4CH1 2.5", "4CH1 2.10", "4CH1 2.14"],
  vocabulary: [
    { term: "Alkali metal", definition: "A metal in Group 1 of the periodic table. It has one electron in its outer shell and reacts with water to form an alkaline solution." },
    { term: "Halogen", definition: "A non-metal in Group 7 of the periodic table. Its molecules are diatomic and its atoms have seven electrons in the outer shell." },
    { term: "Displacement reaction", definition: "A reaction in which a more reactive element takes the place of a less reactive element in a compound." },
    { term: "Diatomic", definition: "Made of molecules containing two atoms, for example $\\text{Cl}_2$." },
    { term: "Catalyst", definition: "A substance that speeds up a reaction but is not used up." },
    { term: "Greenhouse gas", definition: "A gas such as carbon dioxide or methane that absorbs infrared radiation in the atmosphere and helps to warm the Earth." },
    { term: "Limewater", definition: "A solution of calcium hydroxide used to test for carbon dioxide, which turns it cloudy." },
  ],
  concepts: [
    {
      id: "ech10-u3-group-1-and-7",
      title: "Group 1 and Group 7",
      skill: "Explain trends in reactivity in Groups 1 and 7, write equations for their reactions and carry out simple calculations.",
      lesson: {
        sections: [
          {
            heading: "Group 1: the alkali metals",
            body: "Lithium, sodium and potassium have **one electron in their outer shell**. They are soft, have low densities and low melting points. They react with water to form a metal hydroxide (an alkaline solution) and hydrogen:\n\n$$2\\text{Li} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{LiOH} + \\text{H}_2$$\n\nReactivity **increases down the group**: lithium fizzes steadily, sodium melts into a ball and moves on the surface, potassium burns with a lilac flame. Going down the group the atoms are larger, so the outer electron is further from the nucleus and is more shielded. It is held less strongly and is lost more easily.",
          },
          {
            heading: "Group 7: the halogens",
            body: "Chlorine is a pale green gas, bromine is a red-brown liquid and iodine is a grey solid. Their molecules are diatomic ($\\text{Cl}_2$, $\\text{Br}_2$, $\\text{I}_2$). Melting and boiling points **increase down the group**.\n\nHalogen atoms gain one electron to fill the outer shell. Reactivity **decreases down the group**: the outer shell is further from the nucleus and more shielded, so an electron is attracted less strongly.\n\nA more reactive halogen displaces a less reactive one from a solution of its salt:\n\n$$\\text{Cl}_2 + 2\\text{KBr} \\rightarrow 2\\text{KCl} + \\text{Br}_2$$",
          },
          {
            heading: "Reacting masses and gas volumes",
            body: "Use moles $= \\frac{\\text{mass}}{M_r}$ and the ratio in the balanced equation. One mole of any gas occupies $24\\text{ dm}^3$ at room temperature and pressure.",
          },
        ],
        keyFormulas: [
          { name: "Group 1 with water", statement: "$2\\text{M} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{MOH} + \\text{H}_2$" },
          { name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass (g)}}{M_r}$" },
          { name: "Gas volume at r.t.p.", statement: "$\\text{volume (dm}^3) = \\text{moles} \\times 24$" },
          { name: "Trends", statement: "Group 1 reactivity increases down the group; Group 7 reactivity decreases down the group" },
        ],
        workedExample: {
          problem: "Sodium reacts with water: $2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2$. Calculate the volume of hydrogen at room temperature and pressure produced by $0.46\\text{ g}$ of sodium ($A_r$ of Na $= 23$).",
          solution: "Moles of Na $= \\frac{0.46}{23} = 0.020$. The ratio Na : $\\text{H}_2$ is $2:1$, so moles of $\\text{H}_2 = 0.010$. Volume $= 0.010 \\times 24 = 0.24\\text{ dm}^3$ ($240\\text{ cm}^3$).",
        },
      },
      questions: [
        {
          id: "ech10-u3-group-1-and-7-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which row shows the products when lithium reacts with water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lithium oxide and hydrogen" },
              { id: "b", text: "Lithium hydroxide and hydrogen" },
              { id: "c", text: "Lithium hydroxide and oxygen" },
              { id: "d", text: "Lithium chloride and hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group 1 and water", statement: "A Group 1 metal reacts with water to form a metal hydroxide and hydrogen gas." },
            ],
            steps: [
              { reasoning: "The equation is $2\\text{Li} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{LiOH} + \\text{H}_2$, so the products are lithium hydroxide and hydrogen.", working: "\\text{LiOH} + \\text{H}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Lithium hydroxide and hydrogen",
            commonErrors: ["Choosing (a) because the metal is thought to react with the oxygen in water to form an oxide.", "Choosing (c): oxygen is not released, the gas is hydrogen."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech10-u3-group-1-and-7-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Potassium reacts more vigorously with water than lithium does. Explain this difference in reactivity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity of alkali metals", statement: "Reactivity depends on how easily the single outer electron is lost. This depends on its distance from the nucleus and the shielding by inner shells." },
            ],
            steps: [
              { reasoning: "Both metals have one electron in the outer shell and form $1+$ ions by losing it.", marks: 1, markCode: "B" },
              { reasoning: "A potassium atom is larger, with more electron shells, so the outer electron is further from the nucleus and more shielded.", marks: 1, markCode: "B" },
              { reasoning: "The attraction between the nucleus and the outer electron is weaker, so the electron is lost more easily.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Potassium's outer electron is further from the nucleus and more shielded, so it is lost more easily.",
            commonErrors: ["Saying potassium has more outer electrons.", "Saying potassium atoms are 'heavier' without referring to the electron being lost more easily."],
            examinerNote: "Allow 'more shells' for the second mark. Reject 'potassium has a bigger nucleus' on its own. Allow 'less energy needed to remove the outer electron' for the third mark.",
          },
        },
        {
          id: "ech10-u3-group-1-and-7-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Chlorine gas is bubbled through a colourless solution of potassium bromide. Describe what you would see, explain why the reaction happens and write a balanced symbol equation for it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Halogen displacement", statement: "A more reactive halogen displaces a less reactive halogen from a solution of its salt." },
              { kind: "law", name: "Conservation of mass", statement: "A balanced equation has the same number of each type of atom on both sides." },
            ],
            steps: [
              { reasoning: "Bromine is formed, so the colourless solution turns orange (or brown).", marks: 1, markCode: "B" },
              { reasoning: "Chlorine is more reactive than bromine, so it displaces bromine from potassium bromide.", marks: 1, markCode: "B" },
              { reasoning: "Correct formulae: $\\text{Cl}_2 + \\text{KBr} \\rightarrow \\text{KCl} + \\text{Br}_2$.", working: "\\text{Cl}_2 + \\text{KBr} \\rightarrow \\text{KCl} + \\text{Br}_2", marks: 1, markCode: "B" },
              { reasoning: "Balance: two K and two Br are needed on the left, giving two KCl on the right.", working: "\\text{Cl}_2 + 2\\text{KBr} \\rightarrow 2\\text{KCl} + \\text{Br}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Solution turns orange; chlorine is more reactive than bromine so displaces it; $\\text{Cl}_2 + 2\\text{KBr} \\rightarrow 2\\text{KCl} + \\text{Br}_2$",
            commonErrors: ["Saying the solution turns green (that is the colour of chlorine gas).", "Writing $\\text{Br}$ instead of $\\text{Br}_2$."],
            examinerNote: "Allow yellow, orange, brown or red-brown for the observation. Allow ionic equation $\\text{Cl}_2 + 2\\text{Br}^- \\rightarrow 2\\text{Cl}^- + \\text{Br}_2$ for the last two marks. Ignore state symbols.",
          },
        },
        {
          id: "ech10-u3-group-1-and-7-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "This question is about the halogens and the alkali metals.\n\n| Halogen | Appearance at $20^\\circ\\text{C}$ | Boiling point ($^\\circ\\text{C}$) |\n| --- | --- | --- |\n| Chlorine | pale green gas | $-35$ |\n| Bromine | red-brown liquid | $59$ |\n| Iodine | grey solid | $184$ |\n\nUse $A_r$: Li $= 7$. One mole of gas occupies $24\\text{ dm}^3$ at room temperature and pressure.",
          parts: [
            { label: "a", prompt: "Astatine is below iodine in Group 7. Predict its state at $20^\\circ\\text{C}$ and justify your answer using the data.", marks: 2 },
            { label: "b", prompt: "Lithium reacts with water: $2\\text{Li} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{LiOH} + \\text{H}_2$. Calculate the volume of hydrogen, in $\\text{cm}^3$, produced at room temperature and pressure when $0.14\\text{ g}$ of lithium reacts completely.", marks: 3 },
            { label: "c", prompt: "Describe two observations when a small piece of potassium is added to water.", marks: 2 },
            { label: "d", prompt: "Explain why fluorine is more reactive than chlorine.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Group 7 trend", statement: "Boiling points increase down the group, and reactivity decreases down the group." },
              { kind: "formula", name: "Moles and gas volume", statement: "$\\text{moles} = \\frac{\\text{mass}}{A_r}$; volume of gas $= \\text{moles} \\times 24\\text{ dm}^3$" },
            ],
            steps: [
              { part: "a", reasoning: "Boiling points increase down the group, so astatine's boiling point is above $184^\\circ\\text{C}$.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "This is well above $20^\\circ\\text{C}$, so astatine is a solid.", working: "\\text{solid}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Moles of lithium.", working: "\\frac{0.14}{7} = 0.020\\text{ mol}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The ratio Li : $\\text{H}_2$ is $2:1$, so moles of $\\text{H}_2$ is half.", working: "0.020 \\div 2 = 0.010\\text{ mol}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply by $24\\text{ dm}^3$ and convert to $\\text{cm}^3$.", working: "0.010 \\times 24 = 0.24\\text{ dm}^3 = 240\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any one observation: it floats, melts into a ball, moves on the surface.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any second observation: fizzing (bubbles), a lilac flame, the metal disappears.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A fluorine atom is smaller, so its outer shell is closer to the nucleus and less shielded.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It attracts the electron it needs more strongly, so it gains an electron more easily.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Solid, boiling point above $184^\\circ\\text{C}$ (b) $240\\text{ cm}^3$ (c) floats, melts, fizzes or lilac flame (d) smaller atom, less shielding, stronger attraction for an electron",
            commonErrors: ["Giving $0.24$ without converting dm³ to cm³.", "Forgetting the 2:1 ratio and giving $480\\text{ cm}^3$.", "Saying fluorine is more reactive because it has more electrons."],
            examinerNote: "In (b) allow ecf for a wrong ratio. Allow 0.24 dm³ for A1 only if the conversion is clear. Reject 'explodes' or 'hydrogen produced' for (c) observations.",
          },
        },
      ],
    },
    {
      id: "ech10-u3-atmosphere-gases",
      title: "Gases in the atmosphere",
      skill: "State the composition of dry air, prepare and test oxygen and carbon dioxide, and explain the greenhouse effect.",
      lesson: {
        sections: [
          {
            heading: "Composition of the air",
            body: "Dry air is about $78\\%$ nitrogen, $21\\%$ oxygen, about $1\\%$ argon (and other noble gases) and about $0.04\\%$ carbon dioxide. The percentage of oxygen can be found by passing air over heated copper in a syringe apparatus. The copper reacts with the oxygen, the volume decreases and:\n\n$$\\% \\text{ oxygen} = \\frac{\\text{decrease in volume}}{\\text{original volume}} \\times 100$$",
          },
          {
            heading: "Making and testing oxygen and carbon dioxide",
            body: "**Oxygen** is made by decomposing hydrogen peroxide with a manganese(IV) oxide catalyst:\n\n$$2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$$\n\nTest: a **glowing splint relights**.\n\n**Carbon dioxide** is made by adding dilute hydrochloric acid to calcium carbonate (marble chips):\n\n$$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$$\n\nTest: bubble the gas through **limewater**, which turns **cloudy (milky)**.",
          },
          {
            heading: "Carbon dioxide and climate",
            body: "Carbon dioxide is a greenhouse gas. The Earth's surface emits infrared radiation, which carbon dioxide and other greenhouse gases absorb and re-emit, some back towards the surface. Burning fossil fuels and deforestation increase the concentration of carbon dioxide and this contributes to global warming and climate change.",
          },
        ],
        keyFormulas: [
          { name: "Composition of dry air", statement: "$78\\%\\ \\text{N}_2$, $21\\%\\ \\text{O}_2$, about $1\\%$ argon, $0.04\\%\\ \\text{CO}_2$" },
          { name: "Test for oxygen", statement: "Relights a glowing splint" },
          { name: "Test for carbon dioxide", statement: "Turns limewater cloudy" },
          { name: "Marble chips and acid", statement: "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$" },
        ],
        workedExample: {
          problem: "$50\\text{ cm}^3$ of air is passed over heated copper. The final volume is $39.5\\text{ cm}^3$. Calculate the percentage of oxygen in the air.",
          solution: "Decrease in volume $= 50 - 39.5 = 10.5\\text{ cm}^3$. Percentage $= \\frac{10.5}{50} \\times 100 = 21\\%$.",
        },
      },
      questions: [
        {
          id: "ech10-u3-atmosphere-gases-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the approximate percentage of nitrogen in dry air?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$21\\%$" },
              { id: "b", text: "$50\\%$" },
              { id: "c", text: "$78\\%$" },
              { id: "d", text: "$99\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Composition of air", statement: "Dry air is about 78% nitrogen, 21% oxygen, 1% argon and 0.04% carbon dioxide." },
            ],
            steps: [
              { reasoning: "Nitrogen is the most abundant gas in air at about $78\\%$.", working: "78\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $78\\%$",
            commonErrors: ["Choosing $21\\%$, which is the percentage of oxygen."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ech10-u3-atmosphere-gases-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student passes $80\\text{ cm}^3$ of air over heated copper until the volume stops changing. The final volume of gas is $63\\text{ cm}^3$. Calculate the percentage of oxygen in the air. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Percentage of oxygen", answer: 21, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of oxygen", statement: "$\\% \\text{ oxygen} = \\frac{\\text{decrease in volume}}{\\text{original volume}} \\times 100$" },
            ],
            steps: [
              { reasoning: "The decrease in volume is the oxygen used by the copper; divide by the original volume.", working: "\\frac{80 - 63}{80} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac{17}{80} \\times 100 = 21.25$, which is $21\\%$ to 2 s.f.", working: "21\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21\\%$",
            commonErrors: ["Dividing by the final volume: $\\frac{17}{63} \\times 100 = 27\\%$.", "Giving $63 \\div 80 = 79\\%$, which is the percentage of gas left."],
            examinerNote: "M1 for $\\frac{17}{80}$ seen. A1 for 21 (allow 21.25).",
          },
        },
        {
          id: "ech10-u3-atmosphere-gases-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Oxygen can be made in the laboratory from hydrogen peroxide solution. Give the balanced symbol equation, name the catalyst used, and describe the test for oxygen with its result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catalyst", statement: "A catalyst speeds up a reaction and is not used up." },
              { kind: "law", name: "Conservation of mass", statement: "Atoms are conserved, so the equation must balance." },
            ],
            steps: [
              { reasoning: "Correct formulae: $\\text{H}_2\\text{O}_2 \\rightarrow \\text{H}_2\\text{O} + \\text{O}_2$.", marks: 1, markCode: "B" },
              { reasoning: "Balance the oxygen atoms: 2 hydrogen peroxide give 2 water and 1 oxygen molecule.", working: "2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2", marks: 1, markCode: "B" },
              { reasoning: "The catalyst is manganese(IV) oxide (manganese dioxide), $\\text{MnO}_2$.", marks: 1, markCode: "B" },
              { reasoning: "Place a glowing splint in the gas: it relights.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$; manganese(IV) oxide; glowing splint relights",
            commonErrors: ["Using a lit splint and a squeaky pop (the test for hydrogen).", "Writing the oxygen product as $\\text{O}$."],
            examinerNote: "Ignore state symbols. Allow $\\text{MnO}_2$ for the catalyst. Reject 'splint lights' without 'glowing'.",
          },
        },
        {
          id: "ech10-u3-atmosphere-gases-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student makes carbon dioxide by adding dilute hydrochloric acid to marble chips (calcium carbonate, $\\text{CaCO}_3$).\n\nUse $A_r$: H $= 1$, C $= 12$, O $= 16$, Ca $= 40$.",
          parts: [
            { label: "a", prompt: "Write the balanced symbol equation for the reaction.", marks: 2 },
            { label: "b", prompt: "Describe the test for carbon dioxide and the result.", marks: 2 },
            { label: "c", prompt: "Calculate the maximum mass of carbon dioxide produced from $5.0\\text{ g}$ of calcium carbonate.", marks: 3 },
            { label: "d", prompt: "Explain how an increase in the concentration of carbon dioxide in the atmosphere leads to global warming.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "principle", name: "Greenhouse effect", statement: "Greenhouse gases absorb infrared radiation from the Earth's surface and re-emit some of it back towards the surface." },
            ],
            steps: [
              { part: "a", reasoning: "Correct formulae for reactants and products.", working: "\\text{CaCO}_3 + \\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Balance by using 2 HCl.", working: "\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Bubble the gas through limewater (calcium hydroxide solution).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The limewater turns cloudy (milky).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$M_r$ of $\\text{CaCO}_3 = 40 + 12 + 3 \\times 16 = 100$, so moles of $\\text{CaCO}_3$ is $\\frac{5.0}{100}$.", working: "\\frac{5.0}{100} = 0.050\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The ratio $\\text{CaCO}_3 : \\text{CO}_2$ is $1:1$, and $M_r$ of $\\text{CO}_2 = 12 + 32 = 44$.", working: "0.050 \\times 44", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with a unit.", working: "2.2\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Carbon dioxide is a greenhouse gas that absorbs infrared radiation emitted by the Earth's surface.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It re-emits some of this radiation back to the surface, so less heat escapes to space and the average temperature rises.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$ (b) limewater turns cloudy (c) $2.2\\text{ g}$ (d) CO$_2$ absorbs and re-emits infrared radiation, trapping heat",
            commonErrors: ["Using $M_r$ of $\\text{CaCO}_3$ as 68 by missing the factor of 3 on oxygen.", "Saying carbon dioxide 'makes a hole in the ozone layer'.", "Saying greenhouse gases 'reflect' heat like glass without referring to infrared radiation."],
            examinerNote: "In (a) ignore state symbols. In (c) allow ecf from a wrong $M_r$. Allow 'heat' for 'infrared' in (d) only for one mark.",
          },
        },
      ],
    },
  ],
};
