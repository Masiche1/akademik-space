import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "esc9-u2-lesson-2-2",
  code: "2-2",
  title: "The Periodic Table",
  goal: "I CAN describe how the periodic table is organised, compare metals and non-metals, and explain the trends and reactions of Group 1, Group 7 and Group 0.",
  standards: ["KS3 Chemistry", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Group", definition: "A vertical column of the periodic table. Elements in the same group have the same number of outer-shell electrons and similar chemical properties." },
    { term: "Period", definition: "A horizontal row of the periodic table. The period number is the number of occupied electron shells." },
    { term: "Alkali metal", definition: "An element in Group 1. Alkali metals are soft, have low melting points and react with water to form alkaline solutions." },
    { term: "Halogen", definition: "An element in Group 7. Halogens are non-metals that exist as diatomic molecules, such as $\\text{Cl}_2$." },
    { term: "Noble gas", definition: "An element in Group 0. Noble gases are colourless, monatomic gases with full outer shells, so they are very unreactive." },
    { term: "Displacement reaction", definition: "A reaction in which a more reactive element takes the place of a less reactive element in a compound." },
    { term: "Diatomic molecule", definition: "A molecule made of two atoms joined together, for example $\\text{Br}_2$." },
  ],
  concepts: [
    {
      id: "esc9-u2-groups-periods-metals",
      title: "Groups, periods, metals and non-metals",
      skill: "Use the layout of the periodic table to describe groups and periods, and compare the properties of metals and non-metals.",
      lesson: {
        sections: [
          {
            heading: "How the periodic table is arranged",
            body: "The elements are arranged in order of increasing **atomic number**. The vertical columns are **groups** and the horizontal rows are **periods**. Elements in the same group have the same number of electrons in their outer shell, so they have similar chemical properties. The period number tells you how many electron shells an atom has.\n\nMost elements are metals. They are found to the left and in the centre of the table. Non-metals are found on the right-hand side, and hydrogen is also a non-metal. A staircase line separates the two types.",
          },
          {
            heading: "Properties of metals and non-metals",
            body: "**Metals** are usually shiny, malleable (can be hammered into shape) and ductile (can be drawn into wires). They are good conductors of heat and electricity, have high melting and boiling points, and are usually solid at room temperature (mercury is a liquid). Their oxides are usually basic.\n\n**Non-metals** are usually dull, brittle when solid and poor conductors of heat and electricity (graphite is an exception). They tend to have lower melting and boiling points, and many are gases at room temperature. Their oxides are usually acidic.",
          },
        ],
        keyFormulas: [
          { name: "Group", statement: "Same group = same number of outer-shell electrons = similar chemical properties" },
          { name: "Period", statement: "Period number = number of occupied electron shells" },
          { name: "Metals vs non-metals", statement: "Metals: shiny, malleable, conduct. Non-metals: dull, brittle, insulators (usually)." },
        ],
        workedExample: {
          problem: "An element has the electron arrangement 2.8.2. Name its group and period, and say whether it is a metal or a non-metal.",
          solution: "There are 2 electrons in the outer shell, so it is in Group 2. There are three shells, so it is in Period 3. It is on the left of the table, so it is a metal. (The element is magnesium.)",
        },
      },
      questions: [
        {
          id: "esc9-u2-groups-periods-metals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about a group in the periodic table is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The elements in a group have the same number of outer-shell electrons." },
              { id: "b", text: "The elements in a group have the same atomic number." },
              { id: "c", text: "The elements in a group are all metals." },
              { id: "d", text: "The elements in a group have the same number of electron shells." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group", statement: "Elements in a group have the same number of outer-shell electrons, giving similar chemical properties." },
            ],
            steps: [
              { reasoning: "Elements in a group have the same number of outer electrons. The number of shells is the period number, which changes down a group.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The elements in a group have the same number of outer-shell electrons.",
            commonErrors: ["Confusing group and period, choosing (a).", "Thinking atomic number is shared, but it is different for every element.", "Thinking groups contain only metals; Group 7 and Group 0 contain non-metals."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "esc9-u2-groups-periods-metals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Periods 1, 2 and 3 of the periodic table contain 2, 8 and 8 elements respectively. Calculate the atomic number of the last element in Period 3.",
          response: { type: "numeric", parts: [{ label: "Atomic number", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order of the table", statement: "Elements are arranged in order of increasing atomic number, so the last element in a period has the atomic number equal to the total number of elements up to that point." },
            ],
            steps: [
              { reasoning: "Add the number of elements in the first three periods.", working: "2 + 8 + 8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. This is argon, which has 18 protons.", working: "= 18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$ (argon)",
            commonErrors: ["Giving 8 or 10, counting only one or two periods.", "Giving 17, the atomic number of chlorine."],
            examinerNote: "M1 for 2 + 8 + 8. A1 for 18 cao.",
          },
        },
        {
          id: "esc9-u2-groups-periods-metals-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Element X is a shiny solid that conducts electricity, can be hammered into sheets and melts at $660\\,^\\circ\\text{C}$. Element Y is a dull yellow solid that is brittle, does not conduct electricity and melts at $115\\,^\\circ\\text{C}$. Decide which element is a metal and which is a non-metal, giving three pieces of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Metals", statement: "Metals are shiny, malleable, good electrical conductors and have high melting points." },
              { kind: "property", name: "Non-metals", statement: "Non-metals are dull, brittle, poor electrical conductors and have lower melting points." },
            ],
            steps: [
              { reasoning: "Identify the metal, using evidence from its properties: shiny, conducts electricity, malleable (any two of these).", marks: 1, markCode: "B" },
              { reasoning: "Link the high melting point of X ($660\\,^\\circ\\text{C}$) to a metal and the low melting point of Y ($115\\,^\\circ\\text{C}$) to a non-metal.", marks: 1, markCode: "B" },
              { reasoning: "Conclude: X is a metal and Y is a non-metal, with Y's dull appearance and brittleness supporting this.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "X is the metal (shiny, conducts, malleable, high melting point); Y is the non-metal (dull, brittle, insulator, low melting point).",
            commonErrors: ["Reversing the classification because Y is a solid.", "Using only melting point as evidence, when 660 and 115 alone cannot prove the type."],
            examinerNote: "Allow any three correct properties across the two elements. R1 only if both elements are correctly classified (ecf from an incorrect classification if the evidence matches it).",
          },
        },
        {
          id: "esc9-u2-groups-periods-metals-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student tests four elements, P, Q, R and S, at room temperature. The results are shown below.\n\n- P: grey solid, conducts electricity, is hammered flat without breaking\n- Q: yellow solid, does not conduct electricity, shatters when hit\n- R: colourless gas, does not conduct electricity\n- S: silver-grey solid, conducts electricity, can be drawn into a wire\n\nElement R has the electron arrangement 2.8.8.",
          parts: [
            { label: "a", prompt: "Identify the two metals from P, Q, R and S.", marks: 2 },
            { label: "b", prompt: "Name the property of P shown when it is hammered flat without breaking.", marks: 1 },
            { label: "c", prompt: "State the group and the period of element R.", marks: 2 },
            { label: "d", prompt: "Explain why element S would be suitable for making electrical wiring.", marks: 2 },
            { label: "e", prompt: "The student concludes that all non-metals are gases. Use the results to evaluate this conclusion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Metals", statement: "Metals conduct electricity and are malleable and ductile." },
              { kind: "principle", name: "Group and period", statement: "Group = outer-shell electrons; period = number of shells." },
            ],
            steps: [
              { part: "a", reasoning: "P conducts electricity and is malleable, so it is a metal.", working: "\\text{P}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "S conducts electricity and is ductile, so it is a metal.", working: "\\text{S}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Being hammered into shape without breaking is malleability.", working: "\\text{malleable}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "R has 2.8.8, which has 8 outer electrons: Group 0.", working: "\\text{Group 0}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "R has three occupied shells: Period 3.", working: "\\text{Period 3}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "S is a good conductor of electricity, so current can flow easily through it.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "S is ductile, so it can be drawn out into wires.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The conclusion is not supported: Q is a non-metal (yellow, brittle, non-conductor) that is a solid, not a gas.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Only R of the non-metals tested is a gas, so a sample of only two non-metals is too small to support a general conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) P and S (b) malleable (c) Group 0, Period 3 (d) good conductor and ductile (e) not valid: Q is a solid non-metal and the sample is small.",
            commonErrors: ["Choosing Q as a metal because it is a solid.", "Giving 'strong' or 'hard' as the property in (b).", "Giving Group 8 for R; the noble gases are Group 0.", "Giving Period 8 or Period 2 from the number of outer electrons or the number of outer shells."],
            examinerNote: "(c) The arrangement 2.8.8 gives Period 3, Group 0. Allow 'Group 8' only if 'noble gas' is also stated (oe). (e) Allow 'bromine is a liquid' or 'sulfur is a solid' as supporting evidence from knowledge.",
          },
        },
      ],
    },
    {
      id: "esc9-u2-group-trends",
      title: "Group 1, Group 7 and Group 0",
      skill: "Describe and explain the trends in reactivity and physical properties of the alkali metals, halogens and noble gases.",
      lesson: {
        sections: [
          {
            heading: "Group 1: the alkali metals",
            body: "Lithium, sodium and potassium are soft metals with low melting points and low densities. Their reactivity **increases** down the group. They react with water to form a metal hydroxide (an alkaline solution) and hydrogen gas:\n\n$2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2$\n\nLithium fizzes steadily, sodium melts into a ball and fizzes quickly, and potassium burns with a lilac flame. Going down the group the outer electron is further from the nucleus, so it is held less strongly and is lost more easily.",
          },
          {
            heading: "Group 7: the halogens",
            body: "Fluorine, chlorine, bromine and iodine are non-metals that exist as diatomic molecules ($\\text{F}_2$, $\\text{Cl}_2$, $\\text{Br}_2$, $\\text{I}_2$). At room temperature chlorine is a pale green gas, bromine is a red-brown liquid and iodine is a grey solid. Melting and boiling points **increase** down the group.\n\nReactivity **decreases** down the group. A more reactive halogen displaces a less reactive halogen from its compound:\n\n$\\text{Cl}_2 + 2\\text{KBr} \\rightarrow 2\\text{KCl} + \\text{Br}_2$",
          },
          {
            heading: "Group 0: the noble gases",
            body: "Helium, neon, argon, krypton and xenon are colourless gases made of single atoms (monatomic). They have full outer shells, so they do not need to gain, lose or share electrons and are very unreactive. Their boiling points increase down the group. Helium is used in balloons because it is less dense than air and non-flammable, and argon is used in filament lamps because it does not react with the hot filament.",
          },
        ],
        keyFormulas: [
          { name: "Group 1 reactivity", statement: "Increases down the group" },
          { name: "Group 7 reactivity", statement: "Decreases down the group" },
          { name: "Alkali metal and water", statement: "$2\\text{M} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{MOH} + \\text{H}_2$" },
          { name: "Halogen displacement", statement: "A more reactive halogen displaces a less reactive one from a solution of its salt" },
        ],
        workedExample: {
          problem: "Lithium reacts with water. Write a balanced equation and state the pH of the resulting solution.",
          solution: "Lithium forms lithium hydroxide and hydrogen: $2\\text{Li} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{LiOH} + \\text{H}_2$. Count atoms: left 2 Li, 4 H, 2 O; right 2 Li, 2 O, 2 + 2 = 4 H. It balances. Lithium hydroxide is an alkali, so the solution has a pH greater than 7.",
        },
      },
      questions: [
        {
          id: "esc9-u2-group-trends-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is produced when sodium reacts with water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chlorine" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Alkali metals with water", statement: "$2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2$" },
            ],
            steps: [
              { reasoning: "Sodium displaces hydrogen from water, forming sodium hydroxide and hydrogen gas.", working: "2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Hydrogen",
            commonErrors: ["Choosing oxygen because water contains oxygen.", "Choosing carbon dioxide, which would require carbon."],
            examinerNote: "B1 for hydrogen.",
          },
        },
        {
          id: "esc9-u2-group-trends-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The boiling points of three noble gases are: argon $-186\\,^\\circ\\text{C}$, krypton $-153\\,^\\circ\\text{C}$ and xenon $-108\\,^\\circ\\text{C}$. Calculate the difference between the boiling points of xenon and argon.",
          response: { type: "numeric", parts: [{ label: "Difference in boiling point", answer: 78, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trend in Group 0", statement: "Boiling points of the noble gases increase down the group." },
            ],
            steps: [
              { reasoning: "Subtract the lower boiling point from the higher one, taking care with the negative values.", working: "-108 - (-186) = -108 + 186", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 78\\,^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$78\\,^\\circ\\text{C}$",
            commonErrors: ["Subtracting the numbers without signs, giving $294$ by adding $108 + 186$.", "Giving $-78$."],
            examinerNote: "M1 for $-108 - (-186)$ or equivalent. A1 for 78 with correct unit. Reject $-78$.",
          },
        },
        {
          id: "esc9-u2-group-trends-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Potassium is more reactive than lithium. Explain this difference in reactivity in terms of electron arrangement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity of metals", statement: "A metal reacts by losing outer-shell electrons; the more easily it loses them, the more reactive it is." },
              { kind: "principle", name: "Shielding and distance", statement: "The further the outer electron is from the nucleus, the weaker the attraction and the more easily it is lost." },
            ],
            steps: [
              { reasoning: "Both lithium and potassium have one electron in their outer shell, so both are in Group 1.", marks: 1, markCode: "B" },
              { reasoning: "A potassium atom has more electron shells than a lithium atom (four compared with two).", marks: 1, markCode: "B" },
              { reasoning: "The outer electron in potassium is further from the nucleus, so the attraction to the nucleus is weaker.", marks: 1, markCode: "B" },
              { reasoning: "The outer electron is therefore lost more easily, so potassium is more reactive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Potassium has more shells, so its outer electron is further from the nucleus, held less strongly and lost more easily, making it more reactive.",
            commonErrors: ["Saying potassium is more reactive because it has more outer electrons.", "Saying potassium has a larger nucleus so it is heavier and reacts faster, with no reference to the outer electron."],
            examinerNote: "Allow 'energy level' for 'shell'. Reject any explanation that refers to the atoms being 'bigger' without reference to attraction.",
          },
        },
        {
          id: "esc9-u2-group-trends-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "The table gives some data for three halogens.\n\n- Chlorine: melting point $-101\\,^\\circ\\text{C}$, boiling point $-34\\,^\\circ\\text{C}$\n- Bromine: melting point $-7\\,^\\circ\\text{C}$, boiling point $59\\,^\\circ\\text{C}$\n- Iodine: melting point $114\\,^\\circ\\text{C}$, boiling point $184\\,^\\circ\\text{C}$\n\nRoom temperature is $20\\,^\\circ\\text{C}$.",
          parts: [
            { label: "a", prompt: "State the physical state of each halogen at room temperature.", marks: 3 },
            { label: "b", prompt: "Calculate the difference between the boiling points of iodine and bromine.", marks: 2 },
            { label: "c", prompt: "Describe the trend in the boiling points of the halogens down the group.", marks: 1 },
            { label: "d", prompt: "Chlorine gas is bubbled into a solution of potassium bromide. Describe what you would see and write a balanced equation for the reaction.", marks: 3 },
            { label: "e", prompt: "Explain why iodine does not react with a solution of potassium bromide.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "States of matter", statement: "A substance is a solid below its melting point, a liquid between melting and boiling points, and a gas above its boiling point." },
              { kind: "principle", name: "Halogen displacement", statement: "A more reactive halogen displaces a less reactive halogen from its salt solution." },
              { kind: "principle", name: "Trend in reactivity", statement: "Reactivity decreases down Group 7." },
            ],
            steps: [
              { part: "a", reasoning: "Chlorine's boiling point is $-34\\,^\\circ\\text{C}$, below $20\\,^\\circ\\text{C}$, so it is a gas.", working: "\\text{chlorine: gas}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Bromine: $20\\,^\\circ\\text{C}$ is above its melting point ($-7\\,^\\circ\\text{C}$) and below its boiling point ($59\\,^\\circ\\text{C}$), so it is a liquid.", working: "\\text{bromine: liquid}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Iodine: $20\\,^\\circ\\text{C}$ is below its melting point ($114\\,^\\circ\\text{C}$), so it is a solid.", working: "\\text{iodine: solid}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the boiling point of bromine from that of iodine.", working: "184 - 59", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "= 125\\,^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The boiling points increase down the group.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The solution changes from colourless to orange/brown (bromine is produced).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Chlorine is more reactive than bromine, so it displaces bromine from potassium bromide, forming potassium chloride.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Write the balanced equation.", working: "\\text{Cl}_2 + 2\\text{KBr} \\rightarrow 2\\text{KCl} + \\text{Br}_2", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Iodine is less reactive than bromine, because reactivity decreases down Group 7.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A less reactive halogen cannot displace a more reactive halogen from its compound, so there is no reaction.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) chlorine gas, bromine liquid, iodine solid (b) $125\\,^\\circ\\text{C}$ (c) increases down the group (d) colourless to orange/brown; $\\text{Cl}_2 + 2\\text{KBr} \\rightarrow 2\\text{KCl} + \\text{Br}_2$ (e) iodine is less reactive than bromine so cannot displace it.",
            commonErrors: ["Saying bromine is a gas because it has a low boiling point relative to iodine.", "Writing the equation with unbalanced $\\text{Br}_2$ or using $\\text{Cl}$ instead of $\\text{Cl}_2$.", "Saying iodine does not react because it is a solid."],
            examinerNote: "(d) Allow yellow, orange, brown or red-brown for the colour. Allow state symbols in the equation. Reject an unbalanced equation for the third mark.",
          },
        },
      ],
    },
  ],
};
