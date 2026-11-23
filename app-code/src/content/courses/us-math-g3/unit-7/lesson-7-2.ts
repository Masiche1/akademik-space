import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m3-u7-lesson-7-2",
  code: "7-2",
  title: "Making Bar Graphs",
  goal: "I CAN make a bar graph from data.",
  standards: ["3.MD.B.3"],
  vocabulary: [
    { term: "Bar graph", definition: "Graph using bars." },
    { term: "Bar", definition: "Shows count." },
    { term: "Scale", definition: "Numbers on side." },
    { term: "Axis", definition: "The lines of graph." },
    { term: "Label", definition: "Names categories." },
    { term: "Title", definition: "What graph shows." },
    { term: "Height", definition: "Bar length." },
    { term: "Equal", definition: "Same scale." },
  ],
  concepts: [
    {
      id: "m3-u7-bar-graphs",
      title: "Making bar graphs",
      skill: "Create a bar graph from collected data.",
      lesson: {
        sections: [
          {
            heading: "Parts of a bar graph",
            body: "A **bar graph** has a **title**, **labels** (categories), a **scale** (numbers), and **bars** where each bar's **height** shows the count.",
          },
          {
            heading: "How to make one",
            body: "Draw axes, label categories, choose a **scale** (e.g., 1 square = 1 count), and draw bars to the right **height** for each category.",
          },
        ],
        keyFormulas: [
          { name: "Bar graph", statement: "Title + labels + scale + bars." },
          { name: "Bar height", statement: "Height = count." },
        ],
        workedExample: {
          problem: "Data: apples 8, bananas 5, grapes 3. Describe how to make a bar graph.",
          solution: "Title: 'Favorite Fruit'. Labels: apples, bananas, grapes. Scale: 1 square = 1. Bars: 8, 5, 3 high.",
        },
      },
      questions: [
        {
          id: "m3-u7-bar-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The height of a bar shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the category name"
                    },
                    {
                              "id": "b",
                              "text": "the number or amount"
                    },
                    {
                              "id": "c",
                              "text": "the color"
                    },
                    {
                              "id": "d",
                              "text": "the date"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Height = count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Height = count.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the number",
          "commonErrors": [
                    "Confuses with label."
          ]
},
        },
        {
          id: "m3-u7-bar-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'scale' on a bar graph is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title"
                    },
                    {
                              "id": "b",
                              "text": "the numbers on the side"
                    },
                    {
                              "id": "c",
                              "text": "the bars"
                    },
                    {
                              "id": "d",
                              "text": "the labels"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Scale = numbers on axis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scale = numbers on axis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the numbers",
          "commonErrors": [
                    "Confuses with title."
          ]
},
        },
        {
          id: "m3-u7-bar-graphs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data: cats 12, dogs 9, fish 4. If scale is 1 square = 2 animals, how tall is the cats bar? (Write just the number of squares)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "12 / 2 = 6 squares."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong height."
          ]
},
        },
        {
          id: "m3-u7-bar-graphs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data: red 7, blue 5, green 9. How many total votes? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 21
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "7 + 5 + 9 = 21."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "21",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "21",
          "commonErrors": [
                    "Wrong total."
          ]
},
        },
        {
          id: "m3-u7-bar-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw a bar graph for data: math 15, science 12, art 8. Label all parts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Bar graph",
                              "statement": "Draw + label."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws bars correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Labels all parts.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**Bars: 15, 12, 8 with title, labels, scale**",
          "commonErrors": [
                    "Wrong bars.",
                    "Missing labels."
          ]
},
        },
        {
          id: "m3-u7-bar-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows count."
                    },
                    {
                              "id": "b",
                              "text": "Graph using bars."
                    },
                    {
                              "id": "c",
                              "text": "Numbers on side."
                    },
                    {
                              "id": "d",
                              "text": "The lines of graph."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bar graph\" means Graph using bars."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bar graph\" means Graph using bars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bar graph** = Graph using bars.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-bar-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers on side."
                    },
                    {
                              "id": "b",
                              "text": "The lines of graph."
                    },
                    {
                              "id": "c",
                              "text": "Names categories."
                    },
                    {
                              "id": "d",
                              "text": "Shows count."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bar\" means Shows count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bar\" means Shows count.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bar** = Shows count.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-bar-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Scale\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The lines of graph."
                    },
                    {
                              "id": "b",
                              "text": "Numbers on side."
                    },
                    {
                              "id": "c",
                              "text": "Names categories."
                    },
                    {
                              "id": "d",
                              "text": "What graph shows."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Scale\" means Numbers on side."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Scale\" means Numbers on side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Scale** = Numbers on side.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
