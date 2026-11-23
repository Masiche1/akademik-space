import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ecs10-u5-lesson-5-1",
  code: "5-1",
  title: "Arrays and Indexing",
  goal: "I CAN declare arrays, use indices correctly and store or retrieve values in a one-dimensional array.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — programming", "4CP1 arrays: declaration, indexing, assignment and bounds"],
  
  vocabulary: [
    { term: "Array", definition: "A data structure that stores a fixed number of values of the same type under one name." },
    { term: "Element", definition: "A single stored value inside an array." },
    { term: "Index", definition: "The position number used to access an array element." },
    { term: "Array bounds", definition: "The valid range of indices, from the first index to the last index." },
    { term: "Array length", definition: "The number of elements stored in the array." },
    { term: "Off-by-one error", definition: "A common error caused by using the wrong start or end index." },
  ],
  concepts: [
    {
      id: "ecs10-u5-array-basics",
      title: "Array structure and indexing",
      skill: "Declare arrays, identify valid indices and explain why bounds matter.",
      lesson: {
        sections: [
          {
            heading: "What an array is",
            body: "An **array** stores many values under one name. In many languages the first index is 0, although some exam questions use 1. Always check the stated convention before answering.\n\nFor example, `scores = [12, 18, 9, 15, 11]` has five elements. If indexing starts at 0, `scores[0]` is 12 and `scores[4]` is 11. The index identifies the position, not the value.",
          },
          {
            heading: "Bounds and errors",
            body: "Valid indices run from the first index to the last index. For an array of length n starting at 0, valid indices are 0 to n-1. Accessing index n is outside the array and may cause an error or undefined behaviour.\n\nAn **off-by-one error** happens when a loop uses `<= length` instead of `< length`, or when the programmer forgets that index 0 is the first element.",
          },
        ],
        keyFormulas: [
          { name: "Zero-based indices", statement: "indices = 0, 1, ..., n-1 for length n" },
          { name: "Last index", statement: "last index = length - 1 when indexing starts at 0" },
          { name: "Element access", statement: "value = arrayName[index]" },
        ],
        workedExample: {
          problem: "For marks = [45, 62, 58, 71] with zero-based indexing, find marks[2] and the last valid index.",
          solution: "marks[2] = 58. Length = 4, so last index = 4 - 1 = 3.",
        },
      },
      questions: [
        {
          id: "ecs10-u5-array-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an array index identify?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The value stored in the array"
                    },
                    {
                              "id": "b",
                              "text": "The position of an element"
                    },
                    {
                              "id": "c",
                              "text": "The length of the array"
                    },
                    {
                              "id": "d",
                              "text": "The data type of the array"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Index",
                              "statement": "An index identifies an element's position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The index is a position reference used to access the stored value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) The position of an element"
},
        },
        {
          id: "ecs10-u5-array-basics-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An array `temps` has values [18, 22, 19, 25] using zero-based indexing. What is temps[1]?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "value",
                              "answer": 22
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Array access",
                              "statement": "Use the index to select the element."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Index 1 is the second element when indexing starts at 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "temps[1] = 22.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "22"
},
        },
        {
          id: "ecs10-u5-array-basics-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For `values = [7, 14, 21, 28, 35]`, state the length and the last valid zero-based index.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Array bounds",
                              "statement": "length n gives indices 0 to n-1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count elements: 7, 14, 21, 28, 35 gives length 5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Last index = length - 1 = 5 - 1 = 4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "So valid indices are 0, 1, 2, 3 and 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Length 5; last index 4"
},
        },
        {
          id: "ecs10-u5-array-basics-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An array `scores` stores five test scores.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the valid index range if indexing starts at 0.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what happens if scores[5] is accessed.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Array bounds",
                              "statement": "Only indices 0 to length-1 are valid."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Length is 5, so indices are 0, 1, 2, 3 and 4.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Index 5 is outside the array; it may cause an error or return an undefined value.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Indices 0-4; scores[5] is out of bounds"
},
        },
        {
          id: "ecs10-u5-array-basics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider `data = [4, 9, 2, 7, 5]` with zero-based indexing.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State data[0] and data[4].",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Assign the value 11 to the last element and state the new array.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why data[5] is not a valid access.",
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
                              "name": "Array read/write",
                              "statement": "Read and assign elements using valid indices."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "data[0] = 4 and data[4] = 5.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "data[4] = 11 gives [4, 9, 2, 7, 11].",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Length is 5, so index 5 is outside the valid range 0-4.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "data[0]=4, data[4]=5; after assignment [4,9,2,7,11]; index 5 invalid"
},
        },
        {
          id: "ecs10-u5-array-basics-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A program stores daily rainfall in `rain = [0, 3, 7, 2, 5, 1, 4]` for seven days using zero-based indexing.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which index stores Wednesday if Monday is index 0.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Change Saturday's value to 8 and write the updated array.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how a programmer could prevent an out-of-bounds error when reading user-chosen indices.",
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
                              "name": "Safe array handling",
                              "statement": "Validate indices before accessing elements."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Monday=0, Tuesday=1, Wednesday=2, so Wednesday is index 2.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Saturday is the sixth day, index 5; rain[5] = 8 gives [0,3,7,2,5,8,4].",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check that the index is an integer within 0 to length-1 before use, or catch/report the error.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Wednesday index 2; Saturday index 5 becomes 8; validate index range",
          "commonErrors": [
                    "Counting days from 1 while the array uses 0-based indexing."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u5-array-access",
      title: "Reading and writing array elements",
      skill: "Use loops and conditions to read, update and describe array elements safely.",
      lesson: {
        sections: [
          {
            heading: "Looping through arrays",
            body: "A `FOR` loop can visit every element by changing the index from the first value to the last value. With zero-based indexing the common pattern is `FOR i ← 0 TO length - 1`. Inside the loop, `array[i]` refers to the current element.\n\nThe loop index is not the stored value; it is only the position. For example, if `i = 2`, the element accessed is the third value in a zero-based array.",
          },
          {
            heading: "Updating values",
            body: "Assignments such as `array[i] = array[i] + 1` update the current element. This pattern is common when adjusting scores, counts or measurements. Always ensure `i` remains within bounds.\n\nWhen reading input into an array, validate the index and the value before storing. A clear variable name such as `studentScores` makes the purpose easier to understand.",
          },
        ],
        keyFormulas: [
          { name: "Loop range", statement: "FOR i ← 0 TO length - 1" },
          { name: "Current element", statement: "array[i]" },
          { name: "Increment element", statement: "array[i] = array[i] + 1" },
        ],
        workedExample: {
          problem: "Given nums = [2, 4, 6], describe what nums[i] = nums[i] * 2 does for every i.",
          solution: "Each element is doubled in place, producing [4, 8, 12].",
        },
      },
      questions: [
        {
          id: "ecs10-u5-array-access-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a zero-based array, what does `values[i]` represent inside a loop?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The loop counter only"
                    },
                    {
                              "id": "b",
                              "text": "The element at position i"
                    },
                    {
                              "id": "c",
                              "text": "The length of the array"
                    },
                    {
                              "id": "d",
                              "text": "The sum of the array"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Indexed access",
                              "statement": "array[i] selects the element at index i."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The index i selects the element at that position.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) The element at position i"
},
        },
        {
          id: "ecs10-u5-array-access-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the pseudocode loop header that visits every element of a zero-based array of length n.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Array loop",
                              "statement": "Iterate indices from 0 to n-1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start the index at 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "End at n - 1, e.g. FOR i ← 0 TO n - 1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "FOR i ← 0 TO n - 1"
},
        },
        {
          id: "ecs10-u5-array-access-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For `nums = [3, 6, 9]`, describe the result of `nums[i] = nums[i] + 1` for all valid i.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "In-place update",
                              "statement": "Update each element using its current value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each element is increased by 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "3 becomes 4, 6 becomes 7 and 9 becomes 10.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "New array: [4, 7, 10].",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "[4, 7, 10]"
},
        },
        {
          id: "ecs10-u5-array-access-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A program reads five names into `names`.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State a suitable loop for reading all five names.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the loop must not use index 5 for the fifth name in a zero-based array.",
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
                              "name": "Safe array input",
                              "statement": "Use valid indices only."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "FOR i ← 0 TO 4: INPUT names[i].",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Index 5 is outside a five-element array; valid indices are 0-4.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "FOR i ← 0 TO 4; index 5 is out of bounds"
},
        },
        {
          id: "ecs10-u5-array-access-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Given `marks = [40, 55, 70, 65, 80]`, a program must add 5 to every mark that is below 60.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode to update the array.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the final array.",
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
                              "name": "Conditional array update",
                              "statement": "Loop through elements and update only those meeting the condition."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "FOR i ← 0 TO 4 IF marks[i] < 60 THEN marks[i] ← marks[i] + 5 ENDIF ENDFOR.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "40 and 55 are below 60, becoming 45 and 60; others unchanged: [45, 60, 70, 65, 80].",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "[45, 60, 70, 65, 80]"
},
        },
        {
          id: "ecs10-u5-array-access-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A class has `scores = [32, 48, 55, 41, 60, 37]` stored in a zero-based array.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode to count how many scores are below 50.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the count produced by your pseudocode.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain one advantage of storing the scores in an array rather than six separate variables.",
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
                              "name": "Array processing",
                              "statement": "Loops can process many elements without naming each one."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "count ← 0; FOR i ← 0 TO 5 IF scores[i] < 50 THEN count ← count + 1 ENDIF ENDFOR.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Below 50 are 32, 48, 41 and 37, so count = 4.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "One name can be reused in a loop, making code shorter and easier to maintain.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "count = 4; arrays allow loops to process many values with one name"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u5-lesson-5-1-notes",
      title: "Arrays and indexing — notes",
      summary: "Arrays store many values under one name; indices identify positions and must stay within bounds.",
      sections: [
        { heading: "Indexing", body: "With zero-based indexing, the first element is index 0 and the last is length - 1." },
        { heading: "Loops", body: "Use FOR i ← 0 TO length - 1 to visit every element safely." },
        { heading: "Errors", body: "Out-of-bounds access happens when the index is negative or greater than the last index." },
      ],
    },
  ],
};
