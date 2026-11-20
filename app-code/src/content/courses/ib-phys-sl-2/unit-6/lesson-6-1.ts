import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "physsl-u6-lesson-6-1",
  code: "6-1",
  title: "The Photoelectric Effect and Atomic Spectra",
  goal: "I CAN apply Einstein's photoelectric equation $E = hf = \\phi + K_{\\max}$ and explain how discrete energy levels produce line spectra.",
  standards: ["Topic 8.1", "Topic 8.2", "Paper 1", "Paper 2 Section A"],
  vocabulary: [
    { term: "Photoelectric effect", definition: "The emission of electrons from a metal surface when electromagnetic radiation above a threshold frequency is incident on it." },
    { term: "Photon", definition: "A discrete packet of electromagnetic energy $E = hf$, where $h = 6.63 \\times 10^{-34}$ J s is Planck's constant." },
    { term: "Work function ($\\phi$)", definition: "The minimum energy needed to remove an electron from the surface of a metal; the photon energy must exceed it for emission." },
    { term: "Threshold frequency ($f_0$)", definition: "The minimum frequency of radiation that can cause photoemission, $f_0 = \\phi/h$; below it no electrons are emitted however intense the radiation." },
    { term: "Maximum kinetic energy", definition: "The greatest kinetic energy of emitted photoelectrons, $K_{\\max} = hf - \\phi$, measured using a stopping potential." },
    { term: "Line spectrum", definition: "The discrete set of wavelengths emitted or absorbed by atoms of an element, caused by transitions between discrete energy levels." },
  ],
  concepts: [
    {
      id: "physsl-u6-photoelectric",
      title: "The photoelectric effect",
      skill: "Use $E = hf = \\phi + K_{\\max}$ to calculate photon energies, work functions, threshold frequencies and maximum kinetic energies.",
      lesson: {
        sections: [
          {
            heading: "Einstein's explanation",
            body: "Classical wave theory predicted that any sufficiently intense light should eject electrons, and that emission should occur at any frequency given enough time. Experiment showed instead that photoemission occurs **instantly** and only above a **threshold frequency** $f_0$ that depends on the metal — regardless of intensity. Einstein explained this by treating light as a stream of **photons** of energy $E = hf$. A photon is absorbed by a single electron; if $hf \\ge \\phi$ the electron escapes with maximum kinetic energy $K_{\\max} = hf - \\phi$.",
          },
          {
            heading: "Key relationships",
            body: "The **work function** $\\phi$ is the minimum energy needed to release an electron from the metal surface (also called the threshold energy). Rearranging gives the threshold frequency $f_0 = \\phi/h$. Increasing the **intensity** of the radiation increases the number of photons per second and hence the number of photoelectrons, but does **not** change their maximum kinetic energy — only increasing the frequency does. The stopping potential $V_0$ measures $K_{\\max}$ via $eV_0 = K_{\\max}$.",
          },
          {
            heading: "Evidence for the photon model",
            body: "The photoelectric effect provided strong evidence for the quantisation of light: energy arrives in discrete packets proportional to frequency, not continuously proportional to intensity. This led directly to the development of quantum theory.",
          },
        ],
        keyFormulas: [
          { name: "Photon energy", statement: "E = hf" },
          { name: "Photoelectric equation", statement: "hf = \\phi + K_{\\max}" },
          { name: "Threshold frequency", statement: "f_0 = \\phi/h" },
        ],
        workedExample: {
          problem: "Light of frequency $7.5 \\times 10^{14}$ Hz is incident on a metal with work function $3.6 \\times 10^{-19}$ J. Find the maximum kinetic energy of the photoelectrons and the threshold frequency.",
          solution: "Photon energy $E = hf = 6.63 \\times 10^{-34} \\times 7.5 \\times 10^{14} = 4.97 \\times 10^{-19}$ J. $K_{\\max} = E - \\phi = 4.97 \\times 10^{-19} - 3.6 \\times 10^{-19} = 1.37 \\times 10^{-19}$ J. Threshold frequency $f_0 = \\phi/h = 3.6 \\times 10^{-19}/6.63 \\times 10^{-34} = 5.4 \\times 10^{14}$ Hz.",
        },
      },
      questions: [
        {
          id: "physsl-u6-photoelectric-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "In the photoelectric effect, what happens when the intensity of the incident radiation is increased (keeping the frequency above threshold)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The maximum kinetic energy of the photoelectrons increases" },
              { id: "b", text: "The number of photoelectrons emitted per second increases" },
              { id: "c", text: "The threshold frequency decreases" },
              { id: "d", text: "No photoelectrons are emitted" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intensity vs frequency", statement: "Intensity controls the number of photons (and photoelectrons); frequency controls the energy of each photon." },
            ],
            steps: [
              { reasoning: "More intense light means more photons per second, so more electrons are ejected, but each photon has the same energy so $K_{\\max}$ is unchanged.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** the number of photoelectrons emitted per second increases",
            commonErrors: ["Thinking higher intensity gives photoelectrons more kinetic energy."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the energy of a photon of frequency $6.0 \\times 10^{14}$ Hz. ($h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.0 \\times 10^{-19}$ J" },
              { id: "b", text: "$2.0 \\times 10^{-19}$ J" },
              { id: "c", text: "$1.1 \\times 10^{-48}$ J" },
              { id: "d", text: "$4.0 \\times 10^{-20}$ J" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
            ],
            steps: [
              { reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 3.98 \\times 10^{-19} \\approx 4.0 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $4.0 \\times 10^{-19}$ J",
            commonErrors: ["Dividing by $h$ instead of multiplying.", "Misplacing powers of ten."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Monochromatic light of frequency $8.0 \\times 10^{14}$ Hz is directed at a metal surface with work function $3.0 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No photoelectrons are emitted" },
              { id: "b", text: "$K_{\\max} = 2.3 \\times 10^{-19}$ J" },
              { id: "c", text: "$K_{\\max} = 5.3 \\times 10^{-19}$ J" },
              { id: "d", text: "$K_{\\max} = 1.5 \\times 10^{-19}$ J" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "hf = \\phi + K_{\\max}" },
            ],
            steps: [
              { reasoning: "Photon energy.", working: "E = hf = 6.63 \\times 10^{-34} \\times 8.0 \\times 10^{14} = 5.30 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Photon energy exceeds the work function, so emission occurs.", working: "5.30 \\times 10^{-19} > 3.0 \\times 10^{-19} \\checkmark", marks: 1, markCode: "M" },
              { reasoning: "Maximum kinetic energy.", working: "K_{\\max} = 5.30 \\times 10^{-19} - 3.0 \\times 10^{-19} = 2.30 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Option (b) gives the correct value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $K_{\\max} = 2.3 \\times 10^{-19}$ J",
            commonErrors: ["Adding the work function instead of subtracting it.", "Thinking emission requires $hf < \\phi$."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Light of frequency $7.5 \\times 10^{14}$ Hz is incident on a metal surface of work function $3.6 \\times 10^{-19}$ J. Take $h = 6.63 \\times 10^{-34}$ J s.",
          parts: [
            { label: "a", prompt: "Calculate the energy of each photon.", marks: 2 },
            { label: "b", prompt: "Calculate the maximum kinetic energy of the emitted photoelectrons.", marks: 2 },
            { label: "c", prompt: "Calculate the threshold frequency of the metal.", marks: 2 },
            { label: "d", prompt: "Explain why no photoelectrons are emitted if the frequency of the light is below the threshold frequency, however intense the light.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
              { kind: "formula", name: "Photoelectric equation", statement: "hf = \\phi + K_{\\max}" },
              { kind: "formula", name: "Threshold frequency", statement: "f_0 = \\phi/h" },
            ],
            steps: [
              { part: "a", reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 7.5 \\times 10^{14} = 4.97 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Subtract the work function from the photon energy.", working: "K_{\\max} = 4.97 \\times 10^{-19} - 3.6 \\times 10^{-19} = 1.37 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Threshold frequency is $\\phi/h$.", working: "f_0 = \\frac{3.6 \\times 10^{-19}}{6.63 \\times 10^{-34}} = 5.43 \\times 10^{14} \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Each photon must transfer at least the work function $\\phi$ to release an electron; if $hf < \\phi$ no single photon has enough energy.", working: "hf < \\phi \\Rightarrow \\text{no emission}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Intensity only increases the number of photons; it does not increase the energy per photon, so more intense light below threshold still cannot eject electrons.", working: "\\text{intensity} \\neq \\text{photon energy}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $E = 4.97 \\times 10^{-19}$ J (b) $K_{\\max} = 1.37 \\times 10^{-19}$ J (c) $f_0 = 5.43 \\times 10^{14}$ Hz (d) each photon has energy $hf < \\phi$ and cannot supply the work function; intensity only adds more photons, not more energy per photon",
            commonErrors: ["Dividing $\\phi$ by $h$ incorrectly or using $E = hc/\\lambda$ with the wrong quantity.", "Believing higher intensity can eject electrons below threshold."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is meant by the work function of a metal surface?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The minimum energy needed to remove an electron from the surface" },
              { id: "b", text: "The energy carried by a single photon of light" },
              { id: "c", text: "The maximum kinetic energy of emitted photoelectrons" },
              { id: "d", text: "The frequency at which photoemission begins" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Work function", statement: "The minimum energy needed to remove an electron from a metal surface; $\\phi = hf_0$." },
            ],
            steps: [
              { reasoning: "The work function is the threshold energy for photoemission and is a property of the particular metal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** the minimum energy needed to remove an electron from the surface",
            commonErrors: ["Confusing the work function with photon energy or with the threshold frequency."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the energy of a photon of frequency $5.0 \\times 10^{14}$ Hz. ($h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.3 \\times 10^{-19}$ J" },
              { id: "b", text: "$1.3 \\times 10^{-48}$ J" },
              { id: "c", text: "$6.6 \\times 10^{-20}$ J" },
              { id: "d", text: "$3.3 \\times 10^{-20}$ J" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
            ],
            steps: [
              { reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 5.0 \\times 10^{14}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E = 3.32 \\times 10^{-19} \\approx 3.3 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3.3 \\times 10^{-19}$ J",
            commonErrors: ["Dividing by $h$ instead of multiplying.", "Misplacing the power of ten."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Monochromatic light of frequency $7.0 \\times 10^{14}$ Hz is incident on a metal of work function $4.0 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "Photon energy", answer: 4.64e-19, tolerance: 1e-20, unit: "J" },
              { label: "Maximum kinetic energy of photoelectrons", answer: 6.4e-20, tolerance: 5e-21, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
              { kind: "formula", name: "Photoelectric equation", statement: "hf = \\phi + K_{\\max}" },
            ],
            steps: [
              { reasoning: "Photon energy from $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 7.0 \\times 10^{14} = 4.64 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "The photon energy exceeds the work function, so photoelectrons are emitted.", working: "4.64 \\times 10^{-19} > 4.0 \\times 10^{-19} \\checkmark", marks: 1, markCode: "A" },
              { reasoning: "Maximum kinetic energy is the photon energy minus the work function.", working: "K_{\\max} = 4.64 \\times 10^{-19} - 4.0 \\times 10^{-19}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "K_{\\max} = 6.4 \\times 10^{-20} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Photon energy $= 4.64 \\times 10^{-19}$ J; $K_{\\max} = 6.4 \\times 10^{-20}$ J",
            commonErrors: ["Adding the work function instead of subtracting it.", "Reporting the photon energy as the kinetic energy."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "A metal has a work function of $3.3 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Threshold frequency", answer: 4.98e14, tolerance: 1e12, unit: "Hz" },
              { label: "Wavelength corresponding to the threshold frequency", answer: 6.02e-7, tolerance: 1e-9, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Threshold frequency", statement: "f_0 = \\phi/h" },
              { kind: "formula", name: "Wave speed", statement: "c = f\\lambda" },
            ],
            steps: [
              { reasoning: "Threshold frequency is $\\phi/h$.", working: "f_0 = \\frac{3.3 \\times 10^{-19}}{6.63 \\times 10^{-34}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f_0 = 4.98 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "Wavelength at threshold from $\\lambda_0 = c/f_0$.", working: "\\lambda_0 = \\frac{3.0 \\times 10^{8}}{4.98 \\times 10^{14}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\lambda_0 = 6.02 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_0 = 4.98 \\times 10^{14}$ Hz; $\\lambda_0 = 6.02 \\times 10^{-7}$ m",
            commonErrors: ["Using $h/c$ instead of $\\phi/h$.", "Forgetting that the threshold wavelength is the longest wavelength that can cause emission."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Light of wavelength $500$ nm is incident on a metal surface of work function $2.0 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency of the light", answer: 6.0e14, tolerance: 1e12, unit: "Hz" },
              { label: "Photon energy", answer: 3.98e-19, tolerance: 1e-20, unit: "J" },
              { label: "Maximum kinetic energy of photoelectrons", answer: 1.98e-19, tolerance: 1e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency", statement: "f = c/\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
              { kind: "formula", name: "Photoelectric equation", statement: "K_{\\max} = hf - \\phi" },
            ],
            steps: [
              { reasoning: "Frequency from wavelength.", working: "f = \\frac{3.0 \\times 10^{8}}{500 \\times 10^{-9}} = 6.0 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Frequency value.", working: "f = 6.0 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "Photon energy.", working: "E = hf = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.98 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Photon energy value.", working: "E = 3.98 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Maximum kinetic energy is photon energy minus work function.", working: "K_{\\max} = 3.98 \\times 10^{-19} - 2.0 \\times 10^{-19} = 1.98 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$f = 6.0 \\times 10^{14}$ Hz; $E = 3.98 \\times 10^{-19}$ J; $K_{\\max} = 1.98 \\times 10^{-19}$ J",
            commonErrors: ["Using $\\lambda$ in nm without converting to metres.", "Forgetting to subtract the work function."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Light of frequency $8.0 \\times 10^{14}$ Hz is incident on a metal of work function $5.0 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s, $e = 1.6 \\times 10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum kinetic energy of photoelectrons", answer: 3.04e-20, tolerance: 1e-21, unit: "J" },
              { label: "Stopping potential", answer: 0.19, tolerance: 0.01, unit: "V" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
              { kind: "formula", name: "Photoelectric equation", statement: "K_{\\max} = hf - \\phi" },
              { kind: "formula", name: "Stopping potential", statement: "eV_0 = K_{\\max}" },
            ],
            steps: [
              { reasoning: "Photon energy.", working: "E = hf = 6.63 \\times 10^{-34} \\times 8.0 \\times 10^{14} = 5.30 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Maximum kinetic energy.", working: "K_{\\max} = 5.30 \\times 10^{-19} - 5.0 \\times 10^{-19} = 3.04 \\times 10^{-20} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Stopping potential from $eV_0 = K_{\\max}$.", working: "V_0 = \\frac{K_{\\max}}{e} = \\frac{3.04 \\times 10^{-20}}{1.6 \\times 10^{-19}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V_0 = 0.19 \\text{ V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$K_{\\max} = 3.04 \\times 10^{-20}$ J; $V_0 = 0.19$ V",
            commonErrors: ["Using $K_{\\max}$ in eV without converting to joules.", "Dividing by $h$ instead of $e$ when finding the stopping potential."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The frequency of the incident light on a metal surface is increased (remaining above the threshold frequency). What happens to the maximum kinetic energy of the photoelectrons and to the number emitted per second?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_{\\max}$ increases; number per second unchanged" },
              { id: "b", text: "$K_{\\max}$ unchanged; number per second increases" },
              { id: "c", text: "$K_{\\max}$ increases; number per second increases" },
              { id: "d", text: "Both remain unchanged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Frequency vs intensity", statement: "Photon energy $hf$ sets $K_{\\max}$; intensity sets the photon (and photoelectron) rate." },
            ],
            steps: [
              { reasoning: "Higher frequency means each photon carries more energy, so $K_{\\max} = hf - \\phi$ increases.", marks: 1, markCode: "M" },
              { reasoning: "The number of photons per second (and hence photoelectrons) depends on intensity, which is unchanged, so the rate is unchanged.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $K_{\\max}$ increases; number per second unchanged",
            commonErrors: ["Thinking a higher frequency also increases the number of photons."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The same light source shines on two different metals, A and B. Metal B has the larger work function. For the same incident frequency, which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metal A emits photoelectrons with greater $K_{\\max}$" },
              { id: "b", text: "Metal B emits photoelectrons with greater $K_{\\max}$" },
              { id: "c", text: "Both metals emit photoelectrons with the same $K_{\\max}$" },
              { id: "d", text: "Neither metal emits photoelectrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "K_{\\max} = hf - \\phi; for fixed $f$, a smaller $\\phi$ gives a larger $K_{\\max}$." },
            ],
            steps: [
              { reasoning: "The photon energy $hf$ is the same for both metals.", marks: 1, markCode: "M" },
              { reasoning: "Metal A has the smaller work function, so less energy is used to release the electron and more remains as kinetic energy.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** metal A emits photoelectrons with greater $K_{\\max}$",
            commonErrors: ["Thinking the metal with the larger work function gives faster electrons."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The stopping potential for photoelectrons emitted from a metal is measured as $0.60$ V when light of wavelength $450$ nm is used. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$, $e = 1.6 \\times 10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "Maximum kinetic energy of photoelectrons", answer: 9.6e-20, tolerance: 1e-21, unit: "J" },
              { label: "Work function of the metal", answer: 3.46e-19, tolerance: 1e-20, unit: "J" },
              { label: "Threshold frequency", answer: 5.22e14, tolerance: 1e12, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Stopping potential", statement: "eV_0 = K_{\\max}" },
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda" },
              { kind: "formula", name: "Photoelectric equation", statement: "\\phi = hf - K_{\\max}" },
              { kind: "formula", name: "Threshold frequency", statement: "f_0 = \\phi/h" },
            ],
            steps: [
              { reasoning: "Maximum kinetic energy from the stopping potential.", working: "K_{\\max} = eV_0 = 1.6 \\times 10^{-19} \\times 0.60 = 9.6 \\times 10^{-20} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Photon energy at $\\lambda = 450$ nm.", working: "E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{450 \\times 10^{-9}} = 4.42 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Work function is photon energy minus maximum kinetic energy.", working: "\\phi = 4.42 \\times 10^{-19} - 9.6 \\times 10^{-20} = 3.46 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Threshold frequency from $f_0 = \\phi/h$.", working: "f_0 = \\frac{3.46 \\times 10^{-19}}{6.63 \\times 10^{-34}} = 5.22 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "All three values are consistent with the photoelectric equation.", working: "hf = \\phi + K_{\\max} \\checkmark", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$K_{\\max} = 9.6 \\times 10^{-20}$ J; $\\phi = 3.46 \\times 10^{-19}$ J; $f_0 = 5.22 \\times 10^{14}$ Hz",
            commonErrors: ["Using $V_0$ in volts directly as an energy in joules.", "Adding $K_{\\max}$ to the photon energy instead of subtracting to find $\\phi$."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A laser of power $1.0 \\times 10^{-3}$ W emits light of wavelength $500$ nm. Assuming every photon ejects one electron, calculate the rate of photoelectron emission. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Photoelectrons emitted per second", answer: 2.51e15, tolerance: 1e13, unit: "s^{-1}" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda" },
              { kind: "principle", name: "Photon flux", statement: "Number of photons per second $= P/E_{\\text{photon}}$; one photon can eject at most one electron." },
            ],
            steps: [
              { reasoning: "Energy of one photon.", working: "E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{500 \\times 10^{-9}} = 3.98 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Photon rate is power divided by energy per photon.", working: "N = \\frac{P}{E} = \\frac{1.0 \\times 10^{-3}}{3.98 \\times 10^{-19}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N = 2.51 \\times 10^{15} \\text{ s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.51 \\times 10^{15}$ photoelectrons per second",
            commonErrors: ["Multiplying the power by the photon energy instead of dividing.", "Using the laser power in mW without converting to W."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Light of frequency $6.0 \\times 10^{14}$ Hz is incident on a metal surface of work function $2.0 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s)",
          parts: [
            { label: "a", prompt: "Calculate the energy of each photon.", marks: 2 },
            { label: "b", prompt: "Calculate the maximum kinetic energy of the emitted photoelectrons.", marks: 2 },
            { label: "c", prompt: "Explain why increasing the intensity of the light does not change the maximum kinetic energy of the photoelectrons.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
              { kind: "formula", name: "Photoelectric equation", statement: "K_{\\max} = hf - \\phi" },
              { kind: "principle", name: "Intensity vs photon energy", statement: "Intensity changes the number of photons per second, not the energy of each photon." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.98 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Subtract the work function from the photon energy.", working: "K_{\\max} = 3.98 \\times 10^{-19} - 2.0 \\times 10^{-19} = 1.98 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Each photon is absorbed by a single electron; $K_{\\max}$ depends only on the photon energy $hf$ and the work function.", working: "K_{\\max} = hf - \\phi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Increasing intensity adds more photons per second, raising the photoelectric current but leaving the energy of each photon — and hence $K_{\\max}$ — unchanged.", working: "\\text{intensity} \\neq \\text{photon energy}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $E = 3.98 \\times 10^{-19}$ J (b) $K_{\\max} = 1.98 \\times 10^{-19}$ J (c) intensity only increases the number of photons per second; each photon still has energy $hf$, so $K_{\\max}$ is unchanged",
            commonErrors: ["Saying brighter light gives each electron more energy.", "Confusing photoelectric current with maximum kinetic energy."],
          },
        },
        {
          id: "physsl-u6-photoelectric-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Light of wavelength $400$ nm is incident on a clean sodium surface of work function $3.7 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$, $e = 1.6 \\times 10^{-19}$ C)",
          parts: [
            { label: "a", prompt: "Calculate the frequency of the light.", marks: 2 },
            { label: "b", prompt: "Calculate the energy of each photon.", marks: 2 },
            { label: "c", prompt: "Calculate the maximum kinetic energy of the photoelectrons and the corresponding stopping potential.", marks: 2 },
            { label: "d", prompt: "Calculate the threshold frequency and the threshold wavelength of sodium.", marks: 2 },
            { label: "e", prompt: "Explain why no photoelectrons are emitted if light of wavelength $700$ nm is used instead, however intense it is.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency", statement: "f = c/\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hf = hc/\\lambda" },
              { kind: "formula", name: "Photoelectric equation", statement: "hf = \\phi + K_{\\max}" },
              { kind: "formula", name: "Stopping potential", statement: "eV_0 = K_{\\max}" },
              { kind: "formula", name: "Threshold", statement: "f_0 = \\phi/h, \\lambda_0 = c/f_0" },
            ],
            steps: [
              { part: "a", reasoning: "Frequency from $f = c/\\lambda$ with $\\lambda = 400$ nm.", working: "f = \\frac{3.0 \\times 10^{8}}{400 \\times 10^{-9}} = 7.5 \\times 10^{14} \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Photon energy from $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 7.5 \\times 10^{14} = 4.97 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Maximum kinetic energy is photon energy minus work function.", working: "K_{\\max} = 4.97 \\times 10^{-19} - 3.7 \\times 10^{-19} = 1.27 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Stopping potential from $eV_0 = K_{\\max}$.", working: "V_0 = \\frac{1.27 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 0.80 \\text{ V}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Threshold frequency from $f_0 = \\phi/h$.", working: "f_0 = \\frac{3.7 \\times 10^{-19}}{6.63 \\times 10^{-34}} = 5.58 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Threshold wavelength from $\\lambda_0 = c/f_0$.", working: "\\lambda_0 = \\frac{3.0 \\times 10^{8}}{5.58 \\times 10^{14}} = 5.38 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "At $700$ nm the frequency is below $f_0$, so each photon has energy $hf < \\phi$.", working: "hf < \\phi", marks: 1, markCode: "M" },
              { part: "e", reasoning: "No single photon can supply the work function, and intensity only increases the number of photons — it cannot raise the energy of each photon, so no electrons are emitted.", working: "\\text{intensity} \\neq \\text{photon energy}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $f = 7.5 \\times 10^{14}$ Hz (b) $E = 4.97 \\times 10^{-19}$ J (c) $K_{\\max} = 1.27 \\times 10^{-19}$ J, $V_0 = 0.80$ V (d) $f_0 = 5.58 \\times 10^{14}$ Hz, $\\lambda_0 = 5.38 \\times 10^{-7}$ m (e) $700$ nm light has $f < f_0$, so $hf < \\phi$; intensity cannot compensate",
            commonErrors: ["Using $\\lambda$ in nm without converting to metres.", "Believing sufficiently intense below-threshold light can cause emission."],
            examinerNote: "Accept $K_{\\max}$ in the range $1.2$–$1.3 \\times 10^{-19}$ J and $V_0$ in the range $0.75$–$0.85$ V for rounding differences.",
          },
        },
      ],
    },
    {
      id: "physsl-u6-spectra",
      title: "Atomic energy levels and line spectra",
      skill: "Explain emission and absorption spectra in terms of discrete energy levels and calculate photon energies and frequencies from level differences.",
      lesson: {
        sections: [
          {
            heading: "Discrete energy levels",
            body: "Experiments such as the photoelectric effect and atomic spectra show that atoms can only occupy **discrete energy levels** — electrons cannot have arbitrary energies. The energy of a level is fixed, and transitions between levels involve a definite energy change $\\Delta E$.",
          },
          {
            heading: "Emission and absorption spectra",
            body: "When an electron falls from a higher level to a lower one it emits a photon of energy $E = hf = hc/\\lambda$ equal to the level difference $\\Delta E$. This produces an **emission spectrum**: bright lines on a dark background at characteristic wavelengths. When white light passes through a cool gas, electrons absorb photons of exactly the right energies to jump up, producing an **absorption spectrum**: dark lines on a continuous spectrum at the same wavelengths. Each element has a unique line spectrum, which allows elements to be identified in stars.",
          },
          {
            heading: "The hydrogen spectrum",
            body: "The visible lines of hydrogen (e.g. the red $656$ nm line) arise from transitions to the $n = 2$ level from higher levels. The pattern of lines is explained quantitatively by the Bohr model, in which the allowed energies are $E_n = -13.6/n^2$ eV. The energy released in a transition is $\\Delta E = hf$, so each line corresponds to a specific pair of levels.",
          },
        ],
        keyFormulas: [
          { name: "Photon from transition", statement: "hf = \\Delta E = E_{\\text{high}} - E_{\\text{low}}" },
          { name: "Photon energy via wavelength", statement: "E = hc/\\lambda" },
          { name: "Frequency", statement: "f = c/\\lambda" },
        ],
        workedExample: {
          problem: "An electron in a hydrogen atom transitions between two levels, emitting a photon of wavelength $656$ nm. Find the photon energy and frequency.",
          solution: "Energy $E = hc/\\lambda = (6.63 \\times 10^{-34} \\times 3.0 \\times 10^8)/(656 \\times 10^{-9}) = 3.03 \\times 10^{-19}$ J. Frequency $f = c/\\lambda = 3.0 \\times 10^8/656 \\times 10^{-9} = 4.57 \\times 10^{14}$ Hz.",
        },
      },
      questions: [
        {
          id: "physsl-u6-spectra-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What is an emission line spectrum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A continuous band of all colours" },
              { id: "b", text: "Bright lines at discrete wavelengths on a dark background" },
              { id: "c", text: "Dark lines on a continuous spectrum" },
              { id: "d", text: "A spectrum that is the same for every element" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Emission spectrum", statement: "Bright lines at discrete wavelengths produced when electrons fall between discrete energy levels." },
            ],
            steps: [
              { reasoning: "Emission spectra consist of discrete bright lines corresponding to allowed energy-level differences.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** bright lines at discrete wavelengths on a dark background",
            commonErrors: ["Confusing emission spectra with absorption spectra."],
          },
        },
        {
          id: "physsl-u6-spectra-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An electron in an atom makes a transition that releases energy $\\Delta E = 4.0 \\times 10^{-19}$ J. Calculate the frequency of the emitted photon. ($h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.0 \\times 10^{14}$ Hz" },
              { id: "b", text: "$2.7 \\times 10^{-53}$ Hz" },
              { id: "c", text: "$1.2 \\times 10^{15}$ Hz" },
              { id: "d", text: "$6.0 \\times 10^{13}$ Hz" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "hf = \\Delta E" },
            ],
            steps: [
              { reasoning: "Apply $f = \\Delta E/h$.", working: "f = \\frac{4.0 \\times 10^{-19}}{6.63 \\times 10^{-34}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f = 6.03 \\times 10^{14} \\approx 6.0 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6.0 \\times 10^{14}$ Hz",
            commonErrors: ["Multiplying by $h$ instead of dividing.", "Using $c/\\lambda$ with the energy instead of wavelength."],
          },
        },
        {
          id: "physsl-u6-spectra-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A photon is emitted when an electron in a hydrogen atom falls from a higher energy level to a lower one. The photon has energy $3.0 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^8$ m s$^{-1}$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wavelength $2.0 \\times 10^{-7}$ m; frequency $1.5 \\times 10^{15}$ Hz" },
              { id: "b", text: "Wavelength $6.6 \\times 10^{-7}$ m; frequency $4.5 \\times 10^{14}$ Hz" },
              { id: "c", text: "Wavelength $6.6 \\times 10^{-7}$ m; frequency $1.5 \\times 10^{15}$ Hz" },
              { id: "d", text: "Wavelength $2.2 \\times 10^{-16}$ m; frequency $4.5 \\times 10^{14}$ Hz" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy via wavelength", statement: "E = hc/\\lambda" },
              { kind: "formula", name: "Frequency", statement: "f = c/\\lambda" },
            ],
            steps: [
              { reasoning: "Wavelength from $\\lambda = hc/E$.", working: "\\lambda = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^8}{3.0 \\times 10^{-19}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\lambda = 6.63 \\times 10^{-7} \\approx 6.6 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Frequency from $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^8}{6.63 \\times 10^{-7}} = 4.52 \\times 10^{14} \\approx 4.5 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) matches both values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** wavelength $6.6 \\times 10^{-7}$ m; frequency $4.5 \\times 10^{14}$ Hz",
            commonErrors: ["Using $\\lambda = E/hc$ instead of $hc/E$.", "Confusing wavelength and frequency calculations."],
          },
        },
        {
          id: "physsl-u6-spectra-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In a hydrogen discharge tube, an electron makes a transition that emits a photon of wavelength $656$ nm (the red line of the hydrogen spectrum). Take $h = 6.63 \\times 10^{-34}$ J s and $c = 3.0 \\times 10^8$ m s$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the energy of the emitted photon.", marks: 2 },
            { label: "b", prompt: "Calculate the frequency of the photon.", marks: 2 },
            { label: "c", prompt: "Explain why only certain wavelengths appear in the emission spectrum of hydrogen.", marks: 2 },
            { label: "d", prompt: "State and explain whether this photon is emitted or absorbed in the transition described.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda" },
              { kind: "formula", name: "Frequency", statement: "f = c/\\lambda" },
              { kind: "property", name: "Discrete levels", statement: "Atoms have discrete energy levels, so only certain energy differences (and hence wavelengths) are possible." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $E = hc/\\lambda$ with $\\lambda = 656$ nm $= 656 \\times 10^{-9}$ m.", working: "E = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^8}{656 \\times 10^{-9}} = 3.03 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^8}{656 \\times 10^{-9}} = 4.57 \\times 10^{14} \\text{ Hz}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Hydrogen atoms occupy discrete energy levels; transitions can only occur between pairs of these levels.", working: "\\text{discrete energy levels}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Each transition has a fixed $\\Delta E$, hence a fixed photon energy and wavelength — producing sharp lines rather than a continuum.", working: "\\Delta E = hf \\Rightarrow \\text{fixed } \\lambda", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The electron falls from a higher to a lower level, releasing energy as a photon.", working: "\\text{emitted}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Absorption would require the electron to gain energy and move to a higher level, emitting no photon.", working: "\\text{emission} \\neq \\text{absorption}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $E = 3.03 \\times 10^{-19}$ J (b) $f = 4.57 \\times 10^{14}$ Hz (c) only discrete energy-level differences are allowed, so only certain photon energies/wavelengths occur (d) emitted — the electron loses energy falling to a lower level",
            commonErrors: ["Using $\\lambda$ in nm without converting to metres.", "Saying the spectrum is continuous because light contains all wavelengths."],
          },
        },
        {
          id: "physsl-u6-spectra-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "What causes an atom to emit a line spectrum rather than a continuous spectrum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electrons can only occupy discrete energy levels, so only certain energy changes are possible" },
              { id: "b", text: "Light is absorbed by the nucleus" },
              { id: "c", text: "The atom is continuously heated" },
              { id: "d", text: "Photons are destroyed in the atom" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Discrete energy levels", statement: "Atoms occupy discrete energy levels; transitions between them give photons of specific energies $\\Delta E = hf$." },
            ],
            steps: [
              { reasoning: "Only transitions between allowed levels occur, so only certain photon energies — and hence wavelengths — are emitted.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** electrons can only occupy discrete energy levels, so only certain energy changes are possible",
            commonErrors: ["Thinking a line spectrum is produced by random collisions of atoms."],
          },
        },
        {
          id: "physsl-u6-spectra-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An electron transition in an atom releases energy $\\Delta E = 2.0 \\times 10^{-19}$ J. Calculate the frequency of the emitted photon. ($h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.0 \\times 10^{14}$ Hz" },
              { id: "b", text: "$6.6 \\times 10^{-16}$ Hz" },
              { id: "c", text: "$1.3 \\times 10^{15}$ Hz" },
              { id: "d", text: "$3.0 \\times 10^{15}$ Hz" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "hf = \\Delta E" },
            ],
            steps: [
              { reasoning: "Apply $f = \\Delta E/h$.", working: "f = \\frac{2.0 \\times 10^{-19}}{6.63 \\times 10^{-34}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f = 3.02 \\times 10^{14} \\approx 3.0 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3.0 \\times 10^{14}$ Hz",
            commonErrors: ["Multiplying by $h$ instead of dividing."],
          },
        },
        {
          id: "physsl-u6-spectra-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A photon is emitted with wavelength $450$ nm. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Frequency of the photon", answer: 6.67e14, tolerance: 1e12, unit: "Hz" },
              { label: "Energy of the photon", answer: 4.42e-19, tolerance: 1e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency", statement: "f = c/\\lambda" },
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda" },
            ],
            steps: [
              { reasoning: "Frequency from $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^{8}}{450 \\times 10^{-9}} = 6.67 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Frequency value.", working: "f = 6.67 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "A" },
              { reasoning: "Photon energy from $E = hc/\\lambda$.", working: "E = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{450 \\times 10^{-9}} = 4.42 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Energy value.", working: "E = 4.42 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f = 6.67 \\times 10^{14}$ Hz; $E = 4.42 \\times 10^{-19}$ J",
            commonErrors: ["Using $\\lambda$ in nm without converting to metres.", "Confusing $E = hf$ with $E = hc/\\lambda$ when the wavelength is given."],
          },
        },
        {
          id: "physsl-u6-spectra-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 4,
          stem: "A transition in an atom releases energy $\\Delta E = 6.6 \\times 10^{-19}$ J. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength of the emitted photon", answer: 3.0e-7, tolerance: 1e-9, unit: "m" },
              { label: "Frequency of the emitted photon", answer: 1.0e15, tolerance: 1e13, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda = hf" },
            ],
            steps: [
              { reasoning: "Wavelength from $\\lambda = hc/\\Delta E$.", working: "\\lambda = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{6.6 \\times 10^{-19}} = 3.01 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Wavelength value.", working: "\\lambda \\approx 3.0 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Frequency from $f = \\Delta E/h$.", working: "f = \\frac{6.6 \\times 10^{-19}}{6.63 \\times 10^{-34}} = 9.95 \\times 10^{14} \\approx 1.0 \\times 10^{15} \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Frequency value.", working: "f \\approx 1.0 \\times 10^{15} \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 3.0 \\times 10^{-7}$ m; $f = 1.0 \\times 10^{15}$ Hz",
            commonErrors: ["Using $\\lambda = E/hc$ instead of $hc/E$.", "Mixing up energy and frequency when applying $E = hf$."],
          },
        },
        {
          id: "physsl-u6-spectra-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In hydrogen, an electron transition emits an ultraviolet photon of wavelength $121.6$ nm. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy of the photon", answer: 1.64e-18, tolerance: 1e-20, unit: "J" },
              { label: "Frequency of the photon", answer: 2.47e15, tolerance: 1e13, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda" },
              { kind: "formula", name: "Frequency", statement: "f = c/\\lambda" },
            ],
            steps: [
              { reasoning: "Energy from $E = hc/\\lambda$.", working: "E = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{121.6 \\times 10^{-9}} = 1.64 \\times 10^{-18} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Energy value.", working: "E = 1.64 \\times 10^{-18} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Frequency from $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^{8}}{121.6 \\times 10^{-9}} = 2.47 \\times 10^{15} \\text{ Hz}", marks: 1, markCode: "M" },
              { reasoning: "Frequency value.", working: "f = 2.47 \\times 10^{15} \\text{ Hz}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 1.64 \\times 10^{-18}$ J; $f = 2.47 \\times 10^{15}$ Hz",
            commonErrors: ["Using $\\lambda$ in nm directly without conversion.", "Reporting the wavelength instead of the frequency."],
          },
        },
        {
          id: "physsl-u6-spectra-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "In the Bohr model of hydrogen the energy levels are $E_n = -13.6/n^2$ eV. An electron makes a transition from $n = 3$ to $n = 2$. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$, $1$ eV $= 1.6 \\times 10^{-19}$ J)",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy released in the transition", answer: 3.02e-19, tolerance: 1e-20, unit: "J" },
              { label: "Wavelength of the emitted photon", answer: 6.58e-7, tolerance: 1e-9, unit: "m" },
              { label: "Frequency of the emitted photon", answer: 4.56e14, tolerance: 1e12, unit: "Hz" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Bohr energy levels", statement: "E_n = -13.6/n^2 \\text{ eV}; \\Delta E = E_3 - E_2" },
              { kind: "formula", name: "Photon energy", statement: "E = hf = hc/\\lambda" },
            ],
            steps: [
              { reasoning: "Energy difference in eV: $13.6(1/4 - 1/9)$.", working: "\\Delta E = 13.6 \\times \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 13.6 \\times \\frac{5}{36} = 1.89 \\text{ eV}", marks: 1, markCode: "M" },
              { reasoning: "Convert to joules.", working: "\\Delta E = 1.89 \\times 1.6 \\times 10^{-19} = 3.02 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Wavelength from $\\lambda = hc/\\Delta E$.", working: "\\lambda = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{3.02 \\times 10^{-19}} = 6.58 \\times 10^{-7} \\text{ m} \\;(= 656 \\text{ nm})", marks: 1, markCode: "M" },
              { reasoning: "Wavelength value.", working: "\\lambda = 6.58 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "A" },
              { reasoning: "Frequency from $f = c/\\lambda$.", working: "f = \\frac{3.0 \\times 10^{8}}{6.58 \\times 10^{-7}} = 4.56 \\times 10^{14} \\text{ Hz}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$\\Delta E = 3.02 \\times 10^{-19}$ J; $\\lambda = 6.58 \\times 10^{-7}$ m (656 nm); $f = 4.56 \\times 10^{14}$ Hz",
            commonErrors: ["Using $1/n^2$ differences incorrectly, e.g. $13.6(1/2 - 1/3)$.", "Forgetting to convert eV to joules."],
            examinerNote: "This is the Balmer H-alpha line at 656 nm — accept wavelengths in the range $6.5$–$6.6 \\times 10^{-7}$ m.",
          },
        },
        {
          id: "physsl-u6-spectra-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What does an absorption spectrum look like, and how is it produced?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bright lines on a dark background, produced when electrons fall to lower levels" },
              { id: "b", text: "Dark lines on a continuous spectrum, produced when electrons absorb photons to reach higher levels" },
              { id: "c", text: "A continuous spectrum with no lines" },
              { id: "d", text: "Dark lines on a dark background" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absorption spectrum", statement: "Dark lines at discrete wavelengths where electrons absorb photons of exactly the right energy to move to higher levels." },
            ],
            steps: [
              { reasoning: "Absorption spectra are continuous spectra with dark lines where specific wavelengths have been absorbed.", marks: 1, markCode: "M" },
              { reasoning: "Electrons absorb photons matching level differences, removing those wavelengths from the continuous background.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** dark lines on a continuous spectrum, produced when electrons absorb photons to reach higher levels",
            commonErrors: ["Describing an absorption spectrum as bright lines."],
          },
        },
        {
          id: "physsl-u6-spectra-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Two photons have wavelengths $400$ nm and $800$ nm. Which statement about their energies is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The $800$ nm photon has twice the energy of the $400$ nm photon" },
              { id: "b", text: "The $400$ nm photon has twice the energy of the $800$ nm photon" },
              { id: "c", text: "Both photons have the same energy" },
              { id: "d", text: "The $800$ nm photon has four times the energy of the $400$ nm photon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda — energy is inversely proportional to wavelength." },
            ],
            steps: [
              { reasoning: "Halving the wavelength doubles the photon energy since $E \\propto 1/\\lambda$.", marks: 1, markCode: "M" },
              { reasoning: "The $400$ nm photon therefore has twice the energy of the $800$ nm photon.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** the $400$ nm photon has twice the energy of the $800$ nm photon",
            commonErrors: ["Thinking longer wavelength means more energy."],
          },
        },
        {
          id: "physsl-u6-spectra-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Two visible lines of the hydrogen spectrum have wavelengths $656$ nm and $486$ nm. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy of the $656$ nm photon", answer: 3.03e-19, tolerance: 1e-20, unit: "J" },
              { label: "Energy of the $486$ nm photon", answer: 4.09e-19, tolerance: 1e-20, unit: "J" },
              { label: "Energy difference between the two photons", answer: 1.06e-19, tolerance: 1e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda" },
            ],
            steps: [
              { reasoning: "Energy of the $656$ nm photon.", working: "E_1 = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{656 \\times 10^{-9}} = 3.03 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Energy of the $656$ nm photon value.", working: "E_1 = 3.03 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Energy of the $486$ nm photon.", working: "E_2 = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{486 \\times 10^{-9}} = 4.09 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Energy of the $486$ nm photon value.", working: "E_2 = 4.09 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Energy difference is $E_2 - E_1$.", working: "\\Delta E = 4.09 \\times 10^{-19} - 3.03 \\times 10^{-19} = 1.06 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$E_{656} = 3.03 \\times 10^{-19}$ J; $E_{486} = 4.09 \\times 10^{-19}$ J; $\\Delta E = 1.06 \\times 10^{-19}$ J",
            commonErrors: ["Using nm without converting to metres.", "Subtracting the energies in the wrong order or reporting the ratio instead of the difference."],
          },
        },
        {
          id: "physsl-u6-spectra-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "White light passes through a cool gas and an absorption line is observed at a frequency of $6.8 \\times 10^{14}$ Hz. ($c = 3.0 \\times 10^{8}$ m s$^{-1}$, $h = 6.63 \\times 10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "Wavelength absorbed by the gas", answer: 4.41e-7, tolerance: 2e-9, unit: "m" },
              { label: "Energy of the absorbed photon", answer: 4.51e-19, tolerance: 1e-20, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wavelength", statement: "\\lambda = c/f" },
              { kind: "formula", name: "Photon energy", statement: "E = hf" },
            ],
            steps: [
              { reasoning: "Wavelength from $\\lambda = c/f$.", working: "\\lambda = \\frac{3.0 \\times 10^{8}}{6.8 \\times 10^{14}} = 4.41 \\times 10^{-7} \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Wavelength value.", working: "\\lambda = 4.41 \\times 10^{-7} \\text{ m} \\;(= 441 \\text{ nm})", marks: 1, markCode: "A" },
              { reasoning: "Photon energy absorbed is $E = hf$.", working: "E = 6.63 \\times 10^{-34} \\times 6.8 \\times 10^{14} = 4.51 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "M" },
              { reasoning: "Energy value.", working: "E = 4.51 \\times 10^{-19} \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 4.41 \\times 10^{-7}$ m; $E = 4.51 \\times 10^{-19}$ J",
            commonErrors: ["Using $\\lambda = f/c$ instead of $c/f$.", "Forgetting that absorption removes exactly one photon energy per transition."],
          },
        },
        {
          id: "physsl-u6-spectra-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A hot, low-pressure gas of an element emits light that is analysed with a spectrometer.",
          parts: [
            { label: "a", prompt: "Describe the appearance of the emission spectrum produced.", marks: 1 },
            { label: "b", prompt: "Explain why the spectrum consists of discrete lines rather than a continuous band.", marks: 2 },
            { label: "c", prompt: "Describe how an absorption spectrum of the same element would differ.", marks: 2 },
            { label: "d", prompt: "State one astronomical use of line spectra.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Discrete energy levels", statement: "Atoms have discrete energy levels; transitions produce photons of fixed energies $\\Delta E = hf$." },
              { kind: "definition", name: "Emission vs absorption", statement: "Emission: electrons fall to lower levels emitting photons (bright lines). Absorption: electrons absorb photons to reach higher levels (dark lines on a continuous spectrum)." },
            ],
            steps: [
              { part: "a", reasoning: "Bright lines at discrete wavelengths on a dark background.", working: "\\text{bright lines}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Electrons can only occupy discrete energy levels.", working: "\\text{discrete levels}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each transition has a fixed energy difference, so each emitted photon has a fixed wavelength — producing sharp lines.", working: "\\Delta E = hf \\Rightarrow \\text{fixed } \\lambda", marks: 1, markCode: "R" },
              { part: "c", reasoning: "An absorption spectrum shows dark lines at the same wavelengths on a continuous spectrum.", working: "\\text{dark lines on continuous}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The dark lines occur because electrons absorb photons of exactly the energies needed for upward transitions, removing those wavelengths.", working: "\\text{absorption of specific photons}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Any one of: identifying elements in stars; measuring stellar composition; determining redshift; determining temperature.", working: "\\text{e.g. identify elements in starlight}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) bright lines at discrete wavelengths on a dark background (b) only discrete level differences are allowed, so only certain photon energies occur (c) dark lines at the same wavelengths on a continuous spectrum, caused by absorption (d) e.g. identifying the elements present in stars",
            commonErrors: ["Describing the absorption spectrum as bright lines.", "Saying the lines are continuous because the gas is hot."],
          },
        },
        {
          id: "physsl-u6-spectra-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Two prominent lines of the hydrogen spectrum are the Lyman-alpha line at $121.6$ nm and the Balmer H-alpha line at $656.3$ nm. ($h = 6.63 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^{8}$ m s$^{-1}$)",
          parts: [
            { label: "a", prompt: "Calculate the energy of a Lyman-alpha photon.", marks: 2 },
            { label: "b", prompt: "Calculate the energy of an H-alpha photon.", marks: 2 },
            { label: "c", prompt: "State which photon has the greater energy and explain why, in terms of the transitions involved.", marks: 2 },
            { label: "d", prompt: "Explain why the lines of the hydrogen spectrum appear at only certain wavelengths.", marks: 2 },
            { label: "e", prompt: "State one way line spectra are used to study stars.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "E = hc/\\lambda" },
              { kind: "property", name: "Discrete energy levels", statement: "Hydrogen energy levels are discrete ($E_n = -13.6/n^2$ eV), so only certain $\\Delta E$ — and hence wavelengths — occur." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $E = hc/\\lambda$ with $\\lambda = 121.6$ nm.", working: "E = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{121.6 \\times 10^{-9}} = 1.64 \\times 10^{-18} \\text{ J}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Apply $E = hc/\\lambda$ with $\\lambda = 656.3$ nm.", working: "E = \\frac{6.63 \\times 10^{-34} \\times 3.0 \\times 10^{8}}{656.3 \\times 10^{-9}} = 3.03 \\times 10^{-19} \\text{ J}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The Lyman-alpha photon has greater energy because its wavelength is much shorter and $E \\propto 1/\\lambda$.", working: "121.6 \\text{ nm} < 656.3 \\text{ nm} \\Rightarrow E_{\\text{Lyman}} > E_{\\text{H-alpha}}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equivalently, the Lyman transition involves a larger energy-level difference than the Balmer transition.", working: "\\Delta E_{\\text{Lyman}} > \\Delta E_{\\text{Balmer}}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Hydrogen atoms occupy discrete energy levels, so only transitions between pairs of levels are allowed.", working: "\\text{discrete levels}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Each allowed transition has a fixed $\\Delta E = hf$, giving photons of fixed energy and wavelength — hence sharp lines.", working: "\\Delta E = hf \\Rightarrow \\text{fixed } \\lambda", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Any one of: identifying elements in stellar spectra; measuring composition/temperature of stars; determining redshift of galaxies.", working: "\\text{e.g. identify elements in starlight}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $E = 1.64 \\times 10^{-18}$ J (b) $E = 3.03 \\times 10^{-19}$ J (c) the Lyman-alpha photon, since shorter wavelength means larger $\\Delta E$ (d) only discrete level differences are permitted, so only certain wavelengths occur (e) e.g. identifying the chemical elements present in stars",
            commonErrors: ["Using nm without converting to metres.", "Claiming all wavelengths are possible because light is a continuum."],
            examinerNote: "Accept energies in the range $1.6$–$1.7 \\times 10^{-18}$ J and $3.0$–$3.1 \\times 10^{-19}$ J for rounding.",
          },
        },
      ],
    },
  ],
};
