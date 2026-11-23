import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "phys10-u3-lesson-3-1",
  code: "3-1",
  title: "Sound Waves",
  goal: "I CAN describe sound wave properties and phenomena.",
  standards: ["HS-PS4-1", "HS-PS4-2"],
  vocabulary: [
    { term: "Sound", definition: "Longitudinal pressure waves." },
    { term: "Pitch", definition: "Perceived frequency." },
    { term: "Loudness", definition: "Perceived amplitude." },
    { term: "Echo", definition: "Reflected sound." },
    { term: "Doppler", definition: "Frequency shift from motion." },
  ],
  concepts: [
    {
      id: "phys10-u3-sound-waves",
      title: "Sound waves",
      skill: "Describe sound properties and phenomena.",
      lesson: {
        sections: [
          {
            heading: "Sound properties",
            body: "Sound is a longitudinal wave — particles vibrate parallel to travel direction. Pitch depends on frequency (high freq = high pitch); loudness depends on amplitude. Sound needs a medium — it cannot travel through vacuum.",
          },
          {
            heading: "Echoes and Doppler",
            body: "Echoes are reflected sound waves. The Doppler effect: a moving source shifts perceived frequency — ambulance siren sounds higher approaching, lower receding.",
          },
        ],
        keyFormulas: [
          { name: "Pitch", statement: "Frequency." },
          { name: "Loudness", statement: "Amplitude." },
          { name: "Speed", statement: "$v = f\\lambda$" },
        ],
        workedExample: {
          problem: "Why can't sound be heard in space?",
          solution: "Space is a vacuum — sound needs a medium (air, water, solid) to travel through.",
        },
      },
      questions: [
        {
          id: "phys10-u3-sound-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound is a ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "transverse wave"
                    },
                    {
                              "id": "b",
                              "text": "longitudinal wave"
                    },
                    {
                              "id": "c",
                              "text": "electromagnetic wave"
                    },
                    {
                              "id": "d",
                              "text": "standing wave only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sound",
                              "statement": "Longitudinal pressure waves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sound waves are longitudinal — particles vibrate parallel to propagation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** longitudinal wave",
          "commonErrors": [
                    "Thinking sound is transverse."
          ]
},
        },
        {
          id: "phys10-u3-sound-waves-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A higher pitch sound has a higher ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "amplitude"
                    },
                    {
                              "id": "b",
                              "text": "frequency"
                    },
                    {
                              "id": "c",
                              "text": "wavelength only"
                    },
                    {
                              "id": "d",
                              "text": "speed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pitch",
                              "statement": "Perceived frequency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pitch corresponds to frequency — higher frequency = higher pitch.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** frequency",
          "commonErrors": [
                    "Confusing with loudness."
          ]
},
        },
        {
          id: "phys10-u3-sound-waves-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sound travels at 340 m/s in air. How far in 2 seconds?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Distance",
                              "answer": 680,
                              "unit": "m"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Speed",
                              "statement": "$d = vt = 340 \\times 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$340 \\times 2 = 680$ m.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$680$ m",
          "commonErrors": [
                    "Dividing instead of multiplying."
          ]
},
        },
        {
          id: "phys10-u3-sound-waves-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why an ambulance siren sounds higher-pitched as it approaches and lower-pitched as it moves away (Doppler effect).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Doppler",
                              "statement": "Frequency shift from relative motion."
                    },
                    {
                              "kind": "skill",
                              "name": "Explain",
                              "statement": "Wave compression/rarefaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "As the ambulance approaches, each wavefront is emitted closer to the previous one, compressing waves — higher frequency reaches the listener. As it recedes, wavefronts spread out — lower frequency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains compression ahead and stretching behind.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Approach = compressed = higher pitch.**",
          "commonErrors": [
                    "Saying the siren itself changes frequency."
          ]
},
        },
      ],
    },
  ],
};
