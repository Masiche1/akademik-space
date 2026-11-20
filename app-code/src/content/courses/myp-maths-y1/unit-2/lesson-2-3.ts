import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypm1-u2-lesson-2-3",
  code: "2-3",
  title: "Patterns and Ratio",
  goal: "I CAN find and justify rules for number sequences and shape patterns, and use ratio and direct proportion to share quantities and compare prices.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Sequence", definition: "A list of numbers that follows a rule." },
    { term: "Term-to-term rule", definition: "A rule that tells you how to get from one term to the next, such as \"add 3\"." },
    { term: "Position-to-term rule", definition: "A rule that gives a term directly from its position $n$, such as $3n+1$." },
    { term: "Linear sequence", definition: "A sequence with a constant difference between consecutive terms. Its $n$th term has the form $an+b$." },
    { term: "Common difference", definition: "The constant amount added each time in a linear sequence." },
    { term: "Ratio", definition: "A comparison of two or more quantities, written with a colon, such as $2:3$." },
    { term: "Direct proportion", definition: "Two quantities are in direct proportion if one increases in the same ratio as the other, for example doubling both together." },
  ],
  concepts: [
    {
      id: "mypm1-u2-sequences",
      title: "Sequences and the nth term",
      skill: "Use term-to-term and position-to-term rules, and find and justify the nth term of a linear sequence from a shape pattern.",
      lesson: {
        sections: [
          {
            heading: "Describing sequences",
            body: "A term-to-term rule tells you how to move along a sequence. The sequence $4, 7, 10, 13, \\dots$ has the rule \"add 3\". A position-to-term rule, such as $3n+1$, lets you find any term without listing the earlier ones: the 20th term is $3\\times20+1=61$.",
          },
          {
            heading: "Finding the nth term",
            body: "For a linear sequence the common difference $d$ is the coefficient of $n$. The $n$th term is $dn+c$, where $c$ is found by comparing with $d\\times n$. For $4,7,10,13$: $d=3$, and $3n$ gives $3,6,9,12$, so we must add 1. The $n$th term is $3n+1$.",
          },
          {
            heading: "Justifying a rule from shapes",
            body: "To justify a rule from a pattern of shapes, explain how the pattern grows. For a row of squares made from matchsticks, the first square needs 4 sticks and each extra square adds 3 more. So the number of sticks is $4+3(n-1)=3n+1$. Always test the rule on a term you can count.",
          },
        ],
        keyFormulas: [
          { name: "nth term of a linear sequence", statement: "$an+b$ where $a$ is the common difference" },
          { name: "Finding $b$", statement: "$b=\\text{first term}-a$" },
        ],
        workedExample: {
          problem: "Find the $n$th term of $5, 9, 13, 17, \\dots$ and the 30th term.",
          solution: "The common difference is 4, so the rule starts with $4n$. Comparing: $4n$ gives $4,8,12,16$, so add 1. The $n$th term is $4n+1$. The 30th term is $4\\times30+1=121$.",
        },
      },
      questions: [
        {
          id: "mypm1-u2-sequences-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sequence starts $7, 11, 15, 19, \\dots$ Which is the term-to-term rule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add 4" },
              { id: "b", text: "Add 7" },
              { id: "c", text: "Multiply by 4" },
              { id: "d", text: "Add 3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common difference", statement: "In a linear sequence the same amount is added to get from each term to the next." },
            ],
            steps: [
              { reasoning: "Subtract consecutive terms: $11-7=4$, $15-11=4$, $19-15=4$.", working: "d=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Add 4",
            commonErrors: ["Choosing the first term, 7, as the difference.", "Counting the difference incorrectly as 3."],
            examinerNote: "B1 for add 4.",
          },
        },
        {
          id: "mypm1-u2-sequences-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The $n$th term of a sequence is $4n-3$. Work out the 25th term.",
          response: { type: "numeric", parts: [{ label: "25th term", answer: 97 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-to-term rule", statement: "Substitute the position number $n$ into the formula for the $n$th term." },
            ],
            steps: [
              { reasoning: "Substitute $n=25$.", working: "4\\times25-3=100-3", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "97", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$97$",
            commonErrors: ["Computing $4\\times(25-3)=88$.", "Reading $4n$ as the number 425."],
            examinerNote: "M1 for 100 - 3. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-sequences-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The first four terms of a sequence are $6, 11, 16, 21$. Find an expression for the $n$th term and use it to work out the 40th term.",
          response: { type: "numeric", parts: [{ label: "40th term", answer: 201 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "$an+b$, where $a$ is the common difference and $b=\\text{first term}-a$." },
            ],
            steps: [
              { reasoning: "The common difference is 5, so the coefficient of $n$ is 5.", working: "5n", marks: 1, markCode: "M" },
              { reasoning: "Compare with $5n=5,10,15,20$: add 1 to reach the terms.", working: "5n+1", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=40$.", working: "5\\times40+1=201", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n$th term $=5n+1$; 40th term $=201$",
            commonErrors: ["Writing the rule as $n+5$.", "Writing $5n+6$ by using the first term as the constant."],
            examinerNote: "A1 for 5n + 1 (accept 1 + 5n). Third mark follows through from a linear rule.",
          },
        },
        {
          id: "mypm1-u2-sequences-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Matchsticks are used to make a row of squares. One square uses 4 matchsticks, two squares joined in a row use 7 matchsticks, and three squares joined in a row use 10 matchsticks.",
          parts: [
            { label: "a", prompt: "Draw or describe the pattern for 4 squares and write down the number of matchsticks needed.", marks: 1 },
            { label: "b", prompt: "Find an expression for the number of matchsticks needed for $n$ squares.", marks: 2 },
            { label: "c", prompt: "Explain, using the way the pattern grows, why your rule is correct.", marks: 2 },
            { label: "d", prompt: "Mia has 100 matchsticks. Work out the greatest number of squares she can make in one row.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Matchsticks for 4 squares", answer: 13 },
              { label: "(d) Greatest number of squares", answer: 33 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "$an+b$ with $a$ the common difference." },
              { kind: "principle", name: "Generalising a pattern", statement: "Explain what stays the same and what is added each time the pattern grows." },
            ],
            steps: [
              { part: "a", reasoning: "Each extra square adds 3 matchsticks: $10+3$.", working: "13", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The sequence $4,7,10,13$ has common difference 3, so the rule starts with $3n$.", working: "3n", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare with $3n=3,6,9,12$: add 1.", working: "3n+1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The first square needs 4 matchsticks and every extra square shares one side so needs only 3 more.", working: "4+3(n-1)", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Expand: $4+3n-3=3n+1$, which matches the rule.", working: "3n+1", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Form an inequality for the number of squares.", working: "3n+1\\le100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve: $3n\\le99$, so $n\\le33$.", working: "n\\le33", marks: 1, markCode: "M" },
              { part: "d", reasoning: "33 squares use $3\\times33+1=100$ matchsticks exactly, so the answer is 33.", working: "33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 13 (b) $3n+1$ (c) 4 for the first square then 3 more for each extra square: $4+3(n-1)=3n+1$ (d) 33 squares",
            commonErrors: ["Writing the rule as $4n$, forgetting shared sides.", "Writing $n+3$.", "In (d), dividing 100 by 4 to get 25."],
            examinerNote: "In (c) accept an explanation using 3n sides plus 1 extra side at the start.",
          },
        },
        {
          id: "mypm1-u2-sequences-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The $n$th term of a sequence is $5n+2$. What is the 10th term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$52$" },
              { id: "b", text: "$50$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-to-term rule", statement: "Substitute the position number $n$ into the formula for the $n$th term." },
            ],
            steps: [
              { reasoning: "Substitute $n=10$: $5\\times10+2=52$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $52$",
            commonErrors: ["Computing $5\\times(10+2)=60$.", "Reading $5n$ as 510."],
            examinerNote: "B1 for 52.",
          },
        },
        {
          id: "mypm1-u2-sequences-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sequence starts $3, 7, 11, 15, \\dots$ What is the common difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common difference", statement: "In a linear sequence the same amount is added to get from each term to the next." },
            ],
            steps: [
              { reasoning: "Subtract consecutive terms: $7-3=4$, $11-7=4$, $15-11=4$.", working: "d=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: ["Choosing the first term, 3."],
            examinerNote: "B1 for 4.",
          },
        },
        {
          id: "mypm1-u2-sequences-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which expression gives the $n$th term of the sequence $2, 5, 8, 11, \\dots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n-1$" },
              { id: "b", text: "$3n+2$" },
              { id: "c", text: "$2n+3$" },
              { id: "d", text: "$n+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "$an+b$, where $a$ is the common difference and $b=\\text{first term}-a$." },
            ],
            steps: [
              { reasoning: "Common difference is 3, so start with $3n$; $3n$ gives $3,6,9,12$, so subtract 1: $3n-1$ gives $2,5,8,11$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3n-1$",
            commonErrors: ["Writing $3n+2$ by adding the first term instead of subtracting the difference."],
            examinerNote: "B1 for 3n - 1.",
          },
        },
        {
          id: "mypm1-u2-sequences-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The $n$th term of a sequence is $6n-4$. Work out the 20th term.",
          response: { type: "numeric", parts: [{ label: "20th term", answer: 116 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-to-term rule", statement: "Substitute $n=20$ into the formula." },
            ],
            steps: [
              { reasoning: "Substitute $n=20$.", working: "6\\times20-4=120-4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "116", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$116$",
            commonErrors: ["Computing $6\\times(20-4)=96$.", "Writing $6\\times20=120$ and forgetting the $-4$."],
            examinerNote: "M1 for 120 - 4. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-sequences-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The first four terms of a sequence are $4, 10, 16, 22$. Find an expression for the $n$th term and use it to work out the 15th term.",
          response: { type: "numeric", parts: [{ label: "15th term", answer: 88 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "$an+b$, where $a$ is the common difference." },
            ],
            steps: [
              { reasoning: "The common difference is 6, so the coefficient of $n$ is 6.", working: "6n", marks: 1, markCode: "M" },
              { reasoning: "Compare with $6n=6,12,18,24$: subtract 2 to reach the terms, so the $n$th term is $6n-2$.", working: "6n-2", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=15$.", working: "6\\times15-2=88", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n$th term $=6n-2$; 15th term $=88$",
            commonErrors: ["Writing $n+6$ or $6n+4$.", "Using $b=4$ (the first term) instead of $b=4-6=-2$."],
            examinerNote: "A1 for 6n - 2. Third mark follows through from a linear rule.",
          },
        },
        {
          id: "mypm1-u2-sequences-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Tiles are laid in rows. 1 row needs 5 tiles, 2 rows need 9 tiles, 3 rows need 13 tiles. Which expression gives the number of tiles for $n$ rows?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4n+1$" },
              { id: "b", text: "$5n+4$" },
              { id: "c", text: "$n+4$" },
              { id: "d", text: "$4n+5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "Sequence $5,9,13$ has common difference 4; $4n$ gives $4,8,12$, so add 1." },
            ],
            steps: [
              { reasoning: "Common difference is 4 and $b=5-4=1$, giving $4n+1$. Check: $n=1$ gives 5, $n=2$ gives 9.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4n+1$",
            commonErrors: ["Writing $5n+4$ by using the first term as the constant.", "Writing $n+4$ by using the difference as 1."],
            examinerNote: "B1 for 4n + 1.",
          },
        },
        {
          id: "mypm1-u2-sequences-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The first four terms of a sequence are $-1, 3, 7, 11$.",
          response: { type: "numeric", parts: [{ label: "50th term", answer: 195 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "$an+b$, where $a$ is the common difference and $b=\\text{first term}-a$." },
            ],
            steps: [
              { reasoning: "The common difference is 4, so start with $4n$.", working: "4n", marks: 1, markCode: "M" },
              { reasoning: "Compare: $4n$ gives $4,8,12,16$; subtract 5 to get $-1,3,7,11$, so the rule is $4n-5$.", working: "4n-5", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=50$.", working: "4\\times50-5=195", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n$th term $=4n-5$; 50th term $=195$",
            commonErrors: ["Writing $4n+3$ by adding instead of subtracting.", "Giving a negative answer for the 50th term."],
            examinerNote: "A1 for 4n - 5. Third mark follows through from a linear rule.",
          },
        },
        {
          id: "mypm1-u2-sequences-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sequence has $n$th term $2n+3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5, 7, 9, 11$" },
              { id: "b", text: "$3, 5, 7, 9$" },
              { id: "c", text: "$2, 4, 6, 8$" },
              { id: "d", text: "$3, 6, 9, 12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-to-term rule", statement: "Substitute $n=1, 2, 3, 4$ into the rule to generate the first four terms." },
            ],
            steps: [
              { reasoning: "Substitute $n=1,2,3,4$: $2\\times1+3=5$, $2\\times2+3=7$, $2\\times3+3=9$, $2\\times4+3=11$, giving $5,7,9,11$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5, 7, 9, 11$",
            commonErrors: ["Starting at $n=0$ and giving $3,5,7,9$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u2-sequences-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ivy claims the $n$th term of $7, 10, 13, 16, \\dots$ is $3n+7$.",
          parts: [
            { label: "a", prompt: "Test Ivy's rule by finding the first term it predicts ($n=1$).", marks: 1 },
            { label: "b", prompt: "Write down the correct $n$th term.", marks: 1 },
            { label: "c", prompt: "Explain what Ivy did wrong.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "$an+b$ where $b=\\text{first term}-a$, not the first term itself." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $n=1$: $3\\times1+7=10$, which is not the first term 7.", working: "10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Common difference is 3; $3n$ gives $3,6,9,12$, so add 4.", working: "3n+4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ivy used the first term 7 as the constant $b$. The constant is first term minus difference: $7-3=4$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) predicts 10, not 7 (b) $3n+4$ (c) she used the first term as $b$ instead of $b=a_1-d$",
            commonErrors: ["Accepting $3n+7$ without testing."],
            examinerNote: "In (c) the reason must identify the constant as first term minus difference (oe).",
          },
        },
        {
          id: "mypm1-u2-sequences-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sequence has the term-to-term rule \"add 6\" and starts $5, 11, 17, 23, \\dots$ What is the 5th term?",
          response: { type: "numeric", parts: [{ label: "5th term", answer: 29 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Term-to-term rule", statement: "Add 6 to each term to get the next." },
            ],
            steps: [
              { reasoning: "Continue: $23+6=29$.", working: "29", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$29$",
            commonErrors: ["Adding 5 instead of 6.", "Listing only to the 4th term."],
            examinerNote: "B1 for 29.",
          },
        },
        {
          id: "mypm1-u2-sequences-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pattern of L-shapes is built from squares. 1 L uses 6 squares, 2 Ls use 11 squares, 3 Ls use 16 squares.",
          parts: [
            { label: "a", prompt: "Find the number of squares needed for 4 Ls.", marks: 1 },
            { label: "b", prompt: "Write an expression for the number of squares for $n$ Ls.", marks: 1 },
            { label: "c", prompt: "Explain, using the way the pattern grows, why each extra L adds 5 squares.", marks: 1 },
            { label: "d", prompt: "How many Ls can be made with 101 squares?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Squares for 4 Ls", answer: 21 },
              { label: "(d) Number of Ls from 101 squares", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "Sequence $6,11,16$ has common difference 5; $5n+1$ gives the terms." },
              { kind: "principle", name: "Generalising a pattern", statement: "Explain what is added each time the pattern grows." },
            ],
            steps: [
              { part: "a", reasoning: "Add 5 to 16.", working: "21", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Common difference 5, $b=6-5=1$.", working: "5n+1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each new L shares one side with the previous one, so it adds 5 new squares instead of 6.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Solve $5n+1\\le101$: $5n\\le100$, so $n\\le20$. Check: 20 Ls use $101$ squares exactly.", working: "n=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 21 (b) $5n+1$ (c) each extra L adds 5 squares because one side is shared (d) 20 Ls",
            commonErrors: ["Writing the rule as $6n$.", "In (d) dividing 101 by 6 instead of solving the inequality."],
            examinerNote: "In (d) accept '20' with the check $5\\times20+1=101$.",
          },
        },
        {
          id: "mypm1-u2-sequences-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Max is investigating the sequence $2, 5, 8, 11, 14, \\dots$",
          parts: [
            { label: "a", prompt: "Write down the term-to-term rule.", marks: 1 },
            { label: "b", prompt: "Find an expression for the $n$th term.", marks: 1 },
            { label: "c", prompt: "Use your rule to find which term number gives 101.", marks: 1 },
            { label: "d", prompt: "Explain how you know your rule is correct for every term, not just the ones listed.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) Term number giving 101", answer: 34 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term of a linear sequence", statement: "$3n-1$ for this sequence." },
              { kind: "principle", name: "Justifying a rule", statement: "A rule is justified by testing it on several terms and explaining the constant difference." },
            ],
            steps: [
              { part: "a", reasoning: "Each term is 3 more than the previous.", working: "add 3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Common difference 3; $3n$ gives $3,6,9,12,15$, so subtract 1.", working: "3n-1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solve $3n-1=101$: $3n=102$.", working: "n=34", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The rule adds a constant 3 each step, so it produces exactly this sequence for every $n$; it was checked against several listed terms.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) add 3 (b) $3n-1$ (c) $n=34$ (d) constant difference of 3 confirmed on all listed terms",
            commonErrors: ["Writing the rule as $3n+2$.", "In (c) dividing 101 by 3 without adjusting for $-1$."],
            examinerNote: "In (d) the justification must mention the constant difference or testing (oe).",
          },
        },
      ],
    },
    {
      id: "mypm1-u2-ratio-proportion",
      title: "Ratio, proportion and best buys",
      skill: "Simplify ratios, share in a ratio, use direct proportion and compare prices.",
      lesson: {
        sections: [
          {
            heading: "Writing and simplifying ratios",
            body: "A ratio compares quantities in the same units. Simplify by dividing every part by a common factor: $12:18=2:3$. Convert units first: 50 cm : 2 m is $50:200=1:4$.",
          },
          {
            heading: "Sharing in a ratio",
            body: "To share 56 in the ratio $3:5$, add the parts: $3+5=8$ parts. One part is $56\\div8=7$. So the shares are $3\\times7=21$ and $5\\times7=35$. Check that they add to 56.",
          },
          {
            heading: "Direct proportion and best buys",
            body: "If 4 notebooks cost 10 euros, then 1 notebook costs $10\\div4=2.50$ euros and 6 notebooks cost $6\\times2.50=15$ euros. To find the best buy, work out the cost per unit (or the amount per euro) for each option and compare.",
          },
        ],
        keyFormulas: [
          { name: "Sharing in a ratio", statement: "One part $=\\text{total}\\div\\text{sum of the parts}$" },
          { name: "Unit cost", statement: "$\\text{cost per item}=\\text{total cost}\\div\\text{number of items}$" },
        ],
        workedExample: {
          problem: "Share 56 euros in the ratio $3:5$.",
          solution: "Total parts: $3+5=8$. One part: $56\\div8=7$ euros. Shares: $3\\times7=21$ euros and $5\\times7=35$ euros. Check: $21+35=56$.",
        },
      },
      questions: [
        {
          id: "mypm1-u2-ratio-proportion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write the ratio $12:18$ in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:3$" },
              { id: "b", text: "$3:2$" },
              { id: "c", text: "$6:9$" },
              { id: "d", text: "$1:6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simplifying a ratio", statement: "Divide every part by the highest common factor." },
            ],
            steps: [
              { reasoning: "The highest common factor of 12 and 18 is 6; divide both parts by 6.", working: "12:18=2:3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2:3$",
            commonErrors: ["Choosing $6:9$, which is not fully simplified.", "Reversing the order of the ratio."],
            examinerNote: "B1 for 2:3.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share 72 euros between Tara and Sam in the ratio $4:5$. How much does Sam receive, in euros?",
          response: { type: "numeric", parts: [{ label: "Sam's share", answer: 40, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=\\text{total}\\div\\text{number of parts}$." },
            ],
            steps: [
              { reasoning: "Add the parts of the ratio.", working: "4+5=9", marks: 1, markCode: "M" },
              { reasoning: "Find the value of one part.", working: "72\\div9=8", marks: 1, markCode: "M" },
              { reasoning: "Sam has 5 parts.", working: "5\\times8=40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 euros",
            commonErrors: ["Dividing 72 by 4 and 5 separately.", "Giving Tara's share, 32 euros."],
            examinerNote: "Tara receives 32 euros; check the shares add to 72.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells juice in two sizes. A 1.5 litre bottle costs 2.40 euros. A 2 litre bottle costs 3.00 euros. Work out the cost per litre of each bottle and state which bottle is the better buy.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cost per litre of 1.5 litre bottle (euros)", answer: 1.6 },
              { label: "Cost per litre of 2 litre bottle (euros)", answer: 1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit cost", statement: "Divide the cost by the quantity to compare prices fairly." },
            ],
            steps: [
              { reasoning: "Divide the cost of the small bottle by its volume.", working: "2.40\\div1.5=1.60", marks: 1, markCode: "M" },
              { reasoning: "Divide the cost of the large bottle by its volume.", working: "3.00\\div2=1.50", marks: 1, markCode: "M" },
              { reasoning: "Compare the two costs per litre.", working: "1.50<1.60", marks: 1, markCode: "A" },
              { reasoning: "State the conclusion: the 2 litre bottle is cheaper per litre, so it is the better buy.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "1.60 euros per litre and 1.50 euros per litre; the 2 litre bottle is the better buy.",
            commonErrors: ["Choosing the cheaper bottle in total price.", "Dividing the volume by the cost without comparing like with like."],
            examinerNote: "Accept litres per euro (0.625 and 0.667) with the correct conclusion.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school makes orange paint by mixing yellow and red paint in the ratio $5:3$. A teacher needs 4.8 litres of orange paint for an art project.",
          parts: [
            { label: "a", prompt: "Write down the fraction of the mixture that is yellow paint.", marks: 1 },
            { label: "b", prompt: "Work out how many litres of yellow paint and how many litres of red paint are needed.", marks: 3 },
            { label: "c", prompt: "Yellow paint costs 6 euros per litre and red paint costs 8 euros per litre. Work out the total cost of the paint for the project.", marks: 2 },
            { label: "d", prompt: "The teacher has only 2 litres of red paint. Is this enough to make 6 litres of orange paint in the same ratio? Justify your answer.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Litres of yellow paint", answer: 3 },
              { label: "(b) Litres of red paint", answer: 1.8 },
              { label: "(c) Total cost (euros)", answer: 32.4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=\\text{total}\\div\\text{sum of parts}$." },
              { kind: "principle", name: "Direct proportion", statement: "If the total amount changes, each part changes in the same ratio." },
            ],
            steps: [
              { part: "a", reasoning: "There are $5+3=8$ parts and 5 of them are yellow.", working: "\\frac{5}{8}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "One part is the total divided by 8.", working: "4.8\\div8=0.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Yellow is 5 parts.", working: "5\\times0.6=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Red is 3 parts.", working: "3\\times0.6=1.8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply each volume by its price per litre.", working: "3\\times6+1.8\\times8=18+14.4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add.", working: "32.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For 6 litres one part is $6\\div8=0.75$ litres, so red needs $3\\times0.75=2.25$ litres.", working: "3\\times0.75=2.25", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since 2.25 litres is more than 2 litres, it is not enough.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{5}{8}$ (b) 3 litres yellow, 1.8 litres red (c) 32.4 euros (d) No: 2.25 litres of red paint are needed.",
            commonErrors: ["Giving the yellow fraction as $\\frac{5}{3}$.", "Dividing 4.8 by 5 and 3 separately.", "Using 6 litres as the amount of red paint."],
            examinerNote: "In (c) follow through from incorrect volumes in (b). In (d) accept 2 litres of red makes only 5.33 litres of orange.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write the ratio $20:30$ in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:3$" },
              { id: "b", text: "$3:2$" },
              { id: "c", text: "$10:15$" },
              { id: "d", text: "$1:10$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simplifying a ratio", statement: "Divide every part by the highest common factor." },
            ],
            steps: [
              { reasoning: "The highest common factor of 20 and 30 is 10; divide both parts by 10.", working: "20:30=2:3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2:3$",
            commonErrors: ["Choosing $10:15$, which is not fully simplified.", "Reversing the order."],
            examinerNote: "B1 for 2:3.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Share 18 sweets between two children in the ratio $1:2$. How many sweets does the second child get?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=$ total $\\div$ number of parts; the second child has 2 parts." },
            ],
            steps: [
              { reasoning: "Total parts $=1+2=3$; one part is $18\\div3=6$; second child gets $2\\times6=12$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $12$",
            commonErrors: ["Giving 6, which is one part only.", "Splitting equally to get 9."],
            examinerNote: "B1 for 12.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A drink is made by mixing cordial and water in the ratio $1:4$. How many litres of water are needed for 2 litres of cordial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$ litres" },
              { id: "b", text: "$4$ litres" },
              { id: "c", text: "$6$ litres" },
              { id: "d", text: "$8$ litres" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "If cordial doubles, water doubles: $1:4$ scaled by 2 gives $2:8$." },
            ],
            steps: [
              { reasoning: "Scale the ratio by 2: $2$ litres cordial needs $4\\times2=8$ litres water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $8$ litres",
            commonErrors: ["Adding 4 litres to make 6.", "Using 4 litres because the ratio says 4."],
            examinerNote: "B1 for 8 litres.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Share 45 euros between P and Q in the ratio $2:7$. How much does Q receive, in euros?",
          response: { type: "numeric", parts: [{ label: "Q's share", answer: 35, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=$ total $\\div$ sum of parts." },
            ],
            steps: [
              { reasoning: "Total parts $=2+7=9$; one part is $45\\div9=5$ euros.", working: "45\\div9=5", marks: 1, markCode: "M" },
              { reasoning: "Q has 7 parts: $7\\times5=35$ euros.", working: "35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35$ euros",
            commonErrors: ["Dividing 45 by 2 and 7 separately.", "Giving P's share, 10 euros."],
            examinerNote: "M1 for one part = 5. A1 for 35. P receives 10 euros; check shares add to 45.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "4 pencils cost 1.20 euros. Work out the cost of 10 pencils, in euros.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 3, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "Cost per pencil is constant, so scale the cost by the same factor as the number of pencils." },
            ],
            steps: [
              { reasoning: "Find the cost of one pencil.", working: "1.20\\div4=0.30", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 10.", working: "0.30\\times10=3.00", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.00$ euros",
            commonErrors: ["Multiplying 1.20 by 10 to get 12.", "Dividing 1.20 by 10."],
            examinerNote: "M1 for 0.30 per pencil or 1.20 x 2.5. A1 cao.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which ratio is equivalent to $6:9$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2:3$" },
              { id: "b", text: "$3:2$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$6:18$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equivalent ratios", statement: "Dividing or multiplying every part by the same number gives an equivalent ratio." },
            ],
            steps: [
              { reasoning: "Divide both parts by 3: $6:9=2:3$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2:3$",
            commonErrors: ["Choosing $3:2$ by reversing.", "Choosing $6:18$ which is not equivalent ($\\frac{6}{18}=\\frac13$)."],
            examinerNote: "B1 for 2:3.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A concrete mix uses cement, sand and gravel in the ratio $1:2:3$. A builder needs 24 kg of gravel for a job.",
          response: { type: "numeric", parts: [{ label: "Total mass of mix", answer: 48, unit: "kg" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "Gravel is 3 parts out of $1+2+3=6$ parts." },
            ],
            steps: [
              { reasoning: "Gravel is 3 parts and needs 24 kg, so one part is $24\\div3=8$ kg.", working: "24\\div3=8", marks: 1, markCode: "M" },
              { reasoning: "Total parts is 6, so the total mass is $6\\times8$.", working: "6\\times8=48", marks: 1, markCode: "M" },
              { reasoning: "(Check: cement $8$ kg, sand $16$ kg, gravel $24$ kg.)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$ kg",
            commonErrors: ["Dividing 24 by 6 to get one part as 4, forgetting gravel is 3 parts.", "Answering 24 kg as the total."],
            examinerNote: "M1 for one part = 8. M1 for 6 parts. A1 for 48.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A map uses the scale 1 cm : 5 km. Two towns are 7 cm apart on the map. What is the real distance between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$ km" },
              { id: "b", text: "$35$ km" },
              { id: "c", text: "$1.4$ km" },
              { id: "d", text: "$70$ km" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "Real distance = map distance $\\times$ scale factor." },
            ],
            steps: [
              { reasoning: "Each centimetre on the map is 5 km, so $7\\times5=35$ km.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $35$ km",
            commonErrors: ["Dividing 7 by 5 to get 1.4.", "Multiplying by 10 instead of 5."],
            examinerNote: "B1 for 35 km.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A fruit punch recipe mixes apple juice, orange juice and water in the ratio $2:1:1$. Aisha wants to make 2 litres of punch.",
          parts: [
            { label: "a", prompt: "Write down the fraction of the punch that is apple juice.", marks: 1 },
            { label: "b", prompt: "Work out how many litres of each ingredient Aisha needs.", marks: 1 },
            { label: "c", prompt: "Explain why the ratio $4:2:2$ makes the same punch.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=$ total $\\div$ sum of parts; $2+1+1=4$ parts." },
              { kind: "principle", name: "Equivalent ratios", statement: "Multiplying every part by the same number gives an equivalent ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Apple juice is 2 of the 4 parts.", working: "\\frac{2}{4}=\\frac{1}{2}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "One part is $2\\div4=0.5$ litres; apple $1$ litre, orange $0.5$ litres, water $0.5$ litres.", working: "1,\\ 0.5,\\ 0.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Dividing every part of $4:2:2$ by 2 gives $2:1:1$, so the proportions are identical.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{1}{2}$ (b) 1 litre apple, 0.5 litre orange, 0.5 litre water (c) $4:2:2$ divided by 2 is $2:1:1$",
            commonErrors: ["Giving the apple fraction as $\\frac{2}{1}$.", "Using 4 litres as the total instead of 2."],
            examinerNote: "In (b) all three quantities are needed for the mark.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recipe uses flour and sugar in the ratio $5:2$. How much flour is needed for 200 g of sugar?",
          response: { type: "numeric", parts: [{ label: "Flour", answer: 500, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "The ratio stays the same: 5 parts flour for every 2 parts sugar." },
            ],
            steps: [
              { reasoning: "Scale factor: sugar goes from 2 parts to 200 g, so one part is 100 g; flour is 5 parts.", working: "5\\times100=500", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$500$ g",
            commonErrors: ["Computing $200\\times\\frac{5}{2}=500$ incorrectly as 50 or 800."],
            examinerNote: "B1 for 500 g.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school trip costs money that is shared between transport and meals in the ratio $3:2$. The transport costs 45 euros.",
          parts: [
            { label: "a", prompt: "Work out the cost of the meals, in euros.", marks: 1 },
            { label: "b", prompt: "Work out the total cost of the trip, in euros.", marks: 1 },
            { label: "c", prompt: "A second trip has the same ratio and costs 80 euros in total. Work out the transport cost.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost of meals", answer: 30, unit: "euros" },
              { label: "(b) Total cost", answer: 75, unit: "euros" },
              { label: "(c) Transport cost for 80 euro trip", answer: 48, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=$ known amount $\\div$ its number of parts." },
              { kind: "principle", name: "Direct proportion", statement: "With the same ratio, parts scale with the total." },
            ],
            steps: [
              { part: "a", reasoning: "Transport is 3 parts = 45 euros, so one part is 15 euros; meals are 2 parts.", working: "2\\times15=30", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the two shares.", working: "45+30=75", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Total parts is 5, so one part is $80\\div5=16$ euros; transport is 3 parts.", working: "3\\times16", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 euros (b) 75 euros (c) 48 euros",
            commonErrors: ["Dividing 45 by 5 instead of 3 for one part.", "In (c) giving the meals cost, 32 euros."],
            examinerNote: "In (c) follow through is not available; the ratio method must be correct.",
          },
        },
        {
          id: "mypm1-u2-ratio-proportion-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells rice in two pack sizes. A 2 kg bag costs 3.60 euros. A 5 kg bag costs 8.00 euros.",
          parts: [
            { label: "a", prompt: "Work out the cost per kilogram of each bag, in euros.", marks: 2 },
            { label: "b", prompt: "State which bag is the better buy and justify your answer.", marks: 1 },
            { label: "c", prompt: "Work out how much the 5 kg bag saves compared with buying the same mass in 2 kg bags, in euros.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost per kg of 2 kg bag", answer: 1.8, unit: "euros" },
              { label: "(a) Cost per kg of 5 kg bag", answer: 1.6, unit: "euros" },
              { label: "(c) Saving", answer: 1, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit cost", statement: "Cost per kilogram $=$ total cost $\\div$ mass; the lower unit cost is the better buy." },
            ],
            steps: [
              { part: "a", reasoning: "Divide each cost by its mass.", working: "3.60\\div2=1.80,\\quad 8.00\\div5=1.60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both unit costs.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The 5 kg bag is cheaper per kilogram ($1.60<1.80$), so it is the better buy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two and a half 2 kg bags cost $2.5\\times3.60=9.00$ euros; the saving is $9.00-8.00=1.00$ euro.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.80 euros/kg and 1.60 euros/kg (b) the 5 kg bag (c) 1 euro saved",
            commonErrors: ["Choosing the cheaper bag in total price (the 2 kg bag).", "In (c) comparing 8.00 with 3.60 directly."],
            examinerNote: "In (c) accept 'about 1 euro' or the working $9.00-8.00$.",
          },
        },
      ],
    },
  ],
};
