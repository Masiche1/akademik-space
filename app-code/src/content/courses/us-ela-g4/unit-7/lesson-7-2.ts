import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ela4-u7-lesson-7-2",
  code: "7-2",
  title: "Grouping Related Information",
  goal: "I CAN group related information logically.",
  standards: ["W.4.2b"],
  vocabulary: [
    { term: "Group", definition: "Put together." },
    { term: "Related", definition: "Connected." },
    { term: "Logical", definition: "Makes sense." },
    { term: "Category", definition: "Group type." },
    { term: "Paragraph", definition: "Section of writing." },
    { term: "Order", definition: "Sequence." },
    { term: "Connect", definition: "Link ideas." },
    { term: "Structure", definition: "How organized." },
  ],
  concepts: [
    {
      id: "ela4-u7-grouping-information",
      title: "Grouping related information",
      skill: "Group related information into logical categories and order.",
      lesson: {
        sections: [
          {
            heading: "Put it together",
            body: "**Group** **related** information into **logical** categories. Each **paragraph** should cover one **category**. Order information so it **makes sense**.",
          },
          {
            heading: "Example",
            body: "A report on animals might group by 'habitat', 'diet', 'reproduction' — each gets its own paragraph.",
          },
        ],
        keyFormulas: [
          { name: "Group", statement: "Related info + logical order = clear structure." },
        ],
        workedExample: {
          problem: "Group information about dogs: size, diet, training, habitat.",
          solution: "Group by: physical (size), needs (diet/habitat), behavior (training) — 3 categories.",
        },
      },
      questions: [
        {
          id: "ela4-u7-grouping-information-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Grouping' information means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random order"
                    },
                    {
                              "id": "b",
                              "text": "putting related facts together"
                    },
                    {
                              "id": "c",
                              "text": "skipping details"
                    },
                    {
                              "id": "d",
                              "text": "listing everything"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Group = related together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Group = related together.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**putting related facts together**",
          "commonErrors": [
                    "Thinks it's random."
          ]
},
        },
        {
          id: "ela4-u7-grouping-information-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A logical way to group animal info is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random"
                    },
                    {
                              "id": "b",
                              "text": "by habitat, diet, reproduction"
                    },
                    {
                              "id": "c",
                              "text": "by color only"
                    },
                    {
                              "id": "d",
                              "text": "alphabetical only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "By categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "By categories.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**by habitat, diet, reproduction**",
          "commonErrors": [
                    "Not logical."
          ]
},
        },
        {
          id: "ela4-u7-grouping-information-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Take 6 facts about a topic. Group them into 2-3 categories and explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Group",
                              "statement": "Categories + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Groups logically.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains grouping.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Facts about cars: engine, wheels (mechanical); speed, safety (performance).'**",
          "commonErrors": [
                    "Random grouping.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela4-u7-grouping-information-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Each paragraph should cover...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "everything"
                    },
                    {
                              "id": "b",
                              "text": "one category of related info"
                    },
                    {
                              "id": "c",
                              "text": "no topic"
                    },
                    {
                              "id": "d",
                              "text": "only details"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "One category per paragraph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One category per paragraph.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**one category of related info**",
          "commonErrors": [
                    "Covers too much."
          ]
},
        },
        {
          id: "ela4-u7-grouping-information-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two ways of organizing the same information. Which is more logical? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Group",
                              "statement": "Two organizations + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares organizations.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Argues more logical.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'By category (habitat/diet/reproduction) is clearer than random listing.'**",
          "commonErrors": [
                    "One organization only.",
                    "No argument."
          ]
},
        },
        {
          id: "ela4-u7-grouping-information-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connected."
                    },
                    {
                              "id": "b",
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "Makes sense."
                    },
                    {
                              "id": "d",
                              "text": "Group type."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Group\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Put together.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Group** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-grouping-information-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Related\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes sense."
                    },
                    {
                              "id": "b",
                              "text": "Group type."
                    },
                    {
                              "id": "c",
                              "text": "Section of writing."
                    },
                    {
                              "id": "d",
                              "text": "Connected."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Related\" means Connected."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Related\" means Connected.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Related** = Connected.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-grouping-information-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Logical\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group type."
                    },
                    {
                              "id": "b",
                              "text": "Makes sense."
                    },
                    {
                              "id": "c",
                              "text": "Section of writing."
                    },
                    {
                              "id": "d",
                              "text": "Sequence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Logical\" means Makes sense."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Logical\" means Makes sense.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Logical** = Makes sense.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
