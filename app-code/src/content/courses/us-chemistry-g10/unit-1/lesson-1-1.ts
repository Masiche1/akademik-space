import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "chem10-u1-lesson-1-1",
  code: "1-1",
  title: "Atoms and Isotopes",
  goal: "I CAN use atomic number and mass number to find subatomic particles, calculate average atomic mass from isotope data, write electron configurations, and explain emission spectra using the Bohr model.",
  standards: ["HS-PS1-1", "SEP: Using Mathematics and Computational Thinking", "CCC: Patterns"],
  vocabulary: [
    { term: "Atomic number", definition: "The number of protons in the nucleus of an atom; it identifies the element." },
    { term: "Mass number", definition: "The total number of protons and neutrons in the nucleus of an atom." },
    { term: "Isotope", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
    { term: "Average atomic mass", definition: "The weighted average of the masses of an element's naturally occurring isotopes, using their relative abundances." },
    { term: "Valence electrons", definition: "Electrons in the outermost energy level of an atom; they determine most chemical properties." },
    { term: "Ground state", definition: "The lowest-energy arrangement of the electrons in an atom." },
    { term: "Emission spectrum", definition: "The set of specific wavelengths of light emitted when excited electrons fall to lower energy levels." },
  ],
  concepts: [
    {
      id: "chem10-u1-isotopes-average-mass",
      title: "Subatomic particles, isotopes and average atomic mass",
      skill: "Find protons, neutrons and electrons from atomic and mass numbers, and calculate average atomic mass from isotope abundances.",
      lesson: {
        sections: [
          {
            heading: "Inside the atom",
            body: "An atom has a tiny, dense **nucleus** made of **protons** (charge $+1$) and **neutrons** (no charge). **Electrons** (charge $-1$) occupy the space around the nucleus. Protons and neutrons each have a mass of about 1 atomic mass unit (u); an electron's mass is about $\\frac{1}{1836}$ of that, so almost all of an atom's mass is in its nucleus.\n\nThe **atomic number** $Z$ is the number of protons and defines the element. The **mass number** $A$ is protons plus neutrons. In the notation ${}^{A}_{Z}\\text{X}$:\n\n- neutrons $= A - Z$\n- in a neutral atom, electrons $=$ protons\n- in an ion, electrons $= Z -$ charge (a $2+$ ion has lost 2 electrons)",
          },
          {
            heading: "Isotopes and average atomic mass",
            body: "**Isotopes** are atoms of one element with different numbers of neutrons, for example chlorine-35 and chlorine-37. They have the same chemical behavior because they have the same number of electrons, but different masses.\n\nThe atomic mass on the periodic table is a **weighted average** over the natural isotopes:\n\n$$\\text{average atomic mass}=\\sum(\\text{fractional abundance}\\times\\text{isotope mass})$$\n\nConvert each percent to a decimal first (for example $75.8\\% = 0.758$). The result is usually not a whole number, and no single atom has exactly that mass.",
          },
        ],
        keyFormulas: [
          { name: "Neutrons", statement: "neutrons $= A - Z$ (mass number $-$ atomic number)" },
          { name: "Average atomic mass", statement: "$\\sum(\\text{fractional abundance}\\times\\text{isotope mass})$" },
          { name: "Isotopes", statement: "same $Z$, different $A$ (different number of neutrons)" },
        ],
        workedExample: {
          problem: "Chlorine has two main isotopes: Cl-35 (75.8% abundance) and Cl-37 (24.2% abundance). Calculate the average atomic mass of chlorine to 2 decimal places, using the mass numbers as isotope masses.",
          solution: "Convert to decimals and weight each mass: $0.758\\times35 + 0.242\\times37 = 26.53 + 8.954 = 35.484$. To 2 decimal places this is $35.48\\text{ u}$. It is closer to 35 than 37 because Cl-35 is more abundant.",
        },
      },
      questions: [
        {
          id: "chem10-u1-isotopes-average-mass-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many neutrons are in an atom of ${}^{37}_{17}\\text{Cl}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "17" },
              { id: "b", text: "20" },
              { id: "c", text: "37" },
              { id: "d", text: "54" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutron number", statement: "neutrons $= A - Z$" },
            ],
            steps: [
              { reasoning: "Subtract the atomic number (protons) from the mass number.", working: "37 - 17 = 20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 20",
            commonErrors: ["Choosing 17, the number of protons.", "Choosing 37, the mass number, which counts protons and neutrons together.", "Adding 37 and 17 to get 54."],
            examinerNote: "B1 for 20.",
          },
        },
        {
          id: "chem10-u1-isotopes-average-mass-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Naturally occurring boron is 19.9% boron-10 and 80.1% boron-11. Calculate the average atomic mass of boron. Use the mass numbers as the isotope masses and give your answer to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Average atomic mass", answer: 10.8, tolerance: 0.01, unit: "u" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weighted average", statement: "average atomic mass $=\\sum(\\text{fractional abundance}\\times\\text{isotope mass})$" },
            ],
            steps: [
              { reasoning: "Convert the percentages to decimals and multiply each by its isotope mass.", working: "0.199\\times10 + 0.801\\times11", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each term.", working: "= 1.99 + 8.811", marks: 1, markCode: "M" },
              { reasoning: "Add and round to 2 decimal places.", working: "= 10.801 \\approx 10.80\\text{ u}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10.80\\text{ u}$",
            commonErrors: ["Taking a simple average, $(10+11)/2 = 10.5$, which ignores abundance.", "Using 19.9 and 80.1 without converting to decimals."],
            examinerNote: "M1 for each abundance multiplied by its mass. M1 for the sum set up. A1 for 10.80 (allow 10.8).",
          },
        },
        {
          id: "chem10-u1-isotopes-average-mass-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Copper has two stable isotopes, Cu-63 (isotope mass 62.93 u) and Cu-65 (isotope mass 64.93 u). The average atomic mass of copper is 63.55 u.\n\nCalculate the percent abundance of Cu-63.",
          response: { type: "numeric", parts: [{ label: "Abundance of Cu-63", answer: 69, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weighted average", statement: "average atomic mass $=\\sum(\\text{fractional abundance}\\times\\text{isotope mass})$" },
              { kind: "principle", name: "Abundances sum to one", statement: "For two isotopes, the fractional abundances are $x$ and $1 - x$." },
            ],
            steps: [
              { reasoning: "Let $x$ be the fractional abundance of Cu-63, so Cu-65 is $1 - x$. Write the weighted average equation.", working: "62.93x + 64.93(1 - x) = 63.55", marks: 1, markCode: "M" },
              { reasoning: "Expand and rearrange to solve for $x$.", working: "64.93 - 2.00x = 63.55 \\Rightarrow x = \\frac{1.38}{2.00} = 0.69", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percent.", working: "0.69\\times100 = 69\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$69\\%$ Cu-63 (and 31% Cu-65)",
            commonErrors: ["Forgetting that the two abundances add to 1 and using $x$ for both isotopes.", "Averaging 62.93 and 64.93 to get 63.93."],
            examinerNote: "M1 for an equation with $x$ and $1 - x$. M1 for correct algebra. A1 for 69 (allow 0.69 as a decimal if the unit is clear).",
          },
        },
        {
          id: "chem10-u1-isotopes-average-mass-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Magnesium has three stable isotopes: Mg-24 (78.99%), Mg-25 (10.00%) and Mg-26 (11.01%). Magnesium has atomic number 12.",
          parts: [
            { label: "a", prompt: "State the number of protons, neutrons and electrons in a neutral atom of Mg-26.", marks: 2 },
            { label: "b", prompt: "State the number of electrons in a $\\text{Mg}^{2+}$ ion.", marks: 1 },
            { label: "c", prompt: "Calculate the average atomic mass of magnesium, using the mass numbers as isotope masses. Give your answer to 2 decimal places.", marks: 3 },
            { label: "d", prompt: "Explain why the three isotopes have the same chemical properties but different masses, and why no single magnesium atom has a mass of 24.32 u.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutron number", statement: "neutrons $= A - Z$" },
              { kind: "formula", name: "Weighted average", statement: "average atomic mass $=\\sum(\\text{fractional abundance}\\times\\text{isotope mass})$" },
              { kind: "definition", name: "Isotopes", statement: "Isotopes have the same number of protons but different numbers of neutrons." },
            ],
            steps: [
              { part: "a", reasoning: "Protons equal the atomic number, and electrons equal protons in a neutral atom.", working: "12\\text{ protons},\\ 12\\text{ electrons}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Neutrons equal mass number minus atomic number.", working: "26 - 12 = 14\\text{ neutrons}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A $2+$ ion has lost two electrons from the neutral atom.", working: "12 - 2 = 10", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Multiply each decimal abundance by its mass number.", working: "0.7899\\times24 + 0.1000\\times25 + 0.1101\\times26", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate each term and add.", working: "= 18.9576 + 2.5000 + 2.8626 = 24.3202", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round to 2 decimal places.", working: "\\approx 24.32\\text{ u}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Isotopes have the same number of protons and electrons, so the same chemical properties; they differ in neutrons, so in mass.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "24.32 u is a weighted average over all isotopes; every real atom has a whole-number mass number (about 24, 25 or 26 u).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 12 protons, 14 neutrons, 12 electrons (b) 10 (c) $24.32\\text{ u}$ (d) Same electrons give same chemistry; different neutrons give different masses; 24.32 is a weighted average, not the mass of any one atom.",
            commonErrors: ["In (a) giving 26 neutrons by confusing mass number with neutron number.", "In (b) adding electrons instead of removing them for a positive ion.", "In (c) using percents such as 78.99 instead of decimals, giving 2432."],
            examinerNote: "(a) B1 for protons and electrons both 12, B1 for 14 neutrons. (c) Allow 24.3. Allow ecf for arithmetic slips after a correct set up. (d) Allow 'same number of valence electrons' for the first mark.",
          },
        },
      ],
    },
    {
      id: "chem10-u1-electron-configurations",
      title: "Electron configurations, Bohr model and emission spectra",
      skill: "Write electron configurations, identify valence electrons, and explain line emission spectra with energy levels.",
      lesson: {
        sections: [
          {
            heading: "Electron configurations",
            body: "Electrons occupy energy levels (shells, $n = 1, 2, 3, \\dots$) divided into subshells $s$, $p$, $d$. An $s$ subshell holds up to 2 electrons, a $p$ subshell up to 6 and a $d$ subshell up to 10. In the **ground state**, electrons fill the lowest available energy first, in this order:\n\n$$1s,\\ 2s,\\ 2p,\\ 3s,\\ 3p,\\ 4s,\\ 3d,\\ 4p$$\n\nPhosphorus ($Z = 15$) is $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^3$. The superscripts add up to the number of electrons. **Valence electrons** are those in the highest energy level $n$: phosphorus has $2 + 3 = 5$. For a negative ion, add electrons (Cl$^-$ has 18); for a positive ion, remove them from the highest $n$ first.",
          },
          {
            heading: "Bohr model and emission spectra",
            body: "In the Bohr model, electrons can only exist in certain fixed energy levels, so energy is **quantized**. An electron can absorb energy and jump up to a higher level (an **excited state**). When it falls back down, it emits a photon whose energy equals the gap between the two levels:\n\n$$\\Delta E = hf = \\frac{hc}{\\lambda}$$\n\nwhere $h = 6.626\\times10^{-34}\\text{ J·s}$ and $c = 3.00\\times10^{8}\\text{ m/s}$. Because only certain gaps exist, an element emits only certain wavelengths, giving a **line spectrum** that works like a fingerprint for the element. Bigger energy drops give higher frequency and shorter wavelength light.",
          },
        ],
        keyFormulas: [
          { name: "Subshell capacities", statement: "$s$: 2, $p$: 6, $d$: 10 electrons" },
          { name: "Photon energy", statement: "$E = hf$, with $h = 6.626\\times10^{-34}\\text{ J·s}$" },
          { name: "Wave equation", statement: "$c = f\\lambda$, with $c = 3.00\\times10^{8}\\text{ m/s}$" },
        ],
        workedExample: {
          problem: "Write the ground-state electron configuration of aluminum ($Z = 13$) and state its number of valence electrons.",
          solution: "Fill in order until 13 electrons are placed: $1s^2$ (2), $2s^2$ (4), $2p^6$ (10), $3s^2$ (12), $3p^1$ (13). Configuration: $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^1$. Valence electrons are in $n = 3$: $2 + 1 = 3$.",
        },
      },
      questions: [
        {
          id: "chem10-u1-electron-configurations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the ground-state electron configuration of a sulfur atom ($Z = 16$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$" },
              { id: "b", text: "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6$" },
              { id: "c", text: "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3d^4$" },
              { id: "d", text: "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filling order", statement: "Electrons fill $1s, 2s, 2p, 3s, 3p$ in order; the superscripts must total the atomic number." },
            ],
            steps: [
              { reasoning: "The superscripts must add to 16: $2 + 2 + 6 + 2 + 4 = 16$, and $3p$ fills before $3d$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$",
            commonErrors: ["Choosing (b), which has 18 electrons (argon).", "Choosing (c), which skips the 3p subshell.", "Choosing (d), which has only 14 electrons (silicon)."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem10-u1-electron-configurations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A chlorine atom has atomic number 17. Write the electron configuration of a chloride ion, $\\text{Cl}^-$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ion electron count", statement: "A $1-$ anion has one more electron than the neutral atom." },
            ],
            steps: [
              { reasoning: "The neutral atom has 17 electrons, so the $1-$ ion has 18.", working: "17 + 1 = 18", marks: 1, markCode: "B" },
              { reasoning: "Fill 18 electrons in order.", working: "1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6$ (the same as argon)",
            commonErrors: ["Writing the neutral atom configuration ending $3p^5$.", "Removing an electron instead of adding one."],
            examinerNote: "B1 for 18 electrons identified or implied. B1 for the correct configuration. Allow the noble-gas shorthand $[\\text{Ne}]\\,3s^2\\,3p^6$ or $[\\text{Ar}]$.",
          },
        },
        {
          id: "chem10-u1-electron-configurations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When a sample of sodium vapor is heated in a flame, it gives off yellow light. A spectroscope shows that the light consists of a few thin lines rather than a continuous rainbow.\n\nExplain, in terms of electrons and energy levels, why only specific wavelengths are emitted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quantized energy levels", statement: "Electrons can only occupy fixed energy levels." },
              { kind: "formula", name: "Photon energy", statement: "$\\Delta E = hf$" },
            ],
            steps: [
              { reasoning: "Heating gives electrons energy, so they are promoted to higher energy levels (excited state).", marks: 1, markCode: "B" },
              { reasoning: "The excited electrons fall back to lower energy levels.", marks: 1, markCode: "B" },
              { reasoning: "The energy difference between the two levels is released as a photon with energy $\\Delta E = hf$.", marks: 1, markCode: "B" },
              { reasoning: "Energy levels are fixed, so only certain energy gaps exist; each gap gives one frequency and wavelength, producing separate lines.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Electrons are excited to higher levels, fall back and emit photons whose energy equals the gap between fixed levels, so only certain wavelengths (lines) appear.",
            commonErrors: ["Saying the electrons leave the atom.", "Saying the nucleus emits the light.", "Not explaining why levels being fixed leads to separate lines."],
            examinerNote: "B1 excitation/promotion. B1 falling to lower level. B1 photon energy equals the energy difference. R1 fixed (quantized) levels give discrete wavelengths. Allow 'orbits' for 'energy levels'. Reject 'electrons jump to another atom'.",
          },
        },
        {
          id: "chem10-u1-electron-configurations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a hydrogen atom, an electron falls from energy level $n = 3$ to $n = 2$ and emits red light of wavelength 656 nm. Use $c = 3.00\\times10^{8}\\text{ m/s}$, $h = 6.626\\times10^{-34}\\text{ J·s}$ and $1\\text{ nm} = 10^{-9}\\text{ m}$.",
          parts: [
            { label: "a", prompt: "State the value of $n$ for the ground state of hydrogen.", marks: 1 },
            { label: "b", prompt: "Calculate the frequency of the red light. Give your answer in hertz to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Calculate the energy of one photon of this light. Give your answer in joules to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "An electron falls from $n = 3$ to $n = 1$ instead. Predict how the energy and wavelength of the emitted light compare with the red light, and explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$c = f\\lambda$" },
              { kind: "formula", name: "Photon energy", statement: "$E = hf$" },
              { kind: "principle", name: "Energy gap and wavelength", statement: "A larger energy drop gives a photon of higher energy and shorter wavelength." },
            ],
            steps: [
              { part: "a", reasoning: "The ground state is the lowest energy level.", working: "n = 1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rearrange the wave equation for frequency.", working: "f = \\frac{c}{\\lambda}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert the wavelength to meters and substitute.", working: "f = \\frac{3.00\\times10^{8}}{656\\times10^{-9}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 3 significant figures.", working: "f = 4.57\\times10^{14}\\text{ Hz}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute into $E = hf$.", working: "E = 6.626\\times10^{-34}\\times4.573\\times10^{14}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 3 significant figures.", working: "E = 3.03\\times10^{-19}\\text{ J}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The drop from $n = 3$ to $n = 1$ is a bigger energy gap, so the photon has more energy (higher frequency).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Higher energy means a shorter wavelength (in the ultraviolet), since $E = hc/\\lambda$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $n = 1$ (b) $4.57\\times10^{14}\\text{ Hz}$ (c) $3.03\\times10^{-19}\\text{ J}$ (d) Larger energy gap, so higher energy and shorter wavelength.",
            commonErrors: ["Using 656 as meters, giving a frequency of about $4.57\\times10^{5}\\text{ Hz}$.", "Forgetting to convert nanometers to meters.", "Saying a bigger drop gives a longer wavelength."],
            examinerNote: "(b) Allow ecf for a wrong unit conversion if the method is clear. (c) Allow ecf from (b), using the unrounded or rounded frequency; accept 3.02 to 3.03 $\\times10^{-19}$. (d) Allow 'ultraviolet' as a bonus detail, not required.",
          },
        },
      ],
    },
  ],
};
