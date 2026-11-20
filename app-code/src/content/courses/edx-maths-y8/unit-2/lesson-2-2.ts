import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edm8-u2-lesson-2-2",
  code: "2-2",
  title: "Equations and Inequalities",
  goal: "I CAN solve linear equations, form equations from contexts and show inequalities on a number line.",
  standards: ["Y8 Algebra"],
  vocabulary: [
    { term: "Equation", definition: "A statement that two expressions are equal, which is true only for particular values of the unknown." },
    { term: "Inverse operation", definition: "An operation that undoes another, such as subtraction undoing addition." },
    { term: "Solution", definition: "A value of the unknown that makes an equation or inequality true." },
    { term: "Inequality", definition: "A statement comparing two values using $<$, $>$, $\\le$ or $\\ge$." },
    { term: "Integer solution", definition: "A whole-number value that satisfies an inequality." },
  ],
  concepts: [
    {
      id: "edm8-u2-linear-equations",
      title: "Solving linear equations",
      skill: "Solve linear equations with brackets and unknowns on both sides.",
      lesson: {
        sections: [
          {
            heading: "Balancing",
            body: "Whatever you do to one side of an equation you must do to the other. Use inverse operations to isolate the unknown. For $3x-5=10$: add 5 to get $3x=15$, then divide by 3 to get $x=5$.",
          },
          {
            heading: "Brackets and unknowns on both sides",
            body: "Expand any brackets first. Then collect the $x$ terms on one side (move the smaller $x$ term) and the numbers on the other. For $3(2x-1)=4x+9$: $6x-3=4x+9$, so $2x=12$ and $x=6$. Check by substituting back into both sides.",
          },
        ],
        keyFormulas: [
          { name: "Balance rule", statement: "Do the same to both sides of the equation." },
        ],
        workedExample: {
          problem: "Solve $5x-7=2x+11$.",
          solution: "Subtract $2x$: $3x-7=11$. Add 7: $3x=18$. Divide by 3: $x=6$. Check: $30-7=23$ and $12+11=23$.",
        },
      },
      questions: [
        {
          id: "edm8-u2-linear-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x-5=10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3$" },
              { id: "b", text: "$x=5$" },
              { id: "c", text: "$x=15$" },
              { id: "d", text: "$x=\\frac{5}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Undo addition and subtraction before multiplication and division." },
            ],
            steps: [
              { reasoning: "Add 5 to both sides, then divide by 3.", working: "3x=15,\\quad x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=5$",
            commonErrors: ["Forgetting to divide by 3 (giving 15).", "Subtracting 5 instead of adding it (giving $\\frac{5}{3}$)."],
          },
        },
        {
          id: "edm8-u2-linear-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $4(x-3)=20$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Divide both sides by 4, or expand first." },
            ],
            steps: [
              { reasoning: "Divide both sides by 4 (or expand to $4x-12=20$).", working: "x-3=5", marks: 1, markCode: "M" },
              { reasoning: "Add 3 to both sides.", working: "x=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=8$",
            commonErrors: ["Expanding to $4x-3=20$.", "Subtracting 3 instead of adding."],
          },
        },
        {
          id: "edm8-u2-linear-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $3(2x-1)=4x+9$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance rule", statement: "Do the same to both sides of the equation." },
            ],
            steps: [
              { reasoning: "Expand the bracket.", working: "6x-3=4x+9", marks: 1, markCode: "M" },
              { reasoning: "Collect $x$ terms on one side and numbers on the other.", working: "2x=12", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2. Check: $3(11)=33$ and $24+9=33$.", working: "x=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=6$",
            commonErrors: ["Expanding to $6x-1$.", "Moving $4x$ across without changing its sign."],
          },
        },
        {
          id: "edm8-u2-linear-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation, showing every step of your working.",
          parts: [
            { label: "a", prompt: "Solve $7x-4=17$.", marks: 2 },
            { label: "b", prompt: "Solve $3(x+2)=2x+11$.", marks: 2 },
            { label: "c", prompt: "Solve $\\frac{2x+1}{3}=5$.", marks: 2 },
            { label: "d", prompt: "Explain why the equation $4x-3=4x+5$ has no solution.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x", answer: 3 },
              { label: "(b) x", answer: 5 },
              { label: "(c) x", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance rule", statement: "Do the same to both sides of the equation." },
              { kind: "principle", name: "Inconsistent equation", statement: "If an equation reduces to a false statement such as $0=8$, no value of $x$ satisfies it." },
            ],
            steps: [
              { part: "a", reasoning: "Add 4 to both sides.", working: "7x=21", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by 7.", working: "x=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expand the bracket and subtract $2x$ from both sides.", working: "3x+6=2x+11\\;\\Rightarrow\\;x+6=11", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract 6. Check: $3(7)=21$ and $10+11=21$.", working: "x=5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply both sides by 3, then subtract 1.", working: "2x+1=15\\;\\Rightarrow\\;2x=14", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 2.", working: "x=7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Subtract $4x$ from both sides; the $x$ terms cancel.", working: "-3=5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "This is never true, so no value of $x$ works. (The left side is always 8 less than the right side.)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=3$ (b) $x=5$ (c) $x=7$ (d) Subtracting $4x$ leaves $-3=5$, which is false, so there is no solution.",
            commonErrors: ["Dividing only the first term by 3 in (c).", "Claiming $x=0$ is a solution in (d)."],
          },
        },
      ],
    },
    {
      id: "edm8-u2-forming-inequalities",
      title: "Forming equations and inequalities",
      skill: "Form and solve equations from contexts, and solve and represent inequalities on a number line.",
      lesson: {
        sections: [
          {
            heading: "Forming equations",
            body: "Let a letter stand for the unknown, write expressions for each quantity, then set up an equation. For a triangle with sides $x$, $x+3$ and $2x-1$ and perimeter 30 cm: $x+(x+3)+(2x-1)=30$, so $4x+2=30$ and $x=7$.",
          },
          {
            heading: "Inequalities and the number line",
            body: "Solve inequalities like equations. Show the answer on a number line: an **open** circle for $<$ or $>$ (the value is not included) and a **closed** circle for $\\le$ or $\\ge$ (the value is included). The arrow points to the values that work. For $2x+3<11$, $x<4$, and the largest integer solution is 3.",
          },
        ],
        keyFormulas: [
          { name: "Inequality symbols", statement: "$<$ less than, $>$ greater than, $\\le$ less than or equal to, $\\ge$ greater than or equal to" },
        ],
        workedExample: {
          problem: "Solve $2x+3<11$ and write the largest integer that satisfies it.",
          solution: "$2x<8$, so $x<4$. The largest integer less than 4 is 3.",
        },
      },
      questions: [
        {
          id: "edm8-u2-forming-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A number line has a closed circle at 3 with an arrow pointing to the left. Which inequality does it show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<3$" },
              { id: "b", text: "$x\\le3$" },
              { id: "c", text: "$x>3$" },
              { id: "d", text: "$x\\ge3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Number line notation", statement: "A closed circle means the value is included; an arrow to the left means smaller values." },
            ],
            steps: [
              { reasoning: "The closed circle includes 3 and the arrow points to values less than 3.", working: "x\\le3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x\\le3$",
            commonErrors: ["Using an open circle's meaning ($x<3$).", "Reading the arrow direction the wrong way."],
          },
        },
        {
          id: "edm8-u2-forming-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2x+3<11$. Write down the largest integer value of $x$ that satisfies the inequality.",
          response: { type: "numeric", parts: [{ label: "Largest integer", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Solve as for an equation: do the same to both sides." },
            ],
            steps: [
              { reasoning: "Subtract 3, then divide by 2.", working: "2x<8\\;\\Rightarrow\\;x<4", marks: 1, markCode: "M" },
              { reasoning: "$x$ must be strictly less than 4, so 4 is not included.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<4$; the largest integer is $3$",
            commonErrors: ["Giving 4, forgetting the inequality is strict."],
          },
        },
        {
          id: "edm8-u2-forming-inequalities-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The sides of a triangle are $x$ cm, $(x+3)$ cm and $(2x-1)$ cm. The perimeter is 30 cm. Work out the value of $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter", statement: "The perimeter is the sum of the side lengths." },
            ],
            steps: [
              { reasoning: "Form the equation from the perimeter.", working: "x+(x+3)+(2x-1)=30", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms.", working: "4x+2=30\\;\\Rightarrow\\;4x=28", marks: 1, markCode: "M" },
              { reasoning: "Divide by 4. Check: $7+10+13=30$.", working: "x=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$",
            commonErrors: ["Adding $3-1$ wrongly to get $4x+4$.", "Dividing 30 by 4 without subtracting 2."],
          },
        },
        {
          id: "edm8-u2-forming-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The integer $n$ satisfies both $3n-2>10$ and $2n+5\\le17$.",
          parts: [
            { label: "a", prompt: "Solve the inequality $3n-2>10$.", marks: 2 },
            { label: "b", prompt: "Solve the inequality $2n+5\\le17$.", marks: 2 },
            { label: "c", prompt: "Write down all the integer values of $n$ that satisfy both inequalities.", marks: 2 },
            { label: "d", prompt: "Describe how you would show the combined solution on a number line.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) First integer", answer: 5 },
              { label: "(c) Second integer", answer: 6 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Solve as for an equation: do the same to both sides." },
              { kind: "definition", name: "Number line notation", statement: "Open circle for $<$ and $>$; closed circle for $\\le$ and $\\ge$." },
            ],
            steps: [
              { part: "a", reasoning: "Add 2 to both sides.", working: "3n>12", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by 3.", working: "n>4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract 5 from both sides.", working: "2n\\le12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 2.", working: "n\\le6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Combine: $4<n\\le6$. The integers greater than 4 and at most 6 are 5 and 6.", working: "4<n\\le6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "List the integers.", working: "5,\\;6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Draw an open circle at 4 (4 is not included) and a closed circle at 6 (6 is included).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Join the two circles with a line to show all values between them.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $n>4$ (b) $n\\le6$ (c) $5$ and $6$ (d) Open circle at 4, closed circle at 6, joined by a line.",
            commonErrors: ["Including 4 in the list of integers.", "Leaving out 6 because the inequality looks 'less than'."],
            examinerNote: "(c) ft from (a) and (b).",
          },
        },
      ],
    },
  ],
};
