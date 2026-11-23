import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "phys10-u2-lesson-2-2",
  code: "2-2",
  title: "Temperature and Thermal Energy",
  goal: "I CAN distinguish temperature from thermal energy and explain heat flow.",
  standards: ["HS-PS3-1", "HS-PS3-4"],
  vocabulary: [
    { term: "Temperature", definition: "Average kinetic energy." },
    { term: "Thermal energy", definition: "Total kinetic energy of particles." },
    { term: "Heat", definition: "Thermal energy transfer." },
    { term: "Thermal equilibrium", definition: "Equal temperatures." },
    { term: "Specific heat", definition: "Energy per degree per kg." },
  ],
  concepts: [
    {
      id: "phys10-u2-temperature-energy",
      title: "Temperature and thermal energy",
      skill: "Distinguish temperature from thermal energy.",
      lesson: {
        sections: [
          {
            heading: "Temperature vs thermal energy",
            body: "Temperature measures average particle kinetic energy (how hot). Thermal energy is total kinetic energy of all particles — depends on mass too. A bathtub of warm water has more thermal energy than a cup of hot water.",
          },
          {
            heading: "Heat flow",
            body: "Heat always flows from higher to lower temperature until thermal equilibrium. It is energy in transit, not a substance. Specific heat capacity: energy needed to raise 1 kg by 1°C — water's is unusually high (4186 J/kg·°C).",
          },
        ],
        keyFormulas: [
          { name: "Temperature", statement: "Average KE." },
          { name: "Thermal energy", statement: "Total KE." },
          { name: "Heat flow", statement: "Hot → cold." },
        ],
        workedExample: {
          problem: "Does a spark from a fire or a pot of boiling water have higher temperature? Which has more thermal energy?",
          solution: "The spark has higher temperature (much hotter particles) but the pot has far more thermal energy (more particles).",
        },
      },
      questions: [
        {
          id: "phys10-u2-temperature-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Temperature measures ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "total energy"
                    },
                    {
                              "id": "b",
                              "text": "average kinetic energy of particles"
                    },
                    {
                              "id": "c",
                              "text": "mass"
                    },
                    {
                              "id": "d",
                              "text": "volume"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Temperature",
                              "statement": "Average KE of particles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temperature measures average particle kinetic energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** average kinetic energy of particles",
          "commonErrors": [
                    "Confusing with thermal energy."
          ]
},
        },
        {
          id: "phys10-u2-temperature-energy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Heat flows from ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cold to hot"
                    },
                    {
                              "id": "b",
                              "text": "hot to cold"
                    },
                    {
                              "id": "c",
                              "text": "equal always"
                    },
                    {
                              "id": "d",
                              "text": "solid to gas only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Heat flow",
                              "statement": "High to low temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heat flows spontaneously from hotter to colder objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** hot to cold",
          "commonErrors": [
                    "Reversing the direction."
          ]
},
        },
        {
          id: "phys10-u2-temperature-energy-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water needs 4186 J to heat 1 kg by 1°C. How much energy for 2 kg by 1°C?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Energy",
                              "answer": 8372
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Specific heat",
                              "statement": "$Q = mc\\Delta T = 4186 \\times 2 \\times 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$4186 \\times 2 = 8372$ J.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8372$ J",
          "commonErrors": [
                    "Not doubling for mass."
          ]
},
        },
        {
          id: "phys10-u2-temperature-energy-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why a bathtub of warm water has more thermal energy than a cup of boiling water, even though the cup is hotter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Thermal energy",
                              "statement": "Total KE depends on particle count."
                    },
                    {
                              "kind": "definition",
                              "name": "Temperature",
                              "statement": "Average KE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thermal energy is the total kinetic energy of all particles. The bathtub has vastly more water molecules, so even at lower temperature its total thermal energy exceeds the small cup's.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains particle count vs average energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**More particles = more total energy despite lower temperature.**",
          "commonErrors": [
                    "Saying hotter always means more energy."
          ]
},
        },
      ],
    },
  ],
};
