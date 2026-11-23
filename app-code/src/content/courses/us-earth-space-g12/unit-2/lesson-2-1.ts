import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ess12-u2-lesson-2-1",
  code: "2-1",
  title: "The Solar System",
  goal: "I CAN describe the solar system's structure and Earth's place in it.",
  standards: ["HS-ESS1-1", "HS-ESS1-2", "HS-ESS1-3", "HS-ESS1-4", "HS-ESS1-5", "HS-ESS1-6", "HS-ESS1-7"],
  vocabulary: [
    { term: "Solar system", definition: "Sun + planets + smaller bodies." },
    { term: "Terrestrial", definition: "Rocky inner planets." },
    { term: "Gas giant", definition: "Jupiter/Saturn." },
    { term: "Asteroid belt", definition: "Rocky debris between Mars/Jupiter." },
    { term: "Gravity", definition: "Keeps bodies in orbit." },
  ],
  concepts: [
    {
      id: "ess12-u2-solar-system",
      title: "The solar system",
      skill: "Describe solar system structure and Earth's position.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "The Sun (99.8% of mass) at center; 8 planets orbit it. Terrestrial planets (Mercury, Venus, Earth, Mars) are rocky and inner; gas/ice giants (Jupiter, Saturn, Uranus, Neptune) are outer. The asteroid belt lies between Mars and Jupiter.",
          },
          {
            heading: "Earth's place",
            body: "Earth is the third planet — the only known world with liquid surface water and life. Its position in the habitable zone, protective magnetic field and atmosphere make life possible.",
          },
        ],
        keyFormulas: [
          { name: "Terrestrial", statement: "Rocky inner." },
          { name: "Gas giants", statement: "Jupiter+ outer." },
          { name: "Habitable zone", statement: "Liquid water possible." },
        ],
        workedExample: {
          problem: "Why is Earth unique in the solar system?",
          solution: "It's the only known planet with liquid surface water, an oxygen-rich atmosphere and life — enabled by its distance from the Sun and protective features.",
        },
      },
      questions: [
        {
          id: "ess12-u2-solar-system-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The asteroid belt lies between ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Earth and Mars"
                    },
                    {
                              "id": "b",
                              "text": "Mars and Jupiter"
                    },
                    {
                              "id": "c",
                              "text": "Jupiter and Saturn"
                    },
                    {
                              "id": "d",
                              "text": "Saturn and Uranus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Asteroid belt",
                              "statement": "Between Mars and Jupiter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The asteroid belt orbits between Mars and Jupiter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** Mars and Jupiter",
          "commonErrors": [
                    "Misplacing the belt."
          ]
},
        },
        {
          id: "ess12-u2-solar-system-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which planets are terrestrial (rocky)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Jupiter, Saturn"
                    },
                    {
                              "id": "b",
                              "text": "Mercury, Venus, Earth, Mars"
                    },
                    {
                              "id": "c",
                              "text": "Uranus, Neptune"
                    },
                    {
                              "id": "d",
                              "text": "only Earth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Terrestrial",
                              "statement": "Inner rocky planets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mercury through Mars are rocky terrestrial planets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** Mercury, Venus, Earth, Mars",
          "commonErrors": [
                    "Including gas giants."
          ]
},
        },
        {
          id: "ess12-u2-solar-system-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "The solar system has 8 planets. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Planets",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Planets",
                              "statement": "8 planets orbit the Sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 planets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Counting Pluto (dwarf planet)."
          ]
},
        },
        {
          id: "ess12-u2-solar-system-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why Earth is in the 'habitable zone' and what that means for the possibility of life.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Habitable zone",
                              "statement": "Distance where liquid water can exist."
                    },
                    {
                              "kind": "skill",
                              "name": "Conditions",
                              "statement": "Water + atmosphere + temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth orbits at a distance where the Sun's energy allows liquid water to exist on the surface — not too hot (like Venus) or too cold (like Mars). This, plus atmosphere and magnetic field, makes life possible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains distance-energy-water relationship.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Right distance → liquid water → possible life.**",
          "commonErrors": [
                    "Saying it's just luck."
          ]
},
        },
      ],
    },
  ],
};
