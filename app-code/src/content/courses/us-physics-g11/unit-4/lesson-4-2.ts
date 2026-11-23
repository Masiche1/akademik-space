import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "phys11-u4-lesson-4-2",
  code: "4-2",
  title: "Electromagnetic Radiation",
  goal: "I CAN use $c = f\\lambda$ and $E = hf$ with the electromagnetic spectrum, and explain the photoelectric effect and the effects of radiation on matter.",
  standards: [
    "HS-PS4-3",
    "HS-PS4-4",
    "SEP: Engaging in Argument from Evidence",
    "CCC: Cause and Effect",
  ],
  vocabulary: [
    {
      term: "Electromagnetic spectrum",
      definition:
        "The family of transverse electromagnetic waves, ordered by frequency: radio, microwave, infrared, visible, ultraviolet, X-ray and gamma ray.",
    },
    {
      term: "Photon",
      definition:
        "A packet (quantum) of electromagnetic energy. The energy of one photon is $E = hf$.",
    },
    {
      term: "Planck's constant",
      definition:
        "The constant $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$ that links photon energy to frequency.",
    },
    {
      term: "Photoelectric effect",
      definition:
        "The emission of electrons from a metal surface when light of high enough frequency shines on it.",
    },
    {
      term: "Work function",
      definition:
        "The minimum energy $\\phi$ needed to free an electron from the surface of a metal.",
    },
    {
      term: "Threshold frequency",
      definition:
        "The lowest frequency $f_0 = \\phi / h$ at which light can eject electrons from a given metal.",
    },
    {
      term: "Ionizing radiation",
      definition:
        "Radiation whose photons carry enough energy to remove electrons from atoms, such as ultraviolet, X-rays and gamma rays.",
    },
  ],
  concepts: [
    {
      id: "phys11-u4-em-spectrum",
      title: "The electromagnetic spectrum and photon energy",
      skill:
        "Use $c = f\\lambda$ and $E = hf$ to compare regions of the electromagnetic spectrum.",
      lesson: {
        sections: [
          {
            heading: "One family of waves",
            body: "All electromagnetic (EM) waves are transverse, travel at the speed of light $c = 3.00 \\times 10^{8}\\ \\text{m/s}$ in a vacuum, and differ only in frequency and wavelength. In order of increasing frequency: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.\n\nThe wave equation takes the form $c = f\\lambda$. Higher frequency means shorter wavelength.",
          },
          {
            heading: "Photons carry energy in packets",
            body: "EM radiation also behaves as a stream of **photons**. The energy of one photon depends only on its frequency:\n\n$$E = hf, \\qquad h = 6.63 \\times 10^{-34}\\ \\text{J·s}$$\n\nIncreasing the frequency increases the energy of each photon. Making the beam brighter only increases the number of photons per second, not the energy of each one. Photon energies are tiny in joules, so they are often given in electron-volts: $1\\ \\text{eV} = 1.60 \\times 10^{-19}\\ \\text{J}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Wave speed of light",
            statement:
              "$c = f\\lambda$, $c = 3.00 \\times 10^{8}\\ \\text{m/s}$",
          },
          {
            name: "Photon energy",
            statement: "$E = hf$, $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$",
          },
          {
            name: "Energy unit",
            statement: "$1\\ \\text{eV} = 1.60 \\times 10^{-19}\\ \\text{J}$",
          },
        ],
        workedExample: {
          problem:
            "Find the frequency and photon energy of red light of wavelength $7.00 \\times 10^{-7}\\ \\text{m}$.",
          solution:
            "Frequency: $f = \\dfrac{c}{\\lambda} = \\dfrac{3.00 \\times 10^{8}}{7.00 \\times 10^{-7}} = 4.29 \\times 10^{14}\\ \\text{Hz}$. Photon energy: $E = hf = (6.63 \\times 10^{-34})(4.29 \\times 10^{14}) = 2.84 \\times 10^{-19}\\ \\text{J}$, which is about $1.8\\ \\text{eV}$.",
        },
      },
      questions: [
        {
          id: "phys11-u4-em-spectrum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of electromagnetic radiation has the highest frequency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ultraviolet" },
              { id: "b", text: "Gamma rays" },
              { id: "c", text: "Infrared" },
              { id: "d", text: "Radio waves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Order of the spectrum",
                statement:
                  "Frequency increases: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gamma rays sit at the high-frequency, short-wavelength end of the spectrum.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Gamma rays",
            commonErrors: [
              "Reversing the order of the spectrum.",
              "Thinking ultraviolet is the highest because it is the highest of the three light-related options.",
            ],
            examinerNote: "B1 for gamma rays.",
          },
        },
        {
          id: "phys11-u4-em-spectrum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Green light has a wavelength of $5.00 \\times 10^{-7}\\ \\text{m}$ in a vacuum. Use $c = 3.00 \\times 10^{8}\\ \\text{m/s}$.\n\nCalculate its frequency. Enter your answer in units of $10^{14}\\ \\text{Hz}$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Frequency (in 10^14 Hz)",
                answer: 6.0,
                tolerance: 0.05,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "EM wave equation",
                statement: "$c = f\\lambda$",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange and substitute.",
                working:
                  "f = \\frac{c}{\\lambda} = \\frac{3.00 \\times 10^{8}}{5.00 \\times 10^{-7}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "f = 6.0 \\times 10^{14}\\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6.0 \\times 10^{14}\\ \\text{Hz}$ (enter 6.0)",
            commonErrors: [
              "Multiplying $c$ by $\\lambda$.",
              "Errors with the power of ten when dividing by $10^{-7}$.",
            ],
            examinerNote:
              "M1 for $c/\\lambda$ with correct substitution. A1 for $6.0 \\times 10^{14}$ Hz.",
          },
        },
        {
          id: "phys11-u4-em-spectrum-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A photon of green light has a wavelength of $5.00 \\times 10^{-7}\\ \\text{m}$. Use $c = 3.00 \\times 10^{8}\\ \\text{m/s}$ and $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$.\n\nCalculate the energy of one photon. Enter your answer in units of $10^{-19}\\ \\text{J}$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Photon energy (in 10^-19 J)",
                answer: 3.98,
                tolerance: 0.02,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "EM wave equation",
                statement: "$c = f\\lambda$",
              },
              { kind: "formula", name: "Photon energy", statement: "$E = hf$" },
            ],
            steps: [
              {
                reasoning: "Find the frequency of the light.",
                working:
                  "f = \\frac{3.00 \\times 10^{8}}{5.00 \\times 10^{-7}} = 6.00 \\times 10^{14}\\text{ Hz}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute into $E = hf$.",
                working: "E = (6.63 \\times 10^{-34})(6.00 \\times 10^{14})",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "E = 3.98 \\times 10^{-19}\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3.98 \\times 10^{-19}\\ \\text{J}$ (enter 3.98)",
            commonErrors: [
              "Using the wavelength directly as the frequency in $E = hf$.",
              "Misplacing the exponent: $10^{-34} \\times 10^{14} = 10^{-20}$, then mis-scaling the coefficient.",
            ],
            examinerNote:
              "M1 for finding $f$. M1 for $hf$ substitution. A1 for $3.98 \\times 10^{-19}$ J (allow equivalent $E = hc/\\lambda$ route).",
          },
        },
        {
          id: "phys11-u4-em-spectrum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A microwave oven uses microwaves of frequency $2.45 \\times 10^{9}\\ \\text{Hz}$. A medical X-ray machine produces X-rays of frequency $3.0 \\times 10^{18}\\ \\text{Hz}$. Use $c = 3.00 \\times 10^{8}\\ \\text{m/s}$ and $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the wavelength of the microwaves in meters, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the energy of one microwave photon in joules, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Calculate how many times greater the energy of one X-ray photon is than the energy of one microwave photon.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why X-rays can ionize atoms in the body but microwave photons cannot, even though the oven is much more intense.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "EM wave equation",
                statement: "$c = f\\lambda$",
              },
              {
                kind: "formula",
                name: "Photon energy",
                statement:
                  "$E = hf$, so photon energy is proportional to frequency.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rearrange the wave equation for wavelength.",
                working:
                  "\\lambda = \\frac{c}{f} = \\frac{3.00 \\times 10^{8}}{2.45 \\times 10^{9}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\lambda = 0.122\\text{ m}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute into $E = hf$.",
                working: "E = (6.63 \\times 10^{-34})(2.45 \\times 10^{9})",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "E = 1.62 \\times 10^{-24}\\text{ J}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Energy is proportional to frequency, so the ratio equals the ratio of frequencies ($h$ cancels).",
                working:
                  "\\frac{E_X}{E_\\mu} = \\frac{3.0 \\times 10^{18}}{2.45 \\times 10^{9}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\approx 1.2 \\times 10^{9}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Ionization needs a single photon with enough energy to remove an electron (a few eV, about $10^{-18}$ J). A microwave photon has only about $10^{-24}$ J, far too little.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Making the beam more intense only adds more photons; each photon still has too little energy, whereas each X-ray photon carries enough to ionize.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $0.122\\ \\text{m}$ (b) $1.62 \\times 10^{-24}\\ \\text{J}$ (c) about $1.2 \\times 10^{9}$ times (d) Photon energy depends on frequency, not intensity; only X-ray photons have enough energy to ionize.",
            commonErrors: [
              "In (c) calculating a ratio of wavelengths with the wrong inversion.",
              "In (d) arguing that a more intense beam must have more energetic photons.",
            ],
            examinerNote:
              "(c) Allow $1.22 \\times 10^{9}$. (d) Allow 'microwaves heat by making molecules vibrate but do not remove electrons' oe.",
          },
        },
      ],
    },
    {
      id: "phys11-u4-photoelectric",
      title: "The photoelectric effect and radiation effects",
      skill:
        "Use $E_{k,max} = hf - \\phi$ to explain the photoelectric effect, and relate photon energy to the effects of radiation on matter and health.",
      lesson: {
        sections: [
          {
            heading: "Light as photons",
            body: "When light shines on a clean metal surface, electrons are emitted only if the frequency is above a **threshold frequency** $f_0$. Below $f_0$ no electrons are emitted, however bright the light and however long you wait. This cannot be explained by a continuous wave, but it is explained if light arrives as photons.\n\nEach electron absorbs one photon. It needs at least the **work function** $\\phi$ to escape. Any extra energy becomes kinetic energy:\n\n$$E_{k,\\max} = hf - \\phi, \\qquad f_0 = \\frac{\\phi}{h}$$",
          },
          {
            heading: "Intensity and frequency",
            body: "- Raising the **intensity** (above the threshold) means more photons per second, so **more electrons** are emitted, but $E_{k,\\max}$ is unchanged.\n- Raising the **frequency** increases $E_{k,\\max}$.\n\nThe photoelectric effect shows that light has particle behavior, while diffraction and interference show wave behavior. This is **wave-particle duality**.",
          },
          {
            heading: "Radiation and health",
            body: "Low-energy radiation (radio, microwave, infrared) mostly heats matter. Ultraviolet, X-rays and gamma rays are **ionizing**: single photons can break chemical bonds or remove electrons, damaging DNA and raising cancer risk. Protection uses less exposure time, more distance and shielding such as lead for X-rays, and sunscreen and clothing for UV.",
          },
        ],
        keyFormulas: [
          {
            name: "Photoelectric equation",
            statement: "$E_{k,\\max} = hf - \\phi$",
          },
          { name: "Threshold frequency", statement: "$f_0 = \\phi / h$" },
        ],
        workedExample: {
          problem:
            "A metal has work function $\\phi = 4.0 \\times 10^{-19}\\ \\text{J}$. Light of frequency $8.0 \\times 10^{14}\\ \\text{Hz}$ shines on it. Find the maximum kinetic energy of the emitted electrons.",
          solution:
            "Photon energy: $hf = (6.63 \\times 10^{-34})(8.0 \\times 10^{14}) = 5.30 \\times 10^{-19}\\ \\text{J}$. Then $E_{k,\\max} = 5.30 \\times 10^{-19} - 4.0 \\times 10^{-19} = 1.3 \\times 10^{-19}\\ \\text{J}$.",
        },
      },
      questions: [
        {
          id: "phys11-u4-photoelectric-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light of frequency below the threshold frequency shines on a metal. The intensity of the light is then increased greatly. What happens?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Electrons are emitted, but with low kinetic energy.",
              },
              { id: "b", text: "Still no electrons are emitted." },
              {
                id: "c",
                text: "More electrons are emitted with greater kinetic energy.",
              },
              { id: "d", text: "Electrons are emitted after a short delay." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photon absorption",
                statement:
                  "Each electron absorbs one photon; if $hf < \\phi$ it cannot escape, whatever the number of photons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each photon has energy below the work function, so no single photon can free an electron. More photons do not help.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Still no electrons are emitted.",
            commonErrors: [
              "Thinking that a brighter beam can build up energy over time, as a continuous wave would.",
              "Confusing intensity with frequency.",
            ],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "phys11-u4-photoelectric-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Light of frequency $9.0 \\times 10^{14}\\ \\text{Hz}$ shines on a metal with work function $3.2 \\times 10^{-19}\\ \\text{J}$. Use $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$.\n\nCalculate the maximum kinetic energy of the emitted electrons. Enter your answer in units of $10^{-19}\\ \\text{J}$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Max kinetic energy (in 10^-19 J)",
                answer: 2.77,
                tolerance: 0.02,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photoelectric equation",
                statement: "$E_{k,\\max} = hf - \\phi$",
              },
            ],
            steps: [
              {
                reasoning: "Find the photon energy.",
                working:
                  "hf = (6.63 \\times 10^{-34})(9.0 \\times 10^{14}) = 5.97 \\times 10^{-19}\\text{ J}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the work function.",
                working:
                  "E_{k,\\max} = 5.97 \\times 10^{-19} - 3.2 \\times 10^{-19}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "E_{k,\\max} = 2.77 \\times 10^{-19}\\text{ J}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.77 \\times 10^{-19}\\ \\text{J}$ (enter 2.77)",
            commonErrors: [
              "Adding the work function instead of subtracting it.",
              "Forgetting to multiply by $h$ and subtracting a frequency from an energy.",
            ],
            examinerNote:
              "M1 for $hf$. M1 for $hf - \\phi$. A1 for $2.77 \\times 10^{-19}$ J (allow 2.8).",
          },
        },
        {
          id: "phys11-u4-photoelectric-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A metal has a work function of $3.2 \\times 10^{-19}\\ \\text{J}$. Use $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$.\n\nCalculate the threshold frequency. Then state, with a reason, whether bright light of frequency $4.5 \\times 10^{14}\\ \\text{Hz}$ would eject electrons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Threshold frequency",
                statement: "$f_0 = \\phi / h$",
              },
              {
                kind: "principle",
                name: "One photon, one electron",
                statement:
                  "Electrons are emitted only if a single photon has $hf \\ge \\phi$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At threshold the photon energy equals the work function.",
                working:
                  "f_0 = \\frac{\\phi}{h} = \\frac{3.2 \\times 10^{-19}}{6.63 \\times 10^{-34}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "f_0 = 4.83 \\times 10^{14}\\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "$4.5 \\times 10^{14}\\ \\text{Hz}$ is below $f_0$, so no electrons are emitted.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Each photon has too little energy to free an electron, and brightness only increases the number of photons, not the energy of each.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "$f_0 = 4.83 \\times 10^{14}\\ \\text{Hz}$; no electrons are emitted because each photon's energy is below the work function, regardless of brightness.",
            commonErrors: [
              "Dividing $h$ by $\\phi$.",
              "Saying a bright enough beam would eventually eject electrons.",
            ],
            examinerNote:
              "M1 for $\\phi / h$. A1 for $4.83 \\times 10^{14}$ Hz (allow 4.8). B1 for no emission. R1 for reason in terms of photon energy (ecf from $f_0$).",
          },
        },
        {
          id: "phys11-u4-photoelectric-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A metal surface has a work function of $3.0\\ \\text{eV}$, where $1\\ \\text{eV} = 1.60 \\times 10^{-19}\\ \\text{J}$, so $\\phi = 4.8 \\times 10^{-19}\\ \\text{J}$. Ultraviolet light of frequency $1.2 \\times 10^{15}\\ \\text{Hz}$ shines on it. Use $h = 6.63 \\times 10^{-34}\\ \\text{J·s}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the threshold frequency of the metal, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the maximum kinetic energy of the emitted electrons in joules, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The intensity of the ultraviolet light is doubled. State the effect on the maximum kinetic energy and on the number of electrons emitted per second.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Ultraviolet light from the Sun can damage skin cells, but very bright visible light does not. Explain this using the photon model.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photoelectric equation",
                statement: "$E_{k,\\max} = hf - \\phi$ and $f_0 = \\phi / h$",
              },
              {
                kind: "principle",
                name: "Intensity",
                statement:
                  "Intensity sets the number of photons per second, not the energy of each photon.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Threshold frequency is the work function divided by $h$.",
                working:
                  "f_0 = \\frac{4.8 \\times 10^{-19}}{6.63 \\times 10^{-34}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "f_0 = 7.24 \\times 10^{14}\\text{ Hz}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Photon energy minus work function.",
                working:
                  "E_{k,\\max} = (6.63 \\times 10^{-34})(1.2 \\times 10^{15}) - 4.8 \\times 10^{-19} = 7.956 \\times 10^{-19} - 4.8 \\times 10^{-19}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "E_{k,\\max} = 3.16 \\times 10^{-19}\\text{ J}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The maximum kinetic energy is unchanged because the photon energy is unchanged.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Twice as many photons arrive each second, so twice as many electrons are emitted per second.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Each ultraviolet photon carries enough energy to break chemical bonds (for example in DNA), so a single photon can cause damage.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Visible photons have lower energy than the energy needed to break these bonds, and one photon interacts with one molecule.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Extra brightness only supplies more low-energy photons, so it cannot cause the same ionizing damage.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $7.24 \\times 10^{14}\\ \\text{Hz}$ (b) $3.16 \\times 10^{-19}\\ \\text{J}$ (c) $E_{k,\\max}$ unchanged; number of electrons per second doubles (d) UV photons are individually energetic enough to damage cells; visible photons are not, however many arrive.",
            commonErrors: [
              "In (b) subtracting 3.0 from $hf$ without converting eV to J.",
              "In (c) claiming that the kinetic energy doubles.",
            ],
            examinerNote:
              "(a) Allow 7.2. (b) Allow 3.2. (c) Allow 'doubles' for number of electrons, provided intensity is above threshold.",
          },
        },
      ],
    },
  ],
};
