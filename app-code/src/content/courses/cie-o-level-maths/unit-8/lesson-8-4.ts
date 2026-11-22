import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "olm-u8-lesson-8-4",
  code: "8-4",
  title: "Stem-and-Leaf Diagrams and Frequency Tables",
  goal: "I CAN organise and display data using stem-and-leaf diagrams and frequency tables.",
  standards: ["4024: statistics"],
  vocabulary: [
    { term: "Stem-and-leaf", definition: "Diagram splitting each value into stem (tens) and leaf (units)." },
    { term: "Frequency table", definition: "Table listing values with their counts." },
    { term: "Tally chart", definition: "Counting system using tally marks." },
    { term: "Back-to-back", definition: "Two datasets sharing stems, leaves on opposite sides." },
  ],
  concepts: [
    {
      id: "olm-u8-s4-stemleaf",
      title: "Stem-and-leaf diagrams",
      skill: "Construct and interpret stem-and-leaf diagrams at O Level.",
      lesson: {
        sections: [
          { heading: "Constructing", body: "For two-digit data, stem = tens digit, leaf = units digit. List stems in order down the left; write leaves in ascending order to the right. E.g. data 12, 15, 23, 27, 31 → stems 1,2,3 with leaves 2,5 / 3,7 / 1. The diagram preserves all original data — you can reconstruct every value." },
          { heading: "Interpreting", body: "Median: count to the middle leaf (average two middle for even n). Mode: most frequent leaf value. Range: largest − smallest. For back-to-back diagrams (two datasets sharing stems), compare distributions — one set's leaves on left, other on right. Always include a key (e.g. '2|5 means 25')." },
        ],
        keyFormulas: [
          { name: "Stem|Leaf", statement: "Stem = tens, leaf = units" },
        ],
        workedExample: { problem: "Data: 21, 25, 32, 38, 45, 47, 52. Build stem-and-leaf.", solution: "Stems 2,3,4,5; leaves: 1,5 / 2,8 / 5,7 / 2 → 2|12,5 3|28 4|57 5|2." },
      },
      questions: [
        {
          id: "olm-u8-s4-sl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a stem-and-leaf diagram, the stem represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The units digit" },
            { id: "b", text: "The tens digit" },
            { id: "c", text: "The mean" },
            { id: "d", text: "The frequency" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Stem", statement: "Higher-order digits." }], steps: [{ reasoning: "Stem = tens for 2-digit data.", marks: 1, markCode: "A" }], finalAnswer: "Tens digit" },
        },
        {
          id: "olm-u8-s4-sl-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Data: 14, 22, 25, 33. Write the stem-and-leaf entries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Stem-leaf", statement: "Split digits." }], steps: [
            { reasoning: "$1|4$, $2|25$, $3|3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1|4; 2|25; 3|3$" },
        },
        {
          id: "olm-u8-s4-sl-q3", difficulty: "core", totalMarks: 3,
          stem: "Stem-and-leaf: 3|1 4|257 5|68. Find the median.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Median from SL", statement: "Ordered leaves." }], steps: [
            { reasoning: "Data: 31,42,45,47,56,58 — 6 values.", marks: 1, markCode: "M" },
            { reasoning: "Median $=\\frac{45+47}{2}=46$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 46.", marks: 1, markCode: "A" },
          ], finalAnswer: "46" },
        },
        {
          id: "olm-u8-s4-sl-q4", difficulty: "core", totalMarks: 4,
          stem: "Two classes' scores on back-to-back stem-and-leaf: Class A (left): 2|5 3|14 4|6; Class B (right): 1|3 2|57 3|9. Which class performed better overall?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Back-to-back", statement: "Compare distributions." }], steps: [
            { reasoning: "Class A data: 25,31,34,46 (higher values concentrated).", marks: 1, markCode: "M" },
            { reasoning: "Class B data: 31,35,37,39 — lower overall.", marks: 1, markCode: "M" },
            { reasoning: "Class A median ≈32.5, Class B ≈36? Recompute: A sorted 25,31,34,46 → median 32.5; B 31,35,37,39 → 36.", marks: 1, markCode: "M" },
            { reasoning: "Answer: Class B has higher median (36 vs 32.5) → B better.", marks: 1, markCode: "A" },
          ], finalAnswer: "Class B" },
        },
        {
          id: "olm-u8-s4-sl-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a stem-and-leaf diagram with key '2|5 means 25', the value 3|7 represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "21" },
            { id: "b", text: "10" },
            { id: "c", text: "73" },
            { id: "d", text: "37" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Stem-leaf", statement: "Stem then leaf digits." }], steps: [{ reasoning: "Stem 3 (tens), leaf 7 (units) → 37.", marks: 1, markCode: "A" }], finalAnswer: "37" },
        },
        {
          id: "olm-u8-s4-sl-q6", difficulty: "foundation", totalMarks: 2,
          stem: "For the stem-and-leaf diagram 1|3, 2|24, 3|5, find the range.",
          response: { type: "numeric", parts: [{ label: "a", answer: 22 }] },
          markscheme: { principles: [{ kind: "technique", name: "Range from SL", statement: "Max − min." }], steps: [
            { reasoning: "Largest 35, smallest 13 → $35-13=22$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 22.", marks: 1, markCode: "A" },
          ], finalAnswer: "22" },
        },
        {
          id: "olm-u8-s4-sl-q7", difficulty: "foundation", totalMarks: 2,
          stem: "For data 12, 15, 21, 24, 33, how many leaves appear under stem 2?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Stem-leaf", statement: "Count units digits." }], steps: [
            { reasoning: "Values 21 and 24 → leaves 1, 4 under stem 2.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u8-s4-sl-q8", difficulty: "core", totalMarks: 2,
          stem: "When constructing a stem-and-leaf diagram, the leaves should be written…",
          response: { type: "mcq", choices: [
            { id: "a", text: "In random order" },
            { id: "b", text: "In ascending order" },
            { id: "c", text: "Largest first" },
            { id: "d", text: "Only once each" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Stem-leaf", statement: "Ordered leaves." }], steps: [
            { reasoning: "Ascending leaves make the diagram ordered for median/mode.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "In ascending order" },
        },
        {
          id: "olm-u8-s4-sl-q9", difficulty: "core", totalMarks: 3,
          stem: "Stem-and-leaf: 4|135, 5|246. Find the median.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Median from SL", statement: "Ordered data." }], steps: [
            { reasoning: "Data: 41,43,45,52,54,56 — 6 values.", marks: 1, markCode: "M" },
            { reasoning: "Median $=\\frac{45+52}{2}=48.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 48.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "48.5" },
        },
        {
          id: "olm-u8-s4-sl-q10", difficulty: "core", totalMarks: 2,
          stem: "Stem-and-leaf: 2|113, 3|3, 4|122. The mode is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "33" },
            { id: "b", text: "21" },
            { id: "c", text: "No mode" },
            { id: "d", text: "42" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Mode", statement: "Most frequent value." }], steps: [
            { reasoning: "Data: 21,21,23,33,41,42,42 — 42 appears twice, most frequent.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 42.", marks: 1, markCode: "A" },
          ], finalAnswer: "42" },
        },
        {
          id: "olm-u8-s4-sl-q11", difficulty: "core", totalMarks: 3,
          stem: "For stem-and-leaf 5|1279, find the sum of all the values.",
          response: { type: "numeric", parts: [{ label: "a", answer: 219 }] },
          markscheme: { principles: [{ kind: "technique", name: "Read values", statement: "Reconstruct each." }], steps: [
            { reasoning: "Values: 51, 52, 57, 59.", marks: 1, markCode: "M" },
            { reasoning: "Sum $=51+52+57+59=219$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 219.", marks: 1, markCode: "A" },
          ], finalAnswer: "219" },
        },
        {
          id: "olm-u8-s4-sl-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A back-to-back stem-and-leaf diagram compares two datasets by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Removing the key" },
            { id: "b", text: "Doubling all values" },
            { id: "c", text: "Using two separate diagrams" },
            { id: "d", text: "Sharing the same stems with leaves on opposite sides" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Back-to-back", statement: "Shared stems." }], steps: [
            { reasoning: "One stem column, two sets of leaves.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Shared stems, opposite leaves" },
        },
        {
          id: "olm-u8-s4-sl-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Stem-and-leaf: 1|25, 2|34, 3|5. Find the mean of the data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Mean from SL", statement: "Reconstruct then average." }], steps: [
            { reasoning: "Data: 12,15,23,24,35 — sum $=109$, $n=5$.", marks: 1, markCode: "M" },
            { reasoning: "Mean $=\\frac{109}{5}=21.8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 21.8.", marks: 1, markCode: "M" },
            { reasoning: "Median is 23 — compare spread.", marks: 1, markCode: "A" },
          ], finalAnswer: "21.8" },
        },
        {
          id: "olm-u8-s4-sl-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Back-to-back stem-and-leaf: Class A leaves (left): 2|5 3|14 4|6; Class B leaves (right): 1|3 2|57 3|9. Compare the two classes' medians.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Back-to-back", statement: "Reconstruct both sets." }], steps: [
            { reasoning: "Class A: 25,31,34,46 → median $=\\frac{31+34}{2}=32.5$.", marks: 1, markCode: "M" },
            { reasoning: "Class B: 31,35,37,39 → median $=\\frac{35+37}{2}=36$.", marks: 1, markCode: "M" },
            { reasoning: "Class B's median is higher by 3.5.", marks: 1, markCode: "M" },
            { reasoning: "Answer: B performs better on median.", marks: 1, markCode: "A" },
          ], finalAnswer: "Class B median 36 vs A 32.5" },
        },
        {
          id: "olm-u8-s4-sl-q15", difficulty: "challenge", totalMarks: 3,
          stem: "For stem-and-leaf 5|012, 6|235, find the range.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: { principles: [{ kind: "technique", name: "Range", statement: "Max − min." }], steps: [
            { reasoning: "Largest 65, smallest 50 → $65-50=15$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15.", marks: 1, markCode: "M" },
            { reasoning: "Check leaves counted correctly.", marks: 1, markCode: "A" },
          ], finalAnswer: "15" },
        },
        {
          id: "olm-u8-s4-sl-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why leaves in a stem-and-leaf diagram must be written in ascending order, and what goes wrong if they are not.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Ordered leaves", statement: "Required for median/mode." }], steps: [
            { reasoning: "Ascending leaves make all values sorted.", marks: 1, markCode: "M" },
            { reasoning: "Median, quartiles and mode rely on order.", marks: 1, markCode: "M" },
            { reasoning: "Unordered leaves → wrong median and harder reading.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Order needed for median/mode" },
        },
      ],
    },
    {
      id: "olm-u8-s4-tables",
      title: "Frequency tables and tally charts",
      skill: "Organise data in frequency tables at O Level.",
      lesson: {
        sections: [
          { heading: "Tally charts", body: "Tally marks count frequencies: each mark = 1, fifth mark crosses the previous four (卌-style gate). Group data into categories or intervals, tally each occurrence, then total. Tally charts are the raw first step before frequency tables." },
          { heading: "Frequency tables", body: "A frequency table lists each value or class with its count. For discrete data list individual values; for continuous/grouped data use class intervals. Always include totals. Frequency tables are the foundation for all statistical diagrams — bar charts, pie charts, histograms all derive from them." },
        ],
        keyFormulas: [
          { name: "Frequency", statement: "Count of each value/class" },
        ],
        workedExample: { problem: "Data: 2,3,3,5,5,5,7. Build frequency table.", solution: "2:1, 3:2, 5:3, 7:1 — total 7." },
      },
      questions: [
        {
          id: "olm-u8-s4-ta-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a tally chart, the fifth mark is drawn as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A diagonal line crossing the four" },
            { id: "b", text: "Nothing special" },
            { id: "c", text: "A circle" },
            { id: "d", text: "A square" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Tally", statement: "Gate of 5." }], steps: [{ reasoning: "Standard tally convention.", marks: 1, markCode: "A" }], finalAnswer: "Diagonal crossing" },
        },
        {
          id: "olm-u8-s4-ta-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Data: 1,2,2,3,3,3. What is the frequency of 3?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Frequency", statement: "Count." }], steps: [
            { reasoning: "3 appears three times → frequency 3.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u8-s4-ta-q3", difficulty: "core", totalMarks: 3,
          stem: "Build a frequency table for: 10-20: 4 values, 20-30: 7, 30-40: 5. What is the total frequency?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Frequency table", statement: "Sum frequencies." }], steps: [
            { reasoning: "$4+7+5=16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 16.", marks: 1, markCode: "M" },
            { reasoning: "Table lists classes with counts 4,7,5.", marks: 1, markCode: "A" },
          ], finalAnswer: "16" },
        },
        {
          id: "olm-u8-s4-ta-q4", difficulty: "core", totalMarks: 4,
          stem: "A frequency table shows values 1-5 with frequencies 2,4,6,4,2. Find the modal class/value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Mode", statement: "Highest frequency." }], steps: [
            { reasoning: "Highest frequency is 6 at value 3.", marks: 1, markCode: "M" },
            { reasoning: "Answer: mode = 3.", marks: 1, markCode: "M" },
            { reasoning: "Total $=18$; mean $=\\frac{2+8+18+16+10}{18}=\\frac{54}{18}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Mode and mean coincide here.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u8-s4-ta-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a two-way table, the row totals and column totals both sum to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The grand total" },
            { id: "b", text: "The number of rows" },
            { id: "c", text: "Zero" },
            { id: "d", text: "The number of columns" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Two-way table", statement: "Totals match." }], steps: [{ reasoning: "Standard property.", marks: 1, markCode: "A" }], finalAnswer: "The grand total" },
        },
        {
          id: "olm-u8-s4-ta-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A tally shows four groups of five plus two extra marks. What frequency does it represent?",
          response: { type: "numeric", parts: [{ label: "a", answer: 22 }] },
          markscheme: { principles: [{ kind: "technique", name: "Tally", statement: "Gates of 5 + extras." }], steps: [
            { reasoning: "$4\\times5+2=22$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 22.", marks: 1, markCode: "A" },
          ], finalAnswer: "22" },
        },
        {
          id: "olm-u8-s4-ta-q7", difficulty: "foundation", totalMarks: 2,
          stem: "For frequencies 12, 8, 15, 5, find the total frequency.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: { principles: [{ kind: "formula", name: "Total frequency", statement: "Sum of frequencies." }], steps: [
            { reasoning: "$12+8+15+5=40$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 40.", marks: 1, markCode: "A" },
          ], finalAnswer: "40" },
        },
        {
          id: "olm-u8-s4-ta-q8", difficulty: "core", totalMarks: 2,
          stem: "A two-way table shows 30 students: 18 boys, 12 girls; 20 pass, 10 fail. The number of boys who pass is read from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The column total" },
            { id: "b", text: "The row total" },
            { id: "c", text: "The grand total" },
            { id: "d", text: "The cell at the intersection of 'boys' row and 'pass' column" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Two-way table", statement: "Cell = joint frequency." }], steps: [
            { reasoning: "Joint counts sit in the intersection cell.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Intersection cell" },
        },
        {
          id: "olm-u8-s4-ta-q9", difficulty: "core", totalMarks: 3,
          stem: "A two-way table has row totals 25 and 15, column totals 20 and 20, grand total 40. Three cells are given: 12, 13, 8. Find the missing cell.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-way table", statement: "Row/column totals constrain cells." }], steps: [
            { reasoning: "Row 1 cells sum to 25 and row 2 to 15; columns sum to 20 each.", marks: 1, markCode: "M" },
            { reasoning: "Known cells total $12+13+8=33$; missing cell $=40-33=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u8-s4-ta-q10", difficulty: "core", totalMarks: 2,
          stem: "In a frequency table, relative frequency of a class is found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Class frequency + total" },
            { id: "b", text: "Class frequency × total" },
            { id: "c", text: "Class frequency ÷ total frequency" },
            { id: "d", text: "Total ÷ class frequency" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Relative frequency", statement: "$f/F$." }], steps: [
            { reasoning: "Proportion of total.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Class frequency ÷ total" },
        },
        {
          id: "olm-u8-s4-ta-q11", difficulty: "core", totalMarks: 3,
          stem: "Frequencies for categories A, B, C are 9, 12, 9 with total 30. Find the relative frequency of B.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Relative frequency", statement: "$f/F$." }], steps: [
            { reasoning: "$\\frac{12}{30}=0.4$ (or 40%).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.4.", marks: 1, markCode: "M" },
            { reasoning: "Check: $0.4\\times30=12$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.4" },
        },
        {
          id: "olm-u8-s4-ta-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A tally chart is preferred over a frequency table during data collection because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It gives exact decimals" },
            { id: "b", text: "Marks are easy to add up quickly without recounting" },
            { id: "c", text: "It needs no categories" },
            { id: "d", text: "It shows percentages" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Tally", statement: "Quick counting." }], steps: [
            { reasoning: "Gates of five make running totals easy.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Easy to add up quickly" },
        },
        {
          id: "olm-u8-s4-ta-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A two-way table shows 50 people surveyed: 30 own a car (20 also own a bike, 10 do not), 20 do not own a car (5 own a bike, 15 neither). Draw conclusions about car and bike ownership.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two-way table", statement: "Compare conditional proportions." }], steps: [
            { reasoning: "Car owners: $\\frac{20}{30}\\approx67\\%$ also own a bike.", marks: 1, markCode: "M" },
            { reasoning: "Non-car owners: $\\frac{5}{20}=25\\%$ own a bike.", marks: 1, markCode: "M" },
            { reasoning: "Bike ownership is much more common among car owners.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Bike ownership higher among car owners" },
        },
        {
          id: "olm-u8-s4-ta-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the grand total in a two-way table can be found by summing either the row totals or the column totals.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Two-way table", statement: "Both margins = total." }], steps: [
            { reasoning: "Row totals count each observation once by row.", marks: 1, markCode: "M" },
            { reasoning: "Column totals count each observation once by column.", marks: 1, markCode: "M" },
            { reasoning: "Both count the same total set of observations.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Both count all observations once" },
        },
        {
          id: "olm-u8-s4-ta-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Classes with frequencies 4, 7, 9, 6 have total 26. Find the relative frequency of the class with frequency 9.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.346 }] },
          markscheme: { principles: [{ kind: "formula", name: "Relative frequency", statement: "$f/F$." }], steps: [
            { reasoning: "$\\frac{9}{26}\\approx0.346$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈0.346 (or 34.6%).", marks: 1, markCode: "M" },
            { reasoning: "Accept 0.35 to 2 d.p.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈0.346" },
        },
        {
          id: "olm-u8-s4-ta-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A frequency table lists 'Number of goals' with frequencies for a football season. Explain what information the table gives and what it cannot tell you.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Frequency table", statement: "Counts only." }], steps: [
            { reasoning: "Shows how many matches had each goal count.", marks: 1, markCode: "M" },
            { reasoning: "Gives total matches and mode (most common count).", marks: 1, markCode: "M" },
            { reasoning: "Cannot identify which matches or give exact distributions within groups.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Counts per category only" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u8-s4-org-notes", title: "Data organisation — notes", summary: "Stem-and-leaf and frequency tables.",
      sections: [
        { heading: "Stem-leaf", body: "Stem=tens, leaf=units; ordered leaves; preserves all data; key required." },
        { heading: "Tables", body: "Tally→frequency table→diagrams; total must equal n." },
      ] },
  ],
};
