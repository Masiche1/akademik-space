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
            { id: "a", text: "The tens digit" }, { id: "b", text: "The units digit" }, { id: "c", text: "The mean" }, { id: "d", text: "The frequency" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "A diagonal line crossing the four" }, { id: "b", text: "A circle" }, { id: "c", text: "A square" }, { id: "d", text: "Nothing special" },
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
