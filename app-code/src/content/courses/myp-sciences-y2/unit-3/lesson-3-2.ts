import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "myps2-u3-lesson-3-2",
  code: "3-2",
  title: "Electricity",
  goal: "I CAN describe series and parallel circuits using current and potential difference, use V = IR, and calculate the cost of electrical energy in kWh.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Criterion D: Reflecting on the impacts of science",
    "Key concept: Systems",
    "Related concept: Energy",
  ],
  vocabulary: [
    { term: "Current", definition: "The rate of flow of electric charge round a circuit, measured in amperes (amps, $\\text{A}$) with an ammeter connected in series." },
    { term: "Potential difference", definition: "The energy transferred per unit charge between two points in a circuit, measured in volts ($\\text{V}$) with a voltmeter connected in parallel." },
    { term: "Resistance", definition: "A measure of how much a component opposes the flow of current, measured in ohms ($\\Omega$)." },
    { term: "Series circuit", definition: "A circuit with only one path for the current, so components are connected one after another." },
    { term: "Parallel circuit", definition: "A circuit with branches, so the current can follow more than one path." },
    { term: "Insulator", definition: "A material that does not allow electric current to pass through it easily, for example plastic and rubber." },
    { term: "Kilowatt-hour (kWh)", definition: "The energy used by a $1\\ \\text{kW}$ appliance running for 1 hour. It is the unit used on electricity bills." },
  ],
  concepts: [
    {
      id: "myps2-u3-circuits",
      title: "Current and potential difference in circuits",
      skill: "Use ammeters and voltmeters correctly and apply the rules for current and potential difference in series and parallel circuits.",
      lesson: {
        sections: [
          {
            heading: "Measuring current and potential difference",
            body: "**Current** is measured in amps ($\\text{A}$) by an **ammeter**, which is connected **in series**, in the same loop as the component. **Potential difference** (pd) is measured in volts ($\\text{V}$) by a **voltmeter**, which is connected **in parallel**, across the component.\n\nIn a circuit diagram a cell or battery pushes the current round a loop. The pd of the battery is the energy it gives to each unit of charge, and components such as lamps transfer that energy.",
          },
          {
            heading: "Series circuits",
            body: "In a **series circuit** there is only one path.\n\n- The **current is the same** at every point in the loop.\n- The pd of the supply is **shared** between the components: the pds across the components add up to the supply pd.\n- If one component breaks, the circuit is incomplete and everything switches off.\n\nAdding more lamps in series makes each lamp dimmer, because each gets a smaller share of the pd.",
          },
          {
            heading: "Parallel circuits",
            body: "In a **parallel circuit** there are branches.\n\n- The **current splits** at a junction: the currents in the branches add up to the current from the supply.\n- The **pd across each branch is the same** as the supply pd.\n- If one branch breaks, the other branches keep working. This is why houses are wired in parallel.",
          },
        ],
        keyFormulas: [
          { name: "Series", statement: "Current the same everywhere; $V_{\\text{supply}} = V_1 + V_2 + \\dots$" },
          { name: "Parallel", statement: "$I_{\\text{total}} = I_1 + I_2 + \\dots$; pd across each branch $=$ supply pd" },
          { name: "Meters", statement: "Ammeter in series (amps); voltmeter in parallel (volts)" },
        ],
        workedExample: {
          problem: "Two lamps are connected in series to a $9.0\\ \\text{V}$ battery. A voltmeter across lamp 1 reads $3.5\\ \\text{V}$. Find the pd across lamp 2.",
          solution: "In a series circuit the pds add up to the supply pd, so the pd across lamp 2 is $9.0 - 3.5 = 5.5\\ \\text{V}$.",
        },
      },
      questions: [
        {
          id: "myps2-u3-circuits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should an **ammeter** be connected to measure the current through a lamp?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In series with the lamp" },
              { id: "b", text: "In parallel with the lamp" },
              { id: "c", text: "Across the battery only" },
              { id: "d", text: "Either way, it does not matter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ammeter connection", statement: "An ammeter is connected in series so that the whole current passes through it." },
            ],
            steps: [
              { reasoning: "The current to be measured must flow through the ammeter, so it is placed in the same loop as the lamp, in series.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** In series with the lamp",
            commonErrors: ["Confusing the ammeter with a voltmeter, which is connected in parallel."],
            examinerNote: "B1 for in series.",
          },
        },
        {
          id: "myps2-u3-circuits-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two lamps are connected in series to a $12.0\\ \\text{V}$ battery. A voltmeter connected across lamp 1 reads $4.5\\ \\text{V}$.\n\nCalculate the potential difference across lamp 2, in volts.",
          response: { type: "numeric", parts: [{ label: "Potential difference across lamp 2", answer: 7.5, unit: "V" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Potential difference in series", statement: "In a series circuit the potential differences across the components add up to the supply potential difference." },
            ],
            steps: [
              { reasoning: "The pd across lamp 2 is the supply pd minus the pd across lamp 1.", working: "12.0 - 4.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "7.5\\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.5\\ \\text{V}$",
            commonErrors: ["Saying the pd across lamp 2 is also 4.5 V.", "Adding 12.0 and 4.5 to get 16.5 V."],
            examinerNote: "M1 for 12.0 - 4.5 (oe). A1 for 7.5 V.",
          },
        },
        {
          id: "myps2-u3-circuits-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two lamps, X and Y, are connected in parallel to a $6.0\\ \\text{V}$ battery. An ammeter next to the battery reads $0.90\\ \\text{A}$. A second ammeter in the branch containing lamp X reads $0.35\\ \\text{A}$.\n\nCalculate the current through lamp Y and state the potential difference across lamp Y.",
          response: {
            type: "numeric",
            parts: [
              { label: "Current through lamp Y", answer: 0.55, tolerance: 0.001, unit: "A" },
              { label: "Potential difference across lamp Y", answer: 6, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Current in parallel", statement: "The currents in the branches of a parallel circuit add up to the total current from the supply." },
              { kind: "law", name: "Potential difference in parallel", statement: "Each branch of a parallel circuit has the same potential difference as the supply." },
            ],
            steps: [
              { reasoning: "The total current splits between the two branches, so subtract the current in X.", working: "0.90 - 0.35", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "0.55\\text{ A}", marks: 1, markCode: "A" },
              { reasoning: "Lamp Y is in a branch connected directly to the battery, so its pd equals the supply pd.", working: "6.0\\text{ V}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Current $0.55\\ \\text{A}$; potential difference $6.0\\ \\text{V}$",
            commonErrors: ["Adding 0.90 and 0.35 to get 1.25 A.", "Dividing the 6.0 V between the two lamps as if they were in series."],
            examinerNote: "M1 for 0.90 - 0.35 (oe). A1 for 0.55 A. B1 for 6.0 V.",
          },
        },
        {
          id: "myps2-u3-circuits-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student connects two identical lamps in series to a $6.0\\ \\text{V}$ battery. An ammeter in the circuit reads $0.20\\ \\text{A}$. She then rebuilds the circuit with the two lamps in parallel across the same battery.",
          parts: [
            { label: "a", prompt: "State the current through the second lamp in the series circuit.", marks: 1 },
            { label: "b", prompt: "Calculate the potential difference across each lamp in the series circuit. Explain your answer.", marks: 2 },
            { label: "c", prompt: "One lamp in the series circuit breaks. Describe what happens to the other lamp and explain why.", marks: 2 },
            { label: "d", prompt: "Compare the brightness of the lamps in the parallel circuit with the series circuit. Explain your answer in terms of potential difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Series circuit", statement: "The current is the same everywhere and the supply potential difference is shared between the components." },
              { kind: "law", name: "Parallel circuit", statement: "Each branch has the full supply potential difference and branches work independently." },
            ],
            steps: [
              { part: "a", reasoning: "The current is the same at every point in a series circuit.", working: "0.20\\text{ A}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The lamps are identical, so the 6.0 V is shared equally.", working: "\\frac{6.0}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each lamp has a pd of 3.0 V, because the pds add up to the supply pd.", working: "3.0\\text{ V}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The other lamp goes out.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "In a series circuit there is only one path, so a break in one lamp makes the circuit incomplete and no current flows.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The lamps in the parallel circuit are brighter.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In parallel each lamp has the full 6.0 V, compared with 3.0 V in series.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A larger pd across a lamp drives a larger current through it, so more energy is transferred each second and the lamp is brighter.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.20\\ \\text{A}$ (b) $3.0\\ \\text{V}$ each (c) Other lamp goes out: only one path (d) Brighter in parallel: each lamp has $6.0\\ \\text{V}$ instead of $3.0\\ \\text{V}$, so more current.",
            commonErrors: ["Saying the current is shared (0.10 A each) in the series circuit.", "Saying the other lamp gets brighter when one breaks in series.", "Saying a parallel circuit shares the pd between branches."],
            examinerNote: "(b) Allow 3 V without working for both marks. (c) Reject 'the lamp is dimmer'. (d) Allow ecf from (b) for the comparison of pds.",
          },
        },
        {
          id: "myps2-u3-circuits-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should a **voltmeter** be connected to measure the potential difference across a lamp?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In parallel across the lamp" },
              { id: "b", text: "Either way, it does not matter" },
              { id: "c", text: "In series with the lamp" },
              { id: "d", text: "Across the battery only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Voltmeter connection", statement: "A voltmeter is connected in parallel across a component to measure the pd across it." },
            ],
            steps: [
              { reasoning: "The voltmeter measures the potential difference between two points, so it is connected across (in parallel with) the lamp.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** In parallel across the lamp",
            commonErrors: ["Confusing the voltmeter with an ammeter, which goes in series."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-circuits-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a series circuit with a battery and two lamps, what is true about the current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is the same at every point in the circuit" },
              { id: "b", text: "It is shared equally between the lamps" },
              { id: "c", text: "It is larger after the second lamp" },
              { id: "d", text: "It is zero because it is shared" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Series circuit", statement: "In a series circuit there is only one path, so the current is the same at every point." },
            ],
            steps: [
              { reasoning: "With one path, the same current flows through every component; it is not 'used up' or shared.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It is the same at every point in the circuit",
            commonErrors: ["Thinking the current is divided between components like voltage."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-circuits-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a parallel circuit, one branch containing a lamp breaks (the lamp filament snaps). What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The whole circuit overheats" },
              { id: "b", text: "All the lamps go out" },
              { id: "c", text: "The other lamps get brighter" },
              { id: "d", text: "Only the broken lamp goes out; the other branches keep working" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit", statement: "Branches in a parallel circuit work independently; a break in one branch does not affect the others." },
            ],
            steps: [
              { reasoning: "Each branch has its own path, so only the broken branch stops conducting; the others keep the full supply pd.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Only the broken lamp goes out; the other branches keep working",
            commonErrors: ["Applying the series-circuit rule that everything switches off."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-circuits-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two lamps are connected in series to a $9.0\\ \\text{V}$ battery. A voltmeter across lamp 1 reads $4.0\\ \\text{V}$.\n\nCalculate the potential difference across lamp 2.",
          response: {
            type: "numeric",
            parts: [{ label: "Pd across lamp 2", answer: 5, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Series circuit", statement: "In series the pds across the components add up to the supply pd." },
            ],
            steps: [
              { reasoning: "Subtract lamp 1's pd from the supply pd.", working: "9.0 - 4.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 5.0\\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5.0 V",
            commonErrors: ["Adding 9.0 and 4.0 to give 13 V.", "Giving 4 V (same as lamp 1)."],
            examinerNote: "M1 for 9.0-4.0 oe. A1 for 5.0 V.",
          },
        },
        {
          id: "myps2-u3-circuits-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two lamps in series are connected to a $12.0\\ \\text{V}$ battery. The voltmeter across lamp 1 reads $7.5\\ \\text{V}$.\n\nCalculate the potential difference across lamp 2.",
          response: {
            type: "numeric",
            parts: [{ label: "Pd across lamp 2", answer: 4.5, tolerance: 0.01, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Series circuit", statement: "In series the pds across components add up to the supply pd." },
            ],
            steps: [
              { reasoning: "Subtract lamp 1's pd from the supply pd.", working: "12.0 - 7.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 4.5\\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.5 V",
            commonErrors: ["Subtracting the wrong way round."],
            examinerNote: "M1 for 12.0-7.5 oe. A1 for 4.5 V.",
          },
        },
        {
          id: "myps2-u3-circuits-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a parallel circuit, two branches carry currents of $0.4\\ \\text{A}$ and $0.6\\ \\text{A}$.\n\nCalculate the total current from the supply.",
          response: {
            type: "numeric",
            parts: [{ label: "Total current", answer: 1.0, tolerance: 0.01, unit: "A" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit", statement: "In parallel the currents in the branches add up to the supply current." },
            ],
            steps: [
              { reasoning: "Add the branch currents.", working: "0.4 + 0.6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 1.0\\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.0 A",
            commonErrors: ["Subtracting the currents.", "Averaging them."],
            examinerNote: "M1 for 0.4+0.6 oe. A1 for 1.0 A.",
          },
        },
        {
          id: "myps2-u3-circuits-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two identical lamps are connected in parallel to a $6.0\\ \\text{V}$ battery.\n\nCalculate the potential difference across each lamp, and explain why they are the same.",
          response: {
            type: "numeric",
            parts: [
              { label: "Pd across lamp 1", answer: 6, tolerance: 0.01, unit: "V" },
              { label: "Pd across lamp 2", answer: 6, tolerance: 0.01, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit", statement: "In parallel the pd across each branch equals the supply pd." },
            ],
            steps: [
              { reasoning: "Each branch is connected directly across the supply, so lamp 1 has the full supply pd.", working: "6.0\\text{ V}", marks: 1, markCode: "B" },
              { reasoning: "The same applies to lamp 2; the pd is not shared in parallel.", working: "6.0\\text{ V}", marks: 1, markCode: "B" },
              { reasoning: "Explanation: in parallel each branch has its own path to both terminals, so each gets the full supply pd.", marks: 1, markCode: "R" },
              { reasoning: "Contrast with series, where the pd is shared.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "6.0 V across each lamp; in parallel each branch gets the full supply pd.",
            commonErrors: ["Sharing the pd to give 3 V each (series rule)."],
            examinerNote: "B1 for each 6 V. R1/R1 for explanation. Allow oe.",
          },
        },
        {
          id: "myps2-u3-circuits-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A house has many appliances (lights, fridge, TV) connected to the mains. Explain why the appliances are wired in parallel rather than in series.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit", statement: "Parallel branches each get the full supply pd and work independently." },
            ],
            steps: [
              { reasoning: "Each appliance needs the full mains voltage to work properly.", marks: 1, markCode: "B" },
              { reasoning: "In parallel every appliance gets the full supply pd.", marks: 1, markCode: "B" },
              { reasoning: "If one appliance is switched off or breaks, the others keep working because each branch is independent.", marks: 1, markCode: "B" },
              { reasoning: "In series the pd would be shared so appliances would not get enough voltage, and one break would switch everything off.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Parallel wiring gives every appliance the full mains pd and lets each work independently; in series the pd would be shared and one fault would cut everything off.",
            commonErrors: ["Saying parallel uses less wire."],
            examinerNote: "B1 full pd. B1 independent operation. R1 series comparison. Allow oe.",
          },
        },
        {
          id: "myps2-u3-circuits-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two identical lamps are connected in series to a battery. A third identical lamp is then added in series with them.\n\nExplain what happens to the brightness of the lamps and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Series circuit", statement: "In series the supply pd is shared between components; more components means each gets a smaller share." },
            ],
            steps: [
              { reasoning: "Adding a lamp in series increases the number of components sharing the supply pd.", marks: 1, markCode: "B" },
              { reasoning: "The supply pd is fixed, so each lamp now gets a smaller share of it.", marks: 1, markCode: "B" },
              { reasoning: "A smaller pd across a lamp means a smaller current flows through it.", marks: 1, markCode: "R" },
              { reasoning: "Less current means less energy transferred per second, so each lamp is dimmer.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The lamps get dimmer: the fixed supply pd is shared between more lamps, so each lamp has a smaller pd and current.",
            commonErrors: ["Saying the lamps get brighter."],
            examinerNote: "B1 more components share pd. B1 smaller pd each. R1 smaller current. R1 dimmer / less energy. Allow oe.",
          },
        },
        {
          id: "myps2-u3-circuits-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the potential difference (pd) of a battery represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The energy the battery gives to each unit of charge" },
              { id: "b", text: "The resistance of the wires" },
              { id: "c", text: "The number of electrons in the circuit" },
              { id: "d", text: "The speed of the current" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Potential difference", statement: "Pd is measured in volts and is the energy transferred per unit of charge." },
            ],
            steps: [
              { reasoning: "The battery's pd is the energy it supplies to each unit of charge flowing round the circuit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The energy the battery gives to each unit of charge",
            commonErrors: ["Confusing pd with current."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-circuits-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student wants two lamps that will each stay lit even if the other one breaks. Which circuit should she build?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Series" },
              { id: "b", text: "Either; they behave the same" },
              { id: "c", text: "A single loop with no branches" },
              { id: "d", text: "Parallel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel circuit", statement: "Parallel branches are independent, so a break in one does not affect the others." },
            ],
            steps: [
              { reasoning: "Only in parallel does each lamp have its own path, so one can break without affecting the other.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Parallel",
            commonErrors: ["Choosing series because it is simpler."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-circuits-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student builds a circuit with a $12.0\\ \\text{V}$ battery and three identical lamps. In the SERIES circuit she measures the pd across lamp 1 as $4.0\\ \\text{V}$. She then reconnects the lamps in PARALLEL.\n\nLamp currents in parallel: lamp 1 draws $0.30\\ \\text{A}$, lamp 2 draws $0.30\\ \\text{A}$ and lamp 3 draws $0.30\\ \\text{A}$.",
          parts: [
            { label: "a", prompt: "Calculate the pd across lamps 2 and 3 in the series circuit.", marks: 2 },
            { label: "b", prompt: "State the current through lamp 2 in the series circuit if the current through lamp 1 is $0.20\\ \\text{A}$. Explain.", marks: 2 },
            { label: "c", prompt: "Calculate the total current from the supply in the parallel circuit.", marks: 2 },
            { label: "d", prompt: "Explain why a student wiring a classroom should use a parallel circuit.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Series circuit", statement: "In series, current is the same everywhere and pds add to the supply pd." },
              { kind: "law", name: "Parallel circuit", statement: "In parallel, branch currents add to the supply current and each branch has the full supply pd." },
            ],
            steps: [
              { part: "a", reasoning: "Each identical lamp shares the $12.0\\ \\text{V}$ equally: $12.0 \\div 3 = 4.0\\text{ V}$.", working: "\\frac{12.0}{3} = 4.0\\text{ V}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lamps 2 and 3 each have $4.0\\text{ V}$.", working: "4.0\\text{ V each}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The current is the same at every point in a series circuit.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "So lamp 2 also carries $0.20\\text{ A}$ (there is only one path).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Add the three branch currents.", working: "0.30 + 0.30 + 0.30", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= 0.90\\text{ A}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Parallel gives each lamp/appliance the full mains pd so they all work properly.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Each device works independently: switching one off or a fault in one does not affect the others.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 4.0 V each (b) 0.20 A, same current everywhere in series (c) 0.90 A (d) Parallel gives full pd and independent operation.",
            commonErrors: ["In (b) sharing the current (0.067 A).", "In (c) giving 0.30 A (one branch only)."],
            examinerNote: "(a) M1 for /3. A1 for 4.0 V. (b) B1 for same current; R1 for one-path reason. (d) Any two valid points.",
          },
        },
      ],
    },
    {
      id: "myps2-u3-resistance-and-energy-cost",
      title: "Resistance, safety and the cost of electricity",
      skill: "Use V = IR, classify conductors and insulators, explain electrical safety, and calculate energy in kWh and its cost.",
      lesson: {
        sections: [
          {
            heading: "Resistance and V = IR",
            body: "**Resistance** measures how much a component opposes current. It is measured in ohms ($\\Omega$). For a fixed resistor, the potential difference, current and resistance are related by\n\n$$V = IR \\qquad I = \\frac{V}{R} \\qquad R = \\frac{V}{I}$$\n\nwith $V$ in volts, $I$ in amps and $R$ in ohms. For the same pd, a larger resistance gives a smaller current. A longer or thinner wire has more resistance.",
          },
          {
            heading: "Conductors, insulators and safety",
            body: "**Conductors** such as copper and other metals let current flow easily because they contain free-moving charged particles. **Insulators** such as plastic, rubber and glass do not.\n\nMains electricity can be dangerous. Safe practice includes:\n\n- plastic casings and insulated cables around the wires\n- **fuses** and circuit breakers, which switch off the circuit if the current is too high\n- never touching sockets with wet hands, because water conducts and lowers the body's resistance\n- not overloading sockets with many appliances\n\nAn earth wire provides a safe path for current if a fault makes a metal case live.",
          },
          {
            heading: "Energy and cost in kWh",
            body: "Electricity companies charge for energy in **kilowatt-hours** ($\\text{kWh}$).\n\n$$\\text{energy (kWh)} = \\text{power (kW)} \\times \\text{time (h)}$$\n\n$$\\text{cost} = \\text{energy (kWh)} \\times \\text{price per kWh}$$\n\nConvert watts to kilowatts by dividing by 1000, and minutes to hours by dividing by 60. Reducing the energy used (for example by using efficient appliances or switching off) saves money and lowers the demand on power stations, which can reduce environmental impact.",
          },
        ],
        keyFormulas: [
          { name: "Resistance", statement: "$V = IR$, $I = \\dfrac{V}{R}$, $R = \\dfrac{V}{I}$" },
          { name: "Energy in kWh", statement: "$\\text{energy} = \\text{power (kW)} \\times \\text{time (h)}$" },
          { name: "Cost", statement: "$\\text{cost} = \\text{kWh} \\times \\text{price per kWh}$" },
        ],
        workedExample: {
          problem: "A 1500 W electric heater runs for 4 hours. Electricity costs 20 cents per kWh. Calculate the cost.",
          solution: "Power $= 1500\\ \\text{W} = 1.5\\ \\text{kW}$. Energy $= 1.5 \\times 4 = 6\\ \\text{kWh}$. Cost $= 6 \\times 20 = 120$ cents, which is EUR 1.20.",
        },
      },
      questions: [
        {
          id: "myps2-u3-resistance-and-energy-cost-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these materials is a good **electrical insulator**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Copper" },
              { id: "c", text: "Rubber" },
              { id: "d", text: "Aluminium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insulator", statement: "An insulator is a material that does not let electric current pass through it easily." },
            ],
            steps: [
              { reasoning: "Rubber has no free-moving charged particles, so it does not conduct. The other three are metals, which are conductors.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Rubber",
            commonErrors: ["Thinking that all solids conduct electricity."],
            examinerNote: "B1 for rubber.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A current of $0.50\\ \\text{A}$ flows through a resistor of resistance $12\\ \\Omega$.\n\nCalculate the potential difference across the resistor, in volts.",
          response: { type: "numeric", parts: [{ label: "Potential difference", answer: 6, unit: "V" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$V = IR$" },
            ],
            steps: [
              { reasoning: "Substitute the current and resistance into $V = IR$.", working: "V = 0.50 \\times 12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "V = 6.0\\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.0\\ \\text{V}$",
            commonErrors: ["Dividing 12 by 0.50 to get 24 V.", "Adding the current and resistance."],
            examinerNote: "M1 for 0.50 x 12 (oe). A1 for 6 V.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An electric heater has a power of $2\\ \\text{kW}$ and is switched on for $3$ hours. Electricity costs $15$ cents per kWh.\n\nCalculate the cost of running the heater, in cents.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 90, unit: "cents" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in kWh", statement: "$\\text{energy (kWh)} = \\text{power (kW)} \\times \\text{time (h)}$" },
              { kind: "formula", name: "Cost", statement: "$\\text{cost} = \\text{energy (kWh)} \\times \\text{price per kWh}$" },
            ],
            steps: [
              { reasoning: "Calculate the energy used in kilowatt-hours.", working: "2 \\times 3 = 6\\text{ kWh}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the price per kWh.", working: "6 \\times 15", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "90\\text{ cents}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 cents (EUR 0.90)",
            commonErrors: ["Using 2 x 15 and forgetting the time.", "Converting 2 kW into 2000 W and not converting back."],
            examinerNote: "M1 for 2 x 3 (oe). M1 for 6 x 15 (oe). A1 for 90 cents. Allow EUR 0.90.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates a resistor. When the potential difference across it is $9.0\\ \\text{V}$, the current is $0.30\\ \\text{A}$. The student's family also wants to reduce their electricity bill. Their 800 W hair dryer is used for 15 minutes every day. Electricity costs 20 cents per kWh.",
          parts: [
            { label: "a", prompt: "Calculate the resistance of the resistor.", marks: 2 },
            { label: "b", prompt: "Calculate the current when the same resistor is connected to a $6.0\\ \\text{V}$ supply.", marks: 2 },
            { label: "c", prompt: "Explain why it is dangerous to use a mains appliance with wet hands, and state **one** safety feature in a plug or circuit that reduces the risk of fire.", marks: 2 },
            { label: "d", prompt: "Calculate the cost, in cents, of using the hair dryer for 30 days.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$V = IR$, so $R = \\dfrac{V}{I}$" },
              { kind: "formula", name: "Energy and cost", statement: "$\\text{energy (kWh)} = \\text{power (kW)} \\times \\text{time (h)}$ and $\\text{cost} = \\text{kWh} \\times \\text{price}$" },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange $V = IR$ and substitute.", working: "R = \\frac{V}{I} = \\frac{9.0}{0.30}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the unit.", working: "R = 30\\ \\Omega", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The resistance is unchanged, so use $I = V/R$.", working: "I = \\frac{6.0}{30}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "I = 0.20\\text{ A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Water conducts electricity and lowers the resistance of the skin, so a larger current could pass through the body and cause an electric shock.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "A fuse (or circuit breaker) melts or switches off when the current is too high, preventing overheating and fire.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Convert to kW and hours, then find the energy used each day: 800 W $=$ 0.8 kW and 15 min $=$ 0.25 h.", working: "0.8 \\times 0.25 = 0.2\\text{ kWh per day}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Energy for 30 days, then multiply by the price.", working: "0.2 \\times 30 = 6\\text{ kWh}, \\quad 6 \\times 20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate with the unit.", working: "120\\text{ cents}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $30\\ \\Omega$ (b) $0.20\\ \\text{A}$ (c) Water conducts and lowers body resistance, so a dangerous current can flow; a fuse cuts off high current (d) 120 cents (EUR 1.20)",
            commonErrors: ["Using R = I / V.", "Using 15 for the time in hours.", "Forgetting to convert watts to kilowatts."],
            examinerNote: "(a) Allow 30 without the unit for A1 only if the unit is given elsewhere. (c) Allow earth wire, insulation or circuit breaker for the safety feature. (d) Allow ecf for units; allow EUR 1.20.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of resistance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Watts (W)" },
              { id: "b", text: "Ohms ($\\Omega$)" },
              { id: "c", text: "Amps (A)" },
              { id: "d", text: "Volts (V)" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Resistance", statement: "Resistance is measured in ohms ($\\Omega$) and describes how much a component opposes current." },
            ],
            steps: [
              { reasoning: "Resistance is measured in ohms; volts measure pd and amps measure current.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Ohms ($\\Omega$)",
            commonErrors: ["Confusing ohms with volts."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is a good electrical CONDUCTOR?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic" },
              { id: "b", text: "Copper" },
              { id: "c", text: "Rubber" },
              { id: "d", text: "Glass" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conductors", statement: "Conductors such as metals contain free-moving charged particles and let current flow easily." },
            ],
            steps: [
              { reasoning: "Copper is a metal and a good conductor; plastic, rubber and glass are insulators.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Copper",
            commonErrors: ["Choosing plastic because it is flexible."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A $12\\ \\text{V}$ supply is connected across a resistor of resistance $4\\ \\Omega$. Using $V = IR$, what is the current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.33 A" },
              { id: "b", text: "16 A" },
              { id: "c", text: "48 A" },
              { id: "d", text: "3 A" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$V = IR$, so $I = \\frac{V}{R}$" },
            ],
            steps: [
              { reasoning: "$I = \\frac{12}{4} = 3$ A.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 3 A",
            commonErrors: ["Multiplying V and R to get 48."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A resistor has a resistance of $3\\ \\Omega$ and a potential difference of $6.0\\ \\text{V}$ across it.\n\nCalculate the current through the resistor.",
          response: {
            type: "numeric",
            parts: [{ label: "Current", answer: 2, tolerance: 0.01, unit: "A" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$I = \\frac{V}{R}$" },
            ],
            steps: [
              { reasoning: "Divide pd by resistance.", working: "\\frac{6.0}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 2.0\\text{ A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.0 A",
            commonErrors: ["Multiplying 6.0 by 3."],
            examinerNote: "M1 for 6/3 oe. A1 for 2.0 A.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A current of $2.0\\ \\text{A}$ flows through a component with a potential difference of $24\\ \\text{V}$ across it.\n\nCalculate the resistance of the component.",
          response: {
            type: "numeric",
            parts: [{ label: "Resistance", answer: 12, tolerance: 0.01, unit: "Ω" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Resistance", statement: "$R = \\frac{V}{I}$" },
            ],
            steps: [
              { reasoning: "Divide pd by current.", working: "\\frac{24}{2.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 12\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 Ω",
            commonErrors: ["Using R = I/V to get 0.083 Ω."],
            examinerNote: "M1 for 24/2 oe. A1 for 12 Ω.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "An electric heater rated at $2.0\\ \\text{kW}$ runs for 3 hours. Electricity costs 20 cents per kWh.\n\nCalculate the energy used in kWh and the cost in cents.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy used", answer: 6, tolerance: 0.01, unit: "kWh" },
              { label: "Cost", answer: 120, tolerance: 0.01, unit: "cents" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in kWh", statement: "$\\text{energy (kWh)} = \\text{power (kW)} \\times \\text{time (h)}$" },
              { kind: "formula", name: "Cost", statement: "$\\text{cost} = \\text{energy (kWh)} \\times \\text{price per kWh}$" },
            ],
            steps: [
              { reasoning: "Energy = power x time.", working: "2.0 \\times 3 = 6\\text{ kWh}", marks: 1, markCode: "M" },
              { reasoning: "Cost = energy x price.", working: "6 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate energy.", working: "6\\text{ kWh}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate cost.", working: "120\\text{ cents}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 kWh; 120 cents",
            commonErrors: ["Using watts instead of kilowatts.", "Multiplying by 1000 the wrong way."],
            examinerNote: "M1 for 6 kWh. M1 for x20. A1 for 6 and 120.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An 800 W hair dryer is used for 90 minutes each day. Electricity costs 30 cents per kWh.\n\nCalculate the energy used per day in kWh and the cost per day in cents.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy per day", answer: 1.2, tolerance: 0.01, unit: "kWh" },
              { label: "Cost per day", answer: 36, tolerance: 0.01, unit: "cents" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in kWh", statement: "$\\text{energy (kWh)} = \\text{power (kW)} \\times \\text{time (h)}$; convert W to kW and minutes to hours." },
            ],
            steps: [
              { reasoning: "Convert: 800 W = 0.8 kW and 90 min = 1.5 h.", working: "0.8\\text{ kW},\\ 1.5\\text{ h}", marks: 1, markCode: "M" },
              { reasoning: "Energy = power x time.", working: "0.8 \\times 1.5 = 1.2\\text{ kWh}", marks: 1, markCode: "M" },
              { reasoning: "Cost = energy x price.", working: "1.2 \\times 30", marks: 1, markCode: "M" },
              { reasoning: "Evaluate cost.", working: "= 36\\text{ cents}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.2 kWh per day; 36 cents per day",
            commonErrors: ["Using 90 as hours instead of 1.5.", "Using 800 kW instead of 0.8 kW."],
            examinerNote: "M1 for conversions. M1 for energy. M1 for cost. A1 for 36 cents.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why touching a mains socket with wet hands is dangerous, and describe **one** safety feature that protects people from electric shocks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Electrical safety", statement: "Water conducts electricity and lowers the body's resistance; fuses, circuit breakers, insulation and earth wires improve safety." },
            ],
            steps: [
              { reasoning: "Water (and sweat) conducts electricity.", marks: 1, markCode: "B" },
              { reasoning: "Wet skin has a lower resistance, so a larger current can pass through the body if a fault occurs, causing a severe electric shock.", marks: 1, markCode: "R" },
              { reasoning: "One safety feature: a fuse melts (or a circuit breaker switches off) when the current is too high, cutting the supply before overheating/fire.", marks: 1, markCode: "B" },
              { reasoning: "Alternatively: plastic insulation prevents contact with live wires, or an earth wire provides a safe path for fault current.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Water conducts and lowers body resistance, allowing a dangerous current. Safety features: fuses/circuit breakers cut off excess current; insulation and earth wires protect users.",
            commonErrors: ["Saying water 'creates' electricity."],
            examinerNote: "B1 water conducts. R1 lower resistance / larger current. B1 safety feature. B1 second feature or detail. Allow any one valid feature for the last two marks.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of a fuse in a plug as a safety measure. Include what a fuse does, when it works, and one limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fuses", statement: "A fuse melts and breaks the circuit when the current exceeds its rating, preventing overheating and fire." },
            ],
            steps: [
              { reasoning: "A fuse contains a thin wire that melts when the current is too high.", marks: 1, markCode: "B" },
              { reasoning: "This breaks the circuit and cuts off the supply before wires overheat and cause a fire.", marks: 1, markCode: "B" },
              { reasoning: "It only works if the fuse rating matches the appliance and it has not already blown unnoticed.", marks: 1, markCode: "R" },
              { reasoning: "A limitation: a blown fuse must be replaced (cost/effort), or it may not protect against all faults such as shocks to a person if the current stays below the rating.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A fuse melts on excess current, breaking the circuit to prevent fire; it is cheap and automatic but must match the appliance rating and be replaced when blown.",
            commonErrors: ["Saying a fuse increases the current."],
            examinerNote: "B1 melts/breaks circuit. B1 prevents overheating/fire. R1 works only above rating / matches appliance. R1 limitation (replace, or limited protection). Allow oe.",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does the resistance of a wire change if it is made LONGER (same thickness and material)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decreases" },
              { id: "b", text: "It becomes zero" },
              { id: "c", text: "It increases" },
              { id: "d", text: "It stays the same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Resistance factors", statement: "A longer wire has more resistance; a thinner wire also has more resistance." },
            ],
            steps: [
              { reasoning: "A longer path gives more opposition to the current, so resistance increases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It increases",
            commonErrors: ["Thinking longer wires are 'easier' for current."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are electrical cables coated in plastic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plastic makes the cable heavier so it does not blow away" },
              { id: "b", text: "Plastic increases the current" },
              { id: "c", text: "Plastic is an insulator that prevents contact with live wires" },
              { id: "d", text: "Plastic is a good conductor" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulators", statement: "Insulators such as plastic do not conduct, so they safely cover live wires." },
            ],
            steps: [
              { reasoning: "The plastic coating is an insulator that stops people touching the live conductor and prevents short circuits.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Plastic is an insulator that prevents contact with live wires",
            commonErrors: ["Thinking the coating carries the current."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u3-resistance-and-energy-cost-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A family records their electricity use for one evening.\n\n| Appliance | Power (W) | Time used (h) |\n| --- | --- | --- |\n| LED bulb | 10 | 4 |\n| Fridge | 150 | 4 |\n| TV | 120 | 3 |\n| Kettle | 2000 | 0.25 |\n\nElectricity costs 25 cents per kWh.",
          parts: [
            { label: "a", prompt: "Calculate the energy used by the kettle in kWh.", marks: 2 },
            { label: "b", prompt: "Calculate the total energy used by all four appliances in kWh.", marks: 3 },
            { label: "c", prompt: "Calculate the total cost for the evening in cents.", marks: 2 },
            { label: "d", prompt: "Suggest one change that would reduce the bill and explain its effect on energy use.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in kWh", statement: "$\\text{energy (kWh)} = \\text{power (kW)} \\times \\text{time (h)}$" },
              { kind: "formula", name: "Cost", statement: "$\\text{cost} = \\text{kWh} \\times \\text{price}$" },
            ],
            steps: [
              { part: "a", reasoning: "Convert: 2000 W = 2.0 kW; energy = $2.0 \\times 0.25$.", working: "2.0 \\times 0.25 = 0.5\\text{ kWh}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "0.5\\text{ kWh}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "LED: $0.01 \\times 4 = 0.04$ kWh; fridge: $0.15 \\times 4 = 0.6$ kWh; TV: $0.12 \\times 3 = 0.36$ kWh; kettle 0.5 kWh.", working: "0.04 + 0.6 + 0.36 + 0.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add all energies.", working: "= 1.5\\text{ kWh}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate total.", working: "1.5\\text{ kWh}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cost = energy x price.", working: "1.5 \\times 25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= 37.5\\text{ cents}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any valid change, e.g. boil less water / use a lower-power appliance / switch off the TV when not watching; it reduces kWh used and so the cost.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 0.5 kWh (b) 1.5 kWh (c) 37.5 cents (d) e.g. use the kettle less / switch off appliances; less kWh = lower cost.",
            commonErrors: ["In (a) forgetting to convert W to kW.", "In (b) omitting an appliance.", "In (d) suggesting a change unrelated to energy."],
            examinerNote: "(b) ecf from (a). (d) Any valid energy-saving suggestion.",
          },
        },
      ],
    },
  ],
};
