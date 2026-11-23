import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "app1-u3-lesson-3-1",
  code: "3-1",
  title: "Waves and Sound",
  goal: "I CAN describe wave properties and apply wave equations.",
  standards: ["WAV-1"],
  vocabulary: [
    { term: "Wave", definition: "Oscillation transferring energy without transferring matter." },
    { term: "Wavelength", definition: "$\\lambda$ — distance between successive crests." },
    { term: "Frequency", definition: "$f$ — oscillations per second (Hz)." },
    { term: "Wave speed", definition: "$v = f\\lambda$ — medium-dependent." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium — determines energy/intensity." },
    { term: "Longitudinal wave", definition: "Oscillation parallel to propagation — sound." },
    { term: "Transverse wave", definition: "Oscillation perpendicular to propagation — light, rope waves." },
    { term: "Doppler effect", definition: "Frequency shift from relative motion between source and observer." },
  ],
  concepts: [
    {
      id: "app1-u3-waves-sound",
      title: "Waves",
      skill: "Apply $v = f\\lambda$ and describe wave phenomena.",
      lesson: {
        sections: [
          {
            heading: "Wave properties",
            body: "$v = f\\lambda$ relates speed, frequency, wavelength. Frequency is set by the source; speed is set by the medium; wavelength adjusts. Amplitude determines energy ($E \\propto A^2$) and perceived loudness/brightness. Waves transfer energy, not matter.",
          },
          {
            heading: "Types and phenomena",
            body: "Transverse waves (light, EM, rope) oscillate perpendicular; longitudinal (sound, compressions) parallel. Sound needs a medium (no vacuum); light doesn't. **Doppler effect**: approaching source compresses waves (higher pitch); receding stretches them (lower). Interference (constructive/destructive) and resonance explain beats and standing waves.",
          },
        ],
        keyFormulas: [
          { name: "Wave equation", statement: "$v = f\\lambda$" },
          { name: "Energy", statement: "$E \\propto A^2$" },
        ],
        workedExample: {
          problem: "Sound wave $f = 440$ Hz travels at $340$ m/s. Wavelength?",
          solution: "$\\lambda = \\frac{v}{f} = \\frac{340}{440} \\approx 0.77$ m.",
        },
      },
      questions: [
        {
          id: "app1-u3-waves-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Waves transfer ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "matter"
                    },
                    {
                              "id": "b",
                              "text": "energy"
                    },
                    {
                              "id": "c",
                              "text": "both"
                    },
                    {
                              "id": "d",
                              "text": "neither"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Wave",
                              "statement": "Energy propagates; medium particles oscillate in place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Waves carry energy without net matter transport — particles oscillate around fixed positions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Energy",
          "commonErrors": [
                    "Thinking waves move the medium along with them."
          ]
},
        },
        {
          id: "app1-u3-waves-sound-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sound cannot travel through ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water"
                    },
                    {
                              "id": "b",
                              "text": "air"
                    },
                    {
                              "id": "c",
                              "text": "vacuum"
                    },
                    {
                              "id": "d",
                              "text": "steel"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Medium requirement",
                              "statement": "Sound is a longitudinal wave needing particles to compress."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sound needs a medium — vacuum has no particles to transmit the wave.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Vacuum",
          "commonErrors": [
                    "Thinking all waves need no medium like light."
          ]
},
        },
        {
          id: "app1-u3-waves-sound-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A wave has $v = 12$ m/s and $\\lambda = 0.5$ m. Find frequency. Enter Hz.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$f$",
                              "answer": 24
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$f = v/\\lambda$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f = \\frac{12}{0.5} = 24$ Hz.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$f = 24$ Hz.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$24$ Hz",
          "commonErrors": [
                    "Multiplying instead of dividing $v$ by $\\lambda$."
          ]
},
        },
        {
          id: "app1-u3-waves-sound-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the Doppler effect and predict the observed frequency change for an approaching ambulance siren.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Doppler",
                              "statement": "Relative motion compresses/stretches wavefronts."
                    },
                    {
                              "kind": "concept",
                              "name": "Approach",
                              "statement": "Source moving toward observer compresses waves ahead."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Doppler effect: relative motion between source and observer shifts observed frequency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Approaching siren compresses wavefronts in front — wavelength decreases, frequency (pitch) increases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "After passing, wavefronts stretch — pitch drops. This is why sirens 'wail' as they pass.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Approaching source: higher pitch; receding: lower",
          "commonErrors": [
                    "Thinking the siren's actual frequency changes — it's the observed frequency that shifts."
          ]
},
        },
      ],
    },
  ],
};
