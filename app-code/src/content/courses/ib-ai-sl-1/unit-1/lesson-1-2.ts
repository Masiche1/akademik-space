import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "aisl-u1-lesson-1-2",
  code: "1-2",
  title: "Sequences in Context",
  goal: "I CAN model real situations with arithmetic and geometric sequences and series and use the formulas to answer questions.",
  standards: ["SL 1.2", "SL 1.3"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers $u_1, u_2, u_3, \\ldots$ following a rule." },
    { term: "Arithmetic sequence", definition: "A sequence with a constant common difference $d$, so $u_{n+1} - u_n = d$." },
    { term: "Geometric sequence", definition: "A sequence with a constant common ratio $r$, so $u_{n+1} = r\\,u_n$." },
    { term: "Series", definition: "The sum of the terms of a sequence, written $S_n = u_1 + u_2 + \\cdots + u_n$." },
    { term: "Sigma notation", definition: "$\\sum_{k=1}^{n} u_k$ means the sum of $u_k$ for $k$ from $1$ to $n$." },
    { term: "Common ratio", definition: "The constant $r = \\dfrac{u_{n+1}}{u_n}$ in a geometric sequence." },
  ],
  concepts: [
    {
      id: "aisl-u1-arithmetic",
      title: "Arithmetic sequences and series in context",
      skill: "Use $u_n$ and $S_n$ for arithmetic sequences to answer questions about real situations, including sigma notation.",
      lesson: {
        sections: [
          {
            heading: "Recognizing arithmetic models",
            body: "When a quantity changes by the same fixed amount each step, such as a weekly saving that rises by $\\$15$ each week or seats that increase by 2 per row, the sequence is arithmetic. The first term is $u_1$ and the common difference is $d$. The $n$th term is $u_n = u_1 + (n-1)d$.",
          },
          {
            heading: "Sums of arithmetic series",
            body: "The sum of the first $n$ terms is $S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$, or $S_n = \\frac{n}{2}(u_1 + u_n)$. In sigma notation $S_n = \\sum_{k=1}^{n} u_k$. Your GDC can also sum a sequence or solve $S_n = $ a target for $n$ using a table or the equation solver.",
          },
          {
            heading: "Interpreting answers",
            body: "The number of terms $n$ must be a positive integer. If solving gives a non-integer, decide in context whether to round up (first time a target is exceeded) or down. Always state the answer with units and the meaning of $n$.",
          },
        ],
        keyFormulas: [
          { name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
          { name: "Sum of $n$ terms", statement: "$S_n = \\dfrac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
        ],
        workedExample: {
          problem: "An arithmetic sequence has $u_1 = 5$ and $d = 3$. Find $S_{20}$.",
          solution: "$S_{20} = \\frac{20}{2}(2 \\times 5 + 19 \\times 3) = 10 \\times 67 = 670$.",
        },
      },
      questions: [
        {
          id: "aisl-u1-arithmetic-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An arithmetic sequence has first term $7$ and common difference $4$. Find the 10th term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$43$" },
              { id: "b", text: "$47$" },
              { id: "c", text: "$40$" },
              { id: "d", text: "$39$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
            ],
            steps: [
              { reasoning: "Substitute $u_1 = 7$, $d = 4$, $n = 10$.", working: "u_{10} = 7 + (10-1)\\times 4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "7 + 36 = 43", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $43$",
            commonErrors: ["Using $n \\times d$ instead of $(n-1)d$, giving $47$.", "Using $(n-2)d$, giving $39$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An arithmetic series has first term $5$ and common difference $3$. Find the sum of the first $20$ terms.",
          response: { type: "numeric", parts: [{ label: "$S_{20}$", answer: 670 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { reasoning: "Substitute into the sum formula.", working: "S_{20} = \\frac{20}{2}\\left(2(5) + 19(3)\\right)", marks: 1, markCode: "M" },
              { reasoning: "Simplify the bracket.", working: "10 \\times (10 + 57) = 10 \\times 67", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "670", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$S_{20} = 670$",
            commonErrors: ["Using $u_{20}$ instead of the sum.", "Using $n$ instead of $n-1$ in the bracket."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A theatre has 18 seats in the first row. Each following row has 2 more seats than the row before. The theatre has 740 seats in total. Find the number of rows in the theatre.",
          response: { type: "numeric", parts: [{ label: "Number of rows", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { reasoning: "The seats per row form an arithmetic sequence with $u_1 = 18$, $d = 2$. Set the sum equal to $740$.", working: "\\frac{n}{2}\\left(36 + 2(n-1)\\right) = 740", marks: 1, markCode: "M" },
              { reasoning: "Simplify to a quadratic equation.", working: "n(n + 17) = 740 \\Rightarrow n^2 + 17n - 740 = 0", marks: 1, markCode: "A" },
              { reasoning: "Solve with the GDC.", working: "n = 20 \\text{ or } n = -37", marks: 1, markCode: "M" },
              { reasoning: "A number of rows must be positive, so reject $-37$.", working: "n = 20", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$20$ rows",
            commonErrors: ["Failing to reject the negative root.", "Using $u_n = 740$ instead of $S_n = 740$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Anna starts a savings plan. In month 1 she saves $\\$50$. Each month after that she saves $\\$15$ more than the previous month.",
          parts: [
            { label: "a", prompt: "Find the amount, in dollars, that Anna saves in month 12.", marks: 2 },
            { label: "b", prompt: "Find the total amount that Anna saves in the first 12 months.", marks: 2 },
            { label: "c", prompt: "Anna wants her total savings to exceed $\\$5000$. Find the least number of months that she needs.", marks: 3 },
            { label: "d", prompt: "Write down the total saved in the first 12 months using sigma notation, in the form $\\sum_{k=1}^{12}(ak + b)$, and state $a$ and $b$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { part: "a", reasoning: "Use the $n$th term formula with $u_1 = 50$, $d = 15$.", working: "u_{12} = 50 + 11(15)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "u_{12} = 215", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the sum formula with $n = 12$.", working: "S_{12} = \\frac{12}{2}(2(50) + 11(15))", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "6 \\times 265 = 1590", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set up the inequality $S_n > 5000$.", working: "\\frac{n}{2}(100 + 15(n-1)) > 5000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve with the GDC (table or solver): $S_{23} = 4945$ and $S_{24} = 5340$.", working: "S_{23} = 4945 < 5000,\\quad S_{24} = 5340 > 5000", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The first whole month with total above $5000$ is month 24.", working: "n = 24", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Month $k$ savings are $50 + 15(k-1) = 15k + 35$.", working: "\\sum_{k=1}^{12}(15k + 35),\\; a = 15,\\; b = 35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\$215$. (b) $\\$1590$. (c) $24$ months. (d) $\\sum_{k=1}^{12}(15k+35)$, $a = 15$, $b = 35$.",
            commonErrors: ["Using $12 \\times 15$ for the 11 increases.", "Giving $n = 23.1$ without rounding up to a whole month."],
            examinerNote: "Accept any correct method for (c), including a table on the GDC. FT from part (a) is possible in (d) only if $d$ is used consistently.",
          },
        },
        {
          id: "aisl-u1-arithmetic-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An arithmetic sequence has first term $4$ and common difference $5$. Find the 8th term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$39$" },
              { id: "b", text: "$44$" },
              { id: "c", text: "$34$" },
              { id: "d", text: "$24$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
            ],
            steps: [
              { reasoning: "Substitute $u_1 = 4$, $d = 5$ and $n = 8$.", working: "u_8 = 4 + (8-1)\\times 5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4 + 35 = 39", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $39$",
            commonErrors: ["Using $nd$ instead of $(n-1)d$, giving $44$.", "Using $(n-2)d$, giving $34$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An arithmetic sequence has common difference $4$ and 5th term $19$. Find the first term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$23$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
            ],
            steps: [
              { reasoning: "Substitute $u_5 = 19$, $d = 4$ and solve for $u_1$.", working: "19 = u_1 + 4(5-1)", marks: 1, markCode: "M" },
              { reasoning: "Solve for $u_1$.", working: "u_1 = 19 - 16 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Using $19 - 4 = 15$ by subtracting only one difference.", "Adding 16 to 19, giving $35$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An arithmetic series has first term $2$ and common difference $7$. Find the sum of the first 15 terms.",
          response: { type: "numeric", parts: [{ label: "$S_{15}$", answer: 765 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { reasoning: "Substitute into the sum formula.", working: "S_{15} = \\frac{15}{2}\\left(2(2) + 14(7)\\right)", marks: 1, markCode: "M" },
              { reasoning: "Simplify the bracket and evaluate.", working: "7.5 \\times (4 + 98) = 7.5 \\times 102 = 765", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$S_{15} = 765$",
            commonErrors: ["Using $n$ instead of $n-1$ in the bracket."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In an arithmetic sequence, $u_3 = 11$ and $u_7 = 27$. Find $u_{20}$.",
          response: { type: "numeric", parts: [{ label: "$u_{20}$", answer: 79 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
            ],
            steps: [
              { reasoning: "The difference $u_7 - u_3$ equals $4d$.", working: "4d = 27 - 11 = 16 \\Rightarrow d = 4", marks: 1, markCode: "M" },
              { reasoning: "Use $u_3 = u_1 + 2d$ to find the first term.", working: "11 = u_1 + 8 \\Rightarrow u_1 = 3", marks: 1, markCode: "M" },
              { reasoning: "Find the 20th term.", working: "u_{20} = 3 + 19(4) = 79", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_{20} = 79$",
            commonErrors: ["Using $d = 16$ directly instead of dividing by 4.", "Using $u_7$ as the first term when finding $u_{20}$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The first four terms of an arithmetic sequence are $3$, $7$, $11$, $15$. What is the next term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$19$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$21$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arithmetic sequence", statement: "The common difference $d$ is constant." },
            ],
            steps: [
              { reasoning: "Find the common difference.", working: "d = 7 - 3 = 4", marks: 1, markCode: "M" },
              { reasoning: "Add $d$ to the last term.", working: "15 + 4 = 19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $19$",
            commonErrors: ["Adding 3 instead of 4, giving 18."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A theatre has $12$ seats in the front row. Each row behind has one more seat than the row in front. The theatre has $105$ seats in total. Find the number of rows in the theatre.",
          response: { type: "numeric", parts: [{ label: "Number of rows", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { reasoning: "The seats per row form an arithmetic sequence with $u_1 = 12$, $d = 1$. Set the sum equal to $105$.", working: "\\frac{n}{2}\\left(24 + (n-1)\\right) = 105", marks: 1, markCode: "M" },
              { reasoning: "Simplify to a quadratic equation.", working: "n(n + 23) = 210 \\Rightarrow n^{2} + 23n - 210 = 0", marks: 1, markCode: "A" },
              { reasoning: "Solve and select the positive root.", working: "n = 7 \\text{ or } n = -30 \\Rightarrow n = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ rows",
            commonErrors: ["Failing to reject the negative root.", "Using $u_n = 105$ instead of $S_n = 105$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Lena rents an apartment. In year 1 the annual rent is $\\$600$. The rent increases by $\\$40$ each year.",
          parts: [
            { label: "a", prompt: "Find the annual rent in year 10.", marks: 2 },
            { label: "b", prompt: "Find the total amount Lena pays in rent over the first 10 years.", marks: 2 },
            { label: "c", prompt: "Find the first year in which the annual rent exceeds $\\$1000$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { part: "a", reasoning: "Use the $n$th term formula with $u_1 = 600$ and $d = 40$.", working: "u_{10} = 600 + 9(40)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "u_{10} = 960", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the sum formula with $n = 10$.", working: "S_{10} = \\frac{10}{2}\\left(2(600) + 9(40)\\right)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "5 \\times 1560 = 7800", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set up the inequality $u_n > 1000$.", working: "600 + 40(n-1) > 1000 \\Rightarrow n > 11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The first whole year satisfying this is year 12; check $u_{12} = 600 + 11(40) = 1040$.", working: "n = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$960$. (b) $\\$7800$. (c) Year $12$.",
            commonErrors: ["Using $n = 10$ differences in part (a), giving $1000$.", "Answering $n = 11$ without checking that $u_{11} = 1000$ is not greater than $1000$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An arithmetic series has first term $5$ and common difference $3$. Find the sum of the first 25 terms.",
          response: { type: "numeric", parts: [{ label: "$S_{25}$", answer: 1025 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { reasoning: "Substitute into the sum formula.", working: "S_{25} = \\frac{25}{2}\\left(2(5) + 24(3)\\right)", marks: 1, markCode: "M" },
              { reasoning: "Simplify and evaluate.", working: "12.5 \\times (10 + 72) = 12.5 \\times 82 = 1025", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$S_{25} = 1025$",
            commonErrors: ["Using $25 \\times 3$ inside the bracket instead of $24 \\times 3$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\sum_{k=1}^{10}(3k - 2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$145$" },
              { id: "b", text: "$290$" },
              { id: "c", text: "$155$" },
              { id: "d", text: "$300$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic series", statement: "The terms form an arithmetic sequence with $u_1 = 1$ and $d = 3$." },
            ],
            steps: [
              { reasoning: "Identify the first term and common difference of the sequence.", working: "u_1 = 3(1) - 2 = 1,\\quad d = 3", marks: 1, markCode: "M" },
              { reasoning: "Apply the sum formula with $n = 10$.", working: "S_{10} = \\frac{10}{2}\\left(2(1) + 9(3)\\right) = 5 \\times 29 = 145", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $145$",
            commonErrors: ["Taking $u_1 = 3(0) - 2 = -2$ by starting the index at 0.", "Using $d = 1$ by treating $k$ as the difference."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The seats in a theatre are arranged in rows. The front row has $12$ seats and each row behind has $4$ more seats than the row in front. The theatre has $1000$ seats in total.",
          parts: [
            { label: "a", prompt: "Find the number of rows in the theatre.", marks: 3 },
            { label: "b", prompt: "Find the number of seats in the last row.", marks: 1 },
            { label: "c", prompt: "Find the total number of seats in the first 15 rows.", marks: 2 },
            { label: "d", prompt: "A second theatre has the same row pattern but is larger. Find the least number of rows needed for its total number of seats to exceed $2000$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { part: "a", reasoning: "Set up the equation $S_n = 1000$ with $u_1 = 12$ and $d = 4$.", working: "\\frac{n}{2}\\left(24 + 4(n-1)\\right) = 1000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify to a quadratic equation.", working: "n(n + 10) = 500 \\Rightarrow n^{2} + 10n - 500 = 0", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Solve and select the positive root.", working: "n = 20 \\text{ or } n = -30 \\Rightarrow n = 20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find the 20th term.", working: "u_{20} = 12 + 19(4) = 88", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply the sum formula with $n = 15$.", working: "S_{15} = \\frac{15}{2}\\left(24 + 14(4)\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "7.5 \\times 80 = 600", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Test values either side of the solution to $S_n > 2000$.", working: "S_{29} = 1972 < 2000,\\quad S_{30} = 2100 > 2000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the least number of rows.", working: "n = 30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20$ rows. (b) $88$ seats. (c) $600$ seats. (d) $30$ rows.",
            commonErrors: ["In (d), solving $S_n = 2000$ and rounding $n$ down instead of up.", "Using $u_{20}$ instead of $S_{20}$ in part (a)."],
            examinerNote: "In (d) accept any correct table or solver method on the GDC.",
          },
        },
        {
          id: "aisl-u1-arithmetic-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In an arithmetic sequence, $u_2 = 7$ and $u_5 = 16$. Find $u_{10}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$31$" },
              { id: "b", text: "$28$" },
              { id: "c", text: "$34$" },
              { id: "d", text: "$37$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
            ],
            steps: [
              { reasoning: "The difference $u_5 - u_2$ equals $3d$.", working: "3d = 16 - 7 = 9 \\Rightarrow d = 3", marks: 1, markCode: "M" },
              { reasoning: "Find $u_1$ and hence $u_{10}$: $u_1 = 7 - 3 = 4$, so $u_{10} = 4 + 9(3)$.", working: "u_{10} = 31", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $31$",
            commonErrors: ["Using $(n-2)d$ in the 10th term formula, giving $28$.", "Using $n$ instead of $n-1$, giving $34$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the sum of the first 30 terms of the arithmetic series $3, 5, 7, 9, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$960$" },
              { id: "b", text: "$930$" },
              { id: "c", text: "$990$" },
              { id: "d", text: "$1920$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { reasoning: "Identify $u_1 = 3$, $d = 2$ and substitute into the sum formula.", working: "S_{30} = \\frac{30}{2}\\left(2(3) + 29(2)\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15 \\times 64 = 960", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $960$",
            commonErrors: ["Using $30 \\times 2$ inside the bracket instead of $29 \\times 2$, giving $990$."],
          },
        },
        {
          id: "aisl-u1-arithmetic-q17",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "Omar's weekly pay is $\\$380$ in week 1. Each week his pay increases by $\\$12$.",
          parts: [
            { label: "a", prompt: "Find Omar's pay in week 20.", marks: 2 },
            { label: "b", prompt: "Find the total amount Omar earns in the first 20 weeks.", marks: 2 },
            { label: "c", prompt: "Find the first week in which Omar's pay exceeds $\\$700$.", marks: 3 },
            { label: "d", prompt: "Write the total pay for the first 20 weeks using sigma notation in the form $\\sum_{k=1}^{20}(ak + b)$, and state the values of $a$ and $b$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 + (n-1)d$" },
              { kind: "formula", name: "Sum of an arithmetic series", statement: "$S_n = \\frac{n}{2}\\left(2u_1 + (n-1)d\\right)$" },
            ],
            steps: [
              { part: "a", reasoning: "Use the $n$th term formula with $u_1 = 380$ and $d = 12$.", working: "u_{20} = 380 + 19(12)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "u_{20} = 608", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the sum formula with $n = 20$.", working: "S_{20} = \\frac{20}{2}\\left(2(380) + 19(12)\\right)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "10 \\times 988 = 9880", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set up the inequality $u_n > 700$.", working: "380 + 12(n-1) > 700 \\Rightarrow n > 27.67", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve and check the neighbouring weeks: week 27 pays $380 + 26(12) = 692$ and week 28 pays $380 + 27(12) = 704$.", working: "n = 28", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the first week satisfying the condition.", working: "week 28", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Week $k$ pay is $380 + 12(k-1) = 12k + 368$.", working: "\\sum_{k=1}^{20}(12k + 368),\\quad a = 12,\\quad b = 368", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\$608$. (b) $\\$9880$. (c) Week $28$. (d) $\\sum_{k=1}^{20}(12k+368)$, $a = 12$, $b = 368$.",
            commonErrors: ["Using $20 \\times 12$ increases in part (a) instead of 19.", "Rounding $27.67$ down to week 27 without checking the pay."],
          },
        },
      ],
    },
    {
      id: "aisl-u1-geometric",
      title: "Geometric sequences and series in context",
      skill: "Use $u_n = u_1 r^{n-1}$ and $S_n$ for geometric sequences to model growth and decay, including solving for $n$.",
      lesson: {
        sections: [
          {
            heading: "Recognizing geometric models",
            body: "When a quantity is multiplied by the same factor each step, as with a population growing $3\\%$ per year ($r = 1.03$) or a ball rebounding to $70\\%$ of its previous height ($r = 0.7$), the sequence is geometric. The $n$th term is $u_n = u_1 r^{n-1}$.",
          },
          {
            heading: "Sums of geometric series",
            body: "The sum of the first $n$ terms is $S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$ for $r \\ne 1$. This is convenient for $r > 1$; for $r < 1$ the equivalent form $\\dfrac{u_1(1 - r^n)}{1 - r}$ avoids negatives. Your GDC can compute these directly.",
          },
          {
            heading: "Solving for $n$",
            body: "To find when a geometric quantity reaches a target, set $u_1 r^{n-1}$ equal to it and solve using logarithms, or use a GDC table. Because $n$ must be an integer, check the values either side of the solution to decide the first term that meets the condition.",
          },
        ],
        keyFormulas: [
          { name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$" },
          { name: "Sum of $n$ terms", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1},\\; r \\ne 1$" },
        ],
        workedExample: {
          problem: "A geometric sequence has $u_1 = 5$ and $r = 3$. Find $S_8$.",
          solution: "$S_8 = \\frac{5(3^8 - 1)}{3 - 1} = \\frac{5 \\times 6560}{2} = 16400$.",
        },
      },
      questions: [
        {
          id: "aisl-u1-geometric-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A geometric sequence has first term $3$ and common ratio $2$. Find the 6th term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$96$" },
              { id: "b", text: "$192$" },
              { id: "c", text: "$36$" },
              { id: "d", text: "$18$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$" },
            ],
            steps: [
              { reasoning: "Substitute $u_1 = 3$, $r = 2$, $n = 6$.", working: "u_6 = 3 \\times 2^{5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3 \\times 32 = 96", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $96$",
            commonErrors: ["Using $2^6$ instead of $2^5$, giving $192$.", "Using $3 + 5 \\times 2$ style arithmetic reasoning, giving $13$ or $36$."],
          },
        },
        {
          id: "aisl-u1-geometric-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A geometric series has first term $5$ and common ratio $3$. Find the sum of the first $8$ terms.",
          response: { type: "numeric", parts: [{ label: "$S_8$", answer: 16400 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$" },
            ],
            steps: [
              { reasoning: "Substitute into the sum formula.", working: "S_8 = \\frac{5(3^8 - 1)}{3 - 1}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $3^8 = 6561$.", working: "\\frac{5 \\times 6560}{2}", marks: 1, markCode: "A" },
              { reasoning: "Simplify.", working: "16400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$S_8 = 16\\,400$",
            commonErrors: ["Using $3^7$ for the power.", "Omitting the factor $u_1 = 5$."],
          },
        },
        {
          id: "aisl-u1-geometric-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A ball is dropped from a height of $2$ m. After each bounce it rises to $70\\%$ of the height of the previous bounce. Find the number of the first bounce for which the height reached is less than $0.1$ m.",
          response: { type: "numeric", parts: [{ label: "Bounce number", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "The height after bounce $n$ is $2(0.7)^n$." },
            ],
            steps: [
              { reasoning: "The heights are geometric with ratio $0.7$; the height after bounce $n$ is $2(0.7)^n$. Form the inequality.", working: "2(0.7)^n < 0.1", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2 and solve using logarithms or a GDC table.", working: "0.7^n < 0.05 \\Rightarrow n > \\frac{\\ln 0.05}{\\ln 0.7} = 8.40", marks: 1, markCode: "A" },
              { reasoning: "Check the neighbouring integers.", working: "2(0.7)^8 = 0.115 > 0.1,\\quad 2(0.7)^9 = 0.0807 < 0.1", marks: 1, markCode: "M" },
              { reasoning: "The first bounce meeting the condition is the 9th.", working: "n = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bounce $9$",
            commonErrors: ["Not reversing the inequality when dividing by $\\ln 0.7 < 0$.", "Rounding $8.40$ down to $8$."],
          },
        },
        {
          id: "aisl-u1-geometric-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The population of a town is $25\\,000$ at the start of 2025. The population increases by $3\\%$ each year.",
          parts: [
            { label: "a", prompt: "Find the population at the start of 2035. Give your answer to the nearest whole number.", marks: 2 },
            { label: "b", prompt: "Find the first year in which the population at the start of the year exceeds $40\\,000$.", marks: 3 },
            { label: "c", prompt: "Find the sum of the populations at the start of the years 2026 to 2030 inclusive. Give your answer to the nearest whole number.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$, here with $r = 1.03$." },
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$" },
            ],
            steps: [
              { part: "a", reasoning: "2035 is 10 years after 2025, so multiply by $1.03^{10}$.", working: "25000 \\times 1.03^{10}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "33\\,598", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set up the inequality for $n$ years after 2025.", working: "25000 \\times 1.03^n > 40000 \\Rightarrow 1.03^n > 1.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve with logarithms or table: $n > \\frac{\\ln 1.6}{\\ln 1.03} = 15.9$. Check $1.03^{15} = 1.558$ and $1.03^{16} = 1.605$.", working: "n = 16", marks: 1, markCode: "A" },
              { part: "b", reasoning: "16 years after 2025 is 2041.", working: "2041", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The populations 2026 to 2030 form a geometric series with $u_1 = 25000 \\times 1.03 = 25750$, $r = 1.03$ and 5 terms.", working: "S_5 = \\frac{25750(1.03^5 - 1)}{1.03 - 1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $1.03^5 = 1.159274\\ldots$.", working: "\\frac{25750 \\times 0.159274}{0.03}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate and round.", working: "136\\,710", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $33\\,598$. (b) $2041$. (c) $136\\,710$.",
            commonErrors: ["Using $1.3$ instead of $1.03$ for a $3\\%$ increase.", "In (c), using $u_1 = 25000$ rather than the 2026 value."],
            examinerNote: "In (b) accept $n = 16$ if the year 2041 is clearly identified.",
          },
        },
        {
          id: "aisl-u1-geometric-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A geometric sequence has first term $4$ and common ratio $5$. Find the 4th term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$500$" },
              { id: "b", text: "$125$" },
              { id: "c", text: "$100$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$" },
            ],
            steps: [
              { reasoning: "Substitute $u_1 = 4$, $r = 5$ and $n = 4$.", working: "u_4 = 4 \\times 5^{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4 \\times 125 = 500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $500$",
            commonErrors: ["Using $5^{4}$ instead of $5^{3}$, giving $2500$.", "Adding instead of multiplying, giving $19$."],
          },
        },
        {
          id: "aisl-u1-geometric-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A geometric sequence has first term $10$ and 4th term $80$. Find the common ratio.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$" },
            ],
            steps: [
              { reasoning: "Substitute into $u_4 = u_1 r^{3}$.", working: "80 = 10r^{3} \\Rightarrow r^{3} = 8", marks: 1, markCode: "M" },
              { reasoning: "Take the cube root.", working: "r = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Dividing $80$ by $10$ once to get $r = 8$ instead of $r^{3} = 8$."],
          },
        },
        {
          id: "aisl-u1-geometric-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A geometric series has first term $2$ and common ratio $4$. Find the sum of the first 6 terms.",
          response: { type: "numeric", parts: [{ label: "$S_6$", answer: 2730 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$" },
            ],
            steps: [
              { reasoning: "Substitute into the sum formula.", working: "S_6 = \\frac{2(4^{6} - 1)}{4 - 1}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $4^{6} = 4096$.", working: "\\frac{2 \\times 4095}{3} = 2730", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$S_6 = 2730$",
            commonErrors: ["Using $4^{5}$ instead of $4^{6}$ for the power.", "Using $r - 1 = 3$ as a multiplier instead of a divisor."],
          },
        },
        {
          id: "aisl-u1-geometric-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A geometric series has common ratio $2$ and the sum of the first 4 terms is $120$. Find the 5th term.",
          response: { type: "numeric", parts: [{ label: "$u_5$", answer: 128 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$" },
            ],
            steps: [
              { reasoning: "Substitute into the sum formula to find $u_1$.", working: "120 = \\frac{u_1(2^{4} - 1)}{2 - 1} = 15u_1", marks: 1, markCode: "M" },
              { reasoning: "Solve for $u_1$.", working: "u_1 = 8", marks: 1, markCode: "A" },
              { reasoning: "Find the 5th term.", working: "u_5 = 8 \\times 2^{4} = 128", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_5 = 128$",
            commonErrors: ["Using $S_4$ as $u_4$ when finding the 5th term.", "Forgetting that $r - 1 = 1$ here, so $S_4 = 15u_1$."],
          },
        },
        {
          id: "aisl-u1-geometric-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The first four terms of a geometric sequence are $5$, $15$, $45$, $135$. What is the next term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$405$" },
              { id: "b", text: "$180$" },
              { id: "c", text: "$540$" },
              { id: "d", text: "$225$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geometric sequence", statement: "The common ratio $r = \\frac{u_{n+1}}{u_n}$ is constant." },
            ],
            steps: [
              { reasoning: "Find the common ratio.", working: "r = \\frac{15}{5} = 3", marks: 1, markCode: "M" },
              { reasoning: "Multiply the last term by $r$.", working: "135 \\times 3 = 405", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $405$",
            commonErrors: ["Adding 90 instead of multiplying by 3, giving 225."],
          },
        },
        {
          id: "aisl-u1-geometric-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a geometric sequence, $u_2 = 18$ and $u_4 = 162$, where each term is positive. Find $u_8$.",
          response: { type: "numeric", parts: [{ label: "$u_8$", answer: 13122 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$" },
            ],
            steps: [
              { reasoning: "The ratio $u_4/u_2$ equals $r^{2}$; take the positive root since terms are positive.", working: "r^{2} = \\frac{162}{18} = 9 \\Rightarrow r = 3", marks: 1, markCode: "M" },
              { reasoning: "Use $u_2 = u_1 r$ to find the first term.", working: "18 = u_1 \\times 3 \\Rightarrow u_1 = 6", marks: 1, markCode: "M" },
              { reasoning: "Find the 8th term.", working: "u_8 = 6 \\times 3^{7} = 13\\,122", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_8 = 13\\,122$",
            commonErrors: ["Taking $r = -3$ despite the positive-term condition.", "Using $u_2$ as $u_1$ when finding $u_8$."],
          },
        },
        {
          id: "aisl-u1-geometric-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A bacterial culture initially contains $200$ bacteria and the population is multiplied by $1.4$ every hour.",
          parts: [
            { label: "a", prompt: "Find the population after 6 hours. Give your answer to the nearest whole number.", marks: 2 },
            { label: "b", prompt: "Find the number of the first hour at the end of which the population exceeds $10\\,000$.", marks: 2 },
            { label: "c", prompt: "Find the total number of bacteria counted at the end of each of the first 5 hours, giving your answer to the nearest whole number.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$, here with $u_1 = 200$ and $r = 1.4$." },
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$" },
            ],
            steps: [
              { part: "a", reasoning: "The population after $n$ hours is $200(1.4)^{n}$; substitute $n = 6$.", working: "200 \\times 1.4^{6} = 200 \\times 7.5295", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate and round.", working: "1506", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Form the inequality $200(1.4)^{n} > 10\\,000$ and solve with logarithms or a GDC table.", working: "1.4^{n} > 50 \\Rightarrow n > \\frac{\\ln 50}{\\ln 1.4} = 11.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check the neighbouring integers: $200(1.4)^{11} = 8099 < 10\\,000$ and $200(1.4)^{12} = 11\\,339 > 10\\,000$.", working: "n = 12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The hourly populations form a geometric series with first term $200 \\times 1.4 = 280$; apply the sum formula with 5 terms.", working: "S_5 = \\frac{280(1.4^{5} - 1)}{1.4 - 1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round.", working: "3061", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1506$. (b) Hour $12$. (c) $3061$.",
            commonErrors: ["In (c), using $u_1 = 200$ instead of the population after hour 1.", "Rounding $11.6$ down to hour 11 without checking."],
          },
        },
        {
          id: "aisl-u1-geometric-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A geometric sequence is defined by $u_n = 3 \\times 5^{\\,n-1}$. Find $u_4$.",
          response: { type: "numeric", parts: [{ label: "$u_4$", answer: 375 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$" },
            ],
            steps: [
              { reasoning: "Substitute $n = 4$ into the rule.", working: "u_4 = 3 \\times 5^{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3 \\times 125 = 375", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_4 = 375$",
            commonErrors: ["Using $5^{4}$ instead of $5^{3}$, giving $1875$."],
          },
        },
        {
          id: "aisl-u1-geometric-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the common ratio of the geometric sequence $2$, $6$, $18$, $54$, $\\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common ratio", statement: "$r = \\dfrac{u_{n+1}}{u_n}$." },
            ],
            steps: [
              { reasoning: "Divide a term by the previous term.", working: "r = \\frac{6}{2} = 3", marks: 1, markCode: "M" },
              { reasoning: "Verify with another pair of terms.", working: "\\frac{54}{18} = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Finding the common difference $4$ instead of the ratio."],
          },
        },
        {
          id: "aisl-u1-geometric-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A ball is dropped from a height of $1.5$ m. After each bounce it rises to $80\\%$ of the height of the previous bounce.",
          parts: [
            { label: "a", prompt: "Find the height reached after the 5th bounce. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the number of the first bounce for which the height reached is less than $0.05$ m.", marks: 3 },
            { label: "c", prompt: "Find the least number of bounces needed for the total of all the rebound heights to exceed $5$ m.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "The height after bounce $n$ is $1.5(0.8)^{n}$." },
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(1 - r^{n})}{1 - r}$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $n = 5$ into the height model.", working: "1.5 \\times 0.8^{5}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $0.8^{5} = 0.32768$.", working: "0.492 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Form the inequality $1.5(0.8)^{n} < 0.05$ and solve.", working: "0.8^{n} < \\frac{1}{30} \\Rightarrow n > \\frac{\\ln(1/30)}{\\ln 0.8} = 15.2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check the neighbouring integers: $1.5(0.8)^{15} = 0.0528 > 0.05$ and $1.5(0.8)^{16} = 0.0422 < 0.05$.", working: "n = 16", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the first bounce meeting the condition.", working: "bounce 16", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The rebound heights form a geometric series with first term $1.5 \\times 0.8 = 1.2$; the sum of $n$ terms is $6(1 - 0.8^{n})$. Form the inequality.", working: "6(1 - 0.8^{n}) > 5 \\Rightarrow 0.8^{n} < \\frac{1}{6}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve and check: $n > \\frac{\\ln(1/6)}{\\ln 0.8} = 8.03$; $S_8 = 4.99 < 5$ and $S_9 = 5.19 > 5$.", working: "n = 9", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the least number of bounces.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.492$ m. (b) Bounce $16$. (c) $9$ bounces.",
            commonErrors: ["In (c), using the height after each bounce rather than summing the rebound heights.", "Rounding $15.2$ down to bounce 15 without checking."],
          },
        },
        {
          id: "aisl-u1-geometric-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A geometric sequence is defined by $u_n = 7 \\times \\left(\\frac{1}{2}\\right)^{\\,n-1}$. Find $u_5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.4375$" },
              { id: "b", text: "$0.875$" },
              { id: "c", text: "$0.21875$" },
              { id: "d", text: "$3.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$" },
            ],
            steps: [
              { reasoning: "Substitute $n = 5$ into the rule.", working: "u_5 = 7 \\times \\left(\\frac{1}{2}\\right)^{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "7 \\times \\frac{1}{16} = 0.4375", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.4375$",
            commonErrors: ["Using $\\left(\\frac{1}{2}\\right)^{5}$ instead of $\\left(\\frac{1}{2}\\right)^{4}$, giving $0.21875$."],
          },
        },
        {
          id: "aisl-u1-geometric-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A geometric series has first term $3$ and common ratio $2$. Find the sum of the first 7 terms.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$381$" },
              { id: "b", text: "$189$" },
              { id: "c", text: "$254$" },
              { id: "d", text: "$382$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$" },
            ],
            steps: [
              { reasoning: "Substitute into the sum formula.", working: "S_7 = \\frac{3(2^{7} - 1)}{2 - 1}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $2^{7} = 128$.", working: "3 \\times 127 = 381", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $381$",
            commonErrors: ["Using $2^{6}$ instead of $2^{7}$, giving $189$.", "Using $r - 1 = 2$ as a divisor incorrectly."],
          },
        },
        {
          id: "aisl-u1-geometric-q17",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "The population of a fish farm is $1200$ at the start of 2025. The population increases by $2.5\\%$ each year.",
          parts: [
            { label: "a", prompt: "Find the population at the start of 2033. Give your answer to the nearest whole number.", marks: 2 },
            { label: "b", prompt: "Find the first year at the start of which the population exceeds $2000$.", marks: 3 },
            { label: "c", prompt: "Find the sum of the populations at the start of the years 2026 to 2030 inclusive. Give your answer to the nearest whole number.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$n$th term", statement: "$u_n = u_1 r^{n-1}$, here with $r = 1.025$." },
              { kind: "formula", name: "Sum of a geometric series", statement: "$S_n = \\dfrac{u_1(r^n - 1)}{r - 1}$" },
            ],
            steps: [
              { part: "a", reasoning: "2033 is 8 years after 2025, so multiply by $1.025^{8}$.", working: "1200 \\times 1.025^{8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "1462", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set up the inequality $1200(1.025)^{n} > 2000$ and solve.", working: "1.025^{n} > \\frac{5}{3} \\Rightarrow n > \\frac{\\ln(5/3)}{\\ln 1.025} = 20.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check the neighbouring integers: $1.025^{20} = 1.639$ giving $1966 < 2000$, and $1.025^{21} = 1.680$ giving $2016 > 2000$.", working: "n = 21", marks: 1, markCode: "A" },
              { part: "b", reasoning: "21 years after the start of 2025 is the start of 2046.", working: "2046", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The populations 2026 to 2030 form a geometric series with $u_1 = 1200 \\times 1.025 = 1230$, $r = 1.025$ and 5 terms.", working: "S_5 = \\frac{1230(1.025^{5} - 1)}{1.025 - 1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $1.025^{5} = 1.131408\\ldots$.", working: "\\frac{1230 \\times 0.131408}{0.025}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate and round.", working: "6465", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1462$. (b) $2046$. (c) $6465$.",
            commonErrors: ["Using $1.25$ instead of $1.025$ for a $2.5\\%$ increase.", "In (c), using $u_1 = 1200$ rather than the 2026 value."],
          },
        },
      ],
    },
  ],
};
