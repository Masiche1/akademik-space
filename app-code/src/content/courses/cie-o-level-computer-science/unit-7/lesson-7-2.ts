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
            { id: "a", text: "Numeric only" },
            { id: "b", text: "Random" },
            { id: "c", text: "Sorted" },
            { id: "d", text: "Empty" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Binary search", statement: "Needs sorted data." }], steps: [{ reasoning: "Binary needs sorted.", working: "\\text{sorted}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Sorted" },
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
        {
          id: "olcs-u7-al-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Linear search can be used on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only sorted lists" },
            { id: "b", text: "Sorted and unsorted lists" },
            { id: "c", text: "Only lists of numbers" },
            { id: "d", text: "Only empty lists" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Linear search", statement: "Works on any list." }], steps: [{ reasoning: "Linear checks each item — no order needed.", working: "\\text{any list}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Sorted and unsorted lists" },
        },
        {
          id: "olcs-u7-al-q6", difficulty: "core", totalMarks: 2,
          stem: "A linear search checks items one by one. In the worst case for a list of 50 items, how many comparisons are needed?",
          response: { type: "numeric", parts: [{ label: "Comparisons", answer: 50 }] },
          markscheme: { principles: [{ kind: "principle", name: "Linear search", statement: "Worst case checks all $n$ items." }], steps: [
            { reasoning: "Worst case checks every item: $n = 50$.", working: "n=50", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "50", marks: 1, markCode: "A" },
          ], finalAnswer: "50" },
        },
        {
          id: "olcs-u7-al-q7", difficulty: "core", totalMarks: 2,
          stem: "State the requirement for binary search and why it matters.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary search", statement: "Needs sorted data." }], steps: [
            { reasoning: "The list must be sorted.", working: "\\text{sorted}", marks: 1, markCode: "M" },
            { reasoning: "Halving only works if order is known.", marks: 1, markCode: "A" },
          ], finalAnswer: "The list must be sorted, because halving the range only works when the order is known." },
        },
        {
          id: "olcs-u7-al-q8", difficulty: "core", totalMarks: 1,
          stem: "Bubble sort gets its name because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It sorts randomly" },
            { id: "b", text: "It uses bubbles" },
            { id: "c", text: "It is the fastest sort" },
            { id: "d", text: "The largest items bubble to the end" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Bubble sort", statement: "Largest bubbles to the end." }], steps: [{ reasoning: "Biggest items move to the end each pass.", working: "\\text{bubble}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Largest items bubble to the end" },
        },
        {
          id: "olcs-u7-al-q9", difficulty: "foundation", totalMarks: 2,
          stem: "Binary search halves the search range each comparison. Starting with 16 items, how many items remain after 2 comparisons (best-case halving)?",
          response: { type: "numeric", parts: [{ label: "Items remaining", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Binary search", statement: "Halves the range each step." }], steps: [
            { reasoning: "$16 \\to 8 \\to 4$ after two halvings.", working: "16\\to8\\to4", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u7-al-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain when bubble sort is a reasonable choice of sorting algorithm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Bubble sort", statement: "Simple but $O(n^2)$." }], steps: [
            { reasoning: "Very simple to implement and understand.", working: "\\text{simple}", marks: 1, markCode: "M" },
            { reasoning: "Fine for small lists.", working: "\\text{small}", marks: 1, markCode: "M" },
            { reasoning: "Too slow ($O(n^2)$) for large lists.", working: "O(n^2)", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Bubble sort is reasonable for small lists where simplicity matters; it is too slow for large data." },
        },
        {
          id: "olcs-u7-al-q11", difficulty: "core", totalMarks: 1,
          stem: "Which is faster on a large sorted list?",
          response: { type: "mcq", choices: [
            { id: "a", text: "None of them" },
            { id: "b", text: "Bubble sort" },
            { id: "c", text: "Binary search" },
            { id: "d", text: "Linear search" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Binary speed", statement: "$O(\\log n)$ beats $O(n)$." }], steps: [{ reasoning: "Binary search is much faster on sorted data.", working: "\\log n", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Binary search" },
        },
        {
          id: "olcs-u7-al-q12", difficulty: "core", totalMarks: 2,
          stem: "Binary search on a sorted list of 8 items needs at most how many comparisons in the worst case?",
          response: { type: "numeric", parts: [{ label: "Comparisons", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Binary search", statement: "About $\\log_2 n$ comparisons." }], steps: [
            { reasoning: "$\\log_2 8 = 3$ halvings to reach one item.", working: "\\log_2 8 = 3", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "3", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u7-al-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe the steps of binary search on a sorted list.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Binary search", statement: "Compare middle, discard half." }], steps: [
            { reasoning: "Compare the target with the middle item.", working: "\\text{middle}", marks: 1, markCode: "M" },
            { reasoning: "If smaller search left half; if larger search right half.", working: "\\text{halve}", marks: 1, markCode: "M" },
            { reasoning: "Repeat until found or range is empty.", working: "\\text{repeat}", marks: 1, markCode: "M" },
            { reasoning: "Clear description.", marks: 1, markCode: "A" },
          ], finalAnswer: "Compare with the middle; discard the impossible half; repeat until found or empty." },
        },
        {
          id: "olcs-u7-al-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Bubble sort repeatedly…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Swaps adjacent out-of-order items" },
            { id: "b", text: "Reverses the whole list" },
            { id: "c", text: "Counts the items" },
            { id: "d", text: "Removes duplicate items" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Bubble sort", statement: "Adjacent swaps." }], steps: [{ reasoning: "Adjacent out-of-order pairs are swapped.", working: "\\text{swap}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Swaps adjacent out-of-order items" },
        },
        {
          id: "olcs-u7-al-q15", difficulty: "core", totalMarks: 2,
          stem: "In one bubble sort pass on [4, 2, 5, 1], the largest item bubbles to the end. What is the last element after this pass?",
          response: { type: "numeric", parts: [{ label: "Last element", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Bubble sort", statement: "Largest moves to the end." }], steps: [
            { reasoning: "Swaps produce [2, 4, 1, 5].", working: "[2,4,1,5]", marks: 1, markCode: "M" },
            { reasoning: "Last element is 5.", working: "5", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u7-al-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Compare linear and binary search: give one similarity and two differences.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Search comparison", statement: "Same goal, different requirements." }], steps: [
            { reasoning: "Both find whether/where an item is.", working: "\\text{same goal}", marks: 1, markCode: "M" },
            { reasoning: "Binary needs a sorted list; linear does not.", working: "\\text{sorted?}", marks: 1, markCode: "M" },
            { reasoning: "Binary is much faster on large data.", working: "\\text{faster}", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Both search for an item; binary needs sorted data and is faster, linear works anywhere." },
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
            { id: "a", text: "Is backed up" },
            { id: "b", text: "Is encrypted" },
            { id: "c", text: "Is spelled correctly" },
            { id: "d", text: "Falls within allowed limits" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Range check", statement: "Value within limits." }], steps: [{ reasoning: "Range = within limits.", working: "\\text{limits}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Within limits" },
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
        {
          id: "olcs-u7-val-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A presence check ensures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Data is encrypted" },
            { id: "b", text: "A value is in range" },
            { id: "c", text: "The file is backed up" },
            { id: "d", text: "A required field is not empty" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Presence check", statement: "Field not empty." }], steps: [{ reasoning: "Presence = not empty.", working: "\\text{not empty}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Field is not empty" },
        },
        {
          id: "olcs-u7-val-q6", difficulty: "core", totalMarks: 2,
          stem: "An exam mark must be between 0 and 100. A student enters 105. By how many marks is it above the maximum?",
          response: { type: "numeric", parts: [{ label: "Amount above maximum", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Range check", statement: "Rejects out-of-range values." }], steps: [
            { reasoning: "$105 - 100 = 5$ above the limit.", working: "105-100=5", marks: 1, markCode: "M" },
            { reasoning: "Correct difference.", working: "5", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u7-val-q7", difficulty: "core", totalMarks: 2,
          stem: "Give an example of verification (as distinct from validation).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Verification", statement: "Confirms correct entry." }], steps: [
            { reasoning: "e.g. asking the user to re-type a password.", working: "\\text{re-enter}", marks: 1, markCode: "M" },
            { reasoning: "Confirms the data was entered correctly.", marks: 1, markCode: "A" },
          ], finalAnswer: "Re-typing a password or reading back a confirmation to check entry was correct." },
        },
        {
          id: "olcs-u7-val-q8", difficulty: "core", totalMarks: 1,
          stem: "Which check rejects '12a4' entered into a 4-digit PIN field?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Presence check" },
            { id: "b", text: "Range check" },
            { id: "c", text: "Backup check" },
            { id: "d", text: "Type check" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Type check", statement: "Rejects wrong data type." }], steps: [{ reasoning: "'12a4' contains a letter, not all digits.", working: "\\text{type}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Type check" },
        },
        {
          id: "olcs-u7-val-q9", difficulty: "foundation", totalMarks: 1,
          stem: "A password must be 8–20 characters. A password of 7 characters fails. How many characters short is it?",
          response: { type: "numeric", parts: [{ label: "Characters short", answer: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "Length check", statement: "Within character limits." }], steps: [{ reasoning: "$8 - 7 = 1$ character short.", working: "8-7=1", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olcs-u7-val-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a check digit is a form of validation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Check digit", statement: "Formula over the whole code." }], steps: [
            { reasoning: "A formula is applied to the whole code.", working: "\\text{formula}", marks: 1, markCode: "M" },
            { reasoning: "It detects single-digit/typing errors.", working: "\\text{detect}", marks: 1, markCode: "M" },
            { reasoning: "Used in ISBNs and bank cards.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "A check digit applies a formula to the whole code, catching entry errors automatically — a validation check." },
        },
        {
          id: "olcs-u7-val-q11", difficulty: "core", totalMarks: 1,
          stem: "Verification differs from validation because verification…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Checks format rules" },
            { id: "b", text: "Encrypts data" },
            { id: "c", text: "Confirms data was entered correctly" },
            { id: "d", text: "Backs up files" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Verification", statement: "Confirms correct entry." }], steps: [{ reasoning: "Verification checks entry accuracy.", working: "\\text{entry}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Confirms correct entry" },
        },
        {
          id: "olcs-u7-val-q12", difficulty: "core", totalMarks: 2,
          stem: "A field allows ages from 0 to 120 inclusive. How many valid integer ages are there?",
          response: { type: "numeric", parts: [{ label: "Valid ages", answer: 121 }] },
          markscheme: { principles: [{ kind: "principle", name: "Range check", statement: "Count inclusive limits." }], steps: [
            { reasoning: "Inclusive range: $120 - 0 + 1 = 121$.", working: "120-0+1=121", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "121", marks: 1, markCode: "A" },
          ], finalAnswer: "121" },
        },
        {
          id: "olcs-u7-val-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A form has an email field. Describe two validation checks that could be applied to it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Format check", statement: "Pattern-based validation." }], steps: [
            { reasoning: "Presence check: field not empty.", working: "\\text{presence}", marks: 1, markCode: "M" },
            { reasoning: "Format check: contains '@' and a domain.", working: "\\text{@domain}", marks: 1, markCode: "M" },
            { reasoning: "Length or character-set check.", marks: 1, markCode: "M" },
            { reasoning: "Clear description.", marks: 1, markCode: "A" },
          ], finalAnswer: "Presence check (not empty) and format check (valid email pattern with '@' and domain)." },
        },
        {
          id: "olcs-u7-val-q14", difficulty: "foundation", totalMarks: 1,
          stem: "A length check ensures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The file is large" },
            { id: "b", text: "Data is within character limits" },
            { id: "c", text: "Data is prime" },
            { id: "d", text: "The password is strong" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Length check", statement: "Within character limits." }], steps: [{ reasoning: "Length check limits characters.", working: "\\text{length}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Within character limits" },
        },
        {
          id: "olcs-u7-val-q15", difficulty: "core", totalMarks: 2,
          stem: "A discount code must be exactly 6 characters. Two codes are entered: 'AB12' (4 characters) and 'AB12CD' (6 characters). How many of the two fail validation?",
          response: { type: "numeric", parts: [{ label: "Codes failing", answer: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "Length check", statement: "Exactly 6 characters required." }], steps: [
            { reasoning: "'AB12' has 4 characters → fails; 'AB12CD' passes.", working: "4 \\ne 6", marks: 1, markCode: "M" },
            { reasoning: "One fails.", working: "1", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olcs-u7-val-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why validation should happen before data is processed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Early validation", statement: "Reject bad data before use." }], steps: [
            { reasoning: "Bad input causes crashes and wrong results.", working: "\\text{errors}", marks: 1, markCode: "M" },
            { reasoning: "Validation rejects it before processing.", working: "\\text{reject}", marks: 1, markCode: "M" },
            { reasoning: "Also prevents security problems.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Validation stops invalid data before it can cause crashes, wrong results or security issues." },
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
