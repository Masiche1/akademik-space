import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "phys10-u1-lesson-1-3",
  code: "1-3",
  title: "Waves and the Electromagnetic Spectrum",
  goal: "I CAN describe wave properties and the electromagnetic spectrum.",
  standards: ["HS-PS4-1", "HS-PS4-3"],
  vocabulary: [
    { term: "Wave", definition: "Energy transfer without matter." },
    { term: "Wavelength", definition: "Distance between crests." },
    { term: "Frequency", definition: "Waves per second (Hz)." },
    { term: "Amplitude", definition: "Wave height." },
    { term: "Electromagnetic", definition: "Self-propagating waves." },
  ],
  concepts: [
    {
      id: "phys10-u1-waves-em",
      title: "Waves and EM spectrum",
      skill: "Describe wave properties and EM radiation.",
      lesson: {
        sections: [
          {
            heading: "Wave properties",
            body: "Waves transfer energy without transferring matter. Key properties: wavelength ($\\lambda$, distance between crests), frequency ($f$, waves per second in Hz), amplitude (height), and speed $v = f\\lambda$.",
          },
          {
            heading: "EM spectrum",
            body: "Electromagnetic waves travel at light speed ($3 \\times 10^8$ m/s) and include radio, microwave, infrared, visible light, ultraviolet, X-rays and gamma rays — all same phenomenon, different wavelengths/frequencies.",
          },
        ],
        keyFormulas: [
          { name: "Wave speed", statement: "$v = f\\lambda$" },
          { name: "Frequency", statement: "Hz = waves/s" },
          { name: "Light speed", statement: "$3 \\times 10^8$ m/s" },
        ],
        workedExample: {
          problem: "A wave has frequency 5 Hz and wavelength 2 m. What is its speed?",
          solution: "$v = f\\lambda = 5 \\times 2 = 10$ m/s.",
        },
      },
      questions: [
        {
          id: "phys10-u1-waves-em-q1",
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
                              "text": "energy without matter"
                    },
                    {
                              "id": "c",
                              "text": "nothing"
                    },
                    {
                              "id": "d",
                              "text": "only sound"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Wave",
                              "statement": "Energy transfer without matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Waves transfer energy without transferring matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** energy without matter",
          "commonErrors": [
                    "Thinking waves move matter."
          ]
},
        },
        {
          id: "phys10-u1-waves-em-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A wave travels at 12 m/s with wavelength 3 m. What is its frequency?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 Hz"
                    },
                    {
                              "id": "b",
                              "text": "36 Hz"
                    },
                    {
                              "id": "c",
                              "text": "9 Hz"
                    },
                    {
                              "id": "d",
                              "text": "0.25 Hz"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Wave speed",
                              "statement": "$f = v/\\lambda = 12/3 = 4$ Hz."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f = v/\\lambda = 12/3 = 4$ Hz.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** 4 Hz",
          "commonErrors": [
                    "Multiplying instead of dividing."
          ]
},
        },
        {
          id: "phys10-u1-waves-em-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Light travels at $3 \\times 10^8$ m/s. How many meters in 2 seconds?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Distance",
                              "answer": 600000000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Speed",
                              "statement": "$d = vt = 3\\times10^8 \\times 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3 \\times 10^8 \\times 2 = 6 \\times 10^8$ m.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$6 \\times 10^8$ m",
          "commonErrors": [
                    "Halving instead of doubling."
          ]
},
        },
        {
          id: "phys10-u1-waves-em-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why all colors of visible light travel at the same speed in a vacuum but have different wavelengths and frequencies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "EM spectrum",
                              "statement": "Same speed, different $\\lambda$/$f$."
                    },
                    {
                              "kind": "formula",
                              "name": "Wave speed",
                              "statement": "$v = f\\lambda$ fixed in vacuum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All EM waves travel at light speed in vacuum. Since $v = f\\lambda$ is constant, different colors have different $f$ and $\\lambda$ pairs that multiply to the same speed — e.g., red has lower $f$/longer $\\lambda$ than violet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains constant speed with varying $f$ and $\\lambda$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same speed; $f\\lambda$ product constant.**",
          "commonErrors": [
                    "Saying colors have different speeds in vacuum."
          ]
},
        },
      ],
    },
  ],
};
