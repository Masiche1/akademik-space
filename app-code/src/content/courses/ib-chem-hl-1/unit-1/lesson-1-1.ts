import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "chemhl-u1-lesson-1-1",
  code: "1-1",
  title: "Electrons in Atoms",
  goal: "I CAN interpret photoelectron spectroscopy data, apply the spin quantum number with the Pauli exclusion principle and Hund's rule, and explain orbital energies in terms of penetration and effective nuclear charge.",
  standards: ["Paper 1", "Paper 2", "AHL S1"],
  vocabulary: [
    {
      term: "Photoelectron spectroscopy",
      definition:
        "A technique in which photons eject electrons from a sample; the kinetic energies of the ejected electrons reveal the energies of the orbitals they occupied.",
    },
    {
      term: "Spin quantum number",
      definition:
        "A property of the electron, $m_s = +\\frac{1}{2}$ or $-\\frac{1}{2}$, describing its intrinsic angular momentum; no two electrons in an atom can share all four quantum numbers.",
    },
    {
      term: "Pauli exclusion principle",
      definition:
        "An atomic orbital can hold at most two electrons, and those two must have opposite spins.",
    },
    {
      term: "Hund's rule",
      definition:
        "Electrons occupy degenerate orbitals singly with parallel spins before any pairing occurs, minimising electron-electron repulsion.",
    },
    {
      term: "Effective nuclear charge",
      definition:
        "The net positive charge experienced by an electron after shielding by inner electrons reduces the full nuclear charge.",
    },
    {
      term: "Penetration",
      definition:
        "The ability of an electron in a lower angular momentum orbital (e.g. $s$) to spend time close to the nucleus, lowering its energy relative to higher-$l$ orbitals of the same shell.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u1-pes-quantum",
      title: "Photoelectron spectroscopy and quantum numbers",
      skill:
        "Interpret PES spectra to deduce electron configuration and relative orbital energies, and apply the spin quantum number with the Pauli exclusion principle and Hund's rule.",
      lesson: {
        sections: [
          {
            heading: "Photoelectron spectroscopy",
            body: "In photoelectron spectroscopy (PES), a beam of photons of known energy strikes a sample and ejects electrons. The kinetic energy of each ejected electron is measured: $KE = hf - IE$, where $IE$ is the ionization energy of the orbital the electron came from. Electrons in different orbitals give peaks at different kinetic energies — lower kinetic energy means a more tightly held, lower-energy electron. The relative peak heights show the relative numbers of electrons in each subshell, so a PES spectrum can reveal the full electron configuration, including cases where simple aufbau order fails.",
          },
          {
            heading: "The fourth quantum number",
            body: "The spin quantum number $m_s$ is $+\\frac{1}{2}$ or $-\\frac{1}{2}$. The Pauli exclusion principle states that no two electrons in an atom can have the same four quantum numbers, so an orbital holds at most two electrons with opposite spins. Hund's rule states that when filling degenerate orbitals (e.g. the three $p$ orbitals), electrons occupy them singly with parallel spins before pairing, because electrons in separate orbitals repel each other less.",
          },
          {
            heading: "Orbital energy and filling order",
            body: "Within a shell, $s$ orbitals penetrate closer to the nucleus than $p$ orbitals, which penetrate closer than $d$ orbitals, so for the same principal quantum number $s < p < d$ in energy. This explains why the $4s$ orbital fills before $3d$ (it penetrates more effectively) yet the $3d$ electrons are removed first on ionization — once $3d$ starts filling it drops below $4s$ in energy.",
          },
        ],
        keyFormulas: [
          {
            name: "Photoelectron energy balance",
            statement:
              "$KE = hf - IE$, so $IE = hf - KE$; lower $KE$ peaks correspond to lower-energy (inner) electrons.",
          },
          {
            name: "Orbital capacity",
            statement:
              "Each orbital holds at most $2$ electrons of opposite spin; a subshell of $l$ holds up to $2(2l+1)$ electrons.",
          },
          {
            name: "Penetration order",
            statement:
              "For a given shell, orbital energy increases $s < p < d < f$ because penetration decreases with increasing angular momentum quantum number.",
          },
        ],
        workedExample: {
          problem:
            "In a PES experiment on calcium, photons of energy $8.0 \\times 10^{-19}$ J eject electrons with maximum kinetic energy $2.4 \\times 10^{-19}$ J from the highest occupied orbital. Calculate the ionization energy of that orbital in kJ mol$^{-1}$.",
          solution:
            "$IE = hf - KE = 8.0 \\times 10^{-19} - 2.4 \\times 10^{-19} = 5.6 \\times 10^{-19}$ J per electron. Per mole: $5.6 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 337$ kJ mol$^{-1}$.",
        },
      },
      questions: [
        {
          id: "chemhl-u1-pes-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In photoelectron spectroscopy, electrons ejected from inner-shell orbitals have LOWER kinetic energy than those from outer-shell orbitals. This is because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Inner-shell electrons are more tightly held, so more photon energy is needed to remove them",
              },
              {
                id: "b",
                text: "The photons are absorbed more strongly by inner shells",
              },
              { id: "c", text: "Inner-shell electrons have a larger mass" },
              {
                id: "d",
                text: "Outer-shell electrons move faster after ejection",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PES energy balance",
                statement:
                  "$KE = hf - IE$: the ejected electron keeps only the photon energy left after paying the ionization energy of its orbital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A larger $IE$ (tightly held inner electron) leaves less energy as kinetic energy.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Inner electrons have higher ionization energy, so less kinetic energy remains.",
            commonErrors: [
              "Reversing the relationship — thinking lower KE means less tightly held electrons.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Photons of energy $9.6 \\times 10^{-19}$ J are used in a PES experiment on potassium. Electrons from the $3p$ subshell are ejected with a maximum kinetic energy of $1.6 \\times 10^{-19}$ J. Calculate the ionization energy of a $3p$ electron in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Ionization energy",
                answer: 482,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy balance",
                statement:
                  "$IE = hf - KE$ per electron; multiply by Avogadro's number and convert J to kJ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract the kinetic energy from the photon energy.",
                working:
                  "9.6 \\times 10^{-19} - 1.6 \\times 10^{-19} = 8.0 \\times 10^{-19} \\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Scale to one mole and convert to kJ.",
                working:
                  "8.0 \\times 10^{-19} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "482",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$482$ kJ mol$^{-1}$",
            commonErrors: [
              "Using the photon energy alone without subtracting the kinetic energy.",
              "Forgetting to divide by 1000 when converting J to kJ.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain, with reference to the Pauli exclusion principle, Hund's rule and the spin quantum number, why the electron configuration of oxygen is $1s^2 2s^2 2p^4$ rather than any other arrangement of its eight electrons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pauli exclusion principle",
                statement:
                  "No two electrons can share all four quantum numbers, so each orbital holds at most two electrons of opposite spin.",
              },
              {
                kind: "principle",
                name: "Hund's rule",
                statement:
                  "Degenerate orbitals are filled singly with parallel spins before pairing occurs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The first two electrons fill $1s$ as a spin-paired couple; the next two fill $2s$ similarly.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The remaining four electrons enter the three degenerate $2p$ orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hund's rule requires one electron in each $2p$ orbital with parallel spins first, giving three unpaired electrons.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The fourth $2p$ electron must pair with one of them (opposite spin, per Pauli), giving the $2p^4$ configuration with two unpaired electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$1s^2 2s^2 2p^4$: $2p$ electrons spread singly across all three orbitals before pairing, leaving two unpaired electrons.",
            commonErrors: [
              "Drawing all four $2p$ electrons paired in two orbitals — this violates Hund's rule.",
              "Giving oxygen three unpaired electrons (that is nitrogen's configuration).",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A student investigates the electrons in an atom using photoelectron spectroscopy and is also asked about orbital energies.",
          parts: [
            {
              label: "a",
              prompt:
                "State the relationship between the kinetic energy of an ejected photoelectron and the ionization energy of the orbital it came from.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the $4s$ orbital is filled before the $3d$ orbitals when building up electron configurations, yet $3d$ electrons are removed before $4s$ electrons during ionization.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "A PES peak corresponds to an ionization energy of $7.0 \\times 10^{-19}$ J per electron. Calculate the ionization energy in kJ mol$^{-1}$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PES energy balance",
                statement: "$KE = hf - IE$ for a photon of frequency $f$.",
              },
              {
                kind: "principle",
                name: "Penetration and orbital energy",
                statement:
                  "Lower-angular-momentum orbitals penetrate closer to the nucleus and are lower in energy within a shell, but ordering changes once subshells begin to fill.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The photon energy is shared between overcoming the ionization energy and the electron's kinetic energy.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "$KE = hf - IE$, so a higher $IE$ gives a lower $KE$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For a neutral atom building up, the $4s$ orbital penetrates more effectively than $3d$ and lies lower in energy, so it fills first.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Once electrons occupy $3d$, electron-electron repulsion raises the energy of $4s$ above $3d$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Therefore the outermost, least tightly held electrons are the $4s$ electrons, which are removed first on ionization.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Multiply the per-electron energy by Avogadro's number.",
                working: "7.0 \\times 10^{-19} \\times 6.022 \\times 10^{23}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Convert J to kJ.",
                working: "\\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "421.5 \\approx 422",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $KE = hf - IE$. (b) $4s$ fills first due to greater penetration, but in the ion its energy rises above $3d$, so $4s$ electrons ionize first. (c) $422$ kJ mol$^{-1}$.",
            commonErrors: [
              "Saying $4s$ is 'always' lower in energy than $3d$ — the ordering reverses in cations.",
              "Forgetting the J-to-kJ conversion in part (c).",
            ],
            examinerNote:
              "Part (b) rewards recognition that orbital energies depend on the charge state of the atom.",
          },
        },
        {
          id: "chemhl-u1-pes-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The spin quantum number, $m_s$, can have which values?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any integer value" },
              { id: "b", text: "$+1$ or $-1$" },
              { id: "c", text: "$+\\frac{1}{2}$ or $-\\frac{1}{2}$" },
              { id: "d", text: "$0$, $+\\frac{1}{2}$ or $-\\frac{1}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Spin quantum number",
                statement:
                  "Each electron has spin $m_s = +\\frac{1}{2}$ or $-\\frac{1}{2}$; the two values are the only possibilities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Spin is quantised into exactly two opposite values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $+\\frac{1}{2}$ or $-\\frac{1}{2}$",
            commonErrors: [
              "Including $0$ — spin has only two values, unlike the magnetic quantum number.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the Pauli exclusion principle, the maximum number of electrons that can occupy a single atomic orbital is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "6" },
              { id: "c", text: "8" },
              { id: "d", text: "2, with opposite spins" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pauli exclusion principle",
                statement:
                  "No two electrons can have the same four quantum numbers, so an orbital holds at most two electrons of opposite spin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two electrons may share an orbital only if their spins are paired.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 2 electrons with opposite spins",
            commonErrors: [
              "Answering 6 or 8 — those are subshell capacities ($p$ or $s+p$), not single-orbital capacities.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Nitrogen has the configuration $1s^2 2s^2 2p^3$. How many UNPAIRED electrons does a nitrogen atom have in its ground state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hund's rule",
                statement:
                  "The three $2p$ electrons occupy the three degenerate $p$ orbitals singly with parallel spins before any pairing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each of the three $2p$ electrons sits in a different orbital, so all three are unpaired.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 3 unpaired electrons",
            commonErrors: [
              "Drawing two of the $2p$ electrons paired — that would leave only one unpaired electron.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Photons of energy $7.5 \\times 10^{-19}$ J eject electrons from a metal surface. The ejected electrons have a maximum kinetic energy of $2.5 \\times 10^{-19}$ J. Calculate the ionization energy of the electrons in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Ionization energy",
                answer: 301,
                tolerance: 1,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PES energy balance",
                statement:
                  "$IE = hf - KE$ per electron; scale by Avogadro's number and convert J to kJ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract the kinetic energy from the photon energy to get the ionization energy per electron.",
                working:
                  "7.5 \\times 10^{-19} - 2.5 \\times 10^{-19} = 5.0 \\times 10^{-19} \\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Convert to a molar quantity and change J to kJ.",
                working:
                  "5.0 \\times 10^{-19} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "301.1 \\approx 301",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$301$ kJ mol$^{-1}$",
            commonErrors: [
              "Using the photon energy directly as the ionization energy.",
              "Forgetting the J-to-kJ conversion.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a PES experiment, photons of energy $1.5 \\times 10^{-18}$ J eject electrons from argon with a maximum kinetic energy of $3.0 \\times 10^{-19}$ J. Calculate the ionization energy of these electrons in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Ionization energy",
                answer: 723,
                tolerance: 1,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PES energy balance",
                statement:
                  "$IE = hf - KE$; multiply by $N_A$ and divide by $1000$ for kJ mol$^{-1}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find the energy needed to remove each electron.",
                working:
                  "1.5 \\times 10^{-18} - 3.0 \\times 10^{-19} = 1.2 \\times 10^{-18} \\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Scale to one mole and convert to kJ.",
                working:
                  "1.2 \\times 10^{-18} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "722.6 \\approx 723",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$723$ kJ mol$^{-1}$",
            commonErrors: [
              "Adding the kinetic energy instead of subtracting it.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A PES experiment uses photons of energy $9.0 \\times 10^{-19}$ J. Two peaks are observed: peak A corresponds to electrons with kinetic energy $5.0 \\times 10^{-19}$ J, and peak B to electrons with kinetic energy $7.0 \\times 10^{-19}$ J. Calculate the ionization energies of the two sets of electrons in kJ mol$^{-1}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Peak A",
                answer: 241,
                tolerance: 1,
                unit: "kJ mol$^{-1}$",
              },
              {
                label: "Peak B",
                answer: 120,
                tolerance: 1,
                unit: "kJ mol$^{-1}$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PES energy balance",
                statement:
                  "$IE = hf - KE$ per electron; scale by $N_A$ and convert to kJ.",
              },
            ],
            steps: [
              {
                part: "Peak A",
                reasoning:
                  "Peak A: subtract the kinetic energy from the photon energy and scale to a mole.",
                working:
                  "(9.0 - 5.0) \\times 10^{-19} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "Peak A",
                reasoning: "Evaluate peak A.",
                working: "241",
                marks: 1,
                markCode: "A",
              },
              {
                part: "Peak B",
                reasoning:
                  "Peak B has a higher kinetic energy, so its ionization energy is lower.",
                working:
                  "(9.0 - 7.0) \\times 10^{-19} \\times 6.022 \\times 10^{23} \\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "Peak B",
                reasoning: "Evaluate peak B.",
                working: "120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Peak A: $241$ kJ mol$^{-1}$; Peak B: $120$ kJ mol$^{-1}$.",
            commonErrors: [
              "Assigning the higher kinetic energy peak the higher ionization energy — the relationship is inverse.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the maximum number of electrons that can occupy the $4f$ subshell?",
          response: {
            type: "numeric",
            parts: [{ label: "Maximum electrons", answer: 14 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Subshell capacity",
                statement:
                  "A subshell of angular momentum $l$ holds up to $2(2l+1)$ electrons; $f$ has $l = 3$, so capacity $= 14$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For $f$ orbitals $l = 3$, giving $2(2 \\times 3 + 1) = 14$ electron places.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $14$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$14$ electrons",
            commonErrors: [
              "Answering 10 — that is the $d$ subshell capacity ($l = 2$).",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An element has the ground-state electron configuration $[Kr]\\,4d^5 5s^1$. Calculate the total number of electrons in one atom of this element.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total electrons", answer: 42 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Noble gas core",
                statement:
                  "$[Kr]$ represents $36$ electrons (atomic number of krypton).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Count the electrons in the noble-gas core and the valence subshells.",
                working: "36 + 5 + 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The total equals the atomic number, giving $42$ (molybdenum).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $42$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$42$ electrons",
            commonErrors: [
              "Counting only the outer electrons ($6$) instead of the whole atom.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain, with reference to electron-electron repulsion, why Hund's rule states that electrons occupy degenerate orbitals singly with parallel spins before pairing occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hund's rule",
                statement:
                  "Electrons in separate degenerate orbitals repel each other less than paired electrons in the same orbital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Two electrons sharing one orbital experience strong mutual repulsion because their charge clouds overlap completely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Placing electrons in different degenerate orbitals keeps them farther apart on average, lowering repulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Parallel spins are favoured because same-spin electrons are kept apart by exchange interaction (Fermi exclusion), further reducing repulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This arrangement minimises the total energy, so it is the preferred ground-state configuration.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Pairing only occurs once every degenerate orbital contains one electron.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hund's rule minimises electron-electron repulsion: electrons spread across degenerate orbitals with parallel spins before pairing.",
            commonErrors: [
              "Describing Hund's rule as arbitrary rather than a consequence of minimising repulsion.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Within a principal shell, the orbital energy order is $s < p < d < f$. Explain this order in terms of penetration and effective nuclear charge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Penetration",
                statement:
                  "Lower-$l$ orbitals penetrate closer to the nucleus, experiencing a higher effective nuclear charge and lower energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$s$ orbitals have no angular node and spend the most time near the nucleus (greatest penetration).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Greater penetration means less shielding from inner electrons, so the electron feels a higher effective nuclear charge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A higher effective nuclear charge binds the electron more tightly, lowering its orbital energy — hence $s$ is lowest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As angular momentum increases ($s \\to p \\to d \\to f$) penetration decreases, shielding increases and orbital energy rises.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This explains why $4s$ fills before $3d$ despite having a higher principal quantum number.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Once $3d$ begins to fill, interelectronic repulsion reverses the ordering for ionization.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Penetration decreases $s \\to p \\to d \\to f$ within a shell, so effective nuclear charge and orbital energy follow $s < p < d < f$.",
            commonErrors: [
              "Claiming the order is due to principal quantum number alone — $n$ is the same within a shell.",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A PES spectrum is recorded for an unknown element and the student is asked to interpret the data.",
          parts: [
            {
              label: "a",
              prompt:
                "State the equation linking the kinetic energy of a photoelectron to the ionization energy of its orbital.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why the peak at the highest kinetic energy corresponds to the outermost electrons.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "A peak corresponds to an ionization energy of $5.5 \\times 10^{-19}$ J per electron. Calculate the ionization energy in kJ mol$^{-1}$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PES energy balance",
                statement: "$KE = hf - IE$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The photon energy is divided between ionization energy and kinetic energy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$KE = hf - IE$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Outermost electrons occupy the highest-energy orbitals, which have the smallest ionization energies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "From $KE = hf - IE$, a smaller $IE$ leaves a larger kinetic energy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Therefore the highest-$KE$ peak is produced by the least tightly held, outermost electrons.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Multiply the per-electron energy by Avogadro's number.",
                working: "5.5 \\times 10^{-19} \\times 6.022 \\times 10^{23}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Convert J to kJ.",
                working: "\\div 1000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "331.2 \\approx 331",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The ionization energy is $331$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $KE = hf - IE$. (b) Outermost electrons have the smallest $IE$, hence the largest $KE$. (c) $331$ kJ mol$^{-1}$.",
            commonErrors: [
              "Reversing the KE–IE relationship in part (b).",
            ],
          },
        },
        {
          id: "chemhl-u1-pes-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Iron has the ground-state configuration $[Ar]\\,4s^2 3d^6$, yet on ionization the $4s$ electrons are removed before the $3d$ electrons. Explain this behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbital energy depends on charge state",
                statement:
                  "In a neutral atom $4s$ fills before $3d$, but in cations the $4s$ electrons become the highest-energy and are removed first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the neutral atom, $4s$ penetrates more effectively than $3d$ and lies lower in energy, so it fills first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Once $3d$ electrons are present, electron-electron repulsion raises the energy of the $4s$ orbital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When an electron is removed, the remaining electrons experience a higher effective nuclear charge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $4s$ electrons, being outermost and least tightly bound, are removed first to form Fe$^{2+}$ and Fe$^{3+}$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The resulting ions have configurations $[Ar]\\,3d^6$ and $[Ar]\\,3d^5$ — no $4s$ electrons remain.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This is why configurations are written $4s$ before $3d$ even though $3d$ is more tightly bound in the ion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "$4s$ fills first by penetration but becomes highest in energy once $3d$ fills, so its electrons are removed first on ionization.",
            commonErrors: [
              "Saying electrons are always removed from the highest principal shell regardless of subshell energy.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u1-aufbau-detail",
      title: "Aufbau order, subshell energies and exceptions",
      skill:
        "Apply the aufbau principle with exceptions such as chromium and copper, and relate subshell energies to observed electron configurations and ionization behaviour.",
      lesson: {
        sections: [
          {
            heading: "Building configurations",
            body: "The aufbau principle fills orbitals in order of increasing energy: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p$. Degenerate orbitals fill according to Hund's rule. Exceptions occur where a half-filled or completely filled subshell is energetically favoured: chromium is $[Ar]\\,4s^1 3d^5$ (not $4s^2 3d^4$) and copper is $[Ar]\\,4s^1 3d^{10}$ (not $4s^2 3d^9$), because the extra stability of half-filled and filled $d$ subshells outweighs the cost of promoting an electron.",
          },
          {
            heading: "Reading PES spectra",
            body: "A PES spectrum plots electron count (peak height) against ionization energy (or binding energy). Each subshell gives one peak whose position is its ionization energy and whose height is proportional to the number of electrons in that subshell. Comparing peak heights lets you count electrons per subshell — for example, an element with peaks in the ratio $2:2:6:2:1$ across successive energies reveals its configuration directly. PES data sometimes reveals that the 'expected' configuration is wrong, as in cases where inner-shell repulsion shifts subshell energies.",
          },
          {
            heading: "Successive ionization and stability",
            body: "Removing electrons one at a time requires increasing energy. A large jump in successive ionization energies signals that a new, more tightly bound shell has been reached. For transition metals the jump appears only after the $4s$ electrons and the $3d$ electrons are removed, consistent with $4s$ being the outermost subshell in the neutral atom but $3d$ being more tightly bound in the ion.",
          },
        ],
        keyFormulas: [
          {
            name: "Aufbau order",
            statement:
              "$1s\\,2s\\,2p\\,3s\\,3p\\,4s\\,3d\\,4p\\,5s\\,4d\\,5p\\,6s\\,4f\\,5d\\,6p$; exceptions: Cr $4s^1 3d^5$, Cu $4s^1 3d^{10}$.",
          },
          {
            name: "PES peak ratio",
            statement:
              "Peak heights are proportional to the number of electrons in each subshell.",
          },
          {
            name: "Successive IE jump",
            statement:
              "A large increase between successive ionization energies indicates crossing into a new electron shell.",
          },
        ],
        workedExample: {
          problem:
            "The first six successive ionization energies of an element (kJ mol$^{-1}$) are $590, 1140, 4900, 6500, 8100, 9700$. Deduce the electron configuration of the neutral atom.",
          solution:
            "The jump after the second ionization (from $1140$ to $4900$) shows only two electrons occupy the outermost shell. Two electrons in the outer shell with a jump to a closed inner shell indicates $ns^2$ — e.g. magnesium $[Ne]\\,3s^2$.",
        },
      },
      questions: [
        {
          id: "chemhl-u1-aufbau-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is the correct ground-state electron configuration of chromium (Z = 24)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$[Ar]\\,4s^1 3d^5$" },
              { id: "b", text: "$[Ar]\\,3d^4 4s^2$" },
              { id: "c", text: "$[Ar]\\,4s^2 3d^5$" },
              { id: "d", text: "$[Ar]\\,4s^2 3d^4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aufbau exception",
                statement:
                  "Half-filled and completely filled $d$ subshells are stabilised, giving Cr $4s^1 3d^5$ and Cu $4s^1 3d^{10}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The half-filled $3d^5$ subshell is unusually stable, so one $4s$ electron is promoted.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $[Ar]\\,4s^1 3d^5$",
            commonErrors: [
              "Writing the 'expected' $4s^2 3d^4$ without recognising the half-filled subshell stabilisation.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The successive ionization energies of element X (first five values, kJ mol$^{-1}$) are $496, 4560, 6910, 9540, 13400$. Identify the group of element X and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE jump",
                statement:
                  "A large jump between successive ionization energies marks the point where a new, inner electron shell is reached.",
              },
            ],
            steps: [
              {
                reasoning:
                  "There is only one outer-shell electron: the first IE is small, the second is very large.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After losing one electron the atom has a stable noble-gas configuration, so the second electron is much harder to remove.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "One outer electron places X in Group 1 (alkali metals).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Group 1 — only one electron occupies the outermost shell.",
            commonErrors: [
              "Saying Group 2 because 'two electrons are removed' — the jump shows only the first electron is in the outer shell.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why copper has the electron configuration $[Ar]\\,4s^1 3d^{10}$ rather than the aufbau-predicted $[Ar]\\,4s^2 3d^9$, and predict the configuration of the Cu$^+$ ion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subshell stability",
                statement:
                  "A completely filled subshell has extra exchange stabilisation, making $3d^{10}$ favourable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The alternative $4s^2 3d^9$ leaves the $3d$ subshell one electron short of full.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Promoting a $4s$ electron to $3d$ gives the completely filled, stabilised $3d^{10}$ configuration.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "In Cu$^+$ the $4s$ electron is removed first, leaving $[Ar]\\,3d^{10}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is consistent with $4s$ being the highest-energy occupied orbital in the neutral atom.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cu is $[Ar]\\,4s^1 3d^{10}$ because a filled $3d$ subshell is stabilised; Cu$^+$ is $[Ar]\\,3d^{10}$.",
            commonErrors: [
              "Writing Cu$^+$ as $4s^1 3d^{10}$ — electrons are always removed from $4s$ first.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A PES spectrum of an unknown element shows four peaks with relative heights in the ratio $2 : 2 : 6 : 2$, at increasing ionization energies.",
          parts: [
            {
              label: "a",
              prompt: "Deduce the electron configuration of the element.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how the peak heights in a PES spectrum are related to electron configuration.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The element forms an ion by losing two electrons. Write the electron configuration of the ion.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PES peak height",
                statement:
                  "Peak height is proportional to the number of electrons in the subshell that produced the peak.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Peak heights $2:2:6:2$ correspond to subshell occupancies $2, 2, 6, 2$ electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Assigning in order of increasing binding energy gives $1s^2\\,2s^2\\,2p^6\\,3s^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "This is magnesium, $[Ne]\\,3s^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Each electron in a subshell can be ejected by photons of the threshold energy, so more electrons give a taller peak.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "The peak area/height is therefore proportional to the subshell occupancy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The first two electrons removed come from the highest-energy occupied subshell, $3s$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The resulting ion has configuration $1s^2\\,2s^2\\,2p^6 = [Ne]$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "This is the Mg$^{2+}$ ion with a stable noble-gas configuration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1s^2\\,2s^2\\,2p^6\\,3s^2$ (magnesium). (b) Peak height ∝ number of electrons in the subshell. (c) $[Ne]$.",
            commonErrors: [
              "Assigning the $2p^6$ peak to $3p$ — binding energy order matches aufbau order for light elements.",
              "Removing electrons from $2p$ instead of $3s$ when forming the ion.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the aufbau principle, which subshell is filled immediately AFTER $4s$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3p$" },
              { id: "b", text: "$4p$" },
              { id: "c", text: "$3d$" },
              { id: "d", text: "$5s$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aufbau order",
                statement:
                  "$1s\\,2s\\,2p\\,3s\\,3p\\,4s\\,3d\\,4p\\,5s\\,4d\\,5p\\,6s\\,4f\\,5d\\,6p$.",
              },
            ],
            steps: [
              {
                reasoning: "The sequence after $4s$ is $3d$, then $4p$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $3d$",
            commonErrors: [
              "Assuming subshells fill strictly by principal quantum number — $4s$ precedes $3d$.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the electron configuration of the Cu$^+$ ion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$[Ar]\\,4s^1 3d^{10}$" },
              { id: "b", text: "$[Ar]\\,4s^2 3d^{10}$" },
              { id: "c", text: "$[Ar]\\,4s^2 3d^9$" },
              { id: "d", text: "$[Ar]\\,3d^{10}$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionization removes $4s$ first",
                statement:
                  "Copper is $[Ar]\\,4s^1 3d^{10}$; removing one electron takes the $4s$ electron, leaving $[Ar]\\,3d^{10}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The $4s$ electron is the highest-energy electron in neutral Cu and is removed first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $[Ar]\\,3d^{10}$",
            commonErrors: [
              "Keeping a $4s$ electron in Cu$^+$ — $4s$ is always emptied before $3d$ on ionization.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A very large jump between two successive ionization energies indicates that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The atom has become radioactive" },
              {
                id: "b",
                text: "The next electron must be removed from a new, inner electron shell",
              },
              { id: "c", text: "The next electron is in a $d$ subshell" },
              { id: "d", text: "The element is a transition metal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE jump",
                statement:
                  "A sharp rise marks the point where the next electron comes from a lower-energy, more tightly bound inner shell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inner-shell electrons are much more tightly held, so their removal costs far more energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The next electron comes from an inner shell",
            commonErrors: [
              "Thinking a large jump means the element is a metal — it marks a shell boundary instead.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The first three successive ionization energies of an element are $590$, $1145$ and $7480$ kJ mol$^{-1}$. How many electrons are removed before the large jump occurs?",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons removed", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE jump",
                statement:
                  "The jump after the second ionization means only two electrons occupied the outermost shell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The jump occurs between the second and third ionization energies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore two electrons were removed before reaching the inner shell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$ electrons",
            commonErrors: [
              "Counting the jump position instead of the electrons removed before it.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A PES spectrum shows five peaks with relative heights in the ratio $2 : 2 : 6 : 2 : 1$ at increasing binding energies. Calculate the total number of electrons in one atom of this element.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total electrons", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PES peak height",
                statement:
                  "Each unit of peak-height ratio corresponds to one electron in the subshell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The peak heights give subshell occupancies $2, 2, 6, 2, 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These correspond to $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^1$ — aluminium.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sum the occupancies.",
                working: "2 + 2 + 6 + 2 + 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $13$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$13$ electrons",
            commonErrors: [
              "Treating the ratio values as the electron counts directly without summing them.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The successive ionization energies of magnesium are $738$, $1451$ and $7733$ kJ mol$^{-1}$. How many electrons occupy magnesium's outermost shell?",
          response: {
            type: "numeric",
            parts: [
              { label: "Outer-shell electrons", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE jump",
                statement:
                  "The large jump after the second ionization shows only two electrons were in the $n = 3$ shell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mg is $[Ne]\\,3s^2$; the jump to $7733$ kJ mol$^{-1}$ marks entry into the $n = 2$ shell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$ electrons",
            commonErrors: [
              "Answering 12 — magnesium has 12 electrons in total but only 2 in the outermost shell.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The first five successive ionization energies of element X (kJ mol$^{-1}$) are $496$, $4560$, $6900$, $9550$ and $13350$. Deduce the number of electrons in the outermost shell of X and its group.",
          response: {
            type: "numeric",
            parts: [
              { label: "Outer-shell electrons", answer: 1 },
              { label: "Group number", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE jump",
                statement:
                  "A large jump between the first and second ionization energies shows only one outer-shell electron.",
              },
            ],
            steps: [
              {
                part: "Outer-shell electrons",
                reasoning:
                  "The jump from $496$ to $4560$ kJ mol$^{-1}$ occurs after removing one electron.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "Outer-shell electrons",
                reasoning: "Answer is $1$ electron.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "Group number",
                reasoning:
                  "One outer electron places the element in Group 1 (the $ns^1$ configuration).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "Group number",
                reasoning: "Answer is Group $1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$1$ outer-shell electron; Group $1$.",
            commonErrors: [
              "Reading the jump as occurring later — the big gap is between IE1 and IE2.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why chromium has the electron configuration $[Ar]\\,4s^1 3d^5$ rather than the aufbau-predicted $[Ar]\\,4s^2 3d^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half-filled subshell stability",
                statement:
                  "A half-filled subshell ($3d^5$) has extra exchange stabilisation, making it energetically favourable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 'expected' configuration leaves the $3d$ subshell with four electrons — neither half-filled nor full.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Promoting one $4s$ electron into $3d$ gives $3d^5$, a half-filled subshell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Half-filled subshells gain stabilisation from exchange energy and symmetric electron distribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This stabilisation outweighs the small energy cost of the unusual $4s^1$ occupancy.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The same effect explains the copper exception $4s^1 3d^{10}$, where a filled subshell is stabilised.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "The half-filled $3d^5$ subshell is stabilised by exchange energy, so Cr adopts $4s^1 3d^5$.",
            commonErrors: [
              "Saying chromium 'breaks the rules randomly' — the exception has an energetic justification.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why electron configurations are WRITTEN as $4s$ before $3d$ (e.g. Fe is $[Ar]\\,4s^2 3d^6$) even though the $3d$ orbitals are lower in energy than $4s$ in the ion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Filling order vs binding order",
                statement:
                  "Configurations are written in the order electrons are added (aufbau order); binding energies differ once the atom is ionized.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a neutral atom, the $4s$ orbital penetrates more effectively and fills before $3d$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The written configuration records the order of filling, so $4s$ is listed first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Once $3d$ electrons are present, repulsion makes $4s$ the highest-energy occupied orbital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In ions the $4s$ electrons are removed first because they are least tightly bound.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Therefore 'written first' reflects filling order, not removal order.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both orderings are correct for their respective contexts — filling in the neutral atom, removal in the ion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Configurations are written in aufbau (filling) order; $4s$ fills first but is removed first because its energy rises above $3d$ once $3d$ fills.",
            commonErrors: [
              "Assuming the written order must match ionization order.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A PES spectrum of sodium shows peaks with relative heights in the ratio $2 : 8 : 1$ at increasing binding energy. Explain how these peak heights allow the electron configuration to be deduced.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PES peak height",
                statement:
                  "The height (or area) of each PES peak is proportional to the number of electrons in the subshell that produced it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each subshell produces one peak positioned at its ionization (binding) energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More electrons in a subshell means more electrons can be ejected at that energy, so the peak is taller.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The ratio $2:8:1$ corresponds to occupancies $2, 8, 1$ electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ordered by increasing binding energy these give $1s^2\\,2s^2 2p^6\\,3s^1$ — sodium's configuration.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Note that the $2s$ and $2p$ electrons may merge into one $n=2$ peak of height $8$ in low-resolution spectra.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The configuration is thus read directly from peak positions and heights.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Peak heights are proportional to subshell occupancy, so the $2:8:1$ ratio reveals $1s^2 2s^2 2p^6 3s^1$.",
            commonErrors: [
              "Reading peak heights as ionization energies rather than electron counts.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A student uses PES data and successive ionization energies to investigate an unknown Period 3 element.",
          parts: [
            {
              label: "a",
              prompt:
                "The PES spectrum shows peak-height ratios $2 : 2 : 6 : 2$. Deduce the full electron configuration.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The first four successive ionization energies are $738$, $1451$, $7733$ and $10540$ kJ mol$^{-1}$. Explain what the jump after the second value shows.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The element reacts vigorously with cold water. Identify the element and explain the reactivity in terms of its electron configuration.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PES and IE analysis",
                statement:
                  "PES peak heights give subshell occupancies; IE jumps mark shell boundaries.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The ratios correspond to occupancies $2, 2, 6, 2$ electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Assigning subshells in binding-energy order gives $1s^2\\,2s^2\\,2p^6\\,3s^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "This is magnesium, $[Ne]\\,3s^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The jump after the second ionization shows that only two electrons occupied the outermost ($n = 3$) shell.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The third electron must come from the tightly bound $n = 2$ shell, consistent with the $3s^2$ configuration.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The element is magnesium, a Group 2 metal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Its two $3s$ electrons are relatively easy to remove (low first and second IEs).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Mg readily forms Mg$^{2+}$ and reduces water, releasing hydrogen — a vigorous reaction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reactivity increases down Group 2 because the outer electrons become easier to remove.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $1s^2\\,2s^2\\,2p^6\\,3s^2$ (Mg). (b) Only two outer-shell electrons; the third comes from $n=2$. (c) Magnesium reacts vigorously, losing its two $3s$ electrons easily.",
            commonErrors: [
              "Confusing peak height with binding energy position.",
            ],
          },
        },
        {
          id: "chemhl-u1-aufbau-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Compare the successive ionization energies of sodium and magnesium, explaining why magnesium's second ionization energy is much larger than sodium's second ionization energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE pattern",
                statement:
                  "After losing their valence electrons, Na$^+$ reaches [Ne] while Mg$^+$ still holds a second $3s$ electron.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na is $[Ne]\\,3s^1$: after losing one electron it has the stable noble-gas configuration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Removing Na's second electron means breaking into the $n = 2$ shell — a huge energy cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mg is $[Ne]\\,3s^2$: its second electron is also a $3s$ electron in the same shell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mg$^+$ has a higher charge-to-size ratio than Na, so its remaining $3s$ electron is held more strongly — but it is still an $n = 3$ electron.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Therefore Mg's second IE ($\\approx 1450$ kJ mol$^{-1}$) is far smaller than Na's second IE ($\\approx 4560$ kJ mol$^{-1}$).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The huge jump for Na occurs one ionization earlier than for Mg.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Na$^+$ is already [Ne], so Na's second IE removes an $n=2$ electron; Mg$^+$ still has a $3s$ electron, so Mg's second IE is much smaller.",
            commonErrors: [
              "Assuming higher nuclear charge always means a bigger second IE — shell occupancy matters more.",
            ],
          },
        },
      ],
    },
  ],
};
