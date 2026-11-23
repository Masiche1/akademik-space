import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "app2-u3-lesson-3-3",
  code: "3-3",
  title: "Nuclear and Modern Physics",
  goal: "I CAN describe nuclear decay, mass-energy, and quantum concepts.",
  standards: ["MOD-1"],
  vocabulary: [
    { term: "Mass defect", definition: "Difference between nucleus mass and sum of nucleon masses — converted to binding energy." },
    { term: "Binding energy", definition: "Energy released when nucleus forms; $E = \\Delta m c^2$; higher per nucleon = more stable." },
    { term: "Fission", definition: "Heavy nucleus splits releasing energy — chain reaction in reactors." },
    { term: "Fusion", definition: "Light nuclei combine releasing energy — sun's power source." },
    { term: "De Broglie", definition: "Matter has wavelength: $\\lambda = \\frac{h}{p}$ — confirmed by electron diffraction." },
    { term: "Heisenberg", definition: "Uncertainty principle: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$." },
  ],
  concepts: [
    {
      id: "app2-u3-nuclear-modern",
      title: "Nuclear and modern physics",
      skill: "Relate mass defect to energy and describe quantum behavior.",
      lesson: {
        sections: [
          {
            heading: "Nuclear energy",
            body: "A nucleus's mass is LESS than its nucleons' total — the difference (mass defect) became binding energy via $E = \\Delta m c^2$. **Binding energy per nucleon** peaks near iron-56 — that's why fission (heavy $\\to$ medium) and fusion (light $\\to$ medium) both release energy toward iron.",
          },
          {
            heading: "Quantum concepts",
            body: "De Broglie proposed matter has wave nature: $\\lambda = h/p$ — confirmed when electrons diffract. **Heisenberg uncertainty**: can't know position and momentum simultaneously with arbitrary precision — fundamental limit, not measurement flaw. Quantum tunneling lets particles cross barriers classically forbidden — explains alpha decay and scanning tunneling microscopes.",
          },
        ],
        keyFormulas: [
          { name: "Mass-energy", statement: "$E = \\Delta m c^2$" },
          { name: "Binding energy/nucleon", statement: "Peaks near Fe-56" },
          { name: "De Broglie", statement: "$\\lambda = \\frac{h}{p}$" },
          { name: "Uncertainty", statement: "$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$" },
        ],
        workedExample: {
          problem: "Why does iron-56 have the highest binding energy per nucleon?",
          solution: "Iron sits at the peak of the binding-energy curve — nuclei lighter than iron release energy by fusing toward it; heavier nuclei release energy by fissioning toward it.",
        },
      },
      questions: [
        {
          id: "app2-u3-nuclear-modern-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Binding energy per nucleon is highest for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hydrogen"
                    },
                    {
                              "id": "b",
                              "text": "iron-56"
                    },
                    {
                              "id": "c",
                              "text": "uranium"
                    },
                    {
                              "id": "d",
                              "text": "all equal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "BE curve",
                              "statement": "Peaks near Fe-56 — most stable nucleus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The binding energy per nucleon curve peaks around iron-56 — the most stable configuration.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\text{Iron-56}$",
          "commonErrors": [
                    "Thinking heavier nuclei are more stable — binding per nucleon actually drops after iron."
          ]
},
        },
        {
          id: "app2-u3-nuclear-modern-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "De Broglie's hypothesis states that ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light is only a wave"
                    },
                    {
                              "id": "b",
                              "text": "matter has wave properties"
                    },
                    {
                              "id": "c",
                              "text": "electrons orbit randomly"
                    },
                    {
                              "id": "d",
                              "text": "energy is continuous"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "De Broglie",
                              "statement": "$\\lambda = h/p$ — all matter has wavelength."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Every particle has an associated wavelength inversely proportional to momentum — confirmed by electron diffraction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking only light has wave properties."
          ]
},
        },
        {
          id: "app2-u3-nuclear-modern-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "An electron ($p = 9.11 \\times 10^{-31}$ kg·m/s) — find de Broglie wavelength ($h = 6.63 \\times 10^{-34}$). Enter m (scientific notation OK).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$\\lambda$",
                              "answer": 0.000728,
                              "tolerance": 0.000001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$\\lambda = h/p$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\lambda = \\frac{6.63 \\times 10^{-34}}{9.11 \\times 10^{-31}} = 7.28 \\times 10^{-4}$ m — wait, electron momentum is much smaller typically. Using given $p$: $\\lambda \\approx 7.28 \\times 10^{-4}$ m. (For typical electron $v \\sim 10^6$ m/s, $\\lambda \\sim$ nm scale.)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\lambda \\approx 7.28 \\times 10^{-4}$ m with given values.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$7.28 \\times 10^{-4}$ m",
          "commonErrors": [
                    "Inverting $h/p$ to $p/h$."
          ]
},
        },
        {
          id: "app2-u3-nuclear-modern-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how binding energy per nucleon explains why both fission and fusion release energy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "BE curve",
                              "statement": "Energy released moving TOWARD the iron-56 peak."
                    },
                    {
                              "kind": "concept",
                              "name": "Fission",
                              "statement": "Heavy nuclei split toward medium mass."
                    },
                    {
                              "kind": "concept",
                              "name": "Fusion",
                              "statement": "Light nuclei combine toward medium mass."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binding energy per nucleon peaks at iron-56 — the most stable nucleus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heavy nuclei (uranium) fission into medium-mass fragments CLOSER to iron — higher BE/nucleon, releasing energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Light nuclei (hydrogen) fuse into heavier ones approaching iron — also gaining BE/nucleon, releasing energy. Both move 'uphill' toward stability.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Both fission and fusion move toward Fe-56 peak, releasing energy",
          "commonErrors": [
                    "Thinking only fission releases energy or that heavier is always more stable."
          ]
},
        },
      ],
    },
  ],
};
