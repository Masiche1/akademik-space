import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "phys10-u3-lesson-3-3",
  code: "3-3",
  title: "The Electromagnetic Spectrum",
  goal: "I CAN describe the EM spectrum and its applications.",
  standards: ["HS-PS4-3", "HS-PS4-5"],
  vocabulary: [
    { term: "Radio waves", definition: "Longest wavelength, lowest freq." },
    { term: "Microwaves", definition: "Heat food, radar." },
    { term: "Infrared", definition: "Heat radiation." },
    { term: "Visible", definition: "Colors we see." },
    { term: "UV/X-ray/gamma", definition: "High energy, dangerous." },
    { term: "Spectrum", definition: "All EM waves by wavelength." },
  ],
  concepts: [
    {
      id: "phys10-u3-em-spectrum",
      title: "The EM spectrum",
      skill: "Describe EM wave types and applications.",
      lesson: {
        sections: [
          {
            heading: "The spectrum",
            body: "EM waves range from radio (long wavelength, low frequency) through microwaves, infrared, visible light, ultraviolet, X-rays to gamma rays (short wavelength, high frequency). All travel at light speed in vacuum.",
          },
          {
            heading: "Applications",
            body: "Radio for communication, microwaves for cooking/radar, infrared for heat cameras, visible for sight, UV for sterilization (and sunburn), X-rays for medical imaging, gamma for cancer treatment.",
          },
        ],
        keyFormulas: [
          { name: "Spectrum order", statement: "Radio → gamma." },
          { name: "Speed", statement: "$3 \\times 10^8$ m/s all." },
          { name: "$v = f\\lambda$", statement: undefined },
        ],
        workedExample: {
          problem: "Which has higher frequency: red light or blue light?",
          solution: "Blue — within visible light, blue/violet have shorter wavelengths and higher frequencies than red.",
        },
      },
      questions: [
        {
          id: "phys10-u3-em-spectrum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which has the longest wavelength?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "gamma rays"
                    },
                    {
                              "id": "b",
                              "text": "X-rays"
                    },
                    {
                              "id": "c",
                              "text": "radio waves"
                    },
                    {
                              "id": "d",
                              "text": "visible light"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Spectrum",
                              "statement": "Radio = longest wavelength."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Radio waves have the longest wavelengths in the EM spectrum.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** radio waves",
          "commonErrors": [
                    "Reversing the spectrum order."
          ]
},
        },
        {
          id: "phys10-u3-em-spectrum-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "X-rays are used in medicine for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cooking"
                    },
                    {
                              "id": "b",
                              "text": "imaging bones"
                    },
                    {
                              "id": "c",
                              "text": "communication"
                    },
                    {
                              "id": "d",
                              "text": "heating food"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "X-rays",
                              "statement": "Pass through soft tissue, blocked by bone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "X-rays image bones because dense bone absorbs them while soft tissue lets them pass.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** imaging bones",
          "commonErrors": [
                    "Confusing with other EM uses."
          ]
},
        },
        {
          id: "phys10-u3-em-spectrum-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "The EM spectrum has 7 main regions. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Regions",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Spectrum",
                              "statement": "Radio, micro, IR, visible, UV, X, gamma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 regions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Missing one region."
          ]
},
        },
        {
          id: "phys10-u3-em-spectrum-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare radio waves and gamma rays: wavelength, frequency, energy, and one application of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Spectrum",
                              "statement": "Opposite ends."
                    },
                    {
                              "kind": "skill",
                              "name": "Compare",
                              "statement": "Properties + uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Radio: longest wavelength, lowest frequency/energy — used for communication. Gamma: shortest wavelength, highest frequency/energy — used in cancer treatment and sterilization.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both compared correctly across all properties.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Radio: low energy/long λ; gamma: high energy/short λ.**",
          "commonErrors": [
                    "Swapping the properties."
          ]
},
        },
      ],
    },
  ],
};
