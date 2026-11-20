import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "physhl-u2-lesson-2-2",
  code: "2-2",
  title: "Entropy and the Second Law",
  goal: "I CAN define entropy as a measure of disorder, apply $\\Delta S = \\frac{Q_{rev}}{T}$ to calculate entropy changes, and explain the second law of thermodynamics and its consequences.",
  standards: ["Paper 1", "Paper 2", "AHL B1"],
  vocabulary: [
    { term: "Entropy ($S$)", definition: "A measure of the disorder or randomness of a system; the SI unit is J K$^{-1}$." },
    { term: "Second law of thermodynamics", definition: "The entropy of an isolated system can never decrease — spontaneous processes always increase total entropy." },
    { term: "Entropy change", definition: "For a reversible process at temperature $T$: $\\Delta S = \\frac{Q_{rev}}{T}$; entropy is a state function." },
    { term: "Reversible process", definition: "An idealised process carried out infinitely slowly with no dissipative losses — the maximum work possible." },
    { term: "Dissipation", definition: "The conversion of ordered energy (work) into disordered energy (heat) — always increases entropy." },
    { term: "Heat death", definition: "The theoretical end state where all energy is uniformly distributed and no useful work can be extracted." },
  ],
  concepts: [
    {
      id: "physhl-u2-entropy",
      title: "Entropy as a measure of disorder",
      skill: "Define entropy qualitatively and quantitatively, identify processes that increase or decrease entropy, and apply $\\Delta S = Q_{rev}/T$.",
      lesson: {
        sections: [
          {
            heading: "What is entropy?",
            body: "**Entropy** measures the degree of disorder or randomness in a system. A gas spread evenly through a container has higher entropy than the same gas confined to one corner. Ice melting to water increases entropy (solid → liquid → gas increases disorder). Entropy is a **state function** — its change depends only on initial and final states, not the path taken.",
          },
          {
            heading: "Calculating entropy change",
            body: "For a reversible process at absolute temperature $T$, the entropy change is $\\Delta S = \\frac{Q_{rev}}{T}$ where $Q_{rev}$ is the reversible heat transferred. For phase changes at constant temperature: melting ice at 273 K absorbs $Q = mL_f$, so $\\Delta S = mL_f/273$. Entropy has units J K$^{-1}$.",
          },
          {
            heading: "What increases entropy?",
            body: "Processes that increase entropy: heating (more random motion), expansion of gases, mixing of substances, phase changes solid→liquid→gas, and any spontaneous process. Processes that decrease entropy (like freezing) must be driven by energy input that increases entropy elsewhere by at least as much.",
          },
        ],
        keyFormulas: [
          { name: "Entropy change", statement: "$\\Delta S = \\frac{Q_{rev}}{T}$ — J K$^{-1}$" },
          { name: "Phase change entropy", statement: "$\\Delta S = \\frac{mL}{T}$ for melting/vaporising" },
          { name: "State function", statement: "Entropy change depends only on initial/final states." },
        ],
        workedExample: {
          problem: "Calculate the entropy change when 100 g of ice melts at 0 °C ($L_f = 3.34 \\times 10^5$ J/kg).",
          solution: "$Q = mL_f = 0.100 \\times 3.34 \\times 10^5 = 33400$ J. $\\Delta S = Q/T = 33400/273 = 122$ J K$^{-1}$.",
        },
      },
      questions: [
        {
          id: "physhl-u2-ent-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process increases the entropy of a system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Melting ice" },
              { id: "b", text: "Freezing water" },
              { id: "c", text: "Compressing a gas" },
              { id: "d", text: "Condensing steam" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Entropy", statement: "Disorder increases going solid→liquid→gas; melting increases entropy." },
            ],
            steps: [
              { reasoning: "Melting: solid → liquid → more disorder → entropy increases.", marks: 1, markCode: "R" },
              { reasoning: "Freezing, compressing, condensing all decrease entropy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Melting ice",
            commonErrors: ["Choosing freezing — that decreases entropy."],
          },
        },
        {
          id: "physhl-u2-ent-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the entropy change when 200 g of water boils at 100 °C ($L_v = 2.26 \\times 10^6$ J/kg).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Entropy change", statement: "$\\Delta S = Q/T = mL_v/T$" },
            ],
            steps: [
              { reasoning: "Calculate heat absorbed.", working: "Q = 0.200 \\times 2.26 \\times 10^6 = 4.52 \\times 10^5 J", marks: 1, markCode: "M" },
              { reasoning: "Apply entropy formula at $T = 373$ K.", working: "\\Delta S = 4.52 \\times 10^5 / 373", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta S = 1212$ J K$^{-1} \\approx 1.2 \\times 10^3$ J K$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta S \\approx 1.2 \\times 10^3$ J K$^{-1}$",
            commonErrors: ["Using 100 instead of 373 K — must use absolute temperature."],
          },
        },
        {
          id: "physhl-u2-ent-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a cup of hot coffee left on a table cools down spontaneously, even though this decreases the entropy of the coffee itself.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second law", statement: "Total entropy of isolated system always increases — coffee loses entropy but surroundings gain more." },
            ],
            steps: [
              { reasoning: "Coffee cools → loses heat → its entropy decreases.", marks: 1, markCode: "R" },
              { reasoning: "Surroundings (air, table) gain that heat → their entropy increases.", marks: 1, markCode: "M" },
              { reasoning: "Entropy gained by surroundings > entropy lost by coffee → total entropy increases.", marks: 1, markCode: "R" },
              { reasoning: "Second law satisfied — spontaneous process increases total entropy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Total entropy increases even though coffee's entropy decreases.",
            commonErrors: ["Thinking the coffee's entropy must increase — only TOTAL entropy must increase."],
          },
        },
        {
          id: "physhl-u2-ent-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the following processes: (a) ice melting at 0 °C; (b) water freezing at 0 °C; (c) a gas expanding into vacuum; (d) perfume diffusing through a room.",
          parts: [
            { label: "a", prompt: "For each process, state whether entropy increases or decreases and explain why.", marks: 4 },
            { label: "b", prompt: "Calculate the entropy change for 50 g of ice melting at 273 K ($L_f = 3.34 \\times 10^5$ J/kg).", marks: 2 },
            { label: "c", prompt: "Explain why process (c) is irreversible.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Entropy changes", statement: "Spontaneous processes increase entropy; reversible processes have $\\Delta S_{total} = 0$." },
            ],
            steps: [
              { part: "a", reasoning: "(a) Melting: solid→liquid → entropy increases.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "(b) Freezing: liquid→solid → entropy decreases (requires heat removal).", marks: 1, markCode: "R" },
              { part: "a", reasoning: "(c) Gas into vacuum: more disorder → entropy increases.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "(d) Perfume diffusion: mixing → entropy increases.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Q = 0.050 \\times 3.34 \\times 10^5 = 16700$ J; $\\Delta S = 16700/273 = 61.2$ J K$^{-1}$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\Delta S = +61.2$ J K$^{-1}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gas won't spontaneously return to one side — would decrease entropy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Irreversible because reverse process violates second law.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Melting+, freezing−, expansion+, diffusion+. (b) +61 J/K. (c) Reverse would decrease entropy.",
            commonErrors: ["Thinking freezing 'violates' second law — it's driven by heat removal which increases surroundings' entropy more."],
          },
        },
        {
          id: "physhl-u2-ent-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The SI unit of entropy is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "J K$^{-1}$" },
              { id: "b", text: "J" },
              { id: "c", text: "K$^{-1}$" },
              { id: "d", text: "J K" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Entropy units", statement: "$\\Delta S = Q/T$ → units of J K$^{-1}$." },
            ],
            steps: [
              { reasoning: "Entropy change is heat divided by absolute temperature, so units are J K$^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** J K$^{-1}$",
            commonErrors: ["Choosing J — entropy is energy per unit temperature, not energy itself."],
          },
        },
        {
          id: "physhl-u2-ent-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Entropy is described as a 'state function'. This means its change depends on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the initial and final states, not the path" },
              { id: "b", text: "The speed of the process" },
              { id: "c", text: "The work done during the process" },
              { id: "d", text: "The number of steps in the process" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "State function", statement: "Entropy change depends only on initial and final states." },
            ],
            steps: [
              { reasoning: "State functions are path-independent — like internal energy, $\\Delta S$ depends only on endpoints.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Only the initial and final states",
            commonErrors: ["Confusing state functions with path functions like work and heat."],
          },
        },
        {
          id: "physhl-u2-ent-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A gas expands freely into a vacuum (Joule expansion). What happens to the entropy of the gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases — the gas occupies more states" },
              { id: "b", text: "It decreases — the gas does no work" },
              { id: "c", text: "It stays the same — temperature is unchanged" },
              { id: "d", text: "It decreases — pressure falls" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Free expansion", statement: "Gas spreading into vacuum increases disorder → entropy increases even though no heat flows." },
            ],
            steps: [
              { reasoning: "Free expansion is irreversible; the gas fills a larger volume with the same energy → more microstates → higher entropy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It increases",
            commonErrors: ["Thinking no heat means no entropy change — entropy also measures accessible states."],
          },
        },
        {
          id: "physhl-u2-ent-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The formula $\\Delta S = Q_{rev}/T$ applies when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat is transferred reversibly at constant temperature $T$" },
              { id: "b", text: "Any heat is transferred at temperature $T$" },
              { id: "c", text: "The process is adiabatic" },
              { id: "d", text: "Work is done on the system" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Entropy change", statement: "$\\Delta S = Q_{rev}/T$ requires reversible heat transfer." },
            ],
            steps: [
              { reasoning: "The subscript 'rev' is essential — the formula only gives entropy change for reversible heat transfer; irreversible processes need an equivalent reversible path.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reversible heat transfer at temperature $T$",
            commonErrors: ["Using actual irreversible heat — must use the reversible equivalent."],
          },
        },
        {
          id: "physhl-u2-ent-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process DECREASES the entropy of a substance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vaporising water" },
              { id: "b", text: "Condensing steam" },
              { id: "c", text: "Melting ice" },
              { id: "d", text: "Gas expanding" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phase change entropy", statement: "Gas → liquid → solid decreases disorder → entropy decreases." },
            ],
            steps: [
              { reasoning: "Condensation (gas → liquid) reduces disorder, so entropy decreases; the reverse processes increase it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Condensing steam",
            commonErrors: ["Choosing vaporisation — going to gas increases entropy."],
          },
        },
        {
          id: "physhl-u2-ent-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The second law of thermodynamics implies that the entropy of the universe:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Never decreases" },
              { id: "b", text: "Is always zero" },
              { id: "c", text: "Decreases in reversible processes" },
              { id: "d", text: "Can decrease spontaneously" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second law", statement: "$\\Delta S_{universe} \\geq 0$ — total entropy never decreases." },
            ],
            steps: [
              { reasoning: "For any real (irreversible) process total entropy increases; for ideal reversible processes it stays constant — never decreases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Never decreases",
            commonErrors: ["Choosing 'always zero' — entropy is only zero for a perfect crystal at absolute zero (third law)."],
          },
        },
        {
          id: "physhl-u2-ent-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the entropy change when 150 g of ice melts at 0 °C. ($L_f = 3.34 \\times 10^5$ J/kg)",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta S$ in J K$^{-1}$", answer: 183.5, tolerance: 0.5, unit: "J K$^{-1}$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Phase change entropy", statement: "$\\Delta S = mL_f/T$ at constant melting temperature." },
            ],
            steps: [
              { reasoning: "Heat absorbed melting the ice.", working: "Q = 0.150 \\times 3.34 \\times 10^5 = 5.01 \\times 10^4 J", marks: 1, markCode: "M" },
              { reasoning: "Apply $\\Delta S = Q/T$ at $T = 273$ K.", working: "\\Delta S = 5.01 \\times 10^4 / 273", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta S = +183.5$ J K$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta S = +183.5$ J K$^{-1}$",
            commonErrors: ["Using 0 °C instead of 273 K — entropy formula needs absolute temperature."],
          },
        },
        {
          id: "physhl-u2-ent-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "60 g of water at its boiling point vaporises completely at 100 °C ($L_v = 2.26 \\times 10^6$ J/kg).",
          parts: [
            { label: "a", prompt: "Calculate the heat absorbed during vaporisation.", marks: 2 },
            { label: "b", prompt: "Calculate the entropy change of the water.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Heat absorbed", answer: 135600, unit: "J" },
              { label: "(b) $\\Delta S$ in J K$^{-1}$", answer: 363.5, tolerance: 0.5, unit: "J K$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vaporisation entropy", statement: "$Q = mL_v$; $\\Delta S = Q/T$ with $T = 373$ K." },
            ],
            steps: [
              { part: "a", reasoning: "Heat absorbed equals mass times specific latent heat of vaporisation.", working: "Q = 0.060 \\times 2.26 \\times 10^6 = 1.356 \\times 10^5 J", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$Q = 135600$ J ($1.36 \\times 10^5$ J).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply $\\Delta S = Q/T$ at the boiling point $T = 373$ K.", working: "\\Delta S = 1.356 \\times 10^5 / 373", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\Delta S = +363.5$ J K$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.36 \\times 10^5$ J. (b) $+363.5$ J K$^{-1}$.",
            commonErrors: ["Forgetting to convert grams to kilograms before using $L_v$."],
          },
        },
        {
          id: "physhl-u2-ent-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "600 J of heat flows spontaneously from a hot body at 400 K to a cold body at 200 K.",
          response: {
            type: "numeric",
            parts: [{ label: "Total entropy change of the two bodies", answer: 1.5, tolerance: 0.01, unit: "J K$^{-1}$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Entropy transfer", statement: "Heat leaving at $T$: $\\Delta S = -Q/T$; heat arriving at $T$: $\\Delta S = +Q/T$." },
            ],
            steps: [
              { reasoning: "Entropy change of the hot body.", working: "\\Delta S_{hot} = -600/400 = -1.5 J K^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Entropy change of the cold body.", working: "\\Delta S_{cold} = +600/200 = +3.0 J K^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Total entropy change.", working: "\\Delta S_{total} = -1.5 + 3.0 = +1.5 J K^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Positive total — consistent with the second law for a spontaneous process.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta S_{total} = +1.5$ J K$^{-1}$",
            commonErrors: ["Adding the magnitudes instead of signed values — the hot body loses entropy."],
          },
        },
        {
          id: "physhl-u2-ent-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "0.20 kg of water vaporises at 100 °C ($L_v = 2.26 \\times 10^6$ J/kg) and separately 0.20 kg of ice melts at 0 °C ($L_f = 3.34 \\times 10^5$ J/kg).",
          parts: [
            { label: "a", prompt: "Calculate the entropy change for the vaporisation.", marks: 2 },
            { label: "b", prompt: "Calculate the entropy change for the melting.", marks: 2 },
            { label: "c", prompt: "Calculate the ratio $\\Delta S_{vap}/\\Delta S_{fus}$.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\Delta S$ vaporisation", answer: 1212, tolerance: 2, unit: "J K$^{-1}$" },
              { label: "(b) $\\Delta S$ melting", answer: 244.7, tolerance: 1, unit: "J K$^{-1}$" },
              { label: "(c) Ratio $\\Delta S_{vap}/\\Delta S_{fus}$", answer: 4.95, tolerance: 0.05, unit: "" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Phase change entropy", statement: "$\\Delta S = mL/T$ — depends on both latent heat and temperature." },
            ],
            steps: [
              { part: "a", reasoning: "Heat absorbed then $\\Delta S = Q/T$ at 373 K.", working: "Q = 0.20 \\times 2.26 \\times 10^6 = 4.52 \\times 10^5 J; \\Delta S = 4.52 \\times 10^5/373 = 1212 J K^{-1}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\Delta S_{vap} = +1212$ J K$^{-1}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same method at 273 K with $L_f$.", working: "Q = 0.20 \\times 3.34 \\times 10^5 = 6.68 \\times 10^4 J; \\Delta S = 6.68 \\times 10^4/273 = 244.7 J K^{-1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\Delta S_{fus} = +244.7$ J K$^{-1}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ratio of the two entropy changes.", working: "\\Delta S_{vap}/\\Delta S_{fus} = 1212/244.7 \\approx 4.95", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $+1212$ J K$^{-1}$. (b) $+244.7$ J K$^{-1}$. (c) Ratio $\\approx 4.95$ — vaporisation changes entropy about five times more.",
            commonErrors: ["Comparing only temperatures — the latent heat dominates the difference."],
          },
        },
        {
          id: "physhl-u2-ent-q15",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "A body absorbs 800 J of heat reversibly at a constant temperature of 320 K. Calculate the entropy change of the body.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta S$ in J K$^{-1}$", answer: 2.5, tolerance: 0.01, unit: "J K$^{-1}$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Entropy change", statement: "$\\Delta S = Q_{rev}/T$." },
            ],
            steps: [
              { reasoning: "Heat is absorbed, so $Q = +800$ J.", marks: 1, markCode: "M" },
              { reasoning: "Apply the entropy formula at $T = 320$ K.", working: "\\Delta S = 800/320 = 2.5", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta S = +2.5$ J K$^{-1}$ — positive because the body gains disorder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta S = +2.5$ J K$^{-1}$",
            commonErrors: ["Giving a negative sign — absorbing heat increases the body's entropy."],
          },
        },
        {
          id: "physhl-u2-ent-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why entropy is called a 'state function', and describe how the entropy change of an irreversible process (such as a gas expanding freely into a vacuum) can still be calculated even though $Q_{rev}$ is not defined for it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "State function", statement: "Entropy change depends only on initial and final states, not the path." },
            ],
            steps: [
              { reasoning: "Entropy is a state function because its value is fixed by the macrostate (e.g. $T$, $V$, $P$), like internal energy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore $\\Delta S$ between two states is the same for every path connecting them — it is path-independent.", marks: 1, markCode: "A" },
              { reasoning: "For an irreversible process, no reversible heat $Q_{rev}$ exists along the actual path, so $Q/T$ cannot be applied directly.", marks: 1, markCode: "M" },
              { reasoning: "Instead, choose ANY reversible process connecting the same initial and final states.", marks: 1, markCode: "M" },
              { reasoning: "Calculate $\\Delta S$ along that reversible path using $\\Delta S = Q_{rev}/T$ for each stage.", marks: 1, markCode: "M" },
              { reasoning: "Because entropy is a state function, this value equals the entropy change of the real irreversible process.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Entropy is path-independent; irreversible $\\Delta S$ is found via an equivalent reversible path.",
            commonErrors: ["Trying to apply $Q/T$ to the actual irreversible path — must use a reversible equivalent."],
          },
        },
      ],
    },
    {
      id: "physhl-u2-second-law",
      title: "The second law and its consequences",
      skill: "State the second and third laws of thermodynamics, explain why perpetual motion machines are impossible, and apply entropy reasoning to real processes.",
      lesson: {
        sections: [
          {
            heading: "The second law",
            body: "The second law has several equivalent statements:\n\n- **Clausius**: heat cannot spontaneously flow from cold to hot.\n- **Kelvin**: no cyclic process can convert heat entirely into work.\n- **Entropy**: the entropy of an isolated system never decreases.\n\nAll three express the same principle: natural processes have a preferred direction toward greater disorder.",
          },
          {
            heading: "Consequences",
            body: "The second law explains why: engines can't be 100% efficient (some heat must be rejected); refrigerators need work input; time has a direction (arrow of time); and the universe tends toward thermal equilibrium (heat death). It does NOT say energy is destroyed — energy is conserved (first law) but its quality degrades (second law).",
          },
          {
            heading: "Third law",
            body: "The third law states that the entropy of a perfect crystal at absolute zero is zero — a theoretical limit. As $T \\to 0$, entropy approaches a minimum. This law is rarely tested quantitatively but explains why absolute zero is unattainable.",
          },
        ],
        keyFormulas: [
          { name: "Second law (entropy)", statement: "$\\Delta S_{isolated} \\geq 0$ — never decreases." },
          { name: "Clausius", statement: "Heat cannot spontaneously flow cold → hot." },
          { name: "Kelvin", statement: "No cyclic process converts heat entirely to work." },
        ],
        workedExample: {
          problem: "Explain why a refrigerator needs external work to operate.",
          solution: "Refrigerator pumps heat from cold interior to warm exterior — this DECREASES the system's entropy. To satisfy the second law, work input increases the surroundings' entropy by at least as much. Without work, heat wouldn't flow cold → hot spontaneously.",
        },
      },
      questions: [
        {
          id: "physhl-u2-sl-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The second law of thermodynamics states that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entropy of an isolated system never decreases" },
              { id: "b", text: "Energy is always conserved" },
              { id: "c", text: "Heat flows from hot to cold" },
              { id: "d", text: "Absolute zero is unattainable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second law", statement: "$\\Delta S_{isolated} \\geq 0$ — entropy never decreases." },
            ],
            steps: [
              { reasoning: "Second law: isolated system entropy can only increase or stay constant.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Entropy never decreases",
            commonErrors: ["Choosing energy conservation — that's the FIRST law."],
          },
        },
        {
          id: "physhl-u2-sl-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why no heat engine can be 100% efficient, using the second law.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Kelvin statement", statement: "No cyclic process converts heat entirely into work." },
            ],
            steps: [
              { reasoning: "Engine absorbs heat $Q_H$ from hot reservoir, converts some to work, rejects $Q_C$ to cold.", marks: 1, markCode: "M" },
              { reasoning: "If 100% efficient, $Q_C = 0$ — all heat converted to work.", marks: 1, markCode: "R" },
              { reasoning: "This violates Kelvin's statement of second law — must reject some heat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100% efficiency would convert all heat to work — forbidden by second law.",
            commonErrors: ["Saying 'friction causes inefficiency' — even ideal frictionless engines must reject heat."],
          },
        },
        {
          id: "physhl-u2-sl-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A student claims to have invented a machine that takes heat from a cold reservoir and converts it entirely into work without any other effect. Use the second law to explain why this is impossible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Kelvin-Planck", statement: "Impossible to convert heat completely into work in a cyclic process." },
            ],
            steps: [
              { reasoning: "Machine takes $Q_C$ from cold reservoir, produces work $W = Q_C$.", marks: 1, markCode: "M" },
              { reasoning: "Cold reservoir loses entropy $Q_C/T_C$; work carries no entropy.", marks: 1, markCode: "R" },
              { reasoning: "Total entropy decreases → violates second law.", marks: 1, markCode: "R" },
              { reasoning: "Such a machine (perpetual motion of second kind) is impossible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Would decrease total entropy — violates second law.",
            commonErrors: ["Saying 'violates energy conservation' — it satisfies first law but violates second."],
          },
        },
        {
          id: "physhl-u2-sl-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The arrow of time: many physical laws are time-symmetric, yet we observe processes only in one direction.",
          parts: [
            { label: "a", prompt: "Explain what 'time-symmetric' means for physical laws, giving an example.", marks: 2 },
            { label: "b", prompt: "Explain how entropy provides the arrow of time.", marks: 3 },
            { label: "c", prompt: "Describe what 'heat death' means and whether the universe will reach it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Arrow of time", statement: "Microscopic laws are reversible; macroscopic entropy increase defines time's direction." },
            ],
            steps: [
              { part: "a", reasoning: "Time-symmetric: equations work equally well forwards or backwards in time.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example: Newton's laws, Maxwell's equations don't distinguish past/future.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Entropy always increases in isolated systems → defines 'forward' direction.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "We observe coffee cooling, not spontaneously heating — entropy increase is the arrow.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Microscopic reversibility doesn't prevent macroscopic irreversibility.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat death: all energy uniformly distributed, no temperature differences → no useful work.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Universe tends toward this state as entropy increases.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Timescale is enormous (~10$^{100}$ years) — may never reach it due to expansion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Laws don't prefer time direction. (b) Entropy increase = arrow of time. (c) Heat death = uniform energy; very distant future.",
            commonErrors: ["Confusing microscopic reversibility with macroscopic irreversibility."],
          },
        },
        {
          id: "physhl-u2-sl-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Clausius statement of the second law says that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat cannot spontaneously flow from a cold body to a hot body" },
              { id: "b", text: "Heat cannot flow from hot to cold" },
              { id: "c", text: "Energy cannot be converted to work" },
              { id: "d", text: "Entropy must always increase" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clausius statement", statement: "Heat cannot spontaneously pass from a colder to a hotter body." },
            ],
            steps: [
              { reasoning: "Clausius's formulation forbids spontaneous cold → hot heat flow; work input (as in a refrigerator) makes it possible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Heat cannot spontaneously flow cold → hot",
            commonErrors: ["Reversing the direction — heat DOES flow spontaneously hot → cold."],
          },
        },
        {
          id: "physhl-u2-sl-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Kelvin statement of the second law says that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No cyclic process can convert heat entirely into work" },
              { id: "b", text: "Heat cannot flow from cold to hot" },
              { id: "c", text: "Entropy of the universe decreases" },
              { id: "d", text: "All engines are 100% efficient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Kelvin statement", statement: "It is impossible for a cyclic device to produce net work while exchanging heat with a single reservoir." },
            ],
            steps: [
              { reasoning: "Kelvin–Planck: a heat engine must reject some heat to a cold reservoir — complete conversion violates the second law.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** No cyclic process converts heat entirely to work",
            commonErrors: ["Choosing cold → hot — that is the Clausius statement."],
          },
        },
        {
          id: "physhl-u2-sl-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How does the second law of thermodynamics differ from the first law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First law conserves energy; second law gives the direction of natural processes" },
              { id: "b", text: "First law applies to engines; second law to refrigerators" },
              { id: "c", text: "First law is about heat; second law is about work" },
              { id: "d", text: "They are identical statements" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two laws", statement: "First law: energy conserved. Second law: entropy of isolated system never decreases — sets the arrow of time." },
            ],
            steps: [
              { reasoning: "The first law is energy bookkeeping ($\\Delta U = Q + W$); the second law restricts which processes occur spontaneously.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** First law conserves energy; second law sets direction",
            commonErrors: ["Saying the second law 'creates' energy loss — it degrades energy quality, not quantity."],
          },
        },
        {
          id: "physhl-u2-sl-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A refrigerator must have a work input (compressor) because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pumping heat cold → hot decreases the system's entropy, so work must increase total entropy elsewhere" },
              { id: "b", text: "The compressor generates the cold itself" },
              { id: "c", text: "Friction would otherwise stop it" },
              { id: "d", text: "Heat cannot flow at all without work" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Refrigerator and entropy", statement: "Cooling the interior decreases its entropy; work input ensures total entropy still increases." },
            ],
            steps: [
              { reasoning: "Removing heat from the cold interior lowers its entropy — allowed only if surroundings gain at least as much, supplied by the work input.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Work input keeps total entropy increasing",
            commonErrors: ["Saying the fridge 'creates cold' — it pumps heat using work."],
          },
        },
        {
          id: "physhl-u2-sl-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The third law of thermodynamics states that the entropy of a perfect crystal at absolute zero is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Infinite" },
              { id: "c", text: "Maximum" },
              { id: "d", text: "Equal to $C_V$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Third law", statement: "A perfect crystal at $T = 0$ K has zero entropy — the minimum possible." },
            ],
            steps: [
              { reasoning: "At absolute zero a perfect crystal has a single ground-state arrangement → $S = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Zero",
            commonErrors: ["Confusing with second law — third law concerns the absolute entropy minimum at 0 K."],
          },
        },
        {
          id: "physhl-u2-sl-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following processes is ALLOWED by the second law of thermodynamics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat flowing spontaneously from a hot cup of coffee to the cooler room" },
              { id: "b", text: "A cup of coffee spontaneously heating up from the room" },
              { id: "c", text: "An engine converting all absorbed heat into work" },
              { id: "d", text: "Ice spontaneously melting in a freezer below 0 °C" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spontaneous direction", statement: "Processes that increase total entropy occur spontaneously; entropy-decreasing ones need work input." },
            ],
            steps: [
              { reasoning: "Hot → cold heat flow increases total entropy, so it is spontaneous and allowed; the other options all decrease entropy without work input.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Hot coffee cooling in the room",
            commonErrors: ["Choosing the coffee heating — that would require entropy to decrease spontaneously."],
          },
        },
        {
          id: "physhl-u2-sl-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "1200 J of heat leaves a reservoir at a constant temperature of 400 K. Calculate the entropy change of the reservoir.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta S$ in J K$^{-1}$", answer: -3, tolerance: 0.01, unit: "J K$^{-1}$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Entropy change", statement: "$\\Delta S = Q/T$ with sign: heat leaving gives negative $\\Delta S$." },
            ],
            steps: [
              { reasoning: "Heat leaves the reservoir, so $Q = -1200$ J.", marks: 1, markCode: "M" },
              { reasoning: "Apply $\\Delta S = Q/T$ at $T = 400$ K.", working: "\\Delta S = -1200/400 = -3.0", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta S = -3.0$ J K$^{-1}$ — the reservoir becomes more ordered.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta S = -3.0$ J K$^{-1}$",
            commonErrors: ["Giving a positive sign — the reservoir loses heat so its entropy falls."],
          },
        },
        {
          id: "physhl-u2-sl-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A refrigerator uses a work input of 150 J per cycle to remove 600 J of heat from its cold interior and reject heat to the room at 300 K.",
          parts: [
            { label: "a", prompt: "Calculate the heat rejected to the room per cycle.", marks: 2 },
            { label: "b", prompt: "Calculate the entropy change of the room per cycle.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Heat rejected", answer: 750, unit: "J" },
              { label: "(b) $\\Delta S$ of room", answer: 2.5, tolerance: 0.01, unit: "J K$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy balance", statement: "For a refrigerator $Q_h = Q_c + W$; entropy change $\\Delta S = Q/T$." },
            ],
            steps: [
              { part: "a", reasoning: "Energy conservation over a cycle: heat rejected equals heat removed plus work input.", working: "Q_h = Q_c + W = 600 + 150", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$Q_h = 750$ J rejected to the room.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The room gains 750 J at 300 K.", working: "\\Delta S_{room} = +750/300 = +2.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\Delta S_{room} = +2.5$ J K$^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $750$ J. (b) $+2.5$ J K$^{-1}$.",
            commonErrors: ["Forgetting the work input is also dumped as heat — $Q_h = Q_c + W$, not $Q_c$ alone."],
          },
        },
        {
          id: "physhl-u2-sl-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "400 J of heat flows spontaneously from a body at 500 K to a body at 300 K. Calculate the total entropy change of the two bodies.",
          response: {
            type: "numeric",
            parts: [{ label: "Total $\\Delta S$", answer: 0.53, tolerance: 0.01, unit: "J K$^{-1}$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Entropy balance", statement: "$\\Delta S_{total} = -Q/T_h + Q/T_c$ for heat $Q$ transferred between two bodies." },
            ],
            steps: [
              { reasoning: "Entropy change of the hot body losing 400 J.", working: "\\Delta S_h = -400/500 = -0.80 J K^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Entropy change of the cold body gaining 400 J.", working: "\\Delta S_c = +400/300 = +1.33 J K^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Add the signed changes.", working: "\\Delta S_{total} = -0.80 + 1.33 = +0.53", marks: 1, markCode: "M" },
              { reasoning: "Positive total — consistent with the second law.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta S_{total} = +0.53$ J K$^{-1}$",
            commonErrors: ["Using the same temperature for both bodies or forgetting the sign on the hot body."],
          },
        },
        {
          id: "physhl-u2-sl-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A heat engine absorbs 1200 J of heat at 600 K and rejects 800 J of heat at 300 K each cycle.",
          parts: [
            { label: "a", prompt: "Calculate the entropy change of the hot reservoir per cycle.", marks: 2 },
            { label: "b", prompt: "Calculate the entropy change of the cold reservoir per cycle.", marks: 2 },
            { label: "c", prompt: "Calculate the total entropy change and state what it shows.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\Delta S$ hot reservoir", answer: -2, tolerance: 0.01, unit: "J K$^{-1}$" },
              { label: "(b) $\\Delta S$ cold reservoir", answer: 2.67, tolerance: 0.01, unit: "J K$^{-1}$" },
              { label: "(c) Total $\\Delta S$", answer: 0.67, tolerance: 0.01, unit: "J K$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reservoir entropy", statement: "$\\Delta S = \\pm Q/T$ — negative for heat leaving, positive for heat arriving." },
            ],
            steps: [
              { part: "a", reasoning: "Hot reservoir loses 1200 J at 600 K.", working: "\\Delta S_h = -1200/600 = -2.0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\Delta S_h = -2.0$ J K$^{-1}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cold reservoir gains 800 J at 300 K.", working: "\\Delta S_c = +800/300 = +2.67", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\Delta S_c = +2.67$ J K$^{-1}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total $\\Delta S = -2.0 + 2.67 = +0.67$ J K$^{-1}$ — positive, so the process satisfies the second law.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $-2.0$. (b) $+2.67$. (c) $+0.67$ J K$^{-1}$ — entropy of universe increases.",
            commonErrors: ["Using work instead of rejected heat for the cold reservoir."],
          },
        },
        {
          id: "physhl-u2-sl-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "0.50 kg of steam condenses back to water at 100 °C, releasing $1.13 \\times 10^6$ J of heat. Calculate the entropy change of the steam.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta S$ in J K$^{-1}$", answer: -3029.5, tolerance: 1, unit: "J K$^{-1}$" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Condensation entropy", statement: "$\\Delta S = Q/T$; heat released gives $Q < 0$ → negative $\\Delta S$." },
            ],
            steps: [
              { reasoning: "Condensation releases heat, so $Q = -1.13 \\times 10^6$ J.", marks: 1, markCode: "M" },
              { reasoning: "Apply $\\Delta S = Q/T$ at $T = 373$ K.", working: "\\Delta S = -1.13 \\times 10^6/373 = -3029.5", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta S = -3029.5$ J K$^{-1}$ — entropy decreases as gas becomes liquid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta S = -3.03 \\times 10^3$ J K$^{-1}$",
            commonErrors: ["Giving a positive sign — condensation reduces the entropy of the substance."],
          },
        },
        {
          id: "physhl-u2-sl-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student proposes a 'self-cooling' refrigerator that extracts heat from a box using only the thermal energy of the surrounding room — no work input, no fuel. Use the second law of thermodynamics to explain why this device cannot work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clausius + entropy", statement: "Heat cannot spontaneously flow cold → hot; total entropy of an isolated system never decreases." },
            ],
            steps: [
              { reasoning: "The device would move heat from the cold box to the warmer room without any work input.", marks: 1, markCode: "M" },
              { reasoning: "This is exactly what the Clausius statement forbids spontaneously.", marks: 1, markCode: "A" },
              { reasoning: "Entropy check: the box loses heat $Q_c$ at low $T$ and the room gains it at higher $T$.", marks: 1, markCode: "M" },
              { reasoning: "Entropy lost by the box $Q_c/T_c$ exceeds entropy gained by the room $Q_c/T_h$ because $T_c < T_h$.", marks: 1, markCode: "M" },
              { reasoning: "Total entropy of the isolated system would decrease — violating the second law.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the device is impossible; real refrigerators need work input which supplies the extra entropy increase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Impossible — it would decrease total entropy, violating the second law.",
            commonErrors: ["Saying it 'violates energy conservation' — energy is conserved; the entropy direction is what fails."],
          },
        },
      ],
    },
  ],
};
