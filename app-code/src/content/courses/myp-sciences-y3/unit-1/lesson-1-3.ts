import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "myps3-u1-lesson-1-3",
  code: "1-3",
  title: "Acids, Alkalis and Salts",
  goal: "I CAN describe the properties of acids and alkalis, write neutralisation equations, and explain how salts are made.",
  standards: [
    "Key concept: Relationships",
    "MYP Sciences: Matter",
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
  ],
  vocabulary: [
    { term: "Acid", definition: "A substance that produces hydrogen ions ($H^+$) in water; has a pH below 7." },
    { term: "Alkali", definition: "A soluble base that produces hydroxide ions ($OH^-$) in water; has a pH above 7." },
    { term: "pH scale", definition: "A scale from 0 to 14 measuring acidity/alkalinity: below 7 acidic, 7 neutral, above 7 alkaline." },
    { term: "Neutralisation", definition: "The reaction between an acid and a base/alkali to form a salt and water." },
    { term: "Salt", definition: "An ionic compound formed when the hydrogen of an acid is replaced by a metal or ammonium ion." },
    { term: "Indicator", definition: "A substance that changes colour depending on pH, e.g. litmus, universal indicator, phenolphthalein." },
  ],
  concepts: [
    {
      id: "myps3-u1-acids-alkalis",
      title: "Properties of acids and alkalis",
      skill: "Describe the properties of acids and alkalis, use indicators and the pH scale, and write neutralisation equations.",
      lesson: {
        sections: [
          {
            heading: "Acids",
            body: "Acids have a pH below 7. They react with metals to produce hydrogen gas, with carbonates to produce carbon dioxide, and with bases to form salts. Common acids: hydrochloric acid ($HCl$), sulfuric acid ($H_2SO_4$), nitric acid ($HNO_3$), ethanoic acid ($CH_3COOH$).",
          },
          {
            heading: "Alkalis and bases",
            body: "**Alkalis** are soluble bases (e.g. sodium hydroxide $NaOH$, potassium hydroxide $KOH$) with pH above 7. They feel slippery and turn indicators like litmus blue. **Bases** that are insoluble (e.g. copper(II) oxide) are not alkalis but still neutralise acids.",
          },
          {
            heading: "Neutralisation",
            body: "Acid + base → salt + water. The general equation is:\n\n$HCl+NaOH\\to NaCl+H_2O$\n\nThe $H^+$ from the acid and $OH^-$ from the alkali combine to form $H_2O$. The remaining ions form the salt.",
          },
        ],
        keyFormulas: [
          { name: "Neutralisation", statement: "Acid + base → salt + water" },
          { name: "pH scale", statement: "Below 7 acidic, 7 neutral, above 7 alkaline" },
        ],
        workedExample: {
          problem: "Write the equation for the neutralisation of sulfuric acid by sodium hydroxide.",
          solution: "$H_2SO_4+2NaOH\\to Na_2SO_4+2H_2O$. Sulfuric acid has 2 replaceable hydrogens, so 2 NaOH are needed.",
        },
      },
      questions: [
        {
          id: "myps3-u1-acids-alkalis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution has pH 3. Is it acidic, neutral or alkaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral" },
              { id: "b", text: "Cannot tell" },
              { id: "c", text: "Acidic" },
              { id: "d", text: "Alkaline" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "Below 7 acidic, 7 neutral, above 7 alkaline." },
            ],
            steps: [
              { reasoning: "$3<7$, so acidic.", working: "pH=3<7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Acidic",
            commonErrors: ["Thinking higher pH means more acidic."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the balanced equation for the neutralisation of hydrochloric acid by potassium hydroxide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "Acid + base → salt + water." },
            ],
            steps: [
              { reasoning: "Products are potassium chloride and water.", working: "HCl+KOH\\to KCl+H_2O", marks: 1, markCode: "M" },
              { reasoning: "Check atoms: H 1+1=2 left, 2 right; Cl 1=1; K 1=1; O 1=1. Balanced.", working: "already\\ balanced", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$HCl+KOH\\to KCl+H_2O$",
            commonErrors: ["Writing $KCl+H_2O$ but with wrong formulae."],
            examinerNote: "M1 for products, A1 for balanced equation.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Universal indicator shows a solution is green (pH 7). The student adds hydrochloric acid drop by drop. Describe and explain what happens to the colour and pH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Universal indicator", statement: "Changes colour across the pH scale: red/orange acidic, green neutral, blue/purple alkaline." },
            ],
            steps: [
              { reasoning: "Adding acid lowers the pH below 7.", working: "pH<7", marks: 1, markCode: "M" },
              { reasoning: "The colour changes from green towards yellow/orange/red.", working: "\\text{green}\\to\\text{yellow/orange/red}", marks: 1, markCode: "M" },
              { reasoning: "Explain: indicator responds to increasing $H^+$ concentration.", working: "\\text{more }H^+\\Rightarrow\\text{lower pH}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "pH drops below 7; colour changes from green to yellow/orange as the solution becomes acidic",
            commonErrors: ["Thinking the colour stays green."],
            examinerNote: "M1 for pH direction, M1 for colour change, R1 for explanation.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student wants to prepare pure, dry crystals of sodium chloride by reacting hydrochloric acid with sodium hydroxide.",
          parts: [
            { label: "a", prompt: "Write the word equation for this neutralisation.", marks: 1 },
            { label: "b", prompt: "Write the balanced symbol equation.", marks: 2 },
            { label: "c", prompt: "Describe how to know when the reaction is complete (the endpoint).", marks: 2 },
            { label: "d", prompt: "Describe how to obtain pure, dry sodium chloride crystals from the resulting solution.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neutralisation", statement: "Acid + alkali → salt + water." },
              { kind: "principle", name: "Crystallisation", statement: "Evaporate water to leave solid salt crystals." },
            ],
            steps: [
              { part: "a", reasoning: "Name reactants and products.", working: "hydrochloric\\ acid+sodium\\ hydroxide\\to sodium\\ chloride+water", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Write formulae.", working: "HCl+NaOH\\to NaCl+H_2O", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check balance: all atoms balance.", working: "1H+1H=2H,\\ 1Cl,\\ 1Na,\\ 1O each side", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use an indicator (e.g. phenolphthalein) in the alkali; endpoint when colour just disappears.", working: "\\text{indicator changes colour}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At endpoint, acid and alkali are in exact stoichiometric ratio.", working: "\\text{exact neutralisation}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Heat the solution gently to evaporate some water.", working: "\\text{evaporate}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Cool to crystallise; filter and dry the crystals.", working: "\\text{crystallise, filter, dry}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Alternatively, evaporate to dryness for small quantities.", working: "\\text{or evaporate to dryness}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) hydrochloric acid + sodium hydroxide → sodium chloride + water (b) $HCl+NaOH\\to NaCl+H_2O$ (c) indicator colour change shows endpoint (d) evaporate, crystallise, filter and dry",
            commonErrors: ["Not using an indicator to find the endpoint.", "Boiling the solution to dryness too quickly, causing splattering."],
            examinerNote: "B1 for word equation, M1 A1 for symbol, M1 R1 for endpoint, M1 A1 R1 for crystallisation.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution has a pH of 10. Is it acidic, neutral or alkaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot tell" },
              { id: "b", text: "Acidic" },
              { id: "c", text: "Alkaline" },
              { id: "d", text: "Neutral" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "Below 7 acidic, 7 neutral, above 7 alkaline." },
            ],
            steps: [
              { reasoning: "$10>7$, so the solution is alkaline.", working: "pH=10>7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Alkaline",
            commonErrors: ["Thinking higher pH means more acidic."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour does blue litmus turn in an acidic solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blue" },
              { id: "b", text: "Red" },
              { id: "c", text: "Green" },
              { id: "d", text: "Colourless" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Litmus indicator", statement: "Litmus turns red in acid and blue in alkali." },
            ],
            steps: [
              { reasoning: "Acids turn blue litmus red.", working: "\\text{acid}\\Rightarrow\\text{red litmus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Red",
            commonErrors: ["Saying it stays blue — that indicates alkali."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the pH of pure water at room temperature?",
          response: { type: "numeric", parts: [{ label: "pH", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "7 is neutral." },
            ],
            steps: [
              { reasoning: "Pure water is neutral on the pH scale.", working: "\\text{water is neutral}", marks: 1, markCode: "M" },
              { reasoning: "State the pH.", working: "pH=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Saying water is acidic because it contains $H^+$ and $OH^-$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many moles of sodium hydroxide are needed to neutralise one mole of sulfuric acid, $H_2SO_4$?",
          response: { type: "numeric", parts: [{ label: "Moles of NaOH", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutralisation", statement: "Each replaceable hydrogen of the acid needs one hydroxide from the alkali." },
            ],
            steps: [
              { reasoning: "Sulfuric acid has two replaceable hydrogens, so it needs two hydroxides.", working: "H_2SO_4\\Rightarrow 2H^+", marks: 1, markCode: "M" },
              { reasoning: "State the moles of NaOH.", working: "2\\text{ mol NaOH}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ moles",
            commonErrors: ["Answering 1 — ignoring the diprotic nature of sulfuric acid."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solution has pH 9. If the concentration of $H^+$ ions decreases tenfold, what is the new pH?",
          response: { type: "numeric", parts: [{ label: "New pH", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "pH scale", statement: "Each unit change in pH corresponds to a tenfold change in $H^+$ concentration." },
            ],
            steps: [
              { reasoning: "A tenfold decrease in $H^+$ raises the pH by 1.", working: "\\frac{H^+}{10}\\Rightarrow pH+1", marks: 1, markCode: "M" },
              { reasoning: "New pH = 9 + 1 = 10.", working: "9+1=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Subtracting 1 from the pH — a weaker acid has a higher pH."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What gas is produced when an acid reacts with a metal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Oxygen" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Acid + metal", statement: "Acids react with metals to produce a salt and hydrogen gas." },
            ],
            steps: [
              { reasoning: "The metal displaces hydrogen from the acid.", working: "H_2\\text{ produced}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Hydrogen",
            commonErrors: ["Saying carbon dioxide — that comes from carbonates."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A few drops of phenolphthalein indicator are added to sodium hydroxide solution. What colour does it turn?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colourless" },
              { id: "b", text: "Pink" },
              { id: "c", text: "Orange" },
              { id: "d", text: "Red" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phenolphthalein", statement: "Colourless in acid, pink in alkali." },
            ],
            steps: [
              { reasoning: "Sodium hydroxide is alkaline, so phenolphthalein turns pink.", working: "\\text{alkali}\\Rightarrow\\text{pink}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Pink",
            commonErrors: ["Choosing red — that is litmus in acid."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the reaction $CuO+H_2SO_4\\to CuSO_4+H_2O$, how many oxygen atoms are on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Oxygen atoms", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Each element has the same number of atoms on both sides." },
            ],
            steps: [
              { reasoning: "Left: $CuO$ has 1 O and $H_2SO_4$ has 4 O, total $1+4=5$.", working: "1+4=5", marks: 1, markCode: "M" },
              { reasoning: "Right: $CuSO_4$ has 4 O and $H_2O$ has 1 O, total $4+1=5$.", working: "4+1=5\\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ oxygen atoms on each side",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A solution has pH 4. If the concentration of $H^+$ ions increases tenfold, what will the new pH be?",
          response: { type: "numeric", parts: [{ label: "New pH", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "pH scale", statement: "Each decrease of 1 pH unit means a tenfold increase in $H^+$ concentration." },
            ],
            steps: [
              { reasoning: "A tenfold increase in $H^+$ lowers the pH by 1.", working: "10\\times H^+\\Rightarrow pH-1", marks: 1, markCode: "M" },
              { reasoning: "New pH = 4 − 1 = 3.", working: "4-1=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Adding 1 to the pH instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An acid has pH 3 and an alkali has pH 11. What is the difference between their pH values?",
          response: { type: "numeric", parts: [{ label: "pH difference", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Acid and alkali", statement: "Acids have pH < 7 and produce $H^+$; alkalis have pH > 7 and produce $OH^-$." },
            ],
            steps: [
              { reasoning: "Subtract the acid pH from the alkali pH.", working: "11-3", marks: 1, markCode: "M" },
              { reasoning: "The difference is 8 pH units.", working: "11-3=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ pH units",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these substances is an alkali?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrochloric acid" },
              { id: "b", text: "Calcium carbonate" },
              { id: "c", text: "Copper(II) oxide" },
              { id: "d", text: "Sodium hydroxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkali", statement: "A soluble base that produces $OH^-$ ions in water." },
            ],
            steps: [
              { reasoning: "Sodium hydroxide is soluble; copper(II) oxide is an insoluble base, not an alkali.", working: "NaOH\\text{ soluble}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sodium hydroxide",
            commonErrors: ["Choosing copper(II) oxide — it is a base but insoluble."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-acids-alkalis-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design a simple test to distinguish an acid from an alkali using an indicator. Include the expected observations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Indicator", statement: "A substance that changes colour depending on pH." },
            ],
            steps: [
              { reasoning: "Add a few drops of litmus or universal indicator to the solution.", working: "\\text{add indicator}", marks: 1, markCode: "M" },
              { reasoning: "Acid turns blue litmus red / universal indicator yellow-orange-red.", working: "\\text{acid}\\Rightarrow\\text{red/yellow}", marks: 1, markCode: "A" },
              { reasoning: "Alkali turns blue litmus blue / universal indicator blue-purple.", working: "\\text{alkali}\\Rightarrow\\text{blue/purple}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add indicator: red/yellow = acid; blue/purple = alkali",
            commonErrors: ["Not stating the colour for both cases."],
            examinerNote: "M1 A1 A1.",
          },
        },
      ],
    },
    {
      id: "myps3-u1-salts",
      title: "Making salts",
      skill: "Describe methods for preparing soluble and insoluble salts, including titration and precipitation.",
      lesson: {
        sections: [
          {
            heading: "Soluble salts from acids",
            body: "To make a soluble salt (e.g. copper(II) sulfate), react the acid with a metal, metal oxide, hydroxide or carbonate. For example:\n\n$CuO+H_2SO_4\\to CuSO_4+H_2O$ (using copper(II) oxide)",
          },
          {
            heading: "Titration",
            body: "For precise neutralisation (e.g. sodium chloride), use **titration**: add acid to alkali with an indicator until the endpoint, then repeat without indicator using the same volumes. Evaporate and crystallise.",
          },
          {
            heading: "Insoluble salts by precipitation",
            body: "Mix two soluble solutions containing the required ions. The insoluble salt precipitates and can be filtered off. Example: $BaCl_2+Na_2SO_4\\to BaSO_4\\downarrow+2NaCl$ — barium sulfate is insoluble and precipitates.",
          },
        ],
        keyFormulas: [
          { name: "Titration", statement: "Add acid to alkali with indicator; repeat without indicator using same volumes" },
          { name: "Precipitation", statement: "Mix soluble solutions; insoluble salt forms and can be filtered" },
        ],
        workedExample: {
          problem: "How would you prepare insoluble lead(II) iodide?",
          solution: "Mix lead(II) nitrate solution and potassium iodide solution. Lead(II) iodide precipitates: $Pb(NO_3)_2+2KI\\to PbI_2\\downarrow+2KNO_3$. Filter, wash and dry.",
        },
      },
      questions: [
        {
          id: "myps3-u1-salts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method is used to make an insoluble salt like barium sulfate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Precipitation" },
              { id: "b", text: "Crystallisation" },
              { id: "c", text: "Titration" },
              { id: "d", text: "Distillation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Precipitation", statement: "Mixing two soluble solutions to form an insoluble salt." },
            ],
            steps: [
              { reasoning: "Insoluble salts are made by precipitation.", working: "\\text{precipitation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Precipitation",
            commonErrors: ["Choosing crystallisation — that's for soluble salts."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-salts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the equation for the precipitation of barium sulfate from barium chloride and sodium sulfate solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Precipitation", statement: "Mixing soluble solutions to form an insoluble salt." },
            ],
            steps: [
              { reasoning: "Products are barium sulfate (insoluble) and sodium chloride.", working: "BaCl_2+Na_2SO_4\\to BaSO_4+2NaCl", marks: 1, markCode: "M" },
              { reasoning: "Check balance: Ba 1=1, Cl 2=2, Na 2=2, S 1=1, O 4=4.", working: "already\\ balanced", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$BaCl_2+Na_2SO_4\\to BaSO_4+2NaCl$",
            commonErrors: ["Forgetting the coefficient 2 for NaCl."],
            examinerNote: "M1 for equation, A1 for balance.",
          },
        },
        {
          id: "myps3-u1-salts-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student wants to make pure copper(II) sulfate crystals. They react copper(II) oxide with sulfuric acid. Describe the steps they should take, including how to check the reaction is complete.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Soluble salt preparation", statement: "React acid with excess solid, filter, evaporate, crystallise." },
            ],
            steps: [
              { reasoning: "Add excess copper(II) oxide to warm sulfuric acid and stir.", working: "CuO+H_2SO_4\\to CuSO_4+H_2O", marks: 1, markCode: "M" },
              { reasoning: "Continue until no more solid dissolves (excess CuO remains).", working: "\\text{excess solid remains}", marks: 1, markCode: "M" },
              { reasoning: "Filter off excess CuO, evaporate some water, cool to crystallise.", working: "\\text{filter, evaporate, crystallise}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add excess CuO to warm $H_2SO_4$, filter, evaporate, crystallise",
            commonErrors: ["Not using excess solid to ensure all acid reacts.", "Not filtering before crystallising."],
            examinerNote: "M1 for method, M1 for endpoint, A1 for crystallisation.",
          },
        },
        {
          id: "myps3-u1-salts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates which acid reacts fastest with calcium carbonate chips to produce carbon dioxide.",
          parts: [
            { label: "a", prompt: "Identify the independent, dependent and control variables in this investigation.", marks: 3 },
            { label: "b", prompt: "Describe how you would measure the rate of reaction.", marks: 2 },
            { label: "c", prompt: "Write the equation for the reaction between calcium carbonate and hydrochloric acid.", marks: 1 },
            { label: "d", prompt: "Explain why powdered calcium carbonate reacts faster than chips of the same mass.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair test variables", statement: "Independent: what you change; Dependent: what you measure; Control: what you keep constant." },
              { kind: "principle", name: "Rate of reaction", statement: "Measured by gas volume per unit time or mass loss per unit time." },
            ],
            steps: [
              { part: "a", reasoning: "Independent variable: type of acid. Dependent: rate of $CO_2$ production.", working: "\\text{independent: acid type; dependent: rate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Control variables: mass of $CaCO_3$, volume and concentration of acid, temperature, surface area.", working: "\\text{controls: mass, volume, temp, surface area}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three clearly.", working: "\\text{independent, dependent, controls}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Collect gas in a measuring cylinder or use a gas syringe; measure volume every 10 seconds.", working: "\\text{measure }CO_2\\text{ volume over time}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plot volume vs time; steeper gradient = faster rate.", working: "\\text{gradient of graph}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Products are calcium chloride, water and carbon dioxide.", working: "CaCO_3+2HCl\\to CaCl_2+H_2O+CO_2", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Powder has greater surface area exposed to acid.", working: "\\text{greater surface area}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "More frequent collisions → faster reaction.", working: "\\text{more collisions}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) independent: acid type; dependent: rate of $CO_2$; controls: mass, volume, temperature, surface area (b) measure gas volume over time (c) $CaCO_3+2HCl\\to CaCl_2+H_2O+CO_2$ (d) powder has greater surface area → more collisions",
            commonErrors: ["Not identifying all control variables.", "Measuring mass instead of gas volume."],
            examinerNote: "M1 M1 A1 for variables, M1 A1 for method, B1 for equation, R1 R1 for surface area.",
          },
        },
        {
          id: "myps3-u1-salts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method is used to prepare a soluble salt such as copper(II) sulfate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distillation of a mixture" },
              { id: "b", text: "Reacting an acid with an excess of a solid, then crystallising" },
              { id: "c", text: "Mixing two solutions to form a precipitate" },
              { id: "d", text: "Electrolysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Soluble salt preparation", statement: "React acid with excess solid; filter, evaporate and crystallise." },
            ],
            steps: [
              { reasoning: "Soluble salts are made by reacting an acid with a metal, oxide, hydroxide or carbonate, then crystallising.", working: "\\text{acid + excess solid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reacting an acid with an excess of a solid, then crystallising",
            commonErrors: ["Choosing precipitation — that makes insoluble salts."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-salts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of the indicator in a titration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To speed up the reaction" },
              { id: "b", text: "To show when the exact endpoint has been reached" },
              { id: "c", text: "To change the colour of the salt" },
              { id: "d", text: "To measure the volume of acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Titration", statement: "An indicator shows the endpoint where acid and alkali are in exact ratio." },
            ],
            steps: [
              { reasoning: "The indicator colour change signals neutralisation is complete.", working: "\\text{endpoint detection}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To show when the exact endpoint has been reached",
            commonErrors: ["Thinking the indicator is a reactant."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-salts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these salts is insoluble in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copper(II) sulfate" },
              { id: "b", text: "Potassium nitrate" },
              { id: "c", text: "Sodium chloride" },
              { id: "d", text: "Barium sulfate" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insoluble salt", statement: "A salt that does not dissolve in water and forms a precipitate." },
            ],
            steps: [
              { reasoning: "Barium sulfate is a classic insoluble salt; the others are soluble.", working: "BaSO_4\\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Barium sulfate",
            commonErrors: ["Assuming all sulfates are insoluble — most are soluble except barium and lead."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-salts-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the equation $BaCl_2+Na_2SO_4\\to BaSO_4+2NaCl$, what is the coefficient of $NaCl$?",
          response: { type: "numeric", parts: [{ label: "Coefficient", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coefficient", statement: "The number in front of a formula showing how many units are involved." },
            ],
            steps: [
              { reasoning: "Identify the number written before $NaCl$.", working: "2NaCl", marks: 1, markCode: "M" },
              { reasoning: "State the coefficient.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Counting sodium atoms instead of the coefficient."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-salts-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student prepares salt crystals and obtains 4.5 g of product. The maximum possible yield was 6.0 g. What is the percentage yield?",
          response: { type: "numeric", parts: [{ label: "Percentage yield", answer: 75 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Soluble salt preparation", statement: "React acid with excess solid; filter, evaporate and crystallise." },
            ],
            steps: [
              { reasoning: "Percentage yield = actual / maximum $\\times 100$.", working: "\\frac{4.5}{6.0}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Yield = 75%.", working: "0.75\\times100=75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75\\%$",
            commonErrors: ["Dividing 6.0 by 4.5 instead of actual by maximum."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-salts-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is an excess of the solid (such as a metal oxide) used when preparing a salt from an acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To ensure all the acid reacts" },
              { id: "b", text: "To increase the temperature" },
              { id: "c", text: "To make the reaction faster" },
              { id: "d", text: "To produce more water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Soluble salt preparation", statement: "Excess solid guarantees all the acid is used up; the leftover solid is filtered off." },
            ],
            steps: [
              { reasoning: "Excess solid drives the reaction to completion so no acid remains.", working: "\\text{excess solid}\\Rightarrow\\text{all acid reacts}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To ensure all the acid reacts",
            commonErrors: ["Thinking excess solid is just for stirring."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-salts-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the precipitation reaction $Pb(NO_3)_2+2KI\\to PbI_2+2KNO_3$, how many moles of potassium iodide are needed per mole of lead(II) nitrate?",
          response: { type: "numeric", parts: [{ label: "Moles of KI", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coefficient", statement: "Coefficients give the mole ratio of reactants and products." },
            ],
            steps: [
              { reasoning: "The coefficient before $KI$ is 2.", working: "2KI", marks: 1, markCode: "M" },
              { reasoning: "State the mole ratio.", working: "2\\text{ mol KI per mol }Pb(NO_3)_2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ moles",
            commonErrors: ["Using the coefficient of $PbI_2$ instead of $KI$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-salts-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare and contrast the preparation of a soluble salt by crystallisation and an insoluble salt by precipitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Salt preparation methods", statement: "Soluble salts: react acid with excess solid, crystallise. Insoluble salts: mix two solutions, filter precipitate." },
            ],
            steps: [
              { reasoning: "Soluble salts are made by reacting an acid with an excess of solid then evaporating/crystallising.", working: "\\text{acid + solid}\\to\\text{crystallise}", marks: 1, markCode: "R" },
              { reasoning: "Insoluble salts are made by mixing two soluble solutions so the salt precipitates.", working: "\\text{mix solutions}\\to\\text{precipitate}", marks: 1, markCode: "R" },
              { reasoning: "Both require filtering to separate the solid salt; soluble salts also need evaporation.", working: "\\text{filter both; evaporate soluble}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Soluble: acid + excess solid, filter, evaporate, crystallise. Insoluble: mix two solutions, filter precipitate, wash, dry",
            commonErrors: ["Using the same method for both types."],
            examinerNote: "R1 R1 A1.",
          },
        },
        {
          id: "myps3-u1-salts-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of solutions would produce a precipitate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Silver nitrate and sodium chloride" },
              { id: "b", text: "Sodium chloride and potassium nitrate" },
              { id: "c", text: "Potassium hydroxide and sodium nitrate" },
              { id: "d", text: "Magnesium sulfate and sodium chloride" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Precipitation", statement: "Mixing solutions containing ions that form an insoluble salt." },
            ],
            steps: [
              { reasoning: "Silver chloride is insoluble and precipitates from $AgNO_3+NaCl$.", working: "AgCl\\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Silver nitrate and sodium chloride",
            commonErrors: ["Choosing mixtures where all possible salts are soluble."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-salts-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the equation $AgNO_3+NaCl\\to AgCl+NaNO_3$, how many atoms are on each side of the equation?",
          response: { type: "numeric", parts: [{ label: "Atoms", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of mass", statement: "Each element has the same number of atoms on both sides." },
            ],
            steps: [
              { reasoning: "Left: Ag 1 + N 1 + O 3 + Na 1 + Cl 1 = 7 atoms.", working: "1+1+3+1+1=7", marks: 1, markCode: "M" },
              { reasoning: "Right: $AgCl$ (2) + $NaNO_3$ (5) = 7 atoms.", working: "2+5=7\\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ atoms on each side",
            commonErrors: ["Counting $AgNO_3$ as 2 atoms instead of 5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-salts-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the equation $CuSO_4+2NaOH\\to Cu(OH)_2+Na_2SO_4$, what is the sum of all the coefficients?",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coefficient", statement: "The number in front of each formula (1 if none is written)." },
            ],
            steps: [
              { reasoning: "Coefficients are 1, 2, 1 and 1.", working: "1+2+1+1", marks: 1, markCode: "M" },
              { reasoning: "Sum = 5.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Forgetting that unwritten coefficients count as 1."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-salts-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is an insoluble precipitate washed with distilled water after it has been filtered?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To remove soluble impurities trapped in the precipitate" },
              { id: "b", text: "To speed up the reaction" },
              { id: "c", text: "To increase its mass" },
              { id: "d", text: "To dissolve the precipitate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purification", statement: "Washing removes soluble impurities; the insoluble salt is unaffected." },
            ],
            steps: [
              { reasoning: "The precipitate is insoluble, so water washes away soluble reactants and by-products without dissolving it.", working: "\\text{remove soluble impurities}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To remove soluble impurities trapped in the precipitate",
            examinerNote: "B1 for (a).",
          },
        },
      ],
    },
  ],
};
