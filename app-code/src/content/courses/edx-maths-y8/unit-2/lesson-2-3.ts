import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edm8-u2-lesson-2-3",
  code: "2-3",
  title: "Sequences and Graphs",
  goal: "I CAN find terms and the nth term of linear sequences, and draw and use straight-line graphs.",
  standards: ["Y8 Algebra"],
  vocabulary: [
    { term: "Sequence", definition: "A list of numbers that follow a rule." },
    { term: "Term-to-term rule", definition: "A rule that tells you how to get from one term to the next, such as 'add 4'." },
    { term: "nth term", definition: "A formula that gives any term of a sequence in terms of its position $n$." },
    { term: "Coordinates", definition: "A pair of numbers $(x,y)$ that give the position of a point on a grid." },
    { term: "Gradient", definition: "A measure of how steep a line is: the change in $y$ divided by the change in $x$." },
    { term: "Intercept", definition: "The point where a line crosses an axis." },
  ],
  concepts: [
    {
      id: "edm8-u2-nth-term",
      title: "Term-to-term rules and the nth term",
      skill: "Continue sequences and find the nth term of a linear sequence.",
      lesson: {
        sections: [
          {
            heading: "Term-to-term rules",
            body: "Look at the difference between consecutive terms. The sequence $3,7,11,15$ goes up by 4 each time, so the next term is $15+4=19$.",
          },
          {
            heading: "The nth term of a linear sequence",
            body: "If the common difference is $d$, the nth term starts $dn$. Compare $dn$ with the actual terms and add or subtract a constant. For $5,8,11,14$: $d=3$, and $3n$ gives $3,6,9,12$, so we add 2: nth term $=3n+2$. To check whether a number is a term, set the nth term equal to it and see whether $n$ is a positive whole number.",
          },
        ],
        keyFormulas: [
          { name: "Linear nth term", statement: "$\\text{nth term}=dn+c$, where $d$ is the common difference" },
        ],
        workedExample: {
          problem: "Find the nth term of $5,8,11,14,\\ldots$",
          solution: "The common difference is 3, so start with $3n$. When $n=1$, $3n=3$ but the term is 5, so add 2. The nth term is $3n+2$.",
        },
      },
      questions: [
        {
          id: "edm8-u2-nth-term-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Here are the first four terms of a sequence: $3,\\;7,\\;11,\\;15$. What is the next term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$17$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$19$" },
              { id: "d", text: "$21$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common difference", statement: "In a linear sequence the difference between terms is constant." },
            ],
            steps: [
              { reasoning: "The terms increase by 4 each time.", working: "15+4=19", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $19$",
            commonErrors: ["Adding 2 or 3 instead of 4."],
          },
        },
        {
          id: "edm8-u2-nth-term-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find an expression, in terms of $n$, for the nth term of the sequence $5,\\;8,\\;11,\\;14,\\;\\ldots$",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$dn+c$ where $d$ is the common difference." },
            ],
            steps: [
              { reasoning: "The common difference is 3, so the nth term starts with $3n$.", working: "3n", marks: 1, markCode: "M" },
              { reasoning: "$3n$ gives $3,6,9,\\ldots$ which is 2 less than the terms, so add 2.", working: "3n+2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3n+2$",
            commonErrors: ["Writing $n+3$ (the term-to-term rule).", "Writing $3n-2$."],
            examinerNote: "Award M1 for $3n$ seen. A1 for $3n+2$ (oe).",
          },
        },
        {
          id: "edm8-u2-nth-term-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The nth term of a sequence is $6n-4$. Which term of the sequence is equal to 80?",
          response: { type: "numeric", parts: [{ label: "Term number n", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving for n", statement: "Set the nth term equal to the value and solve for $n$." },
            ],
            steps: [
              { reasoning: "Set the nth term equal to 80.", working: "6n-4=80", marks: 1, markCode: "M" },
              { reasoning: "Add 4 to both sides.", working: "6n=84", marks: 1, markCode: "M" },
              { reasoning: "Divide by 6. Check: $6\\times14-4=80$.", working: "n=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The 14th term",
            commonErrors: ["Subtracting 4 instead of adding it.", "Giving the value 80 instead of the position."],
          },
        },
        {
          id: "edm8-u2-nth-term-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Here are the first four terms of a sequence: $7,\\;11,\\;15,\\;19,\\;\\ldots$",
          parts: [
            { label: "a", prompt: "Write down the next term of the sequence.", marks: 1 },
            { label: "b", prompt: "Find an expression, in terms of $n$, for the nth term.", marks: 2 },
            { label: "c", prompt: "Work out the 50th term.", marks: 2 },
            { label: "d", prompt: "Is 150 a term of this sequence? You must show your working.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Next term", answer: 23 },
              { label: "(c) 50th term", answer: 203 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$dn+c$ where $d$ is the common difference." },
              { kind: "principle", name: "Testing for a term", statement: "A number is a term only if the position $n$ is a positive whole number." },
            ],
            steps: [
              { part: "a", reasoning: "Add the common difference 4 to the last term.", working: "19+4=23", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The common difference is 4, so start with $4n$.", working: "4n", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$4n$ gives $4,8,12,\\ldots$ which is 3 less than the terms, so add 3.", working: "4n+3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $n=50$.", working: "4\\times50+3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "203", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the nth term equal to 150.", working: "4n+3=150", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $n$.", working: "4n=147\\;\\Rightarrow\\;n=36.75", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$n$ is not a whole number, so 150 is not a term. (All terms are odd, and 150 is even.)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $23$ (b) $4n+3$ (c) $203$ (d) No, because $n=36.75$ is not a whole number.",
            commonErrors: ["Writing $4n-3$.", "Using $n=50$ in the term-to-term rule (adding 4 fifty times)."],
            examinerNote: "(c) ft from an incorrect linear nth term in (b). (d) Accept the odd/even argument for the R mark (oe).",
          },
        },
      ],
    },
    {
      id: "edm8-u2-straight-line-graphs",
      title: "Coordinates and straight-line graphs",
      skill: "Complete tables of values and use straight-line graphs.",
      lesson: {
        sections: [
          {
            heading: "Tables of values",
            body: "To draw $y=3x-2$, substitute values of $x$ into the equation to find $y$. For $x=-1$: $y=3(-1)-2=-5$. Plot the points $(x,y)$ and join them with a ruler.",
          },
          {
            heading: "Gradient, intercept and midpoints",
            body: "For $y=mx+c$, the gradient is $m$ and the line crosses the $y$-axis at $(0,c)$. A point lies on the line if its coordinates satisfy the equation. The midpoint of $(x_1,y_1)$ and $(x_2,y_2)$ is $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$.",
          },
        ],
        keyFormulas: [
          { name: "Straight line", statement: "$y=mx+c$: gradient $m$, $y$-intercept $c$" },
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
        ],
        workedExample: {
          problem: "Does the point $(2,5)$ lie on the line $y=2x+1$?",
          solution: "When $x=2$, $y=2(2)+1=5$. This matches, so the point lies on the line.",
        },
      },
      questions: [
        {
          id: "edm8-u2-straight-line-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A point on the line $y=2x+1$ has $x=3$. What is the $y$ coordinate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "A point lies on a line if its coordinates satisfy the equation." },
            ],
            steps: [
              { reasoning: "Substitute $x=3$.", working: "y=2(3)+1=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $7$",
            commonErrors: ["Calculating $2+3+1=6$.", "Forgetting to add 1 (giving 6) or multiplying 3 by 3."],
          },
        },
        {
          id: "edm8-u2-straight-line-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The equation of a line is $y=3x-2$. Work out the value of $y$ when $x=-1$, when $x=0$ and when $x=2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "y when x = -1", answer: -5 },
              { label: "y when x = 0", answer: -2 },
              { label: "y when x = 2", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Table of values", statement: "Substitute each $x$ value into the equation." },
            ],
            steps: [
              { reasoning: "Substitute each value, using brackets for negatives.", working: "3(-1)-2=-5,\\quad 3(0)-2=-2", marks: 1, markCode: "M" },
              { reasoning: "Complete the final value.", working: "3(2)-2=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-5,\\;-2,\\;4$",
            commonErrors: ["Writing $3(-1)=3$ and getting $y=1$."],
            examinerNote: "M1 for at least two correct values. A1 for all three correct.",
          },
        },
        {
          id: "edm8-u2-straight-line-graphs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A is the point $(-2,3)$ and B is the point $(6,9)$. M is the midpoint of AB. Work out the coordinates of M.",
          response: {
            type: "numeric",
            parts: [
              { label: "x coordinate of M", answer: 2 },
              { label: "y coordinate of M", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Find the mean of the $x$ coordinates.", working: "\\frac{-2+6}{2}=2", marks: 1, markCode: "M" },
              { reasoning: "Find the mean of the $y$ coordinates.", working: "\\frac{3+9}{2}=6", marks: 1, markCode: "M" },
              { reasoning: "State the coordinates.", working: "(2,6)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,6)$",
            commonErrors: ["Subtracting the coordinates instead of averaging.", "Mishandling $-2+6$."],
          },
        },
        {
          id: "edm8-u2-straight-line-graphs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The straight line L has equation $y=2x-1$.",
          parts: [
            { label: "a", prompt: "Work out the value of $y$ when $x=-2$, when $x=0$ and when $x=3$.", marks: 2 },
            { label: "b", prompt: "Write down the $y$ coordinate of the point where L crosses the $y$-axis.", marks: 1 },
            { label: "c", prompt: "Write down the gradient of L.", marks: 1 },
            { label: "d", prompt: "Does the point $(4,8)$ lie on L? You must show your working.", marks: 2 },
            { label: "e", prompt: "The point $(k,9)$ lies on L. Work out the value of $k$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) y when x = -2", answer: -5 },
              { label: "(a) y when x = 0", answer: -1 },
              { label: "(a) y when x = 3", answer: 5 },
              { label: "(b) y-intercept", answer: -1 },
              { label: "(c) Gradient", answer: 2 },
              { label: "(e) k", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Straight line", statement: "$y=mx+c$: gradient $m$, $y$-intercept $c$." },
              { kind: "principle", name: "Points on a line", statement: "A point lies on a line only if its coordinates satisfy the equation." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute each value of $x$.", working: "2(-2)-1=-5,\\quad 2(0)-1=-1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete the table.", working: "2(3)-1=5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The line crosses the $y$-axis where $x=0$, so $y=c$.", working: "-1", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The gradient is the coefficient of $x$.", working: "2", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Substitute $x=4$ and compare with the $y$ coordinate 8.", working: "2(4)-1=7", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$7\\ne8$, so the point does not lie on L.", working: "\\text{No}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Substitute $y=9$ and solve for $k$.", working: "9=2k-1\\;\\Rightarrow\\;2k=10", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Divide by 2.", working: "k=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $-5,\\,-1,\\,5$ (b) $-1$ (c) $2$ (d) No, since $y=7$ when $x=4$ (e) $k=5$",
            commonErrors: ["Giving the intercept as $(0,1)$.", "Solving $9=2k-1$ as $2k=8$."],
          },
        },
      ],
    },
  ],
};
