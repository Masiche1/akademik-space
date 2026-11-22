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
              { id: "b", text: "$22$" },
              { id: "c", text: "$23$" },
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
        {
          id: "cilm-u3-seq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes next: $6, 11, 16, 21, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$26$" },
              { id: "c", text: "$25$" },
              { id: "d", text: "$27$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common difference", statement: "Differences are $5$ — add $5$ to $21$." },
            ],
            steps: [
              { reasoning: "$21+5=26$.", working: "21+5=26", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $26$",
            commonErrors: ["Choosing (b) — the pattern adds 5, not 4."],
          },
        },
        {
          id: "cilm-u3-seq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes next: $100, 90, 80, 70, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50$" },
              { id: "b", text: "$65$" },
              { id: "c", text: "$60$" },
              { id: "d", text: "$55$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common difference", statement: "Differences are $-10$ — subtract 10 from 70." },
            ],
            steps: [
              { reasoning: "$70-10=60$.", working: "70-10=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $60$",
            commonErrors: ["Choosing (b) — subtracting 20 instead of 10."],
          },
        },
        {
          id: "cilm-u3-seq-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the nth term of $4, 7, 10, 13, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n + 1$" },
              { id: "b", text: "$7n$" },
              { id: "c", text: "$3n + 4$" },
              { id: "d", text: "$4n + 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "nth term", statement: "Difference $3$ → $3n+c$; first term $3+c=4$ → $c=1$." },
            ],
            steps: [
              { reasoning: "$3n+1$: check $n=1$ gives $4$ ✓.", working: "3n+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3n + 1$",
            commonErrors: ["Choosing (b) — $c$ is found from $n=1$, not copied from the first term."],
          },
        },
        {
          id: "cilm-u3-seq-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the common difference of the sequence $5, 8, 11, 14$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common difference", statement: "Each term minus the previous: $8-5=3$." },
            ],
            steps: [
              { reasoning: "$8-5=3$; $11-8=3$ — constant difference $3$.", working: "d=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $3$",
            commonErrors: ["Choosing (b) — reporting the first term instead of the difference."],
          },
        },
        {
          id: "cilm-u3-seq-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The nth term of a sequence is $4n - 3$. What is the 10th term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40$" },
              { id: "b", text: "$43$" },
              { id: "c", text: "$37$" },
              { id: "d", text: "$33$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Substitute $n=10$: $4(10)-3=37$." },
            ],
            steps: [
              { reasoning: "$40-3=37$.", working: "4\\times10-3=37", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $37$",
            commonErrors: ["Choosing (b) — forgetting the $-3$ adjustment."],
          },
        },
        {
          id: "cilm-u3-seq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The nth term of a sequence is $4n - 2$. Find the 7th term.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 26 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Substitute $n=7$: $4(7)-2=26$." },
            ],
            steps: [
              { reasoning: "$28-2=26$.", working: "4\\times7-2=26", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$26$",
            commonErrors: ["$30$ — computing $4(7+2)$ or forgetting the $-2$."],
          },
        },
        {
          id: "cilm-u3-seq-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The nth term of a sequence is $5n + 3$. (a) Find the 4th term. (b) Which term position gives $38$?",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 23 }, { label: "(b)", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Substitute for terms; solve $5n+3=38$." },
            ],
            steps: [
              { reasoning: "(a) $5(4)+3=23$.", working: "5\\times4+3=23", marks: 1, markCode: "A" },
              { reasoning: "(b) $5n+3=38$ → $5n=35$ → $n=7$.", working: "n=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $23$ (b) $7$th term",
            commonErrors: ["In (b) answering $38$ — the position $n$ is asked, not the term value."],
          },
        },
        {
          id: "cilm-u3-seq-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The nth term of a sequence is $4n - 1$. Determine whether $63$ appears in the sequence, and if so give its position.",
          response: { type: "numeric", parts: [{ label: "Position", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Solve $4n-1=63$ and check $n$ is a positive integer." },
            ],
            steps: [
              { reasoning: "$4n-1=63$ → $4n=64$ → $n=16$ — a positive integer, so yes.", working: "n=16", marks: 1, markCode: "M" },
              { reasoning: "$63$ is the $16$th term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — $63$ is the $16$th term",
            commonErrors: ["Not checking $n$ is whole — non-integer $n$ means the value isn't in the sequence."],
          },
        },
        {
          id: "cilm-u3-seq-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the nth term of $12, 17, 22, 27, \\ldots$ and hence find the 30th term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "nth term", statement: "Difference $5$ → $5n+c$; use $n=1$ to find $c$." },
            ],
            steps: [
              { reasoning: "Difference $=5$; first term $5+c=12$ → $c=7$; nth term $=5n+7$.", working: "5n+7", marks: 1, markCode: "M" },
              { reasoning: "Check $n=2$: $5(2)+7=17$ ✓.", working: "17", marks: 1, markCode: "M" },
              { reasoning: "30th term: $5(30)+7=157$.", working: "5\\times30+7=157", marks: 1, markCode: "A" },
            ],
            finalAnswer: "nth term $=5n+7$; 30th term $=157$",
            commonErrors: ["$5n+12$ — adjustment found from $n=1$: $5+c=12$ gives $c=7$."],
          },
        },
        {
          id: "cilm-u3-seq-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "The nth term of a sequence is $6n - 4$. Find the 12th term and determine whether $50$ appears in the sequence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Substitute for terms; solve and check $n$ is a positive integer." },
            ],
            steps: [
              { reasoning: "12th term: $6(12)-4=72-4=68$.", working: "68", marks: 1, markCode: "M" },
              { reasoning: "$6n-4=50$ → $6n=54$ → $n=9$ — positive integer, so yes.", working: "n=9", marks: 1, markCode: "M" },
              { reasoning: "Answers: $68$; yes, $50$ is the 9th term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12th term $=68$; $50$ is the 9th term",
            commonErrors: ["$6n-4=50$ → $n=9$ — forgetting to verify it's a whole number."],
          },
        },
        {
          id: "cilm-u3-seq-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sequence has nth term $3n - 1$. Which term in the sequence has value $59$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Set $3n-1=59$ and solve for $n$." },
            ],
            steps: [
              { reasoning: "$3n-1=59$ → $3n=60$ → $n=20$.", working: "n=20", marks: 1, markCode: "M" },
              { reasoning: "$n=20$ is a positive integer — valid term position.", marks: 1, markCode: "M" },
              { reasoning: "Check: $3(20)-1=59$ ✓.", working: "3\\times20-1=59", marks: 1, markCode: "M" },
              { reasoning: "Answer: the $20$th term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The $20$th term",
            commonErrors: ["Answering $59$ — the question asks for the position, not the value."],
          },
        },
        {
          id: "cilm-u3-seq-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the sequence $7, 11, 15, 19, \\ldots$",
          parts: [
            { label: "a", prompt: "Find the nth term.", marks: 2 },
            { label: "b", prompt: "Find the 25th term.", marks: 2 },
            { label: "c", prompt: "Determine whether $87$ appears in the sequence.", marks: 2 },
            { label: "d", prompt: "Explain how you checked your answer to (c).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence analysis", statement: "nth term → substitute → solve for membership." },
            ],
            steps: [
              { part: "a", reasoning: "Difference $=4$; first term $4+c=7$ → $c=3$; nth term $=4n+3$.", working: "4n+3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$4(25)+3=103$.", working: "4\\times25+3=103", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$4n+3=87$ → $4n=84$ → $n=21$ — positive integer, so yes.", working: "n=21", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Yes, $87$ is the 21st term.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Solved $4n+3=87$ to get $n=21$; verified $n$ is a positive integer and substituted back.", working: "n=21 \\text{ whole}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4n+3$ (b) $103$ (c) Yes, 21st term (d) solved for $n$ and verified integer",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "nth term correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "25th term correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Membership correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Check explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) saying 'no' without solving for $n$ — must check if $n$ is a positive integer."],
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
              { id: "b", text: "$24$" },
              { id: "c", text: "$40$" },
              { id: "d", text: "$32$" },
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
        {
          id: "cilm-u3-sa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Liam saves $\\pounds5$ in week 1 and adds $\\pounds3$ each week. How much has he saved after 4 weeks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds17$" },
              { id: "b", text: "$\\pounds14$" },
              { id: "c", text: "$\\pounds20$" },
              { id: "d", text: "$\\pounds12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "Saves: $5, 8, 11, 14$ — nth term $=3n+2$." },
            ],
            steps: [
              { reasoning: "Week 4: $5+3(4-1)=5+9=14$.", working: "5+9=14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\pounds14$",
            commonErrors: ["Choosing (b) — $5+3\\times4=17$ forgets week 1 already has the first $\\pounds5$."],
          },
        },
        {
          id: "cilm-u3-sa-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A theatre's first row has $4$ seats, and each row has $2$ more than the row before. How many seats are in row $5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "Row $n$ has $4+2(n-1)=2n+2$ seats." },
            ],
            steps: [
              { reasoning: "Row 5: $4+2(5-1)=4+8=12$.", working: "4+8=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $12$",
            commonErrors: ["Choosing (b) — $4+2\\times5=14$ off-by-one error."],
          },
        },
        {
          id: "cilm-u3-sa-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Blocks are stacked in layers: layer 1 has $5$ blocks, and each layer has $4$ more than the one below. How many blocks are in layer $6$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$21$" },
              { id: "d", text: "$29$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "Layer $n$: $5+4(n-1)$; layer 6 $=5+20=25$." },
            ],
            steps: [
              { reasoning: "$5+4(6-1)=5+20=25$.", working: "5+20=25", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $25$",
            commonErrors: ["Choosing (b) — $5+4\\times6=29$ counts the first layer twice."],
          },
        },
        {
          id: "cilm-u3-sa-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Maya saves $\\pounds10$ in month 1 and adds $\\pounds7$ each month. How much has she saved after 6 months?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds40$" },
              { id: "b", text: "$\\pounds45$" },
              { id: "c", text: "$\\pounds47$" },
              { id: "d", text: "$\\pounds52$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "nth term $=7n+3$; month 6: $7(6)+3=45$." },
            ],
            steps: [
              { reasoning: "$10+7(6-1)=10+35=45$.", working: "10+35=45", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\pounds45$",
            commonErrors: ["Choosing (d) — $10+7\\times6-7=45$; check via nth term."],
          },
        },
        {
          id: "cilm-u3-sa-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cinema's front row has $15$ seats, and each row behind has $3$ more seats than the row in front. How many seats are in row $8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$39$" },
              { id: "b", text: "$33$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$24$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "Row $n$: $15+3(n-1)$; row 8 $=15+21=36$." },
            ],
            steps: [
              { reasoning: "$15+3(8-1)=15+21=36$.", working: "15+21=36", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $36$",
            commonErrors: ["Choosing (b) — $15+3\\times8=39$ off-by-one."],
          },
        },
        {
          id: "cilm-u3-sa-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A dot pattern follows the nth term $4n + 1$. How many dots are in the 10th row?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 41 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Using nth term", statement: "Substitute $n=10$: $4(10)+1=41$." },
            ],
            steps: [
              { reasoning: "$40+1=41$.", working: "4\\times10+1=41", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$41$ dots",
            commonErrors: ["$44$ — forgetting the $+1$ adjustment."],
          },
        },
        {
          id: "cilm-u3-sa-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sequence starts at $20$ and increases by $5$ each term. (a) Write the nth term. (b) Find the 6th term.",
          response: { type: "numeric", parts: [{ label: "(b)", answer: 45 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context to formula", statement: "First term 20, difference 5 → $5n+15$; 6th term $=45$." },
            ],
            steps: [
              { reasoning: "(a) nth term $=5n+15$ (check: $5+15=20$ ✓).", working: "5n+15", marks: 1, markCode: "M" },
              { reasoning: "(b) $5(6)+15=45$.", working: "5\\times6+15=45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5n+15$ (b) $45$",
            commonErrors: ["$5n+20$ — adjustment from $n=1$: $5+c=20$ gives $c=15$."],
          },
        },
        {
          id: "cilm-u3-sa-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant is $10$ cm tall and grows $3$ cm each week. How tall is it after $8$ weeks?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 34, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear modelling", statement: "Height $=10+3\\times8=34$ cm." },
            ],
            steps: [
              { reasoning: "$10+3(8)=10+24=34$ cm.", working: "10+24=34", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$34$ cm",
            commonErrors: ["$3\\times8=24$ — forgetting the initial $10$ cm."],
          },
        },
        {
          id: "cilm-u3-sa-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ben saves $\\pounds25$ in his first month and adds $\\pounds10$ each month after that. How much has he saved after $12$ months?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence modelling", statement: "First term 25, difference 10 → nth term $=10n+15$." },
            ],
            steps: [
              { reasoning: "nth term $=10n+15$ (check $n=1$: $25$ ✓).", working: "10n+15", marks: 1, markCode: "M" },
              { reasoning: "Month 12: $10(12)+15=120+15=135$.", working: "10\\times12+15=135", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\pounds135$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds135$",
            commonErrors: ["$25+10\\times12=145$ — month 1 is already included; use $n-1$ additions or nth term."],
          },
        },
        {
          id: "cilm-u3-sa-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cinema's front row has $18$ seats, and each row behind has $2$ more seats. How many seats are in row $12$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence application", statement: "Row $n$: $18+2(n-1)$; row 12 $=18+22=40$." },
            ],
            steps: [
              { reasoning: "Row 12: $18+2(12-1)=18+22$.", working: "18+22", marks: 1, markCode: "M" },
              { reasoning: "$=40$ seats.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $40$ seats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ seats",
            commonErrors: ["$42$ — $18+2\\times12$ off-by-one."],
          },
        },
        {
          id: "cilm-u3-sa-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A stack of logs has $12$ logs in the bottom row, and each row above has $1$ fewer log. How many complete rows can be stacked?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence modelling", statement: "nth term $=13-n$; find where it reaches 0." },
            ],
            steps: [
              { reasoning: "nth term $=12-(n-1)=13-n$.", working: "13-n", marks: 1, markCode: "M" },
              { reasoning: "$13-n=0$ → $n=13$; row 13 would be empty, so $12$ complete rows.", working: "n=13", marks: 1, markCode: "M" },
              { reasoning: "Rows: $12, 11, \\ldots, 1$ — that's $12$ rows.", working: "12 \\text{ rows}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $12$ complete rows.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ complete rows",
            commonErrors: ["Answering $13$ — row 13 has 0 logs, so only 12 are complete."],
          },
        },
        {
          id: "cilm-u3-sa-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A stadium had $15\\,000$ seats in 2020 and adds $800$ seats each year.",
          parts: [
            { label: "a", prompt: "How many seats will it have in 2025?", marks: 2 },
            { label: "b", prompt: "Write an expression for seats $n$ years after 2020.", marks: 2 },
            { label: "c", prompt: "In which year will it reach $19\\,000$ seats?", marks: 2 },
            { label: "d", prompt: "Give one reason why this sequence model might stop being accurate.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear modelling", statement: "First term 15000, difference 800 → $800n+15000$; solve for target." },
            ],
            steps: [
              { part: "a", reasoning: "$15000+5(800)=15000+4000=19\\,000$ seats.", working: "15000+4000=19000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Seats $=15000+800n$ where $n$ = years after 2020.", working: "15000+800n", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct expression.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$19000=15000+800n$ → $800n=4000$ → $n=5$ → year 2025.", working: "n=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct year.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. stadium capacity limit, building restrictions, or demand changes — model assumes constant +800/year forever.", working: "\\text{capacity/rules}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid limitation stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $19\\,000$ (b) $15000+800n$ (c) 2025 (d) capacity limits / changing plans",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Seats correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Expression correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Year correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Limitation stated.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (c) counting 2020 as year 1 — $n=5$ means 2025."],
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
