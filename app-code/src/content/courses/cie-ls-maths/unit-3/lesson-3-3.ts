import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cilm-u3-lesson-3-3",
  code: "3-3",
  title: "Sequences and patterns",
  goal: "I CAN identify and continue number patterns, find the nth term of linear sequences, and use sequences to solve problems.",
  standards: ["0862 Algebra: sequences"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers following a pattern — $2, 5, 8, 11, \\ldots$" },
    { term: "Term", definition: "Each number in a sequence; $n$th term means the term at position $n$." },
    { term: "Common difference", definition: "The constant amount added each step in an arithmetic sequence — here $+3$." },
    { term: "nth term", definition: "A formula giving any term: for $2,5,8,11$ the nth term is $3n-1$." },
    { term: "Arithmetic sequence", definition: "A sequence with constant difference between consecutive terms." },
    { term: "Position-to-term rule", definition: "The rule mapping term number to term value — multiply position by difference, then adjust." },
  ],
  concepts: [
    {
      id: "cilm-u3-sequences",
      title: "Number sequences",
      skill: "Continue sequences, find common differences, and derive the nth term formula.",
      lesson: {
        sections: [
          {
            heading: "Spotting the pattern",
            body: "Look at the differences between consecutive terms:\n\n$2, 5, 8, 11, \\ldots$ → differences $3, 3, 3$ — constant, so add $3$ each time.\n\n$1, 4, 9, 16, \\ldots$ → differences $3, 5, 7$ — increasing by 2 (square numbers).",
          },
          {
            heading: "The nth term of a linear sequence",
            body: "For arithmetic sequences: **nth term = (common difference × n) + adjustment**.\n\nFor $2, 5, 8, 11$: difference $=3$, so $3n$ gives $3, 6, 9, 12$ — each is $1$ more than the actual term, so nth term $=3n - 1$.\n\nFind the adjustment by substituting $n=1$: $3(1)-1=2$ ✓.",
          },
          {
            heading: "Using the nth term",
            body: "Once you have the formula, find any term:\n\n- 10th term of $3n-1$: $3(10)-1=29$\n- Is $50$ in the sequence? Solve $3n-1=50$ → $n=17$ — yes, it's the 17th term.",
          },
        ],
        keyFormulas: [
          { name: "nth term", statement: "For common difference $d$: nth term $= dn + c$; find $c$ from the first term." },
        ],
        workedExample: {
          problem: "Find the nth term of $5, 9, 13, 17, \\ldots$ and the 20th term.",
          solution: "Difference $=4$, so $4n+c$. First term: $4(1)+c=5$ → $c=1$. nth term $=4n+1$. 20th term: $4(20)+1=81$.",
        },
      },
      questions: [
        {
          id: "cilm-u3-seq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes next: $4, 9, 14, 19, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$23$" },
              { id: "c", text: "$22$" },
              { id: "d", text: "$25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common difference", statement: "Differences are $5$ — add $5$ to $19$." },
            ],
            steps: [
              { reasoning: "$19+5=24$.", working: "19+5=24", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $24$",
            commonErrors: ["Choosing (c) — pattern is $+5$, not $+4$ (that's the digit pattern, not the difference)."],
          },
        },
        {
          id: "cilm-u3-seq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the nth term of $7, 11, 15, 19, \\ldots$",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "nth term", statement: "Difference $4$ → $4n+c$; use first term to find $c$." },
            ],
            steps: [
              { reasoning: "Common difference $=4$; try $4n$: $4,8,12,16$ — actual terms are $3$ more, so $4n+3$.", working: "4n+3", marks: 1, markCode: "M" },
              { reasoning: "Check $n=1$: $4+3=7$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4n + 3$",
            commonErrors: ["$4n+7$ — the adjustment is found from $n=1$, not added to the first term directly."],
          },
        },
        {
          id: "cilm-u3-seq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The nth term of a sequence is $5n - 2$. Find the 8th term and determine whether $48$ appears in the sequence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Substitute for terms; solve $5n-2=48$ and check $n$ is a positive integer." },
            ],
            steps: [
              { reasoning: "8th term: $5(8)-2=38$.", working: "5\\times8-2=38", marks: 1, markCode: "M" },
              { reasoning: "Is $48$ in sequence? $5n-2=48$ → $5n=50$ → $n=10$ — yes, 10th term.", working: "n=10", marks: 1, markCode: "M" },
              { reasoning: "$n=10$ is a positive integer — valid.", marks: 1, markCode: "M" },
              { reasoning: "Answers: 38; yes, $48$ is the 10th term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8th term $=38$; $48$ is the 10th term",
            commonErrors: ["$5n-2=48$ → $n=10$ but forgetting to verify $n$ must be a whole number."],
          },
        },
        {
          id: "cilm-u3-seq-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A pattern of square tiles follows a sequence.",
          parts: [
            { label: "a", prompt: "Write the next two terms: $3, 6, 11, 18, \\ldots$", marks: 2 },
            { label: "b", prompt: "Find the common difference pattern and state whether it's linear.", marks: 2 },
            { label: "c", prompt: "For the linear sequence $4, 7, 10, 13, \\ldots$, find the nth term.", marks: 2 },
            { label: "d", prompt: "How many tiles are in the 15th pattern?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence analysis", statement: "Differences → pattern type → nth term → evaluation." },
            ],
            steps: [
              { part: "a", reasoning: "Differences: $3, 5, 7$ (odd numbers increasing by 2). Next diffs $9, 11$ → terms $27, 38$.", working: "27, 38", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct terms.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Second differences are constant ($+2$) — quadratic, not linear.", working: "2nd diff=2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct classification.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Difference $3$ → $3n+c$; first term $3+c=4$ → $c=1$; nth term $=3n+1$.", working: "3n+1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct formula.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$3(15)+1=46$ tiles.", working: "3\\times15+1=46", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct substitution.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $27, 38$ (b) second differences constant — quadratic (c) $3n+1$ (d) $46$ tiles",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Next terms correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Pattern classified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "nth term correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "15th term correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (a) continuing with $+5$ — check the differences change."],
          },
        },
      ],
    },
    {
      id: "cilm-u3-sequence-apps",
      title: "Sequences in context",
      skill: "Use sequences to model real patterns — savings, seating, stacking.",
      lesson: {
        sections: [
          {
            heading: "Modelling with sequences",
            body: "Many real patterns are arithmetic sequences:\n\n- Savings: $\\pounds10$ then $+\\pounds5$ each week\n- Seating: rows of $4, 6, 8, 10$ chairs\n- Stacking: each layer adds a fixed number of blocks",
          },
          {
            heading: "From context to formula",
            body: "1. Identify first term and common difference.\n2. Write nth term.\n3. Use it to predict future terms or find positions.",
          },
          {
            heading: "Limitations",
            body: "Sequences model patterns that continue indefinitely. Real situations may break the pattern (capacity limits, changing rules) — always check the model still applies.",
          },
        ],
        keyFormulas: [
          { name: "Sequence model", statement: "first term + common difference → nth term formula → predictions." },
        ],
        workedExample: {
          problem: "Sam saves $\\pounds20$ in week 1 and adds $\\pounds15$ each week. How much has he saved after 10 weeks?",
          solution: "Sequence: $20, 35, 50, \\ldots$ — first term $20$, difference $15$. nth term $=15n+5$. After 10 weeks: $15(10)+5=\\pounds155$.",
        },
      },
      questions: [
        {
          id: "cilm-u3-sa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A theatre's first row has 20 seats, each row has 4 more than the last. How many seats in row 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$32$" },
              { id: "d", text: "$24$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "Row $n$ has $20+4(n-1)$ seats; row 5: $20+16=36$." },
            ],
            steps: [
              { reasoning: "Row 5: $20 + 4(5-1) = 20+16 = 36$.", working: "20+16=36", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $36$",
            commonErrors: ["Choosing (b) — $20+4\\times5=40$ forgets rows start counting from 1."],
          },
        },
        {
          id: "cilm-u3-sa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pattern of dots follows: row 1 has 2 dots, row 2 has 5, row 3 has 8. Write the nth term for the number of dots in row $n$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context to formula", statement: "First term 2, difference 3 → $3n-1$." },
            ],
            steps: [
              { reasoning: "Difference $=3$; $3n+c$; first term $3+c=2$ → $c=-1$; nth term $=3n-1$.", working: "3n-1", marks: 1, markCode: "M" },
              { reasoning: "Check row 2: $3(2)-1=5$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3n - 1$",
            commonErrors: ["$3n+2$ — using first term as the adjustment instead of solving for $c$."],
          },
        },
        {
          id: "cilm-u3-sa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A stadium adds 500 seats each year. It had 12 000 seats in 2020. How many seats in 2026? When will it reach 15 000?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear modelling", statement: "nth term = first + difference×(n-1); solve for target." },
            ],
            steps: [
              { reasoning: "2026 is 6 years after 2020: $12000 + 6(500) = 15000$ seats.", working: "12000+3000=15000", marks: 1, markCode: "M" },
              { reasoning: "Seats in 2026: $15\\,000$.", marks: 1, markCode: "A" },
              { reasoning: "$15000 = 12000 + 500n$ where $n$ = years after 2020 → $n=6$ → year 2026.", working: "n=6", marks: 1, markCode: "M" },
              { reasoning: "Reaches 15 000 in 2026 — same answer, consistent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\,000$ seats in 2026; reaches $15\\,000$ in 2026",
            commonErrors: ["Counting 2020 as year 1 — 2026 is 6 years later, giving $n=6$."],
          },
        },
        {
          id: "cilm-u3-sa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A stack of logs forms rows: bottom row 10 logs, each row above has 1 fewer.",
          parts: [
            { label: "a", prompt: "How many logs in the 4th row from the bottom?", marks: 2 },
            { label: "b", prompt: "Write the nth term for logs in row $n$.", marks: 2 },
            { label: "c", prompt: "How many rows can be stacked before a row would have 0 logs?", marks: 3 },
            { label: "d", prompt: "Find the total number of logs in a 6-row stack.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence modelling", statement: "First term 10, difference −1 → $11-n$; sum terms for total." },
            ],
            steps: [
              { part: "a", reasoning: "Row 4: $10-3=7$ logs.", working: "10-3=7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "nth term $=10-(n-1)=11-n$.", working: "11-n", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$11-n=0$ → $n=11$; row 11 would have 0 logs — so 10 complete rows.", working: "n=11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solving correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Interpretation: 10 full rows (row 11 is empty).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Rows: $10,9,8,7,6,5$ — sum $=45$ logs.", working: "10+9+8+7+6+5=45", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $7$ logs (b) $11-n$ (c) $10$ complete rows (row 11 empty) (d) $45$ logs",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Row 4 correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "nth term correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Row count interpreted.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Total correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (d) summing 1 to 10 instead of 10 down to 5."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u3-sequences-notes",
      title: "Sequences — revision notes",
      summary: "Common differences, nth term formulas and modelling patterns.",
      sections: [
        {
          heading: "nth term",
          body: "Common difference $d$ → nth term $=dn+c$. Find $c$ from $n=1$. Check by substituting known terms.",
        },
        {
          heading: "Context",
          body: "Identify first term and difference from the situation. nth term predicts future values; solving nth term = target finds positions.",
        },
      ],
    },
  ],
};
