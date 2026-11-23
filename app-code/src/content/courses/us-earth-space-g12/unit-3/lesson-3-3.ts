import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ess12-u3-lesson-3-3",
  code: "3-3",
  title: "Resource Management",
  goal: "I CAN evaluate resource management strategies for sustainability.",
  standards: ["HS-ESS3-1", "HS-ESS3-4", "HS-ESS3-5"],
  vocabulary: [
    { term: "Resource management", definition: "Sustainable use planning." },
    { term: "Renewable", definition: "Replenishing resource." },
    { term: "Nonrenewable", definition: "Finite resource." },
    { term: "Efficiency", definition: "Less waste per output." },
    { term: "Recycling", definition: "Reuse materials." },
  ],
  concepts: [
    {
      id: "ess12-u3-resource-management",
      title: "Resource management",
      skill: "Evaluate sustainability strategies.",
      lesson: {
        sections: [
          {
            heading: "Renewable vs nonrenewable",
            body: "Renewables (solar, wind, hydro, forests) replenish; nonrenewables (fossil fuels, metals, minerals) are finite. Management balances extraction with regeneration for renewables, and conservation/recycling for nonrenewables.",
          },
          {
            heading: "Sustainability strategies",
            body: "Efficiency (do more with less), recycling (reuse materials), substitution (renewables for fossil fuels), and protection (preserve ecosystems providing resources). Each reduces environmental impact while meeting human needs.",
          },
        ],
        keyFormulas: [
          { name: "Renewable", statement: "Replenishes." },
          { name: "Nonrenewable", statement: "Finite." },
          { name: "Efficiency", statement: "Less waste." },
          { name: "Recycling", statement: "Reuse." },
        ],
        workedExample: {
          problem: "Name one strategy to make fossil fuel use more sustainable.",
          solution: "Improve efficiency (more energy per unit fuel) and transition to renewables; also recycle materials to reduce extraction.",
        },
      },
      questions: [
        {
          id: "ess12-u3-resource-management-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Resource management aims for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "maximum extraction"
                    },
                    {
                              "id": "b",
                              "text": "sustainable use for future generations"
                    },
                    {
                              "id": "c",
                              "text": "no use at all"
                    },
                    {
                              "id": "d",
                              "text": "only profit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainability",
                              "statement": "Meet needs without compromising future."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resource management seeks sustainable use — meeting present needs without compromising future generations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** sustainable use for future generations",
          "commonErrors": [
                    "Thinking it's just about profit."
          ]
},
        },
        {
          id: "ess12-u3-resource-management-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Recycling primarily helps with ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increasing extraction"
                    },
                    {
                              "id": "b",
                              "text": "reducing waste and resource demand"
                    },
                    {
                              "id": "c",
                              "text": "polluting more"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Recycling",
                              "statement": "Reuses materials, reduces extraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recycling reduces waste and the need to extract new raw materials.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** reducing waste and resource demand",
          "commonErrors": [
                    "Thinking recycling pollutes."
          ]
},
        },
        {
          id: "ess12-u3-resource-management-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sustainability strategies include efficiency, recycling, substitution, protection — how many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Strategies",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count strategies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 strategies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Missing protection."
          ]
},
        },
        {
          id: "ess12-u3-resource-management-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare managing a renewable resource (forests) vs a nonrenewable resource (oil) — how do strategies differ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Renewable",
                              "statement": "Can regenerate."
                    },
                    {
                              "kind": "definition",
                              "name": "Nonrenewable",
                              "statement": "Cannot replace."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forests (renewable): sustainable harvesting at/below regrowth rate, replanting, protection. Oil (nonrenewable): conservation, efficiency, recycling, substitution with renewables — once extracted it's gone forever.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly contrasts management approaches.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Renewable: harvest ≤ regrowth; nonrenewable: conserve/replace.**",
          "commonErrors": [
                    "Using same strategy for both."
          ]
},
        },
      ],
    },
  ],
};
