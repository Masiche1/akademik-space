module.exports = [
  {
    file: "lesson-5-1.ts",
    exportName: "lesson51",
    lesson: {
      id: "ecs10-u5-lesson-5-1",
      code: "5-1",
      title: "Arrays and Indexing",
      goal: "I CAN declare arrays, use indices correctly and store or retrieve values in a one-dimensional array.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — programming",
        "4CP1 arrays: declaration, indexing, assignment and bounds",
      ],
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
          questions: [
            {
              id: "ecs10-u5-array-basics-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What does an array index identify?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The value stored in the array" },
                { id: "b", text: "The position of an element" },
                { id: "c", text: "The length of the array" },
                { id: "d", text: "The data type of the array" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Index", statement: "An index identifies an element's position." }],
                steps: [{ reasoning: "The index is a position reference used to access the stored value.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) The position of an element",
              },
            },
            {
              id: "ecs10-u5-array-basics-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "An array `temps` has values [18, 22, 19, 25] using zero-based indexing. What is temps[1]?",
              response: { type: "numeric", parts: [{ label: "value", answer: 22 }] },
              markscheme: {
                principles: [{ kind: "method", name: "Array access", statement: "Use the index to select the element." }],
                steps: [
                  { reasoning: "Index 1 is the second element when indexing starts at 0.", marks: 1, markCode: "M" },
                  { reasoning: "temps[1] = 22.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "22",
              },
            },
            {
              id: "ecs10-u5-array-basics-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "For `values = [7, 14, 21, 28, 35]`, state the length and the last valid zero-based index.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Array bounds", statement: "length n gives indices 0 to n-1." }],
                steps: [
                  { reasoning: "Count elements: 7, 14, 21, 28, 35 gives length 5.", marks: 1, markCode: "M" },
                  { reasoning: "Last index = length - 1 = 5 - 1 = 4.", marks: 1, markCode: "M" },
                  { reasoning: "So valid indices are 0, 1, 2, 3 and 4.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Length 5; last index 4",
              },
            },
            {
              id: "ecs10-u5-array-basics-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "An array `scores` stores five test scores.",
              parts: [
                { label: "a", prompt: "State the valid index range if indexing starts at 0.", marks: 2 },
                { label: "b", prompt: "Explain what happens if scores[5] is accessed.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Array bounds", statement: "Only indices 0 to length-1 are valid." }],
                steps: [
                  { part: "a", reasoning: "Length is 5, so indices are 0, 1, 2, 3 and 4.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Index 5 is outside the array; it may cause an error or return an undefined value.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Indices 0-4; scores[5] is out of bounds",
              },
            },
            {
              id: "ecs10-u5-array-basics-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Consider `data = [4, 9, 2, 7, 5]` with zero-based indexing.",
              parts: [
                { label: "a", prompt: "State data[0] and data[4].", marks: 2 },
                { label: "b", prompt: "Assign the value 11 to the last element and state the new array.", marks: 2 },
                { label: "c", prompt: "Explain why data[5] is not a valid access.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Array read/write", statement: "Read and assign elements using valid indices." }],
                steps: [
                  { part: "a", reasoning: "data[0] = 4 and data[4] = 5.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "data[4] = 11 gives [4, 9, 2, 7, 11].", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Length is 5, so index 5 is outside the valid range 0-4.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "data[0]=4, data[4]=5; after assignment [4,9,2,7,11]; index 5 invalid",
              },
            },
            {
              id: "ecs10-u5-array-basics-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A program stores daily rainfall in `rain = [0, 3, 7, 2, 5, 1, 4]` for seven days using zero-based indexing.",
              parts: [
                { label: "a", prompt: "State which index stores Wednesday if Monday is index 0.", marks: 3 },
                { label: "b", prompt: "Change Saturday's value to 8 and write the updated array.", marks: 3 },
                { label: "c", prompt: "Explain how a programmer could prevent an out-of-bounds error when reading user-chosen indices.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Safe array handling", statement: "Validate indices before accessing elements." }],
                steps: [
                  { part: "a", reasoning: "Monday=0, Tuesday=1, Wednesday=2, so Wednesday is index 2.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Saturday is the sixth day, index 5; rain[5] = 8 gives [0,3,7,2,5,8,4].", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Check that the index is an integer within 0 to length-1 before use, or catch/report the error.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "Wednesday index 2; Saturday index 5 becomes 8; validate index range",
                commonErrors: ["Counting days from 1 while the array uses 0-based indexing."],
              },
            },
          ],
        },
        {
          id: "ecs10-u5-array-access",
          title: "Reading and writing array elements",
          skill: "Use loops and conditions to read, update and describe array elements safely.",
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
          questions: [
            {
              id: "ecs10-u5-array-access-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "In a zero-based array, what does `values[i]` represent inside a loop?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The loop counter only" },
                { id: "b", text: "The element at position i" },
                { id: "c", text: "The length of the array" },
                { id: "d", text: "The sum of the array" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Indexed access", statement: "array[i] selects the element at index i." }],
                steps: [{ reasoning: "The index i selects the element at that position.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) The element at position i",
              },
            },
            {
              id: "ecs10-u5-array-access-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Write the pseudocode loop header that visits every element of a zero-based array of length n.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Array loop", statement: "Iterate indices from 0 to n-1." }],
                steps: [
                  { reasoning: "Start the index at 0.", marks: 1, markCode: "M" },
                  { reasoning: "End at n - 1, e.g. FOR i ← 0 TO n - 1.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "FOR i ← 0 TO n - 1",
              },
            },
            {
              id: "ecs10-u5-array-access-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "For `nums = [3, 6, 9]`, describe the result of `nums[i] = nums[i] + 1` for all valid i.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "In-place update", statement: "Update each element using its current value." }],
                steps: [
                  { reasoning: "Each element is increased by 1.", marks: 1, markCode: "M" },
                  { reasoning: "3 becomes 4, 6 becomes 7 and 9 becomes 10.", marks: 1, markCode: "M" },
                  { reasoning: "New array: [4, 7, 10].", marks: 1, markCode: "A" },
                ],
                finalAnswer: "[4, 7, 10]",
              },
            },
            {
              id: "ecs10-u5-array-access-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A program reads five names into `names`.",
              parts: [
                { label: "a", prompt: "State a suitable loop for reading all five names.", marks: 2 },
                { label: "b", prompt: "Explain why the loop must not use index 5 for the fifth name in a zero-based array.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Safe array input", statement: "Use valid indices only." }],
                steps: [
                  { part: "a", reasoning: "FOR i ← 0 TO 4: INPUT names[i].", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Index 5 is outside a five-element array; valid indices are 0-4.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "FOR i ← 0 TO 4; index 5 is out of bounds",
              },
            },
            {
              id: "ecs10-u5-array-access-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Given `marks = [40, 55, 70, 65, 80]`, a program must add 5 to every mark that is below 60.",
              parts: [
                { label: "a", prompt: "Write pseudocode to update the array.", marks: 3 },
                { label: "b", prompt: "State the final array.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Conditional array update", statement: "Loop through elements and update only those meeting the condition." }],
                steps: [
                  { part: "a", reasoning: "FOR i ← 0 TO 4 IF marks[i] < 60 THEN marks[i] ← marks[i] + 5 ENDIF ENDFOR.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "40 and 55 are below 60, becoming 45 and 60; others unchanged: [45, 60, 70, 65, 80].", marks: 3, markCode: "A" },
                ],
                finalAnswer: "[45, 60, 70, 65, 80]",
              },
            },
            {
              id: "ecs10-u5-array-access-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A class has `scores = [32, 48, 55, 41, 60, 37]` stored in a zero-based array.",
              parts: [
                { label: "a", prompt: "Write pseudocode to count how many scores are below 50.", marks: 3 },
                { label: "b", prompt: "State the count produced by your pseudocode.", marks: 3 },
                { label: "c", prompt: "Explain one advantage of storing the scores in an array rather than six separate variables.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Array processing", statement: "Loops can process many elements without naming each one." }],
                steps: [
                  { part: "a", reasoning: "count ← 0; FOR i ← 0 TO 5 IF scores[i] < 50 THEN count ← count + 1 ENDIF ENDFOR.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Below 50 are 32, 48, 41 and 37, so count = 4.", marks: 3, markCode: "A" },
                  { part: "c", reasoning: "One name can be reused in a loop, making code shorter and easier to maintain.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "count = 4; arrays allow loops to process many values with one name",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u5-lesson-5-1-notes",
      title: "Arrays and indexing — notes",
      summary: "Arrays store many values under one name; indices identify positions and must stay within bounds.",
      sections: [
        { heading: "Indexing", body: "With zero-based indexing, the first element is index 0 and the last is length - 1." },
        { heading: "Loops", body: "Use FOR i ← 0 TO length - 1 to visit every element safely." },
        { heading: "Errors", body: "Out-of-bounds access happens when the index is negative or greater than the last index." },
      ],
    },
  },
  {
    file: "lesson-5-2.ts",
    exportName: "lesson52",
    lesson: {
      id: "ecs10-u5-lesson-5-2",
      code: "5-2",
      title: "Processing Arrays",
      goal: "I CAN use loops and conditions to calculate totals, averages, minima, maxima and counts from arrays.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — programming",
        "4CP1 array algorithms: totals, averages, min/max and conditional counting",
      ],
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
          questions: [
            {
              id: "ecs10-u5-array-aggregates-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What should a total accumulator be initialised to before summing an array?",
              response: { type: "mcq", choices: [
                { id: "a", text: "1" },
                { id: "b", text: "0" },
                { id: "c", text: "The first element" },
                { id: "d", text: "The array length" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "method", name: "Accumulator initialisation", statement: "Totals start at 0; counts start at 0." }],
                steps: [{ reasoning: "Adding values to 0 gives the correct total without an extra initial value.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) 0",
              },
            },
            {
              id: "ecs10-u5-array-aggregates-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Find the total of [5, 8, 12, 15].",
              response: { type: "numeric", parts: [{ label: "total", answer: 40 }] },
              markscheme: {
                principles: [{ kind: "method", name: "Summation", statement: "Add all elements." }],
                steps: [
                  { reasoning: "5 + 8 + 12 + 15 = 40.", marks: 1, markCode: "M" },
                  { reasoning: "Total = 40.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "40",
              },
            },
            {
              id: "ecs10-u5-array-aggregates-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Calculate the average of [6, 10, 14, 18, 22].",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Average", statement: "average = total / count." }],
                steps: [
                  { reasoning: "Total = 6+10+14+18+22 = 70.", marks: 1, markCode: "M" },
                  { reasoning: "Count = 5.", marks: 1, markCode: "M" },
                  { reasoning: "Average = 70 / 5 = 14.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "14",
              },
            },
            {
              id: "ecs10-u5-array-aggregates-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "Find the maximum value in [23, 41, 17, 36, 29].",
              parts: [
                { label: "a", prompt: "State how the maximum should be initialised.", marks: 2 },
                { label: "b", prompt: "Give the maximum value.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Running maximum", statement: "Start with a candidate and update when a larger value appears." }],
                steps: [
                  { part: "a", reasoning: "Initialise max with the first element, 23, or with a value below all possible scores.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "The largest element is 41.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Initialise with first element; maximum = 41",
              },
            },
            {
              id: "ecs10-u5-array-aggregates-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "For `temps = [19, 24, 16, 28, 21]`, calculate the total, the minimum and the number of days above 20°C.",
              parts: [
                { label: "a", prompt: "State the total temperature.", marks: 2 },
                { label: "b", prompt: "State the minimum temperature.", marks: 2 },
                { label: "c", prompt: "State how many values are above 20.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Multiple aggregates", statement: "Use separate accumulators in one scan where appropriate." }],
                steps: [
                  { part: "a", reasoning: "Total = 19+24+16+28+21 = 108.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Minimum = 16.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Above 20 are 24, 28 and 21, so count = 3.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Total 108; minimum 16; count above 20 = 3",
              },
            },
            {
              id: "ecs10-u5-array-aggregates-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A sensor records `readings = [4, 9, 7, 12, 8, 15, 6]`.",
              parts: [
                { label: "a", prompt: "Write pseudocode to find the maximum and minimum in one pass.", marks: 3 },
                { label: "b", prompt: "State the maximum and minimum values.", marks: 3 },
                { label: "c", prompt: "Explain why initialising both max and min to 0 could give wrong results.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Min/max scan", statement: "Initialise extremes from data and compare each element." }],
                steps: [
                  { part: "a", reasoning: "max ← readings[0]; min ← readings[0]; FOR i ← 1 TO 6 IF readings[i] > max THEN max ← readings[i] ENDIF IF readings[i] < min THEN min ← readings[i] ENDIF ENDFOR.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Maximum = 15 and minimum = 4.", marks: 3, markCode: "A" },
                  { part: "c", reasoning: "If all values are positive, min stays 0 incorrectly; extremes should start from a real element or suitable bounds.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "max 15, min 4; zero is not a safe initial minimum for all-positive data",
                commonErrors: ["Initialising min to 0 when every reading is above 0."],
              },
            },
          ],
        },
        {
          id: "ecs10-u5-array-conditions",
          title: "Conditional counting and array algorithms",
          skill: "Use IF conditions inside array loops to count, filter and transform data.",
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
          questions: [
            {
              id: "ecs10-u5-array-conditions-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which statement correctly counts elements greater than 50 in scores[i]?",
              response: { type: "mcq", choices: [
                { id: "a", text: "count ← count + scores[i]" },
                { id: "b", text: "IF scores[i] > 50 THEN count ← count + 1" },
                { id: "c", text: "scores[i] ← count + 1" },
                { id: "d", text: "count ← scores[i]" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "method", name: "Conditional count", statement: "Increment count only when the condition is true." }],
                steps: [{ reasoning: "The IF ensures only qualifying elements increase the count.", marks: 1, markCode: "B" }],
                finalAnswer: "(b)",
              },
            },
            {
              id: "ecs10-u5-array-conditions-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Count values in [2, 7, 4, 9, 1] that are greater than 5.",
              response: { type: "numeric", parts: [{ label: "count", answer: 2 }] },
              markscheme: {
                principles: [{ kind: "method", name: "Conditional counting", statement: "Check each element against the threshold." }],
                steps: [
                  { reasoning: "Values greater than 5 are 7 and 9.", marks: 1, markCode: "M" },
                  { reasoning: "Count = 2.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "2",
              },
            },
            {
              id: "ecs10-u5-array-conditions-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Write pseudocode to output every element of `nums` that is even.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Filtering", statement: "Test each element and output only matches." }],
                steps: [
                  { reasoning: "Loop through all indices.", marks: 1, markCode: "M" },
                  { reasoning: "Test nums[i] MOD 2 = 0 for even values.", marks: 1, markCode: "M" },
                  { reasoning: "OUTPUT nums[i] only when the test is true.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "FOR i ← 0 TO length-1 IF nums[i] MOD 2 = 0 THEN OUTPUT nums[i] ENDIF ENDFOR",
              },
            },
            {
              id: "ecs10-u5-array-conditions-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "For `ages = [12, 19, 8, 25, 16]`, count how many people are aged 13 or over.",
              parts: [
                { label: "a", prompt: "State the condition needed.", marks: 2 },
                { label: "b", prompt: "Give the count.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Threshold condition", statement: "Use >= for 'or over' limits." }],
                steps: [
                  { part: "a", reasoning: "Condition: ages[i] >= 13.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Values 19, 25 and 16 qualify, so count = 3.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "ages[i] >= 13; count = 3",
              },
            },
            {
              id: "ecs10-u5-array-conditions-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Given `prices = [10, 25, 8, 30, 15]`, apply a 10% discount only to prices above 20 and store the results back in the array.",
              parts: [
                { label: "a", prompt: "Write pseudocode for the transformation.", marks: 3 },
                { label: "b", prompt: "State the final array assuming discount = price - price * 0.10.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Conditional transform", statement: "Update elements that satisfy the rule." }],
                steps: [
                  { part: "a", reasoning: "FOR i ← 0 TO 4 IF prices[i] > 20 THEN prices[i] ← prices[i] - prices[i] * 0.10 ENDIF ENDFOR.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "25→22.5 and 30→27; [10, 22.5, 8, 27, 15].", marks: 3, markCode: "A" },
                ],
                finalAnswer: "[10, 22.5, 8, 27, 15]",
              },
            },
            {
              id: "ecs10-u5-array-conditions-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A school stores exam marks in `marks = [45, 72, 38, 90, 64, 55, 81]`.",
              parts: [
                { label: "a", prompt: "Write pseudocode to count distinctions (marks >= 70) and failures (marks < 40).", marks: 3 },
                { label: "b", prompt: "State both counts.", marks: 3 },
                { label: "c", prompt: "Explain why the same loop can calculate total, count and pass/fail statistics together.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Multi-condition scan", statement: "One pass can update several accumulators." }],
                steps: [
                  { part: "a", reasoning: "distinctions ← 0; failures ← 0; FOR i ← 0 TO 6 IF marks[i] >= 70 THEN distinctions ← distinctions + 1 ENDIF IF marks[i] < 40 THEN failures ← failures + 1 ENDIF ENDFOR.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Distinctions: 72, 90, 81 = 3; failures: 38 = 1.", marks: 3, markCode: "A" },
                  { part: "c", reasoning: "Each element is visited once and can update every relevant accumulator, avoiding repeated scans.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "distinctions 3, failures 1; one scan can maintain several statistics",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u5-lesson-5-2-notes",
      title: "Processing arrays — notes",
      summary: "Loops plus accumulators calculate totals, averages, min/max and conditional counts from arrays.",
      sections: [
        { heading: "Accumulators", body: "Initialise total/count to 0; initialise min/max from the first element or safe bounds." },
        { heading: "Conditions", body: "Use IF inside the loop to count, filter or transform only matching elements." },
        { heading: "Efficiency", body: "A single scan can update several statistics, avoiding repeated loops." },
      ],
    },
  },
  {
    file: "lesson-5-3.ts",
    exportName: "lesson53",
    lesson: {
      id: "ecs10-u5-lesson-5-3",
      code: "5-3",
      title: "Searching and Sorting Arrays",
      goal: "I CAN perform linear searches and simple sorts on arrays and explain their steps and efficiency.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — programming",
        "4CP1 array algorithms: linear search and sorting",
      ],
      vocabulary: [
        { term: "Linear search", definition: "A search that checks each element in order until the target is found or the array ends." },
        { term: "Target value", definition: "The value being searched for." },
        { term: "Found flag", definition: "A Boolean variable used to stop searching once the target is found." },
        { term: "Bubble sort", definition: "A sorting algorithm that repeatedly compares neighbouring elements and swaps them if needed." },
        { term: "Pass", definition: "One complete traversal of the array during a sorting algorithm." },
        { term: "Sorted order", definition: "Elements arranged from smallest to largest or largest to smallest." },
      ],
      concepts: [
        {
          id: "ecs10-u5-linear-search",
          title: "Linear search",
          skill: "Implement a linear search with a found flag and state its worst-case comparisons.",
          sections: [
            {
              heading: "How linear search works",
              body: "A **linear search** starts at the first element and checks each value in order. If the value equals the target, store the index and stop. If the loop finishes without a match, the target is not present.\n\nA `found` flag or an early exit prevents unnecessary comparisons. Pseudocode often uses `found ← FALSE`, then sets it TRUE when a match is found.",
            },
            {
              heading: "Comparisons and efficiency",
              body: "For an array of length n, linear search may need up to n comparisons in the worst case, when the target is last or absent. On average it checks about half the elements for random data.\n\nLinear search is simple and works on any order, but it becomes slow for very large arrays. Sorting plus binary search is faster for repeated searches, though binary search is beyond this lesson's scope.",
            },
          ],
          keyFormulas: [
            { name: "Worst-case comparisons", statement: "n comparisons for length n" },
            { name: "Found flag", statement: "found ← FALSE; set TRUE when array[i] = target" },
            { name: "Early exit", statement: "stop searching once found = TRUE" },
          ],
          workedExample: {
            problem: "Search for 7 in [3, 8, 5, 7, 2]. How many comparisons are needed?",
            solution: "Compare 3, 8, 5 then 7; 7 is found at index 3 after 4 comparisons.",
          },
          questions: [
            {
              id: "ecs10-u5-linear-search-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the first step of a linear search?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Sort the array" },
                { id: "b", text: "Check the first element" },
                { id: "c", text: "Check the last element" },
                { id: "d", text: "Calculate the average" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Linear search", statement: "Checks elements in order from first to last." }],
                steps: [{ reasoning: "Linear search begins at index 0 and moves forward.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) Check the first element",
              },
            },
            {
              id: "ecs10-u5-linear-search-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Search for 6 in [2, 4, 6, 8]. State the index where it is found using zero-based indexing.",
              response: { type: "numeric", parts: [{ label: "index", answer: 2 }] },
              markscheme: {
                principles: [{ kind: "method", name: "Linear search", statement: "Compare each element until target is found." }],
                steps: [
                  { reasoning: "2≠6, 4≠6, 6=6 at position 3.", marks: 1, markCode: "M" },
                  { reasoning: "Zero-based index = 2.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "2",
              },
            },
            {
              id: "ecs10-u5-linear-search-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Write pseudocode for a linear search that stores the index in position when the target is found.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Linear search algorithm", statement: "Loop, compare, store index and stop when found." }],
                steps: [
                  { reasoning: "found ← FALSE; position ← -1; FOR i ← 0 TO length - 1.", marks: 1, markCode: "M" },
                  { reasoning: "IF array[i] = target THEN position ← i; found ← TRUE; EXIT LOOP ENDIF.", marks: 1, markCode: "M" },
                  { reasoning: "After loop, if found = FALSE the target is absent.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "found/position variables; loop compares array[i] to target and exits on match",
              },
            },
            {
              id: "ecs10-u5-linear-search-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A linear search is run on an array of 20 elements.",
              parts: [
                { label: "a", prompt: "State the maximum number of comparisons in the worst case.", marks: 2 },
                { label: "b", prompt: "Explain when the worst case occurs.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Linear search cost", statement: "Cost grows with array length." }],
                steps: [
                  { part: "a", reasoning: "Worst case = 20 comparisons.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "It occurs when the target is the last element or is absent.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "20 comparisons; target last or absent",
              },
            },
            {
              id: "ecs10-u5-linear-search-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Search for 15 in [4, 9, 15, 22, 7, 30].",
              parts: [
                { label: "a", prompt: "List the comparisons made until the target is found.", marks: 2 },
                { label: "b", prompt: "State the index found and number of comparisons.", marks: 2 },
                { label: "c", prompt: "Explain how a found flag can stop unnecessary comparisons.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Search tracing", statement: "Record each comparison until match or end." }],
                steps: [
                  { part: "a", reasoning: "Compare 4, 9, then 15.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "15 is at zero-based index 2 after 3 comparisons.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Once found = TRUE the loop can exit, so elements after index 2 are not checked.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Index 2 after 3 comparisons; found flag allows early exit",
              },
            },
            {
              id: "ecs10-u5-linear-search-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A program must repeatedly search a large unsorted array of product codes for exact matches.",
              parts: [
                { label: "a", prompt: "Describe the linear search method in pseudocode terms.", marks: 3 },
                { label: "b", prompt: "State the worst-case number of comparisons for n elements and justify it.", marks: 3 },
                { label: "c", prompt: "Suggest one improvement for repeated searches and explain the trade-off.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Search strategy", statement: "Choose simple linear search for small/unsorted data; consider sorting/indexing for repeated searches." }],
                steps: [
                  { part: "a", reasoning: "Initialise found FALSE; loop i from 0 to n-1; if array[i]=target store i and set found TRUE; exit when found.", marks: 3, markCode: "M" },
                  { part: "b", reasoning: "Worst case is n comparisons when target is last or absent.", marks: 3, markCode: "B" },
                  { part: "c", reasoning: "Sort once and use binary search, or build an index; sorting costs time upfront but speeds repeated lookups.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "Linear search checks in order; worst case n; sorting/indexing improves repeated search at setup cost",
              },
            },
          ],
        },
        {
          id: "ecs10-u5-sorting",
          title: "Sorting arrays",
          skill: "Explain and trace simple sorting algorithms such as bubble sort on small arrays.",
          sections: [
            {
              heading: "Why sort?",
              body: "Sorting arranges values in ascending or descending order. Sorted data makes searching, reporting and comparison easier. For example, a sorted class list can be scanned until the target name is passed, and min/max values are at the ends.\n\nSorting changes the order of elements, so the original positions are lost unless indices or records are stored separately.",
            },
            {
              heading: "Bubble sort idea",
              body: "**Bubble sort** repeatedly compares neighbouring elements. If they are in the wrong order, swap them. Each pass moves the largest unsorted value towards the end, so after enough passes the array is sorted.\n\nA pass with no swaps means the array is already sorted and the algorithm can stop early. Bubble sort is simple but can be slow for large arrays.",
            },
          ],
          keyFormulas: [
            { name: "Bubble sort rule", statement: "compare neighbours; swap if left > right for ascending order" },
            { name: "Pass effect", statement: "each pass places the largest remaining value nearer the end" },
            { name: "Early stop", statement: "stop when a pass makes no swaps" },
          ],
          workedExample: {
            problem: "Bubble sort [5, 2, 8, 1] for one pass starting at index 0.",
            solution: "Compare 5,2 swap → [2,5,8,1]; compare 5,8 no swap; compare 8,1 swap → [2,5,1,8]. After one pass largest value 8 is at the end.",
          },
          questions: [
            {
              id: "ecs10-u5-sorting-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "In ascending bubble sort, when are two neighbouring elements swapped?",
              response: { type: "mcq", choices: [
                { id: "a", text: "When the left value is smaller" },
                { id: "b", text: "When the left value is larger" },
                { id: "c", text: "When both values are equal" },
                { id: "d", text: "Never" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bubble sort", statement: "Swap neighbours when out of order for ascending sort." }],
                steps: [{ reasoning: "For ascending order, a larger left value must move right, so swap when left > right.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) When the left value is larger",
              },
            },
            {
              id: "ecs10-u5-sorting-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "After the first bubble-sort pass on [9, 3, 7, 1], which value is guaranteed to be at the end?",
              response: { type: "numeric", parts: [{ label: "value", answer: 9 }] },
              markscheme: {
                principles: [{ kind: "property", name: "Bubble pass", statement: "The largest value bubbles to the end." }],
                steps: [
                  { reasoning: "The largest value is 9.", marks: 1, markCode: "M" },
                  { reasoning: "It will reach the last position after the pass.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "9",
              },
            },
            {
              id: "ecs10-u5-sorting-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Trace one bubble-sort pass for [6, 4, 8, 2] comparing neighbours from left to right. Give the array after the pass.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Bubble pass", statement: "Swap adjacent out-of-order pairs." }],
                steps: [
                  { reasoning: "Compare 6,4 swap → [4,6,8,2]; compare 6,8 no swap; compare 8,2 swap → [4,6,2,8].", marks: 2, markCode: "M" },
                  { reasoning: "Array after one pass: [4,6,2,8].", marks: 1, markCode: "A" },
                ],
                finalAnswer: "[4,6,2,8]",
              },
            },
            {
              id: "ecs10-u5-sorting-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "An array is already sorted in ascending order.",
              parts: [
                { label: "a", prompt: "State how many swaps bubble sort needs on the first pass if early stopping is used.", marks: 2 },
                { label: "b", prompt: "Explain why early stopping saves time.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Early termination", statement: "No swaps in a pass means sorted order." }],
                steps: [
                  { part: "a", reasoning: "Zero swaps are needed.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "The algorithm can stop after the pass instead of continuing unnecessary passes.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "0 swaps; early stop avoids extra passes",
              },
            },
            {
              id: "ecs10-u5-sorting-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Bubble sort is applied to [5, 1, 4, 2] until sorted.",
              parts: [
                { label: "a", prompt: "Give the array after pass 1.", marks: 2 },
                { label: "b", prompt: "Give the array after pass 2.", marks: 2 },
                { label: "c", prompt: "State the final sorted array.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Bubble sort tracing", statement: "Repeat neighbour comparisons until no swaps remain." }],
                steps: [
                  { part: "a", reasoning: "Pass1: [1,4,2,5] after swaps move 5 to the end.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Pass2 compares first three active elements: [1,2,4,5].", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Final sorted array: [1,2,4,5].", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Pass1 [1,4,2,5]; pass2 [1,2,4,5]; final [1,2,4,5]",
              },
            },
            {
              id: "ecs10-u5-sorting-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A program stores 1000 exam scores and must repeatedly find the highest and lowest scores.",
              parts: [
                { label: "a", prompt: "Explain why sorting the array once can make later max/min searches easier.", marks: 3 },
                { label: "b", prompt: "State where the minimum and maximum are found in ascending sorted order.", marks: 3 },
                { label: "c", prompt: "Discuss one drawback of using bubble sort for 1000 elements.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sort then search", statement: "Sorted data exposes extremes and supports efficient ordered access." }],
                steps: [
                  { part: "a", reasoning: "After sorting, extremes are at known ends, so later searches need not scan all elements.", marks: 3, markCode: "R" },
                  { part: "b", reasoning: "Minimum is first and maximum is last in ascending order.", marks: 3, markCode: "B" },
                  { part: "c", reasoning: "Bubble sort can require many comparisons and swaps, so it may be slow for large arrays.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "Sorted array puts min first and max last; bubble sort may be too slow for 1000 items",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u5-lesson-5-3-notes",
      title: "Searching and sorting arrays — notes",
      summary: "Linear search checks elements in order; bubble sort swaps neighbours until the array is ordered.",
      sections: [
        { heading: "Linear search", body: "Use a found flag and stop at the first match; worst case is n comparisons." },
        { heading: "Bubble sort", body: "Each pass bubbles the largest unsorted value towards the end; stop early if no swaps occur." },
        { heading: "Trade-offs", body: "Sorting costs time but makes repeated searches and extremes easier." },
      ],
    },
  },
];
