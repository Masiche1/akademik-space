import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ech11-u3-lesson-3-3",
  code: "3-3",
  title: "Alcohols, Acids, Esters and Polymers",
  goal: "I CAN describe how ethanol is made and oxidised, how esters form, and compare addition and condensation polymers.",
  standards: ["4CH1 4.24", "4CH1 4.29", "4CH1 4.34", "4CH1 4.44"],
  vocabulary: [
    { term: "Alcohol", definition: "A compound containing the $-\\text{OH}$ functional group, for example ethanol, $\\text{C}_2\\text{H}_5\\text{OH}$." },
    { term: "Carboxylic acid", definition: "A compound containing the $-\\text{COOH}$ functional group, for example ethanoic acid, $\\text{CH}_3\\text{COOH}$." },
    { term: "Ester", definition: "A compound made when an alcohol reacts with a carboxylic acid. It contains the $-\\text{COO}-$ group and often has a fruity smell." },
    { term: "Fermentation", definition: "The conversion of glucose into ethanol and carbon dioxide by yeast, in the absence of oxygen." },
    { term: "Monomer", definition: "A small molecule that joins with many others to form a polymer." },
    { term: "Addition polymerisation", definition: "Monomers containing a $\\text{C=C}$ bond join together to form a polymer as the only product." },
    { term: "Condensation polymerisation", definition: "Monomers with two functional groups join together, and a small molecule such as water is lost at each link." },
  ],
  concepts: [
    {
      id: "ech11-u3-alcohols-acids-esters",
      title: "Alcohols, carboxylic acids and esters",
      skill: "Describe the manufacture and oxidation of ethanol, the reactions of carboxylic acids, and the formation of esters.",
      lesson: {
        sections: [
          {
            heading: "Alcohols and making ethanol",
            body: "**Alcohols** contain the $-\\text{OH}$ group and have the general formula $\\text{C}_n\\text{H}_{2n+1}\\text{OH}$: methanol, ethanol, propanol, butanol.\n\nEthanol is made in two ways:\n\n- **Fermentation**: yeast converts glucose to ethanol at about $30^\\circ\\text{C}$ with no oxygen present: $\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$. It uses renewable sugar but is slow and gives dilute ethanol that must be distilled.\n- **Hydration of ethene**: $\\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{C}_2\\text{H}_5\\text{OH}$ at $300^\\circ\\text{C}$, 60 to 70 atmospheres, with a phosphoric acid catalyst. It is fast and continuous and gives pure ethanol, but uses ethene from crude oil, which is non-renewable.",
          },
          {
            heading: "Oxidising ethanol to ethanoic acid",
            body: "Ethanol can be **oxidised** to ethanoic acid, $\\text{CH}_3\\text{COOH}$:\n\n- by microbes in air (this is why wine left open turns sour, into vinegar)\n- by heating with acidified potassium dichromate(VI), which changes from **orange to green**.\n\n**Carboxylic acids** contain the $-\\text{COOH}$ group: methanoic acid $\\text{HCOOH}$, ethanoic acid $\\text{CH}_3\\text{COOH}$, propanoic acid $\\text{C}_2\\text{H}_5\\text{COOH}$. They are weak acids and react like other acids, for example with carbonates:\n\n$2\\text{CH}_3\\text{COOH} + \\text{Na}_2\\text{CO}_3 \\rightarrow 2\\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2$",
          },
          {
            heading: "Esters",
            body: "An alcohol reacts with a carboxylic acid, with a few drops of **concentrated sulfuric acid** as a catalyst, to form an **ester** and water:\n\n$\\text{C}_2\\text{H}_5\\text{OH} + \\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$\n\nThe ester is named with the alcohol part first and the acid part second: ethanol + ethanoic acid gives **ethyl ethanoate**. Esters are volatile and have fruity smells, so they are used in **flavourings and perfumes**.",
          },
        ],
        keyFormulas: [
          { name: "Fermentation", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$" },
          { name: "Esterification", statement: "alcohol + carboxylic acid $\\rightleftharpoons$ ester + water (conc. $\\text{H}_2\\text{SO}_4$ catalyst)" },
          { name: "Percentage yield", statement: "$\\text{percentage yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$" },
        ],
        workedExample: {
          problem: "Name the ester formed from methanol and propanoic acid.",
          solution: "Use the alcohol part first, changing -anol to -yl: methanol gives **methyl**. The acid part changes -oic acid to -oate: propanoic acid gives **propanoate**. The ester is methyl propanoate.",
        },
      },
      questions: [
        {
          id: "ech11-u3-alcohols-acids-esters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which functional group is found in all carboxylic acids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{C=C}$" },
              { id: "b", text: "$-\\text{COOH}$" },
              { id: "c", text: "$-\\text{OH}$" },
              { id: "d", text: "$-\\text{COO}-$ between two carbon chains" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carboxylic acid", statement: "Carboxylic acids contain the $-\\text{COOH}$ functional group." },
            ],
            steps: [
              { reasoning: "The $-\\text{OH}$ group is in alcohols, $\\text{C=C}$ in alkenes and $-\\text{COO}-$ between chains in esters. Carboxylic acids have $-\\text{COOH}$.", working: "-\\text{COOH}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $-\\text{COOH}$",
            commonErrors: ["Choosing (a), the alcohol functional group.", "Choosing (d), which describes an ester."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ech11-u3-alcohols-acids-esters-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Ethanol can be made by fermentation of glucose or by hydration of ethene. Give two advantages of each method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Making ethanol", statement: "Fermentation uses renewable sugar at low temperature but is slow and gives impure ethanol. Hydration is fast, continuous and gives pure ethanol but uses non-renewable crude oil." },
            ],
            steps: [
              { reasoning: "Fermentation uses a renewable raw material (sugar from plants).", marks: 1, markCode: "B" },
              { reasoning: "Fermentation needs a low temperature and normal pressure, so it uses less energy (or simple equipment).", marks: 1, markCode: "B" },
              { reasoning: "Hydration is fast (or a continuous process).", marks: 1, markCode: "B" },
              { reasoning: "Hydration gives pure ethanol, with no distillation needed (or a high atom economy, with ethanol the only product).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Fermentation: renewable raw material, low temperature and pressure. Hydration: fast and continuous, gives pure ethanol.",
            commonErrors: ["Saying that hydration uses renewable ethene; ethene comes from crude oil.", "Giving 'cheap' with no reason."],
            examinerNote: "Max 2 marks for each method. Allow 'carbon neutral' for fermentation.",
          },
        },
        {
          id: "ech11-u3-alcohols-acids-esters-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Glucose is fermented: $\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$. Calculate the maximum mass of ethanol, in grams, that can be made from $90\\text{ g}$ of glucose. ($A_r$: C = 12, H = 1, O = 16)",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of ethanol (g)", answer: 46 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "principle", name: "Mole ratio", statement: "The balanced equation gives the ratio of moles: 1 mol glucose gives 2 mol ethanol." },
            ],
            steps: [
              { reasoning: "$M_r(\\text{C}_6\\text{H}_{12}\\text{O}_6) = 72 + 12 + 96 = 180$. Find the moles of glucose.", working: "\\frac{90}{180} = 0.50\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Use the 1 : 2 ratio to find the moles of ethanol.", working: "0.50 \\times 2 = 1.0\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "$M_r(\\text{C}_2\\text{H}_5\\text{OH}) = 24 + 6 + 16 = 46$. Multiply by the moles.", working: "1.0 \\times 46 = 46\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$46\\text{ g}$",
            commonErrors: ["Ignoring the 2 in the equation and giving $23\\text{ g}$.", "Using $M_r = 45$ for ethanol by missing a hydrogen atom."],
            examinerNote: "A1 cao 46. Allow ecf for the final mark from a wrong number of moles.",
          },
        },
        {
          id: "ech11-u3-alcohols-acids-esters-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student heats ethanol with ethanoic acid and a few drops of concentrated sulfuric acid to make an ester. ($A_r$: C = 12, H = 1, O = 16)",
          parts: [
            { label: "a", prompt: "Name the ester formed.", marks: 1 },
            { label: "b", prompt: "Write a balanced equation for the reaction, using formulae.", marks: 2 },
            { label: "c", prompt: "State the role of the concentrated sulfuric acid.", marks: 1 },
            { label: "d", prompt: "Calculate the theoretical mass of ester made from $6.0\\text{ g}$ of ethanoic acid, with ethanol in excess.", marks: 3 },
            { label: "e", prompt: "The student makes $6.6\\text{ g}$ of ester. Calculate the percentage yield.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Esterification", statement: "alcohol + carboxylic acid $\\rightleftharpoons$ ester + water, catalysed by concentrated sulfuric acid." },
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "formula", name: "Percentage yield", statement: "$\\frac{\\text{actual}}{\\text{theoretical}} \\times 100$" },
            ],
            steps: [
              { part: "a", reasoning: "Alcohol part first (ethyl), then the acid part (ethanoate).", working: "\\text{ethyl ethanoate}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Correct formulas for the reactants and products.", working: "\\text{C}_2\\text{H}_5\\text{OH},\\ \\text{CH}_3\\text{COOH},\\ \\text{CH}_3\\text{COOC}_2\\text{H}_5,\\ \\text{H}_2\\text{O}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The equation balances 1 : 1 : 1 : 1 (4 C, 10 H and 3 O on each side).", working: "\\text{C}_2\\text{H}_5\\text{OH} + \\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is a catalyst: it speeds up the reaction without being used up.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$M_r(\\text{CH}_3\\text{COOH}) = 24 + 4 + 32 = 60$. Find the moles of acid.", working: "\\frac{6.0}{60} = 0.10\\text{ mol}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The ratio is 1 : 1. $M_r(\\text{CH}_3\\text{COOC}_2\\text{H}_5) = 48 + 8 + 32 = 88$.", working: "0.10 \\times 88", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "8.8\\text{ g}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Substitute into the percentage yield formula.", working: "\\frac{6.6}{8.8} \\times 100", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ethyl ethanoate (b) $\\text{C}_2\\text{H}_5\\text{OH} + \\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$ (c) catalyst (d) $8.8\\text{ g}$ (e) $75\\%$",
            commonErrors: ["Naming the ester ethanoyl ethyl or ethyl ethanol.", "Leaving water out of the equation.", "Dividing theoretical by actual in (e), giving more than 100%."],
            examinerNote: "In (b) allow $\\rightarrow$ for $\\rightleftharpoons$. Allow ecf in (e) from a wrong answer to (d).",
          },
        },
      ],
    },
    {
      id: "ech11-u3-addition-condensation-polymers",
      title: "Addition and condensation polymers",
      skill: "Draw repeat units of addition polymers, compare addition and condensation polymerisation, and explain disposal problems.",
      lesson: {
        sections: [
          {
            heading: "Addition polymers",
            body: "Monomers with a $\\text{C=C}$ double bond join in long chains. The double bond opens and the monomers link, so the polymer is the **only product**.\n\n| Monomer | Polymer | Use |\n| --- | --- | --- |\n| ethene $\\text{CH}_2\\text{=CH}_2$ | poly(ethene) | plastic bags, bottles |\n| propene $\\text{CH}_2\\text{=CHCH}_3$ | poly(propene) | crates, ropes |\n| chloroethene $\\text{CH}_2\\text{=CHCl}$ | poly(chloroethene), PVC | window frames, pipes |\n| tetrafluoroethene $\\text{CF}_2\\text{=CF}_2$ | PTFE | non-stick pans |\n\nTo draw the **repeat unit**, change the double bond to a single bond, draw bonds out of each side through brackets and add $n$: poly(ethene) is $-[\\text{CH}_2-\\text{CH}_2]_n-$.",
          },
          {
            heading: "Condensation polymers",
            body: "In **condensation polymerisation**, each monomer has **two functional groups**. When two monomers join, a small molecule (usually **water**) is lost.\n\nA **polyester** forms from a **dicarboxylic acid** (two $-\\text{COOH}$ groups) and a **diol** (two $-\\text{OH}$ groups). Each ester link made releases one water molecule. PET, used for drinks bottles and clothing fibres, is a polyester.\n\nSo: addition polymers come from one type of monomer with $\\text{C=C}$ and give one product; condensation polymers usually come from two different monomers and give the polymer plus water.",
          },
          {
            heading: "Problems with disposal",
            body: "Addition polymers such as poly(ethene) are **inert** and **not biodegradable**, so they persist in landfill and the oceans for hundreds of years. Burning them releases energy but can produce toxic gases; burning PVC produces **hydrogen chloride**. Some polyesters are **biodegradable**, because microbes can break the ester links, and PET can be **recycled** into new bottles and fibres.",
          },
        ],
        keyFormulas: [
          { name: "Addition polymerisation", statement: "$n\\,\\text{CH}_2\\text{=CH}_2 \\rightarrow -[\\text{CH}_2-\\text{CH}_2]_n-$" },
          { name: "Condensation polymerisation", statement: "diol + dicarboxylic acid $\\rightarrow$ polyester + water" },
          { name: "Number of repeat units", statement: "$n = \\frac{M_r(\\text{polymer})}{M_r(\\text{repeat unit})}$" },
        ],
        workedExample: {
          problem: "Draw the repeat unit of poly(propene).",
          solution: "Propene is $\\text{CH}_2\\text{=CHCH}_3$. Open the double bond, keep the $\\text{CH}_3$ as a side group on the second carbon, and draw bonds out through brackets: $-[\\text{CH}_2-\\text{CH(CH}_3\\text{)}]_n-$. The main chain has only two carbon atoms; the $\\text{CH}_3$ hangs off it.",
        },
      },
      questions: [
        {
          id: "ech11-u3-addition-condensation-polymers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which monomer is used to make PVC, poly(chloroethene)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{CF}_2\\text{=CF}_2$" },
              { id: "b", text: "$\\text{CH}_2\\text{=CH}_2$" },
              { id: "c", text: "$\\text{CH}_3\\text{CH}_2\\text{Cl}$" },
              { id: "d", text: "$\\text{CH}_2\\text{=CHCl}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Addition monomers", statement: "Addition polymers form from monomers with a $\\text{C=C}$ bond; the polymer name is poly(monomer name)." },
            ],
            steps: [
              { reasoning: "Poly(chloroethene) is made from chloroethene, which has a $\\text{C=C}$ bond and one chlorine atom.", working: "\\text{CH}_2\\text{=CHCl}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\text{CH}_2\\text{=CHCl}$",
            commonErrors: ["Choosing (c), chloroethane, which has no double bond and cannot polymerise.", "Choosing (d), the monomer of PTFE."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u3-addition-condensation-polymers-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three differences between addition polymerisation and condensation polymerisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Addition polymerisation", statement: "Monomers with $\\text{C=C}$ join; the polymer is the only product." },
              { kind: "definition", name: "Condensation polymerisation", statement: "Monomers with two functional groups join, losing a small molecule such as water." },
            ],
            steps: [
              { reasoning: "Addition monomers contain a $\\text{C=C}$ double bond; condensation monomers contain two functional groups (for example $-\\text{OH}$ or $-\\text{COOH}$).", marks: 1, markCode: "B" },
              { reasoning: "Addition gives only one product (the polymer); condensation also gives a small molecule such as water.", marks: 1, markCode: "B" },
              { reasoning: "Addition usually uses one type of monomer; condensation usually uses two different monomers.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Addition: $\\text{C=C}$ monomers, one product, one monomer type. Condensation: two functional groups per monomer, water also formed, usually two monomer types.",
            commonErrors: ["Describing only one type of polymerisation, so no comparison is made.", "Saying that condensation polymers release carbon dioxide."],
            examinerNote: "Each mark needs both sides of the comparison, or a clearly implied comparison.",
          },
        },
        {
          id: "ech11-u3-addition-condensation-polymers-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A molecule of poly(ethene) has a relative formula mass of $56\\,000$. Calculate the number of ethene monomers that joined to make it. ($A_r$: C = 12, H = 1)",
          response: {
            type: "numeric",
            parts: [{ label: "Number of monomers", answer: 2000 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeat unit mass", statement: "Addition polymerisation loses no atoms, so each repeat unit has the same $M_r$ as the monomer." },
              { kind: "formula", name: "Number of repeat units", statement: "$n = \\frac{M_r(\\text{polymer})}{M_r(\\text{repeat unit})}$" },
            ],
            steps: [
              { reasoning: "Find $M_r$ of ethene, $\\text{C}_2\\text{H}_4$.", working: "2 \\times 12 + 4 \\times 1 = 28", marks: 1, markCode: "M" },
              { reasoning: "Divide the polymer $M_r$ by the monomer $M_r$.", working: "\\frac{56\\,000}{28}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2000$ monomers",
            commonErrors: ["Using $M_r = 30$ for ethane instead of 28 for ethene.", "Dividing by 14, the mass of a $\\text{CH}_2$ unit, giving 4000."],
            examinerNote: "A1 cao 2000. Allow ecf from a wrong $M_r$ for the second M mark.",
          },
        },
        {
          id: "ech11-u3-addition-condensation-polymers-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Poly(chloroethene), PVC, is an addition polymer made from chloroethene, $\\text{CH}_2\\text{=CHCl}$. Polyesters such as PET are condensation polymers.",
          parts: [
            { label: "a", prompt: "Draw the repeat unit of poly(chloroethene).", marks: 2 },
            { label: "b", prompt: "Explain why poly(chloroethene) causes problems when it is put in landfill.", marks: 2 },
            { label: "c", prompt: "Name the toxic gas produced when PVC is burned.", marks: 1 },
            { label: "d", prompt: "A polyester is made from a diol and a dicarboxylic acid. Name the other product of the reaction and the type of link formed.", marks: 2 },
            { label: "e", prompt: "Give one advantage of using a biodegradable polyester instead of poly(chloroethene).", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Drawing a repeat unit", statement: "Replace $\\text{C=C}$ with $\\text{C}-\\text{C}$, keep all side atoms, and draw extension bonds through brackets with $n$." },
              { kind: "property", name: "Addition polymers", statement: "Addition polymers are inert and not biodegradable." },
              { kind: "definition", name: "Condensation polymerisation", statement: "A small molecule, usually water, is lost as each link forms." },
            ],
            steps: [
              { part: "a", reasoning: "Two carbon atoms joined by a single bond, with two H on one carbon and one H and one Cl on the other.", working: "\\text{CH}_2-\\text{CHCl}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Extension bonds through brackets, with $n$.", working: "-[\\text{CH}_2-\\text{CHCl}]_n-", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It is inert (unreactive) and not biodegradable, because microbes cannot break it down.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "So it lasts for a very long time and landfill sites fill up.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The chlorine in PVC forms hydrogen chloride when burned.", working: "\\text{HCl}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The small molecule lost is water.", working: "\\text{H}_2\\text{O}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The link formed between monomers is an ester link.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "It is broken down by microbes, so it does not build up in landfill or the oceans.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $-[\\text{CH}_2-\\text{CHCl}]_n-$ (b) inert and non-biodegradable, so it persists in landfill (c) hydrogen chloride (d) water; ester link (e) it biodegrades",
            commonErrors: ["Leaving the double bond in the repeat unit.", "Drawing the Cl on both carbon atoms.", "Saying that PVC 'dissolves' or 'rots slowly'."],
            examinerNote: "In (a) the side atoms may be shown in a displayed formula; the brackets must cross the extension bonds. In (c) allow 'HCl'; reject 'chlorine' alone.",
          },
        },
      ],
    },
  ],
};
