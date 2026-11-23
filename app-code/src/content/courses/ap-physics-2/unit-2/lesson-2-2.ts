import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "app2-u2-lesson-2-2",
  code: "2-2",
  title: "RC Circuits and Electromagnetic Waves",
  goal: "I CAN analyze RC circuits and describe EM wave properties.",
  standards: ["ELC-2"],
  vocabulary: [
    { term: "Capacitor in DC", definition: "Blocks steady current; charges to $Q = CV$ over time." },
    { term: "RC time constant", definition: "$\\tau = RC$ — time to charge to $\\sim 63\\%$; $5\\tau$ for full charge." },
    { term: "Charging curve", definition: "$Q(t) = Q_{max}(1 - e^{-t/RC})$ — exponential approach." },
    { term: "EM wave", definition: "Oscillating $\\vec{E}$ and $\\vec{B}$ perpendicular to each other and propagation." },
    { term: "EM spectrum", definition: "Radio $<$ microwave $<$ IR $<$ visible $<$ UV $<$ X-ray $<$ gamma — increasing frequency/energy." },
    { term: "Speed of light", definition: "$c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8$ m/s in vacuum." },
  ],
  concepts: [
    {
      id: "app2-u2-rc-circuits-em",
      title: "RC circuits and EM waves",
      skill: "Analyze capacitor charging and describe EM radiation.",
      lesson: {
        sections: [
          {
            heading: "RC circuits",
            body: "A capacitor in series with resistor charges exponentially: $Q(t) = CV(1 - e^{-t/RC})$. The **time constant** $\\tau = RC$ sets the pace — after one $\\tau$, charge reaches $\\sim 63\\%$; after $5\\tau$, effectively full. Discharging follows the same exponential decay.",
          },
          {
            heading: "Electromagnetic waves",
            body: "Changing electric fields induce magnetic fields and vice versa — self-propagating waves needing no medium. $\\vec{E}$, $\\vec{B}$, and propagation are mutually perpendicular. All EM waves travel at $c \\approx 3 \\times 10^8$ m/s in vacuum. The spectrum orders by wavelength/frequency: radio (longest) to gamma (shortest, most energetic).",
          },
        ],
        keyFormulas: [
          { name: "RC charging", statement: "$Q(t) = Q_{max}(1 - e^{-t/RC})$" },
          { name: "Time constant", statement: "$\\tau = RC$" },
          { name: "EM wave", statement: "$c = f\\lambda$; $E \\perp B \\perp$ propagation" },
        ],
        workedExample: {
          problem: "$R = 1000$ $\\Omega$, $C = 100$ $\\mu$F. Time constant? Time to $63\\%$ charge?",
          solution: "$\\tau = RC = 1000 \\times 100 \\times 10^{-6} = 0.1$ s. After $\\tau = 0.1$ s, capacitor is $\\sim 63\\%$ charged; $5\\tau = 0.5$ s for full.",
        },
      },
      questions: [
        {
          id: "app2-u2-rc-circuits-em-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The time constant of an RC circuit is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$R + C$"
                    },
                    {
                              "id": "b",
                              "text": "$RC$"
                    },
                    {
                              "id": "c",
                              "text": "$R/C$"
                    },
                    {
                              "id": "d",
                              "text": "$1/RC$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "$\\tau = RC$",
                              "statement": "Product of resistance and capacitance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\tau = RC$ sets the charging timescale — bigger R or C means slower.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$RC$",
          "commonErrors": [
                    "Adding instead of multiplying R and C."
          ]
},
        },
        {
          id: "app2-u2-rc-circuits-em-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an EM wave, the electric and magnetic fields are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "parallel"
                    },
                    {
                              "id": "b",
                              "text": "perpendicular to each other and to propagation"
                    },
                    {
                              "id": "c",
                              "text": "antiparallel"
                    },
                    {
                              "id": "d",
                              "text": "random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "EM wave",
                              "statement": "Transverse wave: $E \\perp B \\perp$ direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "EM waves are transverse — all three directions mutually perpendicular.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Perpendicular",
          "commonErrors": [
                    "Thinking EM waves are longitudinal like sound."
          ]
},
        },
        {
          id: "app2-u2-rc-circuits-em-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $470$ $\\Omega$ resistor and $10$ $\\mu$F capacitor form an RC circuit. Find $\\tau$. Enter seconds.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$\\tau$",
                              "answer": 0.0047
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$\\tau = RC$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\tau = 470 \\times 10 \\times 10^{-6} = 0.0047$ s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\tau = 0.0047$ s.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.0047$ s",
          "commonErrors": [
                    "Using mF or forgetting micro conversion."
          ]
},
        },
        {
          id: "app2-u2-rc-circuits-em-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Order these by increasing frequency: radio waves, visible light, gamma rays, X-rays, microwaves. Then explain what determines an EM wave's energy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "EM spectrum",
                              "statement": "Radio $<$ microwave $<$ visible $<$ X-ray $<$ gamma."
                    },
                    {
                              "kind": "theorem",
                              "name": "$E = hf$",
                              "statement": "Photon energy proportional to frequency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Order: radio $<$ microwaves $<$ visible light $<$ X-rays $<$ gamma rays.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Photon energy $E = hf$ — higher frequency means more energetic photons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gamma rays are most energetic (and dangerous); radio least. Wavelength and frequency are inversely related via $c = f\\lambda$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Radio < microwave < visible < X-ray < gamma; $E = hf$",
          "commonErrors": [
                    "Reversing the spectrum order or thinking wavelength determines energy."
          ]
},
        },
      ],
    },
  ],
};
