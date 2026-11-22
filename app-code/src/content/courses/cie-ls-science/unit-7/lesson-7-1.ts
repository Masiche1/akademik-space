import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cils-u7-lesson-7-1",
  code: "7-1",
  title: "Electric circuits and current",
  goal: "I CAN describe electric circuits, current, voltage and resistance.",
  standards: ["0893 Physics: electricity"],
  vocabulary: [
    { term: "Circuit", definition: "Complete path for electric current to flow." },
    { term: "Current", definition: "Flow of electric charge — measured in amps (A)." },
    { term: "Voltage", definition: "Electrical potential difference — measured in volts (V)." },
    { term: "Resistance", definition: "Opposition to current flow — measured in ohms (Ω)." },
    { term: "Series circuit", definition: "Components in single path — same current everywhere." },
    { term: "Parallel circuit", definition: "Components on separate branches — same voltage." },
  ],
  concepts: [
    {
      id: "cils-u7-circuits",
      title: "Circuits and current",
      skill: "Describe circuit components, current flow and series vs parallel.",
      lesson: {
        sections: [
          {
            heading: "Circuit components",
            body: "- **Cell/battery**: provides voltage\n- **Wire**: conducts current\n- **Bulb/resistor**: uses energy, produces heat/light\n- **Switch**: opens/closes circuit\n- **Ammeter**: measures current (in series)\n- **Voltmeter**: measures voltage (in parallel)",
          },
          {
            heading: "Current flow",
            body: "Conventional current flows positive→negative (opposite to electron flow). Needs complete circuit — break anywhere and current stops.",
          },
          {
            heading: "Series vs parallel",
            body: "Series: one path, same current, voltage shared. Parallel: multiple paths, same voltage, current shared.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "V = I × R (voltage = current × resistance)" },
        ],
        workedExample: {
          problem: "A bulb has resistance 6 Ω and current 2 A. What's the voltage?",
          solution: "V = I × R = 2 × 6 = 12 V.",
        },
      },
      questions: [
        {
          id: "cils-u7-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is needed for current to flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High resistance" },
              { id: "b", text: "Insulator" },
              { id: "c", text: "Open switch" },
              { id: "d", text: "Complete circuit" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circuit", statement: "Complete path needed for current flow." },
            ],
            steps: [
              { reasoning: "Current needs unbroken path.", working: "complete", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Complete circuit",
            commonErrors: ["Choosing (b) — open switch breaks circuit."],
          },
        },
        {
          id: "cils-u7-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the unit of current?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Current unit", statement: "Amps (A)." },
            ],
            steps: [
              { reasoning: "Current = amps.", working: "A", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amps (A)",
            commonErrors: ["Saying volts — that's voltage."],
          },
        },
        {
          id: "cils-u7-circ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare series and parallel circuits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Series vs parallel", statement: "Series: one path, same current, voltage shared. Parallel: branches, same voltage, current shared." },
            ],
            steps: [
              { reasoning: "Series: single path — same current through all.", working: "series", marks: 1, markCode: "M" },
              { reasoning: "Parallel: multiple paths — same voltage across all.", working: "parallel", marks: 1, markCode: "M" },
              { reasoning: "If one fails in series, all stop; parallel keeps others working.", working: "reliability", marks: 1, markCode: "M" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Series: same current, voltage shared; parallel: same voltage, current shared.",
            commonErrors: ["Confusing which quantity is shared — series=current, parallel=voltage."],
          },
        },
        {
          id: "cils-u7-circ-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse an electric circuit.",
          parts: [
            { label: "a", prompt: "Name three circuit components and their roles.", marks: 2 },
            { label: "b", prompt: "Where is ammeter placed and why?", marks: 2 },
            { label: "c", prompt: "Where is voltmeter placed and why?", marks: 2 },
            { label: "d", prompt: "What happens if switch opens?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circuits", statement: "Components provide voltage/resistance; meters measure; open circuit stops current." },
            ],
            steps: [
              { part: "a", reasoning: "Battery (voltage), bulb (resistance), wire (conducts), switch (control).", working: "components", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three+ correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In series — measures current through component.", working: "series", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In parallel across component — measures voltage difference.", working: "parallel", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Circuit broken → current stops → bulb goes out.", working: "break", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) battery/bulb/wire/switch (b) ammeter in series (c) voltmeter in parallel (d) current stops, bulb off",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Components correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Incomplete.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Voltmeter in series — must be parallel."],
          },
        },
        {
          id: "cils-u7-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a series circuit, the current is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero everywhere" },
              { id: "b", text: "The same at every point" },
              { id: "c", text: "Different in each component" },
              { id: "d", text: "Shared between components" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Series circuit", statement: "Single path — same current everywhere." },
            ],
            steps: [
              { reasoning: "Series = one path, same current.", working: "same", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The same at every point",
            commonErrors: ["Choosing (b) — current is shared in parallel, not series."],
          },
        },
        {
          id: "cils-u7-circ-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which meter measures the voltage across a component?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ammeter" },
              { id: "b", text: "Thermometer" },
              { id: "c", text: "Barometer" },
              { id: "d", text: "Voltmeter" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Meters", statement: "Voltmeter measures voltage; ammeter measures current." },
            ],
            steps: [
              { reasoning: "Voltage measured by voltmeter.", working: "V", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Voltmeter",
            commonErrors: ["Choosing (b) — ammeter measures current."],
          },
        },
        {
          id: "cils-u7-circ-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does an open switch do to a circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Doubles the current" },
              { id: "b", text: "Increases the voltage" },
              { id: "c", text: "Breaks the circuit so current stops" },
              { id: "d", text: "Nothing — switch is decorative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Switch", statement: "Opens or closes the circuit path." },
            ],
            steps: [
              { reasoning: "Open switch = incomplete path = no current.", working: "open", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Breaks the circuit so current stops",
            commonErrors: ["Choosing (d) — switches control current flow."],
          },
        },
        {
          id: "cils-u7-circ-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways in which series and parallel circuits differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Series vs parallel", statement: "Series: one path, same current, voltage shared. Parallel: branches, same voltage, current shared." },
            ],
            steps: [
              { reasoning: "Current: same in series, shared in parallel.", working: "current", marks: 1, markCode: "M" },
              { reasoning: "Voltage: shared in series, same in parallel.", working: "voltage", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Series has same current/shared voltage; parallel has same voltage/shared current.",
            commonErrors: ["Swapping the shared quantities."],
          },
        },
        {
          id: "cils-u7-circ-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two bulbs are connected in parallel across a battery. One bulb blows (its filament breaks). Explain what happens to the other bulb and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel reliability", statement: "Parallel branches are independent — one failure does not stop others." },
            ],
            steps: [
              { reasoning: "Other bulb stays lit.", working: "lit", marks: 1, markCode: "M" },
              { reasoning: "Each branch has its own complete path to the battery.", working: "path", marks: 1, markCode: "M" },
              { reasoning: "Broken branch only stops its own current.", working: "branch", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The other bulb stays lit because each parallel branch has its own complete path.",
            commonErrors: ["Saying both bulbs go out — that is series behaviour."],
          },
        },
        {
          id: "cils-u7-circ-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ammeter must be connected...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In series with the component" },
              { id: "b", text: "In parallel with the component" },
              { id: "c", text: "Across the battery only" },
              { id: "d", text: "Anywhere in the circuit" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ammeter", statement: "Measures current — connected in series." },
            ],
            steps: [
              { reasoning: "Ammeter in series measures current through component.", working: "series", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** In series with the component",
            commonErrors: ["Choosing (b) — that is how a voltmeter connects."],
          },
        },
        {
          id: "cils-u7-circ-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two identical bulbs are connected across the same battery, first in series and then in parallel. Explain which arrangement makes the bulbs brighter and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Brightness", statement: "Brightness depends on power = V × I; parallel gives each bulb full voltage." },
            ],
            steps: [
              { reasoning: "In parallel each bulb gets full battery voltage.", working: "voltage", marks: 1, markCode: "M" },
              { reasoning: "In series voltage is shared, so each bulb gets less.", working: "shared", marks: 1, markCode: "M" },
              { reasoning: "Lower voltage → lower current → lower power → dimmer.", working: "power", marks: 1, markCode: "M" },
              { reasoning: "Parallel brighter.", working: "brighter", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parallel — each bulb receives the full battery voltage so more power is dissipated.",
            commonErrors: ["Thinking series gives more current — it gives less voltage per bulb."],
          },
        },
        {
          id: "cils-u7-circ-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Conventional current is defined as flowing from...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative terminal to positive terminal" },
              { id: "b", text: "Ground to sky" },
              { id: "c", text: "Positive terminal to negative terminal" },
              { id: "d", text: "High resistance to low resistance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conventional current", statement: "Flows positive to negative — opposite to electron flow." },
            ],
            steps: [
              { reasoning: "Conventional current: + to −.", working: "+to-", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Positive terminal to negative terminal",
            commonErrors: ["Choosing (b) — that is electron flow direction."],
          },
        },
        {
          id: "cils-u7-circ-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student connects a voltmeter in series in a circuit to measure the voltage across a bulb. Explain why this is incorrect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Voltmeter", statement: "Measures voltage — must be connected in parallel across the component." },
            ],
            steps: [
              { reasoning: "Voltmeter has very high resistance — in series it stops the current.", working: "high R", marks: 1, markCode: "M" },
              { reasoning: "Must be parallel to measure potential difference without disrupting current.", working: "parallel", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A voltmeter in series has huge resistance and would stop the current; it must be in parallel.",
            commonErrors: ["Thinking voltmeter reads current — it does not."],
          },
        },
        {
          id: "cils-u7-circ-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the path of conventional current in a simple circuit containing a cell, a switch and a bulb, and explain what happens when the switch is closed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Current path", statement: "Current flows in a loop from + terminal through components back to − terminal." },
            ],
            steps: [
              { reasoning: "Current leaves positive terminal of cell.", working: "out", marks: 1, markCode: "M" },
              { reasoning: "Passes through bulb (emits light), through closed switch, back to negative terminal.", working: "loop", marks: 1, markCode: "M" },
              { reasoning: "Closing switch completes the loop so current can flow.", working: "closed", marks: 1, markCode: "M" },
              { reasoning: "Bulb lights.", working: "lights", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Current flows from + terminal through bulb and switch back to − terminal; closing the switch completes the circuit and lights the bulb.",
            commonErrors: ["Describing current starting at the negative terminal."],
          },
        },
        {
          id: "cils-u7-circ-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a parallel circuit with two branches, the current in the main wire before the branches...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is zero" },
              { id: "b", text: "Equals the sum of the branch currents" },
              { id: "c", text: "Is the same as each branch current" },
              { id: "d", text: "Is shared equally regardless of branches" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel current", statement: "Total current = sum of branch currents (charge conservation)." },
            ],
            steps: [
              { reasoning: "Main current splits into branches and re-combines — sum of parts.", working: "sum", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Equals the sum of the branch currents",
            commonErrors: ["Choosing (b) — that would ignore charge conservation."],
          },
        },
        {
          id: "cils-u7-circ-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate a household-style parallel circuit.",
          parts: [
            { label: "a", prompt: "Describe a circuit with a battery, switch and two bulbs in parallel, each with its own switch.", marks: 2 },
            { label: "b", prompt: "Explain why parallel wiring is used in homes.", marks: 3 },
            { label: "c", prompt: "What happens to the brightness of bulb 2 when the switch for bulb 1 is opened? Explain.", marks: 2 },
            { label: "d", prompt: "Describe where ammeters should be placed to measure total current and the current through bulb 1.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel circuits", statement: "Branches independent; same voltage; currents add; reliable for appliances." },
            ],
            steps: [
              { part: "a", reasoning: "Battery and main switch in series; two parallel branches each with bulb and own switch.", working: "diagram", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct arrangement described.", working: "arrangement", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each appliance gets full mains voltage.", working: "voltage", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Appliances independent — one off does not affect others.", working: "independent", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Can switch appliances individually.", working: "switching", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Brightness unchanged.", working: "same", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Because its branch still has full voltage — branches independent.", working: "why", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total current: ammeter in series before the branches split.", working: "total", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Branch current: ammeter in series within bulb 1 branch.", working: "branch", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) parallel branches with own switches (b) full voltage, independent appliances (c) unchanged — independent branch (d) main ammeter before split; branch ammeter in series with bulb 1",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Good reasons.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Placing ammeters in parallel — they must be in series."],
          },
        },
      ],
    },
    {
      id: "cils-u7-ohms",
      title: "Ohm's law and resistance",
      skill: "Apply Ohm's law and describe factors affecting resistance.",
      lesson: {
        sections: [
          {
            heading: "Ohm's law",
            body: "V = I × R — voltage = current × resistance. Rearrange: I = V ÷ R, R = V ÷ I.",
          },
          {
            heading: "Resistance factors",
            body: "- **Length**: longer wire = more resistance\n- **Thickness**: thinner = more resistance\n- **Material**: different materials resist differently\n- **Temperature**: heating increases resistance (usually)",
          },
          {
            heading: "Ohmic vs non-ohmic",
            body: "Ohmic: V/I constant (resistor, wire at constant temp). Non-ohmic: resistance changes (bulb filament heats up, diode).",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "V = I × R; I = V ÷ R; R = V ÷ I" },
        ],
        workedExample: {
          problem: "A 12 V battery drives 3 A through a resistor. What's R?",
          solution: "R = V ÷ I = 12 ÷ 3 = 4 Ω.",
        },
      },
      questions: [
        {
          id: "cils-u7-ohm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I = V + R" },
              { id: "b", text: "V = I × R" },
              { id: "c", text: "R = V × I" },
              { id: "d", text: "V = I ÷ R" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "V = IR." },
            ],
            steps: [
              { reasoning: "Ohm's law: V = I × R.", working: "IR", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** V = I × R",
            commonErrors: ["Inverting — V=IR not V/R."],
          },
        },
        {
          id: "cils-u7-ohm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resistor has V=6 V, I=2 A. Calculate R.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "R = V ÷ I = 6 ÷ 2 = 3 Ω" },
            ],
            steps: [
              { reasoning: "R = V ÷ I.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "= 3 Ω.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 Ω",
            commonErrors: ["Using V×I — rearrange correctly."],
          },
        },
        {
          id: "cils-u7-ohm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how wire length and thickness affect resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resistance factors", statement: "Longer = more resistance; thinner = more resistance." },
            ],
            steps: [
              { reasoning: "Longer wire = more collisions → higher resistance.", working: "length", marks: 1, markCode: "M" },
              { reasoning: "Thinner wire = fewer electrons can flow → higher resistance.", working: "thickness", marks: 1, markCode: "M" },
              { reasoning: "Both increase resistance — used in variable resistors.", working: "both", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Longer and thinner wires have higher resistance.",
            commonErrors: ["Thinking thicker = more resistance — opposite is true."],
          },
        },
        {
          id: "cils-u7-ohm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate Ohm's law.",
          parts: [
            { label: "a", prompt: "State Ohm's law.", marks: 1 },
            { label: "b", prompt: "Describe an experiment to test it.", marks: 3 },
            { label: "c", prompt: "What graph would you plot?", marks: 2 },
            { label: "d", prompt: "When does Ohm's law not apply?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ohm's law", statement: "V=IR constant for ohmic conductors; fails when temperature/resistance changes." },
            ],
            steps: [
              { part: "a", reasoning: "V = I × R — voltage proportional to current at constant resistance.", working: "law", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vary voltage, measure current for fixed resistor; plot V vs I.", working: "experiment", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method valid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Controlled.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "V vs I — straight line through origin, gradient = R.", working: "graph", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Non-ohmic: filament bulb (heats up), diode, thermistor — resistance changes.", working: "non-ohmic", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Examples correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) V=IR (b) vary V measure I (c) V-I graph straight line (d) filament/diode/thermistor",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Experiment good.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Examples good.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ohm's law assumes constant temperature/resistance."],
          },
        },
        {
          id: "cils-u7-ohm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these does NOT affect the resistance of a wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of the insulation" },
              { id: "b", text: "The material of the wire" },
              { id: "c", text: "The length of the wire" },
              { id: "d", text: "The thickness of the wire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resistance factors", statement: "Resistance depends on length, cross-section, material and temperature." },
            ],
            steps: [
              { reasoning: "Insulation colour has no effect on resistance.", working: "colour", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The colour of the insulation",
            commonErrors: ["Choosing (b), (c) or (d) — all genuinely affect resistance."],
          },
        },
        {
          id: "cils-u7-ohm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ohm's law rearranged to find resistance is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "R = V + I" },
              { id: "b", text: "R = I ÷ V" },
              { id: "c", text: "R = V × I" },
              { id: "d", text: "R = V ÷ I" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "V = IR so R = V ÷ I." },
            ],
            steps: [
              { reasoning: "Divide both sides of V = IR by I.", working: "R=V/I", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** R = V ÷ I",
            commonErrors: ["Choosing (b) — multiplication is not division."],
          },
        },
        {
          id: "cils-u7-ohm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A wire is stretched so its length doubles (same material and thickness). Its resistance...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays the same" },
              { id: "b", text: "Becomes zero" },
              { id: "c", text: "Halves" },
              { id: "d", text: "Doubles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resistance factors", statement: "Resistance is proportional to length." },
            ],
            steps: [
              { reasoning: "R ∝ length — double length, double resistance.", working: "2L", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Doubles",
            commonErrors: ["Choosing (b) — thicker wire lowers resistance, longer raises it."],
          },
        },
        {
          id: "cils-u7-ohm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resistor has a voltage of 9 V across it and a current of 3 A flows through it. Calculate its resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "R = V ÷ I = 9 ÷ 3 = 3 Ω" },
            ],
            steps: [
              { reasoning: "R = V ÷ I.", working: "9/3", marks: 1, markCode: "M" },
              { reasoning: "= 3 Ω.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 Ω",
            commonErrors: ["Using V × I — rearrange Ohm's law correctly."],
          },
        },
        {
          id: "cils-u7-ohm-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The unit of resistance is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ampere (A)" },
              { id: "b", text: "Watt (W)" },
              { id: "c", text: "Volt (V)" },
              { id: "d", text: "Ohm (Ω)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Resistance unit", statement: "Resistance is measured in ohms (Ω)." },
            ],
            steps: [
              { reasoning: "Resistance measured in ohms.", working: "Ω", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ohm (Ω)",
            commonErrors: ["Choosing (b) — volts measure voltage."],
          },
        },
        {
          id: "cils-u7-ohm-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resistor has a resistance of 4 Ω and a current of 0.5 A flows through it. Calculate the voltage across it. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Voltage", answer: 2, unit: "V" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "V = I × R = 0.5 × 4 = 2 V" },
            ],
            steps: [
              { reasoning: "V = I × R = 0.5 × 4.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "= 2 V.", working: "2V", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 V",
            commonErrors: ["Using R = V ÷ I backwards — rearrange Ohm's law first."],
          },
        },
        {
          id: "cils-u7-ohm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a thin wire has a greater resistance than a thick wire made of the same material and length.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resistance factors", statement: "Thinner wires have higher resistance." },
            ],
            steps: [
              { reasoning: "A thin wire has a smaller cross-sectional area.", working: "area", marks: 1, markCode: "M" },
              { reasoning: "Fewer charge carriers can pass → electrons collide more → higher resistance.", working: "collisions", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thinner wire → smaller cross-section → more electron collisions → higher resistance.",
            commonErrors: ["Thinking thinner wires have lower resistance — the opposite is true."],
          },
        },
        {
          id: "cils-u7-ohm-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which component's resistance increases as its temperature rises?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copper connecting wire" },
              { id: "b", text: "Filament bulb" },
              { id: "c", text: "Closed switch" },
              { id: "d", text: "Fixed resistor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Non-ohmic behaviour", statement: "Filament resistance rises as it heats up." },
            ],
            steps: [
              { reasoning: "A bulb filament heats up when lit, increasing its resistance.", working: "filament", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Filament bulb",
            commonErrors: ["Choosing (b) — a fixed resistor stays roughly constant."],
          },
        },
        {
          id: "cils-u7-ohm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 24 V battery is connected across a 12 Ω resistor. Calculate the current. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Current", answer: 2, unit: "A" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "I = V ÷ R = 24 ÷ 12 = 2 A" },
            ],
            steps: [
              { reasoning: "I = V ÷ R = 24 ÷ 12.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "= 2 A.", working: "2A", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 A",
            commonErrors: ["Using V × R — rearrange Ohm's law correctly."],
          },
        },
        {
          id: "cils-u7-ohm-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a filament bulb does not obey Ohm's law but a fixed resistor does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ohmic vs non-ohmic", statement: "Ohm's law needs constant resistance; filament resistance changes with temperature." },
            ],
            steps: [
              { reasoning: "When current flows, the bulb filament heats up.", working: "heat", marks: 1, markCode: "M" },
              { reasoning: "Heating increases the filament's resistance.", working: "R up", marks: 1, markCode: "M" },
              { reasoning: "V ÷ I is no longer constant → the graph is curved → non-ohmic.", working: "non-ohmic", marks: 1, markCode: "M" },
              { reasoning: "A fixed resistor stays at roughly constant temperature, so V ÷ I stays constant.", working: "ohmic", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Filament heats → resistance changes → non-ohmic; fixed resistor stays cool → V/I constant → ohmic.",
            commonErrors: ["Thinking Ohm's law never fails — it requires constant resistance/temperature."],
          },
        },
        {
          id: "cils-u7-ohm-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ohm's law applies only when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the current is very large" },
              { id: "b", text: "the wire is heated up" },
              { id: "c", text: "the resistance stays constant" },
              { id: "d", text: "a diode is used" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ohmic conductors", statement: "Ohm's law holds for ohmic conductors at constant temperature." },
            ],
            steps: [
              { reasoning: "Ohm's law requires constant resistance (constant temperature).", working: "constant", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The resistance stays constant",
            commonErrors: ["Choosing (b) — heating changes resistance and breaks Ohm's law."],
          },
        },
        {
          id: "cils-u7-ohm-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student plots voltage against current for a resistor and gets a straight line through the origin. State what the gradient of the line represents and give its unit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ohm's law graph", statement: "V-I graph gradient = resistance; straight line through origin for ohmic conductors." },
            ],
            steps: [
              { reasoning: "Gradient = V ÷ I = resistance.", working: "gradient", marks: 1, markCode: "M" },
              { reasoning: "Unit is ohms (Ω).", working: "Ω", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The gradient represents resistance, measured in ohms (Ω).",
            commonErrors: ["Saying gradient = current — it is V ÷ I = R."],
          },
        },
      ],
    },
    {
      id: "cils-u7-power",
      title: "Electrical power and energy",
      skill: "Calculate electrical power and energy, describe safety.",
      lesson: {
        sections: [
          {
            heading: "Power",
            body: "Power = rate of energy transfer = voltage × current = P = V × I. Unit: watt (W).",
          },
          {
            heading: "Energy",
            body: "Energy = power × time = E = P × t. Unit: joule (J) or kilowatt-hour (kWh) for electricity bills.",
          },
          {
            heading: "Safety",
            body: "Fuses/circuit breakers protect against overload. Earth wire diverts fault current. Don't touch live wires.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "P = V × I (watts)" },
          { name: "Energy", statement: "E = P × t (joules)" },
        ],
        workedExample: {
          problem: "A 60 W bulb runs for 2 hours. Energy used?",
          solution: "E = P × t = 60 × 2 = 120 Wh = 0.12 kWh.",
        },
      },
      questions: [
        {
          id: "cils-u7-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for electrical power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P = I ÷ V" },
              { id: "b", text: "P = V + I" },
              { id: "c", text: "P = V × I" },
              { id: "d", text: "P = V ÷ I" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Power", statement: "P = VI." },
            ],
            steps: [
              { reasoning: "Power = voltage × current.", working: "VI", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** P = V × I",
            commonErrors: ["Using wrong formula — power = V × I."],
          },
        },
        {
          id: "cils-u7-power-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device uses 12 V and 2 A. Calculate power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Power", statement: "P = VI = 12 × 2 = 24 W" },
            ],
            steps: [
              { reasoning: "P = 12 × 2.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "= 24 W.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 W",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cils-u7-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a 100 W bulb uses more energy than a 40 W bulb over same time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy consumption", statement: "E = P × t — higher power = more energy for same time." },
            ],
            steps: [
              { reasoning: "Energy = power × time — same time, different power.", working: "E=Pt", marks: 1, markCode: "M" },
              { reasoning: "100 W uses 2.5× energy of 40 W over same period.", working: "comparison", marks: 1, markCode: "M" },
              { reasoning: "Higher power = more energy transferred per second.", working: "rate", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher power = more energy per unit time — 100 W uses more than 40 W.",
            commonErrors: ["Saying 'brighter only' — it's about energy consumption."],
          },
        },
        {
          id: "cils-u7-power-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Calculate electricity costs and describe safety.",
          parts: [
            { label: "a", prompt: "What is electrical power? Give formula.", marks: 1 },
            { label: "b", prompt: "A 2 kW heater runs for 3 hours. Energy used?", marks: 2 },
            { label: "c", prompt: "At 20p/kWh, what's the cost?", marks: 2 },
            { label: "d", prompt: "Describe two electrical safety features.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power & safety", statement: "P=VI; E=Pt; fuses/earth wires protect against faults." },
            ],
            steps: [
              { part: "a", reasoning: "Rate of energy transfer = V × I.", working: "definition", marks: 1, markCode: "M" },
              { part: "b", reasoning: "E = 2 × 3 = 6 kWh.", working: "6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "6 × 20p = 120p = £1.20.", working: "£1.20", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fuse melts on overload; earth wire diverts fault current; circuit breaker trips.", working: "safety", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ features.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct explanation.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) P=VI (b) 6 kWh (c) £1.20 (d) fuse/earth wire/breaker",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Multiple features.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Confusing kWh with kW — kWh = power × time."],
          },
        },
        {
          id: "cils-u7-power-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The unit of electrical power is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ampere (A)" },
              { id: "b", text: "Watt (W)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Volt (V)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Power unit", statement: "Power is measured in watts (W)." },
            ],
            steps: [
              { reasoning: "Power = rate of energy transfer, measured in watts.", working: "W", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Watt (W)",
            commonErrors: ["Choosing (d) — joules measure energy, not power."],
          },
        },
        {
          id: "cils-u7-power-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device operates at 5 V and draws a current of 3 A. Calculate its power. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Power", answer: 15, unit: "W" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Power", statement: "P = V × I = 5 × 3 = 15 W" },
            ],
            steps: [
              { reasoning: "P = 5 × 3.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "= 15 W.", working: "15W", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 W",
            commonErrors: ["Adding V and I instead of multiplying."],
          },
        },
        {
          id: "cils-u7-power-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Electrical energy used is calculated using...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "E = P × t" },
              { id: "b", text: "E = P + t" },
              { id: "c", text: "E = V × I" },
              { id: "d", text: "E = P ÷ t" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Energy", statement: "E = P × t — energy = power × time." },
            ],
            steps: [
              { reasoning: "Energy used = power × time.", working: "Pt", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** E = P × t",
            commonErrors: ["Choosing (c) — that is the formula for power, not energy."],
          },
        },
        {
          id: "cils-u7-power-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 60 W bulb is switched on for 2 hours. Calculate the energy used in kWh. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 0.12, unit: "kWh" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Energy", statement: "E = P × t = 60 × 2 = 120 Wh = 0.12 kWh" },
            ],
            steps: [
              { reasoning: "E = 60 × 2 = 120 Wh.", working: "120Wh", marks: 1, markCode: "M" },
              { reasoning: "120 Wh = 0.12 kWh.", working: "0.12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.12 kWh",
            commonErrors: ["Forgetting to convert watts to kilowatts or Wh to kWh."],
          },
        },
        {
          id: "cils-u7-power-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a fuse is chosen with a rating just above the normal current of an appliance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fuse rating", statement: "Fuse melts when current exceeds its rating." },
            ],
            steps: [
              { reasoning: "A fuse melts and breaks the circuit when the current exceeds its rating.", working: "melts", marks: 1, markCode: "M" },
              { reasoning: "Rated just above normal current → it only blows during a fault or overload.", working: "rating", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fuse melts on excess current; rating just above normal means it only blows on a fault.",
            commonErrors: ["Choosing a very high-rated fuse — it would never protect the appliance."],
          },
        },
        {
          id: "cils-u7-power-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a fuse and an earth wire protect a person using an electrical appliance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Electrical safety", statement: "Fuse breaks circuit on overload; earth wire diverts fault current." },
            ],
            steps: [
              { reasoning: "If a fault causes excessive current, the fuse melts and breaks the circuit.", working: "fuse", marks: 1, markCode: "M" },
              { reasoning: "The earth wire provides a low-resistance path to the ground.", working: "path", marks: 1, markCode: "M" },
              { reasoning: "Fault current flows through the earth wire instead of through a person.", working: "diverts", marks: 1, markCode: "M" },
              { reasoning: "This keeps the appliance case at safe voltage and prevents electric shock.", working: "safe", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fuse melts on overload breaking the circuit; earth wire diverts fault current so the case stays safe.",
            commonErrors: ["Saying the earth wire 'uses up' electricity in normal operation — it only carries current during a fault."],
          },
        },
        {
          id: "cils-u7-power-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is it dangerous to touch a live electrical wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It will break the wire" },
              { id: "b", text: "It wastes energy" },
              { id: "c", text: "Risk of electric shock" },
              { id: "d", text: "There is no danger" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Electrical safety", statement: "Live wires can cause electric shock." },
            ],
            steps: [
              { reasoning: "A live wire carries voltage — touching it can cause a dangerous electric shock.", working: "shock", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Risk of electric shock",
            commonErrors: ["Choosing (c) — live wires are always dangerous to touch."],
          },
        },
        {
          id: "cils-u7-power-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 1.5 kW electric kettle is on for 3 minutes. Calculate the energy transferred in joules. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 270000, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Energy", statement: "E = P × t = 1500 × 180 = 270000 J" },
            ],
            steps: [
              { reasoning: "Convert: P = 1500 W, t = 3 × 60 = 180 s.", working: "conv", marks: 1, markCode: "M" },
              { reasoning: "E = 1500 × 180 = 270000 J.", working: "270000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "270000 J",
            commonErrors: ["Using minutes without converting to seconds, or kW without converting to W."],
          },
        },
        {
          id: "cils-u7-power-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A circuit breaker performs the same function as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a switch" },
              { id: "b", text: "a voltmeter" },
              { id: "c", text: "a bulb" },
              { id: "d", text: "a fuse" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Electrical safety", statement: "Circuit breakers and fuses both protect against overload." },
            ],
            steps: [
              { reasoning: "Both breakers and fuses cut the current when it exceeds a safe value.", working: "breaker", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A fuse",
            commonErrors: ["Choosing (c) — a switch is controlled manually, not by current."],
          },
        },
        {
          id: "cils-u7-power-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A washing machine connected to the 230 V mains draws a current of 10 A. Calculate its power and name one safety feature that protects it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power & safety", statement: "P = V × I; fuses/breakers/earth wire protect appliances." },
            ],
            steps: [
              { reasoning: "P = V × I = 230 × 10.", working: "230×10", marks: 1, markCode: "M" },
              { reasoning: "P = 2300 W.", working: "2300W", marks: 1, markCode: "A" },
              { reasoning: "Safety feature: fuse, circuit breaker or earth wire.", working: "safety", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2300 W; e.g. fuse or earth wire protects it.",
            commonErrors: ["Forgetting the safety feature — half the marks depend on it."],
          },
        },
        {
          id: "cils-u7-power-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 2 kW heater runs for 5 hours. Calculate the energy used in kWh. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 10, unit: "kWh" }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Energy", statement: "E = P × t = 2 × 5 = 10 kWh" },
            ],
            steps: [
              { reasoning: "E = 2 × 5.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "= 10 kWh.", working: "10kWh", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 kWh",
            commonErrors: ["Using joules instead of kWh — kW × hours gives kWh."],
          },
        },
        {
          id: "cils-u7-power-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two bulbs, rated 60 W and 100 W, are connected to the same 230 V supply. Using P = V × I, explain which bulb draws the larger current and calculate both currents.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power", statement: "P = V × I so I = P ÷ V — higher power draws more current at same voltage." },
            ],
            steps: [
              { reasoning: "At the same voltage, current is proportional to power.", working: "I=P/V", marks: 1, markCode: "M" },
              { reasoning: "100 W bulb: I = 100 ÷ 230 = 0.43 A.", working: "0.43", marks: 1, markCode: "M" },
              { reasoning: "60 W bulb: I = 60 ÷ 230 = 0.26 A.", working: "0.26", marks: 1, markCode: "M" },
              { reasoning: "The 100 W bulb draws the larger current.", working: "larger", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 W bulb — I = 100 ÷ 230 = 0.43 A vs 60 ÷ 230 = 0.26 A.",
            commonErrors: ["Assuming brighter bulb draws less current — it draws more."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u7-electricity-notes",
      title: "Electricity — revision notes",
      summary: "Circuits, Ohm's law, power, energy, safety.",
      sections: [
        {
          heading: "Circuits",
          body: "Complete circuit needed. Series=same current; parallel=same voltage. Ammeter in series, voltmeter in parallel.",
        },
        {
          heading: "Calculations & safety",
          body: "V=IR; P=VI; E=Pt. Fuses/breakers prevent overload; earth wire safety. kWh for electricity bills.",
        },
      ],
    },
  ],
};
