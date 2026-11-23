import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m4-u7-lesson-7-1",
  code: "7-1",
  title: "Line Plots",
  goal: "I CAN create and interpret line plots with fractions.",
  standards: ["4.MD.B.4"],
  vocabulary: [
    { term: "Line plot", definition: "Shows data on number line." },
    { term: "Data", definition: "Information collected." },
    { term: "Fraction", definition: "Part of a whole." },
    { term: "Mark", definition: "X or dot on line." },
    { term: "Frequency", definition: "How many times." },
    { term: "Interpret", definition: "Read the plot." },
    { term: "Scale", definition: "What each mark means." },
    { term: "Compare", definition: "See differences." },
  ],
  concepts: [
    {
      id: "m4-u7-line-plots",
      title: "Line plots",
      skill: "Create and interpret line plots with fractions.",
      lesson: {
        sections: [
          {
            heading: "What is a line plot?",
            body: "A **line plot** shows **data** on a **number line**. Each **mark** (X or dot) represents one data point. You can use **fractions** on the scale.",
          },
          {
            heading: "Interpreting",
            body: "To **interpret**, count marks at each value to find **frequency**, or find the most/least common value.",
          },
        ],
        keyFormulas: [
          { name: "Line plot", statement: "Number line + marks = data display." },
          { name: "Frequency", statement: "Count marks at each value." },
        ],
        workedExample: {
          problem: "A line plot shows marks at 1/2, 1/2, 3/4, 1. How many data points?",
          solution: "4 data points (2 at 1/2, 1 at 3/4, 1 at 1).",
        },
      },
      questions: [
        {
          id: "m4-u7-line-plots-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'line plot' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a bar graph"
                    },
                    {
                              "id": "b",
                              "text": "data on a number line"
                    },
                    {
                              "id": "c",
                              "text": "a pie chart"
                    },
                    {
                              "id": "d",
                              "text": "a table"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Line plot = data on number line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line plot = data on number line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "data on a number line",
          "commonErrors": [
                    "Confuses with bar graph."
          ]
},
        },
        {
          id: "m4-u7-line-plots-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Each mark on a line plot represents...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one data point"
                    },
                    {
                              "id": "b",
                              "text": "ten data points"
                    },
                    {
                              "id": "c",
                              "text": "a fraction"
                    },
                    {
                              "id": "d",
                              "text": "a whole number"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each mark = one data point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each mark = one data point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "one data point",
          "commonErrors": [
                    "Thinks marks are fractions."
          ]
},
        },
        {
          id: "m4-u7-line-plots-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Create a line plot for this data: 1/2, 1/2, 3/4, 1, 1/2. Describe what it shows.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Line plot",
                              "statement": "Marks at correct positions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates line plot.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes what it shows.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Marks: 1/2 x3, 3/4 x1, 1 x1; most common is 1/2**",
          "commonErrors": [
                    "Wrong positions.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "m4-u7-line-plots-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Frequency' on a line plot means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the scale"
                    },
                    {
                              "id": "b",
                              "text": "how many times a value appears"
                    },
                    {
                              "id": "c",
                              "text": "the data"
                    },
                    {
                              "id": "d",
                              "text": "the marks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Frequency = count of marks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Frequency = count of marks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how many times a value appears",
          "commonErrors": [
                    "Thinks it's the scale."
          ]
},
        },
        {
          id: "m4-u7-line-plots-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Interpret a line plot: which value is most common? Which is least common? How many total data points?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Line plot",
                              "statement": "Most/least common + total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds most common.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds least common + total.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Most: 1/2 (3 marks); Least: 1 (1 mark); Total: 5'**",
          "commonErrors": [
                    "Cannot interpret.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m4-u7-line-plots-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Line plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Information collected."
                    },
                    {
                              "id": "b",
                              "text": "Shows data on number line."
                    },
                    {
                              "id": "c",
                              "text": "Part of a whole."
                    },
                    {
                              "id": "d",
                              "text": "X or dot on line."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Line plot\" means Shows data on number line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Line plot\" means Shows data on number line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line plot** = Shows data on number line.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-line-plots-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of a whole."
                    },
                    {
                              "id": "b",
                              "text": "X or dot on line."
                    },
                    {
                              "id": "c",
                              "text": "How many times."
                    },
                    {
                              "id": "d",
                              "text": "Information collected."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Information collected."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information collected.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information collected.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-line-plots-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "X or dot on line."
                    },
                    {
                              "id": "b",
                              "text": "Part of a whole."
                    },
                    {
                              "id": "c",
                              "text": "How many times."
                    },
                    {
                              "id": "d",
                              "text": "Read the plot."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means Part of a whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part of a whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part of a whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
