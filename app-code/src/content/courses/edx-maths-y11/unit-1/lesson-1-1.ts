import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edm11-u1-lesson-1-1",
  code: "1-1",
  title: "Sequences",
  goal: "I CAN find the nth term of linear and quadratic sequences and use the formula for the sum of an arithmetic series.",
  standards: ["4MA1 3.1", "4MA1 3.2", "4MA1 3.3H"],
  vocabulary: [
    { term: "Term", definition: "One number in a sequence. The first term is $u_1$, the second term is $u_2$, and so on." },
    { term: "Common difference", definition: "The constant amount added to each term to get the next term of an arithmetic (linear) sequence." },
    { term: "nth term", definition: "A formula that gives any term of a sequence in terms of its position $n$." },
    { term: "Second difference", definition: "The difference between consecutive first differences. It is constant for a quadratic sequence." },
    { term: "Arithmetic series", definition: "The sum of the terms of an arithmetic sequence." },
    { term: "Quadratic sequence", definition: "A sequence whose nth term has the form $an^2+bn+c$ with $a\\ne 0$." },
  ],
  concepts: [
    {
      id: "edm11-u1-nth-term",
      title: "nth term of linear and quadratic sequences",
      skill: "Find the nth term of a linear sequence and of a simple quadratic sequence, and use it to find terms.",
      lesson: {
        sections: [
          {
            heading: "Linear sequences",
            body: "In a linear sequence the terms go up or down by the same amount each time, the common difference $d$. The nth term is $dn + c$, where $c$ is found by comparing $dn$ with the actual terms. For $5, 9, 13, 17$ the difference is $4$, so compare with $4n$: $4, 8, 12, 16$. Each term is $1$ more, so the nth term is $4n+1$.",
          },
          {
            heading: "Quadratic sequences",
            body: "If the first differences are not constant but the second differences are, the nth term is quadratic: $an^2+bn+c$. The second difference is always $2a$. Subtract $an^2$ from each term; the remaining numbers form a linear sequence $bn+c$ whose nth term you find as before.",
          },
          {
            heading: "Using the nth term",
            body: "Substitute a value of $n$ to find a term. To test whether a number is in the sequence, set the nth term equal to it and solve for $n$: the number is a term only if $n$ is a positive whole number.",
          },
        ],
        keyFormulas: [
          { name: "Linear sequence", statement: "$u_n = dn + c$, where $d$ is the common difference" },
          { name: "Quadratic sequence", statement: "$u_n = an^2+bn+c$, with second difference $2a$" },
        ],
        workedExample: {
          problem: "Find the nth term of the sequence $3, 9, 19, 33, \\ldots$",
          solution: "First differences: $6, 10, 14$. Second differences: $4, 4$, so $2a=4$ and $a=2$. Subtract $2n^2$ $(2, 8, 18, 32)$ from the terms: $1, 1, 1, 1$. So the nth term is $2n^2+1$. Check: $n=3$ gives $2(9)+1=19$.",
        },
      },
      questions: [
        {
          id: "edm11-u1-nth-term-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "Here are the first four terms of a sequence: $5, 9, 13, 17$. Which expression is the nth term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4n+1$" },
              { id: "b", text: "$4n+5$" },
              { id: "c", text: "$n+4$" },
              { id: "d", text: "$5n-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear nth term", statement: "The nth term is $dn+c$ where $d$ is the common difference." }],
            steps: [{ reasoning: "The common difference is 4, so compare with $4n$: $4, 8, 12, 16$. Each term is 1 more.", working: "4n+1", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $4n+1$",
            commonErrors: ["Using the first term as the constant, giving $4n+5$.", "Using the first term as the multiplier of $n$."],
            examinerNote: "Accept $1+4n$ (oe).",
          },
        },
        {
          id: "edm11-u1-nth-term-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "The first four terms of a sequence are $20, 17, 14, 11$.\n\nWork out the 40th term of the sequence.",
          response: { type: "numeric", parts: [{ label: "40th term", answer: -97 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear nth term", statement: "The nth term is $dn+c$; $d$ may be negative." }],
            steps: [
              { reasoning: "The terms decrease by 3 each time, so the coefficient of $n$ is $-3$.", working: "d=-3", marks: 1, markCode: "M" },
              { reasoning: "Compare $-3n$ $(-3, -6, -9, -12)$ with the terms: each is 23 more.", working: "u_n = 23 - 3n", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=40$.", working: "23 - 3(40) = 23 - 120 = -97", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-97$",
            commonErrors: ["Writing the nth term as $3n+23$ or $-3n-23$.", "Continuing the sequence by adding instead of subtracting."],
            examinerNote: "Award M1 A1 for a correct nth term (oe); final A1 for $-97$ cao.",
          },
        },
        {
          id: "edm11-u1-nth-term-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Here are the first four terms of a quadratic sequence: $3, 9, 19, 33$.\n\nWork out the 10th term of the sequence.",
          response: { type: "numeric", parts: [{ label: "10th term", answer: 201 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Second difference", statement: "For $an^2+bn+c$ the second difference is $2a$." },
            ],
            steps: [
              { reasoning: "Find the first differences, then the second differences.", working: "6, 10, 14 \\quad\\Rightarrow\\quad 4, 4", marks: 1, markCode: "M" },
              { reasoning: "The second difference is 4, so $2a=4$ and $a=2$. Subtract $2n^2$ $(2, 8, 18, 32)$ from the terms.", working: "3-2=1,\\; 9-8=1,\\; 19-18=1,\\; 33-32=1", marks: 1, markCode: "M" },
              { reasoning: "The remainder is constant at 1.", working: "u_n = 2n^2 + 1", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=10$.", working: "2(100)+1 = 201", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$201$",
            commonErrors: ["Taking the second difference as $a$ rather than $2a$, giving $4n^2$.", "Using $(2n)^2$ rather than $2n^2$ when substituting."],
          },
        },
        {
          id: "edm11-u1-nth-term-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "Here are the first five terms of a sequence: $5, 8, 13, 20, 29$.",
          parts: [
            { label: "a", prompt: "Write down the next term of the sequence.", marks: 1 },
            { label: "b", prompt: "Find an expression, in terms of $n$, for the nth term of the sequence.", marks: 3 },
            { label: "c", prompt: "Show that 104 is a term of the sequence.", marks: 2 },
            { label: "d", prompt: "Show that the difference between the $(n+1)$th term and the nth term is $2n+1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Second difference", statement: "A constant second difference of $2$ means the nth term contains $n^2$." },
              { kind: "principle", name: "Membership test", statement: "A number is a term if the nth term equals it for a positive integer $n$." },
            ],
            steps: [
              { part: "a", reasoning: "First differences are 3, 5, 7, 9, so the next difference is 11.", working: "29 + 11 = 40", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The second difference is 2, so the coefficient of $n^2$ is 1. Subtract $n^2$ $(1, 4, 9, 16, 25)$.", working: "5-1=4,\\; 8-4=4,\\; 13-9=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The remainders are all 4.", working: "n^2 + 4", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Set the nth term equal to 104.", working: "n^2 + 4 = 104 \\Rightarrow n^2 = 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$n=10$ is a positive whole number, so 104 is the 10th term.", working: "n = 10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write the $(n+1)$th term and subtract the nth term.", working: "\\left[(n+1)^2+4\\right] - \\left[n^2+4\\right]", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Expand and simplify.", working: "n^2+2n+1+4-n^2-4 = 2n+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40 (b) $n^2+4$ (c) $n=10$ (d) $(n+1)^2-n^2=2n+1$",
            commonErrors: ["Giving the nth term as $2n^2+4$ by using the second difference as the coefficient.", "Stating $n^2=100$ gives $n=\\pm10$ without choosing the positive value."],
            examinerNote: "In (b) award M1 for a correct method (oe), A2 for $n^2+4$.",
          },
        },
      ],
    },
    {
      id: "edm11-u1-arithmetic-series",
      title: "Arithmetic series",
      skill: "Use the formula for the sum of the first n terms of an arithmetic series.",
      lesson: {
        sections: [
          {
            heading: "Terms of an arithmetic sequence",
            body: "An arithmetic sequence has first term $a$ and common difference $d$. The nth term is $u_n = a + (n-1)d$. For $3, 7, 11, \\ldots$ we have $a=3$ and $d=4$, so the 10th term is $3 + 9 \\times 4 = 39$.",
          },
          {
            heading: "The sum of the first n terms",
            body: "Writing the sum forwards and backwards and adding shows that each pair of terms has the same total, giving $S_n = \\frac{n}{2}\\left[2a + (n-1)d\\right]$. If you know the last term $l$, then $S_n = \\frac{n}{2}(a + l)$.",
          },
          {
            heading: "Finding n",
            body: "Given a sum, substitute into the formula to form an equation in $n$. This is often a quadratic equation. Solve it and reject any solution that is negative or not a whole number.",
          },
        ],
        keyFormulas: [
          { name: "nth term", statement: "$u_n = a + (n-1)d$" },
          { name: "Sum of n terms", statement: "$S_n = \\frac{n}{2}\\left[2a + (n-1)d\\right] = \\frac{n}{2}(a+l)$" },
        ],
        workedExample: {
          problem: "Find the sum of the first 10 terms of $3 + 7 + 11 + \\ldots$",
          solution: "$a=3$, $d=4$, $n=10$. $S_{10} = \\frac{10}{2}\\left[2(3) + 9(4)\\right] = 5 \\times 42 = 210$.",
        },
      },
      questions: [
        {
          id: "edm11-u1-arithmetic-series-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "Work out the sum of the first 10 terms of the arithmetic series $3 + 7 + 11 + \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$210$" },
              { id: "b", text: "$420$" },
              { id: "c", text: "$195$" },
              { id: "d", text: "$105$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" }],
            steps: [
              { reasoning: "Substitute $a=3$, $d=4$, $n=10$ into the sum formula.", working: "S_{10}=\\frac{10}{2}[2(3)+9(4)]", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5 \\times 42 = 210", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $210$",
            commonErrors: ["Forgetting the factor $\\frac{n}{2}$ and giving $420$.", "Using the 10th term, 39, multiplied by 5, giving $195$."],
          },
        },
        {
          id: "edm11-u1-arithmetic-series-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "The first term of an arithmetic series is 7 and the common difference is 3.\n\nWork out the sum of the first 20 terms.",
          response: { type: "numeric", parts: [{ label: "$S_{20}$", answer: 710 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" }],
            steps: [
              { reasoning: "State the sum formula with the values substituted.", working: "S_{20}=\\frac{20}{2}[2(7)+19(3)]", marks: 1, markCode: "M" },
              { reasoning: "Evaluate inside the bracket: $14 + 57 = 71$.", working: "10 \\times 71", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "710", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$710$",
            commonErrors: ["Using $20d$ instead of $19d$ inside the bracket.", "Using $n$ instead of $n-1$ for the number of differences."],
          },
        },
        {
          id: "edm11-u1-arithmetic-series-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "The sum of the first $n$ terms of the arithmetic series $2 + 5 + 8 + \\ldots$ is 1365.\n\nWork out the value of $n$.",
          response: { type: "numeric", parts: [{ label: "$n$", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" },
              { kind: "principle", name: "Valid solutions", statement: "$n$ is a positive integer, so reject negative or fractional roots." },
            ],
            steps: [
              { reasoning: "Use $a=2$, $d=3$ and set the sum equal to 1365.", working: "\\frac{n}{2}[4+3(n-1)] = 1365", marks: 1, markCode: "M" },
              { reasoning: "Simplify to a quadratic equation in $n$.", working: "n(3n+1)=2730 \\;\\Rightarrow\\; 3n^2+n-2730=0", marks: 1, markCode: "M" },
              { reasoning: "Factorise (or use the formula).", working: "(n-30)(3n+91)=0", marks: 1, markCode: "M" },
              { reasoning: "Reject the negative solution $n=-\\frac{91}{3}$.", working: "n=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n = 30$",
            commonErrors: ["Not rejecting the negative root.", "Arithmetic slips when forming $3n^2+n-2730=0$."],
            examinerNote: "Accept the quadratic formula in place of factorising. Check: $S_{30}=15 \\times 91 = 1365$.",
          },
        },
        {
          id: "edm11-u1-arithmetic-series-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A theatre has rows of seats. The first row has 12 seats. Each row has 2 more seats than the row in front of it.",
          parts: [
            { label: "a", prompt: "Work out the number of seats in the 10th row.", marks: 2 },
            { label: "b", prompt: "Work out the total number of seats in the first 10 rows.", marks: 2 },
            { label: "c", prompt: "Show that the total number of seats in the first $n$ rows is $n(n+11)$.", marks: 2 },
            { label: "d", prompt: "The theatre has 390 seats altogether. Work out the number of rows in the theatre.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "nth term", statement: "$u_n=a+(n-1)d$" },
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" },
            ],
            steps: [
              { part: "a", reasoning: "Use $a=12$, $d=2$, $n=10$.", working: "12 + 9 \\times 2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "30", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $S_n=\\frac{n}{2}(a+l)$ with the first and tenth rows.", working: "\\frac{10}{2}(12+30)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "5 \\times 42 = 210", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $a=12$, $d=2$ into the sum formula.", working: "S_n = \\frac{n}{2}[24 + 2(n-1)]", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify the bracket to $2n+22$ and divide by 2.", working: "\\frac{n}{2}(2n+22) = n(n+11)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the total equal to 390.", working: "n(n+11)=390 \\;\\Rightarrow\\; n^2+11n-390=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Factorise.", working: "(n-15)(n+26)=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reject the negative solution.", working: "n=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 (b) 210 (c) $S_n=n(n+11)$ (d) 15 rows",
            commonErrors: ["Using $n$ rather than $n-1$ when finding the 10th term.", "Leaving $n=-26$ as a possible answer."],
            examinerNote: "In (c) a full simplification is needed for A1 (a 'show that' question).",
          },
        },
      ],
    },
  ],
};
