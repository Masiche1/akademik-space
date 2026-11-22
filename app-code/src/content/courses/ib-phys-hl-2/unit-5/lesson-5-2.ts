import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "physhl-u5-lesson-5-2",
  code: "5-2",
  title: "Matter Waves and the de Broglie Wavelength",
  goal: "I CAN calculate de Broglie wavelengths for particles, explain wave-particle duality for matter, and describe electron diffraction experiments.",
  standards: ["Paper 1", "Paper 2", "AHL E2"],
  vocabulary: [
    { term: "de Broglie wavelength", definition: "The wavelength associated with a moving particle: $\\lambda = h/mv = h/p$ where $p$ is momentum." },
    { term: "Wave-particle duality of matter", definition: "Particles (electrons, atoms) exhibit wave properties — interference and diffraction — just as light exhibits particle properties." },
    { term: "Electron diffraction", definition: "The observation of interference patterns when electrons pass through a crystal — proof electrons behave as waves." },
    { term: "Davisson–Germer experiment", definition: "1927 experiment showing electron diffraction from a nickel crystal — confirmed de Broglie's hypothesis." },
    { term: "Compton wavelength", definition: "The de Broglie wavelength of a particle at rest: $\\lambda_C = h/mc$." },
    { term: "Macroscopic vs microscopic", definition: "de Broglie wavelengths are significant only for microscopic particles — everyday objects have immeasurably small wavelengths." },
  ],
  concepts: [
    {
      id: "physhl-u5-debroglie",
      title: "The de Broglie hypothesis",
      skill: "Calculate de Broglie wavelength $\\lambda = h/p$, determine when wave effects are observable, and explain matter-wave duality.",
      lesson: {
        sections: [
          {
            heading: "de Broglie's idea",
            body: "Louis de Broglie (1924) proposed that ALL moving particles have wave properties with wavelength $\\lambda = \\frac{h}{mv} = \\frac{h}{p}$ where $p = mv$ is momentum. This extends wave-particle duality to matter: just as light (waves) shows particle properties (photons), particles show wave properties. Heisenberg later showed this is a fundamental limitation, not just a hypothesis.",
          },
          {
            heading: "When are wavelengths observable?",
            body: "de Broglie wavelength is significant only when $\\lambda$ is comparable to the size of obstacles/apertures. For everyday objects ($m \\sim 1$ kg, $v \\sim 1$ m/s), $\\lambda \\sim 10^{-34}$ m — utterly negligible. For electrons ($m \\sim 10^{-30}$ kg) at typical speeds, $\\lambda \\sim 10^{-10}$ m — comparable to atomic spacings → diffraction observable. This is why quantum effects matter only at microscopic scales.",
          },
          {
            heading: "Momentum and wavelength",
            body: "Faster particles → shorter wavelength → less diffraction. Heavier particles → shorter wavelength → less diffraction. Electrons are ideal because they're light and easily accelerated to high speeds. The relationship $\\lambda = h/p$ is the matter-wave equivalent of $E = hf$ for photons (via $E = p^2/2m$ for non-relativistic particles).",
          },
        ],
        keyFormulas: [
          { name: "de Broglie wavelength", statement: "$\\lambda = h/mv = h/p$" },
          { name: "Photon-matter analogy", statement: "Light: $E = hf$; Matter: $\\lambda = h/p$" },
          { name: "Significance", statement: "Wave effects observable when $\\lambda \\sim$ obstacle size." },
        ],
        workedExample: {
          problem: "Calculate the de Broglie wavelength of an electron ($m = 9.11\\times10^{-31}$ kg) moving at $10^6$ m/s ($h = 6.63\\times10^{-34}$ J s).",
          solution: "$\\lambda = h/mv = 6.63\\times10^{-34}/(9.11\\times10^{-31} \\times 10^6) = 7.3\\times10^{-10}$ m — about the size of an atom.",
        },
      },
      questions: [
        {
          id: "physhl-u5-db-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The de Broglie wavelength of a particle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda = mc^2$" },
              { id: "b", text: "$\\lambda = h/mv$" },
              { id: "c", text: "$\\lambda = hf$" },
              { id: "d", text: "$\\lambda = mv/h$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie", statement: "$\\lambda = h/p = h/mv$" },
            ],
            steps: [
              { reasoning: "Wavelength = Planck's constant / momentum.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\lambda = h/mv$",
            commonErrors: ["Inverting — wavelength DECREASES as momentum increases."],
          },
        },
        {
          id: "physhl-u5-db-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why de Broglie wavelengths are only significant for microscopic particles, not everyday objects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "de Broglie scale", statement: "$\\lambda = h/mv$ — macroscopic masses give immeasurably small wavelengths." },
            ],
            steps: [
              { reasoning: "$\\lambda = h/mv$ — inversely proportional to mass and velocity.", marks: 1, markCode: "M" },
              { reasoning: "Macroscopic objects have $m \\sim 1$ kg → $\\lambda \\sim 10^{-34}$ m — negligible.", marks: 1, markCode: "R" },
              { reasoning: "Electrons ($m \\sim 10^{-30}$ kg) → $\\lambda \\sim 10^{-10}$ m — comparable to atomic spacing → observable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Macroscopic masses → negligible wavelength; microscopic → observable.",
            commonErrors: ["Thinking all particles show wave effects — only when λ ~ obstacle size."],
          },
        },
        {
          id: "physhl-u5-db-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An electron and a proton have the same kinetic energy. (a) Which has the larger de Broglie wavelength? (b) Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "de Broglie", statement: "$\\lambda = h/\\sqrt{2mKE}$ — lighter particle has larger wavelength at same KE." },
            ],
            steps: [
              { reasoning: "Same KE → $p = \\sqrt{2mKE}$ → electron has smaller momentum (lighter mass).", marks: 1, markCode: "M" },
              { reasoning: "Smaller momentum → larger $\\lambda = h/p$ → electron has larger wavelength.", marks: 1, markCode: "R" },
              { reasoning: "Electron wavelength larger by factor $\\sqrt{m_p/m_e} \\approx 43$.", marks: 1, markCode: "M" },
              { reasoning: "This is why electrons (not protons) are used in electron microscopes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Electron — lighter mass → smaller momentum → larger wavelength.",
            commonErrors: ["Thinking same KE = same wavelength — depends on mass too."],
          },
        },
        {
          id: "physhl-u5-db-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Electrons are accelerated through a potential difference of 100 V before hitting a crystal.",
          parts: [
            { label: "a", prompt: "Calculate the electron's kinetic energy in eV and joules.", marks: 2 },
            { label: "b", prompt: "Calculate its momentum ($m = 9.11\\times10^{-31}$ kg, $e = 1.6\\times10^{-19}$ C).", marks: 3 },
            { label: "c", prompt: "Calculate its de Broglie wavelength.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "de Broglie calculation", statement: "$KE = eV$; $p = \\sqrt{2mKE}$; $\\lambda = h/p$." },
            ],
            steps: [
              { part: "a", reasoning: "$KE = eV = 100$ eV $= 100 \\times 1.6\\times10^{-19} = 1.6\\times10^{-17}$ J.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$KE = 100$ eV = $1.6\\times10^{-17}$ J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$p = \\sqrt{2mKE} = \\sqrt{2 \\times 9.11\\times10^{-31} \\times 1.6\\times10^{-17}}$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$p = \\sqrt{2.92\\times10^{-47}} = 5.4\\times10^{-24}$ kg m/s.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$p = 5.4\\times10^{-24}$ kg m/s.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\lambda = h/p = 6.63\\times10^{-34}/5.4\\times10^{-24} = 1.2\\times10^{-10}$ m.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\lambda = 1.2\\times10^{-10}$ m = 0.12 nm.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Comparable to atomic spacing → diffraction observable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 100 eV. (b) 5.4×10⁻²⁴ kg m/s. (c) 1.2×10⁻¹⁰ m.",
            commonErrors: ["Using eV directly in momentum formula — convert to joules first."],
          },
        },
        {
          id: "physhl-u5-db-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The de Broglie wavelength $\\lambda$ of a moving particle is inversely proportional to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "its frequency" },
              { id: "b", text: "the Planck constant $h$" },
              { id: "c", text: "the particle's momentum $p$" },
              { id: "d", text: "the square of its mass" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/p$ — inversely proportional to momentum." },
            ],
            steps: [
              { reasoning: "From $\\lambda = h/p$, wavelength decreases as momentum increases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The particle's momentum $p$",
            commonErrors: ["Thinking wavelength depends on mass alone — it depends on momentum $mv$."],
          },
        },
        {
          id: "physhl-u5-db-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An electron and a neutron travel at the same speed. The particle with the larger de Broglie wavelength is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "same for both — wavelength depends only on speed" },
              { id: "b", text: "electron, because it has the smaller mass" },
              { id: "c", text: "cannot be determined without knowing the charge" },
              { id: "d", text: "neutron, because it has the larger mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/mv$ — at fixed $v$, smaller $m$ gives larger $\\lambda$." },
            ],
            steps: [
              { reasoning: "Same speed, so $\\lambda \\propto 1/m$; the electron is much lighter than the neutron.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Electron — smaller mass gives larger wavelength",
            commonErrors: ["Thinking heavier particles have longer wavelengths — it is the reverse."],
          },
        },
        {
          id: "physhl-u5-db-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The de Broglie wavelength of a 1 kg object moving at 1 m/s is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10^{34}$ m — larger than the universe" },
              { id: "b", text: "$10^{-10}$ m — comparable to an atom" },
              { id: "c", text: "$1$ m — comparable to the object" },
              { id: "d", text: "$10^{-34}$ m — far too small to observe" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/mv = 6.63\\times10^{-34}/(1 \\times 1) \\approx 10^{-34}$ m." },
            ],
            steps: [
              { reasoning: "Substitute $m = 1$ kg, $v = 1$ m/s into $\\lambda = h/mv$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $10^{-34}$ m — negligible",
            commonErrors: ["Expecting everyday objects to show wave behaviour — their wavelengths are immeasurable."],
          },
        },
        {
          id: "physhl-u5-db-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If the speed of a particle (moving much slower than light) is doubled, its de Broglie wavelength:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is quartered" },
              { id: "b", text: "stays the same" },
              { id: "c", text: "is doubled" },
              { id: "d", text: "is halved" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/mv$ — inverse relation with speed at fixed mass." },
            ],
            steps: [
              { reasoning: "Doubling $v$ doubles momentum $p = mv$, so $\\lambda = h/p$ halves.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Halved",
            commonErrors: ["Thinking faster particles have longer wavelengths — they have shorter ones."],
          },
        },
        {
          id: "physhl-u5-db-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The Compton wavelength of a particle is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda_C = h/mv$ for any $v$" },
              { id: "b", text: "$\\lambda_C = h/mc$" },
              { id: "c", text: "$\\lambda_C = mc/h$" },
              { id: "d", text: "$\\lambda_C = hf$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compton wavelength", statement: "The de Broglie wavelength of a particle moving at speed $c$: $h/mc$." },
            ],
            steps: [
              { reasoning: "Compton wavelength uses $v = c$ in $\\lambda = h/mv$.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\lambda_C = h/mc$",
            commonErrors: ["Using $v$ — Compton wavelength is specifically at speed $c$."],
          },
        },
        {
          id: "physhl-u5-db-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the de Broglie wavelength of an electron ($m = 9.11\\times10^{-31}$ kg) moving at $2.0\\times10^6$ m/s. ($h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.64e-10, tolerance: 5e-11, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/mv$." },
            ],
            steps: [
              { reasoning: "Momentum $p = mv = 9.11\\times10^{-31} \\times 2.0\\times10^6 = 1.82\\times10^{-24}$ kg m/s.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = h/p = 6.63\\times10^{-34}/1.82\\times10^{-24}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 3.64\\times10^{-10}$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 3.64\\times10^{-10}$ m",
            commonErrors: ["Forgetting to multiply mass by velocity before dividing into $h$."],
          },
        },
        {
          id: "physhl-u5-db-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A neutron ($m = 1.67\\times10^{-27}$ kg) moves at $4.0\\times10^3$ m/s. Calculate its de Broglie wavelength. ($h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9.93e-11, tolerance: 5e-12, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/mv$." },
            ],
            steps: [
              { reasoning: "$p = mv = 1.67\\times10^{-27} \\times 4.0\\times10^3 = 6.68\\times10^{-24}$ kg m/s.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 6.63\\times10^{-34}/6.68\\times10^{-24}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 9.9\\times10^{-11}$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 9.9\\times10^{-11}$ m",
            commonErrors: ["Using the electron mass — neutrons are about 2000 times heavier."],
          },
        },
        {
          id: "physhl-u5-db-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An electron has a de Broglie wavelength of $1.0\\times10^{-10}$ m. Calculate its speed. ($m_e = 9.11\\times10^{-31}$ kg, $h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7.28e6, tolerance: 5e5, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/mv$ rearranged to $v = h/m\\lambda$." },
            ],
            steps: [
              { reasoning: "Rearrange: $v = h/(m\\lambda)$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 6.63\\times10^{-34}/(9.11\\times10^{-31} \\times 1.0\\times10^{-10})$.", marks: 1, markCode: "M" },
              { reasoning: "Denominator $= 9.11\\times10^{-41}$; $v = 7.28\\times10^6$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "$v = 7.3\\times10^6$ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 7.3\\times10^6$ m/s",
            commonErrors: ["Dividing in the wrong order — momentum first: $p = h/\\lambda$, then $v = p/m$."],
          },
        },
        {
          id: "physhl-u5-db-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "An electron has kinetic energy $1.6\\times10^{-18}$ J. Calculate its de Broglie wavelength. ($m_e = 9.11\\times10^{-31}$ kg, $h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.88e-10, tolerance: 5e-11, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie via KE", statement: "$p = \\sqrt{2mKE}$; $\\lambda = h/p$." },
            ],
            steps: [
              { reasoning: "Find momentum from kinetic energy: $p = \\sqrt{2mKE}$.", marks: 1, markCode: "M" },
              { reasoning: "$p = \\sqrt{2 \\times 9.11\\times10^{-31} \\times 1.6\\times10^{-18}} = \\sqrt{2.92\\times10^{-48}}$.", marks: 1, markCode: "M" },
              { reasoning: "$p = 1.71\\times10^{-24}$ kg m/s.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = h/p = 6.63\\times10^{-34}/1.71\\times10^{-24}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 3.88\\times10^{-10}$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 3.9\\times10^{-10}$ m",
            commonErrors: ["Using $KE = mv^2$ without the factor of ½, or forgetting the square root."],
          },
        },
        {
          id: "physhl-u5-db-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An electron ($m = 9.11\\times10^{-31}$ kg) and a proton ($m = 1.67\\times10^{-27}$ kg) each have kinetic energy $1.0\\times10^{-19}$ J. Calculate the de Broglie wavelength of (a) the electron; (b) the proton. ($h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.55e-9, tolerance: 3e-10, unit: "m" },
              { label: "b", answer: 3.63e-11, tolerance: 5e-12, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie via KE", statement: "$p = \\sqrt{2mKE}$; $\\lambda = h/p$ — lighter particle has larger $\\lambda$ at same KE." },
            ],
            steps: [
              { reasoning: "(a) Electron: $p = \\sqrt{2 \\times 9.11\\times10^{-31} \\times 1.0\\times10^{-19}} = 4.27\\times10^{-25}$ kg m/s.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda_e = 6.63\\times10^{-34}/4.27\\times10^{-25} = 1.55\\times10^{-9}$ m.", marks: 1, markCode: "M" },
              { reasoning: "(b) Proton: $p = \\sqrt{2 \\times 1.67\\times10^{-27} \\times 1.0\\times10^{-19}} = 1.83\\times10^{-23}$ kg m/s; $\\lambda_p = 3.63\\times10^{-11}$ m.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda_e = 1.55\\times10^{-9}$ m; $\\lambda_p = 3.63\\times10^{-11}$ m — electron wavelength about 43 times larger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.55\\times10^{-9}$ m. (b) $3.63\\times10^{-11}$ m.",
            commonErrors: ["Assuming same KE gives same wavelength — momentum (and hence $\\lambda$) depends on mass."],
          },
        },
        {
          id: "physhl-u5-db-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why the wave properties of a bullet fired from a rifle are never observed, even though de Broglie's formula applies to all matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "de Broglie scale", statement: "Wave effects are only observable when $\\lambda$ is comparable to the size of apertures or obstacles." },
            ],
            steps: [
              { reasoning: "The bullet has large mass and high speed, so $p = mv$ is very large.", marks: 1, markCode: "M" },
              { reasoning: "Large momentum gives $\\lambda = h/p \\sim 10^{-35}$ m or smaller — utterly negligible.", marks: 1, markCode: "M" },
              { reasoning: "No physical aperture or obstacle is anywhere near $10^{-35}$ m in size.", marks: 1, markCode: "M" },
              { reasoning: "Without obstacles comparable to $\\lambda$, diffraction and interference cannot occur.", marks: 1, markCode: "M" },
              { reasoning: "The formula applies but the wavelength is too small for any observable wave effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bullet's $\\lambda \\sim 10^{-35}$ m — far smaller than any obstacle, so wave effects are unobservable.",
            commonErrors: ["Saying de Broglie does not apply to macroscopic objects — it applies but is immeasurably small."],
          },
        },
        {
          id: "physhl-u5-db-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Electrons are accelerated from rest through a potential difference of 200 V before reaching a diffraction grating. ($m_e = 9.11\\times10^{-31}$ kg, $e = 1.6\\times10^{-19}$ C, $h = 6.63\\times10^{-34}$ J s)",
          parts: [
            { label: "a", prompt: "Calculate the kinetic energy gained by each electron, in eV and in joules.", marks: 2 },
            { label: "b", prompt: "Calculate the momentum of each electron.", marks: 3 },
            { label: "c", prompt: "Calculate the de Broglie wavelength and comment on whether diffraction would be observable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "de Broglie calculation", statement: "$KE = eV$; $p = \\sqrt{2mKE}$; $\\lambda = h/p$." },
            ],
            steps: [
              { part: "a", reasoning: "$KE = eV = 200$ eV.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$KE = 200 \\times 1.6\\times10^{-19} = 3.2\\times10^{-17}$ J.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$p = \\sqrt{2mKE} = \\sqrt{2 \\times 9.11\\times10^{-31} \\times 3.2\\times10^{-17}}$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$p = \\sqrt{5.83\\times10^{-47}} = 7.6\\times10^{-24}$ kg m/s.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$p = 7.6\\times10^{-24}$ kg m/s.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\lambda = h/p = 6.63\\times10^{-34}/7.6\\times10^{-24} = 8.7\\times10^{-11}$ m.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\lambda = 8.7\\times10^{-11}$ m $= 0.087$ nm.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "This is comparable to atomic/crystal spacings, so diffraction IS observable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 200 eV $= 3.2\\times10^{-17}$ J. (b) $7.6\\times10^{-24}$ kg m/s. (c) $8.7\\times10^{-11}$ m — diffraction observable.",
            commonErrors: ["Using 200 eV directly as joules in the momentum calculation."],
          },
        },
      ],
    },
    {
      id: "physhl-u5-electron-diffraction",
      title: "Electron diffraction and matter-wave evidence",
      skill: "Describe experiments demonstrating electron wave nature, apply diffraction grating concepts to matter waves, and explain the significance of matter-wave duality.",
      lesson: {
        sections: [
          {
            heading: "Davisson–Germer experiment",
            body: "In 1927, Davisson and Germer fired electrons at a nickel crystal and observed diffraction patterns — bright and dark fringes exactly as predicted for waves. This confirmed de Broglie's hypothesis that matter has wave properties. The crystal acted like a diffraction grating with atomic spacing as the 'slit' separation.",
          },
          {
            heading: "Modern electron diffraction",
            body: "Electron diffraction is now used in transmission electron microscopy (TEM) and electron crystallography. The diffraction pattern reveals the crystal structure — same principle as X-ray diffraction but using electrons instead of X-rays. Electrons have shorter wavelengths than X-rays at same energy → better resolution.",
          },
          {
            heading: "Significance",
            body: "Matter-wave duality is fundamental to quantum mechanics — it means the wavefunction $\\psi$ describes probability amplitudes, not physical waves. The double-slit experiment with electrons (showing interference even when electrons pass one at a time) demonstrates that each electron interferes with ITSELF — the ultimate proof of wave nature.",
          },
        ],
        keyFormulas: [
          { name: "Electron diffraction", statement: "Crystal lattice acts as diffraction grating for electron waves." },
          { name: "de Broglie", statement: "$\\lambda = h/mv$ — confirmed by Davisson–Germer." },
          { name: "TEM advantage", statement: "Electrons have shorter $\\lambda$ than X-rays → higher resolution." },
        ],
        workedExample: {
          problem: "Explain how the Davisson–Germer experiment confirmed de Broglie's hypothesis.",
          solution: "Electrons scattered from nickel crystal showed diffraction pattern — constructive/destructive interference. This only happens if electrons behave as waves with $\\lambda = h/mv$. The observed angles matched predictions → confirmed matter waves.",
        },
      },
      questions: [
        {
          id: "physhl-u5-ed-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Davisson–Germer experiment demonstrated that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electrons behave as waves" },
              { id: "b", text: "Crystals are magnetic" },
              { id: "c", text: "Electrons are particles only" },
              { id: "d", text: "Light is a particle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron diffraction", statement: "Diffraction pattern from electrons → wave nature confirmed." },
            ],
            steps: [
              { reasoning: "Diffraction fringes = wave interference → electrons behave as waves.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Electrons behave as waves",
            commonErrors: ["Choosing particles — diffraction proves wave nature."],
          },
        },
        {
          id: "physhl-u5-ed-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how a crystal can act as a diffraction grating for electrons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crystal diffraction", statement: "Atomic spacing in crystal ~ electron wavelength → acts like diffraction grating." },
            ],
            steps: [
              { reasoning: "Crystal atoms are regularly spaced like a grating.", marks: 1, markCode: "M" },
              { reasoning: "Spacing ~0.1–0.5 nm matches electron de Broglie wavelength.", marks: 1, markCode: "R" },
              { reasoning: "Electron waves scatter from atoms → constructive/destructive interference → diffraction pattern.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Atomic spacing matches electron wavelength → diffraction grating effect.",
            commonErrors: ["Thinking crystal 'blocks' electrons — it diffracts them like a grating."],
          },
        },
        {
          id: "physhl-u5-ed-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the double-slit experiment with electrons demonstrates wave-particle duality more dramatically than with light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron double-slit", statement: "Interference pattern forms even when electrons pass one at a time — each electron interferes with itself." },
            ],
            steps: [
              { reasoning: "Light is already known to be wave-particle dual — not dramatic.", marks: 1, markCode: "M" },
              { reasoning: "Electrons are definitely particles (have mass, charge, detected as dots).", marks: 1, markCode: "R" },
              { reasoning: "Yet they show interference — each electron interferes with ITSELF.", marks: 1, markCode: "R" },
              { reasoning: "This proves matter has wave nature — more fundamental than light duality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Electrons are particles yet interfere with themselves — deeper duality.",
            commonErrors: ["Saying 'electrons split in half' — each electron interferes with itself."],
          },
        },
        {
          id: "physhl-u5-ed-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "In an electron diffraction experiment, electrons with de Broglie wavelength 0.10 nm pass through a crystal with atomic spacing 0.20 nm.",
          parts: [
            { label: "a", prompt: "Explain why diffraction occurs (compare wavelength to spacing).", marks: 2 },
            { label: "b", prompt: "If the electrons are accelerated to higher energy, what happens to the diffraction pattern?", marks: 3 },
            { label: "c", prompt: "State one application of electron diffraction in modern science.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron diffraction", statement: "Diffraction when $\\lambda \\sim$ spacing; higher energy → shorter $\\lambda$ → narrower pattern." },
            ],
            steps: [
              { part: "a", reasoning: "$\\lambda = 0.10$ nm is comparable to spacing 0.20 nm → strong diffraction.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Crystal acts as diffraction grating for electron waves.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Higher energy → higher momentum → shorter $\\lambda = h/p$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shorter wavelength → smaller diffraction angles → narrower pattern.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Pattern compresses toward centre.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any: TEM imaging, crystal structure determination, materials analysis.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct application with brief explanation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Electron crystallography reveals atomic structure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) λ~spacing → diffraction. (b) Higher E → shorter λ → narrower pattern. (c) TEM/crystallography.",
            commonErrors: ["Thinking higher energy = wider pattern — it's narrower (shorter λ)."],
          },
        },
        {
          id: "physhl-u5-ed-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The observation of a diffraction pattern when electrons pass through a thin crystal shows that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "crystals absorb all electrons" },
              { id: "b", text: "electrons are purely particles" },
              { id: "c", text: "electrons have wave properties" },
              { id: "d", text: "electrons have no mass" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron diffraction", statement: "Diffraction fringes arise from wave interference — proof of matter waves." },
            ],
            steps: [
              { reasoning: "Diffraction and interference are wave phenomena; observing them proves the electron has a wavelength.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Electrons have wave properties",
            commonErrors: ["Thinking diffraction proves particles — only waves diffract."],
          },
        },
        {
          id: "physhl-u5-ed-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the Davisson–Germer experiment, electrons scattered from a nickel crystal showed intensity maxima at particular angles. This demonstrated:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "random scattering of particles" },
              { id: "b", text: "constructive interference of electron waves" },
              { id: "c", text: "absorption of electrons by the crystal" },
              { id: "d", text: "a magnetic effect in nickel" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Davisson–Germer", statement: "Angular maxima match de Broglie wavelength predictions — electron waves confirmed." },
            ],
            steps: [
              { reasoning: "Intensity maxima at fixed angles are the signature of constructive interference of waves.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Constructive interference of electron waves",
            commonErrors: ["Interpreting maxima as particle collisions — they are interference peaks."],
          },
        },
        {
          id: "physhl-u5-ed-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A crystal can act as a diffraction grating for electrons because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the crystal is transparent to electrons" },
              { id: "b", text: "the atoms in the crystal are charged" },
              { id: "c", text: "electrons are attracted to the atomic nuclei" },
              { id: "d", text: "the spacing between its atoms is comparable to the electron de Broglie wavelength" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crystal grating", statement: "Regular atomic spacing $\\sim 0.1$–$0.5$ nm matches electron $\\lambda$ — behaves like a grating." },
            ],
            steps: [
              { reasoning: "Diffraction requires scatterers spaced comparably to the wavelength; crystal planes satisfy this for electrons.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Atomic spacing comparable to the electron wavelength",
            commonErrors: ["Thinking the crystal merely 'blocks' electrons — it diffracts them."],
          },
        },
        {
          id: "physhl-u5-ed-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Electrons are preferred over X-rays in electron microscopes mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "electrons travel faster than the speed of light" },
              { id: "b", text: "X-rays cannot penetrate specimens" },
              { id: "c", text: "electrons are cheaper to produce than X-rays" },
              { id: "d", text: "electrons can have much shorter de Broglie wavelengths, giving better resolution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Microscope resolution", statement: "Resolution improves as $\\lambda$ decreases; electron $\\lambda$ at useful energies is far shorter than X-ray $\\lambda$." },
            ],
            steps: [
              { reasoning: "Smaller wavelength → smaller diffraction limit → finer detail resolved.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Shorter de Broglie wavelength → better resolution",
            commonErrors: ["Claiming electrons travel faster than light — they do not; it is their small mass that gives small $\\lambda$."],
          },
        },
        {
          id: "physhl-u5-ed-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "If the accelerating voltage applied to the electrons in a diffraction experiment is increased, the first-order diffraction maximum moves to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a larger angle to the forward direction" },
              { id: "b", text: "a smaller angle to the forward direction" },
              { id: "c", text: "the same angle — it is fixed by the crystal" },
              { id: "d", text: "a position where no maximum exists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffraction scaling", statement: "Higher voltage → larger momentum → shorter $\\lambda = h/p$ → smaller diffraction angles." },
            ],
            steps: [
              { reasoning: "Increasing $V$ raises $p$, so $\\lambda$ decreases and $\\sin\\theta = \\lambda/d$ decreases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A smaller angle",
            commonErrors: ["Thinking faster electrons diffract more — shorter wavelength means less bending."],
          },
        },
        {
          id: "physhl-u5-ed-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Electrons with de Broglie wavelength 0.10 nm strike a crystal with atomic spacing 0.20 nm. Calculate the angle of the first-order diffraction maximum. (Use $\\sin\\theta = \\lambda/d$.)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30.0, tolerance: 0.5, unit: "°" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Grating equation", statement: "$d\\sin\\theta = \\lambda$ for first order." },
            ],
            steps: [
              { reasoning: "For first order, $\\sin\\theta = \\lambda/d = 0.10/0.20 = 0.50$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\sin^{-1}(0.50)$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = 30.0°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 30.0°$",
            commonErrors: ["Using degrees inside the sine function or inverting the ratio $\\lambda/d$."],
          },
        },
        {
          id: "physhl-u5-ed-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Calculate the speed of an electron whose de Broglie wavelength is $2.0\\times10^{-10}$ m. ($m_e = 9.11\\times10^{-31}$ kg, $h = 6.63\\times10^{-34}$ J s)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.64e6, tolerance: 5e5, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "$\\lambda = h/mv$ rearranged to $v = h/m\\lambda$." },
            ],
            steps: [
              { reasoning: "Rearrange $\\lambda = h/mv$ to $v = h/(m\\lambda)$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 6.63\\times10^{-34}/(9.11\\times10^{-31} \\times 2.0\\times10^{-10})$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 3.64\\times10^6$ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v = 3.6\\times10^6$ m/s",
            commonErrors: ["Multiplying by $\\lambda$ instead of dividing when rearranging."],
          },
        },
        {
          id: "physhl-u5-ed-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Electrons are accelerated from rest through a potential difference of 50 V. Calculate their kinetic energy in joules. ($e = 1.6\\times10^{-19}$ C)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8.0e-18, tolerance: 5e-19, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Accelerating voltage", statement: "$KE = eV$ — an electron gains $eV$ joules through voltage $V$." },
            ],
            steps: [
              { reasoning: "The work done by the field is $eV$, all converted to kinetic energy.", marks: 1, markCode: "M" },
              { reasoning: "$KE = 1.6\\times10^{-19} \\times 50$.", marks: 1, markCode: "M" },
              { reasoning: "$KE = 8.0\\times10^{-18}$ J ($= 50$ eV).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$KE = 8.0\\times10^{-18}$ J",
            commonErrors: ["Reporting 50 eV without converting to joules for the next step."],
          },
        },
        {
          id: "physhl-u5-ed-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An electron ($m_e = 9.11\\times10^{-31}$ kg) and a neutron ($m_n = 1.67\\times10^{-27}$ kg) both move at $1.0\\times10^3$ m/s. Calculate the ratio of the electron's de Broglie wavelength to the neutron's.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1833, tolerance: 50, unit: "" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "de Broglie wavelength", statement: "At the same speed $\\lambda \\propto 1/m$, so $\\lambda_e/\\lambda_n = m_n/m_e$." },
            ],
            steps: [
              { reasoning: "$\\lambda = h/mv$; with equal $v$ and $h$, $\\lambda_e/\\lambda_n = m_n/m_e$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda_e/\\lambda_n = 1.67\\times10^{-27}/9.11\\times10^{-31}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1.83\\times10^3$.", marks: 1, markCode: "M" },
              { reasoning: "The electron's wavelength is about 1830 times larger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda_e/\\lambda_n \\approx 1830$",
            commonErrors: ["Inverting the mass ratio — the lighter particle has the larger wavelength."],
          },
        },
        {
          id: "physhl-u5-ed-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe how electron diffraction is used to determine the structure of a crystal, referring to the role of the crystal lattice and the diffraction pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron crystallography", statement: "The regular lattice acts as a 3-D diffraction grating; the pattern encodes atomic spacing and arrangement." },
            ],
            steps: [
              { reasoning: "A beam of electrons of known de Broglie wavelength is directed at the crystal.", marks: 1, markCode: "M" },
              { reasoning: "Atoms in regularly spaced planes scatter the electron waves, which interfere.", marks: 1, markCode: "M" },
              { reasoning: "Constructive interference produces bright spots (reflections) at angles satisfying the grating condition.", marks: 1, markCode: "M" },
              { reasoning: "The positions of the spots are measured and compared with theoretical patterns.", marks: 1, markCode: "M" },
              { reasoning: "Matching angles to lattice spacings reveals the crystal structure — unit cell, plane spacing and symmetry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Electron waves diffract from lattice planes; spot positions give atomic spacing and crystal structure.",
            commonErrors: ["Saying the pattern shows 'bonds' directly — it shows lattice periodicity."],
          },
        },
        {
          id: "physhl-u5-ed-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain the significance of the electron double-slit experiment (where an interference pattern forms even when electrons are sent through one at a time) for the wave-particle duality of matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Matter-wave duality", statement: "Each electron interferes with itself — wave behaviour is intrinsic to matter, not a collective effect." },
            ],
            steps: [
              { reasoning: "Electrons are unambiguously particles: they carry charge, have mass and are detected as discrete dots.", marks: 1, markCode: "M" },
              { reasoning: "Sent one at a time, they still build up an interference pattern of bright and dark fringes.", marks: 1, markCode: "M" },
              { reasoning: "Interference requires a wave, so each single electron must pass through BOTH slits as a wave and interfere with itself.", marks: 1, markCode: "M" },
              { reasoning: "This cannot be explained by electrons 'choosing' a slit or splitting into pieces — it requires wave nature.", marks: 1, markCode: "A" },
              { reasoning: "It extends wave-particle duality from light to matter — a cornerstone of quantum mechanics.", marks: 1, markCode: "A" },
              { reasoning: "The de Broglie wavelength $h/p$ quantifies this wave behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Single electrons interfere with themselves — matter has intrinsic wave nature.",
            commonErrors: ["Saying electrons split in half — each electron interferes with itself."],
          },
        },
        {
          id: "physhl-u5-ed-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Electrons with de Broglie wavelength 0.15 nm are directed at a crystal with atomic spacing 0.30 nm.",
          parts: [
            { label: "a", prompt: "Calculate the angle of the first-order diffraction maximum. ($\\sin\\theta = \\lambda/d$)", marks: 2 },
            { label: "b", prompt: "The accelerating voltage is doubled. Calculate the new de Broglie wavelength and the new first-order angle.", marks: 3 },
            { label: "c", prompt: "State one practical application of electron diffraction and explain why electrons are used rather than visible light.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffraction scaling", statement: "$d\\sin\\theta = \\lambda$; $V \\times 2 \\Rightarrow KE \\times 2 \\Rightarrow p \\times \\sqrt{2} \\Rightarrow \\lambda \\times 1/\\sqrt{2}$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sin\\theta = \\lambda/d = 0.15/0.30 = 0.50$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\theta = 30.0°$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Doubling $V$ doubles $KE$, so $p = \\sqrt{2mKE}$ increases by $\\sqrt{2}$ and $\\lambda$ falls by $1/\\sqrt{2}$: $\\lambda' = 0.15/\\sqrt{2} = 0.106$ nm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\sin\\theta' = 0.106/0.30 = 0.354$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\theta' = 20.7° \\approx 21°$ — the pattern moves closer to the forward direction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any valid application: TEM imaging, determination of crystal structure, materials analysis.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Electron $\\lambda$ at useful energies ($\\sim 10^{-10}$ m) is far smaller than visible light ($\\sim 10^{-7}$ m).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Smaller wavelength resolves atomic-scale detail that light cannot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $30.0°$. (b) $\\lambda' = 0.106$ nm, $\\theta' \\approx 21°$. (c) TEM/crystallography — electrons have atomic-scale wavelengths.",
            commonErrors: ["Halving the wavelength instead of dividing by $\\sqrt{2}$ when the energy is doubled."],
          },
        },
      ],
    },
  ],
};
