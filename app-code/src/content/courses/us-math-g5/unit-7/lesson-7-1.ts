import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m5-u7-lesson-7-1",
  code: "7-1",
  title: "Line Plots with Fractions",
  goal: "I CAN create and interpret line plots with fractions.",
  standards: ["5.MD.B.2"],
  vocabulary: [
    { term: "Line plot", definition: "Data on number line." },
    { term: "Fraction", definition: "Part of whole." },
    { term: "Mark", definition: "X or dot." },
    { term: "Frequency", definition: "How many times." },
    { term: "Scale", definition: "What each mark means." },
    { term: "Interpret", definition: "Read the plot." },
    { term: "Data", definition: "Information." },
    { term: "Measure", definition: "Value being plotted." },
  ],
  concepts: [
    {
      id: "m5-u7-line-plots-fractions",
      title: "Line plots with fractions",
      skill: "Create and interpret line plots using fractions on the scale.",
      lesson: {
        sections: [
          {
            heading: "Fraction scale",
            body: "Line plots can use **fraction** scales: 0, 1/4, 1/2, 3/4, 1. Each **mark** represents one data point at that fraction.",
          },
          {
            heading: "Interpreting",
            body: "Count marks at each fraction to find **frequency** or most/least common value.",
          },
        ],
        keyFormulas: [
          { name: "Line plot", statement: "Number line + marks at fractions = data." },
        ],
        workedExample: {
          problem: "A line plot shows marks at 1/4, 1/2, 1/2, 3/4. What's the most common value?",
          solution: "**1/2** — it has 2 marks (most frequent).",
        },
      },
      questions: [
        {
          id: "m5-u7-line-plots-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A line plot with fractions uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "whole numbers only"
                    },
                    {
                              "id": "b",
                              "text": "fraction scales"
                    },
                    {
                              "id": "c",
                              "text": "no scale"
                    },
                    {
                              "id": "d",
                              "text": "letters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fraction scales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fraction scales.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fraction scales",
          "commonErrors": [
                    "Wrong scale."
          ]
},
        },
        {
          id: "m5-u7-line-plots-fractions-q2",
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
                              "text": "a whole"
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
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m5-u7-line-plots-fractions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Create a line plot for data: 1/4, 1/2, 1/2, 3/4, 1/2, 1/4. Describe what it shows.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Line plot",
                              "statement": "Marks at correct fractions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates plot.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes data.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Marks: 1/4 x2, 1/2 x3, 3/4 x1; most common is 1/2.**",
          "commonErrors": [
                    "Wrong positions.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "m5-u7-line-plots-fractions-q4",
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
                              "text": "the marks"
                    },
                    {
                              "id": "d",
                              "text": "the data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Frequency = count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Frequency = count.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how many times a value appears",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m5-u7-line-plots-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Interpret a line plot: which value is most common? Least common? Total data points?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Line plot",
                              "statement": "Most/least/total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds most common.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds least + total.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Most: 1/2 (3 marks); Least: 3/4 (1 mark); Total: 6.'**",
          "commonErrors": [
                    "Cannot interpret.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m5-u7-line-plots-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Line plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of whole."
                    },
                    {
                              "id": "b",
                              "text": "Data on number line."
                    },
                    {
                              "id": "c",
                              "text": "X or dot."
                    },
                    {
                              "id": "d",
                              "text": "How many times."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Line plot\" means Data on number line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Line plot\" means Data on number line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line plot** = Data on number line.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u7-line-plots-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "X or dot."
                    },
                    {
                              "id": "b",
                              "text": "How many times."
                    },
                    {
                              "id": "c",
                              "text": "What each mark means."
                    },
                    {
                              "id": "d",
                              "text": "Part of whole."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means Part of whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part of whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part of whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u7-line-plots-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mark\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How many times."
                    },
                    {
                              "id": "b",
                              "text": "X or dot."
                    },
                    {
                              "id": "c",
                              "text": "What each mark means."
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
                              "statement": "\"Mark\" means X or dot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mark\" means X or dot.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mark** = X or dot.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
