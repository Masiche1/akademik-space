import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "physhl-u5-lesson-5-3",
  code: "5-3",
  title: "Atomic Energy Levels, Spectra and Lasers",
  goal: "I CAN explain atomic energy levels and electron transitions, interpret emission and absorption spectra, and describe the principles of laser operation.",
  standards: ["Paper 1", "Paper 2", "AHL E2"],
  vocabulary: [
    { term: "Energy level", definition: "A discrete allowed energy state of an electron in an atom; electrons can only occupy these levels, not between them." },
    { term: "Emission spectrum", definition: "The pattern of specific wavelengths emitted when electrons transition from higher to lower energy levels — bright lines on dark background." },
    { term: "Absorption spectrum", definition: "The pattern of specific wavelengths absorbed when electrons transition from lower to higher levels — dark lines on continuous spectrum." },
    { term: "Transition", definition: "The movement of an electron between energy levels, accompanied by emission or absorption of a photon with $E = hf = \\Delta E$." },
    { term: "Laser", definition: "Light Amplification by Stimulated Emission of Radiation — produces coherent, monochromatic, collimated light." },
    { term: "Stimulated emission", definition: "An incoming photon triggers an excited electron to drop to a lower level, emitting an identical photon — basis of laser action." },
  ],
  concepts: [
    {
      id: "physhl-u5-energy-levels",
      title: "Energy levels and spectra",
      skill: "Explain how electron transitions produce emission and absorption spectra, calculate photon energies from transitions, and identify elements from spectral lines.",
      lesson: {
        sections: [
          {
            heading: "Discrete energy levels",
            body: "Electrons in atoms occupy discrete energy levels — they cannot exist between levels. When an electron drops from a higher level $E_2$ to a lower level $E_1$, it emits a photon with energy $hf = E_2 - E_1$. When it absorbs a photon of exactly the right energy, it jumps UP to a higher level. The energy difference determines the photon frequency/wavelength.",
          },
          {
            heading: "Emission spectra",
            body: "When atoms are excited (by heating or electric discharge), electrons jump to higher levels then cascade down — emitting photons of specific wavelengths. The result is a **line spectrum**: bright lines on dark background, unique to each element. Hydrogen shows lines at 656 nm (red), 486 nm (blue-green), 434 nm (violet) — the Balmer series.",
          },
          {
            heading: "Absorption spectra",
            body: "When white light passes through a cool gas, electrons absorb photons of specific energies matching transitions from their current level to higher levels. The result is **dark lines** on the continuous spectrum at exactly the same wavelengths as the emission lines — proving energy levels are discrete. This is how astronomers identify elements in stars.",
          },
        ],
        keyFormulas: [
          { name: "Transition energy", statement: "$hf = E_2 - E_1 = \\Delta E$" },
          { name: "Emission", statement: "Electron drops → emits photon $E = hf$" },
          { name: "Absorption", statement: "Electron absorbs photon → jumps up $E = hf$" },
        ],
        workedExample: {
          problem: "An electron in hydrogen drops from $n=3$ to $n=2$. The energy difference is $1.89\\times10^{-19}$ J. Calculate the photon wavelength ($h = 6.63\\times10^{-34}$, $c = 3.0\\times10^8$).",
          solution: "$f = \\Delta E/h = 1.89\\times10^{-19}/6.63\\times10^{-34} = 2.85\\times10^{14}$ Hz. $\\lambda = c/f = 3.0\\times10^8/2.85\\times10^{14} = 6.56\\times10^{-7}$ m = 656 nm (red Balmer line).",
        },
      },
      questions: [
        {
          id: "physhl-u5-el-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An emission spectrum consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bright lines on a dark background" },
              { id: "b", text: "Dark lines on a continuous spectrum" },
              { id: "c", text: "Random colours" },
              { id: "d", text: "A continuous rainbow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Emission spectrum", statement: "Bright lines from electron transitions down — unique to element." },
            ],
            steps: [
              { reasoning: "Emission = photons emitted at specific wavelengths → bright lines.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Bright lines on dark background",
            commonErrors: ["Confusing with absorption — emission is bright lines, absorption is dark lines."],
          },
        },
        {
          id: "physhl-u5-el-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why atomic spectra consist of discrete lines rather than a continuous spectrum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy levels", statement: "Electrons occupy discrete levels → only specific energy differences → specific photon frequencies." },
            ],
            steps: [
              { reasoning: "Electrons can only be at discrete energy levels.", marks: 1, markCode: "R" },
              { reasoning: "Transitions between levels have fixed energy differences $\\Delta E$.", marks: 1, markCode: "M" },
              { reasoning: "Each $\\Delta E$ → one photon frequency $f = \\Delta E/h$ → discrete lines.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Discrete energy levels → fixed transition energies → line spectrum.",
            commonErrors: ["Saying 'random emission' — transitions are quantised."],
          },
        },
        {
          id: "physhl-u5-el-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An absorption spectrum of a gas shows dark lines at the SAME wavelengths as the emission spectrum of the same element. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Kirchhoff's laws", statement: "Emission and absorption occur at same wavelengths — energy levels are the same." },
            ],
            steps: [
              { reasoning: "Emission: electrons drop from high to low levels → emit photons.", marks: 1, markCode: "M" },
              { reasoning: "Absorption: electrons absorb photons to jump from low to high levels.", marks: 1, markCode: "M" },
              { reasoning: "Same energy levels → same energy differences → same wavelengths.", marks: 1, markCode: "R" },
              { reasoning: "This proves energy levels are intrinsic to the element.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same energy levels → same transition energies → same wavelengths.",
            commonErrors: ["Thinking they're unrelated — Kirchhoff's laws connect them."],
          },
        },
        {
          id: "physhl-u5-el-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Starlight passing through a cool gas cloud shows absorption lines. Analysis reveals lines at 656 nm and 486 nm.",
          parts: [
            { label: "a", prompt: "Explain what causes the absorption lines.", marks: 2 },
            { label: "b", prompt: "Identify the element and explain how you know.", marks: 2 },
            { label: "c", prompt: "Calculate the energy of a 656 nm photon ($h = 6.63\\times10^{-34}$, $c = 3.0\\times10^8$).", marks: 2 },
            { label: "d", prompt: "Explain how astronomers use spectra to determine stellar composition.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spectroscopy", statement: "Absorption lines = element fingerprint; wavelengths identify element and conditions." },
            ],
            steps: [
              { part: "a", reasoning: "Electrons in gas absorb photons at specific energies → dark lines.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Absorbed photons removed from continuous starlight spectrum.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "656 nm and 486 nm are hydrogen Balmer lines → element is hydrogen.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each element has unique spectral fingerprint.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$E = hc/\\lambda = 6.63\\times10^{-34} \\times 3.0\\times10^8/(656\\times10^{-9}) = 3.03\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$E = 3.0\\times10^{-19}$ J = 1.89 eV.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compare observed lines to known element spectra.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Line positions give composition; line widths/shift give temperature/motion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Electron absorption. (b) Hydrogen (Balmer lines). (c) 3.0×10⁻¹⁹ J. (d) Compare to reference spectra.",
            commonErrors: ["Not recognising Balmer lines as hydrogen fingerprint."],
          },
        },
        {
          id: "physhl-u5-el-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When an electron makes a transition from a higher to a lower energy level in an atom, it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "emits a photon with $E = hf = \\Delta E$" },
              { id: "b", text: "remains at the same energy level" },
              { id: "c", text: "emits a continuous spectrum of light" },
              { id: "d", text: "absorbs a photon of energy $hf$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transition energy", statement: "Energy lost $\\Delta E$ is carried away by a photon: $hf = \\Delta E$." },
            ],
            steps: [
              { reasoning: "Dropping to a lower level releases energy $\\Delta E$, emitted as one photon of energy $hf$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Emits a photon with $E = hf = \\Delta E$",
            commonErrors: ["Choosing absorption — absorption happens on upward transitions."],
          },
        },
        {
          id: "physhl-u5-el-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An electron in an atom can absorb a photon only if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the photon energy exactly equals the gap between two allowed levels" },
              { id: "b", text: "the photon is red" },
              { id: "c", text: "the light intensity is very high" },
              { id: "d", text: "the photon is any colour of visible light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quantised absorption", statement: "Energy levels are discrete — only photons with $hf = \\Delta E$ are absorbed." },
            ],
            steps: [
              { reasoning: "The electron can only occupy discrete levels, so the photon energy must match a level gap exactly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Photon energy exactly equals a level gap",
            commonErrors: ["Thinking any photon can be absorbed — only resonant energies are."],
          },
        },
        {
          id: "physhl-u5-el-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Balmer series of the hydrogen spectrum consists of transitions:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ending at energy level $n = 1$" },
              { id: "b", text: "ending at energy level $n = 2$" },
              { id: "c", text: "starting from $n = \\infty$ only" },
              { id: "d", text: "between any two levels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balmer series", statement: "Transitions to $n = 2$ give visible lines (656, 486, 434 nm)." },
            ],
            steps: [
              { reasoning: "The Balmer series is defined by the lower level $n = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Transitions ending at $n = 2$",
            commonErrors: ["Confusing Balmer (visible) with Lyman (UV, to $n=1$)."],
          },
        },
        {
          id: "physhl-u5-el-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Each element produces a unique line spectrum because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "its energy levels, and hence its transition energies, are unique" },
              { id: "b", text: "its electrons move randomly" },
              { id: "c", text: "its atoms all have different masses" },
              { id: "d", text: "all elements share the same energy levels" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spectral fingerprint", statement: "Photon wavelength is set by $\\Delta E = hf$, and $\\Delta E$ values are unique to each element." },
            ],
            steps: [
              { reasoning: "Different nuclear charge and electron configuration give different level spacings.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Unique energy levels give unique transition energies",
            commonErrors: ["Saying spectra are random — line positions are deterministic."],
          },
        },
        {
          id: "physhl-u5-el-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A bright line emission spectrum is produced when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a metal is heated to a very high temperature" },
              { id: "b", text: "white light passes through a cold dense gas" },
              { id: "c", text: "atoms collide with each other" },
              { id: "d", text: "excited electrons cascade down through discrete energy levels" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emission spectrum", statement: "Excitation lifts electrons up; each downward transition emits a photon of specific wavelength." },
            ],
            steps: [
              { reasoning: "Each downward transition emits $hf = \\Delta E$ — a discrete line.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Excited electrons cascade down through discrete levels",
            commonErrors: ["Confusing with absorption — a hot dilute gas emits, a cool gas absorbs."],
          },
        },
        {
          id: "physhl-u5-el-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "An electron transition in an atom releases energy $\\Delta E = 2.5\\times10^{-19}$ J. Calculate the frequency and the wavelength of the emitted photon. ($h = 6.63\\times10^{-34}$ J s, $c = 3.0\\times10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.77e14, tolerance: 5e12, unit: "Hz" },
              { label: "b", answer: 7.95e-7, tolerance: 1e-7, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transition energy", statement: "$hf = \\Delta E$; $\\lambda = c/f$." },
            ],
            steps: [
              { reasoning: "(a) $f = \\Delta E/h = 2.5\\times10^{-19}/6.63\\times10^{-34}$.", marks: 1, markCode: "M" },
              { reasoning: "$f = 3.77\\times10^{14}$ Hz.", marks: 1, markCode: "A" },
              { reasoning: "(b) $\\lambda = c/f = 3.0\\times10^8/3.77\\times10^{14}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 7.95\\times10^{-7}$ m $= 795$ nm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f = 3.77\\times10^{14}$ Hz. (b) $\\lambda = 7.95\\times10^{-7}$ m.",
            commonErrors: ["Using $\\Delta E$ in eV without converting when using $h$ in J s."],
          },
        },
        {
          id: "physhl-u5-el-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A photon of wavelength 500 nm is absorbed by an atom, causing an electron to move to a higher level. Calculate the energy gap between the two levels involved. ($h = 6.63\\times10^{-34}$ J s, $c = 3.0\\times10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.98e-19, tolerance: 5e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "$\\Delta E = hf = hc/\\lambda$." },
            ],
            steps: [
              { reasoning: "The absorbed photon energy equals the level gap: $\\Delta E = hc/\\lambda$.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta E = (6.63\\times10^{-34} \\times 3.0\\times10^8)/(500\\times10^{-9})$.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta E = 3.98\\times10^{-19}$ J ($\\approx 2.5$ eV).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta E = 3.98\\times10^{-19}$ J",
            commonErrors: ["Using the wavelength in nm directly — convert to metres first."],
          },
        },
        {
          id: "physhl-u5-el-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A photon of wavelength 450 nm is emitted by an atom. Calculate its energy in joules and in electronvolts. ($h = 6.63\\times10^{-34}$ J s, $c = 3.0\\times10^8$ m/s, $e = 1.6\\times10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4.42e-19, tolerance: 5e-20, unit: "J" },
              { label: "b", answer: 2.76, tolerance: 0.05, unit: "eV" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "$E = hc/\\lambda$; $1\\ \\text{eV} = 1.6\\times10^{-19}$ J." },
            ],
            steps: [
              { reasoning: "(a) $E = hc/\\lambda = (6.63\\times10^{-34} \\times 3.0\\times10^8)/(450\\times10^{-9})$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 4.42\\times10^{-19}$ J.", marks: 1, markCode: "A" },
              { reasoning: "(b) $E = 4.42\\times10^{-19}/1.6\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 2.76$ eV.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4.42\\times10^{-19}$ J. (b) $2.76$ eV.",
            commonErrors: ["Dividing by $e$ in the wrong direction when converting J to eV."],
          },
        },
        {
          id: "physhl-u5-el-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Two transitions in an atom have energy gaps $\\Delta E_A = 3.0\\times10^{-19}$ J and $\\Delta E_B = 1.5\\times10^{-19}$ J. Calculate the ratio of the frequency of photon A to that of photon B.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.0, tolerance: 0.05, unit: "" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transition energy", statement: "$f = \\Delta E/h$ — frequency is proportional to energy gap." },
            ],
            steps: [
              { reasoning: "$f_A/f_B = \\Delta E_A/\\Delta E_B$ since $h$ cancels.", marks: 1, markCode: "M" },
              { reasoning: "$f_A/f_B = 3.0\\times10^{-19}/1.5\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$f_A/f_B = 2.0$ — photon A has twice the frequency (half the wavelength).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_A/f_B = 2.0$",
            commonErrors: ["Inverting the ratio — larger energy gap means higher frequency."],
          },
        },
        {
          id: "physhl-u5-el-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe how the emission line spectrum of an element is produced, from the excitation of the atoms to the observed spectral lines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emission spectrum", statement: "Excitation → upward transitions; spontaneous downward transitions emit photons of discrete wavelengths." },
            ],
            steps: [
              { reasoning: "Atoms are excited by heating, electric discharge or collision, raising electrons to higher levels.", marks: 1, markCode: "M" },
              { reasoning: "Excited electrons are unstable and spontaneously drop back to lower levels.", marks: 1, markCode: "M" },
              { reasoning: "Each drop from level $E_2$ to $E_1$ emits a photon with $hf = E_2 - E_1$.", marks: 1, markCode: "M" },
              { reasoning: "Because level spacings are discrete, only certain wavelengths are emitted.", marks: 1, markCode: "M" },
              { reasoning: "The result is a set of bright lines unique to the element — its emission spectrum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Excite atoms → electrons drop between discrete levels → photons of specific wavelengths → line spectrum.",
            commonErrors: ["Omitting excitation — without it, electrons stay in the ground state and emit nothing."],
          },
        },
        {
          id: "physhl-u5-el-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain how astronomers use absorption spectra to determine both the composition and the temperature of stars.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stellar spectroscopy", statement: "Absorption line positions fingerprint elements; line strengths and widths depend on temperature and motion." },
            ],
            steps: [
              { reasoning: "Starlight (continuous spectrum) passes through the cooler outer atmosphere of the star.", marks: 1, markCode: "M" },
              { reasoning: "Gas atoms absorb photons at energies matching their discrete level gaps, producing dark lines.", marks: 1, markCode: "M" },
              { reasoning: "Comparing line wavelengths with laboratory spectra identifies which elements are present.", marks: 1, markCode: "M" },
              { reasoning: "The number of atoms at each level — and hence line strength — depends on temperature.", marks: 1, markCode: "M" },
              { reasoning: "Doppler shift of the lines reveals the star's radial velocity; line broadening reveals rotation and pressure.", marks: 1, markCode: "M" },
              { reasoning: "Together these give composition, temperature, motion and magnetic field of the star.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dark line positions identify elements; line strengths/widths give temperature and motion.",
            commonErrors: ["Saying composition only — temperature information comes from line strengths."],
          },
        },
        {
          id: "physhl-u5-el-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The energy levels of hydrogen are $E_1 = -13.6$ eV, $E_2 = -3.4$ eV, $E_3 = -1.51$ eV and $E_4 = -0.85$ eV ($1$ eV $= 1.6\\times10^{-19}$ J, $h = 6.63\\times10^{-34}$ J s, $c = 3.0\\times10^8$ m/s).",
          parts: [
            { label: "a", prompt: "Calculate the energy, in joules, of the photon emitted when an electron drops from $n = 4$ to $n = 2$.", marks: 2 },
            { label: "b", prompt: "Calculate the wavelength of this photon.", marks: 2 },
            { label: "c", prompt: "Which transition — $n = 4 \\to n = 1$ or $n = 4 \\to n = 2$ — gives the shorter wavelength, and what is that wavelength?", marks: 2 },
            { label: "d", prompt: "Explain why the hydrogen spectrum consists of discrete lines rather than a continuous spectrum.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transition energy", statement: "$hf = \\Delta E = E_{high} - E_{low}$; larger $\\Delta E$ → shorter $\\lambda$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\Delta E = E_4 - E_2 = -0.85 - (-3.4) = 2.55$ eV.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\Delta E = 2.55 \\times 1.6\\times10^{-19} = 4.08\\times10^{-19}$ J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\lambda = hc/\\Delta E = (6.63\\times10^{-34} \\times 3.0\\times10^8)/(4.08\\times10^{-19})$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\lambda = 4.87\\times10^{-7}$ m $= 487$ nm (the blue-green Balmer line).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$n = 4 \\to n = 1$ has $\\Delta E = 12.75$ eV, much larger than 2.55 eV → shorter wavelength.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\lambda = hc/(2.04\\times10^{-18}) \\approx 9.7\\times10^{-8}$ m $= 97$ nm (ultraviolet).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Electrons occupy only discrete levels, so transition energies $\\Delta E$ take only specific values.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Each $\\Delta E$ gives one photon frequency $f = \\Delta E/h$, producing lines not a continuum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4.08\\times10^{-19}$ J. (b) 487 nm. (c) $n=4 \\to n=1$, about 97 nm. (d) Discrete levels → discrete $\\Delta E$ → line spectrum.",
            commonErrors: ["Subtracting energies with wrong sign — use $E_{high} - E_{low}$ with care for negative values."],
          },
        },
      ],
    },
    {
      id: "physhl-u5-lasers",
      title: "Laser principles",
      skill: "Explain stimulated emission, population inversion and laser cavity, describe laser properties (coherence, monochromaticity, collimation), and apply laser concepts.",
      lesson: {
        sections: [
          {
            heading: "Stimulated emission",
            body: "In normal emission, an excited electron drops spontaneously emitting a random photon. In **stimulated emission**, an incoming photon of exactly the right energy triggers the electron to drop, emitting an IDENTICAL photon — same frequency, phase, direction, and polarisation. This is the key to laser action: one photon becomes two identical photons.",
          },
          {
            heading: "Population inversion and laser cavity",
            body: "For laser action, more electrons must be in the excited state than the ground state — **population inversion** (normally opposite). This is achieved by 'pumping' energy in. The **laser cavity** has two mirrors: one fully reflective, one partially reflective. Photons bounce back and forth, stimulating more emission; some escape through the partial mirror as the laser beam.",
          },
          {
            heading: "Laser properties",
            body: "Laser light is: **coherent** (waves in phase), **monochromatic** (single wavelength), and **collimated** (parallel rays, doesn't spread). These properties make lasers useful for: precision cutting/welding, fibre-optic communications, barcode scanning, medical surgery, holography, and scientific measurements.",
          },
        ],
        keyFormulas: [
          { name: "Stimulated emission", statement: "Photon triggers identical photon emission — $E = hf$ same." },
          { name: "Population inversion", statement: "More electrons excited than ground — required for laser." },
          { name: "Laser properties", statement: "Coherent + monochromatic + collimated." },
        ],
        workedExample: {
          problem: "Explain why lasers produce coherent light while ordinary light sources do not.",
          solution: "Stimulated emission produces photons identical in phase, frequency and direction. Ordinary emission is spontaneous — random phases and directions → incoherent.",
        },
      },
      questions: [
        {
          id: "physhl-u5-laser-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Laser light is described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random phase" },
              { id: "b", text: "Coherent, monochromatic and collimated" },
              { id: "c", text: "Incoherent and spread out" },
              { id: "d", text: "Multiple wavelengths" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Laser properties", statement: "Coherent (in phase), monochromatic (one λ), collimated (parallel)." },
            ],
            steps: [
              { reasoning: "Stimulated emission → identical photons → coherent, mono, collimated.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Coherent, monochromatic, collimated",
            commonErrors: ["Thinking laser = just bright light — it's specifically coherent light."],
          },
        },
        {
          id: "physhl-u5-laser-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between spontaneous and stimulated emission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Emission types", statement: "Spontaneous: random photon; Stimulated: identical photon triggered by incoming photon." },
            ],
            steps: [
              { reasoning: "Spontaneous: excited electron drops randomly — random direction, phase, timing.", marks: 1, markCode: "M" },
              { reasoning: "Stimulated: incoming photon triggers identical photon — same everything.", marks: 1, markCode: "M" },
              { reasoning: "Stimulated emission amplifies light coherently → laser action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spontaneous = random photon; Stimulated = identical photon (coherent amplification).",
            commonErrors: ["Thinking they're the same — stimulated produces IDENTICAL photons."],
          },
        },
        {
          id: "physhl-u5-laser-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why population inversion is necessary for laser operation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Population inversion", statement: "Normally more electrons in ground state → absorption dominates; inversion → stimulated emission dominates." },
            ],
            steps: [
              { reasoning: "Normally Boltzmann distribution → more electrons in lower energy levels.", marks: 1, markCode: "R" },
              { reasoning: "More ground-state electrons → they absorb photons → net absorption, not emission.", marks: 1, markCode: "M" },
              { reasoning: "Population inversion (more excited) → stimulated emission exceeds absorption → net light amplification.", marks: 1, markCode: "R" },
              { reasoning: "This is achieved by 'pumping' energy into the system.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inversion → stimulated emission > absorption → net amplification.",
            commonErrors: ["Not realising normal populations favour absorption — inversion reverses this."],
          },
        },
        {
          id: "physhl-u5-laser-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A ruby laser uses chromium ions in an aluminium oxide crystal as the gain medium.",
          parts: [
            { label: "a", prompt: "Explain the role of the flash lamp (pumping).", marks: 2 },
            { label: "b", prompt: "Describe how the laser cavity produces a beam.", marks: 3 },
            { label: "c", prompt: "State three properties of laser light and one application for each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Laser operation", statement: "Pump → population inversion → stimulated emission in cavity → coherent beam out." },
            ],
            steps: [
              { part: "a", reasoning: "Flash lamp provides energy to excite Cr³⁺ ions to higher levels.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Creates population inversion needed for laser action.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Two mirrors: one fully reflective, one partially reflective.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Photons bounce back and forth, stimulating more identical photons.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Some escape through partial mirror → laser beam.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Coherent → holography/interferometry.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Monochromatic → spectroscopy/communications.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collimated → cutting/welding/distance measurement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Pumping creates inversion. (b) Cavity amplifies via mirrors. (c) Coherent→holography, mono→spectroscopy, collimated→cutting.",
            commonErrors: ["Not explaining pumping — it's essential for population inversion."],
          },
        },
        {
          id: "physhl-u5-laser-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In stimulated emission, the photon emitted by the atom is identical to the stimulating photon in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "frequency, phase, direction and polarisation" },
              { id: "b", text: "frequency only" },
              { id: "c", text: "energy only" },
              { id: "d", text: "direction only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stimulated emission", statement: "The emitted photon is a clone of the incident photon in every respect." },
            ],
            steps: [
              { reasoning: "Stimulated emission produces a photon identical in frequency, phase, direction and polarisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Frequency, phase, direction and polarisation",
            commonErrors: ["Thinking only the energy matches — phase and direction also match."],
          },
        },
        {
          id: "physhl-u5-laser-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Population inversion in a laser gain medium means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "more atoms are in the excited state than in the ground state" },
              { id: "b", text: "all atoms are in the ground state" },
              { id: "c", text: "equal numbers of atoms are in all states" },
              { id: "d", text: "no atoms are excited" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Population inversion", statement: "Inversion of the normal population — more excited than ground-state atoms." },
            ],
            steps: [
              { reasoning: "Normally the ground state is most populated; inversion reverses this.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** More atoms excited than in the ground state",
            commonErrors: ["Thinking inversion means equal populations — it means reversed populations."],
          },
        },
        {
          id: "physhl-u5-laser-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The two mirrors at the ends of a laser cavity are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "one transparent and one opaque" },
              { id: "b", text: "one fully reflective and one partially reflective" },
              { id: "c", text: "both partially reflective" },
              { id: "d", text: "both fully reflective" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Laser cavity", statement: "Full mirror returns photons for amplification; partial mirror lets the beam escape." },
            ],
            steps: [
              { reasoning: "The fully reflective mirror traps photons for repeated passes; the partial mirror transmits the output beam.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** One fully reflective, one partially reflective",
            commonErrors: ["Thinking both mirrors are identical — only one leaks the beam."],
          },
        },
        {
          id: "physhl-u5-laser-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The role of 'pumping' in a laser is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "supply energy that creates the population inversion" },
              { id: "b", text: "reflect photons back into the cavity" },
              { id: "c", text: "cool the gain medium to absolute zero" },
              { id: "d", text: "measure the wavelength of the output" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pumping", statement: "External energy input excites atoms to build the population inversion." },
            ],
            steps: [
              { reasoning: "Pumping energy raises atoms to excited states faster than they decay — creating inversion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Supply energy to create population inversion",
            commonErrors: ["Thinking pumping is the lasing itself — it prepares the medium."],
          },
        },
        {
          id: "physhl-u5-laser-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Monochromatic light is light that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is always white" },
              { id: "b", text: "has a single wavelength (and frequency)" },
              { id: "c", text: "cannot be focused" },
              { id: "d", text: "contains many different wavelengths" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monochromatic", statement: "Single wavelength — one colour/frequency only." },
            ],
            steps: [
              { reasoning: "Laser transitions involve one energy gap, so all photons have the same $hf$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Single wavelength/frequency",
            commonErrors: ["Confusing with collimated — monochromatic is about wavelength, collimated about direction."],
          },
        },
        {
          id: "physhl-u5-laser-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A helium–neon laser emits light of wavelength 632.8 nm. Calculate the energy of each photon. ($h = 6.63\\times10^{-34}$ J s, $c = 3.0\\times10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.14e-19, tolerance: 5e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "$E = hf = hc/\\lambda$." },
            ],
            steps: [
              { reasoning: "Use $E = hc/\\lambda$ with $\\lambda = 632.8\\times10^{-9}$ m.", marks: 1, markCode: "M" },
              { reasoning: "$E = (6.63\\times10^{-34} \\times 3.0\\times10^8)/(632.8\\times10^{-9})$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 3.14\\times10^{-19}$ J ($\\approx 1.96$ eV).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 3.14\\times10^{-19}$ J",
            commonErrors: ["Forgetting to convert nm to m."],
          },
        },
        {
          id: "physhl-u5-laser-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the frequency of the light emitted by a laser of wavelength 650 nm. ($c = 3.0\\times10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4.62e14, tolerance: 5e12, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave speed", statement: "$c = f\\lambda$ so $f = c/\\lambda$." },
            ],
            steps: [
              { reasoning: "Convert wavelength: $\\lambda = 650\\times10^{-9}$ m.", marks: 1, markCode: "M" },
              { reasoning: "$f = 3.0\\times10^8/(650\\times10^{-9})$.", marks: 1, markCode: "M" },
              { reasoning: "$f = 4.62\\times10^{14}$ Hz.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f = 4.62\\times10^{14}$ Hz",
            commonErrors: ["Multiplying instead of dividing — frequency decreases as wavelength increases."],
          },
        },
        {
          id: "physhl-u5-laser-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A laser pulse delivers 10 mJ of energy at a wavelength of 650 nm. Calculate the number of photons in the pulse. ($h = 6.63\\times10^{-34}$ J s, $c = 3.0\\times10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.27e16, tolerance: 5e15, unit: "" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photon counting", statement: "Total energy $= Nhf$; divide pulse energy by single-photon energy." },
            ],
            steps: [
              { reasoning: "Photon energy $E = hc/\\lambda = (6.63\\times10^{-34} \\times 3.0\\times10^8)/(650\\times10^{-9}) = 3.06\\times10^{-19}$ J.", marks: 1, markCode: "M" },
              { reasoning: "Pulse energy $= 10\\ \\text{mJ} = 1.0\\times10^{-2}$ J.", marks: 1, markCode: "M" },
              { reasoning: "$N = 1.0\\times10^{-2}/3.06\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$N = 3.27\\times10^{16}$ photons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N \\approx 3.3\\times10^{16}$ photons",
            commonErrors: ["Using 10 mJ as 10 J or forgetting unit conversion."],
          },
        },
        {
          id: "physhl-u5-laser-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A laser transition has wavelength 550 nm. Calculate the energy gap between the two levels involved, in electronvolts. ($h = 4.14\\times10^{-15}$ eV s, $c = 3.0\\times10^8$ m/s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.26, tolerance: 0.05, unit: "eV" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Transition energy", statement: "$\\Delta E = hf = hc/\\lambda$; using $h$ in eV s gives $\\Delta E$ directly in eV." },
            ],
            steps: [
              { reasoning: "$\\Delta E = hc/\\lambda = (4.14\\times10^{-15} \\times 3.0\\times10^8)/(550\\times10^{-9})$.", marks: 1, markCode: "M" },
              { reasoning: "Numerator $= 1.242\\times10^{-6}$ eV m.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta E = 2.26$ eV.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta E = 2.26$ eV",
            commonErrors: ["Mixing eV-based $h$ with joule-based energies."],
          },
        },
        {
          id: "physhl-u5-laser-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain the role of each of the two mirrors in a laser cavity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Laser cavity", statement: "One mirror returns photons for amplification; the other leaks a fraction as the output beam." },
            ],
            steps: [
              { reasoning: "The fully reflective mirror returns photons into the gain medium on every pass.", marks: 1, markCode: "M" },
              { reasoning: "Each pass gives photons more chances to stimulate identical emissions — light is amplified.", marks: 1, markCode: "M" },
              { reasoning: "The partially reflective mirror transmits a small fraction of the circulating light each pass.", marks: 1, markCode: "M" },
              { reasoning: "This transmitted fraction emerges as the laser beam while the rest keeps circulating.", marks: 1, markCode: "M" },
              { reasoning: "The balance sets the output power — too much reflection gives no output, too little gives weak amplification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full mirror = feedback/amplification; partial mirror = output coupling.",
            commonErrors: ["Saying both mirrors just 'reflect' — the partial mirror is the output coupler."],
          },
        },
        {
          id: "physhl-u5-laser-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why ordinary light sources (such as a lamp or the Sun) produce incoherent light while a laser produces coherent light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Coherence", statement: "Coherent light has waves locked in phase and direction; spontaneous emission gives random phases and directions." },
            ],
            steps: [
              { reasoning: "In an ordinary source, atoms emit photons spontaneously at random times.", marks: 1, markCode: "M" },
              { reasoning: "Each photon has a random phase, direction and polarisation relative to the others.", marks: 1, markCode: "M" },
              { reasoning: "Many wavelengths are also present, so the light is not monochromatic.", marks: 1, markCode: "M" },
              { reasoning: "In a laser, stimulated emission clones the stimulating photon exactly.", marks: 1, markCode: "M" },
              { reasoning: "All photons share frequency, phase, direction and polarisation — they add constructively.", marks: 1, markCode: "M" },
              { reasoning: "Result: coherent, monochromatic, collimated beam — unlike any lamp.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spontaneous emission = random phases/directions; stimulated emission = identical photons → coherence.",
            commonErrors: ["Saying lasers are 'brighter' — the key is phase relationship, not brightness."],
          },
        },
        {
          id: "physhl-u5-laser-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A three-level laser uses a gain medium pumped by an external energy source, with photons bouncing between two cavity mirrors.",
          parts: [
            { label: "a", prompt: "Explain why stimulated emission must dominate over absorption for laser action to occur.", marks: 2 },
            { label: "b", prompt: "Describe how a single spontaneously emitted photon is amplified into the output beam.", marks: 3 },
            { label: "c", prompt: "Give one practical application of laser light for each of its three properties: coherence, monochromaticity and collimation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Laser amplification", statement: "Population inversion makes stimulated emission exceed absorption; cavity feedback multiplies photons." },
            ],
            steps: [
              { part: "a", reasoning: "Atoms in the lower laser level can absorb the lasing photon as well as emit it.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Population inversion ensures more atoms can emit than absorb, so photon number grows — net amplification.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A spontaneous photon of the right energy triggers an excited atom to emit an identical photon.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The two photons reflect between the mirrors, each stimulating further identical emissions on every pass.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Exponential growth of identical photons continues until a fraction escapes through the partial mirror as the beam.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Coherence → holography or interferometry (stable interference fringes).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Monochromaticity → spectroscopy or fibre-optic communications (single frequency).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collimation → precise cutting/welding or distance measurement (parallel rays).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Inversion → emission > absorption. (b) Feedback loop amplifies photon number. (c) Coherent→holography, mono→spectroscopy, collimated→cutting.",
            commonErrors: ["Forgetting that absorption competes with emission — inversion is what tips the balance."],
          },
        },
      ],
    },
  ],
};
