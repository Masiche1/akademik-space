import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "app2-u3-lesson-3-2",
  code: "3-2",
  title: "Wave Optics and the Photoelectric Effect",
  goal: "I CAN explain interference, diffraction, and photon energy.",
  standards: ["OPT-2"],
  vocabulary: [
    { term: "Interference", definition: "Superposition of waves — constructive (in phase) or destructive (out of phase)." },
    { term: "Diffraction", definition: "Bending of waves around obstacles/apertures — significant when gap $\\sim \\lambda$." },
    { term: "Double-slit", definition: "Bright fringes at $d\\sin\\theta = m\\lambda$; dark at $(m + \\frac{1}{2})\\lambda$." },
    { term: "Photoelectric effect", definition: "Light ejects electrons from metal only above threshold frequency." },
    { term: "Photon", definition: "Quantum of light: $E = hf$; also $E = \\frac{hc}{\\lambda}$." },
    { term: "Work function", definition: "$\\phi$ — minimum energy to eject electron; $KE_{max} = hf - \\phi$." },
  ],
  concepts: [
    {
      id: "app2-u3-wave-quantum",
      title: "Wave optics and photons",
      skill: "Apply interference conditions and the photon model.",
      lesson: {
        sections: [
          {
            heading: "Wave optics",
            body: "Light behaves as a wave: **interference** creates bright/dark fringes where waves add constructively/destructively. In double-slit, bright fringes satisfy $d\\sin\\theta = m\\lambda$ ($m = 0, \\pm1, \\pm2, \\ldots$). **Diffraction** spreads waves through apertures — single-slit minima at $a\\sin\\theta = m\\lambda$. Wave-particle duality: light is both wave and photons.",
          },
          {
            heading: "Photoelectric effect",
            body: "Einstein explained it with photons: each photon has energy $E = hf$. Electrons eject only if $hf \\ge \\phi$ (work function) — explaining the threshold frequency. Higher frequency means more energetic electrons ($KE_{max} = hf - \\phi$), NOT more electrons — intensity only affects electron COUNT.",
          },
        ],
        keyFormulas: [
          { name: "Double-slit bright", statement: "$d\\sin\\theta = m\\lambda$" },
          { name: "Photon energy", statement: "$E = hf = \\frac{hc}{\\lambda}$" },
          { name: "Photoelectric", statement: "$KE_{max} = hf - \\phi$" },
        ],
        workedExample: {
          problem: "Photon with $\\lambda = 500$ nm. Energy? ($h = 6.63 \\times 10^{-34}$, $c = 3 \\times 10^8$)",
          solution: "$E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34})(3 \\times 10^8)}{500 \\times 10^{-9}} = \\frac{1.989 \\times 10^{-25}}{5 \\times 10^{-7}} = 3.98 \\times 10^{-19}$ J.",
        },
      },
      questions: [
        {
          id: "app2-u3-wave-quantum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bright fringes in double-slit interference occur when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "waves cancel"
                    },
                    {
                              "id": "b",
                              "text": "$d\\sin\\theta = m\\lambda$"
                    },
                    {
                              "id": "c",
                              "text": "$d\\sin\\theta = (m+\\frac{1}{2})\\lambda$"
                    },
                    {
                              "id": "d",
                              "text": "light is bright"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Double-slit",
                              "statement": "Constructive interference at path difference $= m\\lambda$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bright fringes need waves in phase — path difference integer wavelengths.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing bright and dark fringe conditions."
          ]
},
        },
        {
          id: "app2-u3-wave-quantum-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the photoelectric effect, increasing light INTENSITY (same frequency) ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increases electron KE"
                    },
                    {
                              "id": "b",
                              "text": "increases number of ejected electrons"
                    },
                    {
                              "id": "c",
                              "text": "ejects electrons below threshold"
                    },
                    {
                              "id": "d",
                              "text": "no effect"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Photon flux",
                              "statement": "Intensity = photons per second; each photon ejects at most one electron."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More photons = more electrons ejected, but each has same max KE (set by frequency).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "The classic error: intensity affects count, frequency affects energy."
          ]
},
        },
        {
          id: "app2-u3-wave-quantum-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work function $\\phi = 2.0$ eV. Photon energy $hf = 3.0$ eV. Find $KE_{max}$. Enter eV.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$KE_{max}$",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$KE_{max} = hf - \\phi$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$KE_{max} = 3.0 - 2.0 = 1.0$ eV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$KE_{max} = 1.0$ eV.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1.0$ eV",
          "commonErrors": [
                    "Adding instead of subtracting the work function."
          ]
},
        },
        {
          id: "app2-u3-wave-quantum-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the photoelectric effect couldn't be explained by the wave model and how photons resolved it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Wave model failure",
                              "statement": "Predicted any frequency should eject electrons given enough intensity."
                    },
                    {
                              "kind": "theorem",
                              "name": "Photon model",
                              "statement": "$E = hf$ quantized — threshold frequency required."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wave model predicted electron ejection at ANY frequency given enough intensity/time — energy accumulates gradually.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Experiment showed a threshold frequency: below it, NO electrons regardless of intensity; above it, immediate ejection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Einstein's photons deliver energy in discrete packets $hf$ — each electron needs one photon with $hf \\ge \\phi$, explaining threshold and instant ejection.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Photon model: $E = hf$ explains threshold frequency",
          "commonErrors": [
                    "Saying 'light is particles' without connecting to the threshold observation."
          ]
},
        },
      ],
    },
  ],
};
