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
                              "text": "Future production targets"
                    },
                    {
                              "id": "d",
                              "text": "Market prices"
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
