import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "physsl-u5-lesson-5-2",
  code: "5-2",
  title: "e.m.f., Internal Resistance and Electromagnetic Induction",
  goal: "I CAN distinguish e.m.f. from terminal p.d., account for lost volts, and use Faraday's and Lenz's laws to analyse electromagnetic induction.",
  standards: ["Topic 5.3", "Topic 5.4", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    { term: "Electromotive force (e.m.f.)", definition: "The energy transferred per unit charge by a source, $\\varepsilon = W/Q$, measured in volts; it is the p.d. the source would supply if no current flowed." },
    { term: "Internal resistance ($r$)", definition: "The resistance inside a source (cell or battery) caused by its own materials; it causes a 'lost volts' drop $Ir$." },
    { term: "Terminal potential difference", definition: "The p.d. actually delivered by a source to the external circuit, $V = \\varepsilon - Ir = IR$." },
    { term: "Magnetic flux ($\\Phi$)", definition: "The product of magnetic field strength and area perpendicular to the field, $\\Phi = BA$, measured in webers (Wb)." },
    { term: "Faraday's law of induction", definition: "The induced e.m.f. in a circuit equals the rate of change of magnetic flux linkage, $\\varepsilon = -N\\,\\Delta\\Phi/\\Delta t$." },
    { term: "Lenz's law", definition: "The direction of an induced e.m.f. is such that the induced current opposes the change producing it (conservation of energy)." },
  ],
  concepts: [
    {
      id: "physsl-u5-emf-internal",
      title: "e.m.f. and internal resistance",
      skill: "Use $\\varepsilon = I(R + r)$, $V = \\varepsilon - Ir$ and $V = IR$ to find currents, terminal p.d. and lost volts.",
      lesson: {
        sections: [
          {
            heading: "e.m.f. versus terminal p.d.",
            body: "The **e.m.f.** $\\varepsilon$ of a source is the energy it supplies per unit charge — the p.d. it would develop across its terminals if no current were drawn (open circuit). When current $I$ flows, some of the e.m.f. is 'lost' overcoming the source's own **internal resistance** $r$. The p.d. delivered to the external resistor $R$ is the **terminal p.d.** $V = \\varepsilon - Ir$, which is also $V = IR$ across the external resistor. Thus $\\varepsilon = I(R + r)$.",
          },
          {
            heading: "Lost volts and short-circuit current",
            body: "The quantity $Ir$ is called the **lost volts**. As the current increases, the terminal p.d. falls below the e.m.f. When the external resistance is zero (short circuit), the current is $I_{\\max} = \\varepsilon/r$ and the terminal p.d. falls to zero. A cell with low internal resistance delivers nearly its full e.m.f.; a cell with high internal resistance 'sags' noticeably under load.",
          },
          {
            heading: "Practical cells",
            body: "Real cells can be modelled as an ideal source of e.m.f. $\\varepsilon$ in series with an internal resistance $r$. Comparing the terminal p.d. at two different currents lets you determine $\\varepsilon$ and $r$. This model explains why a car battery's voltage drops when the starter motor draws a large current.",
          },
        ],
        keyFormulas: [
          { name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
          { name: "Terminal p.d.", statement: "V = \\varepsilon - Ir = IR" },
          { name: "Lost volts", statement: "lost volts = Ir" },
        ],
        workedExample: {
          problem: "A cell of e.m.f. $6.0$ V and internal resistance $1.0\\,\\Omega$ is connected to a $5.0\\,\\Omega$ resistor. Find the current, the terminal p.d. and the lost volts.",
          solution: "$I = \\varepsilon/(R + r) = 6.0/6.0 = 1.0$ A. Terminal p.d. $V = IR = 1.0 \\times 5.0 = 5.0$ V; lost volts $= Ir = 1.0 \\times 1.0 = 1.0$ V. Check: $\\varepsilon = V + Ir = 5.0 + 1.0 = 6.0$ V.",
        },
      },
      questions: [
        {
          id: "physsl-u5-emf-internal-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What does the e.m.f. of a cell represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The energy transferred per unit charge by the cell" },
              { id: "b", text: "The p.d. across the cell when current flows" },
              { id: "c", text: "The resistance inside the cell" },
              { id: "d", text: "The power output of the cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "e.m.f.", statement: "e.m.f. is the energy transferred per unit charge by the source, measured in volts; it equals the open-circuit terminal p.d." },
            ],
            steps: [
              { reasoning: "e.m.f. is defined as energy per unit charge supplied by the source.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the energy transferred per unit charge by the cell",
            commonErrors: ["Confusing e.m.f. with terminal p.d.; the terminal p.d. is less than the e.m.f. when current flows."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A cell of e.m.f. $6.0$ V and internal resistance $2.0\\,\\Omega$ is connected to a $10\\,\\Omega$ resistor. Calculate the current in the circuit.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.60$ A" },
              { id: "b", text: "$3.0$ A" },
              { id: "c", text: "$1.7$ A" },
              { id: "d", text: "$0.50$ A" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
            ],
            steps: [
              { reasoning: "Total resistance is the external plus internal resistance.", working: "R_{\\text{total}} = 10 + 2.0 = 12 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Apply $I = \\varepsilon/R_{\\text{total}}$.", working: "I = \\frac{6.0}{12} = 0.50 \\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.50$ A",
            commonErrors: ["Ignoring the internal resistance and using $I = \\varepsilon/R = 0.60$ A.", "Using $\\varepsilon r$ instead of $\\varepsilon/(R+r)$."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A battery has e.m.f. $12$ V and internal resistance $1.0\\,\\Omega$. It is connected to a $5.0\\,\\Omega$ resistor.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current $1.4$ A; terminal p.d. $7.0$ V; lost volts $5.0$ V" },
              { id: "b", text: "Current $2.0$ A; terminal p.d. $12$ V; lost volts $0$ V" },
              { id: "c", text: "Current $2.4$ A; terminal p.d. $10$ V; lost volts $2.0$ V" },
              { id: "d", text: "Current $2.0$ A; terminal p.d. $10$ V; lost volts $2.0$ V" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
              { kind: "formula", name: "Terminal p.d.", statement: "V = \\varepsilon - Ir = IR" },
            ],
            steps: [
              { reasoning: "Total resistance $R + r = 6.0\\,\\Omega$.", working: "I = \\frac{12}{6.0} = 2.0 \\text{ A}", marks: 1, markCode: "M" },
              { reasoning: "Terminal p.d. across the external resistor.", working: "V = IR = 2.0 \\times 5.0 = 10 \\text{ V}", marks: 1, markCode: "A" },
              { reasoning: "Lost volts $= Ir = 2.0 \\times 1.0 = 2.0$ V; check $10 + 2.0 = 12$ V.", working: "Ir = 2.0 \\text{ V}", marks: 1, markCode: "A" },
              { reasoning: "Option (a) is consistent with $\\varepsilon = V + Ir$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** current $2.0$ A; terminal p.d. $10$ V; lost volts $2.0$ V",
            commonErrors: ["Reporting the e.m.f. as the terminal p.d.", "Forgetting to include internal resistance in the total resistance."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A cell of e.m.f. $9.0$ V and internal resistance $1.5\\,\\Omega$ is connected to a $7.5\\,\\Omega$ resistor.",
          parts: [
            { label: "a", prompt: "Calculate the current in the circuit.", marks: 2 },
            { label: "b", prompt: "Calculate the terminal potential difference across the resistor.", marks: 2 },
            { label: "c", prompt: "Calculate the lost volts.", marks: 2 },
            { label: "d", prompt: "Explain why the terminal p.d. decreases as the current drawn from the cell increases.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
              { kind: "formula", name: "Terminal p.d.", statement: "V = \\varepsilon - Ir = IR" },
              { kind: "definition", name: "Lost volts", statement: "Ir — the p.d. dropped across the internal resistance." },
            ],
            steps: [
              { part: "a", reasoning: "Total resistance is $R + r = 9.0\\,\\Omega$.", working: "I = \\frac{9.0}{9.0} = 1.0 \\text{ A}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Terminal p.d. is $V = IR$ across the external resistor.", working: "V = 1.0 \\times 7.5 = 7.5 \\text{ V}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Lost volts $= Ir$.", working: "Ir = 1.0 \\times 1.5 = 1.5 \\text{ V}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The e.m.f. $\\varepsilon$ is fixed; as $I$ increases the product $Ir$ grows.", working: "Ir \\uparrow \\text{ as } I \\uparrow", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $V = \\varepsilon - Ir$, a larger lost-volts term means a smaller terminal p.d.", working: "V = \\varepsilon - Ir \\Rightarrow V \\downarrow", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $I = 1.0$ A (b) $V = 7.5$ V (c) lost volts $= 1.5$ V (d) $\\varepsilon$ is constant while $Ir$ increases with current, so $V = \\varepsilon - Ir$ falls",
            commonErrors: ["Using $V = \\varepsilon$ as the terminal p.d.", "Subtracting $Ir$ twice or adding it to the external resistance incorrectly."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What causes the internal resistance of a real cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The resistance of the ammeter used to measure the current" },
              { id: "b", text: "The resistance of the external load" },
              { id: "c", text: "The resistance of the connecting wires in the circuit" },
              { id: "d", text: "The resistance of the cell's own electrolyte and electrodes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Internal resistance", statement: "Internal resistance $r$ arises from the resistance of the materials inside the cell, such as the electrolyte and electrodes." },
            ],
            steps: [
              { reasoning: "The internal resistance is a property of the cell itself, not of the external circuit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the resistance of the cell's own electrolyte and electrodes",
            commonErrors: ["Confusing internal resistance with the external circuit resistance."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A cell of e.m.f. $5.0$ V and internal resistance $1.0\\,\\Omega$ is connected to a $4.0\\,\\Omega$ resistor. What is the terminal potential difference across the resistor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.0$ V" },
              { id: "b", text: "$5.0$ V" },
              { id: "c", text: "$1.0$ V" },
              { id: "d", text: "$0.80$ V" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
              { kind: "formula", name: "Terminal p.d.", statement: "V = IR = \\varepsilon - Ir" },
            ],
            steps: [
              { reasoning: "Total resistance is $R + r = 5.0\\,\\Omega$, so $I = 5.0/5.0 = 1.0$ A.", working: "I = \\frac{5.0}{4.0 + 1.0} = 1.0 \\text{ A}", marks: 1, markCode: "M" },
              { reasoning: "Terminal p.d. across the external resistor.", working: "V = IR = 1.0 \\times 4.0 = 4.0 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $4.0$ V",
            commonErrors: ["Quoting the e.m.f. $5.0$ V as the terminal p.d."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 5,
          stem: "A cell of e.m.f. $12$ V and internal resistance $2.0\\,\\Omega$ is connected to a $10\\,\\Omega$ resistor. Calculate the current, the terminal p.d. and the lost volts.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current", answer: 1.0, unit: "A" },
              { label: "Terminal p.d.", answer: 10, unit: "V" },
              { label: "Lost volts", answer: 2.0, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
              { kind: "formula", name: "Lost volts", statement: "Ir" },
            ],
            steps: [
              { reasoning: "Apply $I = \\varepsilon/(R + r)$.", working: "I = \\frac{12}{10 + 2.0} = \\frac{12}{12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the current.", working: "I = 1.0 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Terminal p.d. is $V = IR$ across the external resistor.", working: "V = 1.0 \\times 10 = 10 \\text{ V}", marks: 1, markCode: "M" },
              { reasoning: "Lost volts is $Ir$.", working: "Ir = 1.0 \\times 2.0 = 2.0 \\text{ V}", marks: 1, markCode: "A" },
              { reasoning: "Check: $\\varepsilon = V + Ir = 10 + 2.0 = 12$ V, consistent.", working: "12 = 10 + 2.0 \\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current $= 1.0$ A; terminal p.d. $= 10$ V; lost volts $= 2.0$ V",
            commonErrors: ["Forgetting to include $r$ in the total resistance.", "Reporting the e.m.f. as the terminal p.d."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A cell reads $1.5$ V on a voltmeter when no current is drawn (open circuit). When it delivers a current of $0.50$ A the terminal p.d. falls to $1.2$ V. What is the internal resistance of the cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.5\\,\\Omega$" },
              { id: "b", text: "$0.30\\,\\Omega$" },
              { id: "c", text: "$0.60\\,\\Omega$" },
              { id: "d", text: "$3.0\\,\\Omega$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lost volts", statement: "\\varepsilon - V = Ir" },
            ],
            steps: [
              { reasoning: "The lost volts are $\\varepsilon - V = 1.5 - 1.2 = 0.30$ V, so $Ir = 0.30$ V.", working: "Ir = 0.30 \\text{ V}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the current to find $r$.", working: "r = \\frac{0.30}{0.50} = 0.60 \\text{ } \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.60\\,\\Omega$",
            commonErrors: ["Dividing $0.30$ V by the e.m.f. instead of the current.", "Using $1.5/0.50$ instead of the lost volts."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The terminal p.d. of a cell was measured at two currents: $4.8$ V when the current was $0.40$ A, and $4.4$ V when the current was $0.80$ A. Determine the e.m.f. and the internal resistance of the cell.",
          response: {
            type: "numeric",
            parts: [
              { label: "Internal resistance", answer: 1.0, unit: "\\Omega" },
              { label: "e.m.f.", answer: 5.2, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Terminal p.d.", statement: "V = \\varepsilon - Ir" },
            ],
            steps: [
              { reasoning: "The internal resistance is the magnitude of the gradient of the $V$–$I$ graph: $r = -\\Delta V/\\Delta I$.", working: "r = \\frac{4.8 - 4.4}{0.80 - 0.40} = \\frac{0.40}{0.40}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $r$.", working: "r = 1.0 \\text{ } \\Omega", marks: 1, markCode: "A" },
              { reasoning: "Use $\\varepsilon = V + Ir$ with either measurement.", working: "\\varepsilon = 4.8 + 0.40 \\times 1.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $\\varepsilon$.", working: "\\varepsilon = 5.2 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Internal resistance $= 1.0\\,\\Omega$; e.m.f. $= 5.2$ V",
            commonErrors: ["Using $\\Delta V/\\Delta I$ with the wrong sign or reversed pairs.", "Reporting the terminal p.d. as the e.m.f."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A cell of e.m.f. $24$ V and internal resistance $1.0\\,\\Omega$ is connected to an $11\\,\\Omega$ resistor. Calculate the current in the circuit and the terminal potential difference.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current", answer: 2.0, unit: "A" },
              { label: "Terminal p.d.", answer: 22, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
              { kind: "formula", name: "Terminal p.d.", statement: "V = IR" },
            ],
            steps: [
              { reasoning: "Total resistance $R + r = 12\\,\\Omega$.", working: "I = \\frac{24}{11 + 1.0} = \\frac{24}{12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the current.", working: "I = 2.0 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Terminal p.d. across the external resistor.", working: "V = IR = 2.0 \\times 11 = 22 \\text{ V}", marks: 1, markCode: "M" },
              { reasoning: "Both values are correct.", working: "\\varepsilon - V = 24 - 22 = 2.0 \\text{ V} = Ir \\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current $= 2.0$ A; terminal p.d. $= 22$ V",
            commonErrors: ["Forgetting the internal resistance in the total.", "Quoting $24$ V as the terminal p.d."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A cell of e.m.f. $6.0$ V and internal resistance $3.0\\,\\Omega$ is short-circuited (connected to a wire of negligible resistance). What is the current in the wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18$ A" },
              { id: "b", text: "$9.0$ A" },
              { id: "c", text: "$0.50$ A" },
              { id: "d", text: "$2.0$ A" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Short-circuit current", statement: "With $R = 0$, $I_{\\max} = \\varepsilon/r$" },
            ],
            steps: [
              { reasoning: "With no external resistance the only opposition is the internal resistance.", working: "I = \\frac{\\varepsilon}{r}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the values.", working: "I = \\frac{6.0}{3.0} = 2.0 \\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2.0$ A",
            commonErrors: ["Including a non-existent external resistance.", "Multiplying $\\varepsilon$ by $r$."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A cell of e.m.f. $15$ V and internal resistance $0.50\\,\\Omega$ is connected to a variable resistor. The resistor is adjusted until the current is $2.0$ A.",
          parts: [
            { label: "a", prompt: "Calculate the resistance of the variable resistor.", marks: 2 },
            { label: "b", prompt: "Calculate the terminal potential difference across the resistor.", marks: 2 },
            { label: "c", prompt: "Calculate the lost volts.", marks: 2 },
            { label: "d", prompt: "Explain why the terminal p.d. is less than the e.m.f. of the cell.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
              { kind: "formula", name: "Terminal p.d.", statement: "V = IR = \\varepsilon - Ir" },
            ],
            steps: [
              { part: "a", reasoning: "Total resistance is $\\varepsilon/I = 15/2.0 = 7.5\\,\\Omega$; subtract $r$.", working: "R + r = \\frac{15}{2.0} = 7.5 \\text{ } \\Omega \\Rightarrow R = 7.5 - 0.50 = 7.0 \\text{ } \\Omega", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Terminal p.d. is $V = IR$ across the external resistor (or $\\varepsilon - Ir$).", working: "V = 2.0 \\times 7.0 = 14 \\text{ V}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Lost volts is $Ir$.", working: "Ir = 2.0 \\times 0.50 = 1.0 \\text{ V}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Some of the e.m.f. is used to drive current through the cell's own internal resistance, producing the lost-volts drop $Ir$.", working: "\\varepsilon = V + Ir \\Rightarrow V = \\varepsilon - Ir < \\varepsilon", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The terminal p.d. is only the part of the e.m.f. delivered to the external circuit, so it is always less than $\\varepsilon$ when current flows.", working: "V = \\varepsilon - Ir", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $R = 7.0\\,\\Omega$ (b) $V = 14$ V (c) lost volts $= 1.0$ V (d) the e.m.f. $\\varepsilon$ is fixed while $Ir$ is lost inside the cell, so $V = \\varepsilon - Ir$",
            commonErrors: ["Using $\\varepsilon/I$ as the external resistance without subtracting $r$.", "Assuming the terminal p.d. equals the e.m.f."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A $9.0$ V battery with internal resistance $0.50\\,\\Omega$ is connected to a torch bulb of resistance $17.5\\,\\Omega$. Calculate the current in the circuit and the terminal potential difference across the bulb.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current", answer: 0.5, unit: "A" },
              { label: "Terminal p.d.", answer: 8.75, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
              { kind: "formula", name: "Terminal p.d.", statement: "V = IR" },
            ],
            steps: [
              { reasoning: "Total resistance is $17.5 + 0.50 = 18\\,\\Omega$.", working: "R_{\\text{total}} = 18 \\text{ } \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Apply Ohm's law to the whole circuit.", working: "I = \\frac{9.0}{18} = 0.50 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Terminal p.d. across the bulb is $IR$.", working: "V = 0.50 \\times 17.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V = 8.75 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current $= 0.50$ A; terminal p.d. $= 8.75$ V",
            commonErrors: ["Using $9.0$ V directly as the terminal p.d.", "Forgetting the factor of $0.50\\,\\Omega$ internal resistance."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'lost volts' in a cell is given by which expression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Ir$" },
              { id: "b", text: "$V/r$" },
              { id: "c", text: "$\\varepsilon I$" },
              { id: "d", text: "$I/r$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Lost volts", statement: "The p.d. dropped across the internal resistance is $Ir$; $\\varepsilon = V + Ir$." },
            ],
            steps: [
              { reasoning: "The lost volts equal the current multiplied by the internal resistance, by Ohm's law applied inside the cell.", working: "V_{\\text{lost}} = Ir", marks: 1, markCode: "M" },
              { reasoning: "Option (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $Ir$",
            commonErrors: ["Writing $I/r$ or $V/r$ instead of applying Ohm's law correctly."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A cell of e.m.f. $6.0$ V is connected to a $14\\,\\Omega$ resistor. The terminal p.d. across the resistor is measured as $5.4$ V. Calculate the internal resistance of the cell.",
          response: {
            type: "numeric",
            parts: [
              { label: "Internal resistance", answer: 1.56, tolerance: 0.01, unit: "\\Omega" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
            ],
            steps: [
              { reasoning: "Current through the circuit is $I = V/R = 5.4/14$.", working: "I = \\frac{5.4}{14} = 0.386 \\text{ A}", marks: 1, markCode: "M" },
              { reasoning: "Lost volts is $\\varepsilon - V = 6.0 - 5.4 = 0.60$ V.", working: "Ir = 0.60 \\text{ V}", marks: 1, markCode: "M" },
              { reasoning: "Internal resistance is $r = Ir/I$.", working: "r = \\frac{0.60}{0.386}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate (equivalently $r = \\varepsilon/I - R = 15.56 - 14$).", working: "r = 1.56 \\text{ } \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Internal resistance $= 1.56\\,\\Omega$ (accept $1.6\\,\\Omega$)",
            commonErrors: ["Using $V/R$ with the e.m.f. instead of the terminal p.d.", "Subtracting $r$ from the wrong quantity."],
          },
        },
        {
          id: "physsl-u5-emf-internal-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Two identical cells, each of e.m.f. $1.5$ V and internal resistance $0.50\\,\\Omega$, are connected in series to drive a current through an $8.0\\,\\Omega$ resistor.",
          parts: [
            { label: "a", prompt: "State the combined e.m.f. and the total internal resistance of the pair.", marks: 2 },
            { label: "b", prompt: "Calculate the current through the resistor.", marks: 2 },
            { label: "c", prompt: "Calculate the terminal potential difference across the resistor.", marks: 2 },
            { label: "d", prompt: "Explain why the terminal p.d. is less than the combined e.m.f.", marks: 2 },
            { label: "e", prompt: "State one assumption made in treating the two cells as a single source of e.m.f. $3.0$ V and internal resistance $1.0\\,\\Omega$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cells in series", statement: "e.m.f.s add and internal resistances add for identical cells in series" },
              { kind: "formula", name: "Circuit equation", statement: "\\varepsilon = I(R + r)" },
            ],
            steps: [
              { part: "a", reasoning: "Identical cells in series have additive e.m.f.s and additive internal resistances.", working: "\\varepsilon = 1.5 + 1.5 = 3.0 \\text{ V}; \\ r = 0.50 + 0.50 = 1.0 \\text{ } \\Omega", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Total resistance is $8.0 + 1.0 = 9.0\\,\\Omega$.", working: "I = \\frac{3.0}{9.0} = 0.333 \\text{ A}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Terminal p.d. across the external resistor.", working: "V = IR = 0.333 \\times 8.0 = 2.67 \\text{ V}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Part of the combined e.m.f. is lost driving the current through the total internal resistance $r = 1.0\\,\\Omega$.", working: "Ir = 0.333 \\times 1.0 = 0.33 \\text{ V lost}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $V = \\varepsilon - Ir$, the terminal p.d. ($2.67$ V) is less than $3.0$ V whenever current flows.", working: "V = \\varepsilon - Ir < \\varepsilon", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any one of: the cells are identical; they deliver the same current; no other energy losses occur.", working: "\\text{e.g. identical cells / negligible other losses}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $\\varepsilon = 3.0$ V, $r = 1.0\\,\\Omega$ (b) $I = 0.333$ A (c) $V = 2.67$ V (d) $Ir = 0.33$ V is lost inside the cells so $V = \\varepsilon - Ir$ (e) e.g. the cells are identical and share the current equally",
            commonErrors: ["Adding e.m.f.s but forgetting to add internal resistances.", "Treating the terminal p.d. as equal to the combined e.m.f."],
          },
        },
      ],
    },
    {
      id: "physsl-u5-induction",
      title: "Magnetic fields and electromagnetic induction",
      skill: "Use $F = BIL\\sin\\theta$, Fleming's left-hand rule, Faraday's law $\\varepsilon = -N\\Delta\\Phi/\\Delta t$ and Lenz's law.",
      lesson: {
        sections: [
          {
            heading: "Force on a current-carrying conductor",
            body: "A conductor of length $L$ carrying current $I$ in a magnetic field of flux density $B$ experiences a force $F = BIL\\sin\\theta$, where $\\theta$ is the angle between the field and the conductor. The force is perpendicular to both the field and the current; **Fleming's left-hand rule** gives its direction (First finger Field, seCond finger Current, thuMb motion). This principle drives electric motors.",
          },
          {
            heading: "Magnetic flux and Faraday's law",
            body: "**Magnetic flux** through a loop of area $A$ in a field $B$ is $\\Phi = BA\\cos\\theta$. Faraday's law states that the induced e.m.f. equals the rate of change of **flux linkage** $N\\Phi$: $\\varepsilon = -N\\,\\Delta\\Phi/\\Delta t$ for $N$ turns. Induction occurs whenever the flux through the circuit changes — by moving a magnet, changing the field, or changing the area or orientation of the loop.",
          },
          {
            heading: "Lenz's law and energy conservation",
            body: "**Lenz's law** gives the direction of the induced e.m.f.: the induced current flows so as to oppose the change in flux that produces it. This is a consequence of conservation of energy — if the induced current aided the change, it would generate energy from nothing. Lenz's law explains why an induced current creates its own magnetic field opposing the original change.",
          },
        ],
        keyFormulas: [
          { name: "Force on conductor", statement: "F = BIL\\sin\\theta" },
          { name: "Magnetic flux", statement: "\\Phi = BA\\cos\\theta" },
          { name: "Faraday's law", statement: "\\varepsilon = -N\\,\\Delta\\Phi/\\Delta t" },
        ],
        workedExample: {
          problem: "A coil of $200$ turns experiences a change in magnetic flux of $0.004$ Wb in $0.10$ s. Calculate the magnitude of the induced e.m.f.",
          solution: "$\\varepsilon = N\\Delta\\Phi/\\Delta t = 200 \\times 0.004/0.10 = 8.0$ V.",
        },
      },
      questions: [
        {
          id: "physsl-u5-induction-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A straight wire carrying current is placed perpendicular to a uniform magnetic field. What is the direction of the force on the wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Along the wire, in the direction of the current" },
              { id: "b", text: "There is no force" },
              { id: "c", text: "Parallel to the magnetic field" },
              { id: "d", text: "Perpendicular to both the field and the current" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Force on conductor", statement: "F = BIL\\sin\\theta; the force is perpendicular to both B and I, given by Fleming's left-hand rule." },
            ],
            steps: [
              { reasoning: "The magnetic force on a current-carrying conductor is perpendicular to both the field and the current direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** perpendicular to both the field and the current",
            commonErrors: ["Thinking the force acts along the wire."],
          },
        },
        {
          id: "physsl-u5-induction-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A wire of length $0.30$ m carrying a current of $5.0$ A is placed at right angles to a magnetic field of flux density $0.20$ T. Calculate the force on the wire.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.0$ N" },
              { id: "b", text: "$0.30$ N" },
              { id: "c", text: "$0.083$ N" },
              { id: "d", text: "$0.15$ N" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Force on conductor", statement: "F = BIL\\sin\\theta; \\theta = 90^\\circ so \\sin\\theta = 1" },
            ],
            steps: [
              { reasoning: "Apply $F = BIL$ since the wire is perpendicular to the field.", working: "F = 0.20 \\times 5.0 \\times 0.30", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F = 0.30 \\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.30$ N",
            commonErrors: ["Including a $\\sin\\theta$ factor when the wire is already perpendicular.", "Multiplying by an extra factor of length."],
          },
        },
        {
          id: "physsl-u5-induction-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A coil of $200$ turns is moved so that the magnetic flux through it changes uniformly from $0.0050$ Wb to $0.0010$ Wb in $0.10$ s.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Induced e.m.f. $0.80$ V" },
              { id: "b", text: "Induced e.m.f. $8.0$ V" },
              { id: "c", text: "Induced e.m.f. $200$ V" },
              { id: "d", text: "Induced e.m.f. $80$ V" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Faraday's law", statement: "\\varepsilon = N\\,|\\Delta\\Phi|/\\Delta t" },
            ],
            steps: [
              { reasoning: "Change in flux.", working: "\\Delta\\Phi = 0.0050 - 0.0010 = 0.0040 \\text{ Wb}", marks: 1, markCode: "M" },
              { reasoning: "Apply Faraday's law with $N = 200$ turns and $\\Delta t = 0.10$ s.", working: "\\varepsilon = \\frac{200 \\times 0.0040}{0.10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\varepsilon = 8.0 \\text{ V}", marks: 1, markCode: "A" },
              { reasoning: "Option (a) is correct; the negative sign in Faraday's law only gives the direction (Lenz's law), not the magnitude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** induced e.m.f. $8.0$ V",
            commonErrors: ["Using the initial flux $0.0050$ Wb instead of the change $0.0040$ Wb.", "Forgetting the factor of $N$ turns."],
          },
        },
        {
          id: "physsl-u5-induction-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A coil of $150$ turns is moved so that the magnetic flux linkage through it changes uniformly from $0.030$ Wb to $0.010$ Wb in $0.20$ s.",
          parts: [
            { label: "a", prompt: "Calculate the magnitude of the induced e.m.f.", marks: 2 },
            { label: "b", prompt: "State Lenz's law.", marks: 2 },
            { label: "c", prompt: "Explain why no e.m.f. is induced when the magnetic flux through the coil is constant.", marks: 2 },
            { label: "d", prompt: "State two ways in which the magnitude of the induced e.m.f. could be increased.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Faraday's law", statement: "\\varepsilon = N\\,\\Delta\\Phi/\\Delta t" },
              { kind: "law", name: "Lenz's law", statement: "The induced e.m.f. opposes the change in flux that produces it." },
            ],
            steps: [
              { part: "a", reasoning: "Change in flux linkage is $N\\Delta\\Phi$ with $\\Delta\\Phi = 0.020$ Wb.", working: "\\varepsilon = \\frac{150 \\times (0.030 - 0.010)}{0.20} = \\frac{150 \\times 0.020}{0.20}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\varepsilon = 15 \\text{ V}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the law: the induced e.m.f. (or current) acts to oppose the change in magnetic flux that causes it.", working: "\\text{oppose the change in flux}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Faraday's law depends on the rate of change of flux.", working: "\\Delta\\Phi = 0 \\Rightarrow \\Delta\\Phi/\\Delta t = 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "With no change in flux there is no induced e.m.f., even though a flux is present.", working: "\\varepsilon = 0", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The induced e.m.f. is proportional to $N$, to $\\Delta\\Phi$ and inversely proportional to $\\Delta t$.", working: "\\varepsilon \\propto N\\Delta\\Phi/\\Delta t", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Any two of: increase the number of turns, increase the flux change, decrease the time of change.", working: "\\text{e.g. more turns; faster change}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\varepsilon = 15$ V (b) the induced e.m.f. opposes the change in flux producing it (c) constant flux means $\\Delta\\Phi/\\Delta t = 0$, so $\\varepsilon = 0$ (d) e.g. increase the number of turns or make the flux change faster",
            commonErrors: ["Using the initial flux rather than the change in flux.", "Saying induction requires a magnetic field rather than a changing flux."],
          },
        },
        {
          id: "physsl-u5-induction-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Fleming's left-hand rule is used to determine",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the frequency of an a.c. supply" },
              { id: "b", text: "the direction of the induced e.m.f. in a coil" },
              { id: "c", text: "the direction of the force on a current-carrying conductor in a magnetic field" },
              { id: "d", text: "the magnitude of the magnetic flux through a loop" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Fleming's left-hand rule", statement: "First finger = Field, seCond finger = Current, thuMb = motion (force); it gives the direction of the force on a conductor." },
            ],
            steps: [
              { reasoning: "Fleming's left-hand rule applies to the motor effect — the force on a current-carrying conductor.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the direction of the force on a current-carrying conductor in a magnetic field",
            commonErrors: ["Confusing Fleming's left-hand rule (force) with Fleming's right-hand rule (induced e.m.f.)."],
          },
        },
        {
          id: "physsl-u5-induction-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A straight wire of length $0.50$ m carrying a current of $2.0$ A is placed perpendicular to a uniform magnetic field of flux density $0.40$ T. Calculate the force on the wire.",
          response: {
            type: "numeric",
            parts: [
              { label: "Force", answer: 0.4, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Force on conductor", statement: "F = BIL\\sin\\theta; \\theta = 90^\\circ so F = BIL" },
            ],
            steps: [
              { reasoning: "Apply $F = BIL$ since the wire is perpendicular to the field.", working: "F = 0.40 \\times 2.0 \\times 0.50", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F = 0.40 \\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Force $= 0.40$ N",
            commonErrors: ["Including an extra $\\sin\\theta$ factor when the wire is already perpendicular.", "Squaring the current or field."],
          },
        },
        {
          id: "physsl-u5-induction-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A wire of length $0.25$ m experiences a force of $0.60$ N when placed perpendicular to a magnetic field of flux density $0.30$ T.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current in wire", answer: 8.0, unit: "A" },
              { label: "Force if the current doubles", answer: 1.2, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Force on conductor", statement: "F = BIL (perpendicular)" },
            ],
            steps: [
              { reasoning: "Rearrange $F = BIL$ for the current.", working: "I = \\frac{F}{BL}", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate.", working: "I = \\frac{0.60}{0.30 \\times 0.25} = 8.0 \\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Force is proportional to current at fixed $B$ and $L$.", working: "F \\propto I \\Rightarrow F_{\\text{new}} = 2 \\times 0.60", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "F_{\\text{new}} = 1.2 \\text{ N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current $= 8.0$ A; force with doubled current $= 1.2$ N",
            commonErrors: ["Dividing by $BL$ incorrectly or multiplying instead.", "Assuming force is proportional to $I^2$."],
          },
        },
        {
          id: "physsl-u5-induction-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A flat loop of area $0.15$ m$^2$ is placed perpendicular to a uniform magnetic field of flux density $0.40$ T. Calculate the magnetic flux through the loop.",
          response: {
            type: "numeric",
            parts: [
              { label: "Magnetic flux", answer: 0.06, unit: "Wb" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnetic flux", statement: "\\Phi = BA\\cos\\theta; \\theta = 0 so \\Phi = BA" },
            ],
            steps: [
              { reasoning: "The loop is perpendicular to the field so the full area is effective.", working: "\\Phi = BA", marks: 1, markCode: "M" },
              { reasoning: "Substitute and evaluate.", working: "\\Phi = 0.40 \\times 0.15 = 0.060 \\text{ Wb}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnetic flux $= 0.060$ Wb",
            commonErrors: ["Including a $\\cos\\theta$ factor for a perpendicular loop.", "Using $B/A$ instead of $BA$."],
          },
        },
        {
          id: "physsl-u5-induction-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The magnetic flux through a coil of $100$ turns changes uniformly by $0.0020$ Wb in a time of $0.050$ s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Induced e.m.f.", answer: 4.0, unit: "V" },
              { label: "Induced e.m.f. if the coil has $200$ turns", answer: 8.0, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Faraday's law", statement: "\\varepsilon = N\\,\\Delta\\Phi/\\Delta t" },
            ],
            steps: [
              { reasoning: "Apply Faraday's law with $N = 100$.", working: "\\varepsilon = \\frac{100 \\times 0.0020}{0.050}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\varepsilon = 4.0 \\text{ V}", marks: 1, markCode: "A" },
              { reasoning: "The induced e.m.f. is proportional to the number of turns.", working: "\\varepsilon \\propto N \\Rightarrow \\varepsilon_{200} = 2 \\times 4.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\varepsilon_{200} = 8.0 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Induced e.m.f. $= 4.0$ V; with $200$ turns $= 8.0$ V",
            commonErrors: ["Using the flux itself instead of its rate of change.", "Forgetting the factor of turns $N$."],
          },
        },
        {
          id: "physsl-u5-induction-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Lenz's law states that the direction of an induced e.m.f. is such that the induced current",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "aids the change in magnetic flux that produces it" },
              { id: "b", text: "flows only when the flux is constant" },
              { id: "c", text: "is independent of the direction of the change" },
              { id: "d", text: "opposes the change in magnetic flux that produces it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Lenz's law", statement: "The induced e.m.f. acts to oppose the change in flux linkage producing it, consistent with conservation of energy." },
            ],
            steps: [
              { reasoning: "Lenz's law requires the induced effect to oppose the change that causes it.", marks: 1, markCode: "M" },
              { reasoning: "Option (b) states this correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** opposes the change in magnetic flux that produces it",
            commonErrors: ["Thinking the induced current aids the change; that would create energy from nothing."],
          },
        },
        {
          id: "physsl-u5-induction-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The north pole of a bar magnet is moved towards a coil connected to a galvanometer. By Lenz's law, the induced current in the coil",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "flows in a direction independent of the magnet's motion" },
              { id: "b", text: "creates a field that repels the magnet, opposing its approach" },
              { id: "c", text: "creates no field because the flux is increasing" },
              { id: "d", text: "creates a field that attracts the magnet, helping it move faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Lenz's law", statement: "The induced current opposes the change in flux; as the magnet approaches, the flux increases, so the induced field must oppose the increase." },
            ],
            steps: [
              { reasoning: "Approaching the magnet increases the flux through the coil; Lenz's law requires the induced field to oppose this increase.", marks: 1, markCode: "M" },
              { reasoning: "The induced current therefore makes the near face of the coil a north pole, repelling the approaching magnet; option (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** creates a field that repels the magnet, opposing its approach",
            commonErrors: ["Forgetting that Lenz's law makes the induced effect oppose the change, not the flux itself."],
          },
        },
        {
          id: "physsl-u5-induction-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A coil of $50$ turns and area $0.010$ m$^2$ is placed perpendicular to a uniform magnetic field. The flux density increases uniformly from $0$ to $0.50$ T in $0.20$ s.",
          parts: [
            { label: "a", prompt: "Calculate the change in magnetic flux through the coil.", marks: 2 },
            { label: "b", prompt: "Calculate the magnitude of the induced e.m.f.", marks: 2 },
            { label: "c", prompt: "State the direction of the induced current predicted by Lenz's law as the field increases.", marks: 2 },
            { label: "d", prompt: "State two ways in which the magnitude of the induced e.m.f. could be increased.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Magnetic flux", statement: "\\Phi = BA" },
              { kind: "law", name: "Faraday's law", statement: "\\varepsilon = N\\,\\Delta\\Phi/\\Delta t" },
              { kind: "law", name: "Lenz's law", statement: "The induced current opposes the increase in flux." },
            ],
            steps: [
              { part: "a", reasoning: "Flux change is $\\Delta\\Phi = \\Delta B \\times A$ since the coil stays perpendicular.", working: "\\Delta\\Phi = 0.50 \\times 0.010 = 0.0050 \\text{ Wb}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply Faraday's law.", working: "\\varepsilon = \\frac{50 \\times 0.0050}{0.20} = 1.25 \\text{ V}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The flux is increasing, so the induced current flows to create a field opposing the increase (i.e. opposing the applied field direction).", working: "\\text{induced field opposes } \\Delta B", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Any two of: increase the number of turns, increase the area, increase the flux density change, decrease the time of change.", working: "\\varepsilon \\propto N\\Delta\\Phi/\\Delta t", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $\\Delta\\Phi = 0.0050$ Wb (b) $\\varepsilon = 1.25$ V (c) induced current creates a field opposing the increasing flux (d) e.g. more turns or a faster change of flux",
            commonErrors: ["Using $B$ instead of $\\Delta B$ in the flux change.", "Describing the direction without reference to the change in flux."],
          },
        },
        {
          id: "physsl-u5-induction-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The magnetic flux linkage through a coil of $80$ turns changes uniformly from $0.12$ Wb to $0.02$ Wb in $0.25$ s.",
          response: {
            type: "numeric",
            parts: [
              { label: "Magnitude of induced e.m.f.", answer: 32, unit: "V" },
              { label: "Induced e.m.f. if the change takes $0.125$ s instead", answer: 64, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Faraday's law", statement: "\\varepsilon = N\\,|\\Delta\\Phi|/\\Delta t" },
            ],
            steps: [
              { reasoning: "Change in flux.", working: "\\Delta\\Phi = 0.12 - 0.02 = 0.10 \\text{ Wb}", marks: 1, markCode: "M" },
              { reasoning: "Apply Faraday's law.", working: "\\varepsilon = \\frac{80 \\times 0.10}{0.25} = 32 \\text{ V}", marks: 1, markCode: "A" },
              { reasoning: "The e.m.f. is inversely proportional to the time of change.", working: "\\varepsilon \\propto 1/\\Delta t \\Rightarrow \\varepsilon = 32 \\times \\frac{0.25}{0.125}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\varepsilon = 64 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Induced e.m.f. $= 32$ V; with $\\Delta t = 0.125$ s, $\\varepsilon = 64$ V",
            commonErrors: ["Using the initial flux $0.12$ Wb rather than the change $0.10$ Wb.", "Thinking the e.m.f. is proportional to $\\Delta t$."],
          },
        },
        {
          id: "physsl-u5-induction-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In which situation is NO e.m.f. induced in a coil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A magnet is moved towards the coil" },
              { id: "b", text: "The magnetic field through the coil is switched off" },
              { id: "c", text: "The coil is rotated in a magnetic field" },
              { id: "d", text: "A steady current flows in a stationary coil in a constant field" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Faraday's law", statement: "An e.m.f. is induced only when the magnetic flux linkage changes; a steady current produces a constant field." },
            ],
            steps: [
              { reasoning: "Induction requires a changing flux, not merely the presence of flux or current.", marks: 1, markCode: "M" },
              { reasoning: "A steady current in a stationary coil gives constant flux, so $\\Delta\\Phi/\\Delta t = 0$ and no e.m.f.; option (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** a steady current flows in a stationary coil in a constant field",
            commonErrors: ["Believing any current in a coil induces an e.m.f."],
          },
        },
        {
          id: "physsl-u5-induction-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Two coils of the same area experience changing magnetic flux. Coil A has $100$ turns and its flux changes by $0.40$ Wb in $0.10$ s. Coil B has $200$ turns and its flux changes by $0.20$ Wb in $0.10$ s. Which coil has the larger induced e.m.f.?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot be determined without the areas of the coils" },
              { id: "b", text: "Coil B, because it has more turns" },
              { id: "c", text: "Coil A, because it has the larger flux change" },
              { id: "d", text: "They are equal" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Faraday's law", statement: "\\varepsilon = N\\,\\Delta\\Phi/\\Delta t" },
            ],
            steps: [
              { reasoning: "Coil A: $\\varepsilon_A = 100 \\times 0.40/0.10 = 400$ V.", working: "\\varepsilon_A = \\frac{100 \\times 0.40}{0.10} = 400 \\text{ V}", marks: 1, markCode: "M" },
              { reasoning: "Coil B: $\\varepsilon_B = 200 \\times 0.20/0.10 = 400$ V.", working: "\\varepsilon_B = \\frac{200 \\times 0.20}{0.10} = 400 \\text{ V}", marks: 1, markCode: "A" },
              { reasoning: "Doubling the turns halves the required flux change for the same e.m.f.; both give $400$ V.", working: "\\varepsilon_A = \\varepsilon_B = 400 \\text{ V}", marks: 1, markCode: "M" },
              { reasoning: "The induced e.m.f.s are equal; option (c).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** they are equal ($400$ V each)",
            commonErrors: ["Assuming more turns always gives a larger e.m.f. regardless of flux change."],
          },
        },
        {
          id: "physsl-u5-induction-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A straight wire of length $0.40$ m carries a current of $3.0$ A. It is placed in a uniform magnetic field of flux density $0.25$ T at an angle of $60^\\circ$ to the field direction.",
          parts: [
            { label: "a", prompt: "Calculate the magnitude of the force on the wire.", marks: 2 },
            { label: "b", prompt: "State the direction of the force relative to the field and the current.", marks: 2 },
            { label: "c", prompt: "Calculate the force if the current is increased to $6.0$ A, all else unchanged.", marks: 2 },
            { label: "d", prompt: "Explain how this principle is used in an electric motor.", marks: 2 },
            { label: "e", prompt: "State the force on the wire if it is aligned parallel to the magnetic field.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Force on conductor", statement: "F = BIL\\sin\\theta" },
              { kind: "law", name: "Fleming's left-hand rule", statement: "Force is perpendicular to both B and I." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $F = BIL\\sin\\theta$ with $\\theta = 60^\\circ$.", working: "F = 0.25 \\times 3.0 \\times 0.40 \\times \\sin 60^\\circ = 0.30 \\times 0.866", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "F = 0.26 \\text{ N}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The force is perpendicular to both the magnetic field and the current direction.", working: "F \\perp B \\text{ and } F \\perp I", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Force is proportional to current at fixed $B$, $L$ and $\\theta$.", working: "F = 0.26 \\times \\frac{6.0}{3.0} = 0.52 \\text{ N}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "A current-carrying coil in a magnetic field experiences a force (torque) that rotates it; reversing the current every half-turn keeps the torque in the same direction, producing continuous rotation.", working: "\\text{force on coil} \\Rightarrow \\text{rotation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "This converts electrical energy into mechanical energy.", working: "\\text{electrical} \\rightarrow \\text{mechanical energy}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "When $\\theta = 0$, $\\sin\\theta = 0$ so the force is zero.", working: "F = BIL\\sin 0^\\circ = 0", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $F = 0.26$ N (b) perpendicular to both $B$ and $I$ (c) $F = 0.52$ N (d) the force on a current-carrying coil produces torque and rotation, with a split-ring commutator reversing current each half-turn (e) $F = 0$ because $\\sin 0^\\circ = 0$",
            commonErrors: ["Using $\\cos 60^\\circ$ instead of $\\sin 60^\\circ$.", "Claiming the force is along the wire or along the field."],
          },
        },
      ],
    },
  ],
};
