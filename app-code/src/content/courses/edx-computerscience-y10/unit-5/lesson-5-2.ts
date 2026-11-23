import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ecs10-u5-lesson-5-2",
  code: "5-2",
  title: "Processing Arrays",
  goal: "I CAN use loops and conditions to calculate totals, averages, minima, maxima and counts from arrays.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — programming", "4CP1 array algorithms: totals, averages, min/max and conditional counting"],
  
  vocabulary: [
    { term: "Accumulator", definition: "A variable that collects a running result, such as a total or count." },
    { term: "Aggregate", definition: "A single value summarising many values, such as total, average, minimum or maximum." },
    { term: "Threshold", definition: "A limit value used in a condition, such as scores above 50." },
    { term: "Linear scan", definition: "Checking elements one at a time from start to finish." },
    { term: "Running maximum", definition: "The largest value found so far during a scan." },
    { term: "Running minimum", definition: "The smallest value found so far during a scan." },
  ],
  concepts: [
    {
      id: "ecs10-u5-array-aggregates",
      title: "Totals, averages and extremes",
      skill: "Calculate totals, averages, minima and maxima by scanning an array once.",
      lesson: {
        sections: [
          {
            heading: "Accumulators",
            body: "An **accumulator** stores a running result. For a total, start `total ← 0` and add `array[i]` inside the loop. For a count, start `count ← 0` and add 1 when a condition is true. For an average, accumulate the total and divide by the number of elements at the end.\n\nFor minimum or maximum, initialise the result with the first element, then compare each later element and update when a better value is found.",
          },
          {
            heading: "Scan once",
            body: "Many array tasks can be solved in a single pass. Keep the loop simple: initialise before the loop, update inside the loop and finish after the loop. For example, finding both total and maximum requires only two accumulators.\n\nCheck edge cases: an empty array has no first element, so min/max algorithms must handle length zero or assume at least one element as stated.",
          },
        ],
        keyFormulas: [
          { name: "Total", statement: "total ← total + array[i]" },
          { name: "Average", statement: "average = total / number of elements" },
          { name: "Maximum", statement: "IF array[i] > max THEN max ← array[i]" },
          { name: "Minimum", statement: "IF array[i] < min THEN min ← array[i]" },
        ],
        workedExample: {
          problem: "Find the total and average of [10, 20, 30, 40].",
          solution: "Total = 10+20+30+40 = 100. Average = 100 / 4 = 25.",
        },
      },
      questions: [
        {
          id: "ecs10-u5-array-aggregates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a total accumulator be initialised to before summing an array?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "0"
                    },
                    {
                              "id": "c",
                              "text": "The first element"
                    },
                    {
                              "id": "d",
                              "text": "The array length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Accumulator initialisation",
                              "statement": "Totals start at 0; counts start at 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adding values to 0 gives the correct total without an extra initial value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) 0"
},
        },
        {
          id: "ecs10-u5-array-aggregates-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the total of [5, 8, 12, 15].",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "total",
                              "answer": 40
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Summation",
                              "statement": "Add all elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 + 8 + 12 + 15 = 40.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total = 40.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "40"
},
        },
        {
          id: "ecs10-u5-array-aggregates-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the average of [6, 10, 14, 18, 22].",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Average",
                              "statement": "average = total / count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total = 6+10+14+18+22 = 70.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Count = 5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Average = 70 / 5 = 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "14"
},
        },
        {
          id: "ecs10-u5-array-aggregates-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the maximum value in [23, 41, 17, 36, 29].",
          parts: [
          {
                    "label": "a",
                    "prompt": "State how the maximum should be initialised.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give the maximum value.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Running maximum",
                              "statement": "Start with a candidate and update when a larger value appears."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Initialise max with the first element, 23, or with a value below all possible scores.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The largest element is 41.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Initialise with first element; maximum = 41"
},
        },
        {
          id: "ecs10-u5-array-aggregates-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "For `temps = [19, 24, 16, 28, 21]`, calculate the total, the minimum and the number of days above 20°C.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the total temperature.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the minimum temperature.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State how many values are above 20.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiple aggregates",
                              "statement": "Use separate accumulators in one scan where appropriate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Total = 19+24+16+28+21 = 108.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Minimum = 16.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Above 20 are 24, 28 and 21, so count = 3.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Total 108; minimum 16; count above 20 = 3"
},
        },
        {
          id: "ecs10-u5-array-aggregates-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A sensor records `readings = [4, 9, 7, 12, 8, 15, 6]`.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode to find the maximum and minimum in one pass.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the maximum and minimum values.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why initialising both max and min to 0 could give wrong results.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Min/max scan",
                              "statement": "Initialise extremes from data and compare each element."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "max ← readings[0]; min ← readings[0]; FOR i ← 1 TO 6 IF readings[i] > max THEN max ← readings[i] ENDIF IF readings[i] < min THEN min ← readings[i] ENDIF ENDFOR.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Maximum = 15 and minimum = 4.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "If all values are positive, min stays 0 incorrectly; extremes should start from a real element or suitable bounds.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "max 15, min 4; zero is not a safe initial minimum for all-positive data",
          "commonErrors": [
                    "Initialising min to 0 when every reading is above 0."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u5-array-conditions",
      title: "Conditional counting and array algorithms",
      skill: "Use IF conditions inside array loops to count, filter and transform data.",
      lesson: {
        sections: [
          {
            heading: "Counting with conditions",
            body: "To count elements that meet a rule, initialise `count ← 0`, loop through indices and add 1 only when the condition is true. For example, count scores above 50 with `IF scores[i] > 50 THEN count ← count + 1`.\n\nConditions can use any Boolean expression: equality, inequality, greater than, less than or a range such as `value >= 10 AND value <= 20`.",
          },
          {
            heading: "Filtering and transforming",
            body: "A **filter** keeps only matching elements, often by writing them to a new array or printing them. A **transform** changes each element, such as converting marks to a grade or doubling prices. Both patterns use the same loop structure; only the action inside the IF changes.\n\nKeep the condition and action separate in pseudocode so the logic is easy to check.",
          },
        ],
        keyFormulas: [
          { name: "Conditional count", statement: "IF condition THEN count ← count + 1" },
          { name: "Filter", statement: "IF condition THEN output array[i]" },
          { name: "Transform", statement: "IF condition THEN array[i] ← newValue" },
        ],
        workedExample: {
          problem: "Count how many values in [3, 8, 5, 10, 2] are greater than 4.",
          solution: "Values greater than 4 are 8, 5 and 10, so count = 3.",
        },
      },
      questions: [
        {
          id: "ecs10-u5-array-conditions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly counts elements greater than 50 in scores[i]?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count ← count + scores[i]"
                    },
                    {
                              "id": "b",
                              "text": "IF scores[i] > 50 THEN count ← count + 1"
                    },
                    {
                              "id": "c",
                              "text": "scores[i] ← count + 1"
                    },
                    {
                              "id": "d",
                              "text": "count ← scores[i]"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Conditional count",
                              "statement": "Increment count only when the condition is true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The IF ensures only qualifying elements increase the count.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b)"
},
        },
        {
          id: "ecs10-u5-array-conditions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Count values in [2, 7, 4, 9, 1] that are greater than 5.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "count",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Conditional counting",
                              "statement": "Check each element against the threshold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Values greater than 5 are 7 and 9.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Count = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ecs10-u5-array-conditions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write pseudocode to output every element of `nums` that is even.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Filtering",
                              "statement": "Test each element and output only matches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Loop through all indices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Test nums[i] MOD 2 = 0 for even values.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "OUTPUT nums[i] only when the test is true.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "FOR i ← 0 TO length-1 IF nums[i] MOD 2 = 0 THEN OUTPUT nums[i] ENDIF ENDFOR"
},
        },
        {
          id: "ecs10-u5-array-conditions-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For `ages = [12, 19, 8, 25, 16]`, count how many people are aged 13 or over.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the condition needed.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give the count.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Threshold condition",
                              "statement": "Use >= for 'or over' limits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Condition: ages[i] >= 13.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Values 19, 25 and 16 qualify, so count = 3.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ages[i] >= 13; count = 3"
},
        },
        {
          id: "ecs10-u5-array-conditions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Given `prices = [10, 25, 8, 30, 15]`, apply a 10% discount only to prices above 20 and store the results back in the array.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode for the transformation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the final array assuming discount = price - price * 0.10.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Conditional transform",
                              "statement": "Update elements that satisfy the rule."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "FOR i ← 0 TO 4 IF prices[i] > 20 THEN prices[i] ← prices[i] - prices[i] * 0.10 ENDIF ENDFOR.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "25→22.5 and 30→27; [10, 22.5, 8, 27, 15].",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "[10, 22.5, 8, 27, 15]"
},
        },
        {
          id: "ecs10-u5-array-conditions-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school stores exam marks in `marks = [45, 72, 38, 90, 64, 55, 81]`.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode to count distinctions (marks >= 70) and failures (marks < 40).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State both counts.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why the same loop can calculate total, count and pass/fail statistics together.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multi-condition scan",
                              "statement": "One pass can update several accumulators."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "distinctions ← 0; failures ← 0; FOR i ← 0 TO 6 IF marks[i] >= 70 THEN distinctions ← distinctions + 1 ENDIF IF marks[i] < 40 THEN failures ← failures + 1 ENDIF ENDFOR.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Distinctions: 72, 90, 81 = 3; failures: 38 = 1.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each element is visited once and can update every relevant accumulator, avoiding repeated scans.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "distinctions 3, failures 1; one scan can maintain several statistics"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u5-lesson-5-2-notes",
      title: "Processing arrays — notes",
      summary: "Loops plus accumulators calculate totals, averages, min/max and conditional counts from arrays.",
      sections: [
        { heading: "Accumulators", body: "Initialise total/count to 0; initialise min/max from the first element or safe bounds." },
        { heading: "Conditions", body: "Use IF inside the loop to count, filter or transform only matching elements." },
        { heading: "Efficiency", body: "A single scan can update several statistics, avoiding repeated loops." },
      ],
    },
  ],
};
