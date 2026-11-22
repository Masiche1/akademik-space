import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "chemhl-u5-lesson-5-2",
  code: "5-2",
  title: "Electrolysis and Faraday's Laws",
  goal: "I CAN apply Faraday's laws to calculate masses of products in electrolysis, predict the products of electrolysing aqueous solutions, and explain industrial electrolysis processes.",
  standards: ["Paper 1", "Paper 2", "AHL R3"],
  vocabulary: [
    { term: "Electrolysis", definition: "The decomposition of a compound by passing an electric current through it (molten or in solution)." },
    { term: "Faraday constant ($F$)", definition: "The charge of one mole of electrons: $F = 96485$ C mol$^{-1}$." },
    { term: "Faraday's law", definition: "Mass of substance produced at an electrode is proportional to charge passed: $m = \\frac{Q \\cdot M}{n \\cdot F} = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$." },
    { term: "Discharge", definition: "The removal of ions at an electrode by reduction (cathode) or oxidation (anode)." },
    { term: "Selective discharge", definition: "The preferential discharge of one ion over another based on electrode potentials and concentration." },
    { term: "Anode sludge", definition: "Inert impurities that fall to the bottom of the cell during copper refining." },
  ],
  concepts: [
    {
      id: "chemhl-u5-faraday",
      title: "Faraday's laws and electrolysis calculations",
      skill: "Use Faraday's laws to calculate mass of product from current, time, molar mass and electron count.",
      lesson: {
        sections: [
          {
            heading: "Faraday's laws",
            body: "Faraday's first law: the mass of substance produced at an electrode is proportional to the quantity of electricity passed. Faraday's second law: masses of different substances produced by the same charge are proportional to their chemical equivalents (molar mass divided by electrons transferred). The combined equation is $m = \\frac{Q \\cdot M}{n \\cdot F}$ where $Q = I \\cdot t$ is the charge in coulombs, $M$ is the molar mass, $n$ is the number of electrons per ion, and $F = 96485$ C mol$^{-1}$.",
          },
          {
            heading: "Worked calculation",
            body: "Example: $2.0$ A for $30$ min through CuSO$_4$ solution. $Q = 2.0 \\times 1800 = 3600$ C. Cu$^{2+}$ + 2e$^-$ → Cu, so $n = 2$, $M = 63.5$. $m = \\frac{3600 \\times 63.5}{2 \\times 96485} = \\frac{228600}{192970} = 1.18$ g.",
          },
          {
            heading: "Common mistakes",
            body: "The most common error is using $n = 1$ for ions that need 2 or 3 electrons (Cu$^{2+}$, Al$^{3+}$). Always check the half-equation to find how many electrons each ion needs. Another error is forgetting to convert time to seconds before calculating $Q = I \\cdot t$.",
          },
        ],
        keyFormulas: [
          { name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
          { name: "Charge", statement: "$Q = I \\cdot t$ (current × time in seconds)" },
          { name: "Faraday constant", statement: "$F = 96485$ C mol$^{-1}$" },
        ],
        workedExample: {
          problem: "A current of $5.0$ A flows for $2.0$ hours through molten PbBr$_2$. Calculate the mass of Pb produced ($M = 207$, n = 2).",
          solution: "$Q = 5.0 \\times 7200 = 36000$ C. $m = \\frac{36000 \\times 207}{2 \\times 96485} = \\frac{7452000}{192970} = 38.6$ g.",
        },
      },
      questions: [
        {
          id: "chemhl-u5-faraday-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Faraday constant $F$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mass of one mole of electrons" },
              { id: "b", text: "The charge carried by one mole of electrons ($96485$ C mol$^{-1}$)" },
              { id: "c", text: "The number of electrons in one atom" },
              { id: "d", text: "The charge of one electron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Faraday constant", statement: "Charge of one mole of electrons = 96485 C mol$^{-1}$." },
            ],
            steps: [
              { reasoning: "F is the charge per mole of electrons.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Charge of 1 mol electrons",
            commonErrors: ["Confusing F with Avogadro's number — F is charge, N$_A$ is count."],
          },
        },
        {
          id: "chemhl-u5-faraday-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For the electrolysis of aqueous CuSO$_4$ solution, calculate the mass of copper deposited at the cathode if $3.0$ A flows for $45$ minutes ($M_{Cu} = 63.5$ g mol$^{-1}$, n = 2).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "Convert time to seconds: $t = 45 \\times 60 = 2700$ s.", working: "Q = 3.0 \\times 2700 = 8100 C", marks: 1, markCode: "M" },
              { reasoning: "Apply Faraday's law with n=2.", working: "m = \\frac{8100 \\times 63.5}{2 \\times 96485}", marks: 1, markCode: "M" },
              { reasoning: "$m = \\frac{514350}{192970} = 2.66$ g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m \\approx 2.66$ g Cu",
            commonErrors: ["Using n=1 for Cu$^{2+}$ — copper needs 2 electrons."],
          },
        },
        {
          id: "chemhl-u5-faraday-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "During the electrolysis of molten NaCl, chlorine gas is collected at the anode. Calculate the volume of Cl$_2$ produced at RTP if $4.0$ A flows for $1.0$ hour ($M_{Cl_2} = 71$ g mol$^{-1}$, n = 2, molar gas volume = $24$ dm$^3$ mol$^{-1}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "$Q = 4.0 \\times 3600 = 14400$ C.", working: "Q = 4.0 \\times 3600 = 14400 C", marks: 1, markCode: "M" },
              { reasoning: "At anode: 2Cl$^- \\to$ Cl$_2$ + 2e$^-$, so n = 2 for Cl$_2$.", working: "m = \\frac{14400 \\times 71}{2 \\times 96485}", marks: 1, markCode: "M" },
              { reasoning: "$m = \\frac{1022400}{192970} = 5.30$ g Cl$_2$.", marks: 1, markCode: "M" },
              { reasoning: "Moles = $5.30 / 71 = 0.0746$ mol; volume = $0.0746 \\times 24 = 1.79$ dm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V \\approx 1.79$ dm$^3$ Cl$_2$",
            commonErrors: ["Using n=1 for Cl$_2$ — two Cl$^-$ ions each lose 1 electron, total n=2 per Cl$_2$ molecule."],
          },
        },
        {
          id: "chemhl-u5-faraday-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "In the industrial extraction of aluminium, Al$_2$O$_3$ dissolved in molten cryolite is electrolysed.",
          parts: [
            { label: "a", prompt: "Write the half-equations at the cathode and anode.", marks: 2 },
            { label: "b", prompt: "Calculate the mass of Al produced if $50000$ A flows for $24$ hours ($M_{Al} = 27$, n = 3).", marks: 3 },
            { label: "c", prompt: "Explain why cryolite is added to the Al$_2$O$_3$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aluminium electrolysis", statement: "Al$^{3+}$ reduced at cathode; O$^{2-}$ oxidised to O$_2$ at anode; cryolite lowers melting point." },
            ],
            steps: [
              { part: "a", reasoning: "Cathode: Al$^{3+}$ + 3e$^- \\to$ Al.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Anode: 2O$^{2-} \\to$ O$_2$ + 4e$^-$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Q = 50000 \\times 86400 = 4.32 \\times 10^9$ C.", working: "Q = 50000 \\times 24 \\times 3600 = 4.32 \\times 10^9 C", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$m = \\frac{4.32 \\times 10^9 \\times 27}{3 \\times 96485}$", working: "m = \\frac{1.1664 \\times 10^{11}}{289455}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$m \\approx 4.03 \\times 10^5$ g = $403$ kg Al.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pure Al$_2$O$_3$ melts at $2072$ °C — very high.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Cryolite (Na$_3$AlF$_6$) dissolves Al$_2$O$_3$ and lowers the melting point to ~$950$ °C.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This dramatically reduces energy costs of electrolysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Al$^{3+}$+3e→Al; 2O$^{2-}$→O$_2$+4e. (b) ~403 kg Al. (c) Cryolite lowers mp of Al$_2$O$_3$.",
            commonErrors: ["Using n=2 for Al — Al$^{3+}$ needs 3 electrons."],
          },
        },
        {
          id: "chemhl-u5-faraday-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Faraday's law $m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$, the quantity $Q = I \\cdot t$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The time in seconds" },
              { id: "b", text: "The current in amperes" },
              { id: "c", text: "The mass of product in grams" },
              { id: "d", text: "The charge passed in coulombs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Charge", statement: "$Q = I \\cdot t$ — current times time gives charge in coulombs." },
            ],
            steps: [
              { reasoning: "Current × time = total charge passed through the cell.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Charge in coulombs",
            commonErrors: ["Confusing Q with I — Q includes the time factor."],
          },
        },
        {
          id: "chemhl-u5-faraday-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A current of $2.0$ A flows for $30$ minutes through CuSO$_4$(aq). Calculate the mass of Cu deposited at the cathode ($M_{Cu} = 63.5$ g mol$^{-1}$, n = 2, $F = 96485$ C mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [{ label: "mass Cu / g", answer: 1.18, tolerance: 0.05, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "Convert time to seconds: $t = 30 \\times 60 = 1800$ s; $Q = 2.0 \\times 1800 = 3600$ C.", working: "Q = 2.0 \\times 1800 = 3600 C", marks: 1, markCode: "M" },
              { reasoning: "Apply Faraday's law with n = 2.", working: "m = \\frac{3600 \\times 63.5}{2 \\times 96485} = \\frac{228600}{192970}", marks: 1, markCode: "M" },
              { reasoning: "$m \\approx 1.18$ g Cu.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m \\approx 1.18$ g",
            commonErrors: ["Using minutes instead of seconds for $t$ — must convert to seconds."],
          },
        },
        {
          id: "chemhl-u5-faraday-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the equation $m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$, the value of $n$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The charge on the ion" },
              { id: "b", text: "The number of electrons transferred per ion discharged" },
              { id: "c", text: "The number of atoms in the molecule" },
              { id: "d", text: "The number of moles of product" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "n in Faraday's law", statement: "n = number of electrons needed to discharge one ion (from the half-equation)." },
            ],
            steps: [
              { reasoning: "For Cu$^{2+}$ + 2e$^- \\to$ Cu, n = 2.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Electrons per ion",
            commonErrors: ["Using the ionic charge directly — n counts electrons in the half-equation, which usually equals the charge but must be checked."],
          },
        },
        {
          id: "chemhl-u5-faraday-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A current of $1.5$ A flows for $2.0$ hours through AgNO$_3$(aq). Calculate the mass of silver deposited ($M_{Ag} = 108$ g mol$^{-1}$, n = 1).",
          response: {
            type: "numeric",
            parts: [{ label: "mass Ag / g", answer: 12.1, tolerance: 0.1, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "Convert time: $t = 2.0 \\times 3600 = 7200$ s; $Q = 1.5 \\times 7200 = 10800$ C.", working: "Q = 1.5 \\times 7200 = 10800 C", marks: 1, markCode: "M" },
              { reasoning: "Ag$^+$ + e$^- \\to$ Ag, so n = 1.", working: "m = \\frac{10800 \\times 108}{1 \\times 96485} = \\frac{1166400}{96485}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the mass.", working: "m = 12.09", marks: 1, markCode: "M" },
              { reasoning: "$m \\approx 12.1$ g Ag.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m \\approx 12.1$ g",
            commonErrors: ["Using n = 2 for Ag — Ag$^+$ needs only 1 electron."],
          },
        },
        {
          id: "chemhl-u5-faraday-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A charge of $9650$ C is passed through an electrolyte. Calculate the number of moles of electrons transferred ($F = 96485$ C mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [{ label: "moles e$^-$ / mol", answer: 0.1, tolerance: 0.001, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles of electrons", statement: "$n(e^-) = \\frac{Q}{F}$" },
            ],
            steps: [
              { reasoning: "One mole of electrons carries $F = 96485$ C.", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $n = \\frac{9650}{96485}$.", working: "n = 9650 / 96485 = 0.100", marks: 1, markCode: "M" },
              { reasoning: "$n(e^-) \\approx 0.10$ mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n(e^-) \\approx 0.10$ mol",
            commonErrors: ["Dividing by Avogadro's number — use the Faraday constant for charge-to-moles of electrons."],
          },
        },
        {
          id: "chemhl-u5-faraday-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which ion requires n = 3 in a Faraday's law calculation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cl$^-$" },
              { id: "b", text: "Al$^{3+}$" },
              { id: "c", text: "Na$^+$" },
              { id: "d", text: "Cu$^{2+}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "n in Faraday's law", statement: "n = electrons per ion; Al$^{3+}$ + 3e$^- \\to$ Al so n = 3." },
            ],
            steps: [
              { reasoning: "Al$^{3+}$ gains 3 electrons on discharge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Al$^{3+}$",
            commonErrors: ["Using the charge of the ion without checking the half-equation — for Cl$^-$ oxidation n = 1 per Cl atom but 2 per Cl$_2$ molecule."],
          },
        },
        {
          id: "chemhl-u5-faraday-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "During the electrolysis of water (dilute H$_2$SO$_4$), a current of $2.0$ A flows for $1.0$ hour. Calculate the volume of H$_2$ gas produced at RTP (molar gas volume = $24$ dm$^3$ mol$^{-1}$, n = 2 for H$_2$).",
          response: {
            type: "numeric",
            parts: [{ label: "volume H$_2$ / dm$^3$", answer: 0.895, tolerance: 0.01, unit: "dm$^3$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "$Q = 2.0 \\times 3600 = 7200$ C.", working: "Q = 2.0 \\times 3600 = 7200 C", marks: 1, markCode: "M" },
              { reasoning: "2H$^+$ + 2e$^- \\to$ H$_2$: n = 2, $M = 2.0$; $m = \\frac{7200 \\times 2.0}{2 \\times 96485} = 0.0746$ g.", working: "m = 7200 \\times 2.0 / 192970 = 0.0746 g", marks: 1, markCode: "M" },
              { reasoning: "Moles H$_2$ = $0.0746 / 2.0 = 0.0373$ mol.", marks: 1, markCode: "M" },
              { reasoning: "Volume = $0.0373 \\times 24 = 0.895$ dm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V \\approx 0.90$ dm$^3$",
            commonErrors: ["Using n = 1 for H$_2$ — two electrons are needed per H$_2$ molecule."],
          },
        },
        {
          id: "chemhl-u5-faraday-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A student calculates the mass of Cu deposited using n = 1 instead of n = 2 in Faraday's law. Explain why the answer is wrong and state whether it is too large or too small.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "n in Faraday's law", statement: "n = electrons per ion; Cu$^{2+}$ + 2e$^- \\to$ Cu requires 2 electrons." },
            ],
            steps: [
              { reasoning: "n appears in the DENOMINATOR of $m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$.", marks: 1, markCode: "M" },
              { reasoning: "Using n = 1 instead of n = 2 halves the denominator.", marks: 1, markCode: "R" },
              { reasoning: "A smaller denominator gives a LARGER calculated mass.", marks: 1, markCode: "R" },
              { reasoning: "Each Cu$^{2+}$ ion needs 2 electrons, so for a given charge fewer moles of Cu form than n = 1 implies.", marks: 1, markCode: "R" },
              { reasoning: "Therefore the student's answer is too large by a factor of 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "n = 1 halves the denominator → calculated mass is twice the true value.",
            commonErrors: ["Thinking the error makes the mass smaller — it makes it larger."],
          },
        },
        {
          id: "chemhl-u5-faraday-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the charge (in coulombs) needed to deposit $5.0$ g of copper from CuSO$_4$(aq) ($M_{Cu} = 63.5$ g mol$^{-1}$, n = 2, $F = 96485$ C mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [{ label: "charge / C", answer: 15200, tolerance: 50, unit: "C" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "Rearranged: $Q = \\frac{m \\cdot n \\cdot F}{M}$" },
            ],
            steps: [
              { reasoning: "Moles of Cu = $5.0 / 63.5 = 0.0787$ mol.", working: "n(Cu) = 5.0 / 63.5 = 0.0787 mol", marks: 1, markCode: "M" },
              { reasoning: "Moles of electrons = $2 \\times 0.0787 = 0.1575$ mol.", marks: 1, markCode: "M" },
              { reasoning: "Charge = $0.1575 \\times 96485 \\approx 15200$ C.", working: "Q = 0.1575 \\times 96485 = 15200 C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q \\approx 1.52 \\times 10^4$ C",
            commonErrors: ["Forgetting the factor of n — each mole of Cu$^{2+}$ needs 2 moles of electrons."],
          },
        },
        {
          id: "chemhl-u5-faraday-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A current of $3.0$ A flows for $45$ minutes during the electrolysis of molten PbBr$_2$. Calculate the mass of lead deposited ($M_{Pb} = 207$ g mol$^{-1}$, n = 2).",
          response: {
            type: "numeric",
            parts: [{ label: "mass Pb / g", answer: 8.69, tolerance: 0.05, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "$t = 45 \\times 60 = 2700$ s; $Q = 3.0 \\times 2700 = 8100$ C.", working: "Q = 3.0 \\times 2700 = 8100 C", marks: 1, markCode: "M" },
              { reasoning: "Pb$^{2+}$ + 2e$^- \\to$ Pb, n = 2.", working: "m = \\frac{8100 \\times 207}{2 \\times 96485} = \\frac{1676700}{192970}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $m = 8.69$ g.", marks: 1, markCode: "M" },
              { reasoning: "$m \\approx 8.69$ g Pb.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m \\approx 8.69$ g",
            commonErrors: ["Using n = 1 for Pb$^{2+}$ — it needs 2 electrons."],
          },
        },
        {
          id: "chemhl-u5-faraday-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A silversmith wants to plate $10.0$ g of silver onto a spoon from AgNO$_3$(aq). The cell operates at $2.0$ A. Calculate the time required in hours ($M_{Ag} = 108$ g mol$^{-1}$, n = 1, $F = 96485$ C mol$^{-1}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$ rearranged for $t$" },
            ],
            steps: [
              { reasoning: "Moles Ag needed = $10.0 / 108 = 0.0926$ mol.", marks: 1, markCode: "M" },
              { reasoning: "Charge needed = $0.0926 \\times 96485 = 8934$ C (n = 1).", working: "Q = 0.0926 \\times 96485 = 8934 C", marks: 1, markCode: "M" },
              { reasoning: "Time in seconds = $Q / I = 8934 / 2.0 = 4467$ s.", marks: 1, markCode: "M" },
              { reasoning: "Convert to hours: $4467 / 3600 = 1.24$ h.", marks: 1, markCode: "M" },
              { reasoning: "State final answer with units.", marks: 1, markCode: "A" },
              { reasoning: "Check: ~1.2 hours at 2 A for 10 g Ag is reasonable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t \\approx 1.24$ h",
            commonErrors: ["Leaving the answer in seconds — the question asks for hours."],
          },
        },
        {
          id: "chemhl-u5-faraday-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "In the electrorefining of copper, impure copper is the anode and pure copper the cathode in CuSO$_4$(aq).",
          parts: [
            { label: "a", prompt: "Write the half-equations at the anode and cathode.", marks: 2 },
            { label: "b", prompt: "A current of $10.0$ A flows for $2.0$ hours. Calculate the mass of pure Cu deposited at the cathode ($M_{Cu} = 63.5$ g mol$^{-1}$, n = 2).", marks: 4 },
            { label: "c", prompt: "Explain why less pure copper is produced at the cathode than the anode loses, and name the impurity product.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Copper refining", statement: "Anode: Cu → Cu$^{2+}$ + 2e$^-$; Cathode: Cu$^{2+}$ + 2e$^-$ → Cu; less reactive impurities fall as anode sludge." },
            ],
            steps: [
              { part: "a", reasoning: "Anode: Cu → Cu$^{2+}$ + 2e$^-$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cathode: Cu$^{2+}$ + 2e$^-$ → Cu.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Q = 10.0 \\times 7200 = 72000$ C.", working: "Q = 10.0 \\times 2.0 \\times 3600 = 72000 C", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply Faraday's law.", working: "m = \\frac{72000 \\times 63.5}{2 \\times 96485} = \\frac{4572000}{192970}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate the mass.", working: "m = 23.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$m \\approx 23.7$ g of pure Cu.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Less reactive impurities (Ag, Au, Pt) are not oxidised at the anode.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "More reactive impurities (Fe, Zn, Ni) DO oxidise and enter solution but are not reduced at the cathode (Cu$^{2+}$ is preferentially reduced).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The unoxidised impurities fall to the bottom as 'anode sludge'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Anode Cu→Cu$^{2+}$+2e; cathode Cu$^{2+}$+2e→Cu. (b) ~23.7 g Cu. (c) Inert impurities → anode sludge; reactive impurities stay in solution.",
            commonErrors: ["Thinking all impurities deposit at the cathode — only Cu$^{2+}$ is reduced there."],
          },
        },
      ],
    },
    {
      id: "chemhl-u5-products",
      title: "Predicting electrolysis products",
      skill: "Predict the products of electrolysis of aqueous solutions using electrode potentials and the reactivity series.",
      lesson: {
        sections: [
          {
            heading: "Cathode products",
            body: "At the cathode (reduction), metal cations are reduced to metals IF their $E^\\circ$ is more positive than H$^+$ ($E^\\circ = 0$ V). Metals above hydrogen in the reactivity series (K, Na, Ca, Mg, Al, Zn, Fe, Pb) have negative $E^\\circ$ — water is reduced instead, producing H$_2$: 2H$_2$O + 2e$^- \\to$ H$_2$ + 2OH$^-$. Metals below hydrogen (Cu, Ag, Au, Pt) have positive $E^\\circ$ — the metal ion is reduced: Cu$^{2+}$ + 2e$^- \\to$ Cu.",
          },
          {
            heading: "Anode products",
            body: "At the anode (oxidation), halide ions (Cl$^-$, Br$^-$, I$^-$) are preferentially oxidised over water because they have lower oxidation potentials. For other anions (SO$_4^{2-}$, NO$_3^-$, OH$^-$), water is oxidised instead: 2H$_2$O $\\to$ O$_2$ + 4H$^+$ + 4e$^-$. Exception: concentrated halide solutions — e.g. brine (NaCl(aq)) gives Cl$_2$ at anode and H$_2$ + OH$^-$ at cathode.",
          },
          {
            heading: "Examples",
            body: "CuSO$_4$(aq): cathode Cu, anode O$_2$. NaCl(aq): cathode H$_2$, anode Cl$_2$. Na$_2$SO$_4$(aq): cathode H$_2$, anode O$_2$ (water electrolysis). molten NaCl: cathode Na, anode Cl$_2$.",
          },
        ],
        keyFormulas: [
          { name: "Cathode rule", statement: "Metal reduced if $E^\\circ > 0$ V; otherwise H$_2$ evolved." },
          { name: "Anode rule", statement: "Halide oxidised preferentially; otherwise O$_2$ evolved." },
          { name: "Water reduction", statement: "2H$_2$O + 2e$^- \\to$ H$_2$ + 2OH$^-$" },
        ],
        workedExample: {
          problem: "Predict the products of electrolysis of dilute H$_2$SO$_4$ solution with inert electrodes.",
          solution: "Cathode: H$^+$ is reduced → H$_2$. Anode: sulfate not discharged → water oxidised → O$_2$. Net: electrolysis of water.",
        },
      },
      questions: [
        {
          id: "chemhl-u5-prod-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When aqueous NaCl is electrolysed with inert electrodes, the product at the cathode is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cl$_2$" },
              { id: "b", text: "O$_2$" },
              { id: "c", text: "H$_2$" },
              { id: "d", text: "Na" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cathode rule", statement: "Na$^+$ has negative $E^\\circ$ → water reduced instead → H$_2$ evolved." },
            ],
            steps: [
              { reasoning: "Na is above hydrogen in reactivity series → Na$^+$ not reduced in aqueous solution.", marks: 1, markCode: "R" },
              { reasoning: "Water is reduced at cathode → H$_2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** H$_2$",
            commonErrors: ["Choosing Na — Na$^+$ is not discharged in aqueous solution, only in molten NaCl."],
          },
        },
        {
          id: "chemhl-u5-prod-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Predict the products at each electrode when aqueous CuSO$_4$ solution is electrolysed with inert electrodes. Explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrolysis products", statement: "Cu$^{2+}$ reduced (E > 0); water oxidised at anode (SO$_4^{2-}$ not discharged)." },
            ],
            steps: [
              { reasoning: "Cathode: Cu$^{2+}$ + 2e$^- \\to$ Cu (Cu$^{2+}$ has positive $E^\\circ$).", marks: 1, markCode: "M" },
              { reasoning: "Anode: 2H$_2$O $\\to$ O$_2$ + 4H$^+$ + 4e$^-$ (SO$_4^{2-}$ is not discharged).", marks: 1, markCode: "M" },
              { reasoning: "Products: Cu at cathode, O$_2$ at anode.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cathode: Cu; Anode: O$_2$",
            commonErrors: ["Saying H$_2$ forms at cathode — Cu$^{2+}$ is preferentially reduced."],
          },
        },
        {
          id: "chemhl-u5-prod-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare the products of electrolysis of: (a) molten NaCl; (b) aqueous NaCl solution. Explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molten vs aqueous", statement: "In molten NaCl only Na$^+$ and Cl$^-$ exist; in aqueous NaCl water competes for discharge." },
            ],
            steps: [
              { reasoning: "Molten NaCl: cathode Na (only cation), anode Cl$_2$ (only anion).", marks: 1, markCode: "M" },
              { reasoning: "Aqueous NaCl: cathode H$_2$ (Na$^+$ not reduced), anode Cl$_2$ (Cl$^-$ preferentially oxidised).", marks: 1, markCode: "M" },
              { reasoning: "Difference: Na$^+$ reduced only in molten state; in water, water is reduced instead.", marks: 1, markCode: "R" },
              { reasoning: "Cl$^-$ is discharged at anode in both cases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Na + Cl$_2$; (b) H$_2$ + Cl$_2$ — water competes with Na$^+$ at cathode.",
            commonErrors: ["Forgetting that water is present in aqueous electrolysis and competes for discharge."],
          },
        },
        {
          id: "chemhl-u5-prod-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the electrolysis of aqueous solutions of CuSO$_4$, NaCl, Na$_2$SO$_4$ and molten PbBr$_2$.",
          parts: [
            { label: "a", prompt: "Predict the products at each electrode for each of the four cases.", marks: 4 },
            { label: "b", prompt: "Explain why Na$_2$SO$_4$(aq) effectively electrolyses water.", marks: 2 },
            { label: "c", prompt: "Write the overall equation for the electrolysis of water.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selective discharge", statement: "Cathode: metal if E>0 else H$_2$; Anode: halide if present else O$_2$." },
            ],
            steps: [
              { part: "a", reasoning: "CuSO$_4$(aq): cathode Cu, anode O$_2$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "NaCl(aq): cathode H$_2$, anode Cl$_2$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Na$_2$SO$_4$(aq): cathode H$_2$, anode O$_2$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Molten PbBr$_2$: cathode Pb, anode Br$_2$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Na$^+$ and SO$_4^{2-}$ are spectator ions — not discharged.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Only water is effectively electrolysed: H$_2$ at cathode, O$_2$ at anode.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "2H$_2$O $\\to$ 2H$_2$ + O$_2$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct stoichiometry and states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CuSO$_4$: Cu/O$_2$; NaCl(aq): H$_2$/Cl$_2$; Na$_2$SO$_4$: H$_2$/O$_2$; PbBr$_2$ molten: Pb/Br$_2$. (b) Spectator ions. (c) 2H$_2$O→2H$_2$+O$_2$.",
            commonErrors: ["Thinking Na$_2$SO$_4$ produces Na or S — neither ion is discharged."],
          },
        },
        {
          id: "chemhl-u5-prod-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When aqueous Na$_2$SO$_4$ is electrolysed with inert electrodes, the gas produced at the cathode is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cl$_2$" },
              { id: "b", text: "H$_2$" },
              { id: "c", text: "SO$_2$" },
              { id: "d", text: "O$_2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cathode rule", statement: "Na$^+$ has negative $E^\\circ$ → water is reduced → H$_2$ evolved." },
            ],
            steps: [
              { reasoning: "Na$^+$ is not discharged in aqueous solution; water is reduced instead.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** H$_2$",
            commonErrors: ["Choosing Na — Na metal forms only from molten NaCl, never from aqueous solution."],
          },
        },
        {
          id: "chemhl-u5-prod-q6",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A current of $4.0$ A flows for $30$ minutes during the electrolysis of aqueous Na$_2$SO$_4$. Calculate the volume of H$_2$ gas collected at RTP ($24$ dm$^3$ mol$^{-1}$, n = 2 for H$_2$).",
          response: {
            type: "numeric",
            parts: [{ label: "volume H$_2$ / dm$^3$", answer: 0.895, tolerance: 0.01, unit: "dm$^3$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$Q = I \\cdot t$; moles of gas = $\\frac{Q}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "$Q = 4.0 \\times 1800 = 7200$ C.", working: "Q = 4.0 \\times 30 \\times 60 = 7200 C", marks: 1, markCode: "M" },
              { reasoning: "2H$_2$O + 2e$^- \\to$ H$_2$ + 2OH$^-$, so n = 2.", marks: 1, markCode: "M" },
              { reasoning: "Moles H$_2$ = $\\frac{7200}{2 \\times 96485} = 0.0373$ mol.", working: "n(H_2) = 7200 / 192970 = 0.0373 mol", marks: 1, markCode: "M" },
              { reasoning: "Volume = $0.0373 \\times 24 = 0.895$ dm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V \\approx 0.90$ dm$^3$ H$_2$",
            commonErrors: ["Forgetting to convert minutes to seconds in $Q = I \\cdot t$."],
          },
        },
        {
          id: "chemhl-u5-prod-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When aqueous CuSO$_4$ is electrolysed with inert electrodes, the gas produced at the ANODE is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SO$_2$" },
              { id: "b", text: "H$_2$" },
              { id: "c", text: "Cl$_2$" },
              { id: "d", text: "O$_2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anode rule", statement: "SO$_4^{2-}$ is not discharged → water is oxidised → O$_2$ evolved." },
            ],
            steps: [
              { reasoning: "Sulfate ions are very difficult to oxidise, so water is oxidised instead.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** O$_2$",
            commonErrors: ["Choosing H$_2$ — that is the cathode product; the anode produces O$_2$."],
          },
        },
        {
          id: "chemhl-u5-prod-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "During electrolysis of aqueous CuSO$_4$, a current of $2.0$ A flows for $1.0$ hour. Calculate the mass of copper deposited at the cathode ($M_{Cu} = 63.5$ g mol$^{-1}$, n = 2).",
          response: {
            type: "numeric",
            parts: [{ label: "mass Cu / g", answer: 2.37, tolerance: 0.05, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$m = \\frac{I \\cdot t \\cdot M}{n \\cdot F}$" },
            ],
            steps: [
              { reasoning: "$Q = 2.0 \\times 3600 = 7200$ C.", working: "Q = 2.0 \\times 3600 = 7200 C", marks: 1, markCode: "M" },
              { reasoning: "Cu$^{2+}$ + 2e$^- \\to$ Cu, n = 2.", working: "m = \\frac{7200 \\times 63.5}{2 \\times 96485} = \\frac{457200}{192970}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $m = 2.37$ g.", marks: 1, markCode: "M" },
              { reasoning: "$m \\approx 2.37$ g Cu.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m \\approx 2.37$ g",
            commonErrors: ["Using n = 1 — Cu$^{2+}$ needs 2 electrons."],
          },
        },
        {
          id: "chemhl-u5-prod-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Halide ions (Cl$^-$, Br$^-$, I$^-$) are preferentially discharged at the anode over water because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are larger ions" },
              { id: "b", text: "They have a more positive reduction potential" },
              { id: "c", text: "Water cannot be oxidised at all" },
              { id: "d", text: "They are more easily oxidised (lower oxidation potential)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anode rule", statement: "The species most easily oxidised is discharged preferentially; halides oxidise more readily than water." },
            ],
            steps: [
              { reasoning: "Halide ions lose electrons more readily than water molecules.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** More easily oxidised",
            commonErrors: ["Confusing oxidation and reduction potentials — it is ease of OXIDATION that matters at the anode."],
          },
        },
        {
          id: "chemhl-u5-prod-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "The same charge ($Q = 192970$ C = 2 mol e$^-$) is passed through two cells: one depositing Cu ($M = 63.5$, n = 2) and one depositing Ag ($M = 108$, n = 1). What mass of Ag is deposited?",
          response: {
            type: "numeric",
            parts: [{ label: "mass Ag / g", answer: 216, tolerance: 1, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Faraday's second law", statement: "Same charge deposits masses proportional to chemical equivalents $M/n$." },
            ],
            steps: [
              { reasoning: "2 mol e$^-$ deposits 1 mol Cu (63.5 g) and 2 mol Ag ($2 \\times 108 = 216$ g).", working: "n(Ag) = 2 mol; m = 2 \\times 108 = 216 g", marks: 1, markCode: "M" },
              { reasoning: "Compare: Ag deposits more mass because n = 1 (each ion needs only 1 electron).", marks: 1, markCode: "R" },
              { reasoning: "Mass Ag = $216$ g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$216$ g Ag",
            commonErrors: ["Using n = 2 for Ag — Ag$^+$ + e$^- \\to$ Ag needs only 1 electron."],
          },
        },
        {
          id: "chemhl-u5-prod-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Compare the products of electrolysis of molten MgCl$_2$ and aqueous MgCl$_2$ solution, explaining the difference at the cathode.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molten vs aqueous", statement: "In molten salt only the ions exist; in aqueous solution water competes for discharge." },
            ],
            steps: [
              { reasoning: "Molten MgCl$_2$: Mg$^{2+}$ is the only cation → Mg metal deposited at cathode.", marks: 1, markCode: "M" },
              { reasoning: "Aqueous MgCl$_2$: water is preferentially reduced → H$_2$ at cathode, not Mg.", marks: 1, markCode: "M" },
              { reasoning: "Mg$^{2+}$ has a negative $E^\\circ$ ($-2.37$ V) → less easily reduced than water.", marks: 1, markCode: "R" },
              { reasoning: "Anode in both cases: Cl$^-$ oxidised → Cl$_2$ (in aqueous, Cl$^-$ still preferentially discharged over water).", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: molten gives Mg + Cl$_2$; aqueous gives H$_2$ + Cl$_2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Molten: Mg + Cl$_2$; aqueous: H$_2$ + Cl$_2$ — water beats Mg$^{2+}$ at the cathode.",
            commonErrors: ["Forgetting that in aqueous solution water always competes with metal ions of negative $E^\\circ$."],
          },
        },
        {
          id: "chemhl-u5-prod-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "When aqueous KI is electrolysed with inert electrodes, the product at the anode is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I$_2$" },
              { id: "b", text: "H$_2$" },
              { id: "c", text: "K metal" },
              { id: "d", text: "O$_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anode rule", statement: "I$^-$ is a halide → preferentially oxidised → I$_2$ formed." },
            ],
            steps: [
              { reasoning: "I$^-$ is more easily oxidised than water → discharged at anode as I$_2$.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** I$_2$",
            commonErrors: ["Choosing O$_2$ — that applies to non-halide anions; halides are preferentially discharged."],
          },
        },
        {
          id: "chemhl-u5-prod-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A current of $5.0$ A flows for $20$ minutes during the electrolysis of dilute H$_2$SO$_4$. Calculate the volume of H$_2$ produced at RTP ($24$ dm$^3$ mol$^{-1}$, n = 2).",
          response: {
            type: "numeric",
            parts: [{ label: "volume H$_2$ / dm$^3$", answer: 0.746, tolerance: 0.01, unit: "dm$^3$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Faraday's law", statement: "$n = \\frac{I \\cdot t}{n_e \\cdot F}$; volume = n × molar volume" },
            ],
            steps: [
              { reasoning: "$Q = 5.0 \\times 1200 = 6000$ C.", working: "Q = 5.0 \\times 20 \\times 60 = 6000 C", marks: 1, markCode: "M" },
              { reasoning: "Moles H$_2$ = $\\frac{6000}{2 \\times 96485} = 0.0311$ mol; volume = $0.0311 \\times 24 = 0.746$ dm$^3$.", working: "n = 6000/192970 = 0.0311; V = 0.0311 \\times 24 = 0.746", marks: 1, markCode: "M" },
              { reasoning: "$V \\approx 0.75$ dm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V \\approx 0.75$ dm$^3$",
            commonErrors: ["Using n = 1 for H$_2$ — 2 electrons per molecule."],
          },
        },
        {
          id: "chemhl-u5-prod-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Predict the products of electrolysis of aqueous ZnSO$_4$ solution with inert electrodes, explaining your reasoning in terms of electrode potentials ($E^\\circ(Zn^{2+}/Zn) = -0.76$ V, $E^\\circ(H^+/H_2) = 0$ V).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cathode rule", statement: "Metal ions with negative $E^\\circ$ are NOT reduced in aqueous solution — water is reduced instead." },
            ],
            steps: [
              { reasoning: "At the cathode, Zn$^{2+}$ ($E^\\circ = -0.76$ V) is harder to reduce than water ($E^\\circ = 0$ V).", marks: 1, markCode: "R" },
              { reasoning: "Water is reduced: 2H$_2$O + 2e$^- \\to$ H$_2$ + 2OH$^-$.", marks: 1, markCode: "M" },
              { reasoning: "At the anode, SO$_4^{2-}$ is not discharged → water oxidised → O$_2$.", marks: 1, markCode: "M" },
              { reasoning: "Products: H$_2$ at cathode, O$_2$ at anode.", marks: 1, markCode: "A" },
              { reasoning: "The solution becomes alkaline near the cathode (OH$^-$ produced).", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: aqueous ZnSO$_4$ electrolyses water, not Zn — unlike molten ZnSO$_4$ which would give Zn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cathode: H$_2$; Anode: O$_2$ — water is electrolysed, not ZnSO$_4$.",
            commonErrors: ["Thinking Zn metal deposits — Zn$^{2+}$ is too negative to be reduced in water."],
          },
        },
        {
          id: "chemhl-u5-prod-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Predict the products of electrolysis of aqueous CuCl$_2$ solution with inert electrodes and write the ionic half-equations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selective discharge", statement: "Cathode: Cu$^{2+}$ reduced (E > 0); Anode: Cl$^-$ oxidised preferentially over water." },
            ],
            steps: [
              { reasoning: "Cu$^{2+}$ has positive $E^\\circ$ → reduced at cathode: Cu$^{2+}$ + 2e$^- \\to$ Cu.", marks: 1, markCode: "M" },
              { reasoning: "Cl$^-$ is a halide → preferentially oxidised at anode: 2Cl$^- \\to$ Cl$_2$ + 2e$^-$.", marks: 1, markCode: "M" },
              { reasoning: "Products: Cu metal at cathode, Cl$_2$ gas at anode.", marks: 1, markCode: "A" },
              { reasoning: "Water is NOT oxidised at the anode because Cl$^-$ is more easily oxidised.", marks: 1, markCode: "R" },
              { reasoning: "H$_2$ is NOT produced at the cathode because Cu$^{2+}$ is preferentially reduced.", marks: 1, markCode: "R" },
              { reasoning: "Overall: CuCl$_2$(aq) → Cu(s) + Cl$_2$(g) effectively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cathode: Cu; Anode: Cl$_2$ — both ions are discharged.",
            commonErrors: ["Predicting O$_2$ at the anode — Cl$^-$ beats water for oxidation."],
          },
        },
        {
          id: "chemhl-u5-prod-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "Consider electrolysis of four substances: aqueous KBr, aqueous NaNO$_3$, molten CaCl$_2$, and aqueous Cu(NO$_3$)$_2$.",
          parts: [
            { label: "a", prompt: "Predict the products at each electrode for all four cases.", marks: 4 },
            { label: "b", prompt: "Explain why aqueous NaNO$_3$ effectively electrolyses water.", marks: 2 },
            { label: "c", prompt: "Write the overall equation for the electrolysis of aqueous KBr.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selective discharge", statement: "Cathode: metal if E > 0 else H$_2$; Anode: halide if present else O$_2$; molten salts discharge their own ions." },
            ],
            steps: [
              { part: "a", reasoning: "KBr(aq): cathode H$_2$, anode Br$_2$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "NaNO$_3$(aq): cathode H$_2$, anode O$_2$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Molten CaCl$_2$: cathode Ca, anode Cl$_2$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cu(NO$_3$)$_2$(aq): cathode Cu, anode O$_2$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Na$^+$ and NO$_3^-$ are spectator ions — neither is discharged.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Only water reacts: H$_2$ at cathode, O$_2$ at anode.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cathode: 2H$_2$O + 2e$^- \\to$ H$_2$ + 2OH$^-$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Anode: 2Br$^- \\to$ Br$_2$ + 2e$^-$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Overall: 2H$_2$O + 2Br$^- \\to$ H$_2$ + Br$_2$ + 2OH$^-$ (or 2KBr + 2H$_2$O → 2KOH + H$_2$ + Br$_2$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) KBr(aq): H$_2$/Br$_2$; NaNO$_3$(aq): H$_2$/O$_2$; CaCl$_2$ molten: Ca/Cl$_2$; Cu(NO$_3$)$_2$(aq): Cu/O$_2$. (b) Spectator ions. (c) 2H$_2$O + 2Br$^- \\to$ H$_2$ + Br$_2$ + 2OH$^- $.",
            commonErrors: ["Thinking molten CaCl$_2$ gives H$_2$ — there is no water, so Ca$^{2+}$ IS reduced."],
          },
        },
      ],
    },
  ],
};
