import type { Lesson } from "../../../types.ts";

export const lesson143: Lesson = {
  id: "phys12-u4-lesson-4-3",
  code: "4-3",
  title: "The Electromagnetic Spectrum",
  goal: "I CAN describe the electromagnetic spectrum, explain how different wavelengths are produced and used, and apply the wave-particle nature of light.",
  standards: ["HS-PS4-1", "HS-PS4-3"],
  vocabulary: [
    { term: "Electromagnetic spectrum", definition: "Range of all electromagnetic waves from radio to gamma rays." },
    { term: "Wavelength", definition: "Distance between wave crests; determines energy and application." },
    { term: "Photon", definition: "Particle of light; energy $E = hf = hc/\\lambda$." },
    { term: "Photoelectric effect", definition: "Emission of electrons when light hits a material; evidence for particle nature of light." },
    { term: "X-rays", definition: "High-energy EM waves used in medical imaging and security." },
    { term: "Radio waves", definition: "Lowest frequency EM waves used in communication." },
    { term: "Gamma rays", definition: "Highest energy EM waves from nuclear processes." },
  ],
  concepts: [
    {
      id: "phys12-u4-em-spectrum",
      title: "EM spectrum and applications",
      skill: "Order EM waves by wavelength/frequency and describe their sources and uses.",
      lesson: {
        sections: [
          {
            heading: "The spectrum",
            body: `All EM waves travel at $c = 3.00 \\times 10^8$ m/s in vacuum. They differ in wavelength and frequency:

| Type | Wavelength | Frequency | Use |
|------|-----------|-----------|-----|
| Radio | > 1 m | < 300 MHz | Broadcasting, WiFi |
| Microwave | 1 mm - 1 m | 300 MHz - 300 GHz | Ovens, radar |
| Infrared | 700 nm - 1 mm | 300 GHz - 430 THz | Remote controls, heat |
| Visible | 400-700 nm | 430-750 THz | Vision |
| UV | 10-400 nm | 750 THz - 30 PHz | Sterilization, fluorescence |
| X-ray | 0.01-10 nm | 30 PHz - 30 EHz | Medical imaging |
| Gamma | < 0.01 nm | > 30 EHz | Nuclear medicine |`,
          },
          {
            heading: "Photon energy",
            body: `EM waves have particle nature — **photons**. Photon energy:

$$E = hf = \\frac{hc}{\\lambda}$$

Higher frequency (shorter wavelength) = higher energy. This is why UV causes sunburn and gamma rays are dangerous, while radio waves are harmless.`,
          },
          {
            heading: "Producing EM waves",
            body: `- **Radio/microwave**: oscillating charges in antennas
- **IR/visible/UV**: thermal radiation from hot objects, atomic transitions
- **X-rays**: deceleration of fast electrons (bremsstrahlung) or inner electron transitions
- **Gamma**: nuclear transitions, particle-antiparticle annihilation`,
          },
        ],
        keyFormulas: [
          { name: "Photon energy", statement: "$E = hf = hc/\\lambda$" },
          { name: "Speed of light", statement: "$c = 3.00 \\times 10^8$ m/s" },
        ],
        workedExample: {
          problem: "Calculate the energy of a photon of green light (λ = 550 nm).",
          solution: "$E = hc/\\lambda = (6.63 \\times 10^{-34})(3.00 \\times 10^8)/(550 \\times 10^{-9}) = (1.99 \\times 10^{-25})/(5.5 \\times 10^{-7}) = 3.62 \\times 10^{-19}$ J.",
        },
      },
      questions: [
        {
          id: "phys12-u4-em-spectrum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which EM wave has the highest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radio waves" },
              { id: "b", text: "Visible light" },
              { id: "c", text: "X-rays" },
              { id: "d", text: "Gamma rays" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "EM spectrum", statement: "Gamma rays have highest frequency/shortest wavelength." }],
            steps: [{ reasoning: "Gamma rays have the shortest wavelength and highest frequency in the EM spectrum.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Gamma rays",
            commonErrors: ["Confusing wavelength with frequency."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "phys12-u4-em-spectrum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the energy of a photon with wavelength 400 nm (violet light).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Photon energy", statement: "$E = hc/\\lambda$" }],
            steps: [
              { reasoning: "$E = (6.63 \\times 10^{-34})(3.00 \\times 10^8)/(400 \\times 10^{-9})$.", marks: 1, markCode: "M" },
              { reasoning: "$= (1.99 \\times 10^{-25})/(4.0 \\times 10^{-7}) = 4.97 \\times 10^{-19}$ J.", working: "E=hc/lambda=4.97e-19", marks: 1, markCode: "M" },
              { reasoning: "E ≈ $5.0 \\times 10^{-19}$ J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.97×10⁻¹⁹ J",
            commonErrors: ["Using wrong constants.", "Unit conversion errors."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u4-em-spectrum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is UV radiation dangerous while visible light is not?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photon energy", statement: "$E = hc/\\lambda$; shorter λ = higher energy." },
              { kind: "principle", name: "Biological effects", statement: "UV photon energy can break chemical bonds in DNA." },
            ],
            steps: [
              { reasoning: "UV has shorter wavelength (10-400 nm) than visible (400-700 nm), so higher photon energy.", marks: 1, markCode: "R" },
              { reasoning: "UV photon energy (~3-124 eV) is enough to break chemical bonds in DNA and proteins.", marks: 1, markCode: "B" },
              { reasoning: "Visible light photons (~1.6-3.1 eV) lack energy to break these bonds.", marks: 1, markCode: "B" },
              { reasoning: "This causes sunburn, skin damage, and increased skin cancer risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "UV photons have higher energy that can damage DNA; visible light cannot.",
            commonErrors: ["Thinking all EM waves are equally dangerous.", "Ignoring photon energy dependence on wavelength."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "phys12-u4-em-spectrum-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A microwave oven operates at 2.45 GHz.",
          parts: [
            { label: "a", prompt: "Calculate the wavelength of the microwaves.", marks: 2 },
            { label: "b", prompt: "Calculate the photon energy.", marks: 3 },
            { label: "c", prompt: "Explain why microwaves heat food but don't cause sunburn.", marks: 3 },
            { label: "d", prompt: "Compare the photon energy to visible light photons.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Wave equation", statement: "$\\lambda = c/f$" },
              { kind: "formula", name: "Photon energy", statement: "$E = hf$" },
            ],
            steps: [
              { reasoning: "$\\lambda = c/f = 3.00 \\times 10^8/(2.45 \\times 10^9) = 0.122$ m = 12.2 cm.", working: "lambda=c/f=0.122", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$E = hf = (6.63 \\times 10^{-34})(2.45 \\times 10^9) = 1.62 \\times 10^{-24}$ J.", working: "E=hf=1.62e-24", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: ≈ 1.6×10⁻²⁴ J.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Microwaves have low photon energy — they don't break chemical bonds or ionize molecules.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Instead, they cause water molecules to vibrate/rotate, converting EM energy to thermal energy (heat).", marks: 1, markCode: "B", part: "c" },
              { reasoning: "This is why microwaves heat food but don't damage DNA like UV.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Microwave photon energy (~10⁻⁵ eV) is vastly smaller than visible light (~2 eV) — about 200,000 times less.", marks: 1, markCode: "M", part: "d" },
              { reasoning: "Even though microwave power is high, individual photons are too weak for photochemical effects.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) 12.2 cm (b) 1.62×10⁻²⁴ J (c) low energy → heating not ionization (d) ~10⁻⁵ eV vs ~2 eV for visible.",
            commonErrors: ["Thinking microwave photons are dangerous like UV.", "Confusing power with photon energy."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u4-photoelectric",
      title: "Photoelectric effect and quantum nature",
      skill: "Explain the photoelectric effect, apply Einstein's equation, and discuss wave-particle duality.",
      lesson: {
        sections: [
          {
            heading: "Photoelectric effect",
            body: `When light hits a metal surface, it can eject electrons if photon energy exceeds the **work function** $\\phi$:

$$KE_{max} = hf - \\phi$$

Key observations:\n- No electrons emitted below threshold frequency regardless of intensity\n- Above threshold, more intensity = more electrons, not more energy\n- Emission is instantaneous`,
          },
          {
            heading: "Einstein's explanation",
            body: "Einstein explained this by treating light as particles (photons) with energy $E = hf$. Each photon either ejects one electron or doesn't. Intensity = number of photons per second, not energy per photon.",
          },
          {
            heading: "Wave-particle duality",
            body: "Light exhibits both wave (interference, diffraction) and particle (photoelectric effect, Compton scattering) properties. **de Broglie** proposed matter also has wave nature: $\\lambda = h/p$ where p is momentum. This led to quantum mechanics.",
          },
        ],
        keyFormulas: [
          { name: "Photoelectric equation", statement: "$KE_{max} = hf - \\phi$" },
          { name: "Photon energy", statement: "$E = hf$" },
          { name: "de Broglie wavelength", statement: "$\\lambda = h/p$" },
        ],
        workedExample: {
          problem: "A metal has work function 2.0 eV. What is the threshold frequency for photoelectric emission?",
          solution: "$hf = \\phi$, so $f = \\phi/h = (2.0 \\times 1.6 \\times 10^{-19})/(6.63 \\times 10^{-34}) = 4.83 \\times 10^{14}$ Hz.",
        },
      },
      questions: [
        {
          id: "phys12-u4-photoelectric-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the photoelectric effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light bending through a lens" },
              { id: "b", text: "Emission of electrons when light hits a metal" },
              { id: "c", text: "Light reflecting off a surface" },
              { id: "d", text: "Light splitting into colors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Photoelectric effect", statement: "Light ejects electrons from metal if photon energy > work function." }],
            steps: [{ reasoning: "Photoelectric effect is electron emission from metal surface illuminated by light.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Electron emission from metal",
            commonErrors: ["Confusing with refraction or reflection."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u4-photoelectric-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A metal has work function 3.0 eV. Light of frequency 7.0×10¹⁴ Hz shines on it. What is the maximum kinetic energy of emitted electrons?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photoelectric equation", statement: "$KE_{max} = hf - \\phi$" },
              { kind: "method", name: "Unit conversion", statement: "Convert eV to J: 1 eV = 1.6×10⁻¹⁹ J" },
            ],
            steps: [
              { reasoning: "$hf = 6.63 \\times 10^{-34} \\times 7.0 \\times 10^{14} = 4.64 \\times 10^{-19}$ J = 2.90 eV.", working: "hf=4.64e-19J=2.90eV", marks: 1, markCode: "M" },
              { reasoning: "$KE_{max} = hf - \\phi = 2.90 - 3.0 = -0.10$ eV — negative means no emission!", working: "KE=2.90-3.0=-0.10", marks: 1, markCode: "M" },
              { reasoning: "Since photon energy (2.90 eV) < work function (3.0 eV), no electrons are emitted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No emission — photon energy below threshold.",
            commonErrors: ["Ignoring threshold frequency.", "Unit conversion errors."],
            examinerNote: "M2 calculation, A1 conclusion. Tricky: answer is no emission.",
          },
        },
        {
          id: "phys12-u4-photoelectric-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why increasing light intensity doesn't increase electron energy in the photoelectric effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photon model", statement: "Each photon has fixed energy hf; intensity = more photons." },
              { kind: "principle", name: "One-to-one", statement: "One photon ejects at most one electron." },
            ],
            steps: [
              { reasoning: "Light consists of photons each with energy $hf$ — independent of intensity.", marks: 1, markCode: "R" },
              { reasoning: "Intensity = number of photons per second, not energy per photon.", marks: 1, markCode: "B" },
              { reasoning: "More photons = more electrons ejected (if above threshold), but each electron gets same max KE = hf - φ.", marks: 1, markCode: "B" },
              { reasoning: "This one-to-one photon-electron interaction explains the effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intensity controls number of photons/electrons, not energy per photon.",
            commonErrors: ["Thinking brighter light = more energetic photons."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "phys12-u4-photoelectric-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "In the Compton effect, an X-ray photon (λ = 0.10 nm) scatters off an electron.",
          parts: [
            { label: "a", prompt: "Calculate the photon's initial energy.", marks: 3 },
            { label: "b", prompt: "If the scattered photon has wavelength 0.12 nm, calculate its energy.", marks: 3 },
            { label: "c", prompt: "Calculate the kinetic energy transferred to the electron.", marks: 2 },
            { label: "d", prompt: "Explain what this demonstrates about light's nature.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photon energy", statement: "$E = hc/\\lambda$" },
              { kind: "principle", name: "Compton effect", statement: "Photon scatters like particle, losing energy to electron." },
            ],
            steps: [
              { reasoning: "$E_i = hc/\\lambda_i = (6.63 \\times 10^{-34})(3.00 \\times 10^8)/(0.10 \\times 10^{-9}) = 1.99 \\times 10^{-16}$ J.", working: "Ei=hc/lambda=1.99e-16", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Answer: ≈ 1.99×10⁻¹⁶ J (about 1240 eV).", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$E_f = hc/\\lambda_f = 1.99 \\times 10^{-16} \\times (0.10/0.12) = 1.66 \\times 10^{-16}$ J.", working: "Ef=1.66e-16", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: ≈ 1.66×10⁻¹⁶ J.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$KE_{electron} = E_i - E_f = 1.99 \\times 10^{-16} - 1.66 \\times 10^{-16} = 0.33 \\times 10^{-16} = 3.3 \\times 10^{-17}$ J.", working: "KE=3.3e-17", marks: 2, markCode: "M", part: "c" },
              { reasoning: "This demonstrates light has particle nature — photons scatter like billiard balls, transferring energy and momentum.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "The wavelength increase (energy loss) is characteristic of particle collision.", marks: 1, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) 1.99×10⁻¹⁶ J (b) 1.66×10⁻¹⁶ J (c) 3.3×10⁻¹⁷ J (d) light shows particle properties.",
            commonErrors: ["Forgetting energy conservation.", "Using wrong formula for scattered photon."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
