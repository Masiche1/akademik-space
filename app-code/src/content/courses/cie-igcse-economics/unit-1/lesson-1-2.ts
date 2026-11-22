import type { Lesson } from "../../../types.ts";

export const lesson272: Lesson = {
  id: "cieiec-u1-lesson-1-2",
  code: "1-2",
  title: "Production Possibility Frontiers",
  goal: "I CAN draw and interpret production possibility frontiers and explain economic growth.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 2: production possibility"],
  
  vocabulary: [
    { term: "Production possibility frontier (PPF)", definition: "Maximum output combinations with given resources." },
    { term: "Efficiency", definition: "Using resources fully without waste." },
    { term: "Inefficiency", definition: "Not using resources fully." },
    { term: "Economic growth", definition: "Increase in productive capacity." },
    { term: "Underemployment", definition: "Resources not fully utilised." },
    { term: "Opportunity cost", definition: "Trade-off shown on PPF." },
  ],
  concepts: [
    {
      id: "cieiec-u1-s2-ppf",
      title: "Production possibility frontier",
      skill: "Draw and interpret PPF diagrams.",
      lesson: {
        sections: [
          {
            heading: "PPF basics",
            body: "PPF shows maximum combinations of two goods producible with given resources/technology. Points on curve = efficient. Inside = inefficient. Outside = unattainable. Curve shifts out = economic growth.",
          },
          {
            heading: "Interpreting PPF",
            body: "Slope shows opportunity cost. Moving along curve = choosing different combinations. Points inside = wasted resources. Economic growth = curve shifts outward.",
          },
        ],
        keyFormulas: [
          { name: "On curve", statement: "efficient production" },
          { name: "Inside", statement: "inefficient" },
          { name: "Outside", statement: "unattainable" },
          { name: "Shift out", statement: "economic growth" },
        ],
        workedExample: {
          problem: "A country produces guns and butter. PPF shows 100 guns OR 200 butter OR combinations. What does point (60 guns, 80 butter) mean?",
          solution: "Point on curve = efficient production of both goods. Moving to more guns means less butter (opportunity cost).",
        },
      },
      questions: [
        {
          id: "cieiec-u1-ppf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a production possibility frontier show?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Maximum output combinations with given resources"
                    },
                    {
                              "id": "b",
                              "text": "Current production levels"
                    },
                    {
                              "id": "c",
                              "text": "Market prices"
                    },
                    {
                              "id": "d",
                              "text": "Future production targets"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PPF",
                              "statement": "Max output combinations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PPF shows maximum combinations of two goods.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Maximum output combinations"
},
        },
        {
          id: "cieiec-u1-ppf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a point inside the PPF mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PPF interpretation",
                              "statement": "Inside = inefficient."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point inside PPF = inefficient production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resources not fully utilised.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inefficient production"
},
        },
        {
          id: "cieiec-u1-ppf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What causes the PPF to shift outward?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Economic growth",
                              "statement": "PPF shift causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Increased resources (labour, capital, land).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improved technology.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Better education/skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "More resources, better technology"
},
        },
        {
          id: "cieiec-u1-ppf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define PPF, efficiency, inefficiency, economic growth, underemployment, opportunity cost. (b) What does PPF show? (c) What does a point on the curve mean? (d) What does a point inside mean? (e) What does a point outside mean? (f) What causes PPF to shift out? (g) What is opportunity cost on PPF? (h) Draw a PPF for a country producing food and clothing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "PPF",
                              "statement": "Diagram interpretation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Max output combinations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Efficient production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Inefficient — wasted resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Unattainable with current resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) More resources/better technology.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Trade-off shown by slope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid PPF diagram.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Production possibility frontier."
},
        },
        {
          id: "cieiec-u1-ppf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A point on the production possibility frontier represents:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Zero output of one good" },
              { "id": "b", "text": "Output that cannot be produced" },
              { "id": "c", "text": "Maximum possible output of both goods" },
              { "id": "d", "text": "Inefficient use of resources" }
            ],
            "correctChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "PPF", "statement": "Maximum output combinations with given resources." }
            ],
            "steps": [
              { "reasoning": "Points on the curve show efficient production using all available resources.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** Maximum possible output of both goods"
          }
        },
        {
          id: "cieiec-u1-ppf-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A point outside the production possibility frontier means:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Resources are being wasted" },
              { "id": "b", "text": "The output combination is unattainable with current resources" },
              { "id": "c", "text": "Only one good is being produced" },
              { "id": "d", "text": "Production is fully efficient" }
            ],
            "correctChoiceId": "b"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "PPF", "statement": "Maximum output combinations with given resources." }
            ],
            "steps": [
              { "reasoning": "Points beyond the curve require more resources or better technology than currently available.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** The output combination is unattainable with current resources"
          }
        },
        {
          id: "cieiec-u1-ppf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Economic growth is shown on a PPF diagram by:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "The curve shifting outward" },
              { "id": "b", "text": "The curve becoming steeper" },
              { "id": "c", "text": "A point moving inside the curve" },
              { "id": "d", "text": "A movement along the curve" }
            ],
            "correctChoiceId": "a"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Economic growth", "statement": "Increase in productive capacity." }
            ],
            "steps": [
              { "reasoning": "Growth means greater productive capacity, shown by the PPF shifting outward.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** The curve shifting outward"
          }
        },
        {
          id: "cieiec-u1-ppf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a bowed-out PPF, the opportunity cost of producing more of one good:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "Remains constant along the curve" },
              { "id": "b", "text": "Is zero at the intercepts" },
              { "id": "c", "text": "Is shown by a shift of the curve" },
              { "id": "d", "text": "Increases as output of that good rises" }
            ],
            "dorrectChoiceId": "c"
          },
          markscheme: {
            "principles": [
              { "kind": "principle", "name": "Increasing opportunity cost", "statement": "Resources are not perfectly substitutable, so cost rises along the curve." }
            ],
            "steps": [
              { "reasoning": "A bowed-out PPF reflects rising opportunity cost as more of one good is produced.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(c)** Increases as output of that good rises"
          }
        },
        {
          id: "cieiec-u1-ppf-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A country suffers a war that destroys factories and farmland. On its PPF diagram this is shown by:",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "The curve shifting inward" },
              { "id": "b", "text": "A movement along the curve" },
              { "id": "c", "text": "A new point inside the old curve" },
              { "id": "d", "text": "The curve shifting outward" }
            ],
            "correctChoiceId": "a"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Economic growth", "statement": "Increase in productive capacity." }
            ],
            "steps": [
              { "reasoning": "Loss of resources reduces productive capacity, so the PPF shifts inward.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** The curve shifting inward"
          }
        },
        {
          id: "cieiec-u1-ppf-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following causes a PPF to shift outward?",
          response: {
            "type": "mcq",
            "choices": [
              { "id": "a", "text": "A change in consumer tastes" },
              { "id": "b", "text": "A rise in the price of one good" },
              { "id": "c", "text": "Moving from one point on the curve to another" },
              { "id": "d", "text": "Improved technology or discovery of new resources" }
            ],
            "correctChoiceId": "d"
          },
          markscheme: {
            "principles": [
              { "kind": "definition", "name": "Economic growth", "statement": "Increase in productive capacity." }
            ],
            "steps": [
              { "reasoning": "Only more resources or better technology increase the maximum output combinations.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "**(b)** Improved technology or discovery of new resources"
          }
        },
        {
          id: "cieiec-u1-ppf-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country can produce either 50 cars or 25 trucks using all its resources. It chooses to produce 50 cars. What is the opportunity cost of this choice in trucks?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 25, "unit": "trucks" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Opportunity cost", "statement": "Next best alternative foregone." }
            ],
            "steps": [
              { "reasoning": "Producing all cars means giving up all 25 trucks, the next best alternative.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = 25 trucks"
          }
        },
        {
          id: "cieiec-u1-ppf-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An economy's linear PPF shows it can produce a maximum of 100 units of food or 40 machines. It produces 50 units of food. What is the maximum output of machines consistent with the PPF?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 20, "unit": "machines" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "PPF", "statement": "Reading output combinations from the frontier." }
            ],
            "steps": [
              { "reasoning": "Half of the food capacity is used, so half of the machine capacity remains: 40 × 0.5 = 20 machines.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Maximum machines = 20"
          }
        },
        {
          id: "cieiec-u1-ppf-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country can produce either 200 tonnes of wheat or 80 tonnes of rice using all its resources. What is the opportunity cost of producing 1 tonne of rice, in tonnes of wheat?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 2.5, "unit": "tonnes" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Opportunity cost", "statement": "Trade-off shown by the PPF slope." }
            ],
            "steps": [
              { "reasoning": "Each tonne of rice costs 200/80 = 2.5 tonnes of wheat.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = 2.5 tonnes of wheat per tonne of rice"
          }
        },
        {
          id: "cieiec-u1-ppf-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An economy on its PPF increases cloth output from 40 to 60 units. Food output falls from 60 to 40 units to stay on the curve. What is the opportunity cost of the extra 20 units of cloth, in units of food?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 20, "unit": "units" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "Opportunity cost", "statement": "Trade-off shown by the PPF." }
            ],
            "steps": [
              { "reasoning": "The 20 extra units of cloth required giving up 20 units of food.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Opportunity cost = 20 units of food"
          }
        },
        {
          id: "cieiec-u1-ppf-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An economy has enough resources to produce 100 units of output on its PPF, but unemployment means it only produces 70 units. By how many units is actual output below potential output?",
          response: {
            "type": "numeric",
            "parts": [
              { "label": "a", "answer": 30, "unit": "units" }
            ]
          },
          markscheme: {
            "principles": [
              { "kind": "skill", "name": "PPF", "statement": "Inefficiency shown inside the curve." }
            ],
            "steps": [
              { "reasoning": "Producing 70 when 100 is possible leaves 30 units of capacity unused — a point inside the PPF.", "marks": 1, "markCode": "M" }
            ],
            "finalAnswer": "Unused capacity = 30 units"
          }
        },
        {
          id: "cieiec-u1-ppf-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what a production possibility frontier shows. Distinguish between points on, inside and outside the curve, and state what an outward shift represents.",
          response: {
            "type": "open"
          },
          markscheme: {
            "principles": [
              { "kind": "technique", "name": "PPF", "statement": "Maximum output combinations; efficiency and growth." }
            ],
            "steps": [
              { "reasoning": "The PPF shows the maximum combinations of two goods an economy can produce with given resources and technology.", "marks": 1, "markCode": "M" },
              { "reasoning": "A point on the curve means resources are fully and efficiently used.", "marks": 1, "markCode": "M" },
              { "reasoning": "A point inside means resources are underused or inefficient; a point outside is unattainable.", "marks": 1, "markCode": "M" },
              { "reasoning": "An outward shift represents economic growth from more resources or improved technology.", "marks": 1, "markCode": "A" }
            ],
            "finalAnswer": "PPF shows maximum output combinations; on=efficient, inside=inefficient, outside=unattainable; outward shift=growth."
          }
        }
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u1-ppf-notes",
      title: "PPF — notes",
      summary: "PPF=max output combos; on curve=efficient, inside=inefficient, outside=unattainable. Growth=shift out.",
      sections: [
        { heading: "Key idea", body: "PPF visualises scarcity and opportunity cost." },
        { heading: "Growth", body: "Economic growth = PPF shifts outward (more resources/technology)." },
      ],
    },
  ],
};
