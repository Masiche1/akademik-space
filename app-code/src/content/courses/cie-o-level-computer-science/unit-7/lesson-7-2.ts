import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "olcs-u7-lesson-7-2",
  code: "7-2",
  title: "Standard Algorithms and Validation",
  goal: "I CAN describe standard algorithms for searching, sorting and totalling, and validate input data.",
  standards: ["2210 7.4", "2210 7.5"],
  vocabulary: [
    { term: "Linear search", definition: "Checking each item in turn until the target is found." },
    { term: "Binary search", definition: "Searching a sorted list by repeatedly halving the search range." },
    { term: "Bubble sort", definition: "Sorting by repeatedly swapping adjacent out-of-order items." },
    { term: "Validation", definition: "Checking data meets format/range rules before use (e.g. age 0-120)." },
    { term: "Verification", definition: "Checking data was entered correctly — e.g. re-entering or reading back." },
    { term: "Presence check", definition: "Validation ensuring a required field is not empty." },
    { term: "Range check", definition: "Validation ensuring a value falls within allowed limits." },
  ],
  concepts: [
    {
      id: "olcs-u7-algorithms",
      title: "Searching and sorting algorithms",
      skill: "Describe linear/binary search and bubble sort, and when each is appropriate.",
      lesson: {
        sections: [
          { heading: "Linear search", body: "Check items one by one until found or list ends.\n\n- Works on any list (sorted or not).\n- Simple to implement.\n- Slow for large lists: worst case checks all $n$ items → $O(n)$." },
          { heading: "Binary search", body: "Requires a **sorted** list. Compare target with the middle item:\n\n- If equal → found.\n- If target smaller → search left half; larger → search right half.\n- Repeat until found or range empty.\n\nEach step halves the range → $O(\\log n)$, much faster on large sorted data." },
          { heading: "Bubble sort", body: "Repeatedly pass through the list, swapping adjacent items that are out of order. Largest items 'bubble' to the end each pass. Simple but $O(n^2)$ — fine for small lists, slow for large ones." },
        ],
        keyFormulas: [
          { name: "Complexity", statement: "Linear/bubble: $O(n)$/$O(n^2)$; binary: $O(\\log n)$" },
        ],
        workedExample: {
          problem: "Search for 7 in sorted list [2,5,7,9,12] using binary search. How many comparisons?",
          solution: "Middle=7 → found on first comparison (1 comparison).",
        },
      },
      questions: [
        {
          id: "olcs-u7-al-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Binary search requires the list to be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sorted" }, { id: "b", text: "Random" }, { id: "c", text: "Empty" }, { id: "d", text: "Numeric only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Binary search", statement: "Needs sorted data." }], steps: [{ reasoning: "Binary needs sorted.", working: "\\text{sorted}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sorted" },
        },
        {
          id: "olcs-u7-al-q2", difficulty: "core", totalMarks: 2,
          stem: "State one advantage of binary search over linear search.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary speed", statement: "Halves range each step → faster." }], steps: [
            { reasoning: "Much faster on large sorted lists.", working: "\\text{faster}", marks: 1, markCode: "M" },
            { reasoning: "Correct advantage.", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster — $O(\\log n)$ vs $O(n)$ on sorted data." },
        },
        {
          id: "olcs-u7-al-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how bubble sort works on the list [5,3,8,1].",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Bubble sort", statement: "Swap adjacent out-of-order items." }], steps: [
            { reasoning: "Compare adjacent pairs, swap if out of order.", working: "\\text{swap}", marks: 1, markCode: "M" },
            { reasoning: "Repeat passes until no swaps.", working: "\\text{passes}", marks: 1, markCode: "M" },
            { reasoning: "Show example passes.", working: "\\text{3,5,1,8}\\to\\ldots", marks: 1, markCode: "M" },
            { reasoning: "Result sorted [1,3,5,8].", marks: 1, markCode: "A" },
          ], finalAnswer: "Repeatedly swap adjacent out-of-order pairs until sorted → [1,3,5,8]." },
        },
        {
          id: "olcs-u7-al-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Algorithms review.",
          parts: [
            { label: "a", prompt: "Describe linear search.", marks: 2 },
            { label: "b", prompt: "Describe binary search and its requirement.", marks: 3 },
            { label: "c", prompt: "Describe bubble sort.", marks: 2 },
            { label: "d", prompt: "When would you choose linear over binary search?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Search choice", statement: "Unsorted/small → linear; sorted/large → binary." },
          ], steps: [
            { part: "a", reasoning: "Check each item in turn.", working: "\\text{one by one}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Works on any list.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Halve range by comparing middle.", working: "\\text{halve}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Requires sorted list.", working: "\\text{sorted}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Much faster on large data.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Swap adjacent out-of-order items.", working: "\\text{adjacent swap}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Repeat passes until sorted.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Unsorted list or small list.", working: "\\text{unsorted}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Linear works anywhere.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) check each (b) halve+sorted (c) adjacent swaps (d) unsorted/small lists" },
        },
      ],
    },
    {
      id: "olcs-u7-validation",
      title: "Validation and verification",
      skill: "Distinguish validation from verification and apply common validation checks.",
      lesson: {
        sections: [
          { heading: "Validation vs verification", body: "- **Validation**: checks data is *reasonable/correct in format* — done by the program automatically (e.g. reject age > 120).\n- **Verification**: checks data was *entered correctly* — e.g. asking the user to re-type, or reading back a confirmation." },
          { heading: "Common validation checks", body: "- **Presence check**: field not empty.\n- **Range check**: value within limits (age 0-120, exam marks 0-100).\n- **Type check**: correct data type (numbers only, not letters).\n- **Format check**: matches a pattern (email, date, postcode).\n- **Length check**: within character limits.\n- **Check digit**: formula validates the whole code (ISBN, bank card)." },
          { heading: "Why validate?", body: "Bad input causes crashes, wrong results, security holes (e.g. SQL injection). Validation rejects invalid data before it's processed." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A form asks for a date of birth. Give three validation checks.",
          solution: "Presence check (not empty), type/format check (valid date format), range check (year within reasonable range).",
        },
      },
      questions: [
        {
          id: "olcs-u7-val-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A range check ensures data…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Falls within allowed limits" }, { id: "b", text: "Is spelled correctly" }, { id: "c", text: "Is encrypted" }, { id: "d", text: "Is backed up" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Range check", statement: "Value within limits." }], steps: [{ reasoning: "Range = within limits.", working: "\\text{limits}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Within limits" },
        },
        {
          id: "olcs-u7-val-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish validation from verification.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Validation vs verification", statement: "Reasonable vs entered correctly." }], steps: [
            { reasoning: "Validation: format/rules check.", working: "\\text{format}", marks: 1, markCode: "M" },
            { reasoning: "Verification: confirms correct entry.", working: "\\text{confirm}", marks: 1, markCode: "A" },
          ], finalAnswer: "Validation checks data is reasonable; verification checks it was entered correctly." },
        },
        {
          id: "olcs-u7-val-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A user enters 'abc' into an age field. Which validation check catches this and why?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Type check", statement: "Rejects wrong data type." }], steps: [
            { reasoning: "Type check: age must be numeric.", working: "\\text{type}", marks: 1, markCode: "M" },
            { reasoning: "'abc' is text, not a number.", working: "\\text{not number}", marks: 1, markCode: "M" },
            { reasoning: "Rejected before processing.", marks: 1, markCode: "M" },
            { reasoning: "Prevents errors/crashes.", marks: 1, markCode: "A" },
          ], finalAnswer: "Type check rejects 'abc' because age must be numeric." },
        },
        {
          id: "olcs-u7-val-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Validation and algorithms review.",
          parts: [
            { label: "a", prompt: "Define validation.", marks: 2 },
            { label: "b", prompt: "Define verification.", marks: 2 },
            { label: "c", prompt: "Name three validation checks.", marks: 3 },
            { label: "d", prompt: "Explain why validation is needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Validation", statement: "Automatic format/range checks." },
          ], steps: [
            { part: "a", reasoning: "Program checks data meets rules.", working: "\\text{rules}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Confirms data entered correctly.", working: "\\text{confirm}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Presence/range/type/format/length.", working: "\\text{checks}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Second check.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Third check.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Bad input → crashes/wrong results/security.", working: "\\text{bad input}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Validation rejects it early.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) rules check (b) confirm entry (c) presence/range/type (d) prevents bad data" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u7-7-2-notes", title: "Algorithms and validation — notes", summary: "Linear/binary search, bubble sort, validation vs verification.",
      sections: [
        { heading: "Search/sort", body: "Linear: any list, slow. Binary: sorted, fast. Bubble: adjacent swaps, simple." },
        { heading: "Validation", body: "Program checks format/range/type; verification confirms correct entry. Checks: presence, range, type, format, length, check digit." },
      ] },
  ],
};
