import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "phys10-u2-lesson-2-3",
  code: "2-3",
  title: "Energy in Earth's Systems",
  goal: "I CAN analyze energy flow through Earth's systems and human technology.",
  standards: ["HS-ESS2-4", "HS-ESS3-4", "HS-ETS1-3"],
  vocabulary: [
    { term: "Energy budget", definition: "Balance of incoming/outgoing energy." },
    { term: "Greenhouse effect", definition: "Trapped heat warms planet." },
    { term: "Solar input", definition: "Sun's energy driving systems." },
    { term: "Efficiency", definition: "Useful output / input." },
    { term: "Renewable", definition: "Energy that replenishes." },
  ],
  concepts: [
    {
      id: "phys10-u2-energy-systems",
      title: "Energy in Earth's systems",
      skill: "Analyze energy flow and human energy systems.",
      lesson: {
        sections: [
          {
            heading: "Earth's energy budget",
            body: "Earth receives solar energy and radiates it back. Greenhouse gases trap some heat — the greenhouse effect keeps Earth warm enough for life. Imbalance (more in than out) causes warming.",
          },
          {
            heading: "Human energy systems",
            body: "Fossil fuels release stored chemical energy but add CO2. Renewables (solar, wind, hydro) harness ongoing energy flows. Efficiency matters: LED bulbs convert more electricity to light than incandescent.",
          },
        ],
        keyFormulas: [
          { name: "Energy budget", statement: "In = out + stored." },
          { name: "Greenhouse", statement: "Traps outgoing heat." },
          { name: "Efficiency", statement: "Output/input." },
        ],
        workedExample: {
          problem: "Why does Earth's surface stay warm at night if the Sun isn't shining?",
          solution: "The atmosphere and surfaces retain thermal energy; greenhouse gases slow heat loss to space.",
        },
      },
      questions: [
        {
          id: "phys10-u2-energy-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The greenhouse effect ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cools Earth"
                    },
                    {
                              "id": "b",
                              "text": "traps heat warming the planet"
                    },
                    {
                              "id": "c",
                              "text": "blocks all sunlight"
                    },
                    {
                              "id": "d",
                              "text": "only happens in greenhouses"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Greenhouse effect",
                              "statement": "Gases trap outgoing heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Greenhouse gases trap some outgoing heat, warming Earth's surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** traps heat warming the planet",
          "commonErrors": [
                    "Thinking it only happens in greenhouses."
          ]
},
        },
        {
          id: "phys10-u2-energy-systems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "coal"
                    },
                    {
                              "id": "b",
                              "text": "natural gas"
                    },
                    {
                              "id": "c",
                              "text": "solar"
                    },
                    {
                              "id": "d",
                              "text": "oil"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Renewable",
                              "statement": "Replenishes naturally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solar energy is renewable — the sun keeps shining.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** solar",
          "commonErrors": [
                    "Choosing a fossil fuel."
          ]
},
        },
        {
          id: "phys10-u2-energy-systems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A device uses 100 J input and produces 25 J useful output. What is its efficiency? (%)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Efficiency",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Efficiency",
                              "statement": "$25/100 \\times 100 = 25$%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$25/100 = 0.25 = 25$%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$25$%",
          "commonErrors": [
                    "Reporting 0.25 instead of 25%."
          ]
},
        },
        {
          id: "phys10-u2-energy-systems-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between Earth's energy budget being balanced vs imbalanced, and one consequence of imbalance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Energy budget",
                              "statement": "In vs out."
                    },
                    {
                              "kind": "skill",
                              "name": "Consequence",
                              "statement": "Imbalance → warming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Balanced: incoming solar energy equals outgoing heat — stable temperature. Imbalanced: more energy stays than leaves (e.g., enhanced greenhouse effect) → global warming.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balance explained with consequence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Balanced = stable; imbalanced = warming.**",
          "commonErrors": [
                    "Not explaining the consequence."
          ]
},
        },
      ],
    },
  ],
};
