import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "physhl-u5-lesson-5-1",
  code: "5-1",
  title: "The Photoelectric Effect and Einstein's Equation",
  goal: "I CAN apply Einstein's photoelectric equation $hf = \\phi + KE_{max}$, explain threshold frequency and work function, and solve problems involving photoemission.",
  standards: ["Paper 1", "Paper 2", "AHL E2"],
  vocabulary: [
    { term: "Photoelectric effect", definition: "Emission of electrons from a metal surface when light of sufficient frequency shines on it." },
    { term: "Work function ($\\phi$)", definition: "The minimum energy needed to eject an electron from the metal surface; $\\phi = hf_0$ where $f_0$ is threshold frequency." },
    { term: "Threshold frequency ($f_0$)", definition: "The minimum frequency of light that can cause photoemission; below it, no electrons are emitted regardless of intensity." },
    { term: "Einstein's photoelectric equation", definition: "$hf = \\phi + KE_{max}$ — photon energy = work function + maximum kinetic energy of emitted electron." },
    { term: "Photon", definition: "A quantum of electromagnetic radiation with energy $E = hf$; behaves as both particle and wave." },
    { term: "Stopping potential", definition: "The voltage needed to stop the most energetic photoelectrons; $eV_s = KE_{max}$." },
  ],
  concepts: [
    {
      id: "physhl-u5-photoelectric",
      title: "Einstein's photoelectric equation",
      skill: "Apply $hf = \\phi + KE_{max}$, determine threshold frequency and work function, and explain why classical wave theory fails.",
      lesson: {
        sections: [
          {
            heading: "The effect",
            body: "When light shines on a metal surface, electrons may be ejected — the **photoelectric effect**. Key observations that classical wave theory CANNOT explain: (1) emission only occurs above a **threshold frequency** $f_0$ regardless of intensity; (2) increasing intensity increases electron NUMBER but not their maximum KE; (3) emission is instantaneous.",
          },
          {
            heading: "Einstein's explanation",
            body: "Einstein proposed light consists of photons each with energy $E = hf$. A photon transfers ALL its energy to ONE electron. If $hf > \\phi$ (work function), the electron escapes with $KE_{max} = hf - \\phi$. This explains: threshold frequency $f_0 = \\phi/h$ (below it, photon energy insufficient); intensity affects photon NUMBER not energy per photon; instant emission (single photon-electron interaction).",
          },
          {
            heading: "The equation",
            body: "Einstein's photoelectric equation: $hf = \\phi + KE_{max}$. Rearranged: $KE_{max} = hf - \\phi = h(f - f_0)$. The work function $\\phi$ is a property of the metal — different metals have different $\\phi$ and $f_0$. Stopping potential $V_s$ relates to max KE: $eV_s = KE_{max}$.",
          },
        ],
        keyFormulas: [
          { name: "Einstein's equation", statement: "$hf = \\phi + KE_{max}$" },
          { name: "Threshold frequency", statement: "$f_0 = \\phi/h$" },
          { name: "Max KE", statement: "$KE_{max} = h(f - f_0)$" },
          { name: "Photon energy", statement: "$E = hf$" },
        ],
        workedExample: {
          problem: "Light of frequency $8.0\\times10^{14}$ Hz shines on a metal with work function $3.0\\times10^{-19}$ J. Calculate $KE_{max}$ of emitted electrons ($h = 6.63\\times10^{-34}$ J s).",
          solution: "$hf = 6.63\\times10^{-34} \\times 8.0\\times10^{14} = 5.30\\times10^{-19}$ J. $KE_{max} = hf - \\phi = 5.30\\times10^{-19} - 3.0\\times10^{-19} = 2.30\\times10^{-19}$ J.",
        },
      },
      questions: [
        {
          id: "physhl-u5-pe-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The photoelectric effect demonstrates that light behaves as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither particles nor waves" },
              { id: "b", text: "Only waves" },
              { id: "c", text: "Particles (photons)" },
              { id: "d", text: "Only rays" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photon model", statement: "Photoelectric effect → light has particle nature (photons with E=hf)." },
            ],
            steps: [
              { reasoning: "Threshold frequency and instant emission prove particle nature.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Particles — photons",
            commonErrors: ["Choosing waves — classical wave theory FAILS to explain photoelectric effect."],
          },
        },
        {
          id: "physhl-u5-pe-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why increasing the intensity of light below the threshold frequency does NOT cause photoemission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Threshold frequency", statement: "Each photon has energy hf < φ → insufficient to eject electron regardless of photon number." },
            ],
            steps: [
              { reasoning: "Intensity = number of photons per second, not energy per photon.", marks: 1, markCode: "M" },
              { reasoning: "Below f₀, each photon has hf < φ → can't eject electron.", marks: 1, markCode: "R" },
              { reasoning: "More photons = more attempts but same insufficient energy → no emission.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Photon energy hf < φ → no emission regardless of intensity.",
            commonErrors: ["Thinking more light = more energy per photon — intensity is photon NUMBER."],
          },
        },
        {
          id: "physhl-u5-pe-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A metal has threshold frequency $5.5\\times10^{14}$ Hz. Light of frequency $8.0\\times10^{14}$ Hz is incident. Calculate: (a) work function; (b) max KE of photoelectrons ($h = 6.63\\times10^{-34}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric", statement: "$\\phi = hf_0$; $KE_{max} = hf - \\phi$." },
            ],
            steps: [
              { reasoning: "(a) $\\phi = hf_0 = 6.63\\times10^{-34} \\times 5.5\\times10^{14} = 3.65\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "(b) $KE_{max} = h(f-f_0) = 6.63\\times10^{-34} \\times (8.0-5.5)\\times10^{14} = 1.66\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$\\phi = 3.65\\times10^{-19}$ J; $KE_{max} = 1.66\\times10^{-19}$ J.", marks: 1, markCode: "A" },
              { reasoning: "Check: hf = 5.30×10⁻¹⁹ = φ + KE = 3.65 + 1.66 = 5.31×10⁻¹⁹ J ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.65\\times10^{-19}$ J. (b) $1.66\\times10^{-19}$ J.",
            commonErrors: ["Using f instead of f−f₀ for KE — must subtract threshold."],
          },
        },
        {
          id: "physhl-u5-pe-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Ultraviolet light of wavelength 200 nm shines on a zinc surface (work function 4.3 eV).",
          parts: [
            { label: "a", prompt: "Calculate the photon energy in eV ($h = 4.14\\times10^{-15}$ eV s, $c = 3.0\\times10^8$ m/s).", marks: 2 },
            { label: "b", prompt: "Calculate the maximum KE of emitted electrons in eV.", marks: 2 },
            { label: "c", prompt: "Calculate the stopping potential needed.", marks: 2 },
            { label: "d", prompt: "Explain what happens if the light is replaced by 400 nm light.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric", statement: "$E = hf = hc/\\lambda$; $KE_{max} = hf - \\phi$; $eV_s = KE_{max}$." },
            ],
            steps: [
              { part: "a", reasoning: "$E = hc/\\lambda = (4.14\\times10^{-15} \\times 3.0\\times10^8)/(200\\times10^{-9}) = 6.21$ eV.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$E = 6.21$ eV.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$KE_{max} = 6.21 - 4.3 = 1.91$ eV.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$KE_{max} = 1.91$ eV.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$V_s = KE/e = 1.91$ V (since KE in eV = V numerically).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$V_s = 1.91$ V.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "400 nm photon energy = $hc/\\lambda = 3.11$ eV < φ = 4.3 eV.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Photon energy insufficient → NO photoemission regardless of intensity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6.21 eV. (b) 1.91 eV. (c) 1.91 V. (d) No emission — photon energy < work function.",
            commonErrors: ["Thinking longer wavelength = more energy — it's LESS energy."],
          },
        },
        {
          id: "physhl-u5-pe-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The work function $\\phi$ of a metal is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the energy of a single incident photon" },
              { id: "b", text: "the maximum kinetic energy of emitted electrons" },
              { id: "c", text: "the minimum frequency that causes emission" },
              { id: "d", text: "the minimum energy needed to eject an electron from its surface" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Work function", statement: "$\\phi$ is the minimum energy to remove an electron; $\\phi = hf_0$." },
            ],
            steps: [
              { reasoning: "The work function is a property of the metal — the minimum escape energy.", marks: 1, markCode: "M" },
              { reasoning: "Only choice (a) states this definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Minimum energy to eject an electron",
            commonErrors: ["Confusing the work function with photon energy or threshold frequency."],
          },
        },
        {
          id: "physhl-u5-pe-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For photoelectrons, the maximum kinetic energy $KE_{max}$ is related to the stopping potential $V_s$ by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$KE_{max} = V_s/e$" },
              { id: "b", text: "$KE_{max} = eV_s$" },
              { id: "c", text: "$KE_{max} = e/V_s$" },
              { id: "d", text: "$KE_{max} = hV_s$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stopping potential", statement: "The stopping potential does work $eV_s$ equal to $KE_{max}$." },
            ],
            steps: [
              { reasoning: "Stopping the fastest electrons requires energy $eV_s = KE_{max}$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $KE_{max} = eV_s$",
            commonErrors: ["Inverting the relation — charge times voltage gives energy."],
          },
        },
        {
          id: "physhl-u5-pe-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Light of frequency above the threshold illuminates a metal. Which change increases the maximum kinetic energy of the photoelectrons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "increasing the wavelength of the light" },
              { id: "b", text: "increasing the frequency of the light" },
              { id: "c", text: "decreasing the frequency of the light" },
              { id: "d", text: "increasing the intensity of the light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Max KE", statement: "$KE_{max} = h(f - f_0)$ — depends on frequency only." },
            ],
            steps: [
              { reasoning: "$KE_{max} = h(f - f_0)$ increases with frequency $f$.", marks: 1, markCode: "M" },
              { reasoning: "Intensity and wavelength changes do not raise $KE_{max}$; therefore choice (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Increasing the frequency",
            commonErrors: ["Choosing intensity — intensity changes electron number, not their energy."],
          },
        },
        {
          id: "physhl-u5-pe-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Einstein's photoelectric equation rearranged for the maximum kinetic energy of emitted electrons is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$KE_{max} = hf + \\phi$" },
              { id: "b", text: "$KE_{max} = \\phi - hf$" },
              { id: "c", text: "$KE_{max} = h(f - f_0)$" },
              { id: "d", text: "$KE_{max} = hf_0 - hf$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$hf = \\phi + KE_{max}$ with $\\phi = hf_0$ gives $KE_{max} = h(f - f_0)$." },
            ],
            steps: [
              { reasoning: "Substitute $\\phi = hf_0$ into $KE_{max} = hf - \\phi$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $KE_{max} = h(f - f_0)$",
            commonErrors: ["Adding the work function instead of subtracting it."],
          },
        },
        {
          id: "physhl-u5-pe-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In Einstein's model, when a photon of energy $hf$ strikes the metal surface of a photocell, the energy that is not used to overcome the work function becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the kinetic energy of the emitted electron" },
              { id: "b", text: "thermal energy shared by all electrons" },
              { id: "c", text: "stored in the metal lattice permanently" },
              { id: "d", text: "reflected as light of the same frequency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photon absorption", statement: "One photon transfers all its energy to one electron: $hf = \\phi + KE$." },
            ],
            steps: [
              { reasoning: "Energy conservation: $hf - \\phi = KE$ of the single emitted electron.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The kinetic energy of the emitted electron",
            commonErrors: ["Thinking the energy is shared — one photon energises one electron."],
          },
        },
        {
          id: "physhl-u5-pe-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Light of frequency $7.5\\times10^{14}$ Hz is incident on a metal with work function $3.0\\times10^{-19}$ J. Calculate the maximum kinetic energy of the emitted photoelectrons. ($h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.97e-19, tolerance: 3e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$KE_{max} = hf - \\phi$." },
            ],
            steps: [
              { reasoning: "Photon energy $hf = 6.63\\times10^{-34} \\times 7.5\\times10^{14} = 4.97\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$KE_{max} = hf - \\phi = 4.97\\times10^{-19} - 3.0\\times10^{-19} = 1.97\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$KE_{max} = 1.97\\times10^{-19}$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$KE_{max} = 1.97\\times10^{-19}$ J",
            commonErrors: ["Forgetting to subtract the work function from the photon energy."],
          },
        },
        {
          id: "physhl-u5-pe-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A metal surface has a work function of $4.2\\times10^{-19}$ J. Calculate its threshold frequency. ($h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6.33e14, tolerance: 3e13, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Threshold frequency", statement: "$f_0 = \\phi/h$." },
            ],
            steps: [
              { reasoning: "At threshold, $hf_0 = \\phi$ so $f_0 = \\phi/h$.", marks: 1, markCode: "M" },
              { reasoning: "$f_0 = 4.2\\times10^{-19}/6.63\\times10^{-34} = 6.3\\times10^{14}$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_0 = 6.3\\times10^{14}$ Hz",
            commonErrors: ["Multiplying by $h$ instead of dividing — $f_0 = \\phi/h$."],
          },
        },
        {
          id: "physhl-u5-pe-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Photoelectrons are emitted with a maximum kinetic energy of $4.8\\times10^{-19}$ J. Calculate the stopping potential required to stop them. ($e = 1.6\\times10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.0, tolerance: 0.05, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stopping potential", statement: "$eV_s = KE_{max}$." },
            ],
            steps: [
              { reasoning: "Equate electrical work done to kinetic energy: $eV_s = KE_{max}$.", marks: 1, markCode: "M" },
              { reasoning: "$V_s = KE_{max}/e = 4.8\\times10^{-19}/1.6\\times10^{-19} = 3.0$ V.", marks: 1, markCode: "M" },
              { reasoning: "$V_s = 3.0$ V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V_s = 3.0$ V",
            commonErrors: ["Multiplying by $e$ instead of dividing."],
          },
        },
        {
          id: "physhl-u5-pe-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the energy of a single photon of wavelength 400 nm. ($h = 6.63\\times10^{-34}$ J s, $c = 3.0\\times10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4.97e-19, tolerance: 5e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "$E = hf = hc/\\lambda$." },
            ],
            steps: [
              { reasoning: "Use $E = hc/\\lambda$ with $\\lambda = 400\\times10^{-9}$ m.", marks: 1, markCode: "M" },
              { reasoning: "$E = (6.63\\times10^{-34} \\times 3.0\\times10^8)/(400\\times10^{-9}) = 4.97\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$E = 4.97\\times10^{-19}$ J (about 3.1 eV).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 4.97\\times10^{-19}$ J",
            commonErrors: ["Using wavelength in nm without converting to metres."],
          },
        },
        {
          id: "physhl-u5-pe-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A metal has work function $3.6\\times10^{-19}$ J and is illuminated with light of frequency $1.0\\times10^{15}$ Hz. Calculate (a) the maximum kinetic energy of the photoelectrons; (b) the threshold frequency of the metal. ($h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.03e-19, tolerance: 5e-20, unit: "J" },
              { label: "b", answer: 5.43e14, tolerance: 3e13, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$KE_{max} = hf - \\phi$; $f_0 = \\phi/h$." },
            ],
            steps: [
              { reasoning: "(a) $hf = 6.63\\times10^{-34} \\times 1.0\\times10^{15} = 6.63\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$KE_{max} = 6.63\\times10^{-19} - 3.6\\times10^{-19} = 3.03\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "(b) $f_0 = \\phi/h = 3.6\\times10^{-19}/6.63\\times10^{-34} = 5.43\\times10^{14}$ Hz.", marks: 1, markCode: "M" },
              { reasoning: "$KE_{max} = 3.03\\times10^{-19}$ J; $f_0 = 5.43\\times10^{14}$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.03\\times10^{-19}$ J. (b) $5.43\\times10^{14}$ Hz.",
            commonErrors: ["Using $f$ instead of $\\phi/h$ for the threshold frequency."],
          },
        },
        {
          id: "physhl-u5-pe-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Describe how you would determine the work function of a metal experimentally using the photoelectric effect, including the measurements you would make and the graph you would plot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Experimental method", statement: "Measure stopping potential for several known frequencies; plot $eV_s$ against $f$; gradient $= h$, x-intercept $= f_0$, so $\\phi = hf_0$." },
            ],
            steps: [
              { reasoning: "Set up a photocell with the metal as cathode and vary the frequency of incident light using filters or a monochromator.", marks: 1, markCode: "M" },
              { reasoning: "For each frequency, measure the stopping potential $V_s$ needed to reduce the photocurrent to zero.", marks: 1, markCode: "M" },
              { reasoning: "Plot $eV_s$ (or $V_s$) against frequency $f$ — the graph is a straight line.", marks: 1, markCode: "M" },
              { reasoning: "The gradient of the line gives Planck's constant $h$ (or is used with known $h$).", marks: 1, markCode: "M" },
              { reasoning: "The x-intercept gives the threshold frequency $f_0$.", marks: 1, markCode: "M" },
              { reasoning: "Work function $\\phi = hf_0$ (or read from the y-intercept as $-\\phi$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vary frequency, measure $V_s$, plot $eV_s$ vs $f$; $\\phi = hf_0$ from intercept.",
            commonErrors: ["Varying intensity instead of frequency — intensity does not change $V_s$."],
          },
        },
        {
          id: "physhl-u5-pe-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Light of wavelength 250 nm is incident on a calcium surface with work function 4.6 eV ($h = 4.14\\times10^{-15}$ eV s, $c = 3.0\\times10^8$ m/s).",
          parts: [
            { label: "a", prompt: "Calculate the energy of each photon in eV.", marks: 2 },
            { label: "b", prompt: "Calculate the maximum kinetic energy of emitted electrons in eV.", marks: 2 },
            { label: "c", prompt: "Calculate the stopping potential needed to stop the fastest electrons.", marks: 2 },
            { label: "d", prompt: "State and explain what happens to the photocurrent if the light intensity is doubled.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$E = hc/\\lambda$; $KE_{max} = hf - \\phi$; $eV_s = KE_{max}$." },
            ],
            steps: [
              { part: "a", reasoning: "$E = hc/\\lambda = (4.14\\times10^{-15} \\times 3.0\\times10^8)/(250\\times10^{-9}) = 4.97$ eV.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$E = 4.97$ eV.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$KE_{max} = 4.97 - 4.6 = 0.37$ eV.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$KE_{max} = 0.37$ eV.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$V_s = KE_{max}/e = 0.37$ V (energy in eV equals potential in V numerically).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$V_s = 0.37$ V.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Doubling intensity doubles the number of photons per second, so twice as many electrons are emitted per second.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The photocurrent doubles but the maximum KE and stopping potential are unchanged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4.97 eV. (b) 0.37 eV. (c) 0.37 V. (d) Current doubles; KE and $V_s$ unchanged.",
            commonErrors: ["Expecting higher intensity to increase electron energy — it only increases electron number."],
          },
        },
      ],
    },
    {
      id: "physhl-u5-photon-evidence",
      title: "Experimental evidence for photons",
      skill: "Describe Millikan's photoelectric experiment, interpret I-V characteristics of photoemission, and relate stopping potential to photon energy.",
      lesson: {
        sections: [
          {
            heading: "Millikan's experiment",
            body: "Millikan measured the stopping potential $V_s$ needed to stop photoelectrons for different frequencies and metals. He found $eV_s$ is LINEAR in frequency $f$ with gradient $h$ — direct proof that light energy comes in discrete packets (photons) of energy $hf$, not continuous waves. The x-intercept gives threshold frequency $f_0$.",
          },
          {
            heading: "I–V characteristics",
            body: "The photoelectric current-voltage graph shows: current flows only above a threshold voltage (retarding potential); increasing light intensity increases saturation current (more electrons); changing frequency shifts the curve horizontally (changes stopping potential). The stopping potential depends ONLY on frequency, not intensity.",
          },
          {
            heading: "Particle-wave duality",
            body: "The photoelectric effect proves light has particle properties (photons). Diffraction and interference prove wave properties. Both are true — light exhibits **wave-particle duality**. This was the key insight leading to quantum mechanics. The photon energy $E = hf$ connects the wave picture (frequency) to the particle picture (energy quantum).",
          },
        ],
        keyFormulas: [
          { name: "Stopping potential", statement: "$eV_s = hf - \\phi = KE_{max}$" },
          { name: "Millikan's result", statement: "$eV_s$ linear in $f$, gradient = $h$" },
          { name: "Duality", statement: "Light: wave (diffraction) + particle (photoelectric)." },
        ],
        workedExample: {
          problem: "For a metal, stopping potential is 1.0 V at frequency $7.0\\times10^{14}$ Hz and 2.0 V at $9.0\\times10^{14}$ Hz. Find $h$ and $\\phi$ ($e = 1.6\\times10^{-19}$ C).",
          solution: "$eV_s = hf - \\phi$ → $e(2.0-1.0) = h(9.0-7.0)\\times10^{14}$ → $h = e/(2.0\\times10^{14}) = 1.6\\times10^{-19}/2.0\\times10^{14} = 8.0\\times10^{-34}$ J s (close to actual h).",
        },
      },
      questions: [
        {
          id: "physhl-u5-ev-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Millikan's experiment provided evidence for photons by showing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All metals have same threshold" },
              { id: "b", text: "$eV_s$ is linear in frequency with gradient $h$" },
              { id: "c", text: "Intensity affects electron energy" },
              { id: "d", text: "Light travels in straight lines" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Millikan", statement: "Linear $eV_s$ vs $f$ with gradient $h$ → discrete photon energies." },
            ],
            steps: [
              { reasoning: "Linear relation with gradient h proves photon model.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Linear $eV_s$ vs $f$, gradient $h$",
            commonErrors: ["Choosing intensity effect — intensity affects electron NUMBER not energy."],
          },
        },
        {
          id: "physhl-u5-ev-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a photoelectric experiment, increasing the light intensity (above threshold) causes:",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intensity effect", statement: "More photons → more electrons emitted → higher saturation current; KE unchanged." },
            ],
            steps: [
              { reasoning: "Intensity = more photons per second → more photoelectrons.", marks: 1, markCode: "M" },
              { reasoning: "Saturation current increases (more electrons).", marks: 1, markCode: "R" },
              { reasoning: "Stopping potential unchanged — depends on frequency not intensity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More electrons (higher current), same max KE.",
            commonErrors: ["Thinking KE increases — it depends on frequency only."],
          },
        },
        {
          id: "physhl-u5-ev-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Describe the evidence that light exhibits BOTH wave and particle properties, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wave-particle duality", statement: "Light shows wave behaviour (interference/diffraction) AND particle behaviour (photoelectric effect)." },
            ],
            steps: [
              { reasoning: "Wave: interference and diffraction patterns — Young's double slit, single-slit pattern.", marks: 1, markCode: "M" },
              { reasoning: "Particle: photoelectric effect — threshold frequency, instant emission, photon energy hf.", marks: 1, markCode: "M" },
              { reasoning: "Both needed — neither model alone explains all observations.", marks: 1, markCode: "R" },
              { reasoning: "This is wave-particle duality — fundamental quantum concept.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wave: interference/diffraction. Particle: photoelectric effect. Both = duality.",
            commonErrors: ["Saying 'light is only waves' or 'only particles' — it exhibits BOTH."],
          },
        },
        {
          id: "physhl-u5-ev-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "In Millikan's experiment, stopping potentials of 0.80 V and 1.60 V were measured for frequencies $6.0\\times10^{14}$ and $9.0\\times10^{14}$ Hz.",
          parts: [
            { label: "a", prompt: "Use $eV_s = hf - \\phi$ to set up two equations.", marks: 2 },
            { label: "b", prompt: "Calculate Planck's constant $h$ ($e = 1.6\\times10^{-19}$ C).", marks: 3 },
            { label: "c", prompt: "Calculate the threshold frequency $f_0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photoelectric equation", statement: "$eV_s = hf - \\phi$; solve simultaneous equations for h and φ." },
            ],
            steps: [
              { part: "a", reasoning: "$e(0.80) = h(6.0\\times10^{14}) - \\phi$ and $e(1.60) = h(9.0\\times10^{14}) - \\phi$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two equations with two unknowns.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract: $e(0.80) = h(3.0\\times10^{14})$ → $h = 1.6\\times10^{-19} \\times 0.80/(3.0\\times10^{14}) = 4.27\\times10^{-34}$ J s.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$h = 4.3\\times10^{-34}$ J s.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute back to verify.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "From eq1: $\\phi = hf - eV_s = 4.27\\times10^{-34} \\times 6.0\\times10^{14} - 1.28\\times10^{-19} = 2.56\\times10^{-19} - 1.28\\times10^{-19} = 1.28\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$f_0 = \\phi/h = 1.28\\times10^{-19}/4.27\\times10^{-34} = 3.0\\times10^{14}$ Hz.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$f_0 = 3.0\\times10^{14}$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two equations set up. (b) h = 4.3×10⁻³⁴ J s. (c) f₀ = 3.0×10¹⁴ Hz.",
            commonErrors: ["Subtraction order — subtract equations to eliminate φ."],
          },
        },
        {
          id: "physhl-u5-ev-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Millikan's photoelectric experiment, the quantity plotted against frequency $f$ was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the work function $\\phi$" },
              { id: "b", text: "$eV_s$ (the stopping-potential energy)" },
              { id: "c", text: "the photocurrent $I$" },
              { id: "d", text: "the light intensity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Millikan's method", statement: "Plot $eV_s$ against $f$; the gradient is $h$ and the x-intercept is $f_0$." },
            ],
            steps: [
              { reasoning: "Millikan measured stopping potentials at several known frequencies and plotted $eV_s$ versus $f$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $eV_s$ against frequency $f$",
            commonErrors: ["Plotting current — the photocurrent does not determine the photon energy."],
          },
        },
        {
          id: "physhl-u5-ev-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The x-intercept of the $eV_s$ versus $f$ graph in Millikan's experiment gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Planck's constant $h$" },
              { id: "b", text: "the threshold frequency $f_0$" },
              { id: "c", text: "the work function $\\phi$" },
              { id: "d", text: "the photon energy $hf$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Millikan's result", statement: "$eV_s = hf - \\phi$ is linear in $f$; x-intercept $= f_0 = \\phi/h$, gradient $= h$." },
            ],
            steps: [
              { reasoning: "Setting $eV_s = 0$ gives $f = \\phi/h = f_0$, which is where the line crosses the frequency axis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The threshold frequency $f_0$",
            commonErrors: ["Confusing the intercept with the gradient — the gradient gives $h$, not $f_0$."],
          },
        },
        {
          id: "physhl-u5-ev-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a given photocell and metal surface, the stopping potential depends on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the intensity of the incident light only" },
              { id: "b", text: "both the frequency and the intensity" },
              { id: "c", text: "the frequency of the incident light only" },
              { id: "d", text: "neither frequency nor intensity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stopping potential", statement: "$eV_s = hf - \\phi$ — depends on $f$ and $\\phi$, not intensity." },
            ],
            steps: [
              { reasoning: "$eV_s = hf - \\phi$ contains no intensity term.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Frequency of the incident light only",
            commonErrors: ["Thinking brighter light gives faster electrons — it gives more electrons, not more energetic ones."],
          },
        },
        {
          id: "physhl-u5-ev-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When the intensity of light above the threshold frequency is increased, the quantity that increases is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "maximum kinetic energy of the electrons" },
              { id: "b", text: "work function of the metal" },
              { id: "c", text: "stopping potential" },
              { id: "d", text: "saturation photocurrent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intensity effect", statement: "More photons per second → more photoelectrons per second → higher saturation current; $V_s$ unchanged." },
            ],
            steps: [
              { reasoning: "Intensity increases the photon rate, so more electrons are emitted per second.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The saturation photocurrent",
            commonErrors: ["Choosing stopping potential — $V_s$ is set by frequency, not intensity."],
          },
        },
        {
          id: "physhl-u5-ev-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Wave-particle duality of light means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "light shows wave behaviour in some experiments and particle behaviour in others" },
              { id: "b", text: "light is purely a wave in all circumstances" },
              { id: "c", text: "light cannot be described by physics" },
              { id: "d", text: "light is purely a particle in all circumstances" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Duality", statement: "Diffraction/interference → wave; photoelectric effect → particle. Both models are needed." },
            ],
            steps: [
              { reasoning: "Interference and diffraction require waves; the photoelectric effect requires photons.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Wave behaviour in some experiments, particle behaviour in others",
            commonErrors: ["Claiming light is 'only' waves or 'only' particles — duality requires both."],
          },
        },
        {
          id: "physhl-u5-ev-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Light of frequency $8.0\\times10^{14}$ Hz falls on a metal surface with work function $3.5\\times10^{-19}$ J. Calculate the maximum kinetic energy of the photoelectrons. ($h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.8e-19, tolerance: 5e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$KE_{max} = hf - \\phi$." },
            ],
            steps: [
              { reasoning: "Photon energy $hf = 6.63\\times10^{-34} \\times 8.0\\times10^{14} = 5.30\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$KE_{max} = 5.30\\times10^{-19} - 3.5\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$KE_{max} = 1.80\\times10^{-19}$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$KE_{max} = 1.80\\times10^{-19}$ J",
            commonErrors: ["Adding the work function instead of subtracting it."],
          },
        },
        {
          id: "physhl-u5-ev-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Stopping potentials of 0.60 V and 1.50 V are measured for light frequencies $6.5\\times10^{14}$ Hz and $9.0\\times10^{14}$ Hz. Use $eV_s = hf - \\phi$ to determine Planck's constant $h$. ($e = 1.6\\times10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5.76e-34, tolerance: 5e-35, unit: "J s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Millikan's method", statement: "Subtracting two $eV_s = hf - \\phi$ equations eliminates $\\phi$: $e\\Delta V_s = h\\Delta f$." },
            ],
            steps: [
              { reasoning: "Write $e(0.60) = h(6.5\\times10^{14}) - \\phi$ and $e(1.50) = h(9.0\\times10^{14}) - \\phi$.", marks: 1, markCode: "M" },
              { reasoning: "Subtract: $e(0.90) = h(2.5\\times10^{14})$.", marks: 1, markCode: "M" },
              { reasoning: "$h = (1.6\\times10^{-19} \\times 0.90)/(2.5\\times10^{14})$.", marks: 1, markCode: "M" },
              { reasoning: "$h = 5.76\\times10^{-34}$ J s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$h = 5.8\\times10^{-34}$ J s",
            commonErrors: ["Dividing by the wrong frequency difference — use $\\Delta f = 2.5\\times10^{14}$ Hz."],
          },
        },
        {
          id: "physhl-u5-ev-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Photoelectrons are emitted with a maximum kinetic energy of $5.0\\times10^{-19}$ J. Determine the stopping potential needed to stop them. ($e = 1.6\\times10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.13, tolerance: 0.05, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stopping potential", statement: "$eV_s = KE_{max}$." },
            ],
            steps: [
              { reasoning: "Equate the work done by the retarding field to the maximum kinetic energy: $eV_s = KE_{max}$.", marks: 1, markCode: "M" },
              { reasoning: "$V_s = 5.0\\times10^{-19}/1.6\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$V_s = 3.13$ V.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$V_s = 3.13$ V",
            commonErrors: ["Multiplying by $e$ instead of dividing."],
          },
        },
        {
          id: "physhl-u5-ev-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "For a certain metal surface, the stopping potential is 1.00 V when illuminated with light of frequency $8.0\\times10^{14}$ Hz. Calculate the work function of the metal. ($h = 6.63\\times10^{-34}$ J s, $e = 1.6\\times10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.7e-19, tolerance: 5e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$\\phi = hf - eV_s$." },
            ],
            steps: [
              { reasoning: "Photon energy $hf = 6.63\\times10^{-34} \\times 8.0\\times10^{14} = 5.30\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "Stopping energy $eV_s = 1.6\\times10^{-19} \\times 1.00 = 1.60\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$\\phi = hf - eV_s = 5.30\\times10^{-19} - 1.60\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\phi = 3.70\\times10^{-19}$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\phi = 3.70\\times10^{-19}$ J",
            commonErrors: ["Using $hf$ alone as the work function — must subtract $eV_s$."],
          },
        },
        {
          id: "physhl-u5-ev-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why, in the photoelectric effect, the stopping potential is independent of the light intensity while the saturation photocurrent is not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intensity vs frequency", statement: "Intensity sets the photon rate (number of electrons); frequency sets the photon energy (electron energy)." },
            ],
            steps: [
              { reasoning: "Intensity is the number of photons arriving per second.", marks: 1, markCode: "M" },
              { reasoning: "More photons per second → more photoelectrons per second → higher saturation current.", marks: 1, markCode: "M" },
              { reasoning: "Each photon's energy is $hf$, which does not change with intensity.", marks: 1, markCode: "M" },
              { reasoning: "Since $eV_s = hf - \\phi$, the stopping potential is unchanged by intensity.", marks: 1, markCode: "A" },
              { reasoning: "The fastest electrons have the same energy however bright the light.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intensity changes electron number (current) but not electron energy (stopping potential).",
            commonErrors: ["Saying intensity affects both — it affects only the current."],
          },
        },
        {
          id: "physhl-u5-ev-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Describe how Millikan's experiment provided evidence for the photon model of light, including the measurements made, the graph plotted and the conclusions drawn.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photon evidence", statement: "Linear $eV_s$ vs $f$ with gradient $h$ shows light energy is quantised in packets $hf$." },
            ],
            steps: [
              { reasoning: "Monochromatic light of known frequency is directed onto a clean metal cathode in a photocell.", marks: 1, markCode: "M" },
              { reasoning: "The retarding potential is varied until the photocurrent falls to zero — this is the stopping potential $V_s$.", marks: 1, markCode: "M" },
              { reasoning: "This is repeated for several different frequencies of light.", marks: 1, markCode: "M" },
              { reasoning: "A graph of $eV_s$ against $f$ is a straight line.", marks: 1, markCode: "M" },
              { reasoning: "The gradient equals Planck's constant $h$ and the x-intercept gives $f_0$, so $\\phi = hf_0$.", marks: 1, markCode: "A" },
              { reasoning: "A linear relation between light frequency and electron energy proves energy arrives in discrete quanta — photons — not continuous waves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Measure $V_s$ vs $f$; linear graph with gradient $h$ proves photon energy $hf$.",
            commonErrors: ["Omitting the stopping-potential measurement or the linear-graph conclusion."],
          },
        },
        {
          id: "physhl-u5-ev-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "In a Millikan-type experiment, stopping potentials of 0.50 V and 1.30 V are recorded for frequencies $6.0\\times10^{14}$ Hz and $9.0\\times10^{14}$ Hz.",
          parts: [
            { label: "a", prompt: "Write down the two equations for $eV_s = hf - \\phi$.", marks: 2 },
            { label: "b", prompt: "Calculate Planck's constant $h$. ($e = 1.6\\times10^{-19}$ C)", marks: 2 },
            { label: "c", prompt: "Calculate the work function $\\phi$ and the threshold frequency $f_0$ of the metal.", marks: 2 },
            { label: "d", prompt: "Calculate the threshold wavelength and state what it means physically.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$eV_s = hf - \\phi$; eliminate $\\phi$ to find $h$, then $\\phi$, $f_0$ and $\\lambda_0 = c/f_0$." },
            ],
            steps: [
              { part: "a", reasoning: "$e(0.50) = h(6.0\\times10^{14}) - \\phi$ and $e(1.30) = h(9.0\\times10^{14}) - \\phi$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two simultaneous equations in the unknowns $h$ and $\\phi$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtracting: $e(0.80) = h(3.0\\times10^{14})$ so $h = 1.6\\times10^{-19} \\times 0.80/(3.0\\times10^{14})$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$h = 4.27\\times10^{-34}$ J s.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\phi = hf - eV_s = 4.27\\times10^{-34} \\times 6.0\\times10^{14} - 1.6\\times10^{-19} \\times 0.50 = 2.56\\times10^{-19} - 0.80\\times10^{-19} = 1.76\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$f_0 = \\phi/h = 1.76\\times10^{-19}/4.27\\times10^{-34} = 4.1\\times10^{14}$ Hz.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\lambda_0 = c/f_0 = 3.0\\times10^8/4.1\\times10^{14} = 7.3\\times10^{-7}$ m $= 730$ nm.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Below this wavelength (above this frequency) photons have enough energy to eject electrons; longer wavelengths cannot cause photoemission.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two equations. (b) $h = 4.3\\times10^{-34}$ J s. (c) $\\phi = 1.76\\times10^{-19}$ J, $f_0 = 4.1\\times10^{14}$ Hz. (d) $\\lambda_0 \\approx 730$ nm — minimum photon wavelength for emission.",
            commonErrors: ["Forgetting to convert $eV_s$ to joules before comparing with $hf$."],
          },
        },
      ],
    },
  ],
};
